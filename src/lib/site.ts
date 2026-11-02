export const siteConfig = {
  name: "Golonger",
  url: "https://golonger.app",
  supportEmail: "admin@golonger.app",
  supportMailto: "mailto:admin@golonger.app?subject=Golonger%20support",
  /**
   * Live store listing URLs. Leave null until the listing is published so the
   * site never renders a badge that points nowhere.
   */
  appStoreUrl: null as string | null,
  playStoreUrl: null as string | null,
  legalLastUpdated: "November 2, 2026",
  responseTime: "usually within two business days",
  companyCountry: "India",
} as const;
