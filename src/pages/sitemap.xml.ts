import type { APIRoute } from 'astro'

// Lists every published page: .astro files under src/pages, skipping `_`-prefixed (unpublished)
// files and folders and dynamic routes. A new page is picked up without editing this file.
const pageFiles = Object.keys(import.meta.glob('./**/*.astro'))

const pagePaths = pageFiles
  .filter((file) => !file.split('/').some((segment) => segment.startsWith('_')))
  .filter((file) => !file.includes('['))
  .map((file) => {
    const route = file
      .replace(/^\./, '')
      .replace(/\.astro$/, '')
      .replace(/(^|\/)index$/, '')
    return route === '' ? '/' : `${route}/`
  })
  .sort()

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const urls = pagePaths
    .map(
      (path) =>
        `  <url><loc>${new URL(`${base}${path}`, site).href}</loc></url>`
    )
    .join('\n')

  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
  return new Response(body, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  })
}
