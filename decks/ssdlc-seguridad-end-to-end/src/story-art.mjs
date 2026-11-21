import { fact, glyph, label, show, tool, toolRow } from './illustrations.mjs';

const svg = (viewBox, body) => `<svg class="story-drawing" viewBox="${viewBox}" aria-hidden="true">${body}</svg>`;
const line = (d,n) => `<path class="trace" pathLength="1" data-from="${n}" d="${d}"/>`;
const chip = (value = '') => `<span class="story-chip">${value || 'orders-api'}</span>`;

export function startChange() {
  return `<div class="change-pass">
    <div class="change-stub">${label('El cambio que vamos a seguir')}<strong>Consultar<br>un pedido.</strong>
      <code>GET /orders/:id</code><p>Una misma decisión de seguridad desde el diseño hasta la operación.</p>
    </div>
    <div class="change-proof">
      ${show(0,'proof-band', fact('01 · Diseñar','¿Qué debe proteger?','Cada cliente sólo puede ver sus pedidos.'))}
      ${show(1,'proof-band', fact('02 · Entregar','¿Qué comprueba el equipo?','Pruebas y evidencia ligadas al cambio.'))}
      ${show(2,'proof-band', fact('03 · Operar','¿Quién responde?','El equipo recibe señales y corrige el diseño.'))}
    </div>
  </div>`;
}

export function shiftTiming() {
  return `<figure class="shift-board">
    ${svg('0 0 1420 386', `
      <path class="story-grid" d="M68 93h1284M68 314h1284"/>
      <path class="shift-bed" d="M166 202h1088"/>
      <path class="shift-ruler" d="M166 202h1088"/>
      ${[166,439,711,982,1254].map(x=>`<path class="shift-tick" d="M${x} 175v55"/><circle class="shift-pin" cx="${x}" cy="202" r="9"/>`).join('')}
      <path class="shift-late" d="M1254 112H439m16-13-16 13 16 13"/>
      <g class="shift-token"><rect x="-31" y="-24" width="62" height="48" rx="6"/><path d="M0-11v14m0 8h.1"/></g>
    `)}
    <div class="shift-phases"><span>Diseño</span><span>PR</span><span>Build</span><span>Deploy</span><span>Operación</span></div>
    ${show(0,'shift-caption late',fact('Si aparece en producción','Investigar y desplegar otra vez.',''))}
    ${show(1,'shift-caption early',fact('Si aparece en el PR','Corregir con el cambio en contexto.',''))}
    ${show(2,'shift-footer','El feedback se adelanta. En producción seguimos verificando y observando.')}
  </figure>`;
}

export function pushBarrier() {
  return `<figure class="push-board">
    ${svg('0 0 1420 427', `
      <path class="story-grid" d="M37 52h1346m-1346 276h1346"/>
      <path class="push-rail" d="M134 176h1150"/>
      ${line('M134 176H676',0)}${line('M676 176h608',2)}
      <path class="push-return" d="M675 207v67q0 19-19 19H359m15-12-15 12 15 12"/>
      <path class="push-shell" d="M602 255V123q0-34 34-34h150q34 0 34 34v132h-42V130H644v125zm-18 1h254v21H584z"/>
      <path class="push-blade" d="M688 113h49v115h-49zM696 152h33m-33 17h33m-33 17h33"/>
      <g class="push-token"><path d="M0 0h91l19 18v51H0z"/><path d="M91 0v18h19m-92 4h50m-50 14h63m-63 14h38"/></g>
      <path class="push-repo" d="M1139 86h124v59h-124zm0 0 13-11h124v60l-13 10M1162 111h62m-62 14h42"/>
    `)}
    <div class="push-origin">${fact('Antes del push','Commit local','El scanner local puede advertir.')}</div>
    <div class="push-remote">${fact('Destino','Repositorio remoto','Push revisado por el servidor.')}</div>
    ${show(1,'push-correction',fact('Patrón compatible','Push rechazado','Retira el secreto. Si estuvo expuesto, revócalo y rota.'))}
    ${show(2,'push-resume','El push corregido se vuelve a evaluar.')}
  </figure>`;
}

