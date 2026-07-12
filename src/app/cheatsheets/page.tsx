export default function CheatsheetsPage() {
  const sheets = [
    { title: "HTTP Status Codes", icon: "🌐", items: ["200 OK", "201 Created", "204 No Content", "301 Moved", "400 Bad Request", "401 Unauthorized", "403 Forbidden", "404 Not Found", "422 Unprocessable", "429 Rate Limited", "500 Server Error", "502 Bad Gateway", "503 Unavailable"] },
    { title: "Git Commands", icon: "🔀", items: ["git clone <url>", "git status", "git add .", "git commit -m 'msg'", "git push", "git pull", "git checkout -b branch", "git merge branch", "git log --oneline", "git stash / git stash pop", "git diff", "git reset HEAD~1"] },
    { title: "Selenium Locators", icon: "🤖", items: ["By.id('email')", "By.name('username')", "By.className('btn')", "By.cssSelector('#form .btn')", "By.xpath(\"//input[@type='email']\")", "By.linkText('Sign Up')", "By.tagName('input')"] },
    { title: "Playwright Locators", icon: "🎭", items: ["page.getByRole('button', {name})", "page.getByLabel('Email')", "page.getByPlaceholder('Enter')", "page.getByText('Welcome')", "page.getByTestId('submit')", "page.locator('#email')", "page.locator('.class')"] },
    { title: "Postman Assertions", icon: "📮", items: ["pm.response.to.have.status(200)", "pm.response.json().name", "pm.expect(body).to.be.an('array')", "pm.environment.set('key','val')", "pm.response.responseTime < 500", "pm.response.to.have.header()", "pm.response.to.have.jsonSchema()"] },
    { title: "Testing Acronyms", icon: "📋", items: ["SDLC — Software Dev Life Cycle", "STLC — Software Test Life Cycle", "UAT — User Acceptance Testing", "SIT — System Integration Testing", "BDD — Behavior Driven Dev", "TDD — Test Driven Dev", "CI/CD — Continuous Integration/Delivery", "POM — Page Object Model", "API — Application Programming Interface", "SLA — Service Level Agreement"] },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Cheatsheets</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>Quick reference cards for common QA tools and concepts.</p>
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
