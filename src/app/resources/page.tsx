export default function ResourcesPage() {
  const sections = [
    { title: "🛠 Tools", items: [
      { name: "Postman", url: "https://www.postman.com", desc: "API testing platform" },
      { name: "Playwright", url: "https://playwright.dev", desc: "Modern E2E testing" },
      { name: "Cypress", url: "https://www.cypress.io", desc: "Frontend testing" },
      { name: "Selenium", url: "https://www.selenium.dev", desc: "Browser automation" },
      { name: "JMeter", url: "https://jmeter.apache.org", desc: "Performance testing" },
      { name: "k6", url: "https://k6.io", desc: "Modern load testing" },
      { name: "OWASP ZAP", url: "https://www.zaproxy.org", desc: "Security testing" },
      { name: "Appium", url: "https://appium.io", desc: "Mobile testing" },
    ]},
    { title: "📚 Practice Sites", items: [
      { name: "SauceDemo", url: "https://www.saucedemo.com", desc: "E-commerce practice site" },
      { name: "ReqRes", url: "https://reqres.in", desc: "REST API practice" },
      { name: "JSONPlaceholder", url: "https://jsonplaceholder.typicode.com", desc: "Fake REST API" },
      { name: "DemoQA", url: "https://demoqa.com", desc: "UI & API practice" },
      { name: "Automation Exercise", url: "https://automationexercise.com", desc: "Full E2E practice" },
      { name: "The Internet", url: "https://the-internet.herokuapp.com", desc: "Selenium practice" },
    ]},
    { title: "📖 Learning Resources", items: [
      { name: "ISTQB Foundation", url: "https://www.istqb.org", desc: "QA certification" },
      { name: "Ministry of Testing", url: "https://www.ministryoftesting.com", desc: "QA community" },
      { name: "Test Automation University", url: "https://testautomationu.applitools.com", desc: "Free courses" },
      { name: "Guru99 Testing", url: "https://www.guru99.com/software-testing.html", desc: "Tutorials" },
    ]},
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Resources</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>Curated tools, practice sites, and learning resources for QA Engineers.</p>
      {sections.map((sec, i) => (
        <section key={i} className="mb-10">
          <h2 className="text-xl font-bold mb-4">{sec.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {sec.items.map((item, j) => (
              <a key={j} href={item.url} target="_blank" rel="noopener noreferrer"
                className="p-4 rounded-lg border hover:shadow-md transition"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
                <h3 className="font-semibold" style={{ color: "var(--brand)" }}>{item.name} ↗</h3>
                <p className="text-sm mt-1" style={{ color: "var(--text-muted)" }}>{item.desc}</p>
              </a>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
