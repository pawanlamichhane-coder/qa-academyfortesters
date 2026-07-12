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

const learningAreas = [
  { title: "QA Fundamentals", description: "SDLC, STLC, test planning, test cases, bug life cycle, defect tracking, and quality mindset.", icon: "🧪" },
  { title: "Manual Testing", description: "Exploratory testing, smoke and sanity testing, regression, boundary value analysis, and UAT.", icon: "📝" },
  { title: "Automation Testing", description: "Selenium, Playwright, Cypress, test design patterns, frameworks, and CI/CD automation.", icon: "🤖" },
  { title: "API & Performance", description: "Postman, REST, assertions, JMeter, k6, mocking, and performance bottlenecks.", icon: "⚡" },
  { title: "Security & Mobile", description: "OWASP basics, security testing, Appium, mobile strategies, and real-world risks.", icon: "🔐" },
  { title: "Career Growth", description: "Interview prep, resume guidance, portfolio projects, and how to grow from junior to senior QA.", icon: "🎯" },
];

const learningPath = [
  { step: "1", title: "Start with fundamentals", text: "Understand what QA is, how software teams work, and how defects are reported and tracked." },
  { step: "2", title: "Practice manual testing", text: "Learn test design, requirement analysis, bug reports, and how to validate systems effectively." },
  { step: "3", title: "Move into automation", text: "Build confidence with Selenium, Playwright, Cypress, and CI/CD workflows." },
  { step: "4", title: "Prepare for real-world roles", text: "Master API testing, performance, security, and interview readiness for junior to senior roles." },
];

const tools = [
  "Selenium", "Playwright", "Cypress", "Postman", "JMeter", "k6", "OWASP ZAP", "Appium", "Git", "GitHub Actions", "Jenkins", "Jira", "TestRail", "SQL", "Docker"
];

const beginnerToSeniorTopics = [
  "Basics of software testing", "Test case writing", "Bug reporting", "Agile and Scrum basics", "API testing", "Database testing", "Automation frameworks", "Performance testing", "Security testing", "Leadership in QA", "Quality strategy", "Test architecture"
];

