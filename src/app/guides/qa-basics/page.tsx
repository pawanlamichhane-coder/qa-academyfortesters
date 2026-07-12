import Link from "next/link";

const bullets = [
  "QA is about preventing defects, not just finding them.",
  "A tester should understand business goals, user behavior, and risk areas.",
  "Good testing combines critical thinking, communication, and technical knowledge.",
];

export default function QABasicsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">QA Basics: A beginner-friendly guide</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        Quality Assurance is the discipline of building confidence that software will work correctly for real users. It starts with understanding requirements, testing thoughtfully, and improving quality at every step.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">What QA really means</h2>
        <p className="mb-4" style={{ color: "var(--text-muted)" }}>
          QA is not just clicking buttons and reporting bugs. It is a mindset of prevention, validation, and continuous improvement. A strong QA engineer asks: “What could go wrong?”, “What matters most to the user?”, and “How can we catch issues earlier?”
        </p>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {bullets.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="grid gap-6 md:grid-cols-2 mb-8">
        <div className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-bold mb-3">QA vs QC</h2>
          <p style={{ color: "var(--text-muted)" }}>
            QA focuses on improving the process so defects are less likely to happen. QC focuses on checking the product and finding defects that remain.
          </p>
        </div>
        <div className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-bold mb-3">Common testing types</h2>
          <p style={{ color: "var(--text-muted)" }}>
            Unit, integration, system, regression, smoke, sanity, UAT, performance, and security testing all play a role in creating reliable software.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">How to build strong QA habits</h2>
        <ol className="list-decimal ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Read requirements carefully and ask questions early.</li>
          <li>Think from the user’s perspective and explore edge cases.</li>
          <li>Write clear test cases and bug reports.</li>
          <li>Retest fixes and check for regressions.</li>
          <li>Communicate clearly with developers, product owners, and stakeholders.</li>
        </ol>
      </section>
    </div>
  );
}
