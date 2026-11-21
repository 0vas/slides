const urls = {
  book: ['Accelerate · Forsgren, Humble y Kim', 'https://itrevolution.com/product/accelerate/'],
  bookCh2: ['Accelerate · Capítulo 2', 'https://itrevolution.com/wp-content/uploads/2022/06/ACC_excerpt.pdf'],
  lean: ['DORA · Mapa del flujo de valor', 'https://dora.dev/guides/value-stream-management/'],
  batches: ['DORA · Lotes pequeños', 'https://dora.dev/capabilities/working-in-small-batches/'],
  approvals: ['DORA · Aprobación de cambios', 'https://dora.dev/capabilities/streamlining-change-approval/'],
  history: ['DORA · Historia de las métricas', 'https://dora.dev/insights/dora-metrics-history/'],
  dora: ['DORA · Métricas de entrega', 'https://dora.dev/guides/dora-metrics/'],
  goodhart: ['Strathern · Improving Ratings', 'https://www.cambridge.org/core/journals/european-review/article/improving-ratings-audit-in-the-british-university-system/FC2EE640C0C44E3DB87C29FB666E9AAB'],
  space: ['Forsgren et al. · SPACE', 'https://doi.org/10.1145/3454122.3454124'],
  devex: ['Noda et al. · DevEx', 'https://doi.org/10.1145/3610285'],
  ai: ['DORA · IA como amplificador', 'https://dora.dev/research/2025/dora-report/'],
  roi: ['DORA · ROI de IA', 'https://dora.dev/ai/roi/report/'],
  metr: ['METR · Ensayo de 2025', 'https://arxiv.org/abs/2507.09089'],
  update: ['METR · Seguimiento de 2026', 'https://metr.org/blog/2026-02-24-uplift-update/'],
  gitlab: ['GitLab · Métricas DORA', 'https://docs.gitlab.com/user/analytics/dora_metrics/'],
  copilot: ['GitHub · Telemetría de Copilot', 'https://docs.github.com/en/copilot/reference/copilot-usage-metrics/copilot-usage-metrics'],
  otel: ['OpenTelemetry · Observabilidad GenAI', 'https://opentelemetry.io/blog/2026/genai-observability/'],
  linearb: ['LinearB', 'https://linearb.io/platform/engineering-metrics'],
  dx: ['DX', 'https://docs.getdx.com/dx-core-4/'],
  jellyfish: ['Jellyfish', 'https://jellyfish.co/'],
  devlake: ['Apache DevLake', 'https://devlake.apache.org/docs/DORA/'],
  fullstack: ['FullStack', 'https://www.fullstack.com/ai-maturity-assessments']
};

