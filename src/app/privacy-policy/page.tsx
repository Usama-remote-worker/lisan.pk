import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Privacy Policy | Lisan.pk Document Confidentiality & Data Protection",
  description: "Read Lisan.pk's Privacy Policy. Learn how we protect your personal information, handle sensitive academic and legal document scans with strict confidentiality, and maintain data security.",
  alternates: {
    canonical: "https://www.lisan.pk/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "November 3, 2026"

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Privacy Policy</span>
        </nav>

        {/* Header */}
        <header className="mb-12 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            🔒 Legal & Compliance
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-slate-900 tracking-tight mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500">
            <strong>Last Updated & Verified:</strong> {lastUpdated} | <strong>Operator:</strong> LISAN.PK Multi-Lingual Translation & Educational Advisory
          </p>
        </header>

        {/* Content Body */}
        <article className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8 text-[15px]">
          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">1. Introduction & Overview</h2>
            <p>
              At <strong>LISAN.PK</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we place paramount importance on the privacy and confidentiality of our clients. As a leading certified translation, attestation coordination, and overseas educational consultancy provider in Pakistan, we regularly handle sensitive academic records, civil identity credentials, and legal documents.
            </p>
            <p>
              This Privacy Policy explains how we collect, store, utilize, and protect your personal information and documents when you visit our website (<a href="https://www.lisan.pk" className="text-emerald-700 font-semibold underline">www.lisan.pk</a>), communicate with us via WhatsApp, telephone, or email, or utilize our certified translation and scholarship consultation services.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">2. Information We Collect</h2>
            <p>We may collect and process the following categories of information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Contact Information:</strong> Your full name, telephone / WhatsApp contact numbers, email address, city, and shipping address for hard-copy document delivery.
              </li>
              <li>
                <strong>Document Scans & Data:</strong> High-resolution digital copies of educational degrees, transcripts, board certificates, Nikah Nama (marriage contracts), Family Registration Certificates (FRC), Police Character Certificates, medical reports, and identity records provided for translation, notarization, or scholarship profile assessment.
              </li>
              <li>
                <strong>Academic & Application Profiles:</strong> Information voluntarily provided through our Saudi Scholarship Program Finder and profile evaluation tools (e.g., GPA/percentage, degree level, major, preferred universities).
              </li>
              <li>
                <strong>Technical & Usage Data:</strong> Internet Protocol (IP) addresses, browser user-agent, device details, pages viewed, referring URLs, and interaction metrics gathered through Google Analytics (GA4) and Google Tag Manager.
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-emerald-600">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">3. Strict Document Confidentiality & Non-Disclosure</h2>
            <p>
              We treat all client documents as strictly confidential. Our professional translators and staff operate under formal non-disclosure agreements:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Zero Commercial Sale of Data:</strong> We never sell, lease, rent, or trade your personal information, contact numbers, or uploaded records to third-party marketing companies, advertisers, or academic brokers.
              </li>
              <li>
                <strong>Restricted Internal Access:</strong> Only the assigned certified linguist and case coordinator handling your specific file are granted access to your documents.
              </li>
              <li>
                <strong>Retention & Deletion Policy:</strong> Uploaded source files and completed translations are retained securely for a standard operational period (typically 90 days) to facilitate client re-orders, verification, or embassy revisions, after which digital files are permanently purged upon request.
              </li>
              <li>
                <strong>Immediate Deletion on Demand:</strong> You may request the immediate, permanent deletion of all copies of your uploaded documents at any time following delivery by contacting our Data Protection Officer.
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">4. How We Use Your Information</h2>
            <p>We use the collected information exclusively for authorized business purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Translating, certifying, and formatting your documents according to official embassy, HEC, MOFA, UKVI, or USCIS guidelines.</li>
              <li>Providing price quotations, turnaround estimates, and status updates regarding your translation or attestation order.</li>
              <li>Coordinating door-to-door courier dispatches (e.g., TCS, Leopard, DHL) across Pakistan or internationally.</li>
              <li>Conducting initial scholarship eligibility screening upon your request and advising on Study in Saudi portal procedures.</li>
              <li>Improving website performance, navigation ease, and user experience through aggregated, anonymous analytics.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">5. Cookies & Analytics Technologies</h2>
            <p>
              LISAN.PK utilizes standard cookies, web beacons, and Google Analytics 4 (GA4) with Google Tag Manager to analyze traffic volume and conversion actions (such as contact form submissions and WhatsApp chat initiations).
            </p>
            <p>
              These analytics cookies collect aggregated, anonymous data that does not identify you personally. You can configure your browser to decline cookies or alert you when cookies are placed; however, certain site features may function with reduced interactivity.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">6. Third-Party Links & Disclaimers</h2>
            <p>
              Our website and blog articles contain links to external governmental portals, university admissions websites (e.g., Study in Saudi, KSU, KAU, KAUST, MOFA Pakistan, IBCC, HEC), and communication channels (WhatsApp).
            </p>
            <p>
              LISAN.PK is an independent translation agency and educational consultancy and does not control the privacy policies or practices of third-party websites. We encourage you to review the privacy notices of any external site you visit.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">7. Your Legal Rights & Data Subject Requests</h2>
            <p>Depending on your jurisdiction, you have the following rights regarding your personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> Request a copy of the personal details and documents we hold about you.</li>
              <li><strong>Right to Rectification:</strong> Request correction of inaccurate, incomplete, or outdated personal information.</li>
              <li><strong>Right to Erasure:</strong> Request immediate destruction and deletion of your document scans and records.</li>
              <li><strong>Right to Withdraw Consent:</strong> Revoke authorization for us to communicate with you via WhatsApp or email.</li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">8. Contact Us Regarding Your Privacy</h2>
            <p>
              If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your confidential documents, please contact us:
            </p>
            <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-sm">
              <p><strong>LISAN.PK Legal & Compliance Office</strong></p>
              <p><strong>Consultant & Lead:</strong> Usama Aimen</p>
              <p><strong>Phone / WhatsApp:</strong> <a href="https://wa.me/923044296295" className="text-emerald-700 underline font-semibold">+92 304 4296295</a> / <a href="https://wa.me/923288155866" className="text-emerald-700 underline font-semibold">+92 328 8155866</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@lisan.pk" className="text-emerald-700 underline">info@lisan.pk</a></p>
              <p><strong>Head Office:</strong> Lahore, Punjab, Pakistan</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}
