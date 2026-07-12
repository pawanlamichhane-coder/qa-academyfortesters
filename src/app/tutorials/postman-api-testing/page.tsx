import Link from "next/link";

const beginnerTopics = [
  "Create requests for GET, POST, PUT, and DELETE",
  "Inspect status codes, body content, and headers",
  "Use collections and environments for organized testing",
  "Add test scripts for assertions and validation",
  "Handle authentication and token-based flows",
];

const intermediateTopics = [
  "Use variables, pre-request scripts, and test scripts together",
  "Validate response schemas and business rules",
  "Chain requests using dynamic values from earlier responses",
  "Create reusable folders and shared setups",
  "Mock services and test negative scenarios",
];

const advancedTopics = [
  "Run collections via Newman in CI",
  "Monitor API health over time",
  "Validate security-sensitive behaviors and permissions",
  "Compare contract expectations with real responses",
  "Integrate API checks into release pipelines",
];

const sampleCode = `pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});

pm.test("Response contains expected fields", function () {
  const json = pm.response.json();
  pm.expect(json).to.have.property('id');
  pm.expect(json).to.have.property('name');
});`;

export default function PostmanApiTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to tutorials</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">API Testing with Postman</h1>
      <p className="mb-4" style={{ color: "var(--text-muted)" }}>
        API testing is a core QA skill. It helps you verify that backend services behave correctly, return the right data, and handle errors properly. In real teams, API testing often catches issues long before a UI is even fully wired up.
      </p>
      <p className="mb-8 text-sm" style={{ color: "var(--text-muted)" }}>Last Updated: 13 July 2026</p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">A practical workflow</h2>
        <ol className="list-decimal ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Understand the endpoint, the method, and the expected user behavior.</li>
          <li>Send a request and inspect the response status, body, and headers.</li>
          <li>Validate success, failure, and edge-case behavior using test scripts.</li>
          <li>Organize requests into collections and environments so the suite stays reusable.</li>
        </ol>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Beginner level</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {beginnerTopics.map((topic) => (
            <div key={topic} className="rounded-xl border p-3" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>{topic}</div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Intermediate level</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {intermediateTopics.map((topic) => (
            <div key={topic} className="rounded-xl border p-3" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>{topic}</div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Advanced level</h2>
        <div className="grid gap-3 md:grid-cols-2">
          {advancedTopics.map((topic) => (
            <div key={topic} className="rounded-xl border p-3" style={{ background: "var(--bg-alt)", borderColor: "var(--border)" }}>{topic}</div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">What to verify</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Status codes such as 200, 201, 400, 404, or 500.</li>
          <li>Response time, reliability, and payload shape.</li>
          <li>Authentication, authorization, and permission handling.</li>
          <li>Data correctness, error messages, and boundary conditions.</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Example assertion</h2>
        <pre className="rounded-xl p-4 text-sm overflow-x-auto" style={{ background: "var(--bg-alt)", color: "var(--text)" }}>{sampleCode}</pre>
      </section>
    </div>
  );
}
