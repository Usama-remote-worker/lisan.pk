# SEO Fix Backlog — lisan.pk

This backlog details the prioritized list of technical SEO issues identified during the audit, their root causes, affected paths, and instructions for fixing them.

---

## 1. High Priority

### Fix 1.1: Dynamic Page Params hydration (Promises vs. Objects)
- **Problem**: 226 dynamic paths (168 language pairs, 13 document types, and 45 embassies) pre-render as 404s.
- **Root Cause**: The application was updated to a Next.js version where page parameters (`params`) are asynchronous Promises. The templates access `params` synchronously (e.g. `params.slug`), returning `undefined` and triggering the `notFound()` call.
- **File Paths to Modify**:
  - `src/app/embassies/[slug]/page.tsx`
  - `src/app/[document]-translation-services/page.tsx`
  - `src/app/translate-[source]-to-[target]/page.tsx`
- **Fix Instructions**:
  - Update page component signatures to be asynchronous.
  - Await the `params` object at the start of both `generateMetadata` and the page component, e.g.:
    ```typescript
    export async function generateMetadata({ params }: Props) {
        const { slug } = await params;
        // ...
    }
    export default async function EmbassyPage({ params }: Props) {
        const { slug } = await params;
        // ...
    }
    ```

### Fix 1.2: Complete XML Sitemap Generation
- **Problem**: 227 indexable URLs are missing from the XML sitemap.
- **Root Cause**: `sitemap.ts` contains a hardcoded array of only 11 pages.
- **File Path to Modify**:
  - `src/app/sitemap.ts`
- **Fix Instructions**:
  - Update `sitemap.ts` to dynamically build sitemap entries by reading data segments (cities, allowlisted location services, blog content directory, Turkish universities, scholarships, and translation service details).
  - Use file reading (`fs.readdirSync`) to pull dynamic blog slugs and import keys from data files.

### Fix 1.3: Eliminate Broken Links in Global Footer
- **Problem**: Global footer generates three broken links that return 404.
- **Root Cause**: Footer links to non-existent dynamic slugs for French and German, and an incorrect slug for Spanish.
- **File Path to Modify**:
  - `src/components/layout/Footer.tsx`
- **Fix Instructions**:
  - Remove links to `/services/translation/french-translation` and `/services/translation/german-translation` (or create those service pages if they represent actual future offerings).
  - Correct the Spanish link from `/services/translation/spanish-translation` to the correct root page `/english-to-spanish-translation-services`.

### Fix 1.4: Resolve Orphan Pages via Footer/Header Navigation
- **Problem**: 12 indexable pages (including the HTML sitemap `/site-map`, `/services/ukvi-certified-translation`, `/english-to-spanish-translation-services`, and the USCIS sub-pages) are orphaned.
- **Root Cause**: No layouts or menus link to these pages.
- **File Paths to Modify**:
  - `src/components/layout/Footer.tsx`
  - `src/components/layout/Header.tsx`
- **Fix Instructions**:
  - Add links to `/services/ukvi-certified-translation` and `/english-to-spanish-translation-services` in the footer.
  - Link `/site-map` (HTML sitemap) in the footer under the "Resources" block (replacing the `/sitemap.xml` link, or placing them side-by-side).

### Fix 1.5: Fix UKVI Page Broken Links
- **Problem**: The UKVI page links to 5 non-existent sub-pages.
- **Root Cause**: Links are hardcoded in the page markup, but no matching route directories exist.
- **File Path to Modify**:
  - `src/app/services/ukvi-certified-translation/page.tsx`
- **Fix Instructions**:
  - Clean up or redirect these links. Either remove them, point them back to the main UKVI hub section anchors, or create matching dynamic pages if needed.

---

## 2. Medium Priority

### Fix 2.1: Image Compression and Format Migration
- **Problem**: Massive image payloads (some > 1MB) and high load times on mobile.
- **Root Cause**: Assets are in raw PNG format instead of compressed WebP/AVIF.
- **File Path to Modify**:
  - `public/` (replace files)
- **Fix Instructions**:
  - Convert all images in `public/` to WebP or AVIF format.
  - Ensure even the favicon is optimized and sized appropriately.
  - Update references in `.tsx` and `.md` files to the new formats.

### Fix 2.2: Dynamic Entry Animation Layout Shift (CLS)
- **Problem**: Entry animations slide text blocks vertically on page load, causing layout shifts.
- **Root Cause**: Framer-motion `fadeInUp` and CSS `.animate-fade-in-up` use vertical offsets (`translateY`) on above-the-fold content blocks.
- **File Paths to Modify**:
  - `src/components/home/Hero.tsx`
  - `src/components/ui/PageHeader.tsx`
