const faqs = [
  {
    q: "How does SpaceFlip actually work?",
    a: "Snap a photo of any room and our AI analyzes the space — detecting furniture, lighting, layout, and dimensions. Then it generates a fully redesigned version in your chosen style, in under 60 seconds.",
  },
  {
    q: "How realistic are the results?",
    a: "We use the latest interior-design diffusion models trained specifically on photographed real-world spaces. Results are photo-realistic and respect your room's actual structure — windows, doors, and walls stay where they are.",
  },
  {
    q: "What rooms can I redesign?",
    a: "Living rooms, bedrooms, kitchens, dining rooms, home offices, bathrooms, hallways, and outdoor patios. The AI auto-detects the room type, so you don't have to label anything.",
  },
  {
    q: "What happens to my photos?",
    a: "Your photos are processed securely and never sold or used to train public models. You can delete any image from your account at any time.",
  },
  {
    q: "What platforms is the app on?",
    a: "Available on iOS via the App Store.",
  },
];

function Chevron() {
  return (
    <svg className="faq-chevron flex-shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#E8B931" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      <div className="gold-line" />
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <div className="text-center mb-14">
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-text-muted">
            Questions
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-bold">
            Common <span className="text-gold italic">questions</span>
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details key={faq.q} className="group rounded-2xl border border-dark-border bg-dark-card overflow-hidden transition-colors hover:border-gold/30">
              <summary className="flex items-center justify-between gap-4 px-6 py-5 text-base font-semibold text-text-primary">
                <span>{faq.q}</span>
                <Chevron />
              </summary>
              <div className="px-6 pb-5 text-sm text-text-secondary leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
