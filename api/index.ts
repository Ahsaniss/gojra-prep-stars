type AppEntry = {
  fetch: (request: Request, env: unknown, ctx: { waitUntil: (promise: Promise<unknown>) => void }) =>
    | Promise<Response>
    | Response;
};

async function getAppEntry(): Promise<AppEntry> {
  // @ts-expect-error Built output is generated during deployment.
  const mod = await import("../dist/server/index.js");
  return ((mod as { default?: AppEntry }).default ?? (mod as unknown as AppEntry));
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
