import { Metadata } from "next"
import Link from "next/link"
import { 
  FileText, 
  HelpCircle, 
  ExternalLink, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  Info, 
  AlertTriangle,
  Building2,
  Check,
  ChevronRight,
  ShieldCheck,
  Languages,
  MessageSquare,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Arabic to Urdu Translation Services in Pakistan | Documents & Legal Text | LISAN.PK",
  description: "Request Arabic to Urdu document translation in Pakistan for Saudi certificates, contracts, legal records, medical reports and academic documents. Get a document-specific quote.",
  alternates: {
    canonical: "https://www.lisan.pk/services/translation/arabic-to-urdu",
  },
  openGraph: {
    title: "Arabic to Urdu Translation Services in Pakistan | Documents & Legal Text | LISAN.PK",
    description: "Request Arabic to Urdu document translation in Pakistan for Saudi certificates, contracts, legal records, medical reports and academic documents. Get a document-specific quote.",
    url: "https://www.lisan.pk/services/translation/arabic-to-urdu",
    type: "website",
  }
}

const serviceFaqs = [
  {
    "q": "Can I get Saudi Arabic documents translated into Urdu in Pakistan?",
    "a": "Yes, you can submit Saudi-issued documents for an Arabic-to-Urdu translation assessment. Share the entire document and confirm whether the output is for personal understanding or official use."
  },
  {
    "q": "Do you translate Arabic contracts into Urdu?",
    "a": "We accept contract translation enquiries subject to document review and available expertise. Legal reliance may require additional professional review."
  },
  {
    "q": "Can you translate an Arabic medical report into Urdu?",
    "a": "We can assess such requests. Medical terminology, lab units and unclear abbreviations require particular care; specialist review may be needed, and translation does not replace clinical advice."
  },
  {
    "q": "What is the cost of Arabic-to-Urdu translation?",
    "a": "Pricing depends on length, complexity and the requested format. Send a clear copy for a document-specific quotation and see published pricing (/pricing) where applicable."
  },
  {
    "q": "Is Arabic-to-Urdu translation accepted by an embassy?",
    "a": "Acceptance depends on the receiving authority, which may require English instead of Urdu or specify a particular certification procedure. We do not promise universal embassy acceptance."
  },
  {
    "q": "Is Arabic-to-Urdu the same as Arabic transliteration?",
    "a": "No. Transliteration represents sounds or names in another script; translation conveys the meaning of sentences and documents in another language."
  },
  {
    "q": "Can an Arabic Iqama be translated into Urdu?",
    "a": "A client may request an Urdu rendering of its readable fields. This does not replace an original Iqama or prove a current Saudi residence status."
  },
  {
    "q": "Do I need the original Arabic document to obtain a quote?",
    "a": "Usually a clear full copy is sufficient for an initial quotation. Do not send unnecessary original IDs or unrelated personal information."
  },
  {
    "q": "Can you translate handwritten Arabic documents?",
    "a": "We can review legible handwriting; unclear entries may need clarification or a better copy. No text should be invented to fill gaps."
  },
  {
    "q": "Can I ask for only part of a document to be translated?",
    "a": "For personal understanding, a clearly labelled excerpt may be possible. For official submissions requiring a full translation, a selective excerpt may be insufficient."
  },
  {
    "q": "What if the document includes both Arabic and English?",
    "a": "We check which fields already exist in the target language and whether the recipient requires the whole document translated."
  },
  {
    "q": "Do I need an apostille for Arabic-to-Urdu translation?",
    "a": "Not automatically. Authentication depends on the document's country of issue, its destination and the receiving authority—not just the translation language."
  },
  {
    "q": "How long does Arabic-to-Urdu translation take?",
    "a": "A delivery date can be agreed after reviewing length, legibility, certification needs and translator availability. No universal turnaround is promised."
  },
  {
    "q": "Will the Urdu translation preserve all tables and numbers?",
    "a": "We aim to retain the meaning and organisation of the source, including numbered clauses and important fields. Exact graphic reproduction is subject to the agreed delivery format."
  }
]

