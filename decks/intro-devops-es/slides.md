---
theme: default
title: "Introducción a DevOps: fundamentos, evolución y ruta de aprendizaje"
info: |
  Presentación introductoria en español sobre DevOps, DevSecOps,
  Platform Engineering y una ruta práctica de aprendizaje.
transition: slide-left
background: "#080b10"
class: intro-devops-es palette-aurora
defaults:
  class: intro-devops-es palette-aurora
routerMode: hash
record: false
download: false
drawings:
  enabled: false
---

<span class="kicker">DevOps desde la base</span>

<h1 class="cover-title">
  <TypingTitle as="span" text="Introducción a DevOps" />
  <TypingTitle as="span" text="fundamentos y evolución" :delay="760" class="cover-title-accent" />
  <TypingTitle as="span" text="ruta de aprendizaje" :delay="1380" class="cover-title-accent" />
</h1>

<p class="lead">Una mirada práctica para entender cómo el software pasa de una idea a producción con más calidad, seguridad y velocidad.</p>

<!--
Notas: Abrir con la promesa de la sesión. No vender DevOps como una moda; presentarlo como una forma de ordenar la entrega de software. Marcar que habrá una parte humana, una parte técnica y una ruta concreta para empezar.
-->

---
transition: fade
---

<IcebergJourney
  mode="visible"
  label="Introducción personal"
  title="Mi trayectoria: lo visible del iceberg"
  subtitle="Lo visible ayuda a dar contexto, pero no cuenta toda la historia."
  certification-image="media/certifications-strip.png"
  :callouts="[
    'Actualmente Platform Product Lead en Credicorp',
    'DevSecOps Ambassador - DevOps Institute',
    'Ambassador - DevSecOps Village',
    '1.er puesto en Ingeniería de Sistemas - UNI',
    'Título profesional',
    'Segunda carrera en curso',
    'Participación en programas de MIT',
    'Formación continua vinculada a Platform Institute',
    'Colaborador de LABIAR-UNI',
    'Speaker internacional en DevOps / DevSecOps / Platform Engineering'
  ]"
/>

<!--
Notas: Usar esta slide para establecer credibilidad sin convertirla en una lista de trofeos. Aclarar que DevSecOps Village queda con el nombre entregado y debe validarse si el speaker desea otra formulación exacta. Si el speaker entrega una imagen oficial de certificaciones, guardarla en `public/media/certifications-strip.png` y ubicarla en esta slide como asset real, no como lista inferida.
-->

---
transition: fade
---

<IcebergJourney
  mode="hidden"
  label="La parte que sostiene"
  title="Lo que no se ve: el camino detrás de los logros"
  subtitle="Los resultados visibles descansan sobre esfuerzo, contexto, disciplina y reinvención."
  :callouts="[
    '3 intentos para ingresar a la universidad',
    'Inicio universitario difícil',
    'No empezó bien la universidad',
    'Viene de provincia',
    'Pequeño pueblo en Cusco',
    'Sin un contexto privilegiado',
    'Errores, caídas y aprendizajes',
    'Disciplina y estudio constante',
    'Reinvención continua',
    'Resiliencia para seguir avanzando'
  ]"
/>

<!--
Notas: Conectar la metáfora: lo visible es importante, pero la base real suele estar debajo. Hacerlo humano y sobrio. La intención es que la audiencia principiante sienta que una ruta técnica sólida se construye con persistencia, no con ventaja inicial perfecta.
-->

---
transition: slide-up
---

<SpeakerProfile kicker="Speaker" organization-connector="en" qr-label="LinkedIn" />

<!--
Notas: Esta es la slide data-driven del perfil. Reforzar la conexión del rol actual con DevOps, DevSecOps y Platform Engineering. No repetir toda la trayectoria; dejar que la slide anterior haya contado la parte narrativa.
-->

---
transition: slide-up
---

<span class="kicker">Agenda</span>

## Qué vamos a recorrer

<div class="agenda-grid">
  <div v-click><span>01</span><strong>Por qué nace DevOps</strong><small>El problema real antes de hablar de herramientas.</small></div>
  <div v-click><span>02</span><strong>CI/CD como esqueleto</strong><small>La ruta del cambio desde código hasta aprendizaje.</small></div>
  <div v-click><span>03</span><strong>Capacidades alrededor</strong><small>Cloud, contenedores, seguridad, calidad y observabilidad.</small></div>
  <div v-click><span>04</span><strong>Evolución natural</strong><small>DevSecOps, Platform Engineering y experiencia de desarrollo.</small></div>
  <div v-click><span>05</span><strong>Ruta y preguntas</strong><small>Aprendizaje, certificaciones, cierre y conversación final.</small></div>
