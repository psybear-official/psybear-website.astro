import { glob } from 'astro/loaders'
import { reference, defineCollection } from 'astro:content'
import { z } from 'astro/zod'

const articles = defineCollection({
  loader: glob({
    pattern: ['**/*.md', '**/*.mdx'],
    base: './src/content/articles',
  }),
  schema: ({ image }) =>
    z.object({
      cover: image(),
      coverAlt: z.string(),
      title: z.string(),
      slug: z.string(),
      snippet: z.string(),
      category: z.string(),
      pubDate: z.coerce.date(),
      readingDuration: z.number(),
      originalLink: z.url(),
      isDraft: z.boolean().default(false),
      updatedDate: z.coerce.date().optional(),
      author: z.string().default('Retro Rocket Team'),
      relatedArticles: z.array(reference('articles')).optional(),
    }),
})

export const collections = { articles }
