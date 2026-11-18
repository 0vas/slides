# Muchas empresas, una forma de operar

## Intake

- Topic/title: Muchas empresas, una forma de operar
- Audience: liderazgo / plataforma / ingeniería en contexto multi-empresa o M&A
- Audience level: intermediate / practitioner
- Duration: ~27 slides (static HTML cinematic deck)
- Desired outcome: acuerdo compartido sobre base operativa, módulos, OSS interno e integraciones
- Required points: base antes de la primera carga; jerarquía y gobierno; módulos versionados; marketplace interno; estandarizar uniones
- Tone/context: Spanish, advisory / proposal
- Constraints: standalone HTML deck (F13-style runtime); publish via `0vas/slides`
- Visual background mode: multi-theme tokens (deep / ink / paper / teal)
- Asset policy: self-contained `index.html`; Google Fonts for Inter + Newsreader
- Deliverables: static HTML deck on slides.0vas.com

## Assumptions

- Slug: `muchas-empresas-una-forma-de-operar`
- Source imported as provided HTML document (WhatsApp share)
- No client-confidential figures invented

## Validation plan

- `make check DECK=muchas-empresas-una-forma-de-operar`
- Confirm deck appears in `make list` and Deploy Slides dropdown
