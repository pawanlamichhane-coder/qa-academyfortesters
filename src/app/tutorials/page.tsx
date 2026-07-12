import Link from "next/link";

const tutorials = [
  {
    title: "What is Software Testing?",
    href: "/tutorials/what-is-software-testing",
    description: "A practical guide to QA fundamentals, the testing lifecycle, defect handling, and why testing matters in real projects.",
  },
  {
    title: "How to Write Test Cases",
    href: "/tutorials/how-to-write-test-cases",
    description: "Learn how to write clear, reproducible test cases with positive and negative coverage, expected results, and real examples.",
  },
  {
    title: "Database Testing – Software Testing",
    href: "/tutorials/database-testing",
    description: "Explore schema validation, transactions, constraints, SQL examples, and practical database testing workflows.",
  },
  {
    title: "Playwright Testing – From Basics to Advanced",
    href: "/tutorials/playwright-testing",
    description: "A full walkthrough covering setup, locators, assertions, fixtures, debugging, CI, and advanced automation patterns.",
  },
  {
    title: "Cypress Testing – End-to-End Automation",
    href: "/tutorials/cypress-testing",
    description: "Understand Cypress commands, assertions, fixtures, network interception, custom commands, and reliable UI automation.",
  },
  {
    title: "SQL for Testers",
    href: "/tutorials/sql-for-testers",
    description: "Use SQL to validate data, inspect application state, and uncover issues at the database layer with real query examples.",
  },
  {
    title: "Performance Testing",
    href: "/tutorials/performance-testing",
    description: "See how load, stress, and scalability testing help teams deliver reliable products under pressure.",
  },
  {
    title: "Security Testing",
    href: "/tutorials/security-testing",
    description: "Learn how to test authentication, access control, input handling, and common web vulnerabilities.",
  },
  {
    title: "API Testing with Postman",
    href: "/tutorials/postman-api-testing",
    description: "A detailed guide to REST API testing, request structure, response validation, collections, and automation.",
  },
  {
    title: "Selenium for Beginners",
    href: "/tutorials/selenium-beginners",
    description: "Learn setup, locators, waits, page objects, browser automation, and the move from beginner to reliable test code.",
  },
];

export default function TutorialsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Detailed QA Tutorials</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        These tutorials are written to be genuinely useful. Each page includes practical setup guidance, step-by-step explanation, example code, and the kind of advanced patterns QA engineers use in real projects.
      </p>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>
        Start with the fundamentals, then move toward automation, API work, database validation, performance, and security with focused study material instead of brief summaries.
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
