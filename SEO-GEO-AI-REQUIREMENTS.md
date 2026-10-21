# Okonski Performance — SEO, GEO & AI Discoverability Requirements
Version: 1.0 | Status: APPROVED REQUIREMENTS / NOT YET IMPLEMENTED
Source: CMO addendum approved by owner on 2026-10-20.
Scope: Technical appendix to the approved Okonski Performance website specification v1.0.

## Non-negotiable scope
- Preserve the eight approved One Page sections, their order, anchors, approved Hebrew copy and existing OP visual identity.
- No extra service pages or invented qualifications, address, reviews, ratings, operating hours or certifications.
- Main conversion before opening: Performance List; WhatsApp is secondary. Do not automatically switch to booking on a calendar date.
- Milestones: content 2026-11-08; close-circle practice 2026-12-27; paid pilot target 2027-01-24, subject to business approval.
- SEO/GEO changes must not alter approved visible copy.

## P0 — required before public launch
### Crawlability and rendering
- Public site must be crawlable and indexable: check production HTTP responses, robots directives, no accidental `noindex` or authentication barriers.
- Server-rendered or statically rendered semantic HTML must contain meaningful approved copy, not image-only text.
- Validate exactly one meaningful H1 on homepage, logical H2/H3 nesting, HTML lang=`he-IL` (or valid `he` language tag), RTL.
- Generate valid `/robots.txt` and `/sitemap.xml` pointing to the canonical public domain; do not hard-code an unverified domain.
- Ensure OAI-SearchBot and other relevant search crawlers are not accidentally blocked. GPTBot is a distinct crawler; make an explicit policy decision separately. No promise of AI citation or ranking.

### Metadata and sharing
- Proposed home title: `Okonski Performance | טיפול ספורטיבי והתאוששות באזור השרון`
- Proposed home description: `Okonski Performance מציעה טיפול גופני אישי לספורטאים, למתאמנים ולאנשי קריירה. כאב ופציעה, התאוששות ושיפור יכולת. הצטרפו לרשימת העדכונים.`
- Set canonical URL after official domain is confirmed; include relevant Open Graph and Twitter/X cards with real branded assets and valid absolute URLs.
- Ensure descriptive asset filenames and context-appropriate image alt text; decorative images should have empty alt.

### Structured data
- Add valid JSON-LD `Organization`, `WebSite`, and `Person` using verified factual attributes only.
- Link official social profiles with `sameAs` only after URLs are verified.
- Do not add `LocalBusiness` until the operating location/service-area and business facts are verified and pilot is approved.
- Validate syntax and suitability with Google Rich Results Test and Schema Markup Validator. Schema does not guarantee rich results.

### Mobile, accessibility and performance
- Responsive mobile/tablet/desktop layout, keyboard navigation, clear form labels, RTL, color contrast, appropriate focus indicators.
- Optimize Core Web Vitals, font loading, images and page speed; measure production mobile performance rather than relying only on build success.
- FAQ should use accessible interactive disclosure UI while answers remain readable to crawlers.

### Analytics and registration
- Prepare Google Search Console and Bing Webmaster Tools verification and sitemap submission (requires owner/account access).
- GA4 and interaction events (Performance List submissions, WhatsApp clicks, primary CTAs) only with applicable privacy/consent handling.
- Performance List must require first name, email, marketing consent; phone optional. Persist CRM lead with source `Website / Performance List`, registration timestamp and consent evidence. Display success only after confirmed write.
- Email confirmation is dependent on approved email delivery integration. Never claim it is sent before integration works.

### Legal and trust
- Privacy policy, consent copy, accessibility statement, cookie handling as legally applicable; legal text requires approval.
- Publish only verified experience, qualifications, therapy modalities, service location and home/office availability.

## P1 — when paid pilot is explicitly approved
- Change primary CTA to initial contact via WhatsApp only after explicit business authorization.
- Update metadata and service availability to match actual live offer.
- Create/complete eligible Google Business Profile with real verified category, photos, service area, hours and website; comply with address visibility rules for home-based or service-area businesses.
- Add truthful `LocalBusiness` (or relevant subtype) schema only after verification. No fake location pages.

## P2 — after real operating data
- Keyword research and content opportunity analysis; evaluate separate service pages based on evidence.
- Build professional authority with genuinely useful content and relevant third-party citations/links.
- No mass-generated AI doorway pages or special paid GEO system at this stage.

## Release acceptance checks (record actual evidence)
- [ ] Production page crawlable and indexable; HTTP status, robots, meta robots checked
- [ ] Valid robots.txt and sitemap.xml, correct production canonical URLs
- [ ] Correct title, description, OG, Twitter cards and social preview
- [ ] One H1, semantic heading hierarchy, RTL, language and accessible FAQ
- [ ] Server-delivered HTML includes all eight approved sections and approved copy
- [ ] JSON-LD passes validators and contains no invented business attributes
- [ ] Mobile Lighthouse/Core Web Vitals measured and critical problems addressed
- [ ] Performance List writes to CRM with consent; failure and success states tested
- [ ] All anchor links and WhatsApp links tested on desktop and mobile
- [ ] Search Console/Bing connection and sitemap submission documented (when access provided)
- [ ] AI/search crawler policies inspected and tested where possible
- [ ] Privacy, accessibility, analytics and cookie behavior reviewed
- [ ] Owner reviews actual deployed preview before production publication

## Open verifications — do not invent
- Official production domain, WhatsApp number, social profile URLs
- Exact professional credentials, completed vs in-progress training, permitted modalities
- Clinic location and home/office visit coverage
- Privacy, accessibility and consent legal text
- Real photo or approved typography-only branded fallback
- Search Console, Bing and analytics account access

This document records requirements only. Implementation, validation and publication are separate subsequent steps.
