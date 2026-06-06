<template>
  <section class="thank-you-qr">
    <div
      v-motion
      :initial="{ opacity: 0, x: -28 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 560 } }"
      class="thank-you-copy"
    >
      <span class="kicker">Cierre</span>
      <h1>Gracias</h1>
      <p>
        Sigamos conversando sobre plataforma, gobierno, seguridad y adopcion con IA.
      </p>
      <div class="thank-you-meta">
        <strong>{{ speaker.name }}</strong>
        <span>{{ speaker.headline }} - {{ speaker.organization }}</span>
      </div>
    </div>

    <aside
      v-motion
      :initial="{ opacity: 0, scale: 0.96, y: 18 }"
      :enter="{ opacity: 1, scale: 1, y: 0, transition: { delay: 160, duration: 560 } }"
      class="thank-you-card"
      aria-label="QR de LinkedIn"
    >
      <img
        v-if="qrSrc"
        :src="qrSrc"
        :alt="`QR de LinkedIn de ${speaker.name}`"
      >
      <div v-else class="thank-you-qr-placeholder">
        <strong>QR</strong>
      </div>
      <div>
        <span>{{ speaker.linkedin.label }}</span>
        <strong>{{ speaker.linkedin.handle }}</strong>
      </div>
    </aside>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { speaker } from '../data/speaker.js'

const qrSrc = computed(() => speaker.linkedin?.qrImage || '')
</script>

<style scoped>
.thank-you-qr {
  align-items: center;
  display: grid;
  gap: 2.2rem;
  grid-template-columns: minmax(0, 1fr) 330px;
  min-height: 100%;
}

.thank-you-copy h1 {
  font-size: 4.2rem;
  line-height: 0.95;
  margin: 0.35rem 0 1rem;
  max-width: 720px;
}

.thank-you-copy p {
  color: rgba(226, 232, 240, 0.74);
  font-size: 1.28rem;
  line-height: 1.35;
  margin: 0;
  max-width: 740px;
}

.thank-you-meta {
  border-left: 4px solid var(--deck-green);
  display: grid;
  gap: 0.25rem;
  margin-top: 2rem;
  padding-left: 1rem;
}

.thank-you-meta strong {
  color: var(--deck-ink);
  font-size: 1.1rem;
}

.thank-you-meta span {
  color: var(--deck-muted);
  font-size: 0.92rem;
}

.thank-you-card {
  background:
    linear-gradient(145deg, rgba(15, 21, 32, 0.94), rgba(8, 11, 16, 0.94)) padding-box,
    var(--border-gradient) border-box;
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.34);
  display: grid;
  gap: 1rem;
  padding: 1rem;
}

.thank-you-card img,
.thank-you-qr-placeholder {
  aspect-ratio: 1;
  background: #f8fafc;
  border: 1px solid rgba(148, 163, 184, 0.32);
  border-radius: 6px;
  display: block;
  object-fit: contain;
  width: 100%;
}

.thank-you-qr-placeholder {
  align-items: center;
  color: var(--deck-blue);
  display: flex;
  font-size: 2rem;
  font-weight: 900;
  justify-content: center;
}

.thank-you-card span {
  color: var(--deck-cyan);
  display: block;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.thank-you-card strong {
  color: var(--deck-ink);
  display: block;
  font-size: 1.2rem;
  margin-top: 0.18rem;
  overflow-wrap: anywhere;
}

@media (max-width: 820px) {
  .thank-you-qr {
    grid-template-columns: 1fr;
  }

  .thank-you-card {
    max-width: 320px;
  }
}
</style>
