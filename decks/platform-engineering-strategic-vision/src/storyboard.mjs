import { adoptionLoop, agentGate, capacityModel, icon, illustratedTiles, kitchen, systemsBoard } from './illustrations.mjs';
import {
  cohortScope, decisionCompass, entryPoints, fundingReservoir, incidentHandover,
  hypeLandscape, journeyTimer, maturityRadar, maturitySteps, pillarBridge,
  portfolioDecisions, reuseAssembly, riskSwitch
} from './strategy-art.mjs';

const library = {
  principles: ['Five Principles to Achieve Platform Engineering Success', 'G00839599', 2025, 'https://www.gartner.com/en/documents/7155330'],
  trends: ['Strategic Trends in Platform Engineering, 2025', 'G00833890', 2025, 'https://www.gartner.com/en/documents/6809534'],
  start: ['Start and Scale Platform Engineering for Measurable Impact', 'G00840435', 2026, 'https://www.gartner.com/en/documents/7319230'],
  maturity: ['Gartner Platform Engineering Maturity Model', 'G00840745', 2026, 'https://www.gartner.com/en/documents/7348030'],
  roles: ['A CIO’s Guide to Platform Teams and Roles', 'G00832142', 2025, 'https://www.gartner.com/en/documents/7184330'],
  infra: ['How to Develop Infrastructure Platform Engineering Teams', 'G00798400', 2025, 'https://www.gartner.com/en/documents/5352063'],
  run: ['Enable “You Build It, You Run It” With Platform Engineering', 'G00819769', 2025, 'https://www.gartner.com/en/documents/7075598'],
  cases: ['How Leading CIOs Implement Platform Engineering', 'G00813892', '2024 · caso histórico', 'https://www.gartner.com/en/documents/5514795'],
  fund: ['How to Fund Platforms and Platform Engineering', 'G00817889', 2025, 'https://www.gartner.com/en/documents/7218230'],
  cio: ['Tool: CIO Guide to Unlocking Platform Engineering’s Value', 'G00841079', 2025, 'https://www.gartner.com/en/documents/6988166'],
  agents: ['Agentic AI Readiness Requires Platform Engineering', 'G00854107', 2026, 'https://www.gartner.com/en/documents/7963773'],
  hype: ['Hype Cycle for Platform Engineering, 2026', 'G00846917', 2026, 'https://www.gartner.com/en/documents/7856981'],
  dora: ['DORA’s software delivery performance metrics', 'DORA', 'Guía', 'https://dora.dev/guides/dora-metrics/']
};

const esc = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'})[c]);
const anchor = (url, label) => `<a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`;
const box = (cls, html) => `<div class="${cls}">${html}</div>`;
const kicker = text => `<span class="label">${text}</span>`;
const reveal = (n, html, cls = '') => `<div class="reveal ${cls}" data-show="${n}">${html}</div>`;
const heading = (a, b) => `<span>${a}</span><span>${b}</span>`;
const paragraph = text => `<p>${text}</p>`;
const titleDetail = (name, detail) => `<strong>${name}</strong><p>${detail}</p>`;
const callout = (n, text) => reveal(n, paragraph(text), 'callout');
const source = (...entries) => entries;
const diagrams = {
  cover: 'M32 556 H144 Q179 556 179 521 V408 Q179 372 215 372 H320 Q366 372 366 326 V254 Q366 215 405 215 H500 Q534 215 534 181 V102 Q534 62 574 62 H684',
  branch: 'M56 112 H131 Q164 112 164 145 V228 Q164 260 196 260 H304 Q344 260 344 220 V130 Q344 96 378 96 H576',
  contours: [
    'M52 602 Q4 541 72 475 T307 430 Q430 439 453 335 T665 190 Q740 169 748 115',
    'M39 623 Q-20 541 59 456 T315 410 Q414 417 432 329 T654 171 Q721 144 724 90',
    'M26 643 Q-36 535 46 437 T312 389 Q397 398 413 316 T638 151 Q700 123 703 67',
    'M14 664 Q-45 526 34 419 T308 367 Q378 378 394 307 T611 132 Q677 102 679 43',
    'M3 683 Q-59 517 21 400 T300 346 Q361 354 375 295 T585 114 Q657 78 657 19',
    'M155 637 Q115 595 186 558 T394 486 Q510 461 543 380 T704 258',
    'M173 657 Q128 610 201 574 T403 508 Q529 478 562 394 T721 278',
    'M195 674 Q149 629 221 592 T414 529 Q545 496 580 408 T729 302'
  ]
};

