# Slides

[![Deploy Slides](https://github.com/0vas/slides/actions/workflows/deploy.yml/badge.svg)](https://github.com/0vas/slides/actions/workflows/deploy.yml)
[![Release Package](https://github.com/0vas/slides/actions/workflows/release.yml/badge.svg)](https://github.com/0vas/slides/actions/workflows/release.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Slidev](https://img.shields.io/badge/Slidev-52.15.2-2B90B6.svg)](https://sli.dev)

Personal fork of
[`ovasorg/slides-builder`](https://github.com/ovasorg/slides-builder), used for
my talks, speaker data, private delivery context, and deck-specific assets.

The upstream template stays generic. This fork can carry personal decks and
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

## Working Rule

For reusable improvements, update the upstream template first. For personal
talks, assets, and speaker-specific content, keep the work in this fork.
