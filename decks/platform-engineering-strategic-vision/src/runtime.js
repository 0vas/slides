const stage = document.getElementById('stage');
const scenes = [...stage.querySelectorAll('.scene')];
const $ = id => document.getElementById(id);
const motionMedia = matchMedia('(prefers-reduced-motion: reduce)');
const requestedMotion = new URLSearchParams(location.search).get('motion');
const indexDialog = $('index');
const notesDialog = $('notes');
const talkCards = [...stage.querySelectorAll('.bio-talk')];
const talkScene = talkCards[0]?.closest('.scene');
const talkIntervalMs = 2800;
let motion = ['reduce', 'full'].includes(requestedMotion) ? requestedMotion : 'system';
let current = -1;
let step = 0;
let paused = false;
let blackout = false;
let transition = null;
let uiTimer;
let talkIndex = 0;
let talkTimer = null;

function fit() {
  stage.style.setProperty('--scale', Math.min(innerWidth / 1600, innerHeight / 900));
}

function reduced() {
  return motion === 'reduce' || (motion === 'system' && motionMedia.matches);
}

function paintTalks() {
  talkCards.forEach((card, i) => {
    const offset = (i - talkIndex + talkCards.length) % talkCards.length;
    card.dataset.position = offset === talkCards.length - 1 ? 'previous' : (['active', 'next'][offset] ?? 'off');
    card.setAttribute('aria-hidden', String(offset !== 0));
  });
}

function syncTalkRotation() {
  const canRotate = talkCards.length > 1 && talkScene === scenes[current] &&
    !reduced() && !document.body.classList.contains('paused');
  if (!canRotate) {
    clearInterval(talkTimer);
    talkTimer = null;
  } else if (talkTimer === null) {
    talkTimer = setInterval(() => {
      talkIndex = (talkIndex + 1) % talkCards.length;
      paintTalks();
    }, talkIntervalMs);
  }
}

function syncMotion() {
  document.documentElement.classList.toggle('reduced', reduced());
  document.body.classList.toggle('paused', paused || blackout || document.hidden || indexDialog.open || notesDialog.open);
  $('motion-choice').setAttribute('aria-pressed', String(reduced()));
  $('motion-toggle').setAttribute('aria-pressed', String(paused));
  if (reduced()) stopTransition();
  syncTalkRotation();
}

function syncStep(scene) {
  scene.dataset.step = step;
  scene.querySelectorAll('[data-show]').forEach(el => {
    const shown = Number(el.dataset.show) <= step;
    el.classList.toggle('shown', shown);
    el.inert = !shown;
  });
}

function startEntrance(scene, delay = 0) {
  scene.style.setProperty('--entry', delay + 'ms');
  scene.classList.remove('run');
  if (!reduced()) {
    void scene.offsetWidth;
    scene.classList.add('run');
  }
}

function stopTransition() {
  if (!transition) return;
  const { animations, outgoing } = transition;
  transition = null;
  for (const animation of animations) {
    animation.onfinish = null;
    animation.cancel();
  }
  outgoing.classList.remove('leaving');
}

function updateUI() {
  const max = Number(scenes[current].dataset.max);
  $('status').textContent = (current + 1) + ' / ' + scenes.length + (max ? ' · ' + step + '/' + max : '');
  $('prev').disabled = current === 0 && step === 0;
  $('next').disabled = current === scenes.length - 1 && step === max;
  $('note-title').textContent = (current + 1) + ' · ' + scenes[current].dataset.title;
  $('notetext').textContent = scenes[current].dataset.note;
  $('note-next').textContent = scenes[current + 1] ? 'Siguiente · ' + scenes[current + 1].dataset.title : 'Fin de la presentación';
  [...$('indexlinks').children].forEach((btn, i) => btn.setAttribute('aria-current', String(i === current)));
}

