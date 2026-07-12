import Link from "next/link";

const sqlTopics = [
  "SELECT and WHERE",
  "JOINs and subqueries",
  "INSERT, UPDATE, DELETE",
  "Constraints and transactions",
  "Aggregation and reporting",
];

const sampleSql = `SELECT u.name, o.status
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.status = 'pending';`;

export default function SqlForTestersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to tutorials</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">SQL for Testers – Querying Data Like a Professional</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        SQL is one of the most valuable skills for QA professionals. It helps testers validate data, inspect application state, and build confidence in database-backed workflows.
      </p>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>Last Updated: 13 July 2026</p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">What testers should know</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>How to validate inserted, updated, and deleted records.</li>
          <li>How to check whether reports and joins return the expected results.</li>
          <li>How to inspect data after API or UI actions.</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Common SQL topics</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {sqlTopics.map((topic) => (
            <div key={topic} className="rounded-xl border p-3" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>{topic}</div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Example query</h2>
        <pre className="rounded-xl p-4 text-sm overflow-x-auto" style={{ background: "var(--bg-alt)", color: "var(--text)" }}>{sampleSql}</pre>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Practical testing mindset</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Use SQL to verify the data layer after UI or API actions.</li>
          <li>Test edge cases such as null values, duplicates, and invalid data.</li>
          <li>Document your SQL validations so the same checks can be repeated later.</li>
        </ul>
      </section>
    </div>
  );
}
