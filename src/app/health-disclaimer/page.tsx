import type { Metadata } from "next";

import {
  ContentSection,
  EmailLink,
  Paragraph,
  TextLink,
} from "@/components/site/prose";
import { PageShell } from "@/components/site/page-shell";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Health Disclaimer",
  description:
    "Important health and safety information for people using the GoLonger app: not medical advice, consult a professional, stop if you feel pain. 18+.",
  path: "/health-disclaimer",
});

export default function HealthDisclaimerPage() {
  return (
    <PageShell
      eyebrow="LEGAL"
      title="HEALTH DISCLAIMER"
      meta={`EFFECTIVE ${siteConfig.healthDisclaimerEffectiveDate.toUpperCase()}`}
    >
      <div className="rounded-2xl border border-border bg-card p-6">
        <p className="font-semibold text-foreground">
          GoLonger is a general wellness and fitness app, not a medical device.
        </p>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          It does not provide medical advice, diagnosis, or treatment, and it
          does not diagnose, treat, cure, or prevent any condition. The sessions
          are not a substitute for professional medical advice. GoLonger is
          intended for adults aged 18 and over.
        </p>
      </div>

      <ContentSection title="Consult a healthcare professional">
        <Paragraph>
          Consult a qualified healthcare professional before starting GoLonger,
          especially if you are pregnant, postpartum, recovering from surgery,
          have pelvic pain, or have any medical condition. If you are unsure
          whether an exercise is suitable for you, ask a healthcare professional
          before you begin.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Stop if you feel unwell">
        <Paragraph>
          Stop immediately if you feel pain, dizziness, or discomfort, and seek
          medical advice. Do not continue an exercise through pain. If symptoms
          persist or get worse, contact a healthcare professional.
        </Paragraph>
      </ContentSection>

      <ContentSection title="No promise of results">
        <Paragraph>
          We do not promise any particular result from using the app. Progress varies from person to person, and individual results
          depend on many factors outside our control.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Emergencies">
        <Paragraph>
          GoLonger is not an emergency service. If you think you have a medical
          emergency, contact your local emergency services immediately.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Age requirement">
        <Paragraph>
          GoLonger is intended for adults aged 18 and older. It is not directed
          at children.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Questions">
        <Paragraph>
          If you have questions about this disclaimer, email <EmailLink /> or
          visit our <TextLink href="/contact">Contact page</TextLink>. You can
          also read our <TextLink href="/terms-of-use">Terms of Use</TextLink>{" "}
          and <TextLink href="/privacy-policy">Privacy Policy</TextLink>.
        </Paragraph>
      </ContentSection>
    </PageShell>
  );
}
