import { Apple, Play } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { Logo } from "./header";

const columns: Array<{
  title: string;
  links: Array<{ label: string; href: string }>;
}> = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How it works", href: "/#how-it-works" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact", href: "/contact" },
      { label: "Help & FAQ", href: "/support" },
      { label: "Email us", href: siteConfig.supportMailto },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Health Disclaimer", href: "/health-disclaimer" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Logo />
            <p className="text-muted-foreground text-sm leading-relaxed mt-4 max-w-xs">
              Guided pelvic floor exercise sessions. No account required.
            </p>

            {siteConfig.appStoreUrl || siteConfig.playStoreUrl ? (
              <div className="flex flex-wrap gap-3 mt-6">
                {siteConfig.appStoreUrl ? (
                  <a
                    href={siteConfig.appStoreUrl}
                    className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 hover:bg-white/5 transition"
                  >
                    <Apple className="size-4 fill-current" />
                    <span className="text-left leading-tight">
                      <span className="block text-[9px] text-muted-foreground">
                        Download on the
                      </span>
                      <span className="block text-xs font-bold">App Store</span>
                    </span>
                  </a>
                ) : null}
                {siteConfig.playStoreUrl ? (
                  <a
                    href={siteConfig.playStoreUrl}
                    className="flex items-center gap-2 bg-card border border-border rounded-xl px-4 py-3 hover:bg-white/5 transition"
                  >
                    <Play className="size-4 fill-current" />
                    <span className="text-left leading-tight">
                      <span className="block text-[9px] text-muted-foreground">
                        Get it on
                      </span>
                      <span className="block text-xs font-bold">Google Play</span>
                    </span>
                  </a>
                ) : null}
              </div>
            ) : (
              <p className="mt-6 text-xs tracking-[.25em] text-muted-foreground">
                COMING SOON TO THE APP STORE
              </p>
            )}
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs tracking-[.25em] text-muted-foreground font-semibold">
                {column.title.toUpperCase()}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-foreground/80 hover:text-foreground transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-sm text-muted-foreground">
          <p>© 2026 Golonger. All rights reserved.</p>
          <p>Guided pelvic floor training, in your pocket.</p>
        </div>
      </div>
    </footer>
  );
}
