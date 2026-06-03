<template>
  <div class="platform-map" aria-label="Mapa de plataforma GitHub empresarial">
    <div
      v-for="(node, index) in nodes"
      :key="node.title"
      v-motion
      :initial="{ opacity: 0, y: 18, scale: 0.96 }"
      :enter="{ opacity: 1, y: 0, scale: 1, transition: { delay: index * 120, duration: 520 } }"
      class="platform-node"
      :class="node.tone"
    >
      <span>{{ node.label }}</span>
      <strong>{{ node.title }}</strong>
      <small>{{ node.detail }}</small>
    </div>
    <div class="platform-line platform-line-a" />
    <div class="platform-line platform-line-b" />
    <div class="platform-line platform-line-c" />
  </div>
</template>

<script setup>
const nodes = [
  { label: '01', title: 'Codigo', detail: 'Repos, ramas, PRs', tone: 'blue' },
  { label: '02', title: 'Equipos', detail: 'Owners, permisos, reglas', tone: 'green' },
  { label: '03', title: 'Empresa', detail: 'Gobierno, auditoria, escala', tone: 'amber' },
  { label: '04', title: 'Plataforma', detail: 'Seguridad, automatizacion, metricas', tone: 'rose' }
]
</script>
