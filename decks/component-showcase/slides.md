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
  <div v-click><span>Shared</span><strong>32 componentes</strong><small>Base global para nuevos decks.</small></div>
  <div v-click><span>Agnostico</span><strong>0 producto fijo</strong><small>El catalogo no depende de una marca o charla.</small></div>
  <div v-click><span>Style</span><strong>8 paletas</strong><small>Elegibles desde el frontmatter del deck.</small></div>
</div>

<p class="showcase-note">La idea es simple: si una visual ya existe, el agente debe reutilizarla, pasarle datos y validar que respire en 16:9.</p>

---
transition: slide-up
---

<span class="kicker">Asset sourcing</span>

## Iconos SVG e imagenes editoriales

<AssetSourcingShowcase />

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
transition: slide-left
---

<span class="kicker">Shared component</span>

## MermaidDiagram

<MermaidDiagram
  title="Diagrama custom"
  caption="Escape hatch para usar Mermaid directo sin perder el estilo del deck."
  diagram="flowchart LR; Prompt[Prompt]-->Brief[Brief]; Brief-->Plan[Plan]; Plan-->Build[Deck]; Build-->Validate[Validate]; Validate-->Handoff[Handoff];"
/>

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## MermaidSyntaxCatalog

<MermaidSyntaxCatalog />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## MermaidArchitecture

<MermaidArchitecture />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## MermaidJourney

<MermaidJourney />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## MermaidRoadmap

<MermaidRoadmap />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## MermaidQuadrant

<MermaidQuadrant />

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Sequence Diagram

<MermaidDiagram
  title="Interaccion entre actores"
  kicker="Mermaid sequenceDiagram"
  density="compact"
  caption="Bueno para APIs, handoffs, aprobaciones y conversaciones entre equipos."
  :diagram="'sequenceDiagram\nparticipant User as Usuario\nparticipant Agent as Agente\nparticipant Repo as Repositorio\nUser->>Agent: Prompt del deck\nAgent->>Repo: Lee brief y catalogo\nRepo-->>Agent: Componentes y reglas\nAgent-->>User: Preguntas criticas o deck listo'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## State Diagram

<MermaidDiagram
  title="Ciclo de vida de un deck"
  kicker="Mermaid stateDiagram-v2"
  density="compact"
  caption="Bueno para estados, gates, controles y workflows con transiciones claras."
  :diagram="'stateDiagram-v2\n[*] --> Intake\nIntake --> Brief: informacion completa\nIntake --> Questions: faltan datos criticos\nQuestions --> Brief\nBrief --> Build\nBuild --> Validate\nValidate --> Publish: check limpio\nValidate --> Build: ajustes\nPublish --> [*]'"
/>

---
transition: slide-up
---

<span class="kicker">Mermaid example</span>

## Entity Relationship

<MermaidDiagram
  title="Modelo de datos del deck"
  kicker="Mermaid erDiagram"
  density="compact"
  caption="Bueno para dominios, metadata, ownership y relaciones persistentes."
  :diagram="'erDiagram\nDECK ||--o{ SLIDE : contains\nDECK ||--|| BRIEF : defined_by\nSLIDE ||--o{ COMPONENT : uses\nDECK ||--o{ ASSET : references\nSPEAKER ||--o{ DECK : presents'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Class Diagram

<MermaidDiagram
  title="Contrato reusable"
  kicker="Mermaid classDiagram"
  density="compact"
  caption="Bueno para explicar interfaces, contratos de datos y responsabilidades entre modulos."
  :diagram="'classDiagram\nclass DeckBrief {\n  +String title\n  +String audience\n  +String outcome\n  +validate()\n}\nclass SlidePlan {\n  +String section\n  +String component\n  +render()\n}\nclass AssetPlan {\n  +String path\n  +String license\n  +verify()\n}\nDeckBrief --> SlidePlan : informs\nSlidePlan --> AssetPlan : references'"
/>

---
transition: slide-up
---

<span class="kicker">Mermaid example</span>

## Gantt

<MermaidDiagram
  title="Plan de produccion"
  kicker="Mermaid gantt"
  density="compact"
  caption="Bueno para fases con fechas, dependencias y ventanas de entrega."
  :diagram="'gantt\ntitle Produccion del deck\ndateFormat YYYY-MM-DD\naxisFormat %d %b\nsection Discovery\nIntake :a1, 2026-06-10, 1d\nBrief :after a1, 1d\nsection Build\nSlides :2026-06-12, 3d\nVisual QA :after Slides, 1d\nsection Release\nDeploy :2026-06-16, 1d'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## GitGraph

