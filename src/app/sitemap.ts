import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

const lastModified = new Date("2026-11-10");

const routes: Array<{ path: string; priority: number }> = [
  { path: "", priority: 1 },
  { path: "/privacy-policy", priority: 0.7 },
  { path: "/terms-of-use", priority: 0.7 },
  { path: "/health-disclaimer", priority: 0.7 },
  { path: "/contact", priority: 0.6 },
  { path: "/support", priority: 0.6 },
  { path: "/data-deletion", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route.path}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: route.priority,
  }));
}
