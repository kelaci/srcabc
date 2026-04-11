// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";
import { siteConfig } from "./site.config.mjs";

export default defineConfig({
  output: "static",
  integrations: [sitemap()],
  site: siteConfig.url,
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [/** @type {any} */ (tailwind())],
  },
});
