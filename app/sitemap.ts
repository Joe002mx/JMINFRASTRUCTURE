import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://jminfrastructure.co.uk",
      lastModified: new Date("2026-05-02"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
