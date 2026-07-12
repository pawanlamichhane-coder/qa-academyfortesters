import Link from "next/link";

const metrics = [
  "Test execution count",
  "Pass/fail rate",
  "Defect density",
  "Open vs closed defects",
  "Automation coverage",
  "Mean time to detect and resolve issues",
];

const reportingTips = [
  "Report trends over time rather than only single snapshots.",
  "Highlight risk areas, blockers, and release readiness clearly.",
  "Use simple dashboards and summaries for stakeholders.",
  "Tie metrics to business impact and user experience.",
];

export default function MetricsAndReportingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">QA Metrics and Reporting Guide</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        Good QA reporting helps teams understand quality, communicate progress, and make better release decisions.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Useful QA metrics</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {metrics.map((metric) => (
            <div key={metric} className="rounded-xl border p-4" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>
              {metric}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">How to report effectively</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {reportingTips.map((tip) => <li key={tip}>{tip}</li>)}
        </ul>
      </section>
    </div>
  );
}
