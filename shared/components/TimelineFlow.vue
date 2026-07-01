<template>
  <div class="timeline-flow" :aria-label="ariaLabel">
    <article
      v-for="(item, index) in items"
      :key="`${item.when || item.label || index}-${item.title}`"
      v-motion
      :initial="{ opacity: 0, y: 14 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 90, duration: 420 } }"
      :class="item.tone"
    >
      <span>{{ item.when || item.label }}</span>
      <strong>{{ item.title }}</strong>
      <small>{{ item.detail }}</small>
    </article>
  </div>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'Timeline flow' },
  items: {
    type: Array,
    default: () => [
      { when: '01', title: 'Start', detail: 'Define the first meaningful step.', tone: 'blue' },
      { when: '02', title: 'Build', detail: 'Create the reusable capability.', tone: 'green' },
      { when: '03', title: 'Validate', detail: 'Prove the outcome with evidence.', tone: 'amber' },
      { when: '04', title: 'Improve', detail: 'Feed learning into the next cycle.', tone: 'rose' }
    ]
  }
})
</script>
