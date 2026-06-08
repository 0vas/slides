# Catalogo De Componentes Visuales

Este catalogo describe los componentes y patrones reutilizables disponibles para
crear decks pulidos en este repositorio.

## Estado Del Catalogo

El catalogo tiene dos capas:

```text
shared/components/                         # componentes globales reutilizables
decks/github-enterprise-platform/components/ # componentes especificos del deck
```

Slidev auto-importa componentes desde `decks/<slug>/components/`. Para usar un
componente de `shared/components/`, crear un wrapper local en el deck. Esto
mantiene la ergonomia de Markdown y evita imports repetidos por slide.

El deck `component-showcase` demuestra todos los componentes del catalogo actual
y debe mantenerse actualizado cuando se agreguen, eliminen o promuevan
componentes.

Ejemplo:

```md
<PlatformMap />
```

Wrapper local:

```vue
<template>
  <SharedPlatformMap v-bind="$attrs" />
</template>

<script setup>
import SharedPlatformMap from '../../../shared/components/PlatformMap.vue'
</script>
```

## Reglas De Reuso

- Reusar antes de crear desde cero.
- Usar `shared/components/` para piezas genericas, data-driven y sin dominio
  demasiado especifico.
- Usar `decks/<slug>/components/` para mockups, CTAs o visuales propias de una
  charla.
- Mantener props simples y data arrays legibles.
- Evitar dependencias remotas para renderizar componentes centrales.
- Cada cambio de componente debe actualizar `README.md` y este catalogo en el
  mismo commit.

## Componentes Compartidos

### `SpeakerProfile`

Fuente:

```text
shared/components/SpeakerProfile.vue
```

Uso: slide de presentacion del speaker con QR, perfiles publicos, roles y tags.

Props:

- `speaker`: objeto requerido. Normalmente viene de `decks/<slug>/data/speaker.js`.
- `kicker`: etiqueta superior, default `Quien les habla`.
- `qrLabel`: etiqueta del QR, default `LinkedIn`.

Wrapper recomendado:

```vue
<template>
  <SharedSpeakerProfile :speaker="speaker" v-bind="$attrs" />
</template>

<script setup>
import SharedSpeakerProfile from '../../../shared/components/SpeakerProfile.vue'
import { speaker } from './data/speaker.js'
</script>
```

Uso en Markdown:

```md
<SpeakerProfile />
```

### `TypingTitle`

Fuente:

```text
shared/components/TypingTitle.vue
```

Uso: titulo con revelado tipo escritura, sin cursor persistente.

Props:

- `as`: tag HTML, default `h1`.
- `text`: texto requerido.
- `delay`: demora en milisegundos.

Ejemplo:

```md
<TypingTitle as="h2" text="Vamos a cambiar el lente" />
```

Usarlo solo en portadas o separadores clave.

### `PlatformMap`

Fuente:

```text
shared/components/PlatformMap.vue
```

Uso: mapa de cuatro etapas, dominios o transformaciones.

Props:

- `ariaLabel`: descripcion accesible.
- `nodes`: array de nodos.

Patron de datos:

```js
{ label: '01', title: 'Codigo', detail: 'Repos, ramas, PRs', tone: 'blue' }
```

### `EnterpriseTopology`

Fuente:

```text
shared/components/EnterpriseTopology.vue
```

Uso: topologia compacta con centro y nodos alrededor.

Props:

- `centerLabel`: etiqueta del nodo central.
- `centerTitle`: titulo del nodo central.
- `nodes`: array con `code`, `title`, `detail` y `tone`.

Mantener entre 4 y 6 nodos para que respire en 16:9.

### `GovernanceGrid`

Fuente:

```text
shared/components/GovernanceGrid.vue
```

Uso: grilla 2x2 para pilares, gobierno u operating model.

Props:

- `items`: array con `code`, `title` y `detail`.

### `SecurityRadar`

Fuente:

```text
shared/components/SecurityRadar.vue
```

Uso: radar visual para capacidades, riesgos o postura de seguridad.

Props:

- `ariaLabel`: descripcion accesible.
- `title`: titulo del bloque de copy.
- `detail`: descripcion corta.
- `points`: array con `label`, coordenadas `x/y` y `tone`.

Usa SVG propio y no depende de imagenes externas.

### `MaturityCurve`

Fuente:

```text
shared/components/MaturityCurve.vue
```

Uso: curva de madurez compacta con cuatro puntos.

Props:

- `points`: array con `x`, `y`, `title` y `detail`.

Mantener maximo cuatro puntos y revisar que las etiquetas no toquen los bordes
del SVG.

### `GraphDiagram`

Fuente:

```text
shared/components/GraphDiagram.vue
```

Uso: grafo simple de relaciones entre conceptos, sistemas o decisiones.

Props:

- `ariaLabel`: descripcion accesible.
- `nodes`: array con `id`, `label`, `detail`, `x`, `y` y `tone`.
- `edges`: array con `from` y `to`.

Los nodos usan coordenadas SVG para mantener control visual en 16:9.

### `SequenceDiagram`

Fuente:

```text
shared/components/SequenceDiagram.vue
```