export function blueprintRender() {
  return `<div class="render-blueprint">
    ${svg('0 0 1420 401',`
      <path class="story-grid" d="M87 74h1244M87 293h1244M703 58v248"/>
      <path class="blue-paper" d="M133 106h365l42 42v160H133zM498 106v42h42"/>
      <path class="blue-paper blue-output" d="M874 106h365l42 42v160H874zM1239 106v42h42"/>
      <path class="blue-print" d="M174 182h111m-111 34h188m-188 34h151"/>
      <path class="blue-print" d="M915 182h244m-244 34h185m-185 34h212"/>
      <path class="blue-bridge" d="M538 199h336m-23-16 23 16-23 16"/>
      ${line('M539 199h334',1)}
      <path class="blue-overlay" d="M901 223h336v49H901z"/>
      <path class="blue-view" d="M901 213v-23h24m288 0h24v23m0 56v24h-24m-288 0h-24v-24"/>
    `)}
    <div class="blue-caption input">${fact('Fuente','Helm o Terraform','Reglas del repositorio.')}</div>
    ${show(1,'blue-caption result',fact('Con valores del entorno','Manifiesto o plan','Prueba el recurso resultante.'))}
    ${show(2,'blue-footer','CI adelanta el diagnóstico. Admisión confirma el recurso solicitado.')}
  </div>`;
}

export function supplySeal(logos) {
  return `<div class="seal-workbench">
    ${svg('0 0 1420 428',`
      <path class="story-grid" d="M37 84h1346m-1346 279h1346"/>
      <path class="seal-frame" d="M149 301V144q0-48 48-48h289q48 0 48 48v157m-385 0h385"/>
      <path class="seal-beam" d="M190 111h305v35H190z"/>
      <g class="seal-die"><path d="M327 149h33v78h-33zM286 222h115v32H286z"/><path d="M309 234h70"/></g>
      <path class="seal-sheet" d="M227 276h288l56 31H284z"/>
      <circle class="seal-imprint" cx="385" cy="288" r="18"/>
      <path class="seal-imprint-check" d="m377 287 6 6 10-10"/>
      <path class="seal-connector" d="M572 305h139V146h71m-71 82h71m-71 78h71"/>
    `)}
    <div class="seal-id">${label('Identidad común')}${chip('sha256:d05a…')}</div>
    <div class="seal-labels">
      ${show(0,'seal-detail',fact('SBOM','Qué contiene','Inventario por digest.'))}
      ${show(1,'seal-detail',fact('Procedencia','Cómo se construyó','Fuente y builder.'))}
      ${show(2,'seal-detail',fact('Firma','Quién lo respalda','Identidad bajo política.'))}
    </div>
    <div class="seal-tooling">${toolRow([tool('Syft'),tool('SLSA'),tool('Cosign'),tool('Harbor',logos.harbor)])}</div>
  </div>`;
}

export function outsideTest() {
  return `<figure class="exterior-test">
    ${svg('0 0 1420 429',`
      <path class="story-grid" d="M37 81h1346m-1346 251h1346"/>
      <path class="test-domain" d="M880 59h468v280H880z"/>
      <g class="test-window"><path d="M92 96h322v197H92zM92 132h322"/><path d="M126 159h80m-80 28h164m-164 31h124m-124 30h233"/><circle cx="122" cy="113" r="4"/><circle cx="140" cy="113" r="4"/></g>
      <path class="test-route" d="M416 175H985m-570 57h570"/>
      ${line('M415 175H985',0)}${line('M985 232H416',1)}
      <path class="test-service" d="M990 133h232v137H990zm29 34h175m-175 31h86m-86 31h130"/>
      <path class="test-loupe" d="M702 194a36 36 0 1 0-72 0 36 36 0 1 0 72 0m-12 28 45 45"/>
    `)}
    <div class="test-caption actor">${fact('Fuera de la app','Cliente de prueba','Web o API en staging autorizado.')}</div>
    ${show(1,'test-caption observed',fact('Desde la interfaz','Respuesta observable','Cobertura por ruta y sesión.'))}
    ${show(2,'test-note','Opciones: ZAP Baseline · Burp Suite DAST')}
  </figure>`;
}

