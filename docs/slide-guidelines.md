# Lineamientos para decks Slidev

Estos lineamientos son la base para futuras iteraciones de IA en este repositorio.

Documentos relacionados:

- `docs/project-state.md`
- `docs/component-catalog.md`
- `docs/new-deck-agent-guide.md`
- `agent.md`

## Objetivo visual

- Crear presentaciones minimalistas, pero no planas.
- Usar HTML/CSS/Vue como una experiencia web animada y fluida.
- Mantener una estetica enterprise-tech: oscura, contrastada, sobria y con acentos de color.
- Priorizar una idea por slide y apoyar esa idea con un componente visual.

## Estructura recomendada

- Un deck vive en `decks/<slug>/slides.md`.
- Componentes propios del deck viven en `decks/<slug>/components/`.
- Componentes reutilizables entre decks deben promoverse a `shared/components/`
  cuando ya no dependan de una charla especifica.
- Estilos compartidos viven en `shared/styles/theme.css`.
- Cada deck debe tener `decks/<slug>/styles/index.css` importando el tema compartido.
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
- Revisar `docs/component-catalog.md` antes de crear una visual nueva.
- Evitar imagenes borrosas o capturas que no aporten informacion.

## Estilo

- Fondo oscuro con grid sutil.
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
- No usar paletas de un solo color.
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
- Los datos personales estables deben vivir en `data/person.js`; los decks solo
  deben sobreescribir campos especificos de la charla.
- Los assets personales compartidos deben vivir en `shared/public/speaker/`.
- El QR de LinkedIn debe ser una imagen real importada desde los datos root; si
  aun no existe, usar placeholder visual y documentar la ruta esperada.
- La metadata personal debe entrar de forma organica: rol, organizacion,
  afiliaciones relevantes y handles publicos, sin convertirlo en CV completo.
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
