import { Metadata } from 'next'
import Link from "next/link"
import { 
  FileText, 
  HelpCircle, 
  ExternalLink, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  Info, 
  AlertTriangle,
  Building2,
  Check,
  ChevronRight,
  ShieldCheck,
  Languages,
  Phone,
  MessageSquare,
  FileCheck
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Urdu to Arabic Translation in Pakistan | Nikah Nama & Documents | LISAN.PK",
  description: "Need Urdu to Arabic document translation in Pakistan? Get a quote for handwritten Nikah Nama, certificates, affidavits and legal records, with careful Arabic names and document formatting.",
  alternates: {
    canonical: "https://www.lisan.pk/services/translation/urdu-to-arabic",
  },
  openGraph: {
    title: "Urdu to Arabic Translation in Pakistan | Nikah Nama & Documents | LISAN.PK",
    description: "Need Urdu to Arabic document translation in Pakistan? Get a quote for handwritten Nikah Nama, certificates, affidavits and legal records, with careful Arabic names and document formatting.",
    url: "https://www.lisan.pk/services/translation/urdu-to-arabic",
    type: "website",
  }
}

const faqs = [
  {
    "q": "Can I translate an Urdu Nikah Nama into Arabic in Pakistan?",
    "a": "Yes. A full Urdu-to-Arabic translation can be prepared from the genuine Nikah Nama, subject to legibility, content and any receiving-authority requirements. Send every page for assessment."
  },
  {
    "q": "Does an Arabic translation replace the original Nikah Nama?",
    "a": "No. It is a translation, not a replacement for the underlying marriage contract. Some authorities require the original and translation together."
  },
  {
    "q": "Is the computerized MRC the same as the Nikah Nama?",
    "a": "No. The computerized marriage registration certificate and traditional marriage contract are different records. The receiving body determines which is required."
  },
  {
    "q": "Do I need Urdu-to-Arabic translation for every Saudi visa?",
    "a": "No blanket rule applies to every visa or record. Check the particular Saudi department, employer or portal's current checklist."
  },
  {
    "q": "What is the price of Urdu-to-Arabic translation in Pakistan?",
    "a": "LISAN.PK publishes PKR 1,200 for a qualifying standard document/degree translation. Handwritten, lengthy or specialist Urdu-to-Arabic records require an individual quote."
  },
  {
    "q": "How much does Nikah Nama Urdu-to-Arabic translation cost?",
    "a": "The price depends on the full contract, handwriting, number of pages and required certification. Send complete scans for an itemised quote."
  },
  {
    "q": "Can a handwritten Urdu Nikah Nama be translated?",
    "a": "It can be assessed. Readability matters; unclear entries must be clarified rather than guessed."
  },
  {
    "q": "Will you use the Arabic spelling already shown on my Saudi documents?",
    "a": "Share those documents or the relevant spelling reference. The translator can review consistency; any mismatch with the Urdu source should be discussed before finalisation."
  },
  {
    "q": "Will a certified translation be automatically accepted by the Saudi Embassy?",
    "a": "No translator can responsibly guarantee universal embassy or departmental acceptance. The receiving authority decides whether the document meets its requirements."
  },
  {
    "q": "Is notarisation automatically included?",
    "a": "No. Notarisation is a separate service and should only be added if required and agreed."
  },
  {
    "q": "Is MOFA attestation the same as Urdu-to-Arabic translation?",
    "a": "No. MOFA authenticates documents through official procedures. Translating the content is a separate linguistic service."
  },
  {
    "q": "Can I send photos of my document for the quote?",
    "a": "Yes, if clear and complete. Physical originals should only be sent if specifically necessary and agreed."
  },
  {
    "q": "Can the translation be sent digitally?",
    "a": "Ask for the format your receiving authority accepts and obtain confirmation that it is available. Not every authority accepts digital copies in place of signed paper."
  },
  {
    "q": "How fast can Urdu-to-Arabic translation be completed?",
    "a": "Timing depends on content, legibility, reviewer availability, certification and delivery method. A completion time is confirmed after reviewing the actual document."
  },
  {
    "q": "Can you translate Urdu affidavits and legal declarations into Arabic?",
    "a": "Requests can be assessed. Submit all pages and any special legal or certification instructions, as these may require specialist handling."
  },
  {
    "q": "Is this the correct service if my original is already in English?",
    "a": "No. Use English-to-Arabic document translation (/translation-english-to-arabic) for English originals."
  },
  {
    "q": "Can I request a sample before ordering?",
    "a": "Ask whether an approved anonymised sample is available for the requested document type. No sample or customer case is represented as published or verified unless it exists and is approved for public use."
  }
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/services/translation/urdu-to-arabic/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.lisan.pk/services" },
        { "@type": "ListItem", "position": 3, "name": "Translation", "item": "https://www.lisan.pk/services/translation" },
        { "@type": "ListItem", "position": 4, "name": "Urdu to Arabic Translation", "item": "https://www.lisan.pk/services/translation/urdu-to-arabic" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.lisan.pk/services/translation/urdu-to-arabic/#service",
      "name": "Urdu to Arabic Translation Services in Pakistan",
      "serviceType": "Certified Document Translation",
      "provider": {
        "@type": "Organization",
        "name": "Lisan.pk",
        "url": "https://www.lisan.pk",
        "logo": "https://www.lisan.pk/logo.png",
        "telephone": "+923288155866"
      },
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan"
      },
      "description": "Certified Urdu-to-Arabic translation for handwritten Nikah Nama, NADRA records, affidavits, legal declarations and certificates for Saudi Arabia and the Gulf."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/services/translation/urdu-to-arabic/#faq",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    }
  ]
}

