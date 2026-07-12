import Link from "next/link";

const items = [
  "Define the scope, goals, risks, and quality criteria for the release.",
  "Identify what needs to be tested manually, automatically, and at which level.",
  "Choose test types such as smoke, regression, integration, performance, and security based on risk.",
  "Document entry and exit criteria so testing is measurable and predictable.",
  "Align test planning with business priorities, timelines, and release constraints.",
];

const deliverables = [
  "Test plan",
  "Test case suite",
  "Risk register",
  "Defect reporting process",
  "Release readiness checklist",
];

export default function TestStrategyPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Test Strategy and Planning Guide</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        A good test strategy helps teams decide what to test, how to test it, and how to balance coverage with time and risk.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">What strong test planning includes</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Typical deliverables</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {deliverables.map((item) => (
            <div key={item} className="rounded-xl border p-4" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>
              {item}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
