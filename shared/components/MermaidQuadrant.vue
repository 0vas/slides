<template>
  <MermaidDiagram
    :aria-label="ariaLabel"
    :caption="caption"
    :diagram="resolvedDiagram"
    :insights="insights"
    :kicker="kicker"
    :title="title"
    variant="quadrant"
  />
</template>

<script setup>
import { computed } from 'vue'
import MermaidDiagram from './MermaidDiagram.vue'

const props = defineProps({
  ariaLabel: { type: String, default: 'Quadrant chart Mermaid de decision' },
  caption: {
    type: String,
    default: ''
  },
  diagram: { type: String, default: '' },
  kicker: { type: String, default: 'Mermaid quadrantChart' },
  title: { type: String, default: 'Mapa de decision' },
  insights: {
    type: Array,
    default: () => [
      { label: 'Focus', title: 'Alto impacto', detail: 'Ubica rapidamente donde conviene invertir energia.' },
      { label: 'Avoid', title: 'Bajo retorno', detail: 'Hace visibles las iniciativas que pueden esperar.' },
      { label: 'Balance', title: 'Trade-offs', detail: 'Permite conversar costo, valor y riesgo en una sola vista.' }
    ]
  }
})

const defaultDiagram = `quadrantChart
  title Priorizacion de iniciativas
  x-axis Bajo esfuerzo --> Alto esfuerzo
  y-axis Bajo impacto --> Alto impacto
  quadrant-1 Apuestas estrategicas
  quadrant-2 Ganancias rapidas
  quadrant-3 Evitar por ahora
  quadrant-4 Planificar con cuidado
  "Automatizar evidencia": [0.28, 0.78]
  "Estandarizar plantillas": [0.36, 0.62]
  "Migracion masiva": [0.82, 0.72]
  "Reporte manual": [0.24, 0.24]
  "Integracion compleja": [0.76, 0.36]`

const resolvedDiagram = computed(() => props.diagram || defaultDiagram)
</script>
