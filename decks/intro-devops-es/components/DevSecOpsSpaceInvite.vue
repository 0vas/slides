<template>
  <section class="devsecops-invite">
    <div
      v-motion
      :initial="{ opacity: 0, x: -24 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 560 } }"
      class="devsecops-copy"
    >
      <span class="kicker">Comunidad</span>
      <h1>DevSecOps Space</h1>
      <p>Un espacio para seguir compartiendo practicas, aprendizajes y comunidad.</p>
    </div>

    <figure
      v-motion
      :initial="{ opacity: 0, scale: 0.96, y: 20 }"
      :enter="{ opacity: 1, scale: 1, y: 0, transition: { delay: 140, duration: 560 } }"
      class="devsecops-media"
    >
      <img
        v-if="resolvedImageSrc"
        :src="resolvedImageSrc"
        :alt="imageAlt"
      >
      <div v-else class="devsecops-placeholder">
        <span>Imagen</span>
        <strong>DevSecOps Space</strong>
      </div>
    </figure>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  imageSrc: { type: String, default: '' },
  imagePath: { type: String, default: '' },
  imageAlt: { type: String, default: 'Invitacion a DevSecOps Space' }
})

const resolvedImageSrc = computed(() => {
  if (props.imageSrc) return props.imageSrc
  if (!props.imagePath) return ''

  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const path = props.imagePath.replace(/^\//, '')
  return `${base}/${path}`
})
</script>

<style scoped>
.devsecops-invite {
  align-items: stretch;
  display: grid;
  gap: 1.6rem;
  grid-template-columns: minmax(300px, 0.76fr) minmax(0, 1.24fr);
  min-height: 100%;
}

.devsecops-copy {
  align-content: center;
  display: grid;
}

.devsecops-copy h1 {
  font-size: 3.25rem;
  line-height: 1;
  margin: 0.35rem 0 1rem;
  max-width: 620px;
}

.devsecops-copy p {
  color: rgba(226, 232, 240, 0.74);
  font-size: 1.18rem;
  line-height: 1.36;
  margin: 0;
  max-width: 560px;
}

.devsecops-media {
  background:
    linear-gradient(145deg, rgba(15, 21, 32, 0.94), rgba(8, 11, 16, 0.94)) padding-box,
    var(--border-gradient) border-box;
  border: 1px solid transparent;
  border-radius: 8px;
  box-shadow: 0 30px 70px rgba(0, 0, 0, 0.34);
  display: grid;
  margin: 0;
  min-height: 460px;
  overflow: hidden;
}

.devsecops-media img {
  height: 100%;
  object-fit: contain;
  width: 100%;
}

.devsecops-placeholder {
  align-content: center;
  background:
    radial-gradient(circle at 30% 20%, rgba(47, 129, 247, 0.22), transparent 34%),
    radial-gradient(circle at 80% 78%, rgba(46, 160, 67, 0.2), transparent 38%),
    linear-gradient(145deg, rgba(13, 17, 23, 0.95), rgba(22, 27, 34, 0.92));
  display: grid;
  gap: 0.55rem;
  justify-items: center;
  min-height: 100%;
  padding: 2rem;
  text-align: center;
}

.devsecops-placeholder span {
  color: var(--deck-green);
  font-size: 0.74rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.devsecops-placeholder strong {
  color: var(--deck-ink);
  font-size: 2rem;
  line-height: 1.05;
}

@media (max-width: 820px) {
  .devsecops-invite {
    grid-template-columns: 1fr;
  }

  .devsecops-media {
    min-height: 320px;
  }
}
</style>
