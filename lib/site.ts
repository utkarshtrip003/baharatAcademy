/**
 * Canonical site URL for metadata, sitemap, and robots.
 * Set NEXT_PUBLIC_SITE_URL in production (e.g. https://your-domain.com).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  (process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000");

export const siteConfig = {
  name: "Bharat Football Academy",
  description:
    "India's premier youth football academy in Gurgaon — professional AFC coaching, elite leagues (GYL, DPDL), ages 4–16. Book a free trial.",
  url: siteUrl,
  locale: "en_IN",
  twitterHandle: undefined as string | undefined,
} as const;
