# georgebirman.com

Personal portfolio of Georgi Birman — Product Owner & Senior Product Designer.

Built with Vite, React, TypeScript, and Tailwind CSS. Deployed to GitHub Pages via GitHub Actions on every push to `main`.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The build outputs to `dist/`. A post-build step (`scripts/postbuild.mjs`) emits a static `index.html` per route with route-specific metadata, so deep links return HTTP 200 on GitHub Pages, and copies `index.html` to `404.html` as the SPA fallback.

## Structure

- `src/app/` — pages and components (`HomePage`, project case studies under `projects/`)
- `public/` — static assets, resume PDF, favicon, OG image, `robots.txt`, `sitemap.xml`, `CNAME`
- `.github/workflows/deploy.yml` — build and deploy pipeline
