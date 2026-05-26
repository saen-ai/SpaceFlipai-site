"use client";

import { useState } from "react";
import Link from "next/link";
import { styles } from "@/lib/styles";

export default function StyleShowcase() {
  const [active, setActive] = useState(0);
  const current = styles[active];

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="gold-line" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div className="text-center mb-14">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-text-muted">
            12 designer styles
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
            Find your <span className="text-gold italic">aesthetic</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto">
            Hover any style to preview its palette and personality.
          </p>
        </div>

        {/* Featured preview card */}
        <div className="max-w-3xl mx-auto mb-10 rounded-2xl border border-gold/20 bg-dark-card overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="md:col-span-1 p-8 md:p-10 border-b md:border-b-0 md:border-r border-dark-border">
              <div className="text-xs uppercase tracking-[0.25em] text-gold/80 mb-2">
                Selected
              </div>
              <h3
                className="text-3xl font-bold text-text-primary"
                style={{ fontFamily: "var(--font-display), serif" }}
              >
                {current.name}
              </h3>
              <p className="mt-3 text-sm text-text-secondary leading-relaxed">
                {current.description}
              </p>
              <Link
                href={`/styles/${current.slug}`}
                className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-gold hover:gap-2 transition-all"
              >
                Explore {current.name} designs
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="md:col-span-2 flex flex-col">
              <div className="flex flex-1 min-h-[160px]">
                {current.palette.map((color, i) => (
                  <div
                    key={`${current.name}-${i}`}
                    className="flex-1 transition-colors duration-500"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="px-6 py-3 flex justify-between text-[10px] uppercase tracking-wider text-text-muted bg-dark/40 font-mono">
                {current.palette.map((color) => (
                  <span key={color}>{color}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 12-style grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {styles.map((style, i) => (
            <button
              key={style.name}
              type="button"
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onClick={() => setActive(i)}
              className={
                i === active
                  ? "group relative rounded-xl border border-gold/50 bg-dark-card p-4 text-left transition-all duration-300"
                  : "group relative rounded-xl border border-dark-border bg-dark-card p-4 text-left transition-all duration-300 hover:border-gold/30"
              }
            >
              <div className="flex gap-1 mb-3">
                {style.palette.map((color, ci) => (
                  <div
                    key={`${style.name}-swatch-${ci}`}
                    className="w-4 h-4 rounded-full border border-black/20"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
              <div className="text-sm font-semibold text-text-primary">
                {style.name}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
