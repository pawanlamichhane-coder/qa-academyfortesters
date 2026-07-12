const terms = [
  { term: "API", def: "Application Programming Interface — a way for software systems to communicate and exchange data." },
  { term: "Assertion", def: "A check in a test that confirms an expected result or behavior." },
  { term: "BDD", def: "Behavior-Driven Development — writing tests in a business-readable format such as Given/When/Then." },
  { term: "Bug", def: "A defect or flaw in software that causes unexpected behavior or failure." },
  { term: "CI/CD", def: "Continuous Integration and Continuous Delivery — automating build, test, and release workflows." },
  { term: "E2E Testing", def: "End-to-End testing — validating the full user journey across the application." },
  { term: "Flaky Test", def: "A test that shows inconsistent results without real application changes." },
  { term: "Integration Testing", def: "Testing how different modules or services work together." },
  { term: "Locator", def: "A strategy to find elements on a page, such as ID, CSS, XPath, or text selectors." },
  { term: "POM", def: "Page Object Model — a design pattern that separates page logic from test logic." },
  { term: "Regression Testing", def: "Re-running tests after changes to ensure existing behavior still works." },
  { term: "REST", def: "Representational State Transfer — an architectural style for web APIs." },
  { term: "Sanity Testing", def: "A quick focused test to confirm that a change or fix behaves as expected." },
  { term: "SDLC", def: "Software Development Life Cycle — the structured phases of software development." },
  { term: "Selenium", def: "A popular open-source framework for automating browser-based tests." },
  { term: "Shift-Left", def: "Moving testing earlier into the development lifecycle to catch defects sooner." },
  { term: "Smoke Testing", def: "A shallow set of critical tests run immediately after a build." },
  { term: "STLC", def: "Software Testing Life Cycle — the process of planning, designing, executing, and reporting tests." },
  { term: "Test Case", def: "A documented set of steps, input, and expected results used to verify a feature." },
  { term: "Test Plan", def: "A document that defines the scope, strategy, and timeline of testing for a project." },
  { term: "UAT", def: "User Acceptance Testing — the final validation by end users or business stakeholders." },
  { term: "Unit Testing", def: "Testing individual functions or components in isolation." },
  { term: "XPath", def: "A query language used to navigate XML and HTML documents to locate elements." },
  { term: "XSS", def: "Cross-Site Scripting — a vulnerability where malicious scripts are injected into web pages." },
  { term: "Severity", def: "The impact of a defect on the business, system, or user experience." },
  { term: "Priority", def: "How soon a defect should be fixed compared with other reported issues." },
];

export default function GlossaryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">QA Glossary</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>A practical glossary of QA, testing, automation, and software quality terms.</p>
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
