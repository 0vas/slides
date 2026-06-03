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
docs/slide-guidelines.md
README.md
```

Si el deck nuevo se parece al deck actual, revisar tambien:

```text
decks/github-enterprise-platform/slides.md
decks/github-enterprise-platform/components/
shared/components/
shared/styles/theme.css
```

## Informacion Que Debe Pedir O Inferir

Idealmente el prompt debe incluir:

- titulo de la charla,
- tema,
- audiencia,
- nivel,
- duracion,
- objetivo principal,
- puntos obligatorios,
- tono,
- restricciones tecnicas,
- assets disponibles,
- si se debe desplegar,
- slug deseado.

Si falta algo, el agente debe asumir de forma razonable y documentar la
suposicion en el resumen final.

## Flujo De Trabajo

1. Definir slug URL-friendly.
2. Copiar o adaptar `decks/_template/`.
3. Crear `decks/<slug>/slides.md`.
4. Crear `decks/<slug>/styles/index.css` importando el tema compartido.
5. Crear `decks/<slug>/data/speaker.js` importando `person` si habra slide de
   speaker.
6. Reusar componentes de `shared/components/` antes de crear nuevos.
7. Crear componentes especificos en `decks/<slug>/components/`.
8. Importar componentes compartidos explicitamente en `slides.md`.
9. Usar `TypingTitle` solo en portada o secciones clave.
10. Mantener ritmo de 24-32 slides para 30 minutos.
11. Validar con `make check DECK=<slug>`.
12. Revisar capturas de portada, slide densa y slide con mockup.
13. Si el deck queda estable, agregar su slug al workflow `Deploy Slides`.
14. Actualizar `README.md` y `docs/component-catalog.md` si nace o cambia un
    componente.
15. Crear checkpoint si el usuario pide pausar o cerrar version.

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

Slug sugerido:
<slug>

Usa la arquitectura del repo, reutiliza componentes del catalogo, manten el
estilo enterprise-tech y deja el deck listo para `make check`.
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
- datos personales desde `data/person.js`,
- componentes reutilizables,
- navegacion nativa visible,
- build limpio con `make check`.
```

## Definition Of Done

Un deck nuevo esta listo cuando:

- existe en `decks/<slug>/`,
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
- Usar screenshots borrosos o ilegibles.
- Meter assets generados o builds en git.
- Ocultar la navegacion nativa para resolver contraste.
- Usar animaciones que distraen o flashes de transicion.
- Dejar textos o tarjetas cortadas por falta de validacion visual.
