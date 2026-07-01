<template>
  <SharedMediaFrame v-bind="$attrs" :src="resolvedSrc" />
</template>

<script setup>
import SharedMediaFrame from '../../../shared/components/MediaFrame.vue'
import { computed } from 'vue'

const props = defineProps({
  src: { type: String, default: '' }
})

const base = import.meta.env.BASE_URL.replace(/\/$/, '')

const resolvedSrc = computed(() => {
  if (!props.src) return ''
  if (/^(?:https?:|data:|\/)/.test(props.src)) return props.src
  return `${base}/${props.src.replace(/^\.\//, '')}`
})
</script>
