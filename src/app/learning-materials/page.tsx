import Link from "next/link";

const foundations = [
  {
    title: "Setup and environment",
    body: "Start by preparing your browser, an IDE, Git, and a way to inspect network traffic. For API work, install Postman. For automation, install Java or Node.js depending on the toolchain you want to learn. A solid setup reduces confusion and helps you focus on real testing concepts.",
  },
  {
    title: "Core testing concepts",
    body: "Learn test planning, test case writing, boundary values, equivalence partitioning, smoke and sanity checks, regression testing, defect lifecycle, and UAT. These are the building blocks that appear in almost every QA role and project.",
  },
  {
    title: "Hands-on practice",
    body: "Practice with demo apps, public APIs, and real websites. Write test cases, report bugs, verify fixes, and automate repeatable flows. The best way to improve is to create your own test scenarios and compare them to real outcomes.",
  },
];

const pathways = [
  {
    title: "Beginner path",
    items: [
      "Understand QA basics and why testing exists",
      "Learn manual testing and the bug lifecycle",
      "Write bug reports and simple test cases",
      "Practice exploring apps like a real user",
    ],
  },
  {
    title: "Intermediate path",
    items: [
      "Use Postman for API testing and response validation",
      "Explore Selenium or Playwright for browser automation",
      "Add assertions, waits, and meaningful checks",
      "Work with CI/CD pipelines and basic release workflows",
    ],
  },
  {
    title: "Advanced path",
    items: [
      "Design scalable automation frameworks",
      "Work on performance and security testing",
      "Improve test architecture and maintainability",
      "Prepare for senior QA and quality engineering roles",
    ],
  },
];

const practiceProjects = [
  "Create a login flow test plan for an e-commerce site and cover positive, negative, and edge cases.",
  "Validate a REST API with Postman and write test cases for success, failure, and boundary conditions.",
  "Automate a checkout journey with Selenium or Playwright and add assertions for each critical step.",
  "Build a bug report template and review it with a team to improve clarity and reproducibility.",
  "Create a CI pipeline that runs tests after every change and captures failures clearly.",
];

export default function LearningMaterialsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Learning materials for QA from setup to practice</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        This page brings together the full learning journey: setup, fundamentals, practice, tools, automation, and real-world skills so you can move from beginner to job-ready QA professional. Each section is designed to explain not just what to learn, but why it matters and how to apply it.
      </p>

      <section className="grid gap-6 md:grid-cols-3 mb-8">
        {foundations.map((item) => (
          <div key={item.title} className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <h2 className="text-xl font-bold mb-3">{item.title}</h2>
            <p style={{ color: "var(--text-muted)" }}>{item.body}</p>
          </div>
        ))}
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-2xl font-bold mb-4">What you will learn step by step</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {pathways.map((path) => (
            <div key={path.title} className="rounded-xl border p-4" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>
              <h3 className="font-semibold mb-2">{path.title}</h3>
              <ul className="list-disc ml-5 text-sm space-y-1" style={{ color: "var(--text-muted)" }}>
                {path.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2 mb-8">
        <div className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-bold mb-3">Practice activities</h2>
          <ul className="list-disc ml-5 space-y-2" style={{ color: "var(--text-muted)" }}>
            <li>Write test cases for a form, login flow, and search feature using real user behavior.</li>
            <li>Explore an application like a user and look for edge cases, validation gaps, and missing flows.</li>
            <li>Re-test bugs after fixes and verify regression coverage with clear evidence.</li>
            <li>Use logs, screenshots, and browser tools to investigate issues and document findings professionally.</li>
          </ul>
        </div>
        <div className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-bold mb-3">Real projects to build</h2>
          <ul className="list-disc ml-5 space-y-2" style={{ color: "var(--text-muted)" }}>
            {practiceProjects.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </div>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">How to use this site effectively</h2>
        <ol className="list-decimal ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Start with the fundamentals and complete the modules in order so each topic builds on the previous one.</li>
          <li>Use the cheatsheets and glossary when you need quick reference during practice and interviews.</li>
          <li>Practice on real websites and APIs after each topic so theoretical knowledge becomes usable skill.</li>
          <li>Build your own notes, test cases, and bug reports as you learn to create a personal QA knowledge base.</li>
          <li>Use the interview and roadmap pages to prepare for career growth and to understand what employers expect.</li>
        </ol>
      </section>
    </div>
  );
}
