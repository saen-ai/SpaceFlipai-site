"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { APP_STORE_URL } from "@/lib/links";

const sectionLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#faq", label: "FAQ" },
];

const utilityLinks = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/support", label: "Support" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 300);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-dark-border bg-dark/80 backdrop-blur-xl">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight flex-shrink-0"
          style={{ fontFamily: "var(--font-display), serif" }}
        >
          Space<span className="gold-shimmer">Flip</span>
        </Link>

        <div className="hidden md:flex items-center gap-7 text-sm text-text-secondary">
          {sectionLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <span className="h-4 w-px bg-dark-border" aria-hidden="true" />
          {utilityLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <a
          href={APP_STORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex-shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold text-dark text-sm font-semibold hover:bg-gold-dim transition-all duration-300 ${
            scrolled ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
          aria-hidden={!scrolled}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17.5 12.5c0-2.6 2.1-3.9 2.2-3.9-1.2-1.7-3-2-3.7-2-1.6-.2-3.1.9-3.9.9-.8 0-2-.9-3.4-.9-1.7 0-3.4 1-4.3 2.6-1.8 3.2-.5 7.9 1.3 10.5.9 1.3 1.9 2.7 3.3 2.6 1.3-.1 1.8-.9 3.4-.9 1.6 0 2 .9 3.4.8 1.4 0 2.3-1.3 3.2-2.6.7-1 1.2-2 1.6-3.1-2.7-1.1-3.1-3.9-3.1-4zm-2.7-7.2c.7-.9 1.2-2.1 1.1-3.3-1.1.1-2.4.7-3.1 1.6-.7.8-1.3 2-1.1 3.2 1.2.1 2.4-.6 3.1-1.5z" />
          </svg>
          <span className="hidden sm:inline">Download</span>
        </a>
      </nav>
    </header>
  );
}
