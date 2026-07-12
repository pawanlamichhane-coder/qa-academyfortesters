import Link from "next/link";

const keyPoints = [
  "Testing is about finding defects early and reducing risk.",
  "QA focuses on improving the process so defects are less likely to happen.",
  "QC focuses on checking the final product and identifying remaining issues.",
  "Good testing combines analysis, observation, communication, and domain understanding.",
];

const testingTypes = [
  "Unit testing", "Integration testing", "System testing", "Regression testing", "Smoke testing", "Sanity testing", "UAT", "Performance testing", "Security testing",
];

export default function WhatIsSoftwareTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to tutorials</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">What is Software Testing?</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        Software testing is the process of evaluating a system to ensure it behaves as expected. It is not just about finding bugs; it is about building confidence that the product will work for real users.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Why testing matters</h2>
        <p style={{ color: "var(--text-muted)" }}>
          Every application has risks: broken workflows, data problems, performance issues, security weaknesses, and poor usability. Testing helps reduce those risks before the product reaches users.
        </p>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">QA vs QC</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {keyPoints.map((point) => <li key={point}>{point}</li>)}
        </ul>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Common types of testing</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {testingTypes.map((type) => (
            <div key={type} className="rounded-xl border p-3" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>{type}</div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">How to study this topic well</h2>
        <ol className="list-decimal ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Learn the basics of user requirements and business goals.</li>
          <li>Practice identifying likely failure points in everyday apps.</li>
          <li>Read bug reports and understand how defects are described.</li>
          <li>Compare testing methods across manual, automation, API, and performance testing.</li>
        </ol>
      </section>
    </div>
  );
}