export function orderAuthorization() {
  return `<div class="order-access">
    ${svg('0 0 1420 420',`
      <path class="story-grid" d="M44 81h1332m-1332 248h1332"/>
      <path class="access-in" d="M268 138h251l110 63m-361 70h251l110-64"/>
      ${line('M270 138h249l110 63h435',0)}
      ${line('M270 271h249l110-64h79v109h218',1)}
      <path class="access-hub" d="M714 134l89 68-89 68-89-68z"/>
      <circle class="access-port" cx="1064" cy="201" r="10"/>
      <path class="access-stop" d="M924 301v28m13-28v28"/>
    `)}
    <div class="access-subject a">${fact('Usuario de prueba A','Titular del pedido','Resultado esperado: permite.')}</div>
    ${show(1,'access-subject b',fact('Usuario de prueba B','Otro usuario','Resultado esperado: deniega.'))}
    <div class="access-core">${glyph('gate')}</div>
    <div class="access-record">${label('Criterio ASVS')}${chip('GET /orders/:id')}</div>
    ${show(2,'access-check','Evidencia: resultado por rol y propietario, ligado al build de staging.')}
  </div>`;
}

export function podArmor() {
  return `<figure class="pod-armor">
    ${svg('0 0 1420 431',`
      <path class="story-grid" d="M67 52h1286m-1286 318h1286"/>
      ${[165,135,105].map((r,i)=>`<path class="armor-shell shell-${i}" d="M371 ${217-r}q${r*.49} ${r*.43} ${r*.77} ${r*.55}v${r*.39}q0 ${r*.67}-${r*.77} ${r*.93}-${r*.77}-${r*.26}-${r*.77}-${r*.93}v-${r*.39}q${r*.28}-${r*.12} ${r*.77}-${r*.55}z"/>`).join('')}
      <path class="armor-wire" d="M511 136h186l89-46h80m-357 112h357m-355 69h186l89 45h80"/>
      ${line('M511 136h186l89-46h80',0)}
      ${line('M511 202h355',1)}
      ${line('M511 271h186l89 45h80',2)}
    `)}
    <div class="armor-title">${label('Kubernetes')}<strong>Pod</strong></div>
    ${show(0,'armor-fact f0',fact('Identidad del proceso','runAsNonRoot','Evita ejecutar como root.'))}
    ${show(1,'armor-fact f1',fact('Privilegios','allowPrivilegeEscalation: false','Revoca capacidades innecesarias.'))}
    ${show(2,'armor-fact f2',fact('Llamadas al sistema','seccomp: RuntimeDefault','Limita operaciones disponibles al proceso.'))}
  </figure>`;
}

export function aiTrust() {
  return `<figure class="ai-trust">
    ${svg('0 0 1420 433',`
      <path class="story-grid" d="M36 49h1348m-1348 327h1348"/>
      <path class="ai-boundary" d="M779 61v300"/>
      <path class="ai-domain" d="M859 90h416v259H859z"/>
      <path class="ai-wire" d="M251 204H1028"/>
      ${line('M251 204H556',0)}${line('M556 204H851',1)}${line('M851 204H1028',2)}
      <circle class="ai-model-ring" cx="529" cy="204" r="71"/><circle class="ai-model-ring inner" cx="529" cy="204" r="51"/>
      <path class="ai-model-mark" d="m505 204 24-29 25 29-25 30zM529 174v61m-24-31h49"/>
      <path class="ai-api" d="M1028 150h220v93h-220zm22 28h110m-110 19h158m-158 19h79"/>
      <path class="ai-authorizer" d="M779 168l40 17v20c0 20-12 33-40 46-28-13-40-26-40-46v-20z"/>
      <path class="ai-auth-check" d="m761 204 12 12 23-27"/>
    `)}
    <div class="ai-app-card">${fact('Nuevo cambio','Resumir un pedido','El asistente necesita consultar la API.')}</div>
    ${show(1,'ai-model-caption',fact('Salida del modelo','Propuesta de acción','Tratarla como entrada no confiable.'))}
    ${show(2,'ai-api-caption',fact('Límite de autoridad','La API autoriza','Valida el usuario y el pedido.'))}
  </figure>`;
}

