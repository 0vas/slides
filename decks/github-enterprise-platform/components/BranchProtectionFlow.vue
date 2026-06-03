<template>
  <div class="branch-flow">
    <div v-for="(step, index) in steps" :key="step.title" v-motion
      :initial="{ opacity: 0, y: 18 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 110, duration: 440 } }"
      class="branch-step">
      <span>{{ step.code }}</span>
      <strong>{{ step.title }}</strong>
      <small>{{ step.detail }}</small>
    </div>
  </div>
</template>

<script setup>
const steps = [
  { code: 'PR', title: 'Pull request', detail: 'Cambios visibles antes de entrar.' },
  { code: 'CI', title: 'Checks', detail: 'Build, tests, lint y seguridad.' },
  { code: 'REV', title: 'Review', detail: 'Owners y aprobaciones requeridas.' },
  { code: 'MERGE', title: 'Merge seguro', detail: 'Reglas aplicadas por defecto.' }
]
</script>
