<template>
  <SharedEnterpriseTopology
    center-label="Enterprise"
    center-title="GitHub"
    :nodes="nodes"
    v-bind="$attrs"
  />
</template>

<script setup>
import SharedEnterpriseTopology from '../../../shared/components/EnterpriseTopology.vue'

const nodes = [
  { code: 'SSO', title: 'Identidad', detail: 'SAML · SCIM', tone: 'blue' },
  { code: 'ORG', title: 'Organizaciones', detail: 'Equipos y repos', tone: 'green' },
  { code: 'SEC', title: 'Seguridad', detail: 'GHAS · reglas', tone: 'amber' },
  { code: 'AUTO', title: 'Automatizacion', detail: 'Actions · APIs', tone: 'rose' },
  { code: 'OBS', title: 'Auditoria', detail: 'Logs · metricas', tone: 'blue' },
  { code: 'AI', title: 'Copilot', detail: 'Adopcion guiada', tone: 'green' }
]
</script>
