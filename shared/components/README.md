# Shared Components

This folder contains Vue components that are reusable across decks.

Shared components must be:

- generic enough to work outside one talk,
- data-driven through props or slots,
- styled by `shared/styles/theme.css`,
- documented in `README.md` and `docs/component-catalog.md`.

Current shared components:

- `SpeakerProfile.vue`
- `TypingTitle.vue`
- `PlatformMap.vue`
- `EnterpriseTopology.vue`
- `GovernanceGrid.vue`
- `SecurityRadar.vue`
- `MaturityCurve.vue`

Decks should import these explicitly from `slides.md` or from a local wrapper:

```md
<script setup>
import PlatformMap from '../../shared/components/PlatformMap.vue'
</script>
```

Keep domain-specific components inside `decks/<slug>/components/` until they are
generalized.
