import Script from "next/script";

export function CourseJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "QA Engineer Complete Course",
    "description": "Free comprehensive QA Engineering course covering manual testing, automation with Selenium, Playwright, Cypress, API testing, CI/CD, performance testing, and interview preparation.",
    "provider": { "@type": "Organization", "name": "QA Academy", "url": "https://qa-academy.vercel.app" },
    "educationalLevel": "Beginner to Advanced",
    "isAccessibleForFree": true,
    "numberOfCredits": 18,
    "hasCourseInstance": { "@type": "CourseInstance", "courseMode": "online", "courseWorkload": "PT60H" },
    "about": ["Software Testing", "QA Engineering", "Test Automation", "Selenium", "Playwright", "API Testing"],
    "inLanguage": "en",
  };
  return <Script id="course-json-ld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; url: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
  return <Script id="breadcrumb-json-ld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function FaqJsonLd({ faqs }: { faqs: { q: string; a: string }[] }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a },
    })),
  };
  return <Script id="faq-json-ld" type="application/ld+json" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
