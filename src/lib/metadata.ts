import type { Metadata } from "next";

import { siteConfig } from "@/lib/site";

const shareImage = {
  url: "/web-app-manifest-512x512.png",
  width: 512,
  height: 512,
  alt: "GoLonger app icon",
};

/**
 * Builds consistent per-page metadata: unique title, description, canonical
 * URL, Open Graph and Twitter card. Omit `path` for pages that should not have
 * a canonical URL (for example, the 404 page).
 */
export function createMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path?: string;
  noindex?: boolean;
}): Metadata {
  const url = path
    ? path === "/"
      ? siteConfig.url
      : `${siteConfig.url}${path}`
    : undefined;

  return {
    title,
    description,
    ...(path
      ? { alternates: { canonical: path === "/" ? siteConfig.url : path } }
      : {}),
    openGraph: {
      type: "website",
      ...(url ? { url } : {}),
      siteName: siteConfig.siteName,
      title,
      description,
      images: [shareImage],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: [shareImage.url],
    },
    robots: noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
