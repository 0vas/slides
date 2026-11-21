# DevEx en la era de la IA

Charlamos sobre Lean, Accelerate, CAB, el origen de DORA, métricas degenerativas y la ley de Goodhart, SPACE, DevEx, plataformas SEIP y cómo revisar la medición cuando la IA cambia el flujo.

## Intención

- Audiencia asumida: ingeniería de software, plataforma y líderes técnicos de nivel intermedio.
- Duración asumida: 30 minutos. Charla en español, independiente de proveedor.
- Resultado: que cada equipo salga con una hipótesis medible sobre una fricción y un contrapeso de calidad.
- Formato: HTML 16:9 autocontenido compatible con la galería del repositorio. Perfil desde los datos compartidos, con QR local. Ejemplos rotulados como ilustrativos.
- Dirección visual: línea de entrega industrial en azul ultramar, ámbar, carbón y blanco frío. Un ticket representa el cambio de software. Se desplaza, se acumula o se inspecciona según el argumento.
- Perfil en la segunda lámina. Composición de la referencia del expositor adaptada a la paleta del deck. Retrato, SRE FDE en Cobre, formación y QR de LinkedIn incrustado. El carrusel recupera las participaciones de la asesoría de IA y avanza cada 2,8 segundos al proyectar la lámina.
- Crédito visible en el encabezado de cada lámina de esta edición, usando el nombre del expositor de los datos compartidos.

## Arco

1. Del flujo Lean a DORA. Cola de CAB, aprobación basada en riesgo, Goodhart y cuotas de commits, PRs y despliegues.
2. Tres perspectivas complementarias. DORA, SPACE y DevEx sobre el mismo recorrido.
3. La IA cambia la distribución del trabajo. Evidencia, revisión de indicadores y nuevas señales.
4. Medir una hipótesis. Instrumentación, plataformas SEIP, piloto y decisión.

## Criterios

- Separar las cuatro métricas históricas de las cinco vigentes y las propuestas para IA de los estándares publicados.
- Distinguir los ejemplos del capítulo 2 de Accelerate de las cuotas de actividad actuales. Separar el origen de las métricas en 2014–2015 del hallazgo de DORA sobre aprobación externa de 2019.
- Contrastar datos operativos, experiencia reportada y resultados de producto. Explicitar unidades, alcance, fuentes y límites.
- Portada, perfil, escenas de datos, diagramas por etapas, cierre y fuentes con notas de exposición.
- Revelados reversibles y transiciones direccionales con tratamiento específico en capítulos. Probar navegación rápida, pausa, movimiento reducido, pantalla negra, índice y notas.
- Verificar todos los estados y legibilidad en 16:9 y a 1440×900. Verificar el build con `make check DECK=devex-metricas-era-ia`.

## Edición

El storyboard define el contenido y las notas. Tras editarlo, ejecutar `node decks/devex-metricas-era-ia/src/build.mjs` desde la raíz del repo para regenerar `index.html`.

El HTML funciona directamente desde el disco. Con las flechas se recorren los revelados. Shift y flechas saltan entre láminas. El índice abre con I y las notas, en un diálogo de la lámina actual, con P.

## Verificación

El build del repositorio copia el HTML y la portada a la salida de publicación. La revisión cubre 29 láminas y 72 estados de navegación con Chromium, incluida la navegación sin red. Se comprueban geometría a 1600×900 y capturas a 1440×900. La segunda lámina se verifica también con cada tarjeta del carrusel, pausa y QR estable.
