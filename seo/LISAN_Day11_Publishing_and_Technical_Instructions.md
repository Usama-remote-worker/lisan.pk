# LISAN.PK — DAY 11/30: Publishing and Technical Implementation Instructions

**Scheduled execution/publication:** Friday, 13 November 2026  
**Editorial research last checked:** 5 November 2026  
**Plan IDs:** **B:K01** (P0), **A:T47** (P1), **B:A13** (High), **B:A14** (Medium), **B:A21** (Medium)  
**Mode:** IMPLEMENTATION ONLY. **All public-facing content is supplied in full** in accompanying Markdown files.

## 0. Non-negotiable editorial ownership

**Do not generate, rewrite, paraphrase, expand, reduce or “improve” the supplied article bodies.** Do not invent extra page copy, testimonials, customer figures, screenshot captions, author credentials, acceptance percentages, university dates, fees, portal status definitions or guarantee claims.

Implementation work may include: mapping frontmatter to the repository's actual metadata format, binding headings and FAQs to existing components, escaping strings, rendering tables, integrating routes, accessibility, structured-data generation **from the supplied body** and debugging code. If a fact, asset or approved design string is missing, record it for editorial/owner decision instead of fabricating a substitute.

**Do not mention the development tool's brand in user-facing content.** Do not alter unrelated articles unless needed for an essential link or technical bug fix. Any requested change outside Day 11 must be itemised and approved before deployment.

## 1. Deliverable-to-URL mapping

| ID | Editorial input | Required action | Target / canonical URL |
|---|---|---|---|
| **B:K01** | `LISAN_Day11_Study_in_Saudi_Application_Status_HUB_REWRITE.md` | **Replace existing article in place** with approved complete content; retain historical publication date | `https://www.lisan.pk/blog/study-in-saudi-application-status-under-process` |
| **A:T47** | `LISAN_Day11_Certificate_of_Translation_Accuracy_Pakistan_GUIDE.md` | **Create new** information/trust guide; avoid service-page cannibalisation | `https://www.lisan.pk/guides/certificate-of-accuracy-translation-sample` |
| **A:T47 resource** | `LISAN_Day11_Certificate_of_Accuracy_UNSIGNED_SAMPLE.md` | Make available as a **clearly labelled unsigned educational sample** and link it from the guide after deployment | Approved resource URL; keep canonical on the guide, not on the sample file |
| **B:A13** | No new prose | Correct global/per-page Open Graph and Twitter metadata | Sitewide |
| **B:A14** | No new prose | Remove deprecated HTML `meta[name="keywords"]` / `metadata.keywords` emission | Sitewide |
| **B:A21** | No new prose | Fix counters whose rendered HTML contains empty labels without actual numbers | Homepage and any shared counter components |

**No additional status article:** The existing status article is already an indexing asset and must become the single status hub. Do not create `/guides/study-in-saudi-application-status`, `/blog/under-process-meaning`, or other keyword-equivalent duplicate pages.

## 2. Repository discovery and baseline capture — before editing

1. Confirm whether blogs are stored as Markdown/MDX, TSX, database records or another source, and identify the renderer used by the existing status article. Respect current architecture rather than generating a competing route.
2. Capture the **pre-change** live status: page title, canonical, description, `datePublished`, `dateModified`, existing links, OG/Twitter tags, mobile rendering and HTTP response.
3. Preserve the status article's **actual original publication date** (the current public page displays 16 September 2026; verify source of truth). Set `dateModified` only to the real deployment date.
4. Inspect the site architecture for `/guides/...` routes; use the existing guide renderer, layout and sitemap mechanism. Do not blindly add a static page if a dynamic route already owns the URL.
5. Locate existing related status/accepted/portal-errors/visa/deadline articles. Build an internal-link ownership map and avoid publishing a redundant clone.
6. Locate the homepage counters, sitewide metadata defaults, meta-keyword generation and all OG components (`layout.tsx`, route page metadata, `generateMetadata`, custom `Head` tags, blog metadata helper, etc.).
7. **Do not deploy yet.** Record pre-existing issues that are not part of Day 11; keep a focused diff.

## 3. B:K01 — publish status hub on the existing URL

