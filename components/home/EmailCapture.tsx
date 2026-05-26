"use client";

import { useState, type FormEvent } from "react";

// TODO: replace with your Formspree form ID after signing up at https://formspree.io
// (Create a form, copy the ID from the endpoint, e.g. "xyzabcde")
const FORMSPREE_FORM_ID = "REPLACE_ME";

type Status = "idle" | "submitting" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailCapture() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!EMAIL_RE.test(email)) {
      setStatus("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    if (FORMSPREE_FORM_ID === "REPLACE_ME") {
      setStatus("error");
      setMessage("Email service not configured yet. Add your Formspree ID in EmailCapture.tsx.");
      return;
    }

    setStatus("submitting");
    setMessage("");
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      setMessage("Thanks — we'll only email when something good ships.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again or email us directly.");
    }
  };

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="gold-line" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6 pt-16 text-center">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold/80">
          Stay updated
        </span>
        <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
          New styles, new <span className="text-gold italic">tools</span>
        </h2>
        <p className="mt-4 text-text-secondary">
          Get a heads-up when we add new design styles and AI tools to the app.
        </p>

        {status === "success" ? (
          <div className="mt-8 px-6 py-5 rounded-2xl border border-gold/30 bg-gold/5 text-text-primary">
            <div className="flex items-center justify-center gap-2 text-gold font-semibold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8B931" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              You&apos;re subscribed
            </div>
            <p className="mt-2 text-sm text-text-secondary">{message}</p>
          </div>
        ) : (
          <form onSubmit={onSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status === "error") {
                  setStatus("idle");
                  setMessage("");
                }
              }}
              disabled={status === "submitting"}
              className="flex-1 px-4 py-3 rounded-xl bg-dark-card border border-dark-border text-text-primary placeholder:text-text-muted focus:outline-none focus:border-gold/50 transition-colors disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="px-6 py-3 rounded-xl bg-gold text-dark font-semibold text-sm hover:bg-gold-dim transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? "Sending…" : "Notify me"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-3 text-sm text-red-400">{message}</p>
        )}
      </div>
    </section>
  );
}
