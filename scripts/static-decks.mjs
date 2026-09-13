import { cpSync, existsSync, mkdirSync, readFileSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, resolve, sep } from 'node:path'

export function staticDeckMeta(directory) {
  const meta = JSON.parse(readFileSync(join(directory, 'deck.json'), 'utf8'))
  if (!['title', 'description'].every((key) => typeof meta[key] === 'string' && meta[key].trim())) {
    throw new Error(`${directory}/deck.json requires title and description`)
  }
  return meta
}

export function buildStaticDeck(directory, output) {
  staticDeckMeta(directory)
  mkdirSync(output, { recursive: true })
  if (existsSync(join(directory, 'public'))) {
    cpSync(join(directory, 'public'), output, { recursive: true })
  }
  // Preserve the supplied document, including inline assets, scripts and metadata.
  cpSync(join(directory, 'index.html'), join(output, 'index.html'))
}

export function serveStaticDeck(directory, port) {
  const root = resolve(directory)
  const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.webp': 'image/webp' }
  const server = createServer((request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname)
      let file = resolve(root, `.${pathname}`)
      if (file !== root && !file.startsWith(`${root}${sep}`)) {
        response.writeHead(403).end('Forbidden')
        return
      }
      if (statSync(file).isDirectory()) file = join(file, 'index.html')
      const body = readFileSync(file)
      response.writeHead(200, { 'Content-Type': types[extname(file)] ?? 'application/octet-stream' })
      response.end(body)
    } catch {
      response.writeHead(404).end('Not found')
    }
  })
  server.listen(port, '127.0.0.1', () => {
    console.log(`Static deck: http://127.0.0.1:${server.address().port}/`)
  })
  return server
}
