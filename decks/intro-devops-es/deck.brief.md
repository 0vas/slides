# Deck Brief: Introducción a DevOps: fundamentos, evolución y ruta de aprendizaje

This file is the source of truth for this deck.

## Source Prompt

```text
Create a Spanish Slidev presentation titled "Introducción a DevOps:
fundamentos, evolución y ruta de aprendizaje" for beginner to
early-intermediate technology learners. Duration: 60 minutes, with 45-50
minutes of content and 10-15 minutes of Q&A. Include two personal iceberg
introduction slides before technical content, then cover DevOps fundamentals,
DevSecOps, Platform Engineering, tooling categories, cloud, observability,
learning path, certifications, close, and Q&A. Use palette-crystal, Spanish
text, no live demo, vendor-neutral examples where possible, and validate with
make check DECK=intro-devops-es.
```

## Intake

| Field | Value |
| --- | --- |
| Topic or title | Introducción a DevOps: fundamentos, evolución y ruta de aprendizaje |
| Audience | Personas iniciando o reconvirtiéndose hacia tecnología, desarrollo, cloud, operaciones, seguridad o platform engineering |
| Audience level | Beginner to early-intermediate |
| Duration | 60 minutes total |
| Desired outcome | Entender qué es DevOps, por qué existe, cómo evolucionó hacia DevSecOps y Platform Engineering, y qué capacidades desarrollar para una ruta profesional sólida |
| Required points | Personal intro iceberg, problema que resuelve DevOps, silos previos, práctica real, mitos, DevOps/DevSecOps/Platform Engineering, desarrollo de software, ciclo de vida, CI/CD, workflows, contenedores, Kubernetes/OpenShift, IaC, artefactos, calidad, shift-left security, observabilidad, cloud, gobierno, platform engineering, ruta de aprendizaje y certificaciones |
| Tone and context | Práctico, claro, humano, inspirador y profesional; charla educativa sin marketing excesivo |
| Constraints | Sin demo en vivo; vendor-neutral cuando sea posible; todo en español; no inventar certificaciones; crear brief antes de slides; validar con `make check DECK=intro-devops-es`; desplegar localmente antes de push |
| Available assets | Shared speaker data and QR in `data/speaker/`; user-provided certification list in chat |
| Suggested assets policy | Use repo-native Vue/SVG for iceberg; use local components; no required external image dependency |
| Speaker profile | Use shared speaker data with deck-specific talk role/tags |
| Deliverables | Slidev HTML deck, local validation, local preview before push |
| Desired slug | `intro-devops-es` |
| Background mode | light |
| Palette | `palette-crystal` |

## Visual Direction

| Item | Decision |
| --- | --- |
| Background mode | light |
| Palette | `palette-crystal` |
| Palette rationale | Crystal Day supports teaching, close reading, and a clean executive-tech visual language for a 60-minute introductory session |
| Motion level | medium |
| Media style | Vue/SVG iceberg, diagrams, architecture layers, icon grids, comparison table, mockups, maturity curve, callout stack |
| Visual rhythm | cover, iceberg sequence, speaker profile, agenda, problem framing, quote, comparison, lifecycle layers, swimlane, browser mockups, icon grids, maturity curve, close/Q&A |

## Assumptions

- The exact organization name "DevSecOps Village" is kept as provided by the prompt and marked for speaker validation in the slide note.
- The user later provided a certification list. The deck highlights the most relevant credentials for a DevOps/DevSecOps/Platform Engineering session as compact visual badges instead of a full text list.
- The two iceberg slides use a deck-local Vue/SVG illustration instead of an external image so both states stay aligned and render offline.
- The deck includes both the requested personal introduction slides and the repository-required data-driven speaker profile slide.
- The deck targets 28 slides with the final 10-15 minutes reserved for Q&A.

## Questions Resolved Before Execution

- Critical context is complete in the user-provided prompt; no blocking clarification questions were required.
- Certifications are based on the user-provided list and curated for relevance to the talk.
- Local deployment before push is required by the latest user instruction.

## Acceptance Criteria

### Narrative

The deck shall explain DevOps to beginner and early-intermediate learners in a clear 60-minute story.

Acceptance:

