---
name: slide-visual-qa
description: Validate and fix visual quality problems in slide decks. Use when an AI agent is asked to review deck visuals, fix slides that do not look good, verify light/dark contrast, inspect screenshots, validate Mermaid/charts/media/3D renderers, ensure deck components are agnostic where required, or confirm a deck is ready to present or deploy.
---

# Slide Visual QA

## Workflow

1. Define visual acceptance criteria before changing files. Include target viewports, contrast, overflow, component agnosticism, media rendering, dynamic diagram rendering, navigation, and build/export expectations.
2. Inspect the deck and shared theme. Read local visual guidelines, component catalogs, and palette docs when present.
3. Run the repo's build/check command for the deck before or immediately after the first change to expose syntax failures.
4. Start the local deck server when the deck requires a browser runtime.
5. Capture screenshots at 1440x900. For new decks or substantial visual changes, capture and inspect every slide and visible click/state. For small isolated edits, capture every changed slide plus adjacent/risky slides. Include slides using dynamic renderers such as Mermaid, charts, videos, iframes, or 3D/canvas.
6. Inspect screenshots for text clipping, overlap, low contrast, blank assets, broken icons, layout jumps, unreadable dark panels on light backgrounds, section numbers or decorative marks that look like rendering errors, and accidental product-specific examples in generic showcases.
7. Fix issues in scoped passes. Prefer component/theme fixes when the defect is reusable; prefer deck-local fixes when the defect is talk-specific.
8. Re-run the build/check and repeat screenshots for changed or risky slides.
9. Report the final acceptance checklist, commands run, screenshot scope, remaining warnings, and residual risk.

## Visual Gates

- Text must be readable from a projector and must not overlap or clip.
- Buttons, cards, labels, Mermaid nodes, and SVG text must maintain contrast on the active palette.
- Generic component showcases must avoid product-specific flows, names, CTAs, or branding unless the component is explicitly a branded example.
- External assets must render locally; broken image icons are failures.
- Mermaid and other dynamic diagrams must be checked in a browser, not only by static build.
- Section markers, badges, and labels must remain outside the main text flow
  and must not cover or compete with titles.
- Known benign build warnings may be reported, but they do not replace visual validation.

## Useful Checks

Use the repo's native commands first. Common examples:

```bash
make check DECK=<slug>
make dev DECK=<slug> PORT=4100
```

When available, use Playwright or the browser tooling to capture screenshots and query for visible error elements.
