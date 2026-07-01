<template>
  <div class="copilot-flow">
    <div
      v-for="(step, index) in steps"
      :key="step.title"
      v-motion
      :initial="{ opacity: 0, y: 22 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 130, duration: 460 } }"
      class="copilot-step"
    >
      <span>{{ step.index }}</span>
      <strong>{{ step.title }}</strong>
      <small>{{ step.detail }}</small>
    </div>
  </div>
</template>

<script setup>
const steps = [
  { index: '01', title: 'Contexto', detail: 'El repo, las reglas y el dominio importan.' },
  { index: '02', title: 'Asistencia', detail: 'Codigo, tests, docs y explicaciones.' },
  { index: '03', title: 'Revision', detail: 'El equipo conserva criterio y ownership.' },
  { index: '04', title: 'Medicion', detail: 'Adopcion, impacto y buenas practicas.' }
]
</script>
