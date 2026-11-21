import { icon } from './illustrations.mjs';

const tag = text => `<span class="label">${text}</span>`;
const details = (title, text) => `<strong>${title}</strong><p>${text}</p>`;
const show = (step, classes, content) => `<div class="reveal ${classes}" data-show="${step}">${content}</div>`;
const draw = (shape, step) => `<path class="progress-line" data-from="${step}" pathLength="1" d="${shape}"/>`;
const ticks = (count, item) => Array.from({length: count}, (_, i) => item(i)).join('');

export function entryPoints() {
  const wires = ['M313 80H429L560 203H632', 'M313 204H632', 'M313 332H429L560 204H632'];
  return `<figure class="crosspoint">
    <svg class="technical-art" viewBox="0 0 1420 444" aria-hidden="true">
      <path class="faint-guide" d="M18 41H1400M18 410H1400M400 31v390m627-390v390"/>
      ${wires.map((line, i) => `<path class="ghost-wire" d="${line}"/>${draw(line,i)}`).join('')}
      <path class="ghost-wire" d="M862 204h213"/>
      ${draw('M862 204h213',0)}
      <g class="switch-core" transform="translate(746 204)">
        <rect class="switch-slot" x="-103" y="-103" width="206" height="206" rx="35" transform="rotate(45)"/>
        <rect class="switch-top" x="-80" y="-80" width="160" height="160" rx="28" transform="rotate(45)"/>
        <circle class="switch-orbit" r="53"/>
        <path class="switch-glyph" d="M-27-1h15l12-18 12 18h15M0-19v45"/>
        <circle class="switch-led" cx="-29" r="6"/><circle class="switch-led" cx="29" r="6"/><circle class="switch-led" cy="26" r="6"/>
      </g>
      <rect class="entry-packet" x="-8" y="-5" width="16" height="10" rx="3"/>
      <g class="output-slip" transform="translate(1088 144)">
        <path d="M38 0h176l29 29v117H38z"/>
        <path d="M214 0v29h29M59 37h119m-119 22h81m-81 22h126"/>
        <path class="slip-check" d="m184 112 12 10 24-28"/>
      </g>
    </svg>
    ${show(0, 'entry-input portal-input', tag('Portal') + '<div class="portal-preview"><i></i><b>Lanzar servicio</b><span>Catálogo ↗</span></div>')}
    ${show(1, 'entry-input terminal-input', tag('CLI') + '<code><span>$</span> platform create</code>')}
    ${show(2, 'entry-input api-input', tag('API') + '<code><span>POST</span> /services</code>')}
    <figcaption class="switch-text">${details('Un contrato','Identidad · política · orquestación')}</figcaption>
    <div class="switch-output">${tag('Respuesta común')}${details('Evidencia','Estado y próxima acción.')}</div>
  </figure>`;
}

export function riskSwitch() {
  const tracks = [
    'M495 220H683Q735 220 770 165L805 112Q822 88 867 88H934',
    'M495 220H934',
    'M495 220H683Q735 220 770 275L805 328Q822 352 867 352H934'
  ];
  const risks = [
    ['Ruta estándar', 'Controles automáticos.'],
    ['Variante sensible', 'Evidencia y revisión del control.'],
    ['Excepción temporal', 'Responsable, vencimiento y salida.']
  ];
  return `<figure class="risk-field">
    <svg class="technical-art" viewBox="0 0 1420 458" aria-hidden="true">
      <path class="faint-guide" d="M26 55H1396M26 421H1396M542 43v387"/>
      <path class="risk-inlet" d="M52 220H262"/>
      ${tracks.map((path, i) => `<path class="risk-track" d="${path}"/>${draw(path,i)}<circle class="risk-port port-${i}" cx="934" cy="${88+i*132}" r="8"/>`).join('')}
      <circle class="risk-rim" cx="380" cy="220" r="103"/>
      <circle class="risk-dial" cx="380" cy="220" r="83"/>
      <g class="risk-markings">${ticks(24, i => `<line x1="380" y1="127" x2="380" y2="${i % 3 === 0 ? 140 : 135}" transform="rotate(${i*15} 380 220)"/>`)}</g>
      <path class="risk-needle" d="M368 220 420 211 444 220 420 229z"/>
      <circle class="risk-cap" cx="380" cy="220" r="9"/>
    </svg>
    <div class="risk-intent">${tag('Entrada')}<strong>Solicitud</strong></div>
    <figcaption class="risk-profile">${tag('Selector')}<strong>Perfil de riesgo</strong></figcaption>
    ${risks.map(([name, text], i) => show(i, 'risk-out risk-out-' + i, details(name,text))).join('')}
  </figure>`;
}

