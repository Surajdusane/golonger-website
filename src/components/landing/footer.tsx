import { Apple, Play } from "lucide-react";

import { Logo } from "./header";

const columns = [
  {
    title: "Product",
    links: ["Features", "Reviews", "What's new"],
  },
  {
    title: "Support",
    links: ["Help center", "Contact us", "FAQ"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Health disclaimer"],
  },
];

export function Footer() {
  return (
    <footer id="download" className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <Logo />
            <p className="text-muted-foreground text-sm leading-relaxed mt-4 max-w-xs">
              Guided pelvic floor training for strength, flexibility, and
              sexual health and wellness.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="#"
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
              <a
                href="#"
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
            </div>
          </div>

          {columns.map((column) => (
            <div key={column.title}>
              <h3 className="text-xs tracking-[.25em] text-muted-foreground font-semibold">
                {column.title.toUpperCase()}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-foreground/80 hover:text-foreground transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row justify-between gap-3 text-sm text-muted-foreground">
          <p>© 2026 Golonger. All rights reserved.</p>
          <p>Strength, confidence, intimacy — trained daily.</p>
        </div>
      </div>
    </footer>
  );
}