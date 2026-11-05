# LISAN.PK — Day 14/30 Publishing & Technical Instructions

**Scheduled execution:** Monday, 16 November 2026  
**Prepared:** 5 November 2026  
**Plan scope:** `B:T12` (**P0**, FRC/CRC family documents) + `A:T07` (**P1**, English → Turkish translation). Original plan also calls for an `A:T08` Urdu→Turkish opportunity review **only after inspecting GSC**, not automatic publication.  
**Role separation:** Complete public-facing copy has been supplied in the Markdown files. The implementation tool must **only integrate, format, preserve SEO, test and report**. Do not write replacement articles, services, FAQs, claims, prices or CTA text independently.

## 0. Files, targets and decisions

| Source-of-truth Markdown | Existing live canonical | Action |
|---|---|---|
| `LISAN_Day14_NADRA_FRC_CRC_Birth_Certificate_Service_REWRITE.md` | `https://www.lisan.pk/services/translation/birth-certificate-translation` | **REFRESH IN PLACE.** Add substantial FRC/CRC/B-Form, Italy, Switzerland and U.S. information to the existing birth-certificate service hub. |
| `LISAN_Day14_English_to_Turkish_Translation_Service_REWRITE.md` | `https://www.lisan.pk/services/translation/turkish-translation` | **REFRESH IN PLACE.** Clear English→Turkish / Turkish→English intent, preserve conversion functionality, correct sworn-translation promises. |

**Decisions already made by the 30-day plan:**

- The FRC cluster stays on the **existing birth-certificate service page**. Do **not** create `/services/translation/frc-translation`, `/nadra-frc` or multiple automatically generated city pages today. A separate FRC page is a possible Day 20 initiative subject to demand, genuine uniqueness and owner/GSC review.
- Keep the existing `/services/translation/turkish-translation` URL. **Do not** create a competing English-to-Turkish URL just to match the keyword.
- **No redirects, removals or noindex** of existing URLs without specific owner approval and GSC evidence.
- No current-price figures, ratings, operational statistics, testimonial quotes or claimed sworn-translator credentials may be invented.

## 1. Exact-copy implementation rule

1. Read the two Markdown files fully, including front matter, headings, tables, CTA copy, FAQs and editorial source notes.
2. The front matter contains **metadata**, not visible article copy. Use it for metadata and internal editorial tracking; do not render YAML delimiters or raw metadata keys in the page.
3. Preserve **every factual statement** and its meaning. Do not paraphrase, shorten, expand, translate, invent examples, change checklists or introduce new promises.
4. Tables may be converted into accessible, responsive React components without changing their cell text.
5. Preserve the Markdown's single H1. Ensure app layout does **not** also output the document title as a second H1. The current production birth page displays a title-like H1 followed by a second H1: correct this.
6. Convert service CTAs into existing first-party quote/form/WhatsApp buttons using the **exact supplied visible labels**. If the current destination or label is unavailable, report it and ask for an editorial decision rather than generating copy.
7. Retain the official **source-reference section**. The implementation tool must not strip external authoritative links as “outbound link cleanup.”
8. If a source contradicts the supplied article on publication day, **do not quietly rewrite the copy**: record the discrepancy, source URL and affected sentence for editorial correction.
9. Do not replace owner-approved rates in other service pages. This task addresses only the two selected URLs; pricing references in these files intentionally point to `/pricing` and request quotes for variable work.
10. Preserve the previous original publication date for a previously published page if the CMS uses a historical publication date. Set `dateModified` to the **actual deployment date**.

## 2. FRC/CRC family records — B:T12

**SEO:**

- Primary: `frc translation`.
- Secondary: `family registration certificate translation`, `crc translation english`, `b form translation`, `nadra birth certificate arabic translation`, `nadra death certificate translation`, `mrc translation`, `frc for family reunion translation`.
- Search intent: **Transactional**. This is a commercial service hub, not a new independent blog and not a government explainer masquerading as one.
- Canonical: `https://www.lisan.pk/services/translation/birth-certificate-translation`.
- Meta title/description: apply **exact values** in the supplied front matter unless current repo architecture has a hard length restriction; if it does, report the restriction instead of inventing an alternative.

**Layout/content requirements:**

- Direct answer visible above the fold and unobstructed on mobile.
- On-page distinction: **FRC vs CRC/B-Form vs local birth registration vs MRC/Nikah Nama vs death record** (comparison table).
- Distinct H2: FRC explanation, Italy family reunion, Switzerland CRC requirements, U.S./NVC rules, Arabic for Gulf use, death certificate, MRC, process, pricing, mistakes, FAQs and CTA.
- Preserve/check nested H3 structure and FAQ IDs; clickable anchor links must be unique.
- The Italy family-reunion section needs **spouse, child and parent scenarios**. Use the Italian Embassy checklist linked in the supplied article; do not collapse all cases into a generic “FRC always required” banner.
- Switzerland: verify published Embassy checklist version 02/2025 and any newer live version. Do not state that every Swiss civil record must be apostilled; source-specific acceptance is not a universal rule.
- U.S.: preserve the U.S. Department of State's important **FRC/CRC alternative birth-document rule** while explaining that it does **not** apply universally to other countries and visa contexts.
- Preserve issuance distinction: NADRA's FRC/CRC identity records vs **local-government civil registration** for birth, marriage and death certificates.
- Restore/retain exact translation/service CTA labels; do not claim that LISAN.PK issues NADRA documents, controls consular approvals or verifies family relationships.