export function reuseAssembly() {
  const rails = [
    'M74 150H1345',
    'M74 320H1345'
  ];
  const slots = [['human','Identidad'],['shield','Política'],['pulse','Evidencia']];
  return `<figure class="reuse-assembly">
    <svg class="technical-art" viewBox="0 0 1420 474" aria-hidden="true">
      <path class="faint-guide" d="M340 25v416M1114 25v416M66 33h1291m-1291 403h1291"/>
      ${rails.map((shape, i) => `<path class="reuse-truss" d="${shape}"/>${draw(shape,i)}`).join('')}
      ${[518,721,924].map(x => `<path class="reuse-pin" d="M${x} 150v170"/><circle class="reuse-jack" cx="${x}" cy="150" r="8"/><circle class="reuse-jack lower-jack" cx="${x}" cy="320" r="8"/>`).join('')}
      <path class="reuse-arrow" d="M1320 136l25 14-25 14m0 142 25 14-25 14"/>
      <path class="reuse-outline" d="M393 158h676l23 24v106l-23 24H393l-23-24V182z"/>
    </svg>
    <figcaption class="assembly-label">${tag('Capacidades compartidas')}</figcaption>
    <div class="assembly-core">${slots.map(([symbol,name]) => `<div class="assembly-slot">${icon(symbol)}<strong>${name}</strong></div>`).join('')}</div>
    <div class="assembly-a">${tag('Journey inicial')}${details('Lanzar servicio','Primer despliegue.')}</div>
    ${show(1,'assembly-b',tag('Segundo journey') + details('Recuperar servicio','Rollback verificado.'))}
    <div class="assembly-end a">${tag('Salida')}<strong>Servicio activo</strong></div>
    ${show(1,'assembly-end b',tag('Salida') + '<strong>Servicio restaurado</strong>')}
  </figure>`;
}

export function incidentHandover() {
  const servers = ticks(4,i => `<g transform="translate(0 ${i*48})"><path d="M0 0h218v39H0z"/><path class="rack-mark" d="M18 20h51m13 0h35"/><circle cx="191" cy="20" r="5"/></g>`);
  return `<figure class="handover-field">
    <svg class="technical-art" viewBox="0 0 1420 476" aria-hidden="true">
      <path class="faint-guide" d="M32 333h1356M711 29v389"/>
      <g class="handover-service" transform="translate(126 127)">
        <path class="service-case" d="M0 3 20-15h219v156l-19 17H0z"/>
        <rect class="service-screen" x="0" y="3" width="220" height="155" rx="8"/>
        <path class="service-details" d="M0 40h220m-188 18h66m-66 15h39m-9 85v18m96-18v18M46 177h123m51-74h19"/>
        <path class="service-signal" d="M24 120h31l14-20 15 35 22-49 15 35 18-11h55"/>
        <g class="service-controls"><circle cx="20" cy="21" r="3"/><circle cx="35" cy="21" r="3"/><circle cx="50" cy="21" r="3"/></g>
      </g>
      <g class="handover-rack rack-platform" transform="translate(1057 123)">
        <path class="rack-back" d="M-9 0 18-22h218v187l-18 23H-9z"/>
        <path class="rack-edge" d="M218 0l18-22m-18 62v148"/>
        ${servers}
      </g>
      <path class="handover-rail" d="M365 230H1056"/>
      ${draw('M438 230H992',1)}
      <circle class="handover-port" cx="711" cy="230" r="18"/>
      <path class="handover-flag" d="M686 205h50m-50 50h50"/>
      <g class="incident-ticket">
        <path d="M0 0h64l14 14v42H0z"/><path d="M14 16h25m-25 11h42m-42 11h32"/>
      </g>
    </svg>
    <div class="handover-app">${tag('Producto')}${details('Servicio','Responde por la aplicación.')}</div>
    <div class="handover-platform">${tag('Plataforma')}${details('Ruta y capacidades','Responde por sus contratos.')}</div>
    <figcaption class="handover-intent">${tag('Escalamiento')}<strong>El incidente va al dueño del fallo.</strong></figcaption>
    ${show(1,'handover-example','<p>Si falla la provisión, el caso pasa a Plataforma.</p>')}
  </figure>`;
}

