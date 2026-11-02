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
  title: "Terms of Use - Golonger",
  description:
    "The terms governing your use of the Golonger app for guided pelvic floor exercise sessions.",
  alternates: {
    canonical: "/terms-of-use",
  },
};

export default function TermsOfUsePage() {
  return (
    <PageShell
      eyebrow="LEGAL"
      title="TERMS OF USE"
      meta={`EFFECTIVE AS OF: ${siteConfig.legalLastUpdated.toUpperCase()}`}
    >
      <ContentSection title="About us">
        <Paragraph>
          Welcome to Golonger. These terms of use (&ldquo;Terms&rdquo; or
          &ldquo;Agreement&rdquo;) constitute a legally binding agreement
          between you and Golonger (the &ldquo;Company&rdquo;) regarding your
          use of the Golonger mobile app for guided pelvic floor exercise
          sessions (the &ldquo;App&rdquo;), along with any related documentation
          and services (together, the &ldquo;Platforms&rdquo;).
        </Paragraph>
        <Paragraph>
          Access to and use of the Platforms is expressly conditioned upon
          acceptance of these Terms and our{" "}
          <TextLink href="/privacy-policy">Privacy Policy</TextLink>. By
          accessing or using the Platforms, you acknowledge that you accept and
          agree to be bound by these Terms and the Privacy Policy.
        </Paragraph>
        <Paragraph>
          <strong className="text-foreground">
            IF YOU DO NOT AGREE TO THESE TERMS AND THE PRIVACY POLICY, YOU MAY
            NOT ACCESS OR USE THE PLATFORMS.
          </strong>
        </Paragraph>
      </ContentSection>

      <ContentSection title="Use of the app">
        <Paragraph>
          Golonger provides guided pelvic floor exercise sessions through short,
          follow-along sessions. Access to core functionality requires an active
          subscription.
        </Paragraph>
        <Paragraph>
          In return for your agreeing to comply with these Terms, you may:
        </Paragraph>
        <BulletList
          items={[
            <>
              download the App onto a device and view, use, and display the App
              on the device for your personal, non-commercial purposes only; and
            </>,
            <>
              receive updates to the software code of the App through the store
              from which you downloaded it.
            </>,
          ]}
        />
        <Paragraph>
          Your right to use the App is personal to you; you may not otherwise
          transfer the App to anyone else for any reason. If you sell or give
          away a device on which the App is installed, you must remove the App
          from it first. The App may require an updated operating system to
          function correctly, and you are responsible for all of your activity
          in connection with the Platforms and for complying with all applicable
          laws and regulations.
        </Paragraph>
        <Paragraph>
          You may only use the App for its intended purpose. Any misuse,
          including attempts to bypass or manipulate its features, is
          prohibited.
        </Paragraph>
      </ContentSection>

      <ContentSection title="No account required">
        <Paragraph>
          You are not required to create an account to use Golonger. We do not
          offer user registration or login, and we do not collect or store
          personal data like your name or email address on our own servers.
        </Paragraph>
        <Paragraph>
          Your exercise history, progress, and preferences are stored locally on
          your device only. The optional first name you may enter during
          onboarding is also stored locally on your device. Uninstalling the App
          permanently deletes this locally stored data, and it cannot be
          restored.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Subscriptions & payments">
        <Paragraph>
          The App is free to download, but a paid subscription is required to
          access key features. We may offer a free trial period. If a trial is
          offered and you do not cancel at least 24 hours before the end of the
          trial, you will be automatically charged the price indicated on the
          payment screen for the chosen subscription period. The subscription
          renews automatically for the same period unless cancelled.
        </Paragraph>
        <Paragraph>
          Payments are processed by the app store from which you downloaded the
          App (Apple App Store or Google Play), with subscription management
          handled via RevenueCat. Payment will be charged to the payment method
          linked to your store account at confirmation of purchase, or after the
          end of the trial period.
        </Paragraph>
        <Paragraph>
          <strong className="text-foreground">Refunds:</strong> all purchases
          are final. We do not offer refunds, except as required by applicable
          law or the store&apos;s own policies. If you purchased through the App
          Store or Google Play, refund requests must be submitted directly to
          the respective store.
        </Paragraph>
        <Paragraph>
          <strong className="text-foreground">Disputes:</strong> if a payment is
          declined, charged back, or rejected, this will be considered a breach
          of your payment obligations and your use of the Platforms may be
          automatically disabled or terminated. We encourage you to contact our
          support team before submitting any dispute or reversal of payment.
        </Paragraph>
        <Paragraph>
          Note that uninstalling the App does not stop a subscription
          automatically - you must cancel the automatic renewal in your app
          store account settings to avoid being charged.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Third-party services">
        <Paragraph>
          We use trusted third-party providers to operate the App. Payment and
          subscription data and pseudonymous analytics are processed by these
          providers according to their own privacy practices - never sold or
          shared for advertising:
        </Paragraph>
        <BulletList
          items={[
            <>
              <strong className="text-foreground">RevenueCat</strong> -
              subscription handling, purchase validation, and entitlement
              management.
            </>,
            <>
              <strong className="text-foreground">PostHog (United States)</strong>{" "}
              - pseudonymous product analytics related to app usage and
              behavior. Analytics is enabled by default, as described in the
              Privacy Policy.
            </>,
            <>
              <strong className="text-foreground">
                Apple App Store &amp; Google Play
              </strong>{" "}
              - payments, purchase history, and store-provided diagnostics.
            </>,
          ]}
        />
        <Paragraph>
          No personally identifiable information is stored on our own external
          servers, as we operate none. Data is never sold or shared with third
          parties for advertising.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Prohibited use of our platforms">
        <Paragraph>
          Unless you have requested and received our prior written consent, or
          unless expressly permitted in these Terms, you must not:
        </Paragraph>
        <BulletList
          items={[
            <>use the App for any unlawful or unintended purpose;</>,
            <>
              reverse engineer, decompile, or disassemble the Platforms, tamper
              with, or attempt to circumvent its core functions, except to the
              extent permitted by applicable law;
            </>,
            <>
              distribute, sublicense, sell, rent, lease, or otherwise transfer
              the Platforms or your right to use them;
            </>,
            <>
              use any robot, spider, or other automated device to access the
              Platforms or copy any material;
            </>,
            <>
              publish or upload any unlawful, harmful, defamatory, obscene, or
              otherwise objectionable content, or content that violates the
              rights of third parties;
            </>,
            <>
              remove, modify, or obscure any copyright, trademark, or other
              proprietary notices belonging to us or third parties; or
            </>,
            <>
              exploit bugs or errors in the App, or do anything that may cause
              damage to the Platforms.
            </>,
          ]}
        />
        <Paragraph>
          We reserve the right to restrict access if the App is used in ways that
          violate these Terms or compromise its functionality.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Limited license">
        <Paragraph>
          We grant you a personal, revocable, non-transferable,
          non-sublicensable, and non-exclusive right and license to access and
          use the Platforms, provided that you do not copy, store, modify,
          distribute, reverse engineer, or otherwise attempt to discover any
          source code, except where permitted by applicable law. Your use of the
          Platforms is limited to your personal, non-commercial use.
        </Paragraph>
        <Paragraph>
          All rights, title, and interest in and to the Platforms - including
          text, images, audio, video, software, code, visual interfaces,
          graphics, and design - are exclusively reserved by the Company. Any use
          of our software, title, trade name, trademark, service mark, logo, or
          domain name requires prior written permission from the Company.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Age requirement">
        <Paragraph>
          Golonger is intended for adults aged 18 and older. It is not directed
          at children, and we do not knowingly collect personal data from
          children under the age of 13. If we learn that we have inadvertently
          gathered such data, we will take reasonable measures to promptly erase
          it.
        </Paragraph>
        <Paragraph>
          Parents and guardians are responsible for supervising any use by
          minors.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Health disclaimer">
        <Paragraph>
          Golonger is a general wellness and fitness app. It does not provide
          medical advice, diagnosis, or treatment. All sessions are educational
          and are not a substitute for professional medical or therapeutic
          advice.
        </Paragraph>
        <Paragraph>
          Always consult a qualified healthcare professional regarding any
          medical condition or before starting a new exercise program. If you
          experience pain or discomfort, stop and seek medical advice.
        </Paragraph>
        <Paragraph>
          Read the full{" "}
          <TextLink href="/health-disclaimer">Health Disclaimer</TextLink> for
          important safety information.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Warranty disclaimer">
        <Paragraph>
          THE PLATFORMS ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS
          AVAILABLE&rdquo; WITHOUT ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
          WARRANTIES OF TITLE, NON-INFRINGEMENT, MERCHANTABILITY, AND FITNESS FOR
          A PARTICULAR PURPOSE, ALL OF WHICH ARE EXPRESSLY DISCLAIMED, SAVE TO
          THE EXTENT REQUIRED BY LAW. WE DO NOT WARRANT THAT THE PLATFORMS WILL
          BE SECURE OR AVAILABLE AT ANY PARTICULAR TIME OR LOCATION, THAT ANY
          DEFECTS OR ERRORS WILL BE CORRECTED, OR THAT THE OUTCOMES OF USING THE
          PLATFORMS WILL MEET YOUR REQUIREMENTS. YOUR USE OF THE PLATFORMS IS
          SOLELY AT YOUR OWN RISK. SOME JURISDICTIONS DO NOT ALLOW LIMITATIONS
          ON IMPLIED WARRANTIES, SO SOME OR ALL OF THE ABOVE LIMITATIONS MAY NOT
          APPLY TO YOU.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Limitation of liability">
        <Paragraph>
          TO THE FULLEST EXTENT PERMITTED BY LAW, THE COMPANY SHALL NOT BE
          LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY,
          OR PUNITIVE DAMAGES ARISING FROM THE USE OR MISUSE OF THE PLATFORMS,
          INCLUDING LOSS OF USE, PROFITS, OR DATA, REGARDLESS OF WHETHER THE
          CLAIM IS BASED ON CONTRACT, TORT, EQUITY, OR OTHER LEGAL THEORIES. THE
          TOTAL LIABILITY OF THE COMPANY UNDER THESE TERMS OR RELATED TO THE USE
          OF THE PLATFORMS SHALL NOT EXCEED THE AMOUNTS PAID BY YOU FOR THE
          PLATFORMS, OR ONE HUNDRED DOLLARS ($100) IF NO PAYMENT OBLIGATIONS
          EXIST. THIS AGREEMENT DOES NOT INTEND TO EXCLUDE OR LIMIT OUR LIABILITY
          WHERE IT WOULD BE UNLAWFUL TO DO SO.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Indemnity">
        <Paragraph>
          To the extent permitted by applicable law, you will indemnify, defend,
          and hold us and our subsidiaries, affiliates, officers, agents,
          employees, and partners harmless from any claim or demand, including
          reasonable attorneys&rsquo; fees, made by any third party due to or
          arising out of your use or misuse of the Platforms, your violation of
          these Terms, your violation of applicable law, or your violation of the
          rights of any third party.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Your privacy">
        <Paragraph>
          All data processed in connection with your use of the Platforms is
          handled following our{" "}
          <TextLink href="/privacy-policy">Privacy Policy</TextLink>. We do not
          require accounts and store no personal data on our own servers;
          subscription and pseudonymous analytics data is processed only by the
          third-party providers described in that policy.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Support">
        <Paragraph>
          If you have any concerns regarding the Platforms, please contact us at{" "}
          <EmailLink /> or through our{" "}
          <TextLink href="/contact">contact page</TextLink>. We do not promise
          that access to the Platforms will always be available or
          uninterrupted.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Changes to our platforms">
        <Paragraph>
          From time to time, we may automatically update the Platforms to
          maintain performance, enhance functionality, reflect changes to the
          operating system, or address security issues. Such updates may cause
          temporary interruptions. We cannot promise proper performance and full
          functionality if you turn off automatic updates.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Changes to these terms">
        <Paragraph>
          We may update these Terms from time to time as a result of a change in
          applicable law or our business, where necessary for the provision of
          the Platforms, or as a result of any changes to the Platforms. If we
          make changes, we will update the &ldquo;Effective as of&rdquo; date at
          the top of this page. Continued use of the App after changes go into
          effect constitutes your acceptance of the revised Terms.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Termination">
        <Paragraph>
          These Terms apply from when you start to use the Platforms and remain
          in full force and effect while you use them until terminated. We may
          terminate or suspend your use of the Platforms immediately by written
          notice if we consider that you have used the Platforms in violation of
          these Terms, if we decide to withdraw the Platforms, or if required by
          law.
        </Paragraph>
        <Paragraph>
          You can terminate these Terms by ceasing to use the Platforms. If you
          purchased a subscription, you should also cancel it directly in your
          app store account settings. Note that uninstalling the App does not
          stop a subscription automatically - you must cancel the automatic
          renewal to avoid being charged.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Withdrawal">
        <Paragraph>
          If you are a consumer based in the EEA or Switzerland, you may have a
          legal right to withdraw from contracts for online purchases of
          services. When you purchase digital content online, you agree that it
          is available to you immediately, and because of this, your right of
          withdrawal may be lost once the content is delivered. The withdrawal
          period expires 14 days after the day on which you entered into the
          contract. To exercise your right of withdrawal, send an unequivocal
          statement of your intention to withdraw to <EmailLink />.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Other provisions">
        <Paragraph>
          These Terms are governed by the laws of England and Wales, excluding
          its rules on conflicts of law. If you are a resident of any European
          country, Switzerland, Norway, or Iceland, the governing law and forum
          shall be the laws of your usual place of residence. Nothing in these
          Terms affects the protection granted to you by the mandatory consumer
          protection laws of your country of residence.
        </Paragraph>
        <Paragraph>
          If any provision of these Terms is found to be unenforceable, that
          provision shall be enforced to the maximum extent permissible so as to
          affect the intent of these Terms, and the remainder of these Terms
          shall continue in full force and effect. No one other than a party to
          these Terms has any right to enforce any provision thereof. We may
          transfer our rights and obligations under these Terms to another
          company; we will always tell you in writing if this happens.
        </Paragraph>
      </ContentSection>

      <ContentSection title="Contact">
        <Paragraph>
          If you have any questions about these Terms, please contact us at{" "}
          <EmailLink /> or visit our{" "}
          <TextLink href="/contact">contact page</TextLink>.
        </Paragraph>
      </ContentSection>
    </PageShell>
  );
}
