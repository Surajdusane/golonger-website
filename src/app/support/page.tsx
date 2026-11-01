import type { Metadata } from "next";

import { PageShell } from "@/components/site/page-shell";
import { SupportContent } from "@/components/site/support-content";

export const metadata: Metadata = {
  title: "Help Centre - Golonger",
  description:
    "Help and frequently asked questions about the Golonger app, subscriptions, privacy, and data.",
  alternates: {
    canonical: "/support",
  },
};

export default function SupportPage() {
  return (
    <PageShell eyebrow="SUPPORT" title="HELP CENTRE">
      <SupportContent />
    </PageShell>
  );
}
