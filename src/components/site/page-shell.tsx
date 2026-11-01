import Link from "next/link";
import type { ReactNode } from "react";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

export function PageShell({
  eyebrow,
  title,
  meta,
  children,
}: {
  eyebrow: string;
  title: string;
  meta?: string;
  children: ReactNode;
}) {
  return (
    <main>
      <section className="grid-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Header />

          <div className="py-16 md:py-20 text-center">
            <p className="text-xs tracking-[.3em] text-primary font-semibold">
              {eyebrow}
            </p>
            <h1 className="page-title mt-3">{title}</h1>
            {meta ? (
              <p className="text-muted-foreground mt-4 text-xs tracking-[.25em]">
                {meta}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <span aria-hidden="true">←</span> Back to home
          </Link>

          <div className="mt-8">{children}</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
