"use client";
import { modules } from "@/data";

export default function RoadmapPage() {
  const phases = [
    {
      title: "Phase 1: Foundation (Weeks 1-3)",
      ids: [1, 2, 3, 4],
      desc: "Master manual testing fundamentals, SDLC/STLC, and Agile basics. This stage builds the mindset, vocabulary, and discipline needed for every later topic.",
    },
    {
      title: "Phase 2: API Testing (Weeks 4-6)",
      ids: [5, 6, 7],
      desc: "Learn APIs, requests, test design, and backend validation with Postman and REST. This is where many QA professionals start connecting UI behavior to data and service behavior.",
    },
    {
      title: "Phase 3: Programming & Selenium (Weeks 7-10)",
      ids: [8, 9],
      desc: "Build Java basics and start automating browser tests with Selenium. You will learn how scripts interact with the DOM, manage waits, and verify user flows end to end.",
    },
    {
      title: "Phase 4: Modern Frameworks (Weeks 11-13)",
      ids: [10, 11],
      desc: "Explore Playwright and Cypress for fast, modern end-to-end testing. These tools are especially useful for teams that want stable automation and fast feedback loops.",
    },
    {
      title: "Phase 5: DevOps & Specialized (Weeks 14-17)",
      ids: [12, 13, 14, 15, 16],
      desc: "Dive into Git, CI/CD, performance, security, and mobile testing. These topics help you grow beyond simple automation into quality engineering and release reliability.",
    },
    {
      title: "Phase 6: Career Ready (Weeks 18-20)",
      ids: [17, 18],
      desc: "Prepare for interviews, build a portfolio, and become job-ready. This phase focuses on communication, confident execution, and showing real evidence of your skills.",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">QA Learning Roadmap</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        A structured path from beginner QA concepts to advanced quality engineering topics, practical automation, and career readiness. The roadmap is designed to be followed in order, but each phase also works as a reference point when you want to revisit a topic.
      </p>
      <div className="space-y-6">
        {phases.map((phase, i) => (
          <div key={i} className="p-6 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--brand)" }}>{phase.title}</h2>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>{phase.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {phase.ids.map((id) => {
                const m = modules.find((mod) => mod.id === id);
                return m ? (
                  <a key={id} href={`/module/${m.slug}`} className="flex items-center gap-2 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition text-sm">
                    <span>{m.icon}</span> <span className="font-medium">{m.title}</span>
                  </a>
                ) : null;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
