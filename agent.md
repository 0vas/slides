# Agent Spec

This repository is a multi-deck Slidev workspace. This file is the canonical
spec for AI agents creating, editing, validating, and documenting presentations
in this repo.

## Mission

- Build presentations as code, using Slidev, Markdown, Vue, HTML, and CSS.
- Prioritize usable decks over landing pages or generic documentation.
- Make each deck publishable as static HTML and exportable through the standard
  repo commands.
- Preserve a consistent visual and operational standard across future decks.

## Required Workflow

1. Inspect the existing deck and shared theme before editing.
2. Use the existing structure and components when possible.
3. Make scoped changes only; avoid unrelated refactors.
4. After meaningful changes, run `make check DECK=<slug>`.
5. For visual changes, capture at least the cover and one internal slide at
   1440x900 when a local server is available.
6. Document new reusable decisions in `docs/slide-guidelines.md`.
7. Add or update a checkpoint under `docs/checkpoints/` when the user asks to
   pause, checkpoint, or continue later.

## Commands

- `make install`: install dependencies.
- `make list`: list available decks.
- `make dev DECK=<slug> PORT=4100`: run a deck locally.
- `make build DECK=<slug>`: build one deck.
- `make build-all`: build every deck.
- `make pdf DECK=<slug>`: export PDF.
- `make pptx DECK=<slug>`: export PPTX.
- `make check DECK=<slug>`: syntax-check scripts and build the selected deck.

Default deck:

```bash
make dev DECK=github-enterprise-platform
make check DECK=github-enterprise-platform
```

`make dev` resolves the requested deck first, accepts an unambiguous close deck
name typo, and then frees the requested `PORT` before starting Slidev. Do not
kill a running dev server when the requested deck cannot be resolved.

## Repo Structure

- `decks/<slug>/slides.md`: deck content and per-slide frontmatter.
- `decks/<slug>/components/`: Vue components owned by a deck.
- `decks/<slug>/styles/index.css`: per-deck CSS entrypoint.
- `decks/<slug>/slide-bottom.vue`: custom global bottom layer/navigation.
- `shared/components/`: reusable Vue components shared across decks.
- `shared/styles/theme.css`: shared visual system.
- `scripts/deck.mjs`: multi-deck dev/build/export wrapper.
- `docs/project-state.md`: current architecture and operating state.
- `docs/component-catalog.md`: reusable visual component catalog.
- `docs/style-catalog.md`: available palette and style catalog.
- `docs/new-deck-agent-guide.md`: prompt and workflow for new decks.
- `docs/slide-guidelines.md`: design and content guidelines.
- `docs/checkpoints/`: continuation notes for future sessions.
- `.github/workflows/deploy.yml`: GitHub Pages deployment workflow.
- `decks/component-showcase/`: example deck that exercises the current visual
  component catalog.

## Deck Architecture

- A deck slug must be URL and folder friendly, for example
  `github-enterprise-platform`.
- New decks should start from `decks/_template`.
- Shared behavior belongs in `shared/`; deck-specific visuals belong in the
  deck folder.
- Before creating a component, inspect `docs/component-catalog.md`.
- Put generic, data-driven components in `shared/components/` when they can be
  reused across decks through props or slots.
- Expose shared components to Slidev Markdown through local wrappers in
  `decks/<slug>/components/`, because Slidev auto-imports deck-local
  components.
- Deck-local components may be copied and generalized into a new deck when they
  are still too domain-specific for `shared/components/`.
- Do not add external rendering dependencies unless the deck cannot meet its
  goal without them.
- Do not rely on remote images, scripts, or fonts for core rendering.

## New Deck Agent Flow

- Read `docs/new-deck-agent-guide.md` before scaffolding a new presentation.
- Start from `decks/_template`.
- Choose a palette from `docs/style-catalog.md` and apply it with a
  `palette-*` class in both `class` and `defaults.class`.
- Reuse `data/speaker/person.js` and create a deck-level `data/speaker.js` only
  for talk-specific overrides.
- Store deck-specific images, videos, GIFs, screenshots, and event graphics
  under `decks/<slug>/public/media/`.
- Use the component catalog before inventing new visuals.
- If a new component becomes reusable, document it in
  `docs/component-catalog.md`.
- When the component catalog changes, update `decks/component-showcase/`.
- When the style catalog changes, update `shared/styles/palettes.css`,
  `shared/components/StylePalette.vue`, `README.md`, `docs/style-catalog.md`,
  and `decks/component-showcase/`.
