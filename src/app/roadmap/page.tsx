"use client";
import { modules } from "@/data";

export default function RoadmapPage() {
  const phases = [
    { title: "Phase 1: Foundation (Weeks 1-3)", ids: [1, 2, 3, 4], desc: "Master manual testing fundamentals, SDLC/STLC, and Agile basics." },
    { title: "Phase 2: API Testing (Weeks 4-6)", ids: [5, 6, 7], desc: "Learn APIs, requests, test design, and backend validation with Postman and REST." },
    { title: "Phase 3: Programming & Selenium (Weeks 7-10)", ids: [8, 9], desc: "Build Java basics and start automating browser tests with Selenium." },
    { title: "Phase 4: Modern Frameworks (Weeks 11-13)", ids: [10, 11], desc: "Explore Playwright and Cypress for fast, modern end-to-end testing." },
    { title: "Phase 5: DevOps & Specialized (Weeks 14-17)", ids: [12, 13, 14, 15, 16], desc: "Dive into Git, CI/CD, performance, security, and mobile testing." },
    { title: "Phase 6: Career Ready (Weeks 18-20)", ids: [17, 18], desc: "Prepare for interviews, build a portfolio, and become job-ready." },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">QA Learning Roadmap</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>A structured path from beginner QA concepts to advanced quality engineering topics, practical automation, and career readiness.</p>
      <div className="space-y-6">
        {phases.map((phase, i) => (
          <div key={i} className="p-6 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <h2 className="text-xl font-bold mb-1" style={{ color: "var(--brand)" }}>{phase.title}</h2>
            <p className="text-sm mb-4" style={{ color: "var(--text-muted)" }}>{phase.desc}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {phase.ids.map(id => {
                const m = modules.find(mod => mod.id === id);
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