**Critical existing-production problems to fix on this URL:**

- `100% Global Embassy Acceptance` — unsupported. Remove from the page.
- `flawless`, `guarantee absolute zero friction`, `universally accepted by USCIS, UKVI, IRCC, and all European embassies` — remove; replacement copy supplies accurate language.
- `Official Notarized Seal & Stamp` — do not promise notarisation unless specific verified arrangements are established and quoted.
- `standard 24 hours`, `2-hour express` — do not retain as universal promises. The replacement explains confirmation after document review.
- The live HTML crawler also showed a stale `Saudi Scholarship 2026: Applications Open Sep 16` global banner. Flag this as **a remaining sitewide Day 1 regression** and verify production deployment; update only via existing approved status copy, not an improvised banner.
- Shared components may re-inject unsupported claims even after the page body is replaced; inspect hero, service template, cards, trust panels and footer snippets.

## 3. Turkish document translation — A:T07

**SEO:**

- Primary: `english to turkish translation pakistan`.
- Supporting: `turkish to english certified translation`, `yeminli tercüme`, `notarized turkish translation`, `turkish diploma translation`, `tapu translation`.
- Intent: commercial / transactional.
- Canonical: `https://www.lisan.pk/services/translation/turkish-translation`.

**Content placement:**

- Show **English→Turkish** and **Turkish→English** as separate, clearly labeled pathways on the same existing canonical page.
- Make receiving-authority differences visible through official **Boğaziçi / Kayseri / Ankara** university examples rather than asserting one Turkish university policy.
- Keep Turkish sworn translator (*yeminli tercüme*) distinct from Pakistani certified translation and Turkish-notarised translations.
- Include diploma, transcript/ECTS, Turkish residence permit, *tapu* property title and civil-record examples from approved copy.
- Include an explicit direction note for **Urdu→Turkish** requests, but do not create a separate Urdu→Turkish service page today. The original plan requires a GSC opportunity review before selecting `A:T08`.

**Critical existing-production problems to fix on this URL:**

- `All Turkish Embassy and consulates require sworn and certified Turkish translations for all Urdu/English documents` — unsupported universal rule.
- Unsupported `100% acceptance`, `Embassy Approved`, `200% Guarantee`, `4.9/5 Google Rating` and `50,000+ clients` claims unless separately verifiable with concrete approved evidence.
- Repeated default text about Arabic translation in a Turkish commercial hub: use the fully supplied Turkish-specific editorial body.
- Do not describe LISAN.PK as a registered Turkish *yeminli tercüman*, *noter* or Turkish consular authority unless actual credentials are supplied and their scope verified.
- No claims of fixed Turkish notary fees or same-day notarisation absent verified service arrangement.

## 4. Canonical, internal linking and cannibalisation controls

**The family-document hub should link to relevant existing routes only where those are live:**

- `/services/translation/nikah-nama-marriage-certificate`
- `/services/translation/urdu-to-arabic`
- `/translation-english-to-arabic`
- `/guides/apostille-pakistan`
- `/guides/pakistan-apostille-country-list`
- `/pricing`
- `/contact`
- `/privacy-policy`

**The Turkish hub should link, if published, to:**

- `/services/translation/birth-certificate-translation`
- `/services/translation/nikah-nama-marriage-certificate`
- `/services/translation/property-document-translation`
- `/pricing`
- `/contact`

**Required implementation behavior:**

1. Resolve all internal URLs using actual routes in the repo and production, not assumptions.
2. If an internal target is from Day 3–13 and has not yet deployed, **do not fabricate a new route**. Track it and connect when that asset goes live; report the missing route.
3. Avoid sitewide exact-match anchor stuffing and indiscriminate links to pages about different search intent.
4. Inspect older family documents / birth certificate / FRC / CRC pages and Turkish service pages for competing exact-intent canonicals. **Do not apply redirects or canonical changes automatically**.
5. Preserve any existing relevant search impressions/clicks on both pages by keeping URL, page-level status, backlinks, navigation and core intent intact.
6. The planned Day 20 `A:T33` candidate `/services/translation/frc-translation` is **not approved for creation today**. Add it to a separate opportunity queue with 90-day GSC impressions/clicks and content differentiation evidence.
7. The `A:T08` Urdu→Turkish service expansion must similarly be evaluated with GSC query and page data and owner approval.

## 5. Technical implementation checklist

