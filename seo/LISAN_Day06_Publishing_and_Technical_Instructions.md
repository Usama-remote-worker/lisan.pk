# LISAN.PK — DAY 6/30
## Publication & Technical Implementation Instructions (Implementation Only)

**Schedule:** Sunday, 8 November 2026  
**Approved editorial copy:** The two attached Day 6 Markdown files.  
**Task IDs:** B:T05, A:T01, B:T15 (audit only), A:F04, B:A02.  
**Framework:** Existing Next.js project; inspect repository instead of assuming content architecture.  
**Restriction:** Implementation tool must NOT author, paraphrase, regenerate, embellish, shorten or merge the approved body copy. All public-facing article/service-page text is already supplied.

---

## 0. Inputs and nonnegotiable guardrails

Required editorial files:

1. `LISAN_Day06_HEC_Online_Degree_Attestation_2026_GUIDE.md`
2. `LISAN_Day06_English_to_Arabic_Translation_Service_REPLACEMENT.md`

The Markdown frontmatter gives target metadata and canonical URLs. Use the complete approved text between frontmatter and end-of-file without omission. Adapt **only** metadata key names and internal render components if the repository requires a specific schema. Do not publish raw YAML in the user-facing page.

**No content writing** delegated to implementation. If a sentence conflicts with site architecture, legal review or live data, flag the exact passage and request editorial approval; do not silently rewrite.

**No redirects or noindex without explicit page-by-page owner approval.** Preserve existing successful URLs and traffic. No mass merging of 12 blogs. No invented customer stories, staff qualifications, fake HEC certificate mockups, office addresses, reviews or ratings.

---

## 1. B:T05 — Publish the NEW HEC Online Degree Attestation Guide

**Canonical path:** `/guides/hec-online-degree-attestation`  
**Primary intent:** informational  
**Primary term:** `hec degree attestation online`

### Procedure

1. Search the repo for `/guides` routing, dynamic content records, MD/MDX frontmatter conventions, sitemap generation, breadcrumbs and article component used by Day 3/4 guides.
2. Check whether this exact slug already exists in the repo or CMS. **If it exists, update the current record instead of creating a duplicate**. Otherwise, create precisely one page at the required path.
3. Ingest **all** copy from `LISAN_Day06_HEC_Online_Degree_Attestation_2026_GUIDE.md` unchanged. Retain tables, direct-answer opening, H2/H3 structure, FAQs, references, caution notices and CTA links.
4. Use the specified SEO title/description/canonical. Use one semantic H1, article landmarks, appropriate breadcrumb and `datePublished`/`dateModified` based on actual publication.
5. Connect the route to navigation/category listing, `sitemap.ts`, appropriate guide index, and article-related links **as required by repository conventions**; do not create links to non-existent page targets.
6. Keep all official HEC links externally directed to the verified official domain. No fake verification endpoint or third-party HEC payment screen.
7. Do not insert a mock HEC e-Attestation sample or fabricated barcode/QR. The approved copy clearly explains that a vetted sample is pending.
8. **HEC information precedence:** The current official DAS page supersedes old HEC walk-in/courier instructions still indexed online. Do not accidentally backfill archived procedural text from those older resources.
9. Run local HTTP test, mobile screenshot/layout check, visible table formatting, FAQ folding behaviour (if applicable), and structured-data validation.

### Schema

- `Article` or `BlogPosting` if consistent with actual authorship and on-page content.
- `BreadcrumbList` with true navigational trail.
- `FAQPage` JSON-LD only if the FAQ questions and answers remain fully visible on the rendered page and the implementation has an established FAQ schema pattern. Do **not** claim Google FAQ rich results are guaranteed.
- Never fabricate `author`, `reviewedBy`, government endorsements, `AggregateRating` or an expert credential. Use actual confirmed site information only.

---

## 2. A:T01 + A:F04 — REBUILD EXISTING English → Arabic Landing Page

**Preserve URL exactly:** `/translation-english-to-arabic`  
**Canonical:** `https://www.lisan.pk/translation-english-to-arabic`  
**Primary intent:** transactional; source English → target Arabic  
**Primary term:** `english to arabic translation pakistan`

### Procedure

