// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";

export default defineConfig({
  output: "static",
  integrations: [sitemap()],
  site: "https://srcabc.com",
  vite: {
    plugins: [/** @type {any} */ (tailwind())],
  },
});
