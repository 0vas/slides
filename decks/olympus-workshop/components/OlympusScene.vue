<script setup>
import {ref} from 'vue'
const props=defineProps({kind:{type:String,default:'context'}})
const selected=ref(0)
const context=[
 {name:'Sin fuente',heading:'Falta la evidencia',body:'«Resume mi última reunión de Datadog». El nombre no identifica una reunión ni da acceso a sus notas.',result:'Pedir la nota o localizar una fuente accesible.'},
 {name:'Con fuente',heading:'Una nota cambia la tarea',body:'Nota de prueba: revisar el dashboard; responsable: equipo de observabilidad; criterio de aceptación: pendiente.',result:'Separar decisión, responsable y pendiente. Citar la nota.'},
 {name:'Verificar',heading:'Lo desconocido sigue abierto',body:'La nota no contiene fecha de entrega. Añadir una fecha sería inventar información.',result:'Resultado aceptable: no agrega hechos ausentes.'}
]
const conflict=[
 {name:'Local',heading:'Tu mejora',body:'«Cada conclusión debe citar su fuente». Cambiaste las instrucciones del agente después de descargarlo.',result:'Conservar la trazabilidad.'},
 {name:'Remoto',heading:'La mejora del equipo',body:'«Entrega decisiones, responsables y pendientes». Otra persona cambió la misma definición.',result:'Conservar la estructura del resultado.'},
 {name:'Resolver',heading:'Combinar la intención',body:'«Entrega decisiones, responsables y pendientes; cita la fuente de cada conclusión». Revisa la última versión antes de publicar.',result:'Comparar otra vez si el remoto cambió. Nunca forzar para ocultar el conflicto.'}
]
const steps=props.kind==='conflict'?conflict:context
</script>
<template>
 <section class="ol-scene" :aria-label="kind==='conflict'?'Ejemplo de conflicto':'Ejemplo de contexto'">
  <div class="ol-scene-rail"><button v-for="(s,i) in steps" :key="s.name" :aria-pressed="selected===i" @click="selected=i"><span>0{{i+1}}</span>{{s.name}}</button></div>
  <div class="scene-artifacts" :data-stage="selected">
   <div class="scene-source"><span>{{kind==='conflict'?'LOCAL':'FUENTE'}}</span><strong>{{kind==='conflict'?'Cita cada fuente':'nota-reunion.md'}}</strong><small>{{kind==='conflict'?'Tu intención':'Tres hechos documentados'}}</small></div>
   <div class="scene-arrow" aria-hidden="true">→</div>
   <div class="scene-target"><span>{{kind==='conflict'?'REMOTO':'RESULTADO'}}</span><strong>{{kind==='conflict'?'Decisión · responsable · pendiente':selected===0?'Falta la fuente':'Decisión · responsable · pendiente'}}</strong><small>{{selected===2?(kind==='conflict'?'Intenciones combinadas':'✓ Sin fecha inventada'):'Revisión pendiente'}}</small></div>
  </div>
  <Transition name="artifact" mode="out-in"><div class="ol-scene-body" :key="selected" role="status"><h3>{{steps[selected].heading}}</h3><p>{{steps[selected].body}}</p><div class="ol-verdict"><span>→</span>{{steps[selected].result}}</div></div></Transition>
  <footer class="scene-actions"><small>MODELO DIDÁCTICO · SIN EJECUCIÓN REAL</small><button @click="selected=(selected+1)%3">{{selected===2?'Repetir':'Siguiente estado'}} →</button></footer>
 </section>
</template>
