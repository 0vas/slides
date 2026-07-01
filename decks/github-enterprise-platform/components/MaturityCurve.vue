<template>
  <SharedMaturityCurve :points="points" v-bind="$attrs" />
</template>

<script setup>
import SharedMaturityCurve from '../../../shared/components/MaturityCurve.vue'

const points = [
  { x: 110, y: 230, title: 'Caos', detail: 'Repos sueltos' },
  { x: 350, y: 172, title: 'Orden', detail: 'Estandares' },
  { x: 610, y: 88, title: 'Escala', detail: 'Self-service' },
  { x: 790, y: 58, title: 'Plataforma', detail: 'Medicion' }
]
</script>
