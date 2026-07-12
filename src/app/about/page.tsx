export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About QA Academy</h1>
      <div className="space-y-5" style={{ color: "var(--text-muted)" }}>
        <p>
          QA Academy is a <strong style={{ color: "var(--text)" }}>free, practical, and beginner-friendly learning platform</strong> built for aspiring and practicing QA engineers.
          It is designed to give learners a complete path from foundational software testing concepts to advanced automation, API validation, performance testing, security review, and career preparation.
        </p>

        <p>
          Our mission is to make quality engineering education easy to follow by organizing content into a logical progression. Instead of hopping between disconnected tutorials, learners can move from basics to advanced topics in one place while still seeing how each concept connects to real projects and professional QA work.
        </p>

        <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>What you will find here</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>Structured modules for manual testing, test design, and bug reporting.</li>
            <li>Practical automation content covering Selenium, Playwright, and Cypress.</li>
            <li>API, database, and performance testing material for real-world application validation.</li>
            <li>Interview preparation, roadmap guidance, project ideas, and curated learning resources.</li>
          </ul>
        </section>

        <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>Why this platform exists</h2>
          <p>
            Many learners struggle to find a complete and accessible path into QA. This platform exists to give beginners a strong foundation and help experienced testers grow into more advanced quality engineering roles without needing to piece together fragments from many sources.
          </p>
        </section>

        <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>What makes it useful</h2>
          <p>
            The platform combines interactive quizzes, progress tracking, practical examples, curated resources, a learning roadmap, and free access with no login required. The goal is not only to teach concepts, but to help learners practice them in a way that reflects real team workflows.
          </p>
        </section>

        <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
          <h2 className="text-xl font-bold mb-3" style={{ color: "var(--text)" }}>Who it is built for</h2>
          <p>
            Students, career switchers, junior testers, and professionals who want a single, dependable place to learn modern QA and testing practices will find this resource useful. The content aims to be practical, approachable, and relevant to the way software teams work today.
          </p>
        </section>
      </div>
    </div>
  );
}
