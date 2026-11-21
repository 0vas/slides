const part = (step, cls, html) => `<div class="reveal ${cls}" data-show="${step}">${html}</div>`;
const label = text => `<span class="label">${text}</span>`;

const symbols = {
  route: '<circle cx="8" cy="51" r="4"/><circle cx="54" cy="13" r="4"/><path d="M12 51h14a7 7 0 0 0 7-7V20a7 7 0 0 1 7-7h10M33 31h14v9h9"/><circle cx="56" cy="40" r="3"/>',
  human: '<circle cx="32" cy="16" r="8"/><path d="M18 38v-3a9 9 0 0 1 9-9h10a9 9 0 0 1 9 9v3M13 39h38l-4 15H17zM24 44l-4 3 4 3m16-6 4 3-4 3m-11 1 5-8"/>',
  chip: '<rect x="13" y="13" width="38" height="38" rx="6"/><rect x="23" y="23" width="18" height="18" rx="2"/><path d="M23 5v8m9-8v8m9-8v8M23 51v8m9-8v8m9-8v8M5 23h8m-8 9h8m-8 9h8m38-18h8m-8 9h8m-8 9h8"/>',
  shield: '<path d="M32 6c8 6 16 8 22 10v11c0 15-8 25-22 31C18 52 10 42 10 27V16c6-2 14-4 22-10zM22 32l7 7 14-15"/>',
  monitor: '<rect x="5" y="10" width="54" height="38" rx="5"/><path d="M5 21h54m-44-5h1m4 0h1m4 0h1m-3 39h18m-9-7v7m-12-22 6 5-6 5m24-10-6 5 6 5m-14 1 4-12"/>',
  layers: '<path d="m7 24 25-13 25 13-25 13zM7 33l25 13 25-13M7 42l25 13 25-13m-32-15 7-4 7 4-7 4z"/>',
  cloud: '<path d="M19 48h31a9 9 0 0 0 0-18h-3a15 15 0 0 0-29-5A12 12 0 0 0 19 48zM24 56h16M32 39v17m-5-12 5-5 5 5"/>',
  data: '<ellipse cx="32" cy="14" rx="20" ry="8"/><path d="M12 14v32c0 4 9 8 20 8s20-4 20-8V14M12 29c0 4 9 8 20 8s20-4 20-8m-32-3h3m-3 15h3"/>',
  pulse: '<path d="M8 12v41h48M13 36h9l5-15 8 24 6-15h13"/><circle cx="54" cy="30" r="3"/>',
  clock: '<circle cx="32" cy="32" r="23"/><path d="M32 17v16l11 6m-11-29v4m0 36v4m18-22h4m-44 0h4"/>',
  wrench: '<path d="M48 9a14 14 0 0 0-18 16L9 45a7 7 0 0 0 10 10l20-21A14 14 0 0 0 55 16l-10 9-7-7z"/><circle cx="15" cy="49" r="2"/>',
  target: '<circle cx="31" cy="33" r="22"/><circle cx="31" cy="33" r="13"/><circle cx="31" cy="33" r="4"/><path d="M32 32 53 11m-1-6v7h7"/>',
  flag: '<path d="M12 57V8m1 4h32l-7 10 7 10H13m-7 25h13"/>',
  package: '<path d="m8 20 24-12 24 12v24L32 56 8 44zM8 20l24 12 24-12M32 32v24M21 14l24 12v9"/>',
  coin: '<ellipse cx="33" cy="17" rx="20" ry="8"/><path d="M13 17v17c0 4 9 8 20 8s20-4 20-8V17M13 26c0 4 9 8 20 8s20-4 20-8M13 34v9c0 4 9 8 20 8s20-4 20-8v-9"/>',
  search: '<circle cx="27" cy="27" r="17"/><path d="m40 40 13 13M19 27h16m-8-8v16"/>',
  repeat: '<path d="M10 22h37l-8-8m8 8-8 8M54 42H17l8-8m-8 8 8 8"/>',
  bolt: '<path d="M35 6 13 36h16l-2 22 24-33H35z"/>'
};