</div>

<!--
Notas: Explicar la estructura de 60 minutos. Reservar 10 a 15 minutos al final para preguntas. Decir que no habrá demo en vivo; la sesión busca construir criterio.
-->

---
transition: slide-left
---

<span class="kicker">Contexto</span>

## DevOps empieza como cambio cultural

<div class="media-split">
  <div>
    <p class="lead">Antes de ser pipelines, DevOps es un mindset: unir desarrollo y operaciones para compartir responsabilidad por el valor que llega a producción.</p>
    <CalloutStack
      :items="[
        { label: 'Mindset', title: 'Responsabilidad compartida', detail: 'El servicio no termina cuando el código se mergea.', tone: 'blue' },
        { label: 'Cultura', title: 'Colaboración sobre transferencia', detail: 'Menos pases de mano; más aprendizaje conjunto.', tone: 'green' },
        { label: 'Sistema', title: 'Feedback corto', detail: 'Aprender rápido de build, pruebas, despliegue y operación.', tone: 'amber' }
      ]"
    />
  </div>
  <MediaFrame
    src="media/devops-culture.png"
    title="Equipo técnico colaborando"
    caption="La unión cultural entre desarrollo y operaciones es la base."
    alt="Grupo de personas de tecnología reunidas en un evento colaborativo"
  />
</div>

<!--
Notas: Empezar explícitamente aquí: DevOps nace como cambio cultural y mindset. La técnica viene después. El objetivo es unir desarrollo y operaciones para que ambos compartan responsabilidad por entregar y operar software con calidad.
-->

---
transition: slide-left
---

<span class="kicker">Contexto</span>

## ¿Por qué nace DevOps?

<TimelineFlow
  :items="[
    { when: 'Antes', title: 'Silos', detail: 'Desarrollo entrega; operaciones recibe presión.', tone: 'rose' },
    { when: 'Dolor', title: 'Fricción', detail: 'Cambios lentos, manuales y difíciles de diagnosticar.', tone: 'amber' },
    { when: 'Respuesta', title: 'Colaboración', detail: 'Equipos comparten responsabilidad por el servicio.', tone: 'blue' },
    { when: 'Hoy', title: 'Sistema', detail: 'Automatización, seguridad, medición y experiencia.', tone: 'green' }
  ]"
/>

<!--
Notas: Evitar empezar con definiciones. Primero describir el dolor: software que tarda, se rompe, no se entiende y genera tensión entre equipos.
-->

---
transition: slide-left
---

<span class="kicker">Problema</span>

## El problema que DevOps resuelve

<div class="concept-grid">
  <article v-click class="concept-card"><span>Velocidad</span><strong>Entregar sin esperar semanas</strong><small>Reducir esperas entre desarrollo, pruebas, seguridad y operaciones.</small></article>
  <article v-click class="concept-card"><span>Calidad</span><strong>Detectar errores antes</strong><small>Automatizar pruebas, análisis y validaciones repetibles.</small></article>
  <article v-click class="concept-card"><span>Confiabilidad</span><strong>Operar con señales</strong><small>Medir disponibilidad, latencia, errores y recuperación.</small></article>
</div>

<!--
Notas: Presentar DevOps como una respuesta a tres tensiones: ir más rápido, romper menos y aprender de producción. Recalcar que no se trata de hacer más trabajo, sino de quitar fricción del sistema.
-->

---
transition: slide-up
---

<span class="kicker">Definición útil</span>

## DevOps en una frase

<QuoteFrame
  quote="DevOps es la disciplina de mejorar cómo construimos, entregamos, operamos y aprendemos del software."
  author="Idea central de la sesión"
  role="No es un cargo ni una herramienta específica"
/>

<!--
Notas: Usar esta frase como ancla. Aclarar que algunas empresas tienen roles DevOps, pero la disciplina es más amplia que el título del puesto.
-->

---
transition: slide-left
---

<span class="kicker">Malentendidos comunes</span>

## DevOps no es solo...

<div class="myth-grid">
  <article v-click class="myth-card"><strong>No es solo infraestructura</strong><span>También implica desarrollo, calidad, seguridad, producto y operación.</span></article>
  <article v-click class="myth-card"><strong>No es solo CI/CD</strong><span>Los pipelines ayudan, pero no arreglan procesos mal pensados.</span></article>
  <article v-click class="myth-card"><strong>No es solo automatización</strong><span>Automatizar caos solo produce caos más rápido.</span></article>
  <article v-click class="myth-card"><strong>No es una persona salvadora</strong><span>Es responsabilidad compartida con ownership claro.</span></article>
</div>

<!--
Notas: Esta slide baja expectativas falsas. Para principiantes, es importante separar herramientas de criterios. La automatización debe servir a una forma de trabajo más sana.
-->