- If the deck becomes stable, add its slug to the `Deploy Slides` workflow
  dropdown.

## Deployment Standard

- GitHub Pages deployments are handled by the `Deploy Slides` workflow.
- The workflow must support manual `workflow_dispatch` deployment with a deck
  selector.
- `actions/configure-pages` must keep `enablement: true` so a first deployment
  can create or enable the Pages site when repository policy allows it.
- Keep `all`, current stable deck slugs, and `custom` as deploy targets.
- When a new deck becomes stable, add its slug to the workflow dropdown so the
  owner can deploy it without remembering exact folder names.
- Selected-deck deploys replace the published Pages artifact with that deck and
  an index pointing to it. Use `all` when the public site should list every deck.

## Visual Standard

- Use a light enterprise-tech visual language by default, with strong contrast,
  subtle grid, and polished product-like surfaces.
- Reserve dark palettes for talks that explicitly need a nocturnal, keynote, or
  high-contrast mood; never make new templates or showcase decks dark by
  default.
- Prefer a real slide experience: dense enough for a talk, minimal enough to be
  readable from a projector.
- Use gradient typography and gradient borders as signature styling.
- Use palette variables from `shared/styles/palettes.css`; do not fork the theme
  for one-off color changes.
- Use a subtle grid and restrained radial gradients for depth.
- Cards and panels should use `border-radius: 8px` unless a component has a
  specific reason to differ.
- Avoid one-color themes; combine blue, green, cyan, purple, amber, and rose as
  semantic accents.
- Never let decorative gradients, overlays, or glows reduce text contrast.
- Avoid nested card-in-card layouts unless the nested element represents a real
  product surface, modal, or repeated item.

## Typography

- Use large type only for true slide headlines and section breaks.
- Keep compact panels, cards, mockups, and navigation text smaller and stable.
- Do not use negative letter spacing.
- Do not scale text directly with viewport width.
- Confirm long Spanish headings fit at 1440x900.
- If a headline is too long, rewrite it or split it intentionally; do not rely
  on clipping or overflow.

## Animation Standard

- Use motion to clarify order, hierarchy, or transformation.
- Prefer smooth `fade`, `slide-left`, and `slide-up` transitions.
- Avoid `view-transition` or flash-like transitions in projector decks.
- Use `v-click` for progressive disclosure.
- Use `v-motion` for components that enter, move, or stage information.
- Keep most durations between 420ms and 680ms.
- Typewriter/code-writing effects are allowed only on selected high-impact
  titles.
- The typewriter effect must not show a vertical caret, border, cursor line, or
  fake terminal prompt unless explicitly requested.
- The typewriter effect should reveal text cleanly without leaving a persistent
  visual mark after the animation.
- Do not animate every object on a slide; the deck should feel intentional, not
  noisy.

## Navigation

- Prefer Slidev native navigation when it can be styled cleanly.
- Native navigation icons must remain visible in play mode and presenter mode.
- Do not hide the native ribbon just to solve contrast; fix icon color,
  background, borders, and hover states instead.
- Avoid duplicating navigation ribbons. Use a custom `slide-bottom.vue` only
  when the native controls cannot support the required workflow.
- The grid action must open the visual Slidev overview with slide thumbnails,
  not a numbers-only picker.
- Keep the mouse cursor visible over controls; do not use `cursor: none`.
- When capturing screenshots, move the mouse outside the deck viewport or away
  from navigation controls.

## Mockups, Graphics, And Screenshots

- Prefer HTML/CSS/Vue mockups over static screenshots when real platform access
  or permissions are not available.
- Mockups should feel like product surfaces, but should avoid copying sensitive
  or private UI.
- Use grid-based top bars when badges sit next to long titles, so text cannot
  collide.
- Use Vue components for diagrams, flows, dashboards, topology maps, radars,
  maturity curves, and platform surfaces.
- Prefer the shared catalog for common visual primitives: browser mockups,
  metrics, comparison tables, decision matrices, hierarchy trees, icon grids,
  timelines, swimlanes, pyramids, Venn diagrams, callout stacks, quotes,
  architecture layers, media frames, and 3D stages.
- Use `BrowserMockup` for generic product surfaces; keep `GitHubMockup` for
  GitHub-specific screens.
- Use `Shape3DStage` for 3D slides and validate that its canvas renders nonblank
  in Playwright screenshots.
