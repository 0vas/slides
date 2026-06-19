<template>
  <div class="venn-diagram" role="img" :aria-label="ariaLabel">
    <div
      v-for="(circle, index) in circles"
      :key="circle.title"
      v-motion
      :initial="{ opacity: 0, scale: 0.9 }"
      :enter="{ opacity: 1, scale: 1, transition: { delay: index * 100, duration: 460 } }"
      class="venn-circle"
      :class="circle.tone"
    >
      <strong>{{ circle.title }}</strong>
      <small>{{ circle.detail }}</small>
    </div>
    <div class="venn-core">
      <span>{{ center.label }}</span>
      <strong>{{ center.title }}</strong>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'Diagrama de Venn' },
  center: {
    type: Object,
    default: () => ({ label: 'Fit', title: 'Decision' })
  },
  circles: {
    type: Array,
    default: () => [
      { title: 'Deseable', detail: 'Usuario', tone: 'blue' },
      { title: 'Viable', detail: 'Negocio', tone: 'green' },
      { title: 'Factible', detail: 'Tecnologia', tone: 'rose' }
    ]
  }
})
</script>
