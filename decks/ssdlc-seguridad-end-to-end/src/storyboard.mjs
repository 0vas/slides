import {
  closedLoop, clusterMap, codeGlass, coverArt, decisionTrack, dependencyGraph, fact,
  gateIllustration, imageStack, inspector, label, lifecycle, show, telemetry, testChamber, threatMap, tool, toolRow
} from './illustrations.mjs';
import {
  agenticReview, aiEvals, aiGateway, aiGuardrails, aiTrust, blueprintRender, chainRebuilt, closureStamp,
  cncfStations, meshLink, oauthPassport, orderAuthorization, outsideTest, podArmor, pushBarrier, shiftTiming,
  startChange, supplySeal, trustDecisions
} from './story-art.mjs';

const sources = {
  ssdf: ['NIST SP 800-218 · SSDF', 'https://csrc.nist.gov/pubs/sp/800/218/final'],
  threat: ['OWASP Threat Dragon', 'https://owasp.org/projects/threat-dragon'],
  asvs: ['OWASP ASVS', 'https://asvs.owasp.org/'],
  codeql: ['GitHub Code scanning', 'https://docs.github.com/en/code-security/concepts/code-scanning/code-scanning'],
  ghSecrets: ['GitHub Secret scanning', 'https://docs.github.com/en/code-security/concepts/secret-security/secret-scanning'],
  snyk: ['Snyk CLI · Capacidades', 'https://docs.snyk.io/developer-tools/snyk-cli/getting-started-with-the-snyk-cli'],
  leaks: ['Gitleaks', 'https://github.com/gitleaks/gitleaks'],
  syft: ['Anchore Syft', 'https://github.com/anchore/syft'],
  trivy: ['Trivy · Container Image', 'https://trivy.dev/docs/latest/target/container_image/'],
  slsa: ['SLSA · Build Provenance', 'https://slsa.dev/spec/v1.2/build-provenance'],
  sigstore: ['Sigstore · Verificación', 'https://docs.sigstore.dev/cosign/verifying/verify/'],
  policyController: ['Sigstore Policy Controller', 'https://docs.sigstore.dev/policy-controller/overview/'],
  zap: ['ZAP · Baseline Scan', 'https://www.zaproxy.org/docs/docker/baseline-scan/'],
  iast: ['Contrast Assess', 'https://docs.contrastsecurity.com/en/assess.html'],
  psa: ['Kubernetes · Pod Security Admission', 'https://kubernetes.io/docs/concepts/security/pod-security-admission/'],
  kube: ['Kubernetes · Security Checklist', 'https://kubernetes.io/docs/concepts/security/security-checklist/'],
  nets: ['Kubernetes · NetworkPolicy', 'https://kubernetes.io/docs/concepts/services-networking/network-policies/'],
  cilium: ['Cilium · Network Policy', 'https://docs.cilium.io/en/stable/security/policy/'],
  hubble: ['Cilium · Hubble', 'https://docs.cilium.io/en/stable/observability/hubble/'],
  oauthBcp: ['IETF RFC 9700 · OAuth 2.0', 'https://www.rfc-editor.org/rfc/rfc9700.html'],
  oauthJwt: ['IETF RFC 9068 · JWT de acceso', 'https://www.rfc-editor.org/rfc/rfc9068.html'],
  keycloak: ['Keycloak · OAuth / OIDC', 'https://www.keycloak.org/securing-apps/oidc-layers'],
  istio: ['Istio · Seguridad', 'https://istio.io/latest/docs/concepts/security/'],
  linkerd: ['Linkerd · mTLS', 'https://linkerd.io/docs/features/automatic-mtls/'],
  zeroTrust: ['NIST SP 800-207 · Zero Trust', 'https://csrc.nist.gov/pubs/sp/800/207/final'],
  zeroCloud: ['NIST SP 800-207A · Cloud native', 'https://csrc.nist.gov/pubs/sp/800/207/a/final'],
  kyverno: ['Kyverno · ImageValidatingPolicy', 'https://kyverno.io/docs/policy-types/image-validating-policy/'],
  falco: ['Falco', 'https://falco.org/docs/'],
  tetragon: ['Tetragon', 'https://tetragon.io/docs/'],
  semgrep: ['Semgrep · Taint analysis', 'https://docs.semgrep.dev/writing-rules/data-flow/taint-mode/overview'],
  osv: ['OSV-Scanner', 'https://google.github.io/osv-scanner/'],
  kev: ['CISA KEV', 'https://www.cisa.gov/known-exploited-vulnerabilities-catalog'],
  epss: ['FIRST · EPSS', 'https://www.first.org/epss/'],
  push: ['GitHub · Push protection', 'https://docs.github.com/en/code-security/concepts/secret-security/push-protection'],
  trivyConfig: ['Trivy · Misconfiguration', 'https://trivy.dev/docs/latest/scanner/misconfiguration/'],
  zapAuth: ['ZAP · Authentication', 'https://www.zaproxy.org/docs/desktop/start/features/authentication/'],
  zapAPI: ['ZAP · OpenAPI Support', 'https://www.zaproxy.org/docs/desktop/addons/openapi-support/'],
  burp: ['PortSwigger · Burp Suite DAST', 'https://portswigger.net/burp/documentation/dast'],
  appscan: ['HCL · AppScan IAST', 'https://help.hcl-software.com/appscan/360/2.1.0/appseccloud_iast_workflow.html'],
  agenticAst: ['Gartner · Agentic AST (2026)', 'https://www.gartner.com/en/documents/7965673'],
  semgrepAi: ['Semgrep · Multimodal', 'https://docs.semgrep.dev/semgrep-multimodal/overview'],
  api: ['OWASP API Security', 'https://owasp.org/API-Security/'],
  mastg: ['OWASP MASTG', 'https://mas.owasp.org/MASTG/'],
  fuzz: ['LLVM libFuzzer', 'https://llvm.org/docs/LibFuzzer.html'],
  escape: ['Kubescape · Docs', 'https://kubescape.io/docs/'],
  cncf: ['CNCF · Directorio de proyectos', 'https://www.cncf.io/projects/'],
  aiProfile: ['NIST AI RMF · GenAI Profile', 'https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence'],
  aiInjection: ['OWASP GenAI · Prompt Injection', 'https://genai.owasp.org/llmrisk/llm01-prompt-injection/'],
  aiAgency: ['OWASP GenAI · Excessive Agency', 'https://genai.owasp.org/llmrisk/llm062025-excessive-agency/'],
  nemo: ['NeMo · Guardrail Types', 'https://docs.nvidia.com/nemo/guardrails/about-nemo-guardrails-library/rail-types'],
  bedrock: ['Amazon Bedrock · Guardrails', 'https://docs.aws.amazon.com/bedrock/latest/userguide/guardrails.html'],
  gateway: ['Agent Router · Docs', 'https://theagentrouter.ai/docs/'],
  azure: ['Azure APIM · AI gateway', 'https://learn.microsoft.com/en-us/azure/api-management/genai-gateway-capabilities']
};
const encode = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const link = ([name,url]) => `<a href="${encode(url)}" target="_blank" rel="noopener">${encode(name)} ↗</a>`;
const cite = (...keys) => keys.map(key=>link(sources[key])).join('<span>·</span>');
const p = text => `<p>${text}</p>`;

