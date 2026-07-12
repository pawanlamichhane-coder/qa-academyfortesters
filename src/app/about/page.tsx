export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About QA Academy</h1>
      <div className="space-y-4" style={{ color: "var(--text-muted)" }}>
        <p>QA Academy is a <strong style={{ color: "var(--text)" }}>free, open-source learning platform</strong> built for aspiring and practicing QA Engineers.</p>
        <p>Our mission is to provide <strong style={{ color: "var(--text)" }}>structured, practical, and comprehensive</strong> QA education that takes you from zero to job-ready — without paying a single dollar.</p>

        <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "var(--text)" }}>What You Get</h2>
        <p>18 modules covering manual testing, API testing, Selenium, Playwright, Cypress, CI/CD, performance testing, security testing, mobile testing, interview preparation, and real-world portfolio projects.</p>

        <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "var(--text)" }}>Features</h2>
        <p>Interactive quizzes with explanations, progress tracking with XP and streaks, dark mode, mobile-friendly design, and completely free with no login required.</p>

        <h2 className="text-xl font-bold mt-8 mb-2" style={{ color: "var(--text)" }}>Built By</h2>
        <p>Created by QA professionals who believe quality education should be accessible to everyone, everywhere.</p>
      </div>
    </div>
  );
}
