// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwind from "@tailwindcss/vite";
import { siteConfig } from "./site.config.mjs";

/** @type {[string, ...string[]]} */
const FONT_SUBSETS = ["latin", "latin-ext"];

export default defineConfig({
  output: "static",
  integrations: [
    sitemap({
      changefreq: "weekly",
      lastmod: new Date(),
      priority: 0.7,
      serialize(item) {
        if (item.url === siteConfig.url || item.url === `${siteConfig.url}/`) {
          item.priority = 1.0;
        } else if (item.url.includes("/privacy")) {
          item.priority = 0.3;
        }

        return item;
      },
    }),
  ],
  site: siteConfig.url,
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-inter",
      weights: [400, 600, 700, 800],
      styles: ["normal"],
      subsets: FONT_SUBSETS,
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "DM Serif Display",
      cssVariable: "--font-dm-serif",
      weights: [400],
      styles: ["normal"],
      subsets: FONT_SUBSETS,
      fallbacks: ["Georgia", "serif"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-jetbrains-mono",
      weights: [400, 600],
      styles: ["normal"],
      subsets: FONT_SUBSETS,
      fallbacks: ["ui-monospace", "monospace"],
    },
  ],
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [/** @type {any} */ (tailwind())],
  },
});
