<template>
  <MermaidDiagram
    :aria-label="ariaLabel"
    :caption="caption"
    density="compact"
    :diagram="resolvedDiagram"
    :insights="insights"
    :kicker="kicker"
    :title="title"
    variant="journey"
  />
</template>

<script setup>
import { computed } from 'vue'
import MermaidDiagram from './MermaidDiagram.vue'

const props = defineProps({
  ariaLabel: { type: String, default: 'Journey Mermaid de adopcion' },
  caption: {
    type: String,
    default: ''
  },
  diagram: { type: String, default: '' },
  kicker: { type: String, default: 'Mermaid journey' },
  title: { type: String, default: 'Journey de adopcion' },
  insights: {
    type: Array,
    default: () => [
      { label: 'A', title: 'Momento humano', detail: 'Conecta tecnologia con experiencia real.' },
      { label: 'B', title: 'Puntos de friccion', detail: 'Revela donde el cambio necesita soporte.' },
      { label: 'C', title: 'Narrativa ejecutiva', detail: 'Convierte adopcion en una historia facil de seguir.' }
    ]
  }
})

const defaultDiagram = `journey
  title Journey de adopcion
  section Descubrir
    Entender contexto: 4: Usuario, Equipo
    Reconocer friccion: 3: Usuario
  section Probar
    Primer flujo guiado: 5: Equipo
    Resolver bloqueo: 2: Soporte
  section Escalar
    Automatizar practica: 4: Equipo
    Medir resultado: 5: Liderazgo`

const resolvedDiagram = computed(() => props.diagram || defaultDiagram)
</script>
