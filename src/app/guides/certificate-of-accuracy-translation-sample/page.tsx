import { Metadata } from "next"
import Link from "next/link"
import { 
  FileText, 
  HelpCircle, 
  ExternalLink, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  Clock, 
  Info, 
  AlertTriangle,
  Building2,
  Check,
  ChevronRight,
  ShieldCheck,
  Languages,
  MessageSquare,
  Landmark,
  Scale,
  FileCheck2,
  Table,
  Download,
  Copy
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: {
    absolute: "Certificate of Translation Accuracy Pakistan: Sample & Requirements | LISAN.PK",
  },
  description: "See a certificate of translation accuracy sample for Pakistan. Learn USCIS and UK translation requirements, required declaration fields, signing rules and common mistakes.",
  alternates: {
    canonical: "https://www.lisan.pk/guides/certificate-of-accuracy-translation-sample",
  },
  openGraph: {
    title: {
    absolute: "Certificate of Translation Accuracy Pakistan: Sample & Requirements | LISAN.PK",
  },
    description: "See a certificate of translation accuracy sample for Pakistan. Learn USCIS and UK translation requirements, required declaration fields, signing rules and common mistakes.",
    url: "https://www.lisan.pk/guides/certificate-of-accuracy-translation-sample",
    type: "article",
    publishedTime: "2026-11-05T00:00:00Z",
    modifiedTime: "2026-11-05T00:00:00Z",
    images: ["https://www.lisan.pk/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: {
    absolute: "Certificate of Translation Accuracy Pakistan: Sample & Requirements | LISAN.PK",
  },
    description: "See a certificate of translation accuracy sample for Pakistan. Learn USCIS and UK translation requirements, required declaration fields, signing rules and common mistakes.",
    images: ["https://www.lisan.pk/logo.png"],
  }
}

const guideFaqs = [
  {
    q: "What is a certificate of translation accuracy?",
    a: "It is a responsible translator's declaration that a specific translation is complete and accurate, with any additional information required by the receiving authority."
  },
  {
    q: "Is a certificate of translation accuracy compulsory for USCIS?",
    a: "For foreign-language documents submitted to USCIS, 8 CFR 103.2(b)(3) requires a full English translation and the translator's certification of accuracy/completeness and competence."
  },
  {
    q: "Is a translator's signature required for UKVI?",
    a: "The GOV.UK visitor visa supporting documents guidance specifically lists the translator's full name and signature, along with an accuracy statement, date and contact details. Always check the visa route."
  },
  {
    q: "Is an accuracy certificate the same as a notarised translation?",
    a: "No. They are different acts, and one does not automatically substitute for the other."
  },
  {
    q: "Does Pakistan issue a universal government certificate making every translation embassy approved?",
    a: "Do not assume that. A translator's own statement of accuracy is not blanket government endorsement. Destination authorities set their own requirements."
  },
  {
    q: "Can a translation be certified without an ink stamp?",
    a: "Requirements depend on the receiving authority and format. A decorative stamp cannot replace required accuracy or competence statements."
  },
  {
    q: "Is a blank downloaded certificate legally valid?",
    a: "No. It becomes a genuine declaration only when an identifiable, competent person has translated and reviewed the specific document and truthfully completed the certificate."
  },
  {
    q: "Can I reuse the same certificate for different documents?",
    a: "A certificate should identify the actual document and translation it covers. Do not reuse a signed certificate to imply it covers unrelated documents."
  },
  {
    q: "Can the certificate cover several translated pages?",
    a: "It can refer to an identifiable attached translation set where the recipient permits, but ensure all covered pages are clearly identified and complete."
  },
  {
    q: "Should I translate the document's stamps and handwritten notes?",
    a: "A full translation should account for the source content. If handwriting is unreadable, the translator should flag it accurately rather than inventing missing words."
  },
  {
    q: "Do I need the original document translated if it is already in English?",
    a: "Not necessarily. Confirm the language and document-form requirements of the receiving authority; avoid unnecessary translation fees."
  },
  {
    q: "Does a translation certificate prove my Nikah Nama is authentic?",
    a: "No. It attests to the translation, not the legal authenticity or civil registration status of the source."
  },
  {
    q: "Can a certificate guarantee visa approval?",
    a: "No. Only the competent authority can decide an application."
  },
  {
    q: "Where can I obtain a genuine signed translation certificate in Pakistan?",
    a: "Ask a competent translator or translation service that can review the actual source document and issue a truthful certificate meeting your recipient's requirements. Contact LISAN.PK for a document-specific assessment."
  }
]

