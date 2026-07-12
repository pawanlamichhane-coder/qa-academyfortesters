import Link from "next/link";

const steps = [
  "Install Java and set up your development environment.",
  "Download the Selenium WebDriver and browser driver for your target browser.",
  "Create a small test script that opens a page and checks for a visible element.",
  "Use stable locators like ID or data-testid whenever possible.",
  "Run the test and improve it gradually with assertions and waits.",
];

export default function SeleniumPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Selenium Beginner Guide</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        Selenium is one of the most widely used tools for browser automation. It helps testers validate web applications by opening pages, interacting with elements, and verifying outcomes.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Why Selenium matters</h2>
        <p style={{ color: "var(--text-muted)" }}>
          Selenium is excellent for repeated browser checks, regression testing, and end-to-end workflows. It works well when you need to automate forms, login flows, navigation, and validation across web apps.
        </p>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Getting started</h2>
        <ol className="list-decimal ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {steps.map((item) => <li key={item}>{item}</li>)}
        </ol>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Example idea</h2>
        <pre className="rounded-lg p-4 text-sm overflow-x-auto" style={{ background: "var(--bg-alt)", color: "var(--text)" }}>{`driver.get("https://example.com");
var title = driver.getTitle();
assert(title.contains("Example"));`}</pre>
        <p className="mt-4 text-sm" style={{ color: "var(--text-muted)" }}>
          Start with simple checks first. As you become comfortable, add waits, assertions, and page object classes to keep your test suite clean.
        </p>
      </section>
    </div>
  );
}
