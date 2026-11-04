# LISAN.PK — DAY 04 / 30 — CODEX IMPLEMENTATION ONLY

**Scheduled publication:** Friday, 6 November 2026  
**Source:** Unified 30-Day SEO Implementation Playbook, Day 04, page 9.  
**Primary:** B:T02 (P0 / informational), `apostille pakistan`.  
**Parallel audit:** A:F09 + A:F13.  
**Technical/trust actions:** A:F05, A:F06, A:F13, B:A05, B:A09, B:A27.  
**Project:** LISAN.PK (Next.js 16 / App Router).  

## Absolute rule: content owner versus implementer

**ChatGPT has already completed the full article. Codex must NOT write, research, rephrase, summarise, expand or SEO-generate any user-facing article copy.** Codex is responsible for layout, routing, integration, existing-data inspection, precise code/template bug fixes, automated tests and reporting. Do not insert alternative facts, examples, government fees, new FAQs, new promises or AI-generated introductions. If a factual claim or broken link seems doubtful, **flag it for ChatGPT editorial review**; do not silently replace it.

### Editorial asset supplied by the owner

- `LISAN_Day04_Apostille_Pakistan_Complete_Guide.md` — **COMPLETE 4,200+ word article** including YAML metadata, all H2/H3 sections, tables, 16 FAQs, official citations, internal links, and source notes.
- Canonical path **`/guides/apostille-pakistan`**.
- Intent **informational**, not a competing private commercial apostille service page.

**Predeployment note:** The editorial file is scheduled for **6 November 2026** and verified **3 November 2026**. When publishing at another time, set `datePublished` to the *actual first live publication date* and do not create a future-dated historical publication. Do not update `last_verified` without fresh verification.

## Task A — Publish the pillar guide with its supplied copy verbatim (B:T02)

1. Inspect the app routes and content repository. Confirm whether `/guides/apostille-pakistan` already exists. If an indexable page with equivalent search intent exists, **update in place and report duplication**; do not create another apostille pillar without owner approval.
2. Implement `/guides/apostille-pakistan` using the site's established, accessible guide layout. Insert **every section, table, warning, FAQ, citation and paragraph** from the supplied Markdown unchanged; only make harmless markup/escaping fixes. If the site uses MDX, convert syntax without changing sentence meaning or replacing content.
3. Preserve **one H1**, accurate title `Apostille in Pakistan (2026): MOFA Registration, Fees, Documents & Verification`, supplied meta description, indexability, self-referencing canonical and sitewide responsive styling. Do not create a keyword-stuffed secondary H1.
4. Add genuine `Article` and `BreadcrumbList` schema if supported by the existing application. Include factual `datePublished` and `dateModified`, canonical `mainEntityOfPage`, and a site-author entity only if verified; **do not fabricate a person reviewer, credentials, rating, employer, review or government affiliation**. FAQ markup is optional, and visible content must match any schema emitted.
5. Display the **translation-and-apostille order** and **fees** comparison tables accessibly on mobile (horizontal scroll container where truly necessary, clear headers and captions). Convert the 9-step process to an accessible ordered sequence or preserve the table. Never display a fake government website screenshot, invented apostille certificate or official seal.
6. Ensure all official external links point to the original listed source. Handle link rel security, keyboard navigation, heading IDs, and mobile width. Do not attach UTM parameters or affiliate redirects to government portals.
7. Connect the guide bidirectionally with **existing published pages**: `/services/attestation`, `/guides/mofa-online-attestation` (only if route actually exists), and `/services/translation/nikah-nama-marriage-certificate`. Keep the guide's other legitimate internal links. If a supplied link points to an unpublished route, add it to the broken-link/pending list and use a nonbroken existing relevant destination only **after noting the exact change**.
8. Add one or two contextual links from existing high-authority service pages or navigation to the pillar; do not create new text with unverified apostille assertions. If you cannot add a link without writing a new sentence, use existing link modules, labels provided below or flag it for ChatGPT.
9. Add the new canonical to the XML sitemap only if it is genuinely indexable and resolves 200. Update `lastmod` to actual file/content change date, not a fabricated publication date. Confirm no sitemap duplication or robots prohibition.
10. Verify no UI copies or content from old apostille articles are pasted alongside the new guide. Keep the informational pillar separate from `/services/attestation` (commercial).

