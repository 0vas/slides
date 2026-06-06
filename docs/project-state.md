# Estado Actual Del Proyecto

Ultima actualizacion: 2026-06-03

## Proposito

Este repositorio existe para construir y publicar multiples presentaciones de
una sola persona usando presentaciones como codigo. La meta no es solo guardar
slides, sino tener una fabrica modular de decks pulidos: cada nuevo deck debe
aprovechar datos personales compartidos, estilo visual consistente, componentes
reutilizables, validacion local y despliegue por GitHub Pages.

## Estado Actual

- Motor principal: Slidev.
- Lenguaje de authoring: Markdown con componentes Vue.
- Decks actuales: `github-enterprise-platform` y `component-showcase`.
- Tema visual: enterprise-tech claro por defecto, con grid sutil, gradientes,
  bordes cromaticos, mockups HTML/CSS y animaciones fluidas con `v-motion`.
- Deploy: GitHub Actions con selector manual de deck y soporte para `all` o
  `custom`.
- Datos personales compartidos: `data/speaker/speaker.json`.
- Assets personales compartidos: `data/speaker/`.
- Componentes visuales compartidos: `shared/components/`.
- Dependencia 3D: `three`, usada por `Shape3DStage`.

## Arquitectura

```text
.
├── data/
│   ├── person.js
│   └── speaker/
│       ├── README.md
│       ├── speaker.json
│       ├── person.js
│       └── linkedin-qr.svg
├── decks/
│   ├── _template/
│   │   ├── components/
│   │   ├── data/speaker.js
│   │   ├── public/media/
│   │   ├── slides.md
│   │   └── styles/index.css
│   ├── component-showcase/
│   │   ├── slides.md
│   │   ├── data/speaker.js
│   │   ├── public/media/
│   │   └── styles/index.css
│   └── github-enterprise-platform/
│       ├── slides.md
│       ├── components/
│       ├── data/speaker.js
│       ├── public/media/
│       ├── slide-bottom.vue
│       └── styles/index.css
├── docs/
│   ├── component-catalog.md
│   ├── new-deck-agent-guide.md
│   ├── project-state.md
│   ├── slide-guidelines.md
│   ├── style-catalog.md
│   └── checkpoints/
├── scripts/
│   └── deck.mjs
├── shared/
│   ├── components/
│   ├── public/
│   ├── styles/palettes.css
│   └── styles/theme.css
├── .github/workflows/deploy.yml
├── Makefile
├── README.md
└── agent.md
```

## Principios Modulares

- Cada deck vive en `decks/<slug>/`.
- Lo estable de la persona vive en `data/speaker/speaker.json`, no en cada deck.
- Los assets personales comunes viven en `data/speaker/`.
- La multimedia propia de cada charla vive en `decks/<slug>/public/media/`.
- El estilo base vive en `shared/styles/theme.css`.
- Las paletas elegibles viven en `shared/styles/palettes.css` y se activan con
  clases `palette-*` en el frontmatter.
- `decks/_template/` usa lorem ipsum, wrappers locales y ejemplos minimos para
  crear decks nuevos sin copiar contenido real de otra charla.
- Los componentes visuales genericos y probados entre decks viven en
  `shared/components/`.
- Componentes especificos de un deck viven en `decks/<slug>/components/`.
- Un componente debe moverse o copiarse hacia una capa compartida solo cuando
  sea util para mas de un deck y no dependa de contenido demasiado especifico.
- Las decisiones reutilizables se documentan en `docs/slide-guidelines.md` y
  `docs/component-catalog.md`.

## Datos Personales Compartidos

`data/speaker/speaker.json` es la fuente canonica editable para:

- nombre,
- nombre corto,
- iniciales,
- headline,
- organizacion,
- ubicacion,
- perfiles publicos,
- roles reutilizables,
- tags reutilizables,
- referencias nominales a QR o imagenes de perfil compartidas.

`data/speaker/person.js` importa ese JSON y conecta assets locales, como
`linkedin-qr.svg`, usando Vite `?url`.

Cada deck puede tener `decks/<slug>/data/speaker.js`, pero debe importar
`person` desde `data/speaker/person.js` y sobreescribir solo lo especifico de
esa charla, por ejemplo `talkRole` o tags de la sesion.

## Sistema Visual

El sistema visual actual vive en `shared/styles/theme.css` e incluye:

