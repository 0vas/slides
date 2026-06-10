# Slides

Repositorio multi-deck para presentaciones como código con Slidev.

## Estructura

```text
decks/
  github-enterprise-platform/
    slides.md
    components/
    public/
      media/
  _template/
    slides.md
    components/
    data/
    public/
      media/
data/
  speaker/
    README.md
    speaker.json
    person.js
    linkedin-qr.svg
  person.js              # re-export de compatibilidad
docs/
  adr/
  deck-generation-workflow.md
  deck-brief-template.md
shared/
  components/
  styles/
    palettes.css
    theme.css
scripts/
  deck.mjs
```

- `decks/<slug>/slides.md`: entrada principal de cada presentación.
- `decks/<slug>/public/media/`: imagenes, videos, GIFs, screenshots y assets
  propios del deck.
- `decks/<slug>/components/`: componentes Vue propios del deck.
- `data/speaker/speaker.json`: datos personales canonicos del dueño del
  repositorio.
- `data/speaker/`: assets personales globales, como QR o foto.
- `data/person.js`: re-export temporal para compatibilidad con imports antiguos.
- `shared/components/`: componentes Vue reutilizables entre decks.
- `shared/styles/theme.css`: estilos compartidos por todos los decks.
- `shared/styles/palettes.css`: paletas reutilizables para cambiar el tono del
  deck sin duplicar CSS.
- `docs/deck-generation-workflow.md`: flujo liviano tipo Spec Kit para crear
  decks desde un prompt.
- `docs/deck-brief-template.md`: plantilla del brief requerido para decks
  nuevos.
- `docs/adr/`: decisiones arquitectonicas del repositorio.

## Multimedia Y Datos

- La multimedia propia de una charla vive en `decks/<slug>/public/media/`.
  Ejemplos: imagenes, videos, GIFs, capturas, logos, graficas de comunidad,
  mascotas o piezas del evento.
- Para futuros decks, conviene buscar proactivamente iconos SVG en SVG Repo e
  imagenes editoriales en Pexels, Unsplash, Pixabay o fuentes similares cuando
  ayuden a explicar una idea. Descargar siempre los assets al deck y documentar
  fuente/licencia.
- Referencia esos archivos como `media/<archivo>` en Markdown/props. En
  componentes Vue, construye la ruta con `import.meta.env.BASE_URL` cuando el
  archivo venga del `public/` del deck.
- Los datos personales estables y assets compartidos del speaker viven en
  `data/speaker/`; los decks solo deben crear overrides especificos de la
  charla en `decks/<slug>/data/speaker.js`.
- Mantener slides de speaker y cierre sin duplicacion: QR, handles, nombre,
  rol y aclaraciones como `0 = cero` deben aparecer solo cuando agreguen
  claridad real.

## Decks Disponibles

| Deck | Proposito | Comando |
| --- | --- | --- |
| `github-enterprise-platform` | Charla principal sobre GitHub como plataforma empresarial. | `make dev DECK=github-enterprise-platform` |
| `component-showcase` | Deck de ejemplo que usa todos los componentes y paletas del catalogo actual. | `make dev DECK=component-showcase` |

`decks/_template/` no es una charla terminada: es una plantilla con lorem ipsum,
wrappers locales y ejemplos minimos de componentes para iniciar presentaciones
nuevas sin arrastrar contenido real de otro deck.

## Crear Un Deck Con Un Prompt

El flujo recomendado es liviano tipo Spec Kit: Intake -> Brief -> Plan -> Tasks ->
Implement -> Validate -> Handoff. El agente debe leer
`docs/deck-generation-workflow.md`, crear `decks/<slug>/deck.brief.md` desde
`docs/deck-brief-template.md` y usar ese brief como fuente de verdad. La
decision esta registrada en
`docs/adr/0001-spec-kit-lightweight-deck-generation.md`.

Un prompt inicial debe incluir, como minimo:

- tema o titulo,
- audiencia y nivel,
- duracion,
- resultado esperado,
- puntos obligatorios,
- tono/contexto,
- restricciones relevantes.

Si falta informacion critica, el agente debe preguntar antes de crear el deck.
Si solo faltan datos no criticos, como slug, paleta o assets sugeridos, puede
inferirlos y documentar la suposicion en el brief.

## Uso

Instala dependencias:

```bash
npm install
```

Tambien puedes usar `make`:

```bash
make install
make list
make dev DECK=github-enterprise-platform
make build DECK=github-enterprise-platform
make check DECK=github-enterprise-platform
```

Lista decks disponibles:

```bash
npm run list
```

Desarrolla un deck:

```bash
npm run dev -- github-enterprise-platform
```

`make dev` y `npm run dev -- <deck>` validan el deck, corrigen un typo cercano
cuando hay una coincidencia inequivoca y liberan automaticamente el `PORT`
indicado si ya hay un proceso escuchando ahi. Por defecto usan `4100`.

