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

export function Paragraph({ children }: { children: ReactNode }) {
  return <p className="text-muted-foreground leading-relaxed">{children}</p>;
}

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5 list-disc pl-5 text-muted-foreground leading-relaxed">
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
  const className = "text-primary hover:underline";

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export function EmailLink() {
  return (
    <a href={siteConfig.supportMailto} className="text-primary hover:underline">
      {siteConfig.supportEmail}
    </a>
  );
}
