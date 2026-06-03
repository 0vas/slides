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
- Deck estable actual: `github-enterprise-platform`.
- Tema visual: enterprise-tech oscuro, con grid sutil, gradientes, bordes
  cromaticos, mockups HTML/CSS y animaciones fluidas con `v-motion`.
- Deploy: GitHub Actions con selector manual de deck y soporte para `all` o
  `custom`.
- Datos personales compartidos: `data/person.js`.
- Assets personales compartidos: `shared/public/speaker/`.
- Componentes visuales compartidos: `shared/components/`.

## Arquitectura

```text
.
├── data/
│   └── person.js
├── decks/
│   ├── _template/
│   │   ├── slides.md
│   │   └── styles/index.css
│   └── github-enterprise-platform/
│       ├── slides.md
│       ├── components/
│       ├── data/speaker.js
│       ├── public/
│       ├── slide-bottom.vue
│       └── styles/index.css
├── docs/
│   ├── component-catalog.md
│   ├── new-deck-agent-guide.md
│   ├── project-state.md
│   ├── slide-guidelines.md
│   └── checkpoints/
├── scripts/
│   └── deck.mjs
├── shared/
│   ├── components/
│   ├── public/
│   └── styles/theme.css
├── .github/workflows/deploy.yml
├── Makefile
├── README.md
└── agent.md
```

## Principios Modulares

- Cada deck vive en `decks/<slug>/`.
- Lo estable de la persona vive en `data/person.js`, no en cada deck.
- Los assets personales comunes viven en `shared/public/speaker/`.
- El estilo base vive en `shared/styles/theme.css`.
- Los componentes visuales genericos y probados entre decks viven en
  `shared/components/`.
- Componentes especificos de un deck viven en `decks/<slug>/components/`.
- Un componente debe moverse o copiarse hacia una capa compartida solo cuando
  sea util para mas de un deck y no dependa de contenido demasiado especifico.
- Las decisiones reutilizables se documentan en `docs/slide-guidelines.md` y
  `docs/component-catalog.md`.

## Datos Personales Compartidos

`data/person.js` es la fuente canonica para:

- nombre,
- nombre corto,
- iniciales,
- headline,
- organizacion,
- ubicacion,
- perfiles publicos,
- roles reutilizables,
- tags reutilizables,
- QR o imagenes de perfil compartidas.

Cada deck puede tener `decks/<slug>/data/speaker.js`, pero debe importar
`person` y sobreescribir solo lo especifico de esa charla, por ejemplo
`talkRole` o tags de la sesion.

## Sistema Visual

El sistema visual actual vive en `shared/styles/theme.css` e incluye:

- fondo oscuro con grid sutil,
- tipografia con gradiente para `h1` y `h2`,
- tarjetas con radio maximo de 8px,
- bordes con gradiente,
- acentos semanticos: azul, verde, ambar, rosa, morado y cyan,
- navegacion nativa de Slidev estilizada para play y presenter,
- animaciones de entrada con `v-motion`,
- efecto `TypingTitle` para titulos seleccionados.

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

Componentes especificos del deck `github-enterprise-platform`:

- `GitHubMockup`: mockup de producto con variantes `org`, `security` y acciones.
- `BranchProtectionFlow`: flujo de pull request con controles.
- `CopilotFlow`: flujo de adopcion/productividad con Copilot.
- `TrialCard`: tarjeta de trial de GitHub Enterprise Cloud.

Ver detalles y patrones de uso en `docs/component-catalog.md`.

## Deploy

El workflow `.github/workflows/deploy.yml` publica en GitHub Pages.
El paso `actions/configure-pages` usa `enablement: true` para que el primer
despliegue pueda habilitar Pages cuando la politica del repositorio lo permita.

Targets manuales:

- `all`: publica todos los decks.
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
