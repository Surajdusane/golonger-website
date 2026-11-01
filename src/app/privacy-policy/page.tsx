import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

export const metadata: Metadata = {
  title: "Privacy Policy - Golonger",
  description:
    "How Golonger handles your data. No accounts, local-only health data, with RevenueCat and PostHog.",
};

function PolicySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="pt-12 first:pt-0">
      <h2 className="section-heading">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  );
}

function Paragraph({ children }: { children: ReactNode }) {
  return (
    <p className="text-muted-foreground leading-relaxed">{children}</p>
  );
}

function List({ items }: { items: ReactNode[] }) {
  return (
    <ul className="space-y-2.5 list-disc pl-5 text-muted-foreground leading-relaxed">
      {items.map((item, i) => (
        <li key={i}>{item}</li>
      ))}
    </ul>
  );
}

function EmailLink() {
  return (
    <a
      href="mailto:hello@golonger.app"
      className="text-primary hover:underline"
    >
      hello@golonger.app
    </a>
  );
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <section className="grid-bg">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <Header />

          <div className="py-16 md:py-20 text-center">
            <p className="text-xs tracking-[.3em] text-primary font-semibold">
              LEGAL
            </p>
            <h1 className="page-title mt-3">PRIVACY POLICY</h1>
            <p className="text-muted-foreground mt-4 text-xs tracking-[.25em]">
              LAST UPDATED: SEPTEMBER 11, 2026
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition"
          >
            <span aria-hidden="true">←</span> Back to home
          </Link>

          <div className="mt-8">
            <PolicySection title="About us">
              <Paragraph>
                Golonger is a mobile app for guided pelvic floor exercises,
                designed to improve pelvic floor strength and flexibility for
                sexual health and wellness (the &ldquo;App&rdquo;). This
                Privacy Policy explains how Golonger (&ldquo;we,&rdquo;
                &ldquo;our,&rdquo; or &ldquo;us&rdquo;) handles information
                when you use our App.
              </Paragraph>
              <Paragraph>
                Private by design: we require no account, operate no user
                database, and store no personal data on our own servers. Your
                health data stays on your device. Limited subscription and
                analytics data is processed only by the trusted third-party
                providers described below.
              </Paragraph>
              <Paragraph>
                If you do not accept the terms of this Privacy Policy, please
                do not use the App. If you have any questions or concerns,
                contact us at <EmailLink />.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Data we collect">
              <Paragraph>
                We do not collect or store personal data like your name, email
                address, or IP address on our own systems, and we do not
                create user accounts or profiles.
              </Paragraph>
              <Paragraph>
                Your exercise history, session data, and in-app preferences
                are stored locally on your device only and never sent to us.
              </Paragraph>
              <Paragraph>
                Certain information is collected automatically by our
                third-party providers to operate subscriptions and improve
                the App. This includes:
              </Paragraph>
              <List
                items={[
                  <>
                    <strong className="text-foreground">
                      Subscription data (via RevenueCat):
                    </strong>{" "}
                    purchase history, subscription status, and device
                    identifiers needed to validate entitlements.
                  </>,
                  <>
                    <strong className="text-foreground">
                      App usage data (via PostHog):
                    </strong>{" "}
                    anonymized events such as time spent in the app and screen
                    views.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Device information:
                    </strong>{" "}
                    such as device model, OS version, and language settings,
                    collected in anonymized form for analytics and stability.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Diagnostics:
                    </strong>{" "}
                    crash logs via Apple&apos;s and Google&apos;s diagnostics
                    tools to monitor performance.
                  </>,
                ]}
              />
            </PolicySection>

            <PolicySection title="How we use your data">
              <Paragraph>
                We ourselves do not receive or process personal data for our
                own purposes. Our providers use the information above to:
              </Paragraph>
              <List
                items={[
                  <>validate and manage your subscription via RevenueCat;</>,
                  <>
                    monitor app performance and diagnose bugs or crashes;
                  </>,
                  <>
                    understand general user behavior (e.g., time spent in app,
                    screen views) via PostHog to improve the experience;
                  </>,
                ]}
              />
              <Paragraph>
                All analytics data is anonymized and is never used for
                advertising or sold to third parties.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Third-party services">
              <Paragraph>
                We rely on the following third-party tools to operate the App:
              </Paragraph>
              <List
                items={[
                  <>
                    <strong className="text-foreground">RevenueCat</strong> —
                    to manage subscriptions, validate purchases, and handle
                    entitlements.
                  </>,
                  <>
                    <strong className="text-foreground">
                      PostHog (Cloud)
                    </strong>{" "}
                    — for anonymized product analytics and feature usage.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Apple App Store &amp; Google Play
                    </strong>{" "}
                    — for payments, purchase processing, and usage insights.
                  </>,
                ]}
              />
              <Paragraph>
                These providers may collect anonymized data according to their
                own privacy practices. No personally identifiable information
                is intentionally transmitted to them by us beyond what is
                strictly required to provide subscriptions and analytics. We
                recommend reviewing the privacy policies of the providers you
                interact with. We do not collect or process any payment
                instrument details such as bank card numbers — those are
                handled entirely by the app stores.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Data storage">
              <Paragraph>
                Your health-related data — exercise history and session data —
                is stored locally on your device only. We maintain no servers
                holding your personal data, so there are no cross-border
                transfers performed by us.
              </Paragraph>
              <Paragraph>
                Subscription and analytics data held by RevenueCat and PostHog
                is stored and secured by those providers under their own
                security measures, including encryption in transit. Uninstalling
                the App permanently deletes all locally stored data on your
                device; data held by third-party providers is retained
                according to their own retention policies.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Your privacy controls">
              <Paragraph>
                Since no user accounts are created, there is no user profile
                to delete and no in-app account deletion flow.
              </Paragraph>
              <Paragraph>
                To remove your on-device data, simply uninstall the App. If
                you wish to request the deletion of analytics or subscription
                data associated with your device held by PostHog or RevenueCat,
                contact us at <EmailLink /> and we will forward your request
                to the relevant provider and confirm once processed.
              </Paragraph>
              <Paragraph>
                To exercise other rights — access, rectification, objection,
                restriction, or portability — contact us at <EmailLink />. We
                typically respond within one month. We do not sell your
                personal information for money and do not share it for
                targeted advertising, so there is nothing to opt out of on our
                side.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Children's privacy">
              <Paragraph>
                The App is a sexual health and wellness app intended for
                adults aged 18 and older. It is not directed at children, and
                we do not knowingly collect personal information from children
                under the age of 13.
              </Paragraph>
              <Paragraph>
                If we become aware of unintentional data collection from a
                child, we will delete it promptly. Parents and guardians are
                responsible for supervising any use by minors.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Changes to this policy">
              <Paragraph>
                We may update this Privacy Policy from time to time to reflect
                changes in the law, our data practices, the features of the
                App, or advances in technology. Any changes will be reflected
                with a new &ldquo;Last updated&rdquo; date at the top of this
                page. Continued use of the App after changes go into effect
                constitutes your acceptance of the updated policy.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Contact">
              <Paragraph>
                If you have any questions about this policy or your data,
                reach out to us at: <EmailLink />
              </Paragraph>
            </PolicySection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
