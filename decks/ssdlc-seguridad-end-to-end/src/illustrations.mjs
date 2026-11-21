export const show = (n, cls, content) => `<div class="reveal ${cls}" data-show="${n}">${content}</div>`;
export const label = text => `<span class="label">${text}</span>`;
export const fact = (k, title, text) => label(k) + `<strong>${title}</strong>` + (text ? `<p>${text}</p>` : '');
const svg = (viewBox, content, cls = '') => `<svg class="drawing ${cls}" viewBox="${viewBox}" aria-hidden="true">${content}</svg>`;
const trace = (d, n) => `<path class="trace" data-from="${n}" pathLength="1" d="${d}"/>`;
const times = (n, fn) => Array.from({length:n}, (_, i) => fn(i)).join('');
export const toolRow = items => `<div class="tool-row">${label('Herramientas')}<div>${items.join('')}</div></div>`;
export const tool = (name, asset) => name === 'Snyk' && asset
  ? `<span class="tool tool-wordmark"><img src="${asset}" alt="Snyk"></span>`
  : `<span class="tool">${asset ? `<img src="${asset}" alt="">` : ''}${name}</span>`;

const lineSymbols = {
  plan: '<path d="M9 12h46v40H9zm7 12h13m-13 9h25m-25 9h15M43 16v-6m-8 9h16"/>',
  code: '<path d="M21 18 8 32l13 14m22-28 13 14-13 14M36 12l-8 40"/>',
  build: '<path d="m8 20 24-13 24 13v25L32 58 8 45zm0 0 24 13 24-13M32 33v25m-13-44 24 12"/>',
  test: '<circle cx="27" cy="27" r="16"/><path d="m39 39 16 16m-36-28 6 6 11-14"/>',
  gate: '<path d="M32 7 54 17v14c0 15-11 23-22 28-11-5-22-13-22-28V17zm-9 25 6 6 13-15"/>',
  run: '<path d="M6 50h52M7 33h12l7-18 10 28 7-13h14"/><circle cx="56" cy="30" r="3"/>',
  key: '<circle cx="23" cy="23" r="13"/><path d="m32 32 24 24m-7-7 6-6m-12 0 6-6"/><circle cx="23" cy="23" r="3"/>',
  file: '<path d="M13 6h28l11 11v41H13zm28 0v12h11M22 29h21m-21 9h21m-21 9h15"/>',
  timer: '<circle cx="32" cy="35" r="20"/><path d="M32 8v7m-8-7h16M32 21v15l9 5m6-26 5 5"/>'
};
export function glyph(name) {
  return svg('0 0 64 64', `<g fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round">${lineSymbols[name]}</g>`, 'glyph');
}

export function coverArt(id) {
  return `<figure class="cover-plate" aria-hidden="true">${svg('0 0 720 675', `
    <defs><pattern id="cover-grid-${id}" width="25" height="25" patternUnits="userSpaceOnUse"><path d="M25 0H0v25" class="faint"/></pattern></defs>
    <rect class="cover-grid" x="45" y="28" width="635" height="595" rx="12" fill="url(#cover-grid-${id})"/>
    <g class="scope-rings">
      ${[89,139,184,230].map(r=>`<circle cx="365" cy="322" r="${r}"/>`).join('')}
      <path d="M80 322h567M365 59v526M156 112l416 417M557 130 172 514"/>
      ${times(60,i=>`<path d="M365 92v${i%5===0?16:6}" transform="rotate(${i*6} 365 322)"/>`)}
    </g>
    <path class="cover-track" d="M31 558h121l97-97v-88l105-61h73l97-82v-79l75-72h88"/>
    <path class="cover-signal" pathLength="1" d="M31 558h121l97-97v-88l105-61h73l97-82v-79l75-72h88"/>
    <g class="cover-pins"><circle cx="31" cy="558" r="9"/><circle cx="365" cy="312" r="19"/><circle cx="687" cy="79" r="9"/></g>
    <path class="cover-shield" d="M367 244c27 17 51 23 71 30v34c0 39-24 67-71 88-47-21-71-49-71-88v-34c20-7 44-13 71-30z"/>
    <path class="cover-mark" d="m336 316 22 21 43-47"/>
  `)}</figure>`;
}

