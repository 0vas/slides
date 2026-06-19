<template>
  <div class="metric-strip">
    <article
      v-for="(metric, index) in metrics"
      :key="metric.label"
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 80, duration: 420 } }"
      :class="metric.tone"
    >
      <span>{{ metric.label }}</span>
      <strong>{{ metric.value }}</strong>
      <small>{{ metric.delta }}</small>
    </article>
  </div>
</template>

<script setup>
defineProps({
  metrics: {
    type: Array,
    default: () => [
      { label: 'Alcance', value: '42k', delta: '+18% lorem', tone: 'blue' },
      { label: 'Calidad', value: '98%', delta: 'Stable ipsum', tone: 'green' },
      { label: 'Riesgo', value: '7', delta: 'Baja prioridad', tone: 'amber' },
      { label: 'Adopcion', value: '3.4x', delta: 'Dolor sit', tone: 'rose' }
    ]
  }
})
</script>