const guideLinks = [
  { title: "QA Basics", href: "/guides/qa-basics", description: "Understand the foundation of quality assurance and software testing." },
  { title: "Manual Testing Guide", href: "/guides/manual-testing", description: "Learn how to test manually, report bugs, and write better test cases." },
  { title: "Selenium Beginner Guide", href: "/guides/selenium", description: "Start with the basics of browser automation and Selenium workflows." },
  { title: "API Testing Guide", href: "/guides/api-testing", description: "Learn how to validate APIs, inspect responses, and create strong test scenarios." },
  { title: "Playwright Guide", href: "/guides/playwright", description: "Explore modern, reliable browser automation with Playwright." },
  { title: "Performance Testing Guide", href: "/guides/performance-testing", description: "Learn how to measure speed, load, and reliability under pressure." },
  { title: "Security Testing Guide", href: "/guides/security-testing", description: "Understand common security risks and how to test them responsibly." },
  { title: "QA Tools and Setup Guide", href: "/guides/tools-and-setup", description: "Build a practical QA environment for manual testing, APIs, and automation." },
  { title: "Automation Best Practices", href: "/guides/automation-best-practices", description: "Learn how to design reliable, maintainable, and high-value test automation." },
  { title: "Test Strategy and Planning", href: "/guides/test-strategy", description: "Understand how to plan testing, manage risk, and make release decisions with confidence." },
  { title: "QA Metrics and Reporting", href: "/guides/metrics-and-reporting", description: "Learn how to track quality, report progress, and communicate testing outcomes clearly." },
  { title: "QA Portfolio Projects", href: "/portfolio-projects", description: "Create practical projects that demonstrate QA thinking, bug reporting, automation, and quality skills." },
  { title: "Resume and Interview Prep", href: "/resume-and-interview", description: "Get ready for QA applications and interviews with focused preparation tips." },
  { title: "QA Interview Questions", href: "/interview-questions", description: "Prepare for interviews with practical QA questions and answers." },
  { title: "Learning Materials", href: "/learning-materials", description: "Follow a full setup-to-practice path covering fundamentals, tools, and real projects." },
  { title: "QA Career Roadmap", href: "/career-roadmap", description: "See how QA skills grow from junior roles into senior quality engineering positions." },
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
          The <span style={{ color: "var(--brand)" }}>complete QA learning hub</span>
        </h1>
        <p className="text-lg max-w-3xl mx-auto mb-6" style={{ color: "var(--text-muted)" }}>
          Learn everything a QA engineer needs in one place — from fundamentals and manual testing to Selenium, Playwright, API testing, performance, security, CI/CD, and interview prep. No login required.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <a href={`/module/${modules[0]?.slug}`} className="inline-block px-6 py-3 rounded-lg text-white font-semibold transition hover:opacity-90" style={{ background: "var(--brand)" }}>
            Start Learning →
          </a>
          <a href="#curriculum" className="inline-block px-6 py-3 rounded-lg border font-semibold transition hover:opacity-90" style={{ borderColor: "var(--border)", color: "var(--text)" }}>
            Browse All Modules
          </a>
        </div>
        <div className="max-w-3xl mx-auto rounded-2xl border p-5 text-left" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <p className="text-sm font-semibold uppercase tracking-wide" style={{ color: "var(--brand)" }}>What you will find here</p>
          <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
            A beginner-friendly QA course with structured modules, real-world examples, quizzes, hands-on practice, interview questions, and a clear roadmap from beginner to job-ready tester.
          </p>
        </div>
      </section>

      <section className="mb-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {learningAreas.map((area) => (
          <div key={area.title} className="rounded-2xl border p-5" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <div className="text-3xl mb-3">{area.icon}</div>
            <h3 className="font-semibold text-lg">{area.title}</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>{area.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-12 rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-2xl font-bold mb-4">A complete roadmap for QA learners</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {learningPath.map((item) => (
            <div key={item.step} className="rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
              <div className="text-sm font-semibold" style={{ color: "var(--brand)" }}>{item.step}</div>
              <h3 className="font-semibold mt-1">{item.title}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-2xl font-bold mb-4">Tools and practices covered</h2>
        <div className="flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span key={tool} className="px-3 py-2 rounded-full text-sm" style={{ background: "var(--bg-alt)", color: "var(--text)" }}>{tool}</span>
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-2xl font-bold mb-4">From beginner to senior QA topics</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {beginnerToSeniorTopics.map((topic) => (
            <div key={topic} className="rounded-lg border p-3 text-sm" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>{topic}</div>
          ))}
        </div>
      </section>

      <section className="mb-12 rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-2xl font-bold mb-4">Why this site is built for QA learners</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
            <h3 className="font-semibold">Beginner-friendly</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>Starts from the basics of QA, testing concepts, and real-world software workflows.</p>
          </div>
          <div className="rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
            <h3 className="font-semibold">Practical</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>Covers test case design, bug reporting, automation, APIs, performance, and security.</p>
          </div>
          <div className="rounded-xl border p-4" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
            <h3 className="font-semibold">Career-focused</h3>
            <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>Helps learners move from junior QA to capable automation and quality engineering roles.</p>
          </div>
        </div>
      </section>

      <section className="mb-12 rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-2xl font-bold mb-4">Helpful guides and interview prep</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {guideLinks.map((guide) => (
            <a key={guide.href} href={guide.href} className="rounded-xl border p-4 transition hover:-translate-y-0.5" style={{ borderColor: "var(--border)", background: "var(--bg-alt)" }}>
              <h3 className="font-semibold" style={{ color: "var(--brand)" }}>{guide.title}</h3>
              <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>{guide.description}</p>
            </a>
          ))}
        </div>
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
      <section id="curriculum">
        <h2 className="text-2xl font-bold mb-6">Complete curriculum — 18 modules in one place</h2>
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
