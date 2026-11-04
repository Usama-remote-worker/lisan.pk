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
  Download,
  Search,
  Globe2,
  XCircle,
  AlertCircle
} from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Pakistan Apostille Countries List (2026): Accepted, Objected & Non-Member Destinations | LISAN.PK",
  description: "Which countries accept a Pakistani apostille? Check the 2026 country table, eight objections including Germany and the Netherlands, and UAE/Qatar/Kuwait legalisation routes.",
  alternates: {
    canonical: "https://www.lisan.pk/guides/pakistan-apostille-country-list",
  },
  openGraph: {
    title: "Pakistan Apostille Countries List (2026): Accepted, Objected & Non-Member Destinations | LISAN.PK",
    description: "Which countries accept a Pakistani apostille? Check the 2026 country table, eight objections including Germany and the Netherlands, and UAE/Qatar/Kuwait legalisation routes.",
    url: "https://www.lisan.pk/guides/pakistan-apostille-country-list",
    type: "article",
    publishedTime: "2026-11-10T00:00:00Z",
    modifiedTime: "2026-11-05T00:00:00Z",
  }
}

const guideFaqs = [
  {
    "q": "Which countries accept Pakistan apostille in 2026?",
    "a": "The Apostille Convention can apply between Pakistan and other contracting parties where it is in force and no relevant objection prevents bilateral application. Common examples include Saudi Arabia, the UK, the US, Canada, Italy, Spain, Türkiye, Oman and Bahrain. See the tables above and check current HCCH records before submission."
  },
  {
    "q": "How many countries objected to Pakistan's accession?",
    "a": "The checked HCCH Pakistan-specific notice lists eight: Germany, Czechia, Poland, Austria, Finland, the Netherlands, Denmark and Greece. A later withdrawal would change the applicable relationship, so verify the live notice."
  },
  {
    "q": "Is Germany an apostille country for Pakistan documents?",
    "a": "No, not under the bilateral Convention relationship. Germany objected to Pakistan's accession. German authorities may require document verification, and the German Embassy does not offer routine legalisation for many Pakistani civil records."
  },
  {
    "q": "Can I apostille a Pakistani degree for Austria?",
    "a": "You may be able to have an eligible Pakistani public document apostilled for use in other destinations, but the apostille is not effective under the Convention between Pakistan and Austria. Ask the Austrian authority for the correct requirements."
  },
  {
    "q": "Can I use an apostilled Pakistani marriage certificate in the Netherlands?",
    "a": "No, not on the basis of a Pakistani apostille. Follow the Netherlands' dedicated Pakistan document-legalisation instructions and confirm translation requirements."
  },
  {
    "q": "Is Saudi Arabia on the Pakistan apostille accepted list?",
    "a": "Yes, the Convention applies between Pakistan and Saudi Arabia. However, the receiving Saudi institution can impose additional document-specific verification or translation requirements."
  },
  {
    "q": "Is the UAE part of the Hague Apostille Convention?",
    "a": "No, as of this guide's fact-check date. Consult UAE MOFA's embassy attestation service for Pakistan-issued documents."
  },
  {
    "q": "Is Qatar an apostille country for Pakistani documents?",
    "a": "No, as of this fact-check. Use Qatar's documented consular/foreign-document attestation guidance rather than assuming an apostille replaces it."
  },
  {
    "q": "Does Kuwait recognise a Pakistani apostille instead of embassy authentication?",
    "a": "The Apostille Convention does not currently apply between Pakistan and Kuwait. Ask the Kuwaiti recipient or mission for applicable attestation steps."
  },
  {
    "q": "Why is Finland on some generic apostille-country lists?",
    "a": "Finland is a Contracting Party generally but is also one of the countries that objected to Pakistan's accession. A generic country list that does not check the bilateral relationship is incomplete."
  },
  {
    "q": "Is a Pakistan-issued apostille mandatory for UK or US visa applications?",
    "a": "Not automatically. The relevant visa programme sets its evidence rules. For example, some processes focus on certified translations of non-English documents rather than apostille."
  },
  {
    "q": "What if an apostille country is absent from the current MOFA portal?",
    "a": "Recheck the official HCCH entry-into-force date, objection notices and Pakistan MOFA directory. Contact the portal or competent authority if the eligibility appears inconsistent. Do not pay a third party to “force” a country selection."
  },
  {
    "q": "Is Thailand currently accepting Pakistani apostilles?",
    "a": "HCCH lists 28 February 2027 as Thailand's planned entry-into-force date. In November 2026, the Convention is not yet in force for Thailand; check again when it enters into force and verify any applicable objections."
  },
  {
    "q": "Does Pakistan accept the Convention route for India?",
    "a": "No. Pakistan's HCCH declaration says the Convention shall not apply to India. A generic list showing India as an Apostille Convention party does not override that Pakistan-specific declaration."
  },
  {
    "q": "Are all Pakistani documents eligible for an apostille?",
    "a": "No. Eligibility depends on the nature of the public document and Pakistan MOFA's rules. Some records require prior issuer verification or other preparation. Check the official MOFA apostille service (https://apostille.mofa.gov.pk/) for the specific document."
  },
  {
    "q": "Can LISAN.PK issue an apostille?",
    "a": "No. Apostilles are issued by designated competent public authorities, not by private translation agencies. LISAN.PK can discuss translation requirements and provide a translation quotation where appropriate; official attestation remains with the competent government authorities."
  },
  {
    "q": "Does my apostille cover my Arabic or English translation?",
    "a": "Not automatically. An apostille on a source document does not certify a separate translation. Check whether the recipient needs a signed translator's certificate, additional notarisation or separate authentication."
  }
]

