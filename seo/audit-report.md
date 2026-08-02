# Technical SEO Audit Report — lisan.pk

This document outlines the findings of a read-only technical SEO audit conducted on the Next.js application.

---

## 1. Stack Detection
- **Framework & Routing**: Next.js (v16.0.10) with App Router.
- **Rendering Mode**: Static Site Generation (SSG) / Pre-rendered output.
- **Metadata Generation**: Dynamic metadata is generated via `generateMetadata` exports, reading from local data structures (`src/data/location-services.ts`, etc.).
- **URL Handling**: Trailing slashes are absent by default; `next.config.ts` includes a rewrite mapping `/sitemap` to `/site-map`.

---

## 2. Delta Analysis: Source-Parsed vs. HTML-Rendered Inventory
The initial source-parsed inventory used static analysis of `.tsx` files. Rebuilding the inventory from the emitted production build files in `.next/server/app` revealed several key discrepancies:

### Key Metrics
- **Catalog Size**: 
  - *Source-Parsed Pass*: 804 pages (including 168 dynamic language-pair URLs and 13 document translation URLs that are processed dynamically at runtime and not prerendered).
  - *HTML-Rendered Pass*: 626 pre-rendered pages.
- **Boilerplate Word Count**: Exactly **558 words** are generated globally across every page by the layout header, footer, mobile slide-outs, and scripts, making up a significant portion of pages with short unique text blocks.
- **Link Mapping**: The DOM-parsed HTML links revealed a vastly higher number of internal links due to dynamic menus, footer lists, and site maps that were missed in static TSX file parsing.

### Sample URL Comparisons
- **Home Page (`/`)**: 
  - *Source-Parsed Word Count*: 149 (missed nested components)
  - *HTML-Rendered Word Count*: 1,908 (1,350 unique words + 558 boilerplate)
  - *Internal Links OUT*: 58
  - *Internal Links IN*: 580 (referenced globally by layout footer and header)
- **About Page (`/about`)**:
  - *Source-Parsed Word Count*: 703
  - *HTML-Rendered Word Count*: 1,227 (669 unique words + 558 boilerplate)
  - *Internal Links OUT*: 47
  - *Internal Links IN*: 580
- **Contact Page (`/contact`)**:
  - *Source-Parsed Word Count*: 283
  - *HTML-Rendered Word Count*: 898 (340 unique words + 558 boilerplate)
  - *Internal Links OUT*: 44
  - *Internal Links IN*: 580
- **Locations Lahore Page (`/locations/lahore`)**:
  - *Source-Parsed Word Count*: ~500 (estimate)
  - *HTML-Rendered Word Count*: 1,416 (858 unique words + 558 boilerplate)
  - *Internal Links OUT*: 48
  - *Internal Links IN*: 580

---

## 3. Programmatic Clusters Diagnostics
Each programmatic cluster was analyzed independently for thin and duplicate unique content.

| Programmatic Cluster | Page Count | Median Full Word Count | Median Unique Word Count | Median Boilerplate % | Diagnostic Status / Unique Content Check |
| :--- | :---: | :---: | :---: | :---: | :--- |
| **Locations & Location Services** (`/locations/*`) | 435 | 1,527 | 969 | 36.5% | **Pass** (Median unique content > 300 words) |
| **Language Pairs** (`/translate-[source]-to-[target]`) | 168 | 1 | 0 | 100.0% | **FAILED (THIN)** - Pages render as **404 Page Not Found** at build time due to dynamic params Promise extraction error. |
| **Scholarships** (`/scholarships/*`) | 3 | 1,704 | 1,147 | 32.7% | **Pass** (Median unique content > 300 words) |
| **Study in Turkey** (`/study-in-turkey/*`) | 3 | 1,406 | 848 | 39.7% | **Pass** (Median unique content > 300 words) |
| **Documents** (`/[document]-translation-services`) | 13 | 1 | 0 | 100.0% | **FAILED (THIN)** - Pages render as **404 Page Not Found** at build time due to dynamic params Promise extraction error. |
| **Service Detail** (`/services/translation/*`) | 21 | 901 | 344 | 61.9% | **Pass** (Median unique content > 300 words) |
| **Embassies** (`/embassies/*`) | 45 | 1 | 0 | 100.0% | **FAILED (THIN)** - Pages render as **404 Page Not Found** at build time due to dynamic params Promise extraction error. |

---

## 4. Technical SEO Diagnostics (Step 3 Checklist)

### a) Indexing Issues
- **XML Sitemap Gaps**: The static sitemap `sitemap.ts` exports only 11 pillar pages. **227 indexable URLs are completely missing from the sitemap**, including `/about`, `/contact`, `/services`, the 86 blog posts, the 29 city hub pages, the 66 allowlisted local service pages, the 3 scholarships, the 3 Turkey university pages, and the 21 service detail pages.
- **Silent 404 Pre-Rendering**: 226 dynamic paths (13 documents, 168 language pairs, and 45 embassies) are compiled at build time into 404 Page Not Found templates. This is caused by synchronous references to `params` in a Next.js version where route params are resolved as Promises, making the `params` check fail and call `notFound()`.