Uso: diagrama de secuencia para explicar conversaciones, procesos y flujos entre
actores.

Props:

- `ariaLabel`: descripcion accesible.
- `participants`: array con `id` y `label`.
- `messages`: array con `from`, `to`, `label` y `tone`.

### `MediaFrame`

Fuente:

```text
shared/components/MediaFrame.vue
```

Uso: marco para imagenes, videos, GIFs o placeholders de media.

Props:

- `kind`: `image`, `video` o `gif`.
- `src`: ruta local o URL del asset.
- `poster`: poster opcional para video.
- `title`: titulo o placeholder.
- `caption`: texto inferior.
- `alt`: texto alternativo para imagen/GIF.
- `fit`: `cover` o `contain`.
- `controls`, `autoplay`, `loop`, `muted`: opciones de video.

No usar videos remotos como dependencia central de una charla; preferir assets
locales cuando sean parte esencial del deck.

### `StylePalette`

Fuente:

```text
shared/components/StylePalette.vue
```

Uso: mostrar el catalogo de paletas disponibles dentro de un deck o showcase.

Props:

- `palettes`: array opcional con `name`, `className`, `use` y `colors`.

Mantenerlo sincronizado con `docs/style-catalog.md` y
`shared/styles/palettes.css`.

### `BrowserMockup`

Fuente:

```text
shared/components/BrowserMockup.vue
```

Uso: mockup generico claro de producto, dashboard, web app o screenshot.

Props:

- `variant`: variante semantica, default `dashboard`.
- `title`, `url`, `nav`, `cards`.

Usarlo cuando se necesita una superficie visual que no debe estar amarrada a
GitHub. El componente debe renderizar como superficie clara y legible sobre
cualquier paleta. Para mockups GitHub-specific, mantener `GitHubMockup`.

### `MetricStrip`

Fuente:

```text
shared/components/MetricStrip.vue
```

Uso: KPIs grandes para abrir una conversacion con datos.

Props:

- `metrics`: array con `label`, `value`, `delta` y `tone`.

Mantener entre 3 y 4 metricas para que los numeros respiren.

### `ComparisonTable`

Fuente:

```text
shared/components/ComparisonTable.vue
```

Uso: comparacion de opciones, planes, criterios o alternativas.

Props:

- `ariaLabel`.
- `firstColumn`.
- `columns`: tres columnas por defecto.
- `rows`: array con `label`, `values` y `preferred`.

### `DecisionMatrix`

Fuente:

```text
shared/components/DecisionMatrix.vue
```

Uso: matriz 2x2 para impacto/esfuerzo, riesgo/control o prioridad/valor.

Props:

- `ariaLabel`.
- `xLabel`, `yLabel`.
- `quadrants`.
- `items`: puntos con `label`, `x`, `y` y `tone`.

### `HierarchyTree`

Fuente:

```text
shared/components/HierarchyTree.vue
```

Uso: representar jerarquias simples como empresa > dominios > equipos.

Props:

- `ariaLabel`.
- `root`: objeto con `label` y `title`.
- `branches`: array con `label`, `title` y `detail`.

### `IconGrid`

Fuente:

```text
shared/components/IconGrid.vue
```

Uso: grilla de conceptos con iconos textuales, titulo y detalle.

Props:

- `items`: array con `icon`, `title`, `detail` y `tone`.

Los iconos deben ser cortos y legibles desde proyector, por ejemplo `API`,
`SEC`, `OPS` o `AI`.

### `ShapeSystem`

Fuente:

```text
shared/components/ShapeSystem.vue
```

Uso: sistema de formas 2D para estados, procesos o lenguaje visual.

Props:

- `ariaLabel`.
- `shapes`: array con `kind`, `tone`, `code` y `label`.

Kinds disponibles por estilo: `circle`, `diamond`, `hex` y `square`.

### `TimelineFlow`

Fuente:

```text
shared/components/TimelineFlow.vue
```

Uso: timeline horizontal de hitos, fases o evolucion.

Props:

- `items`: array con `when`, `title`, `detail` y `tone`.

### `SwimlaneFlow`

Fuente:

```text
shared/components/SwimlaneFlow.vue
```

Uso: flujo por carriles para responsabilidades por actor, equipo o sistema.

Props:

- `ariaLabel`.
- `lanes`: array con `label` y `steps`.

Mantener tres carriles y tres pasos como punto de partida para evitar slides
saturadas.

### `PyramidDiagram`

Fuente:

```text
shared/components/PyramidDiagram.vue
```

Uso: piramide de niveles para madurez, estrategia, gobierno o arquitectura.

Props:

- `ariaLabel`.
- `levels`: array con `label`, `title`, `detail`, `width` y `tone`.

### `VennDiagram`

Fuente:

```text
shared/components/VennDiagram.vue
```

Uso: interseccion de tres dominios con un foco central.

Props:

- `ariaLabel`.
- `center`: objeto con `label` y `title`.
- `circles`: array con `title`, `detail` y `tone`.

### `CalloutStack`

Fuente:

```text
shared/components/CalloutStack.vue
```