const quickStatusDestinations = [
  { dest: "Saudi Arabia", status: "Yes — Convention applies", nextStep: "Ask the receiving Saudi office whether the specific document requires other checks or translation.", type: "accepted" },
  { dest: "United Kingdom", status: "Yes — Convention applies", nextStep: "Confirm whether your receiving organisation actually needs an apostille; some applications need a certified English translation instead.", type: "accepted" },
  { dest: "United States", status: "Yes — Convention applies", nextStep: "The U.S. agency decides whether apostille is needed; USCIS generally focuses on prescribed document and translation evidence.", type: "accepted" },
  { dest: "Canada", status: "Yes — Convention applies", nextStep: "Check the institution or provincial authority's actual document requirements.", type: "accepted" },
  { dest: "Italy", status: "Yes — Convention applies", nextStep: "Confirm translation, consular and local registry instructions for the exact application.", type: "accepted" },
  { dest: "Spain", status: "Yes — Convention applies", nextStep: "Confirm translation and document-specific requirements.", type: "accepted" },
  { dest: "France", status: "Yes — Convention applies", nextStep: "Confirm whether a translation or other formality is additionally required.", type: "accepted" },
  { dest: "Switzerland", status: "Yes — Convention applies", nextStep: "Ask the cantonal or receiving authority which documents need an apostille.", type: "accepted" },
  { dest: "Türkiye", status: "Yes — Convention applies", nextStep: "Confirm translation and notarisation requirements of the receiving Turkish authority.", type: "accepted" },
  { dest: "Oman", status: "Yes — Convention applies", nextStep: "Check the particular employer, school or government department.", type: "accepted" },
  { dest: "Bahrain", status: "Yes — Convention applies", nextStep: "Check the particular receiving department and document category.", type: "accepted" },
  { dest: "Australia", status: "Yes — Convention applies", nextStep: "Confirm whether the intended application calls for an apostille at all.", type: "accepted" },
  { dest: "New Zealand", status: "Yes — Convention applies", nextStep: "Check the precise receiving authority's instructions.", type: "accepted" },
  { dest: "Ireland", status: "Yes — Convention applies", nextStep: "Confirm authority-specific translation and authentication rules.", type: "accepted" },
  { dest: "China (mainland)", status: "Yes — Convention applies", nextStep: "Verify that the recipient accepts the particular class of public document.", type: "accepted" },
  { dest: "Japan", status: "Yes — Convention applies", nextStep: "Confirm translation and document requirements.", type: "accepted" },
  { dest: "Republic of Korea (South Korea)", status: "Yes — Convention applies", nextStep: "Confirm issuer and document requirements.", type: "accepted" },
  { dest: "Germany", status: "No — Germany objected to Pakistan's accession", nextStep: "Do not assume the German Embassy will legalise the document. German authorities may require their own document-verification procedure.", type: "objected" },
  { dest: "Austria", status: "No — objection", nextStep: "Ask the Austrian receiving authority/mission for the required authentication route.", type: "objected" },
  { dest: "Netherlands", status: "No — objection", nextStep: "Follow the Netherlands' Pakistan-specific legalisation instructions, not apostille.", type: "objected" },
  { dest: "Czechia (Czech Republic)", status: "No — objection", nextStep: "Request country-specific authentication guidance.", type: "objected" },
  { dest: "Denmark", status: "No — objection", nextStep: "Request country-specific authentication guidance.", type: "objected" },
  { dest: "Finland", status: "No — objection", nextStep: "Request country-specific authentication guidance.", type: "objected" },
  { dest: "Greece", status: "No — objection", nextStep: "Request country-specific authentication guidance.", type: "objected" },
  { dest: "Poland", status: "No — objection", nextStep: "Request country-specific authentication guidance.", type: "objected" },
  { dest: "India", status: "No — Pakistan expressly excluded India in its HCCH declaration", nextStep: "Ask the receiving authority about the applicable non-apostille document-verification route.", type: "declaration" },
  { dest: "Israel", status: "Not an applicable treaty route under Pakistan's non-recognition declaration", nextStep: "Do not infer bilateral operation from a generic Convention party list.", type: "declaration" },
  { dest: "United Arab Emirates (UAE)", status: "No — not a Convention party", nextStep: "Follow Pakistan MOFA and UAE MOFA/embassy attestation requirements for your document.", type: "nonparty" },
  { dest: "Qatar", status: "No — not a Convention party", nextStep: "Follow the Qatar MOFA/mission legalisation instructions.", type: "nonparty" },
  { dest: "Kuwait", status: "No — not a Convention party", nextStep: "Ask the Kuwaiti mission/receiving authority for the correct legalisation chain.", type: "nonparty" },
  { dest: "Malaysia", status: "No — not a Convention party", nextStep: "Confirm the consular/agency authentication route with the receiving authority.", type: "nonparty" },
  { dest: "Thailand", status: "Not yet — Convention scheduled to enter into force on 28 February 2027", nextStep: "Until entry into force, confirm the non-apostille route. Recheck objections and operational rules after that date.", type: "future" }
]

