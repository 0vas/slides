import {label,fact,show,svg,stroke,paper,icon,shell} from './visuals.mjs';

const note = (step,text,cls='beat-caption') => show(step,cls,text);
const line = (cue,step,html) => `<span class="code-row" data-show="${step}" data-cue="${cue}">${html}</span>`;
const rail = (items,cls) => `<div class="${cls}">${items.map(([step,k,title,detail])=>show(step,'rail-item',`<div class="rail-copy" data-cue="${step}">${fact(k,title,detail)}</div>`)).join('')}</div>`;
const packet = (className='moving-slip') => `<g class="motion-slip ${className}"><rect x="-26" y="-14" width="52" height="28" rx="4"/><path d="M-16-4h26m-26 8h17"/></g>`;
const tokens=(values,cls='token-row')=>`<div class="${cls}">${values.map(([n,text])=>show(n,'beat-token',text)).join('')}</div>`;
const marks=(points,cls='relay-node')=>points.map(([x,y,n])=>`<circle class="${cls}" cx="${x}" cy="${y}" r="10" data-cue="${n}"/>`).join('');

export function cover() {
  return `<div class="cover-copy"><p>De una duda de guardia a una guía reutilizable.</p>
      ${tokens([[1,'Encontrar'],[2,'Verificar'],[3,'Usar']],'cover-actions')}</div>
    <figure class="archive-cover" aria-label="Guía de guardia del servicio Pedidos">
      ${svg('0 0 728 650',`
        <path class="archive-grid" d="M45 118h633M45 516h633M120 46v550m470-550v550"/>
        <circle class="archive-orbit" cx="358" cy="334" r="251"/>
        <circle class="cover-radar loop" cx="358" cy="334" r="279"/>
        <path class="archive-outline dashed" d="M28 168h590l80 85v297H28z"/>
        ${stroke(1,'M42 558H183l80-80h213l91-91h117')}
      `)}
      <div class="archive-shadow"></div>
      <div class="archive-sheet sheet-back" aria-hidden="true"><i></i></div>
      <div class="archive-sheet sheet-middle" aria-hidden="true"><i></i></div>
      <div class="archive-sheet sheet-front">
        ${paper('Servicio Pedidos','Guía de guardia','Diagnóstico · escalamiento · validación')}
        ${note(1,'Fuente en Git','archive-tab')}${note(2,'Revisión confirmada','archive-seal')}
        ${note(3,'Lista para el traspaso','archive-docket')}
      </div>
    </figure>`;
}

export function manifesto() {
  return `<figure class="manifest-paper">
    <blockquote><span>«</span>Software funcionando sobre <em>documentación extensiva»</em></blockquote>
    <figcaption>Manifiesto por el Desarrollo Ágil de Software</figcaption>
    ${note(1,'La documentación también aporta valor.','manifest-margin')}
    ${show(2,'manifest-aside',`${label('Cuándo documentar')}
      ${tokens([[3,'Primer arranque'],[4,'Diagnóstico en guardia'],[5,'Traspaso del servicio']],'manifest-cases')}`)}
  </figure>`;
}

export function searchCost() {
  const stats=[['+400','Personas encuestadas'],['+90%','Busca información cada semana'],['+60%','Tarda 30 min o más']];
  return `<figure class="search-figure staged-stats">
    <div class="search-stats">${stats.map(([n,k],i)=>show(i+1,'stat-cut',`<strong>${n}</strong><p>${k}</p>`)).join('')}</div>
    ${note(0,'Tiempo buscando respuestas','search-question')}
    ${show(4,'search-model',`${label('Escenario mensual ilustrativo')}<div><span>400 personas × 0,5 h × 4 semanas</span>${note(5,'<strong>800 h</strong>','search-total')}</div>`)}
    <figcaption>Charla de 2024 · metodología sin documentar.</figcaption>
  </figure>`;
}

