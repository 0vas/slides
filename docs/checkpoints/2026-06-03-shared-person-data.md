# Checkpoint: Shared Person Data

Date: 2026-06-03

## Current State

- The repo is a multi-deck Slidev workspace for presentations owned by one
  person.
- Stable owner metadata now lives in `data/speaker/speaker.json`.
- Shared speaker assets now live in `data/speaker/`.
- The GitHub Enterprise deck imports root person data through
  `decks/github-enterprise-platform/data/speaker.js` and only adds talk-specific
  fields such as `talkRole`.

## Decisions Made

- `data/speaker/speaker.json` is the editable source of truth for name, short
  name, initials, headline, organization, location, public profiles, reusable
  roles, reusable tags, and shared QR/profile asset references.
- `data/speaker/person.js` is the Vite-facing wrapper that imports local speaker
  assets with `?url`.
- `decks/<slug>/data/speaker.js` may exist, but it must import the root `person`
  object and override only fields that belong to that talk.
- Shared QR and profile images should be imported with Vite `?url` so dev,
  production builds, and GitHub Pages base paths work consistently.
- Deck multimedia belongs in `decks/<slug>/public/media/`.
- Native Slidev navigation remains styled, visible, and clickable in play,
  overview, and presenter modes.

## Important Files

- `data/speaker/speaker.json`
- `data/speaker/person.js`
- `data/speaker/linkedin-qr.svg`
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