- Screenshots are acceptable only when the user provides them or asks for them,
  and when they are readable at presentation size.
- Do not use blurry, cropped, stock-like, or purely atmospheric visuals when the
  audience needs to understand a platform concept.

## Content Standard

- Present GitHub from a platform perspective, not only from the developer
  workflow.
- Connect governance, identity, repository ownership, security, automation,
  Actions, Advanced Security, Copilot, and adoption metrics.
- Include practical enterprise operating lessons, not only feature lists.
- Prefer short phrases written for spoken delivery.
- For a 30 minute talk, target roughly 24-32 slides.
- Use section breaks every 5-7 slides to reset attention.
- Include a clear final takeaway or operating model.

## Speaker Profile Slides

- Speaker/profile slides must be data-driven, not hardcoded only in Markdown.
- Root personal data is canonical in `data/speaker/speaker.json`, with
  `data/speaker/person.js` as the Vite-facing wrapper. These files are for
  stable owner metadata shared by all decks: name, email, role/headline,
  organization, location, public profiles, QR image references, profile image
  references, reusable roles, and reusable tags.
- Deck-specific speaker files may exist at `decks/<slug>/data/speaker.js`, but
  they must import `person` from `data/speaker/person.js` and override only
  talk-specific fields such as `talkRole`, deck-specific roles, or deck-specific
  tags.
- Prefer a `data/<name>.js` file plus a reusable Vue component when a deck has
  additional data beyond the root `person` object.
- Include profile metadata organically:
  - name,
  - email when the owner wants it public,
  - role/headline,
  - organization,
  - relevant affiliations,
  - GitHub handle,
  - LinkedIn handle,
  - X/Twitter handle when relevant,
  - ORCID only when the speaker uses it or the talk has research context.
- Do not overload the profile slide with a full CV.
- The profile slide should connect the speaker's background to the talk topic.
- QR codes must be real image assets, not AI-generated fake QR codes.
- Until the QR image is provided, use a clear visual placeholder and document
  the expected file path.
- Store shared speaker assets next to the speaker data:

```text
data/speaker/linkedin-qr.svg
```

- If an asset is imported from `data/speaker/person.js`, use Vite asset imports
  with `?url`, for example `./linkedin-qr.svg?url`.
- Use `import.meta.env.BASE_URL` only for string paths that intentionally point
  to a deck's `public/` folder.
- Deck-specific media assets must live under:

```text
decks/<slug>/public/media/
```

- Keep the root data as the source of truth. Do not duplicate unchanged personal
  metadata inside Markdown slides or deck-specific data files.
- Never use a QR screenshot that is blurry, cropped, or impossible to scan.

## Current GitHub Enterprise Deck Requirements

- Topic: GitHub as an enterprise platform.
- Audience: intermediate, familiar with GitHub basics.
- Duration: around 30 minutes.
- Tone: practical, real-world platform governance, not a beginner tutorial.
- Must include GitHub Advanced Security, Copilot, Actions, governance, scaling,
  and GitHub Enterprise trial.
- Must not include camera/recording UI as part of the deck experience.
- Must use strong but controlled animations and visual mockups.

## Validation

- Run `make check DECK=<slug>` after meaningful changes.
- Treat build warnings from dependencies as non-blocking only when the build
  exits successfully and the warning is unrelated to authored code.
- Validate at least:
  - cover slide,
  - one dense content slide,
  - one animated/mockup slide,
  - navigation visibility.
- Check for:
  - text overlap,
  - text clipping,
  - unreadable contrast,
  - badges colliding with titles,
  - native Slidev UI leaking into the deck,
  - mouse pointer artifacts,
  - excessive or distracting transitions.

## Documentation Rules

- Update `docs/slide-guidelines.md` when a reusable design rule changes.
- Update `README.md` and `docs/component-catalog.md` in the same commit that
  creates, deletes, renames, promotes, or meaningfully changes a visual
  component.
- Update `decks/component-showcase/` in the same commit when the visible
  component catalog changes.
- If a component is promoted to `shared/components/`, update
  `shared/components/README.md` in the same commit.
- Update the relevant checkpoint when pausing a workstream.
- Keep checkpoint notes factual:
  - current state,
  - important files,
  - decisions made,
  - known issues,
  - validation commands,
  - local preview URL.
- Do not document temporary experiments as standards unless the user approves
  them or they become part of the final deck direction.
