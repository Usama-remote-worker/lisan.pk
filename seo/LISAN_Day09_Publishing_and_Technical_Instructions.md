# LISAN.PK — Day 9/30: Publishing & Technical Implementation Instructions

**Scheduled publication:** Wednesday, 11 November 2026  
**Editorial fact-check:** 5 November 2026; official sources must be rechecked on publication date  
**Scope:** B:T07 (P0), A:T49 (P1), A:T45 (P0), A:F10, A:F11 and B:A15  
**Work split:** All public content has already been written in the supplied Markdown files. The implementation tool is responsible for code, layout, routing, metadata, accessibility, security and QA **only**.

## 0. Non-negotiable editorial ownership

These are the only approved public-facing content sources for Day 9:

1. `LISAN_Day09_Nikah_Nama_NVC_USCIS_Article_REWRITE.md` — complete blog replacement.
2. `LISAN_Day09_USCIS_Certified_Translation_Requirements_SERVICE_REWRITE.md` — complete requirements page replacement.
3. `LISAN_Day09_Online_Translation_Quote_Form_APPROVED_COPY.md` — complete contact form text, validation strings, confirmation states and replacement trust-claim snippets.

**Do not generate, paraphrase, “improve,” shorten, expand, keyword-stuff, or auto-rewrite any visitor-facing article, FAQ, heading, description, CTA or contact-form text.** Preserve the editorial copy exactly, subject only to technical serialization (Markdown → JSX/components). Do not allow an AI-based coding tool to draft additional copy for related pages. If source facts conflict with current official instructions, **halt that content's publication and report the exact sentence and new evidence** for editorial correction.

## 1. B:T07 — Replace existing Nikah Nama/USCIS article in place

**Canonical:** `https://www.lisan.pk/blog/uscis-marriage-certificate-translation`  
**Action:** FULL REFRESH of existing article, **not** a new competing blog  
**Primary keyword:** `nikah nama english translation for nvc`  
**Search intent:** Transactional + actionable requirements guide  
**Plan evidence:** 24 clicks / 670 impressions for existing canonical (reported in plan; not independently rechecked against current GSC)

### Required actions

1. Find existing content record by canonical slug, not only by file name. Audit `src/content/blog`, MDX ingestion, blog index/data registry, route dynamic rendering, and metadata generation.
2. Save current article metadata before replacement. **Preserve the existing slug, canonical URL, original publication date, article ID and inbound links.** Add or update the `dateModified` field with the actual deployment date. The Markdown `original_published_date` value is an instruction to verify the CMS value—not a reason to overwrite it.
3. Replace current article body **verbatim** with supplied Day 9 article. The source Markdown contains the complete main copy, comparison tables, steps, FAQs, signed translator **template** and official source references.
4. Render one H1 only. Support proper heading hierarchy; tables scroll horizontally on small screens; check list and blockquote accessibility. Do not surface front-matter `editorial note (not for front-end display)` paragraphs in the public article. Remove the entire editorial-only paragraph from rendered output while preserving the working source.
5. Preserve or assign correct metadata: title, description, canonical, `og:url`, Open Graph / Twitter title/description; use meaningful image only if already approved; no fabricated photo or translator portrait.
6. Article structured data: `BlogPosting` (if appropriate), `BreadcrumbList`; `datePublished` remains original, `dateModified` is actual deploy. `author`/`reviewedBy` only for independently verified people. FAQs can be semantically rendered for users; Google FAQ rich-result eligibility is restricted, so do not promise rich results.
7. Check links to `/contact`, `/pricing`, `/services/translation/nikah-nama-marriage-certificate`, `/services/uscis-certified-translation/requirements`, `/services/translation`.
8. Keep the existing `/services/uscis-certified-translation/marriage-certificate` **service** URL separate; it can link to the guide, but **do not** create a competing article with the same query target.
9. Remove existing “strict self-translation outlaw,” automatic-RFE and guaranteed-acceptance claims from **this replaced article**. The new text provides the corrected legal distinction.
10. Do not add a claimed real redacted sample until an actual authorised and properly anonymised source file exists. The certification sample in our article is **illustrative text only**.

