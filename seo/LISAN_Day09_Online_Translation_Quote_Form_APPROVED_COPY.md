---
title: "Day 9 — First-Party Translation Quote Form: Approved Interface Copy"
content_type: "approved_ui_copy_for_existing_contact_page"
canonical_route: "/contact"
cluster: "A:T45"
primary_keyword: "online certified translation services pakistan"
intent: "transactional"
status: "editorially complete; implementation must bind messages to actual behavior"
---

# Approved public-facing copy — online certified translation request

**This file contains final UI wording, not instructions to invent additional copy.** Publish these exact strings in appropriate components on `/contact` and its form workflow. Only show text describing an action or security feature once that action or feature is genuinely implemented and tested. Never show a submission success message unless a server-side request has been accepted and durably saved/delivered.

## Section heading

**H1:** Request Certified Document Translation Online in Pakistan

**Intro:** Tell us what document you need translated, the original language, the required language and the receiving authority. You can request a quote for Urdu, Arabic and English documents without ordering an unnecessary service. We will review the details you provide and confirm the available delivery format and price before paid work begins.

**Subheading:** Get a translation quote

**Trust sentence:** Your document remains your document. Share only the pages necessary to assess the request and read our privacy policy before uploading sensitive files.

**Link text:** View our privacy policy

**Link destination:** `/privacy-policy`

## Contact and identity fields

**Full name**  
Placeholder: `Your name`  
Helper: `Use the name you want us to address you by.`

**Email address**  
Placeholder: `you@example.com`  
Helper: `We'll use this to respond to your request.`

**WhatsApp or phone (optional)**  
Placeholder: `+92 ...`  
Helper: `Include the country code if you'd like a WhatsApp or phone response.`

**Preferred response method**  
Options: `Email` · `WhatsApp` · `Phone`

## Translation details

**Source language**  
Helper: `What language is the document written in?`  
Options: `Urdu` · `Arabic` · `English` · `Other (please specify)`

**Target language**  
Helper: `What language must the translation be delivered in?`  
Options: `English` · `Arabic` · `Urdu` · `Other (please specify)`

**Document type**  
Options: `Nikah Nama / marriage contract` · `Marriage Registration Certificate (MRC)` · `Birth certificate / civil record` · `Degree / transcript` · `Divorce / court document` · `Police / character certificate` · `Property / land record` · `Employment / business document` · `Other document`

**Intended use / receiving authority**  
Options: `USCIS (I-130 or another filing)` · `NVC / CEAC` · `U.S. Embassy Islamabad` · `UKVI` · `Saudi Arabia` · `UAE / Gulf authority` · `University / education` · `Other / not sure`

**Certification needed**  
Options: `Certified translation` · `Translation only` · `Not sure — advise after reviewing`

**Document count**  
Placeholder: `How many documents?`

**Page count (optional)**  
Placeholder: `Approximate number of pages`

**Your deadline (optional)**  
Placeholder: `DD/MM/YYYY`  
Helper: `We will confirm availability before promising delivery by any deadline.`

**Request details (optional)**  
Placeholder: `Tell us what the receiving authority asked for and anything we should check.`  
Helper: `Do not include passwords, payment card numbers or unnecessary personal information.`

## Document upload module

**Label:** Attach document for a quote (optional)

**Drop-zone text:** Choose a document or drag it here

**Upload helper:** Upload a readable copy of the pages relevant to your quote. You may request a preliminary quote without attaching a document. The final price may depend on page count, legibility and complexity.

**Privacy helper:** Please avoid uploading passport or CNIC images unless they are part of the document being translated or specifically needed for your request.

**File type helper:** Accepted file formats and maximum file size are shown by the uploader.

**Uploaded-state label:** File attached

**Remove-file action:** Remove file

**Invalid file type:** This file type is not supported. Please choose one of the formats listed above.

**Oversized file:** This file exceeds the upload limit shown above. Please reduce the file size or contact us for another submission method.

**Upload interrupted:** The upload did not finish. Please try again or send a request without an attachment.

## Consent and processing

**Required checkbox label:** I confirm that I am authorised to share the document and agree that LISAN.PK may use the information I provide to respond to this translation request, as described in the privacy policy.