export function pillarBridge() {
  const parts = [
    [276,'route','Procesos','Excelencia operacional'],
    [710,'human','Personas','Productividad del equipo'],
    [1144,'chip','Tecnología','Eficiencia operativa']
  ];
  return `<figure class="pillar-bridge">
    <svg class="technical-art" viewBox="0 0 1420 463" aria-hidden="true">
      <path class="faint-guide" d="M50 337h1320M36 104h1349M76 325l121-176h1054l92 176"/>
      <path class="bridge-rib" d="M68 154h1284l-20 31H89z"/>
      <path class="bridge-top" d="M68 154 129 115h1284l-61 39z"/>
      <path class="bridge-running" d="M148 135H1349"/>
      ${draw('M148 135H1349',2)}
      ${parts.map(([x],i) => `<g class="bridge-pillar pillar-${i}" transform="translate(${x} 185)">
        <path class="pillar-base" d="M-115 140 74 140 119 110-70 110z"/>
        <path class="pillar-face" d="M-70 0H58v121H-70z"/>
        <path class="pillar-side" d="m58 0 30-18v120l-30 19z"/>
        <path class="pillar-joint" d="M-83 0 58 0 88-18h-141z"/>
        <path class="pillar-braces" d="M-49 16 35 105M35 16-49 105"/>
      </g>`).join('')}
      <circle class="bridge-traveller" cx="149" cy="135" r="8"/>
      <path class="bridge-check" d="m1308 88 12 12 27-29"/>
    </svg>
    ${parts.map(([,symbol,title,text],i) => show(i,'pillar-caption pillar-caption-'+i,icon(symbol) + details(title,text))).join('')}
  </figure>`;
}

export function decisionCompass() {
  const roles = [
    ['Producto de plataforma','Prioriza journeys y resultados.'],
    ['Ingeniería de plataforma','Opera contratos, SLO y soporte.'],
    ['Equipos y habilitación','Adoptan y operan el servicio.'],
    ['Riesgo, arquitectura y finanzas','Acuerdan controles y presupuesto.']
  ];
  return `<figure class="compass-field">
    <svg class="technical-art" viewBox="0 0 1420 458" aria-hidden="true">
      <path class="faint-guide" d="M42 228h1335M710 15v430"/>
      <circle class="compass-outer" cx="710" cy="228" r="189"/>
      <circle class="compass-rim" cx="710" cy="228" r="164"/>
      <circle class="compass-inner" cx="710" cy="228" r="128"/>
      <g class="compass-ticks">${ticks(48,i => `<path d="M710 48v${i%4 === 0 ? 12 : 5}" transform="rotate(${i*7.5} 710 228)"/>`)}</g>
      <path class="compass-axes" d="M576 94l268 268M844 94 576 362"/>
      <g class="compass-hand"><path d="m710 78 15 114-15 33-15-33z"/><circle cx="710" cy="99" r="4"/></g>
      <circle class="compass-hub" cx="710" cy="228" r="64"/>
      <g class="compass-sockets"><circle cx="576" cy="94" r="7"/><circle cx="844" cy="94" r="7"/><circle cx="844" cy="362" r="7"/><circle cx="576" cy="362" r="7"/></g>
    </svg>
    <figcaption class="compass-caption">Journey</figcaption>
    ${roles.map(([title,text],i) => show(i,'compass-role role-'+i,details(title,text))).join('')}
  </figure>`;
}

export function journeyTimer() {
  return `<figure class="timer-field">
    <svg class="technical-art" viewBox="0 0 1420 478" aria-hidden="true">
      <path class="faint-guide" d="M26 395H1395M26 66H1395"/>
      <path class="timer-buttons" d="M275 68V43h77v25m-61-25V23h45v20m125 61 25-26 24 24-25 26"/>
      <circle class="timer-outer" cx="313" cy="226" r="155"/>
      <circle class="timer-inner" cx="313" cy="226" r="126"/>
      <g class="timer-ticks">${ticks(60,i => `<path d="M313 80v${i%5 === 0 ? 15 : 6}" transform="rotate(${i*6} 313 226)"/>`)}</g>
      <path class="timer-arc" pathLength="1" d="M313 100A126 126 0 0 1 427 279"/>
      <path class="timer-hand" d="M313 236v-92"/>
      <circle class="timer-pin" cx="313" cy="226" r="12"/>
      <path class="ghost-wire" d="M470 225h92l88 119H1327"/>
      ${draw('M470 225h92l88 119H1327',2)}
      <path class="guard-posts" d="M698 335v19m171-19v19m171-19v19m171-19v19"/>
      <path class="ghost-wire" d="M561 225h766"/>
      ${draw('M561 225h766',1)}
    </svg>
    <div class="timer-value">${tag('Métrica de resultado')}<strong>Tiempo hasta<br>producción verificada</strong></div>
    <figcaption class="timer-span">${tag('Ventana de medición')}<p>Solicitud válida → servicio sano con dueño y alertas.</p></figcaption>
    ${show(1,'timer-adoption',tag('Adopción') + details('Uso sobre lo elegible','Servicios activos en ruta ÷ servicios elegibles.'))}
    ${show(2,'timer-guard',tag('Guardrails') + details('Calidad y costo','Fallos · soporte · excepciones · costo.'))}
  </figure>`;
}

