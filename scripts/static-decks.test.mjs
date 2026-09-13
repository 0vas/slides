import assert from 'node:assert/strict'
import { mkdtempSync, mkdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import test from 'node:test'
import { createHash } from 'node:crypto'
import { staticDeckMeta, buildStaticDeck } from './static-decks.mjs'

test('preserves the original F13 HTML supplied for publication', () => {
  const source = readFileSync(new URL('../decks/abstraccion-o-friccion-f13/index.html', import.meta.url))
  assert.equal(createHash('sha256').update(source).digest('hex'), '5389906f33215038a0769202f05871f39b49cf810503e9cdbf306f33524977ef')
})

test('publishes standalone HTML and assets byte for byte, without publishing metadata', (t) => {
  const root = mkdtempSync(join(tmpdir(), 'static-deck-'))
  t.after(() => rmSync(root, { recursive: true, force: true }))
  const source = join(root, 'source')
  const output = join(root, 'output')
  mkdirSync(join(source, 'public', 'media'), { recursive: true })
  const html = Buffer.from('<!doctype html>\r\n<title>Abstracción</title><script>location.hash="#1"</script>\r\n')
  writeFileSync(join(source, 'index.html'), html)
  writeFileSync(join(source, 'public', 'media', 'icon.svg'), '<svg/>')
  writeFileSync(join(source, 'deck.json'), JSON.stringify({ title: 'Abstracción', description: 'F13 2026' }))
  buildStaticDeck(source, output)
  assert.deepEqual(readFileSync(join(output, 'index.html')), html)
  assert.equal(readFileSync(join(output, 'media', 'icon.svg'), 'utf8'), '<svg/>')
  assert.throws(() => readFileSync(join(output, 'deck.json')), { code: 'ENOENT' })
  assert.deepEqual(staticDeckMeta(source), { title: 'Abstracción', description: 'F13 2026' })
})

test('requires explicit gallery metadata for a standalone deck', (t) => {
  const root = mkdtempSync(join(tmpdir(), 'static-deck-'))
  t.after(() => rmSync(root, { recursive: true, force: true }))
  writeFileSync(join(root, 'deck.json'), JSON.stringify({ title: 'Incomplete' }))
  assert.throws(() => staticDeckMeta(root), /title and description/)
})
