# LISAN.PK — DAY 12/30: Publishing and Technical Implementation Instructions

**Scheduled date:** Saturday, 14 November 2026  
**Source research checked:** 5 November 2026  
**Day 12 IDs:** **B:T20**, **A:S01**, **A:S15**, **B:A22**, **B:A25**  
**Mode:** Implementation only. The three articles accompanying this document are the complete editorial content.

## 0. Non-negotiable rules

**Do not generate, rewrite, summarize, expand, paraphrase or replace the body text of any supplied Markdown article.** Do not independently create article intros, FAQ answers, destination rules, comments, scholarship dates, prices or claims of government approval.

The implementation work is limited to locating the existing content source and rendering architecture; mapping frontmatter, content and tables into the existing CMS; fixing page layout and technical SEO; wiring links and metadata; testing; and reporting. If the approved text conflicts with a live official source at deployment time, **STOP that article and raise the discrepancy for editorial review** rather than silently rewriting it.

No invented author experience, government registration numbers, licensed-sworn-translator status, client reviews, reviewer names, reviewer signatures, acceptance rates, program scores or application opening dates. Do not mention any development tool brand in public-facing copy.

## 1. Deliverables and URL ownership

| ID | File | Action | Canonical route | Intent |
|---|---|---|---|---|
| **B:T20** | `LISAN_Day12_Certified_Translation_Meaning_Pakistan_GUIDE.md` | **NEW authoritative educational guide** | `/guides/certified-translation-pakistan-explained` | Informational |
| **A:S01** | `LISAN_Day12_Study_in_Saudi_Deadline_Tracker_REWRITE.md` | **Replace existing article body in place** | `/blog/fully-funded-scholarship-deadlines-saudi-universities-2026` | Informational / current official status |
| **A:S15** | `LISAN_Day12_Saudi_Scholarship_Eligibility_Pakistani_Students_REWRITE.md` | **Replace existing article body in place** | `/blog/saudi-scholarship-eligibility-pakistani-students` | Informational / eligibility |
| **B:A22** | Reviewer implementation, described below | **Conditional, real review only** | Arabic translation pages and relevant guides | E-E-A-T / transparency |
| **B:A25** | Correct the broken link/anchor | **Repair About-page navigation** | `/about#why-no-license` | Technical / trust |

**No new scholarship deadline article or new eligibility URL.** Both pre-existing pages already exist and have ranking/history signals. Preserve their exact slugs, canonical links, original publication dates, inbound links and historical `datePublished` values. Set `dateModified` to the **actual deployment date**, not the scheduled date if published early or late.

The new certified translation guide is an **informational** article. Do not replace or redirect the existing `/guides/certificate-of-accuracy-translation-sample` (Day 11), `/services/uscis-certified-translation/requirements`, `/services/translation/urdu-to-english-translation`, `/services/translation/urdu-to-arabic` or `/pricing` pages. Those represent related but distinct intent.

## 2. Pre-implementation baseline

1. Locate the blog repository content source (Markdown, MDX, database record or static TSX), the `/guides` renderer, page metadata, canonical resolver, sitemap and schema generator.
2. Capture current response status, canonical, H1, meta title and description, original published/modified dates, internal links, click CTA paths and any embedded sitewide promotional banners on all three target URLs.
3. Inspect Google Search Console page and query performance for the existing deadline and eligibility articles **before** making any consolidation decisions. Do not infer an article is unimportant from word count alone.
4. Confirm the new guide URL is not already a live page. If it already exists, report the collision; do not create a competing route.
5. Verify which UI components add extra H1 tags or insert unrelated global “applications open” banners into blog bodies.
6. Limit the code diff to the scheduled work. Do not change unrelated scholarships, local pages, prices or redirect behavior.

## 3. B:T20 — publish the certified translation explanation guide

