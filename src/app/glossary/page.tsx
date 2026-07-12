const terms = [
  { term: "API", def: "Application Programming Interface — a way for software systems to communicate and exchange data. In QA, APIs are often tested to verify business rules and service behavior." },
  { term: "Assertion", def: "A check in a test that confirms an expected result or behavior. Assertions are what turn a test from a simple action into a meaningful validation step." },
  { term: "BDD", def: "Behavior-Driven Development — writing tests in a business-readable format such as Given/When/Then so that both technical and non-technical team members can understand scenarios." },
  { term: "Bug", def: "A defect or flaw in software that causes unexpected behavior or failure. Bugs are reported, triaged, and tracked until they are resolved or accepted as known issues." },
  { term: "CI/CD", def: "Continuous Integration and Continuous Delivery — automating build, test, and release workflows so that changes can be validated quickly and delivered more consistently." },
  { term: "E2E Testing", def: "End-to-End testing — validating the full user journey across the application, such as signup, checkout, or login, rather than testing one component in isolation." },
  { term: "Flaky Test", def: "A test that shows inconsistent results without real application changes. Flakiness often points to timing issues, environment problems, or weak test design." },
  { term: "Integration Testing", def: "Testing how different modules or services work together. This type of testing is important when individual components work alone but fail when connected." },
  { term: "Locator", def: "A strategy to find elements on a page, such as ID, CSS, XPath, or text selectors. Good locators are stable, clear, and less likely to break during UI changes." },
  { term: "POM", def: "Page Object Model — a design pattern that separates page logic from test logic. It makes automation reusable, easier to maintain, and more readable." },
  { term: "Regression Testing", def: "Re-running tests after changes to ensure existing behavior still works. Regression tests protect previously working functionality from breaking during updates." },
  { term: "REST", def: "Representational State Transfer — an architectural style for web APIs. REST services are commonly tested with requests such as GET, POST, PUT, and DELETE." },
  { term: "Sanity Testing", def: "A quick focused test to confirm that a change or fix behaves as expected. It is usually used after a small change or bug fix." },
  { term: "SDLC", def: "Software Development Life Cycle — the structured phases of software development, including planning, analysis, design, implementation, testing, deployment, and maintenance." },
  { term: "Selenium", def: "A popular open-source framework for automating browser-based tests. Selenium is widely used for UI automation across a range of web applications." },
  { term: "Shift-Left", def: "Moving testing earlier into the development lifecycle to catch defects sooner. This reduces cost and risk because issues are found before release." },
  { term: "Smoke Testing", def: "A shallow set of critical tests run immediately after a build. Smoke tests check whether the most important functions work before deeper testing starts." },
  { term: "STLC", def: "Software Testing Life Cycle — the process of planning, designing, executing, and reporting tests in a structured and repeatable way." },
  { term: "Test Case", def: "A documented set of steps, input, and expected results used to verify a feature. A strong test case makes validation repeatable and easy to review." },
  { term: "Test Plan", def: "A document that defines the scope, strategy, and timeline of testing for a project. It helps teams align on what will be tested and how." },
  { term: "UAT", def: "User Acceptance Testing — the final validation by end users or business stakeholders. It ensures the product satisfies real business needs before release." },
  { term: "Unit Testing", def: "Testing individual functions or components in isolation. Unit tests are usually fast and help developers catch issues early in the development cycle." },
  { term: "XPath", def: "A query language used to navigate XML and HTML documents to locate elements. XPath is often used in Selenium tests when other selectors are not enough." },
  { term: "XSS", def: "Cross-Site Scripting — a vulnerability where malicious scripts are injected into web pages. Security testing aims to detect and prevent this class of issue." },
  { term: "Severity", def: "The impact of a defect on the business, system, or user experience. Severity helps teams understand how serious a bug is if it remains unresolved." },
  { term: "Priority", def: "How soon a defect should be fixed compared with other reported issues. Priority reflects urgency, while severity reflects impact." },
];

export default function GlossaryPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">QA Glossary</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        A practical glossary of QA, testing, automation, and software quality terms. Use it as a quick reference while learning new concepts and while preparing for interviews.
      </p>
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