export function capture() {
  const path='M299 184H404l112 117h168l112-117h154';
  return `<figure class="capture-assembly">
    ${svg('0 0 1420 490',`
      <path class="motion-grid" d="M315 78h610M315 418h610M389 71v355m438-355v355"/>
      <path class="dash" d="${path}"/>
      ${stroke(1,'M299 184H404l112 117')}${stroke(2,'M516 301h168')}${stroke(3,'M684 301l112-117h154')}
      ${marks([[404,184,1],[684,301,2],[796,184,3]])}
      ${packet('capture-slip')}
    `)}
    <div class="assembly-chat">${label('Guardia · Pedidos')}<p>«¿Cuándo debo escalar?»</p></div>
    ${rail([[1,'Señal','Cola acumulada',''],[2,'Criterio','Umbral de escalamiento','']],'assembly-extract')}
    <div class="assembly-paper">
      ${label('Servicio Pedidos')}<b>Guía de guardia</b>
      ${note(3,'1. Comprueba la alerta.','document-line')}
      ${note(4,'2. Escala si supera el umbral.','document-line')}
      ${note(5,'Probada por otra persona','evidence-stamp')}
    </div>
  </figure>`;
}

export function layers() {
  const items=[
    ['Código','¿Qué devuelve?','Tipos y referencia generada.','code'],
    ['Operación','¿Cómo lo recupero?','README y runbook.','clock'],
    ['Diseño','¿Por qué esta arquitectura?','ADR y diagramas.','node'],
    ['Organización','¿Qué exige la política?','Estándares de APIs.','book']
  ];
  return `<figure class="shelf-scene">
    <div class="shelf-stack" aria-hidden="true">
      ${items.map(([name,,,glyph],i)=>`<div class="shelf-leaf leaf-${i}" data-cue="${i+1}"><div class="shelf-marker">${icon(glyph)}<span>${name}</span></div></div>`).join('')}
    </div>
    ${rail(items.map(([k,t,d],i)=>[i+1,k,t,d]),'shelf-list')}
    ${note(5,'Enlaza la fuente canónica.','shelf-rule')}
  </figure>`;
}

export function quadrant() {
  const rows=[
    ['','Tutorial','Levanta Pedidos por primera vez.'],
    ['','Guía práctica','Diagnostica la cola.'],
    ['','Explicación','Por qué el historial es inmutable.'],
    ['','Referencia','Campos y respuestas de la API.']
  ];
  return `<figure class="diataxis-compass">
    <div class="compass-columns"><span>Aprendizaje</span><span>Trabajo</span></div>
    <div class="compass-body">
      <div class="compass-rows"><span>Acción</span><span>Comprensión</span></div>
      <div class="quadrant-map">${rows.map(([k,t,d],i)=>show(i+1,'quadrant-cell',
        `<div data-cue="${i+1}">${fact(k,t,d)}</div>`)).join('')}</div>
    </div>
    ${note(5,'El runbook de guardia es una guía práctica.','diagram-bottom')}
  </figure>`;
}

export function applyDiataxis() {
  const types=[
    ['Pasos','Guía práctica','Diagnóstico y escalamiento'],
    ['Definición','Referencia','Métrica de cola y unidad'],
    ['Motivo','Explicación','Por qué se eligió ese umbral'],
    ['Ejercicio','Tutorial','Simulación de primera guardia']
  ];
  const routes=[
    'M391 207H543l218-111h82','M391 207H543l219-11h81',
    'M391 207H543l219 41h81','M391 207H543l219 133h81'
  ];
  return `<figure class="refile-board">
    <div class="refile-page">
      ${label('Página original')}<strong>Guardia de Pedidos</strong>
      ${types.map(([label],i)=>`<p data-cue="${i+1}">${label}</p>`).join('')}
    </div>
    ${svg('0 0 1420 470',`
      ${routes.map((path,i)=>`<path class="dash" d="${path}"/>${stroke(i+1,path)}`).join('')}
      ${routes.map((_,i)=>packet('refile-packet refile-packet-'+i)).join('')}
    `)}
    ${rail(types.map(([,name,title],i)=>[i+1,name,title,'']),'refile-list')}
    ${note(5,'El runbook abre con pasos y enlaza el resto.','diagram-bottom')}
  </figure>`;
}

