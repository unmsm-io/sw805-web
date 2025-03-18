// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import vesperDark from "./public/theme/vesper-dark.json";
import vesperLight from "./public/theme/vesper-light.json";

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [mdx()],
  markdown: {
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
