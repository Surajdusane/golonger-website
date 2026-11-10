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
  title: "Terms of Use",
  description:
    "The terms governing your use of the GoLonger app, including subscriptions, health disclaimers, and Apple App Store additional terms.",
  path: "/terms-of-use",
});

export default function TermsOfUsePage() {
  return (
    <PageShell
      eyebrow="LEGAL"
      title="TERMS OF USE"
      meta={`EFFECTIVE ${siteConfig.termsEffectiveDate.toUpperCase()}`}
      intro={
        <p>
          These Terms form an agreement between you and{" "}
          {siteConfig.legalEntity}. They cover your use of the GoLonger app,
          subscriptions, and important health and safety information.
        </p>
      }
    >
      <ContentSection title="1. About us and acceptance">
        <Paragraph>
          These terms of use (&ldquo;Terms&rdquo;) are a legally binding
          agreement between you and{" "}
          <strong className="text-foreground">{siteConfig.legalEntity}</strong>, a
          company registered in {siteConfig.legalCountry} (&ldquo;GoLonger&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;). They govern
          your use of the GoLonger mobile app for guided pelvic floor exercise
          sessions, together with this website and any related services
          (together, the &ldquo;App&rdquo;).
        </Paragraph>
        <Paragraph>
          By downloading, accessing, or using the App, you agree to these Terms
          and to our{" "}
          <TextLink href="/privacy-policy">Privacy Policy</TextLink>. If you do
          not agree, do not use the App.
        </Paragraph>
        <Paragraph>
          <strong className="text-foreground">
            IF YOU DO NOT AGREE TO THESE TERMS AND THE PRIVACY POLICY, YOU MAY
            NOT ACCESS OR USE THE APP.
          </strong>
        </Paragraph>
      </ContentSection>

      <ContentSection title="2. Use of the app and licence">
        <Paragraph>
          GoLonger provides guided pelvic floor exercise sessions with
          follow-along video, on-screen timers and cues, optional reminders, and
          a local record of completed sessions and streaks. Access to core
          functionality requires an active subscription.
        </Paragraph>
        <Paragraph>Subject to these Terms, you may:</Paragraph>
        <BulletList
          items={[
            <>
              download and install the App on a device you own or control and use
              it for your personal, non-commercial purposes; and
            </>,
            <>
              receive updates to the App through the store from which you
              downloaded it.
            </>,
          ]}
        />
        <Paragraph>
          Your right to use the App is personal to you and may not be
          transferred, sublicensed, or shared. If you sell or give away a device
          with the App installed, remove the App first. The App may require an
          up-to-date operating system, and you are responsible for complying
          with applicable laws when you use it.
        </Paragraph>
      </ContentSection>

      <ContentSection title="3. No account required and local data">
        <Paragraph>
          You do not need an account, login, or password to use GoLonger. We do
          not offer user registration, and we do not operate a user database.
        </Paragraph>
        <Paragraph>
          Your onboarding details (such as first name, goal, level, and session
          length), exercise history, streaks, preferences, and reminder settings
          are stored locally on your device only. Settings → Delete All Data in
          the App clears this local data and resets the analytics identifier.
          Uninstalling the App deletes local data but does not cancel a
          subscription. See our{" "}
          <TextLink href="/data-deletion">Data Deletion</TextLink> page for
          details.
        </Paragraph>
      </ContentSection>

      <ContentSection title="4. Subscriptions and payments">
        <Paragraph>
          <strong className="text-foreground">GoLonger Premium.</strong> The App
          is free to download, but core functionality requires an active
          subscription. Weekly, monthly, and yearly plans may be offered. The
          price, billing period, and any trial offer are shown in the App before
          you confirm a purchase, and prices vary by region.
        </Paragraph>
        <BulletList
          items={[
            <>
              Payment is charged to your App Store or Google Play account at
              confirmation of purchase, or at the end of any trial period.
            </>,
            <>
              Subscriptions renew automatically for the same period unless you
              cancel at least 24 hours before the end of the current period.
            </>,
            <>
              If a trial is offered, it converts to a paid subscription unless
              you cancel at least 24 hours before the trial ends. Any unused
              portion of a trial is forfeited when you purchase a subscription.
            </>,
            <>
              You can manage or cancel your subscription in your App Store or
              Google Play account settings.
            </>,
            <>
              You can restore purchases in the App using Restore Purchases.
            </>,
            <>
              Uninstalling the App does not cancel a subscription. You must
              cancel it in the store.
            </>,
          ]}
        />
        <Paragraph>
          Payments are processed by Apple or Google, with subscription
          management handled through RevenueCat. We do not receive or store your
          payment card details.
        </Paragraph>
        <Paragraph>
          <strong className="text-foreground">Refunds.</strong> All purchases are
          final, except where required by applicable law or by the store&rsquo;s
          own policy. Refund requests must be submitted to the store you
          purchased from.
        </Paragraph>
      </ContentSection>

      <ContentSection title="5. Third-party services">
        <Paragraph>
          We use third-party providers to operate the App. They process
          information under their own terms and privacy policies:
        </Paragraph>
        <BulletList
          items={[
            <>
              <strong className="text-foreground">RevenueCat</strong> -
              subscription management, purchase validation, and entitlement
              restoration.
            </>,
            <>
              <strong className="text-foreground">PostHog (United States)</strong>{" "}
              - product analytics, as described in our Privacy Policy.
            </>,
            <>
              <strong className="text-foreground">Apple App Store</strong> and{" "}
              <strong className="text-foreground">Google Play</strong> -
              payments, purchase records, and store diagnostics.
            </>,
          ]}
        />
        <Paragraph>
          We do not sell your information or share it for targeted advertising.
        </Paragraph>
      </ContentSection>

      <ContentSection title="6. Prohibited use">
        <Paragraph>
          Unless you have our prior written consent, you must not:
        </Paragraph>
        <BulletList
          items={[
            <>use the App for any unlawful or unintended purpose;</>,
            <>
              copy, modify, distribute, sell, rent, lease, sublicense, or
              otherwise transfer the App or your right to use it;
            </>,
            <>
              reverse engineer, decompile, or disassemble the App, or attempt to
              circumvent its core functions, except to the extent permitted by
              applicable law;
            </>,
            <>
              use robots, spiders, scrapers, or other automated means to access
              the App or copy material from it;
            </>,
            <>
              remove, modify, or hide copyright, trademark, or other
              proprietary notices;
            </>,
            <>
              interfere with the security or operation of the App, or exploit
              bugs or errors; or
            </>,
            <>
              use the App in a way that could harm GoLonger, its providers, or
              other people.
            </>,
          ]}
        />
        <Paragraph>
          We may restrict or suspend access where the App is used in breach of
          these Terms.
        </Paragraph>
      </ContentSection>

      <ContentSection title="7. Limited licence and intellectual property">
        <Paragraph>
          We grant you a personal, revocable, non-transferable,
          non-sublicensable, non-exclusive licence to use the App for your
          personal, non-commercial use, subject to these Terms.
        </Paragraph>
        <Paragraph>
          All rights, title, and interest in and to the App - including text,
          images, audio, video, software, code, visual interfaces, graphics, and
          design - belong to GoLonger or its licensors. You may not use our name,
          trademarks, logos, or domain names without our prior written
          permission.
        </Paragraph>
      </ContentSection>

      <ContentSection title="8. Age requirement">
        <Paragraph>
          GoLonger is intended for adults aged 18 and older. It is not directed
          at anyone under 18, and you must not use the App if you are under 18.
          If we learn that someone under 18 has used the App, we will take
          reasonable steps to address it.
        </Paragraph>
      </ContentSection>

      <ContentSection title="9. Health disclaimer">
        <Paragraph>
          GoLonger is a general wellness and fitness app. It does not provide
          medical advice, diagnosis, or treatment, and it is not a medical
          device. The sessions are not a substitute for professional medical or
          therapeutic advice.
        </Paragraph>
        <Paragraph>
          Consult a qualified healthcare professional before starting,
          especially if you are pregnant, postpartum, recovering from surgery,
          have pelvic pain, or have any medical condition. Stop immediately if
          you feel pain, dizziness, or discomfort and seek medical advice.
          Results vary, and no particular outcome is promised.
        </Paragraph>
        <Paragraph>
          Read the full{" "}
          <TextLink href="/health-disclaimer">Health Disclaimer</TextLink>.
        </Paragraph>
      </ContentSection>

      <ContentSection title="10. Warranty disclaimer">
        <Paragraph>
          THE APP IS PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo;
          WITHOUT REPRESENTATIONS OR WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED,
          INCLUDING THE IMPLIED WARRANTIES OF TITLE, NON-INFRINGEMENT,
          MERCHANTABILITY, AND FITNESS FOR A PARTICULAR PURPOSE, ALL OF WHICH ARE
          DISCLAIMED TO THE FULLEST EXTENT PERMITTED BY LAW. WE DO NOT WARRANT
          THAT THE APP WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS
          WILL BE CORRECTED, OR THAT THE APP WILL MEET YOUR REQUIREMENTS. YOUR USE
          OF THE APP IS AT YOUR OWN RISK. SOME JURISDICTIONS DO NOT ALLOW
          LIMITATIONS ON IMPLIED WARRANTIES, SO SOME OF THE ABOVE MAY NOT APPLY TO
          YOU.
        </Paragraph>
      </ContentSection>

      <ContentSection title="11. Limitation of liability">
        <Paragraph>
          TO THE FULLEST EXTENT PERMITTED BY LAW, WE WILL NOT BE LIABLE FOR ANY
          INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE
          DAMAGES ARISING FROM THE USE OF OR INABILITY TO USE THE APP, INCLUDING
          LOSS OF USE, PROFITS, OR DATA, WHETHER BASED ON CONTRACT, TORT, OR ANY
          OTHER LEGAL THEORY. OUR TOTAL LIABILITY UNDER THESE TERMS WILL NOT
          EXCEED THE AMOUNT YOU PAID FOR THE APP IN THE TWELVE MONTHS BEFORE THE
          EVENT GIVING RISE TO THE CLAIM. NOTHING IN THESE TERMS EXCLUDES OR
          LIMITS LIABILITY WHERE IT WOULD BE UNLAWFUL TO DO SO.
        </Paragraph>
      </ContentSection>

      <ContentSection title="12. Indemnity">
        <Paragraph>
          To the extent permitted by applicable law, you will indemnify, defend,
          and hold harmless GoLonger, its affiliates, officers, agents, and
          employees from any claim or demand, including reasonable legal fees,
          arising out of your use or misuse of the App, your breach of these
          Terms, or your violation of applicable law or the rights of a third
          party.
        </Paragraph>
      </ContentSection>

      <ContentSection title="13. Your privacy">
        <Paragraph>
          Our{" "}
          <TextLink href="/privacy-policy">Privacy Policy</TextLink> explains
          what information is processed and why. Our{" "}
          <TextLink href="/data-deletion">Data Deletion</TextLink> page explains
          how to delete local data and how to request deletion of analytics
          data.
        </Paragraph>
      </ContentSection>

      <ContentSection title="14. Support">
        <Paragraph>
          If you need help, email <EmailLink /> or visit our{" "}
          <TextLink href="/contact">Contact page</TextLink>. We also publish{" "}
          <TextLink href="/support">Help &amp; FAQ</TextLink>. We do not promise
          that the App will always be available or uninterrupted.
        </Paragraph>
      </ContentSection>

      <ContentSection title="15. Changes to the app and these terms">
        <Paragraph>
          We may update the App from time to time to maintain performance,
          improve functionality, reflect operating system changes, or address
          security issues. Updates may cause temporary interruptions, and we
          cannot promise full functionality if you turn off automatic updates.
        </Paragraph>
        <Paragraph>
          We may also update these Terms to reflect changes in law, our business,
          or the App. When we do, we will update the effective date at the top of
          this page. Continued use of the App after changes take effect means the
          revised Terms apply.
        </Paragraph>
      </ContentSection>

      <ContentSection title="16. Termination">
        <Paragraph>
          These Terms apply from the moment you start using the App and continue
          until terminated. We may suspend or terminate your access if you breach
          these Terms, if we withdraw the App, or if required by law.
        </Paragraph>
        <Paragraph>
          You can stop using the App at any time. If you have a subscription,
          cancel it in your App Store or Google Play account settings.
          Uninstalling the App does not cancel a subscription.
        </Paragraph>
      </ContentSection>

      <ContentSection title="17. Withdrawal (EEA and Switzerland)">
        <Paragraph>
          If you are a consumer in the European Economic Area or Switzerland, you
          may have a statutory right to withdraw from a contract for digital
          services. When you purchase a subscription, you request immediate
          access, and you acknowledge that your right of withdrawal may be lost
          once the digital content or service has been supplied. The withdrawal
          period is 14 days from the day the contract was concluded, where it
          applies. To exercise a right of withdrawal, email <EmailLink /> with a
          clear statement of your intention to withdraw.
        </Paragraph>
        <Paragraph>
          Nothing in these Terms affects mandatory consumer protection rights in
          your country of residence.
        </Paragraph>
      </ContentSection>

      <ContentSection title="18. Other provisions">
        <Paragraph>
          <strong className="text-foreground">Governing law.</strong> These Terms
          are governed by the laws of {siteConfig.governingLaw}, without regard
          to conflict-of-law rules. Courts in {siteConfig.governingLaw} will have
          jurisdiction, except where mandatory consumer law gives you the right
          to bring proceedings in your country of residence.
        </Paragraph>
        <Paragraph>
          <strong className="text-foreground">Severability.</strong> If any
          provision of these Terms is found unenforceable, it will be enforced to
          the maximum extent permitted and the remaining provisions will stay in
          full force.
        </Paragraph>
        <Paragraph>
          <strong className="text-foreground">Assignment.</strong> We may
          transfer our rights and obligations under these Terms to another
          company. We will tell you in writing if this happens. You may not
          transfer your rights under these Terms.
        </Paragraph>
        <Paragraph>
          <strong className="text-foreground">Entire agreement.</strong> These
          Terms and the Privacy Policy are the entire agreement between you and
          us regarding the App.
        </Paragraph>
      </ContentSection>

      <ContentSection title="19. Contact">
        <Paragraph>
          Questions about these Terms? Email <EmailLink /> or use our{" "}
          <TextLink href="/contact">Contact page</TextLink>.
        </Paragraph>
        <Paragraph>
          {siteConfig.legalEntity}
          <br />
          {siteConfig.legalAddress}
          <br />
          {siteConfig.legalCountry}
        </Paragraph>
      </ContentSection>

      <ContentSection title="Apple App Store additional terms">
        <Paragraph>
          These additional terms apply if you downloaded the App from the Apple
          App Store. They are the minimum terms Apple requires where a developer
          uses a custom end user licence agreement instead of Apple&rsquo;s
          standard EULA.
        </Paragraph>

        <SubHeading>Acknowledgment</SubHeading>
        <Paragraph>
          You acknowledge that these Terms are between you and GoLonger only, and
          not with Apple. GoLonger, not Apple, is solely responsible for the App
          and its content. Apple is not a party to these Terms.
        </Paragraph>

        <SubHeading>Scope of licence</SubHeading>
        <Paragraph>
          The licence granted to you is limited to a non-transferable licence to
          use the App on any Apple-branded device that you own or control, as
          permitted by the Usage Rules in the Apple Media Services Terms and
          Conditions, except that the App may be accessed by other accounts
          associated with the purchaser through Family Sharing or volume
          purchasing where permitted.
        </Paragraph>

        <SubHeading>Maintenance and support</SubHeading>
        <Paragraph>
          GoLonger is solely responsible for providing maintenance and support
          services for the App. Apple has no obligation to provide maintenance or
          support services for the App.
        </Paragraph>

        <SubHeading>Warranty</SubHeading>
        <Paragraph>
          GoLonger is solely responsible for any product warranties, whether
          express or implied by law, to the extent not effectively disclaimed. If
          the App fails to conform to an applicable warranty, you may notify
          Apple, and Apple will refund the purchase price of the App to you, to
          the maximum extent permitted by applicable law. To the maximum extent
          permitted by law, Apple has no other warranty obligation with respect to
          the App, and any other claims, losses, liabilities, damages, costs, or
          expenses attributable to a failure to conform to a warranty are
          GoLonger&rsquo;s sole responsibility.
        </Paragraph>

        <SubHeading>Product claims</SubHeading>
        <Paragraph>
          GoLonger, not Apple, is responsible for addressing any claims you or a
          third party have relating to the App or your possession or use of the
          App, including product liability claims, claims that the App fails to
          conform to a legal or regulatory requirement, and claims under consumer
          protection or similar legislation.
        </Paragraph>

        <SubHeading>Legal compliance</SubHeading>
        <Paragraph>
          You represent and warrant that you are not located in a country subject
          to a U.S. Government embargo or designated by the U.S. Government as a
          terrorist-supporting country, and that you are not listed on any U.S.
          Government list of prohibited or restricted parties.
        </Paragraph>

        <SubHeading>Developer name and address</SubHeading>
        <Paragraph>
          {siteConfig.legalEntity}
          <br />
          {siteConfig.legalAddress}
          <br />
          {siteConfig.legalCountry}
          <br />
          Email: <EmailLink />
        </Paragraph>

        <SubHeading>Third-party terms of agreement</SubHeading>
        <Paragraph>
          You must comply with applicable third-party terms of agreement when
          using the App, for example your wireless data service agreement.
        </Paragraph>

        <SubHeading>Third-party beneficiary</SubHeading>
        <Paragraph>
          Apple and Apple&rsquo;s subsidiaries are third-party beneficiaries of
          these Terms, and upon your acceptance of these Terms, Apple will have
          the right (and will be deemed to have accepted the right) to enforce
          these Terms against you as a third-party beneficiary.
        </Paragraph>

        <SubHeading>Export compliance</SubHeading>
        <Paragraph>
          You must comply with applicable export laws and regulations when using
          the App, including U.S. export administration regulations and the
          regulations of your own jurisdiction.
        </Paragraph>

        <SubHeading>Apple contact</SubHeading>
        <Paragraph>
          Apple has no maintenance or support obligations for the App. Support
          requests should be sent to <EmailLink /> or through our{" "}
          <TextLink href="/contact">Contact page</TextLink>. You can also read
          Apple&rsquo;s{" "}
          <TextLink href={siteConfig.appleStandardEulaUrl}>
            standard end user licence agreement
          </TextLink>{" "}
          for reference.
        </Paragraph>
      </ContentSection>
    </PageShell>
  );
}
