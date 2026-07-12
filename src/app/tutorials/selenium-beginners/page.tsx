import Link from "next/link";

const beginnerTopics = [
  "Install Java, Selenium, and a browser driver",
  "Open a page and verify the title",
  "Locate elements with ID, name, CSS, and XPath",
  "Use basic assertions and handle simple forms",
  "Add explicit waits instead of relying on fixed delays",
];

const intermediateTopics = [
  "Build a stable locator strategy",
  "Use Page Object Model for maintainable tests",
  "Handle dropdowns, alerts, frames, and popups",
  "Work with test frameworks such as TestNG or JUnit",
  "Capture screenshots and logs for debugging",
];

const advancedTopics = [
  "Parallel execution and distributed runs",
  "Grid and remote WebDriver setups",
  "Headless browser execution for CI",
  "Cross-browser strategy and environment awareness",
  "Reusable utilities for authentication and data handling",
];

const sampleCode = `WebDriver driver = new ChromeDriver();
driver.get("https://example.com");
WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(10));
wait.until(ExpectedConditions.titleContains("Example"));
System.out.println(driver.getTitle());
driver.quit();`;

export default function SeleniumBeginnersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to tutorials</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Selenium for Beginners</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        Selenium is one of the most established browser automation tools in QA. It is widely used when teams need browser-level automation with Java or another language and want flexibility across multiple browsers and environments.
      </p>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>Last Updated: 13 July 2026</p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Why Selenium still matters</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>It supports real browser automation for login, form handling, search, and navigation.</li>
          <li>It works well for teams that already use Java and want a mature automation ecosystem.</li>
          <li>It can be extended with frameworks, grid setups, and custom utilities for larger test suites.</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Beginner level</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {beginnerTopics.map((topic) => (
            <div key={topic} className="rounded-xl border p-3" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>{topic}</div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Intermediate level</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {intermediateTopics.map((topic) => (
            <div key={topic} className="rounded-xl border p-3" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>{topic}</div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Advanced level</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {advancedTopics.map((topic) => (
            <div key={topic} className="rounded-xl border p-3" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>{topic}</div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">A practical example</h2>
        <pre className="rounded-xl p-4 text-sm overflow-x-auto" style={{ background: "var(--bg-alt)", color: "var(--text)" }}>{sampleCode}</pre>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">What to practice</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Open a page and verify the title and visible text.</li>
          <li>Fill a form, click a button, and assert the next screen appears.</li>
          <li>Use explicit waits instead of hardcoded delays.</li>
          <li>Refactor repeated logic into page objects as the suite grows.</li>
        </ul>
      </section>
    </div>
  );
}