**Approved minimal navigation link labels (verbatim):**

- `Apostille in Pakistan: Official Registration & Requirements`
- `MOFA Apostille Guide`
- `Certified Translation for Apostilled Documents`
- `MOFA Online Attestation Guide`

## Task B — Audit the original article directory and the 29 service-area entries (A:F09 + A:F13)

**This task is an inventory and internal-link/canonical audit, NOT automatic consolidation.**

1. Extract all listed blog URLs (historical plan estimates **87**) from `/directory`, repository Markdown content and sitemap. Count actual URLs, deduplicate by canonical route, and include all 29 city/service-area entries recorded in the existing directory; do not invent 87 or 29 as current-day counts if repository differs.
2. Produce `day04_blog_city_canonical_inventory.csv` with columns:
   `route,type,primary_topic,search_intent,title,h1,canonical,index_directive,in_sitemap,status,internal_link_count,near_duplicate_group,gsc_clicks_90d,gsc_impressions_90d,recommended_action,owner_approval`.
3. Test actual canonical targets and internal links. Identify repeated apostille/translation targets, incorrect/duplicate canonicals, orphaned service pages and links to missing routes.
4. For duplicate-content detection use a reproducible approach (exact title/H1 comparison + normalized text similarity or simhash), and **report confidence**. Similarity alone is insufficient to noindex or redirect a service page.
5. If GSC access is unavailable, use `NOT AVAILABLE — GSC ACCESS NEEDED` for private traffic data, rather than making up traffic, impressions or indexing status.
6. Distinguish genuine geographic service-area content from fabricated premises; propose targeted fixes rather than publishing dozens of automated location pages.
7. Protect *all* location × service URLs with verified clicks or meaningful impressions, especially Lahore/Karachi Nikah Nama and Urdu→English pages, until page-level GSC and owner approval are available.
8. Output a prioritized audit: `KEEP`, `FIX COPY`, `CONSOLIDATE CANDIDATE`, `NOINDEX CANDIDATE`, `REDIRECT CANDIDATE` — **none of the last three should be executed by this task**.

## Task C — Fix demonstrated template and factual integrity defects, using only approved microcopy

### C1. A:F05 — Wrong language direction on Urdu→English location pages

- Audit the programmatic content template and source data for every Urdu→English city route, including `/locations/lahore/urdu-to-english-translation`.
- Remove incorrect `Arabic`, `translate into Arabic`, `Saudi embassy acceptance` and scholarship-specific language where not relevant to an Urdu→English service.
- Make the template use the **actual source and target language values**, not generic Arabic defaults. Apply to visible headings, metadata, FAQs, labels, alt text and schema. Do not change genuine Urdu→Arabic routes.
- Use these **approved generic replacement sentences only where a sentence is necessary**:
  - `We translate Urdu documents into English while preserving names, dates, document structure and relevant official markings.`
  - `The receiving authority decides the required translation format and any additional certification or attestation.`
  - `Share the document and the receiving organisation's instructions to request a translation quote.`
- If a longer SEO rewrite is needed, list the affected route and exact original wording for ChatGPT to author later. **Do not write the rewrite yourself.**

### C2. A:F06 — “Branch” language misrepresenting physical premises

- Search directory, location templates, cards, breadcrumbs and metadata for `Branch`, `walk-in office`, `local office`, `office at`, or claims of permanently staffed branches in the 29 service areas.
- If no independently documented staffed premises exist for a given city, replace label **`Branch` → `Service Area`** and remove unverified physical addresses, street photographs, walk-in opening-hours and Google Business Profile implications.
- Use the approved factual generic sentence when needed: `LISAN.PK serves this area through its online document-translation enquiry and delivery arrangements; contact us to confirm service availability for your document.`
- Preserve verified real addresses only if owner documentation supports them. Do not invent local staffed offices or fake local photographs.

### C3. B:A05 — IATA/DTS template bleed

