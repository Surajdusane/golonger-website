import type { ReactNode } from "react";

import { siteConfig } from "@/lib/site";
import { ContentSection, EmailLink, Paragraph, TextLink } from "./prose";

type Faq = {
  question: string;
  answer: ReactNode;
};

const subscriptionFaqs: Faq[] = [
  {
    question: "Do I need a subscription to use Golonger?",
    answer:
      "Golonger is free to download, but a paid subscription is required to access core features. Subscriptions are purchased through the Apple App Store or Google Play and are managed with RevenueCat.",
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
        All purchases are final, and refunds are handled by the store you
        purchased from, subject to its own policies. Submit refund requests
        directly to the{" "}
        <TextLink href="https://support.apple.com/billing">App Store</TextLink>{" "}
        or{" "}
        <TextLink href="https://support.google.com/googleplay/answer/2479637">
          Google Play
        </TextLink>
        . If a payment is declined or charged back, access to the app may be
        suspended or terminated.
      </>
    ),
  },
];

const privacyFaqs: Faq[] = [
  {
    question: "Do I need an account?",
    answer:
      "No. Golonger requires no account or sign-in. Your exercise history, streaks, preferences, and reminders are stored on your device. The optional first name you may enter during onboarding is also stored only on your device.",
  },
  {
    question: "What data does Golonger collect?",
    answer: (
      <>
        We do not operate a user database, and your session data stays on your
        device unless you choose to share analytics. If you enable analytics,
        PostHog receives pseudonymous identifiers and usage events, which may
        include which screens you open, session start and completion events, app
        version, device model, operating system version, language, and technical
        information such as your IP address. These events are linked to a
        pseudonymous ID rather than your name or email address. See our{" "}
        <TextLink href="/privacy-policy">Privacy Policy</TextLink> for details.
      </>
    ),
  },
  {
    question: "Can I turn off analytics?",
    answer:
      "Yes. Analytics is optional and only runs if you choose to share it. You can turn it off at any time in Settings, then Share Analytics. This stops new analytics events and records your choice. Settings, then Delete All Data also resets the analytics identifier and consent setting on your device.",
  },
  {
    question: "Does Golonger sell or share my data?",
    answer: (
      <>
        No. We do not sell your information, use it for advertising, or share it
        for targeted advertising. We use limited service providers only to run
        the app: RevenueCat for subscriptions, PostHog for optional analytics,
        and Apple or Google for payments and diagnostics. Each processes
        information under its own privacy policy, listed in our{" "}
        <TextLink href="/privacy-policy">Privacy Policy</TextLink>.
      </>
    ),
  },
  {
    question: "How do I delete my data?",
    answer:
      "Open the app and go to Settings, then Delete All Data. This clears your local session history, streaks, and preferences, and resets the analytics identifier and consent setting on your device. Uninstalling the app also permanently deletes locally stored data. To ask about information held by our providers, email us.",
  },
  {
    question: "Is my data transferred outside my country?",
    answer: (
      <>
        PostHog is hosted in the United States, so if you enable analytics your
        pseudonymous analytics data is transferred to and processed there.
        Subscription data may be processed in the countries where RevenueCat,
        Apple, and Google operate. Where required, we rely on appropriate
        safeguards for these transfers. See the{" "}
        <TextLink href="/privacy-policy">Privacy Policy</TextLink> for more.
      </>
    ),
  },
];

const appFaqs: Faq[] = [
  {
    question: "What is included in the app?",
    answer:
      "Guided sessions with follow-along video, on-screen timers and cues, optional reminders, and a history of completed sessions and streaks. A subscription is required to access core features.",
  },
  {
    question: "Is Golonger medical advice?",
    answer: (
      <>
        No. Golonger is a general wellness and fitness app. It does not provide
        medical advice, diagnosis, or treatment, and the exercises are not a
        substitute for professional medical advice. Consult a qualified
        healthcare professional before starting, and stop if you feel pain,
        dizziness, or discomfort. Read the full{" "}
        <TextLink href="/health-disclaimer">Health Disclaimer</TextLink>.
      </>
    ),
  },
  {
    question: "Who can use Golonger?",
    answer:
      "Golonger is intended for adults aged 18 and older. It is not directed at children.",
  },
  {
    question: "Where can I read your policies?",
    answer: (
      <>
        Our <TextLink href="/privacy-policy">Privacy Policy</TextLink>,{" "}
        <TextLink href="/terms-of-use">Terms of Use</TextLink>, and{" "}
        <TextLink href="/health-disclaimer">Health Disclaimer</TextLink> explain
        how the app works, how your information is handled, and the terms that
        apply when you use Golonger.
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
          <p className="text-muted-foreground leading-relaxed mt-1.5">
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
        Short answers to common questions about Golonger. If you cannot find
        what you need, email us and we will help.
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
          <TextLink href="/contact">contact page</TextLink>. We reply as
          quickly as we can, {siteConfig.responseTime}.
        </Paragraph>
      </ContentSection>
    </>
  );
}