function atlas() {
  const d = diagrams.cover;
  return `<figure class="atlas" aria-hidden="true">
    <svg viewBox="0 0 715 670" focusable="false">
      <g class="contours">${diagrams.contours.map(contour => `<path d="${contour}"/>`).join('')}</g>
      <path class="survey" d="${diagrams.branch}"/>
      <path class="survey" d="M550 545 H480 Q439 545 439 504 V462 Q439 426 401 426 H366 V339 M236 612 V531 Q236 497 270 497 H386"/>
      <path class="route-base" d="${d}"/>
      <path class="route-ink" pathLength="1" d="${d}"/>
      <g class="atlas-nodes"><circle cx="32" cy="556" r="11"/><circle cx="366" cy="294" r="11"/><circle cx="684" cy="62" r="13"/></g>
      <g class="atlas-cross"><path d="M650 104h34m-17-17v34 M109 492h25m-12-12v24 M500 569h30m-15-15v30 M95 54h25m-12-12v24"/></g>
    </svg>
    <span class="atlas-start">INTENCIÓN</span><span class="atlas-end">PRODUCCIÓN</span>
  </figure>`;
}

const talks = [
  ['2026 / Ponencia', 'DevOpsDays Buenos Aires', 'Construyendo un framework de Platform Engineering: de silos DevSecOps a X-as-a-Service'],
  ['2025 / Ponencia', 'Agile Summit', 'Más allá de DevOps: InnerSource como catalizador de la agilidad'],
  ['2025 / Ponencia', 'DevOpsDays Lima', 'Las Mentiras de las Métricas: Midiendo sin Caer en Trampas'],
  ['2026 / Ponencia', 'DevOpsDays Medellín', 'Números Bonitos, Madurez Falsa'],
  ['2025 / Ponencia', 'InnerSource Summit', 'Building Bridges: Scaling InnerSource'],
  ['2025 / Ponencia', 'DevOpsDays Santiago', 'La Evolución del Open Source en la Cultura Empresarial'],
  ['2024 / Ponencia', 'DevSecOps Fest', 'Gestionando el conocimiento con Documentation as Code'],
  ['2024 / Ponencia', 'DevOpsDays Medellín', 'Adopción de GenAI para revolucionar el desarrollo de software'],
  ['2024 / Entrevista', 'GitHub · YouTube', 'Impulsando la productividad del desarrollador con GitHub Copilot']
];

function profile(speaker, qr, photo) {
  const cards = talks.map(([date, name, detail], i) => `<article class="bio-talk" data-position="${['active', 'next'][i] ?? 'off'}" aria-hidden="${i !== 0}">${kicker(date)}${titleDetail(name, detail)}</article>`).join('');
  const info = box('bio-info',
    box('bio-identity', `<figure class="bio-photo"><img src="${photo}" alt="Retrato de ${esc(speaker.name)}"></figure>` +
      box('bio-role-block', `<p class="bio-role"><b>${esc(speaker.headline)}</b> · ${esc(speaker.organization)}</p><p class="bio-tagline">${esc(speaker.roles[0])}</p>`)) +
    box('bio-columns',
      box('bio-education', kicker('Formación') +
        box('', titleDetail('UNI', 'Ingeniería de Sistemas · Primer puesto')) +
        box('', titleDetail('MIT Professional Education', 'Programa de IA agéntica')) +
        box('', titleDetail('Hanyang Cyber University', 'Ingeniería de IA · En curso'))) +
      box('bio-talks', kicker('Charlas y comunidad') +
        `<div class="bio-talk-stack" role="group" aria-roledescription="carrusel" aria-label="Charlas y participaciones">${cards}</div>`)) +
    anchor('https://0vas.com/', '0vas.com'));
  const contact = box('bio-contact', '<h3>Sigamos<br>conversando.</h3>' +
    `<a class="qr" href="${esc(speaker.linkedin.url)}" target="_blank" rel="noopener"><img width="326" height="326" src="${qr}" alt="Código QR al perfil de Oscar en LinkedIn"><b>LinkedIn ↗</b><span>@oscarlobatons</span></a>`);
  return box('bio-grid', info + contact);
}

const phases = ['Descubrir', 'Crear', 'Validar', 'Desplegar', 'Operar'];
const friction = ['¿Dónde empiezo?', 'Pedir repo y entorno', 'Perseguir aprobaciones', 'Descifrar el pipeline', 'Buscar dueño y runbook'];
const paved = ['Elegir servicio compatible', 'Solicitar con dueño y perfil', 'Verificar política y artefacto', 'Promover con trazabilidad', 'Recibir alertas y runbook'];
const routeShapes = [
  'M98 220 H190 L275 146 H363',
  'M363 146 H485 L544 235 H628',
  'M628 235 H748 L810 120 H893',
  'M893 120 H1020 L1085 202 H1158'
];