Compila un deck:

```bash
npm run build -- github-enterprise-platform
```

Compila todos:

```bash
npm run build:all
```

Exporta:

```bash
npm run export:pdf -- github-enterprise-platform
npm run export:pptx -- github-enterprise-platform
```

## Despliegue

El workflow `Deploy Slides` permite publicar en GitHub Pages:

- `target = all`: publica todos los decks en `dist/<deck>/`.
- `target = <slug>`: publica solo ese deck.
- `target = custom`: permite escribir un slug que aun no este en el dropdown.

El home generado en `dist/index.html` muestra tarjetas por deck con preview
embebido, titulo y descripcion tomada del frontmatter de `slides.md`.

Antes del primer despliegue, habilita GitHub Pages una vez en
**Settings > Pages** y configura el origen como **GitHub Actions**. El workflow
no intenta crear el sitio automaticamente porque algunas politicas de GitHub
bloquean esa accion para `GITHUB_TOKEN` y producen el error
`Resource not accessible by integration`.

Para desplegar manualmente:

1. Ve a **Actions**.
2. Abre **Deploy Slides**.
3. Ejecuta **Run workflow**.
4. Elige `all`, un deck disponible o `custom`.

Cuando se agregue un deck estable, conviene sumar su slug a las opciones del
workflow para que aparezca en el selector.

## Componentes Disponibles

El catalogo visual tiene dos capas:

- `shared/components/`: componentes globales, data-driven y reutilizables.
- `decks/<slug>/components/`: componentes especificos de una charla o producto.
- `shared/styles/palettes.css`: paletas elegibles con clases `palette-*`.

Slidev auto-importa los componentes locales de cada deck. Para usar un
componente global, crea un wrapper liviano en `decks/<slug>/components/` que
apunte a `shared/components/`.

Los componentes 3D usan `three`; mantenerlos como slides principales o bloques
grandes y validar que el canvas renderice antes de publicar. Los componentes
Mermaid usan `mermaid` y deben validarse visualmente porque el build solo prueba
que el render dinamico cargue.

| Componente | Uso principal | Ubicacion |
| --- | --- | --- |
| `SpeakerProfile` | Slide de presentacion personal con QR, roles, handles y metadata desde datos compartidos. | `shared/components/` |
| `TypingTitle` | Titulos con revelado tipo escritura limpio para portadas o separadores. | `shared/components/` |
| `PlatformMap` | Mapa de etapas, dominios o transformacion de herramienta a plataforma. | `shared/components/` |
| `EnterpriseTopology` | Diagrama compacto de dependencias y dominios empresariales. | `shared/components/` |
| `GovernanceGrid` | Grilla 2x2 para pilares, gobierno u operating model. | `shared/components/` |
| `SecurityRadar` | Radar visual para capacidades, riesgos o postura de seguridad. | `shared/components/` |
| `MaturityCurve` | Curva de madurez con etapas y puntos de decision. | `shared/components/` |
| `GraphDiagram` | Grafo SVG para relaciones entre conceptos, sistemas o decisiones. | `shared/components/` |
| `SequenceDiagram` | Diagrama de secuencia entre actores y mensajes. | `shared/components/` |
| `MermaidDiagram` | Wrapper visual para renderizar Mermaid custom con estilo del deck. | `shared/components/` |
| `MermaidSyntaxCatalog` | Mapa de sintaxis Mermaid disponibles, estados y usos recomendados. | `shared/components/` |
| `MermaidArchitecture` | Preset Mermaid flowchart para arquitectura de capacidades. | `shared/components/` |
| `MermaidJourney` | Preset Mermaid journey para adopcion, friccion o experiencia. | `shared/components/` |
| `MermaidRoadmap` | Preset Mermaid timeline para roadmap o fases de transformacion. | `shared/components/` |
| `MermaidQuadrant` | Preset Mermaid quadrantChart para priorizacion y trade-offs. | `shared/components/` |
| `MediaFrame` | Marco para imagen, video, GIF o placeholder multimedia. | `shared/components/` |
| `StylePalette` | Visualizacion de las paletas disponibles para decks. | `shared/components/` |
| `BrowserMockup` | Mockup generico claro para productos, dashboards o screenshots. | `shared/components/` |
| `MetricStrip` | KPIs grandes con delta y tono semantico. | `shared/components/` |
| `ComparisonTable` | Tabla visual para comparar opciones, planes o criterios. | `shared/components/` |
| `DecisionMatrix` | Matriz 2x2 para impacto, esfuerzo, prioridad o riesgo. | `shared/components/` |
| `HierarchyTree` | Jerarquia root > ramas para organizaciones, dominios o sistemas. | `shared/components/` |
| `IconGrid` | Grilla compacta de conceptos con iconos textuales. | `shared/components/` |
| `ShapeSystem` | Formas 2D reutilizables para lenguaje visual o estados. | `shared/components/` |
| `TimelineFlow` | Timeline horizontal para hitos, fases o evolucion. | `shared/components/` |
| `SwimlaneFlow` | Flujo por carriles para roles, equipos o sistemas. | `shared/components/` |
| `PyramidDiagram` | Piramide por niveles para madurez, estrategia o capas. | `shared/components/` |
| `VennDiagram` | Interseccion de tres dominios con foco central. | `shared/components/` |
| `CalloutStack` | Lista visual de insights, riesgos o decisiones. | `shared/components/` |
| `QuoteFrame` | Cita o insight editorial con atribucion. | `shared/components/` |
| `ArchitectureLayers` | Capas horizontales para arquitectura u operating model. | `shared/components/` |
| `Shape3DStage` | Escena Three.js con formas 3D para slides de impacto. | `shared/components/` |
| `AssetSourcingShowcase` | Slide del showcase para demostrar iconos SVG locales e imagen editorial descargada. | `decks/component-showcase/components/` |

