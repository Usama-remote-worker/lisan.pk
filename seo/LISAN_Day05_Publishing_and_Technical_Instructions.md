# LISAN.PK — DAY 05 / 30 — PUBLISHING & TECHNICAL INSTRUCTIONS

**Scheduled:** Saturday, 7 November 2026  
**Plan reference:** Unified SEO Implementation Playbook, Day 05, page 10.  
**Priority clusters:** B:T04 and A:T46 (both P0 informational).  
**Parallel fixes/audits:** A:F09, A:F15, A:F18, B:A01.  
**Platform:** LISAN.PK / Next.js 16 App Router; use existing routing, CMS/blog content, design system and analytics infrastructure.

## NON-NEGOTIABLE CONTENT OWNERSHIP

**Both articles are already completely written.** The implementation role is **only to integrate, publish, format, cross-link, validate and report on this supplied text.**

**Do not generate, research, paraphrase, summarize, add, delete, reword, SEO-rewrite or auto-complete any part of either article.** Do not produce new FAQs, promotional copy, fabricated examples, prices, reviewers, trust metrics, governmental approvals or service promises. Do not use an AI writing feature on article text. The supplied documents include their approved SEO titles, descriptions, headings, tables, direct answers, URLs, internal links, citations and CTAs. Technical transformations may convert Markdown into HTML/React components *without changing meaning or visible text*. Any content problem should be flagged for editorial revision by the content owner rather than silently changed.

**FILES (attach both alongside this instruction file)**

1. `LISAN_Day05_Saudi_Embassy_Attestation_vs_Apostille_2026_REWRITE.md` — full existing-article replacement; **preserve original URL**, original first-published date, and all existing GSC equity.
2. `LISAN_Day05_Certified_Translation_vs_Notarization_vs_Apostille_Guide.md` — **new standalone authority guide**, distinct intent.

Do not mention any particular AI development tool in user-facing content, author fields, headings, or final article markup.

## TASK 1 — SUBSTANTIALLY UPDATE THE EXISTING EARNING SAUDI ARTICLE (B:T04)

**Canonical (KEEP EXACTLY):**
`https://www.lisan.pk/blog/saudi-embassy-attested-document-translation-process-pakistan`

**Never create a replacement slug**, `/saudi-embassy-attestation-2026`, duplicate blog entry or alternate canonical.

1. Locate the existing blog Markdown/CMS record and route. Current live page has an old title, date **9 May 2026**, hardcoded HEC/IBCC → MOFA → Saudi Embassy chain and a raw HTML snippet rendered near the top. Audit actual source before modification.
2. Replace the **entire article body** with the supplied updated Markdown exactly. Remove obsolete 2026 content completely rather than appending the new article to the old. Fix any old escaped/visible raw HTML by using normal Markdown rendering; do not reproduce previous corrupted HTML blocks.
3. Set SEO metadata from the supplied frontmatter: new title, description, canonical, primary keyword and supporting query coverage. Keep `datePublished` **2026-05-09** and use `dateModified` **2026-11-07 only if actually published that day**; otherwise use real deployment/approval date. Retain any valid original author/editor identity; default to the approved "LISAN.PK Editorial Team" label, **no fabricated personal credentials**.
4. Preserve existing thumbnail/hero imagery where appropriate if non-misleading; check any embedded “Embassy Required” or “Guaranteed Accepted” image labels and flag for editorial replacement. Keep a single visible H1 and logical H2/H3 levels.
5. Render the **before-versus-after** table responsively. Where existing components support a process graphic, build an accessible graphic **from the supplied table and the following exact approved labels only**:
   - `Older blanket advice (not universally applicable)`
   - `2026 apostille-first decision route`
   - `Does this receiving authority request another step?`
   - `No → submit apostilled document`
   - `Yes → verify the written requirement`
   Do not show `Embassy always required` or `Embassy never required`.
6. Preserve all relevant official-source links and internal links. If an internal target is not yet live (the Day 3/4 guides or the Day 5 new guide), publish the required guide first when available; if not available, record the broken target and obtain approval before changing article text.
7. Ensure displayed `dateModified`, metadata and structured `BlogPosting`/`Article` schema are consistent. Do not present fabricated review/rating schema. FAQ sections may be semantic HTML but do not promise FAQ rich results.
8. Check buttons to `/contact`, translation service pages and WhatsApp/phone analytics event handlers. Do not introduce a new analytics event naming scheme; use existing lead tracking.

## TASK 2 — PUBLISH THE COMPARISON AUTHORITY GUIDE (A:T46)

**New canonical:**
`https://www.lisan.pk/guides/certified-translation-vs-apostille-pakistan`

