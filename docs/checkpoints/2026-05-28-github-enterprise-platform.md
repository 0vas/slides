# Checkpoint: GitHub Enterprise Platform Deck

Date: 2026-05-28

## Current State

- Repo is a multi-deck Slidev workspace.
- Default deck: `github-enterprise-platform`.
- The deck targets a 30 minute talk about GitHub as an enterprise platform.
- It uses Vue components, HTML/CSS mockups, animated diagrams, gradient typography,
  gradient borders, and custom navigation.

## Important Files

- `decks/github-enterprise-platform/slides.md`
- `decks/github-enterprise-platform/components/`
- `decks/github-enterprise-platform/slide-bottom.vue`
- `decks/github-enterprise-platform/data/speaker.js`
- `decks/github-enterprise-platform/public/media/`
- `shared/styles/theme.css`
- `docs/slide-guidelines.md`
- `AGENTS.md`
- `Makefile`

## Decisions Made

- Use Slidev as the deck engine.
- Use mockups built in HTML/CSS/Vue instead of real GitHub screenshots unless the
  user provides approved screenshots.
- Style the native Slidev navigation instead of hiding it, so the ribbon and
  icons remain visible in play and presenter modes.
- Keep `slide-bottom.vue` minimal to avoid duplicate navigation controls.
- Disable recording/camera and drawings in frontmatter.
- Avoid `view-transition` because it produced flash-like transitions.
- Use `TypingTitle` only on selected high-impact titles.
- Use gradient typography and gradient borders as part of the design language.
- Use grid-based top bars in mockups when a badge sits next to a long title, so
  the badge cannot collide with the icon or title text.
- Keep the cursor visible over navigation. The grid action opens the visual
  Slidev overview with thumbnails.
- Add speaker/profile slides as data-driven components. Current implementation
  uses `data/speaker.js`, `SpeakerProfile.vue`, and a documented QR asset path.

## Known Issues / Next Work

- Review all slides manually in presenter/play mode for remaining text overflow.
- Keep the mouse outside the deck viewport when taking screenshots to avoid
  hover-state artifacts.
- The current GitHub mockups are stylized approximations, not real screenshots.
- Continue refining typography scale for long Spanish headings.

## Validation Commands

```bash
make check DECK=github-enterprise-platform
make dev DECK=github-enterprise-platform
```

## Current Preview

```text
http://localhost:4100/
```
