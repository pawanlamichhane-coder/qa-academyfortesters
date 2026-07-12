export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About QA Academy</h1>
      <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
        <p>QA Academy is a <strong style={{ color: "var(--text)" }}>free, practical, and beginner-friendly learning platform</strong> built for aspiring and practicing QA engineers.</p>
        <p>Our mission is to make quality engineering education easy to follow by covering everything from the basic principles of testing to advanced automation, API testing, performance, security, and career preparation.</p>

        <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "var(--text)" }}>What You Get</h2>
        <p>Structured modules for manual testing, test case design, bug reporting, Selenium, Playwright, Cypress, API testing, CI/CD, performance testing, security testing, and interview preparation — all in one place.</p>

        <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "var(--text)" }}>Why It Exists</h2>
        <p>Many learners struggle to find a complete and accessible path into QA. This platform exists to give beginners a strong foundation and help experienced testers grow into more advanced quality engineering roles.</p>

        <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "var(--text)" }}>Features</h2>
        <p>Interactive quizzes, progress tracking, practical examples, curated resources, a roadmap for learning, and completely free access with no login required.</p>

        <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "var(--text)" }}>Built For</h2>
        <p>Students, career switchers, junior testers, and professionals who want a single, dependable place to learn modern QA and testing practices.</p>
      </div>
    </div>
  );
}