1. Check if the exact path exists or an equivalent established page already serves the same search intent. If an existing established page does, **do not create a near-duplicate**; stop and present URL and traffic evidence to the content owner for canonical decision. The plan expects a new article; absent a conflict, publish the supplied Markdown at the proposed path.
2. Use the project's existing `/guides/` page template and Markdown loader, preserving headings, comparison tables, decision tree, sources, FAQs and CTAs **verbatim**.
3. The route must render as one real 200/indexable page, with self-referencing canonical, sitemap entry, clear metadata and one H1. Do not add an unrelated default sidebar or generic admissions/scholarship content.
4. Render all tables on mobile via responsive overflow or stacked semantic cards with accessible header associations. Do not make figures out of screenshots of text; accessible HTML is preferred.
5. Publish only verified sources supplied in the article. Keep the destination-country caution on bilateral HCCH objections conspicuous.
6. Internal-link this page to the established Day 4 apostille process guide, Day 3 MOFA guide, Saudi article and translation-service pages, **provided each route is live**. Preserve the clear division of search intent:
   - Day 3 `/guides/mofa-online-attestation`: how to apply to MOFA.
   - Day 4 `/guides/apostille-pakistan`: end-to-end Pakistan apostille procedure.
   - Day 5 `/guides/certified-translation-vs-apostille-pakistan`: **which service is needed; comparison and decision framework**.
   - Day 5 existing Saudi blog: **Saudi-specific embassy/cultural exceptions**.
7. Use structured data only when it accurately reflects visible content. Add the new route to the sitemap only when live/working; no duplicate canonicals.

## TASK 3 — CORRECT OUTDATED SAUDI LEGALIZATION CLAIMS (A:F15 + B:A01)

Perform a **repo-wide factual claim audit** before changing additional pages. Search exact and semantic variants, including `Saudi Embassy`, `Saudi Cultural`, `MOFA`, `attestation`, `apostille`, `mandatory`, `7-10 working days`, `100% embassy accepted`, `embassy approved`, `approved translator`, and the old chain `HEC → MOFA → Embassy`.

**Priority targets from the audit:**

- `/services/attestation` (existing commercial money page; Day 3 replacement may already be pending or deployed)
- homepage attestation services block
- `/blog/saudi-embassy-attested-document-translation-process-pakistan` (handled in Task 1)
- `/blog/saudi-mofa-attested-arabic-translation-services-pakistan`
- `/blog/saudi-embassy-approved-translation-pakistan`
- `/blog/saudi-embassy-approved-translation-services-pakistan`
- `/blog/translation-services-accepted-by-saudi-embassy-in-pakistan`
- `/blog/attested-translation-for-saudi-scholarship`
- `/blog/arabic-translation-services-saudi-scholarship-pakistan`
- reused location/service FAQs, blog CTAs and shared hero/OG sections.

### Approved factual microcopy for small changes ONLY

Use only when correcting a short claim in an existing component:

- `Saudi Arabia accepts apostilles for eligible Pakistani public documents. The receiving authority may impose separate document-specific requirements.`
- `A Pakistan MOFA apostille generally replaces the traditional embassy-legalization step for eligible documents where the Convention operates.`
- `Academic, visa, professional and translation requirements must be confirmed with the receiving Saudi institution.`
- `Saudi MOFA's published ratification instructions still mention Cultural Attaché and embassy checks for certain foreign university documents; do not assume these requirements are universally waived.`
- `Translation accuracy and document authentication are separate requirements. Acceptance is determined by the receiving authority.`
- `Official fees and processing steps should be checked on the relevant government portal before submitting documents.`
- `LISAN.PK provides translation and document-preparation assistance. It is not a government apostille issuing authority or an embassy.`

**If an entire old article needs a substantial rewrite, do not rewrite it automatically.** Record its existing URL, full old claim, demonstrated problem, estimated intent and priority in `day05_editorial_corrections_needed.md`. The content owner will write the correct full version in a subsequent editorial task.

**Do not broadly replace every instance of the word “Saudi Embassy.”** There are legitimate embassy/consular and category-specific services. For **Saudi degrees**, the Saudi MOFA ratification form still includes Cultural Attaché/embassy language; keep the nuance supplied in the article.

**Related-country warning:** The old plan also flags Bahrain and Oman alongside Saudi Arabia, but these are **different destination countries**. Do not classify them under the Saudi document rule or assert an apostille route for them without independently verifying the relevant HCCH treaty status, Pakistan MOFA country directory and the receiving authority. Report first; implement only safe, sourced corrections.

### Required audit output

`day05_saudi_attestation_claim_inventory.csv`

Columns:
`route,source_file,quoted_old_claim,claim_type,official_source,action,exact_new_text,verification_status,published_status,requires_editorial_review`

Do not report the entire site clean without inspecting shared components, static pages and Markdown data.