<MermaidDiagram
  title="Estrategia de cambios"
  kicker="Mermaid gitGraph"
  density="compact"
  caption="Bueno para explicar ramas, merges, releases y checkpoints de trabajo."
  :diagram="'gitGraph\ncommit\nbranch feature\ncheckout feature\ncommit\ncommit\ncheckout main\nmerge feature\ncommit'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Mindmap

<MermaidDiagram
  title="Mapa mental de narrativa"
  kicker="Mermaid mindmap"
  density="compact"
  caption="Bueno para discovery, taxonomias, lluvia de ideas y estructura conceptual."
  :diagram="'mindmap\n  root((Deck))\n    Audiencia\n      Nivel\n      Dolor\n      Resultado\n    Narrativa\n      Apertura\n      Desarrollo\n      Cierre\n    Visuales\n      Componentes\n      Assets\n      Diagramas\n    Validacion\n      Build\n      Screenshots\n      Handoff'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## XY Chart

<MermaidDiagram
  title="Evolucion de calidad"
  kicker="Mermaid xychart-beta"
  density="compact"
  caption="Bueno para series simples, barras y tendencias sin traer una libreria de charts."
  :diagram="'xychart-beta\ntitle Calidad del deck\nx-axis [Brief, Draft, Visual, Final]\ny-axis Score 0 --> 100\nbar [42, 64, 82, 94]\nline [40, 58, 78, 92]'"
/>

---
transition: slide-up
---

<span class="kicker">Mermaid example</span>

## Sankey

<MermaidDiagram
  title="Flujo de esfuerzo"
  kicker="Mermaid sankey-beta"
  density="compact"
  caption="Bueno para volumen, conversion, presupuesto o energia entre etapas."
  :diagram="'sankey-beta\nPrompt,Brief,10\nBrief,Slides,8\nBrief,Questions,2\nSlides,Visual QA,7\nVisual QA,Build,6\nVisual QA,Rework,1\nBuild,Publish,6'"
/>

---
transition: slide-up
---

<span class="kicker">Mermaid example</span>

## Pie Chart

<MermaidDiagram
  title="Balance del contenido"
  kicker="Mermaid pie"
  density="compact"
  caption="Bueno para proporciones simples con pocas categorias y una lectura inmediata."
  :diagram="'pie title Balance del deck\n  &quot;Narrativa&quot; : 35\n  &quot;Visuales&quot; : 30\n  &quot;Diagramas&quot; : 20\n  &quot;Validacion&quot; : 15'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Timeline

<MermaidDiagram
  title="Evolucion de la idea"
  kicker="Mermaid timeline"
  density="compact"
  caption="Bueno para contar madurez, hitos, roadmap o historia de una iniciativa."
  :diagram="'timeline\ntitle Evolucion del deck\nPrompt : Intencion inicial\nBrief : Alcance y preguntas criticas\nStoryboard : Narrativa slide por slide\nShowcase : Componentes reutilizables\nRelease : Build y publicacion'"
/>

---
transition: slide-up
---

<span class="kicker">Mermaid example</span>

## C4 Context

<MermaidDiagram
  title="Contexto de plataforma"
  kicker="Mermaid C4Context"
  density="compact"
  caption="Bueno para explicar sistemas, usuarios y relaciones a nivel ejecutivo."
  :diagram="'C4Context\nPerson(owner, &quot;Owner&quot;)\nSystem(deck, &quot;Deck&quot;)\nSystem_Ext(assets, &quot;Assets&quot;)\nRel(owner, deck, &quot;crea&quot;)\nRel(deck, assets, &quot;usa&quot;)'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Block Diagram

<MermaidDiagram
  title="Bloques de composicion"
  kicker="Mermaid block-beta"
  density="compact"
  caption="Bueno para mapas modulares, arquitectura conceptual y composicion de layouts."
  :diagram="'block-beta\ncolumns 2\nintake[&quot;Intake&quot;] brief[&quot;Brief&quot;]\nassets[&quot;Assets&quot;] deck[&quot;Deck&quot;]\nintake --> brief\nbrief --> deck\nassets --> deck'"
/>

---
transition: slide-up
---

<span class="kicker">Mermaid example</span>

## Packet Diagram

<MermaidDiagram
  title="Contrato de entrega"
  kicker="Mermaid packet-beta"
  density="compact"
  caption="Bueno para protocolos, campos de payload y estructura de mensajes."
  :diagram="'packet-beta\ntitle Deck payload\n0-7: &quot;brief&quot;\n8-15: &quot;slides&quot;\n16-23: &quot;assets&quot;\n24-31: &quot;checks&quot;'"
/>

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
