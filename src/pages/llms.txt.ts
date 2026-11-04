import type { APIRoute } from 'astro'
import {
  SITE_TITLE,
  SITE_DESCRIPTION,
  EMAIL_ADDRESS,
  LOCATION,
  MUSIC_STYLES,
  SOCIAL_LINKS,
  FESTIVALS,
} from '../consts'

// Plain-text summary for AI agents (https://llmstxt.org), built from the same data as the site.
export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  const pageUrl = (path: string) => new URL(`${base}${path}`, site).href

  const festivalLines = FESTIVALS.map(
    (festival) =>
      `- ${festival.name} (${festival.country})${festival.closing ? ', closing set' : ''}`
  )

  const body = [
    `# ${SITE_TITLE}`,
    '',
    `> ${SITE_DESCRIPTION}`,
    '',
    `${SITE_TITLE} is the DJ name of Sergei, based in ${LOCATION.city}, ${LOCATION.country}. He discovered psytrance in 2018 and plays uplifting Day Full On and Progressive sets at festivals and parties across New Zealand and abroad.`,
    '',
    '## Bookings',
    '',
    `- Email: ${EMAIL_ADDRESS}`,
    `- Location: ${LOCATION.city}, ${LOCATION.country}`,
    '',
    '## Music style',
    '',
    ...MUSIC_STYLES.map((style) => `- ${style}`),
    '',
    '## Pages',
    '',
    `- [Home](${pageUrl('/')}): introduction`,
    `- [Press Kit](${pageUrl('/presskit/')}): bio, music style, logos, press photo, socials, festivals played`,
    `- [Contact](${pageUrl('/contact/')}): booking email`,
    '',
    '## Socials',
    '',
    ...SOCIAL_LINKS.map((link) => `- [${link.label}](${link.href})`),
    '',
    '## Festivals played',
    '',
    ...festivalLines,
    '',
  ].join('\n')

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
