<template>
  <div class="architecture-layers">
    <article
      v-for="(layer, index) in layers"
      :key="layer.title"
      v-motion
      :initial="{ opacity: 0, x: -16 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: index * 90, duration: 420 } }"
      :class="layer.tone"
    >
      <span>{{ layer.label }}</span>
      <strong>{{ layer.title }}</strong>
      <small>{{ layer.detail }}</small>
    </article>
  </div>
</template>

<script setup>
defineProps({
  layers: {
    type: Array,
    default: () => [
      { label: 'L4', title: 'Experiencia', detail: 'Usuarios, workflows y adopcion.', tone: 'rose' },
      { label: 'L3', title: 'Plataforma', detail: 'Servicios, APIs y extensibilidad.', tone: 'blue' },
      { label: 'L2', title: 'Gobierno', detail: 'Politicas, ownership y evidencia.', tone: 'green' },
      { label: 'L1', title: 'Base', detail: 'Identidad, datos y operacion.', tone: 'amber' }
    ]
  }
})
</script>
