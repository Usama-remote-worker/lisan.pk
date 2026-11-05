import { Metadata } from "next"
import Link from "next/link"
import { 
  FileCheck2, 
  HelpCircle, 
  ExternalLink, 
  ArrowRight, 
  Send, 
  CheckCircle2, 
  Info, 
  AlertTriangle,
  Building2,
  Check,
  ShieldCheck,
  Scale,
  FileText
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { EditorialReviewBox } from "@/components/ui/EditorialReviewBox"

export const metadata: Metadata = {
  title: {
    absolute: "Certified Translation in Pakistan: Meaning, Requirements & Sworn Translators | LISAN.PK",
  },
  description: "What is a certified translation in Pakistan? Learn translator statements, sworn versus notarized translation, USCIS and UK rules, and how to check a translation.",
  alternates: {
    canonical: "https://www.lisan.pk/guides/certified-translation-pakistan-explained",
  },
  openGraph: {
    title: {
      absolute: "Certified Translation in Pakistan: Meaning, Requirements & Sworn Translators | LISAN.PK",
    },
    description: "What is a certified translation in Pakistan? Learn translator statements, sworn versus notarized translation, USCIS and UK rules, and how to check a translation.",
    url: "https://www.lisan.pk/guides/certified-translation-pakistan-explained",
    type: "article",
    publishedTime: "2026-11-05T00:00:00Z",
    modifiedTime: "2026-11-05T00:00:00Z",
    images: ["https://www.lisan.pk/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      absolute: "Certified Translation in Pakistan: Meaning, Requirements & Sworn Translators | LISAN.PK",
    },
    description: "What is a certified translation in Pakistan? Learn translator statements, sworn versus notarized translation, USCIS and UK rules, and how to check a translation.",
    images: ["https://www.lisan.pk/logo.png"],
  }
}

const ordinaryVsCertified = [
  { q: "Is the document rendered into another language?", ord: "Yes", cert: "Yes" },
  { q: "Is there a signed or issued accuracy statement?", ord: "Not necessarily", cert: "Usually; exact format depends on recipient" },
  { q: "Does the statement identify who is responsible?", ord: "Not necessarily", cert: "It should" },
  { q: "Is the underlying document automatically authenticated?", ord: "No", cert: "No" },
  { q: "Is embassy acceptance automatic?", ord: "No", cert: "No" },
  { q: "Does the original document still matter?", ord: "Usually yes", cert: "Yes; follow recipient rules" }
]

const proceduresComparison = [
  {
    proc: "Certified translation",
    purpose: "Declares that translated text accurately and completely represents a specified original",
    who: "Responsible translator/translation provider under recipient rules",
    not: "Does not authenticate the issuing authority's original record"
  },
  {
    proc: "Notarization",
    purpose: "Notarial act, which may certify a signature, declaration or copy as permitted by local law",
    who: "Notary public",
    not: "Does not inherently verify the translation's linguistic accuracy"
  },
  {
    proc: "MOFA document attestation",
    purpose: "Official authentication for an eligible document under Pakistani MOFA procedures",
    who: "Pakistan Ministry of Foreign Affairs",
    not: "Does not automatically replace a translator's accuracy statement"
  },
  {
    proc: "Apostille",
    purpose: "Authenticates the origin/signature/seal of an eligible public document for Convention relationships",
    who: "Competent authority, in Pakistan MOFA",
    not: "Does not establish that a translation is linguistically correct"
  },
  {
    proc: "Embassy/consular legalization",
    purpose: "Country-specific authentication when required",
    who: "Relevant mission/authority",
    not: "Does not guarantee immigration or admission approval"
  }
]

const ukRequirements = [
  { field: "Confirmation of accurate translation", visitor: "Required", general: "Required" },
  { field: "Translation date", visitor: "Required", general: "Required" },
  { field: "Translator's full name", visitor: "Required", general: "Required" },
  { field: "Translator's signature", visitor: "Required in visitor guidance", general: "Check the specific receiving authority's process" },
  { field: "Contact details", visitor: "Required", general: "Required" },
  { field: "Universal Pakistan notary stamp", visitor: "Not presented as a blanket requirement", general: "Not presented as a blanket requirement" }
]

const practicalDocuments = [
  {
    doc: "Urdu Nikah Nama",
    req: "English translation for immigration; Arabic for some family-related uses",
    check: "All marriage-contract fields, names, dower details, registration references"
  },
  {
    doc: "NADRA Marriage Registration Certificate (MRC)",
    req: "English or Arabic translation if the recipient requires it",
    check: "Whether MRC alone is sufficient or the original Nikah Nama is additionally requested"
  },
  {
    doc: "Degree / transcript",
    req: "Arabic or English for university, employer or licensing body",
    check: "Course titles, grades, credit hours, seals, order of education verification"
  },
  {
    doc: "Fard-e-Malkiat / Intiqal",
    req: "English translation for legal or financial evidence",
    check: "Ownership shares, land units, khasra/khata numbers, remarks and table structure"
  },
  {
    doc: "Birth / death / FRC / CRC",
    req: "Translation for visa, family reunion or immigration",
    check: "Exact relationships, issue dates, family member spellings"
  },
  {
    doc: "Police character certificate",
    req: "Translation for employment or immigration",
    check: "Issuing office, jurisdiction, dates, original authenticity requirements"
  }
]

const guideFaqs = [
  {
    q: "What is the meaning of certified translation in Pakistan?",
    a: "It means the translated document is accompanied by an identifiable accuracy/completeness declaration from the responsible translator or provider. The declaration must satisfy the receiving authority's rules; it is not automatically a government authentication."
  },
  {
    q: "Is a certified translation the same as a notarized translation?",
    a: "No. Translation certification concerns linguistic accuracy; notarization is a separate legal act, such as certifying a signature or sworn statement where allowed and required."
  },
  {
    q: "Does Pakistan have sworn translators?",
    a: "The German Federal Foreign Office states that Pakistan has no sworn translators within the context of its German consular guidance. Some foreign authorities insist on translators sworn or registered in their own country, so check the destination's system. [4]"
  },
  {
    q: "Can any translation agency claim to be embassy approved?",
    a: "A provider should not claim formal government or embassy approval without documentary proof from the named authority. An agency's stamp does not establish universal endorsement."
  },
  {
    q: "Who can certify a translation for USCIS?",
    a: "The translator must certify that the full English translation is accurate and complete and that they are competent to translate from the original language into English. Check any additional instructions for your specific filing. [1]"
  },
  {
    q: "Does USCIS require translation notarization in Pakistan?",
    a: "The general regulation at 8 CFR § 103.2(b)(3) does not impose a blanket notarization requirement; check whether a particular filing has additional requirements. [1]"
  },
  {
    q: "Does a UK visa translation need a signature?",
    a: "GOV.UK's visitor guidance requires the translator's full name, signature, translation date, contact details and a confirmation of accuracy. Different routes may use different instructions. [2]"
  },
  {
    q: "Do I have to get my translated document apostilled?",
    a: "Not automatically. Whether the source document, translated document or both need an apostille depends on the destination authority and applicable document-authentication route."
  },
  {
    q: "Is English translation enough for Saudi Arabia?",
    a: "It depends on the university, program, profession and authority. Check the actual language and upload fields for the intended program rather than assuming every record needs Arabic. [6]"
  },
  {
    q: "Is a company stamp enough without a translator statement?",
    a: "Do not assume so. Where the receiving authority demands an accuracy declaration, competence statement, name or signature, provide those required details."
  },
  {
    q: "Can a friend translate my document?",
    a: "Some receiving authorities focus on competence and a truthful declaration; others require a professional, registered or independent translator. Follow the exact authority-specific instruction rather than assuming one rule everywhere."
  },
  {
    q: "What if the original document contains handwriting or unclear text?",
    a: "Supply a clearer scan if possible. The translator should mark genuinely illegible text instead of guessing names, dates or legal terms."
  },
  {
    q: "How can I check that my certified translation is genuine?",
    a: "Confirm the responsible translator's identity and contact details, compare the complete translation against the original, and check the certificate against the recipient's required fields. A fake registration number or generic seal is not verification."
  },
  {
    q: "What is a certificate of translation accuracy?",
    a: "It is a declaration attached to a translation that identifies the work and states the accuracy/completeness and, where required, the translator's language competence. See our sample certificate guide (/guides/certificate-of-accuracy-translation-sample)."
  },
  {
    q: "Are certified translations accepted by every embassy?",
    a: "No provider can guarantee that. Embassies and other authorities assess the specific application, document form and applicable rules."
  },
  {
    q: "How much does certified translation cost in Pakistan?",
    a: "Cost depends on language pair, page length, handwriting, tables, certification wording and any separately requested authentication. See LISAN.PK pricing (/pricing) or request a document-specific quote."
  }
]

export default function CertifiedTranslationPakistanGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "What Is Certified Translation in Pakistan? Meaning, Sworn Translators and Notarization Explained",
    "description": "What is a certified translation in Pakistan? Learn translator statements, sworn versus notarized translation, USCIS and UK rules, and how to check a translation.",
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
      "@id": "https://www.lisan.pk/guides/certified-translation-pakistan-explained"
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
        "name": "Certified Translation in Pakistan",
        "item": "https://www.lisan.pk/guides/certified-translation-pakistan-explained"
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
            <span className="text-slate-800 font-medium">Certified Translation in Pakistan</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5 font-sans">
              <FileCheck2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Official Translation Standards &amp; Legal Framework</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.15] mb-6">
              What Is Certified Translation in Pakistan? Meaning, Sworn Translators and Notarization Explained
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-sans mb-6">
              <strong>A certified translation in Pakistan is a document translation accompanied by an identifiable translator&apos;s or translation provider&apos;s statement confirming its accuracy and completeness.</strong> Certification describes the translator&apos;s responsibility for the translation; it does <strong>not</strong> automatically mean that the Pakistani government, an embassy, or an immigration authority has approved the document. The exact certificate wording and any extra notarization or legalization depend on where the translation will be submitted. [1–5]
            </p>

            <div className="p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-sm text-slate-700 leading-relaxed mb-8">
              <strong className="text-slate-900">Quick answer:</strong> For a U.S. Citizenship and Immigration Services (USCIS) filing, a foreign-language document generally needs a <strong>complete English translation</strong> plus certification of the translation&apos;s accuracy and the translator&apos;s competence. For a UK visitor visa, GOV.UK specifies an independently verifiable translation with a translator&apos;s name, signature, date and contact information. Neither requirement is identical to notarizing a document in Pakistan. [1–3]
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 h-12 shadow-sm rounded-xl font-sans"
                  id="gtm-quote-hero"
                  data-lead="quote"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Request a quotation
                </Button>
              </Link>
              <Link 
                href="/pricing"
                className="inline-flex items-center justify-center font-bold px-6 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors text-sm font-sans"
              >
                See translation charges in Pakistan
              </Link>
              <Link 
                href="/services/translation/urdu-to-english-translation"
                className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 underline font-sans ml-2"
              >
                Certified Urdu-to-English translation &rarr;
              </Link>
            </div>
            
            <p className="text-xs text-slate-500 mt-4">
              For an editable declaration, visit our <Link href="/guides/certificate-of-accuracy-translation-sample" className="text-emerald-700 underline font-semibold">Certificate of Translation Accuracy sample</Link>.
            </p>
          </div>
        </div>
      </section>

      {/* Advisory Alert Box */}
      <section className="py-6 bg-amber-50/70 border-b border-amber-200/70 font-sans">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-amber-700 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-slate-800 leading-relaxed">
              <strong className="text-amber-950">Important:</strong> There is no single certification format guaranteed to work for every embassy, university, court or country. Always follow the receiving organization&apos;s current instructions for the specific document and application route.
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 font-sans">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* Section 1: What does certified translation actually mean? */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              What does &ldquo;certified translation&rdquo; actually mean?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              The word <strong>certified</strong> refers to an accountable claim about the finished translation. A normal translation supplies text in the target language. A certified translation adds a declaration connecting that translated text to the original source and stating that the work is complete and accurate.
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              A useful certification normally identifies:
            </p>
            <ol className="list-decimal list-inside space-y-2.5 text-slate-700 text-base pl-2">
              <li>The translated document (for example, an Urdu Nikah Nama or a university transcript).</li>
              <li>The source and target languages.</li>
              <li>Whether the entire submitted document was translated, including relevant stamps, handwritten entries and marginal notes.</li>
              <li>The translator or authorized translation-company representative responsible for the declaration.</li>
              <li>An explicit statement of accuracy and, where required, competence in the language pair.</li>
              <li>The real date, signature and contact details required by the destination authority.</li>
            </ol>
            <p className="text-slate-700 leading-relaxed text-base">
              The certificate may be on the translation&apos;s final page or on a separate attached sheet. <strong>A decorative stamp alone is not proof that a particular authority&apos;s certification requirements have been met.</strong>
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              Certified translation versus ordinary translation
            </h3>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Question</th>
                    <th className="p-3.5 font-semibold">Ordinary translation</th>
                    <th className="p-3.5 font-semibold">Certified translation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {ordinaryVsCertified.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-medium text-slate-900">{row.q}</td>
                      <td className="p-3.5">{row.ord}</td>
                      <td className="p-3.5 font-medium text-emerald-950">{row.cert}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600">
              For informal reading, you may not need certification. For immigration, legal, academic or consular submission, check what is required <strong>before</strong> ordering.
            </p>
          </div>

          {/* Section 2: Is there a government-licensed or sworn translator system in Pakistan? */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Is there a government-licensed or sworn translator system in Pakistan?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>Pakistan does not have a general nationwide German-style sworn-translator appointment system equivalent to the court-sworn translator registers used in Germany.</strong> The German Federal Foreign Office&apos;s Pakistan consular information explicitly states that there are no sworn translators in Pakistan and directs users who need a German sworn translator to the German state translator database. [4]
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              That statement should <strong>not</strong> be stretched into the claim that every translation made in Pakistan will be valid everywhere. Different receiving bodies can demand:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 text-base pl-2">
              <li>A translation signed by an identifiable professional.</li>
              <li>A particular translator qualification or recognized register <strong>in the destination country</strong>.</li>
              <li>A notary&apos;s certification of a signature or statement.</li>
              <li>Embassy or consular authentication under that country&apos;s rules.</li>
              <li>A translation completed after legalizing the source document.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed text-base">
              The phrase <strong>&ldquo;sworn translator&rdquo;</strong> is common in Europe and in countries with formal sworn-translator systems. If a foreign office expressly requires a translator sworn in its own jurisdiction, a Pakistani business&apos;s stamp cannot substitute for that requirement.
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-emerald-600 text-sm text-slate-700">
              <strong className="text-slate-900">Practical example:</strong> A German authority might ask for a German court-sworn translator. In that case, first check the receiving German authority&apos;s instructions and the relevant official register—not a generic claim that a Pakistani translator is &ldquo;German-embassy approved.&rdquo; [4]
            </div>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              Who can certify a translation in Pakistan?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              The relevant question is not whether an agency advertises a universal government licence; it is <strong>whether the person or provider issuing the certificate meets the receiving authority&apos;s requirement</strong>. For example, the U.S. regulation emphasizes the translator&apos;s ability and certification of completeness and accuracy, while GOV.UK provides specific declaration details for visitor applications. [1–3]
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              Ask a provider for a sample of its <em>actual certification format</em>, its experience with the language pair and the identity of the professional responsible for the finished translation. Do not rely on invented registration numbers, made-up court appointments or a marketing badge.
            </p>
          </div>

          {/* Section 3: Certified translation vs notarized vs MOFA vs apostille */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Certified translation vs notarized translation vs MOFA attestation vs apostille
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              These procedures answer different questions.
            </p>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Procedure</th>
                    <th className="p-3.5 font-semibold">Main purpose</th>
                    <th className="p-3.5 font-semibold">Who provides it?</th>
                    <th className="p-3.5 font-semibold">What it does <strong>not</strong> do</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {proceduresComparison.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{row.proc}</td>
                      <td className="p-3.5">{row.purpose}</td>
                      <td className="p-3.5">{row.who}</td>
                      <td className="p-3.5 text-slate-600">{row.not}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>Notarization is not automatically required for every certified translation in Pakistan.</strong> Some authorities accept a responsible translator&apos;s signed declaration. Others require extra steps. Read our detailed <Link href="/guides/certified-translation-vs-apostille-pakistan" className="text-emerald-700 underline font-semibold">Certified Translation vs Notarization vs Apostille comparison</Link> and <Link href="/guides/apostille-pakistan" className="text-emerald-700 underline font-semibold">Pakistan Apostille Guide</Link>.
            </p>
          </div>

          {/* Section 4: What does USCIS require for foreign-language documents? */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              What does USCIS require for foreign-language documents?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>8 CFR § 103.2(b)(3)</strong> requires an English translation of a foreign-language document submitted to USCIS, with a translator&apos;s certification that the translation is <strong>complete and accurate</strong> and that the translator is <strong>competent</strong> to translate from the original language into English. [1]
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              This means that an Urdu birth certificate, Urdu Nikah Nama, Fard-e-Malkiat or Arabic civil record filed with USCIS should not be accompanied by a partial or summary-only translation when the full record is required.
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-2">
              USCIS document-check checklist
            </h3>
            <ul className="list-disc list-inside space-y-2 text-slate-700 text-base pl-2">
              <li>Translate the full content of the document being submitted.</li>
              <li>Carry over names, dates, numbers, record references and visible official remarks accurately.</li>
              <li>Identify illegible handwriting honestly; do not guess.</li>
              <li>Include the responsible translator&apos;s certification of <strong>accuracy/completeness and language competence</strong>.</li>
              <li>Check whether the particular form or evidence request includes additional instructions.</li>
              <li>Retain the original-language document and the certified English translation as required for the filing.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed text-base">
              The regulation <strong>does not impose a blanket requirement that every certified translation must be notarized in Pakistan</strong>. It also does not confer &ldquo;USCIS-approved translator&rdquo; status on a private business. See our <Link href="/services/uscis-certified-translation/requirements" className="text-emerald-700 underline font-semibold">USCIS certified translation requirements service guide</Link> and <Link href="/blog/uscis-marriage-certificate-translation" className="text-emerald-700 underline font-semibold">Nikah Nama translation for NVC and I-130</Link>.
            </p>
          </div>

          {/* Section 5: What does the UK require? */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              What does the UK require?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              For <strong>UK Standard Visitor</strong> supporting documents not written in English or Welsh, GOV.UK specifies a <strong>full translation that can be independently verified</strong>. It must contain confirmation of accuracy, the translation date, the translator&apos;s full name and signature, and contact details. [2]
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              GOV.UK&apos;s general guidance on certifying translations similarly asks the translator to confirm the translation is true and accurate, provide the date, and supply their full name and contact details. [3]
            </p>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Field</th>
                    <th className="p-3.5 font-semibold">UK visitor guidance</th>
                    <th className="p-3.5 font-semibold">General GOV.UK translation-certification guidance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {ukRequirements.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-medium text-slate-900">{row.field}</td>
                      <td className="p-3.5">{row.visitor}</td>
                      <td className="p-3.5">{row.general}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>Always check your specific UK visa route.</strong> UK immigration requirements can vary by application type. A visitor guidance document should not be presented as the universal rule for every UK immigration application.
            </p>
            <p className="text-sm text-slate-600">
              For help with original Urdu records, visit <Link href="/services/translation/urdu-to-english-translation" className="text-emerald-700 underline font-semibold">Urdu-to-English certified translation</Link>.
            </p>
          </div>

          {/* Section 6: Can a Pakistani certified translation be used for Saudi Arabia or the UAE? */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Can a Pakistani certified translation be used for Saudi Arabia or the UAE?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>Possibly—but the destination and document type determine the answer.</strong> A Saudi university, Saudi government office, UAE employer or immigration authority can apply different document-language and authentication rules. The appropriate combination might involve translation into Arabic, prior educational verification, MOFA attestation, an apostille where the Convention applies, or a separate consular process.
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              Do not assume every Saudi scholarship attachment needs Arabic: the official <strong>Study in Saudi</strong> program catalogue includes individual English-language programs and program-specific attachment requirements. [6]
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-sm text-slate-800 leading-relaxed">
              <strong className="text-slate-900">Before translating, ask:</strong> Which office will receive the document? In which language must it be submitted? Must the original be authenticated first? Is the translated copy itself subject to separate formalities?
            </div>
            <p className="text-sm text-slate-600">
              See <Link href="/translation-english-to-arabic" className="text-emerald-700 underline font-semibold">English-to-Arabic translation</Link>, <Link href="/services/translation/urdu-to-arabic" className="text-emerald-700 underline font-semibold">Urdu-to-Arabic translation</Link>, and <Link href="/guides/mofa-online-attestation" className="text-emerald-700 underline font-semibold">MOFA attestation guidance</Link>.
            </p>
          </div>

          {/* Section 7: What does a proper certificate of translation accuracy look like? */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              What does a proper certificate of translation accuracy look like?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              A usable certificate links a real finished translation to a real responsible professional. The declaration may differ depending on destination instructions, but the following <strong>illustrative wording</strong> explains the concept:
            </p>
            <blockquote className="p-5 rounded-xl bg-slate-50 border-l-4 border-emerald-600 text-slate-800 italic text-base leading-relaxed">
              <strong>Illustrative unsigned wording only:</strong> &ldquo;I certify that I am competent to translate from [source language] into [target language] and that the attached translation of [document description] is complete and accurate to the best of my knowledge and ability.&rdquo;
            </blockquote>
            <p className="text-slate-700 leading-relaxed text-base">
              A completed certificate must use the <strong>actual</strong> translator&apos;s details and genuine signature where required. This sample does not make a translation certified merely by being copied into a document.
            </p>
            <p className="text-sm text-slate-600">
              For a full downloadable educational example, see our <Link href="/guides/certificate-of-accuracy-translation-sample" className="text-emerald-700 underline font-semibold">Certificate of Translation Accuracy Sample for Pakistan</Link>.
            </p>
          </div>

          {/* Section 8: How to verify a certified translation before submission */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              How to verify a certified translation before submission
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              A five-minute review can prevent errors that are more serious than missing decoration or branding.
            </p>

            <div className="space-y-4">
              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70">
                <h3 className="font-bold text-slate-900 text-base mb-1">1. Check the destination&apos;s rule</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Use an official visa checklist, university admission page, court directive or a written response from the receiving office. Never infer a legal requirement from a translator&apos;s marketing copy.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70">
                <h3 className="font-bold text-slate-900 text-base mb-1">2. Compare the translation with the source</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Check <strong>every proper noun, date, identification number, institution name, degree title, seal reference and document number</strong>. Where a name has several transliterations, compare it with the passport or established official spelling.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70">
                <h3 className="font-bold text-slate-900 text-base mb-1">3. Check completeness</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  The document should not quietly omit a page, back-side note, stamp, table or an inconvenient paragraph. Unclear writing should be marked transparently instead of being invented.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70">
                <h3 className="font-bold text-slate-900 text-base mb-1">4. Read the certification statement</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Look for a declaration that satisfies the receiving authority&apos;s actual wording and identifies the responsible person. Where a signature, date or contact address is required, it should be genuine and present.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-slate-100 bg-slate-50/70">
                <h3 className="font-bold text-slate-900 text-base mb-1">5. Verify additional authentication separately</h3>
                <p className="text-slate-700 text-sm leading-relaxed">
                  Ask whether the original record, the translated record or both need notarization, MOFA attestation, apostille or consular legalization. These are distinct procedures.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9: Common certification mistakes */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Common certification mistakes Pakistani applicants should avoid
            </h2>
            <ol className="list-decimal list-inside space-y-3 text-slate-700 text-base pl-2">
              <li><strong>Assuming a stamp means government endorsement.</strong> Private provider certification is not automatically an embassy&apos;s approval.</li>
              <li><strong>Buying unnecessary notarization.</strong> Check the actual rules before paying for extra services.</li>
              <li><strong>Using a summary instead of a complete translation.</strong> USCIS expressly requires a full English translation of submitted foreign-language documents. [1]</li>
              <li><strong>Translating into the wrong language.</strong> An English-language program may not require an Arabic version of every academic document.</li>
              <li><strong>Ignoring damaged scans or illegible handwriting.</strong> Ask for a better source image where possible.</li>
              <li><strong>Mixing up certified copies and certified translations.</strong> They serve different evidentiary purposes.</li>
              <li><strong>Claiming &ldquo;100% embassy acceptance.&rdquo;</strong> Only the receiving authority decides sufficiency.</li>
              <li><strong>Using an unsigned template as a certificate.</strong> A template becomes an actual declaration only after genuine review and completion by the responsible translator.</li>
              <li><strong>Assuming overseas sworn-translator recognition.</strong> Some countries require a locally sworn professional.</li>
              <li><strong>Assuming apostille guarantees the document&apos;s content.</strong> It authenticates specified aspects of document origin, not its factual truth or translation quality.</li>
            </ol>
          </div>

          {/* Section 10: Practical document examples */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Certified translation in Pakistan: practical document examples
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Document</th>
                    <th className="p-3.5 font-semibold">Common request</th>
                    <th className="p-3.5 font-semibold">Points to check</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {practicalDocuments.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900 whitespace-nowrap">{row.doc}</td>
                      <td className="p-3.5">{row.req}</td>
                      <td className="p-3.5">{row.check}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600">
              For <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 underline font-semibold">Nikah Nama translation</Link>, <Link href="/services/translation/property-document-translation" className="text-emerald-700 underline font-semibold">property document translation</Link>, or <Link href="/pricing" className="text-emerald-700 underline font-semibold">translation pricing</Link>, use our dedicated service pages rather than a generic certification claim.
            </p>
          </div>

          {/* Section 11: How LISAN.PK handles certification requests */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              How LISAN.PK handles certification requests
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>First, we identify the actual submission requirement.</strong> Applicants can submit readable document images and identify their target country, receiving institution and required language. Our team reviews whether the requested deliverable is an ordinary translation, a translation with a signed accuracy statement, or a document requiring additional authentication arranged separately.
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              Our quotation should identify the document and language pair, any requested certification, any separately arranged notarial/legalization services, and the agreed completion time. <strong>Fees and delivery times are confirmed per order; embassy approval or immigration outcomes are never guaranteed.</strong>
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact" className="text-emerald-700 font-bold underline text-sm">
                Request a translation quotation &rarr;
              </Link>
              <span className="text-slate-300">&bull;</span>
              <Link href="/pricing" className="text-emerald-700 font-bold underline text-sm">
                See transparent pricing &rarr;
              </Link>
              <span className="text-slate-300">&bull;</span>
              <Link href="/guides/certified-translation-vs-apostille-pakistan" className="text-emerald-700 font-bold underline text-sm">
                Compare translation procedures &rarr;
              </Link>
            </div>
          </div>

          {/* Section 12: Frequently Asked Questions */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-5 h-5 text-emerald-700" />
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
                Frequently asked questions
              </h2>
            </div>
            <div className="space-y-4">
              {guideFaqs.map((faq, index) => (
                <div key={index} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50">
                  <h3 className="font-bold text-slate-900 text-base mb-1.5 font-serif">
                    {index + 1}. {faq.q}
                  </h3>
                  <p className="text-slate-700 text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Conditional Editorial Review Box (B:A22) */}
          <EditorialReviewBox />

          {/* Section 13: Official sources and verification notes */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">
              Official sources and verification notes
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              The legal/administrative explanations above are <strong>authority-specific</strong>, not blanket promises of universal acceptance. Sources reviewed on <strong>5 November 2026</strong>:
            </p>
            <ol className="list-decimal list-inside space-y-2.5 text-slate-700 text-sm pl-2">
              <li>
                <strong>USCIS translation rule — 8 CFR § 103.2(b)(3)</strong>:{" "}
                <a href="https://www.ecfr.gov/current/title-8/section-103.2" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">
                  https://www.ecfr.gov/current/title-8/section-103.2
                </a>{" "}
                — full English translation, accuracy and competence certification.
              </li>
              <li>
                <strong>GOV.UK — Visitor visa supporting documents</strong>:{" "}
                <a href="https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">
                  https://www.gov.uk/government/publications/visitor-visa-guide-to-supporting-documents/guide-to-supporting-documents-visiting-the-uk
                </a>{" "}
                — independently verifiable translation, signature, date and contact fields.
              </li>
              <li>
                <strong>GOV.UK — Certifying a document (translation section)</strong>:{" "}
                <a href="https://www.gov.uk/certifying-a-document" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">
                  https://www.gov.uk/certifying-a-document
                </a>{" "}
                — translation-certification essentials, distinct from certifying copies.
              </li>
              <li>
                <strong>German Federal Foreign Office — Legal/Translations in Pakistan</strong>:{" "}
                <a href="https://pakistan.diplo.de/pk-en/service/legal-uess-1680522" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">
                  https://pakistan.diplo.de/pk-en/service/legal-uess-1680522
                </a>{" "}
                — sworn-translator position in the German consular context.
              </li>
              <li>
                <strong>Pakistan Ministry of Foreign Affairs — Consular attestation guidance</strong>:{" "}
                <a href="https://mofa.gov.pk/consular-service-attestation-of-documents?mission=havana" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">
                  https://mofa.gov.pk/consular-service-attestation-of-documents?mission=havana
                </a>{" "}
                — document authentication instructions; not a substitute for recipient rules.
              </li>
              <li>
                <strong>Study in Saudi — Official program catalogue</strong>:{" "}
                <a href="https://studyinsaudi.sa/en/Programs" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">
                  https://studyinsaudi.sa/en/Programs
                </a>{" "}
                — language and attachment rules vary by program.
              </li>
            </ol>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 leading-relaxed">
              <strong>Editorial disclosure:</strong> LISAN.PK provides translation and document-preparation assistance. We are not a government authority, embassy, USCIS, GOV.UK or Saudi Ministry of Education. The responsible receiving institution decides whether documents satisfy its requirements.
            </div>
          </div>

          {/* Bottom CTA Block */}
          <div className="bg-[#064E3B] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">
              Need Certified Document Translation in Pakistan?
            </h3>
            <p className="text-emerald-100 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Submit your document details to receive a clear quotation with specified translation format, turn-around time, and applicable certificate statements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full bg-white text-emerald-950 hover:bg-emerald-50 min-w-[200px] h-12 text-sm font-bold shadow-md">
                  Request a Quotation
                </Button>
              </Link>
              <Link href="https://wa.me/923288155866" target="_blank" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full border border-emerald-300 text-white hover:bg-emerald-800 min-w-[200px] h-12 text-sm font-bold bg-transparent">
                  Chat on WhatsApp
                </Button>
              </Link>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