- Given the target audience
- When they finish the deck
- Then they understand DevOps as a discipline that connects development, operations, security, quality, observability, cloud, and developer experience

### Required Content

The deck shall include every required point from the source prompt.

Acceptance:

- Given the required points list
- When `slides.md` is reviewed
- Then each point appears in at least one slide or visual block

### Required Structure

The deck shall include mandatory and user-requested structural slides.

Acceptance:

- Given the rendered deck
- When it is reviewed
- Then it includes a cover, two consecutive iceberg personal intro slides, a data-driven speaker profile, agenda, technical body, close, and Q&A

### Visual Quality

The deck shall use the repository visual system, remain readable at 1440x900, and avoid long static text runs.

Acceptance:

- Given screenshots of every slide and visible click/state
- When inspected at 1440x900
- Then there is no clipped text, overlapping essential content, unreadable contrast, broken renderer, or underused component opportunity

### Build And Local Preview

The deck shall pass repository validation and be deployed locally before push.

Acceptance:

- `make check DECK=intro-devops-es` exits with code 0
- `make dev DECK=intro-devops-es PORT=<available>` runs locally
- Browser screenshots confirm the deck renders

## Narrative Plan

| Section | Purpose | Slide Count |
| --- | --- | --- |
| Opening | Set promise and human credibility | 4 |
| Foundations | Explain why DevOps exists and what it is not | 5 |
| Delivery system | Show how software travels to production | 5 |
| Capabilities | Cover infrastructure, artifacts, quality, security, observability, and cloud | 8 |
| Evolution | Connect DevOps to developer experience and Platform Engineering | 3 |
| Learning path | Give practical next steps and credibility accelerators | 2 |
| Close | Recap and Q&A | 1 |

## Asset Plan

| Asset | Source | Local Path | License/Notes |
| --- | --- | --- | --- |
| Iceberg visual | Deck-local Vue/SVG component | `decks/intro-devops-es/components/IcebergJourney.vue` | Generated as source code; no external license |
| Speaker QR | Shared speaker data | `data/speaker/linkedin-qr.svg` | Existing repository asset |

## Component Plan

| Need | Component or Pattern | Location |
| --- | --- | --- |
| Animated cover title | `TypingTitle` | shared wrapper copied from template |
| Personal iceberg sequence | `IcebergJourney` | deck-local |
| Certification badges | `CertificationBadges` | deck-local |
| Data-driven speaker profile | `SpeakerProfile` | shared wrapper copied from template |
| Agenda and takeaway stacks | `.agenda-grid`, `CalloutStack` | shared theme/components |
| Evolution timeline | `TimelineFlow` | shared wrapper copied from template |
| DevOps/DevSecOps/Platform comparison | `ComparisonTable` | shared wrapper copied from template |
| Software lifecycle and platform layers | `ArchitectureLayers`, `SwimlaneFlow` | shared wrappers copied from template |
| Tool and cloud maps | `IconGrid` | shared wrapper copied from template |
| CI/CD and observability surfaces | `BrowserMockup` | shared wrapper copied from template |
| Learning path | `MaturityCurve` | shared wrapper copied from template |
| Memorable insight | `QuoteFrame` | shared wrapper copied from template |

## Validation Plan

- `make check DECK=intro-devops-es`
- Local preview with `make dev DECK=intro-devops-es PORT=4100` or another available port
- Screenshot review at 1440x900 for every slide and visible click/state
- Explicitly check cover, iceberg slides, speaker profile, comparison, lifecycle, CI/CD mockup, observability mockup, learning path, close, Q&A, and navigation
- No remote dependency for essential rendering

## Handoff Notes

- Commands run: `make check DECK=intro-devops-es`; `make dev DECK=intro-devops-es PORT=4100`; Playwright screenshot pass at 1440x900 across 52 visible states.
- Files changed: `decks/intro-devops-es/`, `README.md`, `.github/workflows/deploy.yml`.
- Known limitations: certification badges are deck-local visual badges using compact code/issuer marks, not official third-party badge artwork.
- Follow-up ideas: replace visual marks with official certification badge artwork if the speaker provides approved image assets; validate the exact public organization label for DevSecOps Village before public delivery.
