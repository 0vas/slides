# Shared Components

This folder contains Vue components that are reusable across decks.

Shared components must be:

- generic enough to work outside one talk,
- data-driven through props or slots,
- styled by `shared/styles/theme.css` and palette variables from
  `shared/styles/palettes.css`,
- documented in `README.md` and `docs/component-catalog.md`.

Current shared components:

- `SpeakerProfile.vue`
- `TypingTitle.vue`
- `PlatformMap.vue`
- `EnterpriseTopology.vue`
- `GovernanceGrid.vue`
- `SecurityRadar.vue`
- `MaturityCurve.vue`
- `GraphDiagram.vue`
- `SequenceDiagram.vue`
- `MediaFrame.vue`
- `StylePalette.vue`
- `BrowserMockup.vue`
- `MetricStrip.vue`
- `ComparisonTable.vue`
- `DecisionMatrix.vue`
- `HierarchyTree.vue`
- `IconGrid.vue`
- `ShapeSystem.vue`
- `TimelineFlow.vue`
- `SwimlaneFlow.vue`
- `PyramidDiagram.vue`
- `VennDiagram.vue`
- `CalloutStack.vue`
- `QuoteFrame.vue`
- `ArchitectureLayers.vue`
- `Shape3DStage.vue`

Reference deck:

```bash
make dev DECK=component-showcase
```

`Shape3DStage.vue` uses `three`; validate it visually with Playwright because a
passing build does not prove the WebGL canvas rendered.

Decks should expose shared components through local wrappers so Slidev can
auto-import them from `decks/<slug>/components/`:

```vue
<template>
  <SharedPlatformMap v-bind="$attrs" />
</template>

<script setup>
import SharedPlatformMap from '../../../shared/components/PlatformMap.vue'
</script>
```

Keep domain-specific components inside `decks/<slug>/components/` until they are
generalized.