- **Fix Instructions**:
  - Disable vertical shifting animations on above-the-fold typographic headers. Use opacity-only fades (`fadeIn`) for hero text to preserve layout positions during page paint.

### Fix 2.3: Heading Hierarchy skipped levels
- **Problem**: Section tags skip heading levels (e.g. H2 -> H4 in testimonials, and H4 before H3 in scholarship promos).
- **Root Cause**: Inconsistent markup structure in component layouts.
- **File Paths to Modify**:
  - `src/components/home/TestimonialSection.tsx`
  - `src/components/home/StudyAbroadPromo.tsx`
- **Fix Instructions**:
  - Correct tags to ensure they follow sequential hierarchy (`<h1>` -> `<h2>` -> `<h3>` -> `<h4>`). Use CSS classes for font styling instead of changing semantic heading levels for visual convenience.

### Fix 2.4: Title and Description length normalization
- **Problem**: Descriptions are truncated in search engines (e.g. 177 characters).
- **Root Cause**: Text templates exceed recommended lengths.
- **File Paths to Modify**:
  - `src/app/locations/[city]/[service]/page.tsx`
  - `src/app/services/translation/[slug]/page.tsx`
- **Fix Instructions**:
  - Trim titles to 50-60 characters.
  - Trim meta descriptions to 140-160 characters.

---

## 3. Low Priority — Tagged for Phase 3 (Mobile Baseline Remaining Audit Items)

### Fix 3.1: Mobile touch target adjustments in page templates & directories
- **Status**: Tagged for Phase 3 (Unfixed).
- **Problem**: Touches are tight and lead to misclicks on mobile viewports.
- **Root Cause**: Small items and dense lists in templates use small tap target areas (<44x44px).
- **Affected File Paths**:
  - `src/app/site-map/page.tsx`
  - `src/app/directory/page.tsx`
  - `src/components/home/LocationGrid.tsx`
  - `src/components/home/DocumentTranslationGrid.tsx`
  - `src/components/ui/PageHeader.tsx` (breadcrumbs)
- **Fix Instructions (Phase 3)**:
  - Add margins, padding, and line height to link items to ensure a minimum touch target area of 44x44px.

### Fix 3.2: Mobile Font Size & Body Copy Compliance (sub-16px text)
- **Status**: Tagged for Phase 3 (Unfixed).
- **Problem**: Body copy elements and secondary UI badges use font sizes under 16px (`text-sm`, `text-xs`, `text-[10px]`).
- **Root Cause**: Inconsistent body copy class typography across landing page components and dynamic route templates.
- **Affected File Paths**:
  - `src/app/locations/[city]/page.tsx`
  - `src/app/locations/[city]/[service]/page.tsx`
  - `src/app/services/translation/[slug]/page.tsx`
  - `src/components/home/ServicePackages.tsx`
  - `src/components/home/TestimonialSection.tsx`
  - `src/components/home/BlogPreview.tsx`
  - `src/components/turkey/UniversitySection.tsx`, `LeadForm.tsx`, `TurkeyFaq.tsx`, `ExitPopup.tsx`
  - `src/components/scholarship/ScholarshipPageClient.tsx`
- **Fix Instructions (Phase 3)**:
  - Update default body copy text sizes from `text-sm` (14px) / `text-xs` (12px) to `text-base` (16px) on mobile viewports (`text-sm sm:text-base` or `text-base`).

---

## 4. Phase 5 Deferred Items

### Deferred 5.1: 45 Embassy Pages Indexing Assessment
- **Status**: Deferred to Phase 5.
- **Decision Record**: 45 embassy pages — noindex was accidental boilerplate from commit 5679da0, not a decision. 322 median unique words, 0 inbound links. Evaluate per-page demand before indexing any. All 45 embassy pages stay noindexed and stay out of the sitemap.

### Deferred 5.2: URL Renames Assessment & Decision
- **Status**: Deferred to Phase 5 / GSC Review.
- **Decision Record**: URL renames deferred. All 13 proposals carried Unknown impression/click data, making the risk assessments unverifiable. Three (the Lahore/Karachi/Islamabad city URLs) are content merge decisions, not URL changes, and belong in Phase 5 with GSC data. /certified-document-translation is the primary service page with likely external backlink equity — not moving it without backlink data. /site-map to /sitemap offers no benefit and risks confusion with /sitemap.xml. Revisit only if GSC data shows a specific URL underperforming for structural reasons.



