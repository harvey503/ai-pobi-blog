// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: "https://aipobi.com",
  base: "/",

  integrations: [
    tailwind(),
    sitemap({ changefreq: "weekly", priority: 0.7 }),
    robotsTxt(),
  ],

  output: "static",
  build: {
    inlineStylesheets: "auto",
  },

  markdown: {
    shikiConfig: {
      theme: "github-dark",
      wrap: false,
    },
  },

  image: {
    service: {
      entrypoint: "astro/assets/services/sharp",
    },
  },
});
