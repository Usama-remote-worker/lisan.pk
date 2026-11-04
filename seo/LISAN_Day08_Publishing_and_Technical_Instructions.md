# LISAN.PK — DAY 8/30: Publishing & Technical Implementation Instructions

**Scheduled publication:** Tuesday, 10 November 2026  
**Content fact-check date:** 5 November 2026  
**Source plan:** B:T03 (P0 informational), A:T03 (P0 transactional), A:T04 (P1 commercial).  
**Purpose:** Publish three completed editorial assets, implement navigational/technical SEO, and validate the evidence-sensitive country table. **These instructions are not permission to generate or rewrite public content.**

## 0. Editorial ownership and scope

The following **complete, editorially approved** Markdown files contain all of the public-facing words. Use their front matter for metadata; **publish the article body exactly** (headings, introductory answers, tables, FAQs, sources, caveats and CTAs):

1. `LISAN_Day08_Pakistan_Apostille_Country_List_GUIDE.md`
2. `LISAN_Day08_Arabic_to_English_Translation_Service_NEW.md`
3. `LISAN_Day08_Arabic_to_Urdu_Translation_Service_NEW.md`
4. `LISAN_Day08_Apostille_Destination_Checklist.pdf` — a **static downloadable supplement**, not a replacement for the article's live, maintained table.

**Strict guardrail:** Do not write, paraphrase, SEO-expand, summarise, rephrase or generate visitor-facing text. Do not add claims, testimonials, prices, ratings, guarantees or artificial FAQ answers. If editorial facts conflict with newly verified official evidence, **STOP, document the exact conflict and request editorial correction**; never silently edit the prose. Code changes, routing, metadata wiring, accessibility, table rendering, layout, link destinations, structured data, navigation and tracking are permitted.

## 1. Routes, source ownership and targets

| Cluster | Type | Canonical destination | Primary keyword | Priority |
|---|---|---|---|---|
| B:T03 | New informational table-first pillar | `/guides/pakistan-apostille-country-list` | `pakistan apostille countries list` | P0 |
| A:T03 | New transactional service page | `/services/translation/arabic-to-english` | `arabic to english translation pakistan` | P0 |
| A:T04 | New commercial service page | `/services/translation/arabic-to-urdu` | `arabic to urdu translation services pakistan` | P1 |

**Preserve the following existing destinations and independent search intent:**

- `/guides/apostille-pakistan` — *process* / eligibility / fees, published in Day 4.
- `/guides/certified-translation-vs-apostille-pakistan` — *concept comparison*, published in Day 5.
- `/services/attestation` — *commercial attestation-related services*.
- `/translation-english-to-arabic` — English → Arabic, published in Day 6.
- `/services/translation/urdu-to-arabic` — Urdu → Arabic, published in Day 7.
- `/services/translation` and existing Arabic translation hub — broad general intent.
- `/pricing` — existing dedicated company pricing page.
- `/services/uscis-certified-translation/requirements` and `/services/ukvi-certified-translation` — jurisdiction-specific requirements.

Check repository route owners, service registry, dynamic `[slug]` page, sitemap and duplicate slug handling **before** creating new routes. A 404 in public search is not conclusive repo evidence. **Do not** 301, 308, noindex, deindex, delete, or change another page's canonical without owner-approved GSC evidence and a separate task.

## 2. Critical prepublication fact gate — B:T03 country list

**Do not publish the country table without these checks on the scheduled publication date:**