---
transition: slide-left
---

<span class="kicker">Evolución</span>

## DevOps vs DevSecOps vs Platform Engineering

<ComparisonTable
  first-column="Criterio"
  :columns="['DevOps', 'DevSecOps', 'Platform Engineering']"
  :rows="[
    { label: 'Foco', values: ['Entrega y operación', 'Seguridad integrada', 'Experiencia y escala'], preferred: 2 },
    { label: 'Pregunta', values: ['¿Cómo entregamos mejor?', '¿Cómo reducimos riesgo antes?', '¿Cómo hacemos lo correcto fácil?'], preferred: 2 },
    { label: 'Mecanismo', values: ['CI/CD + colaboración', 'Controles shift-left', 'Self-service + golden paths'], preferred: 2 },
    { label: 'Resultado', values: ['Flujo confiable', 'Evidencia y protección', 'Adopción por equipos'], preferred: 2 }
  ]"
/>

<!--
Notas: Explicar que Platform Engineering no reemplaza DevOps. Más bien toma aprendizajes de DevOps y DevSecOps para crear capacidades reutilizables que los equipos quieran usar.
-->

---
transition: slide-up
---

<span class="kicker">Mapa mental</span>

## El ciclo de vida moderno del software

<div class="media-split compact-media">
  <ArchitectureLayers
    :layers="[
      { label: 'Idea', title: 'Backlog y diseño', detail: 'Necesidad, alcance, experiencia, criterio de aceptación.', tone: 'blue' },
      { label: 'Código', title: 'Repositorio y cambios', detail: 'Versionado, ramas, revisión, dependencias.', tone: 'green' },
      { label: 'Entrega', title: 'Pipeline y ambientes', detail: 'Build, test, seguridad, artefacto, despliegue.', tone: 'amber' },
      { label: 'Operación', title: 'Producción y aprendizaje', detail: 'Observabilidad, incidentes, SLO, mejora continua.', tone: 'rose' }
    ]"
  />
  <MediaFrame
    src="media/software-lifecycle.svg"
    fit="contain"
    title="Ciclo de vida de software"
    caption="La entrega conecta producto, código, ambientes, operación y aprendizaje."
    alt="Diagrama del ciclo de vida moderno del software desde backlog hasta operación y feedback"
  />
</div>

<!--
Notas: Mostrar que DevOps atraviesa todo el ciclo, no solo la parte final. Para entender DevOps hay que entender cómo se construye una aplicación y cómo se mueve entre ambientes.
-->

---
transition: slide-left
---

<span class="kicker">Esqueleto de la sesión</span>

## CI/CD como columna vertebral

<div class="cicd-spine-hero">
  <MediaFrame
    class="cicd-spine-media"
    src="media/cicd-pipeline.png"
    fit="contain"
    title=""
    alt="Diagrama de CI/CD en forma de infinito con CI, CD, plan, code, build, test, release, deploy, operate y feedback operativo"
  />
</div>

<!--
Notas: Presentar CI/CD como el esqueleto pedagógico de la charla. Todo lo demás se engancha a esta línea: Git, pruebas, artefactos, contenedores, seguridad, cloud, observabilidad y platform engineering.
-->

---
transition: slide-left
---

<span class="kicker">CI/CD</span>

## CI, delivery y deployment no son lo mismo

<ComparisonTable
  first-column="Concepto"
  :columns="['Integración continua', 'Entrega continua', 'Despliegue continuo']"
  :rows="[
    { label: 'Pregunta', values: ['¿El cambio integra bien?', '¿Está listo para liberar?', '¿Puede ir a producción automáticamente?'], preferred: 1 },
    { label: 'Señal', values: ['Build y pruebas rápidas', 'Artefacto promovible', 'Cambio desplegado con control'], preferred: 1 },
    { label: 'Riesgo', values: ['Ramas largas y conflictos', 'Aprobaciones tardías', 'Automatizar sin guardrails'], preferred: 1 },
    { label: 'Madurez', values: ['Feedback temprano', 'Release confiable', 'Operación muy disciplinada'], preferred: 1 }
  ]"
/>

<!--
Notas: Aclarar esta diferencia temprano. Muchas personas dicen CI/CD como una sola palabra, pero cada parte cambia una pregunta distinta del sistema de entrega.
-->

---
transition: slide-left
---

<span class="kicker">Pipeline anatomy</span>

## Un pipeline útil responde cuatro preguntas