- fondo claro por defecto con grid sutil,
- tipografia con gradiente para `h1` y `h2`,
- tarjetas con radio maximo de 8px,
- bordes con gradiente,
- acentos semanticos: azul, verde, ambar, rosa, morado y cyan,
- navegacion nativa de Slidev estilizada para play y presenter,
- animaciones de entrada con `v-motion`,
- efecto `TypingTitle` para titulos seleccionados.
- paletas seleccionables documentadas en `docs/style-catalog.md`.

`palette-crystal` es la base recomendada para `decks/_template/`,
`decks/component-showcase/` y cualquier deck nuevo sin direccion visual propia.
Las paletas oscuras quedan como alternativas deliberadas, no como default.

La regla practica es: una slide debe comunicar una idea con una pieza visual
fuerte. Evitar texto largo, overlays decorativos innecesarios y componentes que
se salgan del canvas.

## Componentes Existentes

Componentes compartidos actuales en `shared/components/`:

- `SpeakerProfile`: slide de presentacion personal data-driven.
- `TypingTitle`: efecto de escritura limpio para titulos.
- `PlatformMap`: mapa de transformacion de herramienta a plataforma.
- `EnterpriseTopology`: topologia enterprise compacta.
- `GovernanceGrid`: grilla de gobierno.
- `SecurityRadar`: radar de seguridad.
- `MaturityCurve`: curva de madurez.
- `GraphDiagram`: grafo de relaciones.
- `SequenceDiagram`: diagrama de secuencia.
- `MediaFrame`: marco para imagen, video, GIF o placeholder.
- `StylePalette`: catalogo visual de paletas.
- `BrowserMockup`: mockup generico claro para producto/dashboard.
- `MetricStrip`: fila de KPIs.
- `ComparisonTable`: tabla comparativa.
- `DecisionMatrix`: matriz 2x2.
- `HierarchyTree`: jerarquia root > ramas.
- `IconGrid`: grilla de conceptos con iconos textuales.
- `ShapeSystem`: formas 2D reutilizables.
- `TimelineFlow`: timeline de hitos.
- `SwimlaneFlow`: flujo por carriles.
- `PyramidDiagram`: piramide de niveles.
- `VennDiagram`: interseccion de dominios.
- `CalloutStack`: stack de insights o decisiones.
- `QuoteFrame`: cita o insight editorial.
- `ArchitectureLayers`: capas horizontales de arquitectura.
- `Shape3DStage`: escena Three.js con formas 3D.

Componentes especificos del deck `github-enterprise-platform`:

- `GitHubMockup`: mockup de producto con variantes `org`, `security` y acciones.
- `BranchProtectionFlow`: flujo de pull request con controles.
- `CopilotFlow`: flujo de adopcion/productividad con Copilot.
- `TrialCard`: tarjeta de trial de GitHub Enterprise Cloud.

Ver detalles y patrones de uso en `docs/component-catalog.md`.

El deck `component-showcase` usa todos los componentes del catalogo actual y
sirve como referencia visual para prompts, agentes y futuras presentaciones.
Los componentes compartidos se consumen mediante wrappers locales en
`decks/<slug>/components/`, que es la carpeta que Slidev auto-importa.

## Deploy

El workflow `.github/workflows/deploy.yml` publica en GitHub Pages.
GitHub Pages debe estar habilitado una vez en **Settings > Pages** con origen
**GitHub Actions**. El workflow no intenta crear el sitio automaticamente porque
algunas politicas bloquean esa llamada para `GITHUB_TOKEN`.

Targets manuales:

- `all`: publica todos los decks.
- `component-showcase`: publica el deck de ejemplo del catalogo.
- `github-enterprise-platform`: publica el deck estable actual.
- `custom`: permite escribir un slug manual con `custom_deck`.

Al agregar un deck estable, se debe sumar su slug al selector del workflow para
evitar errores manuales.

## Validacion

Comandos base:

```bash
make list
make dev DECK=<slug>
make check DECK=<slug>
make build-all
```

`make dev` resuelve primero el deck solicitado, acepta un typo cercano si la
coincidencia es inequivoca y luego libera el `PORT` solicitado antes de levantar
Slidev. Si el deck no se puede resolver, no debe matar el servidor que ya estaba
corriendo.

Para cambios visuales, validar al menos:

- portada,
- slide densa,
- slide con mockup o grafico,
- navegacion nativa,
- overview de slides.

## Pendientes Recomendados

- Seguir separando componentes GitHub-specific de componentes visuales genericos.
- Considerar wrappers locales por deck si los imports de `shared/components/`
  crecen demasiado dentro de `slides.md`.
- Agregar capturas de referencia por deck en `docs/checkpoints/` cuando se
  cierre una version lista para charla.
- Mantener el dropdown del workflow actualizado con cada deck estable.