export function cohortScope() {
  const samples = [
    [202,367,518,711,854,1062,1193],
    [253,380,557,703,826,1037,1212]
  ];
  return `<figure class="cohort-lab">
    <svg class="technical-art" viewBox="0 0 1420 465" aria-hidden="true">
      <rect class="cohort-band" x="168" y="30" width="1114" height="241" rx="9"/>
      <path class="faint-guide" d="M220 80H1230m-1010 146h1010"/>
      <path class="cohort-axis" d="M186 105h1080M186 198h1080"/>
      ${ticks(13, i => `<path class="cohort-ruler-tick" d="M${190+i*89} 96v18m0 75v18"/>`)}
      <rect class="cohort-window" x="329" y="53" width="748" height="189" rx="4"/>
      <path class="cohort-sightlines" d="M329 46v207m748-207v207"/>
      ${samples.map((points,i) => points.map((x,j) => `<circle class="cohort-sample sample-${i}${j === 0 || j === 6 ? ' excluded' : ''}" cx="${x}" cy="${105+i*93}" r="9"/>`).join('')).join('')}
      <path class="cohort-align" d="M328 281v-11h750v11"/>
    </svg>
    <div class="cohort-key baseline">${tag('Línea base')}</div>
    <div class="cohort-key pilot">${tag('Piloto')}</div>
    ${show(1,'cohort-condition','<p>Mismo tipo de servicio · ventana comparable · población elegible</p>')}
    <div class="cohort-readings">
      ${show(0,'cohort-reading',tag('Flujo') + '<strong>Lead time<br>y onboarding</strong>')}
      ${show(1,'cohort-reading',tag('Estabilidad') + '<strong>Fallos, recuperación<br>y retrabajo</strong>')}
      ${show(2,'cohort-reading',tag('Cobertura') + '<strong>SLO, reúso<br>y automatización</strong>')}
    </div>
  </figure>`;
}

export function fundingReservoir() {
  const circuits = [
    'M459 117H759L899 84H1007',
    'M566 249H774L896 225H1007',
    'M628 352H772L899 365H1007'
  ];
  return `<figure class="reservoir-field">
    <svg class="technical-art" viewBox="0 0 1420 470" aria-hidden="true">
      <defs><linearGradient id="reservoir-shell" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#31594e"/><stop offset="1" stop-color="#17302a"/></linearGradient></defs>
      <path class="faint-guide" d="M25 435h1373M24 41h1376M712 28v422"/>
      <path class="reservoir-shadow" d="M59 371 337 460l361-95-266-98z"/>
      <path class="reservoir-base" d="M96 321 432 230l260 83-336 98z"/>
      <path class="reservoir-front" d="M96 321l260 90v31L96 352z"/>
      <path class="reservoir-side" d="m356 411 336-98v31l-336 98z"/>
      <g class="well-lower">
        <path class="well-top" d="M164 270 428 195l194 61-264 77z"/>
        <path class="well-front" d="m164 270 194 63v38l-194-63z"/>
        <path class="well-side" d="m358 333 264-77v38l-264 77z"/>
        <path class="well-lanes" d="m189 278 168 56 238-70m-406 26 168 56 238-70"/>
        <path class="energy-lower" d="m188 294 168 56 238-69"/>
      </g>
      <g class="well-middle">
        <path class="well-top" d="M211 186 429 124l151 49-219 64z"/>
        <path class="well-front" d="m211 186 150 51v67l-150-51z"/>
        <path class="well-side" d="m361 237 219-64v67l-219 64z"/>
        <path class="well-lanes" d="m230 191 130 44 188-54m-318 31 130 44 188-54m-317 36 130 44 187-55"/>
        <path class="energy-middle" d="M231 231l129 44 188-55"/>
      </g>
      <g class="well-upper">
        <path class="well-top" d="M269 89 417 47l110 34-148 44z"/>
        <path class="well-front" d="m269 89 110 36v58l-110-36z"/>
        <path class="well-side" d="m379 125 148-44v58l-148 44z"/>
        <path class="well-lanes" d="m291 110 88 29 124-36m-212 27 88 29 124-36"/>
        <path class="energy-upper" d="m292 122 87 29 125-36"/>
      </g>
      ${circuits.map((d,i) => `<path class="ghost-wire" d="${d}"/>${draw(d,i)}<circle class="funding-port fund-port-${i}" cx="1007" cy="${[84,225,365][i]}" r="7"/>`).join('')}
    </svg>
    ${show(0,'funding-label fund-proof',tag('Proyecto') + details('Demostrar','Una prueba acotada.'))}
    ${show(1,'funding-label fund-core',tag('Producto') + details('Sostener','Soporte, seguridad y evolución.'))}
    ${show(2,'funding-label fund-meter',tag('Consumo') + details('Atribuir','Costo variable por servicio.'))}
  </figure>`;
}

