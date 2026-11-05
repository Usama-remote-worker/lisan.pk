# LISAN.PK — Day 15/30: Publishing & Technical Implementation Instructions

**Scheduled execution:** Tuesday, 17 November 2026  
**Prepared / researched:** 5 November 2026  
**Source of truth:** LISAN.PK Unified 30-Day Implementation Playbook, Day 15 (p.20); official source links provided in both editorial Markdown files.

## Role separation — mandatory

**ALL public-facing editorial content has already been authored and fact-checked.** The website implementation tool is responsible only for integrating and formatting approved text, maintaining functionality and existing SEO, testing, and returning an implementation report. **DO NOT write, rewrite, summarise, expand, replace, or auto-generate copy**, FAQs, prices, legal claims, dates, reviewer profiles or CTAs. If an external source has changed, flag the specific sentence and official source for editorial review rather than silently modifying the document.

## Deliverables and canonical targets

| Approved source file | Route | Action / cluster / priority |
|---|---|---|
| `LISAN_Day15_Saudi_Scholarship_Required_Documents_CHECKLIST_REWRITE.md` | `/blog/required-documents-saudi-scholarship-2026` | **REFRESH IN PLACE** • `B:K05`, P0, informational; incorporates `A:S08` HEC/IBCC/MOFA decisions |
| `LISAN_Day15_Urdu_to_Turkish_Translation_Service_NEW.md` | `/services/translation/urdu-to-turkish` | **NEW SERVICE PAGE**, `A:T08`, P1, transactional, only after real Urdu→Turkish fulfilment and certification-path checks |

### Decision for A:S08

The original-audit task calls for **HEC vs IBCC vs MOFA** content but specifies refreshing the existing documents URL rather than creating a competing page. That material is already supplied as a detailed standalone H2 and decision table **within the checklist rewrite**. Keep the existing separate `/blog/saudi-scholarship-document-attestation-pakistan` as a technical deep-dive page with differentiated intent. **Do not create a third “HEC vs IBCC vs MOFA” URL.**

## 1. Preflight: protect search equity

1. Confirm repository branch, deployment flow and existing article source file. Take a route inventory before edits.
2. Export baseline URL data, if connected: last six months **GSC clicks, impressions, query set, average position, canonical** for the selected checklist URL; record the data range. The PDF consolidation map (Group F2) reports approximately **484 clicks / 25,217 impressions** for the main documents URL; a narrower keyword-cluster section separately reports **5 clicks / 132 impressions**. These are different scopes, not a reason to overwrite one with the other.
3. Preserve the **exact existing slug** `/blog/required-documents-saudi-scholarship-2026` even though its content now covers 2026–27. Maintain historical `datePublished` / original CMS publication date; set `dateModified` only when the replacement actually deploys.
4. Confirm that `/services/translation/urdu-to-turkish` does not already resolve to a different page. If it does, inspect route ownership and GSC before changing anything.
5. Detect the site's renderer: Markdown frontmatter, content collections, database, service data objects or TSX. Fit the supplied copy to that architecture without duplicating H1s.

## 2. B:K05 — implement refreshed Saudi documents checklist

**SEO:**

- Primary phrase: `saudi scholarship required documents`.
- Natural support: `documents for study in saudi portal`, `attestation for saudi scholarship pakistan`, `apostille for saudi scholarship`, `saudi scholarship document translation`, `recommendation letter for saudi scholarship`, `saudi scholarship medical certificate`.
- Intent **informational**: satisfy query with direct answers and a useful checklist; include optional commercial CTAs but do not turn it into a sales-only page.
- Use exact metadata in file frontmatter unless a limitation prevents it; report the limitation.
- Set self-referential canonical to `https://www.lisan.pk/blog/required-documents-saudi-scholarship-2026`.
- Preserve internal backlinks from scholarship hub, blog, program finder and related university pages.

**Copy implementation:**

