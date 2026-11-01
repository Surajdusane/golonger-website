import type { Metadata } from "next";

import {
  ContentSection,
  EmailLink,
  Paragraph,
  TextLink,
} from "@/components/site/prose";
import { PageShell } from "@/components/site/page-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Health Disclaimer - Golonger",
  description:
    "Important health and safety information for people using the Golonger app.",
  alternates: {
    canonical: "/health-disclaimer",
  },
};

export default function HealthDisclaimerPage() {
  return (
    <PageShell
      eyebrow="LEGAL"
      title="HEALTH DISCLAIMER"
      meta={`LAST UPDATED: ${siteConfig.legalLastUpdated.toUpperCase()}`}
    >
      <div className="border border-border bg-card rounded-2xl p-6">
        <p className="font-semibold text-foreground">
          Golonger is a general wellness and fitness app.
        </p>
        <p className="text-muted-foreground leading-relaxed mt-2">
          It does not provide medical advice, diagnosis, or treatment. The
          exercises are not a substitute for professional medical advice.
        </p>
      </div>

      <ContentSection title="Consult a healthcare professional">
        <Paragraph>
          Consult a qualified healthcare professional before starting,
          especially if you are pregnant, postpartum, recovering from surgery,
          have pelvic pain, or have any medical condition.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Stop if you feel unwell">
        <Paragraph>
          Stop immediately if you feel pain, dizziness, or discomfort and seek
          medical advice.
        </Paragraph>
      </ContentSection>

      <ContentSection title="No guarantee of results">
        <Paragraph>
          We do not guarantee any particular outcome from using the app.
          Progress varies from person to person.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Emergencies">
        <Paragraph>
          If you think you have a medical emergency, contact your local
          emergency services immediately.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Questions">
        <Paragraph>
          If you have questions about this disclaimer, email <EmailLink /> or
          visit our <TextLink href="/contact">contact page</TextLink>.
        </Paragraph>
      </ContentSection>
    </PageShell>
  );
}