- Create **one** canonical page at `/guides/certified-translation-pakistan-explained` using the exact supplied editorial copy.
- Keep its definition and quick answer above the fold. The section on Pakistan's sworn-translator system intentionally cites the **German Federal Foreign Office** and does not claim that all foreign destinations treat certifications identically.
- Preserve the comparison tables (certified / notarized / MOFA attestation / apostille), destination rules, sample wording, 16 FAQs, official sources and internal links.
- Render the included unsigned declaration **as an educational example**, not as a signed legally effective certificate. The real downloadable unsigned sample remains on `/guides/certificate-of-accuracy-translation-sample`.
- Add one H1. If the renderer already outputs the Markdown title as an H1, prevent a second H1 in the body; do **not** drop the intro or replace the title with newly generated copy.
- Check all official external sources and all internal links before deployment. If a referenced guide is not yet live, report it and obtain editorial approval for the replacement rather than inventing a route.
- Use Article/BlogPosting and BreadcrumbList schema only where the facts are real and match on-page data. FAQPage schema may mirror visible FAQs, but do not promise rich-result eligibility.
- No fake `Review`, `AggregateRating`, professional-licence schema, government endorsement or fictitious credentials.

## 4. A:S01 — replace current Saudi deadline tracker in place

**Canonical:** `/blog/fully-funded-scholarship-deadlines-saudi-universities-2026`

- Preserve the original historical publication date (public page currently displays **30 August 2026**; verify repository source).
- Keep the official **16 September–6 October 2026** window labelled **closed**, supported by KAU's 8 September 2026 official announcement.
- **Never create a September 2027 application deadline** by merely advancing the year in the portal's month/day UI. The article explicitly marks the next unified 2027/28 intake **unconfirmed as of the cited review**.
- Do not conflate semester-start dates with scholarship deadlines, Paid Study with Full Scholarship, or program catalogue listing with open application.
- Preserve the portal’s editability discrepancy: the detailed Study in Saudi FAQ and homepage have different wording about post-submission changes. Do not make an invented universal statement.
- Remove the previous article's unsupported blanket “all documents must have Arabic translations” and “untranslated Urdu means automatic rejection” claims; the supplied replacement already replaces these with program-specific advice.
- Ensure the old in-article calls to “prepare before September 16” and countdown references do **not** survive from the old body or injected layout components.
- Keep accurate links to the status hub, program finder, KSU/KAU, consultancy, Arabic translation pages and official sources.
- Preserve content-level date verification notes, while setting technical `dateModified` to the real deploy date.

## 5. A:S15 — replace scholarship eligibility article in place

**Canonical:** `/blog/saudi-scholarship-eligibility-pakistani-students`

- Preserve historical publication date (public article currently displays **5 September 2026**; verify actual CMS source).
- Replace the old body with the complete approved rewrite; do not leave the old “before September 16” CTA, stale 2026 opening-status paragraph, or duplicated H1 from template injection.
- Maintain nuance between Saudi public university **general scholarship ages** (Bachelor's 17–25, Master's ≤30, PhD ≤35) and **educational visa** minimum age (a separate rule). Check the Ministry and portal sources.
- Preserve real examples as **examples only**: SAT ≥1010 is from a specific Computer Science bachelor's program; the grade “Very Good” and IELTS 3.5/equivalent example are from a **specific KAU master's IT listing**. Never emit these as university-wide or universal requirements.
- Make it easy to scan by degree and by eligibility category (age, marks/CGPA, test, language, gender, funding type, documents).
- All applicant-facing CTAs must reflect the **closed** 2026 announced intake. No countdowns or invented “applications opening soon” notices.
- Link to existing scholarship hub, official deadline tracker, without-IELTS guide, program finder and relevant translation/HEC pages without changing their canonical intent.

## 6. B:A22 — real expert review only (conditional trust work)

**Audit finding:** About page names **Muhammad Iftikhar Zahid** and lists MA Arabic and MA Islamiyat qualifications. This public claim alone is **not proof that this person personally reviewed every article**.