const talks = [
  ['2026 / Ponencia','DevOpsDays Buenos Aires','Construyendo un framework de Platform Engineering: de silos DevSecOps a X-as-a-Service'],
  ['2026 / Ponencia','DevOpsDays Medellín','Números Bonitos, Madurez Falsa'],
  ['2025 / Ponencia','Agile Summit','Más allá de DevOps: InnerSource como catalizador de la agilidad'],
  ['2025 / Ponencia','DevOpsDays Lima','Las Mentiras de las Métricas: Midiendo sin Caer en Trampas'],
  ['2025 / Ponencia','InnerSource Summit','Building Bridges: Scaling InnerSource'],
  ['2025 / Ponencia','DevOpsDays Santiago','La Evolución del Open Source en la Cultura Empresarial'],
  ['2024 / Ponencia','DevSecOps Fest','Gestionando el conocimiento con Documentation as Code'],
  ['2024 / Ponencia','DevOpsDays Medellín','Adopción de GenAI para revolucionar el desarrollo de software'],
  ['2024 / Entrevista','GitHub · YouTube','Impulsando la productividad del desarrollador con GitHub Copilot']
];

function profile(speaker, qr, portrait) {
  const cards = talks.map(([date, event, title], i) =>
    `<article class="bio-talk" data-position="${['active','next'][i] ?? 'off'}" aria-hidden="${i !== 0}">${fact(date,event,title)}</article>`).join('');
  const education = [
    ['UNI','Ingeniería de Sistemas · Primer puesto'],
    ['MIT Professional Education','Programa de IA agéntica'],
    ['Hanyang Cyber University','Ingeniería de IA · En curso']
  ].map(([school,subject]) => `<div><strong>${school}</strong><p>${subject}</p></div>`).join('');
  return `<div class="bio-grid">
    <div class="bio-info">
      <div class="bio-identity">
        <figure class="bio-photo"><img src="${portrait}" alt="Retrato de Oscar Lobaton Salas"></figure>
        <div class="bio-role-block"><p class="bio-role"><b>${encode(speaker.headline)}</b> · ${encode(speaker.organization)}</p>${label(encode(speaker.roles[0]))}</div>
      </div>
      <div class="bio-columns">
        <div class="bio-education">${label('Formación')}${education}</div>
        <div class="bio-talks">${label('Charlas y comunidad')}<div class="bio-talk-stack" role="group" aria-roledescription="carrusel" aria-label="Charlas y participaciones">${cards}</div></div>
      </div>
      ${link(['0vas.com','https://0vas.com/'])}
    </div>
    <div class="bio-contact"><h3>Sigamos<br>conversando.</h3><a class="qr" href="${encode(speaker.linkedin.url)}" target="_blank" rel="noopener">
      <img width="318" height="318" src="${qr}" alt="Código QR del perfil de Oscar en LinkedIn"><b>LinkedIn ↗</b><span>@oscarlobatons</span></a>
    </div>
  </div>`;
}