const documentsWeTranslate = [
  { source: "Saudi employment contract or job letter", use: "Understanding salary, leave, role and workplace terms", care: "Obligations, dates, amounts, termination clauses and exceptions" },
  { source: "Arabic Iqama or residence-related notice", use: "Understanding residence or identity details", care: "Names, identifiers, expiry dates and administrative terminology" },
  { source: "Marriage or family certificate", use: "Family record review, documentary understanding", care: "Parties, dates, authority, witnesses and notes" },
  { source: "Arabic commercial contract or power of attorney", use: "Business review or discussion with counsel", care: "Defined terms, parties, powers, limitations and signatures" },
  { source: "Arabic court order or legal notice", use: "Understanding legal correspondence", care: "Case numbers, deadlines, formal legal terms and operative text" },
  { source: "Arabic academic letter, degree or transcript", use: "Personal educational records or institutional review", care: "Qualification titles, grades, seals and institution names" },
  { source: "Arabic medical report", use: "Explaining a foreign-language medical record to a patient or adviser", care: "Findings, measurements, dosage units, abbreviations and uncertainty" },
  { source: "Arabic insurance/claim letter", use: "Understanding policy or claim information", care: "Coverage, exclusions, dates and payment terms" },
  { source: "Arabic business registration", use: "Reading company details in Urdu", care: "Licence number, entity name, registered activities and validity" },
  { source: "Other Arabic certificates and correspondence", use: "Personal or administrative understanding", care: "Scope, legibility and requirement for full versus excerpt translation" }
]

const medicalApproach = [
  { content: "Diagnosis or suspected diagnosis", approach: "Preserve certainty level: confirmed, suspected, excluded or under investigation" },
  { content: "Medicine name", approach: "Preserve the medicine's proper name and dosage units without substitution" },
  { content: "Laboratory result", approach: "Preserve numbers, units, reference ranges and flagged values" },
  { content: "Procedures and recommendations", approach: "Translate the documented recommendation, without adding medical advice" },
  { content: "Unclear acronym or handwriting", approach: "Flag as unclear and request clarification when possible" }
]

