import Link from "next/link";

const templateFields = [
  "Test case ID", "Title", "Preconditions", "Test steps", "Expected result", "Actual result", "Status", "Comments",
];

const tips = [
  "Write tests that reflect real user behavior, not just happy paths.",
  "Keep steps simple and precise so other testers can repeat them easily.",
  "Cover both positive and negative scenarios.",
  "Use clear expected results so failures are easy to understand.",
];

export default function HowToWriteTestCasesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to tutorials</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">How to Write Test Cases</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        Test cases are one of the most important tools in QA. They help you verify requirements, document what to test, and keep your testing organized.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">A good test case includes</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {templateFields.map((field) => (
            <div key={field} className="rounded-xl border p-3" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>{field}</div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Example</h2>
        <pre className="rounded-xl p-4 text-sm overflow-x-auto" style={{ background: "var(--bg-alt)", color: "var(--text)" }}>{`Test Case ID: TC-001
Title: User can log in with valid credentials
Preconditions: User is on the login page
Steps:
1. Enter valid username
2. Enter valid password
3. Click Sign In
Expected Result: User is redirected to the dashboard`}</pre>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Best practices</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {tips.map((tip) => <li key={tip}>{tip}</li>)}
        </ul>
      </section>
    </div>
  );
}
