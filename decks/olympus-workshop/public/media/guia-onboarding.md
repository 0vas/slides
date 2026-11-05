# Olympus · Onboarding guiado

Un solo recorrido para comprobar conexiones, módulos y delegación en un workspace real. Las diapositivas ilustran el proceso: sus controles no conectan cuentas ni validan Olympus.

## Antes de empezar

Abre el workspace que vas a usar. Identifica tu harness y su modelo, una fuente que tengas permiso de leer, Zeus y un agente destino existente. Usa una nota sin datos sensibles cuyo contenido puedas contrastar. No continúes suponiendo que una cuenta o un módulo ya tiene acceso.

## 1. Conexiones

1. En Hades identifica la cuenta y autoriza el servicio necesario. La conexión de GitHub y la autenticación del harness son independientes.
2. Pide al agente leer un recurso conocido: especifica la fuente y un dato que deba encontrar. Contrasta la respuesta con el original.
3. Comprueba proveedor, autenticación y modelo del harness. Envía una petición pequeña y confirma que la respuesta queda en el chat correcto.

**Evidencia:** cuenta correcta, lectura de un recurso real y respuesta conservada. Un conector listado no demuestra acceso. Si falla, registra el servicio, la acción y el error; revisa autorización y disponibilidad antes de repetir.

## 2. Módulos

1. En la configuración del workspace habilita solo las capacidades necesarias. Ceo aporta conocimiento, Hades conecta herramientas y Cronos aporta contexto de reuniones.
2. Abre una fuente conocida: conocimiento en Ceo o una nota accesible en Cronos. Comprueba que el contenido coincide con la fuente autorizada.
3. Cambia de vista y regresa al mismo workspace. Confirma que la configuración y el contexto siguen disponibles.

**Evidencia:** módulo habilitado en el workspace correcto y una capacidad comprobada. Habilitarlo no autoriza servicios externos. Si no puede habilitarse, conserva el error y revisa disponibilidad y restricciones del host.

## 3. Delegación

1. Verifica que Zeus y el agente destino existen y que este último tiene harness y contexto suficientes.
2. Solicita a Zeus: «Delega a [agente existente] la revisión de [nota autorizada]. Devuelve decisión, responsable y pendiente; cita la fuente y señala lo que no esté documentado».
3. Observa la asignación al destino, su resultado y el retorno a Zeus. Contrasta la síntesis final con la nota.

**Evidencia:** petición → destino identificado → respuesta del destino → síntesis de Zeus. Una promesa de delegar no prueba ejecución. Si falta contexto o falla el destino, el retorno debe explicar el bloqueo, sin inventar un resultado.

## Cierre del onboarding

Registra la evidencia de los tres puntos. Si alguno no pudo comprobarse, anota qué falta y conserva el error. No marques el recorrido completo únicamente por haber avanzado las diapositivas.

Si un envío falla, revisa primero el historial para evitar duplicados. Cuando exista una copia de recuperación, restaura el borrador y revisa texto y adjuntos antes de reenviar. Para diagnóstico registra CalVer, plataforma, acción y error exacto; omite credenciales.
