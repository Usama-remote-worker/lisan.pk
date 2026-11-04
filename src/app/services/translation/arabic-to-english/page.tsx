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
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Arabic to English Translation in Pakistan | Certified Documents | LISAN.PK",
  description: "Get a quote for Arabic to English certified document translation in Pakistan: Saudi Iqama, marriage and birth records, degrees, legal documents and contracts.",
  alternates: {
    canonical: "https://www.lisan.pk/services/translation/arabic-to-english",
  },
  openGraph: {
    title: "Arabic to English Translation in Pakistan | Certified Documents | LISAN.PK",
    description: "Get a quote for Arabic to English certified document translation in Pakistan: Saudi Iqama, marriage and birth records, degrees, legal documents and contracts.",
    url: "https://www.lisan.pk/services/translation/arabic-to-english",
    type: "website",
  }
}

const serviceFaqs = [
  {
    "q": "Do you translate Saudi Iqama from Arabic to English?",
    "a": "We accept quotation requests for Saudi Iqama Arabic-to-English translation. Send clear images of all relevant sides and explain where the translation will be submitted."
  },
  {
    "q": "Can Arabic birth or marriage certificates be translated into English?",
    "a": "Yes, they can be assessed for Arabic→English translation. Provide the full source and check whether the recipient requires a certified translation, the original, or both."
  },
  {
    "q": "Is a certified Arabic-to-English translation accepted by USCIS?",
    "a": "USCIS requires a complete English translation with the translator's certification of accuracy, completeness and competence under 8 CFR §103.2(b)(3). Each filing must meet its own evidence rules; no provider can guarantee acceptance."
  },
  {
    "q": "Can I use the same Arabic translation for a UK visa?",
    "a": "Not automatically. Check the requirements for the relevant UK route and confirm the certification details before ordering."
  },
  {
    "q": "What is the cost of Arabic-to-English document translation in Pakistan?",
    "a": "Costs vary by document length, legibility, complexity and certification needs. Get an itemised quotation after sharing the complete source. See the pricing page (/pricing) for any applicable published rates."
  },
  {
    "q": "Do I need an apostille on an Arabic-to-English translation?",
    "a": "Not routinely. The answer depends on the document's country of issue, destination, receiving authority and whether it requires separate authentication of the translation."
  },
  {
    "q": "Can you translate a handwritten Arabic legal document?",
    "a": "We can review a scan and confirm feasibility. Illegible handwriting or unclear stamps may require a better copy or a clarification from the issuing office."
  },
  {
    "q": "Will the Arabic original and English translation have the same layout?",
    "a": "We aim to preserve logical tables, headings, fields and references to stamps, within the agreed format. Pixel-identical reproduction is not always possible or appropriate."
  },
  {
    "q": "Can you translate from Arabic to English for study abroad?",
    "a": "Yes, you can request a quotation for academic records. Confirm the receiving university's language, certification and academic-evaluation requirements."
  },
  {
    "q": "Can you translate Arabic company documents?",
    "a": "You can request a quotation for contracts, registrations, experience letters and other readable business records. Specialist subject-matter review may affect scope."
  },
  {
    "q": "How long does Arabic-to-English translation take?",
    "a": "Timing is confirmed after reviewing the document, certification requirements and current capacity. Do not rely on a universal same-day promise."
  },
  {
    "q": "Do you need my original passport or original Iqama?",
    "a": "For an initial translation quotation, a clear copy of the relevant document and instructions is usually enough. Do not send original documents or unnecessary personal information unless an agreed service genuinely requires them."
  },
  {
    "q": "Can a machine translation replace a certified translation?",
    "a": "A generic automated translation does not provide the independent certification and accountability some receiving authorities require. If certification is specified, use a suitable human-reviewed process and the correct declaration."
  },
  {
    "q": "Do you provide both Arabic-to-English and Arabic-to-Urdu translation?",
    "a": "These are separate services. Tell us the requested target language so we can quote the correct job."
  }
]

