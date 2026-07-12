import Link from "next/link";

const checklist = [
  "Understand the requirement before testing.",
  "Create a clear test case with steps and expected result.",
  "Verify the feature in both positive and negative scenarios.",
  "Capture screenshots, logs, and exact reproduction steps.",
  "Retest after the bug is fixed.",
];

export default function ManualTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Manual Testing Guide</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        Manual testing is the foundation of quality engineering. It teaches you how to observe behavior, validate requirements, and report problems clearly.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">What manual testers do</h2>
        <p style={{ color: "var(--text-muted)" }}>
          A manual tester explores software by following test cases, trying real user actions, and verifying whether the application behaves correctly. This is especially useful for usability, workflow, and exploratory testing.
        </p>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">A simple manual testing checklist</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {checklist.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-bold mb-3">Good test case structure</h2>
          <p style={{ color: "var(--text-muted)" }}>
            Include a test ID, title, preconditions, steps, expected result, and status. This makes your testing repeatable and easy to review.
          </p>
        </div>
        <div className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-bold mb-3">Bug report essentials</h2>
          <p style={{ color: "var(--text-muted)" }}>
            Every bug report should include a clear title, steps to reproduce, expected behavior, actual behavior, environment details, and screenshots when possible.
          </p>
        </div>
      </section>
    </div>
  );
}
