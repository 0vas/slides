# Guia Para Crear Un Deck Nuevo Con IA

Esta guia define como un prompt o agente debe construir una nueva presentacion
aprovechando lo existente en el repositorio.

## Objetivo

Crear decks nuevos que salgan pulidos desde la primera iteracion: estructura
modular, datos personales compartidos, estilo consistente, componentes
reutilizados, animaciones fluidas y despliegue preparado por GitHub Pages.

## Contexto Que El Agente Debe Leer

Antes de crear o editar un deck, leer:

```text
agent.md
docs/project-state.md
docs/component-catalog.md
docs/style-catalog.md
docs/slide-guidelines.md
docs/deck-generation-workflow.md
docs/deck-brief-template.md
docs/specs/deck-generation/spec.md
README.md
```

Si el deck nuevo se parece al deck actual, revisar tambien:

```text
decks/_template/slides.md
decks/component-showcase/slides.md
decks/github-enterprise-platform/slides.md
decks/github-enterprise-platform/components/
shared/components/
shared/styles/theme.css
shared/styles/palettes.css
```

## Intake Obligatorio

El agente debe completar un brief antes de crear slides. Los campos criticos
deben venir del prompt o de una pregunta al usuario:

- titulo de la charla,
- tema,
- audiencia,
- nivel,
- duracion,
- objetivo principal,
- puntos obligatorios,
- tono,
- restricciones tecnicas.

Tambien debe registrar, aunque puede inferirlos si no son criticos:

- assets disponibles,
- politica de assets sugeridos,
- si usara datos de speaker,
- deliverables esperados,
- si se debe desplegar,
- slug deseado,
- paleta deseada.

Si falta un campo critico, el agente debe preguntar antes de scaffolding. Hacer
maximo tres preguntas agrupadas y cortas. Si solo faltan campos no criticos, el
agente puede inferirlos y documentar la suposicion en
`decks/<slug>/deck.brief.md`.

## Flujo De Trabajo

1. Leer `docs/deck-generation-workflow.md`.
2. Ejecutar intake y resolver preguntas criticas.
3. Definir slug URL-friendly.
4. Crear `decks/<slug>/deck.brief.md` desde `docs/deck-brief-template.md`.
5. Escribir requisitos, supuestos, plan narrativo, plan de assets y validacion
   en el brief.
6. Copiar o adaptar `decks/_template/`, que debe contener lorem ipsum y no
   contenido especifico de otra charla.
7. Reemplazar el lorem ipsum por la narrativa real del deck.
8. Crear o ajustar `decks/<slug>/styles/index.css` importando el tema compartido.
9. Elegir una paleta de `docs/style-catalog.md` y ponerla en `class` y
   `defaults.class`.
10. Crear `decks/<slug>/data/speaker.js` importando `person` desde
   `data/speaker/person.js` si habra slide de speaker.
11. Reusar componentes de `shared/components/` antes de crear nuevos.
12. Crear componentes especificos en `decks/<slug>/components/`.
13. Crear wrappers locales para componentes compartidos que se usen en Markdown.
14. Elegir visuales del catalogo por necesidad narrativa: mockup, metrica,
    tabla, matriz, jerarquia, grafo, secuencia, timeline, swimlane, media,
    cita, capas o 3D.
15. Buscar proactivamente iconos SVG en SVG Repo e imagenes editoriales en
    Pexels o fuentes similares cuando eleven la comprension visual. Descargar
    todo a `decks/<slug>/public/media/` y documentar fuente/licencia.
16. Usar `TypingTitle` solo en portada o secciones clave.
17. Mantener ritmo de 24-32 slides para 30 minutos.
18. Validar con `make check DECK=<slug>`.
19. Revisar capturas de portada, slide densa, slide con mockup/media y
    navegacion.
20. Actualizar `decks/<slug>/deck.brief.md` con el handoff final.
21. Si el deck queda estable, agregar su slug al workflow `Deploy Slides`.
22. Actualizar `README.md` y `docs/component-catalog.md` si nace o cambia un
    componente.
23. Actualizar `docs/style-catalog.md` si nace o cambia una paleta.
24. Crear checkpoint si el usuario pide pausar o cerrar version.

## Prompt Base Para Un Nuevo Deck

```text
Quiero crear un nuevo deck en este repositorio.

Tema:
<tema>

Titulo:
<titulo>

Audiencia:
<audiencia>

Nivel:
<basico | intermedio | avanzado>

Duracion:
<minutos>

Objetivo:
<que debe entender o hacer la audiencia al final>

Puntos obligatorios:
- <punto 1>
- <punto 2>
- <punto 3>

Tono:
<ej. tecnico, ejecutivo, workshop, demo, charla de comunidad>

Restricciones:
<proyector, internet, no screenshots, fuentes oficiales, etc.>

Assets disponibles:
<imagenes, QR, capturas, logos, ninguno>

Assets sugeridos:
<iconos SVG Repo, imagenes Pexels/Unsplash/Pixabay, screenshots propios, ninguno>

Slug sugerido:
<slug>

Paleta sugerida:
<palette-crystal | palette-aurora | palette-lab | palette-sunset | palette-mono | palette-carbon | palette-citrus | palette-orchid>

Usa la arquitectura del repo, reutiliza componentes del catalogo, manten el
estilo enterprise-tech claro por defecto, crea `deck.brief.md` y deja el deck
listo para `make check`.
```

## Prompt Para Mejorar Un Deck Existente

```text
Mejora el deck `<slug>`.

Objetivo de mejora:
<mas claro, mas visual, mas corto, mas animado, mejor presenter mode, etc.>

Problemas observados:
- <problema 1>
- <problema 2>

Mantener:
- estructura modular,
- datos personales desde `data/speaker/person.js`,
- multimedia propia en `decks/<slug>/public/media/`,
- componentes reutilizables,
- navegacion nativa visible,
- build limpio con `make check`.
```

## Definition Of Done

Un deck nuevo esta listo cuando:

- existe en `decks/<slug>/`,
- tiene `decks/<slug>/deck.brief.md` con requisitos, supuestos y validacion,
- corre con `make dev DECK=<slug>`,
- compila con `make check DECK=<slug>`,
- tiene speaker profile data-driven si aplica,
- usa componentes o patrones del catalogo,
- no tiene texto cortado en 1440x900,
- no depende de internet para renderizar lo esencial,
- tiene transiciones y animaciones consistentes,
- puede desplegarse por GitHub Pages,
- el slug estable esta en `.github/workflows/deploy.yml`.

## Anti-Patrones

- Crear un landing page en vez de una presentacion usable.
- Duplicar datos personales dentro de Markdown.
- Crear componentes nuevos sin revisar el catalogo.
- Olvidar actualizar `component-showcase` cuando cambia el catalogo.
- Usar screenshots borrosos o ilegibles.
- Meter assets generados o builds en git.
- Ocultar la navegacion nativa para resolver contraste.
- Usar animaciones que distraen o flashes de transicion.
- Dejar textos o tarjetas cortadas por falta de validacion visual.
- Modificar `shared/styles/theme.css` para resolver un caso local que podia
  haberse resuelto con una paleta o CSS propio del deck.
