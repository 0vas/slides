# Deck Generation Workflow

Este flujo adapta un modelo liviano inspirado en Spec Kit al repositorio:
primero se define que deck se necesita, luego se crea un brief, se planea, se
divide en tareas, se implementa y se valida. El objetivo es que un usuario pueda
ingresar un prompt y que el agente cree un deck limpio, completo y consistente
sin depender de memoria de chat.

## Principios

- El deck se construye desde una especificacion, no desde intuicion suelta.
- Cada deck nuevo debe tener `decks/<slug>/deck.brief.md` como fuente de verdad.
- El agente debe preguntar cuando falte informacion critica.
- Las suposiciones permitidas deben quedar escritas en el brief.
- Los assets se descargan y organizan localmente bajo
  `decks/<slug>/public/media/`.
- La implementacion debe seguir `agent.md`, `docs/slide-guidelines.md`,
  `docs/component-catalog.md` y `docs/style-catalog.md`.

## Patron Adoptado

La decision esta documentada en
`docs/adr/0001-spec-kit-lightweight-deck-generation.md`.

El repo usa un flujo liviano tipo Spec Kit porque encaja mejor con trabajo
agentico: aclarar intencion, escribir un brief, planear, dividir en tareas,
implementar y validar. No se mantiene un arbol separado de specs para crear
decks, porque seria redundante para este caso.

## Flujo

1. Intake
   Leer el prompt y completar los campos requeridos. Si falta informacion
   critica, preguntar antes de crear archivos.

2. Brief
   Crear `decks/<slug>/deck.brief.md` usando
   `docs/deck-brief-template.md`. Registrar prompt, requisitos, criterios de
   aceptacion, restricciones, assets, supuestos y preguntas abiertas.

3. Plan
   Definir narrativa, numero aproximado de slides, paleta, componentes,
   estrategia de assets y validacion visual.

4. Tasks
   Convertir el plan en tareas concretas: scaffold, contenido, componentes,
   multimedia, metadata, estilos, validacion y documentacion.

5. Implement
   Copiar/adaptar `decks/_template`, reutilizar componentes existentes y crear
   componentes locales solo cuando el catalogo no cubra la necesidad.

6. Validate
   Ejecutar `make check DECK=<slug>` para cambios de deck. Para cambios
   visuales, revisar capturas de portada, slide densa, slide con media/mockup y
   navegacion.

7. Handoff
   Resumir cambios, comandos ejecutados, supuestos, pendientes y rutas clave.

## Intake Obligatorio

El prompt o conversacion debe cubrir estos campos antes de implementar:

| Campo | Critico | Como resolverlo |
| --- | --- | --- |
| Tema o titulo | Si | Preguntar si no existe. |
| Audiencia | Si | Preguntar si no existe. |
| Nivel de audiencia | Si | Preguntar o inferir desde audiencia solo si es obvio. |
| Duracion | Si | Preguntar si no existe. |
| Resultado esperado | Si | Preguntar que debe entender o hacer la audiencia. |
| Puntos obligatorios | Si | Preguntar por temas minimos o confirmar que el agente puede proponerlos. |
| Tono y contexto | Si | Preguntar si es tecnico, ejecutivo, workshop, keynote, comunidad, etc. |
| Restricciones | Si | Preguntar por internet, fuentes, marca, evento, proyector, idioma y formato. |
| Assets disponibles | No | Inferir `ninguno` si no se mencionan, pero documentarlo. |
| Politica de assets sugeridos | No | Por defecto usar SVG Repo y Pexels/similares si aportan valor. |
| Speaker/profile | No | Por defecto usar `data/speaker/` cuando haya slide de speaker/cierre. |
| Deliverables | No | Por defecto HTML estatico y build local. |
| Slug | No | Inferir URL-friendly desde el titulo. |
| Paleta | No | Usar `palette-crystal` si no hay direccion visual especifica. |

Si falta un campo critico, el agente debe hacer maximo tres preguntas
agrupadas. Ejemplo:

```text
Antes de crear el deck necesito cerrar tres datos:
1. Audiencia y nivel: para quien es y que tanto conoce el tema?
2. Duracion y resultado: cuantos minutos dura y que deberian poder hacer al final?
3. Contenido obligatorio: que 3-6 puntos no pueden faltar?
```

## Reglas De Preguntas

- Preguntar antes de scaffolding cuando falte informacion critica.
- Agrupar dudas relacionadas para no convertir el intake en interrogatorio.
- No preguntar por decisiones que el repo ya puede resolver: estructura,
  wrappers, paleta por defecto, carpeta de assets o comandos de validacion.
- Si el usuario pide avanzar con informacion incompleta, documentar los vacios
  como supuestos y crear el deck con alcance razonable.
- Si aparece una contradiccion, preguntar una sola vez y citar la contradiccion
  concreta.

## Criterios De Aceptacion

Un deck generado por prompt cumple el flujo cuando:

- tiene `deck.brief.md` con requisitos y supuestos,
- usa estructura de `decks/_template`,
- mantiene multimedia local en `public/media/`,
- reutiliza el catalogo antes de crear componentes nuevos,
- incluye metadata suficiente para el home de decks,
- compila con `make check DECK=<slug>`,
- no depende de internet para renderizar lo esencial,
- deja claro que informacion fue inferida y que queda pendiente.
