"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import StoreIcon from "@/components/site/store-icon";
import { siteConfig } from "@/lib/site";

import { Logo } from "./logo";

const navItems = [
  { href: "/#features", label: "Features" },
  { href: "/#how-it-works", label: "How it works" },
  { href: "/contact", label: "Contact" },
];

const storeLink = siteConfig.appStoreUrl || siteConfig.googlePlayUrl;

export function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-10 text-sm text-muted-foreground md:flex"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {storeLink ? (
          <a
            href={storeLink}
            className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2.5 text-sm transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:px-6 md:py-3"
          >
            <StoreIcon
              type={siteConfig.appStoreUrl ? "appstore" : "playstore"}
              size={16}
            />
            Get the app
          </a>
        ) : (
          <Link
            href="/contact"
            className="rounded-xl border border-border px-4 py-2.5 text-sm transition hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:px-6 md:py-3"
          >
            Contact us
          </Link>
        )}
      </div>
    </header>
  );
}
