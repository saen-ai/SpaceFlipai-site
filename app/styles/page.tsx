import type { Metadata } from "next";
import Link from "next/link";
import { styles } from "@/lib/styles";
import AppStoreButton from "@/components/AppStoreButton";

export const metadata: Metadata = {
  title: "AI Interior Design Styles",
  description:
    "Explore 12 AI interior design styles — Modern, Scandinavian, Japandi, Bohemian, Industrial and more. See how SpaceFlip redesigns any room in your chosen aesthetic in seconds.",
  alternates: { canonical: "/styles" },
};

export default function StylesIndex() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <header className="text-center mb-14 max-w-2xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold/40" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold/80">
            12 Designer Styles
          </span>
          <div className="h-px w-8 bg-gold/40" />
        </div>
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight">
          AI Interior Design <span className="text-gold italic">Styles</span>
        </h1>
        <p className="mt-6 text-text-secondary leading-relaxed">
          Snap a photo of any room and SpaceFlip&apos;s AI redesigns it in the
          style of your choice. Explore all twelve aesthetics below.
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {styles.map((style) => (
          <Link
            key={style.slug}
            href={`/styles/${style.slug}`}
            className="group rounded-2xl border border-dark-border bg-dark-card p-6 transition-colors hover:border-gold/40"
          >
            <div className="flex gap-1.5 mb-5">
              {style.palette.map((color, i) => (
                <div
                  key={`${style.slug}-${i}`}
                  className="h-8 flex-1 rounded-md border border-black/20"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <h2 className="text-xl font-bold text-text-primary group-hover:text-gold transition-colors">
              {style.name}
            </h2>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              {style.description}
            </p>
          </Link>
        ))}
      </div>

      <div className="mt-16 text-center">
        <AppStoreButton className="px-7 py-3.5 text-base shadow-[0_10px_40px_rgba(232,185,49,0.25)]" />
      </div>
    </div>
  );
}
