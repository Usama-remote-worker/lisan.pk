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
  AlertCircle,
  FileCheck2
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "USCIS Certified Translation Requirements | Urdu & Arabic to English | LISAN.PK",
  description: "Understand USCIS certified translation requirements for Urdu and Arabic documents: full English translation, signed translator certificate, contact details and filing checklist.",
  alternates: {
    canonical: "https://www.lisan.pk/services/uscis-certified-translation/requirements",
  },
  openGraph: {
    title: "USCIS Certified Translation Requirements | Urdu & Arabic to English | LISAN.PK",
    description: "Understand USCIS certified translation requirements for Urdu and Arabic documents: full English translation, signed translator certificate, contact details and filing checklist.",
    url: "https://www.lisan.pk/services/uscis-certified-translation/requirements",
    type: "website",
  }
}

const serviceFaqs = [
  {
    "q": "What qualifies as certified translation for USCIS?",
    "a": "A full English translation of a submitted foreign-language document, with a signed translator statement attesting completeness, accuracy and competence, meeting the current instructions for the particular filing."
  },
  {
    "q": "Do I need an Urdu-to-English Nikah Nama translation for I-130?",
    "a": "If you submit an Urdu Nikah Nama or other Urdu marriage evidence to USCIS, the foreign-language text must be fully translated into English and certified according to the filing instructions. Consult the Pakistan reciprocity information for the correct official marriage certificate."
  },
  {
    "q": "Does USCIS require both Nikah Nama and MRC?",
    "a": "The Department of State identifies the MRC as Pakistan's marriage certificate. Specific USCIS evidence requests can vary. Review the actual I-130 instruction and any case-specific notice; do not rely on an invented universal three-document rule."
  },
  {
    "q": "Can a bilingual MRC be submitted without a separate English translation?",
    "a": "Review whether all relevant foreign-language information appears fully in English and what the receiving authority requests. Bilingual printing alone does not always answer this question."
  },
  {
    "q": "Does a translation have to retain the Nikah Nama's original layout?",
    "a": "A consistent field-by-field layout is useful, but the central USCIS rule is a full English translation with proper certification; it is not a requirement to reproduce the original design pixel by pixel."
  },
  {
    "q": "Can I use an Arabic-to-Urdu translation for USCIS?",
    "a": "No. If a USCIS filing needs a translation of an Arabic document, the required destination language is English, not Urdu."
  },
  {
    "q": "Does the translator need to sign and date the certificate?",
    "a": "Yes. The current Form I-130 instructions require a signature, printed name, signature date and contact information, alongside the accuracy and competence statements."
  },
  {
    "q": "Is a stamp mandatory for USCIS certification?",
    "a": "The relevant translation instruction emphasizes the signed certification, not possession of a particular agency seal. A company stamp may appear as part of an agency's normal paperwork but does not replace the required signed declaration."
  },
  {
    "q": "Do you guarantee approval or no Request for Evidence?",
    "a": "No. Translation quality matters, but USCIS decides document sufficiency and benefit eligibility. No translator can guarantee a government outcome."
  },
  {
    "q": "What does a certified translation cost?",
    "a": "Cost depends on source language, page count, handwriting, document complexity and required deliverables. Request a document-specific quote; see LISAN.PK pricing (/pricing) for published standard-service categories."
  },
  {
    "q": "Do you provide immigration legal advice?",
    "a": "No. LISAN.PK provides translation services. For interpretation of eligibility, case strategy, an RFE or legal advice, consult a qualified U.S. immigration professional or the relevant U.S. authority."
  },
  {
    "q": "Can I order from outside Pakistan?",
    "a": "You may request a quote remotely for documents issued in Pakistan or elsewhere. Confirm the delivery format your filing or receiving authority requires."
  }
]

const glanceElements = [
  { element: "Complete source document", means: "A readable copy of all relevant pages and reverse-side entries", why: "The translation must correspond to the document submitted" },
  { element: "Full English translation", means: "All meaningful foreign-language information is rendered in English", why: "An extract or summary may not satisfy the instruction for a full translation" },
  { element: "Accuracy certification", means: "Translator confirms completeness and accuracy", why: "A translation without a clear declaration may not meet the filing instruction" },
  { element: "Competence statement", means: "Translator confirms ability to translate the relevant language into English", why: "The certifier must genuinely be competent in that language pair" },
  { element: "Signature and details", means: "Signed, dated certification with the translator's printed name and contact information", why: "Included in current I-130 instructions" },
  { element: "Relevant filing instructions", means: "Correct form and any case-specific USCIS notice", why: "One service page cannot replace requirements for every immigration case" }
]

