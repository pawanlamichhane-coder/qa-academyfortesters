import Link from "next/link";

const foundations = [
  {
    title: "Setup and environment",
    body: "Start by preparing your browser, an IDE, Git, and a way to inspect network traffic. For API work, install Postman. For automation, install Java or Node.js depending on the toolchain you want to learn.",
  },
  {
    title: "Core testing concepts",
    body: "Learn test planning, test case writing, boundary values, equivalence partitioning, smoke and sanity checks, regression testing, defect lifecycle, and UAT.",
  },
  {
    title: "Hands-on practice",
    body: "Practice with demo apps, public APIs, and real websites. Write test cases, report bugs, verify fixes, and automate repeatable flows.",
  },
];

const pathways = [
  {
    title: "Beginner path",
    items: ["Understand QA basics", "Learn manual testing", "Write bug reports", "Create simple test cases"],
  },
  {
    title: "Intermediate path",
    items: ["Use Postman for API testing", "Explore Selenium or Playwright", "Add assertions and waits", "Work with CI/CD pipelines"],
  },
  {
    title: "Advanced path",
    items: ["Design scalable automation frameworks", "Work on performance and security testing", "Improve test architecture", "Prepare for senior QA roles"],
  },
];

const practiceProjects = [
  "Create a login flow test plan for an e-commerce site.",
  "Validate a REST API with Postman and write test cases for success and failure scenarios.",
  "Automate a checkout journey with Selenium or Playwright.",
  "Build a bug report template and review it with a team.",
  "Create a CI pipeline that runs tests after every change.",
];

export default function LearningMaterialsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Learning materials for QA from setup to practice</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        This page brings together the full learning journey: setup, fundamentals, practice, tools, automation, and real-world skills so you can move from beginner to job-ready QA professional.
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
            <li>Write test cases for a form, login flow, and search feature.</li>
            <li>Explore an application like a user and look for edge cases.</li>
            <li>Re-test bugs after fixes and verify regression coverage.</li>
            <li>Use logs, screenshots, and browser tools to investigate issues.</li>
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
          <li>Start with the fundamentals and complete the modules in order.</li>
          <li>Use the cheatsheets and glossary when you need quick reference.</li>
          <li>Practice on real websites and APIs after each topic.</li>
          <li>Build your own notes, test cases, and bug reports as you learn.</li>
          <li>Use the interview and roadmap pages to prepare for career growth.</li>
        </ol>
      </section>
    </div>
  );
}