Uso: lista visual de insights, riesgos, decisiones o principios.

Props:

- `items`: array con `label`, `title`, `detail` y `tone`.

### `QuoteFrame`

Fuente:

```text
shared/components/QuoteFrame.vue
```

Uso: cita, insight editorial o frase de cambio de seccion.

Props:

- `quote`.
- `author`.
- `role`.

### `ArchitectureLayers`

Fuente:

```text
shared/components/ArchitectureLayers.vue
```

Uso: capas horizontales para arquitectura, operating model o stack tecnico.

Props:

- `layers`: array con `label`, `title`, `detail` y `tone`.

### `Shape3DStage`

Fuente:

```text
shared/components/Shape3DStage.vue
```

Uso: escena Three.js con formas 3D para portadas internas o slides de alto
impacto.

Props:

- `ariaLabel`.
- `kicker`.
- `title`.
- `detail`.

Requiere la dependencia `three`. Validar con captura visual y revisar que el
canvas no este en blanco antes de cerrar cambios.

## Componentes Especificos Del Deck GitHub

Estos siguen en `decks/github-enterprise-platform/components/` porque dependen
del contexto GitHub, GHAS, Copilot o Enterprise trial.

### `GitHubMockup`

Uso: mockup editable de superficies tipo GitHub.

Props:

- `variant`: `org`, `security` o default acciones.
- `title`: titulo del mockup.
- `badge`: etiqueta del estado o vista.

Para otros temas, crear una version generica tipo `ProductMockup`.

### `BranchProtectionFlow`

Uso: flujo lineal de pull request, checks, reviews y merge gates.

Mantenerlo en el deck hasta convertirlo en un flujo generico de aprobaciones.

### `CopilotFlow`

Uso: flujo de adopcion/productividad con GitHub Copilot.

Mantenerlo especifico mientras use lenguaje o estructura de Copilot.

### `TrialCard`

Uso: tarjeta CTA para trial de GitHub Enterprise.

Mantenerlo especifico porque representa una accion concreta de esta charla.

## Componentes Especificos Del Showcase

Estos viven en `decks/component-showcase/components/` porque son ejemplos de
uso del catalogo o de lineamientos visuales, no componentes de produccion para
otros decks.

### `AssetSourcingShowcase`

Uso: slide de referencia para demostrar como combinar iconos SVG descargados y
una imagen editorial local dentro de una narrativa visual.

Assets usados:

- SVG desde SVG Repo, guardado en `public/media/icons/`.
- Imagen desde Pexels, guardada en `public/media/`.

Mantener la trazabilidad de fuente, autor y licencia en el README del folder de
media del deck.

## Clases Visuales Compartidas

Estas clases viven en `shared/styles/theme.css` y pueden usarse directamente en
Markdown o componentes:

- `.kicker`: etiqueta superior de slide.
- `.lead`: texto secundario grande.
- `.big-contrast`: comparacion de dos bloques.
- `.agenda-grid`: ruta o agenda.
- `.policy-grid`: tarjetas compactas de politicas.
- `.ownership-board`: tablero de ownership.
- `.ops-board`: lanes operativos.
- `.lesson-stack`: lista de lecciones.
- `.final-frame`: cierre o takeaway.
- `.media-showcase-grid`: grilla compacta para ejemplos de imagen/video/GIF en
  decks de demostracion.
- `.browser-mockup`: superficie generica de producto.
- `.metric-strip`: fila de KPIs.
- `.comparison-table`: tabla visual de comparacion.
- `.decision-matrix`: matriz 2x2.
- `.hierarchy-tree`: arbol jerarquico compacto.
- `.icon-grid`: grilla de conceptos con iconos textuales.
- `.shape-system`: set de formas 2D.
- `.timeline-flow`: timeline de fases.
- `.swimlane-flow`: flujo por carriles.
- `.pyramid-diagram`: piramide de niveles.
- `.venn-diagram`: interseccion de dominios.
- `.callout-stack`: stack de insights.
- `.quote-frame`: cita o insight editorial.
- `.architecture-layers`: capas de arquitectura.
- `.shape-3d-stage`: escena Three.js.

## Como Crear Un Componente Nuevo

1. Revisar este catalogo.
2. Reusar una estructura existente si la forma visual ya existe.
3. Crear el componente en `shared/components/` si sera generico desde el inicio.
4. Crear el componente en `decks/<slug>/components/` si es especifico.
5. Usar props o arrays locales simples.
6. Agregar animacion con `v-motion` solo si aclara orden o jerarquia.
7. Validar a 1440x900 y 1600x900.
8. Documentarlo aqui y en `README.md` en el mismo commit.

## Criterio Para Compartir

Un componente pertenece en `shared/components/` cuando cumple estas condiciones:

- No depende de texto, marcas o conceptos de un solo tema.
- Acepta datos por props o slots.
- Su estilo ya esta alineado con `shared/styles/theme.css`.
- Puede ser usado por un agente al crear un deck nuevo sin copiar codigo.

Si un componente todavia depende de un producto, charla o CTA especifico,
mantenerlo en `decks/<slug>/components/`.
