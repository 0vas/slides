<script setup>
import { ref } from 'vue'
const active = ref(0)
const steps = [
 {name:'Intención', label:'01 / PERSONA', title:'¿Qué se decidió?', body:'Pide decisiones, responsables y pendientes de la reunión. Define el entregable antes de elegir herramientas.', icon:'M6 5h20v15H15l-6 6v-6H6z'},
 {name:'Contexto', label:'02 / FUENTE', title:'La nota, disponible', body:'Adjunta la nota o conecta su fuente. Nombrar Datadog no convierte la petición en una consulta a su API.', icon:'M9 3h12l6 6v21H9z M21 3v7h6 M13 16h10 M13 22h8'},
 {name:'Ejecución', label:'03 / AGENTE + HARNESS', title:'Una tarea acotada', body:'El agente trabaja con su harness y las herramientas autorizadas. Las credenciales se comprueban en este host.', icon:'M18 2L6 19h10l-2 12 14-19H18z'},
 {name:'Evidencia', label:'04 / REVISIÓN', title:'Una respuesta comprobable', body:'Compara cada afirmación con la nota: decisión, responsable y pendiente. Si falta una fecha, debe decirlo.', icon:'M16 3l11 4v9c0 7-11 13-11 13S5 23 5 16V7z M10 16l4 4 8-9'},
]
</script>
<template>
 <section class="request-journey" aria-label="Recorrido didáctico de una petición">
  <div class="journey-stations">
   <button v-for="(step,i) in steps" :key="step.name" :aria-pressed="active===i" @click="active=i">
    <svg viewBox="0 0 34 34" aria-hidden="true"><path :d="step.icon"/></svg>
    <small>{{step.label}}</small><strong>{{step.name}}</strong>
   </button>
  </div>
  <div class="journey-track"><span :style="{left:`${active*25}%`}">LA PETICIÓN →</span></div>
  <div class="journey-explanation" aria-live="polite"><strong>{{steps[active].title}}</strong><p>{{steps[active].body}}</p></div>
  <div class="journey-actions"><small>MODELO DIDÁCTICO · NO EJECUTA OLYMPUS</small><button @click="active=(active+1)%4">{{active===3?'Repetir recorrido':'Siguiente etapa'}} →</button></div>
 </section>
</template>
