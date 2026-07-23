<template>
  <div class="enterprise-topology" :aria-label="ariaLabel">
    <article class="topology-center" :class="center.tone">
      <span>{{ center.label }}</span>
      <strong>{{ center.title }}</strong>
      <small>{{ center.detail }}</small>
    </article>
    <article
      v-for="(node, index) in nodes"
      :key="node.title"
      v-motion
      class="topology-node"
      :class="node.tone"
      :initial="{ opacity: 0, y: 12 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 80, duration: 420 } }"
    >
      <span>{{ node.label }}</span>
      <strong>{{ node.title }}</strong>
      <small>{{ node.detail }}</small>
    </article>
  </div>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'Enterprise topology' },
  center: {
    type: Object,
    default: () => ({ label: 'Core', title: 'Platform', detail: 'Shared capabilities and guardrails', tone: 'blue' })
  },
  nodes: {
    type: Array,
    default: () => [
      { label: 'Source', title: 'Repositories', detail: 'Code, reviews, ownership', tone: 'green' },
      { label: 'Build', title: 'Pipelines', detail: 'Tests, artifacts, security', tone: 'amber' },
      { label: 'Run', title: 'Runtime', detail: 'Deployments and operations', tone: 'rose' },
      { label: 'Learn', title: 'Signals', detail: 'Metrics, feedback, improvement', tone: 'blue' }
    ]
  }
})
</script>
