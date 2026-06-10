# Lineamientos para decks Slidev

Estos lineamientos son la base para futuras iteraciones de IA en este repositorio.

Documentos relacionados:

- `docs/project-state.md`
- `docs/component-catalog.md`
- `docs/style-catalog.md`
- `docs/new-deck-agent-guide.md`
- `agent.md`

## Objetivo visual

- Crear presentaciones minimalistas, pero no planas.
- Usar HTML/CSS/Vue como una experiencia web animada y fluida.
- Mantener una estetica enterprise-tech clara por defecto: luminosa,
  contrastada, sobria y con acentos de color.
- Usar paletas oscuras solo cuando la charla pida un tono nocturno, keynote o
  de alto contraste.
- Priorizar una idea por slide y apoyar esa idea con un componente visual.

## Estructura recomendada

- Un deck vive en `decks/<slug>/slides.md`.
- Componentes propios del deck viven en `decks/<slug>/components/`.
- Componentes reutilizables entre decks deben promoverse a `shared/components/`
  cuando ya no dependan de una charla especifica.
- Estilos compartidos viven en `shared/styles/theme.css`.
- Paletas compartidas viven en `shared/styles/palettes.css`.
- Cada deck debe tener `decks/<slug>/styles/index.css` importando el tema compartido.
- Imagenes, videos, GIFs, capturas, logos, graficas de comunidad y mascotas de
  una charla viven en `decks/<slug>/public/media/`.
- Referenciar multimedia del deck como `media/<archivo>` desde Markdown/props o
  resolverla con `import.meta.env.BASE_URL` dentro de componentes Vue.
- En decks futuros, buscar proactivamente iconos SVG en SVG Repo e imagenes
  editoriales en Pexels, Unsplash, Pixabay o fuentes similares cuando ayuden a
  explicar, ambientar o jerarquizar una idea.
- Descargar esos assets al deck, no referenciarlos en remoto. Mantener una nota
  de fuente, autor y licencia en un README o metadata del deck.
- No meter assets generados en `public/` hasta que sean necesarios.

## Duracion y ritmo

- Para 30 minutos, apuntar a 24-30 slides.
- Usar secciones visuales cada 5-7 slides.
- Alternar entre:
  - Slide conceptual.
  - Diagrama o mockup.
  - Flujo operativo.
  - Leccion o decision.
- Evitar bloques largos de texto; usar frases cortas y voz de charla.

## Animaciones

- Usar `transition` por slide, no una sola transicion para todo el deck.
- Alternar transiciones entre bloques para generar ritmo, manteniendo consistencia por seccion.
- Preferir:
  - `fade` para ideas sobrias.
  - `slide-left` y `slide-up` para avanzar secciones.
- Evitar `view-transition` cuando produzca flash visual en navegador/proyector.
- Usar efecto de escritura tipo codigo solo en titulos seleccionados mediante `TypingTitle`.
- El efecto de escritura no debe mostrar caret, borde vertical ni linea de cursor
  persistente; solo debe revelar el texto de forma limpia.
- Usar `v-click` para revelar capas progresivas.
- Usar `v-motion` en componentes visuales, con delays cortos por item.
- Mantener duraciones entre 420ms y 680ms.
- No abusar de animaciones decorativas; cada movimiento debe mostrar relacion, jerarquia o progresion.

## Graficos y mockups

- Preferir mockups HTML/CSS editables antes que screenshots reales cuando no haya credenciales o permisos.
- Los mockups deben parecer producto real, pero no copiar pantallas exactas innecesariamente.
- Usar componentes Vue para graficos reutilizables:
  - Topologias.
  - Flujos.
  - Dashboards.
  - Radars.
  - Curvas de madurez.
  - Tablas comparativas.
  - Matrices de decision.
  - Jerarquias.
  - Timelines.
  - Diagramas de capas.
- Usar componentes Mermaid cuando el DSL acelere diagramas complejos:
  `MermaidDiagram` para Mermaid custom, `MermaidSyntaxCatalog` para elegir entre
  las familias disponibles y presets como `MermaidArchitecture`,
  `MermaidJourney`, `MermaidRoadmap` y `MermaidQuadrant` para patrones de alto
  nivel.
- Revisar `docs/component-catalog.md` antes de crear una visual nueva.
- Usar componentes compartidos para grafos, diagramas de secuencia y media antes
  de crear visuales ad hoc.
- El `component-showcase` debe mostrar solo componentes agnosticos y patrones
  reutilizables. Los componentes ligados a un producto, marca o CTA especifico
  se quedan en su deck.
- Usar `BrowserMockup` para mockups genericos claros; reservar `GitHubMockup`
  para la charla GitHub.
- Los mockups de producto deben ser superficies claras por defecto, con sombra
  y borde sutil para separarse de fondos claros o oscuros.
