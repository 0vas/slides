# Abstracción o fricción — portal import

Import the supplied `abstraccion-o-friccion-f13.html` unchanged as another deck
in the existing home, then push to the personal fork for GitHub Pages deployment.

- Content, audience, duration, speaker, styling, media, motion and navigation:
  already defined by the supplied HTML; preserve all 26 slides without editing.
- Canonical file: `index.html`, moved from the supplied filename without rewriting.
- Original SHA-256: `5389906f33215038a0769202f05871f39b49cf810503e9cdbf306f33524977ef`.
- Gallery metadata: `deck.json`, outside the document.
- Asset plan: keep embedded assets intact; capture the actual first slide into
  `public/media/cover.png` for the existing home card.
- Scope: support standalone HTML in deck discovery, build, local preview and
  Pages deployment; retain existing Slidev commands and decks.
- Acceptance: source and built HTML have identical bytes; home lists all five
  decks; imported deck opens directly with working navigation and media.
- Validation: `make check DECK=abstraccion-o-friccion-f13`,
  `SITE_BASE_PATH=/ make build-all`, browser inspection of home and representative
  deck navigation at 1440x900, and production HTTP/hash verification.
- PDF/PPTX through Slidev apply only to Slidev sources; the HTML remains a live
  browser presentation with its original controls.

## Validation evidence — 2026-09-13

- `make check DECK=abstraccion-o-friccion-f13`: passed (including the original
  document hash, byte-preserving publication, and deployment path tests).
- `SITE_BASE_PATH=/ make build-all`: passed for all five decks after `npm ci`
  repaired incomplete local dependencies; no dependency files changed.
- Browser: all 26 slide hash routes, keyboard next/home navigation and index
  selection passed with no JavaScript errors. Inspected cover, speaker,
  journey and final annex screenshots at 1440x900.
- Home: inspected at 1440x900 and 390x844; all five cards and links work,
  cover loads, imported deck opens in a new tab, no horizontal mobile overflow.
- Source, built output and local HTTP responses match the original SHA-256.
- Local evidence: `tmp/import-qa/` (ignored); portal at `http://127.0.0.1:4173/`.
- GitHub push and production verification require a valid authenticated session.
