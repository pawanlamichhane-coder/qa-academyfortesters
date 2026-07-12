"use client";
import { useEffect, useState } from "react";
import { modules } from "@/data";
import { getProgress, getModuleProgress, type Progress } from "@/lib/progress";
import AdSlot from "@/components/AdSlot";
import { FaqJsonLd } from "@/components/JsonLd";

const faqs = [
  { q: "Is this QA course really free?", a: "Yes, 100% free. No login, no payment, no hidden charges. All 18 modules, 70+ lessons, and 180 quiz questions are completely free." },
  { q: "Do I need programming experience to start?", a: "No. The course starts with manual testing fundamentals and gradually introduces programming concepts for automation. Module 8 teaches Java basics specifically for testers." },
  { q: "How long does it take to complete the course?", a: "At 2-3 hours per day, you can complete the entire course in 16-20 weeks. Each lesson takes 8-25 minutes." },
  { q: "Will this help me get a QA job?", a: "Yes. The course covers everything from manual testing to automation frameworks (Selenium, Playwright, Cypress), API testing, CI/CD, and includes 100+ interview questions and portfolio projects." },
  { q: "What tools will I learn?", a: "Postman, Selenium, Playwright, Cypress, JMeter, k6, OWASP ZAP, Appium, Git, GitHub Actions, Jenkins, and more." },
];

export default function Home() {
  const [progress, setProgress] = useState<Progress | null>(null);
  useEffect(() => { setProgress(getProgress()); }, []);

  const totalLessons = modules.reduce((s, m) => s + m.lessons.length, 0);
  const completedCount = progress?.completedLessons.length || 0;
  const overallPercent = totalLessons ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <FaqJsonLd faqs={faqs} />

      {/* Hero */}
      <section className="text-center py-12 md:py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: "DM Serif Display, serif" }}>
          Become a <span style={{ color: "var(--brand)" }}>QA Engineer</span>
        </h1>
        <p className="text-lg max-w-2xl mx-auto mb-6" style={{ color: "var(--text-muted)" }}>
          Free, comprehensive course — {modules.length} modules, {totalLessons}+ lessons, hands-on quizzes. From manual testing to full automation. No login required.
        </p>
        <a href={`/module/${modules[0]?.slug}`} className="inline-block px-6 py-3 rounded-lg text-white font-semibold transition hover:opacity-90" style={{ background: "var(--brand)" }}>
          Start Learning →
        </a>
      </section>

      {progress && completedCount > 0 && (
        <div className="max-w-xl mx-auto mb-10 p-4 rounded-xl" style={{ background: "var(--bg-alt)", border: "1px solid var(--border)" }}>
          <div className="flex justify-between text-sm mb-2">
            <span className="font-semibold">Your Progress</span>
            <span style={{ color: "var(--text-muted)" }}>{completedCount}/{totalLessons} lessons · {progress.xp} XP · 🔥 {progress.streak} day streak</span>
          </div>
          <div className="w-full h-2 rounded-full" style={{ background: "var(--border)" }}>
            <div className="h-2 rounded-full transition-all" style={{ width: `${overallPercent}%`, background: "var(--brand)" }} />
          </div>
        </div>
      )}

      <AdSlot slot="HOME_TOP_AD" format="horizontal" className="mb-8" />

      {/* Curriculum Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6">Curriculum — 18 Modules</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((m) => {
            const pct = progress ? getModuleProgress(m.id, m.lessons.map(l => l.id)) : 0;
            return (
              <a key={m.id} href={`/module/${m.slug}`}
                className="block p-5 rounded-xl border transition hover:shadow-lg hover:-translate-y-0.5"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <div className="flex items-start gap-3">
                  <span className="text-3xl">{m.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-mono mb-1" style={{ color: "var(--text-muted)" }}>Module {m.id}</div>
                    <h3 className="font-bold text-base leading-tight">{m.title}</h3>
                    <p className="text-xs mt-1 line-clamp-2" style={{ color: "var(--text-muted)" }}>{m.description}</p>
                    <div className="flex items-center gap-2 mt-3 text-xs" style={{ color: "var(--text-muted)" }}>
                      <span>📖 {m.lessons.length} lessons</span>
                      <span>📝 {m.quiz.length} quiz Qs</span>
                    </div>
                    {pct > 0 && (
                      <div className="mt-2 w-full h-1.5 rounded-full" style={{ background: "var(--border)" }}>
                        <div className="h-1.5 rounded-full" style={{ width: `${pct}%`, background: "var(--brand)" }} />
                      </div>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      <AdSlot slot="HOME_MID_AD" format="rectangle" className="my-10" />

      {/* FAQ Section — SEO powerhouse */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <details key={i} className="p-4 rounded-xl border group" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
              <summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
                {faq.q}
                <span className="ml-2 text-lg transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm" style={{ color: "var(--text-muted)" }}>{faq.a}</p>
            </details>
          ))}
        </div>
      </section>

    </div>
  );
}
