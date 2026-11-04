# LISAN.PK — DAY 7/30: Publishing and Technical Implementation Instructions

**Scheduled plan date:** Monday, 9 November 2026  
**Preparation and fact check:** 5 November 2026  
**Scope:** Day 7 clusters B:T21 (translation charges in Pakistan) + A:T02 (Urdu → Arabic service page), plus Day 7 week-one measurement/accuracy checkpoint.  
**Important:** This is an **implementation specification**, not a request to generate content.

## 0. Content ownership — non-negotiable

**Use these attached Markdown files as the approved public-facing source of truth:**

1. `LISAN_Day07_Translation_Charges_in_Pakistan_PRICING.md`
2. `LISAN_Day07_Urdu_to_Arabic_Translation_Service_NEW.md`

Do **NOT** generate, rewrite, paraphrase, shorten, extend, "SEO improve", or invent content for either page. Copy the approved body verbatim, preserving paragraph structure, semantic headings, bullet lists, tables, links, caveats and pricing. Render into the project's existing design system. If text conflicts with a live legal/business fact, **flag the precise issue for editorial review** instead of changing prose unilaterally.

Code/technical changes, navigation, responsive layout, accessibility, conversion hooks, canonical tags, internal link management, JSON-LD, routing and validation are in scope.

If source Markdown content cannot be placed in the existing template without loss, improve the component/rendering layer; do not delete parts of the written page to fit the template. Read all front matter as metadata, not as visitor-facing text.

## 1. Route and owner mapping

| Cluster | Route | Change | Intended search intent |
|---|---|---|---|
| B:T21 | `/pricing` | **New dedicated company pricing page** | Transactional — translation charges in Pakistan |
| A:T02 | `/services/translation/urdu-to-arabic` | **New direction-specific commercial service page** | Transactional — Urdu to Arabic translation Pakistan |

**Checks:** Before creating files, inspect all Next.js App Router paths, dynamic slugs and content registries. Verify if a page already owns either exact route. Never overwrite an existing owner without inspecting its canonical and Search Console history. The public `/pricing` URL returned 404 during editorial research; check again against the repository before creation.

The Urdu → Arabic page must **not** replace or canonicalise to the existing English → Arabic page at `/translation-english-to-arabic`.

Preserve existing pages and canonical URLs:

- `/translation-english-to-arabic` (English → Arabic)
- `/services/translation/arabic-translation` (Arabic translation category hub)
- `/services/translation` (general translation hub)
- `/services/translation/nikah-nama-marriage-certificate` (Nikah Nama/MRC transactional hub)
- `/blog/saudi-scholarship-application-cost-pakistan` (scholarship-focused cost article)

Their distinct intents are valuable. No redirects, deletions, `noindex`, or canonical reassignment without the owner approving a page-level GSC review.

## 2. Page A — `/pricing`

### Content

Publish **all** headings, text, tables, FAQs, sources and caveats from `LISAN_Day07_Translation_Charges_in_Pakistan_PRICING.md` **exactly as written**.

### Metadata

- Title: `Translation Charges in Pakistan (2026) | Document Prices & Quotes | LISAN.PK`
- Meta description: use file front matter, not generated text.
- H1: `Translation Charges in Pakistan (2026): Document Prices, Packages and Extra Fees`
- Canonical: `https://www.lisan.pk/pricing`
- Robots: index/follow unless there is a **real reason** requiring human approval.
- One canonical, one H1, self-referencing for primary owner.
- Open Graph and Twitter metadata from approved title/description; do not invent testimonials or ratings.
- Breadcrumb: Home > Translation Pricing (if existing breadcrumb patterns permit).

### Price correctness / scope

Use only the **already published and owner-provided** rates included in the copy:

- Standard qualifying document or degree translation: **PKR 1,200 per document**.
- Bachelor's transcript translation: **PKR 2,500**.
- Bachelor's documents-and-translation scholarship package: **PKR 12,000**.
- Master's documents-and-translation scholarship package: **PKR 15,000**.
- PhD documents-and-translation scholarship package: **PKR 15,000**.

Important: These **translation document packages are not full scholarship application consultancy packages**. Do not publish full consultancy-package rates or imply official government fees. Do not turn price amounts into “starting from” promises for every translation direction or page length; preserve the qualification caveats.

Do not import older sample/market pricing tables from `/blog/arabic-translation-services-saudi-scholarship-pakistan`, which show inconsistent estimates, or create invented MRC/Nikah Nama/urgent pricing. Mark them **quote required** as in the supplied copy.

### UI / UX

