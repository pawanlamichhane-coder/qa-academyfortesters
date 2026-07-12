import Link from "next/link";

const setupSteps = [
  "Install a browser and developer tools for inspection and debugging.",
  "Set up Git and GitHub for version control and collaboration.",
  "Choose an IDE such as VS Code and configure extensions for testing workflows.",
  "Install Postman for API exploration and test case execution.",
  "Add a test automation tool such as Selenium, Playwright, or Cypress depending on your focus.",
];

const toolCategories = [
  { title: "Core tools", items: ["Browser DevTools", "VS Code", "Git", "GitHub", "Postman"] },
  { title: "Automation tools", items: ["Selenium", "Playwright", "Cypress", "Appium"] },
  { title: "Performance and security", items: ["JMeter", "k6", "OWASP ZAP", "Burp Suite"] },
];

export default function ToolsAndSetupPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">QA Tools and Setup Guide</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        A strong QA setup makes learning and testing easier. This guide helps you create a practical environment for manual testing, API testing, and automation.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Recommended setup flow</h2>
        <ol className="list-decimal ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {setupSteps.map((item) => <li key={item}>{item}</li>)}
        </ol>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {toolCategories.map((category) => (
          <div key={category.title} className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <h2 className="text-xl font-bold mb-3">{category.title}</h2>
            <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
              {category.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
        ))}
      </section>
    </div>
  );
}
