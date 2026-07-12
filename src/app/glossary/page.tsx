const terms = [
  { term: "API", def: "Application Programming Interface — a way for software systems to communicate." },
  { term: "Assertion", def: "A check in a test that verifies an expected outcome." },
  { term: "BDD", def: "Behavior-Driven Development — writing tests in natural language (Given/When/Then)." },
  { term: "Bug", def: "A defect or flaw in software that causes incorrect behavior." },
  { term: "CI/CD", def: "Continuous Integration/Continuous Delivery — automated build, test, and deploy." },
  { term: "E2E Testing", def: "End-to-End testing — testing the complete user flow from start to finish." },
  { term: "Flaky Test", def: "A test that passes and fails intermittently without code changes." },
  { term: "Integration Testing", def: "Testing interactions between different modules or services." },
  { term: "Locator", def: "A strategy to find elements on a page (ID, CSS, XPath, etc.)." },
  { term: "POM", def: "Page Object Model — a design pattern separating page logic from test logic." },
  { term: "Regression Testing", def: "Re-running tests after changes to ensure nothing is broken." },
  { term: "REST", def: "Representational State Transfer — an architectural style for web APIs." },
  { term: "Sanity Testing", def: "Quick focused testing to verify a specific fix or feature works." },
  { term: "SDLC", def: "Software Development Life Cycle — phases of software development." },
  { term: "Selenium", def: "Open-source framework for automating web browser interactions." },
  { term: "Shift-Left", def: "Moving testing earlier in the development process." },
  { term: "Smoke Testing", def: "Quick test of critical features after a new build." },
  { term: "STLC", def: "Software Testing Life Cycle — phases of the testing process." },
  { term: "Test Case", def: "A set of conditions to verify whether a feature works correctly." },
  { term: "Test Plan", def: "A document describing scope, approach, and schedule of testing." },
  { term: "UAT", def: "User Acceptance Testing — final testing by the end user or client." },
  { term: "Unit Testing", def: "Testing individual functions or methods in isolation." },
  { term: "XPath", def: "A language for navigating XML/HTML documents to find elements." },
  { term: "XSS", def: "Cross-Site Scripting — injecting malicious scripts into web pages." },
];

export default function GlossaryPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Glossary</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>Key QA and testing terms you should know.</p>
      <div className="space-y-3">
        {terms.map((t, i) => (
          <div key={i} className="p-4 rounded-lg border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <dt className="font-bold" style={{ color: "var(--brand)" }}>{t.term}</dt>
            <dd className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{t.def}</dd>
          </div>
        ))}
      </div>
    </div>
  );
}
