# LISAN.PK — DAY 10/30: Publishing and Technical Implementation Instructions

**Scheduled date:** 12 November 2026  
**Editorial owner:** LISAN.PK  
**Scope:** B:T09, A:T05, A:T38, B:A32  
**Mode:** IMPLEMENTATION ONLY. All public-facing page copy is already written.  
**Priority:** P0 / P1  
**Input:** The three accompanying `.md` content files.

## 0. Non-negotiable content rule

**Do not write, paraphrase, shorten, translate, summarize, expand, or invent any public-facing content.** Use the supplied Markdown body exactly as supplied, adapting only its technical representation to the existing Next.js components or MDX/Markdown renderer. Do not use content generation for page bodies, headings, FAQs, snippets, badges, testimonials, trust statements, prices, captions, alt text, or legal assertions.

Allowed: encoding, escaping, frontmatter-to-metadata mapping, component assembly, heading/link rendering, schema serialization, layout, accessibility and code fixes.

**If implementation depends on a missing piece of genuine content or documentation** (e.g., redacted land-record example, verified city office address, testimonial, SLA, certificate sample), report the missing item for editorial/owner approval rather than generating a substitute.

Do not modify unrelated content or deploy unreviewed promises.

## 1. Deliverables and exact URL mapping

| ID | Content file | Action | URL / canonical |
|---|---|---|---|
| **B:T09** | `LISAN_Day10_Fard_Translation_in_English_BLOG_REWRITE.md` | Replace the **existing** article body, keeping metadata and dates appropriately | `https://www.lisan.pk/blog/urdu-to-english-fard-translation-in-lahore` |
| **A:T38** | `LISAN_Day10_Property_Document_Translation_SERVICE_REWRITE.md` | Replace **existing** property translation service copy; retain service components and functional CTA | `https://www.lisan.pk/services/translation/property-document-translation` |
| **A:T05** | `LISAN_Day10_Urdu_to_English_Certified_Translation_SERVICE_REWRITE.md` | Replace **existing** Urdu→English service copy; preserve conversion actions and query intent | `https://www.lisan.pk/services/translation/urdu-to-english-translation` |
| **B:A32** | No additional article | Translation-first off-season visibility/conversion tasks in sections 7–9 below | Existing translation / attestation portfolio only |

**Protect exact URLs and existing organic traffic**: no new keyword-equivalent URL, no automatic redirect, no noindex without approved evidence, no deletion of pages based solely on overlap.

## 2. Mandatory discovery before editing

1. Inspect the actual repository: blog storage format, metadata schema, route resolution, service-page registries, custom components, and link functions. Do not assume each service has a dedicated `page.tsx`.
2. Search source for the three canonical URLs and the existing article slug. Inspect canonical/OG fields and sitemap entries.
3. Locate related Fard articles, particularly:
   - `/blog/urdu-to-english-fard-translation-in-lahore` (historically highest-click Fard URL in report; described as **57 clicks**).
   - `/blog/fard-translation-service-in-lahore` (historically **43 clicks** in report).
   - Other existing 'Certified Urdu Fard Translation for US Immigration' variants (discover exact slug from source, do **not** invent it).
4. Locate all relevant service pages and inspect duplication and inbound links.
5. Inspect current GA4/GTM lead-event instrumentation, but avoid unrelated tracking rewrites.
6. Note that historical GSC numbers above are **from the uploaded audit**. They require validation with a fresh query+page export before decisions about URL consolidation.

## 3. Publish B:T09 — the existing Fard blog