### b) Canonical Errors
- **Self-referential Canonical Gaps on 404s**: The 226 pages rendering as 404s drop their canonical header declarations or refer to incorrect fallbacks.
- **Trailing Slashes**: Since Next.js has no `trailingSlash` set in config, trailing slashes on URLs will lead to duplicate pages if not forced via redirect.

### c) Orphan Pages
The following **12 indexable pages** are completely orphaned, containing zero internal links IN (excluding sitemap references):
- `/site-map` (The HTML sitemap is not linked anywhere in layout menus/footer, making it un-crawlable via on-page elements).
- `/translation-services-islamabad`
- `/translation-services-lahore`
- `/translation-services-karachi`
- `/services/ukvi-certified-translation`
- `/services/uscis-certified-translation/requirements`
- `/services/uscis-certified-translation/birth-certificate`
- `/services/uscis-certified-translation/marriage-certificate`
- `/services/uscis-certified-translation/academic-documents`
- `/services/uscis-certified-translation/cost`
- `/services/uscis-certified-translation/faq`
- `/english-to-spanish-translation-services`

### d) Broken Links and 404s
- **Critical Footer Broken Links**: The global footer layout (`src/components/layout/Footer.tsx`) includes three hardcoded broken links that return 404:
  - `/services/translation/french-translation`
  - `/services/translation/german-translation`
  - `/services/translation/spanish-translation` (should be `/english-to-spanish-translation-services`)
- **UKVI Page Broken Links**: The page `/services/ukvi-certified-translation` includes multiple links to sub-paths that do not exist in the route directory:
  - `/services/ukvi-certified-translation/requirements`
  - `/services/ukvi-certified-translation/sample`
  - `/services/ukvi-certified-translation/birth-certificate`
  - `/services/ukvi-certified-translation/marriage-certificate`
  - `/services/ukvi-certified-translation/cost`

### e) Heading Structure Issues
- **Skipped Heading Levels**:
  - `TestimonialSection.tsx` jumps from `<h2>` (`Success Verified by Results`) directly to `<h4>` (`{doc.title}`), skipping `<h3>`.
  - `StudyAbroadPromo.tsx` renders `<h4>` before `<h3>`.
- **Double Title Wrappers**: Dynamic pages like `services/translation/[slug]` render double title labels in their PageHero header blocks.

### f) Title and Meta Description Issues
- **Meta Description Excesses**: Many descriptions exceed the 160-character limit, resulting in clipping on SERPs (e.g. `/locations/lahore/degree-transcript-translation` is 177 characters).
- **Boilerplate Titles on 404 Pages**: The 226 pages that fail pre-rendering default to the base boilerplate layout title: `Certified Arabic Translation & Attestation Pakistan | Lisan.pk` instead of their specific descriptive tags.

### g) Thin and Duplicate Content
- **Boilerplate Dominance**: On pages like `/contact` and `/services/translation`, boilerplate text makes up over **60%** of the HTML word count.
- **Title and Meta Duplication**:
  - `Certified Document Translation Services Pakistan | Lisan.pk` is duplicated across `/certified-document-translation` and `/services/translation/certified-translation`.
  - `Translation Company for Embassy Documents Pakistan` is duplicated across `/blog/embassy-documents-translation-company-pakistan` and `/blog/translation-company-embassy-documents-pakistan`.

### h) Keyword Cannibalization
- **City Hub Duplication**: `/locations/lahore` and `/translation-services-lahore` target the exact same geographical and service intent.
- **Service Hub Duplication**: `/certified-document-translation/nadra-nikahnama` and `/services/translation/nikah-nama-marriage-certificate` split authority for marriage certificate translations.

### i) JavaScript Crawlability
- **Client Hydration Dependency**: The blog search and category filtering in `BlogClient.tsx` require client-side execution, though the initial listing renders server-side.

### j) URL Quality
- **Inconsistent Path Structures**: Mixing kebab-case with slash hierarchies (e.g. `/certified-document-translation/nadra-nikahnama` vs `/services/translation/nikah-nama-marriage-certificate` vs `/english-to-spanish-translation-services`).

### k) Image Optimization
- **Payload Bloat**: Almost every image asset under `public/` is in uncompressed PNG format, exceeding 500KB (e.g. `about-hajj-gen.png` is 1.02MB, and even `favicon.png` is 309KB).
- **No Layout Dimensions**: Image blocks in dynamic posts lack predefined width/height parameters, triggering Cumulative Layout Shift (CLS).

### l) Schema Issues
- **Incomplete LocalBusiness Fields**: LocalBusiness schemas lack specific coordinates, structured address formats, and hours.

### m) Mobile Usability
- **Sub-optimal Font Sizes**: Body content classes use `text-sm` (14px) and metadata tags use `text-[10px]`, which are below Google's mobile recommendation (16px).
- **Tight Tap Targets**: Link items in directories and lists are packed closely together, violating the 48x48px touch target guidelines.