<CalloutStack
  :items="[
    { label: 'Correcto', title: '¿El cambio hace lo esperado?', detail: 'Pruebas, contratos, linting y revisión.', tone: 'blue' },
    { label: 'Seguro', title: '¿Introduce riesgo conocido?', detail: 'Secretos, dependencias, SAST, IaC y políticas.', tone: 'green' },
    { label: 'Promovible', title: '¿Tenemos un artefacto confiable?', detail: 'Versionado, trazabilidad y evidencia.', tone: 'amber' },
    { label: 'Operable', title: '¿Sabremos si falla?', detail: 'Logs, métricas, alertas, rollback y ownership.', tone: 'rose' }
  ]"
/>

<!--
Notas: Esta slide da criterio. No enumerar herramientas; explicar que un pipeline es un mecanismo de preguntas automáticas sobre el cambio.
-->

---
transition: slide-up
---

<span class="kicker">Pull request</span>

## El PR es la primera puerta de calidad

<SequenceDiagram
  aria-label="Flujo de revisión y validación de pull request"
  :participants="[
    { id: 'dev', label: 'Developer' },
    { id: 'repo', label: 'Repositorio' },
    { id: 'ci', label: 'CI' },
    { id: 'team', label: 'Equipo' }
  ]"
  :messages="[
    { from: 'dev', to: 'repo', label: 'Push + PR pequeño', tone: 'blue' },
    { from: 'repo', to: 'ci', label: 'Build, tests, análisis', tone: 'green' },
    { from: 'ci', to: 'team', label: 'Evidencia visible', tone: 'amber' },
    { from: 'team', to: 'repo', label: 'Review + merge con criterio', tone: 'rose' }
  ]"
/>

<!--
Notas: Reforzar que el PR no es burocracia si trae señales útiles. Un buen PR debe ser pequeño, entendible, revisable y acompañado por checks automáticos.
-->

---
transition: slide-left
---

<span class="kicker">Build</span>

## Construir una vez, promover muchas

<ArchitectureLayers
  :layers="[
    { label: 'Fuente', title: 'Código versionado', detail: 'Commit, autor, cambios y dependencias claras.', tone: 'blue' },
    { label: 'Build', title: 'Proceso reproducible', detail: 'Misma entrada debe producir el mismo resultado.', tone: 'green' },
    { label: 'Artefacto', title: 'Paquete inmutable', detail: 'Binario, imagen o paquete con versión.', tone: 'amber' },
    { label: 'Promoción', title: 'Ambientes controlados', detail: 'El mismo artefacto avanza con evidencia.', tone: 'rose' }
  ]"
/>

<!--
Notas: Este concepto evita el clásico error de compilar diferente en cada ambiente. El build debe producir evidencia y un artefacto que pueda rastrearse.
-->

---
transition: slide-left
---

<span class="kicker">Pruebas</span>

## No todas las pruebas cumplen el mismo trabajo

<TimelineFlow
  :items="[
    { when: 'Rápidas', title: 'Unitarias', detail: 'Feedback barato sobre lógica local.', tone: 'blue' },
    { when: 'Contrato', title: 'Integración', detail: 'Confianza entre componentes y APIs.', tone: 'green' },
    { when: 'Usuario', title: 'End-to-end', detail: 'Flujos críticos, pocos y bien elegidos.', tone: 'amber' },
    { when: 'Producción', title: 'Monitoreo sintético', detail: 'Verificación continua del servicio real.', tone: 'rose' }
  ]"
/>

<!--
Notas: Explicar trade-off: mientras más realista la prueba, más costosa y frágil suele ser. Un pipeline sano combina capas.
-->

---
transition: slide-up
---

<span class="kicker">Release</span>

## Ambientes: promoción con evidencia

<SwimlaneFlow
  aria-label="Promoción de artefactos entre ambientes"
  :lanes="[
    { label: 'Dev', steps: ['Build', 'Tests rápidos', 'Imagen versionada', 'Feedback'] },
    { label: 'Stage', steps: ['Integración', 'Seguridad', 'Validación funcional', 'Aprobación'] },
    { label: 'Prod', steps: ['Deploy gradual', 'Monitoreo', 'Rollback listo', 'Aprendizaje'] }
  ]"
/>

<!--
Notas: Evitar vender demasiados ambientes como madurez. El punto es que cada ambiente debe tener un propósito claro y no repetir trabajo sin sentido.
-->

---
transition: slide-left
---

<span class="kicker">Deployment strategies</span>

## Desplegar es gestionar riesgo

<DecisionMatrix
  aria-label="Matriz de estrategias de despliegue"
  x-label="Exposición"
  y-label="Control"
  :quadrants="['Manual', 'Canary', 'Blue/Green', 'Feature flag']"
  :items="[
    { label: 'Big bang', x: 27, y: 23, tone: 'rose' },
    { label: 'Rolling', x: 50, y: 48, tone: 'amber' },
    { label: 'Canary', x: 66, y: 76, tone: 'green' },
    { label: 'Blue/Green', x: 80, y: 57, tone: 'blue' },
    { label: 'Flag', x: 89, y: 84, tone: 'green' }
  ]"