const uscisRequirements = [
  {
    elem: "Full English-language translation",
    rule: "Yes, for foreign-language documents filed with USCIS",
    action: "Translate all visible relevant text; do not omit stamps/remarks without clearly recording them."
  },
  {
    elem: "Statement that translation is complete and accurate",
    rule: "Yes",
    action: "Include this declaration in the translator's own certification."
  },
  {
    elem: "Statement of translator's competence in language pair",
    rule: "Yes",
    action: "State competence to translate from the source language into English."
  },
  {
    elem: "Translator identification",
    rule: "Needed to make a genuine, accountable certification",
    action: "Use actual name and identifiers, not a fictitious signature or fabricated company officer."
  },
  {
    elem: "Notarisation for every submitted translation",
    rule: "Not stated as a blanket requirement by this regulation",
    action: "Check special form/agency instructions before purchasing extra services."
  },
  {
    elem: "“USCIS-approved translator” licence",
    rule: "Not created by this regulation",
    action: "Do not market a translator as formally endorsed by USCIS without verifiable authorisation."
  }
]

const ukRequirements = [
  { field: "Accurate translation statement", visitor: "Yes", general: "Yes" },
  { field: "Translation date", visitor: "Yes", general: "Yes" },
  { field: "Full translator name", visitor: "Yes", general: "Yes" },
  { field: "Translator signature", visitor: "Yes, explicitly", general: "The general page lists name/contact details; check receiving authority for signature specifics" },
  { field: "Contact details", visitor: "Yes", general: "Yes" },
  { field: "Extra wording or credentials", visitor: "May vary by visa route", general: "Depends on recipient's instructions" }
]

const pakistaniDocuments = [
  {
    doc: "Urdu Nikah Nama",
    dir: "Urdu → English / Arabic",
    req: "Immigration or foreign civil registration",
    diff: "MRC and Nikah Nama are different source records."
  },
  {
    doc: "NADRA Birth Registration Certificate",
    dir: "Urdu → English, if original is not already accepted",
    req: "Family/immigration processes",
    diff: "Do not translate into a language not required by the recipient."
  },
  {
    doc: "Academic degree or transcript",
    dir: "Urdu → English/Arabic where applicable",
    req: "University or employment application",
    diff: "Translation does not replace HEC/IBCC verification."
  },
  {
    doc: "Fard-e-Malkiat / Intiqal",
    dir: "Urdu → English",
    req: "Property-evidence submission",
    diff: "Translation is not proof of legal title."
  },
  {
    doc: "Police or court record",
    dir: "Urdu → English/Arabic",
    req: "Immigration/legal evidence",
    diff: "Confidential details must be translated accurately."
  },
  {
    doc: "Saudi Arabic civil or employment document",
    dir: "Arabic → English/Urdu",
    req: "Overseas employment/family use",
    diff: "Preserve names, dates and legal phrases from the original."
  }
]

