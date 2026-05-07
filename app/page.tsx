import Image from "next/image";
import Link from "next/link";
import { ConceptBuildsShowcase } from "./components/concept-builds";
import { Reveal } from "./components/reveal";
import { SiteHeader } from "./components/site-header";

const contactEmail = "joe@jminfrastructure.co.uk";
const contactHref = `mailto:${contactEmail}`;

const diagnosticSignals = [
  "Search results look thin or inconsistent.",
  "The first impression undersells the real business.",
  "Proof is scattered across pages, profiles, and reviews.",
  "Enquiries arrive with weak context or low intent.",
  "Follow-up and review visibility rely on memory.",
];

const infrastructureBlocks = [
  {
    label: "Website",
    detail: "Where people see what you do, why you’re trusted, and how to enquire.",
  },
  {
    label: "Search presence",
    detail: "Your Google profile, service information, reviews, and contact routes structured so the business is easier to understand across search and AI-assisted results.",
  },
  {
    label: "Credibility",
    detail: "Proof, reviews, photos, and trust markers brought into the places people actually check.",
  },
  {
    label: "Enquiry flow",
    detail: "A direct route from interest to a useful first conversation.",
  },
  {
    label: "Follow-up",
    detail: "A simple routine after completed work that helps good work become visible proof.",
  },
];

const fitStatements = [
  "Real quality already exists.",
  "People check before they enquire.",
  "The online setup needs to catch up.",
];

const processSteps = [
  {
    step: "01",
    title: "Google presence",
    copy: "Structure the information search engines and AI-assisted results rely on: profile, services, reviews, photos, and contact routes.",
  },
  {
    step: "02",
    title: "Website structure",
    copy: "Build the page people land on when they need to decide whether the business is worth contacting.",
  },
  {
    step: "03",
    title: "Enquiry flow",
    copy: "The site is structured so customer interest becomes a direct message, not a task buried in a platform.",
  },
  {
    step: "04",
    title: "Follow-up & reviews",
    copy: "Create a simple routine after completed work so more proof becomes visible where future customers check.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://jminfrastructure.co.uk/#organization",
      name: "JM Infrastructure",
      url: "https://jminfrastructure.co.uk",
      email: contactEmail,
      description:
        "JM Infrastructure builds digital systems and online infrastructure for businesses across Glasgow and Central Scotland.",
      areaServed: ["Glasgow", "Central Scotland"],
    },
    {
      "@type": "WebSite",
      "@id": "https://jminfrastructure.co.uk/#website",
      name: "JM Infrastructure",
      url: "https://jminfrastructure.co.uk",
      publisher: {
        "@id": "https://jminfrastructure.co.uk/#organization",
      },
      description:
        "Digital systems for search presence, credibility, enquiry flow, follow-up, and reviews.",
    },
  ],
};

function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
      }}
    />
  );
}

function HeroSection() {
  return (
    <section className="hero-shell">
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
        <Reveal className="flex flex-col justify-center">
          <p className="eyebrow">Glasgow and Central Scotland</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[0.98] text-[color:var(--ink)] sm:text-6xl sm:leading-[0.96] lg:text-7xl">
            Your business should look as strong online as it is in reality.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[color:var(--muted)] sm:text-xl">
            Your website, Google profile, reviews, and customer follow-up
            working as one complete system.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href="#contact">
              Start a conversation
            </a>
            <a
              className="button-secondary"
              href="#reality-gap"
              data-desktop-scroll-offset="72"
            >
              See what could work better
            </a>
          </div>
        </Reveal>

        <Reveal
          className="system-panel relative !overflow-visible"
          aria-label="Online infrastructure system map"
        >
          <div className="overflow-hidden rounded-[inherit]">
            <div className="flex items-center justify-between border-b border-[color:var(--line)] px-5 py-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[color:var(--muted)]">
                Presence layer
              </span>
              <span className="rounded-full border border-[color:var(--line)] px-3 py-1 text-xs font-medium text-[color:var(--signal)]">
                Online system
              </span>
            </div>
            <div className="grid gap-3 p-5">
              {["Search presence", "First impression", "Credibility", "Enquiry flow", "Follow-up", "Reviews"].map(
                (item, index) => (
                  <div
                    key={item}
                    className="panel-row grid grid-cols-[auto_1fr_auto] items-center gap-4 rounded-md border border-[color:var(--line)] bg-[color:var(--surface)] p-4"
                  >
                    <span className="status-dot" aria-hidden="true" />
                    <span className="text-sm font-semibold text-[color:var(--ink)]">
                      {item}
                    </span>
                    <span className="text-xs tabular-nums text-[color:var(--muted)]">
                      0{index + 1}
                    </span>
                  </div>
                ),
              )}
            </div>
            <div className="border-t border-[color:var(--line)] bg-[color:var(--ink)] px-5 py-4 text-sm text-[color:var(--dark-muted)]">
              <span className="block lg:hidden">
                Reviews and follow-up feed back into the next customer’s first impression.
              </span>
              <span className="hidden lg:block">
                One clear route from being found to being trusted to being contacted.
              </span>
            </div>
          </div>
          <svg
            aria-hidden="true"
            focusable="false"
            className="pointer-events-none absolute right-[-1.35rem] top-[6.2rem] hidden h-[21.5rem] w-6 text-[color:var(--ink)] opacity-55 lg:block"
            viewBox="0 0 24 100"
            preserveAspectRatio="none"
          >
            <defs>
              <marker
                id="presence-feedback-arrow"
                markerHeight="6"
                markerWidth="6"
                orient="auto"
                refX="5"
                refY="3"
                viewBox="0 0 6 6"
              >
                <path d="M0 0 L6 3 L0 6 Z" fill="currentColor" />
              </marker>
            </defs>
            <path
              d="M4 98 H17 V2 H4"
              fill="none"
              markerEnd="url(#presence-feedback-arrow)"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.25"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </Reveal>
      </div>
    </section>
  );
}