const uscisVsNvcStages = [
  { stage: "USCIS petition", verify: "Full English translation of any foreign-language evidence submitted, with translator certification" },
  { stage: "NVC / CEAC", verify: "Correct civil document under the reciprocity schedule; NVC language rule and document slot" },
  { stage: "Interview in Islamabad", verify: "Embassy's original-document, English translation and photocopy instructions" }
]

export default function UscisRequirementsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "USCIS Certified Translation Requirements: Urdu and Arabic Documents into English",
    "serviceType": "USCIS Certified Translation",
    "provider": {
      "@type": "LocalBusiness",
      "name": "LISAN.PK",
      "url": "https://www.lisan.pk",
      "telephone": "+923288155866"
    },
    "description": "Understand USCIS certified translation requirements for Urdu and Arabic documents: full English translation, signed translator certificate, contact details and filing checklist.",
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
        "name": "USCIS Certified Translation",
        "item": "https://www.lisan.pk/services/uscis-certified-translation"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Requirements",
        "item": "https://www.lisan.pk/services/uscis-certified-translation/requirements"
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
            <Link href="/services/translation" className="hover:text-emerald-300 transition-colors">Translation</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/services/uscis-certified-translation" className="hover:text-emerald-300 transition-colors">USCIS Certified</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-300">Requirements</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 mb-5">
            <FileCheck2 className="w-3.5 h-3.5 text-emerald-400" />
            USCIS 8 CFR 103.2(b)(3) & Form I-130 Regulatory Standards
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight text-white mb-6 leading-[1.15]">
            USCIS Certified Translation Requirements: Urdu and Arabic Documents into English
          </h1>

          <div className="bg-emerald-950/40 border border-emerald-700/40 rounded-2xl p-5 sm:p-6 mb-6">
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-sans">
              <strong>USCIS generally requires a full English translation of any foreign-language information in a document submitted for an immigration benefit.</strong> A translator must sign a statement confirming that the translation is <strong>complete and accurate</strong> and that the translator is <strong>competent</strong> to translate into English. The current Form I-130 instructions also call for the translator&apos;s signature, printed name, signature date and contact information. [Source: USCIS Form I-130 Instructions.]
            </p>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
            LISAN.PK provides document translation support for Pakistani and international applicants who need <strong>Urdu-to-English</strong> or <strong>Arabic-to-English</strong> translations for a U.S. immigration filing. We can review your source document and prepare a translation quote. <strong>USCIS—not LISAN.PK—determines whether a filing satisfies its requirements.</strong>
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-white hover:bg-slate-100 text-emerald-950 font-bold h-12 px-6 rounded-xl shadow-md transition-all">
                Request a translation quote
              </Button>
            </Link>
            <Link href="/blog/uscis-marriage-certificate-translation">
              <Button variant="outline" className="border-emerald-500/80 text-white hover:bg-emerald-800/40 font-semibold h-12 px-6 rounded-xl">
                Read the Nikah Nama guide
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 space-y-14">

        {/* SECTION 1: WHAT IS USCIS-CERTIFIED */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            What is a USCIS-certified English translation?
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            It is an English translation accompanied by a signed declaration from the translator explaining the translation&apos;s completeness and accuracy and the translator&apos;s competence. “Certified” describes the <strong>translator&apos;s signed attestation</strong>; it does not mean USCIS has pre-approved the translation company or given a government certification to the translator.
          </p>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            The rule is found at <strong>8 CFR 103.2(b)(3)</strong>. For a spouse petition, the current <strong>I-130 instructions</strong> specify the translator&apos;s printed name, signature, date and contact information. A filing may involve additional instructions; check the current instructions for your particular USCIS form. [1, 2]
          </p>

          {/* Table: At a glance */}
          <div className="space-y-3">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
              At a glance: what to submit
            </h3>

            <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th scope="col" className="p-3.5 sm:p-4 font-bold w-1/4">Element</th>
                    <th scope="col" className="p-3.5 sm:p-4 font-bold w-1/3">What it means</th>
                    <th scope="col" className="p-3.5 sm:p-4 font-bold">Why it matters</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {glanceElements.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                      <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">{row.element}</td>
                      <td className="p-3.5 sm:p-4 text-slate-700 align-top leading-relaxed">{row.means}</td>
                      <td className="p-3.5 sm:p-4 text-slate-600 align-top text-xs sm:text-sm leading-relaxed">{row.why}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 2: URDU-TO-ENGLISH */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Urdu-to-English certified translation for USCIS
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Pakistani documents may contain Urdu handwriting, official seals, registration entries and mixed-language fields. LISAN.PK can assess documents such as:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed text-sm sm:text-base">
            <li><strong>Nikah Nama (marriage contract)</strong> and <strong>Marriage Registration Certificate (MRC)</strong>.</li>
            <li>Birth registration documents and relevant civil records.</li>
            <li>Divorce decrees and other family-status documents.</li>
            <li>Police, court and administrative records when requested in a U.S. immigration case.</li>
            <li>Academic or employment records when these are relevant to a particular petition.</li>
          </ul>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            The correct translation scope is determined by the actual document and the filing instruction. A bilingual form may already contain English text, but any submitted foreign-language information still needs to be assessed against the USCIS rule. Do not order a blanket translation of every document you own without checking what your petition requires.
          </p>

          <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="font-bold text-slate-900 text-base">
              Nikah Nama translation for Form I-130 and immigrant spouse visas
            </h3>
            <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
              A Pakistani <strong>Nikah Nama</strong> and a government-issued <strong>MRC</strong> are different records. The U.S. Department of State&apos;s Pakistan reciprocity schedule names the <strong>MRC</strong> as the marriage certificate; it describes authorized local issuing authorities. For USCIS, any Urdu text submitted as evidence requires a complete certified English translation. For NVC and U.S. Embassy Islamabad, separate civil-document and interview instructions also apply. [2–4]
            </p>
            <p className="text-xs sm:text-sm text-slate-700">
              Read our detailed <Link href="/blog/uscis-marriage-certificate-translation" className="text-emerald-700 underline font-semibold">Nikah Nama translation for USCIS and NVC</Link> guide before deciding which records to translate. The main <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 underline font-semibold">Nikah Nama and MRC translation service</Link> explains the document types and how to request a quote.
            </p>
          </div>
        </section>

        {/* SECTION 3: ARABIC-TO-ENGLISH */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Arabic-to-English certified translation for USCIS
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            Applicants who have lived or worked in Saudi Arabia, the UAE, Qatar or another Arabic-speaking country may need English translations of Arabic-language records when submitted with a USCIS filing. Possible examples include:
          </p>

          <ul className="list-disc pl-5 space-y-2 text-slate-700 leading-relaxed text-sm sm:text-base">
            <li>Arabic marriage or birth certificates.</li>
            <li>Arabic divorce or court documents.</li>
            <li>Saudi employment or administrative records, where relevant.</li>
            <li>Arabic education or professional documents, where a USCIS filing asks for them.</li>
          </ul>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            Arabic documents often contain transliterated names, Hijri or Gregorian dates and government abbreviations. A translator should reproduce the source meaning faithfully and identify unreadable entries; translation is not a method for altering an official identity record.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/services/translation/arabic-to-english">
              <Button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold h-11 px-5 rounded-xl shadow-sm transition-all">
                Explore Arabic-to-English translation
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold h-11 px-5 rounded-xl">
                Request a document review
              </Button>
            </Link>
          </div>
        </section>

        {/* SECTION 4: CERTIFICATION EXAMPLE */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            Example USCIS translator certification statement
          </h2>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            This is a <strong>generic example</strong>, not an executed certificate and not a claim that one exact text is prescribed for every USCIS form:
          </p>

          {/* Illustrative Typography Blockquote */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl border-l-4 border-emerald-600 border border-slate-200 shadow-sm space-y-3 font-mono text-xs sm:text-sm text-slate-800">
            <p className="font-bold tracking-wider text-slate-900 text-sm sm:text-base">
              CERTIFICATE OF TRANSLATION ACCURACY
            </p>
            <p>
              I, <strong>[full printed name]</strong>, certify that I am competent to translate from <strong>[Urdu or Arabic] into English</strong>, and that the attached English translation of <strong>[document description]</strong> is complete and accurate.
            </p>
            <p>Translator&apos;s printed name: <strong>[name]</strong></p>
            <p>Signature: <strong>[actual signature]</strong></p>
            <p>Date signed: <strong>[date]</strong></p>
            <p>Contact details: <strong>[valid contact information]</strong></p>
          </div>

          <p className="text-slate-600 text-xs sm:text-sm italic">
            Only the person who actually translated and certifies the document should complete and sign the declaration. A stamp or logo by itself does not substitute for the statement of competence and accuracy.
          </p>

          {/* Subsections: Licensing, Independence, Notary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Does USCIS require a translator&apos;s U.S. license?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>The general translation rule does not identify a universal USCIS licensing program for translators.</strong> The regulation and I-130 instructions describe translation completeness and certification of competence. A company should not market itself as “USCIS-approved” or “U.S. Embassy-approved” merely because it offers this service. The receiving authority evaluates what was submitted. [1, 2]
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Must the translator be independent?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The governing translation clause does not state that every translation must be prepared by a particular commercial company or that all translations prepared by relatives are automatically prohibited. Competence and accurate certification remain essential. To minimise disputes, many applicants prefer a professional translator who is independent of the case. Check relevant form instructions and obtain immigration advice when impartiality is in question.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <h3 className="font-bold text-slate-900 text-sm">Is notarisation required for a USCIS translation?</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                <strong>Not generally under 8 CFR 103.2(b)(3).</strong> The general rule requires a translator&apos;s signed certification. Notarisation and apostille are different services; they should not be added to a translation quote as automatic immigration requirements. If an official notice specifically requests additional authentication, follow that request. [1]
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: USCIS VS NVC */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            USCIS vs NVC: translation requirements are not always the same
          </h2>

          <p className="text-slate-700 leading-relaxed text-base sm:text-lg">
            USCIS handles immigration petitions, while the U.S. Department of State and NVC handle civil-document review for applicable immigrant-visa processing. NVC&apos;s general instructions allow an exception for a document already in the official language of the visa-interview country. However, the U.S. Embassy Islamabad&apos;s interview checklist lists an <strong>English translation of the marriage certificate</strong> for married applicants. [3–5]
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                  <th scope="col" className="p-3.5 sm:p-4 font-bold w-1/3">Filing stage</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Main thing to verify</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {uscisVsNvcStages.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">{row.stage}</td>
                    <td className="p-3.5 sm:p-4 text-slate-700 leading-relaxed">{row.verify}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 font-medium">
            <strong>Do not confuse a successful CEAC upload with USCIS acceptance or a final visa decision.</strong> They are separate stages.
          </div>
        </section>

        {/* SECTION 6: HOW LISAN.PK PROCESSES REQUESTS */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            How LISAN.PK processes translation requests
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 1</span>
              <h3 className="font-bold text-slate-900 text-base">Tell us the purpose</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Select <strong>USCIS Form I-130</strong>, <strong>other USCIS filing</strong>, <strong>NVC/CEAC</strong>, <strong>Islamabad immigrant-visa interview</strong> or another destination.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 2</span>
              <h3 className="font-bold text-slate-900 text-base">Identify document & language</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Choose <strong>Urdu → English</strong> or <strong>Arabic → English</strong>, and specify the document type.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 3</span>
              <h3 className="font-bold text-slate-900 text-base">Send a clear scan</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                For an initial price request, do not send additional passports, financial records or identity images unless relevant and necessary.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 4</span>
              <h3 className="font-bold text-slate-900 text-base">Confirm scope and price</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We check page count, legibility, handwritten content, dates and required certificate format. You receive a quote before paid work proceeds.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 5</span>
              <h3 className="font-bold text-slate-900 text-base">Review document details</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Check names, numbers, dates, marital-status wording and other entries before the final signed certification is issued.
              </p>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md">Step 6</span>
              <h3 className="font-bold text-slate-900 text-base">Receive deliverable</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Confirm whether the request is for a signed PDF, printed copy or both, and whether any additional courier service is needed.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold h-11 px-5 rounded-xl shadow-sm transition-all">
                Request a translation quote
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="border-slate-300 text-slate-800 hover:bg-slate-100 font-semibold h-11 px-5 rounded-xl">
                See published service pricing
              </Button>
            </Link>
          </div>
        </section>

        {/* SECTION 7: COMMON MISTAKES */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900">
            Common mistakes in USCIS translation requests
          </h2>

          <div className="space-y-3 text-sm sm:text-base text-slate-700 leading-relaxed">
            <p><strong>Sending only a summary:</strong> The filing instruction requires a <em>full</em> English translation where foreign-language material is submitted.</p>
            <p><strong>Claiming an official record was corrected by translation:</strong> A translated name variation does not change what appears on the source document.</p>
            <p><strong>Missing certification information:</strong> An unsigned statement or one that omits the translator&apos;s competence and accuracy declaration may not match the relevant form instructions.</p>
            <p><strong>Assuming stamps or apostilles equal certified translations:</strong> These processes do different things.</p>
            <p><strong>Treating every NVC upload like a USCIS petition:</strong> Review the correct government requirements for the authority and stage involved.</p>
            <p><strong>Sharing unnecessary personal documents:</strong> A quote normally begins with the relevant document only; only request extra details if required for assessment.</p>
          </div>
        </section>

        {/* SECTION 8: FAQS */}
        <section className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 pb-2 border-b border-slate-200">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {serviceFaqs.map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm space-y-2">
                <h3 className="font-bold font-serif text-slate-900 text-base sm:text-lg">
                  {faq.q}
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 9: REQUEST CTA */}
        <section className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
            Request a certified English translation
          </h2>
          <p className="text-emerald-100 leading-relaxed text-base sm:text-lg">
            <strong>Prepare your documents with clear language direction, traceable formatting and an accurate signed translation certificate.</strong> Send the source document and tell us which authority will receive it. We will confirm the scope of our translation service and the price before work starts.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-white hover:bg-slate-100 text-emerald-950 font-bold h-12 px-6 rounded-xl shadow-md transition-all">
                Request an Urdu/Arabic-to-English quote
              </Button>
            </Link>
            <Link href="/blog/uscis-marriage-certificate-translation">
              <Button variant="outline" className="border-emerald-500/80 text-white hover:bg-emerald-800/40 font-semibold h-12 px-6 rounded-xl">
                Nikah Nama translation for NVC & USCIS
              </Button>
            </Link>
            <Link href="/services/translation">
              <Button variant="ghost" className="text-emerald-300 hover:text-white hover:bg-white/10 font-medium h-12 px-4 rounded-xl">
                Document translation services
              </Button>
            </Link>
          </div>
        </section>

        {/* SECTION 10: OFFICIAL SOURCES */}
        <footer className="border-t border-slate-200 pt-8 space-y-4 text-xs sm:text-sm text-slate-600">
          <h2 className="text-lg font-bold font-serif text-slate-900">Source documents</h2>
          <ol className="list-decimal pl-5 space-y-1.5 leading-relaxed">
            <li><strong>U.S. regulation 8 CFR § 103.2(b)(3)</strong>, foreign-language documents and translator certification: <a href="https://www.ecfr.gov/current/title-8/chapter-I/subchapter-B/part-103/subpart-A/section-103.2" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">ecfr.gov 8 CFR § 103.2</a></li>
            <li><strong>USCIS Form I-130 Instructions</strong>, general translation requirements: <a href="https://www.uscis.gov/sites/default/files/document/forms/i-130instr.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">uscis.gov I-130 Instructions PDF</a></li>
            <li><strong>U.S. Department of State — Pakistan Reciprocity</strong>, marriage certificates and issuing authorities: <a href="https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country/Pakistan.html" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">travel.state.gov Pakistan Reciprocity</a></li>
            <li><strong>U.S. Department of State — Civil Documents</strong>, NVC translation framework: <a href="https://travel.state.gov/content/travel/en/us-visas/immigrate/the-immigrant-visa-process/step-5-collect-financial-evidence-and-other-supporting-documents/step-7-collect-civil-documents.html" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">travel.state.gov Civil Documents</a></li>
            <li><strong>U.S. Embassy Islamabad — Immigrant Visa Interview Instructions</strong>: <a href="https://travel.state.gov/content/travel/en/us-visas/Supplements/Supplements_by_Post/ISL-Islamabad.html" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">travel.state.gov Islamabad Supplement</a></li>
          </ol>

          <p className="text-xs text-slate-400 italic pt-3 border-t border-slate-200">
            Official sources provide destination legalisation & evidence rules; they do not endorse LISAN.PK. Requirements are set by the respective authority.
          </p>
        </footer>

      </div>
    </div>
  )
}
