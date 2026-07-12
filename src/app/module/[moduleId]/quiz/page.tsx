import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { modules, getModule } from "@/data";
import QuizView from "@/components/QuizView";

export function generateStaticParams() {
  return modules.map(m => ({ moduleId: m.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ moduleId: string }> }): Promise<Metadata> {
  const { moduleId } = await params;
  const mod = getModule(moduleId);
  if (!mod) return { title: "Quiz Not Found" };
  return {
    title: `${mod.title} Quiz — ${mod.quiz.length} Practice Questions`,
    description: `Test your ${mod.title} knowledge with ${mod.quiz.length} free practice questions and detailed explanations. Perfect for QA interview preparation.`,
    alternates: { canonical: `/module/${mod.slug}/quiz` },
  };
}

export default async function QuizPage({ params }: { params: Promise<{ moduleId: string }> }) {
  const { moduleId } = await params;
  const mod = getModule(moduleId);
  if (!mod) notFound();
  return <QuizView mod={mod} />;
}
