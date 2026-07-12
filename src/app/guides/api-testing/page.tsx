import Link from "next/link";

const steps = [
  "Understand the API contract, endpoints, methods, and expected responses.",
  "Use Postman to send requests and inspect status codes, headers, and bodies.",
  "Validate success and failure scenarios with assertions and variable reuse.",
  "Test authentication, pagination, validation, and error handling.",
  "Automate repeated checks with collection runs and environment variables.",
];

export default function ApiTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to home</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">API Testing Guide</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        API testing is essential for modern software quality because much of the application logic lives behind endpoints. Good API testing helps verify correctness, reliability, and security.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Why API testing matters</h2>
        <p style={{ color: "var(--text-muted)" }}>
          APIs connect services, browsers, and databases. Testing them early helps catch integration issues before they affect the user experience.
        </p>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">A practical learning flow</h2>
        <ol className="list-decimal ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {steps.map((item) => <li key={item}>{item}</li>)}
        </ol>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">What to practice</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>GET, POST, PUT, PATCH, and DELETE requests.</li>
          <li>Validation of JSON response bodies and headers.</li>
          <li>Negative tests such as missing fields and invalid tokens.</li>
          <li>Error handling and rate limiting behavior.</li>
        </ul>
      </section>
    </div>
  );
}