- Para imagen, video o GIF, usar `MediaFrame` y assets locales cuando sean parte
  esencial de la charla.
- Los iconos SVG externos deben optimizarse o revisarse antes de usarlos. Evitar
  SVGs rotos, con scripts, dimensiones inestables o estilos que no puedan
  adaptarse a la paleta del deck.
- En portadas o slides con una visual nueva, agregar sin reemplazar lo que ya
  comunica la slide, salvo que el usuario pida explicitamente sustituirlo.
- Para 3D, usar `Shape3DStage`/Three.js y validar con screenshot que el canvas
  renderiza correctamente.
- Para Mermaid, validar con screenshot que el diagrama renderiza y que texto,
  leyendas y nodos mantienen contraste.
- Evitar imagenes borrosas o capturas que no aporten informacion.

## Estilo

- Fondo claro por defecto con grid sutil y gradientes suaves.
- `palette-crystal` es la base recomendada para templates, showcase y decks
  nuevos cuando no hay una direccion visual especifica.
- Usar gradientes radiales y lineales con moderacion para dar profundidad, sin tapar el contenido.
- Usar gradientes en tipografia y bordes como recurso principal de marca visual.
- Tarjetas con `border-radius: 8px`.
- Acentos por dominio:
  - Azul: plataforma, acciones, infraestructura.
  - Verde: avance, seguridad activa, estado saludable.
  - Ambar: riesgo, priorizacion, dependencias.
  - Rosa: alertas, gates, excepciones.
- Texto grande para ideas principales.
- Texto pequeno solo para etiquetas, notas o detalle de soporte.
- En fondos oscuros, el texto de lectura debe ser blanco o casi blanco. El gris
  queda solo para etiquetas secundarias que no afecten la comprension.
- No usar paletas de un solo color.
- Elegir una paleta de `docs/style-catalog.md` antes de diseñar slides.
- Cambiar de paleta via `class: palette-*` y `defaults.class`, no copiando CSS
  por deck.
- Si una slide declara una clase propia, debe conservar tambien la clase de la
  paleta para no volver al estilo por defecto.
- Cuando una paleta nueva sea necesaria, actualizar `shared/styles/palettes.css`,
  `StylePalette`, `README.md` y `docs/style-catalog.md` en el mismo cambio.
- Preferir la navegacion nativa de Slidev cuando pueda estilizarse bien.
- La cinta nativa debe conservar iconos visibles en modo play y presenter.
- No ocultar la cinta nativa para resolver contraste; corregir color,
  fondo, bordes y estados hover.
- Evitar duplicar cintas de navegacion.
- Mantener visible el cursor sobre controles.
- La accion de grilla debe abrir una vista visual con miniaturas de todos los
  slides; no debe ser solo una lista de numeros.

## Contenido

- Explicar GitHub desde mirada de plataforma, no solo developer.
- Mostrar la relacion entre gobierno, seguridad, automatizacion y productividad.
- Incluir siempre lecciones operativas o criterios de decision.
- Las slides de presentacion personal deben ser data-driven y reutilizables.
- Los datos personales estables deben vivir en `data/speaker/speaker.json`; los
  decks solo deben sobreescribir campos especificos de la charla.
- Los assets personales compartidos deben vivir en `data/speaker/`.
- El QR de LinkedIn debe ser una imagen real importada desde los datos root; si
  aun no existe, usar placeholder visual y documentar la ruta esperada.
- La metadata personal debe entrar de forma organica: rol, organizacion,
  afiliaciones relevantes y handles publicos, sin convertirlo en CV completo.
- Evitar redundancia en slides de speaker y cierre: si el QR ya comunica el
  contacto, no repetir una etiqueta grande; si el nombre/rol ya aparecen, no
  duplicarlos en tarjetas cercanas.
- Para handles ambiguos, escribirlos con claridad tipografica. En `@0vas`, el
  primer caracter es cero; si se aclara, hacerlo una sola vez y no repetirlo en
  cada bloque de contacto.
- Si se menciona una capacidad actual de GitHub, verificarla con fuentes oficiales cuando sea temporal o pueda cambiar.
- No prometer features incluidas en trials o planes sin validacion.

## Validacion

- Ejecutar `npm run build -- <slug>` despues de cambios importantes.
- Preferir `make check DECK=<slug>` como comando estandar de verificacion.
- Revisar al menos una captura de portada y una de slide interno con Playwright.
- Confirmar que no haya textos cortados en 1440x900.
- Verificar que los componentes visuales no dependan de internet.
- Evitar dejar el cursor encima de la navegacion propia al tomar screenshots
  para no capturar estados hover accidentales.
- Los warnings de dependencias transitivas pueden anotarse si no bloquean el build.