Implement a reusable reviewer-box component, but display a **named reviewer/date/credential** on a particular page **only after**:

1. LISAN.PK's authorized owner verifies the person's identity and correct name spelling.
2. The degree/experience claims proposed for display are supported and owner approved.
3. That person actually reviews and approves the specific page.
4. The review date is recorded accurately, along with a review trail/version record.
5. A real reviewer profile URL is approved, ideally an existing About-page section or a verified dedicated biography.

**Exact approved UI copy when review is actually completed:**

> **Editorial review:** Reviewed by **[approved reviewer full name]** on **[actual review date]**. **[Only verified qualification/role]**. References: [relevant official sources already cited in this article].

Until those conditions are met, **show no named “Reviewed by” badge and no `Person` reviewer schema.** An optional neutral text is permissible: “Sources and procedures are checked against the official references listed below.” Do not imply peer review or professional credentials through that text.

After approval, the reusable component can be attached to genuinely reviewed Arabic service pages and educational guides. Do not mechanically assign one reviewer to every article without recorded review.

If using Person structured data, its `name`, `url`, `jobTitle`, qualifications, organization and relationship to the page must match verified visible facts; do not fabricate educational institution names, qualification IDs, photos or government appointments.

## 7. B:A25 — repair About-page `#why-no-license` link and risky claims

**Current problem:** `/about` promotes an anchor related to translator licences. Audit flagged `#why-no-license` as broken or missing. The About page also includes sweeping “100% acceptance,” “government recognized,” and “200% guarantee” claims; do not reinforce them.

Technical repair requirements:

- Inspect the existing About-page link target. Preserve `/about#why-no-license` compatibility with an `id="why-no-license"` **on an actual visible section** (do not create an empty hidden anchor only for search engines).
- Change the prominent explanatory link to the new verified guide `/guides/certified-translation-pakistan-explained`.
- If the About page needs short explanatory text, use the **exact approved copy below** rather than asking a code tool to write or paraphrase it:

> **What does certified translation mean in Pakistan?** A certified translation includes an accuracy statement issued by the responsible translator or translation provider. The rules for translator recognition, signatures, notarization and legalisation vary by receiving authority and destination country. The German Federal Foreign Office states that Pakistan has no German-style sworn translators; this does not mean that every foreign authority accepts every translation. **Read our certified-translation guide for country-specific requirements.**

- Replace the claim that certified translation is defined **“purely by credibility and reputation”** with the above text; this is an unreliable universal rule.
- Remove unsupported “officially recognized by” embassy/MOFA/HEC logo blocks unless an actual current government endorsement document exists and the owner explicitly approves the exact claim.
- Do not invent refund terms; submit the existing 200% money-back promise and 100% acceptance rates for an **owner-approved legal/commercial policy review**, and remove or temporarily hide unsupported endorsements pending evidence.
- Keep existing historical business claims only if the owner can substantiate them; do not convert a claimed 40-year company history into an unsupported award, accreditation or registration.
- Avoid breaking the About layout, menu anchors, existing contact links and responsive behavior.

## 8. Internal linking and keyword ownership

Connect content purposefully:

| From | Link to | Anchor purpose |
|---|---|---|
| Certified-translation guide | Day 11 accuracy-certificate guide | Example certificate, not a second duplicate definition article |
| Certified-translation guide | Day 5 procedures comparison | Translation vs notarization vs apostille |
| Certified-translation guide | Urdu→English, Urdu→Arabic, `/pricing` | Commercial services when requested |
| Deadline tracker | Status hub, program finder, KSU/KAU | Application journey and university-specific dates |
| Eligibility page | Deadline tracker, program finder, without-IELTS | Degree-level qualification journey |
| About page | New certification guide | Repair no-license link and route readers to detailed explanation |

Use existing internal-link text as supplied in the Markdown. If URLs are inaccessible, report the exact failing links; do not fabricate a competing article or silently 301 a URL.

