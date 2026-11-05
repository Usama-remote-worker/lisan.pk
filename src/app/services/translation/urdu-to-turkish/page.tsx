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
  GraduationCap,
  Globe2,
  BookOpen
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { EditorialReviewBox } from "@/components/ui/EditorialReviewBox"

export const metadata: Metadata = {
  title: "Urdu to Turkish Translation in Pakistan | Nikah Nama, Degree & Civil Documents | LISAN.PK",
  description: "Urdu to Turkish document translation for Pakistani marriage, birth, academic and legal records. Check Turkish sworn/notary requirements before ordering. Request a quote.",
  alternates: {
    canonical: "https://www.lisan.pk/services/translation/urdu-to-turkish",
  },
  openGraph: {
    title: "Urdu to Turkish Translation in Pakistan | Nikah Nama, Degree & Civil Documents | LISAN.PK",
    description: "Urdu to Turkish document translation for Pakistani marriage, birth, academic and legal records. Check Turkish sworn/notary requirements before ordering. Request a quote.",
    url: "https://www.lisan.pk/services/translation/urdu-to-turkish",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Urdu to Turkish Translation in Pakistan | Nikah Nama, Degree & Civil Documents | LISAN.PK",
    description: "Urdu to Turkish document translation for Pakistani marriage, birth, academic and legal records. Check Turkish sworn/notary requirements before ordering. Request a quote.",
  }
}

const serviceFaqs = [
  {
    q: "Can I translate an Urdu Nikah Nama into Turkish in Pakistan?",
    a: "Yes, an Urdu-to-Turkish translation can be prepared, but the receiving Turkish authority decides whether it must additionally be sworn, notarised or otherwise authenticated. Confirm requirements before ordering."
  },
  {
    q: "Is Urdu-to-Turkish translation accepted for Turkish university admission?",
    a: "Acceptance depends on the university and procedure. Kayseri University asks for sworn-and-notarised Turkish translations for certain registration records, while Boğaziçi publishes different rules. [1][2]"
  },
  {
    q: "Does a Pakistani translated document automatically count as yeminli tercüme?",
    a: "No. Turkish sworn-translator status and notarial treatment must be established through the applicable recognised process; an overseas agency's stamp alone is not proof of this status."
  },
  {
    q: "Do I need a notary for Urdu-to-Turkish translation?",
    a: "Not universally. Some Turkish authorities require it for specified documents, others accept agency or other certified translations. Follow the receiving authority's current rules. [1][2][4]"
  },
  {
    q: "Can you translate an Urdu birth certificate or B-Form into Turkish?",
    a: "These documents can be reviewed for translation. First confirm whether the receiving office asks for a birth certificate, CRC/B-Form, FRC or a different family-status record."
  },
  {
    q: "Do I need both Nikah Nama and MRC translated?",
    a: "Only if the receiving institution requires both. They are distinct documents; one does not automatically substitute for the other."
  },
  {
    q: "Does a Turkish university require an apostille on a Pakistani degree?",
    a: "Some institutions require authenticated records; check the university's current list. Do not assume an Apostille is universally required at initial online application."
  },
  {
    q: "Is Turkish translation the same as degree equivalence (denklik)?",
    a: "No. Translation communicates the source record in Turkish. Formal equivalence is decided separately by the relevant authority."
  },
  {
    q: "Can an Urdu handwritten document be translated?",
    a: "Often yes, if it is sufficiently legible. Unclear wording may need a better scan or source clarification; translators should not invent illegible details."
  },
  {
    q: "Do you offer urgent translation?",
    a: "Request a quote with your deadline. Availability and delivery commitments must be confirmed for your actual document and any formalities required."
  },
  {
    q: "How much does an Urdu-to-Turkish Nikah Nama translation cost?",
    a: "It is quotation-based because handwriting, pages, contract detail and the requested certification route vary. The exact price should be confirmed before ordering."
  },
  {
    q: "Is English-to-Turkish the same service as Urdu-to-Turkish?",
    a: "No. These are different source languages and should be quoted as separate translation directions. For English-language originals, see our Turkish translation services (/services/translation/turkish-translation)."
  },
  {
    q: "Will Turkish authorities accept my translation with a LISAN.PK seal?",
    a: "A seal alone cannot guarantee acceptance. Ask the receiving authority what translator qualifications and certification it recognises."
  },
  {
    q: "Do I need to courier original documents to get a quote?",
    a: "Not ordinarily for an initial quotation. Share a clear digital copy and confirm whether originals are needed for any later, separately authorised procedure."
  },
  {
    q: "What information should I send for a quote?",
    a: "Share the source document, the destination authority, required translation/certification type, output format and deadline—only through an approved private contact channel."
  },
  {
    q: "Does LISAN.PK issue Turkish notarial certificates?",
    a: "Not by virtue of being a translation website. Notarial acts belong to the competent notary; any facilitation must be explicitly confirmed as available and legally compliant for the individual request."
  }
]

