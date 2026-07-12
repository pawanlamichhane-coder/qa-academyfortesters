"use client";
import { useEffect, useState } from "react";
import type { Module, Lesson } from "@/data";
import { markLessonComplete, getProgress } from "@/lib/progress";
import AdSlot from "@/components/AdSlot";
import { renderMarkdown } from "@/lib/markdown";

export default function LessonView({ mod, lesson }: { mod: Module; lesson: Lesson }) {
  const [completed, setCompleted] = useState(false);
  const lessonIndex = mod.lessons.findIndex(l => l.id === lesson.id);
  const prevLesson = mod.lessons[lessonIndex - 1];
  const nextLesson = mod.lessons[lessonIndex + 1];

  useEffect(() => {
    setCompleted(getProgress().completedLessons.includes(lesson.id));
  }, [lesson.id]);

  const handleComplete = () => { markLessonComplete(lesson.id); setCompleted(true); };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-sm flex flex-wrap gap-1 mb-6" style={{ color: "var(--text-muted)" }}>
        <a href="/" className="hover:underline">Home</a> <span>/</span>
        <a href={`/module/${mod.slug}`} className="hover:underline">{mod.title}</a> <span>/</span>
        <span style={{ color: "var(--text)" }}>{lesson.title}</span>
      </div>

      <div className="mb-6">
        <div className="flex items-center gap-2 text-sm" style={{ color: "var(--text-muted)" }}>
          <span>⏱ {lesson.duration} min</span><span>·</span><span className="capitalize">{lesson.difficulty}</span>
          {completed && <span className="ml-2 px-2 py-0.5 rounded text-xs font-bold text-white" style={{ background: "var(--brand)" }}>✓ Complete</span>}
        </div>
        <h1 className="text-3xl font-bold mt-2">{lesson.title}</h1>
      </div>

      <AdSlot slot="TOP_LESSON_AD" format="horizontal" className="mb-6" />

      <article className="prose max-w-none" dangerouslySetInnerHTML={{ __html: renderMarkdown(lesson.content) }} />

      <AdSlot slot="MID_LESSON_AD" format="rectangle" className="my-8" />

      {!completed && (
        <button onClick={handleComplete} className="mt-6 w-full py-3 rounded-lg text-white font-semibold transition hover:opacity-90" style={{ background: "var(--brand)" }}>
          ✅ Mark as Complete (+10 XP)
        </button>
      )}

      <div className="mt-8 flex justify-between items-center gap-4">
        {prevLesson ? <a href={`/module/${mod.slug}/lesson/${prevLesson.slug}`} className="text-sm hover:underline" style={{ color: "var(--brand)" }}>← {prevLesson.title}</a> : <span />}
        {nextLesson ? <a href={`/module/${mod.slug}/lesson/${nextLesson.slug}`} className="text-sm hover:underline text-right" style={{ color: "var(--brand)" }}>{nextLesson.title} →</a>
          : <a href={`/module/${mod.slug}/quiz`} className="text-sm font-bold hover:underline" style={{ color: "var(--brand)" }}>Take the Quiz →</a>}
      </div>

      <AdSlot slot="BOTTOM_LESSON_AD" format="horizontal" className="mt-8" />
    </div>
  );
}
