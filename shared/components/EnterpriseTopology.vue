<template>
  <div class="enterprise-topology">
    <div class="topology-center">
      <span>{{ centerLabel }}</span>
      <strong>{{ centerTitle }}</strong>
    </div>
    <div
      v-for="(node, index) in props.nodes"
      :key="node.title"
      v-motion
      :initial="{ opacity: 0, scale: 0.86 }"
      :enter="{ opacity: 1, scale: 1, transition: { delay: index * 110, duration: 520 } }"
      class="topology-node"
      :class="node.tone"
    >
      <span>{{ node.code }}</span>
      <strong>{{ node.title }}</strong>
      <small>{{ node.detail }}</small>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  centerLabel: { type: String, default: 'Enterprise' },
  centerTitle: { type: String, default: 'Platform' },
  nodes: {
    type: Array,
    default: () => [
      { code: 'SSO', title: 'Identidad', detail: 'SAML · SCIM', tone: 'blue' },
      { code: 'ORG', title: 'Organizaciones', detail: 'Equipos y dominios', tone: 'green' },
      { code: 'SEC', title: 'Seguridad', detail: 'Controles · reglas', tone: 'amber' },
      { code: 'AUTO', title: 'Automatizacion', detail: 'Pipelines · APIs', tone: 'rose' },
      { code: 'OBS', title: 'Auditoria', detail: 'Logs · metricas', tone: 'blue' },
      { code: 'AI', title: 'Asistencia', detail: 'Adopcion guiada', tone: 'green' }
    ]
  }
})
</script>
