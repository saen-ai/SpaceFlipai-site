import type { Metadata } from "next";
import Link from "next/link";
import { posts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — AI Interior Design Guides & Tips",
  description:
    "Guides, tips, and ideas for redesigning your home with AI — from how AI interior design works to room-by-room inspiration from SpaceFlip.",
  alternates: { canonical: "/blog" },
};

const sorted = [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));

export default function BlogIndex() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      <header className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold/40" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold/80">
            SpaceFlip Blog
          </span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          AI Interior Design <span className="text-gold italic">Guides</span>
        </h1>
        <p className="mt-6 text-text-secondary leading-relaxed">
          Tips, ideas, and how-tos for redesigning your space with AI.
        </p>
      </header>

      <div className="space-y-6">
        {sorted.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group block rounded-2xl border border-dark-border bg-dark-card p-6 transition-colors hover:border-gold/40"
          >
            <div className="flex items-center gap-3 text-xs text-text-muted mb-3">
              <time dateTime={post.date}>
                {new Date(post.date).toLocaleDateString("en-CA", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
              <span>·</span>
              <span>{post.readingTime}</span>
            </div>
            <h2 className="text-xl font-bold text-text-primary group-hover:text-gold transition-colors">
              {post.title}
            </h2>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
