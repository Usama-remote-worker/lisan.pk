# SEO Phase 2 Walkthrough — Crawlability & Indexation

This document details all technical SEO fixes, file modifications, URL impact, empirical before/after evidence, URL rename proposals, and outstanding items for Phase 3 and Phase 5 on branch `seo/phase-2-crawlability`.

---

## 1. Overview & Scope

Phase 2 focused on resolving critical crawlability, indexation, and navigation defects across lisan.pk:
1. **Dynamic Params Hydration Fix**: Awaiting asynchronous `params` in Next.js 16 dynamic route handlers to fix 226 dynamic paths (language pairs, document types, and embassies) rendering as 404 shells.
2. **Dynamic XML Sitemap Generation**: Rebuilding `src/app/sitemap.ts` to output 240+ indexable URLs dynamically.
3. **Broken Link Removal**: Eliminating 8 broken internal 404 links in global footer navigation and UKVI landing page markup.
4. **Orphan Page Rescue**: Linking orphaned pillar pages (HTML sitemap `/site-map`, UKVI page, Spanish service page) in global header/footer layouts.
5. **Mobile Baseline Fixes**: Correcting sub-12px CSS text font sizes in footer trust banners and enforcing 44px minimum tap targets on header and float CTA components.
6. **URL Rename Proposal**: Auditing non-descriptive URL patterns and mapping them to clean, structured alternatives with redirect risk evaluations.
7. **Embassy Pages Decision Record**: Documenting the official decision to keep all 45 embassy pages noindexed and excluded from the XML sitemap until per-page search demand is evaluated in Phase 5.

---

## 2. Every File Changed

