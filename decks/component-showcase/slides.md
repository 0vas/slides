---
theme: default
title: Component Showcase
info: |
  Deck de referencia para validar y reutilizar el catalogo visual del repositorio.
transition: slide-left
background: "#f8fbff"
class: component-showcase palette-crystal
defaults:
  class: component-showcase palette-crystal
routerMode: hash
record: false
download: false
drawings:
  enabled: false
---

<span class="kicker">Deck de referencia</span>

<h1 class="cover-title">
  <TypingTitle as="span" text="Component" />
  <TypingTitle as="span" text="Showcase" :delay="760" class="cover-title-accent" />
</h1>

<p class="lead">Un deck vivo para probar, copiar y combinar los componentes visuales del repositorio.</p>

---
transition: slide-up
---

<SpeakerProfile kicker="Datos compartidos" />

---
transition: fade
---

<span class="kicker">Indice visual</span>

## Que cubre este showroom

<div class="showcase-index">
  <div v-click><span>Shared</span><strong>32 componentes</strong><small>Base global para nuevos decks.</small></div>
  <div v-click><span>Agnostico</span><strong>0 producto fijo</strong><small>El catalogo no depende de una marca o charla.</small></div>
  <div v-click><span>Style</span><strong>8 paletas</strong><small>Elegibles desde el frontmatter del deck.</small></div>
</div>

<p class="showcase-note">La idea es simple: si una visual ya existe, el agente debe reutilizarla, pasarle datos y validar que respire en 16:9.</p>

---
transition: slide-up
---

<span class="kicker">Asset sourcing</span>

## Iconos SVG e imagenes editoriales

<AssetSourcingShowcase />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## StylePalette

<StylePalette />

---
transition: slide-left
class: component-showcase palette-crystal background-demo background-waves
---

<span class="kicker">Background system</span>

## CSS waves

<div class="background-stage background-stage-split">
  <div class="background-demo-copy">
    <span>Wave Layer</span>
    <strong>Ambient motion with a quiet reading surface</strong>
    <p>The wave field drifts continuously while the content remains stable and projector-friendly.</p>
  </div>
  <div class="background-demo-marks" aria-hidden="true">
    <i></i>
    <i></i>
    <i></i>
  </div>
</div>

---
transition: slide-left
class: component-showcase palette-crystal background-demo background-image-wash
---

<BackgroundImageWash />

<span class="kicker">Background system</span>

## Image wash

<div class="background-stage background-stage-right">
  <div class="background-demo-copy">
    <span>Transparent Media</span>
    <strong>Photo context, readable foreground</strong>
    <p>A directional wash protects the copy while the local photo remains visible as real context.</p>
  </div>
</div>

---
transition: slide-left
class: component-showcase palette-crystal background-demo background-mesh
---

<span class="kicker">Background system</span>

## Mesh gradient

<div class="background-stage background-stage-split">
  <div class="background-demo-copy">
    <span>Editorial Mesh</span>
    <strong>Depth for narrative slides</strong>
    <p>Layered color fields and a modular mosaic add energy without relying on a literal image.</p>
  </div>
  <div class="background-demo-mesh" aria-hidden="true">
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
    <i></i><i></i><i></i>
  </div>
</div>

---
transition: slide-left
class: component-showcase palette-crystal background-demo background-blueprint
---

<span class="kicker">Background system</span>

## Blueprint grid

<div class="background-stage background-stage-split">
  <div class="background-demo-copy">
    <span>Structured Canvas</span>
    <strong>Precise surface for architecture</strong>
    <p>Use blueprint backgrounds for systems, roadmaps, and flows that benefit from a quiet technical frame.</p>
  </div>
  <div class="background-blueprint-plan" aria-label="Agnostic system blueprint">
    <span class="blueprint-coordinate">GRID 08 / 12</span>
    <i class="blueprint-link blueprint-link-a"></i>
    <i class="blueprint-link blueprint-link-b"></i>
    <div class="blueprint-node blueprint-node-a"><small>01</small><strong>Signal</strong></div>
    <div class="blueprint-node blueprint-node-b"><small>02</small><strong>System</strong></div>
    <div class="blueprint-node blueprint-node-c"><small>03</small><strong>Outcome</strong></div>
  </div>
</div>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## PlatformMap

