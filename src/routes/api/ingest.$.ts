import { createFileRoute } from "@tanstack/react-router";

const HOST_MAP: Record<string, string> = {
  "static.": "https://us-assets.i.posthog.com",
  "assets.": "https://us-assets.i.posthog.com",
};
const DEFAULT_HOST = "https://us.i.posthog.com";

const HOP_BY_HOP = new Set([
  "host",
  "connection",
  "content-length",
  "accept-encoding",
  "cf-connecting-ip",
  "cf-ipcountry",
  "cf-ray",
  "cf-visitor",
  "x-forwarded-for",
  "x-forwarded-proto",
  "x-real-ip",
]);

async function proxy(request: Request, splat: string) {
  const url = new URL(request.url);
  // Route static asset paths to the assets host
  let target = DEFAULT_HOST;
  for (const [prefix, host] of Object.entries(HOST_MAP)) {
    if (splat.startsWith(prefix) || splat.startsWith("static/") || splat.startsWith("array/")) {
      target = host;
      break;
    }
  }
  const upstream = `${target}/${splat}${url.search}`;

  const headers = new Headers();
  request.headers.forEach((v, k) => {
    if (!HOP_BY_HOP.has(k.toLowerCase())) headers.set(k, v);
  });

  const init: RequestInit = {
    method: request.method,
    headers,
    body: ["GET", "HEAD"].includes(request.method) ? undefined : await request.arrayBuffer(),
    redirect: "follow",
  };

  const res = await fetch(upstream, init);
  const respHeaders = new Headers(res.headers);
  respHeaders.delete("content-encoding");
  respHeaders.delete("content-length");
  return new Response(res.body, { status: res.status, headers: respHeaders });
}

export const Route = createFileRoute("/api/ingest/$")({
  server: {
    handlers: {
      GET: async ({ request, params }) => proxy(request, params._splat ?? ""),
      POST: async ({ request, params }) => proxy(request, params._splat ?? ""),
      OPTIONS: async () =>
        new Response(null, {
          status: 204,
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type, Authorization",
          },
        }),
    },
  },
});