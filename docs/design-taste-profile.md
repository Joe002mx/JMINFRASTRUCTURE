# JM Infrastructure Design Taste Profile

## 1. Overall mood

Serious, clean, premium, and trust-led. The reference uses restraint well: large confident type, quiet surfaces, structured sections, and real proof imagery. For JM Infrastructure, translate this into operational confidence rather than craft presentation.

## 2. Typography/spacing principles

Use a neutral sans such as Inter. Headings should be large, heavy, tight, and direct. Body copy should stay short, calm, and commercially grounded.

Spacing should feel deliberate: generous section padding, wide gutters, strong alignment, and clear separation between content blocks. Avoid dense marketing copy.

## 3. Colour/material principles

Carry over the off-white base, dark charcoal text, soft muted surfaces, thin borders, and restrained accent use. Shift the accent away from earthy trade tones toward a sober infrastructure palette: charcoal, warm white, muted steel, graphite, and one controlled signal colour.

Use shadows sparingly. Prefer borders, contrast, and surface layering over decorative effects.

## 4. Layout rhythm

Use a clear commercial sequence: business problem, system offer, search and credibility layer, enquiry flow, follow-up/reviews, proof/process, and final contact.

Alternate full-width bands with constrained content. Keep sections simple and readable, with one clear purpose per section.

## 5. Motion/interactions

Use restrained motion only where it improves comprehension: subtle section reveal, small hover state changes, sticky header transition, and clear mobile navigation.

Avoid heavy animation libraries, scroll hijacking, decorative motion, and effects that delay reading. Tailwind transitions and small CSS effects should be enough.

## 6. What should carry into JM Infrastructure

- Premium restraint: confident type, quiet spacing, and low-noise surfaces.
- One-page commercial flow with clear conversion points.
- Strong section discipline and short copy blocks.
- Sticky navigation with a clear enquiry CTA.
- Cards with thin borders, minimal shadows, and practical hierarchy.
- Proof structure translated into systems, presence, enquiry flow, reviews, and operational clarity.

## 7. What should not carry over

- Trade-specific before/after framing, copy, imagery, and project language.
- The exact hero image collage or reference layout.
- Long service descriptions.
- Portfolio-led presentation that makes JM feel like a website company.
- Image lightbox behaviour unless there is a real content need.
- Copy that frames the offer as generic web design.

## 8. Practical implementation notes for Next.js + TypeScript + Tailwind

Use Tailwind theme tokens for background, surface, text, muted text, border, dark, and accent. Build modular sections rather than one large page component.

Use semantic sections, one h1, clear h2s, metadata, canonical, Open Graph, sitemap, robots, and JSON-LD. Keep components focused: header, hero, section intro, system cards, proof/process blocks, CTA, and contact form.

The visual language should feel like structured infrastructure: grids, alignment, status/signal details, understated cards, and clear enquiry paths.
