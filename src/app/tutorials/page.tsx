import Link from "next/link";

const tutorials = [
  {
    title: "What is Software Testing?",
    href: "/tutorials/what-is-software-testing",
    description: "A practical guide to QA, testing fundamentals, the testing lifecycle, and why testing matters in real projects.",
  },
  {
    title: "How to Write Test Cases",
    href: "/tutorials/how-to-write-test-cases",
    description: "Learn how to create test cases with clear steps, expected results, positive and negative coverage, and real-world examples.",
  },
  {
    title: "Database Testing – Software Testing",
    href: "/tutorials/database-testing",
    description: "Explore schema testing, transactions, constraints, SQL examples, and practical database testing workflows.",
  },
  {
    title: "API Testing with Postman",
    href: "/tutorials/postman-api-testing",
    description: "A step-by-step guide to testing REST APIs, sending requests, validating responses, and creating useful assertions.",
  },
  {
    title: "Selenium for Beginners",
    href: "/tutorials/selenium-beginners",
    description: "Learn setup, locators, waits, and your first browser automation script in a beginner-friendly way.",
  },
];

export default function TutorialsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Detailed QA Tutorials</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        These tutorials are written to be more practical and useful than a simple overview. They move from fundamentals to advanced concepts and include examples, workflows, and setup guidance.
      </p>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
        Start with beginner-friendly material, then move toward API testing, automation, and database validation techniques used in real projects.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {tutorials.map((tutorial) => (
          <Link key={tutorial.href} href={tutorial.href} className="rounded-2xl border p-6 transition hover:-translate-y-0.5" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <h2 className="text-xl font-bold mb-2">{tutorial.title}</h2>
            <p style={{ color: "var(--text-muted)" }}>{tutorial.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