- Inspect current Next.js route and data component that provides these pages (dynamic `[slug]` or literal route) to avoid duplicate route shadowing.
- Keep present page type and links, but replace misleading content and any repeated generated boilerplate.
- Integrate the exact replacement text in repository's content system; prefer data/MDX if supported and retain rich semantic HTML.
- Use one H1 only; preserve logical H2/H3 hierarchy, accessible responsive tables and mobile callouts.
- Add metadata with a **self-referencing canonical** and stable `og:title`, `og:description`, `twitter:title`, `twitter:description`; no obsolete meta-keywords requirement.
- Structured data: `BreadcrumbList` and accurate `Service`/`WebPage` if supported by the current design system. Do not fabricate `AggregateRating`, review counts, claimed awards or agency certification. FAQ content may appear on page; adding `FAQPage` schema does **not** guarantee Google rich results.
- Preserve existing GA4 event tracking for WhatsApp, phone and first-party quote interactions. Confirm real browser firing; a DOM attribute alone is not proof that GA4 received a conversion.
- No broken outbound official links; do not rewrite authoritative government URLs to non-official sites.
- Check accessibility of disclosure widgets, focus states, link labels, color contrast and tables on narrow screens.
- Preserve sitewide footer, navigation, language switcher and any functioning quote form.
- Do not touch unrelated service pages or deploy global replacements of business copy without approval. If unsupported shared badges render on these two pages, remove or suppress them **for affected pages** and record the underlying shared-component issue.

## 6. Official-source verification before launch

**FRC/CRC:**

- NADRA FRC and CRC public explanations: https://www.nadra.gov.pk/identityDocument/certificates/frc and https://www.nadra.gov.pk/identityDocument/juvenile
- U.S. State Department's Pakistan reciprocity schedule: https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country/Pakistan.html
- Italy Islamabad family-reunion checklist: https://ambislamabad.esteri.it/wp-content/uploads/2024/11/Family-reunion-visa-requirments-1.pdf
- Italy Islamabad apostille and Italian translation conformity: https://ambislamabad.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-italiano/traduzione-e-legalizzazione-dei-documenti/
- Italy Karachi separate consular guidance: https://conskarachi.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/traduzione-e-legalizzazione-dei-documenti/
- Switzerland Embassy Pakistan family reunion PDF (published version 02/2025): https://www.eda.admin.ch/content/dam/countries/countries-content/pakistan/visa-information/checklist-2025-pk_EN.pdf

**Turkish:**

- Boğaziçi 2026–27 registration: https://ogrenciler.bogazici.edu.tr/en/pages/university-registration/8075
- Kayseri University international registration: https://intoffice.kayseri.edu.tr/en/c/2131-1/registration-dates-required-documents-for-application-and-language-of-instruction
- Ankara University international admission: https://isoidb.ankara.edu.tr/en/how-to-apply/
- Türkiye Directorate of Migration Management: https://en.goc.gov.tr/residence-

If any authority publishes a materially changed checklist, record **old text / new official language / source date / proposed editorial correction** and stop that claim's publication until reviewed. Do not make autonomous policy rewrites.

## 7. Validation and release reporting

### Pre-deploy

- [ ] Both existing paths render `200` locally.
- [ ] No new FRC, CRC or Turkish competing indexable landing pages were created.
- [ ] No visible YAML front matter or duplicated H1.
- [ ] Original URLs retained; canonical matches target.
- [ ] Metadata and excerpt populated from article front matter.
- [ ] Main answer visible in first screen on desktop and mobile.
- [ ] All comparison tables remain usable at 360px width.
- [ ] Original source links and internal CTA links functional.
- [ ] No `100% acceptance`, `200% guarantee`, unverified star ratings, misleading notary/swearing claims on the two target pages.
- [ ] No quotation or turnaround promises that weren't approved by LISAN.PK.
- [ ] CTA actions emit appropriate existing analytics events in a test browser.
- [ ] `npx tsc --noEmit`, build and relevant route tests passed.
- [ ] Screenshots of both desktop/mobile pages reviewed.

### Production

- [ ] Site deployment succeeded (a Git push is **not** proof of deployment).
- [ ] Both canonical pages return `200` in production and are not blocked by `robots` or `noindex`.
- [ ] Live content contains new FRC/CRC/Italy/Swiss sections and Turkish dual-direction sections.
- [ ] Production HTML has no residual unsupported trust guarantees.
- [ ] GA4 DebugView confirmed real `generate_lead` where the relevant CTA legitimately produces a lead.
- [ ] Any unresolved legacy pages or 404 links recorded for owner review.

### Final handover format

Report a concise table with: `Task ID`, `File(s) changed`, `Old/new content area`, `URL`, `Local check`, `Production check`, `Outstanding risk`. Provide the commit hash if committed. Keep `B:T12` and `A:T07` marked **implemented** only after content deployment, not merely after writing the files. Put `A:T08` and any possible Day 20 FRC-specific landing page in **GSC review pending**, not “published.”