export function aiGuardrails() {
  return `<figure class="rails-bench">
    ${svg('0 0 1420 463',`
      <path class="story-grid" d="M46 63h1328m-1328 270h1328"/>
      <path class="guard-floor" d="M108 256h1214l-38 19H70z"/>
      <path class="guard-track" d="M153 219h1129"/>
      ${line('M153 219h1113',2)}
      <path class="rail-obstacle rail-input" d="M382 237v-92h66v92m-81-92h97m-65 21v70m17-70v70m17-70v70"/>
      <path class="rail-obstacle rail-output" d="M684 154h71v86h-71zm8 18h54m-54 19h54m-54 19h54"/>
      <path class="rail-obstacle rail-action" d="M1005 151l41-19 41 19v43c0 22-15 39-41 49-26-10-41-27-41-49z"/>
      <path class="rail-action-tick" d="m1029 186 12 11 22-25"/>
      <g class="rail-packet"><rect x="-33" y="-19" width="66" height="38" rx="6"/><path d="M-20-6h39m-39 12h28"/></g>
    `)}
    ${show(0,'rail-caption input',fact('Entrada','Minimizar datos','Redacta datos ajenos al pedido.'))}
    ${show(1,'rail-caption output',fact('Salida','Validar formato y datos','Acepta el esquema esperado.'))}
    ${show(2,'rail-caption action',fact('Acción','Comprobar permisos','Bloquea herramientas fuera del alcance.'))}
    <p class="rail-disclaimer">Opciones de filtrado: NeMo Guardrails · Amazon Bedrock Guardrails</p>
  </figure>`;
}

export function aiGateway() {
  return `<figure class="gateway-map">
    ${svg('0 0 1420 447',`
      <circle class="router-rim" cx="690" cy="220" r="125"/><circle class="router-hub" cx="690" cy="220" r="97"/>
      <path class="router-wires" d="M93 220h477m235 0h105l90-103h229m-319 103 90 103h229"/>
      ${line('M93 220h477',0)}${line('M805 220h105l90-103h229',1)}
      <path class="router-spoke" d="M690 177v78m-32-22 32-56 31 56m-61-13h60"/>
      <path class="router-blocked" d="M1193 309v28m14-28v28"/>
      <g class="router-point"><rect x="-18" y="-10" width="36" height="20" rx="4"/><path d="M-9 0H9"/></g>
    `)}
    <div class="router-caller">${fact('Tráfico de IA','Aplicaciones','Identidad por cliente o equipo.')}</div>
    <figcaption class="router-caption">${label('Control central')}${fact('','AI Gateway','Autenticación · cuota · ruta')}</figcaption>
    ${show(1,'router-choice allowed',fact('Destino aprobado','Modelo A','Ruta por política y contexto.'))}
    ${show(2,'router-choice denied',fact('Fuera de política','Modelo B','Destino rechazado.'))}
    ${show(2,'router-note','Opciones: Azure API Management · Agent Router (antes Envoy AI Gateway)')}
  </figure>`;
}

export function aiEvals() {
  const cases = [
    ['Titular consulta su pedido','Permite lectura','esperado'],
    ['Usuario pide un pedido ajeno','Deniega acceso','esperado'],
    ['Entrada con dato sensible sintético','Redacta según política','esperado']
  ];
  return `<div class="eval-screen">
    <div class="eval-monitor">
      <div class="eval-heading">${label('Suite de evaluación')}${chip('orders-assistant · política 03')}</div>
      ${cases.map(([test, outcome, status],i)=>show(i,'eval-test',`<span>${test}</span><b>${outcome}</b><span class="eval-status">${status}</span>`)).join('')}
    </div>
    <div class="eval-verdict">
      ${show(0,'eval-check',fact('Antes de promover','Casos de regresión','Cambios de modelo, prompt o herramienta.'))}
      ${show(2,'eval-check',fact('En operación','Trazabilidad de decisión','Identidad, política, motivo y revisión.'))}
    </div>
  </div>`;
}

