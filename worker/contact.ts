// Contact form handler, adapted from klavecimbel.com's. The form posts here; the visitor is
// redirected back to /contact/?status=... and the page shows the matching message.
import { EmailMessage } from "cloudflare:email";

export interface Env {
  ASSETS: Fetcher;
  EMAIL: SendEmail;
  CONTACT_FROM_EMAIL: string;
  // Secrets, set with `wrangler secret put` so they stay out of this public repo
  CONTACT_TO_EMAIL: string;
  TURNSTILE_SECRET_KEY: string;
}

const CONTACT_PAGE = "/contact/";

function redirect(request: Request, status: string): Response {
  const url = new URL(CONTACT_PAGE, request.url);
  url.searchParams.set("status", status);
  return Response.redirect(url.toString(), 303);
}

// Strip CR/LF so form input can never inject extra MIME headers.
function headerSafe(value: unknown): string {
  return String(value ?? "")
    .replace(/[\r\n]+/g, " ")
    .trim();
}

export async function handleContact(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: { Allow: "POST" } });
  }
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return redirect(request, "invalid_submission");
  }

  const name = headerSafe(form.get("name"));
  const email = headerSafe(form.get("email"));
  const message = String(form.get("message") ?? "").trim();
  const token = String(form.get("cf-turnstile-response") ?? "").trim();
  const honeypot = String(form.get("company") ?? "").trim();

  // Bots that fill the hidden field get a fake success and no email.
  if (honeypot) {
    return redirect(request, "sent");
  }

  if (!name || !email || !message || !token || !email.includes("@")) {
    return redirect(request, "invalid_submission");
  }

  const verification = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
    method: "POST",
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET_KEY,
      response: token,
      remoteip: request.headers.get("CF-Connecting-IP") ?? "",
    }),
  });
  const outcome = (await verification.json()) as { success: boolean };
  if (!outcome.success) {
    return redirect(request, "verification_failed");
  }

  const body = ["New contact form submission on noahjaffe.org", "", `Name: ${name}`, `Email: ${email}`, "", "Message:", message].join("\n");

  const raw = [
    `From: noahjaffe.org contact form <${env.CONTACT_FROM_EMAIL}>`,
    `To: ${env.CONTACT_TO_EMAIL}`,
    `Reply-To: ${email}`,
    `Subject: Website contact from ${name}`,
    `Date: ${new Date().toUTCString()}`,
    `Message-ID: <${crypto.randomUUID()}@noahjaffe.org>`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=utf-8",
    "",
    body,
  ].join("\r\n");

  try {
    await env.EMAIL.send(new EmailMessage(env.CONTACT_FROM_EMAIL, env.CONTACT_TO_EMAIL, raw));
  } catch (error) {
    console.error("contact form send failed", error);
    return redirect(request, "send_failed");
  }

  return redirect(request, "sent");
}
