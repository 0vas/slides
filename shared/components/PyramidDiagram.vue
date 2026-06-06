<template>
  <div class="pyramid-diagram" role="img" :aria-label="ariaLabel">
    <article
      v-for="(level, index) in levels"
      :key="level.title"
      v-motion
      :initial="{ opacity: 0, y: 16 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 90, duration: 420 } }"
      :style="{ '--level-width': `${level.width}%` }"
      :class="level.tone"
    >
      <span>{{ level.label }}</span>
      <strong>{{ level.title }}</strong>
      <small>{{ level.detail }}</small>
    </article>
  </div>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'Piramide conceptual' },
  levels: {
    type: Array,
    default: () => [
      { label: '01', title: 'Vision', detail: 'Lorem ipsum', width: 42, tone: 'rose' },
      { label: '02', title: 'Modelo', detail: 'Consectetur', width: 58, tone: 'amber' },
      { label: '03', title: 'Sistema', detail: 'Adipiscing', width: 74, tone: 'green' },
      { label: '04', title: 'Operacion', detail: 'Dolor sit', width: 90, tone: 'blue' }
    ]
  }
})
</script>
