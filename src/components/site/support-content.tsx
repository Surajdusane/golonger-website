import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site";
import { ContentSection, EmailLink, Paragraph, TextLink } from "./prose";

type Faq = {
  question: string;
  answer: ReactNode;
};

const subscriptionFaqs: Faq[] = [
  {
    question: "Do I need a subscription to use GoLonger?",
    answer:
      "GoLonger is free to download, but core functionality requires an active subscription. Weekly, monthly, and yearly plans may be offered. The price is shown in the app before you purchase and varies by region. Subscriptions are purchased through the Apple App Store or Google Play and managed with RevenueCat.",
  },
  {
    question: "How do I restore purchases?",
    answer:
      "Open the app, go to Settings, and tap Restore Purchases. Make sure you are signed in with the same Apple ID or Google account you used to subscribe. If your purchase still does not appear, email us and we will help.",
  },
  {
    question: "How do I manage or cancel my subscription?",
    answer: (
      <>
        Subscriptions are managed by the App Store or Google Play. On iOS, open
        Settings, tap your Apple ID, then Subscriptions. On Android, open Google
        Play, then Payments &amp; subscriptions. Uninstalling the app does not
        cancel a subscription, so cancel before the renewal date to avoid being
        charged.
      </>
    ),
  },
  {
    question: "Can I get a refund?",
    answer: (
      <>
        All purchases are final, except where required by law or by the
        store&rsquo;s own policy. Refunds are handled by the store you purchased
        from. Submit refund requests directly to the{" "}
        <TextLink href={siteConfig.appStoreBillingUrl}>App Store</TextLink> or{" "}
        <TextLink href={siteConfig.googlePlayRefundUrl}>Google Play</TextLink>.
      </>
    ),
  },
  {
    question: "Is there a free trial?",
    answer:
      "A trial may be offered on some plans. If a trial is offered, the details are shown in the app before you confirm, and it converts to a paid subscription unless you cancel at least 24 hours before it ends.",
  },
];

const privacyFaqs: Faq[] = [
  {
    question: "Do I need an account?",
    answer:
      "No. GoLonger requires no account or sign-in. Your onboarding details, exercise history, streaks, preferences, and reminders are stored on your device. The first name you may enter during onboarding is also stored only on your device.",
  },
  {
    question: "What data does GoLonger collect?",
    answer: (
      <>
        We do not operate a user database, and your exercise history stays on
        your device. The app currently sends limited product analytics to
        PostHog in the United States: onboarding page views, feature usage
        (Home, Analytics, Exercise, or Kegle), and one app-open event per day.
        Those events may include the name of the onboarding page or feature you
        opened and the local date of the daily event, and PostHog may also
        receive a pseudonymous analytics identifier, app version and build, app
        name and bundle ID, device manufacturer and model, OS name and version,
        locale, timezone, an emulator flag, and your IP address. The app does not
        send your name, email, onboarding answers, exercise history, reps,
        holds, or completion data, and does not collect precise location, IDFA,
        or HealthKit data. See our{" "}
        <TextLink href="/privacy-policy">Privacy Policy</TextLink> for details.
      </>
    ),
  },
  {
    question: "Can I turn analytics off?",
    answer:
      "The current version of the app has no setting that turns analytics off, and analytics is enabled by default at launch. You can email us to request deletion of analytics data associated with your installation. To stop future collection, you can uninstall the app.",
  },
  {
    question: "Does GoLonger sell or share my data?",
    answer: (
      <>
        No. We do not sell your information, use it for advertising, or share it
        for targeted advertising. We use limited service providers only to run
        the app: RevenueCat for subscriptions, PostHog for analytics, and Apple
        or Google for payments and diagnostics. Each processes information under
        its own privacy policy, listed in our{" "}
        <TextLink href="/privacy-policy">Privacy Policy</TextLink>.
      </>
    ),
  },
  {
    question: "How do I delete my data?",
    answer: (
      <>
        Open the app and go to Settings, then Delete All Data. This clears your
        local data and resets the analytics identifier on your device. It does
        not cancel a subscription. Uninstalling the app also deletes locally
        stored data. To request deletion of analytics data, email us. Our{" "}
        <TextLink href="/data-deletion">Data Deletion</TextLink> page explains
        what to include.
      </>
    ),
  },
  {
    question: "Is my data transferred outside my country?",
    answer: (
      <>
        PostHog is hosted in the United States, so pseudonymous analytics data is
        transferred to and processed there. Where required, we rely on
        appropriate safeguards such as standard contractual clauses. Subscription
        data may be processed in the countries where RevenueCat, Apple, and
        Google operate. See the{" "}
        <TextLink href="/privacy-policy">Privacy Policy</TextLink> for more.
      </>
    ),
  },
];

const appFaqs: Faq[] = [
  {
    question: "What is included in the app?",
    answer:
      "Guided sessions with follow-along video, on-screen timers and cues, optional reminders, and a history of completed sessions and streaks. A subscription is required to access core functionality.",
  },
  {
    question: "Is GoLonger medical advice?",
    answer: (
      <>
        No. GoLonger is a general wellness and fitness app, not a medical device.
        It does not provide medical advice, diagnosis, or treatment, and the
        exercises are not a substitute for professional medical advice. Consult a
        qualified healthcare professional before starting, and stop if you feel
        pain, dizziness, or discomfort. Read the full{" "}
        <TextLink href="/health-disclaimer">Health Disclaimer</TextLink>.
      </>
    ),
  },
  {
    question: "Who can use GoLonger?",
    answer:
      "GoLonger is intended for adults aged 18 and older. It is not directed at anyone under 18.",
  },
  {
    question: "Where can I read your policies?",
    answer: (
      <>
        Our <TextLink href="/privacy-policy">Privacy Policy</TextLink>,{" "}
        <TextLink href="/terms-of-use">Terms of Use</TextLink>,{" "}
        <TextLink href="/health-disclaimer">Health Disclaimer</TextLink>, and{" "}
        <TextLink href="/data-deletion">Data Deletion</TextLink> pages explain
        how the app works, how your information is handled, and the terms that
        apply when you use GoLonger.
      </>
    ),
  },
];

function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="space-y-6">
      {faqs.map((faq) => (
        <div key={faq.question}>
          <h3 className="font-semibold text-foreground">{faq.question}</h3>
          <p className="mt-1.5 leading-relaxed text-muted-foreground">
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}

export function SupportContent() {
  return (
    <>
      <Paragraph>
        Short answers to common questions about GoLonger. If you cannot find what
        you need, email us and we will help.
      </Paragraph>

      <ContentSection title="Subscriptions and payments">
        <FaqList faqs={subscriptionFaqs} />
      </ContentSection>

      <ContentSection title="Privacy and data">
        <FaqList faqs={privacyFaqs} />
      </ContentSection>

      <ContentSection title="Using the app">
        <FaqList faqs={appFaqs} />
      </ContentSection>

      <ContentSection title="Still need help?">
        <Paragraph>
          Email <EmailLink /> or visit our{" "}
          <TextLink href="/contact">Contact page</TextLink>. We reply as quickly
          as we can, {siteConfig.responseTime}. You can also read our{" "}
          <TextLink href="/privacy-policy">Privacy Policy</TextLink>,{" "}
          <TextLink href="/terms-of-use">Terms of Use</TextLink>,{" "}
          <TextLink href="/health-disclaimer">Health Disclaimer</TextLink>, and{" "}
          <TextLink href="/data-deletion">Data Deletion</TextLink> pages.
        </Paragraph>
      </ContentSection>
    </>
  );
}
