# Catalogo De Estilos

Este repositorio usa un tema base compartido con paletas intercambiables por
clase CSS. La intencion es que un deck pueda cambiar de tono visual sin copiar
CSS ni romper los componentes.

## Como Elegir Una Paleta

En el frontmatter del deck, agrega una clase `palette-*` y repitela en
`defaults.class` para que se aplique a todos los slides:

```md
---
class: palette-crystal
defaults:
  class: palette-crystal
---
```

Tambien puedes combinarla con una clase propia del deck:

```md
---
class: mi-charla palette-crystal
defaults:
  class: mi-charla palette-crystal
---
```

Si una slide usa su propio `class`, incluir tambien la paleta:

```md
---
class: mi-charla palette-crystal section-break
---
```

`palette-crystal` es la base recomendada para decks nuevos, templates y
showcases porque mantiene un fondo claro, buen contraste y superficies tipo
producto. Las paletas oscuras siguen disponibles para charlas que necesiten una
atmosfera mas nocturna o de keynote.

Las paletas viven en:

```text
shared/styles/palettes.css
```

El tema base vive en:

```text
shared/styles/theme.css
```

## Paletas Disponibles

| Clase | Nombre | Uso recomendado |
| --- | --- | --- |
| `palette-aurora` | Enterprise Aurora | Plataformas, DevSecOps, GitHub, infraestructura, charlas tecnicas. |
| `palette-lab` | Research Lab | Investigacion, docencia, notebooks, ciencia de datos, demos tecnicas. |
| `palette-sunset` | Product Sunset | Producto, estrategia, adopcion, storytelling y cambio organizacional. |
| `palette-mono` | Executive Mono | Reportes ejecutivos, decisiones, gobierno y narrativas sobrias. |
| `palette-carbon` | Carbon Focus | Keynotes tecnicas, operaciones, incidentes y contraste alto. |
| `palette-citrus` | Citrus Grid | Workshops, labs, habilitacion tecnica y demos vivas. |
| `palette-orchid` | Orchid Pulse | AI, innovacion, producto y narrativas visuales. |
| `palette-crystal` | Crystal Day | Slides claros, dashboards, screenshots y lectura cercana. |

## Reglas

- No crear una paleta por charla si solo cambia un color menor.
- Crear una paleta nueva solo cuando cambie el tono visual completo.
- Mantener variables compatibles con `shared/styles/theme.css`.
- Actualizar `StylePalette`, `README.md` y este documento cuando se agregue o
  quite una paleta.
- Validar portada, slide densa, slide con grafico y slide con media despues de
  cambiar una paleta.

## Variables Esperadas

Cada paleta debe definir:

```css
--deck-bg
--deck-panel
--deck-panel-2
--deck-ink
--deck-muted
--deck-soft
--deck-line
--deck-blue
--deck-green
--deck-amber
--deck-rose
--deck-purple
--deck-cyan
--accent-gradient
--border-gradient
```

Los componentes compartidos deben consumir estas variables en vez de colores
hardcodeados cuando sea razonable.