export function icon(name) {
  return `<svg class="glyph" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${symbols[name]}</svg>`;
}

export function kitchen() {
  return `<figure class="kitchen-board">
    <svg class="kitchen-svg" viewBox="0 0 1420 386" aria-hidden="true">
      <defs>
        <linearGradient id="cabinet-metal" x2="0" y2="1" gradientUnits="objectBoundingBox"><stop stop-color="#385955"/><stop offset="1" stop-color="#192b29"/></linearGradient>
        <pattern id="kitchen-mesh" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.2" fill="#76A59A"/></pattern>
        <pattern id="belt-tread" width="30" height="30" patternUnits="userSpaceOnUse"><path d="M0 0v30" stroke="#8BADA4" stroke-width="2"/><path d="M7 9h14m-14 12h14" stroke="#587A72" stroke-width="2"/></pattern>
      </defs>
      <path class="kitchen-guide" d="M76 53H1344M76 342H1344M378 33v330M925 33v330"/>
      <path d="M62 345H1350L1326 366H89Z" fill="#0E1C1A"/>
      <path d="M119 307H1301a19 19 0 0 1 0 38H119a19 19 0 0 1 0-38z" fill="#2E504A" stroke="#7CA69C" stroke-width="2"/>
      <path d="M119 316H1312v19H119z" fill="url(#belt-tread)"/>
      <circle cx="119" cy="326" r="9" fill="#9FBFB5"/><circle cx="1300" cy="326" r="9" fill="#9FBFB5"/>
      <path d="M162 344v17m210-17v17m565-17v17m340-17v17" stroke="#7EA69E" stroke-width="5"/>
      <g stroke-linejoin="round">
        <path d="M96 296 122 270H321l-28 27z" fill="#3B625B" stroke="#79A095"/>
        <path d="M125 89h173v190H125z" fill="#142422" stroke="#BDD5C9" stroke-width="3"/>
        <path d="m298 89 18 13v158l-18 19z" fill="#2E504A" stroke="#91B5A8"/>
        <rect x="136" y="101" width="149" height="162" rx="3" fill="#E6E9D8"/>
        <path d="M149 115h123v28H149z" fill="#18534B" />
        <path d="M162 123h49m-49 10h31m37-6h29" stroke="#CFE7DA" stroke-width="3"/>
        <rect class="menu-selection" x="147" y="153" width="127" height="36" rx="3"/>
        <path d="M157 163h11v11h-11zm0 39h11v11h-11zm0 30h11v11h-11z" fill="none" stroke="#246057" stroke-width="2"/>
        <path d="M179 164h48m-48 8h76m-76 31h62m-62 8h45m-45 22h62m-62 8h54" stroke="#34716A" stroke-width="3"/>
      </g>
      <g>
        <path d="M484 296V72l40-32h325v239l-34 28H484z" fill="url(#cabinet-metal)" stroke="#739F95" stroke-width="2"/>
        <path d="M484 72h331l34-32H524z" fill="#426A61" stroke="#98BDB0" stroke-width="2"/>
        <path d="M815 72v235m12-230v214" fill="none" stroke="#ACCDC1"/>
        <path d="M501 85h295v205H501z" fill="#203D38" stroke="#81A99D" stroke-width="1.5"/>
        <rect x="516" y="101" width="102" height="72" rx="5" fill="#102A27" stroke="#83B3A7"/>
        <path d="M527 146h17l9-19 10 28 9-14h32m-76-26h26" stroke="#00C2B5" stroke-width="2.5" fill="none"/>
        <path d="M634 106h144v52H634z" fill="url(#kitchen-mesh)" stroke="#729D91"/>
        <path d="M526 193h240v92H526z" fill="#102724" stroke="#67988C" stroke-width="2"/>
        <path d="M587 193v70m126-70v70" stroke="#AAC9BE" stroke-width="3"/>
        <path d="M526 268h240v17H526z" fill="#39635B"/><path d="M534 276h224" stroke="#72AA9A" stroke-dasharray="4 6"/>
        <circle cx="505" cy="79" r="3" fill="#B2D1C6"/><circle cx="794" cy="79" r="3" fill="#B2D1C6"/>
        <circle class="kitchen-lamp" cx="632" cy="175" r="5"/><circle class="kitchen-lamp" cx="649" cy="175" r="5"/><circle class="kitchen-lamp" cx="666" cy="175" r="5"/>
        <g class="robot-arm" stroke-linecap="round" stroke-linejoin="round">
          <path d="M650 195v23l-15 19m0 0-14 11v10m14-21 14 11v10" stroke="#AFCBBF" stroke-width="6" fill="none"/>
          <circle cx="650" cy="218" r="6" fill="#00C2B5"/><circle cx="635" cy="237" r="5" fill="#00C2B5"/>
        </g>
      </g>
      <path d="M1017 290h230l-14 15h-203z" fill="#7BABA0" stroke="#A7C5BA" stroke-width="2"/>
      <ellipse cx="1131" cy="286" rx="110" ry="27" fill="#DFEAE0" stroke="#A9C4B7" stroke-width="3"/>
      <ellipse cx="1131" cy="282" rx="83" ry="18" fill="none" stroke="#73998B" stroke-width="2"/>
      <g class="plated">
        <path d="M1061 280q68-12 139 0" fill="none" stroke="#588D79" stroke-width="6" stroke-linecap="round"/>
        <path d="m1080 269 45-24 48 12-20 24h-52z" fill="#167E73" stroke="#0D413B" stroke-width="2"/>
        <path d="m1082 254 43-21 48 11-20 26h-52z" fill="#00C2B5" stroke="#0D413B" stroke-width="2"/>
        <path d="m1106 254 38-17m-25 23 39-18m-26 23 35-17" stroke="#75DFCA" stroke-width="2"/>
        <circle cx="1178" cy="272" r="8" fill="#DDEDD9" stroke="#246A59" stroke-width="3"/><circle cx="1193" cy="266" r="7" fill="#B9D7BF" stroke="#246A59" stroke-width="3"/>
        <path d="M1102 222q-12-12 0-26m26 21q-12-12 0-27m26 32q-12-12 0-26" fill="none" stroke="#A4CBBD" stroke-width="3" stroke-linecap="round"/>
      </g>
      <path class="order-guide" d="M272 179h97l47 41h60m363 0h94l87 28h74"/>
      <g class="order-ticket">
        <path d="M0 0h49v45l-7-4-7 4-7-4-7 4-7-4-7 4-7-4z" fill="#E9F3E9" stroke="#00C2B5" stroke-width="2"/>
        <path d="M9 11h30M9 18h24M9 27h9m5 0h16M9 34h23" stroke="#17635B" stroke-width="2"/>
      </g>
    </svg>
    <figcaption class="kitchen-stages">
      ${part(0, 'kitchen-stage', label('01 / Menú') + '<strong>Portafolio</strong><p>Elegir qué resolver.</p>')}
      ${part(1, 'kitchen-stage', label('02 / Cocina') + '<strong>Golden paths</strong><p>Preparar cada parte.</p>')}
      ${part(2, 'kitchen-stage', label('03 / Plato') + '<strong>Journey completo</strong><p>Recibir un resultado.</p>')}
    </figcaption>
  </figure>`;
}

