import Link from "next/link";

const beginnerTopics = [
  "Install Node.js and Playwright",
  "Create a first browser test",
  "Use locators like getByRole and getByText",
  "Add assertions for visible UI and URL changes",
  "Handle waits without using brittle sleep calls",
];

const intermediateTopics = [
  "Page Object Model for maintainable flows",
  "Fixtures, beforeEach, and reusable setup",
  "Network interception and mock responses",
  "Multiple browser contexts and test isolation",
  "Test retries and trace debugging",
];

const advancedTopics = [
  "Parallel execution for large suites",
  "API testing inside the same framework",
  "Component testing for UI building blocks",
  "Custom fixtures and environment-specific config",
  "CI/CD integration with GitHub Actions and Jenkins",
];

const sampleCode = `import { test, expect } from '@playwright/test';

test.describe('checkout flow', () => {
  test('user can complete checkout', async ({ page }) => {
    await page.goto('https://example.com/checkout');
    await page.getByLabel('Email').fill('tester@example.com');
    await page.getByLabel('Password').fill('secret123');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect(page).toHaveURL(/dashboard/);
    await expect(page.getByText('Welcome back')).toBeVisible();
  });
});`;

export default function PlaywrightTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to tutorials</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Playwright Testing – From Basics to Advanced</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        Playwright is a modern browser automation framework used for reliable end-to-end testing, UI validation, API testing, and component testing. It is strong for teams that want stable tests, excellent debugging, and cross-browser coverage.
      </p>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>Last Updated: 13 July 2026</p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">What Playwright is really for</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>It automates real user flows like login, checkout, search, form submission, and navigation.</li>
          <li>It runs on Chromium, Firefox, and WebKit, which makes it ideal for cross-browser quality checks.</li>
          <li>It gives you traces, screenshots, and video output that make failures much easier to understand.</li>
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

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Setup path</h2>
        <ol className="list-decimal ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Install Node.js and initialize a test project.</li>
          <li>Install Playwright and its browser binaries.</li>
          <li>Write one end-to-end scenario around a real user action.</li>
          <li>Refine locators, assertions, and test structure until the flow is reliable.</li>
          <li>Run the suite in CI and collect traces for failures.</li>
        </ol>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Best practices</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Prefer stable selectors such as role-based locators over brittle CSS chains.</li>
          <li>Keep each test focused on one user journey and one expected outcome.</li>
          <li>Use traces and screenshots instead of guessing when a test fails.</li>
          <li>Build a page object model once the suite grows beyond a few scenarios.</li>
        </ul>
      </section>
    </div>
  );
}