- Replace the body using the supplied approved full text; map SEO title, description, intent and keyword research fields to the CMS. The frontmatter's editorial/admin-only fields are **not** visible to site visitors.
- Preserve the exact slug and canonical. Keep all backlinks, existing sitemap references and schema page ID. Avoid unnecessary 301/308 redirect.
- Respect the actual CMS publication date. Set article modified date to the **real** deployment date; don't backdate it to 13 November if deployed on a different day.
- Render one **H1** only. If the page template already renders the frontmatter title as an H1, do not duplicate the body H1.
- Render all body headings, status matrices and **18 FAQs**. For narrow mobile widths, use overflow-safe, accessible tables.
- Make source links and internal references clickable and test their destination URLs. If an internal URL is not live, report its canonical actual route for editorial approval. Do not change the text or silently replace with an invented page.
- Use normal `Article`/`BlogPosting` and `BreadcrumbList` structured data only with known publisher/author/date facts. Do not add fabricated `AggregateRating`, fake testimonials or claims that Google will show FAQ rich results.
- **Pre-publish fact gate:** Reopen `https://studyinsaudi.sa/en/Faq`, `https://studyinsaudi.sa/en/Home/Index?lang=en`, and the official portal. Confirm application-window and editability statements still reflect the sources. The current official homepage and detailed FAQ are internally inconsistent on edits; preserve the article's transparent disclosure rather than falsely resolving it.
- **Screenshots:** A genuine, anonymised applicant screenshot may be incorporated only after owner approval. Remove/redact full name, application ID, phone, passport, email, institution-specific sensitive details, tokens and notifications. No fabricated or generic screenshot presented as a real portal state. The article is publishable **without** screenshots.
- Do not replace the article with a teaser, CTA-only landing page, or model-generated body.
- Avoid unrelated scholarship countdown components or “Applications Open” badges being injected into this updated page.

## 4. A:T47 — publish new Certificate of Translation Accuracy guide and sample

- Publish the supplied guide under the **new exact canonical** `/guides/certificate-of-accuracy-translation-sample`.
- It is **informational**, not a second commercial translation service page. Do not target it to replace the established `/services/uscis-certified-translation/requirements` or `/pricing` route.
- Render the completed sample declaration on the page as an example clearly labelled **UNSIGNED / NOT VALID UNTIL COMPLETED**. The sample is included within the editorial article.
- Make `LISAN_Day11_Certificate_of_Accuracy_UNSIGNED_SAMPLE.md` available as a read-only, clearly labelled downloadable Markdown resource (e.g., a URL under `/downloads/` implemented according to repository conventions). Do not silently convert it into a fake signed PDF, stamp it or claim it carries government approval.
- If the file download is not implemented, **do not show a broken download CTA**. The guide includes a `#download-sample` anchor; bind that anchor to a working download area or present the sample text without a download button until the asset is live. A developer may add a minimal neutral UI label only with editorial/owner approval.
- Do **not** print fictitious translator signatures, dates, stamps, credentials, DPO information, registration/licence numbers, “embassy approved” marks or notarisation seals.
- Preserve the substantive distinction among **USCIS 8 CFR 103.2(b)(3)**, **UK visitor visa guidance** and **general GOV.UK document-certification guidance**; do not merge these into a fake universal rule.
- Use a simple Article/Breadcrumb schema with truthful metadata. FAQ structured data only if fully and exactly matched to visible FAQ Q/A; rich-result display is not guaranteed.
- Confirm that all document-translation service paths used in links are live and have the expected intent.

## 5. B:A13 — replace duplicate/sitewide Open Graph metadata

**Problem in the audit:** Fetched pages reused homepage `og:url`, title and description. Need unique page metadata.

For **each indexable public route**:

- `og:url` must equal that page's **absolute canonical URL**, not the homepage.
- `og:title` should reflect page-specific title (or an editorially approved concise variant), not a sitewide literal constant.
- `og:description` should reflect page-specific description, not a generic company summary on every route.
- `og:type` should be appropriate (`article` for blog/guide, `website` for ordinary site/service pages as appropriate).
- Use the site's known, real OG image; do not fabricate image assets. When a route lacks its own image, a verified brand default may be used without changing page title/URL.
- Twitter card title/description should follow the page metadata, not homepage constants.
- Add correct absolute URLs using the existing Next.js `metadataBase` / `generateMetadata` conventions; watch out for relative URL resolution, duplicate `head` tags and metadata precedence from nested layouts.
- Canonical must remain the authoritative source: no automatically fabricated alternate slug/canonical for a rewritten article.

**Acceptance checks (minimum):** homepage, updated status blog, new accuracy guide, `/pricing`, existing translation service, one city page. Inspect **server-rendered HTML**, not only client DOM. Confirm each has its own `og:url` and title, no homepage-only duplication, valid absolute URL, single canonical, and appropriate Twitter metadata. Report every remaining inconsistent route.

## 6. B:A14 — remove legacy meta keywords

- Identify where `meta name="keywords"` is produced: root layout, route metadata, blog frontmatter mapper, or custom SEO helper.
- Remove the **rendered HTML meta keywords tag** sitewide. Search for duplicates on server and client output.
- **Preserve content-research fields** like `primary_keyword` and `secondary_keywords` in editorial Markdown as internal information; they are not required in the HTML head.
- Do not change keyword placement or rewrite page copy as part of this technical fix.
- Validate with HTML inspection that pages no longer emit `<meta name="keywords" ...>`.

## 7. B:A21 — fix blank trust/stat counters in HTML

