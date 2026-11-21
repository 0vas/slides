# Deck brief · Platform Engineering Strategic Vision

## Source prompt

Crear una visión estratégica de Platform Engineering a partir de las doce fuentes de Gartner proporcionadas. Explicar qué son el journey y el golden path, y qué capacidades requiere la plataforma. Aplicar la paleta de la imagen y conservar el nivel de ilustración, movimiento y transiciones acordado.

## Intake

| Campo | Decisión |
| --- | --- |
| Audiencia | Liderazgo de tecnología, producto e ingeniería |
| Nivel | Estratégico con profundidad técnica para tomar decisiones |
| Duración | 30 minutos |
| Resultado | Decidir si patrocinar un piloto con un equipo, un journey y criterios de salida |
| Temas | Portafolio de journeys, golden paths y abstracción, arquitectura por planos, personas/procesos/tecnología, gobierno, medición, eficiencia e IA |
| Idioma | Español, con el título en inglés |
| Activos | Doce PDFs de Gartner, referencia de paleta y perfil compartido de Oscar |
| Entregable | Presentación HTML autónoma en el repositorio |
| Slug | `platform-engineering-strategic-vision` |

## Visual direction

| Elemento | Decisión |
| --- | --- |
| Paleta | Marfil Antiguo 60%, Negro Piano 30%, Turquesa Surf 10% como intención de composición |
| Colores | `#EFE9DD` y `#141918` aproximados desde la imagen, `#00C2B5` exacto; verde más oscuro para texto pequeño sobre marfil |
| Movimiento | La orden atraviesa la cocina, el plano de arquitectura traza los flujos y el modelo económico libera bloques de capacidad. El ponente controla los pasos, las transiciones y el carrusel |
| Medios | Ilustraciones SVG detalladas, diagramas HTML/CSS, fuentes digitales incrustadas, retrato y QR locales |
| Ritmo | Portada cartográfica, cambios de capítulo oscuros, mapas comparables, diagramas propios y cierre |

## Assumptions

- La charla dura unos 30 minutos y culmina en una propuesta de inversión para un público de liderazgo.
- El primer servicio HTTP interno es ficticio. El piloto y las señales de medición son una propuesta.
- Las tres capturas aportan la metáfora, los pilares y una arquitectura de referencia. El 80/20 y USD 100 mil son supuestos para un escenario de capacidad. Las cifras de la tabla de la captura quedan como preguntas de validación para el piloto.
- Las figuras son interpretaciones originales. El pie de cada lámina identifica la fuente Gartner, con título abreviado, número de documento y páginas donde corresponde.

## Narrative plan

| Sección | Propósito | Láminas |
| --- | --- | --- |
| Apertura | Presentar la pregunta estratégica y al expositor | 2 |
| Journey | Observar la fricción, pavimentar el recorrido y explicar la abstracción | 5 |
| Capacidades | Definir el contrato, la arquitectura, las interfaces y las variantes | 6 |
| Operación | Conectar pilares, asignar responsabilidades y construir un ciclo de adopción | 4 |
| Evidencia e inversión | Medir el resultado, contrastarlo y estimar capacidad recuperable | 5 |
| IA y horizonte | Reutilizar los contratos con agentes y priorizar experimentos | 2 |
| Decisión | Acordar un piloto de 90 días y revisar su continuidad | 2 |
| Fuentes y cierre | Referencias y decisión solicitada | 3 |

## Asset and component plan

- Perfil y carrusel del deck DevEx, con identidad compartida de `data/speaker`, QR local y retrato autorizado en `src/media/oscar.jpg`.
- Space Grotesk y Manrope de Fontsource Variable 5.3.0, con las licencias OFL en `src/media/fonts` e incluidas en el HTML.
- Mapas, capas y secuencias siguen los patrones PlatformMap, ArchitectureLayers, SequenceDiagram y TimelineFlow del catálogo. Sus implementaciones HTML y SVG viven en `src/` para conservar el HTML autónomo.
- Láminas 11–16 y 18–21. Ilustraciones específicas en `strategy-art.mjs` y `strategy-art.css`, con etapas que se pueden recorrer hacia delante y hacia atrás.
- `public/media/cover.png` es una captura de la portada para la galería.

## Acceptance and validation

- El caso de primer servicio debe conectar las etapas, las capacidades y su evidencia hasta operación, y conducir a la decisión de inversión.
- Debe haber portada, perfil en la lámina 2 con carrusel, atribución en todas las láminas y cierre.
- Revisar cada estado a 1440 × 900 y validar navegación, transiciones reversibles, notas, pausa, movimiento reducido y render autónomo.
- Ejecutar `node decks/platform-engineering-strategic-vision/src/build.mjs` y `make check DECK=platform-engineering-strategic-vision`.
