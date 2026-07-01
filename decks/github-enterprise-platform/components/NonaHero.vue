<template>
  <figure
    v-motion
    :initial="{ opacity: 0, scale: 0.94, y: 18 }"
    :enter="{ opacity: 1, scale: 1, y: 0, transition: { delay: 180, duration: 620 } }"
    class="hero-nona"
  >
    <img :src="imageSrc" alt="Nona de GitHub">
  </figure>
</template>

<script setup>
const base = import.meta.env.BASE_URL.replace(/\/$/, '')
const imageSrc = `${base}/media/nona-github.png`
</script>
