<template>
  <div class="maturity-curve">
    <svg viewBox="0 0 900 320" role="img">
      <path d="M70 260 C210 250 260 190 350 178 C470 160 500 92 610 86 C720 80 760 58 830 48" class="curve-line" />
      <g v-for="(point, index) in points" :key="point.title">
        <circle :cx="point.x" :cy="point.y" r="10" class="curve-dot" />
        <text :x="point.x - 36" :y="point.y - 24">{{ point.title }}</text>
        <text :x="point.x - 36" :y="point.y + 42" class="curve-small">{{ point.detail }}</text>
      </g>
    </svg>
  </div>
</template>

<script setup>
const points = [
  { x: 90, y: 258, title: 'Caos', detail: 'Repos sueltos' },
  { x: 320, y: 183, title: 'Orden', detail: 'Estandares' },
  { x: 590, y: 90, title: 'Escala', detail: 'Self-service' },
  { x: 820, y: 50, title: 'Plataforma', detail: 'Medicion' }
]
</script>
