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
  MessageSquare
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "English to Arabic Translation in Pakistan | Certified Documents | LISAN.PK",
  description: "Get a quote for English to Arabic document translation in Pakistan. Degrees, transcripts, contracts and certificates translated for Saudi Arabia, UAE and other destinations.",
  alternates: {
    canonical: "https://www.lisan.pk/translation-english-to-arabic",
  },
  openGraph: {
    title: "English to Arabic Translation in Pakistan | Certified Documents | LISAN.PK",
    description: "Get a quote for English to Arabic document translation in Pakistan. Degrees, transcripts, contracts and certificates translated for Saudi Arabia, UAE and other destinations.",
    url: "https://www.lisan.pk/translation-english-to-arabic",
    type: "website",
  }
}

const faqs = [
  {
    "q": "Where can I get English-to-Arabic document translation in Pakistan?",
    "a": "You can request a quotation from LISAN.PK online by submitting your English document and the destination organisation's requirements. Confirm delivery format before ordering."
  },
  {
    "q": "Can you translate a university degree and transcript into Arabic?",
    "a": "Yes, you can request English-to-Arabic academic document translation. Send each required record and tell us whether the receiving university also asks for an HEC e-Attestation Certificate translation."
  },
  {
    "q": "Is an Arabic translation mandatory for a Saudi university?",
    "a": "Not universally. Check the exact institution/program instructions. Many decisions depend on the applicant's stage and the language of the original record."
  },
  {
    "q": "Is a signed certified translation the same as Saudi Embassy attestation?",
    "a": "No. Translation certification and embassy/MOFA authentication serve different purposes. A translator cannot guarantee a foreign authority's approval."
  },
  {
    "q": "Can I use a Google Translate output for an official application?",
    "a": "Only if the receiving authority expressly accepts that format. Where a certified translation is requested, a machine-generated text without the required certification may not satisfy the rule."
  },
  {
    "q": "What if my English document contains an Urdu stamp?",
    "a": "Tell us before ordering. The recipient may require that stamp's content translated too, and legibility affects the scope."
  },
  {
    "q": "Can you translate an HEC e-Attestation Certificate into Arabic?",
    "a": "You can request a quotation for translation of the genuine HEC certificate, if your receiving organisation actually requires it. Translation does not modify or replace HEC's issued file."
  },
  {
    "q": "Do I need MOFA attestation before English-to-Arabic translation?",
    "a": "The correct order depends on the destination's rules and whether annotations or authentication statements must appear in the translated output. Verify the receiving body's requirements first."
  },
  {
    "q": "Do you provide Urdu-to-Arabic translation here as well?",
    "a": "This page is specifically for English → Arabic. For an Urdu original, contact us with the correct source language or start from the Arabic translation services hub (/services/translation/arabic-translation)."
  },
  {
    "q": "How much does a certified English-to-Arabic translation cost?",
    "a": "We provide a document-specific quotation based on content, length, certification and delivery. Government attestation fees, if relevant, are separate."
  },
  {
    "q": "How soon can my translation be completed?",
    "a": "The feasible turnaround is confirmed in your written quotation; it varies with the material, service scope and available capacity. We do not promise every document will be ready the same day."
  },
  {
    "q": "Can I get a signed PDF rather than a hard copy?",
    "a": "Ask what your receiving organisation accepts and specify your format in the quotation request. Availability of certification and physical copies must be confirmed for your order."
  },
  {
    "q": "Will you guarantee UAE or Saudi embassy acceptance?",
    "a": "No translation provider can responsibly guarantee a decision by every foreign authority. We can prepare the agreed translation; the receiving institution determines acceptance."
  },
  {
    "q": "What if the name on my degree differs from my passport?",
    "a": "Flag the mismatch before translation. A translator must accurately represent the source and should not silently alter official names or credential details."
  }
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/translation-english-to-arabic/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.lisan.pk/services" },
        { "@type": "ListItem", "position": 3, "name": "English to Arabic Translation", "item": "https://www.lisan.pk/translation-english-to-arabic" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.lisan.pk/translation-english-to-arabic/#service",
      "name": "English to Arabic Translation Services in Pakistan",
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
      "description": "Professional English-to-Arabic document translation for academic degrees, transcripts, civil records, commercial and legal documents for Saudi Arabia, UAE, Qatar and Gulf destinations."
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/translation-english-to-arabic/#faq",
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

export default function EnglishToArabicPage() {
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
            <span className="text-emerald-100 font-semibold truncate">English to Arabic Translation</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-900/80 text-emerald-300 border border-emerald-700/60">
            <Languages className="w-3.5 h-3.5" />
            Directional Document Service: English → Arabic
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight leading-[1.15] text-white">
            English to Arabic Translation Services in Pakistan
          </h1>

          <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-3xl">
            <strong>Need to translate an English document into Arabic for Saudi Arabia, the UAE, Qatar or another destination?</strong> LISAN.PK provides <strong>English-to-Arabic document translation</strong> for academic, personal, legal and business records. Tell us what the receiving organisation requires; we will review the English source document, confirm the Arabic deliverable you need and provide a quotation before work begins.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/contact" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-13 px-8 text-base rounded-xl shadow-lg transition-all">
                Request an English-to-Arabic Quote
              </Button>
            </Link>
            <Link href="https://wa.me/923288155866?text=Hi%20LISAN.PK,%20I%20need%20a%20quote%20for%20English%20to%20Arabic%20document%20translation." target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button className="w-full sm:w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-13 px-8 text-base rounded-xl shadow-lg shadow-[#25D366]/20 transition-all flex items-center justify-center gap-2">
                <MessageSquare className="w-4 h-4" />
                WhatsApp: +92 328 8155866
              </Button>
            </Link>
            <Link href="tel:+923288155866" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto border-emerald-700/80 hover:bg-emerald-900 text-emerald-100 bg-transparent h-13 px-6 text-base font-semibold rounded-xl transition-all flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call Support
              </Button>
            </Link>
          </div>

          <p className="text-xs text-emerald-200/70 italic pt-2 max-w-2xl">
            *Translation is a language service. A certified translation, notarisation, HEC/MOFA authentication, and apostille are different procedures; their requirements vary by document and destination. We do not promise blanket embassy approval.
          </p>
        </div>
      </section>

      {/* Main Content Article */}
      <article className="container mx-auto px-4 max-w-4xl py-12 sm:py-16 space-y-12">
        {/* Section 1: Quality standard & Common English documents */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            English-to-Arabic translation for documents—not machine-generated wording
          </h2>
          <p className="text-slate-700 leading-relaxed">
            An English-to-Arabic document translation must preserve more than the rough meaning of each sentence. Names, dates, qualifications, legal obligations, numerical amounts, institutions and supporting notes all matter. A small error in a degree title, marriage record or company document can create inconsistencies when the translation is compared with the original.
          </p>
          <p className="text-slate-700 leading-relaxed">
            For document requests, LISAN.PK focuses on the <strong>purpose of use</strong>, the <strong>complete source text</strong> and the <strong>required submission format</strong>. Our review starts with the receiving authority&apos;s instructions rather than an assumption that every embassy or university wants the same certificate, stamp or language.
          </p>

          <h3 className="text-xl font-bold font-serif text-slate-900 pt-2">
            Common English documents we translate into Arabic
          </h3>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Document type</th>
                  <th className="py-3 px-4">Typical purpose</th>
                  <th className="py-3 px-4">What needs careful checking</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">University degree</td>
                  <td className="py-3 px-4">Saudi/GCC employment or admissions</td>
                  <td className="py-3 px-4">Degree title, university, graduation date, registration data</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Academic transcript</td>
                  <td className="py-3 px-4">University applications or licensing</td>
                  <td className="py-3 px-4">Course names, credits, GPA, grading terminology</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">HEC e-Attestation Certificate</td>
                  <td className="py-3 px-4">Where requested with degree records</td>
                  <td className="py-3 px-4">Issuing authority, document links and verification wording</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Birth or marriage certificate</td>
                  <td className="py-3 px-4">Family, civil or residency procedures</td>
                  <td className="py-3 px-4">Names, dates, relationships and civil registration terms</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Police character certificate</td>
                  <td className="py-3 px-4">Employment or visa-related submissions</td>
                  <td className="py-3 px-4">Issuer, identifying details, conditions, issue date</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Employment/experience certificate</td>
                  <td className="py-3 px-4">HR, professional accreditation</td>
                  <td className="py-3 px-4">Job designation, tenure, employer and signatory</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Commercial registration / company documents</td>
                  <td className="py-3 px-4">Saudi or GCC business use</td>
                  <td className="py-3 px-4">Entity names, registration numbers, activities, authorised persons</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Contracts, letters and declarations</td>
                  <td className="py-3 px-4">Legal and administrative use</td>
                  <td className="py-3 px-4">Definitions, duties, figures, clauses, signatures and annexes</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-950 text-xs sm:text-sm leading-relaxed">
            <strong>Have an Urdu-language source?</strong> <Link href="/services/translation/urdu-to-arabic" className="text-emerald-800 underline font-semibold">Urdu-to-Arabic translation</Link> is a distinct direction and may involve different transliteration checks. Do not upload an Urdu original expecting this English-to-Arabic service page to cover it automatically. <Link href="/services/translation/arabic-translation" className="text-emerald-800 underline font-semibold">Explore our Arabic Translation Services hub</Link> or <Link href="/contact" className="text-emerald-800 underline font-semibold">contact us</Link> with the source language clearly stated.
          </div>
        </section>

        {/* Section 2: Degree and Transcript Translation */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            English-to-Arabic degree and transcript translation
          </h2>
          <p className="text-slate-700 leading-relaxed">
            For academic documents, the most common difficulty is <strong>consistency across the full document set</strong>. Your English degree, transcript, HEC certificate, passport and university application might spell a name or describe a qualification differently.
          </p>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Our quotation review identifies the exact files requested:</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 text-sm">
              <li>Degree certificate and transcript.</li>
              <li>Provisional certificate, when relevant.</li>
              <li>English HEC e-Attestation Certificate, <strong>if the destination requires its translation</strong>.</li>
              <li>Supporting accreditation/registration records for regulated professions.</li>
              <li>Destination-specific translation certification instructions.</li>
            </ul>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            <strong>Not every Saudi university requires an Arabic translation of an English degree.</strong> Some institutions accept English documents, and the rule can differ between the initial application and later enrollment or visa stages. Confirm your program&apos;s instructions before ordering extras.
          </p>
          <p className="text-sm text-slate-600 leading-relaxed">
            HEC now uses a fully online, paperless degree-attestation process. If you need the final HEC e-Certificate translated too, obtain the genuine certificate first. <Link href="/guides/hec-online-degree-attestation" className="text-emerald-700 underline font-semibold">Read the 2026 HEC Online Attestation Guide</Link>.
          </p>
        </section>

        {/* Section 3: Saudi Arabia */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            English-to-Arabic translation for Saudi Arabia
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Saudi Arabia is a common destination for educational, employment, family and business documents. However, there is <strong>no single translation rule for every Saudi visa or university</strong>.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">University admission or scholarship</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Check the exact university/program checklist. If it requires Arabic translations of English academic documents, provide the specified records and any instructions on certification or official authentication. Do not assume that Arabic translation is compulsory merely because the university is in Saudi Arabia.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Employment and professional matters</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                An employer or regulator may ask for Arabic versions of degrees, experience letters, professional licences or company-issued certificates. Requirements differ by occupation and receiving organisation. A regulated profession may require additional recognition or licensing independent of translation.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Family or civil documents</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                If the original source is a Pakistani <strong>English-language Marriage Registration Certificate (MRC)</strong>, the requested Arabic translation may be different from a full Urdu <strong>Nikah Nama</strong> contract translation. Ask the receiving authority which document it expects. <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 underline font-semibold">Nikah Nama and MRC translation services</Link>.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Authentication and apostille are separate</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Pakistan&apos;s MOFA currently lists Saudi Arabia among apostille-accepting destinations for eligible documents. Nonetheless, document-category rules and the receiving organisation&apos;s explicit requirements still matter. <strong>Translation is not a substitute for an apostille</strong>, and an apostille on an original does not automatically authenticate a separate translation. <Link href="/blog/saudi-embassy-attested-document-translation-process-pakistan" className="text-emerald-700 underline font-semibold">Saudi Embassy Attestation vs Apostille</Link> · <Link href="/guides/apostille-pakistan" className="text-emerald-700 underline font-semibold">Apostille in Pakistan</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: UAE, Qatar & Gulf Organisations */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            English-to-Arabic translation for the UAE, Qatar and Gulf organisations
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Gulf destinations do <strong>not</strong> share one universal translation-and-attestation system. For example, the UAE Ministry of Foreign Affairs publishes a separate official digital document-attestation route for Pakistan-issued records. That process can involve the original physical document even when the final UAE certificate is delivered digitally. [<a href="https://www.mofa.gov.ae/en/Missions/Islamabad/Services/Services-for-Individuals/Attestation-Information" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">UAE MoFA, Embassy in Islamabad</a>].
          </p>

          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">Before ordering a translation for any destination, ask:</h3>
            <ol className="list-decimal pl-5 space-y-1 text-slate-700 text-sm">
              <li>Is <strong>Arabic</strong> required or is the English original accepted?</li>
              <li>Does the organisation need the <strong>whole document</strong>, including reverse-side notes and annotations?</li>
              <li>Must the translation carry a <strong>translator certification statement</strong>, stamp or signature?</li>
              <li>Is <strong>notarisation, MOFA authentication or apostille</strong> separately required?</li>
              <li>Are scanned certified PDFs accepted, or is a signed physical copy required?</li>
            </ol>
          </div>
          <p className="text-xs text-slate-500 italic">
            If you have an email or checklist from the receiving organisation, send it with the document. It is more useful than assuming all foreign missions accept the same format.
          </p>
        </section>

        {/* Section 5: Meaning of Certified Translation */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            What does “certified English-to-Arabic translation” mean?
          </h2>
          <p className="text-slate-700 leading-relaxed">
            A certified translation is typically supplied with a signed or otherwise authenticated statement describing the translator&apos;s or translation provider&apos;s responsibility for the translation. <strong>It is not the same as a government-issued approval of the underlying document.</strong> Different organisations can impose their own required form or professional qualifications.
          </p>
          <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
            <h3 className="font-bold text-slate-900 text-sm">The quotation clarifies the actual deliverables available:</h3>
            <ul className="list-disc pl-5 space-y-1 text-slate-700 text-sm">
              <li>An Arabic translation matching the requested document&apos;s content.</li>
              <li>A certification statement or translator declaration, where applicable and agreed.</li>
              <li>A signed/stamped copy where that format is offered and accepted by the destination.</li>
              <li>A digital file and/or physical copy based on the agreed order.</li>
            </ul>
          </div>
          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-slate-800 text-xs sm:text-sm">
            <strong>No universal promise:</strong> LISAN.PK does not claim that a translation automatically becomes “Saudi Embassy approved,” “MOFA attested,” or legally valid in every country merely because it bears a translator&apos;s stamp.
          </div>

          <h3 className="text-xl font-bold font-serif text-slate-900 pt-2">
            Example of how we check a translation request
          </h3>
          <p className="text-xs text-slate-500">
            <strong>Illustrative academic example (not a real client document):</strong>
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">English source item</th>
                  <th className="py-3 px-4">Arabic rendering task</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Bachelor of Science in Civil Engineering</td>
                  <td className="py-3 px-4">Render the actual qualification faithfully; do not change its level or award</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Degree awarded on [date]</td>
                  <td className="py-3 px-4">Preserve the stated date and calendar basis; do not invent a Hijri equivalent</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">University registration number</td>
                  <td className="py-3 px-4">Reproduce identifiers precisely</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Grade Point Average (GPA)</td>
                  <td className="py-3 px-4">Use accurate academic terminology and retain the numerical value</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Official stamp or annotation</td>
                  <td className="py-3 px-4">Translate legible meaningful wording as instructed; do not invent a stamp</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            The goal is <strong>faithfulness, consistency and auditability</strong>, not a word-for-word machine output that ignores legal or educational context. An approved, redacted English-to-Arabic sample has not been supplied for this page; do not display a generated fake degree or seal.
          </p>
        </section>

        {/* Section 6: Information Needed for Quote */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Documents and information needed for an accurate quote
          </h2>
          <p className="text-slate-700 leading-relaxed">
            Send the following:
          </p>
          <ol className="list-decimal pl-5 space-y-1.5 text-slate-700 text-sm">
            <li>A <strong>clear scan or photograph</strong> of every page requiring translation.</li>
            <li>The <strong>source language</strong> (English for this page).</li>
            <li>The <strong>destination country</strong> and receiving organisation, if known.</li>
            <li>The <strong>purpose</strong>: admission, employment, family, commercial or other.</li>
            <li>Any instruction about <strong>certification, format, authentication or physical delivery</strong>.</li>
            <li>Your preferred contact channel and deadline, if one applies.</li>
          </ol>
          <p className="text-xs text-slate-500">
            For identity-sensitive records, share information only through the channel you choose and avoid sending account passwords or OTPs. If name spellings require verification, use an authorised reference such as the passport spelling; do not ask the translator to alter the factual content of an official source record.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link href="/contact">
              <Button className="bg-emerald-700 hover:bg-emerald-800 text-white font-semibold h-11 px-6 rounded-xl">
                Request a document review and quotation
              </Button>
            </Link>
            <Link href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-semibold h-11 px-6 rounded-xl">
                Send a message on WhatsApp
              </Button>
            </Link>
          </div>
        </section>

        {/* Section 7: How Process Works */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            How the English-to-Arabic translation process works
          </h2>
          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">1. Document and destination review</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We identify what the file is, how much text it contains and whether your receiving body gave special instructions. If an original is in Urdu, we clarify the correct translation direction rather than misclassifying it.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">2. Written quotation and scope</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                We confirm the documents, language direction, number of pages, requested certification format, delivery method and price <strong>before</strong> beginning the order.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">3. Translation and consistency review</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The document is translated into Arabic with attention to terminology, identifiers, figures and the intended use. Names and dates are checked against the supplied sources.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">4. Client confirmation where appropriate</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Where a spelling decision or terminology choice requires clarification, we ask the client to confirm the correct reference. Client input cannot be used to change the meaning of the source document.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-1">
              <h3 className="font-bold text-slate-900 text-sm">5. Agreed delivery</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The completed files are provided in the format agreed in the quotation. Where a physical signed copy is needed and available, delivery terms must be confirmed separately.
              </p>
            </div>
          </div>
          <div className="p-3 rounded-lg bg-slate-100 text-slate-800 text-xs">
            <strong>Important:</strong> This is the translation service workflow. It does <strong>not</strong> imply LISAN.PK can skip government authentication steps or speed up official HEC, MOFA or foreign authority decisions.
          </div>
        </section>

        {/* Section 8: Price in Pakistan */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            English-to-Arabic translation price in Pakistan
          </h2>
          <p className="text-slate-700 leading-relaxed">
            <strong>Pricing depends on the actual document.</strong> A one-page certificate is different from a multi-page transcript, commercial contract or document with dense seals and tables. We will confirm a quotation before you commit.
          </p>

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-sm">
              <thead className="bg-slate-100 text-slate-900 border-b border-slate-200 font-semibold">
                <tr>
                  <th className="py-3 px-4">Cost factor</th>
                  <th className="py-3 px-4">Why it matters</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Document type and number of pages</td>
                  <td className="py-3 px-4">Word count, tables and complexity vary</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Legal/technical terminology</td>
                  <td className="py-3 px-4">Specialist review may be required</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Handwritten notes or hard-to-read source</td>
                  <td className="py-3 px-4">May need clarification or a better scan</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Certification requested</td>
                  <td className="py-3 px-4">Different recipients require different formats</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Number of documents/copies</td>
                  <td className="py-3 px-4">Separate documents may need separate certification</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Delivery format</td>
                  <td className="py-3 px-4">Digital PDF and physical courier are not identical</td>
                </tr>
                <tr className="hover:bg-slate-50/50">
                  <td className="py-3 px-4 font-medium text-slate-900">Deadline</td>
                  <td className="py-3 px-4">Urgency must be accepted and priced based on available capacity</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500">
            We do not publish an unapproved flat rate, promise free government attestation or guarantee a same-day turnaround for every job. <Link href="/contact" className="text-emerald-700 underline font-semibold">Get a document-specific quote</Link>.
          </p>
        </section>

        {/* Section 9: Why Accuracy Matters */}
        <section className="space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Why accurate English-to-Arabic translation matters
          </h2>
          <p className="text-slate-700 leading-relaxed">
            A useful translation must help the receiving organisation compare Arabic content with the original English document. Problems that can cause questions include:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-700 text-sm">
            <li>Translating a university name inconsistently across a degree and transcript.</li>
            <li>Mixing an applicant&apos;s passport spelling with a different Arabic name spelling without clarification.</li>
            <li>Confusing a <strong>degree</strong>, <strong>provisional certificate</strong> and <strong>transcript</strong>.</li>
            <li>Omitting conditions, marginal notes or reverse-side text the recipient expects to see.</li>
            <li>Changing dates, numeric amounts or contract-party names.</li>
            <li>Mistaking a private translator&apos;s certificate for government attestation.</li>
            <li>Applying generic “embassy-approved” language without checking the actual receiving authority.</li>
          </ul>
          <p className="text-xs text-slate-500">
            Quality starts with a complete source and accurate instructions, not an exaggerated acceptance guarantee.
          </p>
        </section>

        {/* Section 10: FAQs */}
        <section className="space-y-6">
          <div className="flex items-center gap-2">
            <HelpCircle className="w-6 h-6 text-emerald-700" />
            <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
              English-to-Arabic translation FAQs
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

        {/* Section 11: Final CTA Block */}
        <section className="p-8 rounded-3xl bg-emerald-900 text-white space-y-6 shadow-xl">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold font-serif">
              Request your English-to-Arabic translation quote
            </h2>
            <p className="text-emerald-100 text-sm sm:text-base leading-relaxed">
              <strong>Send the English documents you need translated and tell us where they will be submitted.</strong> We will help identify the language direction, requested certification format and practical next steps before quoting.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold h-12 px-6 rounded-xl shadow-lg transition-all">
                Get a Quote
              </Button>
            </Link>
            <Link href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 px-6 rounded-xl shadow-lg transition-all flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                WhatsApp +92 328 8155866
              </Button>
            </Link>
            <Link href="/services/translation/arabic-translation">
              <Button variant="outline" className="border-emerald-700 bg-emerald-800/40 hover:bg-emerald-800 text-white font-semibold h-12 px-6 rounded-xl">
                Browse Arabic Translation Services
              </Button>
            </Link>
          </div>

          <div className="text-xs text-emerald-200/90 border-t border-emerald-800/60 pt-4 space-y-2">
            <div>
              <strong>Related reading:</strong>{" "}
              <Link href="/guides/hec-online-degree-attestation" className="underline hover:text-white">HEC Degree Attestation Online 2026</Link> ·{" "}
              <Link href="/guides/mofa-online-attestation" className="underline hover:text-white">MOFA Online Attestation Guide</Link> ·{" "}
              <Link href="/guides/certified-translation-vs-apostille-pakistan" className="underline hover:text-white">Certified Translation vs Apostille</Link> ·{" "}
              <Link href="/services/translation/academic-degree-transcript" className="underline hover:text-white">Degree & Transcript Translation</Link>.
            </div>
            <div>
              <strong>Service disclosure:</strong> LISAN.PK provides translation and independent document guidance. We are not the Higher Education Commission, Pakistan MOFA, a foreign embassy or the authority making a visa/admission decision. Government certificates and approvals must be issued by their competent authorities.
            </div>
          </div>
        </section>

        {/* Section 12: Sources */}
        <footer className="space-y-4 pt-6 border-t border-slate-200">
          <h2 className="text-xl font-bold font-serif text-slate-900">
            Sources for process-specific statements
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-600">
            <li>
              <a href="https://www.hec.gov.pk/english/services/students/das/Pages/Degree-Attestation.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                HEC — fully online 2026 degree attestation procedure and current fee
              </a>.
            </li>
            <li>
              <a href="https://apostille.mofa.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                Pakistan MOFA — Apostille portal
              </a>.
            </li>
            <li>
              <a href="https://www.mofa.gov.ae/en/Missions/Islamabad/Services/Services-for-Individuals/Attestation-Information" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                UAE MOFA — attestation of Pakistan-issued documents through the Embassy in Islamabad
              </a>.
            </li>
            <li>
              <a href="https://www.hec.gov.pk/english/HECAnnouncements/Pages/Scam.aspx" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">
                HEC — warning about fraudulent attestation intermediaries
              </a>.
            </li>
          </ul>
          <p className="text-xs text-slate-400 italic pt-2">
            Sources last reviewed: 5 November 2026. The receiving authority&apos;s written instructions take precedence for the destination-specific acceptance and certification rules.
          </p>
        </footer>
      </article>
    </main>
  )
}