- Price table fully readable on mobile with proper column labels, accessible horizontal overflow if necessary, and no truncation of 'quote required' or service exclusions.
- Use semantic `<table>`, `<thead>`, `<th scope>`, and keyboard-accessible interactions.
- Distinguish the standard single-document rate from bespoke rates and scholarship package prices visually; avoid misleading badge such as “guaranteed cheapest”.
- Render written CTAs as existing site-appropriate buttons with **the exact anchor texts and destinations**; do not replace with an unreviewed external lead service.
- A consistent “Request Exact Quote” CTA may be implemented in sticky/midpage/footer, but reuse approved wording only.
- Ensure direct WhatsApp uses `https://wa.me/923288155866` and any embedded WhatsApp text does **not** transmit private document data in query strings.
- Reuse existing approved contact and brand components. Do not add an unsolicited personal phone number, physical address, branch, unverified rating or certificate badge.

### Optional structured data

- `WebPage`, `BreadcrumbList` and `Service`/`OfferCatalog` **only where the resulting data truthfully matches visible content**.
- If using `Offer` for a rate, make the eligible category explicit and do not assign the standard PKR 1,200 rate to all service catalog entries. There is no requirement to add `Offer`.
- Do not fabricate `AggregateRating`, `Review`, `LocalBusiness` addresses, `priceValidUntil`, invented savings or `FAQPage` rich-result eligibility.
- FAQs should remain crawlable HTML, even if collapsed into accessible disclosure components.

## 3. Page B — `/services/translation/urdu-to-arabic`

### Content

Publish **all** headings, answers, source notes and the pricing qualification from `LISAN_Day07_Urdu_to_Arabic_Translation_Service_NEW.md` **exactly as written**.

### Metadata

- Title: `Urdu to Arabic Translation in Pakistan | Nikah Nama & Documents | LISAN.PK`
- Meta description: use file front matter.
- H1: `Urdu to Arabic Translation Services in Pakistan`
- Canonical: `https://www.lisan.pk/services/translation/urdu-to-arabic`
- Index/follow, subject to real review.
- Breadcrumb: Home > Services > Translation > Urdu to Arabic.
- Do not canonicalise to English → Arabic; both pages should be internally cross-linked as separate service directions.

### Special text-rendering requirements

- Ensure Urdu and Arabic examples display properly using `dir="rtl"` where applicable or script-aware inline markup; **do not** reverse the surrounding English table or swap source/target columns.
- Preserve proper Unicode Arabic (`عقد النكاح`, etc.) and Urdu (`نکاح نامہ`, etc.). No corrupted ligatures or entities.
- Prefer Noto Naskh Arabic / Noto Nastaliq Urdu if the project already loads them; do not download or distribute font files.
- Keep sample terminology labeled **illustrative**, not legally binding.
- Do not create fictional customer examples or testimonials.
- Do not claim a publicly available anonymised sample exists until the business provides one. If one is later approved, add it as a separate authorised asset with privacy review and alt text; for now, the written sample answer suffices.

### Business capability gate

The company must be able to provide the **Urdu → Arabic direction** in the stated certified format for any accepted order. Check the operational capability and qualification/statement before turning on paid checkout or committing to a deadline. If not established, publish the service page for **quote enquiries only** and flag the need for operational validation.

Avoid promises of universal Saudi Embassy approval, MOFA approval, 100% acceptance, mandatory notary stamps or same-day guaranteed turnaround.

## 4. Internal linking — no broken links

Add navigation links (do not change existing URL owners):

- Translation navigation/hub → `/pricing` using `Translation Prices` or equivalent human-readable label.
- Translation navigation/hub → `/services/translation/urdu-to-arabic` using `Urdu to Arabic Translation`.
- English-to-Arabic page → Urdu-to-Arabic page through a **small directional navigation link or component**; no rewritten body content.
- Urdu-to-Arabic page → English-to-Arabic page, Nikah Nama hub and `/pricing` (already included in supplied copy).
- Nikah Nama hub → Urdu-to-Arabic if relevant; avoid inserting a full new article.
- Scholarship documents page → `/pricing` if useful, without changing the original scholarship page's transactional/informational focus.

All linked Day 3–Day 6 guide routes in the supplied copy **must be verified**. If any is not deployed, DO NOT expose an internal 404: either publish the associated previously approved asset first or conditionally hide the *link only* while preserving the approved text in the source file. Provide a missing-links list and obtain editorial permission for alternative anchor destinations.

Avoid keyword-stuffed exact-match links sitewide. Do not duplicate a full body article across multiple URLs.

## 5. Conflicting legacy pricing and trust claims — audit, don't invent replacements

The editorial research found older LISAN.PK content with rates conflicting with the company's later official price guide:

