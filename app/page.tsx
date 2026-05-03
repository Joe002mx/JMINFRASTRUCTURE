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
    detail: "The clear base: what the business does, why it is trusted, and what happens next.",
  },
  {
    label: "Search presence",
    detail: "Structured signals that make the business easier to find and assess.",
  },
  {
    label: "Credibility",
    detail: "Reviews, proof, and trust markers presented in the right places.",
  },
  {
    label: "Enquiry flow",
    detail: "A direct route from interest to a useful first conversation.",
  },
  {
    label: "Follow-up",
    detail: "Response, review follow-up, and next-step routines kept visible.",
  },
];

const conceptBuilds = [
  {
    title: "Presence standard",
    label: "Concept build",
    copy: "A sharper first impression for a business already trusted offline.",
  },
  {
    title: "Credibility route",
    label: "Concept build",
    copy: "A cleaner path from search result to proof to enquiry.",
  },
  {
    title: "Review layer",
    label: "Concept build",
    copy: "A practical way to make reputation visible without client claims.",
  },
];

const fitStatements = [
  "Real quality already exists.",
  "People check before they enquire.",
  "The system needs to catch up.",
];

const processSteps = [
  {
    step: "01",
    title: "Google presence",
    copy: "Make the search result clearer: profile, services, reviews, photos, and contact routes.",
  },
  {
    step: "02",
    title: "Website structure",
    copy: "Build the page people land on when they need to decide whether the business feels credible.",
  },
  {
    step: "03",
    title: "Enquiry flow",
    copy: "Make the next step obvious, direct, and easy to take.",
  },
  {
    step: "04",
    title: "Follow-up & reviews",
    copy: "Create a simple routine after the job or enquiry so trust keeps compounding.",
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
            JM Infrastructure builds the systems behind search presence,
            credibility, enquiries, follow-up, and reviews.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href={contactHref}>
              Start a conversation
            </a>
            <a className="button-secondary" href="#system">
              See the system
            </a>
          </div>
        </Reveal>

        <Reveal className="system-panel" aria-label="Online infrastructure system map">
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
            One clear route from being found to being trusted to being contacted.
          </div>
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
            title="The online infrastructure behind better enquiries."
            copy="Website, search presence, credibility signals, enquiry flow, follow-up, and review visibility working together."
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
          <SectionIntro
            eyebrow="Example systems"
            title="Concept builds that show the standard."
            copy="Demo work showing how structure, credibility, and enquiry flow can change a first impression."
          />
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {conceptBuilds.map((build) => (
            <Reveal key={build.title} className="quiet-card concept-card bg-[color:var(--background)]">
              <div className="concept-frame" aria-hidden="true">
                <div className="concept-bar" />
                <div className="concept-line concept-line-strong" />
                <div className="concept-line" />
                <div className="concept-grid">
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <span className="mt-5 inline-flex border border-[color:var(--line)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[color:var(--muted)]">
                {build.label}
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-[color:var(--ink)]">
                {build.title}
              </h3>
              <p className="mt-4 text-sm leading-6 text-[color:var(--muted)]">
                {build.copy}
              </p>
            </Reveal>
          ))}
        </div>
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
            title="The route from being found to being trusted."
            copy="The work connects Google presence, website structure, enquiry flow, and review follow-up into one clear system."
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
            <p className="mt-5 max-w-2xl text-base leading-7 text-[color:var(--muted)] sm:text-lg">
              Start with a clear conversation about where the online system is weakest.
            </p>
          </div>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a className="button-primary" href={contactHref}>
              Email JM Infrastructure
            </a>
            <a className="button-secondary" href={`mailto:${contactEmail}`}>
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
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-3 px-5 text-sm text-[color:var(--muted)] sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-10">
        <p>JM Infrastructure</p>
        <p>Digital systems and online infrastructure for businesses built on trust.</p>
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
        <ProcessSteps />
        <AudienceFit />
        <ContactCTA />
      </main>
      <SiteFooter />
    </>
  );
}
