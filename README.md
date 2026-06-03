# Slides

Repositorio multi-deck para presentaciones como código con Slidev.

## Estructura

```text
decks/
  github-enterprise-platform/
    slides.md
    components/
    public/
  _template/
    slides.md
data/
  person.js
shared/
  components/
  styles/
    theme.css
  public/
    speaker/
scripts/
  deck.mjs
```

- `decks/<slug>/slides.md`: entrada principal de cada presentación.
- `decks/<slug>/public/`: assets propios del deck.
- `decks/<slug>/components/`: componentes Vue propios del deck.
- `data/person.js`: datos personales canónicos del dueño del repositorio.
- `shared/components/`: componentes Vue reutilizables entre decks.
- `shared/styles/theme.css`: estilos compartidos por todos los decks.
- `shared/public/`: assets reutilizables entre presentaciones, como QR o foto.

## Uso

Instala dependencias:

```bash
npm install
```

Tambien puedes usar `make`:

```bash
make install
make list
make dev DECK=github-enterprise-platform
make build DECK=github-enterprise-platform
make check DECK=github-enterprise-platform
```

Lista decks disponibles:

```bash
npm run list
```

Desarrolla un deck:

```bash
npm run dev -- github-enterprise-platform
```

Compila un deck:

```bash
npm run build -- github-enterprise-platform
```

Compila todos:

```bash
npm run build:all
```

Exporta:

```bash
npm run export:pdf -- github-enterprise-platform
npm run export:pptx -- github-enterprise-platform
```

## Despliegue

El workflow `Deploy Slides` permite publicar en GitHub Pages:

- `target = all`: publica todos los decks en `dist/<deck>/`.
- `target = <slug>`: publica solo ese deck.
- `target = custom`: permite escribir un slug que aun no este en el dropdown.

En GitHub Pages, configura el origen como **GitHub Actions**.

Para desplegar manualmente:

1. Ve a **Actions**.
2. Abre **Deploy Slides**.
3. Ejecuta **Run workflow**.
4. Elige `all`, un deck disponible o `custom`.

Cuando se agregue un deck estable, conviene sumar su slug a las opciones del
workflow para que aparezca en el selector.

## Componentes Disponibles

El catalogo visual actual nace del deck `github-enterprise-platform`. Sus
componentes viven en `decks/github-enterprise-platform/components/` y sirven
como base para nuevos decks. Cuando un componente se use en mas de una
presentacion y deje de depender del tema GitHub, debe moverse o generalizarse en
`shared/components/`.

| Componente | Uso principal | Estado |
| --- | --- | --- |
| `SpeakerProfile` | Slide de presentacion personal con QR, roles, handles y metadata desde datos compartidos. | Reutilizable con `data/person.js` |
| `TypingTitle` | Titulos con revelado tipo escritura limpio para portadas o separadores. | Reutilizable |
| `GitHubMockup` | Mockups HTML/CSS de superficies tipo GitHub: checks, org admin y seguridad. | Especifico GitHub |
| `PlatformMap` | Mapa de etapas, dominios o transformacion de herramienta a plataforma. | Candidato a shared |
| `EnterpriseTopology` | Diagrama compacto de dependencias y dominios empresariales. | Candidato a shared |
| `GovernanceGrid` | Grilla 2x2 para pilares, gobierno u operating model. | Candidato a shared |
| `BranchProtectionFlow` | Flujo lineal de PR, checks, reviews y merge gates. | Especifico GitHub |
| `SecurityRadar` | Radar visual para capacidades, riesgos o postura de seguridad. | Candidato a shared |
| `CopilotFlow` | Flujo de productividad/adopcion con asistente de codigo. | Especifico GitHub/Copilot |
| `MaturityCurve` | Curva de madurez con etapas y puntos de decision. | Candidato a shared |
| `TrialCard` | Tarjeta CTA para trial de GitHub Enterprise. | Especifico GitHub |

El detalle de props, casos de uso y criterios de promocion esta en
[docs/component-catalog.md](docs/component-catalog.md).

## Lineamientos

Para mantener consistencia visual y narrativa entre presentaciones, usa
[docs/slide-guidelines.md](docs/slide-guidelines.md) como base para futuros decks
e iteraciones con IA.

Documentacion operativa:

- [Estado actual](docs/project-state.md)
- [Catalogo de componentes](docs/component-catalog.md)
- [Guia para crear decks con IA](docs/new-deck-agent-guide.md)

Los agentes de IA deben seguir tambien [agent.md](agent.md).

Regla de mantenimiento: cada vez que se cree, elimine, renombre o promueva un
componente visual, el mismo commit debe actualizar este README y
`docs/component-catalog.md`. Si el componente cambia una regla visual
reutilizable, tambien debe actualizar `docs/slide-guidelines.md`.

## Datos Personales

Este repositorio esta pensado para multiples presentaciones de una misma persona.
Los datos que no cambian entre charlas viven en `data/person.js`: nombre,
headline, organizacion, ubicacion, roles, tags, redes y QR de LinkedIn.

Los assets personales compartidos viven en `shared/public/speaker/`. Si un deck
necesita una variante especifica, crea un `decks/<slug>/data/speaker.js` que
importe `person` y sobreescriba solo lo necesario, por ejemplo `talkRole`.
