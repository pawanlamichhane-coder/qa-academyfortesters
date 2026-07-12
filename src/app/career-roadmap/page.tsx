import Link from "next/link";

const stages = [
  {
    title: "Junior QA Engineer",
    body: "Focus on manual testing, bug reporting, understanding requirements, and basic test case design. This stage is about building confidence, learning how teams work, and becoming reliable in execution.",
  },
  {
    title: "QA Engineer / Test Engineer",
    body: "Expand into API testing, automation basics, and collaboration with developers and product teams. At this stage, you should be able to understand requirements deeply and validate both user flows and backend behavior.",
  },
  {
    title: "Automation Engineer",
    body: "Build strong automation skills with Selenium, Playwright, Cypress, CI/CD, and maintainable frameworks. This role usually focuses on reducing repetitive manual effort and increasing regression coverage.",
  },
  {
    title: "Senior QA / Quality Engineer",
    body: "Lead test strategy, quality practices, performance and security testing, and high-impact quality initiatives. Senior professionals often influence process, architecture, and release confidence across teams.",
  },
];

export default function CareerRoadmapPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">QA Career Roadmap</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        A strong QA career grows from solid fundamentals into practical automation, quality leadership, and broader quality engineering responsibilities. The path below shows how skills usually evolve in real teams and in real job roles.
      </p>

      <div className="space-y-4">
        {stages.map((stage) => (
          <div key={stage.title} className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <h2 className="text-xl font-bold mb-2">{stage.title}</h2>
            <p style={{ color: "var(--text-muted)" }}>{stage.body}</p>
          </div>
        ))}
      </div>

      <section className="rounded-2xl border p-6 mt-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">How to grow faster in QA</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Practice testing on real products instead of only reading theory.</li>
          <li>Build a portfolio with bug reports, test cases, automation examples, and reports.</li>
          <li>Learn how QA connects to development, product, and operations.</li>
          <li>Keep improving your communication because clear reporting is a major part of success.</li>
        </ul>
      </section>
    </div>
  );
}
