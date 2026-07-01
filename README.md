# Slides

[![Deploy Slides](https://github.com/0vas/slides/actions/workflows/deploy.yml/badge.svg)](https://github.com/0vas/slides/actions/workflows/deploy.yml)
[![Release Package](https://github.com/0vas/slides/actions/workflows/release.yml/badge.svg)](https://github.com/0vas/slides/actions/workflows/release.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Slidev](https://img.shields.io/badge/Slidev-52.15.2-2B90B6.svg)](https://sli.dev)

Personal downstream of
[`0vas/slides-builder`](https://github.com/0vas/slides-builder), used for
my talks, speaker data, private delivery context, and deck-specific assets.

The upstream template stays generic. This repository carries personal decks and
content without contaminating the reusable starter.

## Decks

- `component-showcase`: reusable component and style catalog.
- `github-enterprise-platform`: GitHub as an enterprise platform.
- `intro-devops-es`: Spanish DevOps, CI/CD, DevSecOps, and platform engineering talk.
- `platform-engineering-that-teams-actually-adopt`: platform engineering operating model.

## Quick Start

```bash
make install
make list
make dev DECK=intro-devops-es PORT=4100
```

Build or validate:

```bash
make check DECK=intro-devops-es
make build-all
npm run check:agent
```

## Structure

- `decks/<slug>/slides.md`: deck content.
- `decks/<slug>/components/`: deck-owned Vue components.
- `decks/<slug>/public/media/`: local images and media.
- `data/speaker/`: shared speaker metadata and assets.
- `shared/components/`: reusable visual components.
- `shared/styles/`: shared theme and palettes.
- `.agents/skills/`: reusable slide-generation, TDD, triage, and visual-QA workflows.
- `docs/`: deeper operating and design documentation.

## Create A Deck From Upstream

1. Start from `decks/_template`.
2. Use `decks/platform-engineering-that-teams-actually-adopt` as the complete
   reference example for structure, brief, local media, components, and visual
   rhythm.
3. Record the brief in `decks/<slug>/deck.brief.md`.
4. Store deck media in `decks/<slug>/public/media/`.
5. Reuse shared components before creating deck-local ones.
6. Run `make check DECK=<slug>` before handoff.

## Working Rule

For reusable improvements, update the upstream template first. For personal
talks, assets, and speaker-specific content, keep the work in this downstream
repository.

## Prompt Example From Upstream

Required prompt inputs for agent-assisted decks:

- title/topic
- audience and level
- duration
- desired outcome
- required points
- tone/context
- constraints
- available assets
- visual mode: light, dark, or black/keynote

Example prompt:

```text
Create a presentation titled "Platform Engineering That Teams Actually Adopt".

Audience: engineering managers, platform engineers, and senior developers.
Audience level: intermediate.
Duration: 30 minutes.
Event context: internal engineering conference where teams are evaluating
whether to invest in a platform organization.

Goal: attendees should leave with a practical operating model for building,
adopting, and measuring an internal developer platform.

Core message: a platform succeeds when teams choose to use it, not merely when
the organization deploys more tools.

Must cover:
- the difference between a platform and a collection of tools,
- product thinking and developer experience,
- golden paths and self-service workflows,
- governance and security without unnecessary friction,
- adoption and outcome metrics,
- a phased implementation roadmap.

Tone: practical, candid, and executive-friendly.
Constraints: reserve the final 5 minutes for questions, do not depend on a live
demo, keep product references vendor-neutral, include a concise closing takeaway
and recommended next steps.
Assets: no images or diagrams yet; search for suitable local assets when an
image-bearing slide is planned.
Visual mode: light, modern, editorial style with restrained motion; favor
diagrams, one clear data visualization, and a few strong images over dense text.
```

## Repository Rulesets

The upstream template ships with `.github/CODEOWNERS` assigning repository
ownership to `@0vas` and a required-check friendly workflow:

```text
Status Check / template
```

Use that exact status check name when configuring branch or repository rulesets.
