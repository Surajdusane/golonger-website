/**
 * Single source of truth for site-wide constants.
 *
 * Never duplicate these values in page files. If a value is a placeholder,
 * keep it clearly marked (e.g. "[REGISTERED_ADDRESS]") rather than inventing
 * a fact.
 */
const siteUrl = "https://golonger.app";

export const siteConfig = {
  siteName: "GoLonger",
  domain: siteUrl,
  url: siteUrl,

  /** Primary support contact. Update once a support@ alias exists. */
  supportEmail: "admin@golonger.app",
  supportMailto: "mailto:admin@golonger.app",

  legalEntity: "Tailoredpaw Commerce Private Limited",
  legalCountry: "India",
  /** TODO: replace with the registered office address. */
  legalAddress: "1047 D, SARSAWAN, ARJUNGANJ, LUCKNOW, UP, Arjunganj, Lucknow, Lucknow- 226002, Uttar Pradesh",
  governingLaw: "India",

  privacyEffectiveDate: "10 November 2026",
  termsEffectiveDate: "10 November 2026",
  healthDisclaimerEffectiveDate: "10 November 2026",

  /**
   * Live store listing URLs. Empty until the listing is published, so the
   * site never renders a badge that points nowhere.
   */
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? "",
  googlePlayUrl: process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL ?? "",

  /**
   * TODO: confirm the actual PostHog project data-retention setting. Do not
   * replace with "up to 12 months" unless that is the configured value.
   */
  analyticsRetention: "1 year",

  responseTime: "usually within two business days",
  rightsResponseTime: "usually respond within one month",

  appStoreBillingUrl: "https://support.apple.com/billing",
  googlePlayRefundUrl:
    "https://support.google.com/googleplay/answer/2479637",
  appleStandardEulaUrl:
    "https://www.apple.com/legal/internet-services/itunes/dev/stdeula/",
} as const;

export const hasStoreLink = Boolean(
  siteConfig.appStoreUrl || siteConfig.googlePlayUrl,
);

export const copyrightLine = `© ${new Date().getFullYear()} ${siteConfig.legalEntity}. All rights reserved.`;