const planes = [
  [0, 'actors', 'human', 'Actores', 'Humanos · agentes'],
  [0, 'dcp', 'monitor', 'DCP', 'Experiencia de desarrollo', 'Developer Control Plane', 'Portal · IDE · catálogo · ownership'],
  [1, 'idp', 'package', 'IDP', 'Integración y entrega', 'Integration & Delivery Plane', 'CI/CD · pruebas · artefactos · provisión'],
  [1, 'rsp', 'cloud', 'RSP', 'Recursos', 'Resource Plane', 'Cómputo · datos · red · cloud'],
  [2, 'sec', 'shield', 'SEC', 'Seguridad', 'Security Plane', 'Identidad · secretos · políticas · vulnerabilidades'],
  [2, 'obs', 'pulse', 'OBS', 'Observabilidad', 'Observability Plane', 'Métricas · trazas · logs · incidentes · FinOps'],
  [3, 'dmm', 'chip', 'DMM', 'Datos y modelos', 'Data & Model Management', 'Agentes · flujos · modelos · metadatos'],
  [3, 'scl', 'data', 'SCL', 'Contexto del SDLC', 'SDLC Context Lake', 'Servicios · código · controles · evidencia']
];

export function systemsBoard() {
  const wires = [
    [0, 'M704 69V92'],
    [1, 'M704 194V225'],
    [1, 'M947 280H1022'],
    [2, 'M467 142H388V181H350 M467 241H388V181'],
    [2, 'M1022 302H987V343H395V367H350 M467 292H395V343'],
    [3, 'M704 334V367 M947 418H1022']
  ];
  return `<figure class="systems-board" aria-label="Arquitectura de capacidades por planos">
    <svg class="plane-wires" viewBox="0 0 1420 501" aria-hidden="true">
      ${wires.map(([step, d]) => `<path class="bus-wire wire-${step}" pathLength="1" d="${d}"/>`).join('')}
    </svg>
    ${planes.map(([step, key, glyph, acronym, name, expansion, details]) =>
      part(step, 'plane-module module-' + key,
        icon(glyph) + `<div class="module-copy"><span class="module-id" title="${expansion ?? acronym}">${acronym}</span><strong>${name}</strong>${details ? `<p>${details}</p>` : ''}</div>`)).join('')}
  </figure>`;
}

