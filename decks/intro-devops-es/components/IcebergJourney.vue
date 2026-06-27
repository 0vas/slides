<template>
  <section class="iceberg-stage" :class="`state-${mode}`">
    <div class="iceberg-copy">
      <span class="small-label">{{ label }}</span>
      <h2>{{ title }}</h2>
      <p>{{ subtitle }}</p>

      <div class="iceberg-callouts">
        <article
          v-for="(item, index) in callouts"
          :key="item"
          v-motion
          :initial="{ opacity: 0, y: 14 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: index * 65, duration: 420 } }"
        >
          {{ item }}
        </article>
      </div>

    </div>

    <div class="iceberg-visual" aria-hidden="true">
      <svg viewBox="0 0 760 560">
        <defs>
          <linearGradient :id="`sky-${mode}`" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#f8fdff" />
            <stop offset="100%" stop-color="#dff5ff" />
          </linearGradient>
          <linearGradient :id="`water-${mode}`" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#8ad7ff" stop-opacity="0.58" />
            <stop offset="100%" stop-color="#0f4c81" stop-opacity="0.76" />
          </linearGradient>
          <linearGradient :id="`ice-${mode}`" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#ffffff" />
            <stop offset="55%" stop-color="#dff7ff" />
            <stop offset="100%" stop-color="#9bdaf4" />
          </linearGradient>
          <filter :id="`softShadow-${mode}`" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="18" stdDeviation="22" flood-color="#0f172a" flood-opacity="0.18" />
          </filter>
        </defs>

        <rect x="0" y="0" width="760" height="560" rx="28" :fill="`url(#sky-${mode})`" />
        <path d="M0 236 C110 218 190 252 292 232 C416 208 530 222 760 198 L760 560 L0 560 Z" :fill="`url(#water-${mode})`" />
        <path d="M0 235 C118 219 210 254 312 232 C436 205 542 222 760 198" fill="none" stroke="#ffffff" stroke-width="5" opacity="0.9" />

        <g :filter="`url(#softShadow-${mode})`">
          <path d="M365 72 L248 236 L500 236 Z" :fill="`url(#ice-${mode})`" />
          <path d="M365 72 L398 236 L500 236 Z" fill="#c1ecfb" opacity="0.9" />
          <path d="M248 236 L398 236 L558 508 L272 508 Z" fill="#b6ebff" :opacity="underwaterOpacity" />
          <path d="M398 236 L500 236 L558 508 Z" fill="#63c5ec" :opacity="underwaterOpacity" />
          <path d="M248 236 L272 508 L176 386 Z" fill="#e3fbff" :opacity="underwaterOpacity * 0.9" />
          <path d="M302 236 L358 338 L326 474" fill="none" stroke="#ffffff" stroke-width="4" opacity="0.5" />
          <path d="M418 250 L466 368 L438 496" fill="none" stroke="#ffffff" stroke-width="4" :opacity="underwaterOpacity * 0.6" />
        </g>

        <g :opacity="mode === 'hidden' ? 1 : 0.2">
          <circle cx="178" cy="378" r="4" fill="#ffffff" />
          <circle cx="612" cy="326" r="3" fill="#ffffff" />
          <circle cx="590" cy="462" r="5" fill="#ffffff" />
          <circle cx="232" cy="452" r="3" fill="#ffffff" />
        </g>
      </svg>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  mode: { type: String, default: 'visible' },
  label: { type: String, default: 'Trayectoria' },
  title: { type: String, required: true },
  subtitle: { type: String, required: true },
  callouts: { type: Array, default: () => [] }
})

const underwaterOpacity = computed(() => (props.mode === 'hidden' ? 0.96 : 0.24))
</script>

<style scoped>
.iceberg-stage {
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: 24px;
  align-items: center;
  min-height: 500px;
}

.iceberg-copy h2 {
  margin: 10px 0 10px;
  font-size: 2.62rem;
  line-height: 1;
  letter-spacing: 0;
}

.iceberg-copy p {
  max-width: 620px;
  color: var(--deck-muted);
  font-size: 1rem;
  line-height: 1.34;
}

.iceberg-callouts {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 8px;
  margin-top: 14px;
}

.iceberg-callouts article {
  padding: 8px 10px;
  min-height: 42px;
  display: flex;
  align-items: center;
  border: 1px solid var(--deck-line);
  border-radius: 8px;
  background: rgba(21, 28, 42, 0.86);
  color: var(--deck-ink);
  font-size: 0.72rem;
  font-weight: 750;
  line-height: 1.18;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.2);
}

.iceberg-visual svg {
  width: 100%;
  height: auto;
  display: block;
}

.state-hidden .iceberg-visual {
  transform: translateY(-8px);
}
</style>
