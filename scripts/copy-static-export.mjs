import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { extname, join, relative, resolve, sep } from "node:path";

const root = process.cwd();
const output = resolve(root, "out");
const dist = resolve(root, "dist");
const client = resolve(dist, "client");
const server = resolve(dist, "server");
const meta = resolve(dist, "_appgen_meta");
const hostingConfigPath = resolve(root, ".openai", "hosting.json");

await rm(dist, { recursive: true, force: true });
await mkdir(client, { recursive: true });
await mkdir(server, { recursive: true });
await mkdir(meta, { recursive: true });
await cp(output, client, { recursive: true });

const hostingConfig = JSON.parse(await readFile(hostingConfigPath, "utf8"));
await mkdir(resolve(dist, ".openai"), { recursive: true });
await writeFile(resolve(dist, ".openai", "hosting.json"), JSON.stringify(hostingConfig, null, 2));
await writeFile(
  resolve(meta, "appgarden.json"),
  JSON.stringify({ project_id: hostingConfig.project_id }, null, 2),
);

const contentTypes = new Map([
  [".html", "text/html; charset=utf-8"],
  [".txt", "text/plain; charset=utf-8"],
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".webp", "image/webp"],
  [".gif", "image/gif"],
  [".svg", "image/svg+xml"],
  [".ico", "image/x-icon"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
  [".xml", "application/xml; charset=utf-8"],
]);

async function listFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = join(dir, entry.name);

      if (entry.isDirectory()) {
        return listFiles(fullPath);
      }

      return [fullPath];
    }),
  );

  return files.flat();
}

function toRoutePath(filePath) {
  return `/${relative(client, filePath).split(sep).join("/")}`;
}

function contentTypeFor(routePath) {
  return contentTypes.get(extname(routePath).toLowerCase()) ?? "application/octet-stream";
}

const files = await listFiles(client);
const assets = await Promise.all(
  files.map(async (filePath) => {
    const routePath = toRoutePath(filePath);
    const body = await readFile(filePath);

    return [
      routePath,
      {
        contentType: contentTypeFor(routePath),
        body: body.toString("base64"),
      },
    ];
  }),
);

