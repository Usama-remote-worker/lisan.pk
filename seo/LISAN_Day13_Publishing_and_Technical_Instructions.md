# LISAN.PK — Day 13/30 Publishing & Technical Instructions

**Scheduled:** Sunday, 15 November 2026 (plan reference: Day 13; factual research prepared 5 November 2026)  
**Scope:** B:K03, B:K10, A:S02, A:S03, A:S04, A:S11, A:S12, A:F08.  
**Role separation:** All user-facing copy is **already written**. The implementation tool is responsible for correctly integrating it into the existing Next.js project, technical SEO, testing and reporting — **not composing or rewriting it**.

## Source-of-truth content files

| File | Required URL | Action |
|---|---|---|
| `LISAN_Day13_KAUST_Fall_2027_Fellowship_GUIDE.md` | `/scholarships/kaust` | **Create** new informational university guide. First check for an existing equivalent to avoid duplication. |
| `LISAN_Day13_Study_in_Saudi_Edit_Application_After_Submission_NEW.md` | `/guides/study-in-saudi-edit-application-after-submission` | **Create** one focused new guide. |
| `LISAN_Day13_King_Saud_University_Scholarship_PAGE_REWRITE.md` | `/scholarships/king-saud-university` | **Replace editorial body in place**; preserve route and original publication date. |
| `LISAN_Day13_King_Abdulaziz_University_Scholarship_PAGE_REWRITE.md` | `/scholarships/king-abdulaziz-university` | **Replace editorial body in place**; preserve route and original publication date. |
| `LISAN_Day13_Program_Finder_Approved_SEO_Copy.md` | `/saudi-scholarships/program-finder` | Integrate approved visible intro, guidance, status disclaimers and FAQ sections around **existing interactive finder**, without replacing its functionality. |
| `LISAN_Day13_Application_Status_Returned_Updates_APPROVED_COPY.md` | `/blog/study-in-saudi-application-status-under-process` | Review Day 11 updated content; substitute only corresponding sections that still need correction. **Do not append duplicate material.** |

**Absolute instruction:** Do not create text for public pages. Do not paraphrase, translate, expand, simplify, embellish or invent headings, FAQs, statistics, author credentials, prices or testimonials. Render the editorial Markdown faithfully in the existing design system. You may convert the Markdown's headings/tables into React/MDX components that yield the **same visible words**. Keep bibliography/reference labels and outbound official links. Do not expose YAML front matter as body content.

## Step 1 — Inspect repo and route structure

1. Check existing route files, content registry, `src/content/blog`, scholarship-page templates, metadata helpers, site navigation, sitemap and revalidation mechanisms.
2. Before creating `/scholarships/kaust`, check if an equivalent slug or dynamic scholarship-university entry already exists. Prefer **one** indexable canonical page. Do not create a shadow duplicate.
3. Verify every link in supplied copy against actual routes. If a referenced page doesn't exist, **report the mismatch**; use an existing relevant URL **only if it serves the same intent**, without altering article prose. Do not add invented routes.
4. Inspect current university-page schemas/components before replacing bodies. Retain accessible navigation, responsive design and service CTAs that are accurate.
5. Preserve untouched pages, published dates, user feedback and existing non-conflicting business information. Set modified date to **actual deploy date**, not an assumed date.

## Step 2 — KAUST: B:K03 (new guide)

- Target canonical: `https://www.lisan.pk/scholarships/kaust`.
- Use the **complete** supplied KAUST guide; do not generate a shorter version.
- Confirm the official timeline on publication day at `https://admissions.kaust.edu.sa/how-to-apply/admission-timelines`; **3 Jan 2027** deadline must be supported by the live KAUST website. If different, **pause that date's publication and report**, instead of making an unapproved prose edit.
- Verify the source-linked KAUST admissions entry requirements page, including **MOI not accepted**, IELTS **7 overall / 6.5 each**, TOEFL iBT **5 / 4.5** under its currently published newer score scale, GPA **3.0 minimum**, three referees, ~750-word SOP, transcript grading-scale requirement and conditional non-English transcript translation.
- Keep the distinction between KAUST's separate admissions portal and the Study in Saudi program. Never apply KAUST's date to KSU or KAU.
- **Funding note:** The USD 70k–80k figure includes tuition and non-cash benefits. Don't style it as a cash stipend.
- Do not add claim of official KAUST partnership, application guarantee or exclusive translation requirement.

## Step 3 — KSU/KAU refresh: B:K10, A:S11, A:S12

- Update existing KSU and KAU scholarship routes **in place**. Preserve current page-level backlinks/canonical, navigation, and breadcrumbs; no redirects.
- For **KSU**, verify `https://dar.ksu.edu.sa/en/overseas`; the SAT **1010** and age **17–25** are for the specified **external undergraduate** scholarship path. Never paste them as universal graduate requirements.
- For **KAU**, verify the 16 Sep–6 Oct **2026** window on its 8 Sep announcement and make the **closed** status unmistakable. Never reuse a 2026 date as a confirmed 2027 opening.
- Retain individual university intent and unique H1. Neither page is a duplicate of the KAUST guide.
- Fix existing cross-links where university names were confused. Preserve relevant backlinks and historical scholarship URLs.
- Compare original university pages' key evergreen sections to replacement text. Keep live UI functionality, but the supplied replacement is the approved editorial body. Flag any material fact appearing in the existing page that is not represented in approved copy for editor review rather than inventing text.

