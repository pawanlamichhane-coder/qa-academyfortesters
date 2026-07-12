import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { modules, getModule } from "@/data";
import LessonView from "@/components/LessonView";

const SITE = process.env.NEXT_PUBLIC_SITE_URL || "https://qa-academy.vercel.app";

export function generateStaticParams() {
  return modules.flatMap(m =>
    m.lessons.map(l => ({ moduleId: m.slug, lessonId: l.slug }))
  );
}

export async function generateMetadata({ params }: { params: Promise<{ moduleId: string; lessonId: string }> }): Promise<Metadata> {
  const { moduleId, lessonId } = await params;
  const mod = getModule(moduleId);
  const lesson = mod?.lessons.find(l => l.slug === lessonId);
  if (!mod || !lesson) return { title: "Lesson Not Found" };

  // Extract first meaningful sentence from content for description
  const plainText = lesson.content.replace(/[#*`|\-]/g, "").replace(/\n+/g, " ").trim();
  const excerpt = plainText.slice(0, 150);

  return {
    title: `${lesson.title} — ${mod.title} Tutorial`,
    description: `${excerpt}... Free ${lesson.duration}-minute lesson in the ${mod.title} module. Part of the complete free QA Engineering course.`,
    openGraph: {
      title: `${lesson.title} | QA Academy`,
      description: `Learn ${lesson.title} — free QA engineering lesson with practical examples.`,
      type: "article",
    },
    alternates: { canonical: `/module/${mod.slug}/lesson/${lesson.slug}` },
  };
}

export default async function LessonPage({ params }: { params: Promise<{ moduleId: string; lessonId: string }> }) {
  const { moduleId, lessonId } = await params;
  const mod = getModule(moduleId);
  const lesson = mod?.lessons.find(l => l.slug === lessonId);
  if (!mod || !lesson) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "TechArticle",
        headline: lesson.title,
        description: `Learn ${lesson.title} — part of the ${mod.title} module in the free QA Academy course.`,
        proficiencyLevel: lesson.difficulty,
        timeRequired: `PT${lesson.duration}M`,
        isAccessibleForFree: true,
        isPartOf: { "@type": "Course", name: mod.title, url: `${SITE}/module/${mod.slug}` },
        author: { "@type": "Organization", name: "QA Academy" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE },
          { "@type": "ListItem", position: 2, name: mod.title, item: `${SITE}/module/${mod.slug}` },
          { "@type": "ListItem", position: 3, name: lesson.title, item: `${SITE}/module/${mod.slug}/lesson/${lesson.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <Script id="lesson-json-ld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LessonView mod={mod} lesson={lesson} />
    </>
  );
}
