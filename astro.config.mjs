// @ts-check
import { defineConfig, fontProviders } from 'astro/config'

import tailwindcss from '@tailwindcss/vite'
import react from '@astrojs/react'
import varlockAstroIntegration from '@varlock/astro-integration'
import { ENV } from 'varlock/env'

// https://astro.build/config
export default defineConfig({
  output: 'static',
  // Staging is served under a path prefix on web1 (e.g. /psybear-staging).
  base: ENV.BASE_PATH,
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [varlockAstroIntegration(), react()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-geist',
      fallbacks: ['Inter', 'sans-serif'],
    },
  ],
})