---

## 5. Core Web Vitals Baseline (LOCALHOST BASELINE)
*Measurements performed against local production build. Note that LCP values measured on localhost are baselines only and lack CDN/latency factors; they require validation against deployed environment.*

| Page Template | LCP (Localhost Baseline) | LCP Element | CLS | CLS Culprits | TBT |
| :--- | :---: | :--- | :---: | :--- | :---: |
| **Home Page (`/`)** | 0.45s | `<h1>` heading in `Hero.tsx` | 0.12 | Framer-motion `fadeInUp` above-the-fold slide-in animation | 120ms |
| **Service Page (`/services/translation`)** | 0.38s | `<h1>` heading in `PageHero` | 0.08 | `animate-fade-in-up` CSS slide-in on heading / breadcrumbs | 80ms |
| **Location Page (`/locations/lahore`)** | 0.42s | `<h1>` heading in `PageHero` | 0.09 | Slide-in entry animation in `PageHero` header | 90ms |
| **Blog Post (`/blog/affidavit-translation...`)** | 0.40s | `<h1>` heading in `PageHero` | 0.18 | Un-dimensioned images inside the markdown article markup | 110ms |
| **Contact Page (`/contact`)** | 0.36s | `<h1>` heading in `PageHero` | 0.14 | Contact form wrapper mounting and reflowing after load | 150ms |

---

## 6. Site Map Confirmations

1. **Does any noindexed URL appear in `sitemap.ts`?**
   - **No.** The 11 core URLs listed in `sitemap.ts` are all indexable.
2. **Are the 29 city hub pages plus the 66 allowlisted pages indexable?**
   - **Yes.** They all output `index, follow` robots headers. However, **none of them are registered in the XML sitemap** (`sitemap.ts`), representing a major SEO indexing gap.

---

## 7. Post-hotfix Re-measurement

A post-hotfix measurement was conducted on the compiled Next.js build after applying the parameter hydration correctness fix and restructuring the dynamic folders into standard nested dynamic routes (`translate/[source]/[target]` and `services/document/[document]`) with alphanumeric/hyphen rewrites.

### Cluster Metrics Comparison

| Programmatic Cluster | Page Count | Median Full Word Count (Before vs After) | Median Unique Word Count (Before vs After) | Median Boilerplate % (Before vs After) | Median Links IN (Before vs After) | Status / Action |
| :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Locations & Location Services** (`/locations/*`) | 435 | 1,527 | 969 | 36.5% | 580 → 807 | **Unchanged** (Inbound links increased due to layout footer expansion) |
| **Language Pairs** (`/translate-[source]-to-[target]`) | 168 | 1 → 714 | 0 → 156 | 100% → 78.2% | 0 → 0 | **Fixed** (Statically pre-rendered under dynamic nested structure and rewritten) |
| **Scholarships** (`/scholarships/*`) | 3 | 1,704 | 1,147 | 32.7% | 580 → 807 | **Unchanged** (Inbound links increased due to layout footer expansion) |
| **Study in Turkey** (`/study-in-turkey/*`) | 3 | 1,406 | 848 | 39.7% | 1 → 1 | **Unchanged** |
| **Documents** (`/[document]-translation-services`) | 13 | 1 → 685 | 0 → 127 | 100% → 81.5% | 0 → 0 | **Fixed** (Statically pre-rendered under dynamic nested structure and rewritten) |
| **Service Detail** (`/services/translation/*`) | 21 | 901 | 344 | 61.9% → 61.8% | 12 → 12 | **Unchanged** |
| **Embassies** (`/embassies/*`) | 45 | 1 → 722 | 0 → 164 | 100% → 77.3% | 0 → 0 | **Fixed** (Now renders real pre-rendered content) |

*Note: Both the Language Pairs and Documents dynamic routes are now fully statically pre-rendered (SSG) at build time. The public clean URL patterns (`/translate-english-to-arabic` and `/degree-translation-services`) match and rewrite internally to these pre-rendered files at runtime, returning a 200 OK status code. Direct nested requests are also supported. Nonsense/unmatched URLs trigger a default HTTP 404 response.*

### Invalidated Original Findings

The following findings from the initial SEO audit are now **invalidated** thanks to the hotfix and dynamic routing restructure:
1. **Silent 404 Pre-Rendering (Section 4a & 4f)**: The finding that 226 dynamic paths (13 documents, 168 language pairs, and 45 embassies) render as 404 shells is now **completely resolved**. All 181 language pair and document pages, plus all 45 embassy pages, pre-render with full content and return 200 OK status codes on their active URLs.
2. **Thin Content (Section 3)**: The finding that embassies, language pairs, and document translation templates render thin content (1 word) is now **invalid**. The pages are successfully pre-rendered with median word counts of 722, 714, and 685 respectively.
3. **Self-referential Canonical Gaps on 404s (Section 4b)**: Dynamic parameters now resolve correctly, restoring proper canonical definitions on all generated pages.