## Step 4 — Program Finder: B:K10

- Keep existing interactive filters, university data structure, gender filters, cards, search and CTA functionality.
- Insert approved intro, comparison, filters/help text, program-funding disclaimer and FAQ from supplied Program Finder file in appropriate positions.
- **Don't relabel all programs as fully funded.** If a program is paid or scholarship status unverified, use the accurate classification.
- **Never infer gender from university name or local stereotypes.** Use program-specific official values. If not verifiable, show “Not confirmed.”
- Distinguish **currently available catalog record** from **actively open intake**. Do not present stale 2026 programs as accepting applications today.
- Verify filter semantics, female/male/both/not-confirmed states, funding categories and program level on at least one representative live official listing per category where possible.
- Add internal links to the updated KSU, KAU and KAUST pages, and the existing Study in Saudi status/deadlines articles.
- Maintain useful crawlable HTML text for key introduction and FAQ; avoid burying all article copy behind client-only JavaScript.

## Step 5 — Post-submission guide: A:S03, A:S02, A:S04, A:F08

- Create the new **field-specific guide** at the requested canonical with complete supplied copy.
- Cross-link it from the existing Study in Saudi status hub.
- Review Day 11 status hub and **only replace** outdated claims using the supplied “Application Status & Returned Updates” sections. If the Day 11 copy is already correct, leave it unchanged and mark verified.
- Resolve the official FAQ's apparent overlap accurately: its general answer restricts post-submission edits; its other answer permits qualifications/specified fields, **not passport number** after submission.
- Do not implement speculative form field mappings, fake screenshots or claims that a portal field is presently editable without evidence.
- Never accept applicant passwords, OTPs or account cookies in a quote or scholarship-help form.
- Do not treat ‘Returned’, ‘Under Process’, ‘Nominated’ and ‘Accepted’ as interchangeable.

## Step 6 — Technical SEO and quality gates

1. **One canonical page per search intent.** New KAUST page, existing KSU, existing KAU, new edit guide, existing status hub, existing Program Finder.
2. Metadata title/description and canonical from each file; avoid duplicate title/H1.
3. Keep official-source hyperlinks clickable, clearly labeled and to actual university/Ministry sites.
4. Add `BreadcrumbList` when accurate; use `Article`/`WebPage` schema with real publication/modification dates. **Do not add fake reviews, star ratings or named expert reviewers.** For FAQ content, mark up only if existing schema practices warrant it; Google rich-result display is not guaranteed.
5. Ensure `/scholarships/kaust` and `/guides/study-in-saudi-edit-application-after-submission` are in sitemap and properly indexable; verify `robots` and `canonical`.
6. Do not remove or redirect any historical university or scholarship URL automatically; create a **GSC review queue** for any cannibalization candidates, preserving existing traffic.
7. Check responsive tables, Arabic text handling in surrounding UI if present, buttons, keyboard focus and accessible link labels.
8. Preserve working WhatsApp/phone/form analytics and verify GA4 event names in a real browser, where connected.
9. Check link resolution. No broken `href`s, `localhost` references or raw Markdown image paths.
10. Run `npx tsc --noEmit` and the repository's configured build/tests; distinguish local success from successful production deployment.

## Publication-day evidence checkpoint

The supplied text was verified on **5 November 2026** but scheduled for **15 November 2026**. Before deployment, check:

- KAUST: Fall 2027 admissions open, January 3 deadline, qualifications, English-score requirements, funding/conditions.
- KSU: present external-scholarship requirements and program list.
- KAU: 2026 window historical and any newly published cycle.
- Study in Saudi: FAQ on editing passport number, qualification fields, returned applications and program filter states.

If any official source materially contradicts the approved copy, **do not silently rewrite the copy**. Mark the passage as `BLOCKED — SOURCE CHANGE`, cite the new authority and return it for editorial revision. The publishing tool should only implement approved replacement text.

## Completion acceptance criteria

- [ ] New KAUST guide serves HTTP 200 in production and its canonical is correct.
- [ ] New post-submission guide serves HTTP 200 in production and its canonical is correct.
- [ ] Existing KSU and KAU routes preserve URL and are content-updated.
- [ ] Program Finder remains interactive and displays verified category labels and the complete approved explanatory copy.
- [ ] Existing application-status hub is up-to-date without duplicated sections.
- [ ] Main sources and links work; 0 unsupported guarantees or invented 2027 KSU/KAU dates.
- [ ] No inappropriate redirects, noindex changes or unsupported badge/ratings.
- [ ] TypeScript/build pass; mobile and desktop spot-checks pass.
- [ ] Changed files, URL status, publication times, QA findings and remaining blockers are reported.

**Scope boundary:** No unrelated code refactor, database redesign, application submission automation or mass directory rewrite. Do not commit, push or deploy unrelated work.
