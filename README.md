# SRCABC

Static Astro site for `srcabc.com`.

## Stack

- Astro 5
- Tailwind CSS v4 via Vite
- `astro-seo` for centralized metadata
- Cloudflare Pages deployment target

## Local development

```bash
npm install
npm run dev
```

## Checks

```bash
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
