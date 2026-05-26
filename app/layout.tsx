import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE_URL = "https://www.spaceflip.co";
const SITE_DESCRIPTION =
  "Transform any room with AI. Snap a photo, choose from 12 interior design styles, and see your space redesigned in seconds. The AI interior design app for homeowners and designers.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "SpaceFlip — AI Room Redesign & Interior Design App",
    template: "%s — SpaceFlip",
  },
  description: SITE_DESCRIPTION,
  applicationName: "SpaceFlip",
  keywords: [
    "AI interior design",
    "AI room redesign",
    "room makeover app",
    "virtual home staging",
    "interior design app",
    "AI home decor",
    "redesign my room",
  ],
  creator: "SpaceFlip",
  publisher: "SpaceFlip",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: "SpaceFlip",
    title: "SpaceFlip — AI Room Redesign & Interior Design App",
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SpaceFlip — AI Room Redesign",
    description:
      "Snap a photo, choose a style, and watch AI redesign your space in seconds.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0A",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "SpaceFlip",
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "SpaceFlip",
      url: SITE_URL,
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "SoftwareApplication",
      name: "SpaceFlip",
      applicationCategory: "LifestyleApplication",
      operatingSystem: "iOS",
      description: SITE_DESCRIPTION,
      url: SITE_URL,
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
