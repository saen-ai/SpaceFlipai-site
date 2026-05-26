import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { posts, getPost } from "@/lib/blog";
import { getStyle } from "@/lib/styles";
import AppStoreButton from "@/components/AppStoreButton";

const SITE_URL = "https://www.spaceflip.co";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} — SpaceFlip`,
      description: post.description,
      url: `/blog/${post.slug}`,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: "SpaceFlip" },
    publisher: {
      "@type": "Organization",
      name: "SpaceFlip",
      logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo.png` },
    },
    mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`,
  };

  return (
    <article className="max-w-2xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <nav className="text-xs text-text-muted mb-8" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-text-secondary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/blog" className="hover:text-text-secondary">Blog</Link>
      </nav>

      <header className="mb-10">
        <div className="flex items-center gap-3 text-xs text-text-muted mb-4">
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
        <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
          {post.title}
        </h1>
      </header>

      <div className="space-y-8">
        {post.sections.map((section, i) => (
          <section key={i}>
            {section.heading && (
              <h2 className="text-xl font-bold mb-3 text-text-primary">
                {section.heading}
              </h2>
            )}
            {section.body.map((para, j) => (
              <p
                key={j}
                className="text-text-secondary leading-relaxed mb-4 last:mb-0"
              >
                {para}
              </p>
            ))}
          </section>
        ))}
      </div>

      <div className="mt-14 rounded-2xl border border-gold/20 bg-dark-card p-8 text-center">
        <h2 className="text-2xl font-bold">
          Try it on <span className="text-gold italic">your room</span>
        </h2>
        <p className="mt-3 text-text-secondary max-w-md mx-auto">
          Snap a photo and watch SpaceFlip&apos;s AI redesign your space in seconds.
        </p>
        <div className="mt-6 flex justify-center">
          <AppStoreButton className="px-7 py-3.5 text-base shadow-[0_10px_40px_rgba(232,185,49,0.25)]" />
        </div>
      </div>

      {post.relatedStyles && post.relatedStyles.length > 0 && (
        <div className="mt-12">
          <h2 className="text-sm uppercase tracking-[0.25em] text-text-muted mb-4">
            Related styles
          </h2>
          <div className="flex flex-wrap gap-2">
            {post.relatedStyles.map((slug) => {
              const style = getStyle(slug);
              if (!style) return null;
              return (
                <Link
                  key={slug}
                  href={`/styles/${slug}`}
                  className="px-4 py-2 rounded-full border border-dark-border text-sm text-text-secondary hover:border-gold/40 hover:text-text-primary transition-colors"
                >
                  {style.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-10">
        <Link
          href="/blog"
          className="text-sm text-gold hover:underline"
        >
          ← Back to all posts
        </Link>
      </div>
    </article>
  );
}