export function cncfStations(logos) {
  const areas = [
    ['Producir evidencia',[['Harbor','harbor'],['in-toto','in-toto'],['Notary Project','notary']],'Registro, atestación y firma.'],
    ['Admitir y aislar',[['Kyverno','kyverno'],['Kubescape','kubescape'],['SPIFFE / SPIRE','spiffe'],['Cilium','cilium']],'Políticas, postura, identidad y red.'],
    ['Detectar y responder',[['Falco','falco'],['OpenTelemetry','opentelemetry']],'Detección y correlación.']
  ];
  return `<div class="cncf-network">
    ${svg('0 0 1420 455',`
      <path class="story-grid" d="M42 60h1336m-1336 325h1336"/>
      <path class="cncf-trunk" d="M252 106v244m0-244h166m-166 122h166m-166 122h166"/>
      ${[106,228,350].map((y,i)=>`<circle class="cncf-node" cx="252" cy="${y}" r="10"/>${line(`M252 ${y}h166`,i)}`).join('')}
    `)}
    <div class="cncf-name">${label('CNCF')}<strong>Por<br>capacidad</strong></div>
    ${areas.map(([name,marks,caption],i)=>show(i,'cncf-stop stop-'+i,`<strong>${name}</strong><div>${marks.map(([label,key])=>tool(label,logos[key])).join('')}</div><span>${caption}</span>`)).join('')}
  </div>`;
}

export function chainRebuilt() {
  const parts = [
    ['plan','Diseño','Requisito','Cada cliente sólo ve sus pedidos.'],
    ['file','Entrega','Evidencia','Commit, pruebas, inventario y firma.'],
    ['run','Producción','Decisión','Digest admitido, señal y dueño.'],
    ['gate','Extensión IA','Misma autoridad','Acción aprobada por la API.']
  ];
  return `<figure class="rebuilt-chain">
    ${svg('0 0 1420 429',`
      <path class="story-grid" d="M55 71h1310m-1310 274h1310"/>
      <path class="rebuild-track" d="M92 183h1236"/>
      ${[103,453,803,1153].map((x,i)=>`<path class="rebuild-notch" d="M${x} 146v74"/>${line(`M${x} 183h${i===3?166:285}`,i)}`).join('')}
      <path class="rebuild-return" d="M1403 235v111H62v-47m-12 12 12-12 12 12"/>
      ${line('M1403 235v111H62v-47',3)}
    `)}
    ${parts.map(([symbol,k,title,text],i)=>show(i,'rebuilt-item item-'+i,glyph(symbol)+fact(k,title,text))).join('')}
    ${show(3,'rebuild-caption','Las señales reales vuelven al diseño y a las pruebas.') }
  </figure>`;
}

export function closureStamp() {
  return `<figure class="closing-stamp" aria-hidden="true">${svg('0 0 690 610',`
    <path class="stamp-grid" d="M47 102h590m-590 384h590M114 62v474m470-474v474"/>
    <circle class="stamp-ring rim" cx="351" cy="299" r="195"/>
    <circle class="stamp-ring" cx="351" cy="299" r="167"/>
    <path class="stamp-ticket" d="M209 167h221l61 62v194H209zm221 0v62h61M248 229h109m-109 33h189m-189 30h118"/>
    <path class="stamp-check" pathLength="1" d="m286 347 42 40 93-103"/>
  `)}</figure>`;
}

export function oauthPassport() {
  return `<figure class="oauth-demo">
    <div class="oauth-issuer">${fact('Servidor de autorización','Emite un access token','El cliente pide acceso de lectura.')}</div>
    <div class="oauth-pass">
      ${label('JWT de acceso · ejemplo')}
      <dl><div><dt>aud</dt><dd>orders-api</dd></div><div><dt>scope</dt><dd>orders:read</dd></div><div><dt>exp</dt><dd>Vigencia limitada</dd></div></dl>
    </div>
    ${svg('0 0 1420 448',`
      <path class="oauth-lane" d="M480 201h88m270 0h113"/>
      ${line('M480 201h88',0)}${line('M838 201h113',1)}
      <path class="oauth-reader" d="M573 129h267v144H573zM551 153v-46h46m218 0h46v46m0 96v46h-46m-218 0h-46v-46"/>
      <path class="oauth-pixels" d="M611 155v91m25-91v91m48-91v91m18-91v91m48-91v91m39-91v91m22-91v91"/>
      <path class="oauth-beam" d="M573 157h267"/>
    `)}
    ${show(1,'oauth-reader-label',fact('API de pedidos','Valida el token','Firma, emisor, audiencia y vigencia.'))}
    ${show(2,'oauth-result',fact('Regla de acceso','Comprueba el permiso','Scope de lectura y titularidad del pedido.'))}
    <figcaption>Keycloak · ejemplo de servidor de autorización</figcaption>
  </figure>`;
}