export function roles() {
  const points=[[255,64,1],[421,219,2],[255,375,3],[89,219,4]];
  const path='M255 64Q421 64 421 219T255 375Q89 375 89 219T255 64';
  return `<div class="roles-map">
    <figure class="roles-disc" aria-hidden="true">${svg('0 0 555 445',`
      <ellipse class="role-ring" cx="255" cy="219" rx="185" ry="175"/>
      <ellipse class="role-ring inner" cx="255" cy="219" rx="129" ry="124"/>
      <path class="dash" d="M70 219h370M255 44v350"/>
      <path class="dash" d="${path}"/>
      <path class="roles-sheet-core" d="M206 151h70l27 27v111h-97zm70 0v27h27m-74 22h50m-50 20h58m-58 20h39"/>
      ${stroke(1,'M255 64Q421 64 421 219')}${stroke(2,'M421 219Q421 375 255 375')}
      ${stroke(3,'M255 375Q89 375 89 219')}${stroke(4,'M89 219Q89 64 255 64')}
      ${marks(points)}${packet('role-slip')}
    `)}</figure>
    ${rail([[1,'Lector','Reporta lo que falla',''],[2,'Creador','Registra la solución',''],[3,'Validador','El dueño prueba los pasos',''],[4,'Plataforma','Opera portal y permisos','']],'role-list expanded-roles')}
    ${note(5,'Dueño y respaldo visibles.','roles-conclusion')}
  </div>`;
}

export function lifecycle() {
  const stages=[['Captura','Duda o incidente','person'],['Valida','Otra persona prueba','check'],['Publica','URL y revisión','book'],['Mantiene','Actualiza o retira','clock']];
  return `<figure class="lifecycle-map lifecycle-move">
    ${svg('0 0 1420 439',`
      <path d="M177 117H1242h116q27 0 27 27v161H35V144q0-27 27-27h115" class="dash"/>
      ${stroke(1,'M177 117H532')}${stroke(2,'M532 117H887')}${stroke(3,'M887 117H1242')}
      ${stroke(4,'M1242 117h116q27 0 27 27v161H35')}
      ${stroke(5,'M35 305V144q0-27 27-27h115')}${packet('lifecycle-slip')}
    `)}
    <div class="lifecycle-stages">${stages.map(([t,d,g],i)=>show(i,'life-stage',icon(g)+fact('',t,d))).join('')}</div>
    ${note(4,'Cambio del servicio → revisión.','life-return')}
    ${note(5,'Los incidentes reinician el ciclo.','life-return life-last')}
  </figure>`;
}

export function architecture() {
  return `<figure class="architecture-map architecture-motion">
    ${svg('0 0 1420 460',`
      <path class="dash" d="M318 122h150l154 102h164m-468 99h150l154-99m164 0h275"/>
      ${stroke(1,'M318 122h150l154 102h164')}${stroke(2,'M318 323h150l154-99h164')}${stroke(5,'M786 224h275')}
      <path class="architecture-hub" d="m786 112 115 112-115 112-115-112z"/>
      <path class="architecture-check" d="m750 225 25 25 49-56" data-show="4"/>
      ${packet('arch-slip-main')}${packet('arch-slip-secondary')}
    `)}
    <div class="arch-src a">${fact('Junto al código','Repo del servicio','Guías por versión.')}</div>
    ${show(2,'arch-src b',fact('Transversal','Repo de estándares','Políticas transversales.'))}
    ${tokens([[1,'Git'],[3,'PR'],[4,'CI']],'architecture-steps')}
    ${show(5,'arch-dest',fact('Descubrimiento','Catálogo o portal','Publica con permisos.'))}
  </figure>`;
}

