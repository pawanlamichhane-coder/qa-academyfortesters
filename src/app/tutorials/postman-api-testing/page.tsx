import Link from "next/link";

const steps = [
  "Open Postman and create a new request.",
  "Enter the API endpoint and choose the correct HTTP method.",
  "Add headers, body, or authentication if required.",
  "Send the request and inspect the response status, body, and headers.",
  "Add assertions to verify the response is correct.",
];

export default function PostmanApiTestingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <Link href="/tutorials" className="text-sm font-semibold" style={{ color: "var(--brand)" }}>← Back to tutorials</Link>
      <h1 className="text-3xl font-bold mt-4 mb-3">API Testing with Postman</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        API testing is a core QA skill. It helps you verify that backend services behave correctly, return the right data, and handle errors properly.
      </p>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">A practical workflow</h2>
        <ol className="list-decimal ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          {steps.map((step) => <li key={step}>{step}</li>)}
        </ol>
      </section>

      <section className="rounded-2xl border p-6 mb-8" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">What to verify</h2>
        <ul className="list-disc ml-6 space-y-2" style={{ color: "var(--text-muted)" }}>
          <li>Status code such as 200, 201, 400, 404, or 500.</li>
          <li>Response time and reliability.</li>
          <li>Response body structure and values.</li>
          <li>Authentication and permission handling.</li>
        </ul>
      </section>

      <section className="rounded-2xl border p-6" style={{ background: "var(--surface)", borderColor: "var(--border)" }}>
        <h2 className="text-xl font-bold mb-3">Example assertion</h2>
        <pre className="rounded-xl p-4 text-sm overflow-x-auto" style={{ background: "var(--bg-alt)", color: "var(--text)" }}>{`pm.test("Status code is 200", function () {
  pm.response.to.have.status(200);
});`}</pre>
      </section>
    </div>
  );
}
