---
theme: default
layout: default
title: "Olympus · De la primera petición al trabajo compartido"
info: |
  Onboarding guiado para equipos técnicos que empiezan con Olympus.
  Conexiones, módulos y delegación con evidencia.
transition: slide-left
class: olympus palette-aurora
defaults:
  class: olympus palette-aurora
routerMode: hash
record: false
download: false
fonts:
  sans: Arial
  provider: none
drawings:
  enabled: false
---

<span class="kicker">00 / Un problema real</span>
<div class="ol-opening">
<h1>«¿Qué decidimos<br/>en la última<br/><em>reunión?</em>»</h1>
<div class="ol-opening-aside"><span>EL RETO DE HOY</span><p>Convertir una petición en una respuesta sustentada.</p><div>UNA NOTA<br/>UN AGENTE<br/>UNA DEFINICIÓN COMPARTIDA</div></div>
</div>
<div class="ol-bottom">OLYMPUS / ONBOARDING · CONEXIONES · MÓDULOS · DELEGACIÓN</div>

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-crystal paper
---

<span class="kicker">El modelo compartido</span>

## Tres entidades. Responsabilidades distintas.

<div class="ol-cols three">
<div class="ol-block"><span>01 / WORKSPACE</span><h3>El espacio de trabajo</h3><p>Contexto compartido, módulos y referencias a agentes y skills.</p></div>
<div class="ol-block"><span>02 / AGENT</span><h3>Quién hace el trabajo</h3><p>Identidad, configuración y referencias a skills. Puede tener varios chats.</p></div>
<div class="ol-block"><span>03 / SKILL</span><h3>Cómo repetirlo bien</h3><p>Instrucciones reutilizables para una capacidad o una tarea recurrente.</p></div>
</div>
<div class="ol-bottom">WORKSPACE → AGENTS + SKILLS · AGENT → SKILLS</div>

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
---

<span class="kicker">Nauthelion · una analogía para recordar</span>

## Las piezas avanzan juntas

<ShipAssembly />
<div class="ol-bottom">Una analogía de responsabilidades; no representa disponibilidad ni tráfico real.</div>

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-aurora ol-section
---

<span class="kicker">Acto I</span>

<div class="ol-section-number">01</div>

# Preparar la nave

<p>Antes de pedir algo grande,<br/>haz que una petición pequeña termine.</p>

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-crystal paper
---

<span class="kicker">Elegir el motor de ejecución</span>

## Estar en la lista no significa estar listo

<div class="ol-provider-row"><div>Cursor</div><div>Claude</div><div>Codex</div><div>GitHub<br/>Copilot</div><div>Antigravity</div></div>
<div class="ol-note"><p>Comprueba registro y disponibilidad en el host, autenticación y modelo. Las capacidades dependen del proveedor.</p></div>
<p class="ol-small">El catálogo del host es la fuente de verdad. Una prueba integrada solo está disponible cuando el proveedor la soporta.</p>

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-crystal paper
---

<span class="kicker">Secuencia de configuración</span>

## Una comprobación por cada frontera

<CapabilityDemo kind="readiness" />

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-crystal paper
---

<span class="kicker">Mapa de módulos</span>

## Activa la capacidad que necesita la tarea

<div class="ol-modules">
<div><b>Ceo</b><span>Conocimiento reutilizable.</span></div><div><b>Hades</b><span>Conexiones y herramientas.</span></div>
<div><b>Cronos</b><span>Contexto de reuniones.</span></div><div><b>Helios</b><span>Uso y cuentas del harness.</span></div>
<div><b>Temis</b><span>Evidencia y decisiones.</span></div><div><b>Logs</b><span>Diagnóstico y exportación.</span></div>
<div><b>Atlas</b><span>Interfaz CLI de Olympus.</span></div><div><b>Git</b><span>Repositorio del proyecto.</span></div>
</div>
<p class="ol-small">Habilitar un módulo no autoriza sus servicios. Git y el manifiesto compartido tienen alcances distintos.</p>

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-crystal paper
---

<span class="kicker">ONBOARDING / CONEXIONES</span>

## Comprueba tus conexiones

<OnboardingCheck kind="connections" />

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-aurora ol-section
---

<span class="kicker">Acto II</span>

<div class="ol-section-number">02</div>

# Dar contexto<br/>a la tripulación

<p>Una respuesta útil debe poder<br/>explicar de dónde salió.</p>

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
---

<span class="kicker">Una petición atraviesa varias piezas</span>

## Del propósito a la evidencia

<RequestJourney />

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-crystal paper
---

<span class="kicker">Comparación controlada</span>

## La misma petición, distinta evidencia

<OlympusScene kind="context" />

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-crystal paper
---