export function comparePlatforms() {
  const rows=[
    ['Licencia','Stack abierto · sin licencia por asiento.','Cloud Free · hasta 10 usuarios.'],
    ['Secretos','Gitleaks · repo y sitio generado.','Controles e integraciones según el plan.'],
    ['Personalización','Tema, navegación, búsqueda y CI.','Plantillas, macros y apps.'],
    ['Colaboración','PR y versiones junto al código.','Coedición e historial por página.']
  ];
  return `<figure class="compare-sheet">
    <div class="compare-head"><span></span><strong>Docs as Code</strong><strong>Confluence</strong></div>
    ${rows.map(([k,docs,wiki],i)=>show(i+1,'compare-row',`
      <div class="compare-cells" data-cue="${i+1}">${label(k)}<p>${docs}</p><p>${wiki}</p></div>`)).join('')}
    ${note(5,'Sin licencia por asiento. Presupuesta CI, alojamiento y soporte.','compare-verdict')}
  </figure>`;
}

export function artifacts() {
  const items=[
    ['README.md','Orientar','Arranque local y enlaces.','book'],
    ['openapi.yaml','Describir la interfaz','Operaciones y contratos.','code'],
    ['adr/0004.md','Registrar una decisión','Alternativas y consecuencias.','node'],
    ['docs/guardia.md','Guiar una tarea','Precondiciones y verificación.','route']
  ];
  return `<figure class="artifact-folio">
    <div class="folio-cover">${paper('Repositorio · Pedidos','Una fuente por pieza','')}</div>
    <div class="artifact-tabs">${items.map(([k,t,d,g],i)=>show(i+1,'artifact-tab',
      `<div data-cue="${i+1}">${icon(g)}<code>${k}</code><div>${fact('',t,d)}</div></div>`
    )).join('')}</div>
    ${note(5,'El portal enlaza la versión canónica.','artifact-rule')}
  </figure>`;
}

export function metadata() {
  return `<div class="review-layout metadata-layout code-choreography">
    ${shell('docs/guardia.md',`
      ${line(0,0,'<span class="comment">---</span>')}${line(1,1,'title: <b>Diagnóstico de cola acumulada</b>')}
      ${line(2,2,'owner: equipo-pedidos')}${line(3,3,'audience: guardia')}
      ${line(4,4,'status: vigente')}${line(5,5,'review_by: 2027-02-01')}${line(-1,0,'<span class="comment">---</span>')}`)}
    ${rail([[1,'','Tarea que resuelve',''],[2,'','Quién responde',''],[3,'','Para quién sirve',''],[4,'','Estado de la guía',''],[5,'','Cuándo revisar','']],'code-notes compact-notes')}
  </div>`;
}

export function review() {
  return `<div class="review-layout code-choreography">
    <div>
    ${shell('.github/CODEOWNERS',`
      ${line(0,0,'<span class="comment"># Dueños por ruta en el repo</span>')}
      ${line(2,1,'/docs/pedidos/  <b>@org/equipo-pedidos</b>')}
      ${line(3,3,'/estandares/    <b>@org/plataforma</b>')}`)}
    ${tokens([[1,'PR abierto'],[4,'Revisión registrada'],[5,'Regla de merge cumplida']],'code-tags')}
    </div>
    ${rail([[1,'','Abre el PR',''],[2,'','Pide revisión a Pedidos',''],[3,'','Estándares → Plataforma',''],[4,'','Prueba los pasos',''],[5,'','El ruleset exige aprobación','']],'code-notes compact-notes')}
  </div>`;
}

export function gates() {
  const stages=[['1','Validar','Texto, enlaces, metadatos y secretos.'],['2','Compilar','Build estricto del sitio.'],['3','Revisar','Vista previa con acceso.'],['4','Aprobar','El dueño prueba la tarea.']];
  return `<figure class="press-line">
    ${svg('0 0 1420 480',`
      <path class="press-belt" d="M59 259h1302M59 282h1302"/>
      <path class="dash" d="M59 320h1302"/>
      ${stroke(1,'M59 259h250')}${stroke(3,'M309 259H658')}${stroke(4,'M658 259H1005')}${stroke(5,'M1005 259H1361')}
      ${[309,658,1005,1290].map((x,i)=>`<path class="press-machine" d="M${x-46} 257v-89h92v89m-83-68h74"/><rect class="press-ram" x="${x-22}" y="192" width="44" height="18" rx="2" data-cue="${[1,3,4,5][i]}"/>`).join('')}
      <path class="press-stop" d="M292 215v60m29-60v60" data-cue="2"/>
      ${packet('press-slip')}
    `)}
    <div class="press-labels">${stages.map(([n,t,d],i)=>show([1,3,4,5][i],'press-label',fact('Control '+n,t,d))).join('')}</div>
    ${note(0,'PR de documentación','diagram-bottom')}
    ${note(2,'Enlace roto. CI bloqueado.','press-reject')}
    ${note(3,'✓ Enlace corregido.','press-recovery')}
    ${note(5,'Revisión aprobada.','press-verdict')}
  </figure>`;
}