/>

<!--
Notas: No todas las organizaciones necesitan lo mismo. La idea es reducir blast radius y aprender antes de exponer el cambio a todos.
-->

---
transition: slide-left
---

<span class="kicker">Fallas</span>

## Cuando el pipeline falla, debe enseñar

<MetricStrip
  :metrics="[
    { label: 'Tiempo', value: '<10m', delta: 'Feedback útil antes de perder contexto', tone: 'blue' },
    { label: 'Causa', value: 'Clara', delta: 'El error dice qué se rompió', tone: 'green' },
    { label: 'Dueño', value: 'Visible', delta: 'Alguien puede actuar sin buscar culpables', tone: 'amber' },
    { label: 'Acción', value: 'Próxima', delta: 'Reintentar, corregir, revertir o escalar', tone: 'rose' }
  ]"
/>

<!--
Notas: Un pipeline rojo no es fracaso si entrega información accionable. El problema es un pipeline lento, opaco o ignorado.
-->

---
transition: slide-left
---

<span class="kicker">Fundamento técnico</span>

## La importancia de entender desarrollo de software

<div class="pipeline-flow">
  <div v-click class="step-chip"><span>01</span><strong>Código</strong><small>Lenguaje, estructura, dependencias.</small></div>
  <div v-click class="step-chip"><span>02</span><strong>Repositorio</strong><small>Git, ramas, pull requests.</small></div>
  <div v-click class="step-chip"><span>03</span><strong>Pruebas</strong><small>Unitarias, integración, contrato.</small></div>
  <div v-click class="step-chip"><span>04</span><strong>Artefacto</strong><small>Build reproducible y versionado.</small></div>
  <div v-click class="step-chip"><span>05</span><strong>Ambientes</strong><small>Dev, QA, stage, producción.</small></div>
  <div v-click class="step-chip"><span>06</span><strong>Feedback</strong><small>Logs, métricas, errores, usuarios.</small></div>
</div>

<!--
Notas: Para alguien que viene de operaciones o seguridad, insistir con cariño: entender desarrollo no significa ser senior developer, pero sí comprender el viaje del cambio.
-->

---
transition: slide-left
---

<span class="kicker">CI/CD</span>

## Automatización con criterio

<BrowserMockup
  title="Pipeline de entrega"
  url="https://platform.local/pipelines/app"
  :nav="['Build', 'Test', 'Security', 'Deploy']"
  :cards="[
    { kicker: 'Build', title: 'Compilar una vez', detail: 'El mismo artefacto se promueve entre ambientes.' },
    { kicker: 'Tests', title: 'Señales tempranas', detail: 'Fallos claros antes de llegar a producción.' },
    { kicker: 'Deploy', title: 'Promoción controlada', detail: 'Cambios trazables, reversibles y auditables.' }
  ]"
/>

<!--
Notas: CI/CD no es apretar un botón mágico. Es convertir decisiones repetibles en pasos verificables. Hablar de integración continua, entrega continua y despliegue continuo como niveles de madurez.
-->

---
transition: slide-left
---

<span class="kicker">Workflows</span>

## Qué hace seguro y escalable a un workflow

<CalloutStack
  :items="[
    { label: 'Seguro', title: 'Menos permisos, más evidencia', detail: 'Secretos protegidos, identidad controlada, trazabilidad.', tone: 'blue' },
    { label: 'Reutilizable', title: 'Plantillas y módulos mantenidos', detail: 'No copiar pipelines rotos en cada repositorio.', tone: 'green' },
    { label: 'Mantenible', title: 'Pocas rutas, pasos claros', detail: 'Logs útiles, fallos explicables, ownership visible.', tone: 'amber' },
    { label: 'Escalable', title: 'Funciona para muchos equipos', detail: 'Convenciones, versionado y soporte como producto.', tone: 'rose' }
  ]"
/>

<!--
Notas: Introducir el criterio de ingeniería: un workflow bueno no solo pasa hoy; también se entiende, se audita y se evoluciona mañana.
-->

---
transition: slide-up
---

<span class="kicker">Contenedores</span>

## Docker: empaquetar la aplicación y su contexto

