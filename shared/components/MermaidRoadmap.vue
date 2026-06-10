<template>
  <MermaidDiagram
    :aria-label="ariaLabel"
    :caption="caption"
    density="compact"
    :diagram="resolvedDiagram"
    :insights="insights"
    :kicker="kicker"
    :title="title"
    variant="roadmap"
  />
</template>

<script setup>
import { computed } from 'vue'
import MermaidDiagram from './MermaidDiagram.vue'

const props = defineProps({
  ariaLabel: { type: String, default: 'Timeline Mermaid de roadmap' },
  caption: {
    type: String,
    default: ''
  },
  diagram: { type: String, default: '' },
  kicker: { type: String, default: 'Mermaid timeline' },
  title: { type: String, default: 'Roadmap ejecutivo' },
  insights: {
    type: Array,
    default: () => [
      { label: 'Now', title: 'Base', detail: 'Aterriza el punto de partida y los habilitadores.' },
      { label: 'Next', title: 'Cambio', detail: 'Ordena iniciativas en fases comunicables.' },
      { label: 'Later', title: 'Escala', detail: 'Mantiene visible el resultado esperado.' }
    ]
  }
})

const defaultDiagram = `timeline
  title Roadmap de plataforma
  Now : Inventario
      : Guardrails minimos
      : Primeras metricas
  Next : Automatizacion
       : Reuso de componentes
       : Experiencia guiada
  Later : Operacion escalada
        : Gobierno continuo
        : Mejora basada en datos`

const resolvedDiagram = computed(() => props.diagram || defaultDiagram)
</script>
