import { MetadataRoute } from "next";
import { modules } from "@/data";

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://qa-academy.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: BASE, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1.0 },
    { url: `${BASE}/roadmap`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${BASE}/resources`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/cheatsheets`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${BASE}/glossary`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${BASE}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.5 },
  ];

  const modulePages = modules.map(m => ({
    url: `${BASE}/module/${m.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const lessonPages = modules.flatMap(m =>
    m.lessons.map(l => ({
      url: `${BASE}/module/${m.slug}/lesson/${l.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    }))
  );

  const quizPages = modules.map(m => ({
    url: `${BASE}/module/${m.slug}/quiz`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...modulePages, ...lessonPages, ...quizPages];
}