### Canonical/query ownership

| URL | Primary intent | Action |
|---|---|---|
| `/blog/uscis-marriage-certificate-translation` | Marriage/Nikah Nama/NVC informational + transactional | **KEEP; update** |
| `/services/uscis-certified-translation/requirements` | USCIS certificate standards and translation service | **KEEP; update** |
| `/services/uscis-certified-translation` | USCIS translation service hub | **KEEP; audit inherited false claims** |
| `/services/uscis-certified-translation/marriage-certificate` | Order a marriage-certificate translation | **KEEP; link to guide; audit promises** |
| `/blog/uscis-birth-certificate-translation` | Different birth-certificate document intent | **KEEP; no merge** |
| `/services/translation/nikah-nama-marriage-certificate` | Broad Pakistan Nikah Nama/MRC service | **KEEP; link to U.S. immigration guide** |
| `/blog/uscis-certified-translation-services-complete-guide` | Overlapping general USCIS guide | **Only audit; no redirect without current GSC evidence and owner approval** |

**Important:** Do not automatically implement the PDF plan's suggested 301s from historic GSC snapshots. Recheck 90-day page-level query data and obtain approval for any consolidation, redirect or noindex.

## 2. A:T49 — Replace USCIS translation requirements service copy

**Canonical:** `/services/uscis-certified-translation/requirements`  
**Primary keyword:** `uscis certified translation pakistan`  
**Supporting:** `uscis urdu to english translation`, `arabic to english uscis certified`

1. Replace **all body content** on this page with the supplied approved Markdown. Retain existing route, information architecture, breadcrumbs and functioning service UI.
2. Ensure the copy differentiates the binding **USCIS 8 CFR 103.2(b)(3)** rule from the **I-130-specific certification details** and **NVC/Islamabad** instructions. Do not silently promote “must use a licensed third-party translator,” “self-translation prohibited in all cases,” “notarization always required,” “approved by USCIS,” or “guarantees approval.”
3. Implement the actual certification example as **illustrative typography**, not a falsely filled sample with invented identity/signature/stamp. If a real sample becomes available, send for owner permission and a privacy review first.
4. Use contextual links to marriage guide, Arabic-to-English service, Nikah Nama service, contact, pricing; preserve independent target queries.
5. The service page's FAQ belongs to this page. If it has pre-existing FAQ structured data, regenerate from the **actual displayed FAQs only** and ensure no conflicts with inherited template data.
6. Do not automatically overwrite the USCIS service hub, cost, or FAQ page copy. **Audit** those pages for incorrect blanket claims and price conflicts; any copy to publish there must come from the Day 9 approved UI trust replacements or a later editorial asset.
7. Check inherited globally shared elements for `100% embassy acceptance`, `200% guarantee`, `USCIS-approved translators` and “24-hour guaranteed.” Replace ONLY a clearly matching short claim using **approved exact replacement wording from the third Markdown file**, or flag longer bespoke paragraphs for editorial review. Do not create new marketing copy.

## 3. A:T45 + A:F11 — First-party online translation quote workflow

**Target:** `/contact` and the existing quote CTA wherever it is reused.

### Form structure and behavior

Use the supplied **Day 9 form-copy file exactly**. Implement:

- Name and email (required as needed for reply); phone/WhatsApp optional when email exists; preferred response method and conditional contact requirement.
- Source language / target language selectors with `Other` input.
- Document type, receiving authority or intended use, certification need.
- Optional document count, page count, delivery deadline and free-text details.
- Optional document upload **only if secure server-side storage and access controls exist and are tested**.
- Required authorization/privacy acknowledgement; separate **unchecked** optional marketing consent.
- Real success, error, loading and validation states, using approved strings.
- Unambiguous quote-only (not an order, not an acceptance guarantee). No payment obligation until scope and price agreed.
- Accessible labels, explicit error associations, keyboard navigation, focus handling, screen-reader announcements, mobile-friendly dropdowns.

### Secure upload requirements — block publication if not met

