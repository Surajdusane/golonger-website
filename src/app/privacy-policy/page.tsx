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
  title: "Privacy Policy",
  description:
    "How GoLonger handles information: on-device exercise data, PostHog screen-view analytics, RevenueCat subscriptions, retention, and your privacy choices.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="LEGAL"
      title="PRIVACY POLICY"
      meta={`EFFECTIVE ${siteConfig.privacyEffectiveDate.toUpperCase()}`}
      intro={
        <p>
          This policy explains what information the GoLonger app processes, why,
          and the choices you have. GoLonger has no accounts and no user
          database.
        </p>
      }
    >
      <ContentSection title="About us and who is responsible">
        <Paragraph>
          GoLonger is a mobile app for iOS and Android that provides guided
          pelvic floor exercise sessions (the &ldquo;App&rdquo;). The App is
          operated by{" "}
          <strong className="text-foreground">{siteConfig.legalEntity}</strong>,
          a company registered in {siteConfig.legalCountry}{" "}
          (&ldquo;GoLonger&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or
          &ldquo;our&rdquo;). We are the controller responsible for the
          processing described in this policy.
        </Paragraph>
        <Paragraph>
          Registered address: {siteConfig.legalAddress}
          <br />
          Contact email: <EmailLink />
        </Paragraph>
        <Paragraph>
          You do not need an account, login, or password to use the App. We do
          not operate a user database, and the information you create in the App
          is stored on your device. This policy applies to the App and to this
          website.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Information stored on your device">
        <Paragraph>
          The following information is stored locally on your device only. It is
          not transmitted to GoLonger or to our analytics or subscription
          providers:
        </Paragraph>
        <BulletList
          items={[
            <>
              onboarding details you choose to enter, such as your first name,
              goal, level, and session length in minutes;
            </>,
            <>your exercise history and completed sessions;</>,
            <>your streaks;</>,
            <>your app preferences; and</>,
            <>your reminder settings.</>,
          ]}
        />
        <Paragraph>
          Because this information stays on your device, we cannot see it, and
          we cannot recover it for you if it is deleted. You can clear it at any
          time in the App under Settings → Delete All Data, or by uninstalling
          the App.
        </Paragraph>
        <SubHeading>Device backups</SubHeading>
        <Paragraph>
          Depending on your device and backup settings, iCloud or Google device
          backups may include data stored by apps on your device. GoLonger does
          not control those backups and cannot access them. If you restore a
          device backup, App data included in that backup may be restored with
          it. You can manage or disable device backups in your device settings.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Analytics">
        <Paragraph>
          The App uses PostHog, a product analytics service hosted in the United
          States at <code className="text-foreground">us.i.posthog.com</code>, to
          understand how the App is used and to fix problems. Analytics is
          enabled by default when you launch the App.
        </Paragraph>
        <SubHeading>What analytics collects</SubHeading>
        <Paragraph>
          The current version of the App sends screen-view events only. Those
          events may include the name of the screen you opened. PostHog may
          receive:
        </Paragraph>
        <BulletList
          items={[
            <>a pseudonymous analytics identifier generated for your installation;</>,
            <>screen-view events, which may include the name of the screen you opened;</>,
            <>app version and build number;</>,
            <>app name and bundle identifier;</>,
            <>device manufacturer and model;</>,
            <>operating system name and version;</>,
            <>locale and timezone;</>,
            <>an emulator flag; and</>,
            <>your IP address.</>,
          ]}
        />
        <SubHeading>What analytics does not collect</SubHeading>
        <Paragraph>
          The App does not send your name, email address, or onboarding answers
          to PostHog. It does not send your exercise history, reps, holds, or
          completion data. It does not collect precise location, the advertising
          identifier (IDFA), or HealthKit data. The current version does not
          record touches or session replays, and does not send app lifecycle
          events.
        </Paragraph>
        <Paragraph>
          We do not use analytics for advertising, we do not sell analytics
          data, and we do not share it for targeted advertising. The App does not
          show ads and does not ask for permission to track you across other
          companies&rsquo; apps or websites.
        </Paragraph>
        <SubHeading>Retention and transfers</SubHeading>
        <Paragraph>
          PostHog retains analytics data for {siteConfig.analyticsRetention}.
          PostHog processes this data in the United States. Where required, we
          rely on appropriate safeguards for the transfer, such as standard
          contractual clauses.
        </Paragraph>
        <SubHeading>Your choices</SubHeading>
        <Paragraph>
          The current version of the App does not offer a setting that turns
          analytics off. You can email <EmailLink /> to request deletion of analytics
          data associated with your installation. Because the App has no account
          and we do not hold your name or email in the analytics system, we may
          not be able to identify all data associated with your device; we will
          tell you what we can do. To stop future collection, you can uninstall
          the App.
        </Paragraph>
        <Paragraph>
          The analytics identifier is pseudonymous, not anonymous: it is a
          persistent identifier that links events from the same installation
          until it is reset. Using Settings → Delete All Data in the App resets
          this identifier on your device.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Subscriptions and purchases">
        <Paragraph>
          GoLonger subscriptions are sold through the Apple App Store or Google
          Play and managed with RevenueCat. RevenueCat processes purchase
          history, subscription status, and the device identifiers needed to
          validate and restore entitlements. We do not receive or store your
          payment card details; payments are handled by the app store.
        </Paragraph>
        <Paragraph>
          Weekly, monthly, and yearly plans may be offered. The price is shown in
          the App before you purchase and varies by region. If a trial is
          offered, it converts to a paid subscription unless you cancel at least
          24 hours before it ends. Subscriptions renew automatically unless you
          cancel at least 24 hours before the end of the current period. You can
          manage or cancel in your App Store or Google Play account settings, and
          you can restore purchases in the App. Uninstalling the App does not
          cancel a subscription.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Diagnostics">
        <Paragraph>
          Apple and Google may provide crash logs and diagnostics to developers,
          depending on your device settings and the choices you have made with
          the store. We use these only to diagnose crashes and keep the App
          stable. The App does not include a third-party crash-reporting SDK.
        </Paragraph>
      </ContentSection>

      <ContentSection title="How we use information">
        <Paragraph>We and our providers use the information described above to:</Paragraph>
        <BulletList
          items={[
            <>validate, manage, and restore your subscription;</>,
            <>understand how features of the App are used;</>,
            <>diagnose crashes and technical problems;</>,
            <>maintain the security and stability of the App; and</>,
            <>respond to your support requests.</>,
          ]}
        />
        <Paragraph>
          We do not use information for advertising, we do not sell it, and we
          do not share it for targeted advertising.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Third-party services">
        <Paragraph>
          We rely on the following providers to operate the App. Each processes
          information under its own privacy policy and, where applicable, under
          contractual safeguards with us.
        </Paragraph>
        <BulletList
          items={[
            <>
              <strong className="text-foreground">RevenueCat</strong> -
              subscription management, purchase validation, and entitlement
              restoration.{" "}
              <TextLink href="https://www.revenuecat.com/privacy">
                RevenueCat privacy policy
              </TextLink>
              .
            </>,
            <>
              <strong className="text-foreground">PostHog (United States)</strong>{" "}
              - product analytics.{" "}
              <TextLink href="https://posthog.com/privacy">
                PostHog privacy policy
              </TextLink>
              .
            </>,
            <>
              <strong className="text-foreground">Apple App Store</strong> -
              payments, purchase processing, and store diagnostics.{" "}
              <TextLink href="https://www.apple.com/legal/privacy/">
                Apple privacy policy
              </TextLink>
              .
            </>,
            <>
              <strong className="text-foreground">Google Play</strong> -
              payments, purchase processing, and store diagnostics.{" "}
              <TextLink href="https://policies.google.com/privacy">
                Google privacy policy
              </TextLink>
              .
            </>,
          ]}
        />
      </ContentSection>

      <ContentSection title="International transfers">
        <Paragraph>
          PostHog is hosted in the United States, so pseudonymous analytics data
          is transferred to and processed in the United States. Where required,
          we rely on appropriate safeguards for these transfers, such as
          standard contractual clauses. Subscription data may be processed in
          the countries where RevenueCat, Apple, and Google operate.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Retention">
        <BulletList
          items={[
            <>
              <strong className="text-foreground">On-device data</strong> stays
              on your device until you use Delete All Data or uninstall the App.
            </>,
            <>
              <strong className="text-foreground">Analytics data</strong> is kept
              by PostHog for {siteConfig.analyticsRetention}.
            </>,
            <>
              <strong className="text-foreground">Subscription data</strong> is
              kept by RevenueCat and the app stores according to their policies
              and our agreements with them.
            </>,
            <>
              <strong className="text-foreground">Support emails</strong> are kept
              only for as long as needed to respond and to meet legal
              obligations.
            </>,
          ]}
        />
      </ContentSection>

      <ContentSection title="Your privacy choices and rights">
        <Paragraph>
          Depending on where you live, you may have the right to access,
          correct, delete, restrict, or port your information, or to object to
          certain processing. To exercise these rights, email <EmailLink />. We{" "}
          {siteConfig.rightsResponseTime}.
        </Paragraph>
        <Paragraph>
          There are limits to what we can do. We do not operate accounts or a
          user database, so most information associated with your device is held
          on your device, by the app stores, or by the providers listed above.
          Where a request concerns information held by a provider, we will
          forward it and confirm what has been done. Where information is held
          only on your device, deleting it in the App or uninstalling the App is
          the effective way to remove it.
        </Paragraph>
        <Paragraph>
          For step-by-step instructions, see our{" "}
          <TextLink href="/data-deletion">Data Deletion</TextLink> page. We do not
          sell personal information for money and do not share it for targeted
          advertising.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Children's privacy">
        <Paragraph>
          The App is intended for adults aged 18 and older. It is not directed at
          children, and we do not knowingly collect personal information from
          children. If you believe a child has used the App, contact us at{" "}
          <EmailLink /> and we will help you remove the data.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Changes to this policy">
        <Paragraph>
          We may update this Privacy Policy to reflect changes in the law, our
          data practices, the features of the App, or technology. When we do, we
          will update the effective date at the top of this page. Continued use
          of the App after changes take effect means the updated policy applies.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Contact">
        <Paragraph>
          If you have questions about this policy or your information, email{" "}
          <EmailLink /> or visit our{" "}
          <TextLink href="/contact">Contact page</TextLink>. You can also read our{" "}
          <TextLink href="/terms-of-use">Terms of Use</TextLink>,{" "}
          <TextLink href="/health-disclaimer">Health Disclaimer</TextLink>, and{" "}
          <TextLink href="/data-deletion">Data Deletion</TextLink> pages.
        </Paragraph>
        <Paragraph>
          {siteConfig.legalEntity}
          <br />
          {siteConfig.legalAddress}
          <br />
          {siteConfig.legalCountry}
        </Paragraph>
      </ContentSection>
    </PageShell>
  );
}
