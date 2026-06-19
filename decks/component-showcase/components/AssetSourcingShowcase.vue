<template>
  <div class="asset-sourcing-showcase">
    <figure
      v-motion
      :initial="{ opacity: 0, y: 16 }"
      :enter="{ opacity: 1, y: 0, transition: { duration: 520 } }"
      class="asset-photo"
    >
      <img :src="photoSrc" alt="Personas colaborando con laptops">
      <figcaption>
        <span>Pexels</span>
        <strong>Foto editorial descargada al deck</strong>
      </figcaption>
    </figure>

    <div class="asset-guidance">
      <div
        v-motion
        :initial="{ opacity: 0, x: 18 }"
        :enter="{ opacity: 1, x: 0, transition: { delay: 120, duration: 520 } }"
        class="asset-icon-card"
      >
        <img :src="iconSrc" alt="Icono DevOps de SVG Repo">
        <div>
          <span>SVG Repo</span>
          <strong>Iconos SVG locales</strong>
          <small>Buscar por dominio, validar licencia y guardar en `public/media/icons/`.</small>
        </div>
      </div>

      <div class="asset-rule-grid">
        <div v-for="item in rules" :key="item.title">
          <span>{{ item.label }}</span>
          <strong>{{ item.title }}</strong>
          <small>{{ item.copy }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const base = import.meta.env.BASE_URL.replace(/\/$/, '')

const photoSrc = `${base}/media/pexels-collaboration-laptop.jpg`
const iconSrc = `${base}/media/icons/svgrepo-devops-deploy.svg`

const rules = [
  {
    label: '01',
    title: 'Organico',
    copy: 'La imagen debe ampliar la idea del slide, no decorar por costumbre.'
  },
  {
    label: '02',
    title: 'Local',
    copy: 'Descargar assets aprobados al deck para que Pages funcione sin internet.'
  },
  {
    label: '03',
    title: 'Trazable',
    copy: 'Conservar fuente, autor y licencia en docs o metadatos del deck.'
  }
]
</script>
