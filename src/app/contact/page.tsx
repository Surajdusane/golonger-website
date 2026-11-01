import type { Metadata } from "next";

import {
  BulletList,
  ContentSection,
  Paragraph,
} from "@/components/site/prose";
import { PageShell } from "@/components/site/page-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact - Golonger",
  description: "Contact Golonger support by email.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="SUPPORT"
      title="CONTACT"
      meta={`LAST UPDATED: ${siteConfig.legalLastUpdated.toUpperCase()}`}
    >
      <Paragraph>
        Golonger is the app behind guided pelvic floor exercise sessions. If you
        have a question, need help, or want to reach us for any reason, email is
        the fastest way.
      </Paragraph>

      <ContentSection title="Email us">
        <a
          href={siteConfig.supportMailto}
          className="inline-block text-2xl md:text-3xl font-bold text-primary underline-offset-4 hover:underline break-all"
        >
          {siteConfig.supportEmail}
        </a>
        <Paragraph>
          We read every message and reply as quickly as we can,{" "}
          {siteConfig.responseTime}.
        </Paragraph>
      </ContentSection>

      <ContentSection title="What to write about">
        <BulletList
          items={[
            <>
              <strong className="text-foreground">App support</strong> - bugs
              or questions about the app. Please include your app version,
              device model, and OS version.
            </>,
            <>
              <strong className="text-foreground">
                Subscriptions and billing
              </strong>{" "}
              - restore purchases, billing questions, and cancellation. App
              Store refunds are handled by Apple.
            </>,
            <>
              <strong className="text-foreground">Privacy and data</strong> -
              deletion requests and analytics questions.
            </>,
            <>
              <strong className="text-foreground">Legal</strong> - questions
              about our Privacy Policy, Terms of Use, or Health Disclaimer.
            </>,
          ]}
        />
      </ContentSection>

      <ContentSection title="Company">
        <Paragraph>
          Golonger
          <br />
          {siteConfig.companyCountry}
        </Paragraph>
        <Paragraph>
          For the fastest response, please email us rather than using social
          channels.
        </Paragraph>
      </ContentSection>
    </PageShell>
  );
}
