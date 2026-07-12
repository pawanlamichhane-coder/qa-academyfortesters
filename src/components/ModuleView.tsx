"use client";
import { useEffect, useState } from "react";
import type { Module } from "@/data";
import { getProgress, getModuleProgress } from "@/lib/progress";
import AdSlot from "@/components/AdSlot";

export default function ModuleView({ mod }: { mod: Module }) {
  const [progress, setProgress] = useState<string[]>([]);
  useEffect(() => { setProgress(getProgress().completedLessons); }, []);

  const pct = getModuleProgress(mod.id, mod.lessons.map(l => l.id));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <a href="/" className="text-sm hover:underline" style={{ color: "var(--text-muted)" }}>← Back to Curriculum</a>
      <div className="mt-4 flex items-start gap-4">
        <span className="text-5xl">{mod.icon}</span>
        <div>
          <div className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>Module {mod.id} of 19</div>
          <h1 className="text-3xl font-bold">{mod.title}</h1>
          <p className="mt-1" style={{ color: "var(--text-muted)" }}>{mod.description}</p>
        </div>
      </div>

      {pct > 0 && (
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 h-2 rounded-full" style={{ background: "var(--border)" }}>
            <div className="h-2 rounded-full" style={{ width: `${pct}%`, background: "var(--brand)" }} />
          </div>
          <span className="text-sm font-semibold" style={{ color: "var(--brand)" }}>{pct}%</span>
        </div>
      )}

      <AdSlot slot="MODULE_TOP_AD" format="horizontal" className="mt-6" />

      <div className="mt-8 space-y-2">
        <h2 className="text-xl font-bold mb-4">Lessons</h2>
        {mod.lessons.map((lesson, i) => {
          const done = progress.includes(lesson.id);
          return (
            <a key={lesson.id} href={`/module/${mod.slug}/lesson/${lesson.slug}`}
              className="flex items-center gap-4 p-4 rounded-lg border transition hover:shadow-md"
              style={{ background: "var(--surface)", borderColor: done ? "var(--brand)" : "var(--border)" }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
                style={{ background: done ? "var(--brand)" : "var(--bg-alt)", color: done ? "white" : "var(--text-muted)" }}>
                {done ? "✓" : i + 1}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold">{lesson.title}</h3>
                <div className="text-xs mt-0.5 flex gap-3" style={{ color: "var(--text-muted)" }}>
                  <span>⏱ {lesson.duration} min</span>
                  <span className="capitalize">📊 {lesson.difficulty}</span>
                </div>
              </div>
              <span style={{ color: "var(--text-muted)" }}>→</span>
            </a>
          );
        })}
      </div>

      <a href={`/module/${mod.slug}/quiz`}
        className="mt-6 flex items-center gap-3 p-4 rounded-lg border-2 border-dashed transition hover:shadow-md"
        style={{ borderColor: "var(--brand)", background: "var(--bg-alt)" }}>
        <span className="text-2xl">📝</span>
        <div>
          <h3 className="font-bold" style={{ color: "var(--brand)" }}>Take the Quiz</h3>
          <p className="text-xs" style={{ color: "var(--text-muted)" }}>{mod.quiz.length} questions · Test your knowledge</p>
        </div>
      </a>

    </div>
  );
}