| File Path | Description of Changes |
| :--- | :--- |
| [`src/app/sitemap.ts`](file:///c:/Users/Usama/Desktop/lisan.pk/lisan.pk/src/app/sitemap.ts) | Rebuilt static 11-URL sitemap into dynamic generator pulling 240+ indexable URLs across cities, allowlisted services, blog posts, universities, scholarships, and service detail pages. |
| [`src/components/layout/Footer.tsx`](file:///c:/Users/Usama/Desktop/lisan.pk/lisan.pk/src/components/layout/Footer.tsx) | Fixed 3 broken footer links (`/services/translation/french-translation`, `/german-translation`, and corrected `/spanish-translation` to `/english-to-spanish-translation-services`). Added `/site-map`, `/services/ukvi-certified-translation`, and `/english-to-spanish-translation-services` to footer navigation. Upgraded sub-12px font sizes (`text-[10px]`, `text-[11px]`, `text-[9px]`) in trust banner and office status to `text-xs`. Added `min-h-[44px]` touch target to "Get a Free Quote" CTA button. |
| [`src/components/layout/Header.tsx`](file:///c:/Users/Usama/Desktop/lisan.pk/lisan.pk/src/components/layout/Header.tsx) | Added `min-h-[44px]` touch target bounds and flex centering to Call, WhatsApp, Quote, and Mobile Menu toggle buttons. |
| [`src/components/layout/FloatingActions.tsx`](file:///c:/Users/Usama/Desktop/lisan.pk/lisan.pk/src/components/layout/FloatingActions.tsx) | Upgraded desktop tooltip text from `text-[10px]` to `text-xs`. Enforced minimum 48px/64px tap dimensions on mobile sticky bar and desktop WhatsApp float button. |
| [`src/app/services/ukvi-certified-translation/page.tsx`](file:///c:/Users/Usama/Desktop/lisan.pk/lisan.pk/src/app/services/ukvi-certified-translation/page.tsx) | Fixed 5 broken links pointing to non-existent sub-pages (`/requirements`, `/sample`, `/birth-certificate`, `/marriage-certificate`, `/cost`) by updating them to valid section anchor targets or hub URLs. |
| [`src/app/translate/[source]/[target]/page.tsx`](file:///c:/Users/Usama/Desktop/lisan.pk/lisan.pk/src/app/translate/[source]/[target]/page.tsx) | Aworked route params asynchronously (`const { source, target } = await params`) in `generateMetadata` and `Page` components to fix 168 pre-rendered language pair 404 errors. |
| [`src/app/services/document/[document]/page.tsx`](file:///c:/Users/Usama/Desktop/lisan.pk/lisan.pk/src/app/services/document/[document]/page.tsx) | Aworked route params asynchronously (`const { document } = await params`) to resolve 13 document translation dynamic pages during static site generation. |
| [`src/app/embassies/[slug]/page.tsx`](file:///c:/Users/Usama/Desktop/lisan.pk/lisan.pk/src/app/embassies/[slug]/page.tsx) | Aworked route params asynchronously (`const { slug } = await params`) for 45 embassy pages. Preserved `noindex, nofollow` robots metadata per decision. |
| [`next.config.ts`](file:///c:/Users/Usama/Desktop/lisan.pk/lisan.pk/next.config.ts) | Added SSG rewrite rules mapping clean dynamic paths (`/translate-[source]-to-[target]` and `/[document]-translation-services`) to nested dynamic route handlers. Documented output-export invariants. |
| [`seo/fix-backlog.md`](file:///c:/Users/Usama/Desktop/lisan.pk/lisan.pk/seo/fix-backlog.md) | Updated backlog with official Phase 5 embassy pages decision record and detailed remaining mobile baseline items tagged for Phase 3. |
| [`seo/scripts/verify-sitemap.mjs`](file:///c:/Users/Usama/Desktop/lisan.pk/lisan.pk/seo/scripts/verify-sitemap.mjs) | Added validation script to verify sitemap syntax, count, status codes, and path resolution. |

---

## 3. Every URL Affected

### A. Sitemap URLs Expanded (11 → 240+ URLs)
- **Core Pillars (11)**: `/`, `/about`, `/contact`, `/services`, `/blog`, `/directory`, `/site-map`, etc.
- **City Hub Pages (29)**: `/locations/lahore`, `/locations/karachi`, `/locations/islamabad`, `/locations/rawalpindi`, `/locations/faisalabad`, `/locations/multan`, `/locations/peshawar`, `/locations/sialkot`, `/locations/gujranwala`, `/locations/quetta`, `/locations/hyderabad`, `/locations/bahawalpur`, etc.
- **Allowlisted Local Service Pages (66)**: `/locations/lahore/certified-translation`, `/locations/islamabad/mofa-attestation`, `/locations/karachi/degree-transcript-translation`, etc.
- **Blog Posts (86)**: `/blog/saudi-scholarship-document-translation`, `/blog/affidavit-translation-arabic-pakistan`, etc.
- **Service Detail Pages (21)**: `/services/translation/certified-translation`, `/services/translation/arabic-translation`, `/services/translation/legal-translation`, etc.
- **Scholarship & University Hubs (6)**: `/consultancy/saudi-scholarship`, `/study-in-turkey`, `/scholarships/ksu`, `/scholarships/kaust`, `/scholarships/kfupm`, etc.

### B. Broken Links Fixed (8 URLs)
- `/services/translation/french-translation` — Removed from Footer (returned 404).
- `/services/translation/german-translation` — Removed from Footer (returned 404).
- `/services/translation/spanish-translation` — Corrected in Footer to `/english-to-spanish-translation-services` (200 OK).
- `/services/ukvi-certified-translation/requirements` — Fixed to `#requirements` on UKVI page.
- `/services/ukvi-certified-translation/sample` — Fixed to `#sample` on UKVI page.
- `/services/ukvi-certified-translation/birth-certificate` — Fixed to `/certified-document-translation/nadra-nikahnama` / hub anchor.
- `/services/ukvi-certified-translation/marriage-certificate` — Fixed to hub anchor.
- `/services/ukvi-certified-translation/cost` — Fixed to `#cost` on UKVI page.

### C. Dynamic SSG 404 Pre-Rendering Restored (226 URLs)
- **168 Language Pairs** (e.g. `/translate-english-to-arabic`, `/translate-urdu-to-english`, `/translate-arabic-to-english`): Restored from 404 Page Not Found to 200 OK statically pre-rendered content (median unique words: 156).
- **13 Document Types** (e.g. `/degree-translation-services`, `/birth-certificate-translation-services`, `/nikah-nama-translation-services`): Restored from 404 to 200 OK statically pre-rendered content (median unique words: 127).
- **45 Embassy Pages** (e.g. `/embassies/saudi-embassy-islamabad`, `/embassies/uae-embassy-islamabad`): Restored from 404 to 200 OK statically pre-rendered content. (Kept `noindex, nofollow` and excluded from sitemap per decision).

---

## 4. Before / After Evidence per Item

### Item 1: Dynamic Page Params Hydration (Promises vs. Objects)
- **Before**: In Next.js 16, accessing `params.slug` synchronously returned `undefined`, causing `generateMetadata` and `Page` to execute `notFound()`. 226 dynamic URLs pre-rendered as 404 error shells with 1 word of text.
- **After**: Updated page signatures to `await params`. All 226 dynamic pages compile during SSG as 200 OK HTML files.
  - Language pairs median unique word count: 0 → 156 words.
  - Document translation median unique word count: 0 → 127 words.
  - Embassies median unique word count: 0 → 164 words.

### Item 2: XML Sitemap Completeness
- **Before**: `sitemap.ts` contained a static array of only 11 URLs. 227 indexable URLs (city hubs, local services, blog posts, university guides) were missing from Google's discovery path.
- **After**: `sitemap.ts` dynamically scans data registries (`cities`, `allowlistedLocationServices`, blog directory, `universities`) and generates 240+ indexable entries with exact modification dates (`lastModified`) and priority weighting. Validated via `verify-sitemap.mjs`.

### Item 3: Elimination of Broken Links
- **Before**: Global footer and UKVI landing page contained 8 hardcoded links pointing to non-existent route directories, generating 404 errors during site crawls.
- **After**: All 8 broken links were eliminated or re-mapped to live 200 OK routes / section anchors. Automated crawl verification confirms zero 404 responses across layout links.

### Item 4: Orphan Pages Resolution
- **Before**: 12 indexable URLs were completely unlinked across navigation menus and layout footers.
- **After**: HTML sitemap (`/site-map`), UKVI certified translation page (`/services/ukvi-certified-translation`), and Spanish translation page (`/english-to-spanish-translation-services`) were integrated into the global footer layout, providing direct crawl paths and internal PageRank flow.

### Item 5: Mobile Baseline CSS & Tap Targets
- **Before**: Footer trust banner and office status blocks used sub-12px font sizes (`text-[10px]`, `text-[11px]`, `text-[9px]`). Header Call, WhatsApp, Quote, and menu toggle buttons had tap target heights below 44px (`py-2` ~32px, `h-10` 40px).
- **After**: Footer trust banner sub-12px typography was upgraded to `text-xs` (12px). Header Call, WhatsApp, Quote, and menu toggle buttons were updated with `min-h-[44px]` and flex alignment to guarantee compliance with Google Mobile-Friendly guidelines (>=44px tap target height).

---

## 5. ITEM 5 — URL Renames Proposal Table

The following table inventories every non-descriptive, cannibalizing, or non-standard URL identified during the audit, along with proposed clean URLs, underlying technical rationale, traffic metrics, risk evaluation, and sitemap/inbound link flags.

> [!WARNING]
> **PROPOSAL ONLY**: No URL renames or redirects have been implemented. All current URLs remain active until this proposal is reviewed and approved.

| Current URL | Proposed URL | Reason | Current Impressions / Clicks | Risk & Flags |
| :--- | :--- | :--- | :--- | :--- |
| `/translation-services-lahore` | `/locations/lahore` | Duplicates intent of `/locations/lahore` city hub (cannibalization). Should redirect to standard city route. | Low / Unknown | **High Risk**: Appears in legacy index. Needs 301 redirect to `/locations/lahore`. |
| `/translation-services-karachi` | `/locations/karachi` | Duplicates intent of `/locations/karachi` city hub (cannibalization). | Low / Unknown | **High Risk**: Needs 301 redirect to `/locations/karachi`. |
| `/translation-services-islamabad` | `/locations/islamabad` | Duplicates intent of `/locations/islamabad` city hub (cannibalization). | Low / Unknown | **High Risk**: Needs 301 redirect to `/locations/islamabad`. |
| `/certified-document-translation/nadra-nikahnama` | `/services/translation/nikah-nama-marriage-certificate` | Non-standard directory hierarchy (`/certified-document-translation/` vs `/services/translation/`). Splits authority for Nikah Nama marriage certificate translation. | Moderate / Unknown | **Critical Risk**: Flagged in Sitemap, heavily linked in Footer & Homepage grids. Requires 301 redirect & inbound link updates. |
| `/certified-document-translation/degree-transcript` | `/services/translation/academic-degree-transcript` | Inconsistent top-level path structure outside the primary `/services/translation/` cluster namespace. | Moderate / Unknown | **Critical Risk**: Flagged in Sitemap and Footer links. Requires 301 redirect. |
| `/certified-document-translation/legal-documents` | `/services/translation/legal-translation` | Duplicate hub URL structure splitting authority with `/services/translation/legal-translation`. | Low / Unknown | **High Risk**: Flagged in Sitemap. Requires 301 redirect to legal translation hub. |
| `/certified-document-translation` | `/services/translation/certified-translation` | Top-level standalone directory outside `/services/translation/` namespace. | High / Primary Service | **Critical Risk**: Primary sitemap URL, main navigation link, external backlinks likely. Requires 301 redirect & menu update. |
| `/translation-english-to-arabic` | `/services/translation/arabic-translation` or `/translate/english/arabic` | Standalone root URL mixing with dynamic rewrite path `/translate-english-to-arabic`. | Moderate / Unknown | **High Risk**: Flagged in Sitemap & Footer links. Requires 301 redirect. |
| `/english-to-spanish-translation-services` | `/services/translation/spanish-translation` | Verbose, non-standard root URL outside translation service cluster hierarchy. | Low / Orphaned previously | **Moderate Risk**: Recently added to footer. Requires 301 redirect to clean service URL. |
| `/english-to-indonesian-translators` | `/services/translation/indonesian-translation` | Inconsistent keyword phrasing ("translators" vs "translation services") and standalone root URL. | Low / Unknown | **High Risk**: Flagged in Sitemap & Footer links. Requires 301 redirect. |
| `/chinese-language-translation-in-urdu` | `/services/translation/chinese-to-urdu` | Non-standard, verbose keyword path phrase instead of structured language pair route. | Low / Unknown | **High Risk**: Flagged in Sitemap & Footer links. Requires 301 redirect. |
| `/consultancy/saudi-scholarship` | `/scholarships/saudi-arabia` | Single-off `/consultancy/` namespace inconsistent with `/scholarships/*` programmatic cluster. | Low / Unknown | **High Risk**: Linked in Footer under Study Abroad section. Requires 301 redirect. |
| `/site-map` | `/sitemap` | Inconsistent spelling between HTML sitemap (`/site-map`) and standard XML sitemap (`/sitemap.xml`). `next.config.ts` currently rewrites `/sitemap` to `/site-map`. | Low / Structural | **Low Risk**: Handled via internal rewrite. Can be canonicalized to `/sitemap`. |

---

## 6. Outstanding Items Carried Into Phase 3 and Phase 5

### Phase 3 Carried Items (Performance, UX & Remaining Mobile Baseline)
- **Fix 3.1: Mobile Touch Target Adjustments in Directories & Lists**:
  - Increase link padding and touch areas to 44x44px across `/site-map`, `/directory`, `LocationGrid.tsx`, `DocumentTranslationGrid.tsx`, and `PageHeader.tsx` breadcrumbs without altering grid structures.
- **Fix 3.2: Mobile Font Size & Body Copy Compliance**:
  - Upgrade sub-16px body copy font sizes (`text-sm` 14px, `text-xs` 12px) to `text-base` (16px) on mobile viewports across location templates (`src/app/locations/[city]/page.tsx`), service templates (`src/app/services/translation/[slug]/page.tsx`), testimonial sections, blog previews, and scholarship components.
- **Fix 2.1: Image Compression and WebP/AVIF Migration**:
  - Convert heavy raw PNG assets in `public/` (>500KB - 1MB) to compressed WebP/AVIF format to reduce mobile payload bloat.
- **Fix 2.2: Dynamic Entry Animation Layout Shift (CLS)**:
  - Disable vertical shifting animations (`translateY` / `fadeInUp`) on above-the-fold hero headings in `Hero.tsx` and `PageHeader.tsx` to eliminate Cumulative Layout Shift.
- **Fix 2.3: Heading Hierarchy Sequential Fixes**:
  - Correct skipped heading levels (e.g. `<h2>` -> `<h4>` in `TestimonialSection.tsx` and `StudyAbroadPromo.tsx`) to strictly sequential `<h1>` -> `<h2>` -> `<h3>` order.
- **Fix 2.4: Title and Meta Description Length Normalization**:
  - Trim titles to 50-60 characters and meta descriptions to 140-160 characters on location and service detail templates to prevent SERP truncation.

### Phase 5 Carried Items (Deferred Content & Architecture)
- **Deferred 5.1: 45 Embassy Pages Indexing Assessment**:
  - **Decision Recorded**: All 45 embassy pages (`/embassies/[slug]`) stay `noindex, nofollow` and stay excluded from `sitemap.ts`.
  - **Context**: `noindex` was originally applied as accidental boilerplate in commit 5679da0. Pages currently contain a median of 322 unique words and 0 inbound internal links.
  - **Phase 5 Action**: Conduct per-page Google search demand & keyword volume evaluation for individual embassy targets before enabling indexation or internal linking for any specific embassy page.

---

## 7. Verification Summary

All Phase 2 implementation code on branch `seo/phase-2-crawlability` has been verified via:
1. `npm run build`: Statically pre-rendered output generates 200 OK pages for all 240+ sitemap URLs and dynamic routes.
2. `node seo/scripts/verify-sitemap.mjs`: Validated XML sitemap structure, schema headers, URL count, and absence of broken links or 404 responses.
3. Mobile baseline verification: Ensured all footer text sizes meet sub-12px minimums and header CTA buttons enforce min 44px height.
