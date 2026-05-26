import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Support — SpaceFlip",
};

const faqs = [
  {
    question: "How do I delete my account?",
    answer: (
      <>
        Go to Profile &rarr; Settings &rarr; Delete Account, or visit our{" "}
        <Link
          href="/delete-account"
          className="text-gold border-b border-gold/30 hover:border-gold transition-colors"
        >
          account deletion page
        </Link>
        .
      </>
    ),
  },
  {
    question: "How do I cancel my subscription?",
    answer:
      "Subscriptions are managed through the App Store (iOS) or Google Play Store (Android). Go to your device settings to manage subscriptions.",
  },
  {
    question: "How do credits work?",
    answer:
      "Each AI generation uses credits based on the edit type. Credits refresh based on your subscription plan. Free users get limited generations.",
  },
  {
    question: "Are my room photos private?",
    answer:
      "Yes. Your photos are stored securely and are only accessible by you. We do not share your photos with other users. Photos are used solely to generate designs for your account.",
  },
  {
    question: "What devices are supported?",
    answer:
      "iOS 15.0 or later, Android SDK 24 (Android 7.0) or later. Portrait orientation only.",
  },
  {
    question: "How long does design generation take?",
    answer:
      "Most designs are generated in under 60 seconds. You can leave the screen and we\u2019ll notify you when your design is ready.",
  },
  {
    question: "Can I use generated designs commercially?",
    answer:
      "Yes, Pro and Business subscribers can use generated designs for commercial purposes including presentations, mood boards, and social media.",
  },
];

export default function Support() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold/40" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold/70">
            Help Center
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Support
        </h1>
        <p className="mt-3 text-lg text-text-secondary">
          We&apos;re here to help
        </p>
      </div>

      {/* Contact */}
      <section className="mb-16">
        <div className="glass-card p-8">
          <h2 className="text-xl font-bold mb-3">Contact Us</h2>
          <p className="text-text-secondary">
            Have a question or need help? Reach out to us at{" "}
            <a
              href="mailto:support@spaceflip.co"
              className="text-gold border-b border-gold/30 hover:border-gold transition-colors"
            >
              support@spaceflip.co
            </a>
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-10">
          Frequently Asked Questions
        </h2>
        <div className="space-y-1">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-dark-border py-6"
            >
              <h3 className="font-semibold text-text-primary text-lg">
                {faq.question}
              </h3>
              <p className="mt-3 text-text-secondary leading-relaxed">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Links */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Legal</h2>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/privacy"
            className="px-5 py-2.5 rounded-full border border-dark-border text-sm text-text-secondary hover:border-gold/30 hover:text-gold transition-all duration-300"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="px-5 py-2.5 rounded-full border border-dark-border text-sm text-text-secondary hover:border-gold/30 hover:text-gold transition-all duration-300"
          >
            Terms of Service
          </Link>
          <Link
            href="/delete-account"
            className="px-5 py-2.5 rounded-full border border-dark-border text-sm text-text-secondary hover:border-gold/30 hover:text-gold transition-all duration-300"
          >
            Delete Account
          </Link>
        </div>
      </section>

      {/* App Info */}
      <section className="border-t border-dark-border pt-8">
        <p className="text-sm text-text-muted">
          SpaceFlip &middot; Version 1.0.9 &middot; Platform: iOS &amp; Android
        </p>
      </section>
    </div>
  );
}