- `/blog/arabic-translation-services-saudi-scholarship-pakistan` contains **market-based estimated prices** that differ from the owner-confirmed company rates and could appear to be current LISAN.PK charges.
- Several service templates have unsupported **“Embassy Approved,” “100% Acceptance,” “200% Guarantee,” “Same-day”** and similar claims.
- In some indexed routes, an expired 2026 scholarship announcement bar was returned (may be stale HTML/CDN or incomplete component migration).

**Task:** Identify the exact source files/components controlling these conflicts and propose a fix list. Where there is an existing sitewide component with demonstrably unsupported ratings, credentials, government endorsement or guaranteed outcomes, make the smallest safe code/config correction to remove the unsupported claim **without authoring new marketing copy**; preserve the visual layout. For substantive article copy replacements, request approved text instead of improvising. Distinguish stale cache/CDN from actual repository content, and inspect server-rendered HTML after deployment.

No unapproved price changes, testimonial insertion, brand-history claims or sweeping noindex should occur.

## 6. Form / WhatsApp / phone analytics

Reuse current `trackLeadEvent`/GTM/GA4 infrastructure. Verify:

- `generate_lead` fires only for a **real successful form submission** (not merely a click on submit or a failed validation).
- WhatsApp, phone and form interactions are tracked with separate event parameters for `service=pricing` and `service=urdu-to-arabic` (reuse existing naming conventions if available).
- No sensitive content, scans, document text, CNIC, passport number, phone number or email is transmitted to analytics as event parameters.
- One click should not create multiple `generate_lead` events from overlapping delegated listeners.
- `generate_lead` is configured as a GA4 key event if the team wants it counted as a conversion. Verify in GA4 DebugView/Realtime; compiling TypeScript does not prove receipt.

Do not fabricate analytics results. Report “not verified” if GA4 credentials or DebugView are unavailable.

## 7. Technical QA and SEO checks

Before push or deployment:

1. Inspect affected files, route ownership and static/dynamic page collisions.
2. Build/TypeScript-check with the actual project scripts (`npx tsc --noEmit` and project build/test commands).
3. Test HTTP status 200 for `/pricing` and `/services/translation/urdu-to-arabic` locally.
4. Verify primary canonical and all metadata (no `localhost`, no duplicate H1, no `noindex` by accident).
5. Validate all internal and official outbound links with graceful treatment of sites that block crawlers.
6. Confirm mobile table widths, contrast, keyboard navigation, heading hierarchy and Arabic/Urdu shaping.
7. Check sitemap contains both new indexable canonical URLs and robots permits crawling.
8. Validate structured data as applicable; no unsupported review snippets.
9. Test CTAs and actual leads. Local click tracking is not equivalent to production GA4 receipt.
10. Check no new duplicate service page appears under the dynamic `[slug]` route.
11. Confirm no Next.js hydration mismatches or build-only failures.
12. Verify deployment URLs, HTML response and any CDN cache update in production. Git push alone is not proof of live publication.

## 8. Day 7 = week-one measurement checkpoint

The master 30-day plan includes a week-one checkpoint; report separate outcomes, even if these were previously addressed:

- Day 1: Were expired Study in Saudi 2026 banners removed from **all live production routes**? Check `/services/translation` and `/contact` and clear relevant caches only if needed.
- Has the production site stopped showing unsupported blanket embassy acceptance guarantees?
- Are GA4 `generate_lead` and relevant WhatsApp/phone/form events actually recorded?
- Have search-earning old 404s been mapped to real new destinations, with any redirects approved?
- Are the indexed, click-earning city pages preserved while low-value/deduplicated location candidates remain in a review queue?
- Were the Day 1–Day 7 P0 editorial deliverables actually published with their correct canonical and intent?
- Have key internal links between the pricing page, Urdu→Arabic page, English→Arabic page, marriage document hub and scholarship pricing article been added without 404s?

Do not claim all Day 1–Day 7 tasks are complete merely because these two Day 7 assets pass tests; report any earlier outstanding production issues.

## 9. Required end-of-task report

Return:

- Files created or modified with rationale.
- Exact URL, H1, canonical, indexability and deployed `HTTP 200` result for each page.
- Confirm content was published **verbatim** (excluding metadata and purely presentational wrappers).
- Quote of all prices displayed on `/pricing` and confirmation that each matches the supplied content.
- List of conflicts discovered on legacy articles/components; identify any owner-approval blockers.
- Internal links verified; any still unpublished target routes.
- TypeScript/build, mobile, schema, sitemap and GA4 test results.
- Git commit hash and branch; production deployment status explicitly separate.
- No redirect/noindex actions unless separately approved.

**Successful completion criteria:** Two original, high-quality, human-readable transactional pages published at the approved URLs, with no invented copy, unverified prices or unsupported certifications, plus a transparent report on production and analytics verification.
