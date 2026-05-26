import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { styles, getStyle } from "@/lib/styles";
import AppStoreButton from "@/components/AppStoreButton";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const SITE_URL = "https://www.spaceflip.co";

export function generateStaticParams() {
  return styles.map((style) => ({ slug: style.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const style = getStyle(slug);
  if (!style) return {};

  const title = `${style.name} AI Interior Design`;
  const description = `${style.intro} Redesign your room in ${style.name} style with SpaceFlip.`;

  return {
    title,
    description,
    alternates: { canonical: `/styles/${style.slug}` },
    keywords: [
      `${style.name} interior design`,
      `${style.name} room design`,
      `AI ${style.name} design`,
      "AI room redesign",
    ],
    openGraph: {
      title: `${title} — SpaceFlip`,
      description,
      url: `/styles/${style.slug}`,
    },
  };
}

export default async function StylePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const style = getStyle(slug);
  if (!style) notFound();

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Styles", item: `${SITE_URL}/styles` },
      {
        "@type": "ListItem",
        position: 3,
        name: style.name,
        item: `${SITE_URL}/styles/${style.slug}`,
      },
    ],
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <nav className="text-xs text-text-muted mb-10" aria-label="Breadcrumb">
        <Link href="/" className="hover:text-text-secondary">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/styles" className="hover:text-text-secondary">Styles</Link>
        <span className="mx-2">/</span>
        <span className="text-text-secondary">{style.name}</span>
      </nav>

      {/* Hero */}
      <header className="mb-12">
        <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold/80">
          AI Interior Design
        </span>
        <h1 className="mt-4 text-4xl sm:text-6xl font-bold tracking-tight">
          {style.name} <span className="text-gold italic">Room Redesign</span>
        </h1>
        <p className="mt-4 text-lg text-text-secondary max-w-2xl">{style.tagline}</p>
      </header>

      {/* Palette */}
      <div className="flex gap-2 mb-12">
        {style.palette.map((color, i) => (
          <div
            key={`${style.slug}-${i}`}
            className="h-16 flex-1 rounded-xl border border-black/20 flex items-end p-2"
            style={{ backgroundColor: color }}
          >
            <span className="text-[10px] font-mono text-black/50">{color}</span>
          </div>
        ))}
      </div>

      {/* Before / After */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
        <div className="relative h-[300px] overflow-hidden rounded-2xl border border-dark-border">
          <Image
            src={`${BASE_PATH}/images/before.jpg`}
            alt={`Room before ${style.name} AI redesign`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-dark/80 text-xs text-text-secondary">
            Before
          </div>
        </div>
        <div className="relative h-[300px] overflow-hidden rounded-2xl border border-gold/20">
          <Image
            src={`${BASE_PATH}/images/after.jpg`}
            alt={`Room after ${style.name} AI redesign`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-gold/90 text-dark text-xs font-semibold">
            After — {style.name}
          </div>
        </div>
      </div>

      {/* Intro */}
      <p className="text-text-secondary leading-relaxed max-w-2xl mb-12">
        {style.intro}
      </p>

      {/* Characteristics + Best for */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-14">
        <div>
          <h2 className="text-lg font-bold mb-4">
            What defines <span className="text-gold italic">{style.name}</span>
          </h2>
          <ul className="space-y-2">
            {style.characteristics.map((c) => (
              <li key={c} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-gold mt-0.5">•</span>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-4">Best for</h2>
          <ul className="space-y-2">
            {style.bestFor.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-text-secondary">
                <span className="text-gold mt-0.5">•</span>
                {b}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl border border-gold/20 bg-dark-card p-8 text-center">
        <h2 className="text-2xl font-bold">
          Redesign your room in <span className="text-gold italic">{style.name}</span>
        </h2>
        <p className="mt-3 text-text-secondary max-w-md mx-auto">
          Snap a photo and watch SpaceFlip&apos;s AI reimagine your space in seconds.
        </p>
        <div className="mt-6 flex justify-center">
          <AppStoreButton className="px-7 py-3.5 text-base shadow-[0_10px_40px_rgba(232,185,49,0.25)]" />
        </div>
      </div>

      {/* Other styles */}
      <div className="mt-14">
        <h2 className="text-sm uppercase tracking-[0.25em] text-text-muted mb-4">
          Explore other styles
        </h2>
        <div className="flex flex-wrap gap-2">
          {styles
            .filter((s) => s.slug !== style.slug)
            .map((s) => (
              <Link
                key={s.slug}
                href={`/styles/${s.slug}`}
                className="px-4 py-2 rounded-full border border-dark-border text-sm text-text-secondary hover:border-gold/40 hover:text-text-primary transition-colors"
              >
                {s.name}
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
}
