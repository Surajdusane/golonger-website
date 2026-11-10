import type { Metadata } from "next";

import {
  BulletList,
  ContentSection,
  Paragraph,
  TextLink,
} from "@/components/site/prose";
import { PageShell } from "@/components/site/page-shell";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact GoLonger support by email for app help, subscriptions and billing, privacy and data deletion requests, and legal questions.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <PageShell
      eyebrow="SUPPORT"
      title="CONTACT"
      intro={
        <p>
          Email is the fastest way to reach us. We reply{" "}
          {siteConfig.responseTime}.
        </p>
      }
    >
      <ContentSection title="Email us">
        <a
          href={siteConfig.supportMailto}
          className="inline-block break-all rounded-md text-2xl font-bold text-primary underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary md:text-3xl"
        >
          {siteConfig.supportEmail}
        </a>
        <Paragraph>
          You can copy the address above or use the link. No contact form is
          provided, so there is no form data to collect.
        </Paragraph>
      </ContentSection>

      <ContentSection title="What to write about">
        <BulletList
          items={[
            <>
              <strong className="text-foreground">App support</strong> — bugs or
              questions about the app. Please include your app version, device
              model, and operating system version.
            </>,
            <>
              <strong className="text-foreground">
                Subscriptions and billing
              </strong>{" "}
              — restore purchases, billing questions, and cancellation. Refunds
              are handled by the store you purchased from.
            </>,
            <>
              <strong className="text-foreground">Privacy and data</strong> —
              deletion requests and analytics questions. See{" "}
              <TextLink href="/data-deletion">Data Deletion</TextLink> for what to
              include.
            </>,
            <>
              <strong className="text-foreground">Legal</strong> — questions
              about our Privacy Policy, Terms of Use, or Health Disclaimer.
            </>,
          ]}
        />
      </ContentSection>

      <ContentSection title="Refunds and billing">
        <Paragraph>
          Purchases are handled by the app store, so refund requests must go to
          the store:
        </Paragraph>
        <BulletList
          items={[
            <>
              <TextLink href={siteConfig.appStoreBillingUrl}>
                Apple App Store billing and refunds
              </TextLink>
            </>,
            <>
              <TextLink href={siteConfig.googlePlayRefundUrl}>
                Google Play refunds
              </TextLink>
            </>,
          ]}
        />
        <Paragraph>
          Uninstalling the app does not cancel a subscription. Manage or cancel
          it in your App Store or Google Play account settings.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Company details">
        <Paragraph>
          <strong className="text-foreground">{siteConfig.legalEntity}</strong>
          <br />
          Registered address: {siteConfig.legalAddress}
          <br />
          {siteConfig.legalCountry}
          <br />
          Email: {siteConfig.supportEmail}
        </Paragraph>
        <Paragraph>
          For the fastest response, please email us rather than using social
          channels.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Useful pages">
        <BulletList
          items={[
            <>
              <TextLink href="/support">Help &amp; FAQ</TextLink> — common
              questions about subscriptions, privacy, and the app.
            </>,
            <>
              <TextLink href="/data-deletion">Data Deletion</TextLink> — how to
              delete local data and request analytics deletion.
            </>,

            <>
              <TextLink href="/privacy-policy">Privacy Policy</TextLink>,{" "}
              <TextLink href="/terms-of-use">Terms of Use</TextLink>, and{" "}
              <TextLink href="/health-disclaimer">Health Disclaimer</TextLink>.
            </>,
          ]}
        />
      </ContentSection>
    </PageShell>
  );
}