const chapters = ['Apertura','01 / El cambio y su riesgo','02 / Código y build','03 / Verificar y decidir','04 / Kubernetes y runtime','05 / El cambio incorpora IA','06 / Cerrar el circuito'];

function scene(title, heading, chapter, tag, theme, layout, steps, body, note, source, continuity = '') {
  return { title, heading, chapter:chapters[chapter], tag, theme, layout, steps, body, note, source, continuity };
}

function dependencyEvidence(logos) {
  return `<div class="dependency-evidence">
    <div class="dependency-visual">${dependencyGraph()}</div>
    <div class="dependency-message">
      ${fact('Raíz del control','Lo importado también llega a producción.','El lockfile muestra la versión directa e indirecta que se resolvió.')}
      ${show(1,'dependency-verdict',fact('Decisión','Actualizar, sustituir o aceptar con vigencia.','Cruza avisos, licencias, exposición y uso real.'))}
      ${toolRow([tool('Snyk',logos.snyk),tool('Snyk Open Source'),tool('OSV-Scanner')])}
    </div>
  </div>`;
}

function ociView(logos) {
  return `<div class="oci-view">
    <div class="oci-illustration">${imageStack()}</div>
    <div class="oci-caption">${label('Artefacto resultante')}<strong>Analiza el<br>digest exacto.</strong>
      <p>Escanea paquetes OS y de aplicación.</p>
      ${show(1,'oci-rescan','Reevalúa en el registry cuando cambian los avisos.')}
      ${toolRow([tool('Trivy'),tool('Snyk',logos.snyk),tool('Snyk Container')])}
    </div>
  </div>`;
}