1. Locate the existing route/record and inspect its complete render tree, including shared service components, hero, footer and FAQ components.
2. Replace **page-specific editorial text** with `LISAN_Day06_English_to_Arabic_Translation_Service_REPLACEMENT.md`. Preserve existing layout, responsiveness, analytics and functional CTAs unless a change is needed to fix a verified problem.
3. Set the exact supplied page meta title and description. Ensure the H1 is `English to Arabic Translation Services in Pakistan` and appears only once in the page's primary content.
4. **Remove Urdu→Arabic keyword stuffing** on this directional page. Urdu→Arabic is mentioned only as a distinct service direction and linked to the existing Arabic hub/contact channel. Do not redirect users who specifically need English→Arabic.
5. Remove unsupported page-level claims like `100% Embassy Accepted`, `200% Guarantee`, `MOFA Approved`, `Embassy Recognized`, `40+ years since 1980`, if no approved evidence exists. Do not imply translator stamps equal official government approvals.
6. Check whether a shared “Why Authorities Trust” block or service component injects these same claims after the page-specific content. Correct the **shared component** using an approved neutral factual presentation or suppress that module on this route **without writing new invented trust copy**. Report other affected pages; do not make broad content changes beyond approved scope.
7. Keep quote, WhatsApp, phone and contact CTA interaction working and correctly tracked. The provided number is `+92 328 8155866`; avoid silently swapping in another site's phone number.
8. Price must remain quote-based until pricing for this exact service is owner-approved. Do not auto-import 2026 scholarship package prices or Nikah Nama prices into generic English→Arabic translation.
9. Do not show a fabricated translation certificate sample. Only add approved real, redacted samples if supplied by the owner.
10. Maintain a distinct role for the Arabic services hub `/services/translation/arabic-translation`; this directional landing page should own exact English→Arabic transactional queries.

### Conversion validation

- Clicking WhatsApp opens the correct approved business number.
- Clicking phone uses a working `tel:` anchor if applicable.
- Quote buttons route to existing functional contact/quote mechanism.
- Event tracking sends one attributable lead event per interaction, without duplicate firing.
- No 404s, unintended popups or invalid external forms.

---

## 3. B:A02 — CRITICAL correction to `/services/attestation`

**Known bad statement:** Site describes `physical representation for degree verification` at HEC.

**Correct factual policy:** Under HEC's new online, paperless DAS, applicants submit the application online, undergo HEC review and university verification, and receive an electronic attestation certificate, without needing to visit HEC offices or courier original degrees under that workflow. [HEC official source](https://www.hec.gov.pk/english/services/students/das/Pages/Degree-Attestation.aspx).

### Exact action

1. Find every occurrence of `physical representation`, `send originals to HEC`, `HEC agent`, `HEC walk-in`, `HEC courier submission`, `HEC representation`, `guaranteed degree attestation`, and equivalent wording on `/services/attestation` and any shared components that render there.
2. If the **approved Day 3 service-page replacement** already corrected the issue, preserve that newer copy; do not restore the old text from outdated local data.
3. If the bad text is still live and Day 3 approved copy was not applied, remove the outdated content and point the relevant HEC section to the new approved `/guides/hec-online-degree-attestation` guide. Use only approved factual statements from the Day 6 guide; do not invent a new service guarantee.
4. Clearly distinguish independent translation and document guidance from HEC's official application service. **Never** collect clients' HEC password/OTP or claim HEC-affiliated priority channels.
5. Preserve the attestation page URL, schema and other previously approved Day 3 corrections concerning MOFA and Saudi apostille.
6. Record before/after excerpts and the actual source file(s) changed.

Also check a shared sidebar/footer for outdated `100% acceptance`, `200% guarantee`, unsupported founding-year and branch-location claims. Report where those claims remain; correct only if covered by already approved replacement copy or established neutral UI patterns.

---

## 4. B:T15 — Arabic Commercial Hub & Cannibalisation AUDIT (NO MERGES TODAY)

Original audit proposes **~12 blog redirects and redirecting `/translation-english-to-arabic`** to `/services/translation/arabic-translation`; Source A explicitly requests rebuilding and preserving that existing EN→AR directional page. The combined plan itself flags the conflict and requires owner-level approval.

