import type { Metadata } from "next";

import {
  BulletList,
  ContentSection,
  EmailLink,
  Paragraph,
  TextLink,
} from "@/components/site/prose";
import { PageShell } from "@/components/site/page-shell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy - Golonger",
  description:
    "How Golonger handles information: on-device session history, optional analytics, subscriptions, and your privacy choices.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <PageShell
      eyebrow="LEGAL"
      title="PRIVACY POLICY"
      meta={`LAST UPDATED: ${siteConfig.legalLastUpdated.toUpperCase()}`}
    >
      <ContentSection title="About us">
        <Paragraph>
          Golonger is a mobile app that provides guided pelvic floor exercise
          sessions (the &ldquo;App&rdquo;). This Privacy Policy explains how
          Golonger (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;)
          handles information when you use the App.
        </Paragraph>
        <Paragraph>
          You do not need an account to use the App. We do not operate a user
          database, and the exercise history and session data you create stay
          on your device unless you choose to share analytics.
        </Paragraph>
        <Paragraph>
          If you do not accept this Privacy Policy, please do not use the App.
          If you have any questions, contact us at <EmailLink />.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Information stored on your device">
        <Paragraph>
          Exercise history and session data - completed sessions, streaks,
          preferences, and reminder settings - are stored locally on your device
          and are not sent to us.
        </Paragraph>
        <Paragraph>
          The optional first name you may enter during onboarding is also stored
          locally on your device only. It is not transmitted to us or to our
          service providers.
        </Paragraph>
        <Paragraph>
          You can clear this data at any time with Settings → Delete All Data,
          or by uninstalling the App.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Analytics (optional)">
        <Paragraph>
          Analytics is optional and is only enabled if you choose to share it in
          Settings → Share Analytics.
        </Paragraph>
        <Paragraph>
          If you enable analytics, PostHog receives pseudonymous identifiers and
          usage events. This may include which screens you open, session start
          and completion events, app version, device model, operating system
          version, language, and technical information such as your IP address.
          These events are linked to a persistent pseudonymous distinct ID
          rather than your name or email address.
        </Paragraph>
        <Paragraph>
          You can turn analytics off at any time in Settings → Share Analytics.
          This stops new analytics events from being sent and records your
          choice. You may withdraw consent at any time this way. Settings →
          Delete All Data resets the analytics identifier and the consent state
          stored on your device.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Subscriptions and purchases">
        <Paragraph>
          Subscriptions are purchased through the Apple App Store or Google Play
          and managed with RevenueCat. RevenueCat processes purchase history,
          subscription status, and device identifiers needed to validate
          entitlements and restore purchases. We do not receive or store your
          payment card details; payments are handled by the app store.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Diagnostics">
        <Paragraph>
          Apple and Google may provide crash logs and diagnostics depending on
          your device settings. These are used only to diagnose crashes and keep
          the App stable.
        </Paragraph>
      </ContentSection>

      <ContentSection title="How we use information">
        <Paragraph>
          We and our providers use the information described above to:
        </Paragraph>
        <BulletList
          items={[
            <>validate and manage subscriptions and restore purchases;</>,
            <>
              understand how the App is used, if you choose to enable
              analytics;
            </>,
            <>diagnose crashes and technical problems;</>,
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
          information under its own privacy policy.
        </Paragraph>
        <BulletList
          items={[
            <>
              <strong className="text-foreground">RevenueCat</strong> -
              subscription management, purchase validation, and entitlement
              restoration.{" "}
              <TextLink href="https://www.revenuecat.com/privacy">
                Privacy policy
              </TextLink>
              .
            </>,
            <>
              <strong className="text-foreground">PostHog (United States)</strong>{" "}
              - optional product analytics.{" "}
              <TextLink href="https://posthog.com/privacy">
                Privacy policy
              </TextLink>
              .
            </>,
            <>
              <strong className="text-foreground">Apple App Store</strong> -
              payments, purchase processing, and diagnostics.{" "}
              <TextLink href="https://www.apple.com/legal/privacy/">
                Privacy policy
              </TextLink>
              .
            </>,
            <>
              <strong className="text-foreground">Google Play</strong> -
              payments, purchase processing, and diagnostics.{" "}
              <TextLink href="https://policies.google.com/privacy">
                Privacy policy
              </TextLink>
              .
            </>,
          ]}
        />
        <Paragraph>
          We require our service providers to protect information to a standard
          equivalent to this policy and to use it only for the purposes we
          specify.
        </Paragraph>
      </ContentSection>

      <ContentSection title="International transfers">
        <Paragraph>
          PostHog is hosted in the United States. If you use the App from outside
          the United States and choose to share analytics, your pseudonymous
          analytics data will be transferred to and processed in the United
          States. Where required, we rely on appropriate safeguards for these
          transfers, such as standard contractual clauses. Subscription data may
          be processed in the countries where RevenueCat, Apple, and Google
          operate.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Retention">
        <Paragraph>
          Information stored on your device remains until you delete it in
          Settings → Delete All Data or uninstall the App. PostHog and RevenueCat
          retain information according to their own retention policies and our
          agreements with them. Support emails are kept only for as long as
          needed to respond and to meet legal obligations.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Your privacy choices and rights">
        <Paragraph>
          Depending on where you live, you may have rights to access, correct,
          delete, restrict, or port your information, or to object to
          processing. To exercise these rights, email <EmailLink />. We usually
          respond within one month.
        </Paragraph>
        <Paragraph>
          Because we do not operate accounts or a user database, most of the
          information associated with your device is held by the app stores and
          the providers listed above. We will forward requests to the relevant
          provider where needed and confirm once processed.
        </Paragraph>
        <Paragraph>
          You can withdraw analytics consent at any time in Settings → Share
          Analytics. We do not sell personal information for money and do not
          share it for targeted advertising.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Children's privacy">
        <Paragraph>
          The App is intended for adults aged 18 and older. It is not directed
          at children, and we do not knowingly collect personal information from
          children. If you believe a child has used the App, contact us and we
          will help remove the data.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Changes to this policy">
        <Paragraph>
          We may update this Privacy Policy from time to time to reflect changes
          in the law, our data practices, the features of the App, or advances in
          technology. Any changes will be reflected with a new &ldquo;Last
          updated&rdquo; date at the top of this page. Continued use of the App
          after changes go into effect constitutes your acceptance of the
          updated policy.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Contact">
        <Paragraph>
          If you have any questions about this policy or your data, email us at{" "}
          <EmailLink /> or visit our <TextLink href="/contact">contact page</TextLink>.
          You can also read our{" "}
          <TextLink href="/terms-of-use">Terms of Use</TextLink> and{" "}
          <TextLink href="/health-disclaimer">Health Disclaimer</TextLink>.
        </Paragraph>
      </ContentSection>
    </PageShell>
  );
}