export function builder() {
  return `<div class="build-demo code-choreography build-theatre">
    <div>
    ${shell('mkdocs.yml',`
      ${line(0,0,'site_name: <b>Ingeniería</b>')}${line(1,1,'theme:')}
      ${line(1,1,'  name: material')}${line(2,2,'nav:')}
      ${line(2,2,'  - Guardia: guardia.md')}`)}
    ${show(3,'build-command','<code>$ mkdocs build --strict</code>')}
    ${note(4,'✓ Build completo · salida en site/','build-result')}
    </div>
    ${show(5,'docs-preview',`<div class="preview-bar">Ingeniería <span>Pedidos / Operación</span></div>
      <div>${label('Guía de guardia')}<strong>Comprueba la señal.</strong><p>Revisa la alerta y el umbral.</p><small>Dueño · Equipo Pedidos</small></div>`)}
  </div>`;
}

export function publishing() {
  const opts=[
    [1,'Sitio estático','MkDocs + Material · Zensical','Material: soporte crítico hasta mayo de 2027.','book'],
    [2,'Portal de producto','Docusaurus','Docs por versión.','box'],
    [3,'Catálogo de servicios','Backstage TechDocs','Guía junto al servicio.','node']
  ];
  return `<figure class="publishing-press">
    <div class="press-dial" aria-hidden="true">
      ${svg('0 0 500 443',`
        <circle class="dial-ring" cx="250" cy="214" r="161"/><circle class="dial-ring inner" cx="250" cy="214" r="127"/>
        <path d="M250 47v21m146 137h20m-166 155v21m-166-176h20" class="dial-ticks"/>
        <path class="dial-needle" d="m248 205 10 7 87-74-19 20-68 64-10 0-8-8z"/>
        <circle class="dial-pivot" cx="250" cy="214" r="13"/>
      `)}
      <span class="dial-mode" data-cue="0">¿Dónde empieza la búsqueda?</span>
      <span class="dial-mode" data-cue="1">Markdown</span><span class="dial-mode" data-cue="2">Producto</span>
      <span class="dial-mode" data-cue="3">Servicio</span><span class="dial-mode" data-cue="4">Criterios</span>
      <span class="dial-mode" data-cue="5">Ruta elegida</span>
    </div>
    <div class="publishing-plates">${opts.map(([n,k,t,d,g])=>show(n,'publishing-plate',`
      <div data-cue="${n}">${icon(g)}<div>${fact(k,t,d)}</div></div>`)).join('')}</div>
    ${note(4,'Búsqueda · versiones · permisos · mantenimiento','publish-check')}
    ${note(5,'Pedidos → catálogo de servicios.','publish-result')}
  </figure>`;
}

export function release() {
  return `<figure class="release-pair release-press">
    <div class="release-commit">${label('Cambio · Pedidos')}<strong>v1.4</strong>${note(1,'<code>+ alerta de cola acumulada</code>','release-change')}</div>
    <div class="release-doc">${label('Mismo PR · docs/guardia.md')}<strong>Guía actualizada</strong>
      ${note(2,'+ Primer diagnóstico','diff-line')}${note(3,'+ Criterio para escalar','diff-line')}${note(4,'+ Verificación','diff-line')}
    </div>
    ${show(5,'release-stamp',icon('check')+'<span>Probado en guardia</span>')}
  </figure>`;
}