export function capacityModel() {
  const cells = Array.from({length: 10}, (_, i) => `<i class="${i < 8 ? 'routine' : 'judgment'}"></i>`).join('');
  return `<div class="capacity-model">
    <div class="capacity-field">
      ${label('Ejemplo por squad')}
      <div class="capacity-cells" aria-hidden="true">${cells}</div>
      <div class="capacity-legends"><p><i></i><strong>80%</strong> candidato a automatizar</p><p><i></i><strong>20%</strong> coordinación y trabajo puntual</p></div>
    </div>
    <div class="capacity-value">
      ${part(0, 'capacity-line', label('Costo anual supuesto · 1 FTE') + '<strong>USD 100 mil</strong>')}
      ${part(1, 'capacity-line', label('Capacidad bruta máxima · por squad') + '<strong>USD 80 mil</strong><p>Escenario total = squads elegibles × USD 80 mil/año.</p>')}
      ${part(2, 'capacity-line capacity-net', label('Caso de inversión') + '<strong>Ajustar por captura real y adopción</strong><p>Descontar construcción y operación al evaluar el retorno.</p>')}
    </div>
  </div>`;
}

export function illustratedTiles(items) {
  return `<div class="illustrated-tiles" style="--tiles:${items.length}">${items.map(([step, glyph, role, title, detail]) =>
    part(step, 'illustrated-tile', `<div class="tile-art">${icon(glyph)}<i aria-hidden="true"></i></div>` + label(role) + `<strong>${title}</strong><p>${detail}</p>`)).join('')}</div>`;
}

export function adoptionLoop() {
  const points = [
    [0, 'search', 'Entender', 'Observar fricción'],
    [1, 'route', 'Co-diseñar', 'Resolver una tarea'],
    [2, 'human', 'Activar', 'Acompañar el uso'],
    [3, 'repeat', 'Iterar', 'Aprender del uso']
  ];
  const loop = [
    'M400 128H495Q531 67 615 67H811Q900 67 941 128H1019',
    'M1019 128h-28q-22 0-22 22v184q0 23 22 23h28',
    'M1019 357H910Q867 412 799 412H615Q541 412 493 357H400',
    'M400 357H490Q438 303 438 247T490 128H401'
  ];
  return `<figure class="flywheel">
    <svg class="flywheel-wires" viewBox="0 0 1420 460" aria-hidden="true">
      <circle class="flywheel-orbit" cx="710" cy="230" r="128"/>
      <circle class="flywheel-orbit orbit-inner" cx="710" cy="230" r="110"/>
      ${loop.map((d,i) => `<path class="flywheel-base" d="${d}"/><path class="wheel-wire wheel-${i}" pathLength="1" d="${d}"/>`).join('')}
      <path class="wheel-arrow" d="m1006 121 12 7-12 7m0 215 12 7-12 7m-592-14-12 7 12 7m0-243-12 7 12 7"/>
    </svg>
    <div class="wheel-core">${icon('repeat')}<strong>Plataforma<br>como producto</strong></div>
    ${points.map(([n,glyph,title,detail]) =>
      part(n, 'wheel-node wheel-node-' + n, icon(glyph) + `<div><strong>${title}</strong><p>${detail}</p></div>`)).join('')}
  </figure>`;
}

