import Link from "next/link";

const steps = [
  "Install Java and a Java IDE or use VS Code with the Java extension.",
  "Download Selenium WebDriver and the browser driver for your target browser.",
  "Create a simple Java class that opens a page and asserts the title.",
  "Use reliable locators such as ID or name when possible.",
  "Add waits and improve the test gradually.",
];

export default function SeleniumBeginnersPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to tutorials</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Selenium for Beginners</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        Selenium is one of the most widely used tools for web automation. It lets QA engineers test login flows, forms, navigation, and many other browser actions.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Beginner roadmap</h2>
        <ol className="list-decimal ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">First example</h2>
        <pre className="rounded-xl p-4 text-sm overflow-x-auto" style={{ background: "var(--bg-alt)", color: "var(--text)" }}>{`WebDriver driver = new ChromeDriver();
driver.get("https://example.com");
assert driver.getTitle().contains("Example");
driver.quit();`}</pre>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">What to practice</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Open a page and verify the title.</li>
          <li>Fill a form and click a button.</li>
          <li>Use waits instead of hardcoded delays.</li>
          <li>Organize tests into reusable page objects later.</li>
        </ul>
      </section>
    </div>
  );
}