<PlatformMap aria-label="Mapa de transformacion reusable" />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## EnterpriseTopology

<EnterpriseTopology center-label="Workspace" center-title="Slides" />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## GovernanceGrid

<GovernanceGrid />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## SecurityRadar

<SecurityRadar
  title="Calidad visual"
  detail="Un deck pulido necesita legibilidad, movimiento con intencion, componentes reutilizables y despliegue confiable."
/>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## MaturityCurve

<MaturityCurve />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## EChart

<EChart
  title="Tendencia interactiva"
  kicker="ECharts combo"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1500"
  caption="Bueno para series, animaciones y comparativas que necesitan mas control que Mermaid."
  :insights="[
    { label: 'Series', title: 'Dos lecturas', detail: 'Barras para volumen y linea para calidad en el mismo canvas.' },
    { label: 'Motion', title: 'Transicion de estado', detail: 'El chart actualiza valores y conserva interpolacion nativa.' },
    { label: 'Deck', title: 'Reusable', detail: 'El componente recibe option y conserva el estilo del repositorio.' }
  ]"
  :option="{
    grid: { top: 28, right: 18, bottom: 34, left: 42 },
    legend: { top: 0, right: 0, textStyle: { color: '#334155', fontWeight: 700 } },
    xAxis: {
      type: 'category',
      data: ['Brief', 'Draft', 'Visual', 'Final'],
      axisLine: { lineStyle: { color: '#94a3b8' } },
      axisLabel: { color: '#334155', fontWeight: 700 }
    },
    yAxis: {
      type: 'value',
      max: 100,
      splitLine: { lineStyle: { color: 'rgba(148, 163, 184, 0.22)' } },
      axisLabel: { color: '#64748b' }
    },
    series: [
      {
        name: 'Cobertura',
        type: 'bar',
        data: [28, 42, 56, 64],
        barWidth: 34,
        itemStyle: { borderRadius: [8, 8, 0, 0] }
      },
      {
        name: 'Confianza',
        type: 'line',
        data: [32, 44, 58, 68],
        smooth: true,
        symbolSize: 10,
        lineStyle: { width: 4 },
        areaStyle: { opacity: 0.12 }
      }
    ]
  }"
  :sequence="[
    {
      series: [
        { name: 'Cobertura', data: [42, 64, 82, 94] },
        { name: 'Confianza', data: [38, 58, 80, 96] }
      ]
    }
  ]"
/>

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## EChart Sankey

<EChart
  title="Flujo de composicion"
  kicker="ECharts sankey"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1600"
  caption="Bueno para mostrar transferencia, dependencia o distribucion entre capas."
  :insights="[
    { label: 'Flow', title: 'Peso visual', detail: 'El ancho de cada enlace comunica magnitud sin explicar de mas.' },
    { label: 'Layers', title: 'Lectura izquierda a derecha', detail: 'Ideal para datos que pasan por etapas o capacidades.' },
    { label: 'Use', title: 'Cuando usarlo', detail: 'Procesos, costos, adopcion, funnel, dependencias o energia de trabajo.' }
  ]"
  :option="{
    series: [
      {
        type: 'sankey',
        left: 16,
        right: 20,
        top: 18,
        bottom: 18,
        nodeWidth: 18,
        nodeGap: 12,
        emphasis: { focus: 'adjacency' },
        label: { color: '#0f172a', fontWeight: 800, fontSize: 12, position: 'inside' },
        lineStyle: { color: 'gradient', curveness: 0.5, opacity: 0.34 },
        data: [
          { name: 'Idea' },
          { name: 'Brief' },
          { name: 'Assets' },
          { name: 'Narrativa' },
          { name: 'Deck' },
          { name: 'QA' }
        ],
        links: [
          { source: 'Idea', target: 'Brief', value: 5 },
          { source: 'Brief', target: 'Narrativa', value: 4 },
          { source: 'Assets', target: 'Narrativa', value: 2 },
          { source: 'Narrativa', target: 'Deck', value: 5 },
          { source: 'Brief', target: 'QA', value: 1 },
          { source: 'Deck', target: 'QA', value: 3 }
        ]
      }
    ]
  }"
  :sequence="[
    {
      series: [
        {
          links: [
            { source: 'Idea', target: 'Brief', value: 8 },
            { source: 'Brief', target: 'Narrativa', value: 6 },
            { source: 'Assets', target: 'Narrativa', value: 4 },
            { source: 'Narrativa', target: 'Deck', value: 9 },
            { source: 'Brief', target: 'QA', value: 2 },
            { source: 'Deck', target: 'QA', value: 7 }
          ]
        }
      ]
    }
  ]"
