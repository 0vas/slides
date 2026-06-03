# Catalogo De Componentes Visuales

Este catalogo describe los componentes y patrones reutilizables disponibles para
crear decks pulidos en este repositorio.

## Estado Del Catalogo

El catalogo tiene dos capas:

```text
shared/components/                         # componentes globales reutilizables
decks/github-enterprise-platform/components/ # componentes especificos del deck
```

Slidev auto-importa componentes desde `decks/<slug>/components/`. Los
componentes de `shared/components/` deben importarse explicitamente desde el
`slides.md` del deck o desde un wrapper local.

Ejemplo:

```md
<script setup>
import PlatformMap from '../../shared/components/PlatformMap.vue'
</script>

<PlatformMap />
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

Ejemplo:

```md
<script setup>
import SpeakerProfile from '../../shared/components/SpeakerProfile.vue'
import { speaker } from './data/speaker.js'
</script>

<SpeakerProfile :speaker="speaker" />
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
