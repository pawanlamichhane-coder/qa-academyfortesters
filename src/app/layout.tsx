import type { Metadata } from "next";
import Script from "next/script";
import { CourseJsonLd } from "@/components/JsonLd";
import { SiteNav, SiteFooter } from "@/components/SiteNav";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://qa-academy.vercel.app";
const ADSENSE_ID = process.env.NEXT_PUBLIC_ADSENSE_ID;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "QA Academy — Free QA Engineer Course | Learn Software Testing",
    template: "%s | QA Academy",
  },
  description: "Complete QA learning hub for beginners and testers: manual testing, automation with Selenium and Playwright, API testing, performance testing, CI/CD, security testing, and interview preparation — all in one free place.",
  keywords: [
    // High-volume head terms
    "QA Engineer course", "software testing tutorial", "test automation course", "free QA course",
    "learn software testing", "QA training online free", "software tester course",
    // Tool-specific (high intent searches)
    "Selenium tutorial for beginners", "Playwright tutorial", "Cypress testing tutorial",
    "Postman API testing tutorial", "REST Assured tutorial", "Appium mobile testing",
    "JMeter performance testing tutorial", "k6 load testing", "OWASP ZAP tutorial",
    // Career & interview (very high intent)
    "QA interview questions and answers", "manual testing interview questions",
    "automation testing interview questions", "API testing interview questions",
    "QA engineer roadmap", "how to become a QA engineer", "QA engineer skills",
    "SDET interview preparation", "QA portfolio projects",
    // Concept searches
    "manual testing vs automation testing", "severity vs priority",
    "test case writing examples", "bug report template", "test plan template",
    "SDLC STLC difference", "smoke testing vs sanity testing",
    "boundary value analysis example", "equivalence partitioning",
    "regression testing tutorial", "agile testing for QA",
    // Modern techniques (low competition, growing)
    "AI in software testing", "self-healing test automation", "visual regression testing",
    "contract testing Pact tutorial", "accessibility testing WCAG", "shift left testing",
    "test data management", "CI CD pipeline for QA", "GitHub Actions test automation",
  ],
  authors: [{ name: "QA Academy" }],
  creator: "QA Academy",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "QA Academy",
    title: "QA Academy — Free QA Engineer Course",
    description: "Master QA Engineering with 18 modules, 70+ lessons, and hands-on quizzes. Completely free, no login required.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "QA Academy" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "QA Academy — Free QA Engineer Course",
    description: "Master QA Engineering with 18 modules, 70+ lessons. Free.",
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  verification: {
    // google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
  alternates: { canonical: SITE_URL },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Serif+Display&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
        {/* Dark mode init */}
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try { const t = localStorage.getItem('theme'); if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) { document.documentElement.classList.add('dark'); } } catch (e) {}`,
          }}
        />
        {/* Google AdSense */}
        {ADSENSE_ID && (
          <Script
            id="adsense"
            strategy="afterInteractive"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_ID}`}
            crossOrigin="anonymous"
          />
        )}
        <CourseJsonLd />
      </head>
      <body className="min-h-screen antialiased">
        <a href="#main" className="skip-link">Skip to content</a>
        <SiteNav />
        <main id="main" className="min-h-[60vh]">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}



