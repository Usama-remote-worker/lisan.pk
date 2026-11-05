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
  title: "English to Turkish Translation in Pakistan | Turkish to English | LISAN.PK",
  description: "English to Turkish and Turkish to English document translation in Pakistan for universities, residence, legal and property records. Check sworn/notary rules.",
  alternates: {
    canonical: "https://www.lisan.pk/services/translation/turkish-translation",
  },
  openGraph: {
    title: "English to Turkish Translation Pakistan | Documents | LISAN.PK",
    description: "English to Turkish and Turkish to English document translation in Pakistan for universities, residence, legal and property records. Check sworn/notary rules.",
    url: "https://www.lisan.pk/services/translation/turkish-translation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "English to Turkish Translation Pakistan | Documents | LISAN.PK",
    description: "English to Turkish and Turkish to English document translation in Pakistan for universities, residence, legal and property records. Check sworn/notary rules.",
  }
}

const serviceFaqs = [
  {
    q: "Is an English-to-Turkish translation done in Pakistan accepted by all Turkish universities?",
    a: "No universal rule applies. Boğaziçi University accepts translation-agency versions for documents not in Turkish or English in its registration instructions; Kayseri University specifies a sworn-translator translation with notary approval; Ankara University specifies a notarised sworn translation. Check your university's registration guide."
  },
  {
    q: "What is the difference between a certified translation and yeminli tercüme?",
    a: "A certified translation is accompanied by a translator's statement of competence and accuracy. A Turkish yeminli tercüme is produced by a sworn translator registered with a Turkish notary under the Turkish notarial system."
  },
  {
    q: "Can you provide a Turkish notarised translation while I am in Pakistan?",
    a: "A quotation cannot assume Turkish notarisation. If the receiving authority specifically requires a Turkish notary's seal, that procedure and applicable translator relationship must be checked separately. A Pakistani certificate of translation accuracy does not by itself create Turkish notarial status."
  },
  {
    q: "Can a Turkish transcript be translated into English with grades intact?",
    a: "Yes. A proper translation should retain all course titles, grading symbols, credit/ECTS information and explanatory legends as printed; we do not convert grades unless that is expressly part of an approved, separate analysis."
  },
  {
    q: "Do I need Turkish translation for a residence permit?",
    a: "Some foreign documents require sworn and notarised Turkish translations in specified residence-permit procedures. Use the current category-specific instructions from the Presidency of Migration Management."
  },
  {
    q: "Can you translate a tapu land title into English?",
    a: "Yes, subject to the document's legibility and scope. The translation reports the text; it does not certify land ownership, encumbrances or legal validity."
  },
  {
    q: "Is apostille the same as notarisation or translation?",
    a: "No. Apostille authenticates a public document's official origin for applicable international use; notarisation is a distinct notarial act; translation renders the text into another language."
  },
  {
    q: "What if my source is Urdu rather than English?",
    a: "State Urdu → Turkish specifically when requesting a quote. A bilingual source may also include English and Urdu; we must review the actual pages before defining the translation direction."
  },
  {
    q: "Do you guarantee that the Turkish Embassy will accept my document?",
    a: "No. Acceptance belongs to the relevant authority. We can review its written checklist and provide a translation within the confirmed scope."
  },
  {
    q: "Can you translate Turkish court orders and powers of attorney?",
    a: "We can assess legal-document translation requests, but may need additional time and specialist review. Translation is not a substitute for legal advice, notarial execution or court authentication."
  },
  {
    q: "How fast is Turkish translation delivery?",
    a: "We agree a realistic completion date after seeing the documents, language direction and any formal certification requirements. We do not promise universal same-day delivery."
  },
  {
    q: "Do I need the original document before requesting a quote?",
    a: "A clear scan is usually enough to assess a translation quotation, but the receiving institution or notary may require the physical original later. Follow that institution's instructions."
  },
  {
    q: "Can you translate Pakistani MRC, FRC or birth certificates into Turkish?",
    a: "We can review the request. First identify the receiving institution's required form of translation and any sworn/notarial requirements. The source documents remain issued by the competent Pakistani authority."
  },
  {
    q: "What should I check before paying for a notarised Turkish translation?",
    a: "Ask which notary or consular office will perform the act, which authorised translator will sign, which documents must be presented in original, and which fees are included in the written quotation."
  },
  {
    q: "Are course descriptions and credit hours preserved in university translations?",
    a: "Yes. Course titles, syllabus descriptions, credit hours and grading scales are preserved accurately rather than inventing Turkish equivalents that alter academic meaning."
  },
  {
    q: "Can I translate documents for Turkish diploma equivalence (denklik)?",
    a: "Yes. For YÖK or Ministry of National Education (MEB) denklik procedures, review the exact translation and apostille conditions published for your education level before submitting."
  }
]

