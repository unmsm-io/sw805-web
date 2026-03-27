import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const labSchema = z.object({
  title: z.string(),
  description: z.string(),
  dueDate: z.string(),
  files: z.array(z.string()),
  path: z.string(),
  author: z.string(),
  authorImageUrl: z.string(),
  pubDate: z.string(),
});

const labs = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/labs' }),
  schema: labSchema,
});

const labsEn = defineCollection({
  loader: glob({ pattern: '**/*.mdx', base: './src/content/labs-en' }),
  schema: labSchema,
});

export const collections = { labs, 'labs-en': labsEn }; 