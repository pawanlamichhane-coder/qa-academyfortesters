import Link from "next/link";

const questions = [
  {
    q: "What is the difference between QA and QC?",
    a: "QA focuses on preventing defects through better processes, while QC focuses on identifying defects in the finished product.",
  },
  {
    q: "What is a smoke test?",
    a: "A smoke test is a quick check of the most critical functionality to ensure the build is stable enough for deeper testing.",
  },
  {
    q: "What makes a good bug report?",
    a: "A good bug report includes clear steps, expected results, actual results, environment details, and reproduction evidence.",
  },
  {
    q: "Why are assertions important in automation?",
    a: "Assertions verify that the application behaves as expected and make tests meaningful instead of merely performing actions.",
  },
  {
    q: "What is regression testing?",
    a: "Regression testing confirms that recent changes did not break existing behavior.",
  },
  {
    q: "How do you prepare for a QA interview?",
    a: "Study testing fundamentals, review real-world examples, practice explaining your thought process, and be ready to discuss tools and projects.",
  },
];

export default function InterviewQuestionsPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">QA Interview Questions</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        This section gives you quick, practical answers to some of the most common QA interview questions for beginners and intermediate testers.
      </p>

      <div className="space-y-4">
        {questions.map((item) => (
          <div key={item.q} className="rounded-2xl border p-5" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <h2 className="font-semibold mb-2">{item.q}</h2>
            <p style={{ color: "var(--text-muted)" }}>{item.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