/>

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## EChart Funnel

<EChart
  title="Conversion por etapa"
  kicker="ECharts funnel"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1450"
  caption="Bueno para explicar perdida, avance o seleccion por etapas sin depender de cajas Mermaid."
  :insights="[
    { label: 'Uso', title: 'Embudo real', detail: 'Conviene cuando cada etapa tiene una magnitud distinta.' },
    { label: 'Motion', title: 'Entrada escalonada', detail: 'Cada bloque aparece con delay para marcar progresion.' },
    { label: 'Slide', title: 'Pocos pasos', detail: 'Mantener cinco o seis etapas para que la lectura sea inmediata.' }
  ]"
  :option="{
    animationDuration: 780,
    animationDelay: (idx) => idx * 140,
    series: [
      {
        type: 'funnel',
        left: '4%',
        top: 18,
        bottom: 18,
        width: '72%',
        sort: 'none',
        gap: 5,
        minSize: '34%',
        maxSize: '100%',
        label: { position: 'inside', color: '#ffffff', fontWeight: 900, fontSize: 14 },
        labelLine: { show: false },
        itemStyle: { borderColor: 'rgba(255,255,255,0.72)', borderWidth: 2 },
        data: [
          { value: 100, name: 'Intake' },
          { value: 92, name: 'Brief' },
          { value: 84, name: 'Storyboard' },
          { value: 76, name: 'Build' },
          { value: 66, name: 'Visual QA' },
          { value: 58, name: 'Release' }
        ]
      }
    ]
  }"
  :sequence="[
    {
      series: [
        {
          data: [
            { value: 100, name: 'Intake' },
            { value: 82, name: 'Brief' },
            { value: 68, name: 'Storyboard' },
            { value: 54, name: 'Build' },
            { value: 38, name: 'Visual QA' },
            { value: 30, name: 'Release' }
          ]
        }
      ]
    }
  ]"
/>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## EChart Radar

<EChart
  title="Brecha de capacidades"
  kicker="ECharts radar"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1550"
  caption="Bueno para comparar estado actual contra objetivo en una sola lectura ejecutiva."
  :insights="[
    { label: 'Compare', title: 'Actual vs objetivo', detail: 'Dos poligonos comunican brecha sin tabla larga.' },
    { label: 'Motion', title: 'Area animada', detail: 'La forma crece y hace visible el cambio de postura.' },
    { label: 'Limit', title: 'Maximo seis ejes', detail: 'Mas ejes vuelve la slide dificil de presentar.' }
  ]"
  :option="{
    legend: { right: 2, top: 0, textStyle: { color: '#334155', fontWeight: 800 } },
    radar: {
      center: ['36%', '54%'],
      radius: '68%',
      splitNumber: 4,
      axisName: { color: '#334155', fontWeight: 900 },
      splitLine: { lineStyle: { color: 'rgba(100,116,139,0.22)' } },
      splitArea: { areaStyle: { color: ['rgba(47,129,247,0.04)', 'rgba(63,185,80,0.04)'] } },
      axisLine: { lineStyle: { color: 'rgba(100,116,139,0.28)' } },
      indicator: [
        { name: 'Narrativa', max: 100 },
        { name: 'Visual', max: 100 },
        { name: 'Datos', max: 100 },
        { name: 'QA', max: 100 },
        { name: 'Assets', max: 100 }
      ]
    },
    series: [
      {
        type: 'radar',
        symbolSize: 7,
        lineStyle: { width: 4 },
        areaStyle: { opacity: 0.18 },
        animationDelay: (idx) => idx * 180,
        data: [
          { name: 'Actual', value: [42, 50, 36, 44, 32] },
          { name: 'Objetivo', value: [66, 62, 54, 70, 50] }
        ]
      }
    ]
  }"
  :sequence="[
    {
      series: [
        {
          data: [
            { name: 'Actual', value: [62, 70, 54, 66, 48] },
            { name: 'Objetivo', value: [88, 86, 76, 92, 72] }
          ]
        }
      ]
    }
  ]"