- Inspect `/locations/sukkur/iata-dts-umrah-travel-agency` and other template siblings for unrelated Saudi-scholarship, university-degree, BISE Sukkur or educational-attestation material.
- Remove **unrelated borrowed template content**, including mismatched metadata and erroneous schema, without inventing correct travel licensing facts. A service URL with no genuine unique copy should be **reported for editorial review**, not automatically filled with confident-sounding fiction.
- Audit templates to avoid rendering unrelated service facts. Evaluate thin city-service pages with GSC data before considering `noindex` or sitemap deletion.

### C4. B:A09 — Remove fabricated seals and official endorsement claims

- Search city/service templates for wording such as `Factually Aligned with Sukkur Government Records`, `official seal recognized by the Saudi Cultural Attaché`, `embassy approved`, `officially endorsed`, and related assertions.
- Remove unsupported statements; do not replace them with fabricated verification claims or badges. If a neutral substitute is necessary, use the approved sentence: `Document requirements vary by receiving institution. Please check the official authority's current instructions.`
- Do not alter a legitimate government logo owned by government; do not add one. Flag questionable other trust claims for separate Day 2 sitewide review.

### C5. B:A27 — Unverified response times, opening times and express service promises

- Search programmatic local pages and shared CTA components for promises such as `response in under 10 minutes`, `24h express`, `24–48h guaranteed`, or fixed `Mon–Sat 9am–8pm` hours.
- Keep claims only where owner-documented operations actually meet them consistently. Otherwise **remove the number/promise** and use the approved replacement: `Delivery options and estimated turnaround are confirmed after document review.`
- **Do not alter the Nikah Nama page's owner-approved prices or stated timings without an explicit page-specific reason.** The owner approved those previously; this task concerns *unverified programmatic sitewide promises*.

### C6. A:F13 — Near-duplicate location grid review

- Crawl every indexable location × service page and identify clusters with identical text aside from city names. Flag missing genuine unique content.
- **No automated noindex, 301, canonical changes, sitemap pruning or page deletion** without real GSC evidence and the owner's itemized approval.

## Task D — QA, publishing and final report

- Verify canonical route `/guides/apostille-pakistan` returns HTTP **200** on localhost; explicitly verify production URL separately after deployment.
- Confirm **article content matched supplied Markdown verbatim** (normalise only markup). Provide a diff or checksum of extracted final article copy against the supplied copy.
- Validate meta title, description, canonical, H1 count, headings, rendered tables/FAQ visibility, official government hyperlinks, internal navigation and mobile overflow.
- Check any schema object against visible content; don't create fabricated ratings or FAQ rich-result promises.
- Test Next.js route and app compilation (`npx tsc --noEmit`, production build, lint/tests if available).
- Inspect website directory and 29 area pages; record actual counted numbers.
- Confirm **all redirects, noindex directives, canonical merges, sitemap removals and deletion proposals remain unexecuted** unless expressly pre-approved.
- Stage only this day's changes and commit with a descriptive message after checks. If tools permit, push to `origin/main`, then identify deployment state accurately. A GitHub push does not prove production deployment.

### Return one structured completion report

1. **B:T02 Article:** local and production URLs, publication date, H1, SEO title, canonical, indexability, exact file paths, word count, any deviation from supplied copy.
2. **Technical edits:** A:F05, A:F06, B:A05, B:A09, B:A27 file-by-file old → new text and test evidence.
3. **A:F09/A:F13 inventory:** counted blogs/city-service areas, CSV saved, near-duplicate clusters, broken links, missing or wrong canonicals, GSC access status.
4. **Protected pages:** all traffic-positive city pages and existing article URLs preserved.
5. **Verification:** TypeScript, build, route statuses, sitemap, schema, responsive tables, real external/internal links, CTA tracking.
6. **Approval queue:** exact URLs proposed for noindex/redirect/consolidation, but no such action taken.
7. **Content issues for ChatGPT:** any discovered claims needing a new article or editorial rewrite (DO NOT write those yourself).
8. **Git:** commit hash, push status and observed production deployment independently.

**Success definition:** One fully published authoritative apostille pillar; zero Codex-authored editorial sections; template integrity fixes with approved neutral microcopy; directory and city-page audit evidence; no unapproved SEO-destructive actions.
