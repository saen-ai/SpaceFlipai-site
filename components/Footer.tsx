import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-dark-border mt-auto">
      {/* Gold accent line */}
      <div className="gold-line" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tight"
              style={{ fontFamily: "var(--font-display), serif" }}
            >
              Space<span className="gold-shimmer">Flip</span>
            </Link>
            <p className="mt-3 text-sm text-text-muted leading-relaxed">
              AI-powered interior design.
              <br />
              Reimagine any room in seconds.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Product
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#features"
                  className="text-text-secondary hover:text-gold transition-colors duration-200"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/styles"
                  className="text-text-secondary hover:text-gold transition-colors duration-200"
                >
                  Design Styles
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-text-secondary hover:text-gold transition-colors duration-200"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Legal
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-text-secondary hover:text-gold transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-text-secondary hover:text-gold transition-colors duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/delete-account"
                  className="text-text-secondary hover:text-gold transition-colors duration-200"
                >
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-text-muted mb-4">
              Support
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/support"
                  className="text-text-secondary hover:text-gold transition-colors duration-200"
                >
                  Help & FAQ
                </Link>
              </li>
              <li>
                <a
                  href="mailto:support@spaceflip.co"
                  className="text-text-secondary hover:text-gold transition-colors duration-200"
                >
                  support@spaceflip.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-dark-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>&copy; {new Date().getFullYear()} SpaceFlip. All rights reserved.</p>
          <p>Made with AI for design lovers.</p>
        </div>
      </div>
    </footer>
  );
}
