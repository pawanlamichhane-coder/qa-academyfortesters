"use client";

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <p className="text-6xl mb-4" role="img" aria-label="Warning">⚠️</p>
      <h1 className="text-3xl font-bold mb-2">Something went wrong</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        An unexpected error occurred. Reloading usually fixes it.
      </p>
      <button onClick={reset} className="px-6 py-3 rounded-lg text-white font-semibold transition hover:opacity-90"
        style={{ background: "var(--brand)" }}>
        Try again
      </button>
    </div>
  );
}