**Optional marketing checkbox label:** Send me occasional updates about LISAN.PK translation services. (Optional)

**Privacy link text:** Read how submitted information is handled

**Privacy link:** `/privacy-policy`

**Before-submit notice:** Requesting a quote does not place an order or create a payment obligation. We will confirm the scope and price before paid work begins.

## Actions and validation

**Primary submit button:** Request translation quote

**Button while submitting:** Sending your request…

**Optional fallback button:** Ask on WhatsApp

**WhatsApp destination:** `https://wa.me/923288155866` (existing business number; confirm routing)

**Required-field error:** Please complete this field.

**Email validation:** Enter a valid email address.

**Select validation:** Please select an option.

**Consent validation:** Please confirm that you are authorised to share the document and accept the privacy notice.

**No file selected:** No document attached. You can still request a preliminary quote.

**Network failure:** We couldn't send your request. Please try again or use WhatsApp. No quote request has been confirmed.

**Server error:** We couldn't confirm receipt of your request. Please try again or contact us directly.

**Duplicate request warning:** This request may already have been sent. Please check for a confirmation before submitting again.

**Verified success heading:** Your translation request has been received

**Verified success body:** Thank you. Your request has been submitted for review. We'll contact you using your selected response method after checking the document details. The final price and delivery options will be confirmed before any paid work begins.

**Reference label (only if a real ID exists):** Request reference

**Success follow-up button:** Return to translation services

**Success follow-up URL:** `/services/translation`

## USCIS/NVC contextual callout (show only on matching intent)

**Heading:** Translating documents for U.S. immigration?

**Body:** USCIS petitions and National Visa Center civil-document processing have different submission rules. Select the receiving authority so we can prepare the translation certification for the intended use. Translation does not guarantee immigration approval.

**CTA:** Read the Nikah Nama and NVC guide

**CTA URL:** `/blog/uscis-marriage-certificate-translation`

**Secondary CTA:** View USCIS translator certification requirements

**Secondary URL:** `/services/uscis-certified-translation/requirements`

## Ready-to-use replacements for unsupported shared trust claims

These strings are approved alternatives for existing unsupported short statements. Use **only where the original UI claim addresses the same subject**; do not insert them indiscriminately on unrelated pages.

| Existing unsupported claim / pattern | Approved replacement |
|---|---|
| `100% Embassy Accepted` | `Document-specific certified translation` |
| `Embassy Approved` | `Prepared for the stated receiving authority` |
| `200% Guarantee` | `Scope and certification confirmed before delivery` |
| `Guaranteed immigration approval` | `Immigration decisions are made by the relevant authority` |
| `USCIS Approved Translator` | `Signed translator accuracy certification` |
| `Never rejected by USCIS` | `Document review and correction of translation issues` |
| `Instant guaranteed translation` | `Delivery timing confirmed with your quote` |
| `Get a response in minutes` | `Request a quote — we will confirm availability` |
| `Free translation` (where only the quote is free) | `Request a quotation` |
| `Get a Free Quote` (where true and no charge) | `Request a translation quote` |

## Readable SEO-oriented contact-page introduction (only if the current page needs it)

**H2:** Online Certified Translation Services in Pakistan

**Paragraph:** Request a quotation for professional document translation from anywhere in Pakistan or abroad. Tell us the language pair, document type and intended use—such as a U.S. immigration petition, NVC upload, university submission or another official process. We can review your request and explain the difference between a certified translation and a separately required attestation, notarisation or apostille. A translation is not an official government-issued record, and acceptance is decided by the receiving institution.

**Internal links:**

- `Nikah Nama and MRC translation` → `/services/translation/nikah-nama-marriage-certificate`
- `USCIS translation requirements` → `/services/uscis-certified-translation/requirements`
- `Certified translation prices` → `/pricing`
- `Urdu to Arabic translation` → `/services/translation/urdu-to-arabic`
- `Arabic to English translation` → `/services/translation/arabic-to-english`

**Editorial caveat:** Do not display “secure encrypted upload,” “GDPR compliant,” guaranteed deletion timing, antivirus scanning or a named data-protection officer unless the underlying system and policies actually support those exact claims. UI copy does not establish security controls.