1. Server-side allowlist actual MIME/file types and verify file signatures; never trust only filename extension.
2. Enforce size, count and rate limits; set a server-side size cap and reflect it accurately next to the uploader without inventing a numeric limit in copy.
3. Use private, access-controlled storage; no direct public `/uploads/...` URL. If signed URLs exist, use limited validity and avoid indexing or caching sensitive content.
4. Protect from script injection and CSRF as applicable; scan documents for malware using the site's actual supported tooling or keep upload disabled until this exists.
5. Avoid exposing complete documents, file contents or names in analytics, client logs, error traces or third-party form URLs. Do not send files to client-side LLM services.
6. Review privacy policy for actual collection, processor, purpose, retention/deletion, access and contact details before linking or making any “secure” claim. Document any mismatch for owner/legal review. Never assert GDPR compliance based on text alone.
7. Do not request unnecessary passport/CNIC scans, USCIS receipt numbers, financial records or visa-case passwords just to obtain a preliminary quote.
8. If a compliant upload cannot be built and tested today, **ship the first-party form with upload disabled/hidden and the approved non-upload request flow**, then record upload as a gated follow-up. Do not expose a fake “Upload file” button.

### Submission & anti-spam

- POST to a real first-party backend endpoint with validation and bot/rate controls; server-side delivery/persistence must be reliable.
- Return a success status **only after** the submission is saved or reliably handed off. Deduplicate retries where possible.
- Error messages must use the approved text. If downstream email notification fails after persistence, record retry internally; do not lose the lead or falsely claim delivery.
- No third-party Form redirect should replace the first-party quote request. Preserve WhatsApp as user-selected backup.

## 4. B:A15 — Remove externally hosted Google Forms from primary quote journey

1. Search footer, sticky CTA, floating widgets, service hubs, mobile navigation, blog CTAs and header for `forms.gle`, Google Forms, `window.open`, static redirect fields.
2. Repoint genuine quote CTAs to `/contact` and keep explicit `WhatsApp` choices mapped to the actual business number.
3. Do not remove other Google Forms used for unrelated purposes without checking their ownership and function.
4. If an external form remains for a specific non-quote workflow, document the exception; **do not** incorrectly claim that all leads are captured on-site.
5. Test external links: no invisible new tab, blocked popups or inaccessible click targets.

## 5. Lead analytics — real events only

The Day 1 report says global GA4 / GTM `generate_lead` tracking was implemented, but this alone does not prove that it records actual leads.

- On successful **server-confirmed** quote-form submission: fire a **single** GA4 `generate_lead` event; include safe parameters (`lead_source=contact_form`, `service_type`, `language_pair`) only if non-identifying and compliant. Do not attach applicant names, document contents, phone, email or immigration identifiers.
- If existing global form listeners already fire `generate_lead` on form submit, deduplicate to avoid firing once on click and again after success.
- WhatsApp and phone clicks can have separately labelled **click-intent** events; be clear that a click is not proof of a completed enquiry or paid conversion.
- Confirm GTM and direct `gtag` scripts do not double-count the same event.
- Verify in **GA4 DebugView / Realtime**, and ensure `generate_lead` is configured as a key event when desired. Report actual event test evidence; do not claim GA4 key-event success based only on `tsc`.

## 6. A:F10 — Editorial compliance sweep (audit-first)

The audit reported approximately 87 directory-listed articles plus service pages, with historical unsupported acceptance wording. Do not mass-generate replacements or auto-publish an 87-page rewrite.

1. Crawl or parse **all indexed/linked content** in the repository, including dynamic service templates and shared trust blocks.
2. Record page, path, snippet, location (file/line), risk type and recommended fix in a CSV/Markdown issue register.
3. Prioritize high-click pages, Nikah Nama/USCIS, Saudi scholarships, apostille/attestation and all contact/quote entry points.
4. Risk patterns include: `100% accepted`, `guaranteed visa`, `200% guarantee`, `USCIS-approved translator`, `government-affiliated`, `instantly guaranteed`, unverified price/time promises and outdated embassy requirements.
5. For simple shared trust strings, use only the **exact approved replacements** in the third file. For page-specific long text, **do not write substitute text**; mark `NEEDS EDITORIAL COPY` with route/line and send the report back.
6. Exclude public citations, quotations of official law and clear explanatory statements from naive phrase replacement.
7. Capture post-change spot checks and show exact before/after snippets for every automatic replacement performed.