function go(index, requestedStep = 0, direction = Math.sign(index - current), animate = true) {
  if (!Number.isInteger(index) || index < 0 || index >= scenes.length) return;
  stopTransition();
  const incoming = scenes[index];
  const outgoing = scenes[current];
  step = Math.max(0, Math.min(Number(incoming.dataset.max), requestedStep));
  syncStep(incoming);
  if (incoming === outgoing) {
    updateUI();
    return;
  }
  if (outgoing) {
    outgoing.classList.remove('current', 'run');
    outgoing.inert = true;
  }
  current = index;
  incoming.inert = false;
  incoming.classList.add('current');
  syncTalkRotation();
  history.replaceState(null, '', '#' + (index + 1));
  updateUI();

  if (!outgoing || !animate || !direction || reduced()) {
    startEntrance(incoming);
    return;
  }
  // Related maps move vertically to keep the horizontal route aligned.
  outgoing.classList.add('leaving');
  const chapter = outgoing.dataset.chapter !== incoming.dataset.chapter;
  const continuation = incoming.dataset.continuity && incoming.dataset.continuity === outgoing.dataset.continuity;
  const axis = continuation ? 'Y' : 'X';
  const shift = percent => 'translate' + axis + '(' + percent + '%)';
  startEntrance(incoming, chapter ? 135 : 0);
  const options = { duration: chapter ? 650 : 540, easing: 'cubic-bezier(.58,.03,.22,1)', fill: 'both' };
  const from = direction > 0 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)';
  const frames = chapter
    ? [{ clipPath: from }, { clipPath: 'inset(0)' }]
    : [{ transform: shift(direction * 100) }, { transform: shift(0) }];
  const animations = [incoming.animate(frames, options)];
  if (!chapter) {
    animations.push(outgoing.animate([
      { transform: shift(0) },
      { transform: shift(direction * -19) }
    ], options));
  }
  transition = { animations, outgoing };
  animations[0].onfinish = stopTransition;
}

function move(direction, skip = false) {
  const max = Number(scenes[current].dataset.max);
  if (!skip && direction > 0 && step < max) return go(current, step + 1);
  if (!skip && direction < 0 && step > 0) return go(current, step - 1);
  const next = current + direction;
  if (next < 0 || next >= scenes.length) return;
  go(next, direction < 0 && !skip ? Number(scenes[next].dataset.max) : 0, direction);
}

function fromHash() {
  const target = /^#\d+$/.test(location.hash) ? Number(location.hash.slice(1)) - 1 : 0;
  go(Math.max(0, Math.min(scenes.length - 1, target)), 0, 0, false);
}

function replay() {
  go(current, 0);
  const scene = scenes[current];
  if (scene === talkScene) {
    clearInterval(talkTimer);
    talkTimer = null;
    talkIndex = 0;
    paintTalks();
    syncTalkRotation();
  }
  scene.querySelectorAll('.loop').forEach(el => el.getAnimations().forEach(animation => { animation.currentTime = 0; }));
  startEntrance(scene);
}

function setBlackout(value) {
  blackout = value;
  $('blackout').classList.toggle('on', blackout);
  syncMotion();
}

function showControls() {
  document.body.classList.add('ui');
  clearTimeout(uiTimer);
  uiTimer = setTimeout(() => document.body.classList.remove('ui'), 1800);
}

async function fullscreen() {
  try {
    if (document.fullscreenElement) await document.exitFullscreen();
    else await document.documentElement.requestFullscreen();
  } catch {
    stage.focus();
  }
}

const actions = {
  prev: () => move(-1),
  next: () => move(1),
  replay,
  'reveal-all': () => go(current, Number(scenes[current].dataset.max)),
  'motion-toggle': () => { paused = !paused; syncMotion(); },
  'motion-choice': () => { motion = reduced() ? 'full' : 'reduce'; syncMotion(); },
  'show-index': () => { indexDialog.showModal(); syncMotion(); },
  'show-notes': () => { notesDialog.showModal(); syncMotion(); },
  fullscreen
};
Object.entries(actions).forEach(([id, action]) => $(id).addEventListener('click', action));
[indexDialog, notesDialog].forEach(dialog => dialog.addEventListener('close', syncMotion));

scenes.forEach((scene, i) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.textContent = String(i + 1).padStart(2, '0') + ' · ' + scene.dataset.title;
  button.addEventListener('click', () => {
    indexDialog.close();
    go(i);
    stage.focus();
  });
  $('indexlinks').append(button);
});

addEventListener('keydown', event => {
  if (indexDialog.open || notesDialog.open || event.altKey || event.metaKey || event.ctrlKey) return;
  const key = event.key.toLowerCase();
  if (blackout) {
    if (key === 'escape' || key === 'b') setBlackout(false);
    return;
  }
  if (event.target.closest?.('a,button,input,select,textarea') && [' ', 'enter'].includes(key)) return;
  const byKey = {
    arrowright: () => move(1, event.shiftKey), ' ': actions.next, pagedown: actions.next,
    arrowleft: () => move(-1, event.shiftKey), pageup: actions.prev,
    home: () => go(0), end: () => go(scenes.length - 1),
    a: actions['reveal-all'], r: replay, m: actions['motion-toggle'], b: () => setBlackout(true),
    f: fullscreen, i: actions['show-index'], p: actions['show-notes']
  };
  if (!byKey[key]) return;
  event.preventDefault();
  byKey[key]();
});

addEventListener('resize', fit);
addEventListener('pointermove', showControls, { passive: true });
addEventListener('hashchange', fromHash);
document.addEventListener('visibilitychange', syncMotion);
motionMedia.addEventListener('change', syncMotion);
fit();
syncMotion();
fromHash();
