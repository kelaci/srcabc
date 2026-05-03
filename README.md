# SRCABC

Static Astro site for `srcabc.com`.

## Stack

- Astro 6
- Tailwind CSS v4 via Vite
- first-party Astro head/SEO component
- Cloudflare Pages deployment target

## Architecture

- `site.config.mjs` is the canonical source for site metadata shared by Astro config and app code.
- `src/data/navigation.ts` holds shared navigation and footer content.
- `src/data/pages/home.ts` holds the home page content model.
- `src/utils/structuredData.ts` builds reusable JSON-LD payloads for layouts/pages.
- Presentational components receive typed props instead of importing a monolithic data file.

## Local development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run check
npm run build
npm run lint
```

## Asset generation

Raster icons and the social preview image are generated from committed SVG source files.

```bash
bash scripts/generate-assets.sh
```

## Cloudflare Pages

Recommended setup is Git integration:

- Production branch: `main`
- Build command: `npm run build`
- Build output directory: `dist`
- Node version: `22`

Because this repository contains only the site, leave the Pages Root directory empty. 

Cloudflare’s Git integration guide documents automatic rebuilds from the selected production branch and the build/output/root settings used during setup.

For local parity with production, use the version in `.nvmrc` before running `npm ci`.