export function maturitySteps() {
  const levels = [
    ['Ad hoc', 'Soluciones aisladas por equipo.'],
    ['Inicial', 'Una plataforma mínima resuelve una fricción.'],
    ['Fundacional', 'Dueño, autoservicio y una ruta gobernada.'],
    ['Avanzado', 'La demanda y el uso orientan la evolución.'],
    ['Continuo', 'Se itera con datos de experiencia y valor.']
  ];
  const stair = 'M20 306H292V252H569V198H846V144H1123V90H1399';
  return `<figure class="maturity-staircase">
    <svg class="technical-art" viewBox="0 0 1420 460" aria-hidden="true">
      <path class="stair-guide" d="M20 64h1379m-1379 362h1379"/>
      <path class="stair-fill" d="${stair}v326H20z"/>
      <path class="stair-edge" d="${stair}"/>
      ${draw('M20 306H292',0)}${draw('M292 306v-54H569v-54H846',1)}
      ${draw('M846 198v-54H1123',2)}${draw('M1123 144V90H1399',3)}
    </svg>
    <div class="stair-levels">${levels.map(([name, evidence],i) => show([0,1,1,2,3][i],'stair-level',
      tag('Nivel ' + (i+1)) + details(name,evidence))).join('')}</div>
    <figcaption>Busca evidencia de cada capacidad y elige el nivel que necesita el objetivo.</figcaption>
  </figure>`;
}

export function maturityRadar() {
  const axes = [
    ['Modelo operativo', 2, 3], ['Producto', 2, 3], ['Capacidades', 3, 3],
    ['Experiencia', 2, 3], ['Adopción', 1, 2], ['Habilidades', 2, 2],
    ['Rutas curadas', 1, 3], ['IA en plataforma', 1, 1], ['Métricas', 2, 3]
  ];
  const xy = (i, level) => {
    const angle = i * 2 * Math.PI / axes.length - Math.PI / 2;
    return [414 + 31 * level * Math.cos(angle), 235 + 31 * level * Math.sin(angle)].map(n => n.toFixed(1));
  };
  const polygon = values => values.map((level,i) => xy(i,level).join(',')).join(' ');
  return `<figure class="maturity-radar">
    <svg class="technical-art" viewBox="0 0 1420 481" role="img" aria-label="${axes.map(([name,actual,target]) => name + ' ' + actual + ' a ' + target).join('; ')}">
      ${[1,2,3,4,5].map(level=>`<polygon class="radar-ring" points="${polygon(axes.map(()=>level))}"/>`).join('')}
      ${axes.map((_,i)=>{const [x,y] = xy(i,5);return `<path class="radar-spoke" d="M414 235L${x} ${y}"/>`;}).join('')}
      <polygon class="radar-current" points="${polygon(axes.map(axis=>axis[1]))}"/>
      <polygon class="radar-target" points="${polygon(axes.map(axis=>axis[2]))}"/>
      ${axes.map(([name],i)=>{
        const [x,y]=xy(i,5.55);
        const anchor=i===0?'middle':i<5?'start':'end';
        return `<text class="radar-label" x="${x}" y="${y}" text-anchor="${anchor}">${name}</text>`;
      }).join('')}
    </svg>
    <div class="radar-key"><span>Línea base</span>${show(1,'radar-target-key','Meta del piloto')}<small>Escala 1–5</small></div>
    <div class="radar-decisions">
      ${show(0,'radar-decision',tag('Caso ilustrativo · primer servicio') + details('Puntúa con evidencia','Usa entrevistas, uso real y resultados del journey.'))}
      ${show(1,'radar-decision',tag('Brecha prioritaria · 1 → 3') + details('Pavimenta una ruta','Entrega autoservicio con políticas y un dueño.'))}
      ${show(2,'radar-decision',tag('Decisión de alcance · 1 → 1') + details('IA queda en observación','Reevalúa el perfil con los resultados del piloto.'))}
    </div>
  </figure>`;
}

