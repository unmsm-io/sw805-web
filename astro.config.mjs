// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import vesperDark from "./public/theme/vesper-dark.json";
import vesperLight from "./public/theme/vesper-light.json";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  site: "https://sw805.vercel.app",
  integrations: [mdx()],
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [
      [
        rehypeKatex,
        {
          // Katex plugin options
        }
      ],
      rehypeSlug,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }]
    ],
    shikiConfig: {
      themes: {
        // @ts-ignore
        light: vesperLight,
        // @ts-ignore
        dark: vesperDark,
      },
      langs: [],
      transformers: [
        {
          line(node, line) {
            node.properties["data-line"] = line;
            this.addClassToHast(node, "line");
          },
        },
      ],
    },
  },
});
