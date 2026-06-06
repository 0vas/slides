---
theme: default
title: Component Showcase
info: |
  Deck de referencia para validar y reutilizar el catalogo visual del repositorio.
transition: slide-left
background: "#f8fbff"
class: component-showcase palette-crystal
defaults:
  class: component-showcase palette-crystal
routerMode: hash
record: false
download: false
drawings:
  enabled: false
---

<span class="kicker">Deck de referencia</span>

<h1 class="cover-title">
  <TypingTitle as="span" text="Component" />
  <TypingTitle as="span" text="Showcase" :delay="760" class="cover-title-accent" />
</h1>

<p class="lead">Un deck vivo para probar, copiar y combinar los componentes visuales del repositorio.</p>

---
transition: slide-up
---

<SpeakerProfile kicker="Datos compartidos" />

---
transition: fade
---

<span class="kicker">Indice visual</span>

## Que cubre este showroom

<div class="showcase-index">
  <div v-click><span>Shared</span><strong>26 componentes</strong><small>Base global para nuevos decks.</small></div>
  <div v-click><span>Local GitHub</span><strong>4 componentes</strong><small>Referencia especifica de la charla enterprise.</small></div>
  <div v-click><span>Style</span><strong>8 paletas</strong><small>Elegibles desde el frontmatter del deck.</small></div>
</div>

<p class="showcase-note">La idea es simple: si una visual ya existe, el agente debe reutilizarla, pasarle datos y validar que respire en 16:9.</p>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## StylePalette

<StylePalette />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## PlatformMap

<PlatformMap aria-label="Mapa de transformacion reusable" />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## EnterpriseTopology

<EnterpriseTopology center-label="Workspace" center-title="Slides" />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## GovernanceGrid

<GovernanceGrid />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## SecurityRadar

<SecurityRadar
  title="Calidad visual"
  detail="Un deck pulido necesita legibilidad, movimiento con intencion, componentes reutilizables y despliegue confiable."
/>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## MaturityCurve

<MaturityCurve />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## GraphDiagram

<GraphDiagram />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## SequenceDiagram

<SequenceDiagram />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## MediaFrame

<div class="media-showcase-grid">
  <MediaFrame kind="image" title="Image placeholder" caption="Imagen o screenshot legible" />
  <MediaFrame kind="video" title="Video placeholder" caption="Video local o asset del deck" />
  <MediaFrame kind="gif" title="GIF placeholder" caption="Animacion corta o demo loop" />
</div>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## BrowserMockup

<BrowserMockup title="Light product surface" />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## MetricStrip

<MetricStrip />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## ComparisonTable

<ComparisonTable />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## DecisionMatrix

<DecisionMatrix />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## HierarchyTree

<HierarchyTree />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## IconGrid

<IconGrid />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## ShapeSystem

<ShapeSystem />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## TimelineFlow

<TimelineFlow />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## SwimlaneFlow

<SwimlaneFlow />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## PyramidDiagram

<PyramidDiagram />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## VennDiagram

<VennDiagram />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## CalloutStack

<CalloutStack />

---
transition: fade
---

<span class="kicker">Shared component</span>

## QuoteFrame

<QuoteFrame />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## ArchitectureLayers

<ArchitectureLayers />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## Shape3DStage

<Shape3DStage />

---
transition: fade
---

<span class="kicker">GitHub local component</span>

## GitHubMockup

<GitHubMockup variant="actions" title="Showcase checks" badge="Local component" />

---
transition: slide-left
---

<span class="kicker">GitHub local component</span>

## BranchProtectionFlow

<BranchProtectionFlow />

---
transition: slide-left
---

<span class="kicker">GitHub local component</span>

## CopilotFlow

<CopilotFlow />

---
transition: slide-up
---

<span class="kicker">GitHub local component</span>

## TrialCard

<TrialCard />

---
transition: fade
---

<span class="kicker">Reglas de uso</span>

## Como decidir donde vive un componente

<div class="showcase-usage">
  <div v-click>
    <span>Shared</span>
    <strong>Generico, data-driven y reusable.</strong>
    <small>Va en `shared/components/` y se importa explicitamente.</small>
  </div>
  <div v-click>
    <span>Deck local</span>
    <strong>Depende de producto, charla o CTA.</strong>
    <small>Vive en `decks/&lt;slug&gt;/components/` hasta generalizarse.</small>
  </div>
  <div v-click>
    <span>Documentacion</span>
    <strong>El catalogo se actualiza con el cambio.</strong>
    <small>README y `docs/component-catalog.md` deben viajar en el mismo commit.</small>
  </div>
  <div v-click>
    <span>Validacion</span>
    <strong>Si compila, aun falta mirar.</strong>
    <small>Revisar portada, slide densa, componente visual y navegacion.</small>
  </div>
</div>
