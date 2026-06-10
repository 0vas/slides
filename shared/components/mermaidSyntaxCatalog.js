export const mermaidSyntaxCatalog = [
  {
    id: 'flowchart',
    title: 'Flowchart',
    keyword: 'flowchart',
    status: 'ready',
    use: 'Procesos, arquitectura logica, decisiones y rutas de trabajo.',
    starter: 'flowchart LR; A[Input] --> B[Decision]; B --> C[Outcome];'
  },
  {
    id: 'sequence',
    title: 'Sequence Diagram',
    keyword: 'sequenceDiagram',
    status: 'ready',
    use: 'Conversaciones entre actores, sistemas, APIs o equipos.',
    starter: 'sequenceDiagram\\nActor->>System: Request\\nSystem-->>Actor: Response'
  },
  {
    id: 'class',
    title: 'Class Diagram',
    keyword: 'classDiagram',
    status: 'ready',
    use: 'Modelos de dominio, contratos, objetos y relaciones tecnicas.',
    starter: 'classDiagram\\nclass Service\\nclass Repository\\nService --> Repository'
  },
  {
    id: 'state',
    title: 'State Diagram',
    keyword: 'stateDiagram-v2',
    status: 'ready',
    use: 'Estados de una capacidad, workflow, control o ciclo de vida.',
    starter: 'stateDiagram-v2\\n[*] --> Draft\\nDraft --> Review\\nReview --> Done'
  },
  {
    id: 'er',
    title: 'Entity Relationship Diagram',
    keyword: 'erDiagram',
    status: 'ready',
    use: 'Entidades, datos, ownership, dominios y relaciones persistentes.',
    starter: 'erDiagram\\nCUSTOMER ||--o{ ORDER : places'
  },
  {
    id: 'journey',
    title: 'User Journey',
    keyword: 'journey',
    status: 'ready',
    use: 'Adopcion, experiencia, friccion y momentos humanos del cambio.',
    starter: 'journey\\ntitle Adoption\\nsection Discover\\nUnderstand need: 4: User'
  },
  {
    id: 'gantt',
    title: 'Gantt',
    keyword: 'gantt',
    status: 'ready',
    use: 'Planes con fechas, dependencias, fases y ejecucion temporal.',
    starter: 'gantt\\ntitle Plan\\ndateFormat YYYY-MM-DD\\nDiscovery : 2026-01-01, 7d'
  },
  {
    id: 'pie',
    title: 'Pie Chart',
    keyword: 'pie',
    status: 'ready',
    use: 'Distribuciones simples; usar con pocas categorias y alta legibilidad.',
    starter: 'pie title Coverage\\n  \"Ready\" : 60\\n  \"Pending\" : 40'
  },
  {
    id: 'quadrant',
    title: 'Quadrant Chart',
    keyword: 'quadrantChart',
    status: 'ready',
    use: 'Priorizacion, valor vs esfuerzo, impacto vs riesgo y trade-offs.',
    starter: 'quadrantChart\\ntitle Priority\\nx-axis Low --> High\\ny-axis Low --> High'
  },
  {
    id: 'requirement',
    title: 'Requirement Diagram',
    keyword: 'requirementDiagram',
    status: 'ready',
    use: 'Trazabilidad entre requisitos, controles, evidencias y artefactos.',
    starter: 'requirementDiagram\\nrequirement req1 {\\nid: 1\\ntext: Must validate\\nrisk: medium\\nverifymethod: test\\n}'
  },
  {
    id: 'gitgraph',
    title: 'GitGraph Diagram',
    keyword: 'gitGraph',
    status: 'ready',
    use: 'Ramas, releases, merges, cambios paralelos y estrategias Git.',
    starter: 'gitGraph\\ncommit\\nbranch feature\\ncheckout feature\\ncommit'
  },
  {
    id: 'c4',
    title: 'C4 Diagram',
    keyword: 'C4Context',
    status: 'experimental',
    use: 'Contexto, contenedores y arquitectura de sistemas a alto nivel.',
    starter: 'C4Context\\nPerson(user, \"User\")\\nSystem(system, \"Platform\")\\nRel(user, system, \"Uses\")'
  },
  {
    id: 'mindmap',
    title: 'Mindmap',
    keyword: 'mindmap',
    status: 'ready',
    use: 'Exploracion de ideas, taxonomias, discovery y mapas mentales.',
    starter: 'mindmap\\n  root((Deck))\\n    Narrative\\n    Visuals\\n    Validation'
  },
  {
    id: 'timeline',
    title: 'Timeline',
    keyword: 'timeline',
    status: 'ready',
    use: 'Roadmaps, hitos, evolucion, madurez y narrativa cronologica.',
    starter: 'timeline\\ntitle Roadmap\\nNow : Brief\\nNext : Build\\nLater : Validate'
  },
  {
    id: 'zenuml',
    title: 'ZenUML',
    keyword: 'zenuml',
    status: 'candidate',
    use: 'Secuencias estilo UML textual; no viene habilitado en el bundle actual.',
    starter: 'zenuml\\ntitle Login\\nA->B: request\\nB-->A: response'
  },
  {
    id: 'sankey',
    title: 'Sankey',
    keyword: 'sankey-beta',
    status: 'beta',
    use: 'Flujos de volumen, energia, esfuerzo, presupuesto o conversion.',
    starter: 'sankey-beta\\nDiscovery,Build,10\\nBuild,Validate,8\\nBuild,Rework,2'
  },
  {
    id: 'xychart',
    title: 'XY Chart',
    keyword: 'xychart-beta',
    status: 'beta',
    use: 'Series simples, tendencias, barras o comparaciones numericas.',
    starter: 'xychart-beta\\ntitle \"Quality\"\\nx-axis [Jan, Feb, Mar]\\ny-axis \"Score\" 0 --> 100\\nbar [62, 74, 88]'
  },
  {
    id: 'block',
    title: 'Block Diagram',
    keyword: 'block-beta',
    status: 'beta',
    use: 'Bloques estructurales, layouts conceptuales y mapas modulares.',
    starter: 'block-beta\\ncolumns 3\\na[Idea] b[Brief] c[Deck]'
  },
  {
    id: 'packet',
    title: 'Packet',
    keyword: 'packet-beta',
    status: 'beta',
    use: 'Campos de paquetes, protocolos, payloads y estructuras binarias.',
    starter: 'packet-beta\\ntitle Packet\\n0-15: \"Source\"\\n16-31: \"Target\"'
  }
]

export const mermaidStatusLabels = {
  ready: 'Ready',
  experimental: 'Experimental',
  beta: 'Beta',
  candidate: 'Candidate'
}
