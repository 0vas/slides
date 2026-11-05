<script setup>
import {computed,ref} from 'vue'
const props=defineProps({kind:{type:String,default:'readiness'}})
const ready=ref([]), executed=ref(false), scope=ref('skill'), published=ref(false)
const gates=['Harness disponible','Cuenta autenticada','Fuente accesible']
const canRun=computed(()=>ready.value.length===3)
const files=computed(()=>scope.value==='skill'?['skills/revisar-nota/SKILL.md']:scope.value==='agent'?['agents/analista.json','skills/revisar-nota/SKILL.md']:['workspaces/equipo-demo.json','agents/analista.json','skills/revisar-nota/SKILL.md'])
function reset(){ready.value=[];executed.value=false;scope.value='skill';published.value=false}
</script>
<template>
 <section class="cap-demo">
  <div class="cap-controls">
   <span class="ol-label">{{kind==='readiness'?'ACTIVA LOS REQUISITOS':'ELIGE EL ALCANCE'}}</span>
   <template v-if="kind==='readiness'"><label v-for="(g,i) in gates" :key="g"><input type="checkbox" :value="i" v-model="ready" @change="executed=false"/><span>{{g}}</span><b>{{ready.includes(i)?'✓':'—'}}</b></label></template>
   <template v-else><button v-for="s in ['skill','agent','workspace']" :key="s" :aria-pressed="scope===s" @click="scope=s;published=false">{{s}} <span>{{scope===s?'●':'○'}}</span></button><p>El agente incluye su skill referenciada. El workspace reúne las tres definiciones.</p></template>
  </div>
  <div class="cap-result" aria-live="polite">
   <span class="ol-label">{{kind==='readiness'?'ESTADO DE LA PETICIÓN':'VISTA PREVIA DEL MANIFIESTO'}}</span>
   <template v-if="kind==='readiness'">
    <div class="cap-meter"><i v-for="n in 3" :key="n" :class="{done:ready.length>=n}"/></div>
    <Transition name="artifact" mode="out-in"><div :key="executed?'done':canRun?'ready':'blocked'"><h3>{{executed?'Respuesta sustentada':canRun?'Lista para ejecutar':'Petición bloqueada'}}</h3><p>{{executed?'Decisión: revisar el dashboard. Responsable: observabilidad. Pendiente: criterio de aceptación.':canRun?'Los tres requisitos están presentes en este ejemplo.':'Completa las tres comprobaciones. Conectar GitHub no autentica el harness.'}}</p><strong v-if="executed" class="cap-proof">✓ Fuente: nota-reunion.md · fecha de entrega no especificada</strong></div></Transition>
    <button :disabled="!canRun || executed" @click="executed=true">Simular respuesta →</button>
   </template>
   <template v-else>
    <TransitionGroup name="manifest" tag="ul" class="cap-files"><li v-for="file in files" :key="file"><span>＋</span>{{file}}</li></TransitionGroup>
    <Transition name="artifact" mode="out-in"><p :key="published+scope" class="cap-proof">{{published?`✓ Revisión simulada: ${files.length} archivos. El receptor debe verificar sus accesos.`:scope==='workspace'?'Nombre clave inicial: equipo-demo. Revisa las dependencias antes de publicar.':'Solo la selección y sus referencias; no conversaciones ni credenciales.'}}</p></Transition>
    <button :disabled="published" @click="published=true">Simular publicación →</button>
   </template>
  </div>
  <footer><span>SIMULACIÓN LOCAL · NO CONECTA CUENTAS NI PUBLICA</span><button @click="reset">Reiniciar</button></footer>
 </section>
</template>
