---
theme: default
title: GitHub en modo empresa
info: |
  Como GitHub pasa de ser una herramienta para developers a una plataforma empresarial.
transition: slide-left
background: "#080b10"
class: deck palette-aurora
defaults:
  class: deck palette-aurora
routerMode: hash
record: false
download: false
drawings:
  enabled: false
---

<div class="hero-grid">
  <div>
    <span class="kicker">Git · GitHub · Actions · Seguridad · AI</span>
    <h1 class="cover-title">
      <TypingTitle as="span" text="GitHub en modo" />
      <TypingTitle as="span" text="empresa" :delay="880" class="cover-title-accent" />
    </h1>
    <p class="lead">Lo que no aparece en los tutoriales cuando GitHub empieza a operar a escala.</p>
  </div>
  <div class="hero-visual-stack">
    <GitHubMockup variant="actions" title="Repository checks" badge="Enterprise flow" />
    <NonaHero />
  </div>
</div>

---
transition: slide-up
---

<SpeakerProfile :show-meta="false" :show-qr-label="false" />

---
transition: fade
---

<span class="kicker">Promesa de la sesion</span>

<TypingTitle as="h2" text="Vamos a cambiar el lente" />

<div class="big-contrast">
  <div v-click>
    <span>Developer view</span>
    <strong>Repos, ramas, PRs</strong>
  </div>
  <div v-click>
    <span>Platform view</span>
    <strong>Gobierno, seguridad, escala</strong>
  </div>
</div>

---
transition: slide-left
---

<span class="kicker">Agenda</span>

## Ruta de 30 minutos

<div class="agenda-grid">
  <div><span>01</span><strong>De repo a plataforma</strong><small>Que cambia cuando GitHub entra a una empresa.</small></div>
  <div><span>02</span><strong>Gobierno y escala</strong><small>Identidad, equipos, ownership y politicas.</small></div>
  <div><span>03</span><strong>Seguridad integrada</strong><small>GitHub Advanced Security en el flujo real.</small></div>
  <div><span>04</span><strong>Productividad asistida</strong><small>Copilot, adopcion y medicion.</small></div>
  <div><span>05</span><strong>Practica y trial</strong><small>Como crear tu propio enterprise gratuito.</small></div>
</div>

---
transition: fade
layout: section
class: deck palette-aurora section-platform
---

<TypingTitle text="1. De repo a plataforma" />

---
transition: slide-up
---

<span class="kicker">Punto de partida</span>

## Todos creemos conocer GitHub

<div class="developer-strip">
  <div v-click class="strip-card blue">Commits</div>
  <div v-click class="strip-card green">Branches</div>
  <div v-click class="strip-card amber">Pull requests</div>
  <div v-click class="strip-card rose">Reviews</div>
</div>

<p v-click class="punchline">Eso es GitHub como herramienta. Una empresa necesita GitHub como sistema operativo de desarrollo.</p>

---
transition: slide-left
---

<span class="kicker">Cambio de escala</span>

## De herramienta a plataforma

<PlatformMap />

---
transition: fade
---

<span class="kicker">Vista enterprise</span>

## La pantalla cambia cuando administras, no solo desarrollas

<GitHubMockup variant="org" title="Enterprise account" badge="Admin view" />

---
transition: slide-left
---

<span class="kicker">Arquitectura mental</span>

## GitHub empresarial es un mapa de dependencias

<EnterpriseTopology />

---
transition: slide-left
---

<span class="kicker">Madurez</span>

## El objetivo no es controlar todo, es escalar sin caos

<MaturityCurve />

---
transition: fade
layout: section
class: deck palette-aurora section-platform
---

<TypingTitle text="2. Gobierno y escala" />

---
transition: slide-up
---

<span class="kicker">Gobierno</span>

## Lo que hay que ordenar antes de escalar

<GovernanceGrid />

---
transition: slide-up
---

<span class="kicker">Identidad y acceso</span>

## El primer problema empresarial no es Git, es identidad

<div class="policy-grid">
  <div v-click><span>SSO</span><strong>Un inicio de sesion</strong><small>La identidad corporativa manda.</small></div>
  <div v-click><span>SCIM</span><strong>Altas y bajas</strong><small>Usuarios sincronizados con el directorio.</small></div>
  <div v-click><span>RBAC</span><strong>Menor privilegio</strong><small>Acceso por rol, equipo y necesidad.</small></div>
</div>

---
transition: fade
---

<span class="kicker">Ownership</span>

## Cada repo debe tener dueno

<div class="ownership-board">
  <div v-click><strong>CODEOWNERS</strong><span>Revision automatica por expertos.</span></div>
  <div v-click><strong>Topics</strong><span>Clasificacion por dominio y criticidad.</span></div>
  <div v-click><strong>Templates</strong><span>Repos nuevos con estructura base.</span></div>
  <div v-click><strong>Rulesets</strong><span>Politicas comunes sin copiar configuracion.</span></div>
</div>

---
transition: slide-left
---

<span class="kicker">Pull request como control</span>

## La calidad entra por el flujo

<BranchProtectionFlow />

---
transition: slide-left
---

<span class="kicker">GitHub Actions</span>

## Automatizar no es solo CI/CD

<GitHubMockup variant="actions" title="Actions workflow" badge="Automation" />

---
transition: fade
---

<span class="kicker">Operacion real</span>

## La plataforma que casi nadie ve

<div class="ops-board">
  <div v-click class="ops-lane"><strong>Entrada</strong><span>Usuarios, equipos, repos, integraciones.</span></div>
  <div v-click class="ops-lane"><strong>Control</strong><span>Reglas, permisos, compliance, auditoria.</span></div>
  <div v-click class="ops-lane"><strong>Salida</strong><span>Metricas, trazabilidad, adopcion y soporte.</span></div>
