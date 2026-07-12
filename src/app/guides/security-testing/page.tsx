import Link from "next/link";

const topics = [
  "Learn the basics of common web vulnerabilities such as XSS, SQL injection, and broken authentication.",
  "Understand how to test input validation, session handling, authorization, and access control.",
  "Use tools like OWASP ZAP to scan applications and inspect findings.",
  "Document security issues clearly and prioritize them by risk.",
  "Combine manual reasoning with automated checks for better coverage.",
];

export default function SecurityTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Security Testing Guide</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        Security testing is about finding weaknesses before attackers can exploit them. It is an essential part of modern QA and quality engineering.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">What to focus on</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {topics.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">A good mindset</h2>
        <p style={{ color: "var(--text-muted)" }}>
          Security testing is not only about tools. It is also about thinking like an attacker, understanding trust boundaries, and validating that user access is properly controlled.
        </p>
      </section>
    </div>
  );
}
