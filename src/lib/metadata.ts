import type { Metadata } from "next";
import { BRAND, SITE } from "@/lib/constants";

export const defaultDescription =
  "Strategy with soul. A full service PR and communications agency in Nairobi, Kenya. We tell your story, build your legacy, and help brands connect, influence and grow.";

export const siteMetadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${BRAND.name} | ${BRAND.tagline}`,
    template: `%s | ${BRAND.name}`,
  },
  description: defaultDescription,
  keywords: [
    "PR agency",
    "communications",
    "Nairobi",
    "Kenya",
    "brand strategy",
    "content creation",
    BRAND.name,
  ],
  openGraph: {
    type: "website",
    locale: "en_KE",
    siteName: BRAND.name,
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: defaultDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: `${BRAND.name} | ${BRAND.tagline}`,
    description: defaultDescription,
  },
};

type PageMetadataOptions = {
  title: string;
  description: string;
  path?: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadataOptions): Metadata {
  const url = path ? new URL(path, SITE.url).toString() : SITE.url;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: BRAND.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
