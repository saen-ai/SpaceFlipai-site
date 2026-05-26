"use client";

import { useCallback, useRef, useState } from "react";

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function BeforeAfterSlider() {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.max(0, Math.min(100, pct)));
  }, []);

  const onMouseDown = (e: React.MouseEvent) => {
    draggingRef.current = true;
    updateFromClientX(e.clientX);
    const onMove = (ev: MouseEvent) => {
      if (!draggingRef.current) return;
      updateFromClientX(ev.clientX);
    };
    const onUp = () => {
      draggingRef.current = false;
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    draggingRef.current = true;
    if (e.touches[0]) updateFromClientX(e.touches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    if (!draggingRef.current) return;
    if (e.touches[0]) updateFromClientX(e.touches[0].clientX);
  };

  const onTouchEnd = () => {
    draggingRef.current = false;
  };

  return (
    <section className="relative py-28 overflow-hidden">
      <div className="gold-line" />
      <div className="max-w-6xl mx-auto px-6 pt-16">
        <div className="text-center mb-14">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-text-muted">
            Try it live
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
            Drag to <span className="text-gold italic">transform</span>
          </h2>
          <p className="mt-4 text-text-secondary max-w-lg mx-auto">
            Slide the divider to see the same room before and after AI redesign.
          </p>
        </div>

        <div
          ref={containerRef}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
          className="relative aspect-[16/10] rounded-2xl overflow-hidden border border-gold/20 select-none cursor-ew-resize max-w-5xl mx-auto"
        >
          <img
            src={`${BASE_PATH}/images/example-before.jpg`}
            alt="Room before AI redesign"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
          />
          <img
            src={`${BASE_PATH}/images/example-after.jpg`}
            alt="Room after AI redesign"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            draggable={false}
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          />

          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-dark/80 backdrop-blur-sm border border-dark-border text-[10px] font-medium uppercase tracking-wider text-text-secondary pointer-events-none">
            Before
          </div>
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gold/90 text-dark text-[10px] font-semibold uppercase tracking-wider pointer-events-none">
            After
          </div>

          <div
            className="absolute top-0 bottom-0 w-px bg-gold pointer-events-none"
            style={{ left: `${position}%` }}
          />
          <div
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-gold flex items-center justify-center shadow-[0_0_30px_rgba(232,185,49,0.6)] pointer-events-none"
            style={{ left: `${position}%` }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0A0A0A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 15 12 9 6" transform="translate(6 0)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