export function meshLink() {
  return `<figure class="mesh-link">
    ${svg('0 0 1420 447',`
      <path class="story-grid" d="M53 106h1314m-1314 334h1314"/>
      <path class="mesh-braid" d="M318 193c96-104 171-104 270 0s171 104 244 0 171-104 270 0m-784 0c96 104 171 104 270 0s171-104 244 0 171 104 270 0"/>
      ${line('M318 193c96-104 171-104 270 0s171 104 244 0 171-104 270 0',1)}
      ${line('M1102 193c-99 104-197 104-270 0s-145-104-244 0-174 104-270 0',1)}
      <path class="mesh-policy" d="M710 113v161m-17-140h34m-34 118h34"/>
      ${[318,1102].map(x=>`<path class="mesh-peer" d="M${x} 151l37 21v42l-37 21-37-21v-42zM${x-13} 193l9 10 18-21"/>`).join('')}
    `)}
    <div class="mesh-label mesh-client">${fact('Identidad del workload','orders-web','Invoca GET /orders/:id.')}</div>
    <div class="mesh-label mesh-server">${fact('Identidad del workload','orders-api','Recibe tráfico de la malla.')}</div>
    ${show(1,'mesh-channel',fact('Canal mTLS','Autenticación mutua','Cifra el tráfico entre los dos servicios.'))}
    ${show(2,'mesh-rule',fact('Política de la malla','Autoriza la llamada','Sólo el workload permitido y la operación habilitada.'))}
    <figcaption>Service mesh · Istio o Linkerd</figcaption>
  </figure>`;
}

export function trustDecisions() {
  const decisions = [
    ['01 · Cliente','OAuth 2.0','Audiencia y scope para la API.'],
    ['02 · Servicio','Red y mTLS','Cilium segmenta. La malla verifica identidad.'],
    ['03 · Recurso','Autorización de la API','El cliente puede leer este pedido concreto.']
  ];
  return `<figure class="trust-decisions">
    ${svg('0 0 1420 463',`
      <path class="story-grid" d="M75 60h510m-510 309h510"/>
      <path class="trust-spine" d="M301 38v349"/>
      ${[98,204,310].map((y,i)=>`<path class="trust-plate plate-${i}" d="M117 ${y}l184-43 184 43-184 44zM117 ${y}v14l184 44 184-44v-14"/>
        <circle class="trust-probe" cx="301" cy="${y}" r="12"/>
        ${line(`M313 ${y}H560l67-19h99`,i)}`).join('\n      ')}
    `)}
    ${decisions.map(([tag,title,copy],i)=>show(i,'trust-check check-'+i,fact(tag,title,copy))).join('')}
    ${show(2,'trust-foot','Las señales de Falco ayudan a investigar y ajustar la política.')}
  </figure>`;
}

export function agenticReview() {
  return `<figure class="agentic-review">
    ${svg('0 0 1420 475',`
      <path class="review-grid" d="M442 53v328m549-328v328M38 395h1344"/>
      <path class="review-wire" d="M374 105h36l90 98h40m-166 0h166m-166 98h36l90-98m442 0h78"/>
      ${line('M374 105h36l90 98h40',1)}
      ${line('M374 203h166',1)}
      ${line('M374 301h36l90-98',1)}
      ${line('M942 203h78',2)}
      <circle class="review-port" cx="500" cy="203" r="9"/>
    `)}
    <div class="review-inputs">
      <div>${fact('Requisito','Sólo el titular','Regla de autorización del pedido.')}</div>
      <div>${fact('Cambio','Consulta de pedidos','Código y contrato de la API.')}</div>
      <div>${fact('Pruebas','Suite de permisos','Resultados de regresión en CI.')}</div>
    </div>
    <div class="review-lens">
      ${label('Revisión contextual con IA')}
      <strong>¿El cambio preserva la regla del titular?</strong>
      ${show(1,'review-harness','El <b>harness</b> reúne el contexto y registra qué evidencia respalda la observación.')}
    </div>
    ${show(2,'review-output',fact('Decisión de AppSec','Validar el hallazgo','El equipo contrasta la observación con la suite y revisa cualquier corrección.'))}
    <figcaption class="review-footer"><b>SAST rápido en cada PR</b><span><b>AST agéntico selectivo</b> · Hallazgos confirmados · tiempo de revisión · costo por hallazgo útil</span></figcaption>
  </figure>`;
}
