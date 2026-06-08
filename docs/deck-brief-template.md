# Deck Brief: <titulo>

Status: draft
Slug: `<slug>`
Owner: <persona o equipo>
Fecha: <yyyy-mm-dd>

## Prompt Original

```text
<prompt del usuario>
```

## Intake

| Campo | Valor |
| --- | --- |
| Tema o titulo | <requerido> |
| Audiencia | <requerido> |
| Nivel de audiencia | <requerido> |
| Duracion | <requerido> |
| Resultado esperado | <requerido> |
| Puntos obligatorios | <requerido> |
| Tono y contexto | <requerido> |
| Restricciones | <requerido> |
| Assets disponibles | <ninguno o lista> |
| Politica de assets sugeridos | <SVG Repo, Pexels/similares, fuentes oficiales, ninguno> |
| Speaker/profile | <usar data/speaker, no aplica, override local> |
| Deliverables | <HTML, PDF, PPTX, deploy Pages, otro> |
| Slug | `<slug>` |
| Paleta | `<palette-*>` |

## Preguntas Abiertas

- <pregunta o `Ninguna`>

## Supuestos

- <supuesto documentado>

## Requisitos

### Requirement: Narrativa

El deck SHALL presentar una narrativa clara para <audiencia> en <duracion>.

#### Acceptance Criteria

- GIVEN una persona de la audiencia objetivo
- WHEN recorra el deck completo
- THEN debe entender <resultado esperado>

### Requirement: Contenido Obligatorio

El deck SHALL cubrir los puntos obligatorios definidos en el intake.

#### Acceptance Criteria

- GIVEN los puntos obligatorios
- WHEN se revise el outline
- THEN cada punto debe estar representado por al menos un slide o bloque visual

### Requirement: Calidad Visual

El deck SHALL usar el sistema visual del repositorio y mantener legibilidad en
1440x900.

#### Acceptance Criteria

- GIVEN una captura de portada, slide densa y slide con media/mockup
- WHEN se revise contraste, overflow y jerarquia
- THEN no debe haber texto cortado ni contenido esencial ilegible

## Plan Narrativo

| Seccion | Slides estimados | Intencion |
| --- | ---: | --- |
| Apertura | <n> | <intencion> |
| Desarrollo | <n> | <intencion> |
| Cierre | <n> | <intencion> |

## Plan De Componentes

- Componentes compartidos:
  <lista de `shared/components/` o wrappers locales>
- Componentes locales:
  <lista y motivo>

## Plan De Assets

| Asset | Ubicacion local | Fuente/licencia | Uso |
| --- | --- | --- | --- |
| <asset> | `decks/<slug>/public/media/<path>` | <fuente> | <slide/componente> |

## Plan De Validacion

- `make check DECK=<slug>`
- Captura portada 1440x900
- Captura slide densa 1440x900
- Captura slide con media/mockup 1440x900
- Verificar navegacion nativa visible
- Verificar que assets esenciales rendericen localmente

## Handoff

- Cambios realizados:
- Comandos ejecutados:
- Pendientes:
- Notas para futuro:
