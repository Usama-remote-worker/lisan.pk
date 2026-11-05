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
  GraduationCap,
  Globe2
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Certified Urdu to English Translation in Pakistan | USCIS, UKVI & Documents | LISAN.PK",
  description: "Certified Urdu-to-English document translation in Pakistan for USCIS, UK visas, legal documents, Nikah Nama, Fard and degrees. Review requirements and request a quote.",
  alternates: {
    canonical: "https://www.lisan.pk/services/translation/urdu-to-english-translation",
  },
  openGraph: {
    title: "Certified Urdu to English Translation in Pakistan | USCIS, UKVI & Documents | LISAN.PK",
    description: "Certified Urdu-to-English document translation in Pakistan for USCIS, UK visas, legal documents, Nikah Nama, Fard and degrees. Review requirements and request a quote.",
    url: "https://www.lisan.pk/services/translation/urdu-to-english-translation",
    type: "website",
  }
}

const serviceFaqs = [
  {
    q: "Can I get certified Urdu-to-English translation online in Pakistan?",
    a: "You can request a quote and coordinate document delivery remotely. Availability of digital certification and physical copies depends on the receiving authority and the agreed service."
  },
  {
    q: "Do USCIS and UKVI accept the same translation certificate?",
    a: "Their rules are not identical. We prepare the relevant information for the named destination; no certificate is guaranteed to satisfy all agencies automatically."
  },
  {
    q: "Does USCIS require a notarized Urdu translation?",
    a: "Its general rule is a complete English translation with translator certification, not automatic notarization of every translated record. Check the form instructions and specific requests."
  },
  {
    q: "What details must a UK visitor-visa translation certificate contain?",
    a: "GOV.UK lists confirmation of accuracy, translation date, translator's full name/signature, and contact details for the visitor supporting-document context."
  },
  {
    q: "Can family members translate documents for Canadian immigration?",
    a: "IRCC may restrict who can translate and may require affidavits or certified-translator credentials depending on the process. Check the current IRCC program instructions; do not assume informal family translation is acceptable."
  },
  {
    q: "Can you translate handwritten Urdu Nikah Nama pages?",
    a: "Full and clear scans can be assessed. Legible handwritten information is translated; unreadable portions are flagged rather than guessed."
  },
  {
    q: "Can you translate a 14-column Fard-e-Malkiat?",
    a: "Yes, a readable matching-table format can be prepared for a document with that layout. We do not assume all land records contain exactly 14 columns."
  },
  {
    q: "Does a certified translation verify a property's legal title?",
    a: "No. Translation conveys the content of a record; official verification and title/legal determinations are separate."
  },
  {
    q: "Is Urdu-to-English degree translation PKR 1,200?",
    a: "That is LISAN.PK's published standard-document rate for qualifying documents. The complete document, additional certification and any specialist formatting must be assessed first."
  },
  {
    q: "Will you correct name spelling to match my passport?",
    a: "We can use supporting identity documents as a comparison point and note differences, but we cannot silently change the original document. Corrections to a government record must be sought from its issuing authority."
  },
  {
    q: "How fast is delivery?",
    a: "The agreed estimate depends on document length, legibility, workload and certification. No universal completion time is promised."
  },
  {
    q: "Do I need to send original documents?",
    a: "Usually a clear scan is sufficient for an initial quote. Whether an authority needs physical originals or certified source copies is a separate question; follow its instructions."
  },
  {
    q: "Can you translate land, legal and marriage documents in the same order?",
    a: "Yes, you can request one quotation covering multiple categories. Each source is reviewed individually for specialist terms and certification needs."
  },
  {
    q: "Where can I get Urdu-to-English translation in Lahore?",
    a: "Submit an enquiry through LISAN.PK contact. Digital intake is available by arrangement; a city service listing does not itself confirm a public walk-in office in that locality."
  }
]

