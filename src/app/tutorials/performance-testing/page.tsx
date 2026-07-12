import Link from "next/link";

const topics = [
  "Load testing",
  "Stress testing",
  "Spike testing",
  "Scalability testing",
  "Monitoring and analysis",
];

const sampleScript = `import http from 'k6/http';
import { check, sleep } from 'k6';

export default function () {
  const res = http.get('https://example.com');
  check(res, { 'status was 200': (r) => r.status === 200 });
  sleep(1);
}`;

export default function PerformanceTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to tutorials</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Performance Testing – Think Beyond Functional Accuracy</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        Performance testing ensures that applications remain responsive, stable, and scalable under real-world demand. It is critical for systems that need to support users, traffic spikes, and business-critical workflows.
      </p>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>Last Updated: 13 July 2026</p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Core performance testing types</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {topics.map((topic) => (
            <div key={topic} className="rounded-xl border p-3" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>{topic}</div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">What to measure</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Response time</li>
          <li>Throughput</li>
          <li>Error rate</li>
          <li>Resource consumption</li>
          <li>Scalability under peak traffic</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Example with k6</h2>
        <pre className="rounded-xl p-4 text-sm overflow-x-auto" style={{ background: "var(--bg-alt)", color: "var(--text)" }}>{sampleScript}</pre>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Best practice</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Test with realistic data and expected traffic patterns.</li>
          <li>Collect metrics before and after changes.</li>
          <li>Link performance results to business impact and user experience.</li>
        </ul>
      </section>
    </div>
  );
}