export function storyboard({speaker, qr, portrait, logos}) {
  const tools = (...items) => toolRow(items.map(name=>tool(name)));
  return [
    scene('SSDLC · Seguridad de extremo a extremo','<span>SSDLC</span><span>Seguridad de<br><em>extremo a extremo.</em></span>',0,'La historia de un cambio','dark','cover',0,
      coverArt('opening')+`<div class="cover-copy">${p('De una API de pedidos a un asistente de IA. Sigue el cambio, sus controles y la evidencia que deja.')}${label(encode(speaker.name))}</div>`,
      'Abre con la pregunta: ¿qué podemos demostrar antes de dejar que un cliente vea un pedido? Seguiremos un cambio ficticio en una API de pedidos hasta su operación. Luego un asistente de IA reutiliza la misma API y vuelve a poner a prueba el límite de confianza.',cite('ssdf','aiProfile')),
    scene(speaker.name,'<span>Oscar</span><span>Lobaton Salas<em>.</em></span>',0,'Quién presenta','light','profile',0,profile(speaker,qr,portrait),
      'Presentación breve. Soy Oscar Lobaton Salas, SRE FDE en Cobre. El código QR lleva a mi LinkedIn y M pausa el carrusel. La fuente al pie corresponde al marco de la charla.','Marco técnico · '+cite('ssdf')),

    scene('Qué es un SSDLC','Seguridad incorporada <em>al ciclo de desarrollo.</em>',1,'Secure Software Development Lifecycle','light','change',2,startChange(),
      'SSDLC significa ciclo de desarrollo seguro. Integra requisitos, pruebas, políticas y respuesta con dueños y evidencias en el ciclo que ya usa el equipo. En el caso sintético, orders-api consulta un pedido. El requisito es que sólo el titular pueda verlo. Cada etapa produce una decisión o evidencia identificable. El SSDF de NIST aporta prácticas para integrar seguridad en distintos ciclos de trabajo.',cite('ssdf','asvs')),
    scene('El circuito del SSDLC','El cambio recorre <em>seis estaciones.</em>',1,'De Plan a Operate','light','life',3,lifecycle(),
      'Presenta los pares por avance. AST significa Application Security Testing. SAST analiza el código, DAST observa la app en ejecución desde fuera e IAST instrumenta la app bajo pruebas. SCA vigila componentes y se suma a secretos, IaC, imágenes y políticas. La señal de producción informa el próximo requisito. El recorrido admite iteración y controles en más de una etapa.',cite('ssdf','asvs','kube')),
    scene('Shift left · Atrapar señales antes','Shift left acerca <em>la corrección al cambio.</em>',1,'Por qué mover el feedback','dark','shift',2,shiftTiming(),
      'El mismo defecto de autorización tiene consecuencias distintas si lo descubren usuarios o el equipo lo detecta en un PR. Diseña el requisito temprano, revisa código y añade la prueba al PR. El contexto aún está fresco y el cambio no se ha propagado. La admisión y las señales de producción siguen cubriendo errores de configuración y riesgos que aparecen más tarde.',cite('ssdf','asvs')),
    scene('Plan · Amenazas y requisitos','El activo define <em>qué proteger.</em>',1,'Diseño de la API de pedidos','light','threat',1,
      threatMap()+`<div class="threat-tools">${tools('OWASP Threat Dragon','OWASP ASVS')}</div>`,
      'Traza actores, activos, flujos y límites de confianza. En el ejemplo, autenticar al cliente identifica quién es. Para cada pedido hay que autorizar si puede leerlo. Threat Dragon registra el modelo y ASVS ayuda a expresar requisitos verificables. Guarda propietario, criterio y prueba con cuentas sintéticas.',cite('threat','asvs')),

    scene('SAST · Del código al hallazgo','SAST sigue <em>el flujo en el código.</em>',2,'Raíz del control / análisis estático','dark','sast',2,
      inspector('sast-layout',codeGlass(),[
        [0,'Entrada','Localiza un flujo','Identifica el parámetro o la llamada.'],
        [1,'Control','Revisa la validación','Sigue la ruta hacia la operación.'],
        [2,'Evidencia','Devuelve una ubicación','Regla y contexto en el PR.']
      ],toolRow([tool('Snyk',logos.snyk),tool('Snyk Code'),tool('CodeQL'),tool('Semgrep')])),
      'La ilustración usa un flujo defensivo, no un hallazgo confirmado. Un motor puede aplicar patrones, tipos o análisis de datos según lenguaje. La misma regla puede cubrir distinto alcance entre motores. Configura reglas relevantes, prueba falsos positivos y registra ubicación y versión. La regla del titular se confirma con pruebas de negocio. Snyk y su logotipo son marcas de Snyk Ltd.',cite('codeql','semgrep','snyk')),
    scene('SCA · Directas y transitivas','SCA descubre <em>qué dependencias llegan.</em>',2,'Raíz del control / inventario resuelto','light','sca',1,dependencyEvidence(logos),
      'La composición incluye dependencias indirectas que el equipo no eligió explícitamente. Evalúa la resolución real según ecosistema y contrasta avisos y licencias. Para priorizar, combina severidad, exposición, alcance y señales como CISA KEV o EPSS. Si hay actualización, reejecuta pruebas y vincula la evidencia al nuevo artefacto.',cite('osv','snyk','kev','epss')),
    scene('Secretos · Push protection','Push protection <em>detiene el envío.</em>',2,'Raíz del control / evitar exposición','light','push',2,pushBarrier(),
      'El control en el servidor evalúa el push y bloquea secretos de patrones soportados según configuración. Gitleaks en local o CI y el análisis de historial complementan la cobertura. Corrige el cambio y vuelve a pasar el gate. Si el secreto estuvo expuesto, revócalo, rota consumidores y revisa uso. Usa ejemplos sintéticos y evita almacenar valores sensibles en reportes.',cite('push','ghSecrets','leaks')),
    scene('IaC · Fuente y configuración efectiva','Comprueba <em>lo que se va a desplegar.</em>',2,'Raíz del control / infraestructura declarativa','light','render',2,
      blueprintRender()+`<div class="render-tools">${tools('Snyk IaC','Trivy','Kyverno CLI')}</div>`,
      'El manifiesto fuente admite variantes. En CI analiza los archivos y el plan o render con los valores pertinentes según cobertura. Prueba políticas con fixtures positivos y negativos. En admisión la política evalúa el recurso solicitado. Un scanner de postura puede mirar el estado existente y la deriva. Vincula la decisión a versión de regla y objeto.',cite('snyk','trivyConfig','kyverno')),
    scene('Imagen OCI · Lo que se empaca','Escanea <em>el artefacto que sí viaja.</em>',2,'Raíz del control / paquetes en la imagen','dark','image-scan',1,ociView(logos),
      'El repositorio no describe por completo los paquetes del sistema base ni el contenido final de la imagen. Escanea el digest y la arquitectura que correspondan. Revisa cobertura de paquetes y avisos. Mantén la base aprobada, recompila para remediar y vuelve a evaluar los digests ya publicados cuando cambien los avisos.',cite('trivy','snyk'),'artefacto'),
    scene('Evidencia por digest · SBOM, procedencia y firma','El digest une <em>tres pruebas distintas.</em>',2,'Raíz del control / confianza del build','light','seal',2,supplySeal(logos),
      'El SBOM registra componentes. La procedencia vincula fuente, builder y artefacto. La firma acredita identidad y objeto de acuerdo con la política. Verifica el sujeto por digest y su identidad de confianza. Syft genera inventario. Cosign y Notation son opciones de firma con modelos de confianza compatibles según el stack.',cite('syft','slsa','sigstore'),'artefacto'),

    scene('DAST · Observación desde fuera','DAST mira <em>lo que responde la app.</em>',3,'Verify / trabajo en staging autorizado','dark','outside-test',2,outsideTest(),
      'La app en ejecución expone respuestas que un análisis estático no observa. DAST examina la superficie accesible en el entorno de prueba autorizado. Registra rutas y sesiones de prueba, y usa el contrato API para conocer cobertura. ZAP Baseline usa observación pasiva sobre las rutas recorridas. Burp Suite DAST es otra opción a evaluar por alcance, soporte y coste.',cite('zap','zapAuth','zapAPI','burp')),
    scene('IAST · Instrumentación bajo pruebas','IAST observa <em>el proceso por dentro.</em>',3,'Verify / ejecución instrumentada','light','iast',1,
      inspector('chamber-layout',testChamber(),[
        [0,'Estímulo','Ejecuta pruebas de integración','El equipo cubre rutas y estados.'],
        [1,'Instrumentación','Correlaciona operación y código','El agente aporta contexto de lo ejecutado.']
      ],tools('Contrast Assess','HCL AppScan IAST')),
      'IAST instrumenta un runtime compatible durante pruebas. Relaciona operaciones observadas con contexto y ubicación de código. Comprueba qué rutas se ejercitan, cobertura por stack, coste del agente y qué datos quedan en el reporte. Compleméntalo con SAST y DAST. En productos móviles elige pruebas con MASTG y considera fuzzing orientado a robustez donde el riesgo lo justifique.',cite('iast','appscan','mastg','fuzz')),
    scene('OAuth 2.0 · Acceso delegado','OAuth 2.0 <em>acota el acceso a la API.</em>',3,'Verify / token y permiso','dark','oauth',2,oauthPassport(),
      'OAuth 2.0 delega acceso a un recurso. OIDC añade autenticación para el cliente. En el ejemplo, el cliente de pedidos usa código de autorización con PKCE y presenta un access token JWT. La API valida firma, emisor, audiencia, expiración y scope, y comprueba la titularidad del pedido. Probar audiencia incorrecta, token vencido y scope insuficiente, además de los casos de la lámina siguiente. Los tokens opacos se pueden validar mediante introspección según la arquitectura.',cite('oauthBcp','oauthJwt','keycloak'),'permiso'),
    scene('API · Comprobar el permiso','Prueba el permiso <em>con dos identidades.</em>',3,'Verify / regla de negocio','light','access',2,orderAuthorization(),
      'El contrato OpenAPI documenta la interfaz. Para el mismo pedido sintético usa dos identidades de prueba: titular y no titular. Conserva el resultado esperado y observado ligado al build. El propósito es verificar la regla del producto que diseñamos al inicio. Registra qué operaciones y roles se ejercitaron. Usa tokens con el mismo scope para aislar la regla de titularidad.',cite('api','asvs'),'permiso'),
    scene('AST agéntico · Revisión de lógica de negocio','AST agéntico <em>revisa la intención del cambio.</em>',3,'Verify / IA para revisar software','light','agentic-ast',2,agenticReview(),
      'Gartner describe el AST agéntico como razonamiento de modelos dentro de un harness, un flujo estructurado que conserva el contexto y la evidencia. En el ejemplo, la revisión cruza el requisito del titular con el cambio y los resultados de regresión. AppSec confirma la observación, decide su prioridad y revisa cualquier corrección junto con el equipo. Semgrep Multimodal ilustra el triage contextual asistido por IA. Conserva SAST como control rápido por PR y pilota la revisión contextual en cambios críticos. Mide hallazgos adicionales confirmados, ruido, latencia, costo por hallazgo útil y capacidad de remediación. El extracto de Gartner plantea que la mitad de las organizaciones con un programa de AST combinará SAST con AST agéntico para 2028, como supuesto de planificación.',cite('agenticAst','asvs','semgrepAi')),
    scene('Política de AppSec · Hallazgo a decisión','El hallazgo <em>necesita una decisión.</em>',3,'Verify / criterios de promoción','light','decision',2,decisionTrack(),
      'Acuerda qué hallazgos bloquean por riesgo, confianza y contexto. Un riesgo alto nuevo y corroborado requiere remediación antes de promover. Una excepción tiene dueño, vencimiento, mitigación y alcance. El resto se prioriza con SLA. Registra fallos de herramientas aparte y conserva la razón de la decisión.',cite('ssdf','asvs')),

    scene('Admisión en Kubernetes','Producción <em>verifica de nuevo.</em>',4,'Deploy / admisión','dark','admission',2,gateIllustration(logos),
      'El manifiesto fija el digest. La admisión evalúa el objeto solicitado. Usa Pod Security Admission para configuración del pod y una política de imágenes para firmas y atestaciones, como Kyverno ImageValidatingPolicy o Sigstore Policy Controller. Comprueba identidad firmante y builder según política. Prueba comportamiento ante indisponibilidad y controla excepciones.',cite('psa','kyverno','policyController'),'produccion'),
    scene('Kubernetes · Seguridad del pod','El pod recibe <em>sólo lo que necesita.</em>',4,'Deploy / controles del proceso','light','armor',2,podArmor(),
      'Ejemplo Linux. runAsNonRoot, allowPrivilegeEscalation en false, retirar capabilities que no se necesiten y un perfil seccomp permitido reducen el poder del proceso. Evalúa el estándar Restricted en warn y audit antes de aplicarlo en enforce según compatibilidad. La seguridad de identidad y de red añade capacidades distintas al perfil del pod.',cite('psa','kube'),'produccion'),
    scene('Cilium · Segmentación en Kubernetes','Cilium restringe <em>qué tráfico puede pasar.</em>',4,'Deploy / aislamiento efectivo','light','cluster',2,clusterMap(logos),
      'Configura un CNI que aplique NetworkPolicy, como Cilium. Empieza con denegación por defecto para los workloads elegidos y permite explícitamente los flujos del servicio. El ejemplo permite a orders-api llegar a PostgreSQL en TCP 5432 y deniega un destino externo sin regla. Incluye DNS y dependencias necesarias en el plan de pruebas. Hubble muestra los flujos y sus veredictos. La ServiceAccount y RBAC limitan por separado el acceso a la API de Kubernetes.',cite('nets','cilium','hubble'),'identidad'),
    scene('Service mesh · Identidad entre servicios','La malla verifica <em>a ambos servicios.</em>',4,'Deploy / service mesh y mTLS','light','mesh-scene',2,meshLink(),
      'Una service mesh aplica capacidades de red al tráfico de los servicios. En el tramo entre orders-web y orders-api, mTLS cifra el canal y autentica ambos peers con credenciales de workload. Con una política soportada, limita qué identidad puede acceder y qué operación queda permitida. Istio y Linkerd ofrecen opciones de mTLS y autorización con distinto alcance; revisa la cobertura del tráfico. La aplicación sigue comprobando qué pedido puede leer el usuario.',cite('istio','linkerd','zeroCloud'),'identidad'),
    scene('Runtime · Señal con contexto','Identifica <em>qué cambió en producción.</em>',4,'Operate / detección y respuesta','dark','observe',2,telemetry(logos),
      'Falco emite alertas basadas en reglas; Tetragon ofrece observación y controles de ejecución según política. Correlaciona señal con pod, namespace, digest, despliegue y dueño. Si hay un aviso nuevo, reevalúa los digests activos con su inventario. La gráfica y el caso son ilustrativos.',cite('falco','tetragon','kube'),'respuesta'),
    scene('Responder y verificar el cierre','El incidente <em>vuelve al backlog.</em>',4,'Operate / cerrar y aprender','light','response',3,closedLoop(),
      'Detecta y confirma impacto. Contén conforme al runbook, corrige y valida el nuevo digest y señales operativas. Devuelve el aprendizaje a la prueba de permisos y al modelo de amenazas. Con esto cerramos el caso de la API. Ahora aparece un nuevo consumidor que puede proponer acciones: un asistente de IA.',cite('ssdf','kube'),'respuesta'),

    scene('IA · Una nueva frontera de confianza','El modelo propone. <em>La API autoriza.</em>',5,'Nuevo cambio / asistente de pedidos','dark','ai-trust-scene',2,aiTrust(),
      'El asistente resume un pedido usando la API. Texto de usuario, documentos y salida del modelo se tratan como entradas no confiables. Define qué datos puede utilizar, herramientas permitidas y qué acciones requieren una aprobación. La API comprueba identidad, propiedad del pedido y alcance. Una salida del modelo no sustituye el permiso del usuario.',cite('aiInjection','aiAgency')),
    scene('IA · Guardrails de entrada, salida y acción','Guardrails para <em>entrada, salida y acción.</em>',5,'Controles del comportamiento','light','guardrails',2,aiGuardrails(),
      'Los guardrails aplican políticas a entrada y salida, como minimización de datos, filtrado o validación de esquema. Para acciones, la aplicación también limita herramientas, valida parámetros y delega autorización al servicio. Añade aprobación humana para operaciones de mayor impacto. NeMo y Bedrock ofrecen capacidades distintas; valida cobertura, eficacia, falsos positivos y latencia.',cite('nemo','bedrock','aiAgency')),
    scene('IA · AI Gateway','Gobierna <em>la ruta a los modelos.</em>',5,'Controles compartidos de tráfico','dark','ai-router',2,aiGateway(),
      'El AI Gateway gobierna acceso al proveedor y distribuye tráfico según identidad, políticas de destino, cuotas y límites. Puede centralizar telemetría y filtrado si el producto lo soporta. La app y sus servicios siguen aplicando autorización de datos y herramientas. Agent Router es el nombre actual del proyecto antes llamado Envoy AI Gateway. Azure API Management ofrece capacidades de AI gateway.',cite('gateway','azure','aiAgency')),
    scene('IA · Evaluaciones y operación','Los controles de IA <em>también se prueban.</em>',5,'Verify y Operate / evidencia','light','ai-eval',2,aiEvals(),
      'Los resultados mostrados son expectativas para una suite sintética. Prueba comportamiento permitido, denegaciones por propietario, redacción, abuso de cuota y alcance de herramientas. Repite cuando cambien modelo, prompt, permisos o guardrails. Correlaciona decisiones con versión de política y usuario, evitando cuerpos sensibles en logs cuando no sean necesarios.',cite('aiProfile','aiAgency','bedrock')),

    scene('CNCF · Piezas por control','Elige herramientas <em>por el trabajo que cumplen.</em>',6,'Qué piezas puede operar la plataforma','light','cncf-story',2,cncfStations(logos),
      'Harbor opera el registro, in-toto define evidencia y Notary Project incluye Notation. Kyverno evalúa políticas, Kubescape postura, SPIFFE/SPIRE identidad y Cilium red. Falco detecta eventos y OpenTelemetry aporta telemetría para correlación. Los proyectos resuelven funciones distintas. Define interfaces, dueño y capacidades antes de elegir una implementación.',cite('cncf')),
    scene('Zero Trust · La decisión sobre el recurso','Zero Trust <em>verifica cada acceso.</em>',6,'Arquitectura / identidad, contexto y política','dark','zero-trust',2,trustDecisions(),
      'Zero Trust evita conceder confianza implícita por ubicación de red. Para una solicitud de pedidos, comprueba las identidades relevantes, minimiza el acceso y aplica la política al recurso concreto. Token OAuth, segmentación y mTLS cubren decisiones complementarias. Observa señales de riesgo, investígalas y reevalúa credenciales o políticas cuando cambien las condiciones. Prueba que una solicitud desde el clúster con identidad, scope o titularidad incorrectos se rechace en el control que corresponda.',cite('zeroTrust','zeroCloud','falco')),
    scene('Big picture · Reconstruir el cambio','Reconstruye <em>el cambio completo.</em>',6,'De la intención a la decisión','light','rebuilt',3,chainRebuilt(),
      'Recorre las cuatro piezas. El requisito nace en el modelo de amenazas. Pruebas y controles de entrega dejan evidencia ligada al commit y al digest. Producción decide y observa con dueños definidos. El asistente incorpora nuevos controles, y la API conserva autoridad. Una señal real debe traducirse en una hipótesis, un requisito o una prueba del próximo ciclo.',cite('ssdf','slsa','aiProfile')),
    scene('Cierre · La evidencia del cambio','<span>Un cambio.</span><span><em>Evidencia completa.</em></span>',6,'SSDLC en práctica','dark','cover closing',0,
      closureStamp()+`<div class="cover-copy">${p('Elige un servicio y reconstruye su historia: qué debía proteger, qué se comprobó y quién responde cuando cambia el riesgo.')}${label(encode(speaker.name))}</div>`,
      'Cierra con una pregunta: ¿qué eslabón faltaría si hoy tuviéramos que explicar por qué se permitió ese cambio en producción? Ese es el próximo control que vale la pena hacer operable.',cite('ssdf','kube','aiProfile'))
  ];
}
