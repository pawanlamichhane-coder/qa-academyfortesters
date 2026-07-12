import Link from "next/link";

const projects = [
  {
    title: "Bug Reporting Portfolio",
    description: "Create a document with real bug reports, screenshots, severity, priority, and reproduction steps from a sample app. This shows that you understand defect quality and communication.",
  },
  {
    title: "API Testing Showcase",
    description: "Build a Postman collection with tests for success, failure, auth, and validation scenarios. This demonstrates backend thinking and request validation skills.",
  },
  {
    title: "Automation Demo",
    description: "Write a Selenium or Playwright project that tests a login flow, a form, and a search experience. A small but complete automation demo is often powerful for interviews.",
  },
  {
    title: "CI/CD Evidence",
    description: "Show a GitHub Actions workflow that runs tests automatically after each change. This proves you understand how QA fits into delivery pipelines.",
  },
  {
    title: "Performance Report",
    description: "Capture a basic JMeter or k6 test report with metrics, findings, and improvements. This shows that you think beyond basic functional correctness.",
  },
];

const tips = [
  "Keep each project focused on one QA skill area so the value is easy to see.",
  "Include screenshots, logs, or short video explanations where possible to make the project feel complete.",
  "Document your test strategy and what you learned from the project so readers understand your thinking.",
  "Publish your work on GitHub and link it from your resume to make it easy for employers to review.",
];

export default function PortfolioProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">QA Portfolio Projects</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        A strong portfolio helps QA learners stand out. These projects let you demonstrate practical testing, bug analysis, automation, and quality thinking in a way hiring teams can understand quickly.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Project ideas to build</h2>
        <div className="grid gap-4 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="rounded-xl border p-4" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>
              <h3 className="font-semibold mb-2">{project.title}</h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">How to make your portfolio stronger</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {tips.map((tip) => <li key={tip}>{tip}</li>)}
        </ul>
      </section>
    </div>
  );
}