/>

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## EChart Heatmap

<EChart
  title="Mapa de esfuerzo e impacto"
  kicker="ECharts heatmap"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1500"
  caption="Bueno para priorizacion, riesgo, cobertura o intensidad por dos dimensiones."
  :insights="[
    { label: 'Matrix', title: 'Dos dimensiones', detail: 'El color reemplaza texto repetido y acelera decisiones.' },
    { label: 'Motion', title: 'Celdas por oleada', detail: 'El delay por celda da sensacion de carga analitica.' },
    { label: 'Tip', title: 'Etiquetas cortas', detail: 'Usar siglas o palabras breves y explicar con insights.' }
  ]"
  :option="{
    grid: { top: 28, right: 18, bottom: 32, left: 82 },
    xAxis: {
      type: 'category',
      data: ['Bajo', 'Medio', 'Alto', 'Critico'],
      axisLabel: { color: '#334155', fontWeight: 800 },
      axisLine: { show: false },
      axisTick: { show: false }
    },
    yAxis: {
      type: 'category',
      data: ['Discovery', 'Contenido', 'Visual', 'Release'],
      axisLabel: { color: '#334155', fontWeight: 800 },
      axisLine: { show: false },
      axisTick: { show: false }
    },
    visualMap: {
      min: 0,
      max: 100,
      show: false,
      inRange: { color: ['#dbeafe', '#60a5fa', '#22c55e', '#f778ba'] }
    },
    series: [
      {
        type: 'heatmap',
        data: [[0,0,12],[1,0,24],[2,0,36],[3,0,44],[0,1,10],[1,1,26],[2,1,40],[3,1,52],[0,2,14],[1,2,34],[2,2,48],[3,2,58],[0,3,12],[1,3,28],[2,3,46],[3,3,54]],
        label: { show: true, color: '#0f172a', fontWeight: 900 },
        itemStyle: { borderColor: 'rgba(255,255,255,0.8)', borderWidth: 3, borderRadius: 6 },
        emphasis: { itemStyle: { shadowBlur: 14, shadowColor: 'rgba(47,129,247,0.25)' } },
        animationDelay: (idx) => idx * 38
      }
    ]
  }"
  :sequence="[
    {
      series: [
        { data: [[0,0,26],[1,0,42],[2,0,68],[3,0,78],[0,1,18],[1,1,54],[2,1,72],[3,1,92],[0,2,32],[1,2,66],[2,2,84],[3,2,96],[0,3,20],[1,3,48],[2,3,74],[3,3,88]] }
      ]
    }
  ]"
/>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## EChart Treemap

<EChart
  title="Mapa de arquitectura"
  kicker="ECharts treemap"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1600"
  caption="Bueno para jerarquias ponderadas: capacidades, presupuesto, incidentes, ownership o cobertura."
  :insights="[
    { label: 'Hierarchy', title: 'Tamano con sentido', detail: 'El area comunica importancia relativa de cada bloque.' },
    { label: 'Motion', title: 'Zoom mental', detail: 'La entrada por niveles da estructura sin animar cada texto.' },
    { label: 'Rule', title: 'Nombres breves', detail: 'Si el label es largo, mover la explicacion fuera del chart.' }
  ]"
  :option="{
    tooltip: { formatter: '{b}: {c}' },
    series: [
      {
        type: 'treemap',
        roam: false,
        nodeClick: false,
        left: 12,
        right: 12,
        top: 8,
        bottom: 8,
        breadcrumb: { show: false },
        label: { show: true, color: '#ffffff', fontWeight: 900, fontSize: 13 },
        upperLabel: { show: true, height: 24, color: '#0f172a', fontWeight: 900 },
        itemStyle: { borderColor: '#f8fbff', borderWidth: 4, gapWidth: 4, borderRadius: 8 },
        levels: [
          { itemStyle: { borderWidth: 0, gapWidth: 4 } },
          { colorSaturation: [0.35, 0.68], itemStyle: { gapWidth: 4 } }
        ],
        animationDuration: 900,
        animationDelay: (idx) => idx * 80,
        data: [
          {
            name: 'Story',
            value: 34,
            children: [
              { name: 'Brief', value: 12 },
              { name: 'Narrativa', value: 10 },
              { name: 'Secs', value: 6 }
            ]
          },
          {
            name: 'Visual',
            value: 30,
            children: [
              { name: 'Charts', value: 10 },
              { name: 'Media', value: 8 },
              { name: 'Mockups', value: 12 }
            ]
          },
          {
            name: 'Entrega',
            value: 16,
            children: [
              { name: 'Build', value: 8 },
              { name: 'QA', value: 8 }
            ]
          }
        ]
      }
    ]
  }"
  :sequence="[
    {
      series: [
        {
          data: [
            {
              name: 'Story',
              value: 34,
              children: [
                { name: 'Brief', value: 12 },
                { name: 'Narrativa', value: 14 },
                { name: 'Secs', value: 8 }
              ]
            },
            {
              name: 'Visual',
              value: 42,
              children: [
                { name: 'Charts', value: 16 },
                { name: 'Media', value: 10 },
                { name: 'Mockups', value: 16 }
              ]
            },
            {
              name: 'Entrega',
              value: 20,
              children: [
                { name: 'Build', value: 9 },
                { name: 'QA', value: 11 }
              ]
            }
          ]
        }
      ]
    }
  ]"