export default function ArabicToUrduTranslationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arabic to Urdu Translation Services in Pakistan",
    "serviceType": "Document & Legal Translation",
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
    "description": "Request Arabic to Urdu document translation in Pakistan for Saudi certificates, contracts, legal records, medical reports and academic documents. Get a document-specific quote.",
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
        "name": "Arabic to Urdu",
        "item": "https://www.lisan.pk/services/translation/arabic-to-urdu"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceFaqs.map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": f.a
      }
    }))
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white border-b border-slate-700/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-14">
          <nav className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-6 tracking-wide uppercase">
            <Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/services/translation" className="hover:text-emerald-300 transition-colors">Translation Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-300">Arabic to Urdu</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 mb-5">
            <Languages className="w-3.5 h-3.5 text-emerald-400" />
            Directional Document Service: Arabic → Urdu
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight text-white mb-6 leading-[1.15]">
            Arabic to Urdu Translation Services in Pakistan
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            <strong>Have an Arabic certificate, Saudi document, contract or report that you need to read or submit in Urdu?</strong> LISAN.PK accepts enquiries for <strong>Arabic-to-Urdu document translation in Pakistan</strong>, including personal records, employment documents and selected legal, academic or medical materials. Share the complete document and the intended use so the appropriate language, terminology and review requirements can be confirmed before quotation.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-white hover:bg-slate-100 text-emerald-950 font-bold h-12 px-6 rounded-xl shadow-md transition-all">
                Get an Arabic-to-Urdu Translation Quote
              </Button>
            </Link>
            <a href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 px-6 rounded-xl shadow-md transition-all flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Enquire on WhatsApp
              </Button>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 italic mt-6 border-t border-slate-700/80 pt-4">
            *Arabic-to-Urdu is a different service from Arabic-to-English. A recipient requiring English may reject an otherwise accurate Urdu translation, so check the destination language before ordering. (See <Link href="/services/translation/arabic-to-english" className="text-emerald-400 underline font-medium">Arabic-to-English translation</Link> or reverse <Link href="/services/translation/urdu-to-arabic" className="text-emerald-400 underline font-medium">Urdu-to-Arabic translation</Link>).
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* SECTION 1: WHAT CAN BE REQUESTED TABLE */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            Arabic-to-Urdu document translation: what can be requested?
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Saudi Arabia and other Arabic-speaking countries issue records that Pakistani individuals, families, employers and advisers may need to understand in Urdu. The <strong>appropriate output</strong> depends on whether the translation is intended for <strong>personal comprehension</strong>, a <strong>private organisation</strong> or <strong>official submission</strong>.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                  <th scope="col" className="p-3.5 sm:p-4 font-bold w-1/3">Arabic source</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold w-1/3">Typical Urdu translation use</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Translation-quality considerations</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {documentsWeTranslate.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">{row.source}</td>
                    <td className="p-3.5 sm:p-4 text-slate-700 align-top leading-relaxed">{row.use}</td>
                    <td className="p-3.5 sm:p-4 text-slate-600 align-top text-xs sm:text-sm leading-relaxed">{row.care}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong>Important:</strong> Some documents are already bilingual, and some receiving organisations only accept English. Check the original and the recipient&apos;s exact language instructions first.
          </div>
        </section>

        {/* SECTION 2: LEGAL TRANSLATION */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Arabic legal translation into Urdu
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Arabic legal texts demand more than casual paraphrasing. A single change in a conditional expression, prohibition, date or party name can alter the meaning of a contract or legal notice. For a document intended for legal reliance, request <strong>complete, context-aware translation</strong> and, where appropriate, a qualified legal review.
          </p>

          <p className="font-semibold text-slate-900 text-sm sm:text-base">
            We assess requests concerning:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <li><strong>Employment agreements:</strong> wages, working hours, benefits, disciplinary provisions and termination.</li>
            <li><strong>Commercial agreements:</strong> supplier terms, purchase and service obligations, warranties and liability clauses.</li>
            <li><strong>Powers of attorney:</strong> specific powers, delegations, restrictions and execution language.</li>
            <li><strong>Notices and court-related records:</strong> procedural terms, case identifiers, time limits and orders.</li>
            <li><strong>Family and inheritance paperwork:</strong> relationships, shares, parties and jurisdiction-specific expressions.</li>
          </ul>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              How are Arabic legal terms handled in Urdu?
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              The translator should select a term that reflects the <strong>context of the issuing legal system</strong>. Some Arabic terms have familiar Urdu counterparts; others refer to a legal institution that does not have an identical Pakistani equivalent. When a term is ambiguous or jurisdiction-specific, the translation should preserve the source term or include an appropriately labelled explanatory note rather than invent an exact legal equivalence.
            </p>
            <p className="text-xs text-slate-500 italic">
              A translation does <strong>not</strong> replace legal advice or authenticate the source document. If legal rights or deadlines are involved, consult a lawyer qualified for the relevant jurisdiction.
            </p>
          </div>

          <div>
            <Link href="/contact">
              <Button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold h-11 px-5 rounded-xl shadow-sm transition-all">
                Request a Legal Document Translation Quote
              </Button>
            </Link>
          </div>
        </section>

        {/* SECTION 3: SAUDI ARABIC DOCUMENTS */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            Saudi Arabic documents translated into Urdu
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Requests may involve an employment contract, employer notification, residency paperwork, a civil-status certificate or correspondence issued in Arabic. For accurate translation, we need to identify <strong>what kind of document it is</strong>, whether it includes a QR code or official references, and whether the client wants a full translation or a clearly identified plain-language explanation.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Iqama */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                Saudi Iqama Arabic-to-Urdu translation
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For an Iqama or related record, the following may matter:
              </p>
              <ol className="list-decimal pl-5 space-y-1 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <li>Person&apos;s name, including any Arabic and Latin versions.</li>
                <li>Residence/identity number and dates.</li>
                <li>Occupation or employer details if printed.</li>
                <li>Any administrative status terms, restrictions or notes.</li>
                <li>Reverse-side entries and visible stamps.</li>
              </ol>
              <p className="text-xs text-slate-500 pt-1">
                If the Iqama is being submitted to an <strong>English-speaking</strong> authority, choose <Link href="/services/translation/arabic-to-english" className="text-emerald-700 underline font-semibold">Arabic-to-English translation</Link>, not Urdu.
              </p>
            </div>

            {/* Contract */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                Saudi contract Arabic-to-Urdu translation
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                A Saudi employment contract may contain salary terms and employment conditions that a Pakistani employee wants to understand in Urdu. We translate the document&apos;s wording as supplied; we do <strong>not</strong> make assumptions about the legality or enforceability of a clause. Any discrepancy between an Arabic text and another language version should be referred to the contracting parties or a legal adviser.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: MEDICAL REPORTS */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Arabic medical report translation into Urdu
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            An <strong>Arabic medical report in Urdu</strong> may help a patient or family understand a foreign-language record. Medical text may include abbreviations, drug names, lab values and units that must be reproduced precisely.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                  <th scope="col" className="p-3.5 sm:p-4 font-bold w-1/3">Content in Arabic report</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Urdu translation approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {medicalApproach.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">{row.content}</td>
                    <td className="p-3.5 sm:p-4 text-slate-700 align-top leading-relaxed">{row.approach}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed">
            <strong>Safety note:</strong> A translated report is not medical advice and should not be relied on alone for treatment, dosage decisions or emergency care. If an exact medical term is unclear or the recipient requires specialist certification, a qualified medical reviewer may be necessary. Confirm specialist capacity and delivery requirements before booking.
          </div>
        </section>

        {/* SECTION 5: ACADEMIC & RELIGIOUS */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Arabic academic and religious texts: different standards
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Arabic educational certificates usually require exact reproduction of titles, names, dates and grades. Arabic religious or academic prose can require different treatment—careful citation, terminology, quotations and consistency with the author&apos;s wording. A <strong>personal reading translation</strong> and a <strong>formally certified document translation</strong> are not interchangeable.
          </p>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            We assess the purpose before quoting. For a specialised scholarly work, the subject, length, citation style and necessary specialist review should be agreed in writing. Do not assume every long-form scholarly assignment is covered by the standard document rate.
          </p>
        </section>

        {/* SECTION 6: HOW TRANSLATION WORKS */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            How does Arabic-to-Urdu translation work?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 1</span>
              <h3 className="font-bold text-slate-900 text-base">Submit your document</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Provide a complete readable PDF or images. Include all pages and reverse-side content where it affects the meaning.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 2</span>
              <h3 className="font-bold text-slate-900 text-base">Describe the purpose</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tell us whether the Urdu output is for personal understanding, a private institution or official submission. Attach requirements if available.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 3</span>
              <h3 className="font-bold text-slate-900 text-base">Confirm the scope</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We check whether full translation, table reproduction, certification, specialist review or physical copies are requested.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 4</span>
              <h3 className="font-bold text-slate-900 text-base">Get a quotation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The fee and feasible delivery date are agreed after examining the document and reviewing available language expertise.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 5</span>
              <h3 className="font-bold text-slate-900 text-base">Translate and check</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Agreed content is translated into Urdu, preserving identities, numbers, dates, technical terms and the meaning of key clauses.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 6</span>
              <h3 className="font-bold text-slate-900 text-base">Deliver in agreed format</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Digital or physical delivery, certification and extra authentication—if applicable—must be specified in advance.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 italic">
            We do not publish a universal “same-day” or “100% accepted” guarantee. The work and required certification depend on the source and recipient.
          </p>
        </section>

        {/* SECTION 7: PROPER URDU SCRIPT */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Arabic-to-Urdu translation in proper Urdu script
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Both Arabic and Urdu are written right to left, but they are <strong>not the same language</strong>. An Arabic source can contain vocabulary that looks familiar to an Urdu reader while carrying a different grammatical or technical meaning. A good Urdu translation uses <strong>natural Urdu sentence structure</strong> while preserving the source&apos;s meaning.
          </p>

          <p className="font-semibold text-slate-900 text-sm sm:text-base">
            For documents with mixed Arabic, English and numerical fields, we check:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <li>Correct Urdu spelling of names and entities.</li>
            <li>Direction and order of numbers, identifiers and dates.</li>
            <li>Consistent translation of repeated Arabic terms.</li>
            <li>Preservation of section numbers, tables and paragraph hierarchy.</li>
            <li>Proper treatment of quotations, stamps, signatures and annotations.</li>
          </ul>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 font-medium">
            <strong>Do not confuse script conversion with translation.</strong> Copying Arabic words into Urdu-style typography does not create an accurate Urdu translation.
          </div>
        </section>

        {/* SECTION 8: IS CERTIFIED AVAILABLE */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            Is certified Arabic-to-Urdu translation available?
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            “Certified” has different meanings in different systems. The relevant recipient may require a <strong>signed accuracy declaration</strong>, a company stamp, translator identification, notarisation or another formal step. We will review the stated requirement and confirm what documentation can be provided for the specific assignment.
          </p>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
            <p>
              A private translation agency does <strong>not</strong> issue government apostilles and must not claim guaranteed acceptance by every embassy or court.
            </p>
            <p>
              For document authentication and treaty-country questions, see <Link href="/guides/certified-translation-vs-apostille-pakistan" className="text-emerald-700 underline font-semibold">Certified Translation vs Notarization vs Apostille</Link> and the <Link href="/guides/pakistan-apostille-country-list" className="text-emerald-700 underline font-semibold">Pakistan Apostille Country List</Link>.
            </p>
          </div>
        </section>

        {/* SECTION 9: PRICES */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Arabic-to-Urdu translation prices in Pakistan
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Fees depend on the complete Arabic source, the amount of text, handwriting quality, subject-matter complexity, requested certification, specialist review and delivery method. A short printed certificate is not priced like a dense legal contract or medical report.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
            <strong>We quote Arabic→Urdu work document by document.</strong> Where an item qualifies for an existing published rate, our <Link href="/pricing" className="text-emerald-700 underline font-semibold">translation pricing page</Link> provides context; specialist legal, medical or long-form work may require a separate quote.
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/pricing">
              <Button variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold h-11 px-5 rounded-xl">
                Check Translation Charges
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold h-11 px-5 rounded-xl shadow-sm transition-all">
                Request Your Specific Quote
              </Button>
            </Link>
          </div>
        </section>

        {/* SECTION 10: VERSUS TABLE */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            Arabic-to-Urdu versus Arabic-to-English translation
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Source language</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Target language</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Common use</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Arabic</td>
                  <td className="p-3.5 sm:p-4 font-bold text-emerald-800">Urdu</td>
                  <td className="p-3.5 sm:p-4 text-slate-700">Pakistani client wants to understand an Arabic contract or record</td>
                  <td className="p-3.5 sm:p-4 font-bold text-emerald-800">This page</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Arabic</td>
                  <td className="p-3.5 sm:p-4 font-bold text-slate-800">English</td>
                  <td className="p-3.5 sm:p-4 text-slate-700">UK/US filing or English-language institutional submission</td>
                  <td className="p-3.5 sm:p-4">
                    <Link href="/services/translation/arabic-to-english" className="text-emerald-700 underline font-semibold">
                      Arabic-to-English
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Urdu</td>
                  <td className="p-3.5 sm:p-4 font-bold text-slate-800">Arabic</td>
                  <td className="p-3.5 sm:p-4 text-slate-700">Urdu Nikah Nama or certificate for an Arabic-language recipient</td>
                  <td className="p-3.5 sm:p-4">
                    <Link href="/services/translation/urdu-to-arabic" className="text-emerald-700 underline font-semibold">
                      Urdu-to-Arabic
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">English</td>
                  <td className="p-3.5 sm:p-4 font-bold text-slate-800">Arabic</td>
                  <td className="p-3.5 sm:p-4 text-slate-700">English degree or certificate for an Arabic-language recipient</td>
                  <td className="p-3.5 sm:p-4">
                    <Link href="/translation-english-to-arabic" className="text-emerald-700 underline font-semibold">
                      English-to-Arabic
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 11: FAQS */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {serviceFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2">
                <h3 className="font-bold font-serif text-slate-900 text-base sm:text-lg">
                  {idx + 1}. {faq.q}
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 12: REQUEST QUOTE CTA */}
        <section className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
            Request Arabic-to-Urdu translation in Pakistan
          </h2>
          <p className="text-emerald-100 leading-relaxed text-base sm:text-lg">
            Send the <strong>complete Arabic document</strong>, specify the <strong>target language (Urdu)</strong>, and tell us whether you need a <strong>personal-use translation or an officially submitted document</strong>. We will review the scope, certification instructions and practical delivery options before quoting.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-white hover:bg-slate-100 text-emerald-950 font-bold h-12 px-6 rounded-xl shadow-md transition-all">
                Get an Arabic-to-Urdu Quote
              </Button>
            </Link>
            <a href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 px-6 rounded-xl shadow-md transition-all flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                WhatsApp Enquiry
              </Button>
            </a>
            <Link href="/services/translation">
              <Button variant="outline" className="border-emerald-500/80 text-white hover:bg-emerald-800/40 font-semibold h-12 px-6 rounded-xl">
                View Other Translation Services
              </Button>
            </Link>
          </div>

          <p className="text-xs text-emerald-200/80 border-t border-emerald-800/60 pt-4">
            *Confidentiality: Only share the pages needed to prepare a quote, and avoid unnecessary sensitive personal information. See <Link href="/privacy-policy" className="underline hover:text-white">Privacy Policy</Link>.
          </p>
        </section>

        {/* SECTION 13: SOURCES */}
        <footer className="border-t border-slate-200 pt-8 space-y-4 text-xs sm:text-sm text-slate-600">
          <h2 className="text-lg font-bold font-serif text-slate-900">Reference and editorial notes</h2>
          <ul className="list-disc pl-5 space-y-1.5 leading-relaxed">
            <li><strong>HCCH Apostille Convention</strong> (for explaining why translation is separate from authentication): <a href="https://www.hcch.net/en/instruments/conventions/full-text/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">hcch.net Convention text</a></li>
            <li><strong>Pakistan MOFA attestation portal:</strong> <a href="https://attestation.mofa.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">attestation.mofa.gov.pk</a></li>
            <li><strong>LISAN.PK published pricing and privacy terms:</strong> <Link href="/pricing" className="text-emerald-700 underline font-medium">lisan.pk/pricing</Link> and <Link href="/privacy-policy" className="text-emerald-700 underline font-medium">lisan.pk/privacy-policy</Link></li>
          </ul>

          <p className="text-xs text-slate-400 italic pt-3 border-t border-slate-200">
            Official sources provide general legalisation background; they do not endorse LISAN.PK. Claims about personnel, certified-translator eligibility or specialist capacity must be supported by the business before accepting an assignment.
          </p>
        </footer>

      </div>
    </div>
  )
}
