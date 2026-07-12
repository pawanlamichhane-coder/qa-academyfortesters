import Link from "next/link";

const topics = [
  "Understand performance goals, response time targets, and user load expectations.",
  "Learn how to design realistic load tests for web applications and APIs.",
  "Use tools like JMeter or k6 to simulate traffic and measure bottlenecks.",
  "Analyze throughput, error rate, latency, and resource usage.",
  "Translate findings into actionable performance improvements.",
];

export default function PerformanceTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Performance Testing Guide</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        Performance testing helps teams make sure applications stay fast, stable, and reliable under expected and peak load conditions.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Why it matters</h2>
        <p style={{ color: "var(--text-muted)" }}>
          Even a functionally correct app can fail in production if it slows down or crashes under pressure. Performance testing helps prevent those failures.
        </p>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">What to learn first</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {topics.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </div>
  );
}
