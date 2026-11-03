import { Metadata } from "next"
import Link from "next/link"
import { 
  FileText, 
  Check, 
  HelpCircle, 
  ShieldCheck, 
  ChevronRight,
  Languages,
  Clock,
  Building2,
  Scale,
  PhoneCall,
  Send,
  MapPin,
  FileCheck2,
  ArrowRight,
  Info
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Nikah Nama in English & Arabic Translation | Certified Pakistan Services",
  description: "Certified Urdu to English and Arabic Nikah Nama translation in Pakistan. Accurate 25-column legal contract & NADRA MRC translation for UKVI, USCIS, and Gulf embassies.",
  alternates: {
    canonical: "https://www.lisan.pk/services/translation/nikah-nama-marriage-certificate",
  },
  openGraph: {
    title: "Nikah Nama in English & Arabic Translation | Lisan.pk",
    description: "Official certified Urdu to English and Arabic translation of Pakistani Nikah Nama and NADRA Marriage Registration Certificates. 24-48h delivery.",
    url: "https://www.lisan.pk/services/translation/nikah-nama-marriage-certificate",
    type: "website",
  }
}

const faqData = [
  {
    q: "What is the difference between a Nikah Nama and a NADRA Marriage Registration Certificate (MRC)?",
    a: "The Urdu Nikah Nama is the original legal contract executed at the time of solemnization under the Muslim Family Laws Ordinance, 1961. It contains 25 detailed clauses covering dower (Haq Mehr), special contractual conditions, and witness signatures. The NADRA MRC is an official computer-generated registration certificate issued by the Union Council or Cantonment Board confirming that the marriage has been recorded in the national database. It summarizes key biographic facts but does not reproduce the detailed 25 contractual terms."
  },
  {
    q: "Does USCIS require both the Urdu Nikah Nama and the NADRA MRC translated?",
    a: "According to the U.S. Department of State Pakistan Reciprocity Schedule, consular and USCIS officers routinely expect both documents for spouse immigrant petitions (such as CR-1/IR-1). The NADRA MRC proves government registration, while the certified English translation of the original Urdu Nikah Nama verifies contractual validity, witness identities, age, and dower terms."
  },
  {
    q: "What are the UKVI requirements for Nikah Nama English translation?",
    a: "UK Visas and Immigration (GOV.UK) guidelines require all foreign-language documents to be accompanied by a certified translation. The translation must include written confirmation from the translator that it is a true and accurate translation of the original document, the date of translation, the translator's credentials or agency name, signature, and verifiable contact details."
  },
  {
    q: "Why is an Arabic translation of the Nikah Nama required for Saudi Arabia and the UAE?",
    a: "Government ministries and passport directorates (such as Jawazat in Saudi Arabia and the General Directorate of Residency and Foreigners Affairs in the UAE) operate exclusively in Arabic. An official Arabic translation of your attested marriage certificate is mandatory to process family residence visas (Iqama), spousal sponsorship, child birth registration, and legal marital status verification."
  },
  {
    q: "Can I translate my Nikah Nama into English myself for visa purposes?",
    a: "No. Immigration authorities, foreign embassies, and civil registries strictly reject self-translations submitted by the applicant or their family members, even if fluent in English. Official bodies require an independent, certified translation prepared by a professional agency with an authorized declaration of accuracy, stamps, and credential identification."
  },
  {
    q: "How do you handle difficult handwriting, faded ink, and regional calligraphy?",
    a: "Our senior linguists have over 40 years of institutional experience deciphering dense Nastaliq Urdu handwriting, local registrar script variations, and aged Union Council stamps. If a specific section is physically degraded or illegible in the source scan, it is formally annotated as '[Illegible / Faded]' per international legal translation standards."
  },
  {
    q: "How do you ensure name spellings match current passports?",
    a: "Before beginning the translation, we cross-reference the source Urdu names with high-resolution copies of both spouses' valid international passports. We align the transliteration precisely with your passport spelling to prevent discrepancies that could trigger Requests for Evidence (RFEs) or embassy interview delays."
  },
  {
    q: "How much does certified Nikah Nama translation cost in Pakistan?",
    a: "Pricing is transparent and based on document format and script density. Standard single-page Nikah Nama or NADRA MRC translation ranges from PKR 1,500 to PKR 2,200. A complete four-page traditional Urdu Nikah Nama booklet ranges from PKR 2,500 to PKR 3,800. For official Notary Public attestation, an additional PKR 500 notary charge is included/applicable to provide legal advocate seals and official notary registration."
  },
  {
    q: "What is the turnaround time for digital and physical translation delivery?",
    a: "Digital delivery can be completed within hours. You receive a certified high-resolution PDF with official digital seals via WhatsApp or email. Physical express delivery of stamped and signed hard copies takes 48 or more hours to reach your address anywhere in Pakistan via trackable TCS or Leopard courier."
  },
  {
    q: "What specific information is included on the Certificate of Accuracy as per embassy requirements?",
    a: "Every Nikah Nama translation strictly includes the mandatory certification elements required by UKVI, USCIS, and foreign embassies: 1) a formal Statement of Accuracy certifying complete fidelity to the original Urdu document, 2) the translator's full legal name and professional qualifications, 3) the exact date of translation, and 4) full agency contact details, phone number, and physical office address."
  },
  {
    q: "Where can I get certified Nikah Nama translation near me in Pakistan?",
    a: "LISAN.PK operates a unified digital and physical service across Pakistan. You can send clear document scans via WhatsApp from Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, Faisalabad, Gujrat, Multan, or abroad. We deliver digital certified copies anywhere in minutes and dispatch physical stamped copies to your doorstep."
  }
]

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.lisan.pk/services/translation/nikah-nama-marriage-certificate/#breadcrumb",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
        { "@type": "ListItem", "position": 2, "name": "Translation Services", "item": "https://www.lisan.pk/services" },
        { "@type": "ListItem", "position": 3, "name": "Nikah Nama & Marriage Certificate Translation", "item": "https://www.lisan.pk/services/translation/nikah-nama-marriage-certificate" }
      ]
    },
    {
      "@type": "Service",
      "@id": "https://www.lisan.pk/services/translation/nikah-nama-marriage-certificate/#service",
      "name": "Nikah Nama in English & Arabic Translation Services",
      "serviceType": "Certified Legal Translation",
      "provider": {
        "@type": "Organization",
        "name": "Lisan.pk",
        "url": "https://www.lisan.pk",
        "logo": "https://www.lisan.pk/logo.png",
        "telephone": "+923044296295",
        "email": "info@lisan.pk"
      },
      "areaServed": [
        { "@type": "Country", "name": "Pakistan" },
        { "@type": "Country", "name": "United Kingdom" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Saudi Arabia" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Qatar" }
      ],
      "description": "Certified Urdu to English and Arabic translation of Pakistani Nikah Nama and NADRA Marriage Registration Certificates (MRC) for UKVI, USCIS, and Gulf embassies.",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Marriage Document Translation",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Urdu to English Nikah Nama Translation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Urdu to Arabic Nikah Nama Translation"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "NADRA Marriage Certificate (MRC) Translation"
            }
          }
        ]
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.lisan.pk/services/translation/nikah-nama-marriage-certificate/#faq",
      "mainEntity": faqData.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.a
        }
      }))
    }
  ]
}

