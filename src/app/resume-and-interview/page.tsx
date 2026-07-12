import Link from "next/link";

const sections = [
  {
    title: "Resume tips",
    items: [
      "Highlight testing concepts, tools, and real project experience.",
      "Show measurable outcomes such as bugs found, test coverage, or automation progress.",
      "Keep the resume clear, concise, and tailored to QA roles.",
    ],
  },
  {
    title: "Interview preparation",
    items: [
      "Practice explaining your testing approach and decision-making process.",
      "Be ready to discuss bug reports, test cases, automation choices, and teamwork.",
      "Review general software engineering concepts as well as QA-specific topics.",
    ],
  },
  {
    title: "Common interview topics",
    items: [
      "Manual testing and test case design",
      "API testing and Postman",
      "Selenium, Playwright, or Cypress basics",
      "Regression, smoke, sanity, and exploratory testing",
      "Bug lifecycle and defect reporting",
    ],
  },
];

export default function ResumeAndInterviewPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">QA Resume and Interview Prep</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        This section helps QA learners prepare for applications and interviews by focusing on the skills employers care about most.
      </p>

      <div className="grid gap-6 md:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title} className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <h2 className="text-xl font-bold mb-3">{section.title}</h2>
            <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
              {section.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
