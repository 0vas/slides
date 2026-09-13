import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import test from 'node:test'
import { chromium } from 'playwright-chromium'

const css = readFileSync(new URL('../shared/styles/palettes.css', import.meta.url), 'utf8') +
  readFileSync(new URL('../shared/styles/theme.css', import.meta.url), 'utf8').replace('@import "./palettes.css";', '')
const samples = [
  ['topology', '<article class="topology-node"><strong>Identity</strong><small>SAML and SCIM</small></article>', '.topology-node', 'small'],
  ['platform', '<article class="platform-node"><strong>Platform</strong><small>Capabilities</small></article>', '.platform-node', 'small'],
  ['radar', '<article class="radar-copy"><strong>Quality</strong><span>Readable copy</span></article>', '.radar-copy', 'span'],
  ['metrics', '<div class="metric-strip"><article><small>Adoption</small></article></div>', '.metric-strip article', 'small'],
  ['sequence label', '<div class="sequence-message"><span>Request</span></div>', '.sequence-message span', 'span'],
  ['hierarchy', '<div class="hierarchy-root"><strong>Platform</strong></div>', '.hierarchy-root', 'strong'],
  ['Venn center', '<div class="venn-core"><strong>Value</strong></div>', '.venn-core', 'strong'],
  ['matrix quadrants', '<div class="decision-matrix"><div class="matrix-quadrants"><span>Invest</span></div></div>', '.decision-matrix', 'span'],
  ['matrix points', '<div class="matrix-point">A</div>', '.matrix-point', '.matrix-point'],
]

function luminance(rgb) {
  return rgb.slice(0, 3).map(v => v / 255).map(v => v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4)
    .reduce((sum, v, i) => sum + v * [0.2126, 0.7152, 0.0722][i], 0)
}

test('shared panel copy contrasts with its rendered surfaces in light and dark palettes', async () => {
  const browser = await chromium.launch()
  try {
    const page = await browser.newPage()
    const failures = []
    for (const palette of ['crystal', 'aurora', 'carbon', 'lab', 'sunset', 'mono', 'citrus', 'orchid']) {
      for (const [name, markup, surfaceSelector, textSelector] of samples) {
        await page.setContent(`<style>${css}</style><section class="slidev-layout palette-${palette}">${markup}</section>`)
        const { foreground, backgrounds } = await page.evaluate(({ surfaceSelector, textSelector }) => {
          const surface = getComputedStyle(document.querySelector(surfaceSelector))
          const text = getComputedStyle(document.querySelector(textSelector))
          const canvas = document.createElement('canvas')
          canvas.width = canvas.height = 1
          const context = canvas.getContext('2d')
          const rgb = value => {
            context.clearRect(0, 0, 1, 1)
            context.fillStyle = value
            context.fillRect(0, 0, 1, 1)
            return [...context.getImageData(0, 0, 1, 1).data]
          }
          // Both stops of the first surface gradient; exclude decorative border gradients.
          const backgrounds = surface.backgroundImage === 'none'
            ? [surface.backgroundColor]
            : surface.backgroundImage.match(/rgba?\([^)]+\)/g).slice(0, 2)
          return { foreground: rgb(text.color), backgrounds: backgrounds.map(rgb) }
        }, { surfaceSelector, textSelector })
        assert.ok(backgrounds.length, `Missing measurable surface for ${name}`)
        for (const background of backgrounds) {
          const values = [luminance(foreground), luminance(background)].sort((a, b) => b - a)
          const ratio = (values[0] + 0.05) / (values[1] + 0.05)
          if (ratio < 4.5) failures.push(`${palette}/${name}: ${ratio.toFixed(2)}:1`)
        }
      }
    }
    assert.deepEqual(failures, [], 'Body copy must reach 4.5:1 against both panel gradient stops')
  } finally {
    await browser.close()
  }
})