const documentTypes = [
  {
    type: "Nikah Nama / marriage contract",
    source: "Printed and handwritten marriage form",
    focus: "Spouses, witnesses, mehr, conditions and registrar details"
  },
  {
    type: "Fard-e-Malkiat / land record",
    source: "Ownership record extract and tables",
    focus: "Owners, shares, khasra/khewat numbers and area"
  },
  {
    type: "Intiqal / mutation",
    source: "Revenue change/transfer entries",
    focus: "Mutation type, entry dates, parties and identifiers"
  },
  {
    type: "Jamabandi / record of rights",
    source: "Dense land-record registers",
    focus: "Table structure, owners, holdings and notes"
  },
  {
    type: "Registry / sale deed",
    source: "Registered transaction instrument",
    focus: "Parties, property schedules, clauses and official marks"
  },
  {
    type: "Birth, death and family records",
    source: "Local civil records or Urdu-language certificates",
    focus: "Personal details and issuing-authority text"
  },
  {
    type: "Court papers and affidavits",
    source: "Orders, declarations and case papers",
    focus: "Legal terminology, dates, orders and attestations"
  },
  {
    type: "Educational records",
    source: "Urdu certificates and supporting papers",
    focus: "Exact institution names, dates and credentials"
  },
  {
    type: "Police and character documents",
    source: "Urdu certificates and official notes",
    focus: "Issuing information, findings and document references"
  },
  {
    type: "Employment and business papers",
    source: "Letters, agreements and registrations",
    focus: "Obligations, figures and technical descriptions"
  }
]

