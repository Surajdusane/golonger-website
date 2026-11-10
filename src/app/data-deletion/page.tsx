import type { Metadata } from "next";

import {
  BulletList,
  ContentSection,
  EmailLink,
  Paragraph,
  SubHeading,
  TextLink,
} from "@/components/site/prose";
import { PageShell } from "@/components/site/page-shell";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = createMetadata({
  title: "Data Deletion",
  description:
    "How to delete your GoLonger data: clear on-device exercise data with Delete All Data or uninstall, and request deletion of analytics data by email.",
  path: "/data-deletion",
});

export default function DataDeletionPage() {
  return (
    <PageShell
      eyebrow="PRIVACY"
      title="DATA DELETION"
      intro={
        <p>
          GoLonger has no accounts. Most of your data lives on your device and
          can be deleted in the app. This page explains exactly what happens.
        </p>
      }
    >
      <ContentSection title="What is stored on your device">
        <BulletList
          items={[
            <>your first name, goal, level, and session length from onboarding;</>,
            <>your exercise history and completed sessions;</>,
            <>your streaks;</>,
            <>your app preferences; and</>,
            <>your reminder settings.</>,
          ]}
        />
        <Paragraph>
          This information is stored locally on your device. It is not sent to
          GoLonger, PostHog, or RevenueCat.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Delete local data in the app">
        <Paragraph>
          Open the GoLonger app, go to <strong className="text-foreground">Settings</strong>,
          then tap <strong className="text-foreground">Delete All Data</strong>.
          This clears your local data and resets the analytics identifier on your
          device. The change is immediate and cannot be undone.
        </Paragraph>
        <Paragraph>
          Alternatively, uninstalling the app deletes the data stored by the app
          on that device. Uninstalling does not cancel a subscription, so cancel
          it in your App Store or Google Play account settings if you no longer
          want to be charged.
        </Paragraph>
        <SubHeading>Device backups</SubHeading>
        <Paragraph>
          Depending on your device and backup settings, iCloud or Google device
          backups may include app data. GoLonger does not control those backups.
          If you restore a backup, app data included in it may come back. Manage
          or delete backups in your device settings.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Request deletion of analytics data">
        <Paragraph>
          The current version of the app sends limited product analytics to
          PostHog in the United States: onboarding page views, feature usage,
          and one app-open event per day. You can email us to request deletion
          of analytics data associated with your installation.
        </Paragraph>
        <Paragraph>
          Email <EmailLink /> with the subject line{" "}
          <strong className="text-foreground">
            &ldquo;Data Deletion Request - GoLonger&rdquo;
          </strong>
          , and include:
        </Paragraph>
        <BulletList
          items={[
            <>your platform (iOS or Android);</>,
            <>your app version; and</>,
            <>the approximate date or date range of use.</>,
          ]}
        />
        <Paragraph>
          Because the app has no account and does not identify you by name or
          email, we may not be able to identify all data associated with your
          device. We will tell you what we can do. To stop future collection, you
          can uninstall the app. The current version of the app does not offer a
          setting that turns analytics off.
        </Paragraph>
        <Paragraph>
          We {siteConfig.rightsResponseTime} for rights requests. See our{" "}
          <TextLink href="/privacy-policy">Privacy Policy</TextLink> for more
          about analytics.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Subscription and purchase records">
        <Paragraph>
          Subscription data is tied to your App Store or Google Play account and
          is processed by RevenueCat and the store. We cannot cancel a
          subscription on your behalf, and deleting app data does not cancel one.
          Manage or cancel in your store account settings.
        </Paragraph>
        <Paragraph>
          Where a deletion request also concerns information held by RevenueCat,
          we will forward the request where applicable and confirm what has been
          done. Purchase records held by Apple or Google are governed by their own
          policies; contact the store directly for those records.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Questions">
        <Paragraph>
          If anything here is unclear, email <EmailLink /> or visit our{" "}
          <TextLink href="/contact">Contact page</TextLink>. You can also read our{" "}
          <TextLink href="/privacy-policy">Privacy Policy</TextLink> and{" "}
          <TextLink href="/support">Help &amp; FAQ</TextLink>.
        </Paragraph>
      </ContentSection>
    </PageShell>
  );
}