<div class="two-column-visual">
  <IconGrid
    :items="[
      { icon: 'IMG', title: 'Imagen', detail: 'Plantilla inmutable de ejecución.', tone: 'blue' },
      { icon: 'RUN', title: 'Contenedor', detail: 'Instancia aislada y repetible.', tone: 'green' },
      { icon: 'REG', title: 'Registry', detail: 'Lugar para publicar y consumir imágenes.', tone: 'amber' },
      { icon: 'CFG', title: 'Config', detail: 'Variables, secretos y parámetros externos.', tone: 'rose' }
    ]"
  />
  <div class="explain-list">
    <article><strong>La promesa</strong><small>Que la aplicación se comporte de forma consistente en diferentes ambientes.</small></article>
    <article><strong>El riesgo</strong><small>Imágenes pesadas, secretos dentro del contenedor o builds no reproducibles.</small></article>
    <article><strong>El criterio</strong><small>Construir imágenes mínimas, versionadas y escaneadas.</small></article>
  </div>
</div>

<!--
Notas: Explicar Docker como una forma de reducir el clásico “en mi máquina funciona”. Evitar entrar en comandos; aquí interesa el modelo mental.
-->

---
transition: slide-left
---

<span class="kicker">Orquestación</span>

## Kubernetes u OpenShift: operar muchos contenedores

<ArchitectureLayers
  :layers="[
    { label: 'Workload', title: 'Pods / despliegues', detail: 'La aplicación declarada como estado deseado.', tone: 'blue' },
    { label: 'Servicio', title: 'Red y descubrimiento', detail: 'Cómo se encuentra y expone cada componente.', tone: 'green' },
    { label: 'Escala', title: 'Scheduling y réplicas', detail: 'Dónde corre, cuántas copias y con qué límites.', tone: 'amber' },
    { label: 'Operación', title: 'Salud y recuperación', detail: 'Readiness, liveness, reinicio, rollout y rollback.', tone: 'rose' }
  ]"
/>

<!--
Notas: Dejar claro que Kubernetes no es el punto de partida para todo, pero sí es clave para entender plataformas modernas. OpenShift puede verse como una distribución empresarial con capacidades adicionales.
-->

---
transition: slide-left
---

<span class="kicker">Infraestructura y artefactos</span>

## IaC y repositorios de artefactos

<SwimlaneFlow
  aria-label="Flujo de infraestructura y artefactos"
  :lanes="[
    { label: 'Código', steps: ['Terraform / Pulumi / CloudFormation', 'Pull request', 'Plan', 'Apply'] },
    { label: 'Artefactos', steps: ['Build', 'Versionar', 'Publicar', 'Promover'] },
    { label: 'Gobierno', steps: ['Revisión', 'Política', 'Evidencia', 'Trazabilidad'] }
  ]"
/>

<!--
Notas: Conectar infraestructura como código con repositorios de artefactos: ambos buscan reproducibilidad. Mencionar Nexus, Artifactory, GitHub Packages o similares como categorías, no como recomendación única.
-->

---
transition: slide-up
---

<span class="kicker">Calidad</span>

## Calidad de código: lo que el pipeline debe hacer visible

<MetricStrip
  :metrics="[
    { label: 'Cobertura', value: 'Señal', delta: 'No garantía absoluta', tone: 'blue' },
    { label: 'Bugs', value: 'Riesgo', delta: 'Defectos detectables', tone: 'rose' },
    { label: 'Code smells', value: 'Deuda', delta: 'Mantenibilidad futura', tone: 'amber' },
    { label: 'Complejidad', value: 'Costo', delta: 'Cambio más difícil', tone: 'green' }
  ]"
/>

<!--
Notas: Explicar que calidad no es una nota para castigar equipos. Es información para decidir si el cambio es sano, mantenible y entendible.
-->

---
transition: slide-left
---

<span class="kicker">DevSecOps</span>

## Seguridad shift-left: encontrar riesgo antes

<IconGrid
  :items="[
    { icon: 'SAST', title: 'Código', detail: 'Patrones inseguros antes del merge.', tone: 'blue' },
    { icon: 'SCA', title: 'Dependencias', detail: 'Vulnerabilidades y licencias.', tone: 'green' },
    { icon: 'DAST', title: 'App en ejecución', detail: 'Pruebas dinámicas contra endpoints.', tone: 'amber' },
    { icon: 'SEC', title: 'Secretos', detail: 'Tokens y claves fuera del repositorio.', tone: 'rose' },
    { icon: 'IaC', title: 'Infraestructura', detail: 'Políticas sobre redes, IAM y exposición.', tone: 'blue' },
    { icon: 'EVD', title: 'Evidencia', detail: 'Trazabilidad para auditoría y aprendizaje.', tone: 'green' }
  ]"
/>

<!--
Notas: Shift-left no significa pasarle todo el trabajo de seguridad al developer. Significa dar feedback temprano, automatizado y accionable.
-->

---
transition: slide-left
---

<span class="kicker">Observabilidad</span>

