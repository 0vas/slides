# IA en DevOps y la plataforma

## Intake

- Topic/title: IA en DevOps y la plataforma
- Audience: DevOps Engineers
- Audience level: intermediate / practitioner
- Duration: 1 hour (~36 scenes)
- Desired outcome: shared map of where AI enters DevOps flows and the engineering platform, plus which roles must own the change
- Required points:
  1. IA en los flujos de DevOps
  2. IA en la plataforma de ingeniería
  3. Roles críticos para los puntos 1 y 2
- Tone/context: Spanish, internal advisory (not keynote marketing)
- Constraints: publish via `0vas/slides` → `slides.0vas.com`; HTML cinematic format matching F13 rules; no invented metrics
- Visual background mode: dual theme using 0vas.com light/dark tokens; accent scenes allowed

## Assumptions

- Format: standalone HTML cinematic deck (same portal path as F13 / Más allá del título)
- Palette: 0vas.com (`#6f4bf2` / `#9d7bff`, light `#f7f5fc`, dark `#0d0a17`)
- Speaker: shared `data/speaker` identity rendered into the HTML profile scene
- Slug: `asesoria-ia-devops-plataforma`
- No client-specific stack or confidential figures

## Asset plan

- Local SVG/iconography only; optional cover capture after build
- Theme toggle persisted in `localStorage`

## Validation plan

- `make check DECK=asesoria-ia-devops-plataforma`
- `SITE_BASE_PATH=/ make build-all` when packaging
- Browser review of cover, speaker, chapter openers, dense role map, close at 1440x900
- Confirm portal GitHub icon → `https://github.com/0vas/slides-personal`


## Rewrite 2026-11-05
Rebuilt on F13 runtime craft: beats, scene-running entries, presenter chrome, orbit/flow/dial/layer visuals, dual 0vas theme.

## Rewrite 2026-11-06 (F13 summit quality)
- Feedback addressed: deck felt simple and box-heavy; needed a real introduction and illustrative scenes.
- Structure: 36 scenes. Intro (6): cover with pixel art, photo bio (`media/speaker.jpg` + LinkedIn QR), promise map, why-now SDLC loop, tension split, agenda route. Then 3 `block-divider` scenes (`data-block` 1–3), each followed by 7–9 illustrative SVG scenes, synthesis, agreements, thanks, annex.
- Motion (Emil Kowalski `animate` / `choreograph`): `enter-lead` / `enter-support` / `enter-deco` / `enter-art` with hand-tuned, non-uniform delays; `--ease-out: cubic-bezier(.23,1,.32,1)`; beats are interruptible transitions; pixel/SVG ambient loops pause with M, blackout or hidden tab; reduced motion collapses to opacity.
- Slide changes keep the F13 `startViewTransition` contract (deck-exit / deck-reveal-forward / deck-reveal-backward).
- Speaker notes live in each section's `aside.notes`; titles and timings in `data-title` / `data-secs` (~57 min + Q&A).
- Validation: `node --test scripts/asesoria-deck.test.mjs`, `make check DECK=asesoria-ia-devops-plataforma`, Playwright capture of all 36 scenes fully revealed in dark and light at 1440x900 with an out-of-bounds check.
