export default function ResourcesPage() {
  const sections = [
    {
      title: "🛠 Core QA Tools",
      items: [
        { name: "Postman", url: "https://www.postman.com", desc: "API testing, requests, collections, and assertions. Ideal for validating backend behavior and contract expectations." },
        { name: "Playwright", url: "https://playwright.dev", desc: "Modern browser automation for end-to-end testing with strong debugging, tracing, and cross-browser support." },
        { name: "Cypress", url: "https://www.cypress.io", desc: "Fast and developer-friendly frontend test automation, especially valuable for modern web apps and fast feedback loops." },
        { name: "Selenium", url: "https://www.selenium.dev", desc: "Classic browser automation with broad ecosystem support and long-standing industry adoption." },
        { name: "JMeter", url: "https://jmeter.apache.org", desc: "Load and performance testing for web apps, including stress, throughput, and concurrency checks." },
        { name: "k6", url: "https://k6.io", desc: "Modern performance and load testing tool with a simple scripting approach suitable for CI/CD use." },
        { name: "OWASP ZAP", url: "https://www.zaproxy.org", desc: "Security testing and vulnerability scanning for web applications and APIs." },
        { name: "Appium", url: "https://appium.io", desc: "Mobile automation for Android and iOS applications, used for app-level testing workflows." },
      ],
    },
    {
      title: "📚 Practice Sites for Hands-On Learning",
      items: [
        { name: "SauceDemo", url: "https://www.saucedemo.com", desc: "Practice e-commerce flows and login scenarios in a realistic shopping experience." },
        { name: "ReqRes", url: "https://reqres.in", desc: "REST API playground for beginners and API testers who want to experiment with CRUD operations." },
        { name: "JSONPlaceholder", url: "https://jsonplaceholder.typicode.com", desc: "Fake REST API for testing and mock workflows without requiring a real backend." },
        { name: "DemoQA", url: "https://demoqa.com", desc: "UI, forms, alerts, and API practice site that supports manual and automation learning." },
        { name: "Automation Exercise", url: "https://automationexercise.com", desc: "Full end-to-end automation practice website with flows such as signup, cart, and checkout." },
        { name: "The Internet", url: "https://the-internet.herokuapp.com", desc: "Great site for Selenium practice and browser interactions such as file upload, alerts, and frames." },
      ],
    },
    {
      title: "📖 Learning Resources and Communities",
      items: [
        { name: "ISTQB Foundation", url: "https://www.istqb.org", desc: "Official knowledge base for software testing fundamentals, terminology, and best practices." },
        { name: "Ministry of Testing", url: "https://www.ministryoftesting.com", desc: "Community learning, articles, and job discussions that help testers keep growing." },
        { name: "Test Automation University", url: "https://testautomationu.applitools.com", desc: "Free courses for automation, API, and QA practices designed for learners at different levels." },
        { name: "Guru99 Testing", url: "https://www.guru99.com/software-testing.html", desc: "Beginner-friendly testing tutorials and examples that explain core ideas clearly." },
      ],
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">QA Resources</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        A practical library of tools, practice platforms, and learning materials for beginners and experienced QA engineers. Use these resources to sharpen your testing skills, build automation confidence, and explore real-world tools used by professional teams.
      </p>
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