- Preserve `/blog/urdu-to-english-fard-translation-in-lahore` and its original publication date. Update `dateModified` to actual implementation date.
- Use the supplied frontmatter values as SEO metadata if compatible with schema; do not display internal editorial fields to visitors.
- Preserve article slug and canonical; do not create an alternate canonical pointing at the service page.
- Render one semantic `<h1>` (do not duplicate the H1 if the template already creates it); proper H2 and H3 hierarchy.
- Render tables on mobile with horizontal scrolling and visible headings. The terminology and layout tables must not lose a column.
- Render normal links as meaningful anchors; check all internal paths before publication.
- Provide page-level JSON-LD where applicable (e.g., `Article`, `BreadcrumbList`) using **genuine known** author, publisher and dates only; do not invent an individual author or add ratings.
- Keep the 16 FAQs on the page; if adding FAQ structured data, ensure exact Q/A correspondence. Do not promise Google FAQ rich-result appearance.
- Do not introduce a fabricated document sample or claim that the service can verify land ownership.
- Remove obsolete unrelated Saudi scholarship CTAs from this specific article if still present in its template, but do not edit unrelated global marketing components without recording them as a separate issue.

## 4. Publish A:T38 — the existing property-document service page

- Replace the existing generic text with the approved document-focused copy.
- Preserve original service URL and canonical. If current template uses global generic section cards, replace the **copy for this page only**; do not alter every service page.
- Remove unsupported statements **on this page**, including, if present: `100% embassy acceptance`, `200% guarantee`, `embassy approved`, `50,000+ clients`, unverifiable ratings and undefined same-day delivery promises.
- Preserve legitimate navigation and brand elements. If these marketing assertions originate from a global component and are visible on other pages, flag for a sitewide audit; do not silently introduce new marketing terms.
- Ensure quote and WhatsApp CTAs remain accessible and are tracked with the existing lead events.
- Do not add a new price for wide or handwritten Fard records. Pricing is quotation-based.
- If the existing template reuses its `Service` schema, correct description to match the approved content; do not invent fixed `offers` or `aggregateRating` properties.
- If site includes `data-lead` and global tracking, preserve them and avoid duplicate firing from nested click handlers.

## 5. Publish A:T05 — the existing Urdu→English service page

- Preserve `/services/translation/urdu-to-english-translation`.
- Ensure its H1 and metadata emphasize **Urdu → English**; avoid conflating with English → Urdu or Arabic → English.
- Preserve distinct UKVI, USCIS and IRCC callouts. Do not claim their rules are identical.
- Preserve the actual PKR 1,200 standard-document caveat. Do not attach the rate to all multi-page legal/property records.
- Preserve all 14 FAQs and related services.
- Do not invent an official translator accreditation, sworn-translator registration, signed customer review, sample certificate or branch address.
- Make sure this page links to the existing Day 9 USCIS service page and the Fard article.

## 6. Content consolidation audit — **approval required**

The uploaded SEO playbook contains conflicting shorthand: it calls `/blog/urdu-to-english-fard-translation-in-lahore` the **traffic-bearing canonical** (57 clicks) while also proposing consolidation of two Fard blog posts 'into the service page.' These are not simultaneously executable as automatic canonical/redirect instructions.

**This implementation resolves that conflict conservatively:**

1. Keep the traffic-bearing blog canonical unchanged and upgrade it now.
2. Upgrade the commercial property service page; link both ways with distinct anchor intent.
3. Keep `/blog/fard-translation-service-in-lahore` and any additional Fard article live as currently configured for now.
4. In Google Search Console, export the last **3–6 months** of **page + query** data for all candidate URLs: clicks, impressions, indexed status, countries, and queries; inspect backlinks where available.
5. Recommend a specific **keep/update/merge/redirect** mapping with evidence per URL, including how to preserve existing user value and which terms would be retained.
6. **Do not** implement redirects, noindex, deletion or rel-canonical migration unless the owner expressly approves that mapping.
7. Do not count a backlink or GSC impression as proof of an established business service, physical office or document credential.

**Deliverable:** A short URL-by-URL consolidation table in the implementation report. Flag any URLs returning 404 instead of inventing a destination.

## 7. B:A32 — translate the 30-day risk finding into operational actions

The audit notes a significant **off-season traffic dependence on Saudi scholarships**. To grow recurring translation demand:

