import type { Metadata } from "next";
import Link from "next/link";

import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Page Not Found",
  description: "The page you are looking for does not exist or has moved.",
  noindex: true,
});

const links = [
  { label: "Home", href: "/" },
  { label: "Help & FAQ", href: "/support" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Use", href: "/terms-of-use" },
  { label: "Data Deletion", href: "/data-deletion" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <section className="grid-bg">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="pb-24 pt-32 text-center md:pb-32 md:pt-36">
          <p className="text-xs font-semibold tracking-[.3em] text-primary">
            404
          </p>
          <h1 className="page-title mt-3">PAGE NOT FOUND</h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            The page you are looking for does not exist or has moved. Try one of
            these instead:
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-border px-4 py-2.5 text-sm transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
