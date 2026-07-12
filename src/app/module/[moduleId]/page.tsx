import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { modules, getModule } from "@/data";
import ModuleView from "@/components/ModuleView";

export function generateStaticParams() {
  return modules.map(m => ({ moduleId: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ moduleId: string }> }): Promise<Metadata> {
  const { moduleId } = await params;
  const mod = getModule(moduleId);
  if (!mod) return { title: "Module Not Found" };
  return {
    title: `${mod.title} — Free QA Course Module ${mod.id}`,
    description: `${mod.description} ${mod.lessons.length} free lessons with ${mod.quiz.length} practice quiz questions. Learn ${mod.title} for QA engineering.`,
    openGraph: {
      title: `${mod.title} | QA Academy`,
      description: mod.description,
      type: "article",
    },
    alternates: { canonical: `/module/${mod.slug}` },
  };
}

export default async function ModulePage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;
  const mod = getModule(moduleId);
  if (!mod) notFound();
  return <ModuleView mod={mod} />;
}
