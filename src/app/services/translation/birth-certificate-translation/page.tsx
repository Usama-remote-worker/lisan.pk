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
  Users,
  Award
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { EditorialReviewBox } from "@/components/ui/EditorialReviewBox"

export const metadata: Metadata = {
  title: "FRC Translation in Pakistan | NADRA Birth, CRC & Family Documents | LISAN.PK",
  description: "Need FRC translation for a family visa? Compare NADRA FRC, CRC/B-Form, birth, marriage and death records. Check Italy, Swiss and US requirements.",
  alternates: {
    canonical: "https://www.lisan.pk/services/translation/birth-certificate-translation",
  },
  openGraph: {
    title: "FRC Translation Pakistan: NADRA Birth, CRC & MRC | LISAN.PK",
    description: "Need FRC translation for a family visa? Compare NADRA FRC, CRC/B-Form, birth, marriage and death records. Check Italy, Swiss and US requirements.",
    url: "https://www.lisan.pk/services/translation/birth-certificate-translation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FRC Translation Pakistan: NADRA Birth, CRC & MRC | LISAN.PK",
    description: "Need FRC translation for a family visa? Compare NADRA FRC, CRC/B-Form, birth, marriage and death records. Check Italy, Swiss and US requirements.",
  }
}

const serviceFaqs = [
  {
    q: "What is an FRC translation?",
    a: "It is an accurate language translation of your NADRA Family Registration Certificate, preserving all names, relationship categories, registration numbers and dates as printed."
  },
  {
    q: "Can an FRC replace a birth certificate?",
    a: "Only when the specific receiving authority's published instructions allow it (for example, the U.S. State Department's civil-document reciprocity schedule for Pakistan accepts CRC or FRC as an alternative). Many authorities still demand the actual birth certificate."
  },
  {
    q: "What is the difference between CRC and B-Form?",
    a: "They refer to the same NADRA document for children under 18: the Child Registration Certificate."
  },
  {
    q: "Does Italy accept an English translation of an FRC?",
    a: "The Italian Embassy's family-reunion guidance specifies an Italian translation under its stated conformity procedure, alongside a Pakistani apostille. An English translation alone is generally insufficient for that process."
  },
  {
    q: "What does \"per traduzione conforme\" mean for Italy?",
    a: "It refers to the formal validation or declaration of conformity required for the Italian translation of a public document submitted through the Italian diplomatic mission."
  },
  {
    q: "Does Switzerland require an English translation of the CRC?",
    a: "Yes. The Embassy of Switzerland's family-reunion checklist (version 02/2025) explicitly asks for the NADRA Child Registration Certificate with an English translation when a child is concerned."
  },
  {
    q: "Does USCIS accept an FRC translation prepared in Pakistan?",
    a: "USCIS accepts translations accompanied by a certification complying with 8 CFR § 103.2(b)(3). We provide that statement where requested. Check whether your petition requires a birth certificate, an FRC, or both."
  },
  {
    q: "Which FRC category do I need: by birth or by marriage?",
    a: "An FRC by birth lists parents and siblings; an FRC by marriage generally presents spouse and children. Follow the receiving authority's instructions."
  },
  {
    q: "Can you translate a NADRA family certificate into Arabic?",
    a: "Yes, when Arabic is the requested language. First confirm whether the authority requires Arabic, English or another language and whether an additional official step is necessary."
  },
  {
    q: "Can I translate an MRC instead of the Nikah Nama?",
    a: "We can translate either document. Whether one can replace the other is decided by the receiving authority, not by the translator. Some spouse-visa checklists ask for both."
  },
  {
    q: "Is an FRC a marriage certificate?",
    a: "No. It is a family-composition record. An MRC documents registered marriage, and the Nikah Nama is the marriage-contract record."
  },
  {
    q: "Do you translate Pakistani death certificates?",
    a: "Yes. We translate readable registered death certificates for the requested language and intended use. Obtain or correct the official civil record through its competent issuing authority."
  },
  {
    q: "Do I need a stamped or certified translation?",
    a: "That depends on the authority. For example, USCIS has its own translator-certification rule, while Italy's mission explains a particular Italian translation-conformity process. A generic agency stamp should not be assumed sufficient everywhere."
  },
  {
    q: "Can I send a phone photo instead of the original document?",
    a: "A clear photograph may be suitable for obtaining a translation quotation or preparing a draft. The authority receiving the final application may still require the original civil record, its apostille and/or a physical translation."
  },
  {
    q: "How long does FRC translation take?",
    a: "The turnaround is confirmed after reviewing language, page count, scan quality and certification needs. We do not promise a fixed urgent delivery time before evaluating the actual document."
  },
  {
    q: "Will translation fix a missing family member or inconsistent name on the FRC?",
    a: "No. The NADRA or civil-registration authority must correct the source record. We translate what is actually printed and flag inconsistencies that may affect the file."
  },
  {
    q: "Can I get an FRC translation without an apostille?",
    a: "Often a translation can be prepared independently. Whether the final application needs an apostille, notarisation or other verification depends on the destination authority's instructions."
  },
  {
    q: "Are you the agency issuing the FRC, CRC or MRC?",
    a: "No. LISAN.PK provides translation services; it does not issue NADRA identity records, local-government civil certificates, visas or embassy approvals."
  }
]

