// Serves the built Jekyll site (_site) and the one dynamic route, the contact form.
// www.noahjaffe.org redirects to noahjaffe.org, the one hostname the Turnstile widget knows.
import { handleContact, type Env } from "./contact";

export default {
  async fetch(request, env): Promise<Response> {
    const url = new URL(request.url);
    if (url.hostname === "www.noahjaffe.org") {
      url.hostname = "noahjaffe.org";
      return Response.redirect(url.toString(), 301);
    }
    const { pathname } = url;
    if (pathname === "/api/contact") return handleContact(request, env);
    if (pathname.startsWith("/api/")) return new Response("Not Found", { status: 404 });
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
