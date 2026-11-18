# InnerSource Summit 2026 - existing HTML deck import

## Intake and scope

- Request: publish the current Summit presentation as one more deck in 0vas/slides,
  preserving the existing portal and all other decks.
- Title: GitOps in InnerSource: A Roadmap for Enterprise Infrastructure Governance.
- Speakers: Oscar Lobaton Salas and Juan David Arguello Plata; supplied portraits,
  public LinkedIn profiles and real QR codes are already part of the cover/closing.
- Audience: InnerSource Summit community, platform engineers and technical leaders;
  mixed/intermediate. English conference talk; approx. 30-minute slot, Oscar opening
  around 8-10 minutes.
- Goal: explain the move from shared components to a shared platform foundation,
  the autonomy/governance boundaries, and GitOps as its operational bridge.
- Required content: the existing 25 slides, including hidden 9 and optional 22,
  context engineering, Juan's architecture/RASCI section, and social closing.
- Background: preserve the supplied Summit light/dark/night palette and fonts.
- Constraints: import, not redesign. No Slidev wrapper, shared CSS injection,
  replacement player, extra slides, or changes to the root speaker data.
- Assets: reuse the supplied portraits, logos, QR SVGs, diagrams and MP4 only;
  no new stock imagery or components are appropriate for this preservation task.
  Retain upstream asset provenance; third-party artwork rights remain as upstream.

## Implementation

Use the established standalone HTML path (as F13): index.html + deck.json + public/.
Copy assets into public/media/; the only HTML adaptation is assets/ -> media/ so
all original relative asset references work under this deck's URL. Keep scripts,
styles, notes, native navigation and timed opening sequences otherwise intact.
Add a real rendered cover thumbnail and a manual deployment dropdown entry.
Deploy all decks through the unchanged existing workflow, never a selected-only
artifact that would replace the public gallery.

## Acceptance and validation

- Imported HTML equals the supplied HTML after only asset path normalization;
  built HTML equals the imported source byte for byte.
- The existing deck files, shared components, build scripts and styles stay intact.
- Gallery discovers this deck beside all existing decks and resolves its cover.
- All 25 routes, visible states, local media, opening automatic progression,
  manual Juan controls, hidden slides, optional H detour, closing links and QR load.
- Run make check DECK=innersource-summit-2026 and SITE_BASE_PATH=/ make build-all.
- Inspect gallery plus imported slides at 1440x900; verify deployed HTML/asset
  hashes and site gallery after successful GitHub Actions deployment.
- Slidev PDF/PPTX export does not apply to this standalone deck; use its print mode.

Original HTML SHA-256: `15741e3a9809d3735f6cfb3aed47dc604a660791817aa1ac8680c81c4e5da1dd`.

## Validation evidence - 2026-11-12

- Source: jdarguello/innersource-summit-2026, local final HTML after f379f6b.
- make check DECK=innersource-summit-2026: passed.
- SITE_BASE_PATH=/ make build-all: passed for all nine decks.
- Browser at 1440x900: reviewed 87 visible states including optional slide 22;
  no imported-deck bounds, resource, or JavaScript failures. Video plays.
- Opening one-click sequence, pause, replay, reveal-all, stale timer cancellation,
  hidden slide skipping, Juan's manual steps, context update and print: passed.
- Gallery at 1440x900 and 390x844: nine cards/links, real cover and no mobile overflow.
  Existing Slidev iframe previews request Wake Lock, which headless browsers deny;
  this pre-existing permission warning does not affect the imported deck.
- Exact source preservation verified after assets/ -> media/ normalization;
  standalone output is byte-identical to its imported HTML.
- No shared component, theme, player, dependency, build script or existing deck edited.
