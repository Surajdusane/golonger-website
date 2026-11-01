import type { Metadata } from "next";

import { PageShell } from "@/components/site/page-shell";
import { SupportContent } from "@/components/site/support-content";

export const metadata: Metadata = {
  title: "Help - Golonger",
  description:
    "Help and frequently asked questions about the Golonger app, subscriptions, privacy, and data.",
  alternates: {
    canonical: "/help",
  },
};

export default function HelpPage() {
  return (
    <PageShell eyebrow="SUPPORT" title="HELP">
      <SupportContent />
    </PageShell>
  );
}
