<template>
  <div class="security-radar" :aria-label="ariaLabel">
    <svg viewBox="0 0 520 360" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="radarSweep" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0" stop-color="#2f81f7" stop-opacity="0.38"/>
          <stop offset="1" stop-color="#3fb950" stop-opacity="0.03"/>
        </linearGradient>
      </defs>
      <circle class="radar-ring" cx="260" cy="180" r="48"/>
      <circle class="radar-ring" cx="260" cy="180" r="96"/>
      <circle class="radar-ring" cx="260" cy="180" r="144"/>
      <path class="radar-axis" d="M260 36V324M116 180H404M158 78L362 282M362 78L158 282"/>
      <path class="radar-sweep" d="M260 180 L260 36 A144 144 0 0 1 374 92 Z"/>
      <g v-for="(point, index) in points" :key="point.label">
        <circle
          class="radar-dot"
          :class="point.tone"
          :cx="point.x"
          :cy="point.y"
          r="8"
        />
        <text :x="point.x + 14" :y="point.y + (index % 2 === 0 ? -10 : 22)">{{ point.label }}</text>
      </g>
    </svg>
    <div class="radar-copy">
      <strong>{{ title }}</strong>
      <span>{{ detail }}</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'Security radar' },
  title: { type: String, default: 'Riesgo visible antes del despliegue' },
  detail: { type: String, default: 'Combina señales de código, dependencias, configuración y runtime para tomar decisiones con evidencia.' },
  points: {
    type: Array,
    default: () => [
      { label: 'SAST', x: 220, y: 114, tone: 'blue' },
      { label: 'SCA', x: 326, y: 132, tone: 'green' },
      { label: 'Secrets', x: 190, y: 226, tone: 'rose' },
      { label: 'IaC', x: 336, y: 246, tone: 'amber' }
    ]
  }
})
</script>