export function lifecycle() {
  const steps = [
    ['plan','Plan','Amenazas y requisitos'], ['code','Code','SAST · secretos · SCA'], ['build','Build','IaC · imagen · SBOM'],
    ['test','Verify','DAST · IAST · decisión'], ['gate','Deploy','Firma · admisión'], ['run','Operate','Runtime · remediación']
  ];
  const feedback = 'M1301 148h74q20 0 20 20v127q0 20-20 20H45q-20 0-20-20V168q0-20 20-20h58';
  return `<div class="lifecycle">
    ${svg('0 0 1420 358',`
      <path class="track" d="M119 148H1301"/>
      ${times(5,i=>trace(`M${119+i*236.4} 148h236.4`, Math.ceil((i+1)/2)))}
      <path class="return-track" d="${feedback}"/>
      ${trace(feedback,3)}
    `)}
    <div class="stations">${steps.map(([i,name,copy],j)=>show(Math.ceil(j/2),'station',glyph(i)+fact('',name,copy))).join('')}</div>
    ${show(3,'return-label','La señal de producción vuelve al backlog.')}</div>`;
}

export function threatMap() {
  const nodes = [
    [0,'entry','Actor autenticado','Canal web'],
    [0,'edge','API pedidos','Límite de confianza'],
    [1,'data','Datos de pedidos','Acceso por propietario']
  ];
  return `<figure class="threat-map">
    ${svg('0 0 1420 425',`
      <path class="drawing-grid" d="M30 73H1390M30 338H1390"/>
      <path class="zone" d="M505 44h840v300H505z"/>
      <path class="zone-cut" d="M505 44v300"/>
      <path class="track" d="M299 185h833"/>
      ${trace('M299 185h375',0)}${trace('M764 185h368',1)}
      <path class="threat-wire" d="M510 164v-60h152m498 84v102h-213"/>
      <circle class="threat-dot" cx="510" cy="185" r="11"/><circle class="threat-dot data-dot" cx="1132" cy="185" r="11"/>
    `)}
    ${nodes.map(([n,cls,title,copy])=>show(n,'threat-node '+cls,glyph(cls==='data'?'build':cls==='edge'?'gate':'code')+fact('',title,copy))).join('')}
    ${show(1,'threat-note',fact('Riesgo prioritario','Leer un pedido ajeno','Requisito verificable: autorizar cada acceso al recurso.'))}
  </figure>`;
}

export function inspector(kind, markup, facts, tools) {
  return `<div class="inspector ${kind}">
    <div class="instrument">${markup}</div>
    <div class="inspection">${facts.map(([n,k,title,copy])=>show(n,'inspection-row',fact(k,title,copy))).join('')}${tools}</div>
  </div>`;
}

export function codeGlass() {
  return `<div class="code-glass">
    <div class="editor-tab"><i></i><i></i><i></i><span>orders.ts</span></div>
    <div class="editor-lines">
      <code data-focus-step="0"><span>01</span> router.get(<b>'/orders/:id'</b>,</code>
      <code><span>02</span>   requireUser,</code>
      <code data-focus-step="1"><span>03</span>   authorizeOrder,</code>
      <code data-focus-step="2"><span>04</span>   loadOrder</code>
      <code><span>05</span> );</code>
    </div>
    ${show(2,'code-finding',glyph('test')+'<span>Evidencia del análisis<br><b>Regla, ubicación y explicación</b></span>')}
  </div>`;
}

export function dependencyGraph() {
  const pcs = [[95,178],[295,79],[295,299],[532,58],[532,155],[532,283]];
  return `<div class="dependency-graph">${svg('0 0 680 393',`
    <path class="tree-wire" d="M95 178h99V79h101M194 178v121h101m0-220h111V58h126M406 79v76h126M295 299h111v-16h126"/>
    ${trace('M95 178h99V79h212v76h126',1)}
    ${pcs.map(([x,y],i)=>`<g class="package-node node-${i}" transform="translate(${x} ${y})"><rect x="-22" y="-22" width="44" height="44" rx="7"/><path d="m-11-2 11-7 11 7v12l-11 7-11-7zm0 0 11 7 11-7M0 5v12"/></g>`).join('')}
  `)}
  <span class="graph-service">Servicio</span><span class="graph-direct">Directas</span><span class="graph-deep">Transitivas</span>
  ${show(1,'graph-pin','Hallazgo en una indirecta')}
  </div>`;
}