## Más allá del despliegue

<BrowserMockup
  title="Panel de operación"
  url="https://observe.local/service/app"
  :nav="['Logs', 'Métricas', 'Trazas', 'Alertas']"
  :cards="[
    { kicker: 'SLI / SLO', title: 'Disponibilidad 99.9%', detail: 'Objetivo acordado con negocio y operación.' },
    { kicker: 'Latencia', title: 'p95 bajo control', detail: 'No basta saber que responde; importa cuánto tarda.' },
    { kicker: 'MTTR', title: 'Recuperación medible', detail: 'Aprender cuánto demoramos en restaurar el servicio.' }
  ]"
/>

<!--
Notas: Explicar logs, métricas y trazas como tres lentes complementarios. Sumar alertas, dashboards, errores, latencia, disponibilidad, SLI, SLO y MTTR como vocabulario básico.
-->

---
transition: slide-up
---

<span class="kicker">Cloud fundamentals</span>

## Cloud: capacidades que debes reconocer

<div class="media-split compact-media">
  <IconGrid
    :items="[
      { icon: 'IAM', title: 'Identidad', detail: 'Quién puede hacer qué.', tone: 'blue' },
      { icon: 'NET', title: 'Redes', detail: 'Conectividad y exposición.', tone: 'green' },
      { icon: 'CPU', title: 'Cómputo', detail: 'Dónde corre la carga.', tone: 'amber' },
      { icon: 'DB', title: 'Datos', detail: 'Bases y persistencia.', tone: 'rose' }
    ]"
  />
  <MediaFrame
    src="media/cloud-operations.jpg"
    title="Operación cloud"
    caption="Cloud combina infraestructura, identidad, red, datos, monitoreo y costos."
    alt="Racks de servidores en un data center moderno"
  />
</div>

<!--
Notas: Mantenerlo vendor-neutral. No importa si luego la persona usa AWS, Azure, GCP u otra nube; estos bloques conceptuales aparecen en todas.
-->

---
transition: slide-left
---

<span class="kicker">Mapa de capacidades</span>

## Herramientas por capacidad, no por moda

<div class="concept-grid">
  <article v-click class="concept-card"><span>Source</span><strong>Repositorios y revisión</strong><small>Git, pull requests, branching, ownership.</small></article>
  <article v-click class="concept-card"><span>Build</span><strong>CI/CD y artefactos</strong><small>Pipelines, paquetes, imágenes, registries.</small></article>
  <article v-click class="concept-card"><span>Run</span><strong>Runtime y plataforma</strong><small>Contenedores, Kubernetes, cloud, IaC.</small></article>
  <article v-click class="concept-card"><span>Secure</span><strong>Seguridad integrada</strong><small>SAST, DAST, SCA, secretos, políticas.</small></article>
  <article v-click class="concept-card"><span>Observe</span><strong>Operación visible</strong><small>Logs, métricas, trazas, dashboards.</small></article>
  <article v-click class="concept-card"><span>Govern</span><strong>Calidad y gobierno</strong><small>Estándares, evidencia, costos, compliance.</small></article>
</div>

<!--
Notas: Esta slide ayuda a ordenar herramientas. El mensaje: primero identifica la capacidad; luego eliges herramienta. No al revés.
-->

---
transition: slide-left
---

<span class="kicker">Developer experience</span>

## Mentalidad de producto y experiencia del desarrollador

<CalloutStack
  :items="[
    { label: 'Usuario', title: 'El equipo de desarrollo también es usuario', detail: 'Si la plataforma fricciona, la gente la evita.', tone: 'blue' },
    { label: 'Producto', title: 'Capacidades mantenidas, no scripts sueltos', detail: 'Roadmap, soporte, documentación y métricas.', tone: 'green' },
    { label: 'Experiencia', title: 'El buen camino debe ser obvio', detail: 'Plantillas, defaults seguros y feedback rápido.', tone: 'amber' }
  ]"
/>

<!--
Notas: Conectar aquí con Platform Engineering. El foco cambia de “yo configuro todo” a “diseño una experiencia que otros pueden adoptar”.
-->

---
transition: slide-up
---

<span class="kicker">Platform Engineering</span>

## La evolución natural: self-service y golden paths

<ArchitectureLayers
  :layers="[
    { label: 'DX', title: 'Portal y documentación', detail: 'Descubrir capacidades sin pedir permisos por chat.', tone: 'blue' },
    { label: 'Paths', title: 'Golden paths', detail: 'Rutas recomendadas, soportadas y escapables.', tone: 'green' },
    { label: 'Controls', title: 'Seguridad por defecto', detail: 'Guardrails integrados en el flujo.', tone: 'amber' },
    { label: 'Reuse', title: 'Capacidades reutilizables', detail: 'Pipelines, módulos, templates, observabilidad.', tone: 'rose' }
  ]"
