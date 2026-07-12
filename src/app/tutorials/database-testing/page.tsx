import Link from "next/link";

const testTypes = [
  "Structural testing",
  "Functional testing",
  "Non-functional testing",
  "Regression testing",
  "Security testing",
  "Performance testing",
];

const sampleSql = `CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE,
  status VARCHAR(20) DEFAULT 'active'
);

INSERT INTO users (id, name, email) VALUES (1, 'Asha', 'asha@example.com');
SELECT * FROM users WHERE id = 1;`;

const checklist = [
  "Verify that valid data is saved correctly.",
  "Check that invalid data is rejected by constraints.",
  "Confirm that updates and deletes behave as expected.",
  "Ensure transactions roll back correctly on failure.",
  "Validate that reports and joins return the right results.",
];

export default function DatabaseTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>
        ← Back to tutorials
      </Link>

      <h1 className="text-3xl font-bold mt-4 mb-3">Database Testing – Software Testing</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        Database testing is the practice of validating that data is stored correctly, retrieved correctly, and protected by the right rules. It is essential for applications that depend on accurate data, secure transactions, and stable reports.
      </p>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
        Last Updated: 13 July 2026
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Why database testing matters</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>It ensures data integrity, consistency, and correctness across the application.</li>
          <li>It helps detect issues in schema design, constraints, joins, and transaction handling.</li>
          <li>It protects the system from bad data, duplicate records, and broken business rules.</li>
          <li>It improves performance, reliability, and trust in reports and business workflows.</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Types of database testing</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {testTypes.map((type) => (
            <div key={type} className="rounded-xl border p-3" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>
              {type}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Core areas to test</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li><strong>Schema testing:</strong> Validate tables, columns, data types, and relationships.</li>
          <li><strong>Transaction testing:</strong> Confirm that insert, update, delete, and rollback operations behave correctly.</li>
          <li><strong>Constraint testing:</strong> Ensure primary keys, foreign keys, unique keys, and default values are enforced.</li>
          <li><strong>Stored procedure and trigger testing:</strong> Verify that logic runs as expected during data changes.</li>
          <li><strong>Query and reporting testing:</strong> Check that joins, filters, and aggregation results are accurate.</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Database testing process</h2>
        <ol className="list-decimal ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Set up a test environment with the required database version and sample data.</li>
          <li>Prepare test scenarios based on business rules, functional requirements, and edge cases.</li>
          <li>Execute CRUD operations and validate results through SQL queries and application workflows.</li>
          <li>Compare expected results with actual outputs and log defects if anything is inconsistent.</li>
          <li>Retest after fixes and document the final state for regression coverage.</li>
        </ol>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Example: validating a users table</h2>
        <p className="mb-4" style={{ color: "var(--text-muted)" }}>
          A simple example is testing whether a user record is stored correctly and whether duplicate emails are blocked.
        </p>
        <pre className="rounded-xl p-4 text-sm overflow-x-auto" style={{ background: "var(--bg-alt)", color: "var(--text)" }}>{sampleSql}</pre>
        <p className="mt-4" style={{ color: "var(--text-muted)" }}>
          Expected result: the record is inserted successfully and can be retrieved by ID. If a duplicate email is attempted, the database should reject it based on the unique constraint.
        </p>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Practical setup example</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Install MySQL, PostgreSQL, or SQL Server depending on your target stack.</li>
          <li>Create a sample database and a few tables that mimic real application data.</li>
          <li>Write SQL scripts for insert, update, delete, and join operations.</li>
          <li>Use a database client like DBeaver, pgAdmin, or Azure Data Studio to inspect results.</li>
          <li>Pair database checks with API tests so you verify both the UI and the data layer.</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Checklist for effective database testing</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {checklist.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Interview-style summary</h2>
        <p style={{ color: "var(--text-muted)" }}>
          Database testing validates the reliability of data storage and retrieval. A strong tester should know about schema design, constraints, transactions, SQL basics, and how data flows through an application.
        </p>
      </section>
    </div>
  );
}
