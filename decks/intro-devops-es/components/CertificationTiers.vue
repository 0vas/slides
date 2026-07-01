<template>
  <div class="cert-tier-grid">
    <article
      v-for="(tier, index) in tiers"
      :key="tier.title"
      v-motion
      :initial="{ opacity: 0, y: 12 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 90, duration: 420 } }"
      class="cert-tier"
      :class="tier.tone"
    >
      <span>{{ tier.level }}</span>
      <strong>{{ tier.title }}</strong>
      <ul>
        <li v-for="item in tier.items" :key="item">{{ item }}</li>
      </ul>
    </article>
  </div>
</template>

<script setup>
const tiers = [
  {
    level: 'Base',
    title: 'Fundamentos operativos',
    tone: 'blue',
    items: ['Linux y terminal', 'Git y branching', 'Redes básicas', 'Scripting']
  },
  {
    level: 'Media',
    title: 'Entrega moderna',
    tone: 'green',
    items: ['CI/CD', 'Contenedores', 'Infraestructura como código', 'Observabilidad']
  },
  {
    level: 'Especializada',
    title: 'Escala y criterio',
    tone: 'amber',
    items: ['Seguridad integrada', 'Kubernetes avanzado', 'Platform Engineering', 'Arquitectura cloud']
  }
]
</script>

<style scoped>
.cert-tier-grid {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  margin-top: 18px;
}

.cert-tier {
  min-height: 188px;
  padding: 14px;
  border: 1px solid var(--deck-line);
  border-radius: 8px;
  background:
    radial-gradient(circle at 88% 10%, var(--tier-glow), transparent 34%),
    linear-gradient(145deg, rgba(21, 28, 42, 0.96), rgba(8, 11, 16, 0.9));
  box-shadow: 0 18px 44px rgba(0, 0, 0, 0.22);
}

.cert-tier span {
  align-items: center;
  border: 1px solid var(--tier-color);
  border-radius: 999px;
  color: var(--tier-color);
  display: inline-flex;
  font-size: 0.68rem;
  font-weight: 900;
  letter-spacing: 0.08em;
  padding: 0.28rem 0.52rem;
  text-transform: uppercase;
}

.cert-tier strong {
  color: var(--deck-ink);
  display: block;
  font-size: 1.08rem;
  line-height: 1.08;
  margin-top: 14px;
}

.cert-tier ul {
  color: var(--deck-muted);
  display: grid;
  gap: 7px;
  font-size: 0.78rem;
  line-height: 1.16;
  list-style: none;
  margin: 14px 0 0;
  padding: 0;
}

.cert-tier li {
  padding-left: 14px;
  position: relative;
}

.cert-tier li::before {
  background: var(--tier-color);
  border-radius: 999px;
  content: "";
  height: 5px;
  left: 0;
  position: absolute;
  top: 0.48em;
  width: 5px;
}

.blue {
  --tier-color: var(--deck-blue);
  --tier-glow: rgba(88, 166, 255, 0.18);
}

.green {
  --tier-color: var(--deck-green);
  --tier-glow: rgba(61, 220, 132, 0.16);
}

.amber {
  --tier-color: var(--deck-amber);
  --tier-glow: rgba(255, 184, 107, 0.16);
}
</style>
