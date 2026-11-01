import type { Metadata } from "next";
import Link from "next/link";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

export const metadata: Metadata = {
  title: "Page Not Found - Golonger",
  description: "The page you are looking for does not exist or has moved.",
  robots: {
    index: false,
    follow: false,
  },
};

const links = [
  { label: "Back to home", href: "/" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Health Disclaimer", href: "/health-disclaimer" },
];

export default function NotFound() {
  return (
    <main>
      <section className="grid-bg min-h-screen">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Header />

          <div className="py-24 md:py-32 text-center">
            <p className="text-xs tracking-[.3em] text-primary font-semibold">
              404
            </p>
            <h1 className="page-title mt-3">PAGE NOT FOUND</h1>
            <p className="text-muted-foreground mt-4 max-w-md mx-auto">
              The page you are looking for does not exist or has moved.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="border border-border rounded-xl px-4 py-2.5 text-sm hover:bg-white/5 transition"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
