<template>
  <div class="comparison-table" role="table" :aria-label="ariaLabel">
    <div class="comparison-row comparison-head" role="row">
      <span role="columnheader">{{ firstColumn }}</span>
      <strong v-for="column in columns" :key="column" role="columnheader">{{ column }}</strong>
    </div>
    <div
      v-for="(row, index) in rows"
      :key="row.label"
      v-motion
      :initial="{ opacity: 0, x: -12 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: index * 70, duration: 420 } }"
      class="comparison-row"
      role="row"
    >
      <span role="rowheader">{{ row.label }}</span>
      <strong
        v-for="(value, valueIndex) in row.values"
        :key="`${row.label}-${valueIndex}`"
        :class="{ preferred: row.preferred === valueIndex }"
        role="cell"
      >
        {{ value }}
      </strong>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'Tabla comparativa' },
  firstColumn: { type: String, default: 'Criterio' },
  columns: {
    type: Array,
    default: () => ['Opcion A', 'Opcion B', 'Opcion C']
  },
  rows: {
    type: Array,
    default: () => [
      { label: 'Costo', values: ['Bajo', 'Medio', 'Alto'], preferred: 0 },
      { label: 'Control', values: ['Medio', 'Alto', 'Alto'], preferred: 1 },
      { label: 'Velocidad', values: ['Alta', 'Media', 'Baja'], preferred: 0 },
      { label: 'Escala', values: ['Media', 'Alta', 'Alta'], preferred: 2 }
    ]
  }
})
</script>