const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const anchor = (label, url) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`;
const cite = (...keys) => keys.map(key => anchor(...urls[key])).join('<span>·</span>');
const step = (n, html, cls = '') => `<div class="reveal ${cls}" data-show="${n}">${html}</div>`;
const block = (cls, html) => `<div class="${cls}">${html}</div>`;
const deco = (cls, html = '') => `<div class="${cls}" aria-hidden="true">${html}</div>`;
const label = text => `<span class="label">${text}</span>`;
const ticket = (text = '↗') => `<span class="ticket"><b>${text}</b><i></i><i></i></span>`;
const divs = (n, make) => Array.from({ length: n }, (_, i) => make(i)).join('');
const caption = text => `<p class="caption">${text}</p>`;
const line = (a, b) => `<span>${a}</span><span>${b}</span>`;
const ch = ['Apertura', '01 / De Lean a DORA', '02 / Qué medir', '03 / El efecto de IA', '04 / El experimento', 'Referencias', 'Cierre'];

function compose(title, heading, chapter, tag, theme, layout, steps, body, note, source = '', continuity = '') {
  return { title, heading, chapter: ch[chapter], tag, theme, layout, steps, body, note, source, continuity };
}

function belts(mode) {
  return deco('hero-art ' + mode,
    '<div class="track-art"><div class="lane lane-a"></div><div class="lane lane-b"></div><div class="lane lane-c"></div>' +
    '<div class="switch-box"></div><div class="port"></div>' +
    '<div class="carrier loop">' + ticket() + '</div></div>');
}

// Participaciones publicadas en la bio de la asesoría de IA.
const speakerTalks = [
  ['2026 / PONENCIA', 'DevOpsDays Buenos Aires', 'Construyendo un framework de Platform Engineering: de silos DevSecOps a X-as-a-Service'],
  ['2025 / PONENCIA', 'Agile Summit', 'Más allá de DevOps: InnerSource como catalizador de la agilidad'],
  ['2025 / PONENCIA', 'DevOpsDays Lima', 'Las Mentiras de las Métricas: Midiendo sin Caer en Trampas'],
  ['2026 / PONENCIA', 'DevOpsDays Medellín', 'Números Bonitos, Madurez Falsa'],
  ['2025 / PONENCIA', 'InnerSource Summit', 'Building Bridges: Scaling InnerSource'],
  ['2025 / PONENCIA', 'DevOpsDays Santiago', 'La Evolución del Open Source en la Cultura Empresarial'],
  ['2024 / PONENCIA', 'DevSecOps Fest', 'Gestionando el conocimiento con Documentation as Code'],
  ['2024 / PONENCIA', 'DevOpsDays Medellín', 'Adopción de GenAI para revolucionar el desarrollo de software'],
  ['2024 / ENTREVISTA', 'GitHub · YouTube', 'Impulsando la productividad del desarrollador con GitHub Copilot']
];

function talkCarousel() {
  const cards = speakerTalks.map(([date, event, topic], i) => {
    const position = ['active','next'][i] ?? 'off';
    return `<article class="bio-talk" data-position="${position}" aria-hidden="${i !== 0}">
      ${label(esc(date))}<strong>${esc(event)}</strong><p>${esc(topic)}</p>
    </article>`;
  }).join('');
  return `<div class="bio-talk-stack" role="group" aria-roledescription="carrusel" aria-label="Charlas y participaciones de Oscar">${cards}</div>`;
}

function profile(speaker, qr, photo) {
  return block('bio-grid',
    block('bio-info',
      block('bio-identity',
        `<figure class="bio-photo"><img src="${photo}" alt="Retrato de ${esc(speaker.name)}"></figure>` +
        block('bio-role-block',
          `<p class="bio-role"><b>${esc(speaker.headline)}</b> · ${esc(speaker.organization)}</p>` +
          `<p class="bio-tagline">${esc(speaker.roles[0])}</p>`)) +
      block('bio-columns',
        block('bio-education', label('FORMACIÓN') +
          '<div><strong>UNI</strong><p>Ingeniería de Sistemas · Primer puesto</p></div>' +
          '<div><strong>MIT Professional Education</strong><p>Programa de IA agéntica</p></div>' +
          '<div><strong>Hanyang Cyber University</strong><p>Ingeniería de IA · En curso</p></div>') +
        block('bio-talks', label('CHARLAS Y COMUNIDAD') + talkCarousel() +
          '<p class="bio-community">LABIAR-UNI · DevOps Ambassador de PeopleCert</p>')) +
      anchor('0vas.com','https://0vas.com/')) +
    block('bio-contact', '<h3>Sigamos<br>conversando.</h3>' +
      `<a class="qr" href="${esc(speaker.linkedin.url)}" target="_blank" rel="noopener"><img width="338" height="338" src="${qr}" alt="Código QR al perfil de Oscar en LinkedIn"><b>LinkedIn ↗</b><span>@oscarlobatons</span></a>`));
}

const milestone = (time, name, n) => step(n, `<b>${time}</b><span>${name}</span>`, 'milestone');
const ruler = (title, detail, n) => step(n, `<strong>${title}</strong><span>${detail}</span>`, 'ruler-item');
const facet = (code, title, detail, n) => step(n, `<b>${code}</b><strong>${title}</strong><span>${detail}</span>`, 'facet');
const stageText = (name, primary, n) => step(n, label(name) + `<strong>${primary}</strong>`, 'gate-text');

export function storyboard(speaker, qr, photo) {
  return [
    compose('DevEx en la era de la IA', line('DevEx en la', 'era de la <em>IA.</em>'), 0, 'LA LÍNEA DE ENTREGA', 'blue', 'hero cover', 0,
      caption('¿Qué pasa con el trabajo cuando programar se acelera?') + '<p class="byline">' + esc(speaker.name) + '</p>' + belts('cover-rail'),
      'Abre con dos preguntas: ¿en su equipo la IA ya escribe código? ¿Pueden confirmar que los cambios útiles llegan antes al usuario? El ticket azul representa un cambio. Lo vamos a seguir por todo el sistema.'),

    compose(speaker.name, line(esc(speaker.name.split(' ')[0]), esc(speaker.name.split(' ').slice(1).join(' ')) + '<em>.</em>'), 0, 'QUIÉN ESTÁ DETRÁS DE ESTA CONVERSACIÓN', 'night', 'profile', 0,
      profile(speaker, qr, photo),
      `Presentación breve. Soy ${speaker.name}, ${speaker.headline} en ${speaker.organization}. Mi trabajo conecta confiabilidad, plataformas y experiencia de los equipos. Las participaciones se alternan automáticamente, con M puedes pausar el carrusel. El QR lleva a LinkedIn. El caso de esta presentación es ficticio.`),

    compose('Veinte minutos de código, tres días de entrega', 'El viaje de <em>un cambio.</em>', 1, 'CASO ILUSTRATIVO', 'snow', 'trip', 2,
      block('trip-art',
        deco('trip-rail', '<div class="rail-ticks"></div><div class="rail-queue"><i></i><i></i><i></i></div><div class="rail-end">✓</div><div class="moving-ticket">' + ticket() + '</div>') +
        block('trip-labels', milestone('20 min','Escribir',0) + milestone('2 días','Esperar revisión',1) + milestone('Día 3','Llegar a producción',2))),
      'El ejemplo es un cambio pequeño de validación. La persona termina de escribir en 20 minutos y el cambio espera dos días a un revisor. Avanza para mostrar dónde se atasca y cuándo llega a producción. Los tiempos son ilustrativos.'),

    compose('Lean hace visible la espera', 'Lean hace visible <em>la espera.</em>', 1, 'MAPA DEL FLUJO DE VALOR · ESQUEMA', 'night', 'lean-flow', 2,
      block('flow-map',
        block('flow-key', '<span>Trabajo activo</span><span>Tiempo de espera</span>') +
        block('value-route', '<strong>Cambio elegido</strong>' +
          deco('value-track', '<i></i><i></i><i></i><div class="value-marker">' + ticket() + '</div>') + '<strong>Feedback en producción</strong>') +
        block('flow-notes', stageText('01 / OBSERVA','Trabajo, cola y retrabajo',0) +
          stageText('02 / REDUCE','Lotes pequeños y WIP limitado',1) +
          stageText('03 / APRENDE','Feedback temprano',2))),
      'Lean empieza por el valor para el usuario y sigue el trabajo de punta a punta. El código listo que espera es inventario en proceso, aunque en software sea invisible. Identifica espera y retrabajo, limita WIP (trabajo en curso), procura lotes pequeños que puedas validar y usa el feedback para mejorar. Los segmentos son un esquema, sin escala. Pregunta de puente: ¿qué pasa si todos los cambios tienen que esperar la siguiente reunión?',
      cite('lean','batches')),

    compose('La CAB externa y el costo de la cola', '¿Qué cuesta <em>aprobar en lote?</em>', 1, 'CAB · CHANGE ADVISORY BOARD', 'amber', 'cab-queue', 2,
      block('cab-model',
        deco('cab-deck','<div class="cab-rollers"></div><div class="cab-arm"></div><div class="cab-post"><i></i></div>' +
          '<div class="cab-change">' + ticket() + '</div>' +
          divs(3,i => `<div class="cab-wait cab-wait-${i}">${ticket()}</div>`) +
          '<div class="cab-batch"><i></i><i></i><i></i><i></i></div>') +
        block('cab-labels', milestone('Listo','El equipo entrega el cambio',0) + milestone('En cola','Espera la próxima CAB',1) +
          milestone('En lote','Varios cambios salen juntos',2))) +
      step(2, 'DORA 2019 no halló evidencia de una menor tasa de fallos con aprobación externa formal.', 'annotation'),
      'CAB significa Change Advisory Board, el comité asesor de cambios. Ilustra una CAB externa que aprueba cada cambio en reuniones periódicas. El costo de la espera favorece agrupar cambios y lanzar menos seguido. Un lote grande puede ser más difícil de diagnosticar o revertir. DORA 2019 reportó asociación negativa con el desempeño de entrega y no encontró evidencia de una menor tasa de fallos por el trámite externo formal. Eso no prueba que toda CAB sea perjudicial ni que la aprobación sea inútil.',
      cite('approvals'), 'approval'),

    compose('Aprobación proporcional al riesgo', 'Acerca el control <em>al cambio.</em>', 1, 'APROBACIÓN BASADA EN RIESGO', 'snow', 'approval-flow', 2,
      block('approval-map',
        deco('approval-rail','<div class="check-rail"></div><div class="risk-rail"></div><div class="approval-ticket">' + ticket('✓') + '</div>' +
          '<div class="check-node peer">✓</div><div class="check-node pipeline">✓</div><div class="check-node prod">↗</div><div class="check-node escalation">!</div>') +
        block('approval-labels', stageText('REVISIÓN ENTRE PARES','Aprobación registrada',0) +
          stageText('PIPELINE','Pruebas y controles automáticos',1) +
          stageText('EXCEPCIONES Y RIESGO ALTO','Escalar o coordinar con la CAB',2))),
      'Propón un camino regular con revisión por alguien distinto del autor, pruebas y controles automatizados, evidencia auditable y monitoreo. Si la política exige aprobación externa o el riesgo lo amerita, añade revisión. La CAB puede coordinar cambios entre equipos y participar en decisiones de riesgo relevantes. Evalúa la cola con lead time y tasa de fallos, de acuerdo con las obligaciones de cada organización.',
      cite('approvals','batches'), 'approval'),

    compose('La ley de Goodhart', 'Así miente <em>una métrica.</em>', 1, 'LEY DE GOODHART · PARÁFRASIS DE STRATHERN', 'amber', 'goodhart', 2,
      block('scale-visual',
        deco('scale-rail', '<div class="quota"><i></i><i></i></div><div class="split"><i></i><i></i><i></i><i></i></div><div class="stacked-reviews"><i></i><i></i><i></i><i></i></div>') +
        block('scale-labels', milestone('Señal','Contamos PR',0) + milestone('Cuota','Exigimos 10 PR',1) + milestone('Efecto','Dividimos el mismo trabajo',2))) +
      step(2, 'Cuando una medida se vuelve meta, puede perder su valor como señal.', 'annotation'),
      'Cuando una medida se vuelve objetivo puede dejar de representar lo que querías mejorar. Se trata de la formulación popularizada por Marilyn Strathern a partir de la ley de Goodhart. Un PR pequeño puede ser saludable. Fragmentar el mismo cambio solo para alcanzar la cuota puede inflar la actividad y trasladar trabajo a revisión.',
      cite('goodhart','dora')),

    compose('Métricas degenerativas', 'Cuando contar <em>se vuelve cuota.</em>', 1, 'MÉTRICAS DEGENERATIVAS · EJEMPLOS EN INGENIERÍA', 'snow', 'gauges-scene', 2,
      block('gauges', [
        ['GIT','Commits','Fragmentar el historial.',0],
        ['PR','Pull requests','Partir trabajo para sumar PRs.',1],
        ['PROD','Despliegues','Repetir deploys para sumar al conteo.',2]
      ].map(([symbol,name,check,n]) => step(n, deco('gauge', `<i></i><b>${symbol}</b>`) +
        `<h3>${name}</h3>${label('QUÉ PUEDE INCENTIVAR')}<p>${check}</p>`, 'gauge-unit')).join('')) +
      step(2, 'En Accelerate · líneas de código, velocidad y utilización como proxies de productividad.', 'annotation'),
      'El capítulo 2 de Accelerate cuestiona líneas de código, velocidad y utilización cuando se usan como proxies de desempeño. La velocidad puede ayudar a planificar dentro del mismo equipo. Maximizar utilización deja poca capacidad para trabajo imprevisto y puede aumentar la cola. Commits, PRs y despliegues son ejemplos actuales del mismo problema cuando se premia su volumen. Dividir cambios ayuda si cada parte aporta una mejora que se puede validar por separado.',
      cite('bookCh2','dora')),

    compose('Despliegues como señal o como cuota', 'El mismo conteo. <em>Dos historias.</em>', 1, 'EJEMPLO ILUSTRATIVO · DESPLIEGUES EN PRODUCCIÓN', 'night', 'deploy-signal', 1,
      block('deploy-contrast',
        block('deploy-example',
          label('CUOTA DE VOLUMEN') + '<strong>10 despliegues</strong>' +
          deco('deploy-dots', divs(10, () => '<i></i>')) + '<p>Repetimos despliegues para llegar al objetivo.</p>') +
        step(1, label('SEÑAL DEL SERVICIO') + '<strong>10 despliegues</strong>' +
          deco('deploy-dots useful', divs(10, () => '<i></i>')) + '<p>Leemos la frecuencia junto al lead time, los fallos y el retrabajo.</p>', 'deploy-example')),
      'Los diez despliegues son ilustrativos. Contar eventos puede alimentar la telemetría. Como cuota, el mismo número se puede inflar con redeploys, o mezclando entornos. Como medida DORA, la frecuencia describe la cadencia a producción de un servicio en una ventana definida. Aclara qué eventos cuentas y lee la frecuencia junto con lead time, recuperación de fallos, tasa de fallos y retrabajo. Para comprobar valor, añade una señal de producto.',
      cite('dora','goodhart')),

    compose('Cómo nacieron las métricas DORA', 'DORA cambió <em>la pregunta.</em>', 1, 'DE LA ACTIVIDAD AL DESEMPEÑO DE ENTREGA', 'blue', 'dora-origins', 2,
      block('history-track',
        facet('2014','Primer estudio','¿Cómo se relaciona el desempeño de TI con el de la organización?',0) +
        facet('2015','Cuatro métricas','Frecuencia, lead time, fallos y restauración.',1) +
        facet('2018','Accelerate','El libro reúne los hallazgos sobre capacidades y resultados.',2)) +
      step(2, '¿Con qué rapidez y estabilidad entrega el sistema?', 'annotation'),
      'La perspectiva Lean explica por qué medir el flujo completo y buscar el cuello de botella. El origen histórico fue una pregunta de investigación más amplia sobre el desempeño de TI y su relación con el desempeño organizacional. En 2014 se probaron cuatro variables y quedaron tres en el primer modelo. En 2015 se consolidaron cuatro en dos grupos, throughput y estabilidad. Los equipos de alto desempeño destacaban en ambas dimensiones. En 2018 Accelerate reunió el trabajo. El análisis de aprobaciones externas que acabamos de ver llegó después, en el informe de 2019.',
      cite('history','book')),

    compose('Tres lentes sobre un cambio', line('Tres lentes.', '<em>Un cambio.</em>'), 2, 'DORA / SPACE / DEVEX', 'blue', 'hero lenses', 0,
      caption('Entrega, productividad y experiencia.') +
      deco('lens-art', '<div class="rings loop"><i></i><i></i><i></i></div>' + ticket()),
      'DORA observa la entrega. SPACE amplía la mirada de productividad. DevEx ayuda a localizar la fricción del trabajo cotidiano. Una métrica puede mostrar una demora y la voz del equipo puede explicar por qué aparece.'),

    compose('DORA · cinco métricas', 'DORA observa <em>la entrega.</em>', 2, 'CINCO MÉTRICAS VIGENTES', 'snow', 'dora', 1,
      block('dora-board',
        block('dora-lane', deco('lane-symbol delivery','↗') +
          block('lane-info', label('CAPACIDAD DE ENTREGA') + ruler('Lead time','Commit → producción',0) +
            ruler('Frecuencia','Despliegues / periodo',0) + ruler('Recuperación','Tiempo tras un despliegue fallido',0))) +
        step(1, deco('lane-symbol unstable','↺') +
          block('lane-info', label('INESTABILIDAD') + ruler('Tasa de fallos','% que exige intervención inmediata',0) +
            ruler('Tasa de retrabajo','% imprevisto por incidentes en producción',0)), 'dora-lane')),
      'La guía actual agrupa tres medidas en throughput y dos en inestabilidad. Recuperación se limita a un despliegue fallido que exige intervención inmediata. Retrabajo de despliegue se refiere a despliegues no planeados por incidentes, no a correcciones antes del merge. Lee tendencias por servicio con definiciones estables.',
      cite('dora','history')),

    compose('El reloj de DORA', '¿Dónde empieza <em>el reloj?</em>', 2, 'LEAD TIME DEL CAMBIO', 'night', 'clock-scene', 2,
      block('clock-layout',
        deco('clock-face','<i></i><i></i><div class="clock-hand"></div><b></b>') +
        block('clock-routes',
          block('clock-route outer', label('PUNTA A PUNTA') + '<div><span>Tarea elegida</span><span>Producción</span></div>') +
          step(1, label('LEAD TIME DORA') + '<div><span>Commit</span><span>Producción</span></div>', 'clock-route inner') +
          step(2, 'El ahorro antes del commit queda fuera de ese reloj.', 'annotation'))),
      'Si la IA ayuda en la exploración antes del commit, el lead time de DORA puede no moverse. El tiempo desde que se toma la tarea puede responder por ese tramo. Acordar eventos, entorno y ventana evita comparar relojes diferentes.',
      cite('dora')),

    compose('SPACE · cinco dimensiones', 'SPACE amplía <em>la mirada.</em>', 2, 'PRODUCTIVIDAD DE DESARROLLO', 'snow', 'space', 2,
      block('space-fan',
        facet('S','Satisfacción','Bienestar del equipo',0) + facet('P','Desempeño','Calidad del resultado',0) +
        facet('A','Actividad','PR y revisiones',1) + facet('C','Colaboración','Acceso a ayuda',1) +
        facet('E','Eficiencia','Flujo e interrupciones',2)),
      'Las cinco dimensiones son satisfacción y bienestar, desempeño, actividad, comunicación y colaboración, y eficiencia y flujo. Un revisor que desbloquea a varias personas puede escribir poco código y aportar mucho. Lee varias dimensiones a la vez y elige el nivel de análisis con intención.',
      cite('space')),

    compose('DevEx · tres dimensiones', 'DevEx localiza <em>la fricción.</em>', 2, 'EXPERIENCIA COTIDIANA', 'night', 'friction', 2,
      block('friction-board',
        step(0, deco('friction-shape feedback','<i></i><i></i><i></i>') + '<h3>Feedback</h3><p>¿Cuánto espero?</p>', 'friction-cell') +
        step(1, deco('friction-shape load','<i></i><i></i><i></i>') + '<h3>Carga cognitiva</h3><p>¿Cuánto debo recordar?</p>', 'friction-cell') +
        step(2, deco('friction-shape focus','<i></i><i></i><i></i>') + '<h3>Estado de flujo</h3><p>¿Puedo concentrarme?</p>', 'friction-cell')),
      'Cruza datos del sistema con percepción. Para feedback, mide tiempo hasta un CI útil y pregunta si la respuesta fue clara. Para carga, cruza errores de autoservicio con claridad de documentación. Para flujo, contrasta interrupciones reportadas con el tiempo disponible para concentrarse.',
      cite('devex')),

    compose('La demora estaba en revisión', 'La demora estaba <em>en revisión.</em>', 2, 'APLIQUEMOS LAS TRES LENTES', 'snow', 'review', 2,
      block('review-cut',
        deco('review-map','<div class="review-track"></div><div class="review-origin">' + ticket() + '</div>' +
          '<div class="review-gate"><i></i><i></i><i></i></div><div class="review-end">✓</div><div class="review-beam"></div>') +
        block('review-labels', stageText('DORA','Lead time alto',0) + stageText('SPACE','Pocos revisores',1) +
          stageText('DEVEX','Falta contexto',2))),
      'Detectamos lead time alto. Los datos de revisión y la conversación muestran que pocas personas pueden revisar y el contexto llega incompleto. Hipótesis: cambios independientes más pequeños y un checklist de contexto reducen espera sin subir defectos.'),

    compose('La IA puede trasladar el cuello de botella', line('El cuello de botella', '<em>se puede mover.</em>'), 3, 'DE GENERACIÓN A VERIFICACIÓN', 'amber', 'hero queuing', 2,
      caption('Más cambios llegan a la misma capacidad de revisión.') +
      deco('queue-art','<div class="queue-deck"></div><div class="queue-wall"></div><div class="queue-lights"><i></i><i></i><i></i></div>' +
        divs(4, i => `<div class="parcel parcel-${i}">${ticket()}</div>`)),
      'Primer paso: la IA abarata proponer cambios y aumenta la llegada de trabajo. Segundo paso: si revisar y probar conserva la misma capacidad, la cola crece. La IA puede ayudar también a despejar la cola. Queremos observar cuál escenario se da en nuestro sistema.', '', 'queue'),

    compose('La espera cambió de lugar', 'Una hora menos. <em>Dos horas más.</em>', 3, 'SIMULACIÓN · TIEMPO DEL MISMO TIPO DE CAMBIO', 'snow', 'comparison', 2,
      block('comparison-chart', '<div class="chart-key"><span>Implementación</span><span>Revisión y validación</span></div>' +
        block('chart-row chart-base', '<strong>Base</strong><div class="bar"><span style="--w:20%">2 h</span><span style="--w:60%">6 h</span></div><b>8 h</b>') +
        step(1, '<strong>Con IA</strong><div class="bar"><span style="--w:10%">1 h</span><span style="--w:90%">9 h</span></div><b>10 h</b>', 'chart-row chart-ai') +
        step(2, '−1 h al escribir · +3 h al verificar', 'chart-delta')),
      'Ambas barras usan una escala común de diez horas. La implementación baja dos a una hora, mientras revisión y validación aumentan de seis a nueve. Este ejemplo es ficticio y enseña por qué medir el recorrido completo.', '', 'queue'),

    compose('Qué dice la evidencia sobre IA', 'El efecto <em>depende del sistema.</em>', 3, 'ENCUESTA ORGANIZACIONAL Y ENSAYO ALEATORIZADO', 'night', 'evidence', 1,
      block('evidence-grid', block('amplify', deco('signal-art','<div class="signal-in"></div><div class="amp-body"><b>×</b></div><div class="signal-out"><i></i><i></i><i></i></div>') +
        label('DORA 2025') + '<h3>La IA amplifica.</h3><p>Las capacidades del equipo importan.</p>') +
        step(1, '<div class="mega-stat">+19<small>%</small></div>' +
          label('METR 2025 · TIEMPO POR TAREA') + '<p>16 desarrolladores · 246 tareas.</p>', 'study')),
      'DORA interpreta sus hallazgos organizacionales como un efecto de amplificación. METR asignó aleatoriamente acceso a IA en 246 tareas con 16 desarrolladores experimentados en repositorios que ya conocían. En ese contexto, con herramientas de principios de 2025, tardaron 19% más. En su seguimiento de 2026 METR señaló sesgos de selección y cambió el diseño. El 19% no estima un efecto universal.',
      cite('ai','metr','update')),

    compose('Qué medidas usar en la era de IA', '¿Qué señales <em>siguen sirviendo?</em>', 3, 'REVISIÓN DEL SISTEMA DE MEDICIÓN', 'snow', 'sorting', 2,
      block('sorting-board',
        facet('01','Conservar','DORA por servicio',0) + facet('02','Ampliar','Tiempo total y por tramo',1) +
        facet('03','Diagnosticar','LOC, prompts, aceptación',2)),
      'DORA sigue respondiendo por entrega. SPACE y DevEx siguen capturando productividad y fricciones humanas. Actualiza las preguntas de confianza, contexto y feedback. Usa indicadores de volumen y aceptación para entender adopción y actividad bajo la definición concreta del producto.'),

    compose('Nuevas métricas para trabajo con IA', 'Mide el trabajo de <em>verificar.</em>', 3, 'MÉTRICAS CANDIDATAS', 'blue', 'validation', 2,
      block('verify-board',
        deco('verify-machine', '<div class="verify-window">' + ticket('✓') + '<i></i></div><div class="verify-console"><b></b><b></b><b></b></div>') +
        block('verify-readings',
          ruler('Tiempo hasta validar','Inicio de tarea → cambio comprobado',0) +
          ruler('Carga de verificación','Minutos humanos activos / cambio validado',1) +
          ruler('Costo de validación','IA + revisión / cambios validados',2))),
      'Define la evidencia que marca el fin. Reporta p50 y p90 con una ventana temporal. Incluye el gasto de intentos fallidos y el tiempo humano en el costo de cohorte. Lee las tres métricas junto a defectos posteriores y experiencia reportada. Estas son propuestas, no la definición canónica de DORA.',
      cite('roi')),

    compose('Un agente puede correr sin avanzar', 'Del intento <em>al resultado.</em>', 3, 'CÓMO EVALUAR UN AGENTE', 'snow', 'agent', 2,
      block('agent-flow',
        deco('agent-loop', '<div class="agent-runner">' + ticket() + '</div><div class="agent-exit">✓</div>') +
        block('agent-copy',
          stageText('ENTRADA','Tareas elegibles asignadas',0) +
          stageText('DURANTE','Intentos e intervención',1) +
          stageText('RESULTADO','Tareas validadas',2))) +
      step(2, 'Éxito = tareas elegibles validadas ÷ tareas elegibles asignadas.', 'annotation'),
      'Una tarea con cinco intentos cuenta una vez en el denominador. Reporta por tipo y dificultad de tarea, ventana fija y evidencia de validación. Anota intervención manual, supervisión y controles automáticos. Tokens y latencia ayudan a explicar costo técnico.'),

    compose('De dashboards a decisiones', line('De dashboards', 'a <em>decisiones.</em>'), 4, 'INSTRUMENTACIÓN Y PILOTO', 'night', 'hero switches', 0,
      caption('Empieza por una decisión que el equipo pueda tomar.') + belts('decision-rail'),
      'Pide a la audiencia que piense en una fricción real. ¿Qué cambiaría el equipo si la señal sube, baja o queda igual? Ese es el punto de partida para instrumentar.'),

    compose('Herramientas para medir DevEx', 'Conecta <em>las fuentes.</em>', 4, 'INSTRUMENTACIÓN DEL RECORRIDO', 'snow', 'tools', 2,
      block('tools-map',
        block('tools-inputs',
          ruler('GitHub / GitLab','PR, CI y despliegues',0) +
          ruler('PagerDuty / encuestas','Incidentes y fricción reportada',1) +
          ruler('Copilot / OpenTelemetry','Adopción, tokens y latencia',2)) +
        deco('tools-wire','<i></i><i></i><i></i>') +
        block('tools-output', deco('tools-join',ticket('✓')) +
          label('UNE POR') + '<strong>Cambio · servicio · despliegue</strong>')),
      'Comprueba la cobertura de cada integración. GitLab y DORA pueden usar definiciones distintas para restauración. OpenTelemetry recoge tokens y latencias donde se instrumenta. Vincula cambios y despliegues con incidentes y combina eso con un pulso de experiencia. Minimiza datos sensibles y evita rankings individuales.',
      cite('gitlab','copilot','otel')),

    compose('Plataformas de inteligencia de ingeniería', 'De eventos <em>a señales.</em>', 4, 'SEIP · SOFTWARE ENGINEERING INTELLIGENCE PLATFORMS', 'snow', 'sei-tools', 2,
      block('sei-stations', [
        ['linearb','FLUJO DE ENTREGA','Ciclo del PR por etapas y métricas DORA.','↗',0],
        ['dx','EXPERIENCIA Y DATOS','Encuestas DevEx, telemetría y DX Core 4.','⟐',0],
        ['jellyfish','VISIBILIDAD DE INGENIERÍA','Flujo, DORA y uso de IA.','≋',1]
      ].map(([key,group,detail,icon,n]) =>
        step(n, deco('sei-glyph',icon) + label(group) + '<h3>' + anchor(...urls[key]) + '</h3><p>' + detail + '</p>', 'sei-station')).join('')) +
      step(2, block('sei-alternative', label('CÓDIGO ABIERTO') + '<strong>' + anchor(...urls.devlake) + '</strong><span>Conectores y tableros DORA.</span>') +
        block('sei-alternative', label('SERVICIO DE EVALUACIÓN') + '<strong>' + anchor(...urls.fullstack) + '</strong><span>Diagnóstico de madurez de IA.</span>'), 'sei-alternatives'),
      'Estas plataformas reúnen señales del ciclo de desarrollo. LinearB observa tiempos de codificación, recogida, revisión y despliegue. DX combina experiencia reportada con datos del sistema; Core 4 es el marco de DX. Jellyfish ofrece visibilidad de flujo, DORA y uso de IA. Apache DevLake es una vía de código abierto. El FullStack que pude identificar ofrece evaluaciones de madurez y de señales de entrega como servicio. Antes de adoptar una herramienta, comprueba definición de deploy, unión de incidentes, cobertura, granularidad y si el equipo puede validar el dato. Evita rankings individuales y audita qué métricas de DORA implementa realmente cada producto.'),

    compose('Piloto de cuatro semanas', 'Cuatro semanas. <em>Una hipótesis.</em>', 4, 'UN SERVICIO · TAREAS COMPARABLES', 'blue', 'pilot', 2,
      block('calendar', [
        ['01','Línea base',0],['02','Prueba IA',1],['03','Sigue midiendo',1],['04','Decide',2]
      ].map(([n,name,show]) => step(show, `<b>${n}</b><span>${name}</span>`, 'week')).join('')) +
      step(2, 'Contrapesos: defectos y carga de revisión.', 'annotation'),
      'Antes de empezar acuerda qué es validación, cuáles son los tipos de tarea y el periodo de seguimiento. Si es viable asigna uso de IA al azar entre tareas comparables. Si haces un antes y después, registra cambios de mezcla y contexto. Si la muestra es pequeña, trata el resultado como indicio.'),

    compose('El momento de decidir', '¿Ampliarías <em>el piloto?</em>', 4, 'EJEMPLO FICTICIO · 20 CAMBIOS POR GRUPO', 'snow', 'verdict', 2,
      block('scoreboard',
        facet('8 → 6 h','Tiempo hasta validar','Mediana',0) +
        facet('35 → 50 min','Revisión activa','Mediana',1) +
        facet('1 → 2','Defectos tras entrega','Por cada grupo de 20',2)) +
      step(2, 'Investiga la carga desplazada antes de ampliar.', 'annotation'),
      'Pide al público decidir antes de mostrar la recomendación. Los tiempos son medianas independientes y no se suman. Dos frente a un defecto no demuestran por sí solos deterioro. La señal invita a revisar casos, entender el costo desplazado y extender el piloto.'),

    compose('Fuentes de investigación', 'Fuentes para <em>profundizar.</em>', 5, 'LECTURAS Y DEFINICIONES', 'snow', 'references-scene', 0,
      block('references',
        block('reference-col',label('LEAN Y ENTREGA') + cite('bookCh2','lean','batches','approvals','history','dora')) +
        block('reference-col',label('MÉTRICAS Y EXPERIENCIA') + cite('goodhart','space','devex','gitlab')) +
        block('reference-col',label('DESARROLLO CON IA') + cite('ai','roi','metr','update','copilot','otel'))),
      'Lámina de referencia. Deja los enlaces disponibles en la versión compartida.'),

    compose('Qué fricción vas a quitar', line('¿Qué fricción', 'vas a <em>quitar?</em>'), 6, 'PREGUNTAS', 'amber', 'hero finish', 0,
      caption('Un cambio real, una señal y un contrapeso.') + belts('finish-rail'),
      'Regresa a la tarea inicial. Escribir tomó 20 minutos y hubo dos días de revisión. Pide que cada equipo nombre un punto que puede cambiar, una medida para observarlo y un contrapeso que dificulte que el indicador se convierta en cuota.')
  ];
}