## 7. Technical SEO, legal accuracy and release gates

- **Source re-check:** US DOS Pakistan reciprocity (MRC/issuers); USCIS I-130 instruction; 8 CFR rule; NVC language exception/scan rules; Islamabad post-specific interview instruction; CEAC statuses.
- **CRITICAL:** The article's “three-document bundle” is expressly **not** a blanket legal requirement. Do not change that nuance in headings, snippets or schema.
- **CRITICAL:** Form I-130 translator signature, printed name, date and contact information come from form instructions; do not suggest all USCIS forms always have identical instruction details.
- **CRITICAL:** CEAC size constraints may change. Recheck the currently displayed 4 MB per file rule at release; stop and request editorial update if changed.
- **Prices:** Older USCIS hub/service pages have inconsistent `$15`, `$20`, and `24 hours` promises versus `/pricing` and Nikah Nama quotes. Do not invent new rates or silently reconcile contradictions. List them for owner review; link the two edited pages to `/pricing` or quote form as written.
- **Schema:** `BlogPosting` for blog; `Service` for service; `BreadcrumbList` as applicable. No fabricated `AggregateRating`, testimonials, named review authors, endorsement or rich-result promises. FAQ text in structured data, if used, must match visible FAQ text exactly.
- **No new slugs/redirects/noindex** unless approved after fresh 90-day GSC audit.
- **No unverified author biography:** Preserve verified site editorial entity only.
- **No competitor, VisaJourney or forum claims as authority:** Official government sources govern factual immigration requirements.

## 8. Required verification checklist and implementation report

**Content and routing**
- [ ] Existing Nikah Nama blog path returns HTTP 200; canonical unchanged; old publication date preserved.
- [ ] Existing USCIS requirements service path returns HTTP 200; canonical unchanged.
- [ ] Single H1 and correct internal links on both pages.
- [ ] Blog table and >4,000-word article render correctly on mobile without cut-off.
- [ ] FAQ text matches editorial copy; no unresolved placeholders or copied code fences in production.
- [ ] No generic Saudi scholarship CTA is shown inside U.S. immigration content.
- [ ] Changes to `dateModified` and sitemap `lastmod` represent actual content changes.

**Forms and privacy**
- [ ] `/contact` posts to real first-party backend.
- [ ] Invalid entries, upload errors, server errors, successful requests and duplicate retries tested.
- [ ] Required consent and optional marketing checkboxes behave correctly.
- [ ] Upload privacy gates either pass with evidence or feature remains disabled.
- [ ] External `forms.gle` quote buttons replaced sitewide or exceptions listed.
- [ ] WhatsApp and phone buttons remain functional.

**Analytics and engineering**
- [ ] `npx tsc --noEmit` passes; relevant Next.js production build/test checks pass.
- [ ] No hydration warnings or broken interactive forms.
- [ ] Test GA4 successful-submit event once; distinguish click-intent events.
- [ ] Structured data valid; `og:url` matches canonical; sitemap route present.
- [ ] Production URLs checked after deployment, not only localhost.

**Report format**

1. Commit hash / deployment status (do not claim production without evidence).
2. Files changed and routes affected.
3. Content sources used (the three supplied Markdown files).
4. Functional test outcomes and screenshots or logs for mobile/form events.
5. Compliance audit list: unsupported claims found, exact replacements done, `NEEDS EDITORIAL COPY` items.
6. Remaining unapproved redirects, price conflicts, secure-upload blockers, GA4 issues or other limitations.

**Completion definition:** Editorial work is prepared now. Day 9 is implementation-complete **only after** publication, functional form/security validation, local & production checks, and an issue register for unresolved sitewide content claims.
