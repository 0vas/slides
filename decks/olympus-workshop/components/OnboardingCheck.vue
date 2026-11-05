<script setup>
import {ref} from 'vue'
const props=defineProps({kind:String})
const stage=ref(0)
const flows={
 connections:[
 ['Conecta la cuenta correcta','En Hades, comprueba la identidad y autoriza solo el servicio necesario. GitHub y el harness tienen autenticaciones independientes.','La cuenta y la fuente esperadas están identificadas.','Si falta acceso, conserva el error y revisa la autorización del servicio.'],
 ['Comprueba una lectura','En Olympus, pide al agente consultar un recurso conocido y autorizado. Indica cuál debe leer y qué dato esperas encontrar.','El resultado identifica el recurso y contiene el dato comprobable.','Ver un conector en la lista no demuestra que pueda leer.'],
 ['Confirma el harness','Comprueba proveedor, autenticación y modelo; envía una petición pequeña en el workspace elegido.','Una respuesta aparece en el chat correcto y permanece en el historial.','Si falla, distingue proveedor no disponible, autenticación y error de envío.']],
 modules:[
 ['Habilita lo necesario','Abre la configuración del workspace y activa el módulo que necesita la tarea. Ejemplo: Ceo para conocimiento, Hades para conexiones o Cronos para reuniones.','El módulo aparece en ese workspace y su configuración es accesible.','Si no puede habilitarse, revisa las restricciones y disponibilidad del host.'],
 ['Prueba su capacidad','Con Ceo, abre conocimiento conocido. Con Cronos, consulta una nota de reunión accesible; autoriza la fuente por separado.','La capacidad responde con contenido reconocible de la fuente esperada.','Activar el módulo no concede permisos sobre servicios externos.'],
 ['Revisa el alcance','Cambia de vista y regresa al mismo workspace. Comprueba que la configuración prevista y el contexto siguen disponibles.','La configuración y el contenido corresponden al workspace activo.','No atribuyas el estado de otro workspace a este.']],
 delegation:[
 ['Prepara dos roles existentes','Selecciona Zeus y un agente destino ya configurado. Comprueba que el destino puede ejecutar y tiene el contexto requerido.','Emisor, destino, tarea y criterio de finalización son explícitos.','No crees agentes ni supongas acceso a una fuente para ocultar un bloqueo.'],
 ['Solicita una delegación acotada','En Olympus, pide a Zeus delegar al destino una revisión de una nota conocida y devolver decisión, responsable y pendiente, citando la fuente.','Se observa una asignación al agente correcto y una respuesta de ese agente.','Que Zeus diga «voy a delegar» no demuestra que la delegación ocurrió.'],
 ['Verifica el retorno','Comprueba el resultado del agente destino y la respuesta final de Zeus. Contrasta sus afirmaciones con la nota y registra cualquier bloqueo.','Hay trazabilidad entre petición, agente destino, resultado y síntesis final.','Si el destino falla, espera un bloqueo explícito; no una respuesta inventada.']]
}
const steps=flows[props.kind]
</script>
<template><section class="onboard-check">
 <nav aria-label="Comprobaciones del onboarding"><button v-for="(s,i) in steps" :key="s[0]" :aria-pressed="stage===i" @click="stage=i">0{{i+1}} · {{s[0]}}</button></nav>
 <div class="onboard-detail" aria-live="polite"><Transition name="artifact" mode="out-in"><div :key="stage"><h3>{{steps[stage][0]}}</h3><p>{{steps[stage][1]}}</p><div class="onboard-proof"><b>EVIDENCIA QUE DEBES OBSERVAR EN OLYMPUS</b><p>{{steps[stage][2]}}</p></div><small>{{steps[stage][3]}}</small></div></Transition></div>
 <footer><span>GUÍA · ESTOS CONTROLES NO EJECUTAN NI VALIDAN LA APLICACIÓN</span><button @click="stage=(stage+1)%3">{{stage===2?'Volver al inicio':'Siguiente comprobación'}} →</button></footer>
</section></template>