The audit observed empty labels in HTML such as **Years Experience**, **Happy Clients**, **Approval Rate** and **Expert Translators** with no corresponding numeric values. The current public template also shows unverified “100% acceptance” and “200% guarantee” messaging in a shared trust block; these claims must not be carried into a refreshed experience without evidence.

Required actions:

1. Inspect homepage component and any shared counter component. Determine whether numerical values are absent from SSR HTML due to client-only animation, placeholders or data errors.
2. **Preferred fix:** If there is no owner-verified data for a metric, **remove the unsupported counter block** (or hide the specific counter) instead of inventing values. Do not insert arbitrary 0, 100%, 200%, 10,000+ or other persuasive numbers.
3. If an actual metric is documented and approved, render the correct value **in initial server HTML**, with animation as progressive enhancement only (no blank pre-hydration markup).
4. Audit other routes using the same component to prevent empty trust blocks sitewide.
5. Flag any surrounding “embassy approved”, “100% acceptance” or “200% guarantee” claims for removal/owner proof; this task authorises removing unsupported global boilerplate, **not** replacing it with invented guarantees.
6. Test rendering with JavaScript disabled and an ordinary HTML fetch, plus a mobile viewport. Confirm text remains visible and coherent and page does not shift unexpectedly.

**Business-history caveat:** Site copy has shown inconsistent founding dates. Do not assert a specific founding year solely from existing counters; ask for verifiable business documents if a numeric “years of experience” value is to remain.

## 8. Internal linking and content ownership

- On the existing status hub, retain links to: `/blog/study-in-saudi-portal-problems-errors`; `/blog/saudi-scholarship-accepted-what-next`; `/blog/saudi-student-visa-pakistan`; `/blog/saudi-scholarship-eligibility-pakistani-students`; `/blog/fully-funded-scholarship-deadlines-saudi-universities-2026`; `/blog/upcoming-deadlines-ksu-kau-2026-spring-2027` and the existing application assistance page, subject to live route confirmation.
- Add an appropriate contextual link **from** one or two already related scholarship articles **to** the status hub where needed (e.g., deadline guide and application checklist), without generating new copy, forcing repetitive anchor text or editing unrelated material.
- Link the new certificate guide contextually from relevant USCIS/UKVI/certified translation pages **only where the surrounding existing text supports it**. If extra anchor sentence would be required, flag for editorial approval rather than inventing a sentence.
- There must be **one main canonical per distinct search intent**: scholarship status hub, translation accuracy educational guide, and transactional translation service pages.

## 9. Security, accessibility and technical tests

- Do not add a login clone, applicant credentials form or upload that requests Study in Saudi username, password or OTP.
- Ensure calls to action go to verified existing on-site contact paths or official portal links. Preserve working GA4 tracking on genuine lead actions; avoid click-triggering false `generate_lead` conversions on article-only outbound links.
- Mobile checks: tables horizontally scroll without clipping; internal links tap correctly; headings order correctly; no fixed bar blocking content.
- No fake screenshot, fictitious quote, unreviewed personal data or unsupported result-date countdown.
- All created/updated routes must return **200**, correct canonical, indexable (unless an existing legitimate indexing restriction), and appear in appropriate sitemap records.
- Only update sitemap `lastmod` for **real** page modifications; do not bulk-set all routes to today's date.
- If a full build cannot run, report why; `tsc --noEmit` alone is **not** a complete deployment test.

## 10. Final verification and implementation report

Report all of the following before declaring Day 11 deployed:

1. **Changed files** and URL mappings; clear distinction between new and existing pages.
2. **Content integrity:** generated page matches approved Markdown article body; no invented extra prose, promises, FAQs or labels.
3. **Metadata audit:** canonical, `og:url`, `og:title`, `og:description`, Twitter title/description on at least six route types; no rendered `meta keywords` tag.
4. **Counters:** before/after SSR HTML for an affected homepage counter; verified number or removed unsupported metric.
5. **Publication date:** original date preserved on status article; `dateModified` and page lastmod reflect actual change date.
6. **Source freshness:** Study in Saudi FAQ/home and U.S./UK translation rules rechecked on the publication date; any material change flagged instead of silently altering our text.
7. **Testing:** type checks, production build, route HTTP status, responsive rendering, broken links, rich-result schema validation, server-side OG HTML.
8. **Security and conversion:** official portal credentials never requested; existing contact and quote flows work; lead tracking remains correct.
9. **Evidence:** direct live production URLs and summary of actual production verification (a git push or localhost check is not enough).
10. **Unresolved decisions:** any evidence-backed counter values; approved anonymised portal screenshots; whether the sample resource URL was published; any conflicting official source changes.

**Release gate:** No automatic redirects, page removals, noindex decisions, fabricated business claims, or content rewrites. If editorial content needs a factual change, stop that specific item and request a revised approved article from the content owner.