/>

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## EChart Gauge

<EChart
  title="Indicador de preparacion"
  kicker="ECharts gauge"
  height="306px"
  :sequence-delay="1100"
  :sequence-interval="1500"
  caption="Bueno para comunicar estado unico con movimiento claro y lectura de alto contraste."
  :insights="[
    { label: 'One', title: 'Una metrica principal', detail: 'Usarlo cuando el slide necesita un veredicto visual.' },
    { label: 'Motion', title: 'Indicador animado', detail: 'El gauge refuerza progreso o readiness sin explicar el eje.' },
    { label: 'Avoid', title: 'No llenar dashboards', detail: 'Si hay muchas metricas, usar bar/heatmap en vez de gauges.' }
  ]"
  :option="{
    series: [
      {
        type: 'gauge',
        center: ['36%', '56%'],
        radius: '72%',
        startAngle: 210,
        endAngle: -30,
        min: 0,
        max: 100,
        progress: { show: true, roundCap: true, width: 14 },
        axisLine: { roundCap: true, lineStyle: { width: 14, color: [[0.35, '#f778ba'], [0.7, '#f59e0b'], [1, '#3fb950']] } },
        pointer: { show: false },
        axisTick: { show: false },
        splitLine: { distance: 2, length: 10, lineStyle: { color: '#64748b', width: 2 } },
        axisLabel: { color: '#64748b', fontWeight: 800, distance: 24, fontSize: 11 },
        title: { offsetCenter: [0, '42%'], color: '#334155', fontWeight: 900, fontSize: 14 },
        detail: { valueAnimation: true, formatter: '{value}%', color: '#0f172a', fontSize: 34, fontWeight: 900, offsetCenter: [0, '10%'] },
        data: [{ value: 42, name: 'Draft' }]
      }
    ]
  }"
  :sequence="[
    {
      series: [
        { data: [{ value: 86, name: 'Ready' }] }
      ]
    }
  ]"
/>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## EChart Graphic

