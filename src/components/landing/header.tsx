import Image from "next/image";
import Link from "next/link";

import logo from "@/../public/logo.png";
import { siteConfig } from "@/lib/site";

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2.5">
      <Image
        src={logo}
        alt="Golonger logo"
        className="w-8 h-8 object-cover"
      />
      <span className="font-extrabold text-xl tracking-wide">GOLONGER</span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="h-20 flex items-center justify-between">
      <Logo />

      <nav className="hidden md:flex gap-10 text-sm text-muted-foreground">
        <Link href="/#features" className="hover:text-foreground transition">
          Features
        </Link>
        <Link href="/#how-it-works" className="hover:text-foreground transition">
          How it works
        </Link>
        <Link href="/contact" className="hover:text-foreground transition">
          Contact
        </Link>
      </nav>

      {siteConfig.appStoreUrl ? (
        <a
          href={siteConfig.appStoreUrl}
          className="border border-border rounded-xl px-4 md:px-6 py-2.5 md:py-3 text-sm hover:bg-white/5 transition"
        >
          Get the app
        </a>
      ) : (
        <Link
          href="/contact"
          className="border border-border rounded-xl px-4 md:px-6 py-2.5 md:py-3 text-sm hover:bg-white/5 transition"
        >
          Contact us
        </Link>
      )}
    </header>
  );
}