</div>

---
transition: fade
layout: section
class: deck palette-aurora section-security
---

<TypingTitle text="3. Seguridad integrada" />

---
transition: slide-left
---

<span class="kicker">GitHub Advanced Security</span>

## Seguridad integrada al flujo

<SecurityRadar />

---
transition: slide-up
---

<span class="kicker">Secret scanning</span>

## El mejor secreto es el que nunca llega al repo

<GitHubMockup variant="security" title="Security overview" badge="Secret protection" />

---
transition: slide-left
---

<span class="kicker">Code scanning</span>

## Vulnerabilidades visibles donde el equipo trabaja

<div class="code-scan-demo">
  <pre><code>if (userInput) {
  query("SELECT * FROM users WHERE id = " + userInput)
}</code></pre>
  <div v-click class="finding-card">
    <span>CodeQL alert</span>
    <strong>SQL injection risk</strong>
    <small>Detectado en pull request antes del merge.</small>
  </div>
</div>

---
transition: fade
---

<span class="kicker">Dependencias</span>

## Supply chain: el riesgo tambien vive fuera de tu codigo

<div class="dependency-map">
  <div v-click><span>package</span><strong>app-core</strong></div>
  <div v-click><span>depends</span><strong>auth-lib</strong></div>
  <div v-click><span>alert</span><strong>CVE priorizada</strong></div>
  <div v-click><span>fix</span><strong>PR automatico</strong></div>
</div>

---
transition: slide-left
---

<span class="kicker">Modelo de adopcion</span>

## GHAS no es solo encender features

<div class="adoption-track">
  <div v-click><span>1</span><strong>Visibilidad</strong><small>Que riesgos existen y donde viven.</small></div>
  <div v-click><span>2</span><strong>Priorizacion</strong><small>Que se corrige primero y por que.</small></div>
  <div v-click><span>3</span><strong>Operacion</strong><small>Quien responde, mide y acompana.</small></div>
</div>

---
transition: fade
layout: section
class: deck palette-aurora section-copilot
---

<TypingTitle text="4. Productividad asistida" />

---
transition: slide-left
---

<span class="kicker">GitHub Copilot</span>

## No reemplaza el gobierno. Lo complementa.

<CopilotFlow />

---
transition: slide-up
---

<span class="kicker">Adopcion responsable</span>

## Copilot tambien necesita plataforma

<div class="copilot-matrix">
  <div v-click><span>Enablement</span><strong>Buenas practicas</strong><small>Prompts, contexto y limites.</small></div>
  <div v-click><span>Policy</span><strong>Configuracion</strong><small>Que se permite y donde se usa.</small></div>
  <div v-click><span>Impact</span><strong>Medicion</strong><small>Adopcion, calidad y experiencia developer.</small></div>
</div>

---
transition: slide-left
---

<span class="kicker">Experiencia developer</span>

## La meta: menos friccion, mas seguridad

<div class="friction-flow">
  <div v-click>Crear repo</div>
  <div v-click>Configurar reglas</div>
  <div v-click>Activar seguridad</div>
  <div v-click>Automatizar checks</div>
  <div v-click>Medir adopcion</div>
</div>

---
transition: fade
layout: section
class: deck palette-aurora section-trial
---

<TypingTitle text="5. Enterprise real" />

---
transition: slide-left
---

<span class="kicker">Trial gratuito</span>

## Todos pueden crear su propio GitHub Enterprise

<TrialCard />

---
transition: slide-left
---

<span class="kicker">Laboratorio sugerido</span>

## Que practicar en el trial

<div class="lab-grid">
  <div v-click><span>01</span><strong>Enterprise account</strong><small>Crear organizaciones y equipos.</small></div>
  <div v-click><span>02</span><strong>Rulesets</strong><small>Definir protecciones comunes.</small></div>
  <div v-click><span>03</span><strong>Security</strong><small>Explorar secret/code/dependency alerts.</small></div>
  <div v-click><span>04</span><strong>Actions</strong><small>Crear checks y gates de despliegue.</small></div>
  <div v-click><span>05</span><strong>Audit log</strong><small>Mirar trazabilidad y eventos.</small></div>
  <div v-click><span>06</span><strong>Governance</strong><small>Definir estandares repetibles.</small></div>
</div>

---
transition: fade
---

<span class="kicker">Lecciones desde operacion real</span>

## Lo que cambia cuando administras una plataforma corporativa

<div class="lesson-stack">
  <div v-click>La escala convierte excepciones pequenas en problemas grandes.</div>
  <div v-click>El self-service funciona solo si hay buenos bordes.</div>
  <div v-click>Seguridad y productividad no compiten si el flujo esta bien disenado.</div>
  <div v-click>La plataforma se gobierna con reglas, datos y acompanamiento.</div>
</div>

---
transition: slide-left
---

<span class="kicker">Cierre</span>

## GitHub empresarial es una plataforma viva

<div
  v-motion
  :initial="{ opacity: 0, scale: 0.94, y: 20 }"
  :enter="{ opacity: 1, scale: 1, y: 0, transition: { duration: 620 } }"
  class="final-frame"
>
  <strong>Desarrollo</strong>
  <span>+</span>
  <strong>Seguridad</strong>
  <span>+</span>
  <strong>Gobierno</strong>
  <span>+</span>
  <strong>Productividad</strong>
</div>

<p class="closing">Ese es el salto: de usar GitHub a operar GitHub.</p>

---
transition: fade
---

<ThankYouQr />

---
transition: fade
---

<DesecOpsSpaceInvite image-path="media/devsecops-space.jpeg" />
