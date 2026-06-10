<template>
  <MermaidDiagram
    :aria-label="ariaLabel"
    :caption="caption"
    :diagram="resolvedDiagram"
    :insights="insights"
    :kicker="kicker"
    :title="title"
    variant="architecture"
  />
</template>

<script setup>
import { computed } from 'vue'
import MermaidDiagram from './MermaidDiagram.vue'

const props = defineProps({
  ariaLabel: { type: String, default: 'Diagrama Mermaid de arquitectura' },
  caption: {
    type: String,
    default: ''
  },
  diagram: { type: String, default: '' },
  kicker: { type: String, default: 'Mermaid flowchart' },
  title: { type: String, default: 'Arquitectura de capacidades' },
  insights: {
    type: Array,
    default: () => [
      { label: '01', title: 'Capas', detail: 'Agrupa responsabilidades sin saturar la slide.' },
      { label: '02', title: 'Flujo', detail: 'Muestra como viaja una decision de demanda a operacion.' },
      { label: '03', title: 'Control', detail: 'Ubica gobierno y observabilidad como capacidades transversales.' }
    ]
  }
})

const defaultDiagram = `flowchart LR
  subgraph Demand["Demand"]
    Signal["Signal"] --> Portfolio["Portfolio"]
  end

  subgraph Platform["Platform"]
    Design["Design system"] --> Delivery["Delivery pipeline"]
    Delivery --> Runtime["Runtime"]
  end

  subgraph Control["Control plane"]
    Policy["Policy"] --> Risk["Risk posture"]
    Telemetry["Telemetry"] --> Risk
  end

  Portfolio --> Design
  Runtime --> Telemetry
  Policy -. guardrails .-> Delivery

  classDef blue fill:#dbeafe,stroke:#2f81f7,color:#0f172a,stroke-width:2px;
  classDef green fill:#dcfce7,stroke:#22c55e,color:#0f172a,stroke-width:2px;
  classDef rose fill:#fce7f3,stroke:#f472b6,color:#0f172a,stroke-width:2px;
  class Signal,Portfolio blue;
  class Design,Delivery,Runtime green;
  class Policy,Risk,Telemetry rose;`

const resolvedDiagram = computed(() => props.diagram || defaultDiagram)
</script>
