import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

type AppEntry = {
  fetch: (request: Request, env: unknown, ctx: { waitUntil: (promise: Promise<unknown>) => void }) =>
    | Promise<Response>
    | Response;
};

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const clientDistDir = path.resolve(__dirname, "../dist/client");

const contentTypes: Record<string, string> = {
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

async function getAppEntry(): Promise<AppEntry> {
  // @ts-expect-error Built output is generated during deployment.
  const mod = await import("../dist/server/index.js");
  return ((mod as { default?: AppEntry }).default ?? (mod as unknown as AppEntry));
}

function getPathname(req: any): string {
  const proto = req.headers?.["x-forwarded-proto"] ?? "https";
  const host = req.headers?.["x-forwarded-host"] ?? req.headers?.host ?? "localhost";
  const url = new URL(req.url ?? "/", `${proto}://${host}`);
  let pathname = decodeURIComponent(url.pathname || "/");
  if (pathname === "/api") pathname = "/";
  if (pathname.startsWith("/api/")) pathname = pathname.slice(4);
  return pathname;
}

function staticFilePathFromRequest(pathname: string): string | null {
  const isStatic = pathname.startsWith("/assets/") || pathname === "/favicon.ico" || /\.[a-zA-Z0-9]+$/.test(pathname);
  if (!isStatic) return null;

  const relative = pathname.replace(/^\/+/, "");
  const absolute = path.resolve(clientDistDir, relative);
  if (!absolute.startsWith(clientDistDir)) return null;
  return absolute;
}

async function tryServeStatic(req: any): Promise<Response | null> {
  const method = req.method ?? "GET";
  if (method !== "GET" && method !== "HEAD") return null;

  const pathname = getPathname(req);
  const absolutePath = staticFilePathFromRequest(pathname);
  if (!absolutePath) return null;

  try {
    const data = await readFile(absolutePath);
    const ext = path.extname(absolutePath).toLowerCase();
    const contentType = contentTypes[ext] ?? "application/octet-stream";

    return new Response(method === "HEAD" ? null : data, {
      status: 200,
      headers: {
        "content-type": contentType,
        "cache-control": "public, max-age=31536000, immutable",
      },
    });
  } catch {
    return null;
  }
}

function toRequest(req: any): Request {
  const proto = req.headers?.["x-forwarded-proto"] ?? "https";
  const host = req.headers?.["x-forwarded-host"] ?? req.headers?.host ?? "localhost";
  const url = new URL(req.url ?? "/", `${proto}://${host}`);
  const method = req.method ?? "GET";

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers ?? {})) {
    if (Array.isArray(value)) {
      headers.set(key, value.join(","));
    } else if (value != null) {
      headers.set(key, String(value));
    }
  }

  if (method === "GET" || method === "HEAD") {
    return new Request(url, { method, headers });
  }

  return new Request(url, {
    method,
    headers,
    body: req,
    // Required when passing a Node stream as body.
    // @ts-expect-error The Fetch typing for duplex is not available in all TS libs.
    duplex: "half",
  });
}

async function writeResponse(res: any, response: Response): Promise<void> {
  res.statusCode = response.status;
  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  const body = Buffer.from(await response.arrayBuffer());
  res.end(body);
}

export const config = {
  runtime: "nodejs",
};

export default async function handler(req: any, res: any): Promise<void> {
  try {
    const staticResponse = await tryServeStatic(req);
    if (staticResponse) {
      await writeResponse(res, staticResponse);
      return;
    }

    const app = await getAppEntry();
    const request = toRequest(req);
    const response = await app.fetch(request, {}, { waitUntil() {} });
    await writeResponse(res, response);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
    res.setHeader("content-type", "text/plain; charset=utf-8");
    res.end("Internal Server Error");
  }
}
