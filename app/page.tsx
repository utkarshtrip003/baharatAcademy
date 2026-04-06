import { BharatFootballLanding } from "@/components/bfa/bharat-football-landing";
import { siteConfig } from "@/lib/site";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    absolute: "Bharat Football Academy | Free Trial",
  },
  description: siteConfig.description,
  openGraph: {
    title: "Bharat Football Academy | Free Trial",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: siteConfig.locale.replace("_", "-"),
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Football Academy | Free Trial",
    description: siteConfig.description,
  },
};

export default function Home() {
  return <BharatFootballLanding />;
}
