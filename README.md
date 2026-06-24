# Slides

[![Deploy Slides](https://github.com/ovas04/slides/actions/workflows/deploy.yml/badge.svg)](https://github.com/ovas04/slides/actions/workflows/deploy.yml)
[![Release Package](https://github.com/ovas04/slides/actions/workflows/release.yml/badge.svg)](https://github.com/ovas04/slides/actions/workflows/release.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](docs/release-workflow.md)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)
[![Slidev](https://img.shields.io/badge/Slidev-52.15.2-2B90B6.svg)](https://sli.dev)

Agent-ready Slidev workspace for building, validating, versioning, and
publishing reusable presentation decks.

This repository is designed for an agent role called `slides-builder`.
`slides-builder` turns a user prompt into a clean deck: it asks for missing
critical context, writes a local brief, reuses the component catalog, organizes
media assets, validates the result, and leaves the deck ready to build, export,
deploy, or release.

## Who This Is For

- Speakers who want presentations as code.
- AI agents that need clear rules instead of ad-hoc slide generation.
- Teams that want reusable components, styles, speaker data, and publishing
  workflows across decks.

Human entry point: this README.
Agent entry point: [AGENTS.md](AGENTS.md) and
[.agents/skills/](.agents/skills/).

Pull requests are welcome. See [CONTRIBUTING.md](CONTRIBUTING.md) for the
quality gates and PR flow.

## Repository Structure

```text
decks/
  github-enterprise-platform/
    slides.md
    components/
    public/
      media/
  _template/
    slides.md
    components/
    data/
    public/
      media/
data/
  speaker/
    README.md
    speaker.json
    person.js
    linkedin-qr.svg
  person.js              # compatibility re-export
docs/
  adr/
  component-catalog.md
  deck-brief-template.md
  deck-generation-workflow.md
  new-deck-agent-guide.md
  release-workflow.md
  slide-guidelines.md
  style-catalog.md
shared/
  components/
  styles/
    palettes.css
    theme.css
scripts/
  deck.mjs
  release.mjs
```

- `decks/<slug>/slides.md`: main deck entry point.
- `decks/<slug>/public/media/`: images, videos, GIFs, screenshots, logos, and
  deck-owned assets.
- `decks/<slug>/components/`: deck-owned Vue components and wrappers.
- `data/speaker/`: global speaker data and shared personal assets.
- `shared/components/`: reusable data-driven Vue components.
- `shared/styles/theme.css`: shared visual system.
- `shared/styles/palettes.css`: reusable deck palettes.
- `shared/public/favicon.svg`: canonical project favicon copied into every
  generated home and deck.
- `docs/`: human and agent documentation.
- `.agents/skills/`: open-standard, vendor-neutral reusable workflows for
  agents.
- `.github/agents/slides-builder.agent.md`: Copilot-compatible adapter for the
  canonical `slides-builder` role.

## Available Decks

| Deck | Purpose | Command |
| --- | --- | --- |
| `github-enterprise-platform` | Main talk about GitHub as an enterprise platform. | `make dev DECK=github-enterprise-platform` |
| `component-showcase` | Reference deck for the current component and style catalog. | `make dev DECK=component-showcase` |

`decks/_template/` is not a finished talk. It is a clean starting point with
lorem ipsum, local wrappers, and minimal examples.

## Work With Slides-builder

Give `slides-builder` the talk objective, audience, duration, tone,
constraints, required points, available assets, and desired visual direction.
If critical information is missing, the agent must ask before scaffolding.

Recommended flow:

```text
Intake -> Brief -> Plan -> Tasks -> Implement -> Validate -> Handoff
```

### Example Prompt

When the prompt is executed from this repository, `AGENTS.md` and the project
skills already define how the agent must work. The user prompt should focus on
the presentation itself. Copy and adapt this example:

```text
Create a presentation titled "Platform Engineering That Teams Actually Adopt".

Audience: engineering managers, platform engineers, and senior developers.
Audience level: intermediate.
Duration: 30 minutes.
Event context: an internal engineering conference where teams are evaluating
whether to invest in a platform organization.

Goal: attendees should leave with a practical operating model for building,
adopting, and measuring an internal developer platform.

Core message: a platform succeeds when teams choose to use it, not merely when
the organization deploys more tools.

The presentation must cover:
- the difference between a platform and a collection of tools,
- product thinking and developer experience,
- golden paths and self-service workflows,
- governance and security without unnecessary friction,
- adoption and outcome metrics,
- a phased implementation roadmap.

Tone: practical, candid, and executive-friendly. Use concrete examples and
delivery trade-offs. Avoid marketing language and beginner-level definitions.

Presentation constraints:
- reserve the final 5 minutes for questions,
- do not depend on a live demo,
- keep product references vendor-neutral,
- include a concise closing takeaway and recommended next steps.

Available material: I do not have images or diagrams yet. I can provide the
event logo later if needed.

Visual preference: a light, modern, editorial style with restrained motion.
Favor diagrams, one clear data visualization, and a few strong images over
dense text or dashboard-like slides.
```

Every new deck must have `decks/<slug>/deck.brief.md` created from
[docs/deck-brief-template.md](docs/deck-brief-template.md). The brief is the
source of truth for requirements, assumptions, asset plan, visual mode, and
validation.

## Agent Discovery

- `.agents/skills/` is the canonical project skill location and is discovered
  directly by Agent Skills-compatible tools, including GitHub Copilot.
- `.github/agents/slides-builder.agent.md` exposes the `slides-builder` custom
  agent to GitHub Copilot CLI and supported Copilot surfaces.
- `.github/copilot-instructions.md` is a thin Copilot entry point;
  `AGENTS.md` remains the canonical repository specification.
- Run `npm run check:agent` to validate all discovery assets.
- Restart Copilot CLI after pulling changes so it reloads project agents and
  skills, then select `slides-builder` with `/agent` or `--agent slides-builder`.

## Required Prompt Inputs

A useful prompt should include:

- topic or title,
- audience and audience level,
- duration,
- desired outcome,
- required points,
- tone and context,
- constraints,
- available assets,
- visual background mode: light, dark, or black/keynote.

If only non-critical details are missing, such as slug, palette, or suggested
assets, the agent may infer them and record the assumption in the brief.

## Install

```bash
npm install
```

Or:

```bash
make install
```

## Daily Commands

```bash
make list
make dev DECK=github-enterprise-platform
make build DECK=github-enterprise-platform
make check DECK=github-enterprise-platform
make build-all
make pdf DECK=github-enterprise-platform
make pptx DECK=github-enterprise-platform
npm run check:agent
```

Equivalent npm commands:

```bash
npm run list
npm run dev -- github-enterprise-platform
npm run build -- github-enterprise-platform
npm run build:all
npm run export:pdf -- github-enterprise-platform
npm run export:pptx -- github-enterprise-platform
```

`make dev` validates the requested deck, accepts an unambiguous close typo, and
frees the requested `PORT` if another process is listening there.

PPTX export is a static delivery format. Slidev exports PPTX slides as images,
so native PowerPoint click animations are not preserved. For live click-driven
motion, use the hosted Slidev web deck. For PPTX handoff, model click steps as
separate Slidev click states or explicit slides. See
[docs/pptx-export-limits.md](docs/pptx-export-limits.md).

## Versioning And Release

The workspace uses SemVer. Version `1.0.0` is the first stable release of the
`slides-builder` workspace.

Prepare a release:

```bash
npm run release:prepare -- 1.0.0
make release-check VERSION=1.0.0
make build-all
```

After committing and pushing the version change, run the **Release Package**
workflow with `version = 1.0.0`. The workflow validates the repo, creates the
annotated tag `v1.0.0`, creates `slides-builder-1.0.0.tgz`, and publishes a
GitHub Release.

Details:

- [docs/release-workflow.md](docs/release-workflow.md)
- [docs/adr/0002-slides-builder-release-workflow.md](docs/adr/0002-slides-builder-release-workflow.md)

## Deployment

The **Deploy Slides** workflow publishes GitHub Pages:

- `target = all`: publish every deck under `dist/<deck>/`.
- `target = <slug>`: publish one deck.
- `target = custom`: provide a deck slug manually.

Before the first deployment, enable GitHub Pages in **Settings > Pages** and set
the source to **GitHub Actions**. The workflow does not try to create the Pages
site because some repository or organization policies block that call for
`GITHUB_TOKEN`.

The generated home at `dist/index.html` renders deck cards with preview, title,
and description from each deck frontmatter.

## Media And Data Rules

- Deck-owned media lives in `decks/<slug>/public/media/`.
- Reference public assets as `media/<file>` from Markdown or props.
- From Vue components, build public asset paths with `import.meta.env.BASE_URL`.
- Stable speaker data and shared personal assets live in `data/speaker/`.
- Deck-specific speaker overrides live in `decks/<slug>/data/speaker.js`.
- Future decks may use SVG Repo icons and editorial images from Pexels,
  Unsplash, Pixabay, or similar sources when they improve comprehension. Always
  download assets locally and record source/license notes.

## Components

Reusable components live in `shared/components/`. Slidev auto-imports only
deck-local components, so use a thin wrapper under `decks/<slug>/components/`
when a deck needs a shared component.

Current shared components include:

| Component | Primary Use |
| --- | --- |
| `SpeakerProfile` | Data-driven speaker intro with QR and public profiles. |
| `TypingTitle` | Clean title reveal for covers and section breaks. |
| `PlatformMap` | Stages, domains, or transformation maps. |
| `EnterpriseTopology` | Compact enterprise dependency map. |
| `GovernanceGrid` | 2x2 governance or operating model grid. |
| `SecurityRadar` | Capability, risk, or posture radar. |
| `MaturityCurve` | Maturity stages and decisions. |
| `GraphDiagram` | SVG graph of relationships. |
| `SequenceDiagram` | Actor/message sequence view. |
| `MermaidDiagram` | Styled Mermaid wrapper for curated syntax. |
| `MermaidSyntaxCatalog` | Mermaid syntax decision map. |
| `MermaidJourney` | Mermaid user journey preset. |
| `MermaidRoadmap` | Mermaid timeline preset. |
| `MermaidQuadrant` | Mermaid quadrant chart preset. |
| `EChart` | Animated ECharts wrapper for charts and dynamic diagrams. |
| `MediaFrame` | Image, video, GIF, or media placeholder frame. |
| `StylePalette` | Visual palette reference. |
| `BrowserMockup` | Generic product or dashboard mockup. |
| `MetricStrip` | Large KPI row. |
| `ComparisonTable` | Visual comparison table. |
| `DecisionMatrix` | 2x2 decision matrix. |
| `HierarchyTree` | Root and branch hierarchy. |
| `IconGrid` | Compact icon/concept grid. |
| `ShapeSystem` | Reusable 2D shape language. |
| `TimelineFlow` | Horizontal milestone timeline. |
| `SwimlaneFlow` | Role or system swimlanes. |
| `PyramidDiagram` | Layered pyramid. |
| `VennDiagram` | Three-domain intersection. |
| `CalloutStack` | Stack of insights, risks, or decisions. |
| `QuoteFrame` | Editorial quote or insight. |
| `ArchitectureLayers` | Horizontal architecture layers. |
| `Shape3DStage` | Three.js 3D stage. |

See [docs/component-catalog.md](docs/component-catalog.md) for usage rules.

## Styles And Palettes

Decks choose a palette through `class` and `defaults.class`:

```md
---
class: my-deck palette-crystal
defaults:
  class: my-deck palette-crystal
---
```

`palette-crystal` is the recommended default for new decks, templates, and the
showcase. Dark and black/keynote modes must be deliberate and recorded in the
deck brief.

See [docs/style-catalog.md](docs/style-catalog.md).

## Operational Documentation

- [Project state](docs/project-state.md)
- [New deck agent guide](docs/new-deck-agent-guide.md)
- [Deck generation workflow](docs/deck-generation-workflow.md)
- [Deck brief template](docs/deck-brief-template.md)
- [Component catalog](docs/component-catalog.md)
- [Style catalog](docs/style-catalog.md)
- [Slide guidelines](docs/slide-guidelines.md)
- [PPTX export limits](docs/pptx-export-limits.md)
- [Release workflow](docs/release-workflow.md)
- [Reusable agent skills](.agents/skills/)

Maintenance rule: when a component, palette, workflow, or public contract
changes, update the matching README, docs, showcase, and validation commands in
the same commit.