export default function NikahNamaTranslationPage() {
  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 text-white pt-24 pb-20 overflow-hidden border-b border-emerald-900/60">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-600/10 via-transparent to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03] pointer-events-none"></div>

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
          {/* Breadcrumb Navigation */}
          <nav className="text-xs text-emerald-300/80 mb-6 flex items-center gap-2 font-medium">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">Nikah Nama Translation</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
            <Scale className="w-3.5 h-3.5" /> Certified Marriage Document Translation • English & Arabic
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif tracking-tight text-white mb-6 leading-tight">
            Certified Nikah Nama in English & Arabic Translation Services in Pakistan
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl mb-8">
            Accurate legal translation of your traditional handwritten Urdu Nikah Nama and computerized NADRA Marriage Registration Certificate (MRC). Certified for UKVI spouse visas, USCIS immigration petitions, and Gulf family residence permits.
          </p>

          {/* Direct Answer Box (Featured Snippet Optimization) */}
          <div className="bg-emerald-950/80 border-2 border-emerald-500/40 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md mb-8">
            <div className="flex items-start gap-3.5">
              <div className="p-2 bg-emerald-500/20 text-emerald-400 rounded-xl shrink-0 mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <div className="text-slate-200 text-sm sm:text-base leading-relaxed">
                <strong className="text-emerald-300 font-serif block mb-1.5 text-base sm:text-lg">
                  What is a Nikah Nama translation and when is it required?
                </strong>
                A <strong>Nikah Nama translation</strong> is a legally certified linguistic conversion of Pakistan&apos;s traditional Islamic marriage contract (or NADRA Marriage Registration Certificate) into English or Arabic, attested with an authorized translator&apos;s statement of accuracy, institutional seal, and credential reference. <strong>English translation</strong> is required by Western immigration authorities (such as UKVI in the United Kingdom, USCIS in the United States, IRCC in Canada, and Australian immigration) for spouse settlement visas, citizenship applications, and legal name updates. <strong>Arabic translation</strong> is mandatory for family residence permits (Iqama), spousal sponsorship, and civil registration in Saudi Arabia, the United Arab Emirates, Qatar, Kuwait, Bahrain, and Oman.
              </div>
            </div>
          </div>

          {/* Conversion CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="https://wa.me/923044296295?text=Assalamualaikum%2C%20I%20need%20certified%20Nikah%20Nama%20translation%20for%20visa%20processing."
              target="_blank"
              rel="noopener noreferrer"
              data-lead="whatsapp"
              id="hero-wa-btn"
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-emerald-900/40"
            >
              <Send className="w-4 h-4" />
              <span>Send Document on WhatsApp</span>
            </a>
            <a
              href="tel:+923044296295"
              data-lead="phone"
              id="hero-phone-btn"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-4 bg-white/10 hover:bg-white/15 text-white border border-white/20 font-bold rounded-xl text-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>Call Us: 0304 4296295</span>
            </a>
          </div>

          {/* Trust Value Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-300">
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Full Certificate of Accuracy</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Digital Delivery in Hours</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Courier Delivery: 48+ Hours</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-3 flex items-center gap-2.5">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Notary Certification (+PKR 500)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <div className="container mx-auto px-4 max-w-5xl py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content Column */}
          <article className="lg:col-span-2 space-y-14 text-slate-700">

            {/* Section 1: Overview */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4">
                1. Nikah Nama Translation Services in Pakistan
              </h2>
              <p className="leading-relaxed mb-4 text-sm sm:text-base">
                In Pakistan, the primary legal instrument establishing a valid Islamic marriage is the <strong>Nikah Nama</strong>, registered under the <em>Muslim Family Laws Ordinance, 1961</em>. While this historical Urdu document is universally binding within domestic courts and municipal authorities, foreign embassies and immigration bodies cannot decipher handwritten Nastaliq Urdu calligraphy.
              </p>
              <p className="leading-relaxed mb-4 text-sm sm:text-base">
                Whether you reside in <strong>Lahore, Karachi, Islamabad, Rawalpindi, Peshawar, Faisalabad, Gujrat, or Multan</strong>—or belong to the overseas Pakistani diaspora applying for spousal immigration—obtaining an official, certified <strong>nikah nama in english</strong> or Arabic is the critical prerequisite to establishing your legal marriage abroad.
              </p>
              <p className="leading-relaxed text-sm sm:text-base">
                At <strong>LISAN.PK</strong>, our legal translators specialize in transcribing complex registrar handwriting, regional linguistic idioms, Islamic calendar dates, and official Union Council seals into pristine English and Arabic layouts mirroring the original structure.
              </p>
            </section>

            {/* Section 2: Urdu-to-English Nikah Nama Translation */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4">
                2. Urdu-to-English Nikah Nama Translation
              </h2>
              <p className="leading-relaxed mb-6 text-sm sm:text-base">
                A professional <strong>nikah nama translation in english</strong> must be exhaustive. Pakistani Nikah Namas consist of standard legal forms containing up to <strong>25 specific clauses</strong>. Many automated or amateur translations omit complex handwritten clauses or dower schedules, resulting in immediate delays or Requests for Evidence (RFEs) from foreign visa officers.
              </p>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-slate-900 font-serif mb-3 text-base">
                  The 25 Clauses Covered in Our English Translation:
                </h3>
                <div className="grid sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                  <div className="space-y-2">
                    <p><strong>Columns 1–4:</strong> Names, wards, ages, and addresses of the bridegroom and bride.</p>
                    <p><strong>Columns 5–6:</strong> Groom&apos;s father&apos;s name and bride&apos;s marital status (virgin, widow, or divorced).</p>
                    <p><strong>Columns 7–10:</strong> Identification of the bride&apos;s Vakil (legal representative) and appointed witnesses.</p>
                    <p><strong>Columns 11–12:</strong> Groom&apos;s Vakil and witness credentials.</p>
                  </div>
                  <div className="space-y-2">
                    <p><strong>Columns 13–16:</strong> <em>Haq Mehr</em> (Dower): Total sum, prompt portion (Mu&apos;ajjal), deferred portion (Mu&apos;wajjal), and property considerations.</p>
                    <p><strong>Columns 17–20:</strong> Special contractual terms, delegated right of divorce (<em>Tafweed-e-Talaq</em>), and maintenance stipulations.</p>
                    <p><strong>Columns 21–22:</strong> Husband&apos;s existing wives and Arbitration Council consent under Section 6.</p>
                    <p><strong>Columns 23–25:</strong> Signatures, thumb impressions of spouses, witnesses, and Nikah Registrar seal.</p>
                  </div>
                </div>
              </div>

              <p className="leading-relaxed text-sm sm:text-base">
                Our <strong>english translation of nikah nama</strong> strictly preserves the tabular design of the official form. Any unreadable marks or faded registrar stamps are formally footnoted with translator remarks, guaranteeing full transparency for visa adjudication.
              </p>
            </section>

            {/* Section 3: Urdu-to-Arabic Nikah Nama Translation */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4">
                3. Urdu-to-Arabic Nikah Nama Translation
              </h2>
              <p className="leading-relaxed mb-4 text-sm sm:text-base">
                For applicants moving to Saudi Arabia, the United Arab Emirates, Qatar, Kuwait, Oman, or Bahrain, an <strong>arabic nikah nama</strong> translation is a statutory requirement. Civil registries across the GCC will not process applications without an official <em>&apos;Aqd Zawaj</em> (عقد زواج شرعي) translation.
              </p>
              <p className="leading-relaxed mb-4 text-sm sm:text-base">
                Arabic translation requires rigorous knowledge of classical Sharia jurisprudence terminology. Dower rights must be correctly formulated as <em>Mahr Mu&apos;ajjal</em> (مهر معجل) and <em>Mahr Mu&apos;ajjal</em> (مهر مؤجل), while the date of solemnization must be synchronized between the Islamic Hijri calendar and the Gregorian calendar.
              </p>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center justify-between text-xs sm:text-sm">
                <span className="font-medium text-emerald-900">
                  Planning a family visa or Iqama sponsorship for Gulf countries?
                </span>
                <Link
                  href="/blog/nikah-nama-arabic-translation"
                  className="font-bold text-emerald-700 underline hover:text-emerald-800 shrink-0 ml-3"
                >
                  Read Arabic Translation Guide →
                </Link>
              </div>
            </section>

            {/* Section 4: Difference Between Nikah Nama and NADRA MRC */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4">
                4. Difference Between Nikah Nama and Marriage Registration Certificate (MRC)
              </h2>
              <p className="leading-relaxed mb-6 text-sm sm:text-base">
                Many clients confuse the handwritten Urdu Nikah Nama with the computerized <strong>NADRA Marriage Registration Certificate (MRC)</strong>. Understanding the legal difference is essential for choosing the right document to translate:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="p-3.5 rounded-tl-xl">Feature</th>
                      <th className="p-3.5">Urdu Nikah Nama</th>
                      <th className="p-3.5 rounded-tr-xl">NADRA Marriage Certificate (MRC)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-slate-50">
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Issuing Entity</td>
                      <td className="p-3.5">Licensed Nikah Registrar / Union Council</td>
                      <td className="p-3.5">NADRA / Local Government Union Council</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Document Type</td>
                      <td className="p-3.5">Substantive, legally binding Islamic contract</td>
                      <td className="p-3.5">Computerized civil registration slip</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Language</td>
                      <td className="p-3.5">Urdu (handwritten script)</td>
                      <td className="p-3.5">Bilingual (Printed English and Urdu)</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Content Scope</td>
                      <td className="p-3.5">Full 25 columns: dower schedule, conditions, witnesses</td>
                      <td className="p-3.5">Summary data: names, CNICs, marriage date, registration ID</td>
                    </tr>
                    <tr>
                      <td className="p-3.5 font-bold text-slate-900">Legal Weight</td>
                      <td className="p-3.5">Establishes specific spousal and financial covenants</td>
                      <td className="p-3.5">Confirms registration in national civil database</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p className="leading-relaxed text-sm sm:text-base">
                While the NADRA MRC contains basic English text, its certificate details, Union Council stamps, and Arabic requirements for Gulf embassies frequently necessitate certified translation and attestation.
              </p>
            </section>

            {/* Section 5: When an MRC Is Sufficient and When Both are Required */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4">
                5. When an MRC Is Sufficient and When Additional Documents May Be Required
              </h2>
              <p className="leading-relaxed mb-4 text-sm sm:text-base">
                Requirements differ substantially across destination countries and visa streams. <strong>Not every embassy requires both documents</strong>, but submitting only an MRC in situations where the full contract is mandated can delay your petition by months:
              </p>

              <div className="space-y-4 text-xs sm:text-sm">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    When the NADRA MRC Alone Is Generally Sufficient:
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Short-term visit visas, standard tourist visas (such as Schengen visitor applications), general dependent travel, and administrative record updates where proving basic marital relationship suffices.
                  </p>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl">
                  <h4 className="font-bold text-slate-900 mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                    When Both the Full Nikah Nama & NADRA MRC Are Required:
                  </h4>
                  <p className="text-slate-600 leading-relaxed">
                    Immigrant spouse petitions (such as U.S. CR-1/IR-1, UK Settlement Visas, and Canadian Spousal Sponsorship), legal proceedings involving dower enforcement, inheritance claims, or instances where a caseworker must verify parental consent, witness identities, or prior divorce validity.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6: Gulf Countries Requirements */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4">
                6. Translation Requirements for Saudi Arabia & Gulf Countries
              </h2>
              <p className="leading-relaxed mb-4 text-sm sm:text-base">
                For entry into <strong>Saudi Arabia, the UAE, Qatar, Kuwait, Oman, and Bahrain</strong>, the procedural sequence for marriage documents must follow official consular guidelines:
              </p>

              <ol className="list-decimal pl-5 space-y-3 mb-6 text-xs sm:text-sm leading-relaxed">
                <li>
                  <strong>NADRA Registration:</strong> Obtain the official computerized MRC from your Union Council.
                </li>
                <li>
                  <strong>MOFA Pakistan Attestation / Apostille:</strong> Submit the original MRC to the Ministry of Foreign Affairs (MOFA) in Islamabad, Lahore, Karachi, or designated centers.
                </li>
                <li>
                  <strong>Certified Arabic Translation:</strong> Have your attested document translated into professional Arabic by an accredited translation agency.
                </li>
                <li>
                  <strong>Embassy Legalization / Verification:</strong> Depending on the destination (e.g., Saudi Cultural Mission or UAE Embassy), submit the translation for final consular stamping.
                </li>
              </ol>

              <div className="p-4 bg-amber-50 rounded-2xl border border-amber-200 text-xs sm:text-sm text-amber-900">
                <strong>Critical Rule for Gulf Visas:</strong> The transliterated Arabic names on your translated Nikah Nama must match the Arabic name spellings appearing on your spouse&apos;s Iqama or passport. Any single letter mismatch will cause rejection at the Jawazat visa window.
              </div>
            </section>

            {/* Section 7: UKVI and U.S. Immigration Requirements */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4">
                7. Translation Requirements for UKVI and U.S. Immigration
              </h2>
              <p className="leading-relaxed mb-6 text-sm sm:text-base">
                Western immigration frameworks maintain strict statutory rules regarding foreign-language civil documents:
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-sky-100 text-sky-800 rounded-md text-[11px] font-bold uppercase mb-3">
                    🇺🇸 United States
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 font-serif text-base">U.S. Department of State & USCIS</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    Per the <em>U.S. Department of State Pakistan Reciprocity Schedule</em>, consular officers require the NADRA MRC and frequently demand the certified English translation of the Urdu Nikah Nama.
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Under <strong>USCIS 8 CFR 103.2(b)(3)</strong>, any foreign document must include a certified English translation with an official statement attesting that the translator is competent and the translation is complete and accurate.
                  </p>
                </div>

                <div className="p-5 bg-slate-50 border border-slate-200 rounded-2xl">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-indigo-100 text-indigo-800 rounded-md text-[11px] font-bold uppercase mb-3">
                    🇬🇧 United Kingdom
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 font-serif text-base">UK Visas and Immigration (UKVI)</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    According to <em>GOV.UK guidance on foreign documents</em>, your certified translation must include:
                  </p>
                  <ul className="list-disc pl-4 text-xs text-slate-600 space-y-1">
                    <li>Confirmation that it is a true translation of original</li>
                    <li>Date of the translation</li>
                    <li>Full name and signature of the translator</li>
                    <li>Contact details and official registration of agency</li>
                  </ul>
                </div>
              </div>

              {/* Embassy Mandated Certificate Elements Card */}
              <div className="p-6 bg-slate-900 text-white rounded-2xl border border-emerald-500/30 my-6">
                <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-3">
                  <ShieldCheck className="w-4 h-4" /> Embassy-Mandated Certification Package
                </div>
                <h3 className="font-bold text-lg font-serif mb-2">
                  What Every Nikah Nama Translation Must Include (As Per Official Embassy Rules)
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  To prevent visa rejection or Requests for Evidence (RFEs), foreign embassies (including UKVI and USCIS 8 CFR 103.2(b)(3)) mandate that marriage translations strictly contain the following four certified elements:
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <strong className="text-emerald-300 block mb-1">1. Formal Statement of Accuracy:</strong>
                    A signed legal declaration attesting that the English/Arabic rendering is a true, faithful, and accurate translation of the original Urdu record.
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <strong className="text-emerald-300 block mb-1">2. Translator&apos;s Full Legal Name:</strong>
                    The full name and verified linguistic credentials of the professional translator who executed the translation.
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <strong className="text-emerald-300 block mb-1">3. Exact Date of Translation:</strong>
                    The official date on which the translation was certified and stamped for consular tracking.
                  </div>
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <strong className="text-emerald-300 block mb-1">4. Verifiable Contact Details:</strong>
                    Complete physical office address, phone numbers, and official email of the translation agency for embassy authentication checks.
                  </div>
                </div>
              </div>

              <p className="leading-relaxed text-xs sm:text-sm text-slate-500 italic">
                *LISAN.PK provides all four statutory elements on official letterhead with serialized authentication seals. We do not claim universal acceptance or official government endorsement, as final decision-making power rests solely with immigration caseworkers.
              </p>
            </section>

            {/* Section 8: Documents Needed to Request Translation */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4">
                8. Documents Needed to Request Translation
              </h2>
              <p className="leading-relaxed mb-6 text-sm sm:text-base">
                To initiate a certified Nikah Nama translation with zero administrative friction, prepare clear scans or high-resolution photos of the following:
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/60">
                  <FileCheck2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Original Urdu Nikah Nama:</strong> Complete pages (including front registration details and reverse condition sections) showing all signatures and stamps clearly.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/60">
                  <FileCheck2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">NADRA Marriage Registration Certificate (MRC):</strong> Front and back scan of the computerized certificate (if issued).
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/60">
                  <FileCheck2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Passport Identity Pages:</strong> Clear scans of both spouses&apos; valid passports to confirm exact English or Arabic spelling preferences.
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/60">
                  <FileCheck2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">National ID Cards (CNIC/NICOP):</strong> Helpful for resolving any faded dates or parental identity details.
                  </div>
                </div>
              </div>
            </section>

            {/* Section 9: Our Translation Process */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4">
                9. Our 5-Step Certified Translation Process
              </h2>
              <p className="leading-relaxed mb-6 text-sm sm:text-base">
                We maintain an error-free, systematic translation workflow refined over four decades:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Digital Document Submission</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Upload your scans via WhatsApp or email. Our intake coordinator examines scan legibility, registrar stamps, and page integrity.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Passport-Matched Transliteration</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Before drafting, we confirm English and Arabic spellings against your passports, ensuring zero variance in names, patronymics, and locations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Legal Drafting & Mirror Layout</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      Our certified legal linguist translates all 25 contractual clauses, mirroring the exact column design, seals, and handwriting annotations.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Independent Quality Audit</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      A senior proofreader verifies dates, dower figures, and legal terminology, then attaches the formal signed Certificate of Accuracy and agency seal.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 text-sm">
                    5
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">Digital & Courier Dispatch</h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                      You receive an official high-resolution PDF instantly. Physical stamped hard copies are dispatched nationwide via trackable courier.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 10: Pricing & Turnaround */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4">
                10. Pricing, Notary Charges & Turnaround Times (Verified Business Information)
              </h2>
              <p className="leading-relaxed mb-6 text-sm sm:text-base">
                We maintain complete transparency in our pricing structure, courier logistics, and legal attestation fees:
              </p>

              <div className="grid sm:grid-cols-3 gap-4 mb-6">
                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-2.5 py-1 rounded-full">
                      Standard MRC
                    </span>
                    <h3 className="font-bold text-slate-900 mt-3 text-base">NADRA MRC Translation</h3>
                    <p className="text-xs text-slate-500 mt-1">Computerized English/Arabic Certificate</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <span className="text-xl font-black text-slate-900">PKR 1,500 – 2,200</span>
                    <p className="text-[11px] text-slate-500 mt-1">Digital Delivery: Within Hours</p>
                  </div>
                </div>

                <div className="p-5 bg-emerald-50/50 rounded-2xl border-2 border-emerald-500/30 flex flex-col justify-between relative">
                  <div className="absolute -top-2.5 right-4 bg-emerald-600 text-white text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full">
                    Most Popular
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded-full">
                      Full Legal
                    </span>
                    <h3 className="font-bold text-slate-900 mt-3 text-base">Urdu Nikah Nama (Full)</h3>
                    <p className="text-xs text-slate-500 mt-1">Complete 25-Column Contract</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-emerald-200/60">
                    <span className="text-xl font-black text-slate-900">PKR 2,500 – 3,800</span>
                    <p className="text-[11px] text-slate-500 mt-1">Digital Delivery: Within Hours</p>
                  </div>
                </div>

                <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-700 bg-slate-200 px-2.5 py-1 rounded-full">
                      Complete Pack
                    </span>
                    <h3 className="font-bold text-slate-900 mt-3 text-base">Nikah Nama + MRC Combo</h3>
                    <p className="text-xs text-slate-500 mt-1">Both documents for immigrant visas</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <span className="text-xl font-black text-slate-900">PKR 3,500 – 5,000</span>
                    <p className="text-[11px] text-slate-500 mt-1">Digital Delivery: Within Hours</p>
                  </div>
                </div>
              </div>

              {/* Critical Turnaround and Fee Highlights */}
              <div className="space-y-3 mb-4 text-xs sm:text-sm">
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-start gap-3">
                  <Clock className="w-5 h-5 text-emerald-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-950 block mb-1">
                      Digital Delivery vs. Express Physical Delivery Timelines:
                    </strong>
                    <ul className="list-disc pl-4 space-y-1 text-emerald-900/90 text-xs sm:text-sm">
                      <li><strong>Digital Delivery:</strong> Can be completed in just a few hours. High-resolution certified PDF with digital stamp and Statement of Accuracy delivered directly via WhatsApp or email.</li>
                      <li><strong>Physical Courier Delivery:</strong> Express delivery of physical hard copies with embossed wet stamps takes <strong>48 or more hours</strong> to reach your address via TCS or Leopard courier nationwide.</li>
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-amber-50 border border-amber-200 rounded-2xl flex items-start gap-3">
                  <Scale className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-950 block mb-1">
                      Notary Public Attestation (+PKR 500 Included / Applicable):
                    </strong>
                    <p className="text-amber-900/90 text-xs sm:text-sm">
                      For legal court submissions, foreign apostille, or specific consular verification, an <strong>additional PKR 500 notary charge</strong> is included / added for official Notary Public certification, legal advocate endorsement, and official government registry stamping.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 11: Frequently Asked Questions */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-6">
                11. Frequently Asked Questions
              </h2>

              <div className="space-y-4">
                {faqData.map((faq, idx) => (
                  <div key={idx} className="p-5 bg-slate-50 rounded-2xl border border-slate-200/80">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base font-serif mb-2">
                      Q: {faq.q}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 12: Regional City Hubs & Interlinking */}
            <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                <MapPin className="w-3.5 h-3.5" /> Localized Services Across Pakistan
              </div>
              <h2 className="text-2xl font-bold font-serif mb-3">
                12. Nikah Nama Translation by Major Cities
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
                Need localized document pickup, in-person consultation, or regional courier service? Select your city for localized Nikah Nama translation and MOFA attestation guidelines:
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-bold mb-8">
                <Link
                  href="/locations/lahore/nikah-nama-translation"
                  className="p-3 bg-white/10 hover:bg-emerald-600 rounded-xl transition-all flex items-center justify-between group"
                >
                  <span>Lahore Division</span>
                  <span className="text-emerald-400 group-hover:text-white">→</span>
                </Link>
                <Link
                  href="/locations/karachi/nikah-nama-translation"
                  className="p-3 bg-white/10 hover:bg-emerald-600 rounded-xl transition-all flex items-center justify-between group"
                >
                  <span>Karachi Region</span>
                  <span className="text-emerald-400 group-hover:text-white">→</span>
                </Link>
                <Link
                  href="/locations/rawalpindi/nikah-nama-translation"
                  className="p-3 bg-white/10 hover:bg-emerald-600 rounded-xl transition-all flex items-center justify-between group"
                >
                  <span>Rawalpindi City</span>
                  <span className="text-emerald-400 group-hover:text-white">→</span>
                </Link>
                <Link
                  href="/locations/peshawar/nikah-nama-translation"
                  className="p-3 bg-white/10 hover:bg-emerald-600 rounded-xl transition-all flex items-center justify-between group"
                >
                  <span>Peshawar KP Hub</span>
                  <span className="text-emerald-400 group-hover:text-white">→</span>
                </Link>
                <Link
                  href="/locations/gujrat/nikah-nama-translation"
                  className="p-3 bg-white/10 hover:bg-emerald-600 rounded-xl transition-all flex items-center justify-between group"
                >
                  <span>Gujrat District</span>
                  <span className="text-emerald-400 group-hover:text-white">→</span>
                </Link>
                <Link
                  href="/locations/islamabad/nikah-nama-translation"
                  className="p-3 bg-white/10 hover:bg-emerald-600 rounded-xl transition-all flex items-center justify-between group"
                >
                  <span>Islamabad Capital</span>
                  <span className="text-emerald-400 group-hover:text-white">→</span>
                </Link>
              </div>

              {/* Related Document Hub Links */}
              <div className="pt-6 border-t border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Related Civil Document Services
                </h3>
                <div className="flex flex-wrap gap-2 text-xs">
                  <Link
                    href="/services/translation/birth-certificate-translation"
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition-colors"
                  >
                    Birth Certificate Translation
                  </Link>
                  <Link
                    href="/services/uscis-certified-translation/marriage-certificate"
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition-colors"
                  >
                    USCIS Marriage Certificate Guide
                  </Link>
                  <Link
                    href="/services/attestation"
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition-colors"
                  >
                    Embassy & MOFA Attestation
                  </Link>
                  <Link
                    href="/blog/nikah-nama-arabic-translation"
                    className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-slate-200 transition-colors"
                  >
                    Gulf Arabic Translation Article
                  </Link>
                </div>
              </div>
            </section>
          </article>

          {/* Sticky Conversion Sidebar */}
          <aside className="space-y-6">
            <div className="bg-white p-7 rounded-3xl shadow-xl border border-slate-200 sticky top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-extrabold uppercase tracking-wider mb-4">
                ⚡ Rapid Quote & Verification
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-serif mb-2">
                Get Certified Translation
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                Send your Nikah Nama or MRC scan via WhatsApp. Receive a verified quote and turnaround schedule within 15 minutes.
              </p>

              <div className="space-y-3.5 mb-6">
                <a
                  href="https://wa.me/923044296295?text=Assalamualaikum%2C%20I%20need%20my%20Nikah%20Nama%20translated.%20Please%20provide%20a%20quote."
                  target="_blank"
                  rel="noopener noreferrer"
                  data-lead="whatsapp"
                  id="sidebar-wa-primary"
                  className="block w-full"
                >
                  <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 rounded-xl text-sm shadow-md flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    <span>WhatsApp Document Now</span>
                  </Button>
                </a>

                <a
                  href="tel:+923044296295"
                  data-lead="phone"
                  id="sidebar-phone-primary"
                  className="block w-full"
                >
                  <Button variant="outline" className="w-full border-slate-300 hover:bg-slate-50 text-slate-800 font-bold h-12 rounded-xl text-sm flex items-center justify-center gap-2">
                    <PhoneCall className="w-4 h-4 text-emerald-600" />
                    <span>Call Us (0304 4296295)</span>
                  </Button>
                </a>
              </div>

              {/* Verified Process Standards */}
              <div className="border-t border-slate-100 pt-5 space-y-3 text-xs text-slate-600">
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Digital Delivery in Hours</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Physical Delivery: 48+ Hours</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Statement of Accuracy + Translator Name</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Translation Date & Contact Details</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Notary Charges: +PKR 500 Included</span>
                </div>
              </div>

              {/* Sample Document Note */}
              <div className="mt-6 pt-5 border-t border-slate-100 bg-slate-50 p-4 rounded-xl text-[11px] text-slate-500 leading-relaxed">
                <strong>Need an official sample preview?</strong> Contact our consultant on WhatsApp to view an approved, anonymized certified translation template before ordering.
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  )
}