export function agentGate() {
  return `<figure class="agent-console">
    <svg class="gate-drawing" viewBox="0 0 1420 330" aria-hidden="true">
      <path class="gate-grid" d="M46 77H1365M46 265H1365M252 35V290M711 35V290M1172 35V290"/>
      <path class="gate-bus" d="M311 177H642M786 177H1120"/>
      <path class="gate-detour" pathLength="1" d="M784 177h61q37 0 37 35v22q0 36 36 36h174"/>
      <g class="agent-chip">
        <path d="M117 116h183l33 33v89H117z" fill="#213D35" stroke="#86B3A6" stroke-width="2"/>
        <rect x="144" y="143" width="95" height="66" rx="8" fill="#13322D" stroke="#00C2B5" stroke-width="2"/>
        <path d="M179 169l-10 7 10 7m22-14 10 7-10 7m-12 6 5-24M250 156h38m-38 15h28m-28 15h38m-38 15h27" fill="none" stroke="#B9DFD0" stroke-width="3"/>
        <path d="M138 225h35m7 0h35m7 0h35m7 0h35" stroke="#559888" stroke-width="2"/>
      </g>
      <g class="gate-module">
        <circle cx="709" cy="177" r="87" fill="#193932" stroke="#2D695C" stroke-width="2"/>
        <circle cx="709" cy="177" r="73" fill="#152D29" stroke="#8FB7AB" stroke-width="2" stroke-dasharray="3 5"/>
        <path d="M709 127c14 9 29 15 39 16v24c0 25-19 44-39 54-20-10-39-29-39-54v-24c10-1 25-7 39-16z" stroke="#00C2B5" stroke-width="4" fill="#21443B"/>
        <path class="gate-check" d="m692 175 12 12 25-28" stroke="#B9DFD0" stroke-width="4" fill="none" stroke-linecap="round"/>
      </g>
      <g class="gate-action">
        <path d="M1100 113h198v107h-198z" fill="#1C3C34" stroke="#7BAA9C" stroke-width="2"/>
        <path d="M1113 136h173m-173 66h173" stroke="#6B9F92" fill="none" stroke-width="2"/>
        <path d="M1128 167h24l12-18 18 36 17-21h57" stroke="#00C2B5" fill="none" stroke-width="3"/>
        <path d="M1092 270h180" stroke="#55796E" stroke-width="2"/>
        <path class="gate-stop" d="M1130 256h66l14 14-14 14h-66l-14-14z" fill="#CBD9C9" stroke="#72AB9A" stroke-width="2"/>
      </g>
      <rect class="gate-token" x="-13" y="-8" width="26" height="16" rx="8" stroke="#B8FFF1" stroke-width="2" fill="#00C2B5"/>
    </svg>
    <figcaption class="gate-labels">
      ${part(0, 'gate-label', label('01 / Intención') + '<strong>Preparar rollback</strong><p>Identidad y contexto del servicio.</p>')}
      ${part(1, 'gate-label', label('02 / Política') + '<strong>Evaluar alcance</strong><p>Se permite preparar la propuesta.</p>')}
      ${part(2, 'gate-label', label('03 / Acción sensible') + '<strong>Escalar a un humano</strong><p>Ejecutar requiere aprobación.</p>')}
    </figcaption>
  </figure>`;
}