const turkishToEnglishDocs = [
  {
    source: "Diploma / Mezuniyet Belgesi",
    purpose: "Education recognition or further study",
    handling: "Correct degree award, faculty and dates."
  },
  {
    source: "Transkript / Not Dökümü",
    purpose: "Transfer, admissions, employment",
    handling: "Preserve course titles, ECTS/credits and grading scale."
  },
  {
    source: "İkamet İzni",
    purpose: "Travel, family or institutional records",
    handling: "Preserve residence permit type and validity without implying immigration status."
  },
  {
    source: "Tapu Senedi",
    purpose: "Property-related foreign proceedings",
    handling: "Translate title fields, parcel identifiers and shares precisely; no legal ownership opinion."
  },
  {
    source: "Nüfus Kayıt Örneği",
    purpose: "Civil-status or family paperwork",
    handling: "Explain record labels and family ties exactly as printed."
  },
  {
    source: "İş Sözleşmesi / Çalışma Belgesi",
    purpose: "Employment or professional use",
    handling: "Distinguish gross/net pay and job title if stated."
  },
  {
    source: "Mahkeme Kararı",
    purpose: "Legal or immigration review",
    handling: "Preserve court names, dispositive text and reference numbers."
  },
  {
    source: "Vekâletname",
    purpose: "Representation / business matters",
    handling: "Distinguish document translation from drafting a legally valid power of attorney."
  }
]

const swornComparison = [
  {
    type: "Professional translation",
    meaning: "Accurate rendering of source content in target language",
    verify: "Whether receiving body accepts an ordinary translation."
  },
  {
    type: "Certified translation",
    meaning: "Translation with signed statement of accuracy/competence from responsible translator",
    verify: "Exact wording, signature and identification demanded by authority."
  },
  {
    type: "Turkish sworn translation (yeminli tercüme)",
    meaning: "Translation completed by person with sworn-translator status for applicable Turkish notarial/consular procedure",
    verify: "Translator's actual notary/consulate relationship and whether that person can sign for this use."
  },
  {
    type: "Notarised translation (noter tasdikli tercüme)",
    meaning: "Translation additionally approved through relevant notarial procedure",
    verify: "Whether notarisation must be completed in Türkiye and which notary will accept it."
  },
  {
    type: "Apostille / legalisation",
    meaning: "Authentication of a public document's official origin as applicable",
    verify: "Whether source or separate notarial act needs authentication; apostille is not proof of linguistic accuracy."
  }
]

