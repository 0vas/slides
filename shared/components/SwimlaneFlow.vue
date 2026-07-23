<template>
  <div class="swimlane-flow" :aria-label="ariaLabel" :style="{ '--swimlane-steps': maxSteps }">
    <div
      v-for="(lane, laneIndex) in lanes"
      :key="lane.label"
      v-motion
      class="swimlane-row"
      :initial="{ opacity: 0, x: -12 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: laneIndex * 90, duration: 420 } }"
    >
      <strong :class="lane.tone">{{ lane.label }}</strong>
      <span v-for="step in lane.steps" :key="`${lane.label}-${step}`">{{ step }}</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  ariaLabel: { type: String, default: 'Swimlane flow' },
  lanes: {
    type: Array,
    default: () => [
      { label: 'Team', steps: ['Plan', 'Build', 'Validate'], tone: 'blue' },
      { label: 'Platform', steps: ['Template', 'Automate', 'Observe'], tone: 'green' },
      { label: 'Governance', steps: ['Policy', 'Evidence', 'Improve'], tone: 'amber' }
    ]
  }
})

const maxSteps = computed(() => Math.max(1, ...props.lanes.map((lane) => lane.steps?.length || 0)))
</script>