const documentComparison = [
  {
    doc: "FRC",
    full: "NADRA Family Registration Certificate",
    purpose: "Composition of a registered family group",
    note: "Translate all listed relatives and the correct by birth or by marriage category."
  },
  {
    doc: "CRC / B-Form",
    full: "NADRA Child Registration Certificate for a child under 18",
    purpose: "Child identity and registered family relationship",
    note: "Keep child and parent details exact; some checklists expressly require an English translation."
  },
  {
    doc: "Birth Registration Certificate",
    full: "Civil birth record issued through competent local authority",
    purpose: "Birth, parentage, date and place of birth",
    note: "Verify issuing authority and whether source is already in the destination's accepted language."
  },
  {
    doc: "MRC",
    full: "Marriage Registration Certificate issued by civil-registration authority",
    purpose: "Registered marriage",
    note: "Not identical to the full Nikah Nama marriage contract."
  },
  {
    doc: "Nikah Nama",
    full: "Original marriage contract / registration record",
    purpose: "Contractual details of the marriage",
    note: "Handwritten Urdu and names may require careful reconciliation; translate complete record when required."
  },
  {
    doc: "Death Certificate",
    full: "Civil death registration from competent local authority",
    purpose: "Registered death",
    note: "Do not confuse death-registration evidence with NADRA's cancellation of a deceased person's CNIC."
  }
]

const commonMistakes = [
  {
    mistake: "Assuming an FRC automatically replaces a birth certificate",
    consequence: "Application delayed or rejected by embassies requiring primary birth records",
    solution: "Check if authority accepts alternative records (like US NVC) or requires both (like Italy/Switzerland)"
  },
  {
    mistake: "Translating only selected family members from an FRC",
    consequence: "Receiving officer rejects partial translation for lack of completeness",
    solution: "Translate every listed relative, identification number and administrative annotation"
  },
  {
    mistake: "Providing English translation for Italy family reunion",
    consequence: "Italian consular office requires translation in Italian with conformity statement",
    solution: "Confirm Italian language requirement and \"per traduzione conforme\" validation route"
  },
  {
    mistake: "Confusing computerised MRC with complete Nikah Nama",
    consequence: "Missing contractual conditions, dower details or witnesses needed for spouse visas",
    solution: "Ask receiving authority whether civil MRC, Nikah Nama or both are required"
  },
  {
    mistake: "Assuming a translation stamp replaces a Hague Apostille",
    consequence: "Consular file rejected because public document was not authenticated",
    solution: "Obtain Pakistani apostille on original public document where destination country requires it"
  },
  {
    mistake: "Attempting to correct spelling errors in translation rather than at NADRA",
    consequence: "Discrepancy between passport, CNIC and translation triggers fraud alert",
    solution: "Correct official records at NADRA/Union Council, or provide certified explanation note"
  }
]

