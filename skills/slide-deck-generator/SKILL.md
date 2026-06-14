---
name: slide-deck-generator
description: Create or substantially modify Slidev-style slide decks from a user prompt. Use when an AI agent is asked to build a new presentation, generate slides, scaffold a deck, turn an outline into a deck, add major deck content, choose reusable slide components, organize deck media, or prepare a deck for publishing. Pair with TDD-oriented validation by defining acceptance criteria before implementation and verifying them at the end.
---

# Slide Deck Generator

## Workflow

1. Inspect the repository conventions before editing. Prefer existing agent specs, deck templates, component catalogs, style catalogs, and generation workflow docs when present.
2. Define acceptance criteria before implementation. Include content completeness, audience fit, visual quality, asset handling, navigation/export behavior, and validation commands.
3. Gather intake. Required critical fields are topic/title, audience, audience level, duration, desired outcome, required points, tone/context, constraints, and deliverables. Ask only when critical data is missing or contradictory.
4. Create or update the deck brief when the repo has a brief template or generation workflow. Record assumptions, asset plan, validation plan, and handoff notes.
5. Reuse the local deck template, shared components, palette system, and media conventions. Put deck-specific media under the deck's local public/media folder or equivalent local asset tree.
6. Use local/rendered assets. When internet-sourced SVG icons or editorial images are useful and allowed, download them, keep source/license notes, and render them locally.
7. Implement in small slices. Keep generic reusable components shared; keep event/product-specific visuals deck-local.
8. Validate every acceptance criterion. Run the repo's deck check/build command, and for visual changes capture screenshots of the cover plus representative internal slides.
9. Handoff with changed files, validation results, known warnings, and any follow-up deployment step.

## Quality Criteria Template

Before editing, write a short checklist in the working notes:

- Content: required story points are represented and ordered for the audience.
- Structure: deck slug, frontmatter, brief, media, components, and styles follow repo conventions.
- Visuals: slides are readable at 16:9, no overflow, no low-contrast text, no accidental product specificity in generic showcases.
- Assets: media is local, organized, licensed/source-noted when externally sourced, and referenced with stable paths.
- Validation: build/check command passes; screenshots verify dynamic renderers such as Mermaid, charts, iframes, videos, or 3D scenes.

## Repository Discovery

Look for these files first and follow them when present:

- `agent.md` or `AGENTS.md`
- `docs/deck-generation-workflow.md`
- `docs/deck-brief-template.md`
- `docs/component-catalog.md`
- `docs/style-catalog.md`
- `docs/slide-guidelines.md`
- `decks/_template/`

If no such files exist, infer a minimal structure from the current deck framework and document assumptions in the final response.