<div class="echart-graphic-grid">
  <EChart
    title="Stroke title"
    kicker="Graphic text"
    height="178px"
    density="compact"
    :sequence-delay="1900"
    :option="{
      graphic: {
        elements: [
          {
            id: 'stroke-title',
            type: 'text',
            left: 'center',
            top: 'middle',
            silent: true,
            style: {
              text: 'Decks',
              fontSize: 46,
              fontWeight: '900',
              fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
              lineDash: [0, 1000],
              lineDashOffset: 0,
              fill: 'transparent',
              stroke: '#0f172a',
              lineWidth: 1.4
            },
            keyframeAnimation: {
              duration: 1800,
              loop: false,
              keyframes: [
                { percent: 0, style: { lineDashOffset: 0, lineDash: [0, 1000], fill: 'transparent' } },
                { percent: 0.55, style: { lineDashOffset: 1000, lineDash: [1000, 0], fill: 'transparent' } },
                { percent: 0.78, style: { fill: 'transparent' } },
                { percent: 1, style: { fill: '#0f172a', lineDashOffset: 1000, lineDash: [1000, 0] } }
              ]
            }
          }
        ]
      }
    }"
    :sequence="[
      {
        graphic: {
          elements: [
            { id: 'stroke-title', style: { fill: '#0f172a', stroke: '#0f172a', lineDash: [1000, 0], lineDashOffset: 1000 } }
          ]
        }
      }
    ]"
  />
  <EChart
    title="Loading"
    kicker="Graphic bars"
    height="178px"
    density="compact"
    :option="{
      graphic: {
        elements: Array.from({ length: 6 }, (_, index) => ({
          type: 'rect',
          shape: { x: 74 + index * 24, y: 74, width: 14, height: 42 },
          style: { fill: index % 2 ? '#39c5cf' : '#2f81f7', opacity: 0.86 },
          keyframeAnimation: {
            duration: 960,
            delay: index * 90,
            loop: false,
            keyframes: [
              { percent: 0, shape: { y: 88, height: 22 }, style: { opacity: 0.42 } },
              { percent: 0.5, shape: { y: 54, height: 78 }, style: { opacity: 0.96 } },
              { percent: 1, shape: { y: 66, height: 58 }, style: { opacity: 0.86 } }
            ]
          }
        }))
      }
    }"
  />
  <EChart
    title="Wave"
    kicker="Graphic dots"
    height="178px"
    density="compact"
    :option="{
      graphic: {
        elements: Array.from({ length: 77 }, (_, index) => {
          const col = index % 11
          const row = Math.floor(index / 11)
          const wave = Math.abs(row - 3) + Math.abs(col - 5)
          return {
            type: 'circle',
            shape: { cx: 52 + col * 19, cy: 40 + row * 17, r: 4 },
            style: { fill: '#0f172a', opacity: 0.14 },
            keyframeAnimation: {
              duration: 1400,
              delay: wave * 52,
              loop: false,
              keyframes: [
                { percent: 0, scaleX: 0.7, scaleY: 0.7, style: { opacity: 0.12 } },
                { percent: 0.45, scaleX: 1.85, scaleY: 1.85, style: { opacity: 0.82 } },
                { percent: 1, scaleX: 1, scaleY: 1, style: { opacity: 0.44 } }
              ]
            }
          }
        })
      }
    }"
  />
</div>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## GraphDiagram

<GraphDiagram />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## SequenceDiagram

<SequenceDiagram />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## MermaidJourney

<MermaidJourney />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## MermaidRoadmap

<MermaidRoadmap />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## MermaidQuadrant

<MermaidQuadrant />

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Sequence Diagram

<MermaidDiagram
  title="Interaccion entre actores"
  kicker="Mermaid sequenceDiagram"
  density="compact"
  caption="Bueno para APIs, handoffs, aprobaciones y conversaciones entre equipos."
  :diagram="'sequenceDiagram\nparticipant User as Usuario\nparticipant Agent as Agente\nparticipant Repo as Repositorio\nUser->>Agent: Prompt del deck\nAgent->>Repo: Lee brief y catalogo\nRepo-->>Agent: Componentes y reglas\nAgent-->>User: Preguntas criticas o deck listo'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Gantt

<MermaidDiagram
  title="Plan de produccion"
  kicker="Mermaid gantt"
  density="compact"
  caption="Bueno para fases con fechas, dependencias y ventanas de entrega."
  :diagram="'gantt\ntitle Produccion del deck\ndateFormat YYYY-MM-DD\naxisFormat %d %b\nsection Discovery\nIntake :a1, 2026-06-10, 1d\nBrief :after a1, 1d\nsection Build\nSlides :2026-06-12, 3d\nVisual QA :after Slides, 1d\nsection Release\nDeploy :2026-06-16, 1d'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## GitGraph

<MermaidDiagram
  title="Estrategia de cambios"
  kicker="Mermaid gitGraph"
  density="compact"
  caption="Bueno para explicar ramas, merges, releases y checkpoints de trabajo."
  :diagram="'gitGraph\ncommit\nbranch feature\ncheckout feature\ncommit\ncommit\ncheckout main\nmerge feature\ncommit'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Mindmap