export default function UrduToArabicTranslationPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 antialiased">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-emerald-950 text-white pt-20 pb-28 overflow-hidden border-b border-emerald-900">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
        <div className="container mx-auto px-4 max-w-4xl relative z-10 space-y-6">
          <nav className="text-xs font-medium text-emerald-300/80 flex items-center gap-2">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
            <Link href="/services/translation" className="hover:text-white transition-colors">Translation</Link>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
            <span className="text-emerald-100 font-semibold truncate">Urdu to Arabic</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/80 text-emerald-300 border border-emerald-700/60">
            <Languages className="w-3.5 h-3.5" />
            Directional Document Service: Urdu → Arabic
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight leading-[1.15] text-white">
            Urdu to Arabic Translation Services in Pakistan
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-3xl">
            <strong>Need an Urdu document translated into Arabic for Saudi Arabia, the UAE or another Arabic-speaking destination?</strong> LISAN.PK offers quotations for <strong>Urdu-to-Arabic document translation</strong>, including Nikah Nama marriage contracts, affidavits, certificates and legal records. Send a clear copy and the receiving organisation&apos;s requirements so the document can be assessed for Arabic terminology, accurate names and the correct delivery format.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-13 px-8 text-base rounded-xl shadow-lg transition-all">
                Request an Urdu-to-Arabic Quote
              </Button>
            </Link>
            <Link href="https://wa.me/923288155866?text=Hi%20LISAN.PK,%20I%20need%20a%20quote%20for%20Urdu%20to%20Arabic%20document%20translation." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-13 px-8 text-base rounded-xl shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Send your document on WhatsApp
              </Button>
            </Link>
          </div>

          <p className="text-xs text-emerald-200/70 italic pt-2 max-w-2xl">
            *Urdu-to-Arabic translation is a separate language direction from English-to-Arabic translation. Need an Arabic document translated into Urdu? See our dedicated <Link href="/services/translation/arabic-to-urdu" className="text-emerald-400 underline font-medium">Arabic-to-Urdu translation service</Link>. A translation, a translator&apos;s certification statement, notarisation, embassy legalisation and MOFA apostille are not interchangeable; the receiving authority determines which are required.
          </p>
        </div>
      </section>

      {/* Main Content Article */}
      <article className="container mx-auto px-4 max-w-4xl py-12 sm:py-16 space-y-12">
        {/* Section 1: Coverage */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Urdu to Arabic certified document translation: what we cover
          </h2>
          <p className="text-slate-700 leading-relaxed">
            An official document may include more than continuous printed text. Urdu records frequently contain handwritten names, dates, stamp impressions, serial numbers, signatures, conditions and annotations. The Arabic rendering must faithfully reflect the source rather than silently filling missing information or changing names to what seems more familiar.
          </p>
          <p className="text-slate-700 leading-relaxed">
            LISAN.PK reviews the type of Urdu document, its legibility and the submission purpose before providing a quotation. If the receiving organisation requires a certification statement, particular translator qualifications or a specific stamp or format, those requirements must be reviewed and agreed before work begins.
          </p>

          <h3 className="text-xl font-bold font-serif text-slate-900 pt-2">
            Documents commonly requested in Urdu → Arabic
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Original Urdu document</th>
                  <th className="py-3 px-4">Common reason for Arabic translation</th>
                  <th className="py-3 px-4">Important details to preserve</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Nikah Nama (marriage contract)</td>
                  <td className="py-3 px-4">Family record, marriage registration or spouse-related filing</td>
                  <td className="py-3 px-4 text-xs">Spouses&apos; names, witnesses, Mehr/dower clauses, signatures, dates, registrar and conditions</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Marriage declarations and affidavits</td>
                  <td className="py-3 px-4">Personal status or family documentation</td>
                  <td className="py-3 px-4 text-xs">Names, legal statements, dates, attesting authority and complete clauses</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Birth-related certificates or handwritten records</td>
                  <td className="py-3 px-4">Family or dependent documentation</td>
                  <td className="py-3 px-4 text-xs">Parents&apos; names, place of birth, issuer, registration information</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Police or character documents in Urdu</td>
                  <td className="py-3 px-4">Employment or administrative paperwork</td>
                  <td className="py-3 px-4 text-xs">Issuing authority, identity data, issue date, notices</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Educational records containing Urdu</td>
                  <td className="py-3 px-4">Admissions or employment where Arabic is required</td>
                  <td className="py-3 px-4 text-xs">Institution names, course titles, grades and certificate numbers</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Power of attorney and legal declarations</td>
                  <td className="py-3 px-4">Commercial, family or legal matters</td>
                  <td className="py-3 px-4 text-xs">Parties, powers granted, limitations, authentication details</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Property, inheritance or court documents</td>
                  <td className="py-3 px-4">Legal submissions</td>
                  <td className="py-3 px-4 text-xs">Names, legal terminology, dates, file numbers, clauses and annexes</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Experience letters or employer documents in Urdu</td>
                  <td className="py-3 px-4">Gulf employment or professional registration</td>
                  <td className="py-3 px-4 text-xs">Title, employment dates, issuer, employment terms and signatures</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed">
            <strong>Not sure which document to translate?</strong> If you already hold an English-language computerized <strong>Marriage Registration Certificate (MRC)</strong>, your required translation direction could be <strong>English → Arabic</strong>, not Urdu → Arabic. Confirm whether the recipient asks for the <strong>Nikah Nama</strong>, <strong>MRC</strong> or both. <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-800 underline font-semibold">Nikah Nama and marriage certificate translation</Link>.
          </div>
        </section>

        {/* Section 2: Nikah Nama Translation */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Nikah Nama Urdu-to-Arabic translation
          </h2>
          <p className="text-slate-700 leading-relaxed">
            A Pakistani <strong>Nikah Nama</strong> often contains a mix of printed Urdu headings and handwritten entries. The work can involve marriage-contract terminology, agreed financial obligations, parties&apos; particulars and details of the nikah registrar. A short Arabic summary is not a faithful replacement for the full contract when the receiving authority requests a complete translation.
          </p>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">What must be checked in a Nikah Nama translation?</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 text-sm">
              <li><strong>Names and relationships:</strong> Bride, groom, fathers, witnesses and the officiant/registrar.</li>
              <li><strong>Mehr/dower terms:</strong> The stated amount, division or conditions should be reflected as written, not reinterpreted.</li>
              <li><strong>Dates:</strong> Copy dates faithfully and note calendars only when supported by the source or explicitly requested.</li>
              <li><strong>Conditional clauses:</strong> Do not omit entries because a field is blank, lengthy, handwritten or difficult to read.</li>
              <li><strong>Administrative identifiers:</strong> Marriage registration details, serial numbers, seals and stamps as legible.</li>
              <li><strong>Every page:</strong> Reverse-side records, continuations and handwritten additions can be important.</li>
            </ul>
          </div>

          <h3 className="text-lg font-bold font-serif text-slate-900 pt-2">
            Urdu Nikah Nama vs English MRC — which needs Arabic translation?
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Record</th>
                  <th className="py-3 px-4">Usual source language</th>
                  <th className="py-3 px-4">What it represents</th>
                  <th className="py-3 px-4">Arabic translation approach</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Traditional Nikah Nama</td>
                  <td className="py-3 px-4">Usually Urdu with handwritten entries</td>
                  <td className="py-3 px-4">The detailed marriage contract</td>
                  <td className="py-3 px-4 text-xs font-semibold text-emerald-900">Urdu → Arabic for the complete record when requested</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Computerized MRC</td>
                  <td className="py-3 px-4">Often English (check the actual certificate)</td>
                  <td className="py-3 px-4">Civil marriage registration certificate</td>
                  <td className="py-3 px-4 text-xs font-semibold text-emerald-900">English → Arabic if the source is English and Arabic is requested</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500 italic">
            Do not order both translations by default. Some receiving authorities specify one document, while others request additional evidence. Obtain their checklist or email first.
          </p>

          <div className="text-xs text-slate-600 flex flex-wrap gap-2">
            <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 underline font-semibold">See the dedicated Nikah Nama translation service</Link> ·{" "}
            <Link href="/translation-english-to-arabic" className="text-emerald-700 underline font-semibold">English-to-Arabic translation</Link>
          </div>
        </section>

        {/* Section 3: Saudi Arabia */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Urdu-to-Arabic translation for Saudi Arabia
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Saudi Arabian employers, universities, government departments and family-services authorities can have <strong>different rules</strong>. Arabic may be necessary for a specific document or process, but that does not mean <strong>every</strong> Pakistani Urdu record must be translated into Arabic for <strong>every</strong> Saudi visa or admission.
          </p>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Before requesting translation, confirm:</h3>
            <ol className="list-decimal pl-5 space-y-1 text-slate-700 text-sm">
              <li><strong>Which record is required?</strong> A marriage contract, computerized MRC, educational certificate or another document?</li>
              <li><strong>Does the recipient want Arabic?</strong> If an English document is accepted, translation may be unnecessary.</li>
              <li><strong>Is a translator declaration or particular qualified provider required?</strong> Requirements vary by office and type of filing.</li>
              <li><strong>Does the original require authentication?</strong> An original-document attestation or apostille is distinct from translating it.</li>
              <li><strong>Is the translation itself separately authenticated?</strong> An apostille affixed to the original does not automatically authenticate the translation.</li>
            </ol>
          </div>

          <p className="text-xs text-slate-600 leading-relaxed">
            Saudi MOFA&apos;s <a href="https://ratification.mofa.gov.sa/Ratification/Create" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">official document-ratification application</a> includes document-specific conditions for foreign records and translations. Those conditions should be checked for the actual filing; they should not be treated as a single universal rule for all Pakistani applicants.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 text-xs">Saudi scholarship documents</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Many scholarship applicants submit English academic documents. Use the <Link href="/translation-english-to-arabic" className="text-emerald-700 underline">English-to-Arabic service</Link> if source is English.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 text-xs">Saudi employment files</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                An employer may request an Arabic version of a police document, experience letter or declaration. Recognition is separate from translation.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="font-bold text-slate-900 text-xs">Family and marriage</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Do not assume translating the handwritten contract automatically satisfies civil registration. See <Link href="/blog/saudi-embassy-attested-document-translation-process-pakistan" className="text-emerald-700 underline">Saudi Embassy vs Apostille guide</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: UAE, Qatar & Gulf */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Urdu-to-Arabic translation for UAE, Qatar and other Gulf destinations
          </h2>
          <p className="text-slate-700 leading-relaxed">
            A destination being Arabic-speaking does not establish a single submission rule. In particular, the UAE and Qatar operate their own document and immigration procedures. The authorities may need a translation in a designated format, authentication of the original document, or both.
          </p>
          <p className="text-slate-700 leading-relaxed">
            A practical way to avoid unnecessary expense is to forward <strong>the receiving authority&apos;s own document checklist</strong>. We can use it when assessing the quote and whether a translator certification or physical copy should be included. Acceptance remains with the authority, not the translation provider.
          </p>
          <div className="text-xs text-slate-600 flex flex-wrap gap-2">
            <Link href="/guides/certified-translation-vs-apostille-pakistan" className="text-emerald-700 underline font-semibold">Translation vs notarisation vs apostille</Link> ·{" "}
            <Link href="/guides/mofa-online-attestation" className="text-emerald-700 underline font-semibold">MOFA attestation guide</Link>
          </div>
        </section>

        {/* Section 5: Spelling & Script */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Urdu names written in Arabic: how spelling is checked
          </h2>
          <p className="text-slate-700 leading-relaxed">
            <strong>Urdu → Arabic is not just word substitution.</strong> Names must be handled consistently across the submitted records, especially where Urdu-script names coexist with Latin-script passport spellings and pre-existing Arabic documents.
          </p>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Our name-checking approach:</h3>
            <ol className="list-decimal pl-5 space-y-1 text-slate-700 text-sm">
              <li><strong>Read the Urdu original:</strong> Transcribe the name exactly as it appears, including distinctions that are visible in the source.</li>
              <li><strong>Check supporting identity records:</strong> Where relevant, compare the source with a passport, CNIC/NICOP or a prior Arabic-language record supplied by the customer.</li>
              <li><strong>Ask about existing Arabic spelling:</strong> If an employer, sponsor, Iqama record or prior authenticated document already uses an Arabic form, flag any difference for review rather than silently switching spellings.</li>
              <li><strong>Keep person and relationship data consistent:</strong> Avoid changing patronymics, titles or family relationships based on guesswork.</li>
              <li><strong>Show uncertain source text for clarification:</strong> Unreadable handwriting should be clarified or appropriately marked, never invented.</li>
            </ol>
          </div>

          <h3 className="text-lg font-bold font-serif text-slate-900 pt-2">
            Illustrative terminology — not a translation of your legal record
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Urdu term</th>
                  <th className="py-3 px-4">Common Arabic rendering</th>
                  <th className="py-3 px-4">Review note</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900 text-base" dir="rtl">نکاح نامہ</td>
                  <td className="py-3 px-4 font-bold text-emerald-950 text-base" dir="rtl">عقد النكاح / وثيقة الزواج</td>
                  <td className="py-3 px-4 text-xs">Exact label depends on the document and destination convention.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900 text-base" dir="rtl">مہر</td>
                  <td className="py-3 px-4 font-bold text-emerald-950 text-base" dir="rtl">المهر / الصداق</td>
                  <td className="py-3 px-4 text-xs">Preserve the contractual amount and conditions.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900 text-base" dir="rtl">دلہا</td>
                  <td className="py-3 px-4 font-bold text-emerald-950 text-base" dir="rtl">الزوج</td>
                  <td className="py-3 px-4 text-xs">Check surrounding identification details.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900 text-base" dir="rtl">دلہن</td>
                  <td className="py-3 px-4 font-bold text-emerald-950 text-base" dir="rtl">الزوجة</td>
                  <td className="py-3 px-4 text-xs">Check surrounding identification details.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900 text-base" dir="rtl">گواہ</td>
                  <td className="py-3 px-4 font-bold text-emerald-950 text-base" dir="rtl">الشاهد</td>
                  <td className="py-3 px-4 text-xs">Names and witness information must match the source.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900 text-base" dir="rtl">تاریخِ نکاح</td>
                  <td className="py-3 px-4 font-bold text-emerald-950 text-base" dir="rtl">تاريخ عقد الزواج</td>
                  <td className="py-3 px-4 text-xs">Keep the date as supported by the document.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 italic">
            This table shows common legal vocabulary only. It is not a template that can be pasted over a real Nikah Nama without reading the source contract.
          </p>
        </section>

        {/* Section 6: Handwritten Urdu */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Handwritten Urdu documents: how to avoid translation errors
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Some Urdu documents use Nastaliq handwriting, compressed lettering or old photocopies. Even a fluent reader may need to inspect the text carefully where ink is faded or entries overlap with seals. This is particularly important for figures, dates, ID numbers, names and handwritten legal conditions.
          </p>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">For best results:</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 text-sm">
              <li>Photograph each page in bright, even light without cropping margins.</li>
              <li>Send both sides if text or stamps appear on the reverse.</li>
              <li>Avoid heavy filters that remove faint ink or alter official seals.</li>
              <li>If the scan is blurry, provide a clearer copy rather than asking the translator to guess.</li>
              <li>Send passport-name details separately, where identity matching is necessary.</li>
              <li>If a field is genuinely illegible, discuss how it should be represented in the translation.</li>
            </ul>
          </div>
          <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-950 text-xs">
            <strong>Do not alter or clean up the source document itself to make it more readable.</strong> The translation should describe what the genuine document states.
          </div>
        </section>

        {/* Section 7: Certified Urdu to Arabic */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            What does “certified Urdu-to-Arabic translation” mean?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            The word <strong>certified</strong> can refer to different document formats in different jurisdictions. A typical translation certification identifies the translator or provider and states responsibility for the translation&apos;s completeness and accuracy, but some receiving authorities impose additional requirements for the certifier, signature, stamp or physical copies.
          </p>
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm">
            <strong>Certification is not a blanket embassy endorsement.</strong> Neither an agency stamp nor a translation provider&apos;s letter independently validates the contents of the original Pakistani record. A notary, MOFA attestation or apostille—when applicable—is a separate procedure.
          </div>

          <h3 className="text-lg font-bold font-serif text-slate-900 pt-2">
            What you should confirm before paying
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Requirement</th>
                  <th className="py-3 px-4">Check before ordering</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Arabic translation of the complete Urdu source</td>
                  <td className="py-3 px-4 text-xs">Include all required pages, visible remarks and attachments.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Accuracy statement or translator declaration</td>
                  <td className="py-3 px-4 text-xs">Ask whether a signed statement with the required details can be provided.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Specific certification or translator credentials</td>
                  <td className="py-3 px-4 text-xs">Provide the destination&apos;s exact rule before work is accepted.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Paper copy / stamp / signature</td>
                  <td className="py-3 px-4 text-xs">Confirm availability and any added charge.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Government authentication / apostille</td>
                  <td className="py-3 px-4 text-xs">Check the receiving authority and official portals separately.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Deadline</td>
                  <td className="py-3 px-4 text-xs">Obtain an agreed completion date; never assume a universal same-day service.</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            For Pakistani MOFA use, there can also be <strong>format-specific requirements for translated documents</strong>. Consult the relevant <a href="https://mofa.gov.pk/consular-service-attestation-of-documents?mission=havana" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Pakistan MOFA consular instructions</a>.
          </p>
        </section>

        {/* Section 8: Charges */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Urdu-to-Arabic translation charges in Pakistan
          </h2>
          <p className="text-slate-700 leading-relaxed">
            LISAN.PK publishes <strong>PKR 1,200 per qualifying standard document/degree translation</strong> on its <Link href="/pricing" className="text-emerald-700 underline font-semibold">translation price page</Link>. <strong>This is not a flat fee for every Urdu-to-Arabic job.</strong> A handwritten Nikah Nama, multi-page affidavit, specialist legal document or custom certification request may require a different quote.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Document or requirement</th>
                  <th className="py-3 px-4">Price guidance</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Clearly printed, ordinary document qualifying under standard rate</td>
                  <td className="py-3 px-4 text-xs font-bold text-emerald-900">Published standard price: PKR 1,200; confirm Urdu→Arabic scope.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Handwritten or multi-page Nikah Nama</td>
                  <td className="py-3 px-4 text-xs font-semibold text-slate-700">Individual quote after document review.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Lengthy legal affidavit / court document</td>
                  <td className="py-3 px-4 text-xs font-semibold text-slate-700">Individual quote after document review.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Specialist academic / technical terminology</td>
                  <td className="py-3 px-4 text-xs font-semibold text-slate-700">Individual quote if outside the standard category.</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Urgent delivery, physical copy, notary or courier</td>
                  <td className="py-3 px-4 text-xs font-semibold text-slate-700">Only if available and separately confirmed in writing.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500">
            The final quotation should say exactly what is included. MOFA fees, embassy fees, government charges and third-party courier expenses are <strong>not</strong> automatically part of the translation price.
          </p>

          <div className="text-xs text-slate-600 flex flex-wrap gap-2">
            <Link href="/pricing" className="text-emerald-700 underline font-semibold">View current translation charges</Link> ·{" "}
            <Link href="/contact" className="text-emerald-700 underline font-semibold">Request a personalised quote</Link>
          </div>
        </section>

        {/* Section 9: Documents to Send */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            What documents should I send for an Urdu-to-Arabic quote?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            You can usually begin with scans or clear photographs. Send only the information needed to assess the request.
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-slate-700 text-sm">
            <li><strong>The complete Urdu source:</strong> every required page, front and back.</li>
            <li><strong>Target language:</strong> Arabic (and whether a bilingual layout is specifically required).</li>
            <li><strong>Purpose and receiving organisation:</strong> for example, a Saudi family-services office or employer.</li>
            <li><strong>Actual instructions:</strong> a checklist, email or portal requirement from the authority.</li>
            <li><strong>Relevant name spelling reference:</strong> passport or earlier accepted Arabic record if needed for identity matching.</li>
            <li><strong>Requested deliverable:</strong> digital, signed/stamped paper, particular format, or separate attestation advice.</li>
            <li><strong>Deadline and delivery location</strong>, if you have one.</li>
          </ol>
          <p className="text-xs text-slate-500">
            For confidentiality, do not send passwords, unrelated medical records or other unnecessary personal data. Use the official LISAN.PK contact channels and request confirmation before dispatching originals.
          </p>
        </section>

        {/* Section 10: Workflow */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Our translation workflow
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">Step 1 — Document and requirements review</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                You submit the source and explain the destination. The team assesses legibility, page count, legal/technical content and any documented certifier requirements.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">Step 2 — Scope and written price</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A quote identifies the service, expected deliverable, additional services (if requested) and agreed completion arrangements. <strong>No automatic fee or deadline is promised for every case.</strong>
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">Step 3 — Urdu-to-Arabic translation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The Arabic draft is prepared from the full Urdu source, keeping names, figures, legal clauses and source-document structure in view. Unclear details are flagged rather than invented.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">Step 4 — Quality checks</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Names, ID numbers, dates, monetary amounts, sections and supporting notes are checked against the source and any spelling references provided for consistency.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">Step 5 — Final delivery in the agreed format</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The final document is supplied in the agreed digital or physical format, along with any specifically agreed certification statement. The receiving authority remains responsible for determining acceptability.
              </p>
            </div>
          </div>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link href="/contact">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold h-11 px-6 rounded-xl">
                Send a document for review
              </Button>
            </Link>
            <Link href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold h-11 px-6 rounded-xl">
                WhatsApp LISAN.PK
              </Button>
            </Link>
          </div>
        </section>

        {/* Section 11: City Enquiries */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Urdu-to-Arabic translator in Lahore—and enquiries from across Pakistan
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Looking for an <strong>Urdu-Arabic translator in Lahore</strong>? You do not have to select a service solely because a website mentions your city. The important factors are the correct language direction, the legal meaning of the document, the specified certification format, and whether an agreed delivery method is available.
          </p>
          <p className="text-slate-700 leading-relaxed">
            LISAN.PK accepts online quote enquiries from customers in Lahore, Karachi, Islamabad, Rawalpindi, Faisalabad and other locations in Pakistan. <strong>Physical pickup, walk-in availability and courier timing must be confirmed for the specific order; no local branch or doorstep service is implied by this page.</strong>
          </p>
          <div className="text-xs text-slate-600 flex flex-wrap gap-2">
            <Link href="/services/translation" className="text-emerald-700 underline font-semibold">Translation service overview</Link> ·{" "}
            <Link href="/contact" className="text-emerald-700 underline font-semibold">Contact LISAN.PK</Link>
          </div>
        </section>

        {/* Section 12: Direction comparison */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Urdu to Arabic vs English to Arabic: choose the correct service
          </h2>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Your actual source document</th>
                  <th className="py-3 px-4">Requested target</th>
                  <th className="py-3 px-4">Correct service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Handwritten Urdu Nikah Nama</td>
                  <td className="py-3 px-4">Arabic</td>
                  <td className="py-3 px-4 text-xs font-bold text-emerald-900">Urdu → Arabic (this page)</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">English computerized Marriage Registration Certificate</td>
                  <td className="py-3 px-4">Arabic</td>
                  <td className="py-3 px-4 text-xs font-semibold text-slate-700">English → Arabic</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">English university degree or experience letter</td>
                  <td className="py-3 px-4">Arabic</td>
                  <td className="py-3 px-4 text-xs font-semibold text-slate-700">English → Arabic</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Arabic Saudi certificate</td>
                  <td className="py-3 px-4">English</td>
                  <td className="py-3 px-4 text-xs font-semibold text-slate-700">Arabic → English, a different service</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-bold text-slate-900">Urdu police certificate for a U.S. immigration filing</td>
                  <td className="py-3 px-4">English</td>
                  <td className="py-3 px-4 text-xs font-semibold text-slate-700">Urdu → English, if required by filing rules</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs text-slate-500">
            For U.S. immigration filings, the regulation at <strong>8 CFR § 103.2(b)(3)</strong> addresses <strong>English translations</strong> of foreign-language documents; an Urdu-to-Arabic translation is not a substitute. Always select the direction required by the destination, not simply the language you prefer.
          </p>

          <div className="text-xs text-slate-600 flex flex-wrap gap-2">
            <Link href="/translation-english-to-arabic" className="text-emerald-700 underline font-semibold">English-to-Arabic translation</Link> ·{" "}
            <Link href="/services/translation" className="text-emerald-700 underline font-semibold">Full translation services</Link>
          </div>
        </section>

        {/* Section 13: FAQs */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-700" />
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              Frequently asked questions about Urdu-to-Arabic translation
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <details 
                key={idx}
                className="group p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm open:ring-1 open:ring-emerald-700 transition-all"
              >
                <summary className="font-bold text-slate-900 cursor-pointer list-none flex items-center justify-between gap-4">
                  <span>{idx + 1}. {faq.q}</span>
                  <span className="text-emerald-700 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* Section 14: Final CTA */}
        <section className="p-8 rounded-3xl bg-emerald-900 text-white space-y-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif">
              Get an Urdu-to-Arabic translation quotation
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              Whether you need an Urdu Nikah Nama translated into Arabic or a specialist Urdu legal record prepared for a Gulf recipient, begin with the <strong>real source document and the recipient&apos;s actual requirements</strong>. That is the most reliable way to confirm the correct language direction, scope, certification and price.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-12 px-6 rounded-xl shadow-lg transition-all">
                Get Your Urdu-to-Arabic Quote
              </Button>
            </Link>
            <Link href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 px-6 rounded-xl shadow-lg transition-all flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Message the documents on WhatsApp
              </Button>
            </Link>
          </div>

          <p className="text-xs text-emerald-200/80 border-t border-emerald-800/60 pt-4">
            *LISAN.PK provides independent translation services. It is not the Ministry of Foreign Affairs, an embassy, an immigration authority or a government certification office. No visa, scholarship, legalisation or document-acceptance outcome is guaranteed.
          </p>
        </section>

        {/* Section 15: Sources & Notes */}
        <footer className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold font-serif text-slate-900">
            Official references and service transparency
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
            <li>
              <a href="https://ratification.mofa.gov.sa/Ratification/Create" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                Saudi Ministry of Foreign Affairs — Document Ratification Application and Conditions
              </a>.
            </li>
            <li>
              <a href="https://mofa.gov.pk/consular-service-attestation-of-documents?mission=havana" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                Pakistan Ministry of Foreign Affairs — Consular Services and Attestation Requirements
              </a>.
            </li>
            <li>
              <a href="https://attestation.mofa.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                Pakistan Ministry of Foreign Affairs — Document Attestation Portal
              </a>.
            </li>
            <li>
              <a href="https://www.law.cornell.edu/cfr/text/8/103.2" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                8 CFR § 103.2(b)(3)
              </a> (U.S. immigration translations regulation).
            </li>
            <li>
              <a href="https://www.lisan.pk/blog/saudi-scholarship-application-cost-pakistan" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                LISAN.PK — Current Published Document Translation Prices
              </a>.
            </li>
          </ul>
          <p className="text-xs text-slate-400 italic pt-2">
            Editorial note: Translation-capacity statements, professional registrations, customer case examples, branch addresses, service-specific turnaround and sample images may be published only after business verification. This page makes no claim of government approval or a universal embassy acceptance guarantee.
          </p>
        </footer>
      </article>
    </main>
  )
}
