import Link from "next/link";

const keyTopics = [
  "Commands and assertions",
  "Fixtures and custom commands",
  "Network interception",
  "API testing with Cypress",
  "Dashboard and reporting",
];

const exampleCode = `describe('Login flow', () => {
  it('allows a valid user to sign in', () => {
    cy.visit('/login');
    cy.get('input[name="email"]').type('tester@example.com');
    cy.get('input[name="password"]').type('secret123');
    cy.contains('button', 'Sign in').click();
    cy.url().should('include', '/dashboard');
  });
});`;

export default function CypressTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to tutorials</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">Cypress Testing – End-to-End Automation</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        Cypress is a fast and developer-friendly framework for browser automation. It is especially useful for UI testing and for validating front-end behavior in modern web applications.
      </p>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>Last Updated: 13 July 2026</p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Why Cypress is popular</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>It gives fast feedback during development.</li>
          <li>Its syntax is easy to read and write for testers and developers.</li>
          <li>It supports mocking, intercepting requests, and validating APIs.</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Essential topics</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {keyTopics.map((topic) => (
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
          <li>Use descriptive test names to show user intent.</li>
          <li>Keep tests short and focused on one behavior.</li>
          <li>Store reusable logic in custom commands.</li>
          <li>Run tests in CI/CD after every important change.</li>
        </ul>
      </section>
    </div>
  );
}