function journey(isPaved) {
  const points = [[98,220],[363,146],[628,235],[893,120],[1158,202]];
  const progress = [0, 1, 1, 2, 2];
  return box('journey-map ' + (isPaved ? 'supported' : 'observed'),
    `<svg class="journey-svg" aria-hidden="true" viewBox="0 0 1256 310" preserveAspectRatio="none">
      ${routeShapes.map((d, i) => `<path class="map-segment segment-${i}" pathLength="1" d="${d}"/>`).join('')}
      ${points.map(([x,y],i) => `<g class="waypoint point-${i}"><circle cx="${x}" cy="${y}" r="14"/><path d="M${x} ${y+17}v${274-y}"/></g>`).join('')}
    </svg>` +
    box('journey-labels', phases.map((name, i) => reveal(progress[i], kicker('0' + (i + 1)) + titleDetail(name, (isPaved ? paved : friction)[i]), 'waypoint-caption')).join('')));
}

function architectureLayers() {
  const planes = [
    '<path class="plane-ping" d="M109 121l201-72 200 72-200 72z"/><path class="plane-detail" d="M172 120l55-21 71 26 63-23 63 23"/><circle cx="172" cy="120" r="6"/><circle cx="424" cy="125" r="6"/>',
    '<path class="plane-ping" d="M109 245l201-72 200 72-200 72z"/><path class="plane-detail" d="M174 245l52-18 71 25 66-23 62 23"/><circle cx="174" cy="245" r="6"/><circle cx="425" cy="252" r="6"/>',
    '<path class="plane-ping" d="M109 369l201-72 200 72-200 72z"/><path class="plane-detail" d="M218 370l33-12 32 12-32 12z M275 350l33-12 32 12-32 12z M330 370l33-12 32 12-32 12z M274 390l33-12 32 12-32 12z"/>'
  ];
  const descriptions = [
    ['01 / Experiencia', 'Journey', 'Del objetivo al resultado.'],
    ['02 / Recorrido soportado', 'Golden path', 'Una secuencia con controles por defecto.'],
    ['03 / Bloques reutilizables', 'Capacidades', 'Contratos que sirven a varias rutas.']
  ];
  return box('layer-map',
    `<svg class="layer-art" aria-hidden="true" viewBox="0 0 575 480"><path class="plane-axis" d="M109 121v248m201-176v248m200-320v248"/>${planes.map((plane,i) => `<g class="layer-plane plane-${i}">${plane}</g>`).join('')}</svg>` +
    box('layer-text', descriptions.map(([label, name, detail], i) =>
      reveal(i, kicker(label) + titleDetail(name, detail), 'layer-description')).join('')));
}

function milestones(items) {
  return box('milestones', items.map(([n, label, name, detail, glyph]) =>
    reveal(n, kicker(label) + (glyph ? icon(glyph) : '') + '<i aria-hidden="true"></i>' + titleDetail(name, detail), 'milestone')).join(''));
}

function chapterQuote(title, detail, consequence) {
  return box('chapter-decision', box('editorial-quote', `<h3>${title}</h3><p>${detail}</p>`) +
    box('decision-note', kicker('Decisión estratégica') + paragraph(consequence)));
}

function slideRanges(numbers) {
  const spans = [];
  for (const number of numbers) {
    const last = spans.at(-1);
    if (last && number === last[1] + 1) last[1] = number;
    else spans.push([number,number]);
  }
  return spans.map(([first,last])=>first===last?String(first):first+'–'+last).join(', ');
}

function references(keys, slides) {
  const usage = key => slides.flatMap((slide,i) => slide.citations
    .filter(([ref])=>ref===key).map(([,pages])=>({ slide: i+1, pages })));
  const body = box('references', keys.map(key => {
    const [title, id, year, url] = library[key];
    const numbers = usage(key).map(({slide})=>slide);
    return `<article>${kicker(id + ' / ' + year)}<p>${anchor(url,title)}</p><small>${numbers.length===1?'Lámina':'Láminas'} ${slideRanges(numbers)}</small></article>`;
  }).join(''));
  const note = keys.map(key => {
    const [,id] = library[key];
    return id + ' · ' + usage(key).map(({slide,pages})=>`lámina ${slide}${pages?', pp. '+pages:''}`).join(', ');
  }).join('. ');
  return { body, note };
}

const chapters = ['Apertura', '01 / Del journey al golden path', '02 / Capacidades', '03 / Modelo de operación', '04 / Evidencia e inversión', '05 / IA y horizonte', '06 / Decisión', 'Fuentes'];

function scene(title, heading, chapter, tag, theme, layout, steps, body, note, citations = [], continuity = '') {
  return { title, heading, chapter: chapters[chapter], tag, theme, layout, steps, body, note, citations, continuity };
}

