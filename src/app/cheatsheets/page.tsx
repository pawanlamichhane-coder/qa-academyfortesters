export default function CheatsheetsPage() {
  const sheets = [
    { title: "HTTP Status Codes", icon: "🌐", items: ["200 OK", "201 Created", "204 No Content", "301 Moved", "400 Bad Request", "401 Unauthorized", "403 Forbidden", "404 Not Found", "422 Unprocessable", "429 Rate Limited", "500 Server Error", "502 Bad Gateway", "503 Unavailable"] },
    { title: "Git Commands", icon: "🔀", items: ["git clone <url>", "git status", "git add .", "git commit -m 'msg'", "git push", "git pull", "git checkout -b branch", "git merge branch", "git log --oneline", "git stash / git stash pop", "git diff", "git reset HEAD~1"] },
    { title: "Selenium Locators", icon: "🤖", items: ["By.id('email')", "By.name('username')", "By.className('btn')", "By.cssSelector('#form .btn')", "By.xpath(\"//input[@type='email']\")", "By.linkText('Sign Up')", "By.tagName('input')"] },
    { title: "Playwright Locators", icon: "🎭", items: ["page.getByRole('button', {name})", "page.getByLabel('Email')", "page.getByPlaceholder('Enter')", "page.getByText('Welcome')", "page.getByTestId('submit')", "page.locator('#email')", "page.locator('.class')"] },
    { title: "Postman Assertions", icon: "📮", items: ["pm.response.to.have.status(200)", "pm.response.json().name", "pm.expect(body).to.be.an('array')", "pm.environment.set('key','val')", "pm.response.responseTime < 500", "pm.response.to.have.header()", "pm.response.to.have.jsonSchema()"] },
    { title: "Testing Acronyms", icon: "📋", items: ["SDLC — Software Dev Life Cycle", "STLC — Software Test Life Cycle", "UAT — User Acceptance Testing", "SIT — System Integration Testing", "BDD — Behavior Driven Dev", "TDD — Test Driven Dev", "CI/CD — Continuous Integration/Delivery", "POM — Page Object Model", "API — Application Programming Interface", "SLA — Service Level Agreement"] },
    { title: "Bug Report Checklist", icon: "🐞", items: ["Title", "Steps to reproduce", "Expected vs actual", "Environment", "Severity", "Priority", "Screenshot", "Logs", "Browser/OS", "Assigned to"] },
    { title: "Test Case Template", icon: "🧾", items: ["Test ID", "Scenario", "Preconditions", "Steps", "Expected result", "Actual result", "Status", "Defect ID"] },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">QA Cheatsheets</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        Quick reference guides for test case writing, bug reporting, automation, APIs, and common QA tools. These are meant to be used while you practice, not only while you study theory.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">How to use these cheat sheets</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Keep them next to your work during test design, bug reporting, and automation setup.</li>
          <li>Use them as a fast reminder when you are learning a new tool or framework.</li>
          <li>Combine them with the tutorials and modules so the shortcuts become meaningful practice.</li>
        </ul>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {sheets.map((sheet, i) => (
          <div key={i} className="p-5 rounded-xl border" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
            <h2 className="text-lg font-bold mb-3">{sheet.icon} {sheet.title}</h2>
            <div className="space-y-1">
              {sheet.items.map((item, j) => (
                <div key={j} className="text-sm py-1 px-2 rounded font-mono" style={{ background: "var(--bg-alt)" }}>{item}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
