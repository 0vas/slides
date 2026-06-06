<template>
  <div class="callout-stack">
    <article
      v-for="(item, index) in items"
      :key="item.title"
      v-motion
      :initial="{ opacity: 0, x: -14 }"
      :enter="{ opacity: 1, x: 0, transition: { delay: index * 80, duration: 420 } }"
      :class="item.tone"
    >
      <span>{{ item.label }}</span>
      <strong>{{ item.title }}</strong>
      <small>{{ item.detail }}</small>
    </article>
  </div>
</template>

<script setup>
defineProps({
  items: {
    type: Array,
    default: () => [
      { label: 'Insight', title: 'Lorem ipsum dolor sit amet.', detail: 'Consectetur adipiscing elit.', tone: 'blue' },
      { label: 'Riesgo', title: 'Integer posuere erat a ante.', detail: 'Donec id elit non mi porta.', tone: 'amber' },
      { label: 'Decision', title: 'Cras mattis consectetur purus.', detail: 'Aenean lacinia bibendum.', tone: 'green' }
    ]
  }
})
</script>
