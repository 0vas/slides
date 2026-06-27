<template>
  <div class="cert-badges" :class="variant">
    <article
      v-for="(cert, index) in visibleCerts"
      :key="cert.code"
      v-motion
      :initial="{ opacity: 0, y: 10 }"
      :enter="{ opacity: 1, y: 0, transition: { delay: index * 45, duration: 360 } }"
      class="cert-badge"
      :class="cert.tone"
      :title="cert.title"
      :aria-label="cert.title"
    >
      <span class="cert-mark">{{ cert.mark }}</span>
      <strong>{{ cert.code }}</strong>
      <small>{{ cert.issuer }}</small>
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'compact' },
  limit: { type: Number, default: 12 }
})

const certs = [
  { mark: '400', code: 'AZ-400', issuer: 'Microsoft', title: 'Azure DevOps Engineer Expert - AZ400 | Microsoft', tone: 'azure' },
  { mark: '300', code: 'AZ-300', issuer: 'Microsoft', title: 'Azure Solutions Architect Expert AZ300 | Microsoft', tone: 'azure' },
  { mark: 'SEC', code: 'GHAS', issuer: 'GitHub', title: 'GitHub Advanced Security | GitHub', tone: 'github' },
  { mark: 'ACT', code: 'Actions', issuer: 'GitHub', title: 'GitHub Actions | GitHub', tone: 'github' },
  { mark: 'AI', code: 'Copilot', issuer: 'GitHub', title: 'GitHub Copilot | GitHub', tone: 'github' },
  { mark: 'TF', code: 'Terraform', issuer: 'HashiCorp', title: 'Terraform Associate | HashiCorp', tone: 'terraform' },
  { mark: 'K8s', code: 'K8s', issuer: 'IBM', title: 'Containers & Kubernetes Essentials | IBM', tone: 'kubernetes' },
  { mark: 'RH', code: 'Ansible', issuer: 'Red Hat', title: 'Ansible for Red Hat Enterprise Linux | Red Hat', tone: 'redhat' },
  { mark: 'AWS', code: 'AWS TE', issuer: 'AWS', title: 'AWS Technical Essentials | Amazon Web Services', tone: 'aws' },
  { mark: 'GCP', code: 'Leader', issuer: 'Google', title: 'Google Cloud Platform Leader | Google', tone: 'gcp' },
  { mark: 'AZ', code: 'AZ-204', issuer: 'Microsoft', title: 'Azure Developer Associate - AZ204 | Microsoft', tone: 'azure' },
  { mark: 'SEC', code: 'CCNA Ops', issuer: 'Cisco', title: 'CCNA Cybersecurity Operations | CISCO', tone: 'cisco' }
]

const visibleCerts = computed(() => certs.slice(0, props.limit))
</script>

<style scoped>
.cert-badges {
  display: grid;
  gap: 10px;
}

.cert-badges.compact {
  grid-template-columns: repeat(8, minmax(0, 1fr));
  gap: 7px;
}

.cert-badges.showcase {
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
}

.cert-badge {
  min-height: 78px;
  padding: 10px;
  display: grid;
  grid-template-columns: 34px minmax(0, 1fr);
  grid-template-rows: auto auto;
  gap: 4px 8px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid rgba(148, 163, 184, 0.32);
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 12px 26px rgba(15, 23, 42, 0.07);
}

.cert-mark {
  grid-row: span 2;
  width: 34px;
  height: 34px;
  display: grid;
  place-items: center;
  border-radius: 8px;
  color: #ffffff;
  font-size: 0.58rem;
  font-weight: 900;
  line-height: 1;
}

.cert-badge strong {
  min-width: 0;
  color: var(--deck-ink);
  font-size: 0.76rem;
  line-height: 1.05;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cert-badge small {
  min-width: 0;
  color: var(--deck-muted);
  font-size: 0.58rem;
  font-weight: 700;
  line-height: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.showcase .cert-badge {
  min-height: 76px;
  padding: 10px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
}

.showcase .cert-mark {
  width: 48px;
  height: 48px;
  font-size: 0.72rem;
}

.showcase .cert-badge strong {
  display: none;
}

.showcase .cert-badge small {
  display: none;
}

.compact .cert-badge {
  min-height: 46px;
  padding: 6px;
  display: grid;
  grid-template-columns: 1fr;
  place-items: center;
}

.compact .cert-mark {
  width: 32px;
  height: 32px;
  font-size: 0.54rem;
}

.compact .cert-badge strong,
.compact .cert-badge small {
  display: none;
}

.azure .cert-mark { background: linear-gradient(135deg, #0078d4, #50a7f4); }
.github .cert-mark { background: linear-gradient(135deg, #111827, #475569); }
.terraform .cert-mark { background: linear-gradient(135deg, #5c4ee5, #8b5cf6); }
.kubernetes .cert-mark { background: linear-gradient(135deg, #326ce5, #22d3ee); }
.redhat .cert-mark { background: linear-gradient(135deg, #dc2626, #991b1b); }
.aws .cert-mark { background: linear-gradient(135deg, #232f3e, #ff9900); }
.gcp .cert-mark { background: linear-gradient(135deg, #4285f4, #34a853); }
.cisco .cert-mark { background: linear-gradient(135deg, #1ba0d7, #0f766e); }
</style>