## 9. Technical SEO and UI requirements

- 200 status for all three published pages; correct canonical on HTML server output.
- Single accessible H1 per page; semantic H2/H3, code-friendly inline links, responsive tables (horizontal overflow and visible headers).
- Unique metadata per page: `title`, `description`, absolute `og:url`, OG/Twitter title/description as already implemented on Day 11.
- Do not output `meta name="keywords"` tags; editorial keyword fields are internal research metadata.
- Accurate Article/BreadcrumbList JSON-LD generated from actual page content and verified author fields.
- `datePublished` original on both rewritten blog posts; `dateModified` = actual deploy date. New guide publication date = actual publish date.
- No fake star rating schema, FAQ rich-result promises, missing-image authors or reviewer Person schema without verification.
- Include the new guide in sitemap; do not create duplicate trailing-slash pages. Existing article sitemap URLs remain unchanged.
- Audit mobile at 320 px, 375 px and 768 px; ensure FAQs, tables, source links and sticky CTAs do not overlap.
- Confirm the existing first-party form / WhatsApp / phone lead tracking still works; avoid links to untracked third-party quote forms.
- Confirm sitewide banner on these pages does not state the September–October 2026 Study in Saudi intake is currently open.

## 10. Official-source publication gate

Before publishing the editorial assets, manually revisit the references and record the checked timestamp:

- German Federal Foreign Office: `https://pakistan.diplo.de/pk-en/service/legal-uess-1680522`
- USCIS translation regulation: `https://www.ecfr.gov/current/title-8/section-103.2`
- GOV.UK visitor translation guidance: `https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk`
- GOV.UK translation certification: `https://www.gov.uk/certifying-a-document`
- Saudi Ministry scholarship eligibility: `https://www.moe.gov.sa/en/education/admission-and-registration/publicuniversitiesscholarships`
- KAU 2026 intake: `https://www.kau.edu.sa/faculty/en/kau_website/announcement/the-date-for-opening-admission-applications-for-non-saudi-students-residing-both-inside-and-outside-the-kingdom-for-undergraduate-and-postgraduate-programs`
- Study in Saudi detailed FAQ: `https://studyinsaudi.sa/en/Faq`
- Study in Saudi official homepage: `https://studyinsaudi.sa/en/Home/Index?lang=en`
- Specific program listings referenced in the eligibility article, and their current conditions.

**If the official sources change, halt publication of the affected statement and seek editorial revision.** Do not quietly change its substance in code. The original 5 November research date is factual, but it does **not** prove official policies or future-intake availability remain unchanged on 14 November.

## 11. Required acceptance report

Return a compact execution report with these headings and evidence:

1. **Files created/modified** (exact repository paths; do not list uncommitted unrelated work as Day 12).
2. **Three URLs and HTTP statuses**; original publication date preservation for both rewrite pages.
3. **Page titles, H1, canonical, meta descriptions, server-side OG/Twitter URL and sitemap** checks.
4. **Official-source recheck** (which source, date/time, any contradiction; editorial hold if needed).
5. **About anchor test** (`/about#why-no-license`) and link to the new guide.
6. **Reviewer validation state**: not verified / approved by named reviewer; never mark as complete without evidence.
7. **Unsupported-claim cleanup state** (endorsements and 100%/200% guarantee submitted for owner review or removed after owner decision).
8. **Responsive layouts and lead-event tests**, including missing/broken internal links.
9. **Build checks**, preferably `npx tsc --noEmit` and the project's own lint/build tests (note pre-existing failures separately).
10. **Commit/deployment ID**, **production URL verification** and any actions awaiting owner approval.

## Completion criteria

Day 12 editorial is completed by the supplied files. Day 12 implementation is completed **only after** the three pages are published correctly, the About anchor works, verified claims match sources, and the owner/actual reviewer approval gate for named expert review is respected. **No auto-redirects, no invented article content and no false reviewer sign-offs.**
