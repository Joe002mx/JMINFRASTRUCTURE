import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://jminfrastructure.co.uk/sitemap.xml",
    host: "https://jminfrastructure.co.uk",
  };
}