export function migration() {
  return `<figure class="migration-board sorting-board">
    <div class="migration-in">${icon('box')}${fact('Entrada','Inventario','Dueño · alcance · uso · acceso')}</div>
    ${svg('0 0 1420 465',`
      <path class="dash" d="M323 212h219l151-122h157m-308 122h308m-308 0 151 122h157"/>
      ${stroke(1,'M323 212H542')}${stroke(2,'M542 212l151-122h157')}${stroke(3,'M542 212h308')}
      ${stroke(4,'M542 212l151 122h157')}${marks([[542,212,1],[848,90,2],[848,212,3],[848,334,4]])}
      ${packet('migration-slip')}${packet('migration-redirect')}${packet('migration-retire')}
    `)}
    ${rail([[2,'Uso frecuente o alto riesgo','Migrar','Con dueño y acceso.'],[3,'Fuente duplicada','Redirigir','Enlaza la fuente canónica.'],[4,'Vencido o fuera de alcance','Retirar','Valida la retención.']],'migration-out')}
    ${note(5,'Antes del corte, prueba acceso y búsqueda.','diagram-bottom')}
  </figure>`;
}

export function pilot() {
  const plan=[
    ['Prioriza','Una tarea recurrente.'],['Mide','Línea base comparable.'],
    ['Configura','Repo, CI y responsable.'],['Publica','Primera guía completa.'],
    ['Prueba','Otra persona usa la guía.'],['Decide','Mejoras al backlog.']
  ];
  return `<figure class="timeline-plan">
    <div class="timeline-months"><span>Días 1–30</span><span>Días 31–60</span><span>Días 61–90</span></div>
    <div class="timeline-wire" aria-hidden="true"><i></i></div>
    <div class="timeline-steps">${plan.map(([t,d],i)=>show(i,'timeline-step',`<div data-cue="${i}"><i></i>${fact('',t,d)}</div>`)).join('')}</div>
    ${note(5,'Continúa si otra persona resuelve la tarea.','diagram-bottom')}
  </figure>`;
}

export function scorecard() {
  const measures=[
    ['Éxito','Tareas resueltas / intentos','check'],
    ['Tiempo','p50 y p90 hasta resolver','clock'],
    ['Vigencia','Guías críticas al día / total','book'],
    ['Contribución','Autores y tiempo de revisión','person']
  ];
  return `<figure class="metric-console">
    <div class="metric-dial" aria-hidden="true">
      ${svg('0 0 475 440',`
        <circle class="metric-ring" cx="238" cy="220" r="157"/>
        <circle class="metric-ring inner" cx="238" cy="220" r="110"/>
        <path class="metric-grid" d="M238 45v350M63 220h350"/>
      `)}
      <div class="metric-orbit">${measures.map(([,,glyph],i)=>`
        <span class="metric-marker marker-${i}" data-cue="${i+1}">${icon(glyph)}</span>`).join('')}
      </div>
      <div class="metric-center">${icon('search')}</div>
    </div>
    <div class="metric-list">${measures.map(([title,reading,glyph],i)=>show(i+1,'metric-reading',
      `<div data-cue="${i+1}">${icon(glyph)}<strong>${title}</strong><span>${reading}</span></div>`)).join('')}</div>
    ${note(5,'Misma tarea. Cuenta los abandonos.','diagram-bottom')}
  </figure>`;
}

export function maintenance() {
  return `<figure class="cost-balance">
    ${svg('0 0 1420 472',`
      <path class="motion-grid" d="M29 405h1362"/>
      <path class="balance-base" d="m703 159 110 235H593z"/>
      <path class="balance-scale" d="M453 156h500m-458 0v124m417-124v124m-482 0h132m286 0h132"/>
      <circle class="balance-pin" cx="703" cy="156" r="11"/>
    `)}
    ${rail([[1,'Costo inicial','Migrar','Inventario e integración.'],[2,'Costo recurrente','Operar','Revisiones y alojamiento.']],'balance-costs')}
    ${rail([[3,'Primero el riesgo','Guía crítica vencida','Verifica con el dueño.'],[4,'Luego la demanda','Búsqueda sin resultado','Ajusta la búsqueda.']],'balance-choices')}
    ${note(5,'Conserva la fuente canónica.','diagram-bottom')}
  </figure>`;
}

