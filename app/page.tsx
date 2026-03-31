export default function Home() {
  return (
    <>
      {/* ═══════════════════════════════════════
          HERO — Full bleed image background
          ═══════════════════════════════════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/spaceai-site/images/after.jpg')" }}
        />
        {/* Dark overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark/80 via-dark/60 to-dark" />
        {/* Gold ambient glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gold/8 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-32 text-center">
          {/* Overline */}
          <div className="animate-fade-up stagger-1 flex items-center justify-center gap-3 mb-8">
            <div className="h-px w-8 bg-gold/40" />
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold/80">
              AI Interior Design
            </span>
            <div className="h-px w-8 bg-gold/40" />
          </div>

          {/* Headline */}
          <h1 className="animate-fade-up stagger-2 text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-[0.95]">
            Snap. Transform.
            <br />
            <span className="gold-shimmer italic">Love It.</span>
          </h1>

          {/* Subtitle */}
          <p className="animate-fade-up stagger-3 mt-8 text-lg sm:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Take a photo of any room. Choose from 12 design styles.
            <br className="hidden sm:block" />
            Watch AI transform your space in&nbsp;seconds.
          </p>

        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BEFORE & AFTER — The money shot
          ═══════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-text-muted">
              See the difference
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
              Before &amp; <span className="text-gold italic">After</span>
            </h2>
          </div>

          {/* Before/After comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* Before */}
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl border border-dark-border">
                <img
                  src="/spaceai-site/images/before.jpg"
                  alt="Room before redesign"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-dark/80 backdrop-blur-sm border border-dark-border text-xs font-medium text-text-secondary">
                Before
              </div>
            </div>

            {/* After */}
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl border border-gold/20">
                <img
                  src="/spaceai-site/images/after.jpg"
                  alt="Room after AI redesign"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-gold/90 text-dark text-xs font-semibold">
                After — AI Redesign
              </div>
            </div>
          </div>

          {/* Second example */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mt-6">
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl border border-dark-border">
                <img
                  src="/spaceai-site/images/example-before.jpg"
                  alt="Living room before"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-dark/80 backdrop-blur-sm border border-dark-border text-xs font-medium text-text-secondary">
                Before
              </div>
            </div>
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl border border-gold/20">
                <img
                  src="/spaceai-site/images/example-after.jpg"
                  alt="Living room after modern redesign"
                  className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute top-4 left-4 px-4 py-1.5 rounded-full bg-gold/90 text-dark text-xs font-semibold">
                After — Modern Style
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          APP SCREENS — Phone mockups
          ═══════════════════════════════════════ */}
      <section className="relative py-28 overflow-hidden">
        <div className="gold-line" />
        <div className="max-w-6xl mx-auto px-6 pt-16">
          <div className="text-center mb-20">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-text-muted">
              Designed for you
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
              Powerful. <span className="text-gold italic">Beautiful.</span>
            </h2>
            <p className="mt-4 text-text-secondary max-w-lg mx-auto">
              A premium experience from capture to completion.
            </p>
          </div>

          {/* Three phones */}
          <div className="flex justify-center items-end gap-4 sm:gap-8 max-w-4xl mx-auto">
            {/* Left phone — tilted */}
            <div className="hidden sm:block w-[240px] flex-shrink-0 opacity-60" style={{ transform: "perspective(1000px) rotateY(8deg) rotateZ(2deg)" }}>
              <div className="rounded-[28px] overflow-hidden border-2 border-dark-border shadow-2xl">
                <img src="/spaceai-site/images/screen-styles.jpg" alt="Style selection" className="w-full" />
              </div>
            </div>

            {/* Center phone — hero */}
            <div className="w-[280px] sm:w-[300px] flex-shrink-0 relative z-10">
              <div className="rounded-[32px] overflow-hidden border-2 border-gold/30 shadow-[0_20px_80px_rgba(232,185,49,0.15)]">
                <img src="/spaceai-site/images/screen-result.jpg" alt="AI design result" className="w-full" />
              </div>
            </div>

            {/* Right phone — tilted */}
            <div className="hidden sm:block w-[240px] flex-shrink-0 opacity-60" style={{ transform: "perspective(1000px) rotateY(-8deg) rotateZ(-2deg)" }}>
              <div className="rounded-[28px] overflow-hidden border-2 border-dark-border shadow-2xl">
                <img src="/spaceai-site/images/screen-home.jpg" alt="Home screen" className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          FEATURES
          ═══════════════════════════════════════ */}
      <section id="features" className="relative">
        <div className="gold-line" />
        <div className="max-w-6xl mx-auto px-6 py-28">
          <div className="text-center mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.3em] text-text-muted">
              What SpaceAI Does
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Everything you need to <span className="text-gold italic">redesign</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature-card">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8B931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">12 Design Styles</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Modern, Scandinavian, Japandi, Bohemian, Art Deco, Industrial, Coastal, Mid-Century, and more.</p>
            </div>

            <div className="feature-card">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8B931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">8 AI Tools</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Redesign, Paint, Furnish, Stage, Remove, Landscape, Upscale, and Replace — all powered by AI.</p>
            </div>

            <div className="feature-card">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8B931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">Results in Seconds</h3>
              <p className="text-sm text-text-secondary leading-relaxed">AI analyzes your room and generates HD designs in under 60 seconds. Leave and get notified.</p>
            </div>

            <div className="feature-card">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8B931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">Room Analysis</h3>
              <p className="text-sm text-text-secondary leading-relaxed">AI detects room type, furniture, lighting, dimensions, and current style automatically.</p>
            </div>

            <div className="feature-card">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8B931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H5a2 2 0 0 0-2 2v3" /><path d="M21 8V5a2 2 0 0 0-2-2h-3" /><path d="M3 16v3a2 2 0 0 0 2 2h3" /><path d="M16 21h3a2 2 0 0 0 2-2v-3" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">Before &amp; After</h3>
              <p className="text-sm text-text-secondary leading-relaxed">Swipe to compare your original room with the AI redesign. Download and share results.</p>
            </div>

            <div className="feature-card">
              <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E8B931" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" /><path d="M19 10v2a7 7 0 0 1-14 0v-2" /><line x1="12" y1="19" x2="12" y2="23" /><line x1="8" y1="23" x2="16" y2="23" /></svg>
              </div>
              <h3 className="text-lg font-bold mb-2 text-text-primary">Voice Commands</h3>
              <p className="text-sm text-text-secondary leading-relaxed">&ldquo;Add more plants&rdquo; or &ldquo;Make it warmer&rdquo; — describe changes with your voice and AI understands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════
          BOTTOM CTA — with background image
          ═══════════════════════════════════════ */}
      <section className="relative overflow-hidden">
        <div className="gold-line" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/spaceai-site/images/example-after.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/85 to-dark/70" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-28 text-center">
          <h2 className="text-3xl sm:text-5xl font-bold leading-tight">
            Ready to reimagine
            <br />
            <span className="text-gold italic">your space?</span>
          </h2>
          <p className="mt-6 text-white/50 max-w-md mx-auto">
            Join thousands of homeowners and designers transforming rooms with AI.
          </p>
        </div>
      </section>
    </>
  );
}
