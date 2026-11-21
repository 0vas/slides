# Deck brief · SSDLC

## Source prompt

Crear una presentación técnica de SSDLC y capacidades de AST desde Plan hasta operación en Kubernetes. Asociar herramientas reales y mostrar logos SVG oficiales. Aplicar la referencia Amarillo Laca, Negro Ónix y Rosa Fucsia. Mantener exigencia de ilustración, animación y transiciones de las charlas anteriores.

## Intake

| Campo | Decisión |
| --- | --- |
| Audiencia | Ingeniería de software, plataforma, AppSec y SRE |
| Duración | Charla técnica de 40–45 minutos, estimada |
| Idioma | Español, términos técnicos conservados |
| Resultado | Diseñar controles por etapa y saber qué evidencia exigir antes y después del despliegue |
| Caso | API interna de pedidos, ficticia |
| Entregable | HTML autónomo con notas, navegación y movimiento reversible |
| Paleta | Amarillo laca, ónix cálido y rosa fucsia `#FF2A95`. Los tonos laca y ónix se adaptan de la captura para contraste |

## Narrative and visual direction

- Seguir el mismo servicio por seis estaciones. En cada etapa se ilumina la evidencia que se transfiere a la siguiente.
- Distinguir SAST, SCA, secretos, IaC, escaneo de imágenes, DAST e IAST, y separar pruebas de aplicación, controles de despliegue y señales operativas.
- Desarrollar las subcapacidades por familia, con reportes y criterios de decisión. Añadir pruebas especializadas de API, móvil y fuzzing, y opciones CNCF para cadena de suministro, Kubernetes y runtime.
- Organizar 32 láminas alrededor de un cambio en la API, con zoom narrativo en shift left, push protection, OAuth 2.0, service mesh, Zero Trust y la extensión de IA. La revisión contextual de AST agéntico se conecta con la prueba de permisos de la API. El índice busca capacidades y herramientas.
- Ilustrar con HTML, CSS y SVG nativo el modelo de amenazas, las dependencias transitivas, la imagen OCI, la atestación, la admisión y un evento de runtime.
- La lámina 2 conserva el perfil compartido, el carrusel y el QR. El copyright aparece en todas las láminas. Las citas al pie enlazan a documentación primaria.
- Identidad propia de banco de pruebas. Space Grotesk y Manrope se incrustan con su licencia OFL.

## Assets and sources

- Retrato aprobado y QR compartidos del sitio de presentaciones.
- Marca Snyk obtenida del portal oficial de [Snyk](https://snyk.wd103.myworkdayjobs.com/External/assets/logo). Snyk y su logotipo son marcas de Snyk Ltd.
- Kubernetes, Kyverno, Falco, Harbor, Cilium, Kubescape, in-toto, Notary Project, SPIFFE y OpenTelemetry usan sus SVG originales desde el [repositorio CNCF Artwork](https://github.com/cncf/artwork). Cada marca identifica el proyecto correspondiente.
- [NIST SSDF](https://csrc.nist.gov/pubs/sp/800/218/final), OWASP, SLSA, Sigstore, Kubernetes y documentación de las herramientas. Las notas explican el alcance y las decisiones de configuración.

## Verification

- Abrir offline a 16:9, verificar la segunda lámina y todos los estados. Probar saltos, avance y retroceso, movimiento reducido y captura de la portada.
- `node decks/ssdlc-seguridad-end-to-end/src/build.mjs` y `make check DECK=ssdlc-seguridad-end-to-end`.
