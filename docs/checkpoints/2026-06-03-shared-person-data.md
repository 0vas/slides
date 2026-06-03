# Checkpoint: Shared Person Data

Date: 2026-06-03

## Current State

- The repo is a multi-deck Slidev workspace for presentations owned by one
  person.
- Stable owner metadata now lives in `data/person.js`.
- Shared speaker assets now live in `shared/public/speaker/`.
- The GitHub Enterprise deck imports root person data through
  `decks/github-enterprise-platform/data/speaker.js` and only adds talk-specific
  fields such as `talkRole`.

## Decisions Made

- `data/person.js` is the source of truth for name, short name, initials,
  headline, organization, location, public profiles, reusable roles, reusable
  tags, and shared QR/profile asset references.
- `decks/<slug>/data/speaker.js` may exist, but it must import the root `person`
  object and override only fields that belong to that talk.
- Shared QR and profile images should be imported with Vite `?url` so dev,
  production builds, and GitHub Pages base paths work consistently.
- Deck `public/speaker/` folders are reserved for intentional per-deck overrides.
- Native Slidev navigation remains styled, visible, and clickable in play,
  overview, and presenter modes.

## Important Files

- `data/person.js`
- `shared/public/speaker/`
- `shared/components/SpeakerProfile.vue`
- `decks/github-enterprise-platform/data/speaker.js`
- `shared/styles/theme.css`
- `agent.md`
- `docs/slide-guidelines.md`
- `README.md`

## Validation Commands

```bash
make check DECK=github-enterprise-platform
make dev DECK=github-enterprise-platform
```
