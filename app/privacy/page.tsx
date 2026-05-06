import type { Metadata } from "next";
import Link from "next/link";

const contactEmail = "joe@jminfrastructure.co.uk";
const contactHref = `mailto:${contactEmail}`;

export const metadata: Metadata = {
  title: "Privacy Notice | JM Infrastructure",
  description:
    "Privacy notice for JM Infrastructure, covering email contact, basic service providers, retention, and data rights.",
  alternates: {
    canonical: "/privacy",
  },
};

const privacySections = [
  {
    title: "Who This Notice Covers",
    body: [
      "JM Infrastructure builds digital systems and online infrastructure for businesses.",
      "This notice explains how information is handled when someone contacts the business by email or uses the website.",
    ],
  },
  {
    title: "What Data May Be Processed",
    body: [
      "If you email JM Infrastructure, your name, email address, business details, message content, and any information you choose to send may be processed.",
      "The website may also create basic technical logs through hosting, domain, and CDN providers so the site can load securely and reliably.",
    ],
  },
  {
    title: "Why It Is Used",
    body: [
      "Contact details and message content are used to reply to enquiries, understand what was asked, and keep a practical record of business conversations.",
      "Technical logs are used to keep the website available, secure, and working properly.",
    ],
  },
  {
    title: "Lawful Basis",
    body: [
      "In simple terms, JM Infrastructure uses this information because it has a legitimate business reason to respond to enquiries and manage business records.",
      "Where a conversation leads toward paid work, some information may also be needed to take steps before entering into a contract.",
    ],
  },
  {
    title: "Sharing",
    body: [
      "Personal information is not sold. It may be handled by service providers that support the business, such as email, hosting, domain, CDN, and website infrastructure providers.",
      "Information may also be shared if required by law or needed to protect the business.",
    ],
  },
  {
    title: "Retention",
    body: [
      "Enquiry emails are kept only for as long as they are useful for replying, managing the relationship, keeping business records, or handling any follow-up.",
      "Old messages that are no longer needed are deleted during routine housekeeping.",
    ],
  },
  {
    title: "Your Rights",
    body: [
      "You can ask to access, correct, delete, restrict, or object to the use of your personal information. These rights depend on the context and may not apply in every case.",
      "To make a request, email joe@jminfrastructure.co.uk.",
    ],
  },
];

function PrivacyFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 text-sm text-[color:var(--muted)] sm:px-8 lg:px-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 JM Infrastructure</p>
          <a
            className="transition-colors hover:text-[color:var(--ink)]"
            href={contactHref}
          >
            {contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <header className="site-header border-b border-[color:var(--line)] bg-[color:var(--background)]">
        <div className="mx-auto flex min-h-16 w-full max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-10">
          <Link
            href="/"
            className="header-brand group flex flex-col"
            aria-label="JM Infrastructure home"
          >
            <span className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--ink)]">
              JM Infrastructure
            </span>
            <span className="hidden text-xs text-[color:var(--muted)] sm:block">
              Digital systems for businesses built on trust.
            </span>
          </Link>
          <Link
            className="text-sm font-medium text-[color:var(--muted)] transition-colors hover:text-[color:var(--ink)]"
            href="/"
          >
            Home
          </Link>
        </div>
      </header>

      <main>
        <section className="section-shell">
          <div className="mx-auto w-full max-w-4xl px-5 sm:px-8 lg:px-10">
            <p className="eyebrow">Privacy</p>
            <h1 className="mt-5 text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-6xl">
              Privacy Notice
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-[color:var(--muted)] sm:text-lg">
              A plain-English summary of how JM Infrastructure handles personal
              information when someone gets in touch.
            </p>

            <div className="mt-12 grid gap-5">
              {privacySections.map((section) => (
                <section
                  key={section.title}
                  className="quiet-card min-h-0"
                  aria-labelledby={`${section.title
                    .toLowerCase()
                    .replaceAll(" ", "-")}-heading`}
                >
                  <h2
                    id={`${section.title
                      .toLowerCase()
                      .replaceAll(" ", "-")}-heading`}
                    className="text-xl font-semibold text-[color:var(--ink)]"
                  >
                    {section.title}
                  </h2>
                  <div className="mt-4 grid gap-3 text-sm leading-6 text-[color:var(--muted)] sm:text-base sm:leading-7">
                    {section.body.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <div className="mt-10 border-t border-[color:var(--line)] pt-6 text-sm leading-6 text-[color:var(--muted)]">
              <p>
                Contact:{" "}
                <a
                  className="font-semibold text-[color:var(--ink)] underline decoration-[color:var(--signal)]/45 transition-colors hover:text-[color:var(--signal)]"
                  href={contactHref}
                >
                  {contactEmail}
                </a>
              </p>
              <p className="mt-2">Last updated: 6 May 2026.</p>
            </div>
          </div>
        </section>
      </main>

      <PrivacyFooter />
    </>
  );
}