export default function TurkishTranslationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "English to Turkish and Turkish to English Translation in Pakistan",
    "serviceType": "Certified Translation Services",
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
    "description": "Certified document translation between English and Turkish in Pakistan for universities, student admissions, residency, tapu and civil records.",
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
        "name": "Turkish Translation",
        "item": "https://www.lisan.pk/services/translation/turkish-translation"
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
            <span className="text-slate-800 font-medium">Turkish Translation</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5 font-sans">
              <Globe2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>English &amp; Turkish Document Services</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.15] mb-6">
              English to Turkish &amp; Turkish to English Document Translation in Pakistan
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-sans mb-6">
              <strong>Need English-to-Turkish translation for a university, Turkish residence procedure or legal file?</strong> LISAN.PK provides document translation quotations for <strong>English &rarr; Turkish</strong> and <strong>Turkish &rarr; English</strong> requests, with careful handling of names, dates, qualifications, official labels and structured records. <strong>A certified translation prepared in Pakistan is not automatically the same as a Turkish <em>yeminli tercüme</em> (sworn translation) or a Turkish-notarised translation</strong>; check the exact requirement of the receiving institution before ordering.
            </p>

            {/* Language Direction Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 font-sans">
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">Direction 1</span>
                <h3 className="font-bold text-slate-900 text-base mt-2 mb-1">English &rarr; Turkish</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Degrees, transcripts, certificates, contracts, letters and supporting documents to be presented to Turkish institutions.
                </p>
              </div>
              <div className="p-5 rounded-xl border border-slate-200 bg-slate-50">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">Direction 2</span>
                <h3 className="font-bold text-slate-900 text-base mt-2 mb-1">Turkish &rarr; English</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Diplomas, transcripts, civil records, employment letters, Turkish property documents (*tapu*) and other records needed outside Türkiye.
                </p>
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
              <p className="text-slate-800 font-medium text-base mb-3 font-sans">
                <strong>Get a document-specific quote:</strong> <Link href="/contact" className="text-emerald-700 font-bold underline">Contact LISAN.PK</Link> &middot; <a href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold underline">WhatsApp +92 328 8155866</a>. Please include the receiving institution and whether it requires a <em>sworn</em>, <em>notarised</em> or <em>consular-approved</em> translation.
              </p>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link href="/contact">
                  <Button 
                    size="lg" 
                    className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 h-12 shadow-sm rounded-xl font-sans"
                  >
                    Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <a href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-slate-300 hover:bg-slate-100 font-bold px-6 h-12 rounded-xl text-slate-800 font-sans"
                  >
                    <MessageSquare className="w-4 h-4 mr-2 text-emerald-700" /> Chat on WhatsApp
                  </Button>
                </a>
                <Link href="/pricing" className="text-emerald-700 font-bold text-sm underline ml-2">
                  View Translation Prices &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <p className="text-amber-900 text-sm leading-relaxed font-sans">
                <strong>Important:</strong> Requirements vary by <strong>university, notary, migration office, consulate, employer and visa category</strong>. A general translation service cannot guarantee that every Turkish institution will accept a Pakistani translation stamp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* Section 1: English-to-Turkish Translation Services */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              English-to-Turkish Translation Services
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              English-to-Turkish document translation is relevant when an institution needs records in <strong>Türkçe</strong> rather than English. Examples include:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-slate-700 text-sm font-sans pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>Academic degrees and provisional certificates.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>Intermediate/FSc and matriculation certificates.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>University transcripts and course descriptions.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>Birth, marriage, family and civil-status certificates.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>Employment and experience letters.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>Affidavits and declarations where translation is permitted.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>Commercial contracts, company records and powers of attorney.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                <span>Property-related correspondence, including *tapu* records where an English source must be translated.</span>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed text-base font-sans pt-2">
              We retain document structure where useful. For academic records, that means preserving <strong>course codes, credit hours, grading notation, marks, scale descriptions, signatures and stamps</strong> instead of inventing Turkish equivalents that alter academic meaning.
            </p>

            <div className="pt-4 border-t border-slate-100 space-y-4">
              <h3 className="text-xl font-bold text-slate-900 font-serif">
                Which English documents need Turkish translation for university admission?
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm font-sans">
                <strong>The university decides.</strong> Different Turkish universities publish different document requirements, and admission-stage rules may differ from final enrolment. For example:
              </p>
              <div className="space-y-3 pl-2">
                <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-sans text-slate-700">
                  <strong>Boğaziçi University:</strong> 2026–27 international undergraduate registration information says translated versions are needed when required documents are <strong>not in Turkish or English</strong>; it says translation-agency translations are acceptable for that stated process. [1]
                </div>
                <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-sans text-slate-700">
                  <strong>Kayseri University:</strong> 2026 final-registration instructions describe an original diploma or certified copy accompanied by a <strong>Turkish translation certified by a sworn translator and notary</strong>. [2]
                </div>
                <div className="p-3.5 rounded-lg border border-slate-200 bg-slate-50 text-xs font-sans text-slate-700">
                  <strong>Ankara University:</strong> international admissions instructions specify a <strong>notarised sworn-translator translation</strong> of the diploma for its stated procedure. [3]
                </div>
              </div>
              <p className="text-slate-600 text-xs font-sans">
                This is why a statement such as &ldquo;all Turkish universities require notarised Turkish translation&rdquo; is incorrect. <strong>Check the specific university, degree level and application stage.</strong>
              </p>
            </div>
          </div>

          {/* Section 2: Turkish-to-English Translation Services */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Turkish-to-English Translation Services
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              <strong>Turkish &rarr; English</strong> requests commonly involve documents issued in Türkiye for use in Pakistan or another English-language filing process. We can review enquiries involving:
            </p>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm font-sans">
                <thead className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-4">Turkish source document</th>
                    <th className="p-4">Typical English translation need</th>
                    <th className="p-4">Special handling</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {turkishToEnglishDocs.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : ""}>
                      <td className="p-4 font-bold text-slate-900 italic whitespace-nowrap">{item.source}</td>
                      <td className="p-4">{item.purpose}</td>
                      <td className="p-4 text-slate-600">{item.handling}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-slate-600 text-sm font-sans leading-relaxed">
              When a Turkish record includes terms with no exact equivalent in Pakistan or another legal system, the translator should use an accurate translation or explanatory notation where necessary—not assert legal equivalence or provide an undocumented legal conclusion.
            </p>
          </div>

          {/* Section 3: Sworn Turkish Translation vs Certified Translation */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Sworn Turkish Translation (<em>Yeminli Tercüme</em>) vs Certified Translation
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              These terms are often confused. They refer to <strong>different documentary and institutional requirements</strong>.
            </p>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm font-sans">
                <thead className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-4">Service or document</th>
                    <th className="p-4">What it generally means</th>
                    <th className="p-4">What to verify</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {swornComparison.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : ""}>
                      <td className="p-4 font-bold text-slate-900">{item.type}</td>
                      <td className="p-4">{item.meaning}</td>
                      <td className="p-4 text-slate-600">{item.verify}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-xl space-y-2">
              <p className="text-amber-900 text-sm leading-relaxed font-sans">
                A translator based in Pakistan may be able to translate between English and Turkish without being a <strong>Turkish sworn translator registered for a specific notarial function</strong>. LISAN.PK must <strong>not represent its translation as Turkish-notarised or Turkish-sworn</strong> unless the requested status and responsible translator&apos;s credentials have actually been checked and arranged.
              </p>
              <p className="text-amber-900 text-sm leading-relaxed font-sans">
                For official procedures, Turkish government guidance and individual university notices show situations where a <strong>sworn Turkish translation plus notary approval</strong> is specifically required. See <a href="https://en.goc.gov.tr/residence-" target="_blank" rel="noopener noreferrer" className="text-emerald-800 underline font-medium">Türkiye Presidency of Migration Management — Residence Permit</a> and <a href="https://intoffice.kayseri.edu.tr/en/c/2131-1/registration-dates-required-documents-for-application-and-language-of-instruction" target="_blank" rel="noopener noreferrer" className="text-emerald-800 underline font-medium">Kayseri University registration instructions</a>.
              </p>
            </div>

            <div className="pt-2 space-y-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-serif mb-1">
                  Can you provide a Turkish notarised translation from Pakistan?
                </h3>
                <p className="text-slate-700 text-sm font-sans leading-relaxed">
                  <strong>Do not assume so from a quotation request.</strong> We first establish where the document will be filed and what the receiver requires. If a Turkish notary or consular procedure is necessary, <strong>the applicable authorised translator and notary/consular route must be confirmed separately</strong>. A company stamp or a declaration signed in Pakistan should not be advertised as an automatic substitute.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-serif mb-1">
                  Does a Turkish Embassy always require sworn translation?
                </h3>
                <p className="text-slate-700 text-sm font-sans leading-relaxed">
                  <strong>No universal answer covers every Turkish visa or consular application.</strong> The correct documents depend on the consular service and application category. Ask for the current instruction issued for your particular case, not a generic agency claim.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4: University Diploma, Transcript & Equivalence */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              University Diploma, Transcript and Equivalence Documents
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              For international students, it helps to distinguish <strong>admission</strong>, <strong>final registration</strong>, <strong>diploma equivalence (<em>denklik</em>)</strong> and <strong>visa/residence</strong> processes. The same document can be treated differently at each stage.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-base font-serif">
                Before requesting translation:
              </h3>
              <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm font-sans">
                <li>Open the relevant university&apos;s current application or enrolment checklist.</li>
                <li>Check whether its stated acceptable language is <strong>Turkish, English or either</strong>.</li>
                <li>Identify any requirement for a Turkish sworn translator, Turkish notary or diplomatic mission certification.</li>
                <li>Check whether the original or apostille is required separately from the translation.</li>
                <li>Confirm the requested terminology for certificates such as <em>Lise Diploması</em>, <em>Not Dökümü</em> or <em>Mezuniyet Belgesi</em>.</li>
                <li>Send the official requirements to the translation provider before agreeing on the quotation.</li>
              </ol>
            </div>

            <p className="text-slate-600 text-sm font-sans">
              <strong>A recent example:</strong> Boğaziçi University&apos;s 2026–27 registration guidance accepts translation-agency translations where it requests them for non-Turkish/non-English records, while another institution&apos;s checklist may specifically require notarised sworn translation. This is a receiving-institution decision, not a universal rule.
            </p>
          </div>

          {/* Section 5: Residence Permits & Civil Records */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Residence Permits, Family Documents and Civil Certificates
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              For residence-related procedures, foreign civil records or support documents may need Turkish translations and, in some cases, notarisation. Türkiye&apos;s <a href="https://en.goc.gov.tr/residence-" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Presidency of Migration Management</a> gives category-specific guidance that includes sworn/notarised Turkish translation requirements for certain documents. <strong>Do not assume every residence-permit applicant must translate every document</strong>, or that the required set is unchanged between students, family residents and other categories.
            </p>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              Examples of documents requiring careful review include:
            </p>
            <ul className="space-y-1.5 text-slate-700 text-sm font-sans pl-2">
              <li>&bull; Birth and marriage registration records.</li>
              <li>&bull; Family registration certificates, custody decisions and divorce records.</li>
              <li>&bull; Sponsor or income statements.</li>
              <li>&bull; Foreign bank letters or declarations submitted to an authority that demands Turkish text.</li>
            </ul>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/services/translation/birth-certificate-translation" className="text-emerald-700 font-bold underline text-sm">
                Birth certificate &amp; FRC translation &rarr;
              </Link>
              <span className="text-slate-300">&bull;</span>
              <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 font-bold underline text-sm">
                Nikah Nama &amp; marriage translation &rarr;
              </Link>
            </div>
          </div>

          {/* Section 6: Property and Tapu Translation */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Property and Land-Title Translation (<em>Tapu</em>)
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              Documents connected to property purchases, leases, title deeds (<em>tapu senedi</em>) or powers of attorney for Turkish real estate need close attention to technical vocabulary. A translation renders the textual description of the parcel, share and annotations; <strong>it does not convey a title opinion, establish clear ownership or replace independent legal due diligence</strong>.
            </p>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              Where an English-language authority needs to understand a Turkish property record, or where an English contract is translated into Turkish for preliminary reference, we preserve parcel numbers, hectare/square-metre units and named parties exactly. For property-document translation in Pakistan, see our <Link href="/services/translation/property-document-translation" className="text-emerald-700 underline font-medium">property document translation guide</Link>.
            </p>
          </div>

          {/* Section 7: Urdu-to-Turkish Translation */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Urdu-to-Turkish Translation: Current Approach
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              We frequently receive requests involving documents written in Urdu (for example, handwritten Nikah Namas, legacy educational records or local-government certificates) that must ultimately be presented in Türkiye. Depending on the authority, the appropriate route may be a direct <strong>Urdu &rarr; Turkish</strong> translation or an <strong>Urdu &rarr; English translation accompanied by a subsequent Turkish translation</strong>. Tell us which method the receiving authority has instructed before commissioning the work.
            </p>
          </div>

          {/* Section 8: Translation Pricing */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Translation Pricing and Transparent Quoting
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              Turkish translation is quoted on a per-document or per-word basis depending on layout complexity, length, legibility and certification scope. Standard academic diplomas are priced differently from dense multi-page transcripts or handwritten civil documents. We do not advertise fixed notary fees for Türkiye from Pakistan; see our transparent pricing baseline at <Link href="/pricing" className="text-emerald-700 underline font-medium">pricing information</Link>.
            </p>
          </div>

          {/* Section 9: FAQs */}
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

          {/* Section 10: CTA Box */}
          <div className="bg-emerald-800 text-white p-8 md:p-10 rounded-2xl shadow-sm space-y-6 font-sans">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">
              Request English-to-Turkish or Turkish-to-English Translation
            </h2>
            <p className="text-emerald-100 leading-relaxed text-base max-w-2xl">
              <strong>Avoid paying for the wrong certification level.</strong> Send us the complete source document and the current requirements from your university, employer, visa authority or notary. We will confirm the correct language direction, translation scope and a transparent quotation.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/contact">
                <Button 
                  size="lg" 
                  className="bg-white text-emerald-900 hover:bg-emerald-50 font-bold px-8 h-12 shadow-sm rounded-xl font-sans"
                >
                  Request a Quote <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-emerald-600 bg-emerald-700/60 hover:bg-emerald-700 text-white font-bold px-6 h-12 rounded-xl font-sans"
                >
                  <MessageSquare className="w-4 h-4 mr-2" /> Chat on WhatsApp
                </Button>
              </a>
              <Link href="/pricing" className="text-emerald-200 hover:text-white font-bold text-sm underline ml-2">
                View Translation Prices &rarr;
              </Link>
            </div>
          </div>

          {/* Section 11: Official sources */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">
              Official sources and verification notes
            </h2>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm pl-2 font-sans">
              <li><a href="https://ogrenciler.bogazici.edu.tr/en/pages/university-registration/8075" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Boğaziçi University — International University Registration, 2026–27</a>. Example where translation-agency versions are accepted for documents not already in Turkish or English.</li>
              <li><a href="https://intoffice.kayseri.edu.tr/en/c/2131-1/registration-dates-required-documents-for-application-and-language-of-instruction" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Kayseri University — 2026 Registration Documents</a>. Example requiring sworn and notary-certified Turkish diploma translation.</li>
              <li><a href="https://isoidb.ankara.edu.tr/en/how-to-apply/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Ankara University — How to Apply</a>. Example of notarised sworn-translator diploma translation.</li>
              <li><a href="https://en.goc.gov.tr/residence-" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Türkiye Presidency of Migration Management — Residence Permit</a>. Check residence-category rules, including certain notarised sworn translation requirements.</li>
              <li><a href="https://www.konsolosluk.gov.tr/Procedure" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Türkiye Ministry of Foreign Affairs — Consular Procedures</a>. Consult the specific consular service for current official translation and certification instructions.</li>
            </ol>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic font-sans">
              Editorial source check: 5 November 2026. No claim is made that LISAN.PK is a Turkish notary, a Turkish sworn translator for all jurisdictions, a consulate or an officially endorsed visa service. Confirm exact Turkish-authority requirements before submitting documents.
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
