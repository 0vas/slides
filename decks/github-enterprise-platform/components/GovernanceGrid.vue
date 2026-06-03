<template>
  <div class="governance-grid">
    <div
      v-for="(item, index) in items"
      :key="item.title"
      v-motion
      :initial="{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: index * 110, duration: 480 } }"
      class="governance-item"
    >
      <span>{{ item.code }}</span>
      <strong>{{ item.title }}</strong>
      <small>{{ item.detail }}</small>
    </div>
  </div>
</template>

<script setup>
const items = [
  { code: 'ID', title: 'Identidad', detail: 'SSO, SCIM, roles y acceso minimo.' },
  { code: 'OWN', title: 'Ownership', detail: 'Responsables claros por repo y producto.' },
  { code: 'POL', title: 'Politicas', detail: 'Reglas consistentes sin frenar a los equipos.' },
  { code: 'AUD', title: 'Auditoria', detail: 'Trazabilidad para operar con confianza.' }
]
</script>