<span class="kicker">ONBOARDING / MÓDULOS</span>

## Activa y verifica los módulos

<OnboardingCheck kind="modules" />

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-crystal paper
---

<span class="kicker">Verificación</span>

## Acepta el resultado por su contenido

<ComparisonTable first-column="Revisa" :columns="['Aceptable','Revisar antes de aceptar']" :rows="[{label:'Decisión',values:['Revisar el dashboard','Una decisión nueva']},{label:'Responsable',values:['Equipo de observabilidad','Una persona inventada']},{label:'Pendiente',values:['Criterio de aceptación abierto','Una fecha no documentada']},{label:'Fuente',values:['Nota proporcionada','Un enlace que no fue leído']}]" />

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-aurora ol-section
---

<span class="kicker">Acto III</span>

<div class="ol-section-number">03</div>

# Delegar<br/>con evidencia

<p>Una tarea, un destino y un retorno.<br/>Comprueba la cadena completa.</p>

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-crystal paper
---

<span class="kicker">ONBOARDING / OLYMPUS</span>

## Una delegación necesita un contrato

<div class="ol-cols three"><div class="ol-block"><span>ZEUS / EMISOR</span><h3>Una tarea clara</h3><p>Revisar una nota conocida, con fuente y resultado esperado.</p></div><div class="ol-block"><span>AGENTE / DESTINO</span><h3>Ejecución visible</h3><p>Identidad existente, harness disponible y contexto accesible.</p></div><div class="ol-block"><span>RETORNO</span><h3>Resultado revisado</h3><p>Respuesta del destino y síntesis de Zeus que respeta la evidencia.</p></div></div>

---
class: olympus palette-crystal paper
---

<span class="kicker">ONBOARDING / OLYMPUS</span>

## Un bloqueo también debe volver a Zeus

<div class="ol-steps"><div><b>01 / FALTA CONTEXTO</b><strong>Identifica la fuente</strong><p>No sustituyas la lectura por una suposición.</p></div><div><b>02 / FALLA EL DESTINO</b><strong>Conserva el error</strong><p>Comprueba harness, permisos y alcance.</p></div><div><b>03 / RETORNO</b><strong>Informa el bloqueo</strong><p>Zeus debe distinguir trabajo completado y trabajo pendiente.</p></div></div><div class="ol-note"><p>Una promesa de delegación no equivale a una asignación ejecutada.</p></div>

---
class: olympus palette-crystal paper
---

<span class="kicker">ONBOARDING / DELEGACIÓN</span>

## Comprueba el retorno a Zeus

<OnboardingCheck kind="delegation" />

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-crystal paper
---

<span class="kicker">Cuando algo falla</span>

## Recupera antes de repetir

<div class="ol-steps"><div><b>01 / HISTORIAL</b><strong>Comprueba</strong><p>¿El envío fue aceptado aunque se perdió la respuesta?</p></div><div><b>02 / BORRADOR</b><strong>Restaura</strong><p>Recover messages → Restore draft. Revisa texto y adjuntos.</p></div><div><b>03 / EVIDENCIA</b><strong>Diagnostica</strong><p>CalVer, plataforma, acción y error exacto.</p></div></div>
<div class="ol-note"><p>Restaurar no envía automáticamente. No puede reconstruir un mensaje que nunca llegó a persistirse.</p></div>

<!-- Valida la capacidad descrita en el workspace real; la presentación es una guía. -->

---
class: olympus palette-crystal paper
---

<span class="kicker">ONBOARDING / OLYMPUS</span>

## El onboarding termina con evidencia

<div class="ol-cols three"><div class="ol-block"><span>CONEXIONES</span><h3>Lectura comprobada</h3><p>Cuenta correcta, recurso conocido y respuesta conservada.</p></div><div class="ol-block"><span>MÓDULOS</span><h3>Capacidad disponible</h3><p>Habilitada y verificada dentro del workspace esperado.</p></div><div class="ol-block"><span>DELEGACIÓN</span><h3>Retorno trazable</h3><p>Asignación al destino, resultado y respuesta final de Zeus.</p></div></div>

---
---

<span class="kicker">ONBOARDING / OLYMPUS</span>

## Continúa desde tu workspace

<div class="ol-links"><div><a href="media/material-workshop.html" target="_blank">Guía de onboarding ↗</a><p>Conexiones, módulos, delegación y evidencias.</p></div><div><a href="https://github.com/0vas/olimpo/tree/main/packages/olympus-docs/docs" target="_blank" rel="noreferrer">Documentación de Olympus ↗</a><p>Configuración y diagnóstico de cada capacidad.</p></div></div><div class="ol-note"><p>Registra el punto que no pudo verificarse. El onboarding no está completo hasta comprobarlo en la aplicación.</p></div>