function strategyScenes() {
  return [
    scene('Dueños de producto y plataforma', '¿Quién responde <em>cuando falla?</em>', 3, 'Modelo de operación / límites de responsabilidad', 'dark', 'handover', 1,
      incidentHandover(),
      'You build it, you run it puede alinear incentivos, si el equipo dispone de tiempo, habilidades, herramientas y capacidad de respuesta. En el piloto, la operación puede ser acompañada. Un fallo en la app escala al dueño del servicio; si falla la provisión o una capacidad compartida, al dueño de plataforma. Prueba el traspaso durante un ejercicio.', source(['run','2–7'], ['roles','3–9'])),

    scene('Tres pilares de plataforma', 'El autoservicio necesita <em>tres pilares.</em>', 3, 'Diseño sociotécnico', 'light', 'pillars', 2,
      pillarBridge(),
      'El pilar de procesos estabiliza un trabajo recurrente antes de automatizarlo, con pasos, políticas y salidas que se puedan verificar. En personas, producto descubre necesidades, ingeniería codifica reglas y los equipos desarrollan la capacidad de operar. En tecnología, las APIs y servicios compartidos vuelven viable el autoservicio. Los tres pilares son la síntesis propuesta en el material del expositor.', source(['principles','4–8'], ['roles','3–9'], ['infra','3–8'])),

    scene('Derechos de decisión', '¿Quién decide <em>qué?</em>', 3, 'Modelo operativo', 'light', 'ownership', 3,
      decisionCompass(),
      'Son responsabilidades, no cuatro áreas nuevas. Producto de plataforma investiga y prioriza. Ingeniería de plataforma construye y opera. Habilitación acompaña adopción y deja que el equipo asuma lo que pueda operar. El dueño del servicio preserva sus decisiones de dominio. Riesgo y arquitectura definen controles con ingeniería; finanzas y el sponsor acuerdan presupuesto y criterios de escalamiento. ABN AMRO es un caso histórico de equipos con dominios de plataforma definidos.', source(['roles','3–9'], ['infra','4–8'], ['cases','4–6'])),

    scene('Adopción', 'La adopción se gana <em>en el uso.</em>', 3, 'Plataforma como producto / ciclo de aprendizaje', 'light', 'adoption', 3,
      adoptionLoop(),
      'Convoca a equipos representativos. Elige uno dispuesto a pilotear y registra también quién intentó y abandonó. Acompaña con documentación, oficinas abiertas y un canal de soporte. Al crecer, prioriza la cobertura sobre los journeys frecuentes y ofrece migración con fechas para cambios incompatibles.', source(['principles','4–8'], ['start','3–8'], ['trends','2–4'])),

    scene('Evidencia de valor', 'Mide el resultado <em>del journey.</em>', 4, 'Medición / plantilla para la conversación ejecutiva', 'light', 'score', 2,
      journeyTimer(),
      'Mide mediana y p90 del tiempo por segmento comparable. Registra abandonos y motivos para no premiar solo las ejecuciones exitosas. Para adopción usa el mismo universo, segmento y ventana en numerador y denominador. Monitorea tasa de cambios fallidos o retrabajo en la cohorte y verifica con entrevistas y carga percibida. Ajusta por tipo de servicio y contexto. Con un piloto pequeño presenta el tamaño de muestra y evita atribuir causalidad sin evidencia.', source(['start','2–6'], ['maturity','6, 8, 11–12'])),

    scene('Indicadores para contrastar el piloto', 'Compara <em>cohortes equivalentes.</em>', 4, 'Línea base → Piloto', 'light', 'measurement', 2,
      cohortScope(),
      'La referencia del expositor propone lead time E2E, onboarding, cobertura SLI/SLO, recuperación, tasa de cambios fallidos, reúso y automatización. Distingue lead time de cambios (commit a producción, según DORA) del tiempo E2E del journey. Onboarding es tiempo al primer resultado autónomo; cobertura SLO es servicios elegibles con SLO y SLI monitorizado; reúso y automatización requieren denominadores acordados. DORA también mide frecuencia de despliegue, recuperación de despliegues fallidos y retrabajo. El estudio de 2024 reportó asociaciones en direcciones distintas para productividad, throughput y estabilidad. Compara tu línea base con el piloto bajo condiciones comparables. Los rangos de la captura no son metas ni benchmarks verificados.',
      source(['start','2–6'], ['dora'])),

    scene('Cinco niveles de madurez', 'Cinco niveles. <em>Distintas metas.</em>', 4, 'Diagnóstico / madurez por capacidad', 'light', 'maturity-levels', 3,
      maturitySteps(),
      'El modelo de Gartner va de ad hoc a continuo. La lámina resume las señales que permiten reconocer la progresión. El nivel inicial puede ser una plataforma mínima viable, o TVP, que resuelve una fricción de punta a punta. En el fundacional hay dueño, autoservicio y rutas soportadas. En el avanzado, el uso y la demanda informan las decisiones. En el continuo, se ajusta con datos de experiencia y valor de negocio. Define un objetivo distinto para cada capacidad y justifica con evidencia la inversión necesaria.', source(['maturity','3–7, 11–12']), 'diagnostico'),

    scene('Radar de madurez del primer servicio', 'Invierte en <em>la brecha que frena el journey.</em>', 4, 'Diagnóstico / ejemplo de línea base y meta', 'light', 'maturity', 2,
      maturityRadar(),
      'Ejemplo ficticio. Puntúa la línea base y la meta de las nueve filas que enumera la Tabla 1 de Gartner, aunque el resumen indica ocho. Usa evidencia de dueño, uso, autonomía, habilidades, controles y señales de resultado. En el caso propuesto, las rutas pasan de 1 a 3 con un golden path gobernado y la experiencia de 2 a 3 con autoservicio. Adopción pasa de 1 a 2 al pilotear con equipos elegibles. Mantén IA en 1 durante esta inversión y reevalúa tras el día 90. Los números son un ejemplo y pertenecen a la escala ordinal del modelo.', source(['maturity','4–7, 11–12']), 'diagnostico'),

    scene('Financiar el ciclo de vida', 'La ruta tiene <em>un costo de operación.</em>', 4, 'Inversión / opciones de financiación', 'dark', 'funding', 2,
      fundingReservoir(),
      'Gartner describe financiación por proyecto, por bloques a producto y por consumo. Para esta propuesta se plantea usar la inversión por etapa para probar valor, presupuesto de producto para una base compartida después de demostrarlo y showback para hacer visible el costo variable. Acordar con finanzas si se necesita algún cargo contable. Comparar costo total con fricción reducida, adopción y riesgo. Documentar qué se puede retirar y su impacto.', source(['fund','3–8'], ['cio','1–3'])),

    scene('Capacidad recuperable', '¿Cuánta capacidad <em>podemos recuperar?</em>', 4, 'Escenario ilustrativo / supuestos del ejemplo', 'dark', 'capacity', 2,
      capacityModel(),
      'Supuestos tomados de la referencia del expositor: un FTE dedicado por squad a USD 100.000 al año; 80% del tiempo candidato a automatizar y 20% de coordinación, reuniones y actividades puntuales. El máximo teórico bruto es USD 80.000 anuales por squad elegible, bajo captura total y sin costos. Para estimar capacidad equivalente: costo base × fracción candidata × fracción de capacidad efectivamente recuperada × adopción. Solo si disminuye gasto real hay un ahorro contable. Considera coste de plataforma, soporte, migración y demanda. No extrapoles la proporción 80/20 sin muestrear trabajo real ni presupuestes reducciones de plantilla con esta hipótesis.',
      source(['fund','3–8'])),

    scene('Capacidades para agentes', 'Humanos y agentes. <em>Controles comunes.</em>', 5, 'IA agéntica / superficie de ejecución', 'dark', 'agents', 2,
      agentGate(),
      'Antes de delegar acciones a agentes, expón una interfaz declarada, contexto de servicio y precondiciones. La plataforma controla identidad, permisos, cuota y registro. Diseña acciones idempotentes, fallas comprensibles y devolución de control a humanos. Primer experimento propuesto: consultar el estado o preparar un cambio que un humano aprueba. Amplía alcance sólo con evidencia y riesgo acotado.', source(['agents','3–8'], ['hype','2–5'])),

    scene('Hype Cycle de Platform Engineering · mayo 2026', 'Lee el mercado <em>por fase de adopción.</em>', 5, 'Horizonte / Hype Cycle de mayo de 2026', 'dark', 'hype', 3,
      hypeLandscape(),
      'Lectura cualitativa de la figura de Gartner. En innovación emergente aparecen eval-driven development, AI Gateways, GenAI model routers y spec-driven development. En el pico se ubican MCP, gobernanza de IA y plataformas de información sobre productividad. En el valle figuran DevEx, GitOps y service mesh. En la pendiente aparecen seguridad de la cadena de software, IDP y Platform Engineering. La meseta se muestra como fase conceptual. Los puntos indican fase de mercado, y las posiciones son aproximadas. Evalúa después beneficios, madurez, costo y preparación propios antes de financiar una capacidad.', source(['hype','2–5']), 'horizonte'),

    scene('Invertir, experimentar, observar', 'Convierte el horizonte <em>en decisiones.</em>', 5, 'Portafolio / propuesta para el piloto', 'light', 'horizon', 2,
      portfolioDecisions(),
      'Aplicación propuesta al piloto. Consolida IDP y seguridad de la cadena de software alrededor del primer servicio. Si surge un caso real de IA, pilota AI Gateway y evaluaciones en un flujo acotado. Para agentes, routers y MCP, acordar identidad, permisos, registros, costo por resultado y salida segura antes de ampliar. La decisión local combina demanda, preparación, exposición y resultados observables. El Hype Cycle aporta contexto de mercado a la conversación.', source(['hype','2–6'], ['agents','3–8'], ['maturity','5–8']), 'horizonte'),

    scene('Piloto de 90 días', 'Un journey. <em>Noventa días.</em>', 6, 'Propuesta / piloto financiable', 'light', 'roadmap', 2,
      milestones([
        [0, 'Días 1–30', 'Observar', 'Segmento y línea base.', 'search'],
        [1, 'Días 31–60', 'Pavimentar', 'Una ruta completa.', 'route'],
        [2, 'Días 61–90', 'Verificar', 'Uso, control y costo.', 'target']
      ]) + callout(2, 'Patrocinio, dueño de producto y equipo piloto desde el día uno.'),
      'El calendario es una propuesta para decidir. Días 1–30: seguir casos reales, acordar medición, criterio de elegibilidad y salida segura. Días 31–60: construir una TVP con capacidades que ya existen, resolver una fricción de punta a punta con un equipo piloto y ensayar reversión y escalamiento. Días 61–90: sustituir soporte manual repetido, revisar abandonos y costo, y validar con un segundo equipo si el tamaño del piloto lo permite.', source(['start','2–8'], ['principles','7–8'])),

    scene('Puerta de decisión al día 90', 'Decide con <em>evidencia del piloto.</em>', 6, 'Continuidad de inversión', 'light', 'decision', 2,
      illustratedTiles([
        [0, 'bolt', 'Mejora repetible', 'Escalar', 'Otro equipo puede adoptar.'],
        [1, 'wrench', 'Cuello de botella visible', 'Ajustar', 'Acotar el próximo experimento.'],
        [2, 'flag', 'Hipótesis sin respaldo', 'Detener', 'Retirar y conservar el aprendizaje.']
      ]),
      'Antes de empezar, acuerda el cambio mínimo relevante de tiempo con los equipos, los guardrails, el universo elegible y la ventana de observación. Día 90: mirar mediana y dispersión, adopción, abandonos, fallos y soporte, evidencias de control y costo. Para escalar valida demanda y capacidad de operar. Para ajustar define el próximo experimento. Detener conserva el aprendizaje y retira recursos de forma segura.', source(['start','2–6'], ['fund','10–11'], ['cio','1–3']))
  ];
}

