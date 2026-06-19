<template>
  <div class="icon-grid">
    <article
      v-for="(item, index) in items"
      :key="item.title"
      v-motion
      :initial="{ opacity: 0, y: 12 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 70, duration: 420 } }"
      :class="item.tone"
    >
      <span>{{ item.icon }}</span>
      <strong>{{ item.title }}</strong>
      <small>{{ item.detail }}</small>
    </article>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [
      { icon: 'API', title: 'Lorem', detail: 'Punto de integracion.', tone: 'blue' },
      { icon: 'SEC', title: 'Ipsum', detail: 'Control reusable.', tone: 'green' },
      { icon: 'OPS', title: 'Dolor', detail: 'Operacion continua.', tone: 'amber' },
      { icon: 'AI', title: 'Amet', detail: 'Asistencia contextual.', tone: 'rose' }
    ]
  }
})
</script>
