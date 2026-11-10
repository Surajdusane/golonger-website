import Link from "next/link";
import type { ReactNode } from "react";

export function PageShell({
  eyebrow,
  title,
  meta,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  meta?: string;
  intro?: ReactNode;
  children: ReactNode;
}) {
  return (
    <>
      <section className="grid-bg">
        <div className="relative z-10 mx-auto max-w-7xl px-6">
          <div className="pb-16 pt-28 text-center md:pb-20 md:pt-32">
            <p className="text-xs font-semibold tracking-[.3em] text-primary">
              {eyebrow}
            </p>
            <h1 className="page-title mt-3">{title}</h1>
            {meta ? (
              <p className="mt-4 text-xs tracking-[.25em] text-muted-foreground">
                {meta}
              </p>
            ) : null}
            {intro ? (
              <div className="mx-auto mt-5 max-w-2xl text-muted-foreground">
                {intro}
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-md text-sm text-muted-foreground transition hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            <span aria-hidden="true">←</span> Back to home
          </Link>

          <div className="mt-8">{children}</div>
        </div>
      </section>
    </>
  );
}