export default function CertificateOfAccuracyGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Certificate of Translation Accuracy in Pakistan: Requirements, Example and Downloadable Sample",
    "description": "See a certificate of translation accuracy sample for Pakistan. Learn USCIS and UK translation requirements, required declaration fields, signing rules and common mistakes.",
    "author": {
      "@type": "Organization",
      "name": "LISAN.PK Editorial Team"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LISAN.PK",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lisan.pk/logo.png"
      }
    },
    "datePublished": "2026-11-05T00:00:00Z",
    "dateModified": "2026-11-05T00:00:00Z",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://www.lisan.pk/guides/certificate-of-accuracy-translation-sample"
    }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.lisan.pk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Guides",
        "item": "https://www.lisan.pk/guides"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Certificate of Translation Accuracy",
        "item": "https://www.lisan.pk/guides/certificate-of-accuracy-translation-sample"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": guideFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 pt-10 pb-16 font-sans">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumb nav */}
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-8 font-sans">
            <Link href="/" className="hover:text-emerald-700">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-emerald-700">Guides</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Certificate of Translation Accuracy</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5 font-sans">
              <FileCheck2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Official Translation Standards &amp; Sample</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.15] mb-6">
              Certificate of Translation Accuracy in Pakistan: Requirements, Example and Downloadable Sample
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-sans mb-8">
              <strong>A Certificate of Translation Accuracy is a statement signed or otherwise genuinely issued by the translator confirming that a translation is complete and accurate and identifying the translator&apos;s competence and contact details as required by the receiving authority.</strong> In Pakistan, a certificate may accompany an Urdu-to-English, Arabic-to-English or other professional translation, but <strong>a certificate does not itself legalise the underlying document or guarantee acceptance by an embassy</strong>. [1–3]
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 h-12 shadow-sm rounded-xl font-sans"
                  id="gtm-quote-hero"
                  data-lead="quote"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Request certified document translation
                </Button>
              </Link>
              <Link 
                href="/pricing"
                className="inline-flex items-center justify-center font-bold px-6 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors text-sm font-sans"
              >
                Compare translation charges
              </Link>
              <Link 
                href="/services/translation/urdu-to-english-translation"
                className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 underline font-sans ml-2"
              >
                Urdu-to-English services &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Advisory Box */}
      <section className="py-8 bg-emerald-50/60 border-b border-emerald-200/60 font-sans">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-start gap-3">
            <Info className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-slate-700 leading-relaxed">
              <strong className="text-slate-900">Quick answer:</strong> For <strong>USCIS</strong>, the translator must certify that the <strong>full English translation is complete and accurate</strong> and that the translator is <strong>competent to translate from the original language into English</strong>. For many <strong>UK visa</strong> applications, official guidance calls for an accurate translation with the <strong>translation date, translator&apos;s name/signature and contact details</strong>. Requirements vary by authority, visa route and receiving institution; use the wording actually required for your application. [1–3]
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 font-sans">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* Section 1: What is a Certificate of Translation Accuracy */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              What is a Certificate of Translation Accuracy?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              <strong>It is a declaration about the translation work, not a new government-issued civil record.</strong> The purpose is to connect a specific source document with a corresponding translation and identify the person taking responsibility for its accuracy.
            </p>
            <p className="text-slate-700 leading-relaxed">
              The certificate may be placed on the last page of the translation or provided as an attached page. Its useful information typically includes:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "The document title, such as Nikah Nama, Marriage Registration Certificate, Birth Certificate, Degree, Transcript or Fard-e-Malkiat.",
                "The original language and target language.",
                "A statement that the translation is complete and accurate to the translator's knowledge and ability.",
                "The translator's name and an explicit statement of competence where relevant.",
                "The date the translation or declaration was completed.",
                "Genuine signature and contact details where required.",
                "A document reference or version identifier, if used by the translator's workflow."
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3.5 rounded-xl border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-xs md:text-sm text-slate-800 leading-normal">{item}</span>
                </div>
              ))}
            </div>
            <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed">
              <strong>Caution:</strong> Do not present a certification page with no actual translation as evidence that a document has been translated. A certification statement should be attached to the complete translation and checked against the source before use.
            </div>
          </div>

          {/* Section 2: Embassy Approved Myth */}
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif border-b border-slate-200 pb-4">
              Does a certificate make a translation “embassy approved”?
            </h2>
            <p className="text-slate-700 leading-relaxed">
              <strong>No.</strong> A translator can attest to the quality of their own translation. An embassy, immigration office, court, university or other receiving body decides what it will accept. A translation certificate cannot grant government authorisation that the business or translator does not actually hold.
            </p>
            <p className="text-slate-700 leading-relaxed">
              A receiving body may require, depending on the case:
            </p>
            <ul className="grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
              {[
                "A translator's signed accuracy declaration.",
                "An identifiable translation company or professional translator.",
                "A notarised translator statement or affidavit.",
                "Particular credentials or qualifications.",
                "A specified language pair or translation format.",
                "Additional authentication of the original, the translation or the signatory, under its own rules."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-white p-3 rounded-lg border border-slate-200">
                  <span className="text-emerald-600 font-bold">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-600 pt-2">
              <strong>Certified</strong>, <strong>notarised</strong>, <strong>attested</strong> and <strong>apostilled</strong> are not interchangeable words. Learn the differences in <Link href="/guides/certified-translation-vs-apostille-pakistan" className="text-emerald-700 font-semibold underline">Certified Translation vs Notarization vs Apostille</Link>.
            </p>
          </div>

          {/* Section 3: USCIS Table */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                What does USCIS require on a translation certificate?
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              <strong>USCIS regulation 8 CFR 103.2(b)(3) requires a full English translation for foreign-language documents submitted to USCIS and a translator&apos;s certification of both completeness/accuracy and competence.</strong> The regulation is about the translator&apos;s statement, not a universally mandatory embassy stamp. [1]
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                    <th className="py-3 px-4">Element</th>
                    <th className="py-3 px-4">USCIS regulatory requirement</th>
                    <th className="py-3 px-4">Practical document preparation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {uscisRequirements.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">{row.elem}</td>
                      <td className="py-3.5 px-4 font-medium text-slate-800 align-top">{row.rule}</td>
                      <td className="py-3.5 px-4 text-slate-600 align-top">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-600 bg-slate-100 p-3.5 rounded-xl border border-slate-200">
              <strong>Example:</strong> If you submit an Urdu Nikah Nama to USCIS, the accompanying English translation should cover the full submitted record. Its translator statement should certify completeness/accuracy and language competence. A generic company stamp without those declarations is a poor substitute for the actual USCIS wording. [1]
            </p>

            <div className="flex flex-wrap gap-4 text-xs font-semibold">
              <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 hover:underline">Nikah Nama translation service &rarr;</Link>
              <span className="text-slate-300">·</span>
              <Link href="/services/uscis-certified-translation/requirements" className="text-emerald-700 hover:underline">USCIS certified translation requirements &rarr;</Link>
            </div>
          </div>

          {/* Section 4: UK Requirements */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                What does the UK require for a certified translation?
              </h2>
            </div>
            <p className="text-slate-700 leading-relaxed">
              <strong>UK rules depend on the application type.</strong> GOV.UK&apos;s guidance for a visitor-visa supporting document written in a language other than English or Welsh calls for a full translation that can be independently verified, with an accuracy confirmation, the translation date, translator&apos;s full name and signature, and contact details. [2]
            </p>
            <p className="text-slate-700 leading-relaxed">
              The general GOV.UK page on certifying a document similarly asks the translator to confirm a true and accurate translation, include the date and provide their full name and contact details. [3]
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                    <th className="py-3 px-4">Field</th>
                    <th className="py-3 px-4">GOV.UK visitor visa guidance</th>
                    <th className="py-3 px-4">GOV.UK general certification guidance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {ukRequirements.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">{row.field}</td>
                      <td className="py-3.5 px-4 font-medium text-slate-800 align-top">{row.visitor}</td>
                      <td className="py-3.5 px-4 text-slate-600 align-top">{row.general}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-xs text-slate-600">
              <strong>For a UK visa, never assume that a U.S.-focused template satisfies every Home Office rule.</strong> Review the current instructions for the particular visa route. [2–3]
            </p>
          </div>

          {/* Section 5: Sample Declaration Box */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border-2 border-slate-300 shadow-md space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-slate-200 text-slate-700 text-xs font-bold uppercase tracking-wider mb-2">
                Sample Text Template
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                Certificate of Translation Accuracy: sample wording
              </h2>
            </div>

            <p className="text-xs text-slate-600">
              <strong>This sample is an unsigned educational template. It is not a certified translation until a real, competent translator checks an actual source document and issues the statement truthfully.</strong> Do not copy a fictional name, date, signature or company seal into a client&apos;s submission.
            </p>

            {/* Verbatim Sample Block */}
            <div className="p-6 md:p-8 rounded-xl bg-slate-50 border border-slate-200 font-mono text-xs md:text-sm text-slate-800 space-y-4 leading-relaxed">
              <div className="font-bold text-slate-900 border-b border-slate-300 pb-2">
                CERTIFICATE OF TRANSLATION ACCURACY — SAMPLE / NOT VALID UNTIL COMPLETED AND SIGNED
              </div>
              <p><strong>Document:</strong> [Exact title printed on the source document]</p>
              <p><strong>Source language:</strong> Urdu</p>
              <p><strong>Target language:</strong> English</p>
              <p><strong>Document reference (if applicable):</strong> [Reference]</p>
              <p className="py-2 italic bg-white p-3 rounded border border-slate-200 text-slate-900">
                I, [Translator&apos;s full legal name], certify that I am competent to translate from Urdu into English and that the attached English translation of the identified document is complete and accurate to the best of my knowledge and ability.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 pt-2 text-xs">
                <p><strong>Translator&apos;s name:</strong> [Full name]</p>
                <p><strong>Translator / translation business:</strong> [Legal or trading name]</p>
                <p><strong>Contact details:</strong> [Business email / phone / address]</p>
                <p><strong>Date of translation:</strong> [Actual date]</p>
                <p><strong>Signature:</strong> [Actual signature of the person making declaration]</p>
                <p><strong>Translation page count:</strong> [Number of translated pages]</p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Why this sample includes competence wording:</strong> USCIS explicitly requires the translator to certify competence and accuracy/completeness. Other authorities may prescribe different formats or additional fields. Do not remove mandatory fields simply to shorten the certificate. [1]
            </p>
          </div>

          {/* Section 6: Download Sample Resource (anchor #download-sample) */}
          <div id="download-sample" className="bg-emerald-900 text-white p-8 md:p-10 rounded-2xl shadow-md space-y-4">
            <div className="flex items-center gap-2 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Download className="w-4 h-4" />
              <span>Editable Resource</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">
              Download Certificate of Accuracy Sample
            </h2>
            <p className="text-emerald-100 text-sm leading-relaxed max-w-2xl">
              <strong>Blank template only:</strong> This separately supplied educational resource is an unsigned Markdown template. It is provided for study and drafting purposes. Readers can review the example above or download the blank text file below.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a 
                href="/downloads/certificate-of-accuracy-sample.md"
                download="certificate-of-accuracy-sample.md"
                className="inline-flex items-center justify-center font-bold px-6 h-12 rounded-xl bg-white text-emerald-950 hover:bg-emerald-50 transition-colors text-sm shadow font-sans"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Blank Template (.md)
              </a>
              <Link href="/contact">
                <Button size="lg" className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold px-8 h-12 rounded-xl border border-emerald-700/60 font-sans" data-lead="quote">
                  Request professional certified translation
                </Button>
              </Link>
            </div>
          </div>

          {/* Section 7: Signature and Stamp Rules */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 font-serif">
              Do I need the translator&apos;s signature and stamp?
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>A genuine signature is important where the recipient expressly requires one.</strong> UK visitor-visa guidance expressly calls for the translator&apos;s signature. USCIS&apos;s regulation requires the translator&apos;s certification; verify the actual filing instructions and certificate format used in your case. [1–2]
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              A company stamp can help identify the issuer but <strong>is not a substitute</strong> for missing declarations, a competent translator or a genuinely made certification. Also, a stamp labelled “embassy approved” cannot create an endorsement the embassy did not issue.
            </p>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <h3 className="font-bold text-slate-900 text-sm">Can a translation service sign the certificate?</h3>
                <p className="text-slate-600 leading-relaxed">
                  An authorised individual may sign on behalf of a translation business where the receiving authority accepts that arrangement and the declaration accurately identifies the responsible translator or authorised signer. <strong>Do not assume a corporate logo alone meets a translator-certification rule.</strong>
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2 text-xs">
                <h3 className="font-bold text-slate-900 text-sm">Can I sign my own translation certificate?</h3>
                <p className="text-slate-600 leading-relaxed">
                  This is <strong>recipient-specific</strong>. Some authorities assess competence and conflicts differently. For immigration matters, check the particular authority&apos;s instructions rather than relying on an internet claim that self-certification is always accepted or always forbidden. A statement must never claim qualifications the signer lacks.
                </p>
              </div>
            </div>
          </div>

          {/* Section 8: Pakistani Documents Table */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                Which Pakistani documents commonly need certified translation?
              </h2>
            </div>
            <p className="text-sm text-slate-700">
              A translation certificate can accompany many different records; <strong>the reason for translating them determines the rule</strong>.
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                    <th className="py-3 px-4">Original Pakistani document</th>
                    <th className="py-3 px-4">Common translation direction</th>
                    <th className="py-3 px-4">Where requested</th>
                    <th className="py-3 px-4">Important distinction</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {pakistaniDocuments.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4 font-semibold text-slate-900 align-top">{row.doc}</td>
                      <td className="py-3 px-4 align-top">{row.dir}</td>
                      <td className="py-3 px-4 align-top">{row.req}</td>
                      <td className="py-3 px-4 text-slate-600 align-top">{row.diff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex gap-4 text-xs font-semibold">
              <Link href="/pricing" className="text-emerald-700 underline">Translation services &amp; pricing in Pakistan &rarr;</Link>
              <Link href="/contact" className="text-emerald-700 underline">Online translation inquiry &rarr;</Link>
            </div>
          </div>

          {/* Section 9: Notarisation & Apostille Distinction */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 font-serif">
              Do I need notarisation or an apostille as well?
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>Not automatically.</strong> A signed accuracy certificate is about the translation; notarisation generally concerns the notarial act and/or signature; an apostille authenticates the origin of a public document under the applicable international regime. None replaces the others for every destination.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">A useful sequence for planning is:</p>
            <ol className="list-decimal pl-5 space-y-1.5 text-xs text-slate-700 leading-relaxed">
              <li>Identify the <strong>receiving authority</strong> and the exact document it requests.</li>
              <li>Check the required <strong>language</strong> and whether a certified translation is necessary.</li>
              <li>Ask if the <strong>original</strong>, the translation, or a separate declaration needs notarisation, attestation or apostille.</li>
              <li>Obtain the translation and authentic certification in the order the recipient requires.</li>
              <li>Preserve both the source record and the completed certified translation.</li>
            </ol>
            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <Link href="/guides/apostille-pakistan" className="text-emerald-700 hover:underline">Apostille in Pakistan guide &rarr;</Link>
              <span className="text-slate-300">·</span>
              <Link href="/guides/pakistan-apostille-country-list" className="text-emerald-700 hover:underline">Apostille country list &rarr;</Link>
            </div>
          </div>

          {/* Section 10: How LISAN.PK Prepares Translation */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 font-serif">
              How LISAN.PK prepares a certifiable translation
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              <strong>The declaration should reflect an actual quality-controlled translation, not a pre-signed blank template.</strong> A responsible document workflow includes:
            </p>
            <div className="grid md:grid-cols-3 gap-4 text-xs">
              {[
                { s: "1. Document assessment", t: "Review legibility, page count, intended use and language direction." },
                { s: "2. Requirements check", t: "Identify special recipient instructions before translation." },
                { s: "3. Faithful translation", t: "Translate names, dates, numbers, labels, entries and visible marks without changing original meaning." },
                { s: "4. Quality review", t: "Compare entire translation against source and resolve uncertain characters where possible." },
                { s: "5. Truthful certification", t: "A real responsible signer makes only declarations supported by the completed work." },
                { s: "6. Delivery", t: "Provide requested file and any supporting paperwork agreed in service quote." }
              ].map((step, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 space-y-1">
                  <span className="font-bold text-emerald-800">{step.s}</span>
                  <p className="text-slate-600 leading-relaxed">{step.t}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 italic pt-2">
              <strong>Limits:</strong> LISAN.PK does not independently issue government records, grant an embassy accreditation, provide immigration legal representation or control an embassy&apos;s acceptance decision.
            </p>
          </div>

          {/* Section 11: FAQs */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                Frequently asked questions about translation accuracy certificates
              </h2>
            </div>

            <div className="space-y-4">
              {guideFaqs.map((faq, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm space-y-2">
                  <h3 className="text-base font-bold text-slate-900 font-sans flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                    <span>{faq.q}</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 12: Request Translation CTA & Sources */}
          <div className="bg-slate-100/80 p-8 rounded-2xl border border-slate-200 space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-2 font-sans">Request a genuine certified translation</h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                If your university, embassy, employer or immigration authority requires certified translation, share the <strong>document type, source language, target language, destination and precise recipient instructions</strong> through our approved contact channel.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-bold">
                <Link href="/contact" className="text-emerald-700 underline">Send an inquiry via contact form &rarr;</Link>
                <a href="https://wa.me/923288155866" className="text-emerald-700 underline">WhatsApp enquiry &rarr;</a>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 leading-relaxed space-y-2">
              <p>
                <strong>Primary official sources:</strong> <a href="https://www.ecfr.gov/current/title-8/section-103.2" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">8 CFR 103.2(b)(3), Translations</a>; <a href="https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">GOV.UK Visiting the UK — guide to supporting documents</a>; <a href="https://www.gov.uk/certifying-a-document" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">GOV.UK Certifying a document</a>. Research verified 5 November 2026.
              </p>
              <p>
                <strong>Legal/recipient disclaimer:</strong> The template is educational and non-binding. Requirements vary by destination, authority, application type and current guidance. Only a truthful certification issued by the actual translator for a completed translation should be submitted. LISAN.PK does not guarantee that a receiving body will accept a particular declaration or document.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
