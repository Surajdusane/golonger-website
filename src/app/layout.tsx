import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";

import "./globals.css";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { siteConfig } from "@/lib/site";
import Providers from "@/provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const title = "GoLonger - Guided Pelvic Floor Exercise App";
const description =
  "Guided pelvic floor exercise sessions with follow-along video, timers, cues, and optional reminders. No account required. 18+.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s | ${siteConfig.siteName}`,
  },
  description,
  applicationName: siteConfig.siteName,
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    shortcut: { url: "/favicon.ico" },
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.siteName,
    title,
    description,
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "GoLonger app icon",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/web-app-manifest-512x512.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalEntity,
  alternateName: siteConfig.siteName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/web-app-manifest-512x512.png`,
  email: siteConfig.supportEmail,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.supportEmail,
      availableLanguage: ["English"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${bebasNeue.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Providers>
          <Header />
          <main id="main-content" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
        <script
          type="application/ld+json"
          // JSON-LD is generated from trusted constants, not user input.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