export function imageStack() {
  const layers=[236,169,102];
  return `<div class="image-stack">${svg('0 0 690 422',`
    ${layers.map(y=>`<g class="image-layer" transform="translate(81 ${y})"><path d="M0 64 276 0l238 69-269 68z"/><path d="M0 64v26l245 73 269-69V69"/><path d="M49 68l196 58 220-55"/></g>`).join('')}
    <path class="image-sight" d="M356 87v293m-24-293h48m-48 293h48"/>
  `)}
  <span class="image-tag top">App</span><span class="image-tag mid">Paquetes de lenguaje</span><span class="image-tag end">Sistema base</span>
  ${show(1,'image-seal','<span>Salida por digest</span><b>sha256:…</b>')}
  </div>`;
}

export function testChamber() {
  return `<div class="test-chamber">${svg('0 0 680 401',`
    <path class="chamber-box" d="M169 85h354v228H169z"/>
    <path class="chamber-edge" d="M169 85l49-32h354v226l-49 34m0-228 49-32"/>
    <path class="chamber-route" d="M48 201h592"/>
    ${trace('M48 201h322',0)}${trace('M364 201h158',1)}
    <rect class="chamber-chip" x="310" y="151" width="110" height="103" rx="13"/>
    <path class="chamber-pulse" d="M326 200h15l11-20 13 40 15-27h25"/>
    <circle class="outside-probe" cx="124" cy="201" r="22"/>
    <circle class="inside-probe" cx="366" cy="201" r="62"/>
  `)}<span class="probe-label outside">Pruebas</span>${show(1,'probe-label inside','Agente IAST')}</div>`;
}

export function gateIllustration(logos) {
  return `<div class="kube-gate">
    ${svg('0 0 1420 426',`
      <path class="track" d="M122 184H1290"/>
      ${trace('M120 184h565',0)}
      ${trace('M736 184h554',2)}
      <path class="gate-shell" d="M567 346V165a144 144 0 0 1 288 0v181H810V165a99 99 0 0 0-198 0v181z"/>
      <path class="gate-inner" d="M638 282V173a72 72 0 0 1 144 0v109z"/>
      <g class="gate-shutters"><path d="M638 126h72v157h-72z"/><path d="M710 126h72v157h-72z"/></g>
      <g class="gate-carrier"><rect x="-50" y="-29" width="100" height="58" rx="8"/><path d="M-33 0h66m-21-12 12 12-12 12"/></g>
    `)}
    <div class="gate-caption request">${fact('Manifiesto','Digest fijado','Registro permitido.')}</div>
    ${show(1,'gate-caption verdict',fact('Verificación','Firma y procedencia','Identidad y builder confiables.'))}
    ${show(2,'gate-caption kube',fact('Ejemplo admitido','Políticas cumplidas','Pod Security + política de imágenes.'))}
    <div class="gate-tools">${toolRow([tool('Kubernetes',logos.kubernetes),tool('Kyverno',logos.kyverno),tool('Sigstore Policy Controller')])}</div>
  </div>`;
}

export function clusterMap(logos) {
  return `<div class="cluster-map">
    ${svg('0 0 1420 425',`
      <path class="cluster-boundary" d="M280 27h910v354H280z"/>
      <path class="ns-boundary" d="M354 111h355v238H354zm406 0h355v238H760z"/>
      <path class="cluster-link" d="M109 199h826m355-120h45"/>
      ${trace('M109 199h421',0)}${trace('M530 199h407',1)}
      <g class="workload" transform="translate(529 198)"><rect x="-64" y="-40" width="128" height="80" rx="7"/><path d="M-36-13h22v23h-22zm46 0h22v23H10zm-46 41h68"/></g>
      <g class="workload" transform="translate(935 198)"><rect x="-64" y="-40" width="128" height="80" rx="7"/><path d="M-32 21v-39h64v39zm0-14h64m-46-12h28"/></g>
      <path class="blocked-lane" d="M657 199V94q0-15 15-15H1183m0-17v34m14-34v34"/>
    `)}
    <div class="cluster-key">${tool('Kubernetes',logos.kubernetes)}</div>
    <div class="cluster-label a">${fact('Namespace pedidos','orders-api','Identidad de workload.')}</div>
    ${show(1,'cluster-label b',fact('Permitido','PostgreSQL','Desde orders-api por TCP 5432.'))}
    ${show(2,'cluster-label c',fact('Denegado','Egreso externo','Destino sin regla de permiso.'))}
    <div class="cluster-foot">${toolRow([tool('NetworkPolicy'),tool('Cilium',logos.cilium),tool('Hubble · veredictos de flujo')])}</div>
  </div>`;
}

