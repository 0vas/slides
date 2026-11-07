import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'

const html = readFileSync(new URL('../decks/asesoria-ia-devops-plataforma/index.html', import.meta.url), 'utf8')
const slides = [...html.matchAll(/<section class="([^"]*slide[^"]*)"[\s\S]*?<\/section>/g)].map((m) => ({
  classes: m[1],
  body: m[0],
}))

test('uses F13 slide-to-slide transition contract (startViewTransition + deck-exit/reveal + fallback)', () => {
  assert.match(html, /document\.startViewTransition/)
  assert.match(html, /native-deck-transitions/)
  assert.match(html, /deck-backward/)
  assert.match(html, /::view-transition-old\(deck\)/)
  assert.match(html, /::view-transition-new\(deck\)/)
  assert.match(html, /@keyframes deck-exit/)
  assert.match(html, /@keyframes deck-reveal-forward/)
  assert.match(html, /@keyframes deck-reveal-backward/)
})

test('separates the presentation into the 3 exact blocks from the user message', () => {
  assert.match(html, /1\.\s*IA en los flujos de DevOps/i)
  assert.match(html, /2\.\s*IA en la plataforma de ingenier[ií]a/i)
  assert.match(html, /3\.\s*Roles cr[ií]ticos para los puntos 1 y 2/i)
  const blockScenes = slides.filter((s) => /\bblock-divider\b/.test(s.classes))
  assert.equal(blockScenes.length, 3, 'Expected exactly 3 block divider scenes')
  assert.match(html, /data-block="[123]"/)
})

test('favors illustrative SVG scenes and avoids generic card-box grids', () => {
  const bannedBoxGrids = ['agenda-rail', 'cards-3', 'trio', 'risk-grid', 'cat-cell', 't-card', 'brake']
  for (const token of bannedBoxGrids) {
    assert.ok(!html.includes(token), `Should not use generic box-grid class "${token}"`)
  }
  const svgScenes = slides.filter((s) => /<svg\b/.test(s.body))
  assert.ok(svgScenes.length >= 16, `Expected at least 16 illustrative SVG scenes, got ${svgScenes.length}`)
  for (const [idx, s] of slides.entries()) {
    const articles = (s.body.match(/<article\b/g) || []).length
    assert.ok(articles <= 2, `Slide ${idx + 1} has ${articles} <article> boxes; avoid box grids (max 2)`)
  }
})

test('has a proper F13-like introduction before the three blocks', () => {
  assert.match(html, /speaker\.jpg|speaker-portrait|bio-keynote/)
  assert.match(html, /intro-promise|why-now|agenda-route/)
  const firstBlock = slides.findIndex((s) => /\bblock-divider\b/.test(s.classes))
  assert.ok(firstBlock >= 5, `Introduction should occupy at least 5 slides before block 1, got first block at ${firstBlock}`)
})

test('uses Kowalski-grade entrance choreography and strong easing', () => {
  assert.match(html, /cubic-bezier\(\.23,\s*1,\s*\.32,\s*1\)/)
  assert.match(html, /enter-lead|enter-support|choreograph/)
  assert.match(html, /--ease-out:\s*cubic-bezier/)
})

test('opens each block with the neural brain mount and keeps anatomy takeaway readable', () => {
  const dividers = slides.filter((s) => /\bblock-divider\b/.test(s.classes))
  assert.equal(dividers.length, 3)
  for (const d of dividers) {
    assert.match(d.body, /neural-mount|neural-stage/)
    assert.match(d.body, /block-copy/)
  }
  assert.match(html, /anatomy-scene[\s\S]*scene-takeaway/)
  assert.match(html, /\.anatomy-scene \.scene-takeaway/)
  assert.match(html, /\.layer-notes li\{[^}]*grid-template-columns/)
})

test('never forces display:flex on inactive slides via scene class overrides', () => {
  // A bare `.anatomy-scene{display:flex}` (or similar) keeps that slide painted above every other slide.
  assert.doesNotMatch(html, /^\s*\.(anatomy-scene|block-divider|key-cover|bio-keynote)\s*\{[^}]*\bdisplay\s*:\s*flex\b/m)
  assert.match(html, /\.slide\.active\s*\{\s*display\s*:\s*flex\s*\}/)
})

test('balance scene tips via CSS data-step and adoption keeps narrative stages', () => {
  assert.match(html, /\.balance-scene\[data-step="0"\][^{]*\{[^}]*rotate\(-8deg\)/)
  assert.match(html, /\.balance-scene\[data-step="2"\][^{]*\{[^}]*rotate\(0deg\)/)
  assert.match(html, /class="balance-arm"/)
  assert.match(html, /class="adopt-stages"/)
  assert.match(html, /class="champion-call beat"/)
  assert.match(html, /animation-duration:\s*820ms/)
})
