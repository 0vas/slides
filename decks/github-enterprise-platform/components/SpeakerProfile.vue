<template>
  <section class="speaker-profile">
    <div
      v-motion
      :initial="{ opacity: 0, x: -24 }"
      :enter="{ opacity: 1, x: 0, transition: { duration: 560 } }"
      class="speaker-identity"
    >
      <span class="kicker">Quien les habla</span>
      <h2>{{ speaker.name }}</h2>
      <p>{{ speaker.headline }} en {{ speaker.organization }}</p>

      <div class="speaker-roles">
        <div
          v-for="(role, index) in speaker.roles"
          :key="role"
          v-motion
          :initial="{ opacity: 0, y: 12 }"
          :enter="{ opacity: 1, y: 0, transition: { delay: 140 + index * 90, duration: 420 } }"
        >
          <span></span>
          <strong>{{ role }}</strong>
        </div>
      </div>
    </div>

    <div
      v-motion
      :initial="{ opacity: 0, scale: 0.96, filter: 'blur(8px)' }"
      :enter="{ opacity: 1, scale: 1, filter: 'blur(0px)', transition: { delay: 180, duration: 560 } }"
      class="speaker-card"
      :class="{ 'has-photo': photoSrc && !photoFailed }"
    >
      <div class="speaker-avatar">
        <img
          v-if="photoSrc && !photoFailed"
          :src="photoSrc"
          :alt="speaker.name"
          @error="photoFailed = true"
        />
        <span v-else>{{ speaker.initials }}</span>
      </div>

      <div class="speaker-meta">
        <span>{{ speaker.talkRole }}</span>
        <strong>{{ speaker.shortName }}</strong>
        <small>{{ speaker.location }}</small>
      </div>

      <div class="speaker-tags">
        <span v-for="tag in speaker.tags" :key="tag">{{ tag }}</span>
      </div>

      <div class="speaker-links">
        <a
          v-for="profile in speaker.profiles"
          :key="profile.label"
          :href="profile.url || undefined"
          target="_blank"
          rel="noreferrer"
        >
          <span>{{ profile.label }}</span>
          <strong>{{ profile.value }}</strong>
        </a>
      </div>

      <div class="speaker-qr">
        <img
          v-if="qrSrc && !qrFailed"
          :src="qrSrc"
          :alt="`QR de LinkedIn de ${speaker.name}`"
          @error="qrFailed = true"
        />
        <div v-else class="qr-placeholder" aria-label="QR de LinkedIn pendiente">
          <span></span>
          <span></span>
          <span></span>
          <strong>QR</strong>
        </div>
        <div>
          <span>LinkedIn</span>
          <strong>{{ speaker.linkedin.handle }}</strong>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import { speaker } from '../data/speaker.js'

const photoFailed = ref(false)
const qrFailed = ref(false)

const asset = (path) => {
  if (!path) return ''
  if (/^(https?:|data:|\/)/.test(path)) return path
  return `${import.meta.env.BASE_URL}${path}`
}

const photoSrc = computed(() => asset(speaker.photoImage))
const qrSrc = computed(() => asset(speaker.linkedin.qrImage))
</script>