export default function UrduToEnglishTranslationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Certified Urdu to English Translation Services in Pakistan",
    "serviceType": "Certified Urdu to English Translation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LISAN.PK",
      "url": "https://www.lisan.pk",
      "telephone": "+923288155866",
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "PK"
      }
    },
    "description": "Certified Urdu-to-English document translation in Pakistan for USCIS, UK visas, legal documents, Nikah Nama, Fard and degrees. Review requirements and request a quote.",
    "areaServed": "PK"
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
        "name": "Services",
        "item": "https://www.lisan.pk/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Translation",
        "item": "https://www.lisan.pk/services/translation"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Urdu to English Translation",
        "item": "https://www.lisan.pk/services/translation/urdu-to-english-translation"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceFaqs.map(faq => ({
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 pt-10 pb-16 font-sans">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-8 font-sans">
            <Link href="/" className="hover:text-emerald-700">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-700">Services</Link>
            <span>/</span>
            <Link href="/services/translation" className="hover:text-emerald-700">Translation</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Urdu to English Translation</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5 font-sans">
              <Languages className="w-3.5 h-3.5 text-emerald-700" />
              <span>Urdu &rarr; English Certified Document Services</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.15] mb-6">
              Certified Urdu to English Translation Services in Pakistan
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-sans mb-8">
              <strong>LISAN.PK offers Urdu-to-English translation for Pakistani civil, academic, legal and property documents, with translator certification prepared when requested for a defined purpose.</strong> We translate the complete original, including legible stamps and handwriting, and review names, dates and official references before delivery. <strong>USCIS, UKVI and Canadian immigration have different translation rules; one generic certificate should not be advertised as automatically sufficient for every authority.</strong>
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
                  Get a document-specific quote
                </Button>
              </Link>
              <a 
                href="https://wa.me/923288155866?text=Hi%20LISAN.PK,%20I%20need%20certified%20Urdu%20to%20English%20translation%20for%20my%20documents."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-6 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors text-sm font-sans"
                id="gtm-wa-hero"
              >
                <MessageSquare className="w-4 h-4 mr-2 text-emerald-600" />
                WhatsApp LISAN.PK
              </a>
              <Link 
                href="/pricing"
                className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 underline font-sans ml-2"
              >
                View translation prices &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 font-sans">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* Section 1: What Documents Can Be Translated */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                What documents can be translated from Urdu to English?
              </h2>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm">
              <table className="w-full text-left border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100 text-slate-800 font-semibold border-b border-slate-200">
                    <th className="py-3 px-4">Document type</th>
                    <th className="py-3 px-4">Typical Urdu source</th>
                    <th className="py-3 px-4">English translation focus</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {documentTypes.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3.5 px-4 font-semibold text-slate-900 align-top">{row.type}</td>
                      <td className="py-3.5 px-4 align-top">{row.source}</td>
                      <td className="py-3.5 px-4 text-slate-600 align-top">{row.focus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs text-slate-700 leading-relaxed">
              <strong>Language direction matters:</strong> This is an <strong>Urdu &rarr; English</strong> service. If the original is in Arabic, use <Link href="/services/translation/arabic-to-english" className="text-emerald-700 font-semibold underline">Arabic-to-English translation</Link>. If the requested output is Arabic, see <Link href="/services/translation/urdu-to-arabic" className="text-emerald-700 font-semibold underline">Urdu-to-Arabic translation</Link>.
            </div>
          </div>

          {/* Section 2: USCIS Certified Translation */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 text-blue-800 text-xs font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>United States Immigration</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Certified Urdu translation for USCIS (United States)
            </h2>
            <p className="text-slate-700 leading-relaxed text-sm md:text-base">
              <strong>For documents submitted to USCIS, U.S. regulations require a full English translation accompanied by a translator&apos;s certification of completeness, accuracy and competence.</strong> See <a href="https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-103/section-103.2" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium inline-flex items-center gap-0.5">8 CFR § 103.2(b)(3) <ExternalLink className="w-3 h-3 inline" /></a>. The current <a href="https://www.uscis.gov/sites/default/files/document/forms/i-130instr.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium inline-flex items-center gap-0.5">Form I-130 instructions <ExternalLink className="w-3 h-3 inline" /></a> also specify translator identifying and contact information for documents filed with that form.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm">
              A complete service request should identify the exact form or case stage. A translation suitable for a USCIS petition is not automatically the same as an NVC interview-document submission.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">What should the USCIS translation include?</h3>
              <ul className="space-y-2 text-sm text-slate-700">
                {[
                  "Every legible material statement from the original, including relevant stamps and annotations.",
                  "Faithful names, dates, numbers and references.",
                  "A clear source-to-English correspondence, especially for forms and tables.",
                  "A signed certification that the translation is complete and accurate and that the translator is competent to translate Urdu into English.",
                  "Other identifying information required by the form-specific instructions."
                ].map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-slate-500 italic">
              <strong>No claim of universal USCIS approval:</strong> USCIS decides whether submitted evidence meets the application&apos;s legal requirements. A translator&apos;s certificate addresses the translation, not the truth of the underlying document or the merits of a petition.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
              <Link href="/services/uscis-certified-translation/requirements" className="text-emerald-700 hover:underline">
                USCIS certified translation requirements &rarr;
              </Link>
              <span className="text-slate-300">·</span>
              <Link href="/blog/uscis-marriage-certificate-translation" className="text-emerald-700 hover:underline">
                Nikah Nama translation for USCIS and NVC &rarr;
              </Link>
            </div>
          </div>

          {/* Section 3 & 4: UKVI & Canadian Immigration */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* UKVI */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-50 text-purple-800 text-xs font-semibold">
                <Building2 className="w-3.5 h-3.5" />
                <span>UK Visas and Immigration</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                Certified Urdu-to-English translation for UKVI
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                For a <strong>UK visitor visa</strong>, <a href="https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium inline-flex items-center gap-0.5">GOV.UK&apos;s official supporting-documents guide <ExternalLink className="w-3 h-3 inline" /></a> says a document not in English or Welsh must have a full translation that the Home Office can independently verify. The guide lists confirmation of accuracy, translation date, translator&apos;s full name/signature and contact details.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                For UK student, family and other visa routes, check the current route-specific instructions. Not every supporting document must be supplied in every case; sending a perfectly translated but irrelevant record does not improve eligibility automatically.
              </p>
              <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                <strong>Example:</strong> An Urdu Fard offered as supporting evidence in a visitor application should be translated if submitted, but a Fard is <strong>not a mandatory document in every visitor application</strong>. See our <Link href="/blog/urdu-to-english-fard-translation-in-lahore" className="text-emerald-700 underline font-medium">Fard translation guide</Link>.
              </p>
            </div>

            {/* Canada & Other */}
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 text-xs font-semibold">
                <Globe2 className="w-3.5 h-3.5" />
                <span>IRCC Canada &amp; Other Destinations</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                Urdu translations for Canadian immigration and other destinations
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Canadian immigration generally requires documents not in English or French to be accompanied by an appropriate translation. <strong>IRCC distinguishes translations by certified translators from translations that need an affidavit</strong>, and supporting-document instructions differ by application type. Applicants should read the applicable <a href="https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=018&top=29" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium inline-flex items-center gap-0.5">IRCC help centre <ExternalLink className="w-3 h-3 inline" /></a> and the exact program guide before ordering.
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">
                For Australia, New Zealand, universities, private employers and individual courts, requirements can differ substantially. We confirm the requested destination and documentation before quoting a certificate or notarisation service.
              </p>
              <div className="p-3 bg-amber-50 rounded-lg border border-amber-200 text-xs text-amber-900 leading-relaxed">
                <strong>The important difference:</strong> A document may be translated accurately yet still need additional authentication, an affidavit, notarisation, official issuance or a different certified-translator credential for its destination. These are separate questions.
              </div>
            </div>
          </div>

          {/* Section 5: Nikah Nama & Property Translation Focus */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                Urdu Nikah Nama to English translation
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                An Urdu Nikah Nama may include handwritten entries, witnesses, dower/mehr clauses and registration details. Translation should preserve the source&apos;s legal and personal information. A translated Nikah Nama <strong>does not replace an official Marriage Registration Certificate</strong> when a receiving authority requests that civil record.
              </p>
              <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                <strong>Recommended preparation:</strong> Supply <strong>all pages</strong>, check the spelled names against existing identity documents for consistency, and inform the translator of any discrepancies without asking the translator to change the original.
              </p>
              <div className="pt-2 text-xs font-semibold flex flex-wrap gap-3">
                <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 hover:underline">Nikah Nama &amp; MRC service &rarr;</Link>
                <Link href="/blog/uscis-marriage-certificate-translation" className="text-emerald-700 hover:underline">USCIS/NVC marriage guide &rarr;</Link>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                Urdu Fard, Intiqal and property deed translation
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed">
                Property documents contain specialised revenue terms that require more than word-for-word replacement. We may prepare <strong>landscape table translations</strong> for a dense or 14-column Fard, while preserving recorded shares, plot identifiers and the exact original units.
              </p>
              <p className="text-xs text-slate-600 bg-slate-50 p-3 rounded-lg border border-slate-100">
                <strong>A translation cannot verify title.</strong> For government land-record issuance or verification, consult the competent provincial authority—for example, the <a href="https://www.punjab-zameen.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Punjab Land Records Authority</a>.
              </p>
              <div className="pt-2 text-xs font-semibold flex flex-wrap gap-3">
                <Link href="/services/translation/property-document-translation" className="text-emerald-700 hover:underline">Property-document service &rarr;</Link>
                <Link href="/blog/urdu-to-english-fard-translation-in-lahore" className="text-emerald-700 hover:underline">Complete Fard guide &rarr;</Link>
              </div>
            </div>
          </div>

          {/* Section 6: Quality Control QA */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              How we check names, dates and handwritten entries
            </h2>
            <p className="text-sm text-slate-700">We use a consistent quality-control approach:</p>
            <div className="space-y-2.5">
              {[
                "Read the complete original and confirm the language pair.",
                "Preserve original spellings and numbers; do not silently replace inaccurate source data.",
                "Record established English spellings supplied by the client (for comparison only), especially for names.",
                "Translate legible stamps, footnotes and handwritten annotations where relevant.",
                "Mark unreadable portions instead of guessing or inventing missing words.",
                "Review tables, dates and fractions a second time.",
                "Prepare the requested translator statement reflecting the real translator's identity and competence."
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100 text-sm text-slate-800">
                  <span className="font-bold text-emerald-700 flex-shrink-0">{idx + 1}.</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-slate-500 italic">
              For official records, accurately reporting a mismatch is more defensible than masking it. Only the document-issuing authority can correct the underlying record.
            </p>
          </div>

          {/* Section 7: Certified vs Notarized vs Attestation */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 font-serif">
              What is a certified translation versus a notarized translation?
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Certified translation</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  An English translation with a translator declaration concerning its accuracy, completeness and competence, as required by a particular receiving authority.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Notarization</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  A separate notarial action. It is not synonymous with translation certification and is not universally required by USCIS.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <h3 className="font-bold text-slate-900 text-base">Attestation or apostille</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Authentication processes affecting designated public documents under applicable procedures. They do not turn incorrect translations into correct ones.
                </p>
              </div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              If an authority asks for a specific type of translator, notarial act or authentication, share the written requirement so we can determine whether it is within the agreed service scope.
            </p>
          </div>

          {/* Section 8: Pricing Policy & Starting Rate Caveat */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-2xl font-bold text-slate-900 font-serif">
              Urdu-to-English translation prices and turnaround
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              LISAN.PK publishes a <strong>PKR 1,200 starting rate for qualifying standard documents</strong>, but this must not be presented as a guaranteed charge for every Urdu-to-English record. Large handwritten Nikah Namas, court papers, Fard/Jamabandi tables, registry deeds and urgent work require a <strong>document-specific quotation</strong>.
            </p>
            <p className="text-sm text-slate-700 leading-relaxed">
              Quotation factors: page count, handwriting, density, number of fields, legal complexity, certification type, and requested delivery. A turnaround estimate is confirmed after document review. No blanket same-day promise is made.
            </p>
            <div className="pt-2 flex items-center gap-4 text-xs font-semibold">
              <Link href="/pricing" className="text-emerald-700 underline">See current translation charges &rarr;</Link>
              <span className="text-slate-300">·</span>
              <Link href="/contact" className="text-emerald-700 underline">Ask for a quote &rarr;</Link>
            </div>
          </div>

          {/* Section 9: Step by Step Workflow */}
          <div className="bg-emerald-900 text-white p-8 md:p-10 rounded-2xl shadow-md space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">
              Get an Urdu-to-English translation: step by step
            </h2>

            <div className="space-y-3">
              {[
                "Select Urdu → English and identify the document.",
                "Upload or send full scans using an agreed secure channel.",
                "Specify use and country: USCIS, UKVI, IRCC, employer, university or legal matter.",
                "Provide the receiver's written instructions if available.",
                "Receive a quote stating price, scope, certification and estimated delivery.",
                "Check a draft when offered for names and record identifiers only; changes to the original content must not be invented.",
                "Receive the final English translation and agreed certificate/delivery format."
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-emerald-50">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-emerald-800 text-emerald-200 font-bold text-xs flex-shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-emerald-800">
              <Link href="/contact">
                <Button size="lg" className="bg-white text-emerald-950 hover:bg-emerald-50 font-bold px-8 h-12 rounded-xl shadow font-sans" data-lead="quote">
                  Request translation
                </Button>
              </Link>
              <a 
                href="https://wa.me/923288155866?text=Hi%20LISAN.PK,%20I%20have%20an%20Urdu%20to%20English%20translation%20enquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center font-bold px-6 h-12 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white transition-colors text-sm font-sans"
              >
                WhatsApp document enquiry
              </a>
            </div>
          </div>

          {/* Section 10: FAQs */}
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {serviceFaqs.map((faq, idx) => (
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

          {/* Section 11: Related Services & Sources */}
          <div className="bg-slate-100/80 p-8 rounded-2xl border border-slate-200 space-y-6">
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-3 font-sans">Related services and official sources</h3>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
                <Link href="/services/translation/property-document-translation" className="text-emerald-700 font-medium hover:underline">Fard &amp; property documents</Link>
                <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 font-medium hover:underline">Nikah Nama translation</Link>
                <Link href="/services/uscis-certified-translation/requirements" className="text-emerald-700 font-medium hover:underline">USCIS requirements</Link>
                <Link href="/services/translation/arabic-to-english" className="text-emerald-700 font-medium hover:underline">Arabic-to-English</Link>
                <Link href="/pricing" className="text-emerald-700 font-medium hover:underline">Prices</Link>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 leading-relaxed space-y-2">
              <p>
                <strong>Official information:</strong> <a href="https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-103/section-103.2" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">8 CFR §103.2(b)(3)</a> · <a href="https://www.uscis.gov/sites/default/files/document/forms/i-130instr.pdf" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">USCIS I-130 Instructions</a> · <a href="https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">GOV.UK Visitor Translation Requirements</a> · <a href="https://ircc.canada.ca/english/helpcentre/answer.asp?qnum=018&top=29" target="_blank" rel="noopener noreferrer" className="underline hover:text-slate-700">IRCC Language and Translation Guidance</a>.
              </p>
              <p>
                <em>Last researched: 5 November 2026. Verify destination-specific regulations and site prices before publishing. LISAN.PK provides translations, not government document issuance, immigration representation or guaranteed case outcomes.</em>
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold">
                <Link href="/contact" className="text-emerald-700 underline">Request certified Urdu-to-English translation &rarr;</Link>
                <a href="https://wa.me/923288155866" className="text-emerald-700 underline">Send an enquiry &rarr;</a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