/>

<!--
Notas: Repetir el core message: Platform Engineering no elimina DevOps; amplía su alcance cuando muchas personas necesitan usar patrones seguros y mantenibles.
-->

---
transition: slide-left
---

<span class="kicker">Gobierno práctico</span>

## Buenas prácticas sin fricción innecesaria

<ComparisonTable
  first-column="Decisión"
  :columns="['Fricción alta', 'Buen guardrail', 'Resultado']"
  :rows="[
    { label: 'Seguridad', values: ['Aprobaciones manuales tardías', 'Checks automáticos temprano', 'Menos retrabajo'], preferred: 1 },
    { label: 'Calidad', values: ['Reportes que nadie lee', 'Umbrales claros en PR', 'Feedback accionable'], preferred: 1 },
    { label: 'Gobierno', values: ['Wiki desactualizada', 'Políticas como código', 'Evidencia repetible'], preferred: 1 },
    { label: 'Costos', values: ['Sorpresas mensuales', 'Etiquetas y límites visibles', 'Decisiones informadas'], preferred: 1 }
  ]"
/>

<!--
Notas: Aclarar que gobierno no debería ser sinónimo de bloqueo. El objetivo es bajar riesgo de manera que los equipos puedan seguir entregando.
-->

---
transition: slide-up
---

<span class="kicker">Ruta de aprendizaje</span>

## Una ruta recomendada para empezar

<MaturityCurve
  :points="[
    { x: 110, y: 230, title: 'Linux + Git', detail: 'Base diaria' },
    { x: 300, y: 188, title: 'Dev', detail: 'App simple' },
    { x: 470, y: 132, title: 'CI/CD', detail: 'Pipeline' },
    { x: 620, y: 88, title: 'Cloud + IaC', detail: 'Ambientes' },
    { x: 790, y: 58, title: 'Platform', detail: 'Golden paths' }
  ]"
/>

<!--
Notas: Recomendar práctica progresiva: construir una app simple, ponerla en Git, probarla, containerizarla, desplegarla, observarla y luego automatizar infraestructura.
-->

---
transition: slide-left
---

<span class="kicker">Credibilidad</span>

## Certificaciones y siguientes pasos

<p class="lead certification-lead">Las certificaciones no reemplazan experiencia. Úsalas para ordenar una ruta: primero base, luego capacidad práctica y después especialización.</p>

<CertificationTiers />

<!--
Notas: No prometer que una certificación consigue trabajo. Presentarlas como una forma de ordenar aprendizaje y credibilidad. Evitar listar credenciales específicas si no están validadas con evidencia del speaker.
-->

---
transition: fade
---

<span class="kicker">Cierre</span>

## Qué llevarte de esta sesión

<div class="final-model">
  <strong>DevOps es sistema, no herramienta</strong>
  <strong>Seguridad y calidad van temprano</strong>
  <strong>Observabilidad cierra el ciclo</strong>
  <strong>Platform Engineering escala la adopción</strong>
  <strong>Aprende construyendo evidencia</strong>
</div>

<CalloutStack
  :items="[
    { label: 'Esta semana', title: 'Elige una aplicación pequeña', detail: 'Ponla en Git, agrega pruebas y crea un pipeline simple.', tone: 'blue' },
    { label: 'Este mes', title: 'Agrega operación real', detail: 'Containeriza, despliega, monitorea y documenta el aprendizaje.', tone: 'green' },
    { label: 'Siguiente paso', title: 'Construye portafolio con evidencia', detail: 'README, decisiones, errores, métricas y mejoras.', tone: 'amber' }
  ]"
/>

<!--
Notas: Cerrar con la idea central: DevOps no es memorizar herramientas, es mejorar el sistema de entrega y aprendizaje del software. La recomendación es aprender haciendo, no acumulando nombres de herramientas.
-->

---
transition: fade
---

<span class="kicker">Preguntas</span>

## Abrimos conversación

<div class="qa-frame">
  <ul>
    <li>¿Qué parte de la ruta te falta fortalecer?</li>
    <li>¿Qué práctica podrías aplicar esta semana?</li>
    <li>¿Qué herramienta estás aprendiendo sin entender aún la capacidad?</li>
    <li>¿Dónde se rompe hoy tu flujo: código, build, pruebas, seguridad, deploy u operación?</li>
  </ul>
  <div class="question-mark">?</div>
</div>

<!--
Notas: Reservar aquí 10 a 15 minutos para preguntas. Si no aparecen preguntas de inmediato, usar las cuatro preguntas en pantalla para iniciar conversación.
-->