function SectionIntro({
  eyebrow,
  title,
  copy,
  className = "",
}: {
  eyebrow: string;
  title: string;
  copy: string;
  className?: string;
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
        {copy}
      </p>
    </div>
  );
}

function RealityGap() {
  return (
    <section className="section-shell border-t border-[color:var(--line)]" id="reality-gap">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-10">
        <Reveal className="lg:order-2">
          <SectionIntro
            eyebrow="Reality gap"
            title="Good businesses lose trust before the first conversation."
            copy="Thin search presence, unclear proof, and missed follow-up make strong businesses look smaller than they are."
          />
        </Reveal>
        <Reveal className="grid gap-2 lg:order-1">
          {diagnosticSignals.map((signal) => (
            <div
              key={signal}
              className="panel-row flex items-start gap-4 border-b border-[color:var(--line)] px-3 py-4"
            >
              <span className="mt-2 h-2 w-2 flex-none rounded-full bg-[color:var(--signal)]" />
              <p className="text-lg font-medium leading-7 text-[color:var(--ink)]">
                {signal}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function InfrastructureLayer() {
  return (
    <section className="section-shell bg-[color:var(--surface)]" id="system">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionIntro
            eyebrow="Infrastructure layer"
            title="The online structure behind a stronger first impression."
            copy="Your website gives people somewhere credible to land, your Google profile helps them understand the business locally, and follow-up turns completed work into visible proof."
            className="mx-auto text-center"
          />
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {infrastructureBlocks.map((block, index) => (
            <Reveal
              key={block.label}
              className={`system-card ${
                index < 2 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--signal)]">
                Layer 0{index + 1}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-[color:var(--ink)]">
                {block.label}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                {block.detail}
              </p>
              {index === 0 ? (
                <div className="system-route" aria-hidden="true">
                  <span>Found</span>
                  <span>Understood</span>
                  <span>Contacted</span>
                </div>
              ) : null}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ConceptBuilds() {
  return (
    <section className="section-shell bg-[color:var(--surface)]" id="examples">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="examples-divider" aria-hidden="true" />
        </Reveal>
        <Reveal>
          <SectionIntro
            eyebrow="Example systems"
            title="Concept builds."
            copy="Three example directions showing stronger structure, clearer proof, and a cleaner route to contact."
          />
        </Reveal>
        <Reveal>
          <ConceptBuildsShowcase />
        </Reveal>
      </div>
    </section>
  );
}

function FounderSection() {
  return (
    <section className="section-shell" id="founder">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 sm:px-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-center lg:px-10">
        <Reveal>
          <div className="founder-frame">
            <div className="founder-image-wrap">
              <Image
                src="/images/joe-founder.jpg"
                alt="Joe from JM Infrastructure"
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Who you&apos;re dealing with</p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight text-[color:var(--ink)] sm:text-5xl">
              <span className="block">Direct work,</span>
              <span className="block">not an agency handoff.</span>
            </h2>
            <div className="mt-6 grid gap-4 text-base leading-7 text-[color:var(--muted)] sm:text-lg">
              <p>
                I&apos;m Joe, founder of JM Infrastructure Consultancy, based in
                Glasgow. I studied mathematics at the University of Glasgow,
                and that shapes how I approach systems, clarity, and structure.
                I build practical online infrastructure for
                businesses that are already doing good work, but are not being
                represented properly when people look them up.
              </p>
              <p>
                This is not a setup where your business gets passed between
                sales, strategy, design, and delivery. You deal with me directly.
                I look at how your business appears online now, identify the
                obvious gaps, and build the practical layer that helps people
                understand, trust, and contact you.
              </p>
            </div>

            <div className="founder-callout mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-[color:var(--signal)]">
                How it starts
              </h3>
              <p className="mt-4 text-base leading-7 text-[color:var(--ink)]">
                I look at the first impression someone gets before they speak to
                you: your website, Google profile, reviews, proof, and enquiry
                route. Then I show what is already working, what is weakening
                trust, and what I would improve first.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ProcessSteps() {
  return (
    <section className="section-shell" id="process">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <SectionIntro
            eyebrow="Operating path"
            title="What the build covers"
            copy="The work connects Google profile clarity, website structure, enquiry flow, and review follow-up into one system that strengthens trust over time."
            className="mx-auto text-center"
          />
        </Reveal>
        <Reveal>
          <ol className="operating-path mt-12">
            {processSteps.map((item) => (
              <li key={item.step} className="path-step">
                <span className="path-node" aria-hidden="true" />
                <span className="text-sm font-semibold text-[color:var(--signal)]">
                  {item.step}
                </span>
                <h3 className="mt-5 text-xl font-semibold text-[color:var(--ink)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[color:var(--muted)]">
                  {item.copy}
                </p>
              </li>
            ))}
          </ol>
          <div
            className="mx-auto mt-10 hidden w-full max-w-3xl border-t border-[color:var(--line-strong)] md:block"
            aria-hidden="true"
          />
          <div className="mx-auto mt-9 grid max-w-3xl gap-4 text-base font-medium leading-7 text-[color:var(--ink)] sm:mt-11 sm:text-lg md:mt-7 md:max-w-4xl">
            <p>
              The work is scoped around the parts that shape online
              representation: how the business appears in search, where people
              land, how much confidence it gives them, and how easy it is to
              make contact.
            </p>
            <p className="xl:whitespace-nowrap">
              Each part is built to reinforce the others. This is a focused
              piece of work, not a drawn-out agency process.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AudienceFit() {
  return (
    <section className="fit-section bg-[color:var(--ink)] py-16 text-[color:var(--background)] sm:py-20">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[color:var(--dark-muted)]">
              Trust layer
            </p>
            <h2 className="mt-4 max-w-4xl text-3xl font-semibold leading-tight sm:text-5xl">
              Built for businesses where trust has to be visible before the first conversation.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--dark-muted)] sm:text-lg">
              When the real operation is already strong, the digital infrastructure should make that obvious.
            </p>
          </div>
          <div className="fit-statement-group">
            {fitStatements.map((statement) => (
              <div key={statement} className="fit-statement">
                {statement}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="section-shell" id="contact">
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal className="contact-panel">
          <div>
            <p className="eyebrow">Contact</p>
            <h2 className="mt-4 max-w-4xl text-4xl font-semibold leading-tight text-[color:var(--ink)] sm:text-6xl">
              Fix the gap between real quality and online representation.
            </h2>
          </div>
          <div className="mt-10">
            <a className="contact-email" href={contactHref}>
              {contactEmail}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="border-t border-[color:var(--line)] py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 text-sm text-[color:var(--muted)] sm:px-8 lg:px-10">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 JM Infrastructure</p>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            <Link
              className="transition-colors hover:text-[color:var(--ink)]"
              href="/privacy"
            >
              Privacy
            </Link>
            <a
              className="transition-colors hover:text-[color:var(--ink)]"
              href={contactHref}
            >
              {contactEmail}
            </a>
          </div>
        </div>
        <p>Based in Glasgow. Digital systems and online infrastructure for trades and local service businesses across Central Scotland.</p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <SiteHeader />
      <main>
        <HeroSection />
        <RealityGap />
        <InfrastructureLayer />
        <ConceptBuilds />
        <FounderSection />
        <ProcessSteps />
        <AudienceFit />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
