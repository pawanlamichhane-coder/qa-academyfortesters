import Link from "next/link";

const beginnerTopics = [
  "Install Cypress and create a test project",
  "Write your first end-to-end test",
  "Understand commands like visit, get, type, and click",
  "Use assertions to validate UI state and routing",
  "Work with selectors that are readable and maintainable",
];

const intermediateTopics = [
  "Fixtures and test data management",
  "Custom commands for repeated flows",
  "Network interception and response stubbing",
  "Aliases and reusable DOM references",
  "Retry logic and stable test design",
];

const advancedTopics = [
  "API testing inside Cypress suites",
  "Component testing for UI building blocks",
  "Parallel execution and CI optimization",
  "Flake reduction and environment-aware setup",
  "Cross-team collaboration with dashboards and reports",
];

const exampleCode = `describe('Login flow', () => {
  it('allows a valid user to sign in', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('tester@example.com');
    cy.get('input[name="password"]').type('secret123');
    cy.contains('button', 'Sign in').click();
    cy.url().should('include', '/dashboard');
    cy.contains('Welcome back').should('be.visible');
  });
});`;

export default function CypressTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to tutorials</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Cypress Testing – End-to-End Automation</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        Cypress is a fast and developer-friendly framework for browser automation. It is a strong choice for teams that want quick feedback, easy-to-read tests, and built-in support for intercepting requests and validating UI behavior.
      </p>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>Last Updated: 13 July 2026</p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Why Cypress is popular</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>It gives fast feedback during development and review.</li>
          <li>Its syntax is easy to read and write for testers and developers.</li>
          <li>It supports mocking, intercepting requests, and validating APIs without leaving the test flow.</li>
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
        <h2 className="text-xl font-bold mb-3">Example test</h2>
        <pre className="rounded-xl p-4 text-sm overflow-x-auto" style={{ background: "var(--bg-alt)", color: "var(--text)" }}>{exampleCode}</pre>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Good habits</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Use descriptive test names that explain the user intent.</li>
          <li>Keep tests short and focused on one behavior.</li>
          <li>Store reusable logic in custom commands and fixtures.</li>
          <li>Run tests in CI/CD after important changes and monitor flakiness.</li>
        </ul>
      </section>
    </div>
  );
}
