<template>
  <div class="swimlane-flow" role="table" :aria-label="ariaLabel">
    <div
      v-for="(lane, laneIndex) in lanes"
      :key="lane.label"
      class="swimlane-row"
      role="row"
    >
      <strong role="rowheader">{{ lane.label }}</strong>
      <span
        v-for="(step, stepIndex) in lane.steps"
        :key="`${lane.label}-${step}`"
        v-motion
        :initial="{ opacity: 0, x: -12 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: (laneIndex + stepIndex) * 70, duration: 420 } }"
        role="cell"
      >
        {{ step }}
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'Flujo por carriles' },
  lanes: {
    type: Array,
    default: () => [
      { label: 'Equipo', steps: ['Idea', 'Cambio', 'Feedback'] },
      { label: 'Plataforma', steps: ['Politica', 'Pipeline', 'Release'] },
      { label: 'Riesgo', steps: ['Control', 'Revision', 'Evidencia'] }
    ]
  }
})
</script>