const urduDocuments = [
  {
    doc: "Urdu Nikah Nama",
    reason: "Marriage or family-related paperwork",
    details: "Spouses' names, marriage date, witnesses, dower/mehr terms, registrar data"
  },
  {
    doc: "Pakistani Marriage Registration Certificate (MRC)",
    reason: "Civil-status or family documentation",
    details: "Registration number, issuing authority, dates and spellings"
  },
  {
    doc: "Birth certificate / CRC / B-Form",
    reason: "Child records or family files",
    details: "Parentage, registration information, dates"
  },
  {
    doc: "NADRA Family Registration Certificate (FRC)",
    reason: "Family composition evidence",
    details: "Relationship categories, family members' names, dates"
  },
  {
    doc: "Matric / FSc certificates and marksheets",
    reason: "Education and admission records",
    details: "Grades, subject names, academic board, roll and certificate numbers"
  },
  {
    doc: "Bachelor's / master's degree and transcripts",
    reason: "Turkish university applications",
    details: "Award title, degree level, credit/grade scale, issue date"
  },
  {
    doc: "Police character certificate",
    reason: "When requested by a Turkish authority",
    details: "Issuing police office, period covered, official wording"
  },
  {
    doc: "Power of attorney / affidavit",
    reason: "Case-specific legal or property matters",
    details: "Names, capacity, scope of authority; legal wording"
  },
  {
    doc: "Property / inheritance documents",
    reason: "Property, succession or representation",
    details: "Survey/plot terms, owners, shares, registry references"
  },
  {
    doc: "Employment documents",
    reason: "HR or administrative processes",
    details: "Employer, position, effective dates, salary terminology"
  }
]

const legalRequirements = [
  {
    req: "Turkish-language translation",
    meaning: "Accurate text in Turkish",
    decider: "Receiving office/university"
  },
  {
    req: "Translator's accuracy statement",
    meaning: "Identification and declaration by translator where appropriate",
    decider: "Receiving office's acceptance rules"
  },
  {
    req: "Yeminli tercüman",
    meaning: "A sworn translator recognised under the applicable Turkish process",
    decider: "Turkish authority/institution; actual translator status must be verified"
  },
  {
    req: "Noter onayı",
    meaning: "Turkish notarial certification of a document or translation in the applicable route",
    decider: "Receiving authority and notary"
  },
  {
    req: "Apostille",
    meaning: "Authentication of the origin of an eligible public document",
    decider: "Treaty applicability and destination requirement"
  },
  {
    req: "Denklik",
    meaning: "Formal academic equivalence decision",
    decider: "Competent education authority (YÖK/MEB); not a translator's function"
  }
]

const pricingTable = [
  {
    type: "Short printed certificate",
    approach: "Individual quote",
    send: "Clear image and receiving-office requirement"
  },
  {
    type: "Urdu Nikah Nama / handwritten contract",
    approach: "Document-specific quote",
    send: "All pages, handwriting and signatures visible"
  },
  {
    type: "University transcript",
    approach: "Page/complexity-based quote",
    send: "Entire transcript and grading legend"
  },
  {
    type: "Legal affidavit / power of attorney",
    approach: "Specialist quote",
    send: "Full document and use case"
  },
  {
    type: "Sworn/notary-related service",
    approach: "Availability and cost must be confirmed separately",
    send: "Receiving authority's written requirement"
  }
]