const eightObjections = [
  { country: "Germany", date: "24 October 2022", bilateral: "No" },
  { country: "Czechia", date: "23 November 2022", bilateral: "No" },
  { country: "Poland", date: "30 November 2022", bilateral: "No" },
  { country: "Austria", date: "12 December 2022", bilateral: "No" },
  { country: "Finland", date: "12 December 2022", bilateral: "No" },
  { country: "Netherlands (including listed Kingdom territories)", date: "15 December 2022", bilateral: "No" },
  { country: "Denmark", date: "2 January 2023", bilateral: "No" },
  { country: "Greece", date: "5 January 2023", bilateral: "No" }
]

const countries118 = [
  ["Albania", "Cyprus", "Malawi", "Samoa"],
  ["Algeria", "Dominica", "Malta", "San Marino"],
  ["Andorra", "Dominican Republic", "Marshall Islands", "Sao Tome and Principe"],
  ["Antigua and Barbuda", "Ecuador", "Mauritius", "Saudi Arabia"],
  ["Argentina", "El Salvador", "Mexico", "Senegal"],
  ["Armenia", "Estonia", "Monaco", "Serbia"],
  ["Australia", "Eswatini", "Mongolia", "Seychelles"],
  ["Azerbaijan", "Fiji", "Montenegro", "Singapore"],
  ["Bahamas", "France", "Morocco", "Slovakia"],
  ["Bahrain", "Georgia", "Namibia", "Slovenia"],
  ["Bangladesh", "Grenada", "New Zealand", "South Africa"],
  ["Barbados", "Guatemala", "Nicaragua", "Spain"],
  ["Belarus", "Guyana", "Niue", "Suriname"],
  ["Belgium", "Honduras", "North Macedonia", "Sweden"],
  ["Belize", "Hungary", "Norway", "Switzerland"],
  ["Bolivia", "Iceland", "Oman", "Tajikistan"],
  ["Bosnia and Herzegovina", "Indonesia", "Palau", "Tonga"],
  ["Botswana", "Ireland", "Panama", "Trinidad and Tobago"],
  ["Brazil", "Italy", "Paraguay", "Tunisia"],
  ["Brunei Darussalam", "Jamaica", "Peru", "Türkiye"],
  ["Bulgaria", "Japan", "Philippines", "Ukraine"],
  ["Burundi", "Kazakhstan", "Portugal", "United Kingdom"],
  ["Cabo Verde", "Kosovo", "Republic of Korea", "United States"],
  ["Canada", "Kyrgyzstan", "Republic of Moldova", "Uruguay"],
  ["Chile", "Latvia", "Romania", "Uzbekistan"],
  ["China", "Lesotho", "Russian Federation", "Vanuatu"],
  ["Colombia", "Liberia", "Rwanda", "Venezuela"],
  ["Cook Islands", "Liechtenstein", "Saint Kitts and Nevis", "Viet Nam"],
  ["Costa Rica", "Lithuania", "Saint Lucia", "—"],
  ["Croatia", "Luxembourg", "Saint Vincent and the Grenadines", "—"]
]

export default function PakistanApostilleCountryListPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Pakistan Apostille Countries List (2026): Accepted, Objected & Non-Member Destinations",
    "description": "Which countries accept a Pakistani apostille? Check the 2026 country table, eight objections including Germany and the Netherlands, and UAE/Qatar/Kuwait legalisation routes.",
    "datePublished": "2026-11-10T00:00:00Z",
    "dateModified": "2026-11-05T00:00:00Z",
    "mainEntityOfPage": "https://www.lisan.pk/guides/pakistan-apostille-country-list",
    "author": {
      "@type": "Organization",
      "name": "LISAN.PK Research & Editorial Team",
      "url": "https://www.lisan.pk"
    },
    "publisher": {
      "@type": "Organization",
      "name": "LISAN.PK",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.lisan.pk/images/lisan-logo.png"
      }
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
        "name": "Pakistan Apostille Countries List",
        "item": "https://www.lisan.pk/guides/pakistan-apostille-country-list"
      }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": guideFaqs.map(f => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Header */}
      <div className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white border-b border-slate-700/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-12 pb-14">
          <nav className="flex items-center gap-2 text-xs font-semibold text-emerald-400 mb-6 tracking-wide uppercase">
            <Link href="/" className="hover:text-emerald-300 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <Link href="/guides" className="hover:text-emerald-300 transition-colors">Guides</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
            <span className="text-slate-300">Apostille Country List</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-950/80 text-emerald-300 border border-emerald-700/60 mb-5">
            <Globe2 className="w-3.5 h-3.5 text-emerald-400" />
            HCCH Treaty Status & Pakistan Objection Matrix
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif tracking-tight text-white mb-6 leading-[1.15]">
            Pakistan Apostille Countries List (2026): Accepted, Objected and Non-Member Countries
          </h1>

          <div className="bg-emerald-950/40 border border-emerald-700/40 rounded-2xl p-5 sm:p-6 mb-6">
            <p className="text-base sm:text-lg text-emerald-100/90 leading-relaxed font-sans">
              <strong>A Pakistani apostille can replace routine embassy legalisation only when the Hague Apostille Convention applies between Pakistan and the country where the document will be used.</strong> It generally applies to countries such as <strong>Saudi Arabia, the United Kingdom, the United States, Canada and Italy</strong>; it <strong>does not apply between Pakistan and Germany, Austria, the Netherlands or five other objecting countries</strong>. The <strong>UAE, Qatar and Kuwait are not parties to the Apostille Convention</strong> and usually require a different attestation route.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 border-t border-slate-700/80 pt-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span><strong>Last checked:</strong> 5 November 2026</span>
            </div>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Fact-checked via HCCH & MOFA official status</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10">

        {/* Jump Navigation Bar */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sm:p-5 mb-10">
          <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">On-Page Quick Navigation</p>
          <div className="flex flex-wrap gap-2 text-xs sm:text-sm">
            <a href="#quick-status" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 font-medium transition-colors border border-slate-200/80">Quick status</a>
            <a href="#eight-objections" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 font-medium transition-colors border border-slate-200/80">Eight objections</a>
            <a href="#full-country-list" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 font-medium transition-colors border border-slate-200/80">Full country list (118)</a>
            <a href="#germany-austria-netherlands" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 font-medium transition-colors border border-slate-200/80">Germany–Austria–Netherlands</a>
            <a href="#uae-qatar-kuwait" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 font-medium transition-colors border border-slate-200/80">UAE–Qatar–Kuwait</a>
            <a href="#decision-tree" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 font-medium transition-colors border border-slate-200/80">Decision tree</a>
            <a href="#faq" className="px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-emerald-50 text-slate-800 hover:text-emerald-800 font-medium transition-colors border border-slate-200/80">FAQ</a>
            <a href="#download-checklist" className="px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-semibold transition-colors border border-emerald-200 flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5" /> PDF Checklist
            </a>
          </div>
        </div>

        {/* Fact-check Date Note & Download Callout */}
        <div id="download-checklist" className="p-5 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200 mb-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="font-bold text-emerald-950 text-sm sm:text-base flex items-center gap-2">
              <Download className="w-4 h-4 text-emerald-700" />
              Download Destination Supplement
            </h3>
            <p className="text-xs sm:text-sm text-emerald-900/80">
              Download the static <strong>Pakistan Apostille Destination Checklist (2026 PDF)</strong> for offline review. Note that bilateral treaty relations can change; always check this live page for official updates.
            </p>
          </div>
          <a 
            href="/downloads/pakistan-apostille-destination-checklist-2026.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        {/* Introductory note */}
        <p className="text-slate-700 leading-relaxed mb-8 text-base sm:text-lg">
          <strong>Last checked: 5 November 2026.</strong> Convention relationships can change. Confirm the latest HCCH <a href="https://www.hcch.net/en/instruments/conventions/status-table/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">official status table</a>, <a href="https://www.hcch.net/de/instruments/conventions/status-table/notifications/?csid=1466&disp=type" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Pakistan-specific objection notices</a>, and <a href="https://attestation.mofa.gov.pk/countries" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:text-emerald-800 underline font-medium">Pakistan MOFA destination directory</a> <strong>before paying</strong>. A receiving university, employer, embassy or registrar can also specify additional document and translation requirements.
        </p>

        {/* SECTION 1: QUICK ANSWER TABLE */}
        <section id="quick-status" className="mb-14 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4 pb-2 border-b border-slate-200">
            Pakistani apostille country table: quick answer
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                  <th scope="col" className="p-3.5 sm:p-4 font-bold w-1/4">Destination</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold w-1/3">Does a Pakistan-issued apostille work under the Convention?</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Practical next step</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {quickStatusDestinations.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">{row.dest}</td>
                    <td className="p-3.5 sm:p-4 align-top">
                      <span className={`font-semibold ${
                        row.type === 'accepted' ? 'text-emerald-800' :
                        row.type === 'objected' ? 'text-rose-800' :
                        row.type === 'declaration' ? 'text-amber-800' :
                        row.type === 'future' ? 'text-blue-800' : 'text-slate-800'
                      }`}>
                        {row.status}
                      </span>
                    </td>
                    <td className="p-3.5 sm:p-4 text-slate-700 align-top leading-relaxed text-xs sm:text-sm">{row.nextStep}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong>A vital distinction:</strong> “Both countries belong to the Convention” is <strong>not enough</strong>. When a country formally objects to Pakistan&apos;s accession, the Convention does not operate <strong>between that country and Pakistan</strong>. Germany, the Netherlands and the other objecting states are Convention members generally, but that does not make a Pakistani apostille effective for them. [<a href="https://www.hcch.net/de/instruments/conventions/status-table/notifications/?csid=1466&disp=type" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Source: HCCH Convention status and Pakistan objection notices</a>].
          </div>
        </section>

        {/* SECTION 2: EIGHT OBJECTIONS */}
        <section id="eight-objections" className="mb-14 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4 pb-2 border-b border-slate-200">
            Countries that objected to Pakistan&apos;s accession — the complete eight-country list
          </h2>

          <p className="text-slate-700 leading-relaxed mb-6 text-base">
            The HCCH&apos;s depositary notification lists <strong>eight objections</strong> to Pakistan&apos;s accession. <strong>The following objection dates refer to 2022–2023 notices, not to a new 2026 decision.</strong> We found no withdrawal of these eight Pakistan-specific objections in the checked official status material as of 5 November 2026.
          </p>

          <div className="overflow-x-auto rounded-xl border border-rose-200 shadow-sm bg-white mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-rose-50 text-rose-950 border-b border-rose-200">
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Objecting country</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Objection notified</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Does the Convention apply bilaterally to Pakistani documents?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-100">
                {eightObjections.map((row, idx) => (
                  <tr key={idx} className="hover:bg-rose-50/40 transition-colors">
                    <td className="p-3.5 sm:p-4 font-bold text-slate-900">{row.country}</td>
                    <td className="p-3.5 sm:p-4 text-slate-600">{row.date}</td>
                    <td className="p-3.5 sm:p-4 font-bold text-rose-800">{row.bilateral}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 mb-8">
            Official evidence: <a href="https://www.hcch.net/de/instruments/conventions/status-table/notifications/?csid=1466&disp=type" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">HCCH — objections to Pakistan&apos;s accession</a>. <strong>Recheck for any later withdrawal immediately before publication or a client submission.</strong>
          </p>

          {/* Detailed Objection Breakdown */}
          <div id="germany-austria-netherlands" className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                Does Germany accept a Pakistani apostille?
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                <strong>No, not as an apostille under the Convention between Germany and Pakistan.</strong> Germany formally objected to Pakistan&apos;s accession. For many Pakistani civil-status documents, the <a href="https://pakistan.diplo.de/pk-en/service/legal-uess-1680522" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">German Missions in Pakistan</a> expressly explain that they <strong>cannot attest or legalise</strong> Pakistani birth or marriage certificates. German officials may instead request verification through a designated procedure. Therefore, an instruction saying simply “get a Pakistani apostille, then visit the German Embassy for a stamp” is misleading.
              </p>
              <div className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-700">
                <strong>What to do:</strong> Ask the <strong>specific German authority</strong> (university, Standesamt, visa section or other office) what it requires for your certificate. Then follow the German mission&apos;s published document-verification guidance where applicable. Translation requirements must also be checked separately.
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                Does Austria accept a Pakistani apostille?
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                <strong>No — Austria&apos;s objection means the Convention does not operate between Austria and Pakistan.</strong> Ask the Austrian authority or mission for the correct route for your degree, birth record, marriage certificate or police certificate. Do not buy an apostille solely because Austria is a Hague Convention party in general.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                Can I use a Pakistan apostille in the Netherlands?
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                <strong>No.</strong> The Dutch government&apos;s <a href="https://www.netherlandsworldwide.nl/legalisation/countries-apostille" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">country list</a> explicitly warns that a document apostilled in Pakistan <strong>cannot be used in the Netherlands on that basis</strong>. Its <a href="https://www.netherlandsworldwide.nl/legalisation/foreign-documents/pakistan" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Pakistan-specific legalisation page</a> instructs applicants to have Pakistani documents legalised by Pakistan&apos;s Ministry of Foreign Affairs, with further steps depending on the document and destination use. Follow that official country guide rather than general apostille advice.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                What about Finland, Denmark, Poland, Greece and Czechia?
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                These five countries also objected. Do not treat them as normal apostille destinations for documents issued in Pakistan. The <strong>receiving authority&apos;s specific authentication process</strong> controls the next steps. The same principle applies even if a non-governmental country list or a general apostille portal includes the country name.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 3: 118 OTHER CONVENTION PARTIES */}
        <section id="full-country-list" className="mb-14 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4 pb-2 border-b border-slate-200">
            Other current Convention parties: alphabetical Pakistan-apostille reference
          </h2>

          <p className="text-slate-700 leading-relaxed mb-6 text-base">
            <strong>The following 118 destinations</strong> appear as Convention parties in force and are not among the eight listed Pakistan-objecting states or the separate India/non-recognition exclusions in Pakistan&apos;s HCCH declaration, based on records checked on 5 November 2026. This is a <strong>treaty-status guide</strong>, not a promise that every document will be accepted by every office. The eight objecting countries, Pakistan itself, future-effective Thailand, <strong>India</strong> and <strong>Israel</strong> are deliberately excluded. Pakistan has formally declared that the Convention does not apply to India or entities that it does not recognise.
          </p>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                  <th scope="col" className="p-3 font-bold w-1/4">Destination</th>
                  <th scope="col" className="p-3 font-bold w-1/4">Destination</th>
                  <th scope="col" className="p-3 font-bold w-1/4">Destination</th>
                  <th scope="col" className="p-3 font-bold w-1/4">Destination</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {countries118.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="p-2.5 sm:p-3 text-slate-800 font-medium">{row[0]}</td>
                    <td className="p-2.5 sm:p-3 text-slate-800 font-medium">{row[1]}</td>
                    <td className="p-2.5 sm:p-3 text-slate-800 font-medium">{row[2]}</td>
                    <td className="p-2.5 sm:p-3 text-slate-800 font-medium">{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-900 leading-relaxed space-y-2 mb-6">
            <p>
              <strong>Additional treaty exception — India and non-recognised entities:</strong> Pakistan&apos;s <a href="https://www.hcch.net/en/instruments/conventions/status-table/notifications/?csid=1466&disp=resdn" target="_blank" rel="noopener noreferrer" className="text-amber-950 underline font-semibold">HCCH declaration attached to its accession</a> expressly says the Convention <strong>shall not apply to India or entities it does not recognise</strong>. India is therefore <strong>not</strong> an effective Pakistan-apostille destination, although India is listed as a Convention party. Israel is also not shown as an applicable Pakistan destination given Pakistan&apos;s non-recognition. For any sensitive recognition or territorial question, check the latest depositary record and receiving authority; do not infer bilateral operation from an HCCH party list alone.
            </p>
            <p className="text-amber-800">
              The alphabetical reference is derived from the HCCH <a href="https://www.hcch.net/en/instruments/conventions/status-table/?cid=41" target="_blank" rel="noopener noreferrer" className="underline font-semibold">Convention status table</a> (last update shown there: <strong>30 June 2026</strong>), checked with the Pakistan-specific objection notices. <strong>Do not equate treaty status with routine acceptance:</strong> each destination&apos;s document rules and any other bilateral objection or special territorial application must be checked for the precise intended use. If the official status table changes, update this table rather than copying old country directories.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
            <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
              Is an apostille required for every country in the table?
            </h3>
            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              <strong>No.</strong> An apostille is a method of authenticating a public document <strong>when an authority asks for it</strong>. A UK visa application, a U.S. immigration submission and a European university application may have different evidence rules. Do not pay for apostilling documents until the receiving body confirms the requirement. Read <Link href="/guides/apostille-pakistan" className="text-emerald-700 underline font-semibold">Apostille in Pakistan: Step-by-Step Process</Link> and <Link href="/guides/certified-translation-vs-apostille-pakistan" className="text-emerald-700 underline font-semibold">Certified Translation vs Notarization vs Apostille</Link>.
            </p>
          </div>
        </section>

        {/* SECTION 4: UAE, QATAR, KUWAIT */}
        <section id="uae-qatar-kuwait" className="mb-14 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4 pb-2 border-b border-slate-200">
            UAE, Qatar and Kuwait: why are they not Pakistan apostille destinations?
          </h2>

          <p className="text-slate-700 leading-relaxed mb-6 text-base">
            <strong>They are not currently parties to the 1961 Apostille Convention</strong>, according to the HCCH status table checked on 5 November 2026. They are in a different category from Germany and Austria: the latter <strong>are parties but objected specifically to Pakistan&apos;s accession</strong>; the UAE, Qatar and Kuwait are <strong>not parties at all</strong>.
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                Does the UAE accept a Pakistani apostille?
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                <strong>Not as a Hague Apostille Convention substitute for legalisation.</strong> For Pakistan-issued documents intended for the UAE, refer to the <a href="https://www.mofa.gov.ae/en/Missions/Islamabad/Services/Services-for-Individuals/Attestation-Information" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">UAE Embassy in Islamabad&apos;s attestation guidance</a>. Its service describes attestation of documents issued outside the UAE and may include digital processing while still requiring an original physical document. <strong>Digital attestation is not the same as UAE joining the Apostille Convention.</strong> Verify Pakistan MOFA prerequisites, UAE embassy/consulate steps and the receiving UAE department&apos;s instructions for your document.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                What is the Qatar embassy attestation route from Pakistan?
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                Qatar MOFA offers <a href="https://mofa.gov.qa/en/eservices/attestation/other-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">attestation for foreign-issued documents</a>. Its official guidance refers to recognition of relevant official seals and signatures, including Qatari missions abroad or recognised foreign missions, and an online service for completing foreign attestation. The order depends on document type, prior attestations and the receiving authority. <strong>Do not represent a Pakistani apostille as replacing these requirements.</strong>
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                Does Kuwait require embassy attestation?
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                <strong>Kuwait is not listed as a party to the Apostille Convention.</strong> Its <a href="https://www.mofa.gov.kw/en/pages/consular-services/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Ministry of Foreign Affairs consular services</a> includes certification/verification of official documents. The specific embassy and ministry steps should be confirmed for your document, and may differ for academic, civil and commercial records. A blanket three-stamp chain for every Kuwaiti application would be unreliable.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900">
                Why does the MOFA portal not show UAE, Germany or Austria under apostille?
              </h3>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                They are <strong>not eligible for the same reason</strong>: UAE is a <strong>non-party</strong>; Germany and Austria are <strong>party countries that objected to Pakistan&apos;s accession</strong>. Pakistan MOFA&apos;s <a href="https://attestation.mofa.gov.pk/countries" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">country directory</a> distinguishes apostille from general attestation, while the HCCH records the underlying treaty relationships. If a portal, checklist or old article conflicts with these records, verify the <em>current</em> country relationship before ordering a service.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: HOW TO DECIDE / DECISION TREE */}
        <section id="decision-tree" className="mb-14 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-4 pb-2 border-b border-slate-200">
            How to decide: apostille, general attestation or document verification
          </h2>

          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm bg-white mb-6">
            <table className="w-full text-left text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                  <th scope="col" className="p-3.5 sm:p-4 font-bold w-1/3">Your situation</th>
                  <th scope="col" className="p-3.5 sm:p-4 font-bold">Safer decision process</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">Destination is an HCCH party and did not object to Pakistan</td>
                  <td className="p-3.5 sm:p-4 text-slate-700 align-top">Ask whether the recipient requires an <strong>apostille for this public document</strong>, and whether translation is needed.</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">Destination is one of the eight countries objecting to Pakistan</td>
                  <td className="p-3.5 sm:p-4 text-slate-700 align-top">Ask for that country&apos;s <strong>Pakistan-specific procedure</strong>; it may be legalisation or separate verification, not necessarily an embassy stamp.</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">Destination is not an Apostille Convention party</td>
                  <td className="p-3.5 sm:p-4 text-slate-700 align-top">Check <strong>Pakistan MOFA general attestation</strong> and the receiving country&apos;s embassy/mission legalisation rules.</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">Destination is not clear or submission is to a private entity</td>
                  <td className="p-3.5 sm:p-4 text-slate-700 align-top">Ask for written requirements from the actual receiving authority before paying.</td>
                </tr>
                <tr className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-3.5 sm:p-4 font-bold text-slate-900 align-top">Certificate is already apostilled but has no translation</td>
                  <td className="p-3.5 sm:p-4 text-slate-700 align-top">Determine separately whether the recipient wants a <strong>certified translation</strong> and whether that translation itself needs any authentication.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-1">
              <strong className="text-slate-900">Practical example 1 — Pakistani marriage record for Germany:</strong>
              <p>The HCCH objection rules out reliance on a Pakistan apostille. Follow the German authority and German Missions&apos; <strong>document verification</strong> guidance where applicable. An English or German translation is a separate question.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-1">
              <strong className="text-slate-900">Practical example 2 — Pakistani degree for Saudi Arabia:</strong>
              <p>The Convention applies between Pakistan and Saudi Arabia, but a Saudi university, employer, professional authority or Saudi government unit may still require degree verification or translation. Consult their <em>document-specific</em> checklist.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-1">
              <strong className="text-slate-900">Practical example 3 — Pakistani birth certificate for the UAE:</strong>
              <p>Follow the UAE attestation service&apos;s requirements for Pakistan-issued certificates, not an HCCH apostille checklist.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 text-xs sm:text-sm text-slate-800 space-y-1">
              <strong className="text-slate-900">Practical example 4 — Pakistani Nikah Nama for the Netherlands:</strong>
              <p>Follow the Netherlands&apos; Pakistan-specific <strong>legalisation</strong> guidance and confirm whether the original Urdu Nikah Nama and/or computerized MRC needs translation.</p>
            </div>
          </div>

          <h3 className="text-xl sm:text-2xl font-bold font-serif text-slate-900 mb-4">
            How to check the latest country status yourself (four steps)
          </h3>
          <ol className="list-decimal pl-5 space-y-3 text-slate-700 leading-relaxed text-sm sm:text-base mb-6">
            <li><strong>Identify the country where the document was issued</strong> (Pakistan in this guide) and <strong>the country where it will be presented</strong>. A document issued in Saudi Arabia and used in Pakistan is a different case.</li>
            <li>Open the HCCH <a href="https://www.hcch.net/en/instruments/conventions/status-table/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Apostille status table</a> and confirm whether the destination is a party with the Convention <strong>in force</strong>.</li>
            <li>Check the <a href="https://www.hcch.net/de/instruments/conventions/status-table/notifications/?csid=1466&disp=type" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">HCCH Pakistan-specific objections</a>. Do <strong>not</strong> skip this step just because the destination appears on a generic convention list.</li>
            <li>Check the <a href="https://attestation.mofa.gov.pk/countries" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Pakistan MOFA destination directory</a> and then the <strong>actual receiving authority</strong> for document, translation and further verification requirements.</li>
          </ol>

          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            If apostille is the correct route, review the <Link href="/guides/apostille-pakistan" className="text-emerald-700 underline font-semibold">Pakistan apostille procedure</Link> and confirm government charges and registration in the official portal. If translation is needed, see <Link href="/pricing" className="text-emerald-700 underline font-semibold">Translation Charges in Pakistan</Link>, <Link href="/translation-english-to-arabic" className="text-emerald-700 underline font-semibold">English-to-Arabic Translation</Link>, <Link href="/services/translation/urdu-to-arabic" className="text-emerald-700 underline font-semibold">Urdu-to-Arabic Translation</Link> or <Link href="/services/translation/arabic-to-english" className="text-emerald-700 underline font-semibold">Arabic-to-English Translation</Link>.
          </p>
        </section>

        {/* SECTION 6: APOSTILLE DOES NOT CERTIFY CONTENT */}
        <section className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm mb-14 space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold font-serif text-slate-900">
            Apostille does not certify the content or translate the document
          </h2>
          <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
            An apostille verifies the origin of a public document (such as the capacity of the signing official and the seal or stamp). It does <strong>not</strong> prove that every factual statement inside the document is true, and it does <strong>not</strong> translate Urdu, Arabic or English into another language. A certified translation addresses the accuracy of the language conversion. The recipient may need <strong>both</strong>, or only one. See the <a href="https://www.hcch.net/en/instruments/conventions/full-text/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">HCCH Convention text</a> and our <Link href="/guides/certified-translation-vs-apostille-pakistan" className="text-emerald-700 underline font-semibold">translation-versus-apostille guide</Link>.
          </p>
        </section>

        {/* SECTION 7: FAQS */}
        <section id="faq" className="mb-14 scroll-mt-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-slate-900 mb-6 pb-2 border-b border-slate-200">
            Frequently asked questions
          </h2>

          <div className="space-y-4">
            {guideFaqs.map((faq, idx) => (
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

        {/* SECTION 8: TRANSLATION CTA */}
        <section className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white p-8 rounded-3xl shadow-xl mb-14 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white">
            Need translation before submitting a Pakistani document abroad?
          </h2>
          <p className="text-emerald-100 leading-relaxed text-base sm:text-lg">
            Tell us <strong>the document type, source language, destination country and receiving organisation</strong>. We can help you identify the appropriate <strong>translation direction</strong> and quote the translation work. We do not claim government accreditation, authority to issue apostilles or guaranteed acceptance by an embassy.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link href="/contact">
              <Button className="bg-white hover:bg-slate-100 text-emerald-950 font-bold h-12 px-6 rounded-xl shadow-md transition-all">
                Request a translation quotation
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" className="border-emerald-500/80 text-white hover:bg-emerald-800/40 font-semibold h-12 px-6 rounded-xl">
                View translation prices
              </Button>
            </Link>
            <Link href="/guides/apostille-pakistan">
              <Button variant="ghost" className="text-emerald-300 hover:text-white hover:bg-white/10 font-medium h-12 px-4 rounded-xl">
                Read apostille guide
              </Button>
            </Link>
          </div>
        </section>

        {/* SECTION 9: OFFICIAL SOURCES AND FACT-CHECK RECORD */}
        <footer className="border-t border-slate-200 pt-8 space-y-4 text-xs sm:text-sm text-slate-600">
          <h2 className="text-lg font-bold font-serif text-slate-900">Official sources and fact-check record</h2>
          <ul className="list-disc pl-5 space-y-1.5 leading-relaxed">
            <li><strong>HCCH 1961 Apostille Convention status table</strong> (viewed 5 November 2026; page reports last update 30 June 2026): <a href="https://www.hcch.net/en/instruments/conventions/status-table/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">hcch.net status table</a></li>
            <li><strong>HCCH Pakistan-specific objection notifications</strong> (eight recorded objections; viewed 5 November 2026): <a href="https://www.hcch.net/de/instruments/conventions/status-table/notifications/?csid=1466&disp=type" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">hcch.net Pakistan objections</a></li>
            <li><strong>HCCH Pakistan declaration concerning India/non-recognised entities:</strong> <a href="https://www.hcch.net/en/instruments/conventions/status-table/notifications/?csid=1466&disp=resdn" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">hcch.net Pakistan declaration</a></li>
            <li><strong>HCCH Convention full text, including Articles 3 and 12:</strong> <a href="https://www.hcch.net/en/instruments/conventions/full-text/?cid=41" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">hcch.net Convention text</a></li>
            <li><strong>Pakistan MOFA destination directory:</strong> <a href="https://attestation.mofa.gov.pk/countries" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">attestation.mofa.gov.pk/countries</a></li>
            <li><strong>Pakistan MOFA apostille portal:</strong> <a href="https://apostille.mofa.gov.pk/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">apostille.mofa.gov.pk</a></li>
            <li><strong>German Missions in Pakistan, Legal section:</strong> <a href="https://pakistan.diplo.de/pk-en/service/legal-uess-1680522" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">pakistan.diplo.de</a></li>
            <li><strong>NetherlandsWorldwide, Pakistan legalisation procedure:</strong> <a href="https://www.netherlandsworldwide.nl/legalisation/foreign-documents/pakistan" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">netherlandsworldwide.nl Pakistan legalisation</a></li>
            <li><strong>NetherlandsWorldwide, apostille validity warning:</strong> <a href="https://www.netherlandsworldwide.nl/legalisation/countries-apostille" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">netherlandsworldwide.nl apostille warning</a></li>
            <li><strong>UAE Embassy Islamabad, document attestation:</strong> <a href="https://www.mofa.gov.ae/en/Missions/Islamabad/Services/Services-for-Individuals/Attestation-Information" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">mofa.gov.ae UAE attestation</a></li>
            <li><strong>Qatar MOFA, foreign-document attestation:</strong> <a href="https://mofa.gov.qa/en/eservices/attestation/other-documents" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">mofa.gov.qa attestation</a></li>
            <li><strong>Kuwait MOFA consular services:</strong> <a href="https://www.mofa.gov.kw/en/pages/consular-services/" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-medium">mofa.gov.kw consular services</a></li>
          </ul>

          <p className="text-xs text-slate-400 italic pt-3 border-t border-slate-200">
            Editorial maintenance: Recheck HCCH objections, entry-into-force dates and receiving-country rules when a fact changes; keep the last-reviewed date visible near the country table. This is general document-preparation information, not a guarantee that any authority will accept a particular submission.
          </p>
        </footer>

      </div>
    </div>
  )
}
