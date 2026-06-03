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

El workflow intenta habilitar GitHub Pages automaticamente usando
`actions/configure-pages` con `enablement: true`. Si el primer despliegue falla
por politicas del repositorio u organizacion, entra a **Settings > Pages** y
configura el origen como **GitHub Actions**.

Para desplegar manualmente:

1. Ve a **Actions**.
2. Abre **Deploy Slides**.
3. Ejecuta **Run workflow**.
4. Elige `all`, un deck disponible o `custom`.

Cuando se agregue un deck estable, conviene sumar su slug a las opciones del
workflow para que aparezca en el selector.

## Componentes Disponibles

El catalogo visual tiene dos capas:

- `shared/components/`: componentes globales, data-driven y reutilizables.
- `decks/<slug>/components/`: componentes especificos de una charla o producto.

Slidev auto-importa los componentes locales de cada deck. Los componentes
globales deben importarse explicitamente desde `slides.md`.

| Componente | Uso principal | Ubicacion |
| --- | --- | --- |
| `SpeakerProfile` | Slide de presentacion personal con QR, roles, handles y metadata desde datos compartidos. | `shared/components/` |
| `TypingTitle` | Titulos con revelado tipo escritura limpio para portadas o separadores. | `shared/components/` |
| `PlatformMap` | Mapa de etapas, dominios o transformacion de herramienta a plataforma. | `shared/components/` |
| `EnterpriseTopology` | Diagrama compacto de dependencias y dominios empresariales. | `shared/components/` |
| `GovernanceGrid` | Grilla 2x2 para pilares, gobierno u operating model. | `shared/components/` |
| `SecurityRadar` | Radar visual para capacidades, riesgos o postura de seguridad. | `shared/components/` |
| `MaturityCurve` | Curva de madurez con etapas y puntos de decision. | `shared/components/` |
| `GitHubMockup` | Mockups HTML/CSS de superficies tipo GitHub: checks, org admin y seguridad. | `decks/github-enterprise-platform/components/` |
| `BranchProtectionFlow` | Flujo lineal de PR, checks, reviews y merge gates. | `decks/github-enterprise-platform/components/` |
| `CopilotFlow` | Flujo de productividad/adopcion con asistente de codigo. | `decks/github-enterprise-platform/components/` |
| `TrialCard` | Tarjeta CTA para trial de GitHub Enterprise. | `decks/github-enterprise-platform/components/` |

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
