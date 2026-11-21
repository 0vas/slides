import { readFileSync, writeFileSync } from 'node:fs';
import { storyboard } from './storyboard.mjs';

const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const speaker = JSON.parse(read('../../../data/speaker/speaker.json'));
const qr = 'data:image/svg+xml;base64,' + Buffer.from(read('../../../data/speaker/linkedin-qr.svg')).toString('base64');
const portrait = 'data:image/jpeg;base64,' + readFileSync(new URL('./media/oscar.jpg', import.meta.url)).toString('base64');
const font = name => 'data:font/woff2;base64,' +
  readFileSync(new URL('./media/fonts/' + name + '-latin-wght-normal.woff2', import.meta.url)).toString('base64');
const fonts = [
  ['Space Grotesk', 'space-grotesk', '300 700'],
  ['Manrope', 'manrope', '200 800']
].map(([family, name, weights]) =>
  `/* ${read('./media/fonts/' + name + '-OFL.txt').trim()} */\n` +
  `@font-face{font-family:"${family}";src:url("${font(name)}") format("woff2");font-style:normal;font-weight:${weights};font-display:swap}`).join('\n');
const base = read('./base.html');
const scenes = storyboard(speaker, qr, portrait);
const escape = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[char]);
const copyright = '© 2026 ' + escape(speaker.name);

const sections = scenes.map((scene, i) => {
  const n = String(i + 1).padStart(2, '0');
  const tag = i === 0 ? 'h1' : 'h2';
  const heading = scene.heading ?? escape(scene.title);
  return [
    '<section class="scene ' + scene.theme + ' ' + (scene.layout ?? '') + '" data-title="' + escape(scene.title) +
      '" data-chapter="' + escape(scene.chapter) + '" data-continuity="' + escape(scene.continuity) + '" data-max="' + (scene.steps ?? 0) + '" data-step="0" data-note="' +
      escape(scene.note) + '" aria-label="Lámina ' + n + '. ' + escape(scene.title) + '" inert>',
    '<header class="mast"><span class="mark"><i aria-hidden="true"></i><b>0vas</b></span>' +
      '<small class="mast-copyright">' + copyright + '</small><span class="mast-chapter">' + escape(scene.chapter) + '</span></header>',
    '<div class="eyebrow"><i aria-hidden="true"></i>' + escape(scene.tag) + '</div>',
    '<' + tag + '>' + heading + '</' + tag + '>',
    '<div class="body">' + scene.body + '</div>',
    '<footer class="folio">' + n + ' / ' + scenes.length + '</footer>',
    '</section>'
  ].join('\n');
}).join('\n');

const replacements = new Map([
  ['<!-- TITLE -->', escape(scenes[0].title)],
  ['/* DECK CSS */', [fonts, read('./deck.css'), read('./illustrations.css'), read('./strategy-art.css')].join('\n')],
  ['<!-- SCENES -->', sections],
  ['/* DECK SCRIPT */', read('./runtime.js')]
]);

let html = base;
for (const [marker, value] of replacements) {
  if (html.split(marker).length !== 2) throw new Error('Expected one marker ' + marker);
  html = html.replace(marker, () => value);
}
writeFileSync(new URL('../index.html', import.meta.url), html);
console.log(scenes.length + ' scenes / ' + scenes.reduce((sum, item) => sum + (item.steps ?? 0) + 1, 0) + ' states');
