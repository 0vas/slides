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

function deckSlides(slug) {
  return join(decksDir, slug, 'slides.md')
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

function editDistance(a, b) {
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index)
  const current = Array.from({ length: b.length + 1 }, () => 0)

  for (let i = 1; i <= a.length; i += 1) {
    current[0] = i

    for (let j = 1; j <= b.length; j += 1) {
      const substitutionCost = a[i - 1] === b[j - 1] ? 0 : 1
      current[j] = Math.min(
        current[j - 1] + 1,
        previous[j] + 1,
        previous[j - 1] + substitutionCost
      )
    }

    previous.splice(0, previous.length, ...current)
  }

  return previous[b.length]
}

function closestDeck(slug, availableDecks) {
  const candidates = availableDecks
    .map((name) => ({ name, distance: editDistance(slug, name) }))
    .sort((a, b) => a.distance - b.distance || a.name.localeCompare(b.name))

  const [best, second] = candidates
  const threshold = Math.max(2, Math.floor(slug.length * 0.18))

  if (!best || best.distance > threshold) {
    return undefined
  }

  if (second && second.distance === best.distance) {
    return undefined
  }

  return best.name
}

function resolveDeckSlug(slug) {
  if (!slug) {
    usage()
    process.exit(1)
  }

  const availableDecks = decks()

  if (availableDecks.includes(slug) && existsSync(deckSlides(slug))) {
    return slug
  }

  const match = closestDeck(slug, availableDecks)

  if (match && existsSync(deckSlides(match))) {
    console.log(`Deck not found: ${slug}. Using closest match: ${match}`)
    return match
  }

  console.error(`Deck not found: ${slug}`)
  console.error(`Available decks: ${availableDecks.join(', ') || '(none)'}`)
  process.exit(1)
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

function portPids(port) {
  if (process.platform === 'win32') {
    return []
  }

  const result = spawnSync('lsof', ['-ti', `tcp:${port}`, '-sTCP:LISTEN'], {
    cwd: root,
    encoding: 'utf8'
  })

  if (result.status !== 0 && !result.stdout) {
    return []
  }

  return result.stdout
    .split('\n')
    .map((pid) => pid.trim())
    .filter(Boolean)
    .filter((pid) => pid !== String(process.pid))
}

function waitForPort(port) {
  for (let attempt = 0; attempt < 20; attempt += 1) {
    if (portPids(port).length === 0) {
      return true
    }

    spawnSync('sleep', ['0.1'])
  }

  return false
}

function freePort(port) {
  const pids = portPids(port)

  if (pids.length === 0) {
    return
  }

  console.log(`Port ${port} is already in use. Stopping process(es): ${pids.join(', ')}`)

  for (const pid of pids) {
    try {
      process.kill(Number(pid), 'SIGTERM')
    } catch {
      // Process may have already exited.
    }
  }

  if (waitForPort(port)) {
    return
  }

  for (const pid of portPids(port)) {
    try {
      process.kill(Number(pid), 'SIGKILL')
    } catch {
      // Process may have already exited.
    }
  }

  if (!waitForPort(port)) {
    console.error(`Could not free port ${port}`)
    process.exit(1)
  }
}

function basePath(slug) {
  return process.env.BASE_PATH ?? `/${repoName}/${slug}/`
}

function build(requestedSlug) {
  const slug = resolveDeckSlug(requestedSlug)
  const tempOut = join(decksDir, slug, '.slidev-dist')
  const finalOut = join(root, 'dist', slug)

  rmSync(tempOut, { recursive: true, force: true })
  rmSync(finalOut, { recursive: true, force: true })

  run([
    'build',
    deckSlides(slug),
    '--out',
    tempOut,
    '--base',
    basePath(slug)
  ])

  mkdirSync(join(root, 'dist'), { recursive: true })
  cpSync(tempOut, finalOut, { recursive: true })
  rmSync(tempOut, { recursive: true, force: true })

  return slug
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
    const port = process.env.PORT ?? '4100'
    const slug = resolveDeckSlug(deck)
    freePort(port)
    run([deckSlides(slug), '--port', port])
    break
  }
  case 'build': {
    const slug = build(deck)
    writeIndex([slug])
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
    const slug = resolveDeckSlug(deck)
    run(['export', deckSlides(slug), '--format', 'pdf', '--output', `${slug}.pdf`])
    break
  }
  case 'export-pptx': {
    const slug = resolveDeckSlug(deck)
    run(['export', deckSlides(slug), '--format', 'pptx', '--output', `${slug}.pptx`])
    break
  }
  default: {
    usage()
    process.exit(1)
  }
}