export function telemetry(logos) {
  return `<div class="telemetry">
    ${svg('0 0 1420 396',`
      <path class="scope-grid" d="M45 57h1320m-1320 65h1320m-1320 65h1320m-1320 65h1320m-1320 65h1320M181 53v275m212-275v275m212-275v275m212-275v275m212-275v275m212-275v275"/>
      <path class="wave-base" d="M69 204h174l25-29 25 29h159l22 11 29-11h128l38-109 34 184 24-75h248l19-29 32 29h296"/>
      ${trace('M69 204h174l25-29 25 29h159l22 11 29-11h128l38-109 34 184 24-75h248l19-29 32 29h296',0)}
      <rect class="telemetry-cursor" x="-36" y="48" width="72" height="285" rx="5"/>
      <circle class="telemetry-spike" cx="669" cy="95" r="11"/>
    `)}
    <div class="telemetry-name">${fact('Observación','Evento de proceso','Comportamiento fuera del perfil esperado.')}</div>
    ${show(1,'telemetry-name enrich',fact('Contexto','Pod + namespace + digest','Correlacionar con despliegue y dueño.'))}
    ${show(2,'telemetry-name respond',fact('Acción','Investigar y contener','Según confianza y runbook.'))}
    <div class="telemetry-tools">${toolRow([tool('Falco',logos.falco),tool('Tetragon'),tool('SIEM')])}</div>
  </div>`;
}

export function decisionTrack() {
  return `<figure class="decision-track">
    ${svg('0 0 1420 420',`
      <circle class="decision-wheel" cx="483" cy="199" r="123"/><circle class="decision-wheel inner" cx="483" cy="199" r="94"/>
      <path class="track" d="M56 198h304m238 0h190l102-93h174m-276 93h276m-276 0 102 93h174"/>
      ${trace('M57 198h303',0)}${trace('M598 198h190l102-93h174',0)}${trace('M598 198h466',1)}${trace('M598 198h190l102 93h174',2)}
      <path class="decision-needle" d="M471 199l91-10 28 10-28 10z"/>
      <circle class="decision-pivot" cx="483" cy="199" r="11"/>
    `)}
    <div class="decision-caption in">${fact('Entrada','Hallazgo','Con evidencia y contexto.')}</div>
    <div class="decision-caption core">${fact('Criterio','Riesgo','Confianza · impacto · exposición.')}</div>
    ${show(0,'decision-caption out high',fact('Alto y verificado','Bloquear','Remediación antes de promover.'))}
    ${show(1,'decision-caption out medium',fact('Riesgo aceptado','Excepción','Dueño, mitigación y vencimiento.'))}
    ${show(2,'decision-caption out low',fact('Pendiente','Priorizar','Backlog con SLA y seguimiento.'))}
  </figure>`;
}

export function closedLoop() {
  const steps=[['test','Detectar','Señal corroborada'],['gate','Contener','Seguir el runbook'],['code','Corregir','Cambio revisado'],['run','Verificar','Nuevo digest y señales sanas']];
  const lanes = [
    'M141 88H1279',
    'M1279 88a114 114 0 0 1 0 228H141',
    'M141 316a114 114 0 0 1 0-228'
  ];
  return `<figure class="response-loop">
    ${svg('0 0 1420 414',`
       <path class="loop-track" d="${lanes.join(' ')}"/>
       ${lanes.map((d,i)=>trace(d,i+1)).join('')}
    `)}
    <div class="loop-states">${steps.map(([g,title,copy],i)=>show(i,'loop-stage',glyph(g) + fact('',title,copy))).join('')}</div>
    ${show(3,'loop-caption','El aprendizaje actualiza el modelo de amenazas y las políticas.')}
  </figure>`;
}
