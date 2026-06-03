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

- `deck = all`: publica todos los decks en `dist/<deck>/`.
- `deck = <slug>`: publica solo ese deck.

En GitHub Pages, configura el origen como **GitHub Actions**.

## Lineamientos

Para mantener consistencia visual y narrativa entre presentaciones, usa
[docs/slide-guidelines.md](docs/slide-guidelines.md) como base para futuros decks
e iteraciones con IA.

Los agentes de IA deben seguir tambien [agent.md](agent.md).

## Datos Personales

Este repositorio esta pensado para multiples presentaciones de una misma persona.
Los datos que no cambian entre charlas viven en `data/person.js`: nombre,
headline, organizacion, ubicacion, roles, tags, redes y QR de LinkedIn.

Los assets personales compartidos viven en `shared/public/speaker/`. Si un deck
necesita una variante especifica, crea un `decks/<slug>/data/speaker.js` que
importe `person` y sobreescriba solo lo necesario, por ejemplo `talkRole`.
