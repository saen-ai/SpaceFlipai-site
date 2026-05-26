import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Delete Account — SpaceFlip",
};

const deletedData = [
  "Profile information and account details",
  "Room photos and uploaded images",
  "Generated designs and results",
  "Credit balance",
  "Subscription (will be cancelled)",
  "Notification preferences",
  "Referral data",
];

const steps = [
  "Open SpaceFlip and go to your Profile",
  "Tap Settings (gear icon)",
  "Scroll down and tap \"Delete Account\"",
  "Confirm your decision",
];

export default function DeleteAccount() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      {/* Header */}
      <div className="mb-14">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px w-8 bg-gold/40" />
          <span className="text-xs font-medium uppercase tracking-[0.3em] text-gold/70">
            Account
          </span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
          Delete Your Account
        </h1>
      </div>

      {/* Warning */}
      <div className="mb-12 rounded-2xl border border-red-500/20 bg-red-500/5 px-6 py-5">
        <div className="flex items-start gap-3">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ef4444"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mt-0.5 flex-shrink-0"
          >
            <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
            <line x1="12" y1="9" x2="12" y2="13" />
            <line x1="12" y1="17" x2="12.01" y2="17" />
          </svg>
          <p className="font-semibold text-red-400">
            Account deletion is permanent and cannot be undone. All your data
            will be permanently removed.
          </p>
        </div>
      </div>

      {/* Steps */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-8">How to Delete From the App</h2>
        <div className="space-y-4">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/10 text-gold text-sm font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <p className="text-text-secondary leading-relaxed pt-1">
                {step}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* What gets deleted */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-6">What Gets Deleted</h2>
        <div className="glass-card p-6">
          <ul className="space-y-3">
            {deletedData.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-text-secondary"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="flex-shrink-0 opacity-50"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Timeline */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-4">Deletion Timeline</h2>
        <p className="text-text-secondary leading-relaxed">
          Your account data is deleted within{" "}
          <span className="font-semibold text-text-primary">30 days</span> of
          your request. During this period, your account will be deactivated and
          inaccessible.
        </p>
      </section>

      {/* Alternative */}
      <section className="mb-14">
        <h2 className="text-2xl font-bold mb-4">
          Prefer to Request via Email?
        </h2>
        <p className="text-text-secondary leading-relaxed">
          You can also request account deletion by emailing{" "}
          <a
            href="mailto:support@spaceflip.co"
            className="text-gold border-b border-gold/30 hover:border-gold transition-colors"
          >
            support@spaceflip.co
          </a>{" "}
          from the email address associated with your account.
        </p>
      </section>

      {/* Back to Support */}
      <section className="border-t border-dark-border pt-8">
        <Link
          href="/support"
          className="inline-flex items-center gap-2 text-gold font-medium hover:gap-3 transition-all duration-300"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          Back to Support
        </Link>
      </section>
    </div>
  );
}
