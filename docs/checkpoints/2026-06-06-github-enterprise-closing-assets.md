# Checkpoint: GitHub Enterprise Closing Assets

Date: 2026-06-06

## Current State

- The GitHub Enterprise deck now has final closing slides:
  - a thank-you slide with the speaker LinkedIn QR,
  - a DevSecOps Space invitation slide using local deck media.
- Deck-specific multimedia is standardized under `decks/<slug>/public/media/`.
- Global speaker data and assets are centralized under `data/speaker/`.
- `data/person.js` remains as a compatibility re-export.

## Important Files

- `decks/github-enterprise-platform/slides.md`
- `decks/github-enterprise-platform/components/ThankYouQr.vue`
- `decks/github-enterprise-platform/components/DesecOpsSpaceInvite.vue`
- `decks/github-enterprise-platform/public/media/devsecops-space.jpeg`
- `data/speaker/speaker.json`
- `data/speaker/person.js`
- `data/speaker/linkedin-qr.svg`
- `README.md`
- `agent.md`
- `docs/slide-guidelines.md`
- `docs/project-state.md`

## Decisions Made

- Speaker roles now omit the duplicated Credicorp role from the role list and
  include `DevSecOps Space Ambassador`.
- Deck media should be referenced with paths relative to the deck `public/`
  folder, for example `media/devsecops-space.jpeg`.
- Shared speaker QR/profile assets should live beside the global speaker data,
  not under `shared/public/`.

## Validation Commands

```bash
make check DECK=github-enterprise-platform
make check DECK=component-showcase
```
