import Link from "next/link";

const practices = [
  "Write clear, small, and focused tests that verify one behavior at a time.",
  "Prefer stable locators such as role-based selectors or test IDs over brittle CSS selectors.",
  "Use waits carefully and avoid unnecessary delays in your test flow.",
  "Keep test data isolated so tests do not depend on shared state.",
  "Separate test logic from page-specific implementation using maintainable patterns.",
  "Run tests in CI and review failures with screenshots, traces, and logs.",
];

const benefits = [
  "More reliable automation",
  "Faster debugging and maintenance",
  "Better collaboration between QA and engineering",
  "Higher confidence in releases",
];

export default function AutomationBestPracticesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Automation Best Practices Guide</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        Good automation is not just about making tests pass. It is about building reliable, maintainable, and useful checks that support real releases.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Core principles</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {practices.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Why these practices matter</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div key={benefit} className="rounded-xl border p-4" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>
              {benefit}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