export function retrieval() {
  return `<figure class="retrieval-board">
    ${svg('0 0 1420 485',`
      <path class="dash" d="M248 173h923M516 173v147h323"/>
      ${stroke(1,'M248 173h227')}${stroke(2,'M475 173h127')}${stroke(3,'M516 173v147h303')}
      ${stroke(4,'M602 173h265')}${stroke(5,'M867 173h304')}
      <path class="trust-frame" d="m536 96 80 26v41c0 36-39 62-80 84-40-22-80-48-80-84v-41z"/>
      ${packet('rag-slip')}${packet('rag-denied')}
    `)}
    <div class="retrieval-query">${fact('Lector · Soporte','¿Cómo escalo una alerta?','')}</div>
    ${show(1,'retrieval-index',fact('Índice','Fuente + revisión','Estado y clasificación.'))}
    ${show(2,'retrieval-acl',fact('Control de acceso','Evalúa el permiso','Antes de crear el contexto.'))}
    ${note(3,'× Fuente restringida','retrieval-block')}
    ${show(4,'retrieval-pass',fact('Contexto','Guía autorizada',''))}
    ${show(5,'retrieval-answer',`${label('Respuesta con cita')}<strong>Comprueba la señal.</strong><p>Fuente · Guía de guardia v1.4</p>`)}
  </figure>`;
}

export function evals() {
  const cases=[
    ['Guía vigente','Cita la fuente','check'],
    ['Guía retirada','Deriva al dueño','route'],
    ['Sin permiso','Restringe el acceso','check'],
    ['Cita desalineada','Verifica la versión','book']
  ];
  return `<figure class="eval-desk">
    <div class="eval-board">
      <div class="eval-head"><span>Caso de prueba</span><span></span><span>Respuesta esperada</span></div>
      ${cases.map(([test,outcome,glyph],i)=>show(i+1,'eval-lane',
        `<div data-cue="${i+1}"><strong>${test}</strong><i aria-hidden="true"></i><span>${icon(glyph)}${outcome}</span></div>`)).join('')}
    </div>
    ${note(5,'Citas correctas · rechazos adecuados · latencia · costo','diagram-bottom')}
  </figure>`;
}

export function transfer() {
  const path='M424 191H1123h209v174H680';
  return `<figure class="transfer-board transfer-theatre">
    <div class="transfer-page">${paper('Pedidos · versión 1.4','Guía de guardia','Diagnóstico y escalamiento.')}</div>
    ${svg('0 0 1420 448',`
      <path class="dash" d="${path}"/>
      ${stroke(1,'M424 191H687')}${stroke(2,'M687 191h220')}${stroke(3,'M907 191h216')}
      ${stroke(4,'M1123 191h209v174')}${stroke(5,'M1332 365H680')}
      ${marks([[687,191,1],[907,191,2],[1123,191,3],[1332,365,4],[680,365,5]])}${packet('transfer-slip')}
    `)}
    ${tokens([[1,'Localiza'],[2,'Comprueba versión'],[3,'Ejecuta la tarea']],'handoff-tags')}
    ${show(4,'handoff-proof',fact('Guardia entrante','Comprueba el diagnóstico','Siguiente paso y contacto.'))}
    ${note(5,'Devuelve la mejora al PR.','transfer-feedback')}
  </figure>`;
}

export function closing() {
  return `<div class="closing-copy"><p>Prueba la guía con otra persona.</p>
      ${tokens([[1,'Una tarea'],[2,'Un dueño'],[3,'Una prueba']],'cover-actions')}</div>
    <figure class="closing-art" aria-hidden="true">${svg('0 0 657 626',`
      <circle class="archive-orbit" cx="365" cy="301" r="218"/>
      <path class="archive-grid" d="M70 128h519M70 476h519M162 46v521m381-521v521"/>
      <path class="closing-page" d="M226 130h214l68 68v261H226zm214 0v68h68"/>
      ${stroke(1,'M253 213h152')}${stroke(2,'M253 246h207')}
      <path class="closing-tick" pathLength="1" d="m292 359 53 54 107-118" data-from="3"/>
    `)} </figure>`;
}
