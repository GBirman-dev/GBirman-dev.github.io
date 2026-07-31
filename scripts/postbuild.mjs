// Post-build step for GitHub Pages:
// 1. Emits a real index.html per SPA route so deep links return HTTP 200
//    (instead of the 404.html fallback) with route-specific metadata.
// 2. Copies index.html to 404.html as the fallback for any remaining paths.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync } from "node:fs";
import { join } from "node:path";

const dist = "dist";
const base = readFileSync(join(dist, "index.html"), "utf8");
const siteUrl = "https://georgebirman.com";

const routes = [
  {
    path: "project/hestiva-platforms",
    title: "Hestiva Platforms Case Study — Georgi Birman",
    description:
      "Scaling a community-driven real estate platform from social traction to product-market fit: 10k→16k registered users in six months, +45% paid conversion, and affiliate partnerships with HousingAnywhere and Kamernet.",
  },
  {
    path: "project/tanaruz-boats",
    title: "Tanaruz Boats Case Study — Georgi Birman",
    description:
      "Designing a digital ecosystem for a new category of 3D-printed electric boats, translating complex manufacturing into a brand, website, and product configurator.",
  },
  {
    path: "project/rawidea",
    title: "RAW IDEA Case Study — Georgi Birman",
    description:
      "Defining a parent brand and digital foundation for a next-generation manufacturing ecosystem.",
  },
];

const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const baseTitle = /<title>[^<]*<\/title>/;
const baseDescription = /(<meta\s+name="description"\s+content=")[^"]*(")/;

for (const route of routes) {
  const url = `${siteUrl}/${route.path}`;
  let html = base
    .replace(baseTitle, `<title>${route.title}</title>`)
    .replace(baseDescription, `$1${route.description}$2`)
    .replace(
      new RegExp(`(<link rel="canonical" href=")${escapeRe(siteUrl)}/(" />)`),
      `$1${url}$2`
    )
    .replace(
      new RegExp(`(property="og:url" content=")${escapeRe(siteUrl)}/(")`),
      `$1${url}$2`
    )
    .replace(
      /(property="og:title"\s+content=")[^"]*(")/,
      `$1${route.title}$2`
    )
    .replace(
      /(name="twitter:title"\s+content=")[^"]*(")/,
      `$1${route.title}$2`
    )
    .replace(
      /(property="og:description"\s+content=")[^"]*(")/,
      `$1${route.description}$2`
    )
    .replace(
      /(name="twitter:description"\s+content=")[^"]*(")/,
      `$1${route.description}$2`
    );

  const dir = join(dist, route.path);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, "index.html"), html);
  console.log(`prerendered ${route.path}/index.html`);
}

copyFileSync(join(dist, "index.html"), join(dist, "404.html"));
console.log("copied 404.html");
