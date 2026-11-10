import Link from "next/link";

import StoreIcon from "@/components/site/store-icon";
import { copyrightLine, siteConfig } from "@/lib/site";

import { Logo } from "./logo";

const columns: Array<{
  title: string;
  links: Array<{ label: string; href: string; external?: boolean }>;
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
      { label: "Data Deletion", href: "/data-deletion" },
      { label: "Email us", href: siteConfig.supportMailto },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms of Use", href: "/terms-of-use" },
      { label: "Health Disclaimer", href: "/health-disclaimer" },
      { label: "Data Deletion", href: "/data-deletion" },
    ],
  },
];

function StoreBadge({
  href,
  icon,
  caption,
  store,
}: {
  href: string;
  icon: React.ReactNode;
  caption: string;
  store: string;
}) {
  if (!href) {
    return (
      <span
        aria-disabled="true"
        className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-left opacity-70"
      >
        {icon}
        <span className="leading-tight">
          <span className="block text-[9px] text-muted-foreground">
            {caption}
          </span>
          <span className="block text-xs font-bold">{store} — Coming soon</span>
        </span>
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-3 transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {icon}
      <span className="text-left leading-tight">
        <span className="block text-[9px] text-muted-foreground">{caption}</span>
        <span className="block text-xs font-bold">{store}</span>
      </span>
    </a>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Guided pelvic floor exercise sessions with follow-along video,
              timers, and optional reminders. No account required. 18+.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <StoreBadge
                href={siteConfig.appStoreUrl}
                caption="Download on the"
                store="App Store"
                icon={<StoreIcon type="appstore" size={16} />}
              />
              <StoreBadge
                href={siteConfig.googlePlayUrl}
                caption="Get it on"
                store="Google Play"
                icon={<StoreIcon type="playstore" size={16} />}
              />
            </div>
          </div>

          {columns.map((column) => (
            <nav key={column.title} aria-label={column.title}>
              <h2 className="text-xs font-semibold tracking-[.25em] text-muted-foreground">
                {column.title.toUpperCase()}
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith("/") ? (
                      <Link
                        href={link.href}
                        className="rounded-md text-foreground/80 transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="rounded-md text-foreground/80 transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col justify-between gap-3 border-t border-border pt-6 text-sm text-muted-foreground md:flex-row">
          <p>{copyrightLine}</p>
          <p>
            {siteConfig.siteName} is a wellness and fitness app, not medical
            advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
