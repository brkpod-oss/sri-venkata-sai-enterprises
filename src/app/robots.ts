import type { MetadataRoute } from "next";

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://srivenkatasaienterprises.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Cart/checkout are transient, enquiry-only flows — keep them out.
        userAgent: "*",
        allow: "/",
        disallow: ["/cart", "/checkout", "/api/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
