import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";

export const metadata: Metadata = {
  title: "Privacy Policy — Golonger",
  description:
    "How Golonger collects, uses, and protects your personal data.",
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
              LAST UPDATED: AUGUST 17, 2026
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
                Privacy Policy explains what personal data we collect, why we
                process it, and the rights you have over it.
              </Paragraph>
              <Paragraph>
                We act as the controller of your personal data and process it
                in accordance with applicable data protection legislation
                (GDPR, UK GDPR, CCPA, and other applicable laws). We are
                committed to transparency and accountability in our data
                practices.
              </Paragraph>
              <Paragraph>
                If you do not accept the terms of this Privacy Policy, please
                do not use the App. If you have any questions or concerns,
                contact us at <EmailLink />.
              </Paragraph>
            </PolicySection>

            <PolicySection title="What data we collect">
              <Paragraph>
                As you engage with the App, we gather personal data through the
                following means:
              </Paragraph>
              <List
                items={[
                  <>
                    <strong className="text-foreground">
                      Data you provide directly:
                    </strong>{" "}
                    any information you input while using the App — such as
                    your name, email address, and details you share with our
                    support team.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Data collected automatically:
                    </strong>{" "}
                    when you use the App, we collect details about your device
                    (model, operating system, unique identifiers, IP address)
                    and your activity within the App.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Health-related data:
                    </strong>{" "}
                    your exercise history and session data. This is sensitive
                    personal data, processed only with your explicit consent
                    and only to provide the App&rsquo;s core functionality.
                  </>,
                ]}
              />
              <Paragraph>
                We also use cookies and similar technologies to retain details
                about your preferences and previous interactions, enhancing
                your experience in the App.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Why we process your data">
              <Paragraph>
                Data processing is essential to enable your usage of the App.
                Below are the purposes for which we process your data:
              </Paragraph>
              <List
                items={[
                  <>
                    <strong className="text-foreground">
                      Providing the App and customer support:
                    </strong>{" "}
                    we may communicate with you if you have contacted our
                    support team with any questions relating to the App.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Improving the experience:
                    </strong>{" "}
                    we analyze how you interact with the App to tailor it to
                    your needs and refine our training plans.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Technical performance:
                    </strong>{" "}
                    we continuously work to improve stability and streamline
                    features for your benefit.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Optimizing our campaigns:
                    </strong>{" "}
                    we analyze the performance of our advertising campaigns to
                    gauge interaction and reach.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Legal obligations:
                    </strong>{" "}
                    we comply with pertinent laws and regulations.
                  </>,
                ]}
              />
            </PolicySection>

            <PolicySection title="Legal basis for processing">
              <Paragraph>
                Depending on which features of the App you use, we process your
                personal data based on one or more of the following legal
                bases:
              </Paragraph>
              <List
                items={[
                  <>
                    <strong className="text-foreground">
                      Legitimate interest:
                    </strong>{" "}
                    we process usage data to technically improve the App and
                    deliver an improved service to you.
                  </>,
                  <>
                    <strong className="text-foreground">Contract:</strong> we
                    process usage data to fulfill our contractual duty of
                    granting you access to the App.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Legal obligation:
                    </strong>{" "}
                    we may handle personal data as mandated by law.
                  </>,
                  <>
                    <strong className="text-foreground">Consent:</strong> we
                    process sensitive personal data, including health data,
                    based on your explicit consent — this consent is essential
                    for enabling you to use the App.
                  </>,
                ]}
              />
            </PolicySection>

            <PolicySection title="Payments">
              <Paragraph>
                The App offers in-app purchases, including subscriptions, which
                are processed by Apple App Store and Google Play. We do not
                collect or process any information related to your payment
                instruments, such as your bank card number or its validity
                term, under any circumstances. We recommend reviewing the
                privacy policies of the payment providers you use.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Data retention">
              <Paragraph>
                We retain your personal data for as long as your account is
                active or for as long as it is necessary for the purposes of
                its collection and processing (for example, resolving disputes,
                safety and security reasons, or complying with our legal
                obligations). After account deletion, retained data is erased
                within a limited period, as required by applicable law.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Sharing of personal data">
              <Paragraph>
                We may need to share your personal data with certain third
                parties as follows:
              </Paragraph>
              <List
                items={[
                  <>
                    <strong className="text-foreground">
                      Service providers:
                    </strong>{" "}
                    providers of systems and services we use to host,
                    administer, and maintain the App — including hosting
                    servers, email services, analytics, crash reporting, and
                    customer service tools.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Marketing partners:
                    </strong>{" "}
                    if you consent to marketing, certain data may be shared
                    with providers we use to carry out marketing.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Compliance with laws:
                    </strong>{" "}
                    we may disclose personal data to comply with any applicable
                    law, regulation, or legal process, or to protect our users
                    and the public from harm.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Aggregated or anonymized data:
                    </strong>{" "}
                    we may share aggregated or anonymized information that does
                    not directly identify you.
                  </>,
                ]}
              />
              <Paragraph>
                Among the essential processors we trust are:
              </Paragraph>
              <List
                items={[
                  <>
                    <strong className="text-foreground">Amplitude</strong> —
                    analytics of user behavior and app usage.
                  </>,
                  <>
                    <strong className="text-foreground">AppsFlyer</strong> —
                    mobile attribution and marketing analytics.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Firebase Analytics
                    </strong>{" "}
                    — user interaction and performance analytics.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Firebase Crashlytics
                    </strong>{" "}
                    — crash reporting and stability monitoring.
                  </>,
                  <>
                    <strong className="text-foreground">Apple Inc.</strong> —
                    cloud storage and app services for iOS devices.
                  </>,
                ]}
              />
            </PolicySection>

            <PolicySection title="Data storage and cross-border transfers">
              <Paragraph>
                The personal data we maintain is primarily stored and
                processed within the EU, on secure servers. Where we
                collaborate with trusted third parties located outside the EU,
                we have entered into Standard Contractual Clauses with
                non-EEA processors if there is no adequacy decision by the EU
                Commission for their country. We adhere to the principles of
                minimization and anonymization where feasible.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Security">
              <Paragraph>
                Ensuring the security of your data is a top priority. We
                employ robust technical and organizational measures, including
                SSL encryption (HTTPS) for all interactions involving personal
                data, encrypted databases, and physically secure servers
                protected by firewalls.
              </Paragraph>
              <Paragraph>
                In the event of a personal data breach, we will promptly
                notify you with relevant details, measures taken, and an
                assessment of associated risks, as required by applicable law.
                To report a breach or seek assistance, contact us at{" "}
                <EmailLink />.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Your privacy rights">
              <Paragraph>
                We aim to ensure that you are fully informed about your data
                protection rights. These rights may vary depending on your
                location:
              </Paragraph>
              <List
                items={[
                  <>
                    <strong className="text-foreground">Access:</strong> you
                    can request a copy of the personal data we hold about you.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Rectification:
                    </strong>{" "}
                    you can request that we correct or supplement incorrect or
                    incomplete data.
                  </>,
                  <>
                    <strong className="text-foreground">Objection:</strong>{" "}
                    you can object to the collection or use of your personal
                    data for certain purposes.
                  </>,
                  <>
                    <strong className="text-foreground">Erasure:</strong> you
                    can request that we erase some or all of your personal
                    data from our systems.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Restriction of processing:
                    </strong>{" "}
                    you can ask us to restrict or limit further processing.
                  </>,
                  <>
                    <strong className="text-foreground">Portability:</strong>{" "}
                    you can request a copy of your personal data in a
                    machine-readable format.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Withdrawal of consent:
                    </strong>{" "}
                    if we process your data based on your consent, you can
                    withdraw it at any time.
                  </>,
                  <>
                    <strong className="text-foreground">
                      Right to file a complaint:
                    </strong>{" "}
                    you can lodge a complaint with the supervisory authority of
                    your country.
                  </>,
                ]}
              />
              <Paragraph>
                To exercise your rights, contact us at <EmailLink />. We
                typically fulfill requests within one month and may ask you to
                confirm your identity during the process.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Children">
              <Paragraph>
                If you are in the EU, you must meet the age of consent
                specified by the laws of your country to use the App, or use
                it with the consent of your parent or legal guardian. If we
                learn that we have inadvertently gathered personal data from a
                child, we will take reasonable measures to promptly erase it.
              </Paragraph>
              <Paragraph>
                If you are in the United States, you must be at least 13 years
                old to use the App. If we become aware of data collected from
                children under 13 in violation of the Children&rsquo;s Online
                Privacy Protection Act, we will delete the account and erase
                all associated information.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Managing your data">
              <Paragraph>
                To delete your account, open the App and navigate to{" "}
                <strong className="text-foreground">
                  Profile → Delete account
                </strong>
                . After deletion, you will no longer have access to your
                account or associated subscriptions, and your progress and
                data cannot be restored.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Changes to this policy">
              <Paragraph>
                We reserve the right to amend this Privacy Policy from time to
                time to reflect changes in the law, our data practices, the
                features of the App, or advances in technology. Please check
                this page periodically and refer to the &ldquo;last
                updated&rdquo; date at the top of the page. If we make changes
                that we consider material to your consent, we will notify you.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Privacy notice for California residents">
              <Paragraph>
                We do not sell your personal information for money, and we
                are not in the business of trading data. Like many companies,
                we work with partners to handle advertising; we may share some
                basic personal information with them for targeted ads, which
                may be considered &ldquo;sharing&rdquo; under the CCPA. You
                have the right to opt out by adjusting your privacy settings
                in the App.
              </Paragraph>
              <Paragraph>
                We only process sensitive personal information when absolutely
                necessary to provide you with the App. You have the right to
                request access to the personal information we hold about you
                and how we use it, twice a year at no cost.
              </Paragraph>
            </PolicySection>

            <PolicySection title="Privacy notice for Virginia, Connecticut, Colorado, Utah, and Nevada">
              <Paragraph>
                Residents of these states may have additional privacy rights.
                We do not sell your personal information for payment, and we
                do not use profiling in decisions that produce legal or
                similarly significant effects. The rights described above are
                available to you regardless of your location, and we will
                respond to your verifiable request within the time limit
                afforded under applicable law.
              </Paragraph>
            </PolicySection>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}