const documentsWeTranslate = [
  { doc: "Saudi Iqama / residence permit", use: "Identity or residence history, employment, dependent records", care: "Arabic and Latin name spellings, document number, dates, sponsor/employer information if present" },
  { doc: "Arabic birth certificate", use: "Family or immigration evidence", care: "Parents' names, place of birth, date, registration numbers, issuing authority" },
  { doc: "Arabic marriage certificate or marriage contract", use: "Spousal immigration, personal-status matters", care: "Parties' names, witnesses, marriage dates, contractual clauses and stamps" },
  { doc: "Saudi or Gulf degree and academic transcript", use: "Admissions, professional licensing, job applications", care: "Institution, qualification, course names, grades, dates, grading scale when printed" },
  { doc: "Employment certificate / experience letter", use: "Job and credential applications", care: "Role, duration, employer, signatures, official seals" },
  { doc: "Police / clearance certificate", use: "Screening or administrative files", care: "Identity details, issuing body, date, exact scope of clearance statement" },
  { doc: "Arabic commercial registration or licence", use: "Vendor screening and business contracts", care: "Business name, commercial registration number, activity description and validity" },
  { doc: "Arabic contract, affidavit or court record", use: "Legal advice, compliance or submission", care: "Clauses, defined terms, legal references, margins and annexes" },
  { doc: "Medical or insurance record in Arabic", use: "Personal records or submission where English is required", care: "Clinical terminology, measurements, findings, units and attachments" },
  { doc: "Certificate with Arabic stamps and annotations", use: "Complete English document set", care: "Stamp text, handwritten notes, signatures and the identity of the issuing authority" }
]

const certifiedComponents = [
  { comp: "Arabic original", does: "Shows the issued source document", replaces: "No" },
  { comp: "English translation", does: "Renders the source content in English", replaces: "This is the actual translation" },
  { comp: "Translator's certification statement", does: "States accuracy/competence in a verifiable format", replaces: "It accompanies, rather than replaces, the translation" },
  { comp: "Notarial acknowledgment (if requested)", does: "Addresses specified signature or notarial formalities", replaces: "No" },
  { comp: "Apostille / government legalisation (if required)", does: "Authenticates specified official signature/seal through the applicable route", replaces: "No" }
]

export default function ArabicToEnglishTranslationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Arabic to English Certified Translation Services in Pakistan",
    "serviceType": "Certified Document Translation",
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
    "description": "Get a quote for Arabic to English certified document translation in Pakistan: Saudi Iqama, marriage and birth records, degrees, legal documents and contracts.",
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
        "name": "Arabic to English",
        "item": "https://www.lisan.pk/services/translation/arabic-to-english"
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
            <span className="text-slate-300">Arabic to English</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 mb-5">
            <Languages className="w-3.5 h-3.5 text-emerald-400" />
            Directional Document Service: Arabic → English
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight text-white mb-6 leading-[1.15]">
            Arabic to English Certified Translation Services in Pakistan
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
            <strong>Need an Arabic document translated into English for a visa, university, immigration file or business transaction?</strong> LISAN.PK provides quotations for <strong>Arabic-to-English document translation</strong> covering Saudi-issued records, civil certificates, academic papers, employment documents and contracts. We review the complete document, the receiving authority&apos;s requirements and any requested certification format before confirming the work.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-white hover:bg-slate-100 text-emerald-950 font-bold h-12 px-6 rounded-xl shadow-md transition-all">
                Request an Arabic-to-English Translation Quote
              </Button>
            </Link>
            <a href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 px-6 rounded-xl shadow-md transition-all flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                Send Your Document on WhatsApp
              </Button>
            </a>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 italic mt-6 border-t border-slate-700/80 pt-4">
            *Arabic-to-English is a specific language direction. If your document is in English and the recipient wants Arabic, use our <Link href="/translation-english-to-arabic" className="text-emerald-400 underline font-medium">English-to-Arabic service</Link> instead.
          </p>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* SECTION 1: DOCUMENTS TABLE */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            Which Arabic documents can be translated into English?
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            The right approach depends on the issuing authority, the language actually printed on the document, and whether the receiving organisation requires a <strong>full certified translation</strong> or only an explanation of selected fields.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                  <th scope="col" className="p-3.5 sm:p-4 font-bold w-1/3">Arabic source document</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold w-1/3">Common English-language use</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Information requiring particular care</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {documentsWeTranslate.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">{row.doc}</td>
                    <td className="p-3.5 sm:p-4 text-slate-700 align-top leading-relaxed">{row.use}</td>
                    <td className="p-3.5 sm:p-4 text-slate-600 align-top text-xs sm:text-sm leading-relaxed">{row.care}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong>If a document is bilingual Arabic–English</strong>, check whether an official English section is already accepted by the recipient. Ordering a translation of text that already exists in the required language may be unnecessary.
          </div>
        </section>

        {/* SECTION 2: SAUDI IQAMA */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Saudi Iqama Arabic-to-English translation
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            The Saudi <strong>Iqama</strong> is a residence identification document. Applicants sometimes need English rendering of Arabic entries for a bank, overseas employer, immigration file or other administrative request. A translation is <strong>not</strong> a replacement for the original Iqama or independent proof of immigration status.
          </p>

          <p className="font-semibold text-slate-900 text-sm sm:text-base">
            A good Arabic→English Iqama translation should preserve:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed text-sm sm:text-base">
            <li>The holder&apos;s full Arabic name as written, without silently altering uncertain spellings.</li>
            <li>Any Latin name already printed on the card, for comparison.</li>
            <li>Iqama/residence number and other identifiers exactly as visible.</li>
            <li>Dates and their original calendar labels, where present.</li>
            <li>Occupation, employer or sponsor information when it appears.</li>
            <li>Notes, restrictions, reverse-side text, stamps and additional fields.</li>
          </ul>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">What if the English spelling differs from my passport?</h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              Tell us <strong>before translation</strong> and provide the preferred passport spelling <strong>only when necessary for consistent identity references</strong>. The translated document must not falsify the Arabic source; meaningful differences should be handled transparently, for example with a translator&apos;s note if appropriate and accepted by the recipient.
            </p>
          </div>

          <div>
            <Link href="/contact">
              <Button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold h-11 px-5 rounded-xl shadow-sm transition-all">
                Request an Iqama Translation Quote
              </Button>
            </Link>
          </div>
        </section>

        {/* SECTION 3: VISA & IMMIGRATION */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            Arabic-to-English translation for visa and immigration files
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Requirements differ between <strong>UKVI</strong>, <strong>USCIS</strong> and other receiving bodies. A translation that meets one authority&apos;s rules is <strong>not automatically certified for all authorities worldwide</strong>.
          </p>

          <div className="space-y-6">
            {/* UKVI */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                United Kingdom: documents not in English or Welsh
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                GOV.UK&apos;s <a href="https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">visitor supporting-document guidance</a> says documents not in English or Welsh must be accompanied by a full translation that can be independently verified. Guidance identifies details such as a statement that the translation is accurate, the translation date and the translator&apos;s or company official&apos;s identification and contact information. <strong>Check your specific visa category</strong>, because its evidence requirements may differ.
              </p>

              <p className="font-semibold text-slate-900 text-sm">For UK use, tell us:</p>
              <ol className="list-decimal pl-5 space-y-1 text-slate-700 text-sm leading-relaxed">
                <li>The visa category and receiving organisation.</li>
                <li>Whether a full certified translation is specified.</li>
                <li>Whether the authority has asked for any particular certification or additional originals.</li>
              </ol>

              <div className="pt-2">
                <Link href="/services/ukvi-certified-translation" className="text-emerald-700 hover:text-emerald-800 underline font-semibold text-sm">
                  Read LISAN.PK&apos;s UKVI translation service information →
                </Link>
              </div>
            </div>

            {/* USCIS */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                United States: USCIS foreign-language document translations
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Under <a href="https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-103/subpart-A/section-103.2" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">8 CFR §103.2(b)(3)</a>, a foreign-language document submitted to USCIS must be accompanied by a <strong>full English translation</strong> certified as complete and accurate, together with certification that the translator is competent to translate from the source language into English. This is a <strong>translation requirement</strong>, not an automatic demand for apostille or notary stamping on every USCIS filing.
              </p>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                If you require a translation for USCIS, provide the complete Arabic document, including any back page or stamp, and tell us the form or case type. We can review the requested certification format before preparing a quotation.
              </p>

              <div className="pt-2">
                <Link href="/services/uscis-certified-translation/requirements" className="text-emerald-700 hover:text-emerald-800 underline font-semibold text-sm">
                  USCIS translation requirements guide →
                </Link>
              </div>
            </div>

            {/* Canada / Aus */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                Canada, Australia, universities and private employers
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                There is no single certification statement that can be assumed sufficient for every receiving authority. Some institutions specify translator accreditation, sworn-translation requirements, format or certified copies. <strong>Ask the receiving office for its current checklist first.</strong>
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 4: DEGREE & ACADEMIC */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Degree, transcript and academic-record translation from Arabic to English
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Arabic academic documents may include abbreviations, non-Latin institution names, Hijri dates, Arabic numerals or local grading categories. A faithful translation should retain the source meaning and not claim unverified educational equivalence.
          </p>

          <p className="font-semibold text-slate-900 text-sm sm:text-base">
            We can assess quotations for documents such as:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <li>University degrees and diplomas issued in Arabic.</li>
            <li>Transcripts with Arabic course names and grading labels.</li>
            <li>School certificates and training records.</li>
            <li>Academic letters, enrolment confirmations and employment-training certificates.</li>
          </ul>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900">
            <strong>Translation is not credential evaluation.</strong> Only the appropriate recognition or evaluation body can determine the qualification&apos;s academic or professional equivalence, if required.
          </div>
        </section>

        {/* SECTION 5: LEGAL CONTRACTS */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Arabic legal contracts and official records: accuracy before speed
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Legal Arabic often contains formulaic expressions, nested obligations and defined terms. A <strong>literal word-for-word rendering</strong> can distort an obligation, while an overly free summary may omit legally relevant clauses. The translation should preserve the document&apos;s actual substance, including:
          </p>

          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 leading-relaxed text-sm sm:text-base">
            <li>Parties, identification numbers and addresses.</li>
            <li>Dates, monetary amounts, contract periods and payment terms.</li>
            <li>Conditions, exceptions, prohibitions and termination clauses.</li>
            <li>Annexes, footnotes, stamps, handwritten changes and signatures.</li>
            <li>Terminology whose English equivalent depends on the document&apos;s jurisdiction.</li>
          </ul>

          <p className="text-xs sm:text-sm text-slate-600 italic">
            A translator can clarify ambiguous source wording but must not act as a lawyer or silently repair a defective document. For legal decisions, obtain advice from a qualified legal professional in the relevant jurisdiction.
          </p>
        </section>

        {/* SECTION 6: HOW LISAN.PK HANDLES REQUESTS */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            How LISAN.PK handles Arabic-to-English document requests
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 1</span>
              <h3 className="font-bold text-slate-900 text-base">Share the complete document</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Upload a readable PDF or photographs through our contact options; include every page and the back side where relevant.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 2</span>
              <h3 className="font-bold text-slate-900 text-base">State the destination and purpose</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Tell us the receiving institution, country, required language and any written certification instructions.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 3</span>
              <h3 className="font-bold text-slate-900 text-base">Receive a scope and price quotation</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We review legibility, length, tables, stamps, special terminology and the agreed delivery format.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 4</span>
              <h3 className="font-bold text-slate-900 text-base">Translation and consistency review</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The required document content is translated into English, with careful comparison of names, dates, identifiers and numerical information against the source.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2 md:col-span-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 5</span>
              <h3 className="font-bold text-slate-900 text-base">Certification and delivery as agreed</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We confirm whether the job requires a signed translator&apos;s statement, a stamped copy, digital output, physical delivery or another approved format. Any extra notarisation or government authentication must be separately verified.
              </p>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 italic">
            No guaranteed processing time is offered before inspecting the document and agreeing the work. If a scan is illegible, we may ask for a clearer image rather than invent text.
          </p>
        </section>

        {/* SECTION 7: WHAT DOES CERTIFIED MEAN */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            What does “certified Arabic-to-English translation” mean?
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            A <strong>certified translation</strong> normally combines the translated text with a signed certification or declaration identifying the translator or translation provider and attesting to accuracy and completeness <strong>to the standard required by the receiving organisation</strong>. Certification is not identical to notarisation, apostille or consular legalisation.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                  <th scope="col" className="p-3.5 sm:p-4 font-bold w-1/3">Document component</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold w-1/3">What it does</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Does it replace translation?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {certifiedComponents.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">{row.comp}</td>
                    <td className="p-3.5 sm:p-4 text-slate-700 align-top leading-relaxed">{row.does}</td>
                    <td className="p-3.5 sm:p-4 text-slate-800 align-top font-medium text-xs sm:text-sm">{row.replaces}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-2">
            <p>
              <strong>We do not claim blanket “embassy approved”, “100% acceptance” or government-issued translator licensing.</strong> The receiving authority determines whether the provided translation and supporting documents satisfy its instructions.
            </p>
            <p>
              Learn more: <Link href="/guides/certified-translation-vs-apostille-pakistan" className="text-emerald-700 underline font-semibold">Certified Translation vs Notarization vs Apostille Guide</Link>.
            </p>
          </div>
        </section>

        {/* SECTION 8: CHARGES */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Arabic-to-English translation charges in Pakistan
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            The price depends on the <strong>document itself</strong>, not simply the language name. A one-page clearly printed certificate and a handwritten, multi-page legal record require different work.
          </p>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            <strong>Typical quotation factors:</strong> page count, word count, handwritten content, complexity, specialist terminology, the number of stamps, certification requirements, urgency if feasible and physical dispatch needs.
          </p>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700">
            We do <strong>not</strong> publish a fixed Arabic→English price for every document. Send the complete source for an accurate quote, or compare applicable published rates on our <Link href="/pricing" className="text-emerald-700 underline font-semibold">translation pricing page</Link>. Any government, courier or notarial charges should be quoted separately where relevant.
          </div>

          <div>
            <Link href="/contact">
              <Button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold h-11 px-5 rounded-xl shadow-sm transition-all">
                Get a Document-Specific Quote
              </Button>
            </Link>
          </div>
        </section>

        {/* SECTION 9: CHOOSE SERVICE */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            Arabic-to-English or Arabic-to-Urdu: which should you choose?
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">You have</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">You need</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Best service</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Arabic Iqama or certificate</td>
                  <td className="p-3.5 sm:p-4 text-slate-700">An <strong>English</strong> version for UK, US or English-language use</td>
                  <td className="p-3.5 sm:p-4 text-emerald-800 font-bold">Arabic → English (This page)</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Arabic certificate or contract</td>
                  <td className="p-3.5 sm:p-4 text-slate-700">A <strong>Urdu</strong> version for a Pakistani reader or organisation</td>
                  <td className="p-3.5 sm:p-4">
                    <Link href="/services/translation/arabic-to-urdu" className="text-emerald-700 underline font-semibold">
                      Arabic → Urdu
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">English degree or certificate</td>
                  <td className="p-3.5 sm:p-4 text-slate-700">Arabic for a Saudi/Gulf recipient</td>
                  <td className="p-3.5 sm:p-4">
                    <Link href="/translation-english-to-arabic" className="text-emerald-700 underline font-semibold">
                      English → Arabic
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900">Urdu Nikah Nama</td>
                  <td className="p-3.5 sm:p-4 text-slate-700">Arabic for a specified receiving authority</td>
                  <td className="p-3.5 sm:p-4">
                    <Link href="/services/translation/urdu-to-arabic" className="text-emerald-700 underline font-semibold">
                      Urdu → Arabic
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 italic">
            The translation direction is determined by <strong>the language of the original and the language required by the recipient</strong>. Do not pay for a reverse-direction service.
          </p>
        </section>

        {/* SECTION 10: FAQS */}
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

        {/* SECTION 11: REQUEST QUOTE CTA */}
        <section className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
            Request Arabic-to-English translation
          </h2>
          <p className="text-emerald-100 leading-relaxed text-base sm:text-lg">
            Send the complete Arabic document, <strong>where it was issued</strong>, <strong>where it will be submitted</strong>, and the recipient&apos;s translation instructions. We will identify the appropriate scope and return a quotation subject to review and availability.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-white hover:bg-slate-100 text-emerald-950 font-bold h-12 px-6 rounded-xl shadow-md transition-all">
                Request Your Translation Quote
              </Button>
            </Link>
            <a href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 px-6 rounded-xl shadow-md transition-all flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                WhatsApp Document Enquiry
              </Button>
            </a>
            <Link href="/pricing">
              <Button variant="outline" className="border-emerald-500/80 text-white hover:bg-emerald-800/40 font-semibold h-12 px-6 rounded-xl">
                See Translation Pricing
              </Button>
            </Link>
          </div>

          <p className="text-xs text-emerald-200/80 border-t border-emerald-800/60 pt-4">
            *Privacy: Please avoid sending unrelated identity documents or sensitive records until needed for the agreed service. See our <Link href="/privacy-policy" className="underline hover:text-white">Privacy Policy</Link>.
          </p>
        </section>

        {/* SECTION 12: OFFICIAL SOURCES */}
        <footer className="border-t border-slate-200 pt-8 space-y-4 text-xs sm:text-sm text-slate-600">
          <h2 className="text-lg font-bold font-serif text-slate-900">Official guidance and source notes</h2>
          <ul className="list-disc pl-5 space-y-1.5 leading-relaxed">
            <li><strong>USCIS / 8 CFR §103.2(b)(3), full English translation and translator certification:</strong> <a href="https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-103/subpart-A/section-103.2" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">ecfr.gov 8 CFR § 103.2</a></li>
            <li><strong>GOV.UK, visitor supporting documents and verified translations:</strong> <a href="https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">gov.uk visitor visa documents</a></li>
            <li><strong>GOV.UK, family-visa documents:</strong> <a href="https://www.gov.uk/uk-family-visa/provide-information" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">gov.uk family visa guidance</a></li>
            <li><strong>HCCH Apostille Convention and official document authentication:</strong> <a href="https://www.hcch.net/en/instruments/conventions/full-text/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">hcch.net Convention text</a></li>
          </ul>

          <p className="text-xs text-slate-400 italic pt-3 border-t border-slate-200">
            The government sources describe destination procedures; they do not endorse LISAN.PK. Requirements vary by authority and may change.
          </p>
        </footer>

      </div>
    </div>
  )
}
