import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-xl mx-auto px-4 py-24 text-center">
      <p className="text-6xl mb-4" role="img" aria-label="Magnifying glass">🔍</p>
      <h1 className="text-3xl font-bold mb-2">Page not found</h1>
      <p className="mb-8" style={{ color: "var(--text-muted)" }}>
        The page you&apos;re looking for doesn&apos;t exist or was moved. Try the curriculum instead.
      </p>
      <Link href="/" className="inline-block px-6 py-3 rounded-lg text-white font-semibold transition hover:opacity-90"
        style={{ background: "var(--brand)" }}>
        Browse all modules
      </Link>
    </div>
  );
}
