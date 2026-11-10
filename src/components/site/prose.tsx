import Link from "next/link";
import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site";

export function ContentSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-12 first:pt-0">
      <h2 className="section-heading">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return <h3 className="pt-2 font-semibold text-foreground">{children}</h3>;
}

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="leading-relaxed text-muted-foreground">{children}</p>;
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="list-disc space-y-2.5 pl-5 leading-relaxed text-muted-foreground">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  const className =
    "text-primary underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

export function EmailLink() {
  return (
    <a
      href={siteConfig.supportMailto}
      className="break-all text-primary underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      {siteConfig.supportEmail}
    </a>
  );
}
