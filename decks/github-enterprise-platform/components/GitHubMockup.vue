<template>
  <div class="github-mockup" :class="variant">
    <div class="mock-topbar">
      <div class="mock-logo">GH</div>
      <span>{{ title }}</span>
      <strong>{{ badge }}</strong>
    </div>

    <div v-if="variant === 'org'" class="mock-org">
      <aside>
        <span>Enterprise</span>
        <strong>0vas-corp</strong>
        <small>Organizations · Policies · Billing</small>
      </aside>
      <section>
        <div v-for="(row, index) in orgRows" :key="row.name" v-motion
          :initial="{ opacity: 0, x: 18 }"
          :enter="{ opacity: 1, x: 0, transition: { delay: index * 90, duration: 420 } }"
          class="mock-row">
          <span>{{ row.name }}</span>
          <small>{{ row.detail }}</small>
          <em>{{ row.state }}</em>
        </div>
      </section>
    </div>

    <div v-else-if="variant === 'security'" class="mock-security">
      <div v-for="(item, index) in securityItems" :key="item.label" v-motion
        :initial="{ opacity: 0, y: 14 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: index * 120, duration: 420 } }"
        class="security-tile">
        <span>{{ item.count }}</span>
        <strong>{{ item.label }}</strong>
        <small>{{ item.detail }}</small>
      </div>
    </div>

    <div v-else class="mock-actions">
      <div v-for="(job, index) in jobs" :key="job.name" v-motion
        :initial="{ opacity: 0, scale: 0.96 }"
        :enter="{ opacity: 1, scale: 1, transition: { delay: index * 100, duration: 420 } }"
        class="job-row">
        <span :class="job.state"></span>
        <strong>{{ job.name }}</strong>
        <small>{{ job.time }}</small>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'org' },
  title: { type: String, default: 'GitHub Enterprise' },
  badge: { type: String, default: 'Platform view' }
})

const orgRows = [
  { name: 'engineering', detail: '186 repos · 24 teams', state: 'healthy' },
  { name: 'data-platform', detail: '73 repos · 9 teams', state: 'policy' },
  { name: 'internal-tools', detail: '42 repos · 7 teams', state: 'review' }
]

const securityItems = [
  { count: '18', label: 'Secrets blocked', detail: 'Push protection active' },
  { count: '42', label: 'Code alerts', detail: 'Prioritized by severity' },
  { count: '117', label: 'Dependency alerts', detail: 'Grouped by ecosystem' }
]

const jobs = [
  { name: 'policy-check', time: '12s', state: 'ok' },
  { name: 'codeql-analysis', time: '1m 48s', state: 'ok' },
  { name: 'deploy-preview', time: '32s', state: 'wait' },
  { name: 'approval-gate', time: 'manual', state: 'hold' }
]
</script>