export function hypeLandscape() {
  const phases = [['Innovación','emergente'],['Pico de','expectativas'],['Valle de','desilusión'],['Pendiente de','aprendizaje'],['Meseta de','productividad']];
  const gaps = [58,340,548,852,1166,1380];
  const curve = 'M65 365C143 364 201 185 270 103S349 45 407 51C501 55 514 106 548 138C599 185 592 289 651 324S758 355 852 326C951 300 993 253 1069 215S1210 166 1378 163';
  const tech = [
    [0, [171,264], [202,295], [195,290], 'Eval-driven development'],
    [0, [266,108], [75,143], [195,137], 'AI Gateways'],
    [1, [407,51], [389,24], [401,29], 'MCP'],
    [1, [482,71], [323,113], [454,94], 'Gobernanza de IA'],
    [2, [558,149], [594,141], [589,137], 'DevEx'],
    [2, [586,204], [639,197], [632,193], 'GitOps'],
    [2, [823,335], [648,285], [777,287], 'Service mesh'],
    [3, [914,304], [934,361], [928,357], 'Seguridad de la cadena de software'],
    [3, [961,280], [996,313], [989,309], 'IDP'],
    [3, [1006,252], [1044,266], [1038,262], 'Platform Engineering']
  ];
  return `<figure class="hype-landscape">
    <svg class="technical-art" viewBox="0 0 1420 465" role="img" aria-label="Selección cualitativa de tecnologías por fase del Hype Cycle de Gartner, mayo de 2026">
      ${phases.map((_,i)=>`<rect class="hype-band band-${i}" x="${gaps[i]}" y="46" width="${gaps[i+1]-gaps[i]}" height="331"/>`).join('')}
      <path class="hype-axis" d="M58 33v344H1380"/>
      <path class="hype-curve" d="${curve}"/>
      <text class="hype-axis-label" x="25" y="212" transform="rotate(-90 25 212)" text-anchor="middle">EXPECTATIVAS</text>
      ${tech.map(([step,[x,y],[tx,ty],[endX,endY],name])=>`<g class="hype-tech" data-hype-step="${step}">
          <path d="M${x} ${y}L${endX} ${endY}"/><circle cx="${x}" cy="${y}" r="6"/>
          <text x="${tx}" y="${ty}">${name}</text>
        </g>`).join('')}
      ${phases.map(([a,b],i)=>{
        const x=(gaps[i]+gaps[i+1])/2;
        return `<text class="hype-phase" x="${x}" y="402" text-anchor="middle"><tspan x="${x}">${a}</tspan><tspan x="${x}" dy="20">${b}</tspan></text>`;
      }).join('')}
    </svg>
    <figcaption><span>Selección por fase · mayo de 2026</span><span>Tiempo →</span></figcaption>
  </figure>`;
}

export function portfolioDecisions() {
  const decisions=[
    ['Consolidar','IDP y cadena de software','Integra aprovisionamiento, evidencia y despliegue en el primer golden path.','Tiempo al primer despliegue y controles verificados.'],
    ['Probar','AI Gateway y evaluaciones','Pilota un flujo de IA con cuota, trazabilidad y criterios de calidad.','Costo por resultado aceptado y fallos de evaluación.'],
    ['Observar','Agentes, routers y MCP','Mantén el alcance acotado hasta resolver identidad, permisos y operación.','Señales de demanda, estabilidad y esfuerzo operativo.']
  ];
  return `<figure class="horizon-decisions">${decisions.map(([action,name,detail,check],i)=>
    show(i,'horizon-row',`<strong>${action}</strong><div>${tag(name)}<p>${detail}</p></div><div>${tag('Evidencia para decidir')}<p>${check}</p></div>`)
  ).join('')}</figure>`;
}
