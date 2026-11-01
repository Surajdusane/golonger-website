import type { Metadata } from "next";

import { PageShell } from "@/components/site/page-shell";
import { SupportContent } from "@/components/site/support-content";

export const metadata: Metadata = {
  title: "FAQ - Golonger",
  description:
    "Frequently asked questions about the Golonger app, subscriptions, privacy, and data.",
  alternates: {
    canonical: "/faq",
  },
};

export default function FaqPage() {
  return (
    <PageShell eyebrow="SUPPORT" title="FAQ">
      <SupportContent />
    </PageShell>
  );
}
