import { cpSync, mkdirSync, readdirSync, existsSync, rmSync, writeFileSync } from 'node:fs'
import { basename, dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { spawnSync } from 'node:child_process'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const decksDir = join(root, 'decks')
const repoName = basename(root)

const command = process.argv[2] || 'list'
const deck = process.argv[3]

function decks() {
  return readdirSync(decksDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !name.startsWith('_'))
    .sort()
}

function usage() {
  console.log(`Usage:
  npm run list
  npm run dev -- <deck>
  npm run build -- <deck>
  npm run build:all
  npm run export:pdf -- <deck>
  npm run export:pptx -- <deck>`)
}

function resolveDeck(slug) {
  if (!slug) {
    usage()
    process.exit(1)
  }

  const slides = join(decksDir, slug, 'slides.md')

  if (!existsSync(slides)) {
    console.error(`Deck not found: ${slug}`)
    console.error(`Available decks: ${decks().join(', ') || '(none)'}`)
    process.exit(1)
  }

  return slides
}

function run(args) {
  const result = spawnSync('npx', ['slidev', ...args], {
    cwd: root,
    stdio: 'inherit',
    shell: process.platform === 'win32'
  })

  if (result.status !== 0) {
    process.exit(result.status ?? 1)
  }
}

function basePath(slug) {
  return process.env.BASE_PATH ?? `/${repoName}/${slug}/`
}

function build(slug) {
  const tempOut = join(decksDir, slug, '.slidev-dist')
  const finalOut = join(root, 'dist', slug)

  rmSync(tempOut, { recursive: true, force: true })
  rmSync(finalOut, { recursive: true, force: true })

  run([
    'build',
    resolveDeck(slug),
    '--out',
    tempOut,
    '--base',
    basePath(slug)
  ])

  mkdirSync(join(root, 'dist'), { recursive: true })
  cpSync(tempOut, finalOut, { recursive: true })
  rmSync(tempOut, { recursive: true, force: true })
}

function writeIndex(slugs) {
  const links = slugs
    .map((slug) => `<li><a href="./${slug}/">${slug}</a></li>`)
    .join('\n')

  mkdirSync(join(root, 'dist'), { recursive: true })
  writeFileSync(
    join(root, 'dist', 'index.html'),
    `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Slides</title>
    <style>
      body {
        color: #101418;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        margin: 0;
        padding: 48px;
      }
      main {
        max-width: 760px;
      }
      h1 {
        font-size: 2.4rem;
        letter-spacing: 0;
        margin: 0 0 16px;
      }
      p {
        color: #667085;
      }
      ul {
        display: grid;
        gap: 12px;
        list-style: none;
        margin: 32px 0 0;
        padding: 0;
      }
      a {
        border: 1px solid #d0d7de;
        border-radius: 8px;
        color: #0969da;
        display: block;
        padding: 16px 18px;
        text-decoration: none;
      }
      a:hover {
        background: #f6f8fa;
      }
    </style>
  </head>
  <body>
    <main>
      <h1>Slides</h1>
      <p>Presentaciones disponibles en este repositorio.</p>
      <ul>
        ${links}
      </ul>
    </main>
  </body>
</html>
`
  )
}

switch (command) {
  case 'list': {
    console.log(decks().join('\n'))
    break
  }
  case 'dev': {
    run([resolveDeck(deck), '--port', process.env.PORT ?? '4100'])
    break
  }
  case 'build': {
    build(deck)
    writeIndex([deck])
    break
  }
  case 'build-all': {
    const slugs = decks()
    for (const slug of slugs) {
      build(slug)
    }
    writeIndex(slugs)
    break
  }
  case 'export-pdf': {
    run(['export', resolveDeck(deck), '--format', 'pdf', '--output', `${deck}.pdf`])
    break
  }
  case 'export-pptx': {
    run(['export', resolveDeck(deck), '--format', 'pptx', '--output', `${deck}.pptx`])
    break
  }
  default: {
    usage()
    process.exit(1)
  }
}
