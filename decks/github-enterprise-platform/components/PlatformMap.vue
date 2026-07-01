<template>
  <SharedPlatformMap
    aria-label="Mapa de transformacion de plataforma"
    :nodes="nodes"
    v-bind="$attrs"
  />
</template>

<script setup>
import SharedPlatformMap from '../../../shared/components/PlatformMap.vue'

const nodes = [
  { label: '01', title: 'Codigo', detail: 'Repos, ramas, PRs', tone: 'blue' },
  { label: '02', title: 'Equipos', detail: 'Owners, permisos, reglas', tone: 'green' },
  { label: '03', title: 'Empresa', detail: 'Gobierno, auditoria, escala', tone: 'amber' },
  { label: '04', title: 'Plataforma', detail: 'Seguridad, automatizacion, metricas', tone: 'rose' }
]
</script>