- Add **contextually relevant** links from existing Fard and Urdu-to-English pages to the property-document service and translation quote path.
- Add related-topic links where naturally relevant from Nikah/MRC, USCIS requirements, MOFA and apostille content; do not insert generic Fard links into irrelevant scholarship articles.
- Ensure translation services are reachable from the main service navigation or relevant parent hub, **without changing unrelated navigation** without approval.
- Configure a basic GA4/GSC check of clicks, impressions, CTR, key event leads and landing-page conversions for the three Day 10 URLs.
- Maintain a weekly translation-vs-scholarship traffic mix report; label baseline date and source. **Do not fabricate conversion counts.**
- Continue using all existing pages to support business in the Saudi scholarship off-season, but do not publish unscheduled blogs from this task.

## 8. Official sources and factual release gate

Verify these statements against official references **at publication time**:

- Fard Malkiyat is drawn from the record of rights (Jamabandi), and Intiqal/mutation represents a change recorded in land records: `https://ndma.gov.pk/storage/publications/July2024/TwkByEeXdr6bUVVLmqEj.pdf` plus `https://www.punjab-zameen.gov.pk/entryMutationsInfo`.
- Punjab Fard acquisition and record validation channels: `https://www.punjab-zameen.gov.pk/fardInfo` and `https://onlinefard.punjab-zameen.gov.pk/verifydocument`.
- U.S. regulation on full certified translations: `https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-103/section-103.2`; check the current USCIS form instructions for any relevant detail.
- UK visitor translation requirements: `https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk`.
- Canadian immigration translation requirements: `https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=018&top=29`.

The NDMA-hosted property manual is a **background source**, not a reliable basis for current local government fees or branch procedures; do not copy any historical fee amount from it.

**Proof asset release gate:** If a truly anonymised, consent-cleared Fard original + translated landscape table exists, use it (with alt text describing precisely what is shown). If none exists, report 'approved sample missing'; **do not fake, reconstruct, or publish confidential records**.

**Language validation:** Retain source-language terms where necessary, check all legal terminology with a qualified Urdu/English editor, and distinguish guidance from professional legal advice.

## 9. Test checklist and completion report

### Required checks

- `npx tsc --noEmit` passes; run existing build and lint tests where practical.
- All three canonical routes return HTTP 200 on the target environment after deployment.
- The two service pages render correctly and maintain existing navigation/CTA components.
- No legacy **100% / 200% / guaranteed embassy approval** claims remain on the three target pages.
- No bogus `AggregateRating`, fabricated `Review`, `Product` offers or unsupported `FAQPage` rich-result promise.
- Viewsource / rendered head has a correct unique title, one H1, description, canonical, and valid metadata.
- Open Graph descriptions and internal links match published pages.
- Sitemap and robots/noindex state match the existing published URL configuration.
- Mobile tables do not cut off identifying columns; check 320px, 390px and desktop widths.
- WhatsApp, phone and quote CTA actions work; GA4/GTM lead events do not double fire.
- Check no temporary file paths, `TODO`, `VERIFY`, local links, placeholders or accidental personally identifying test data reached the public output.
- Check sitewide banners; **if** old Saudi Sep 16–Oct 6 'applications open' strings remain visible in production, report a Day 1 verification regression rather than claiming Day 10 has resolved unrelated banners.
- Run the existing site accessibility checks where available.

### Required final implementation report

1. **List files modified** and routes affected.
2. Report local build checks and production/live checks **separately** (do not label localhost as live production).
3. List tested links and lead events.
4. Provide the GSC consolidation table and any pending owner approvals.
5. Report whether a genuine redacted Fard sample exists.
6. State any unresolved legal/certification/pricing claims that require manual verification.
7. Report the Git commit hash and deployment reference if actually created. Do not claim deployed merely because code was pushed.

**Definition of done:** The three approved editorial assets are published at existing URLs; site behavior, semantics and tracking pass checks; related Fard URLs remain protected pending explicit consolidation approval; the weekly translation-demand monitoring plan is recorded. There must be no new public-facing content written by the implementation tool.
