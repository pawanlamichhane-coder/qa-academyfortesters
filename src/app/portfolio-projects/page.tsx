import Link from "next/link";

const projects = [
  {
    title: "Bug Reporting Portfolio",
    description: "Create a document with real bug reports, screenshots, severity, priority, and reproduction steps from a sample app.",
  },
  {
    title: "API Testing Showcase",
    description: "Build a Postman collection with tests for success, failure, auth, and validation scenarios.",
  },
  {
    title: "Automation Demo",
    description: "Write a Selenium or Playwright project that tests a login flow, a form, and a search experience.",
  },
  {
    title: "CI/CD Evidence",
    description: "Show a GitHub Actions workflow that runs tests automatically after each change.",
  },
  {
    title: "Performance Report",
    description: "Capture a basic JMeter or k6 test report with metrics, findings, and improvements.",
  },
];

const tips = [
  "Keep each project focused on one QA skill area.",
  "Include screenshots, logs, or short video explanations where possible.",
  "Document your test strategy and what you learned from the project.",
  "Publish your work on GitHub and link it from your resume.",
];

export default function PortfolioProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">QA Portfolio Projects</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        A strong portfolio helps QA learners stand out. These projects let you demonstrate practical testing, bug analysis, automation, and quality thinking.
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