El detalle de props, casos de uso y criterios de promocion esta en
[docs/component-catalog.md](docs/component-catalog.md).

Para ver los componentes agnosticos y patrones reutilizables juntos, ejecuta:

```bash
make dev DECK=component-showcase
```

## Estilos Y Paletas

Los decks pueden elegir estilo con una clase `palette-*` en el frontmatter:

```md
---
class: mi-deck palette-crystal
defaults:
  class: mi-deck palette-crystal
---
```

Cuando una slide tenga una clase propia, debe conservar tambien la paleta:
`class: mi-deck palette-crystal section-break`.

`palette-crystal` es la base clara recomendada para decks nuevos, templates y
showcases. El resto de paletas permite cambiar el tono sin copiar CSS local.

Paletas disponibles:

| Paleta | Uso recomendado |
| --- | --- |
| `palette-aurora` | Plataformas, DevSecOps, GitHub e infraestructura. |
| `palette-lab` | Investigacion, docencia, notebooks y demos tecnicas. |
| `palette-sunset` | Producto, adopcion, estrategia y storytelling. |
| `palette-mono` | Reportes ejecutivos, gobierno y narrativa sobria. |
| `palette-carbon` | Keynotes tecnicas, operaciones y contraste alto. |
| `palette-citrus` | Workshops, labs y demos con energia fresca. |
| `palette-orchid` | AI, innovacion, producto y narrativa visual. |
| `palette-crystal` | Default claro para decks nuevos, dashboards y lectura cercana. |

El detalle vive en [docs/style-catalog.md](docs/style-catalog.md). Si se agrega
o cambia una paleta, el mismo commit debe actualizar `shared/styles/palettes.css`,
`StylePalette`, este README y el catalogo de estilos.

## Lineamientos

Para mantener consistencia visual y narrativa entre presentaciones, usa
[docs/slide-guidelines.md](docs/slide-guidelines.md) como base para futuros decks
e iteraciones con IA.

Documentacion operativa:

- [Estado actual](docs/project-state.md)
- [Catalogo de componentes](docs/component-catalog.md)
- [Catalogo de estilos](docs/style-catalog.md)
- [Guia para crear decks con IA](docs/new-deck-agent-guide.md)

Los agentes de IA deben seguir tambien [agent.md](agent.md).

Regla de mantenimiento: cada vez que se cree, elimine, renombre o promueva un
componente visual, el mismo commit debe actualizar este README y
`docs/component-catalog.md`. Si el componente cambia una regla visual
reutilizable, tambien debe actualizar `docs/slide-guidelines.md`.

## Datos Personales

Este repositorio esta pensado para multiples presentaciones de una misma persona.
Los datos que no cambian entre charlas viven en `data/speaker/speaker.json`:
nombre, headline, organizacion, ubicacion, roles, tags y redes publicas.

Los assets personales compartidos viven junto a esos datos en `data/speaker/`,
por ejemplo `linkedin-qr.svg`. `data/speaker/person.js` conecta el JSON con los
imports `?url` requeridos por Vite.

Si un deck necesita una variante especifica, crea o ajusta
`decks/<slug>/data/speaker.js`, importa `person` desde
`data/speaker/person.js` y sobreescribe solo lo necesario, por ejemplo
`talkRole`.

## Assets De Deck

Cada deck debe guardar sus imagenes, videos, GIFs, capturas, logos de evento y
multimedia propia en:

```text
decks/<slug>/public/media/
```

Referencia esos assets desde Markdown o componentes con rutas relativas al
`public/` del deck, por ejemplo `media/community/devsecops-space.png`. En
componentes Vue, usa `import.meta.env.BASE_URL` para que la ruta funcione tanto
en desarrollo como en GitHub Pages.