1. Open the [HCCH Convention status table](https://www.hcch.net/en/instruments/conventions/status-table/?cid=41) and verify whether a country entered into force or has a new status since the fact-check. Confirm **Thailand's planned 28 February 2027 EIF** if retaining that text.
2. Recheck the **Pakistan-specific notifications** at `https://www.hcch.net/de/instruments/conventions/status-table/notifications/?csid=1466&disp=type` for withdrawals or additional objections. Source currently records **eight**: Germany, Czechia, Poland, Austria, Finland, Netherlands, Denmark and Greece.
3. Recheck Pakistan MOFA's directory `https://attestation.mofa.gov.pk/countries` for destination classification, and compare with HCCH bilateral relationship. **Do not trust a generic list that omits objection details.**
4. For Germany, confirm current German Missions' `https://pakistan.diplo.de/pk-en/service/legal-uess-1680522` process. **Do not assert it offers routine legalisation of Pakistani birth/marriage documents.**
5. For the Netherlands, confirm `https://www.netherlandsworldwide.nl/legalisation/foreign-documents/pakistan` and `https://www.netherlandsworldwide.nl/legalisation/countries-apostille`.
6. For UAE, confirm its mission's `https://www.mofa.gov.ae/en/Missions/Islamabad/Services/Services-for-Individuals/Attestation-Information` and that UAE remains a non-party; check Qatar/Kuwait treaty status similarly.
7. Review Pakistan's [formal declaration](https://www.hcch.net/en/instruments/conventions/status-table/notifications/?csid=1466&disp=resdn) excluding **India** and entities it does not recognise. Do not list India or Israel as unqualified applicable destinations.
8. If the records have changed, **pause this affected page only**, mark `NEEDS EDITORIAL UPDATE` and identify table rows and statements needing revision. The implementation worker must **not write a replacement explanation**.

**Important accuracy distinctions:**

- `Convention party` is not equivalent to `Convention applies between Pakistan and destination` when there is an Article 12 objection.
- `Non-party` (UAE, Qatar, Kuwait) is not the same as `objected party` (Germany, Austria, Netherlands, etc.).
- `General attestation` is not automatically `embassy legalisation` for every country; Germany is a known exception with separate verification.
- Pakistan's declaration on India and unrecognised entities must be respected even though India and Israel appear in general HCCH party lists.
- Apostille validity under treaty does **not** mean the recipient accepts every document without other requirements.
- `Apostille issued by Pakistan` is distinct from an apostille issued by the destination country on a document originating there.

## 3. Page A — country table implementation

Use the article file **verbatim**. Retain:

- Opening 2–3-sentence direct answer above the first table.
- Full first destination-status decision table.
- Separate complete **8-objector** table with notice dates.
- Complete **118-destination HCCH party reference** table (do not silently truncate to a selected top 20).
- Precise Germany/Netherlands/UAE/Qatar exceptions and the document-specific disclaimers.
- FAQs (17 questions) and cited official links.
- Visible `Last checked` text near the table; use the editorial file's date until the editors update it.
- Linked downloadable supplement at, for example, `/downloads/pakistan-apostille-destination-checklist-2026.pdf` (serve `LISAN_Day08_Apostille_Destination_Checklist.pdf` from the appropriate static directory). For a static PDF, preserve the in-file fact-check date and warn that the live page can be updated.

### Rendering & accessible table UX

- On desktop, display the quick table and objection table as genuine HTML `<table>` elements with `<thead>` and `<th scope="col">` for accessibility. The 118-destination list can be a searchable or anchored table but **all entries must remain in indexable HTML**, not available only after client-side JavaScript.
- On mobile, use horizontal scrolling wrappers with visible scroll affordance, or responsive stacked rows, **without clipping columns**.
- If filters/search are added, make them progressive enhancement (not hiding content from server-rendered HTML or search engines).
- Add an accessible on-page jump list: `Quick status` / `Eight objections` / `Full country list` / `Germany–Austria–Netherlands` / `UAE–Qatar–Kuwait` / `FAQ`.
- No flags unless the existing design has an accessible non-decorative implementation; icons cannot convey status alone.
- One H1, coherent H2s/H3s; front matter must not appear visibly.

### Metadata / schema

- Canonical: `https://www.lisan.pk/guides/pakistan-apostille-country-list`
- OG/Twitter descriptions reflect approved front matter.
- BreadcrumbList if supported by sitewide breadcrumb system.
- `Article`/`WebPage` structured data with real published and modified dates if the page's content publication metadata supports them. **Do not claim government authorship.**
- FAQPage schema is optional; if implemented, it must match *exact rendered FAQ question and answer text*. Do not expect FAQ rich results.
- No fake `AggregateRating`, invented client review or `HowTo` claims beyond the approved content.

## 4. Page B — Arabic → English

Publish `LISAN_Day08_Arabic_to_English_Translation_Service_NEW.md` **verbatim**.

- Canonical: `https://www.lisan.pk/services/translation/arabic-to-english`.
- Keep **reverse-direction differentiation** from `/translation-english-to-arabic` and `/services/translation/arabic-to-urdu`.
- Preserve Saudi Iqama identity/accuracy section, UKVI and USCIS certified-translation distinctions, pricing as *document-specific quote*, and 14 FAQs.
- Use existing contact/WhatsApp services; verify `https://wa.me/923288155866` matches approved company contact and that button semantics are accessible.
- Do not invent certification claims such as `court appointed`, `embassy approved`, `government authorised`, or a made-up translator licence.
- Do not claim universal turnaround or exact pricing if the source file does not give it.
- If a human-approved redacted Arabic source + signed translation sample exists, insert it in the service UI **without adding editorial claims**; otherwise log the missing proof asset and do not invent a scan.

## 5. Page C — Arabic → Urdu

Publish `LISAN_Day08_Arabic_to_Urdu_Translation_Service_NEW.md` **verbatim**.

- Canonical: `https://www.lisan.pk/services/translation/arabic-to-urdu`.
- Preserve the distinct commercial intent: Arabic source → **Urdu** target.
- Keep natural Urdu-script and right-to-left precision guidance, legal contract caveats, medical non-advice, quote-only pricing, and 14 FAQs.
- The entire **page text is English** because the primary discovery search is English in Pakistan; do not auto-generate an Urdu translation of the whole landing page.
- Ensure Arabic and Urdu inline examples render correctly with proper `lang`, `dir` properties when needed. Do not globally set the English page to RTL.
- Confirm human translator/specialist capacity for medical/legal categories before accepting those complex jobs. If capacity cannot be verified, mark the service category pending business approval rather than promising expertise.

## 6. Sitewide interlinking (targeted; no content rewriting)

Add appropriate editorial or service-card links **without changing the approved article text**:

| Source | Destination | Context |
|---|---|---|
| `/guides/apostille-pakistan` | `/guides/pakistan-apostille-country-list` | Which destination accepts a Pakistan apostille? |
| `/guides/certified-translation-vs-apostille-pakistan` | `/guides/pakistan-apostille-country-list` | Treaty-country exception reference |
| `/services/attestation` | `/guides/pakistan-apostille-country-list` | Choosing apostille vs general attestation |
| `/services/translation` | both new Arabic → English and Arabic → Urdu | Direction-specific service links |
| Existing Arabic language hub | both new language-direction pages | Arabic source language paths |
| `/translation-english-to-arabic` | new Arabic → English page | Reverse-language link only |
| `/services/translation/urdu-to-arabic` | new Arabic → Urdu page | Reverse-language link only |
| `/pricing` | both service pages | Appropriate quote CTA/card |
| Nikah Nama service | country table (when relevant) | Different destination rules |

Do **not** add identical promotional links to every article, rewrite old blogs at scale, or make irrelevant footer spam. For existing pages, only small contextual links/cards, not article rewrites.

## 7. Layout, UX, compliance and tracking

- Reuse current Next.js App Router and design system. Prefer server-rendered semantic content; make only interactive components client-side.
- Confirm keyboard navigation, accessible labels, good color contrast and sensible responsive text sizes.
- Preserve all hyperlinks; inspect internal links for genuine public destinations. If a target article is not deployed, keep a pending-link report rather than knowingly shipping a 404.
- Use ordinary descriptive text for link labels; avoid generic “click here.”
- Distinguish `Request a quote` from a **successful lead event**. GA4 `generate_lead` should be fired on an agreed qualified form event, not automatically counted twice for nested click handlers. WhatsApp/phone outbound clicks should remain trackable as separate intents.
- No government logo, ministry emblem or other authority insignia suggesting government affiliation.
- No privacy-invasive third-party upload service without existing approved privacy/compliance process.

## 8. Technical validation / release gate

1. Confirm all three target URLs have exactly one route owner and one canonical.
2. Verify HTTP 200 on all three **locally** after build and again on the **production** domain following deployment.
3. Run `npx tsc --noEmit` and relevant `next build`/repository checks; capture actual results (do not call TypeScript compilation a full build).
4. Inspect on mobile and desktop. Verify that the long table is readable, indexable, and not clipped.
5. Check `robots`, sitemap inclusion, page metadata, OG tags, breadcrumbs, internal links, privacy/terms/footer, and structured data validity.
6. Verify **source freshness** again on publication date, particularly Pakistan objections and Thailand's future EIF.
7. Check analytics in GA4 DebugView for form submission, WhatsApp and phone events; avoid double-counting.
8. Review existing pages for duplicate content/cannibalisation and **report** overlaps. Do not implement a consolidation redirect or `noindex` without review and owner approval.
9. Check source link reachability; official websites can temporarily time out. If so, note it; do not substitute unsourced guidance.
10. Confirm three article files were copied **without modifications to body copy**, except metadata mapping and safe HTML encoding.

## 9. Required completion report

Return a table with **Task ID / File or route / Implemented / Verification / Pending item**. Explicitly include:

- Country-list fact gate: HCCH status date, objection count, and any changes requiring editorial attention.
- All modified/created files.
- Route conflicts or existing indexed pages discovered.
- 3 URLs with local and post-deploy production HTTP checks separately.
- Table render quality and number of destinations represented (**118 other in-force parties (excluding eight objections, India, Israel, future Thailand and Pakistan), eight objections, plus non-party examples**).
- Internal-link changes and proof that old URLs were preserved.
- Analytics test results, if access exists; otherwise mark **not tested**.
- Privacy and certification claims needing business proof.
- List of unresolved questions; no invented content, dates, official fees or performance numbers.

**Completion definition:** Three approved articles published under correct intent + exact canonicals, official destination matrix rechecked, PDF downloadable, technical validation passed, and no unapproved changes to existing URLs.
