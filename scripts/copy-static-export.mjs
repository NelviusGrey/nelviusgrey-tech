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

export default {
  async fetch(request) {
    const url = new URL(request.url);
    return responseFor(url.pathname);
  },
};
`;

await writeFile(resolve(server, "index.js"), workerSource);