export default function BirthCertificateTranslationPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "FRC, CRC and Birth Certificate Translation in Pakistan",
    "serviceType": "Family Document Certified Translation",
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
    "description": "Professional translation of Pakistani family records including NADRA FRC, CRC/B-Form, birth registration, MRC and death certificates for family reunion and visa applications.",
    "areaServed": ["PK", "IT", "CH", "US", "SA", "AE", "GB"]
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
        "name": "FRC & Birth Certificate Translation",
        "item": "https://www.lisan.pk/services/translation/birth-certificate-translation"
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
            <span className="text-slate-800 font-medium">Birth Certificate &amp; FRC</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5 font-sans">
              <Users className="w-3.5 h-3.5 text-emerald-700" />
              <span>NADRA Family Records &amp; Civil Registration</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.15] mb-6">
              FRC, CRC &amp; Birth Certificate Translation in Pakistan for Family Visas
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-sans mb-6">
              <strong>Need an FRC translation for a visa or family reunion?</strong> LISAN.PK translates Pakistani family records—including the NADRA Family Registration Certificate (FRC), Child Registration Certificate (CRC/B-Form), birth registration certificates, Marriage Registration Certificates (MRC) and death certificates—into the language requested by the receiving authority. <strong>An FRC is not automatically a replacement for a birth or marriage certificate:</strong> the correct document and translation depend on the country, visa route and official checklist.
            </p>

            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
              <p className="text-slate-800 font-medium text-base mb-3 font-sans">
                <strong>Request a document-specific quote:</strong> <Link href="/contact" className="text-emerald-700 font-bold underline">Send your documents securely</Link> or <a href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-bold underline">contact us on WhatsApp</a>. Tell us your <strong>destination country, visa category, original document language and receiving authority</strong> before ordering.
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
                <a href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="border-slate-300 hover:bg-slate-100 font-bold px-6 h-12 rounded-xl text-slate-800 font-sans"
                  >
                    <MessageSquare className="w-4 h-4 mr-2 text-emerald-700" /> WhatsApp LISAN.PK
                  </Button>
                </a>
                <Link href="/pricing" className="text-emerald-700 font-bold text-sm underline ml-2">
                  See Pricing Information &rarr;
                </Link>
              </div>
            </div>

            <div className="bg-amber-50/70 border-l-4 border-amber-500 p-4 rounded-r-xl">
              <p className="text-amber-900 text-sm leading-relaxed font-sans">
                <strong>Important:</strong> A translator certifies the accuracy of the translation; a translation does not change the issuing authority, prove an incomplete relationship record, or guarantee visa approval. Apostille, notarisation, consular verification and certified translation are separate procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* Section 1: NADRA FRC Translation */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              NADRA FRC Translation: What Does an FRC Show?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              The <strong>Family Registration Certificate (FRC)</strong> is a NADRA-issued record of a registered person&apos;s family composition. Depending on the requested category, it may show <strong>parents and siblings (by birth)</strong>, <strong>spouse and children (by marriage)</strong> or family information relevant to a registered guardian relationship. NADRA&apos;s record depends on family members being correctly registered in its database; missing or inconsistent records should be corrected through NADRA, not adjusted by a translator.
            </p>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              People search for <em>family registration certificate translation</em> when applying for a spouse visa, child-related application, family reunion, civil-record verification or family-status procedure overseas. The translation must reproduce the relationship details actually printed on the FRC. It must not invent an omitted relative, change the legal category of a relationship or reinterpret an ID number.
            </p>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 space-y-3">
              <h3 className="font-bold text-slate-900 text-base font-serif">
                What we review on an FRC translation:
              </h3>
              <ul className="space-y-2 text-slate-700 text-sm font-sans">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Applicant and relatives&apos; names as written on the source record.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Parent, spouse and child relationship labels; family grouping and sequence.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Identity or registration numbers, including leading zeros and punctuation.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Dates of birth and other dates in their printed format.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Issuer, verification text, QR/code references and visible official marks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>Any mismatched spelling between the FRC, passport, CNIC/NICOP, CRC and marriage records, flagged for the client rather than silently corrected.</span>
                </li>
              </ul>
            </div>

            <p className="text-slate-600 text-sm font-sans pt-2">
              <strong>Check the source:</strong> <a href="https://www.nadra.gov.pk/identityDocument/certificates/frc" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">NADRA Family Registration Certificate</a> and the <a href="https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country/Pakistan.html" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">U.S. Department of State&apos;s Pakistan civil-document guidance</a>.
            </p>
          </div>

          {/* Section 2: Comparison Table */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              FRC vs CRC/B-Form vs Birth Certificate vs MRC: Which Document Do You Need?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              These records serve different purposes. Choosing the wrong one may delay an application even when its translation is perfect.
            </p>

            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm font-sans">
                <thead className="bg-slate-100 text-slate-900 font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-4">Document</th>
                    <th className="p-4">Meaning and issuing context</th>
                    <th className="p-4">Usually used to demonstrate</th>
                    <th className="p-4">Translation consideration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {documentComparison.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : ""}>
                      <td className="p-4 font-bold text-slate-900 whitespace-nowrap">{item.doc}</td>
                      <td className="p-4">{item.full}</td>
                      <td className="p-4">{item.purpose}</td>
                      <td className="p-4 text-slate-600">{item.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-4 bg-amber-50/50 border border-amber-200 rounded-xl">
              <p className="text-amber-900 text-sm leading-relaxed font-sans">
                <strong>A common mistake:</strong> A document displaying the NADRA name is not necessarily <em>issued by NADRA in the same legal capacity</em> as every other document. For birth, marriage and death registration, the <a href="https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country/Pakistan.html" target="_blank" rel="noopener noreferrer" className="text-emerald-800 underline font-medium">U.S. State Department&apos;s Pakistan guidance</a> identifies relevant <strong>local government issuing authorities</strong>, while NADRA maintains linked identity and family data.
              </p>
            </div>

            <div className="pt-4 space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif mb-2">
                  Is an FRC accepted instead of a birth certificate?
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm font-sans">
                  <strong>Sometimes—for a specific process, not everywhere.</strong> The U.S. Department of State&apos;s Pakistan reciprocity page lists <strong>CRC/B-Form or FRC as alternative documents in lieu of a birth registration certificate</strong>. That statement is specific to its civil-document instructions; it is <strong>not a universal substitution rule</strong> for Italy, Switzerland, Saudi Arabia or every private institution. For other destinations, an official checklist may demand <strong>both</strong> the birth certificate and FRC.
                </p>
                <p className="text-slate-700 leading-relaxed text-sm font-sans mt-2">
                  If the receiving authority requests a <em>birth certificate</em> expressly, check its destination-specific rules before substituting an FRC. LISAN.PK can translate the documents you provide, but only the authority can confirm what it will accept. <a href="https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country/Pakistan.html" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Read the official U.S. Pakistan reciprocity table</a>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-slate-900 font-serif mb-2">
                  Is a Child Registration Certificate (CRC) the same as a birth certificate?
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm font-sans">
                  <strong>No.</strong> CRC—often called a <em>B-Form</em>—is a child&apos;s NADRA identity record; a <strong>birth registration certificate</strong> is the civil record of a birth issued by the competent registration office. A particular immigration authority may recognise CRC for an identified purpose, but this does not make the two records universally interchangeable. NADRA confirms CRC is intended for children <strong>under 18</strong>. <a href="https://www.nadra.gov.pk/identityDocument/juvenile" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">NADRA CRC guidance</a>.
                </p>
              </div>
            </div>
          </div>

          {/* Section 3: Italy Family Reunion */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              FRC Translation for Italy Family Reunion
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              <strong>Italy family-reunion applications may require FRC, specific civil documents, Italian translation and a Pakistani apostille.</strong> The exact bundle changes for a spouse, child or parent; do not reuse someone else&apos;s checklist without checking your own visa category and the relevant Italian mission.
            </p>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              The <strong>Italian Embassy in Islamabad&apos;s family-reunion checklist</strong> identifies:
            </p>
            <ul className="space-y-2 text-slate-700 text-sm font-sans pl-2">
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">&bull;</span>
                <span><strong>Spouse:</strong> Marriage Registration Certificate, Nikah Nama, FRC and the applicant&apos;s birth registration certificate; additional evidence where relevant.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">&bull;</span>
                <span><strong>Child:</strong> Child Registration Certificate <strong>and</strong> birth certificate, the parents&apos; marriage records, FRC, and other parental-consent or custody evidence where applicable.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">&bull;</span>
                <span><strong>Parent joining child:</strong> The inviting child&apos;s birth registration certificate and an FRC; dependency evidence is also listed.</span>
              </li>
            </ul>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              The checklist refers to Pakistani <strong>apostille</strong> for relevant documents. Official Italian consular guidance says Pakistani public documents for Italian use require an apostille and an <strong>Italian translation</strong> meeting its stated conformity procedure. The Embassy in Islamabad describes <em>&ldquo;per traduzione conforme&rdquo;</em> for the translation; the Consulate in Karachi separately describes original document + Italian translation + apostille. <strong>The correct method of translating and validating the translation should be checked with the mission handling your case</strong>, particularly whether a translation needs separate formal confirmation.
            </p>
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <p className="text-slate-700 text-sm font-sans leading-relaxed">
                <strong>Do not assume:</strong> An English FRC, an apostille on the source certificate, or an ordinary translation stamp automatically meets Italy&apos;s Italian-translation requirements. Nor does an apostille itself certify the translation&apos;s linguistic accuracy.
              </p>
            </div>
            <p className="text-slate-600 text-sm font-sans">
              <strong>Official sources:</strong> <a href="https://ambislamabad.esteri.it/wp-content/uploads/2024/11/Family-reunion-visa-requirments-1.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Italian Embassy Islamabad — Family Reunion Checklist (PDF)</a>; <a href="https://ambislamabad.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-italiano/traduzione-e-legalizzazione-dei-documenti/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Italian Embassy — translation and apostille guidance</a>; <a href="https://conskarachi.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/traduzione-e-legalizzazione-dei-documenti/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Consulate General of Italy in Karachi</a>.
            </p>

            <div className="pt-2">
              <h3 className="text-xl font-bold text-slate-900 font-serif mb-2">
                Does an FRC need an apostille for Italy?
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm font-sans">
                <strong>For the family-reunion process described in the Italian Embassy&apos;s published checklist, Pakistani supporting civil documents are submitted under its apostille requirement.</strong> Whether your specific FRC needs a particular apostille or accompanying translation certification should be confirmed against the checklist applicable on the <strong>day you submit</strong>. Pakistani apostilles are obtained from the <strong>competent Pakistani authority</strong>, not from LISAN.PK. For a general overview, see our <Link href="/guides/apostille-pakistan" className="text-emerald-700 underline font-medium">Pakistan apostille guide</Link> and <Link href="/guides/pakistan-apostille-country-list" className="text-emerald-700 underline font-medium">apostille country-acceptance guide</Link>.
              </p>
            </div>
          </div>

          {/* Section 4: Switzerland Family Reunion */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              CRC/B-Form English Translation for Switzerland Family Reunion
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              The <strong>Swiss Embassy in Pakistan&apos;s published family-reunion checklist</strong> calls for a NADRA <strong>Child Registration Certificate (CRC) with English translation</strong> when a child is concerned. The same checklist also lists an original birth certificate, the relevant FRC category, and additional marriage or custody records depending on the family situation. An English-translated CRC alone does <strong>not</strong> replace the entire checklist.
            </p>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              In its available checklist (version <strong>02/2025</strong>), the Embassy distinguishes <strong>FRC by birth</strong> from <strong>FRC by marriage</strong> and specifies the information expected in each. Because checklist versions and individual cantonal requests may change, clients should always use the current document list linked through the <a href="https://www.schweiz-pakistan.eda.admin.ch/en/visa-entry-to-and-residence-in-switzerland" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Embassy of Switzerland in Pakistan</a>.
            </p>
            <p className="text-slate-600 text-sm font-sans">
              <strong>Source:</strong> <a href="https://www.eda.admin.ch/content/dam/countries/countries-content/pakistan/visa-information/checklist-2025-pk_EN.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Swiss Embassy Pakistan family-reunion requirements (PDF)</a>.
            </p>
          </div>

          {/* Section 5: U.S. Visa & NVC Requirements */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              U.S. Visa &amp; NVC Requirements: When Is an FRC or CRC Used for Birth Records?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              The <strong>U.S. Department of State&apos;s Pakistan Reciprocity and Civil Documents schedule</strong> states under <em>Birth Certificates</em> that <strong>NADRA Child Registration Certificates (CRC) or Family Registration Certificates (FRC) are accepted as alternative documents in lieu of a birth certificate</strong>.
            </p>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              If an applicant does not have a primary birth certificate and relies on this alternative for a U.S. immigrant or non-immigrant filing, any non-English document must be translated according to <strong>8 CFR &sect; 103.2(b)(3)</strong>. That federal regulation requires the translator to certify that the translation is complete and accurate and that the translator is competent to translate from the foreign language into English.
            </p>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-200">
              <p className="text-slate-800 text-sm leading-relaxed font-sans">
                <strong>What we provide for U.S. filings:</strong> When translating an Urdu or bilingual Pakistani civil record for USCIS or the National Visa Center (NVC), we provide an accuracy certificate containing the translator&apos;s statement, signature and contact details. <Link href="/guides/certificate-of-accuracy-translation-sample" className="text-emerald-700 underline font-medium">See our guide on the Certificate of Translation Accuracy</Link>.
              </p>
            </div>
            <p className="text-slate-600 text-sm font-sans">
              <strong>Sources:</strong> <a href="https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country/Pakistan.html" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">U.S. State Department Pakistan Reciprocity Table</a> and <a href="https://travel.state.gov/content/travel/en/us-visas/immigrate/civil-documents-faq.html" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">NVC Civil Documents FAQs</a>.
            </p>
          </div>

          {/* Section 6: Arabic Translation for Gulf Countries */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Arabic Translation of NADRA Birth, FRC and Family Certificates for Gulf Countries
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              For family visas, residency, school admissions and civil procedures in <strong>Saudi Arabia, the UAE, Qatar, Kuwait, Oman and Bahrain</strong>, Pakistani civil records frequently require translation into <strong>Arabic</strong>.
            </p>
            <ul className="space-y-2 text-slate-700 text-sm font-sans pl-2">
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">&bull;</span>
                <span><strong>Exact name transliteration:</strong> Arabic transliteration must match the applicant&apos;s passport spelling and existing Saudi/UAE residency file (Iqama/Emirates ID).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">&bull;</span>
                <span><strong>MOFA and embassy sequence:</strong> Confirm whether translation precedes or follows MOFA general attestation or Hague Apostille.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="font-bold text-emerald-700">&bull;</span>
                <span><strong>All family members rendered:</strong> Every family member listed on an FRC must be translated completely without omission.</span>
              </li>
            </ul>
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/services/translation/urdu-to-arabic" className="text-emerald-700 font-bold underline text-sm">
                Urdu to Arabic translation service &rarr;
              </Link>
              <span className="text-slate-300">&bull;</span>
              <Link href="/translation-english-to-arabic" className="text-emerald-700 font-bold underline text-sm">
                English to Arabic translation &rarr;
              </Link>
            </div>
          </div>

          {/* Section 7: Death Certificate & MRC */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Death Certificate Translation and Marriage Document Cross-References
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              Pakistani <strong>death certificates</strong> are civil records issued by the relevant Union Council or Cantonment Board. When a family-visa or inheritance process requires translation of a death record, the translation reproduces the exact dates, registration numbers, cause of death (if recorded) and authority details. <strong>Do not confuse a civil death certificate with NADRA&apos;s cancellation of a deceased person&apos;s CNIC.</strong>
            </p>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              Similarly, for spouse visas, distinguish between the computerised <strong>Marriage Registration Certificate (MRC)</strong> and the full <strong>Nikah Nama</strong>. Where an embassy checklist asks for the Nikah Nama, an MRC alone may not suffice. For dedicated marriage-record translation guidance, see our <Link href="/services/translation/nikah-nama-marriage-certificate" className="text-emerald-700 underline font-medium">Nikah Nama &amp; Marriage Certificate translation service</Link>.
            </p>
          </div>

          {/* Section 8: How Our Process Works */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              How Our Family-Document Translation Process Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">Step 1</span>
                <h3 className="font-bold text-slate-900 text-sm font-serif">Document &amp; Requirement Review</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-sans">
                  Send a clear scan or photo. Tell us your destination country, visa category and receiving authority.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">Step 2</span>
                <h3 className="font-bold text-slate-900 text-sm font-serif">Spelling &amp; Data Reconciliation</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-sans">
                  We check names against passports and CNICs, flagging any discrepancy before translating.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">Step 3</span>
                <h3 className="font-bold text-slate-900 text-sm font-serif">Complete Draft &amp; Layout Check</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-sans">
                  Every relative, serial number and official seal is translated in structured tabular layout.
                </p>
              </div>
              <div className="p-4 rounded-xl border border-slate-200 bg-slate-50 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100/60 px-2 py-0.5 rounded">Step 4</span>
                <h3 className="font-bold text-slate-900 text-sm font-serif">Certification &amp; Delivery</h3>
                <p className="text-slate-600 text-xs leading-relaxed font-sans">
                  Signed translation accuracy certificate delivered digitally (PDF) and physical copy if requested.
                </p>
              </div>
            </div>
          </div>

          {/* Section 9: Pricing & Turnaround */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Document Translation Pricing &amp; Turnaround
            </h2>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              Translation costs depend on the document category (standard one-page civil certificate vs multi-entry family registration), target language, legibility and required certification format. We do not publish generic rates that mislead applicants; see our transparent pricing structure on our <Link href="/pricing" className="text-emerald-700 underline font-medium">pricing page</Link>.
            </p>
            <p className="text-slate-700 leading-relaxed text-base font-sans">
              <strong>Turnaround time:</strong> Estimated turnaround is agreed upon document inspection. We evaluate scan quality, language combination and certification needs before confirming a delivery date—we do not offer blanket same-day promises without reviewing the record.
            </p>
          </div>

          {/* Section 10: Common Mistakes */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Common Mistakes to Avoid with Family-Record Translations
            </h2>
            <div className="space-y-4">
              {commonMistakes.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl border border-slate-100 bg-slate-50/50 space-y-1.5 font-sans">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
                    <h3 className="font-bold text-slate-900 text-sm">{item.mistake}</h3>
                  </div>
                  <p className="text-xs text-rose-700 pl-6"><strong>Risk:</strong> {item.consequence}</p>
                  <p className="text-xs text-slate-700 pl-6"><strong>Solution:</strong> {item.solution}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 11: FAQs */}
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

          {/* Section 12: CTA Box */}
          <div className="bg-emerald-800 text-white p-8 md:p-10 rounded-2xl shadow-sm space-y-6 font-sans">
            <h2 className="text-2xl md:text-3xl font-bold font-serif text-white">
              Request Your FRC, CRC or Birth Certificate Translation
            </h2>
            <p className="text-emerald-100 leading-relaxed text-base max-w-2xl">
              <strong>Get the right translation for the right document.</strong> Share the source certificate, destination country, family relationship and checklist (if available). We will confirm the translation scope and issue a clear quotation before work begins.
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
              <a href="https://wa.me/923288155866" target="_blank" rel="noopener noreferrer">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-emerald-600 bg-emerald-700/60 hover:bg-emerald-700 text-white font-bold px-6 h-12 rounded-xl font-sans"
                >
                  <MessageSquare className="w-4 h-4 mr-2" /> WhatsApp LISAN.PK
                </Button>
              </a>
              <Link href="/pricing" className="text-emerald-200 hover:text-white font-bold text-sm underline ml-2">
                See Pricing Information &rarr;
              </Link>
            </div>
          </div>

          {/* Section 13: Official references */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">
              Official references and editorial verification
            </h2>
            <p className="text-xs text-slate-500 font-sans">
              The sources below govern <strong>requirements by the issuing or receiving authority</strong>, not any claimed accreditation of LISAN.PK:
            </p>
            <ol className="list-decimal list-inside space-y-2 text-slate-700 text-sm pl-2 font-sans">
              <li><a href="https://www.nadra.gov.pk/identityDocument/certificates/frc" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">NADRA — Family Registration Certificate</a></li>
              <li><a href="https://www.nadra.gov.pk/identityDocument/juvenile" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">NADRA — Child Registration Certificate (CRC)</a></li>
              <li><a href="https://travel.state.gov/content/travel/en/us-visas/Visa-Reciprocity-and-Civil-Documents-by-Country/Pakistan.html" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">U.S. Department of State — Pakistan Reciprocity and Civil Documents</a></li>
              <li><a href="https://travel.state.gov/content/travel/en/us-visas/immigrate/civil-documents-faq.html" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">U.S. Department of State — NVC Civil Documents FAQs</a></li>
              <li><a href="https://ambislamabad.esteri.it/wp-content/uploads/2024/11/Family-reunion-visa-requirments-1.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Embassy of Italy in Islamabad — Family Reunion Visa Checklist (PDF)</a></li>
              <li><a href="https://ambislamabad.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-italiano/traduzione-e-legalizzazione-dei-documenti/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Embassy of Italy in Islamabad — Translation and Apostille</a></li>
              <li><a href="https://conskarachi.esteri.it/en/servizi-consolari-e-visti/servizi-per-il-cittadino-straniero/traduzione-e-legalizzazione-dei-documenti/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Consulate General of Italy in Karachi — Translation and Legalization</a></li>
              <li><a href="https://www.eda.admin.ch/content/dam/countries/countries-content/pakistan/visa-information/checklist-2025-pk_EN.pdf" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">Embassy of Switzerland in Pakistan — Family Reunion Checklist, version 02/2025 (PDF)</a></li>
              <li><a href="https://www.ecfr.gov/current/title-8/section-103.2" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">8 CFR § 103.2(b)(3), translation rule for USCIS filings</a></li>
            </ol>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500 italic font-sans">
              Editorial source check: 5 November 2026. Always confirm the latest embassy checklist and required translation format immediately before submitting a visa file. LISAN.PK is an independent translation service, not NADRA or a consular authority.
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
