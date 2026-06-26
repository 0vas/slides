---
name: slide-deck-generator
description: Create or substantially modify Slidev-style slide decks from a user prompt. Use when an AI agent is asked to build a new presentation, generate slides, scaffold a deck, turn an outline into a deck, add major deck content, choose reusable slide components, organize deck media, or prepare a deck for publishing. Pair with TDD-oriented validation by defining acceptance criteria before implementation and verifying them at the end.
---

# Slide Deck Generator

## Workflow

1. Inspect the repository conventions before editing. Prefer existing agent specs, deck templates, component catalogs, style catalogs, and generation workflow docs when present.
2. Define acceptance criteria before implementation. Include content completeness, required structural slides, audience fit, visual quality, background mode, asset handling, navigation/export behavior, and validation commands.
3. Gather intake. Required critical fields are topic/title, audience, audience level, duration, desired outcome, required points, tone/context, constraints, visual background mode, and deliverables. Ask only when critical data is missing or contradictory.
4. Create or update the deck brief when the repo has a brief template or generation workflow. Record assumptions, asset plan, validation plan, and handoff notes.
5. Reuse the local deck template, shared components, palette system, and media conventions. Put deck-specific media under the deck's local public/media folder or equivalent local asset tree.
6. Use local/rendered assets. When a slide calls for an image, make image search and selection part of the implementation: search reputable free-media sources such as Pexels/Unsplash/Pixabay or SVG Repo, choose an asset that matches that slide's specific purpose, download it, keep source/license notes, and render it locally. Do not reuse the same editorial image as multiple “different” assets unless the brief explicitly calls for a repeated visual motif.
7. Implement in small slices. Keep generic reusable components shared; keep event/product-specific visuals deck-local.
8. For animated analytical visuals, prefer the repo's chart wrapper or equivalent ECharts pattern when the slide needs magnitude, comparison, weighted flow, heatmap, funnel, radar, hierarchy, custom graphic animation, or value transitions. Keep labels short, put explanation in captions/insights, declare useful entry animation in the chart option, and use the chart wrapper's sequence/update mechanism for before/after or baseline/target transitions. Prefer one-shot `enter` playback that finishes static; use click-capable triggers only for intentional in-slide steps in the Slidev web runtime.
9. Do not promise native PowerPoint animations in PPTX export. Slidev PPTX output is static snapshots; use hosted Slidev for live motion or model PPTX progression as separate slides/click states.
10. Validate every acceptance criterion. Run the repo's deck check/build command, and for new decks capture/review every slide and visible click/state at 1440x900 before handoff. For smaller visual edits, capture every changed slide plus adjacent/risky slides.
11. Handoff with changed files, validation results, known warnings, and any follow-up deployment step.

## Quality Criteria Template

Before editing, write a short checklist in the working notes:

- Content: required story points are represented and ordered for the audience.
- Structure: every deck includes a title/cover slide, a data-driven speaker profile slide, and a final takeaway/Q&A or closing slide.
- Structure: deck slug, frontmatter, brief, media, components, and styles follow repo conventions.
- Style: palette is chosen from the local style catalog and background mode is recorded as light, dark, or black/keynote.
- Visuals: slides are readable at 16:9, no overflow, no low-contrast text, no accidental product specificity in generic showcases.
- Assets: any image-bearing slide uses a searched or user-supplied asset selected for that slide role; media is local, organized, licensed/source-noted, and referenced with stable paths.
- Validation: build/check command passes; screenshots verify every slide for new decks and verify dynamic renderers such as Mermaid, ECharts/charts, iframes, videos, or 3D scenes.

## Required Structural Slides

Every deck must include:

- A title or cover slide.
- A data-driven speaker profile slide using shared `data/speaker/person.js`
  plus deck-local overrides when useful.
- A final slide with a clear closing takeaway, Q&A prompt, or next steps.

Do not omit the speaker slide because the user did not provide speaker data.
Use the shared speaker data by default and document talk-specific assumptions
in `deck.brief.md`.

## Repository Discovery

Look for these files first and follow them when present:

- `AGENTS.md`
- `docs/deck-generation-workflow.md`
- `docs/deck-brief-template.md`
- `docs/component-catalog.md`
- `docs/style-catalog.md`
- `docs/slide-guidelines.md`
- `decks/_template/`

If no such files exist, infer a minimal structure from the current deck framework and document assumptions in the final response.
