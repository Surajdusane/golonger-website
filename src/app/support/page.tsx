import type { Metadata } from "next";

import { PageShell } from "@/components/site/page-shell";
import { SupportContent } from "@/components/site/support-content";
import { createMetadata } from "@/lib/metadata";

export const metadata: Metadata = createMetadata({
  title: "Help & FAQ",
  description:
    "Help and frequently asked questions about the GoLonger app: subscriptions, restore purchases, privacy, analytics, data deletion, and health and safety.",
  path: "/support",
});

export default function SupportPage() {
  return (
    <PageShell
      eyebrow="SUPPORT"
      title="HELP & FAQ"
      intro={
        <p>
          Answers about subscriptions, privacy, data deletion, and using the
          app.
        </p>
      }
    >
      <SupportContent />
    </PageShell>
  );
}