export function storyboard(speaker, qr, photo) {
  const content = [
    scene('Platform Engineering Strategic Vision', heading('Platform', 'Engineering <em>Strategic Vision</em>'), 0, 'Visión estratégica', 'dark', 'cover', 0,
      atlas() + box('cover-deck', paragraph('Cómo convertir un journey crítico en una ruta segura que toda la organización pueda reutilizar.') + kicker(esc(speaker.name))),
      'Abre con una pregunta: ¿cuánto tarda un equipo nuevo en poner su primer servicio en producción con dueño, evidencia y alertas? Lo que sigue es una propuesta estratégica. El servicio HTTP y sus señales son ilustrativos.', source(['principles','3–5'], ['cio','1–3'])),

    scene(speaker.name, heading('Oscar', 'Lobaton Salas<em>.</em>'), 0, 'Quién está detrás de esta conversación', 'light', 'profile', 0,
      profile(speaker, qr, photo),
      'Presentación breve. Soy Oscar Lobaton Salas, SRE FDE en Cobre. Mi trabajo cruza confiabilidad, plataformas y experiencia de ingeniería. Las tarjetas rotan automáticamente. Usa M para pausar; el QR abre mi perfil de LinkedIn.', source(['principles','3–5'])),

    scene('La visión', 'Entregar con autonomía.<br><em>Operar con confianza.</em>', 1, 'Mandato de la plataforma', 'dark', 'statement', 0,
      chapterQuote('Un camino soportado para cada resultado frecuente.', 'El equipo toma decisiones de producto. La plataforma hace repetibles las decisiones comunes de entrega y operación.', 'Empezar por un segmento y un journey completos.'),
      'Para liderazgo, la apuesta es reducir el costo de coordinación sin perder control. Para el equipo, la promesa es poder avanzar en autoservicio mientras la organización recibe evidencia consistente. Un equipo de plataforma tiene la misión de operar ese producto y demostrar que reduce la fricción.', source(['principles','4–6'], ['cio','1–3'])),

    scene('El journey observado', 'El primer servicio revela <em>dónde esperamos.</em>', 1, 'Caso ilustrativo / servicio HTTP interno', 'light', 'journey', 2,
      journey(false) + callout(2, 'Pregunta de investigación: ¿en qué paso se van más tiempo y esfuerzo?'),
      'Un journey es la experiencia real que recorre una persona o equipo desde su intención hasta un resultado. Muéstralo con evidencia: entrevistas, observación y eventos. Distingue tiempo activo, cola, retrabajo y cambios de canal. Esta escena muestra hipótesis, no datos de una organización. La responsabilidad de operar existe desde el inicio aunque la alerta llegue al final.', source(['principles','4–5'], ['start','2–5']), 'first-service'),

    scene('De journey a golden path', 'La plataforma <em>pavimenta el trayecto.</em>', 1, 'Mismo servicio / ruta soportada', 'light', 'journey', 2,
      journey(true) + callout(2, 'Salida verificable: servicio sano y con dueño.'),
      'El golden path, o paved road, coordina capacidades para ofrecer una forma soportada de lograr un resultado. Diseñar el viaje incluye descubrir, adoptar, usar, sostener y mejorar; en este caso seguimos hasta la primera señal operativa. El camino automatiza las decisiones repetibles. Si un equipo necesita otra ruta, el requisito de riesgo y la evidencia mínima se mantienen.', source(['principles','4, 7–8'], ['trends','2–4']), 'first-service'),

    scene('Del menú a la cocina automática', 'Pide el resultado. <em>La plataforma prepara.</em>', 1, 'Abstracción / del menú al plato', 'dark', 'kitchen', 2,
      kitchen(),
      'La analogía del expositor: el menú es el portafolio de journeys, como lanzar un servicio, habilitar acceso o recuperar una entrega. El equipo es el comensal: elige el resultado y aporta los ingredientes que diferencian su caso. El ingeniero DevOps hace de chef al convertir conocimiento de herramientas, controles y excepciones en recetas. La cocina automatizada es la plataforma, que ejecuta golden paths reutilizables para necesidades como solicitar acceso, crear un entorno o promover un artefacto. Un plato completo representa el resultado del journey: puede combinar varios golden paths. La abstracción conserva estado, trazabilidad y un camino de escalamiento. El trabajo experto migra al diseño y mantenimiento de recetas y a los casos especiales.', source(['principles','4–8'], ['infra','4–7'])),

    scene('Journey, golden path y capacidad', 'Tres capas. <em>Tres decisiones.</em>', 1, 'Gramática de la estrategia', 'light', 'layers', 2,
      architectureLayers(),
      'La evidencia del journey decide el problema. El golden path acota una variante soportada de solución. Una capacidad entrega una función estable a varios consumidores, con interfaz, alcance, responsable y compromiso de servicio. El portal puede reunir descubrimiento y acceso. La plataforma incluye las capacidades y sus contratos.', source(['principles','4–8'], ['infra','4–7'])),

    scene('Contrato del golden path', 'Una promesa que se puede <em>verificar.</em>', 2, 'Contrato ilustrativo / servicio HTTP interno', 'light', 'contract', 2,
      box('contract-sheet', box('contract-id', kicker('Golden path') + '<strong>Servicio<br>HTTP interno</strong>' + kicker('Primera versión')) +
        box('contract-terms', [
          [0, 'Entrada', 'Dueño · servicio · perfil de riesgo'],
          [1, 'Salida verificable', 'Salud · artefacto · alerta · runbook'],
          [2, 'Soporte', 'Responsable · SLO · excepción']
        ].map(([n,name,detail]) => reveal(n, titleDetail(name,detail), 'term')).join(''))),
      'El contrato dice quién lo puede usar, qué pide, qué entrega y de qué se hace cargo el dueño de la ruta. La descripción del servicio y su perfil son datos de entrada, no decisiones ocultas en un ticket. Versiona el contrato y sus dependencias. Acordar el SLO después de la línea base. Una plantilla es solo una pieza reutilizable.', source(['principles','4, 7–8'], ['maturity','5–8'])),

    scene('Arquitectura por planos', '¿Qué sostiene <em>el camino?</em>', 2, 'Mapa de referencia / actores, ejecución y contexto', 'dark', 'capabilities', 3,
      systemsBoard(),
      'Modelo conceptual de la referencia del expositor. Primer avance: la intención del humano o agente se descubre en DCP (Developer Control Plane); integración y entrega (IDP significa Integration & Delivery Plane en este mapa) ejecuta el flujo con los recursos de RSP. Segundo avance: SEC aporta identidad, secretos y controles transversales; OBS recibe telemetría de ejecución y recursos para gestión operativa y FinOps. Tercer avance: DMM administra flujos, agentes, modelos y metadatos; SCL aporta contexto del ciclo de vida con acceso gobernado, alcance mínimo y evidencia. Los siete planos son agrupaciones lógicas. Cada capacidad concreta debe tener dueño, interfaz, alcance, evidencia y compromiso de servicio. Pilota únicamente los planos y proveedores que hagan falta para el journey.', source(['infra','3–8'], ['principles','4–8'], ['agents','3–8'])),

    scene('De petición a producción', 'Sigue <em>la evidencia.</em>', 2, 'Un cambio / cuatro comprobantes', 'light', 'trace', 3,
      milestones([
        [0, '01 / Solicitud', 'Dueño registrado', 'Servicio + riesgo', 'human'],
        [1, '02 / Build', 'Artefacto vinculado', 'Versión + pruebas', 'package'],
        [2, '03 / Promoción', 'Decisión trazable', 'Política + despliegue', 'shield'],
        [3, '04 / Operación', 'Servicio verificable', 'Salud + runbook', 'pulse']
      ]) + callout(3, 'Un ID conecta los cuatro comprobantes.'),
      'Ejemplo sin datos reales. La solicitud inicia un flujo que devuelve estado, enlaces y la acción siguiente cuando falla. El mismo ID de ejecución permite correlacionar dueño, build, promoción y señal de salud. Prueba también el camino de error y la reversión. La ruta termina cuando el equipo puede operar el servicio.', source(['principles','4, 7–8'], ['run','5–7'])),

    scene('Una plataforma, varias entradas', 'Mismo contrato. <em>Distintas entradas.</em>', 2, 'Arquitectura / experiencia y ejecución', 'light', 'interfaces', 2,
      entryPoints(),
      'El portal es una puerta de acceso apropiada para explorar y conseguir contexto. Los equipos también pueden iniciar la misma acción desde CLI o API. Los tres invocan el mismo contrato. Primero habilita una interfaz que resuelva el problema y separa la presentación de las reglas y la ejecución; la slide muestra el diseño de destino.', source(['principles','4–6'], ['agents','4–7'])),

    scene('Variantes y excepciones', 'El riesgo <em>elige la ruta.</em>', 2, 'Gobierno / decisión trazable', 'light', 'branch', 2,
      riskSwitch(),
      'La adopción del camino soportado se gana por utilidad. Los controles organizacionales obligatorios siguen aplicando a todos los caminos. Clasifica el riesgo al inicio. Una excepción exige dueño, compensación, vencimiento y plan de convergencia. Revisa las causas recurrentes para decidir si merecen una variante soportada. Comunica la versión, retiro y migración de las rutas.', source(['principles','4, 7–8'], ['trends','3–5'])),

    scene('Reutilizar capacidades', 'El segundo journey <em>prueba la plataforma.</em>', 2, 'Portafolio / expansión por reutilización', 'light', 'reuse', 1,
      reuseAssembly(),
      'El rollback agrega la capacidad específica de recuperación, pero puede consumir los contratos existentes de identidad, política y evidencia. Si el segundo journey requiere clonar toda la plataforma, examina límites e interfaces. El caso histórico de Cepsa ilustra el valor de organizar capacidades compartidas para recombinarlas. Seleccionar el segundo journey depende de demanda y evidencia local.', source(['cases','6–10'], ['principles','7–8'])),

    ...strategyScenes(),
    scene('Lo que debemos poder repetir', 'Que el siguiente equipo<br><em>ya tenga camino.</em>', 6, 'Decisión solicitada', 'dark', 'cover closing', 0,
      atlas() + box('cover-deck', paragraph('Patrocinar un piloto de 90 días para llevar un servicio a producción con dueño, evidencia y capacidad de operar.') + kicker(esc(speaker.name))),
      'Cierra retomando la pregunta inicial. Pide nombrar un sponsor, asignar a un dueño del piloto y confirmar un equipo de producto elegible. El día 90 se revisan resultado, guardrails y costo para decidir si se escala, ajusta o detiene.', source(['start','2–8'], ['cio','1–3']))
  ];
  const groups = [
    ['Diseño y operación','de diseño y operación',['principles','trends','roles','infra','run','cases']],
    ['Medición, inversión e IA','de medición, inversión e IA',['start','maturity','fund','cio','agents','hype','dora']]
  ];
  const appendix = groups.map(([title, emphasis, keys])=>{
    const {body,note} = references(keys,content);
    return scene('Referencias · ' + title, 'Referencias <em>' + emphasis + '.</em>', 7,
      'Anexo / investigación y guías', 'light', 'bibliography', 0, body, note);
  });
  return [...content,...appendix];
}