<MermaidDiagram
  title="Narrativa del deck"
  kicker="Mermaid mindmap"
  density="compact"
  caption="Bueno para discovery, taxonomias, lluvia de ideas y estructura conceptual."
  :diagram="'mindmap\n  root((Deck))\n    AUD\n      NIV\n      DOL\n      META\n    STO\n      IN\n      DEV\n      FIN\n    VIS\n      CMP\n      AST\n      DIA\n    QA\n      BLD\n      CAP\n      HND'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Pie Chart

<MermaidDiagram
  title="Balance del contenido"
  kicker="Mermaid pie"
  density="compact"
  caption="Bueno para proporciones simples con pocas categorias y una lectura inmediata."
  :diagram="'pie title Balance del deck\n  &quot;Narrativa&quot; : 35\n  &quot;Visuales&quot; : 30\n  &quot;Diagramas&quot; : 20\n  &quot;Validacion&quot; : 15'"
/>

---
transition: slide-left
---

<span class="kicker">Mermaid example</span>

## Timeline

<MermaidDiagram
  title="Evolucion de la idea"
  kicker="Mermaid timeline"
  density="compact"
  caption="Bueno para contar madurez, hitos, roadmap o historia de una iniciativa."
  :diagram="'timeline\ntitle Evolucion del deck\nPrompt : Intencion inicial\nBrief : Alcance y preguntas criticas\nStoryboard : Narrativa slide por slide\nShowcase : Componentes reutilizables\nRelease : Build y publicacion'"
/>

---
transition: slide-up
---

<span class="kicker">Mermaid example</span>

## Packet Diagram

<MermaidDiagram
  title="Contrato de entrega"
  kicker="Mermaid packet-beta"
  density="compact"
  caption="Bueno para protocolos, campos de payload y estructura de mensajes."
  :diagram="'packet-beta\ntitle Deck payload\n0-7: &quot;brief&quot;\n8-15: &quot;slides&quot;\n16-23: &quot;assets&quot;\n24-31: &quot;checks&quot;'"
/>

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## MediaFrame

<div class="media-showcase-grid">
  <MediaFrame kind="image" title="Image placeholder" caption="Imagen o screenshot legible" />
  <MediaFrame kind="video" title="Video placeholder" caption="Video local o asset del deck" />
  <MediaFrame kind="gif" title="GIF placeholder" caption="Animacion corta o demo loop" />
</div>

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## BrowserMockup

<BrowserMockup title="Light product surface" />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## MetricStrip

<MetricStrip />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## ComparisonTable

<ComparisonTable />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## DecisionMatrix

<DecisionMatrix />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## HierarchyTree

<HierarchyTree />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## IconGrid

<IconGrid />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## ShapeSystem

<ShapeSystem />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## TimelineFlow

<TimelineFlow />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## SwimlaneFlow

<SwimlaneFlow />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## PyramidDiagram

<PyramidDiagram />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## VennDiagram

<VennDiagram />

---
transition: slide-up
---

<span class="kicker">Shared component</span>

## CalloutStack

<CalloutStack />

---
transition: fade
---

<span class="kicker">Shared component</span>

## QuoteFrame

<QuoteFrame />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## ArchitectureLayers

<ArchitectureLayers />

---
transition: slide-left
---

<span class="kicker">Shared component</span>

## Shape3DStage

<Shape3DStage />

---
transition: fade
---

<span class="kicker">Reglas de uso</span>

## Como decidir donde vive un componente

<div class="showcase-usage">
  <div v-click>
    <span>Shared</span>
    <strong>Generico, data-driven y reusable.</strong>
    <small>Va en `shared/components/` y se importa explicitamente.</small>
  </div>
  <div v-click>
    <span>Deck local</span>
    <strong>Depende de producto, charla o CTA.</strong>
    <small>Vive en `decks/&lt;slug&gt;/components/` hasta generalizarse.</small>
  </div>
  <div v-click>
    <span>Documentacion</span>
    <strong>El catalogo se actualiza con el cambio.</strong>
    <small>README y `docs/component-catalog.md` deben viajar en el mismo commit.</small>
  </div>
  <div v-click>
    <span>Validacion</span>
    <strong>Si compila, aun falta mirar.</strong>
    <small>Revisar portada, slide densa, componente visual y navegacion.</small>
  </div>
</div>
