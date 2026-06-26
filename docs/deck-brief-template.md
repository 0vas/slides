# Deck Brief: <title>

This file is the source of truth for a deck created by `slides-builder`.
Complete it before scaffolding slides. If a critical field is missing, ask the
user before creating files.

## Source Prompt

```text
<paste or summarize the user prompt>
```

## Intake

| Field | Value |
| --- | --- |
| Topic or title | <required> |
| Audience | <required> |
| Audience level | <required> |
| Duration | <required> |
| Desired outcome | <required> |
| Required points | <required> |
| Tone and context | <required> |
| Constraints | <required> |
| Available assets | <none or list> |
| Suggested assets policy | <SVG Repo, Pexels, Unsplash, no external sourcing, etc.> |
| Speaker profile | <use shared speaker data? yes/no/variant> |
| Deliverables | <HTML, PDF, PPTX, GitHub Pages, release package> |
| Desired slug | <optional> |
| Background mode | <light, dark, black/keynote> |
| Palette | <palette-* class> |

## Visual Direction

| Item | Decision |
| --- | --- |
| Background mode | <light, dark, black/keynote> |
| Palette | <palette-* class> |
| Palette rationale | <why it fits the audience, tone, and topic> |
| Motion level | <low, medium, high> |
| Media style | <screenshots, generated images, diagrams, ECharts, Mermaid, 3D> |

If the user does not provide a visual direction and allows the agent to infer,
use `palette-crystal` and `light` mode. Use `black/keynote` only when the user
requests it or the presentation context clearly justifies it.

## Assumptions

- <assumption 1>
- <assumption 2>

## Open Questions

- <question 1>
- <question 2>

## Acceptance Criteria

### Narrative

The deck shall present a clear narrative for <audience> in <duration>.

Acceptance:

- Given a target audience member
- When they finish the deck
- Then they understand <desired outcome>

### Required Content

The deck shall include all required points.

Acceptance:

- Given the required points list
- When the deck is reviewed
- Then every point is represented by at least one slide or visual block

### Required Structure

The deck shall include the required structural slides.

Acceptance:

- Given the rendered deck
- When it is reviewed
- Then it includes a title/cover slide, a data-driven speaker profile slide,
  and a final close/Q&A slide

### Visual Quality

The deck shall use the repository visual system, record palette/background mode,
and remain readable at 1440x900.

Acceptance:

- Given screenshots of the cover, a dense slide, and a media/mockup slide
- When they are inspected
- Then there is no clipped text or unreadable essential content

### Build

The deck shall pass repository validation.

Acceptance:

- `make check DECK=<slug>` exits with code 0

## Narrative Plan

| Section | Purpose | Slide Count |
| --- | --- | --- |
| Opening | <purpose> | <count> |
| Context | <purpose> | <count> |
| Core idea | <purpose> | <count> |
| Demo or examples | <purpose> | <count> |
| Close | <purpose> | <count> |

## Asset Plan

| Asset | Source | Local Path | License/Notes |
| --- | --- | --- | --- |
| <asset> | <search/source> | `decks/<slug>/public/media/...` | <license/notes> |

## Component Plan

| Need | Component or Pattern | Location |
| --- | --- | --- |
| <need> | <component> | <shared or local> |

## Validation Plan

- `make check DECK=<slug>`
- Cover screenshot at 1440x900
- Dense slide screenshot at 1440x900
- Media/mockup/chart screenshot at 1440x900
- Navigation visible in play mode
- No remote dependency for essential rendering

## Handoff Notes

- Commands run:
- Files changed:
- Known limitations:
- Follow-up ideas:
