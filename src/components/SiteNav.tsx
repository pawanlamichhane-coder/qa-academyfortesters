import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/tutorials", label: "Tutorials" },
  { href: "/learning-materials", label: "Learning Materials" },
  { href: "/career-roadmap", label: "Career Roadmap" },
  { href: "/roadmap", label: "Roadmap" },
  { href: "/resources", label: "Resources" },
  { href: "/cheatsheets", label: "Cheatsheets" },
  { href: "/glossary", label: "Glossary" },
];

export function SiteNav() {
  return (
    <nav aria-label="Main navigation" className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 85%, transparent)" }}>
      <div className="max-w-7xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg" style={{ color: "var(--brand)" }}>
          <span aria-hidden="true" className="text-2xl">🧪</span> QA Academy
        </Link>
        <div className="flex items-center gap-1 sm:gap-2 text-sm">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="hidden sm:inline px-3 py-1.5 rounded-md transition hover:bg-black/5 dark:hover:bg-white/10"
              style={{ color: "var(--text-muted)" }}>
              {l.label}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t py-10 mt-16" style={{ borderColor: "var(--border)", color: "var(--text-muted)" }}>
      <div className="max-w-7xl mx-auto px-4 text-center text-sm">
        <p>Built for QA Engineers worldwide. 100% free, no login required.</p>
        <nav aria-label="Footer" className="flex justify-center gap-6 mt-3">
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/roadmap" className="hover:underline">Roadmap</Link>
          <Link href="/glossary" className="hover:underline">Glossary</Link>
          <Link href="/resources" className="hover:underline">Resources</Link>
        </nav>
        <p className="mt-4 text-xs opacity-70">© {new Date().getFullYear()} QA Academy · Learn software testing, test automation, and QA engineering.</p>
      </div>
    </footer>
  );
}