**Decision for Day 6:** Preserve the EN→AR landing page. No irreversible redirection.

### Prepare a review CSV/report

For each possible competing URL, record:

- Existing URL and HTTP status.
- Page intent: exact EN→AR service, generic Arabic services, Urdu→Arabic service, educational informational article, Arabic→English, city service, etc.
- H1, `<title>`, meta description, canonical, indexation directives.
- 90-day GSC clicks, impressions, top queries and queries shared with another URL **if access exists**; if unavailable, explicitly mark `GSC not available` rather than invent metrics.
- Referring/internal links that would be affected.
- Recommendation: `KEEP`, `REWRITE IN PLACE`, `RELINK`, `CANDIDATE FOR CONSOLIDATION – APPROVAL REQUIRED`.

Produce a **candidate redirect map for review only**. Do not implement 301, 308, canonical override or `noindex` without explicit owner approval.

**Intent ownership after Day 6:**

- `/services/translation/arabic-translation` → broad Arabic translation service hub.
- `/translation-english-to-arabic` → exact **English → Arabic** transactional intent.
- Separate future `/services/translation/urdu-to-arabic` → only after verified operational capacity and independent approved copy; do not generate it today.
- `/services/translation/academic-degree-transcript` → academic-specific service.
- `/guides/hec-online-degree-attestation` → HEC informational guide.

---

## 5. Cross-links, technical SEO and quality checks

### Target links supplied by the editorial files

- `/services/attestation`
- `/services/translation/academic-degree-transcript`
- `/services/translation/arabic-translation`
- `/services/translation/nikah-nama-marriage-certificate`
- `/blog/saudi-embassy-attested-document-translation-process-pakistan`
- `/guides/apostille-pakistan`
- `/guides/mofa-online-attestation`
- `/guides/certified-translation-vs-apostille-pakistan`
- `/translation-english-to-arabic`
- `/contact`

Check each against the **actual repository**, because some routes originate from Day 3–5 scheduled work and may not yet be deployed. If an internal route is missing, list it in the deployment report and make publication order explicit. Do not replace approved contextual text with invented wording or link to unrelated pages.

### SEO and quality validation

- One H1 on each page; logical H2/H3 nesting.
- Canonical self-reference, no conflicting index directives, correct OG metadata where implemented.
- Existing English→Arabic URL preserved, no duplicate competing route.
- New HEC guide included in sitemap and internal crawl paths.
- No misleading pre-2026 HEC appointment/courier wording on the attestation service page.
- Government fee isolated from translation/consultancy fees; HEC fee currently PKR 3,000/document.
- Clear no-agency-affiliation disclaimer, no guarantee of official decisions.
- Functional mobile layout, meaningful table labels and accessible CTA links.
- No fabricated authors, reviews, testimonials, dates, seals or logos.
- JSON-LD matches rendered text and does not duplicate sitewide schema incorrectly.
- GA4/GTM lead tracking verified in DebugView/test environment; compile alone is not analytics verification.
- Run `npx tsc --noEmit`, `npm run build` (or the repo's equivalent), and route HTTP checks.

---

## 6. Deliver the final implementation report

Provide a concise table:

| Task | Status | URL | Files changed | Verification |
|---|---|---|---|---|
| B:T05 — New HEC guide | | | | |
| A:T01 — EN→AR service rewrite | | | | |
| A:F04 — Direction/H1 correction | | | | |
| B:A02 — Outdated HEC promise removed | | | | |
| B:T15 — Cannibalisation/redirect audit | | | | |

Additionally report:

1. Actual production deployment status **separately** from Git push/local tests.
2. Screenshot or HTTP checks for both routes on localhost and, when deployed, production.
3. The exact editorial file name used for each page; confirmation that no body copy was rewritten.
4. Every unresolved business-approval item (e.g., real anonymised samples, exact translation rates, unsupported trust claims).
5. Candidate redirect decisions in a **non-executed** review list.
6. Live GA4 `generate_lead` test status (not simply “tracking code exists”).
7. Commit hash and final git status, if committed.

**Definition of done:** The two approved pages are published with intact text and correct URLs; old HEC representation claims are removed; technical checks pass; candidate consolidations are documented but **not** executed.
