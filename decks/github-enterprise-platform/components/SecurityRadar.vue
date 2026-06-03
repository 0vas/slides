<template>
  <div class="security-radar" aria-label="Radar de GitHub Advanced Security">
    <svg viewBox="0 0 520 360" role="img">
      <defs>
        <linearGradient id="radarSweep" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#2f81f7" stop-opacity="0.9" />
          <stop offset="100%" stop-color="#3fb950" stop-opacity="0.05" />
        </linearGradient>
      </defs>
      <circle cx="260" cy="180" r="128" class="radar-ring" />
      <circle cx="260" cy="180" r="86" class="radar-ring" />
      <circle cx="260" cy="180" r="44" class="radar-ring" />
      <path d="M260 180 L380 134 A128 128 0 0 1 348 274 Z" class="radar-sweep" />
      <line x1="132" y1="180" x2="388" y2="180" class="radar-axis" />
      <line x1="260" y1="52" x2="260" y2="308" class="radar-axis" />
      <g v-for="point in points" :key="point.label">
        <circle :cx="point.x" :cy="point.y" r="7" :class="['radar-dot', point.tone]" />
        <text :x="point.x + 14" :y="point.y + 5">{{ point.label }}</text>
      </g>
    </svg>
    <div class="radar-copy">
      <strong>Shift-left real</strong>
      <span>Secret scanning, code scanning y dependencias aparecen dentro del flujo, no despues del incidente.</span>
    </div>
  </div>
</template>

<script setup>
const points = [
  { label: 'Secrets', x: 332, y: 118, tone: 'blue' },
  { label: 'CodeQL', x: 186, y: 146, tone: 'green' },
  { label: 'Deps', x: 306, y: 246, tone: 'amber' },
  { label: 'Policy', x: 226, y: 220, tone: 'rose' }
]
</script>