1. Replace the existing article body **in place** with the complete approved Markdown text; keep one visible H1.
2. The opening direct answer should render above the fold and not be buried under intrusive promotion.
3. Render the bachelor/master/PhD comparison table responsively (horizontal scrolling with table caption or a semantic alternative); do not remove columns, hide qualifiers or convert ambiguous cells into categorical “Required” badges.
4. Render the **24-item checklist** as accessible tick boxes. A static HTML checklist is acceptable; optionally persist selections in local browser storage, **without uploading sensitive user data**. Include an accessible “Clear checklist” control only if UX architecture provides an appropriate label and action. Preserve all 24 checklist statements exactly; don't auto-tick items.
5. Render HEC–IBCC–MOFA decision table with visually distinct caveat: `only if attestation is required`.
6. Keep all citation hyperlinks and the official-source section. Do not change an institutional exception to a universal requirement.
7. Remove old unsupported statements appearing in previous body: “all documents must be translated into Arabic,” “100% compliant”, universal 18-month passport rule, mandatory 500–800-word SOP, universal number of reference letters, mandatory HEC+IBCC on every record, automatic portal rejection based on file-size rules, unsupported stipend amounts.
8. Keep the **2026 window closed** statement until there is a confirmed official update. Do not invent a 2027 general Study in Saudi opening date. On publication day review KAU's specific announcement and the actual Study in Saudi home screen; refer editorial changes back for approval.
9. Correct inaccurate authorship: keep “LISAN.PK Editorial Team” unless a named human expert has genuinely reviewed and approved the article. Do not fabricate bios, credentials, review stamps or proof of affiliation.
10. Make CTAs point only to verified live internal destinations and preserve existing phone/WhatsApp/form conversion instrumentation.

**Schema and SEO:**

- Existing `Article`/`BlogPosting` schema: update headline, description, dates, canonical and author accurately. Keep any publisher schema to facts supported by real business data.
- `BreadcrumbList` only if breadcrumbs match visible navigation.
- `FAQPage` structured data only if the FAQs remain fully visible; note that FAQ rich results are limited and not guaranteed.
- Do **not** add fake `AggregateRating`, fabricated reviews, `HowTo` rich-result promises or unsupported trust certifications.
- Ensure unique heading IDs, accurate open-graph title/description and sitemap last-modification from real deployment.

## 3. A:S08 — HEC/IBCC/MOFA content positioning

- The specific `A:S08` content already appears in the checklist. Preserve its **document-specific attestation decision tree**.
- Link to the existing deep-dive technical article: `/blog/saudi-scholarship-document-attestation-pakistan`.
- Avoid replicating the full technical article verbatim or routing its own higher-intent “how to attest” searches into a simplified checklist.
- In that existing technical article, check and report **duplicate H1 issues and outdated content** without performing a separate complete rewrite today. For technical template fixes (e.g. duplicate H1), make minimal code changes where they do not alter approved copy; report details.

## 4. A:T08 — new Urdu→Turkish service page (conditional release)

**Mandatory publish gate:** Before making the page accessible and indexable, obtain operational confirmation that LISAN.PK can actually deliver **Urdu-source → Turkish-target** translation; establish the real translator/reviewer workflow and actual output formats. For any advertised Turkish sworn translator/notary facilitation, obtain verifiable operational evidence first. The supplied copy intentionally does not promise automatic Turkish notarial certification.

**If the service is not fulfilable:** save the content in the repository as an unpublished draft (do not index/advertise a live service page); report the blocker. Do not manufacture a translator biography or pretend availability.

**If confirmed:**

1. Create `/services/translation/urdu-to-turkish` with the exact supplied copy and frontmatter metadata.
2. Distinguish source language **Urdu→Turkish** in heading, schema, nav label and relevant links. **Do not** repurpose `/services/translation/turkish-translation` (existing English↔Turkish hub) or create a second competing English→Turkish URL.
3. Preserve special Turkish legal terminology such as `yeminli tercüman`, `noter onayı`, `denklik` and source qualifications.
4. Allow responsive document type table, FAQs and a first-party quote CTA; verify contact destination before changing button behaviour.
5. Service/FAQ schema must not state credentials, locations, pricing or provider approvals not substantiated in the repository or by the business owner.
6. Add to XML sitemap and relevant translation navigation after successful production deployment, with self canonical.
7. Set `datePublished` to actual deployment date, not the scheduled date if publication occurs later.
8. Add a contextual link from `/services/translation/turkish-translation` to the new page **only if its existing copy can be minimally augmented with a neutral link label**; where new public prose would be needed, request editorial approval first.

## 5. Consolidation map — NO automatic 301 redirects today

The plan mentions consolidating Groups D/F. Its separate **Group F2** map gives these relevant source candidates:

