# JM Infrastructure First Website Build Plan

## 1. Site Concept

Build a restrained, systems-focused homepage that positions JM Infrastructure as the layer between a strong real-world business and a credible online presence.

The site should feel like structured commercial infrastructure: clear hierarchy, sober visuals, practical proof points, and sharp copy. It should not look like an agency portfolio, SaaS landing page, or AI product page.

## 2. Homepage Structure

| Section | Purpose | Main heading | Supporting line | Visual idea |
|---|---|---|---|---|
| Header | Establish brand and navigation | JM Infrastructure | Digital systems for businesses built on trust. | Sticky charcoal/off-white nav with restrained CTA |
| Hero | State the core positioning | Your business should look as strong online as it is in reality. | JM Infrastructure builds the systems behind search presence, credibility, enquiries, follow-up, and reviews. | Split layout with structured system grid, not portfolio imagery |
| Reality Gap | Explain the commercial problem | Good businesses lose trust before the first conversation. | Weak search presence, unclear first impressions, and missed follow-up make strong businesses look smaller than they are. | Sparse diagnostic list with status-style markers |
| Infrastructure Layer | Define the offer | The online infrastructure behind better enquiries. | Website, search presence, credibility signals, enquiry flow, follow-up, and review visibility working as one system. | Modular system map with connected blocks |
| System Areas | Show what JM builds | Search. Credibility. Enquiries. Follow-up. Reviews. | Each part supports the next, so the business is easier to find, trust, and contact. | Five compact cards with short labels |
| Concept Builds / Example Systems | Show credible demo work honestly | Example systems, not client case studies. | Concept builds show how structure, first impression, credibility, and enquiry flow can improve. | Compact example cards labelled clearly as concept/demo work |
| Process | Make delivery feel practical | A clear build path, not a loose redesign. | Audit the gap, structure the system, build the presence, improve the flow. | Numbered horizontal/stacked process |
| Fit | Clarify audience without industries | Built for owner-led and reputation-led businesses. | For businesses that rely on trust, local visibility, and clear communication. | Quiet dark band with short qualification statements |
| Final CTA | Convert without hype | Fix the gap between real quality and online representation. | Start with a clear conversation about where the system is weak. | Minimal email-led contact block |

## 3. Copy System

Primary h1:
`Your business should look as strong online as it is in reality.`

Core subheading:
`JM Infrastructure builds the systems behind search presence, credibility, enquiries, follow-up, and reviews.`

Key section headings:
- `Good businesses lose trust before the first conversation.`
- `The online infrastructure behind better enquiries.`
- `Search. Credibility. Enquiries. Follow-up. Reviews.`
- `Example systems, not client case studies.`
- `A clear build path, not a loose redesign.`
- `Built for owner-led and reputation-led businesses.`
- `Fix the gap between real quality and online representation.`

CTA labels:
- `Start a conversation`
- `See the system`
- `Email JM Infrastructure`

Avoid:
`digital transformation`, `unlock your potential`, `scale your brand`, `bespoke solutions`, `take your business to the next level`, specific industry examples, and any wording that presents concept builds as client results.

## 4. Visual System

Typography:
Use existing `next/font` setup with Geist or switch cleanly to Inter only if already supported without extra production dependency. Headings should be heavy, tight, and direct; body copy should be compact and readable.

Spacing:
Use generous section padding, wide gutters, and strong alignment. Keep each section focused on one idea.

Colour/material:
Use warm off-white background, charcoal text, muted steel/graphite surfaces, thin borders, and one restrained signal colour. Prefer borders and contrast over shadow-heavy cards.

Layout:
Use full-width bands with constrained inner content. Combine editorial text blocks with structured grids, diagnostic lists, system cards, and clearly labelled concept examples.

Surfaces/cards/buttons:
Cards should be low-radius, thin-bordered, and content-led. Buttons should be rectangular or softly rounded, high-contrast, and direct.

Motion:
Use simple CSS/Tailwind transitions only: hover colour, border, slight translate, sticky header polish. No scroll hijacking, no heavy animation libraries, no theatrical reveal system.

## 5. Component Plan

- `SiteHeader`: brand, nav anchors, primary CTA, mobile menu if needed.
- `HeroSection`: h1, subheading, CTA row, structured system visual.
- `SectionIntro`: reusable heading/supporting line pattern.
- `DiagnosticList`: reality-gap signals.
- `SystemMap`: connected offer blocks for website/search/credibility/enquiry/follow-up/review visibility.
- `SystemCardGrid`: compact cards for core system areas.
- `ConceptBuilds`: demo/example system cards clearly labelled as concept work, not client case studies.
- `ProcessSteps`: four-step delivery path.
- `AudienceFit`: restrained dark-band qualification section.
- `ContactCTA`: email-led final CTA.
- `JsonLd`: proper hidden `<script type="application/ld+json">` tag with safely stringified structured data.

## 6. Technical Plan

Likely edited files:
- `app/page.tsx`: replace starter content with semantic homepage sections and local component functions.
- `app/layout.tsx`: update metadata, canonical, Open Graph, language/body classes, and site title.
- `app/globals.css`: replace starter theme with JM tokens, base styles, focus states, and smooth anchor behavior if needed.
- `app/robots.ts`: generate robots metadata route allowing crawl and pointing to sitemap.
- `app/sitemap.ts`: generate single homepage sitemap entry for `https://jminfrastructure.co.uk`.
- `docs/site-build-plan.md`: save this revised plan for reference before implementation.

Keep dependencies unchanged. Use Server Components by default. Add client-side code only if the mobile menu requires it; otherwise prefer simple anchor navigation.

## 7. SEO Plan

Title:
`JM Infrastructure | Digital Systems for Stronger Business Presence`

Meta description:
`JM Infrastructure builds digital systems for businesses across Glasgow and Central Scotland: search presence, credibility, enquiry flow, follow-up, and reviews.`

Canonical:
`https://jminfrastructure.co.uk`

Open Graph:
Use the same title/description, type `website`, URL `https://jminfrastructure.co.uk`, and site name `JM Infrastructure`. Use generated or static OG image only after visual direction is approved.

H1/H2:
One h1 in the hero. Each major section uses one h2 matching the planned section headings.

JSON-LD:
Use `Organization` and `WebSite` structured data with name, URL, description, and `areaServed` for Glasgow and Central Scotland. Render as a proper `<script type="application/ld+json">` tag and safely stringify with `JSON.stringify(jsonLd).replace(/</g, '\\u003c')`. Do not render JSON-LD visibly as page text.

Robots/sitemap:
Use `app/robots.ts` and `app/sitemap.ts` per the Next 16 App Router metadata file conventions.

## 8. Build Risks / Decisions

Approved defaults from planning:
- Canonical domain: `https://jminfrastructure.co.uk`.
- Contact flow: email-led CTA, no form backend in v1.
- Dependencies: no new production dependencies.
- Motion: Tailwind/CSS transitions only.
- Concept builds: include a clearly labelled demo/example section, never framed as client case studies.
- Review language: use `review follow-up`, `review visibility`, or plain `reviews`; avoid `review generation`.

Implementation approval still needed before code changes:
- Confirm the email address or contact destination for the CTA.
- Confirm whether the first build should include a generated/static OG image or metadata-only OG fields.
- Approve this plan as the first-version build spec.
