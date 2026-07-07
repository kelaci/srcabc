import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { relative, resolve } from "node:path";

const projectRoot = resolve(new URL("..", import.meta.url).pathname);
const distRoot = resolve(projectRoot, "dist");
const baselineRoot = process.env.BASELINE_DIST
  ? resolve(projectRoot, process.env.BASELINE_DIST)
  : "";

let failed = false;

const fail = (message) => {
  failed = true;
  console.error(`FAIL ${message}`);
};

const pass = (message) => {
  console.log(`OK ${message}`);
};

const walk = (root) => {
  if (!existsSync(root)) return [];
  const entries = [];
  for (const name of readdirSync(root)) {
    const path = resolve(root, name);
    const stat = statSync(path);
    if (stat.isDirectory()) entries.push(...walk(path));
    else entries.push(path);
  }
  return entries;
};

const read = (path) => readFileSync(path, "utf8");

const visibleBodyText = (path) =>
  read(path)
    .replace(/<head[\s\S]*?<\/head>/g, " ")
    .replace(/<(script|style|svg)\b[\s\S]*?<\/\1>/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();

const distFiles = walk(distRoot);
const htmlFiles = distFiles.filter((path) => path.endsWith(".html"));

if (!htmlFiles.length) {
  fail("dist contains no HTML files");
}

const googleFontLeaks = distFiles.filter((path) => {
  if (!/\.(html|css|js|txt|xml|json)$/.test(path)) return false;
  return /fonts\.googleapis|fonts\.gstatic/.test(read(path));
});

if (googleFontLeaks.length) {
  fail(`Google font origins leaked in ${googleFontLeaks.map((path) => relative(projectRoot, path)).join(", ")}`);
} else {
  pass("no Google font origins in generated text assets");
}

const requiredIndexTypes = new Set([
  "Organization",
  "ProfessionalService",
  "Person",
  "WebSite",
  "WebPage",
]);

for (const page of htmlFiles) {
  const html = read(page);
  const matches = [...html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/g)];
  const types = [];

  for (const [, raw] of matches) {
    try {
      const parsed = JSON.parse(raw);
      types.push(parsed["@type"]);
    } catch (error) {
      fail(`${relative(projectRoot, page)} has invalid JSON-LD: ${error.message}`);
    }
  }

  console.log(`${relative(projectRoot, page)} JSON-LD: ${types.join(", ") || "(none)"}`);

  if (relative(distRoot, page) === "index.html") {
    for (const type of requiredIndexTypes) {
      if (!types.includes(type)) {
        fail(`index.html missing JSON-LD type ${type}`);
      }
    }
  }
}

const indexHtml = resolve(distRoot, "index.html");
const preloadedFonts = existsSync(indexHtml)
  ? [...read(indexHtml).matchAll(/href=["'](\/_astro\/fonts\/[a-f0-9]+\.woff2)["']/g)].map(([, fontPath]) => fontPath)
  : [];

if (!preloadedFonts.length) {
  fail("index.html has no preloaded Astro font files");
}

for (const fontPath of new Set(preloadedFonts)) {
  const diskPath = resolve(distRoot, `.${fontPath}`);
  if (existsSync(diskPath)) pass(`${fontPath} exists`);
  else fail(`${fontPath} is preloaded but missing on disk`);
}

if (baselineRoot) {
  for (const oldPage of walk(baselineRoot).filter((path) => path.endsWith(".html"))) {
    const relativePage = relative(baselineRoot, oldPage);
    const newPage = resolve(distRoot, relativePage);
    if (!existsSync(newPage)) {
      fail(`${relativePage} missing from current dist`);
      continue;
    }

    if (visibleBodyText(oldPage) === visibleBodyText(newPage)) {
      pass(`${relativePage} body text unchanged`);
    } else {
      fail(`${relativePage} body text changed`);
    }
  }
}

if (failed) process.exit(1);
