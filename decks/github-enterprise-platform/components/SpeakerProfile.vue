<template>
  <SharedSpeakerProfile
    :speaker="speaker"
    kicker="Quien les habla"
    organization-connector="en"
    v-bind="$attrs"
  />
</template>

<script setup>
import SharedSpeakerProfile from '../../../shared/components/SpeakerProfile.vue'
import { speaker } from '../data/speaker.js'
</script>
