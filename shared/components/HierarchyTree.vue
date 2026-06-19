<template>
  <div class="hierarchy-tree" role="tree" :aria-label="ariaLabel">
    <div class="hierarchy-root">
      <span>{{ root.label }}</span>
      <strong>{{ root.title }}</strong>
    </div>
    <div class="hierarchy-branches">
      <article
        v-for="(branch, index) in branches"
        :key="branch.title"
        v-motion
        :initial="{ opacity: 0, y: 16 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: index * 90, duration: 420 } }"
      >
        <span>{{ branch.label }}</span>
        <strong>{{ branch.title }}</strong>
        <small>{{ branch.detail }}</small>
      </article>
    </div>
  </div>
</template>

<script setup>
defineProps({
  ariaLabel: { type: String, default: 'Arbol jerarquico' },
  root: {
    type: Object,
    default: () => ({ label: 'Root', title: 'Lorem ipsum' })
  },
  branches: {
    type: Array,
    default: () => [
      { label: 'Nivel 1', title: 'Consectetur', detail: 'Dominio principal' },
      { label: 'Nivel 2', title: 'Adipiscing', detail: 'Equipo o capability' },
      { label: 'Nivel 3', title: 'Vestibulum', detail: 'Servicio o artefacto' }
    ]
  }
})
</script>