| Legacy URL | Plan's proposed action | Day 15 safety decision |
|---|---|---|
| `/blog/bachelor-scholarship-applications-2026-documents-you-need-before-21-may` | 301 → canonical documents checklist | **Approval pending**. Inspect exact indexed URL, current GSC and content relevance. |
| `/blog/masters-scholarship-documents-guide-2026-everything-you-need-before-deadline` | 301 → canonical documents checklist | **Approval pending**. Plan reports some clicks; preserve unique master's intent until reviewed. |
| `/blog/saudi-scholarship-application-review-checklist` | 301 → canonical documents checklist | **DO NOT redirect automatically.** Its 25-point pre-submission-review intent differs from the full document inventory and this article links to it. Requires a specific editorial/GSC decision. |

**Group D** centres on the Saudi scholarship *translation* topic, with a separate, high-performing canonical `/blog/saudi-arabia-scholarship-translation-services-2026`; **do not** redirect these translation-intent URLs to today's general document checklist. **Group F** includes broad master guides and the scholarship roadmap, also distinct from the documents checklist. For each potential redirect, return a proposed mapping showing **source URL, destination, recent GSC data, current organic keywords, unique information at risk, canonical, and recommendation**. Execute none without express owner approval.

## 6. Internal linking — implement only confirmed paths

**From the refreshed checklist (already included in Markdown):**

- `/blog/saudi-scholarship-application-review-checklist`
- `/blog/saudi-scholarship-document-attestation-pakistan`
- `/guides/hec-online-degree-attestation` *(Day 6 may be pending publication; verify)*
- `/guides/apostille-pakistan` *(Day 4 may be pending publication; verify)*
- `/guides/certified-translation-vs-apostille-pakistan` *(Day 5 may be pending; verify)*
- `/blog/saudi-scholarship-eligibility-pakistani-students`
- `/blog/study-in-saudi-application-status-under-process`
- `/blog/saudi-scholarship-complete-roadmap`
- `/consultancy/saudi-scholarship`
- `/translation-english-to-arabic`
- `/pricing`

**From the Urdu→Turkish page:**

- `/services/translation/turkish-translation`
- `/services/translation/nikah-nama-marriage-certificate`
- `/services/translation/birth-certificate-translation`
- `/guides/apostille-pakistan`
- `/pricing`
- `/contact`

Where a supplied link resolves to a non-live URL, do not create an invented redirect or alter the article's text; report it and withhold that link from deployment pending editorial approval or publication of its target.

## 7. Tests and release checklist

- [ ] New code compiles: `npx tsc --noEmit`; run project-specific build/lint if available.
- [ ] Correct HTTP 200 and accurate content on localhost for both approved routes; new route only if verified feasible.
- [ ] Mobile and desktop heading/table/checklist/FAQ display accessible.
- [ ] One H1 per page; correct canonical; non-duplicated metadata; sitemap updated accurately.
- [ ] Existing high-performing scholarship checklist URL not changed or redirected.
- [ ] Official references are clickable and source labels map to claims.
- [ ] All internal links checked; no unapproved stale `/guides` links published as 404s.
- [ ] Current intake dates rechecked; expired 2026 banners never shown as open.
- [ ] No broad Arabic-translation mandates, fabricated guarantees or promised visa outcomes.
- [ ] Quote, phone and WhatsApp actions tested; GA4 `generate_lead` events do not double-fire.
- [ ] Personal document scans handled securely; no sensitive uploads stored in logs or sent to unapproved third-party scripts.
- [ ] No automatic consolidations/301/noindex; return proposed mappings only.
- [ ] Deploy only approved changes; confirm real production URLs, not only localhost or GitHub commit.

## 8. Required implementation report

Return the following in a concise table:

1. Each route, source file, status (**published / draft / blocked**) and deployed production URL.
2. Changed file list and whether original checklist URL/datePublished were preserved.
3. Urdu→Turkish service fulfilment verification outcome, including sworn/notary scope.
4. Source/date conflicts that need editorial changes.
5. Internal-link failures or unpublished Day 4–6 pages.
6. GSC consolidation proposals, **without executing redirects**.
7. Test output: TS/build, HTTP status, schema, mobile QA, conversion events.
8. Remaining blockers and next actions.

**Definition of done:** The Day 15 checklist is refreshed in place with correct apostille/translation logic; the Urdu→Turkish service page is published **only if actual delivery is confirmed**; and every suggested redirect remains explicitly pending approval.