export default function UrduToTurkishPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Urdu to Turkish Translation in Pakistan",
    "serviceType": "Document Translation Services",
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
    "description": "Urdu to Turkish document translation for Pakistani marriage, birth, academic and legal records for use in Türkiye.",
    "areaServed": ["PK", "TR"]
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
        "name": "Urdu to Turkish Translation",
        "item": "https://www.lisan.pk/services/translation/urdu-to-turkish"
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
    <div className="bg-slate-50 min-h-screen font-sans">
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
      <section className="bg-white border-b border-slate-200 pt-10 pb-16">
        <div className="container mx-auto px-4 max-w-5xl">
          {/* Breadcrumb nav */}
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-8 font-sans">
            <Link href="/" className="hover:text-emerald-700">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-emerald-700">Services</Link>
            <span>/</span>
            <Link href="/services/translation" className="hover:text-emerald-700">Translation</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Urdu to Turkish</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5 font-sans">
              <Languages className="w-3.5 h-3.5 text-emerald-700" />
              <span>Urdu to Türkçe Document Services</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.15] mb-6">
              Urdu to Turkish Translation in Pakistan for Nikah Nama, Birth &amp; Academic Documents
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-sans mb-6">
              <strong>Need a Pakistani Urdu document translated into Turkish?</strong> LISAN.PK offers document-translation enquiries for Urdu Nikah Nama, birth and family records, educational certificates, and other papers intended for use in Türkiye. <strong>The translation language is only one part of acceptance:</strong> some Turkish universities and public offices also require a <strong>yeminli tercüman</strong> (sworn translator) and <strong>noter</strong> (notary) certification. Confirm the receiving institution&apos;s instructions before ordering. [1][2]
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
              <p className="text-slate-800 font-medium text-base mb-3 font-sans">
                <strong>Request a document-specific quote:</strong> Tell us which authority in Türkiye will receive the document and whether it requires a Turkish sworn translation, notarisation, apostille or additional verification. We can review the supplied requirements and confirm the service scope before accepting an order. We do <strong>not</strong> promise Turkish notarial certification unless a compliant route has been individually confirmed.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 h-12 shadow-sm rounded-xl font-sans"
                  >
                    Request a Translation Quote <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/pricing" className="text-emerald-700 font-bold text-sm underline ml-2">
                  See Translation Pricing &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* Section 1: Documents We Review */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Urdu-to-Turkish translation: documents we can review
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm font-sans">
                <thead className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-4">Urdu source document</th>
                    <th className="p-4">Common reason for Turkish translation</th>
                    <th className="p-4">Details needing special attention</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {urduDocuments.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : ""}>
                      <td className="p-4 font-bold text-slate-900 whitespace-nowrap">{item.doc}</td>
                      <td className="p-4">{item.reason}</td>
                      <td className="p-4 text-slate-600">{item.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-500 font-sans italic">
              These examples <strong>do not imply</strong> that Turkish authorities require every listed document. Ask the receiving office for its actual checklist, and supply only relevant papers.
            </p>
          </div>

          {/* Section 2: Nikah Nama to Turkish */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Urdu Nikah Nama to Turkish translation
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              The Pakistani Nikah Nama is a marriage contract containing legal and personal details that require more than word-by-word substitution. A reliable Turkish translation should accurately reflect the source record, including:
            </p>
            <ul className="space-y-2 text-slate-700 text-sm font-sans pl-2">
              <li>&bull; Spouses&apos; identities and names as shown on supporting documents.</li>
              <li>&bull; Marriage date and place, including differences between date formats where relevant.</li>
              <li>&bull; Registrar, witnesses and signatories.</li>
              <li>&bull; The dower/mehr clauses (for example, immediate or deferred obligations) and any additional contractual terms.</li>
              <li>&bull; All official stamps, annotations and handwritten entries that form part of the document.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed text-sm font-sans pt-2">
              <strong>Translation is not a marriage registration.</strong> A Turkish translation of an Urdu Nikah Nama does not itself register the marriage with Turkish authorities or replace any required Pakistani MRC. Before commissioning translation, ask whether the receiving office wants the Nikah Nama, MRC, both, or another civil-status document.
            </p>
            <div className="pt-2">
              <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 font-bold underline text-sm">
                Nikah Nama translation service &rarr;
              </Link>
            </div>
          </div>

          {/* Section 3: Birth Certificates & NADRA Records */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Urdu to Turkish birth certificates and NADRA family records
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              Pakistani family paperwork is not interchangeable. A <strong>birth certificate</strong> records a birth, <strong>CRC/B-Form</strong> concerns a child&apos;s registration, <strong>FRC</strong> summarises family relationships, and <strong>MRC</strong> records marriage registration. The receiving Turkish institution decides which of these best supports its procedure.
            </p>
            <p className="text-slate-700 leading-relaxed text-sm font-sans">
              For children&apos;s records, accurately reproduce each parent&apos;s name, registration numbers and dates. Do not invent missing names or silently &ldquo;correct&rdquo; discrepancies in the translation. If a name spelling differs across the passport, birth record and FRC, ask the receiving institution what supporting explanation or corrected source record it will accept.
            </p>
            <div className="pt-2">
              <Link href="/services/translation/birth-certificate-translation" className="text-emerald-700 font-bold underline text-sm">
                Birth certificate, FRC and CRC translation service &rarr;
              </Link>
            </div>
          </div>

          {/* Section 4: Educational Certificates & Transcripts */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Urdu to Turkish educational certificate and transcript translation
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              Pakistani students applying to Turkish universities may need an eligible school certificate, university degree, transcript or entrance-test result translated into Turkish. <strong>Requirements differ significantly across institutions:</strong>
            </p>
            <div className="space-y-3 pl-2">
              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-sans text-slate-700">
                <strong>Kayseri University:</strong> lists a Turkish translation certified by a sworn translator <strong>and a notary</strong> for certain foreign-student registration records. [1]
              </div>
              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-sans text-slate-700">
                <strong>Boğaziçi University:</strong> 2026–27 registration instructions state that translations from translation agencies are acceptable for specified documents. [2]
              </div>
              <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-sans text-slate-700">
                <strong>Ankara University:</strong> lists sworn-translator Turkish transcript translations in its foreign-student registration materials. [3]
              </div>
            </div>
            <p className="text-slate-600 text-xs font-sans pt-2">
              These are <strong>examples of institution-specific rules</strong>, not one nationwide acceptance guarantee. An Urdu source document translated in Pakistan might still need a translation executed, certified or notarised through a route accepted by the particular Turkish institution.
            </p>
            <div className="pt-2">
              <h3 className="font-bold text-slate-900 text-sm font-serif mb-1">How should Pakistani academic terms be handled?</h3>
              <p className="text-slate-700 text-sm font-sans leading-relaxed">
                A careful translation distinguishes <strong>Matric / Secondary School Certificate</strong>, <strong>Intermediate / Higher Secondary School Certificate</strong>, grades, academic subjects and degree titles. It should preserve the issuer&apos;s terminology and not assert equivalence with a Turkish degree. <strong>Denklik (equivalence)</strong> is a separate decision by an authorised body; a translator cannot award it.
              </p>
            </div>
          </div>

          {/* Section 5: Sworn Translator and Notary Table */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Does Turkish law require a sworn translator and notary?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              <strong>Sometimes, for particular document types and procedures—but not in every situation.</strong> The official Turkish Directorate of Migration Management describes scenarios in which foreign-language documents require a sworn Turkish translation approved by a notary; universities publish their own registration instructions. [1][2][4]
            </p>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm font-sans">
                <thead className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-4">Requirement</th>
                    <th className="p-4">What it means</th>
                    <th className="p-4">Who decides whether it is needed?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {legalRequirements.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : ""}>
                      <td className="p-4 font-bold text-slate-900">{item.req}</td>
                      <td className="p-4">{item.meaning}</td>
                      <td className="p-4 text-slate-600">{item.decider}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Section 6: Steps / Sequence */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              How LISAN.PK handles Urdu-to-Turkish translation enquiries
            </h2>
            <div className="space-y-4 text-slate-700 text-sm font-sans">
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                <strong>Step 1 — Send a readable copy:</strong> Provide clear images or scans of every relevant page, including stamps and reverse-side notes.
              </div>
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                <strong>Step 2 — Identify the receiving authority:</strong> Tell us the institution, city in Türkiye and purpose; ideally share its official document checklist.
              </div>
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                <strong>Step 3 — Confirm the service scope:</strong> We review document length, script legibility, technical terminology, formatting, and whether specialised sworn/notary steps are requested.
              </div>
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                <strong>Step 4 — Approve a written quote:</strong> Your quote identifies the translation deliverable and any separately arranged formalities. No certification or rush delivery is promised before confirmation.
              </div>
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                <strong>Step 5 — Translate and quality-check:</strong> Names, dates, numerical references, terminology and source-to-target completeness are reviewed.
              </div>
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50">
                <strong>Step 6 — Review delivery and any remaining formalities:</strong> Receive the agreed output format and follow the receiving authority&apos;s submission instructions.
              </div>
            </div>
          </div>

          {/* Section 7: Pricing Table */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Urdu-to-Turkish translation price in Pakistan
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              The price depends on the number of pages, handwriting quality, legal complexity, tables, and any separately verified sworn/notarial route. <strong>There is no single approved flat rate in this page for every Urdu-to-Turkish document.</strong>
            </p>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm font-sans">
                <thead className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-4">Document type</th>
                    <th className="p-4">Pricing approach</th>
                    <th className="p-4">What to send</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {pricingTable.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : ""}>
                      <td className="p-4 font-bold text-slate-900">{item.type}</td>
                      <td className="p-4">{item.approach}</td>
                      <td className="p-4 text-slate-600">{item.send}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 text-xs font-sans">
              For existing published LISAN.PK pricing, use the <Link href="/pricing" className="text-emerald-700 underline font-medium">translation charges page</Link>.
            </p>
          </div>

          {/* Section 8: FAQs */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-emerald-700" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {serviceFaqs.map((faq, index) => (
                <div key={index} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 font-serif">
                    {index + 1}. {faq.q}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed font-sans">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Editorial Review Box */}
          <EditorialReviewBox />

          {/* Section 9: CTA Box */}
          <div className="bg-emerald-800 text-white p-8 md:p-10 rounded-2xl shadow-sm space-y-6 font-sans">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">
              Request an Urdu-to-Turkish translation quote
            </h2>
            <p className="text-emerald-100 leading-relaxed text-base max-w-2xl">
              <strong>Get the required document type right before spending on the wrong certification.</strong> Tell us whether you need a basic Turkish translation, a sworn translator&apos;s translation accepted by a particular institution, or an additional notarial/apostille step. We will confirm what we can actually provide before proceeding.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-8 h-12 shadow-sm rounded-xl font-sans"
                >
                  Request a Translation Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/pricing" className="text-emerald-200 hover:text-white font-bold text-sm underline ml-2">
                View Translation Pricing &rarr;
              </Link>
              <Link href="/services/translation/turkish-translation" className="text-emerald-200 hover:text-white font-bold text-sm underline ml-2">
                See English&harr;Turkish Services &rarr;
              </Link>
            </div>
          </div>

          {/* Section 10: Official sources */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">
              Official sources and editor&apos;s verification notes
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm pl-2 font-sans">
              <li><a href="https://internationalstudent.kayseri.edu.tr/en/c/81-1/registration-dates-required-documents-for-application" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Kayseri University — International student registration documents</a></li>
              <li><a href="https://ogrenciler.bogazici.edu.tr/en/pages/university-registration/8075" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Boğaziçi University — 2026–27 international undergraduate registration</a></li>
              <li><a href="https://isoidb.ankara.edu.tr/en/documents-of-final-registration/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Ankara University — International student registration</a></li>
              <li><a href="https://en.goc.gov.tr/residence-" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Türkiye Directorate of Migration Management — Residence permits</a></li>
              <li><a href="https://www.hcch.net/en/instruments/conventions/specialised-sections/apostille/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">HCCH — Apostille Convention overview</a></li>
              <li><a href="https://attestation.mofa.gov.pk/apostille" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Pakistan MOFA — Apostille application guidance</a></li>
            </ol>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic font-sans">
              Service disclaimer: LISAN.PK provides independent document-translation assistance. It is not the Turkish Embassy, a Turkish public notary, a visa authority or an educational equivalence body. Translation alone does not ensure official acceptance or confer any legal status.
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