const workerSource = `const ASSETS = new Map(${JSON.stringify(assets)});

const NEWS_SOURCES = [
  { name: "TechCabal", feedUrl: "https://techcabal.com/feed/", homepage: "https://techcabal.com", region: "Africa" },
  { name: "Techpoint Africa", feedUrl: "https://techpoint.africa/feed/", homepage: "https://techpoint.africa", region: "Nigeria" },
  { name: "Disrupt Africa", feedUrl: "https://disruptafrica.com/feed/", homepage: "https://disruptafrica.com", region: "Africa" },
  { name: "IT News Africa", feedUrl: "https://www.itnewsafrica.com/feed/", homepage: "https://www.itnewsafrica.com", region: "Africa" },
];

const FALLBACK_NEWS = NEWS_SOURCES.map((source) => ({
  id: "fallback-" + source.name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
  title: "Read " + source.name + " technology coverage at the source",
  publisher: source.name,
  url: source.homepage,
  publishedAt: "2026-07-01T08:00:00.000Z",
  description: "Publisher source link shown while live feed metadata is unavailable.",
  category: "Latest",
  region: source.region,
  sourceUrl: source.homepage,
  sourceFavicon: "https://www.google.com/s2/favicons?domain=" + new URL(source.homepage).hostname + "&sz=64",
  isFallback: true,
}));

function bytesFromBase64(value) {
  const binary = atob(value);
  const bytes = new Uint8Array(binary.length);

  for (let index = 0; index < binary.length; index += 1) {
    bytes[index] = binary.charCodeAt(index);
  }

  return bytes;
}

function candidatesFor(pathname) {
  const normalized = pathname === "" ? "/" : pathname;
  const candidates = [normalized];

  if (normalized.endsWith("/")) {
    candidates.push(\`\${normalized}index.html\`);
  } else {
    candidates.push(\`\${normalized}/index.html\`);
    candidates.push(\`\${normalized}.html\`);
  }

  if (normalized === "/") {
    candidates.push("/index.html");
  }

  return candidates;
}

function responseFor(pathname) {
  for (const candidate of candidatesFor(pathname)) {
    const asset = ASSETS.get(candidate);

    if (!asset) continue;

    const headers = new Headers({
      "content-type": asset.contentType,
    });

    if (candidate.startsWith("/_next/static/")) {
      headers.set("cache-control", "public, max-age=31536000, immutable");
    }

    return new Response(bytesFromBase64(asset.body), { headers });
  }

  const notFound = ASSETS.get("/404.html") || ASSETS.get("/_not-found/index.html");

  if (notFound) {
    return new Response(bytesFromBase64(notFound.body), {
      status: 404,
      headers: { "content-type": notFound.contentType },
    });
  }

  return new Response("Not found", { status: 404 });
}

function decodeEntities(value) {
  return value
    .replace(/<!\\[CDATA\\[([\\s\\S]*?)\\]\\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&#(\\d+);/g, (_, code) => String.fromCharCode(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCharCode(Number.parseInt(code, 16)));
}

function stripHtml(value) {
  return decodeEntities(value || "")
    .replace(/<script[\\s\\S]*?<\\/script>/gi, " ")
    .replace(/<style[\\s\\S]*?<\\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\\s+/g, " ")
    .trim()
    .slice(0, 220);
}

function field(block, tag) {
  const match = block.match(new RegExp("<" + tag + "[^>]*>([\\\\s\\\\S]*?)<\\\\/" + tag + ">", "i"));
  return match ? decodeEntities(match[1]).trim() : "";
}

function safeUrl(value) {
  try {
    const parsed = new URL(value);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") return "";
    parsed.hash = "";
    return parsed.toString();
  } catch {
    return "";
  }
}

function inferCategory(title, description, requested) {
  if (requested && requested !== "Latest") return requested;
  const text = (title + " " + description).toLowerCase();
  if (/\\b(ai|artificial intelligence|machine learning|generative ai)\\b/.test(text)) return "Artificial Intelligence";
  if (/\\b(fintech|payment|bank|digital finance|insurtech)\\b/.test(text)) return "FinTech";
  if (/\\b(climate|carbon|energy|solar|renewable|sustainability)\\b/.test(text)) return "ClimateTech";
  if (/\\b(cybersecurity|cyber security|malware|fraud|phishing)\\b/.test(text)) return "Cybersecurity";
  if (/\\b(nigeria|lagos|abuja|nigerian)\\b/.test(text)) return "Nigeria Tech";
  return "Africa Tech";
}

async function newsResponse(request) {
  const url = new URL(request.url);
  const requested = url.searchParams.get("category") || "Latest";
  const articles = [];

  await Promise.all(
    NEWS_SOURCES.map(async (source) => {
      try {
        const response = await fetch(source.feedUrl, {
          headers: { "User-Agent": "NelviusGreyTech/1.0" },
          cf: { cacheTtl: 1800, cacheEverything: true },
        });
        if (!response.ok) return;
        const xml = await response.text();
        const itemMatches = xml.match(/<item[\\s\\S]*?<\\/item>/gi) || [];
        for (const block of itemMatches.slice(0, 5)) {
          const title = stripHtml(field(block, "title"));
          const articleUrl = safeUrl(field(block, "link") || field(block, "guid"));
          if (!title || !articleUrl) continue;
          const description = stripHtml(field(block, "description") || field(block, "content:encoded"));
          const publishedAt = new Date(field(block, "pubDate") || Date.now()).toISOString();
          articles.push({
            id: (source.name + "-" + title).toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 96),
            title,
            publisher: source.name,
            url: articleUrl,
            publishedAt,
            description: description || "Open the publisher source for the full story.",
            category: inferCategory(title, description, requested),
            region: source.region,
            sourceUrl: source.homepage,
            sourceFavicon: "https://www.google.com/s2/favicons?domain=" + new URL(source.homepage).hostname + "&sz=64",
          });
        }
      } catch (error) {
        console.warn("Feed unavailable", source.name, error && error.message ? error.message : error);
      }
    }),
  );

  const seen = new Set();
  const deduped = articles
    .filter((article) => {
      const key = article.url.split("?")[0];
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .sort((a, b) => Date.parse(b.publishedAt) - Date.parse(a.publishedAt))
    .slice(0, 18);

  return new Response(
    JSON.stringify({
      source: deduped.length ? "rss" : "fallback",
      category: requested,
      generatedAt: new Date().toISOString(),
      message: deduped.length ? undefined : "Publisher feeds are temporarily unavailable. Showing curated source links.",
      articles: deduped.length ? deduped : FALLBACK_NEWS.map((article) => ({ ...article, category: requested })),
    }),
    {
      headers: {
        "content-type": "application/json; charset=utf-8",
        "cache-control": "s-maxage=1800, stale-while-revalidate=1800",
      },
    },
  );
}

async function contactResponse(request) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const data = await request.json().catch(() => null);
  if (!data || !data.fullName || !data.email || !data.description || !data.consent) {
    return new Response(JSON.stringify({ ok: false, message: "Please check the form and try again." }), {
      status: 400,
      headers: { "content-type": "application/json; charset=utf-8" },
    });
  }

  const subject = "Project enquiry from " + (data.organisation || "website visitor");
  const body = [
    "Full name: " + data.fullName,
    "Email: " + data.email,
    "Phone / WhatsApp: " + (data.phone || ""),
    "Organisation: " + (data.organisation || ""),
    "Service needed: " + (data.service || ""),
    "Project stage: " + (data.stage || ""),
    "Budget range: " + (data.budget || ""),
    "Timeline: " + (data.timeline || ""),
    "",
    "Project description:",
    data.description,
  ].join("\\n");

  return new Response(
    JSON.stringify({
      ok: true,
      fallback: "mailto",
      mailto: "mailto:support@nelviusgreytech.com.ng?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body),
      message: "Your enquiry is validated. Send the prepared email draft to complete submission.",
    }),
    { status: 202, headers: { "content-type": "application/json; charset=utf-8" } },
  );
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/api/news") return newsResponse(request);
    if (url.pathname === "/api/contact") return contactResponse(request);
    return responseFor(url.pathname);
  },
};
`;

await writeFile(resolve(server, "index.js"), workerSource);
