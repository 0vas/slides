<template>
  <figure class="quote-frame">
    <div class="quote-mark" aria-hidden="true">"</div>
    <blockquote>{{ quote }}</blockquote>
    <figcaption>
      <strong>{{ author }}</strong>
      <span>{{ role }}</span>
    </figcaption>
  </figure>
</template>

<script setup>
defineProps({
  quote: {
    type: String,
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. La claridad tambien es una arquitectura.'
  },
  author: { type: String, default: 'Speaker' },
  role: { type: String, default: 'Contexto de la sesion' }
})
</script>
