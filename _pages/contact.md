---
layout: page
title: Contact
permalink: /contact/
description: For research, engineering, and concert enquiries.
nav: true
nav_order: 5
---

<!-- Posts to the Worker's /api/contact (worker/contact.ts), which checks Turnstile and emails Noah.
     No email address on the page, by his privacy rule. -->

<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>

<div id="contact-status" class="contact-status" role="status" hidden></div>
<form class="contact-form" action="/api/contact" method="post">
  <div class="form-field">
    <label for="contact-name">Name</label>
    <input id="contact-name" name="name" type="text" required autocomplete="name">
  </div>
  <div class="form-field">
    <label for="contact-email">Email</label>
    <input id="contact-email" name="email" type="email" required autocomplete="email">
  </div>
  <div class="form-field">
    <label for="contact-message">Message</label>
    <textarea id="contact-message" name="message" rows="7" required></textarea>
  </div>
  <div class="contact-honeypot" aria-hidden="true">
    <label for="contact-company">Company</label>
    <input id="contact-company" name="company" type="text" tabindex="-1" autocomplete="off">
  </div>
  <div class="cf-turnstile" data-sitekey="0x4AAAAAADeKBsidaEv8DVSx"></div>
  <button type="submit">Send</button>
</form>

<script>
  (function () {
    const status = new URLSearchParams(window.location.search).get("status");
    const box = document.getElementById("contact-status");
    const messages = {
      sent: ["Thank you, your message was sent.", "contact-status--success"],
      verification_failed: ["The spam check failed. Please try again.", "contact-status--error"],
      invalid_submission: ["Please fill in every field and try again.", "contact-status--error"],
      send_failed: ["The message could not be sent right now. Please try again later.", "contact-status--error"],
    };
    if (!status || !box || !messages[status]) return;
    box.textContent = messages[status][0];
    // Full class names above, so purgecss keeps their styles
    box.classList.add(messages[status][1]);
    box.hidden = false;
    window.history.replaceState({}, document.title, window.location.pathname);
  })();
</script>
