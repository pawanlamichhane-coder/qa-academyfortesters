"use client";
import { useState } from "react";
import type { Module } from "@/data";
import { saveQuizScore } from "@/lib/progress";
import { modules } from "@/data";

export default function QuizView({ mod }: { mod: Module }) {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const q = mod.quiz[current];
  const total = mod.quiz.length;

  const handleSelect = (idx: number) => {
    if (showAnswer) return;
    setSelected(idx);
    setShowAnswer(true);
    if (idx === q.correctIndex) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (current + 1 >= total) {
      saveQuizScore(mod.id, score);
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setShowAnswer(false);
    }
  };

  const handleRestart = () => {
    setCurrent(0); setSelected(null); setShowAnswer(false); setScore(0); setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / total) * 100);
    const passed = pct >= 70;
    const nextModule = modules.find(m => m.id === mod.id + 1);
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <div className="text-6xl mb-4">{passed ? "🎉" : "📚"}</div>
        <h1 className="text-3xl font-bold mb-2">{passed ? "Congratulations!" : "Keep Learning!"}</h1>
        <p className="text-lg mb-4" style={{ color: "var(--text-muted)" }}>
          You scored <strong style={{ color: "var(--brand)" }}>{score}/{total}</strong> ({pct}%)
        </p>
        <p className="mb-8" style={{ color: "var(--text-muted)" }}>
          {passed ? "You've mastered this module! Move on to the next one." : "Review the lessons and try again. You need 70% to pass."}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button onClick={handleRestart} className="px-6 py-2 rounded-lg border font-semibold transition hover:bg-black/5 dark:hover:bg-white/10" style={{ borderColor: "var(--border)" }}>Retry Quiz</button>
          <a href={`/module/${mod.slug}`} className="px-6 py-2 rounded-lg border font-semibold transition hover:bg-black/5 dark:hover:bg-white/10" style={{ borderColor: "var(--border)" }}>Back to Module</a>
          {nextModule && passed && (
            <a href={`/module/${nextModule.slug}`} className="px-6 py-2 rounded-lg text-white font-semibold transition hover:opacity-90" style={{ background: "var(--brand)" }}>
              Next: {nextModule.title} →
            </a>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <a href={`/module/${mod.slug}`} className="text-sm hover:underline" style={{ color: "var(--text-muted)" }}>← Back to {mod.title}</a>

      <div className="mt-6 mb-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Quiz: {mod.title}</h1>
        <span className="text-sm font-mono" style={{ color: "var(--text-muted)" }}>{current + 1}/{total}</span>
      </div>

      <div className="w-full h-1.5 rounded-full mb-8" style={{ background: "var(--border)" }}>
        <div className="h-1.5 rounded-full transition-all" style={{ width: `${((current + 1) / total) * 100}%`, background: "var(--brand)" }} />
      </div>

      <div className="p-6 rounded-xl" style={{ background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
        <p className="font-semibold text-lg mb-6">{q.question}</p>
        <div className="space-y-3">
          {q.options.map((opt, i) => {
            let borderClr = "var(--border)";
            let bgClr = "var(--surface)";
            if (showAnswer) {
              if (i === q.correctIndex) { borderClr = "#16a34a"; bgClr = "rgba(22,163,74,0.08)"; }
              else if (i === selected && i !== q.correctIndex) { borderClr = "#dc2626"; bgClr = "rgba(220,38,38,0.08)"; }
            } else if (i === selected) { borderClr = "var(--brand)"; }
            return (
              <button key={i} onClick={() => handleSelect(i)}
                className="w-full text-left p-4 rounded-lg border-2 transition font-medium"
                style={{ borderColor: borderClr, background: bgClr }}>
                <span className="mr-3 font-mono text-sm" style={{ color: "var(--text-muted)" }}>{String.fromCharCode(65 + i)}.</span>
                {opt}
              </button>
            );
          })}
        </div>

        {showAnswer && (
          <div className="mt-4 p-4 rounded-lg text-sm" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            <strong>{selected === q.correctIndex ? "✅ Correct!" : "❌ Incorrect."}</strong> {q.explanation}
          </div>
        )}
      </div>

      {showAnswer && (
        <button onClick={handleNext}
          className="mt-6 w-full py-3 rounded-lg text-white font-semibold transition hover:opacity-90"
          style={{ background: "var(--brand)" }}>
          {current + 1 >= total ? "See Results" : "Next Question →"}
        </button>
      )}
    </div>
  );
}
