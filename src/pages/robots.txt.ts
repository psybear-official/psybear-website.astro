import type { APIRoute } from 'astro'

// All crawlers, including AI agents, are welcome. Staging pages carry a noindex meta tag instead.
export const GET: APIRoute = ({ site }) => {
  const sitemapUrl = new URL(
    `${import.meta.env.BASE_URL.replace(/\/$/, '')}/sitemap-index.xml`,
    site
  )
  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl.href}\n`,
    {
      headers: { 'Content-Type': 'text/plain; charset=utf-8' },
    }
  )
}
