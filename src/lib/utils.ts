// Prefixes an internal path with the configured base path (see astro.config.mjs).
export function withBase(path: string) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '')
  return path.startsWith('/') ? `${base}${path}` : path
}
