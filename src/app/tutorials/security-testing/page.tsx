import Link from "next/link";

const topics = [
  "OWASP Top 10",
  "Authentication and authorization",
  "Input validation",
  "SQL injection and XSS",
  "Security headers and API security",
];

const checklist = [
  "Test login and password reset flows",
  "Verify access control for different roles",
  "Check for sensitive data exposure",
  "Validate input handling and output encoding",
  "Review API authentication and token handling",
];

export default function SecurityTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to tutorials</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Security Testing – Protecting the Product and the User</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        Security testing helps teams uncover vulnerabilities before attackers do. It covers authentication, authorization, input handling, API protection, and secure configuration.
      </p>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>Last Updated: 13 July 2026</p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Why security testing matters</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>It reduces the risk of data breaches and service abuse.</li>
          <li>It builds trust with users and business stakeholders.</li>
          <li>It is now part of modern quality engineering, not a separate phase only.</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Key areas to cover</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {topics.map((topic) => (
            <div key={topic} className="rounded-xl border p-3" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>{topic}</div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Practical checklist</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {checklist.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Industry mindset</h2>
        <p style={{ color: "var(--text-muted)" }}>
          Security testing should be built into the development lifecycle. The best teams test early, review access controls, and keep security practices part of daily engineering work.
        </p>
      </section>
    </div>
  );
}
