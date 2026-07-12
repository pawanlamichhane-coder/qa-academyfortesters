import Link from "next/link";

const keyConcepts = [
  "Locators",
  "Assertions",
  "Fixtures and hooks",
  "Page objects",
  "Network interception",
  "Parallel execution",
];

const sampleCode = `import { test, expect } from '@playwright/test';

test('login form works', async ({ page }) => {
  await page.goto('https://example.com/login');
  await page.getByLabel('Email').fill('tester@example.com');
  await page.getByLabel('Password').fill('secret123');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page).toHaveURL(/dashboard/);
});`;

export default function PlaywrightTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to tutorials</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Playwright Testing – From Basics to Advanced</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        Playwright is a modern automation framework for reliable end-to-end testing across Chromium, Firefox, and WebKit. It is widely used because it combines speed, excellent debugging tools, and strong cross-browser support.
      </p>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>Last Updated: 13 July 2026</p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Why Playwright matters</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>It supports modern web apps with reliable waits and stable selectors.</li>
          <li>It offers excellent traces, screenshots, and video for debugging.</li>
          <li>It is suitable for UI automation, API testing, and component testing.</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Core concepts</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {keyConcepts.map((concept) => (
            <div key={concept} className="rounded-xl border p-3" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>{concept}</div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">A basic example</h2>
        <pre className="rounded-xl p-4 text-sm overflow-x-auto" style={{ background: "var(--bg-alt)", color: "var(--text)" }}>{sampleCode}</pre>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Setup path</h2>
        <ol className="list-decimal ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Install Node.js and create a new project.</li>
          <li>Install Playwright and its browser binaries.</li>
          <li>Create test files with clear scenarios and assertions.</li>
          <li>Run tests locally and later in CI/CD using GitHub Actions or Jenkins.</li>
        </ol>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Best practices</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Prefer stable locators such as role-based selectors over brittle CSS chains.</li>
          <li>Keep tests independent and avoid hidden dependencies between scenarios.</li>
          <li>Use traces and screenshots when failures occur.</li>
          <li>Organize flows into reusable helper methods or page objects.</li>
        </ul>
      </section>
    </div>
  );
}
