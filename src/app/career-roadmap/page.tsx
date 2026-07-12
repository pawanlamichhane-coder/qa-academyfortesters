import Link from "next/link";

const stages = [
  {
    title: "Junior QA Engineer",
    body: "Focus on manual testing, bug reporting, understanding requirements, and basic test case design.",
  },
  {
    title: "QA Engineer / Test Engineer",
    body: "Expand into API testing, automation basics, and collaboration with developers and product teams.",
  },
  {
    title: "Automation Engineer",
    body: "Build strong automation skills with Selenium, Playwright, Cypress, CI/CD, and maintainable frameworks.",
  },
  {
    title: "Senior QA / Quality Engineer",
    body: "Lead test strategy, quality practices, performance and security testing, and high-impact quality initiatives.",
  },
];

export default function CareerRoadmapPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">QA Career Roadmap</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        A strong QA career grows from solid fundamentals into practical automation, quality leadership, and broader quality engineering responsibilities.
      </p>

      <div className="space-y-4">
        {stages.map((stage) => (
          <div key={stage.title} className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <h2 className="text-xl font-bold mb-2">{stage.title}</h2>
            <p style={{ color: "var(--text-muted)" }}>{stage.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
