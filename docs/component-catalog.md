# Catalogo De Componentes Visuales

Este catalogo describe los componentes y patrones reutilizables disponibles para
crear decks pulidos en este repositorio.

## Estado Del Catalogo

Los componentes actuales viven en:

```text
decks/github-enterprise-platform/components/
```

La mayoria nacieron para el deck de GitHub Enterprise, pero varios ya funcionan
como patrones reutilizables. Cuando un componente se use en otro deck y deje de
ser especifico de GitHub, debe promoverse o copiarse a una capa compartida con
un nombre mas generico.

La carpeta `shared/components/` ya existe como destino de promocion. Por ahora
no contiene componentes reales; el criterio es mover alli solo piezas probadas
en mas de un deck.

## Reglas De Reuso

- Reusar antes de crear desde cero.
- Adaptar datos y copy, no duplicar estilos grandes.
- Si un componente queda acoplado a una charla, mantenerlo en `decks/<slug>/`.
- Si un componente sirve para varios decks, moverlo a `shared/components/` o
  crear una version generica ahi.
- Mantener props simples y data arrays legibles.
- Evitar dependencias remotas para renderizar componentes centrales.

## Componentes

### `SpeakerProfile`

Uso: slide de presentacion del speaker con QR, perfiles publicos, roles y tags.

Fuente:

```text
decks/github-enterprise-platform/components/SpeakerProfile.vue
```

Datos:

```text
data/person.js
decks/<slug>/data/speaker.js
shared/public/speaker/
```

Cuando usarlo:

- Al inicio de una charla.
- Cuando el contexto de la persona aporte credibilidad a la sesion.
- Cuando haya QR escaneable de LinkedIn u otro perfil.

Ejemplo:

```md
---
transition: slide-up
---

<SpeakerProfile />
```

### `TypingTitle`

Uso: titulo con revelado tipo escritura, sin cursor persistente.

Props:

- `as`: tag HTML, default `h1`.
- `text`: texto requerido.
- `delay`: demora en milisegundos.

Cuando usarlo:

- Portadas.
- Separadores de seccion.
- Una o dos slides de alto impacto.

Ejemplo:

```md
<TypingTitle as="h2" text="Vamos a cambiar el lente" />
```

No usarlo en todos los titulos; pierde impacto y puede distraer.

### `GitHubMockup`

Uso: mockup editable de superficies tipo GitHub.

Props:

- `variant`: `org`, `security` o default acciones.
- `title`: titulo del mockup.
- `badge`: etiqueta del estado o vista.

Variantes:

- `org`: vista enterprise/admin.
- `security`: tiles de seguridad.
- default: filas tipo workflow/checks.

Ejemplo:

```md
<GitHubMockup variant="security" title="Security overview" badge="Secret protection" />
```

Notas:

- Actualmente es GitHub-specific.
- Para otros temas, crear una version generica tipo `ProductMockup`.

### `PlatformMap`

Uso: mapa de cuatro etapas o dominios.

Cuando usarlo:

- Para explicar transformaciones.
- Para comparar niveles de madurez.
- Para introducir un marco mental.

Patron de datos:

```js
{ label: '01', title: 'Codigo', detail: 'Repos, ramas, PRs', tone: 'blue' }
```

### `EnterpriseTopology`

Uso: topologia compacta con centro y nodos alrededor.

Cuando usarlo:

- Arquitectura mental.
- Mapa de dependencias.
- Sistemas empresariales y dominios de gobierno.

Notas:

- Ya esta compactado para no cortar en 16:9.
- Mantener entre 4 y 6 nodos para que respire.

### `GovernanceGrid`

Uso: grilla 2x2 de dominios de gobierno.

Cuando usarlo:

- Explicar pilares.
- Mostrar decisiones previas a escalar.
- Resumir operating model.

### `BranchProtectionFlow`

Uso: flujo de pasos lineales tipo PR/checks/review/merge.

Cuando usarlo:

- Procesos operativos.
- Gateways de calidad.
- Ciclos de aprobacion.

### `SecurityRadar`

Uso: radar visual con puntos y texto explicativo.

Cuando usarlo:

- Security posture.
- Deteccion temprana.
- Priorizacion de capacidades.

Notas:

- Usa SVG propio; no depende de imagenes externas.
- Adaptar labels y puntos segun la historia.

### `CopilotFlow`

Uso: cuatro pasos para adopcion, productividad o asistencia.

Cuando usarlo:

- Flujos de cambio cultural.
- Procesos con etapas claras.
- Frameworks de adopcion.

### `MaturityCurve`

Uso: curva de madurez compacta con cuatro puntos.

Cuando usarlo:

- Mostrar evolucion.
- Cerrar una seccion con direccion estrategica.
- Explicar progreso desde caos a plataforma.

Notas:

- Mantener maximo cuatro puntos.
- Revisar que labels no queden cerca del borde del SVG.

### `TrialCard`

Uso: tarjeta informativa para una oferta, trial o call-to-action practico.

Cuando usarlo:

- Practicas posteriores a la charla.
- Recursos para la audiencia.
- Cierre accionable.

## Clases Visuales Compartidas

Estas clases viven en `shared/styles/theme.css` y pueden usarse directamente en
Markdown o componentes:

- `.kicker`: etiqueta superior de slide.
- `.lead`: texto secundario grande.
- `.big-contrast`: comparacion de dos bloques.
- `.agenda-grid`: ruta o agenda.
- `.policy-grid`: tarjetas compactas de politicas.
- `.ownership-board`: tablero de ownership.
- `.ops-board`: lanes operativos.
- `.lesson-stack`: lista de lecciones.
- `.final-frame`: cierre o takeaway.

## Como Crear Un Componente Nuevo

1. Revisar este catalogo.
2. Reusar una estructura existente si la forma visual ya existe.
3. Crear el componente en `decks/<slug>/components/` si es especifico.
4. Usar props o arrays locales simples.
5. Agregar animacion con `v-motion` solo si aclara orden o jerarquia.
6. Validar a 1440x900 y 1600x900.
7. Documentarlo aqui si queda como patron reutilizable.

## Criterio Para Promover A Compartido

Mover a `shared/components/` cuando se cumplan al menos dos condiciones:

- Se usa o se usara en mas de un deck.
- No depende de texto, marcas o conceptos de un solo tema.
- Acepta datos por props o slots.
- Su estilo ya esta alineado con `shared/styles/theme.css`.

Mientras no exista `shared/components/`, los agentes pueden copiar un componente
del deck actual y generalizarlo en el nuevo deck.