## TASK 4 — BLOG INTERNAL LINKS AND CANNIBALIZATION AUDIT (A:F09)

1. Inventory relevant live Saudi attestation/translation blogs and actual canonical URLs from repository + sitemap + page source.
2. Record page-level 90-day clicks/impressions from **real GSC only if access exists**. The Day 5 plan mentions historical numbers for the earning Saudi URL; treat them as **planning evidence**, not fresh GSC measurements.
3. Determine which Saudi-embassy posts are genuinely overlapping informational pages vs legitimately different commercial/transactional intent. Suggest consolidation but **do not execute any 301/308, noindex, canonical override or deletion without explicit owner approval and page-level GSC evidence**.
4. Correct broken internal links where the correct destination is unambiguous; keep old high-performing article URLs stable and avoid multiple identical anchors in the same paragraph.
5. Provide `day05_saudi_article_overlap_audit.csv` with:
`url,title,h1,intent,canonical,index_directive,sitemap_status,clicks_90d,impressions_90d,unique_value,near_duplicate_of,suggested_action,owner_approval_required`
6. Protect all earning legacy posts unless approved. A plan note saying “301 weaker Saudi-embassy posts” is a **candidate action**, not authorization without a mapped URL-by-URL review.

## TASK 5 — DISTINCT PAGE QUALITY / SEARCH SPAM REVIEW (A:F18)

1. Find near-identical Saudi attestation or translation content generated by city, industry or language substitution.
2. Flag obvious template leakage, fabricated branch claims, “guaranteed acceptance” copy, thin city-service combinations, broken linked images, and repeated headings. The existing Day 4 audit may have already started this; extend it instead of starting an untracked duplicate project.
3. Do not create new geographic doorway pages or vary a template merely to target additional keywords. See [Google Search spam policies](https://developers.google.com/search/docs/essentials/spam-policies).
4. Do not automatically noindex or redirect URLs with organic traffic or unknown traffic. Keep recommended actions in approval register.
5. If an original source has published prices/timelines approved by the business owner for a **different service** (e.g., the Nikah Nama page), do not globally delete those values due to this day's Saudi apostille corrections.

## TASK 6 — QA, PUBLICATION, REPORT

Run and capture evidence for:

- `npx tsc --noEmit`, relevant lint/tests, and production build when supported.
- Local HTTP 200 for both article paths, then separately test public production URLs after deployment (do not equate `git push` with production success).
- Self-canonical and sitemap entry, no unintended redirects, correct 1× H1, accurate title/description, `datePublished`/`dateModified`, breadcrumb schema and accessible tables.
- No leftover HTML escape/markup leak from the old article (the prior page visibly contained a raw `<div>`/`<!-- Arrow -->` snippet).
- All official source links and all internal blog/service/guide links: log 404 or redirect errors.
- Mobile: table/flow responsiveness, long Arabic names, links visible and tap targets usable.
- Correct event tracking for quote, call and WhatsApp CTAs; don't invent key event results if GA4 DebugView access is missing.
- **Text-integrity check:** compare the final rendered article's *substantive text* against the two supplied Markdown sources (ignore frontmatter/formatting only). Report any difference with line-level diff and explicit approval before altering content.
- No fake review stars, `AggregateRating`, government badge or invented author qualification.

### FINAL COMPLETION REPORT REQUIRED

1. **Article 1 B:T04:** existing route, exact source content imported, original publish date preserved, modification date, metadata, internal links, schema, localhost/production status.
2. **Article 2 A:T46:** new route, canonical, sitemap, article text integrity, schema, source links, localhost/production status.
3. **A:F15 / B:A01:** each outdated source claim and its exact approved replacement, plus unresolved long-form rewrites requiring editorial content.
4. **A:F09:** blog overlap report and owner approval queue for potential redirects; **zero redirect/noindex executed** without approval.
5. **A:F18:** near-duplicate findings, genuine unique content gaps, no doorway expansion.
6. **Verification:** TypeScript/build, HTTP results, mobile, metadata, schema, link tests and CTA tracking (live vs locally simulated clearly distinguished).
7. **Deployment:** modified files, Git commit, push status, independent production check, remaining risks.
8. **Source freshness:** date the government/HCCH/Saudi sources were checked, any broken/changed official links and source-to-content correction requests.

## Definition of DONE

- Both pages publish under the **approved canonicals** and display **the provided complete text**, not newly written copy.
- Existing Saudi URL retains its search equity and historical `datePublished`.
- The site no longer presents Saudi Embassy legalization as a universal post-apostille requirement.
- Saudi Cultural Mission and special-document questions are handled carefully, not erased.
- Overlap and redirects documented for owner review; nothing destructive executed automatically.
- All implemented changes have verifiable tests and file-by-file reporting.
