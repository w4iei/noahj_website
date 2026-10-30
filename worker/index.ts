// Serves the built Jekyll site (_site) and the one dynamic route, the contact form.
// Only /api/* reaches this code first (run_worker_first in wrangler.jsonc); everything
// else is served straight from the static assets.
import { handleContact, type Env } from "./contact";

export default {
  async fetch(request, env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname === "/api/contact") return handleContact(request, env);
    if (pathname.startsWith("/api/")) return new Response("Not Found", { status: 404 });
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
