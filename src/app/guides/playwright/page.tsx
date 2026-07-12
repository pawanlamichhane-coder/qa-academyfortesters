import Link from "next/link";

const items = [
  "Install Playwright and create a first test project.",
  "Use locators such as role, text, and test-id selectors.",
  "Add assertions for visible content, navigation, and form submission.",
  "Use fixtures, retries, and test isolation for reliable automation.",
  "Run tests in headed and headless modes and inspect screenshots.",
];

export default function PlaywrightPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Playwright Guide</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        Playwright is a modern end-to-end automation framework that helps teams test web applications reliably across browsers and devices.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Why Playwright is popular</h2>
        <p style={{ color: "var(--text-muted)" }}>
          It offers strong browser support, reliable waiting, built-in tracing, and excellent debugging features. It is a strong choice for modern web automation.
        </p>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Beginner roadmap</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {items.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>
    </div>
  );
}
