import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Terms of Service | Lisan.pk Translation & Educational Consultancy",
  description: "Read Lisan.pk's Terms of Service. Learn our terms regarding certified translation, attestation coordination, client obligations, independent status disclaimer, and service guarantees.",
  alternates: {
    canonical: "https://www.lisan.pk/terms-of-service",
  },
}

export default function TermsOfServicePage() {
  const lastUpdated = "November 3, 2026"

  return (
    <main className="min-h-screen bg-slate-50 font-sans text-slate-800 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Breadcrumb */}
        <nav className="text-xs text-slate-500 mb-6 flex items-center gap-2">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <span>/</span>
          <span className="text-slate-800 font-semibold">Terms of Service</span>
        </nav>

        {/* Header */}
        <header className="mb-12 border-b border-slate-200 pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            📜 Terms & Conditions
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-serif text-slate-900 tracking-tight mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500">
            <strong>Last Updated & Verified:</strong> {lastUpdated} | <strong>Governing Jurisdiction:</strong> Islamic Republic of Pakistan
          </p>
        </header>

        {/* Content Body */}
        <article className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8 text-[15px]">
          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms of Service (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;Client,&quot; &quot;User,&quot; or &quot;you&quot;) and <strong>LISAN.PK</strong> (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), governing your access to and use of the LISAN.PK website (<a href="https://www.lisan.pk" className="text-emerald-700 font-semibold underline">www.lisan.pk</a>) and our certified translation, document attestation coordination, and overseas educational consultancy services.
            </p>
            <p>
              By commissioning a translation, requesting document evaluation, accessing our website tools, or communicating with our consultants via WhatsApp, phone, or email, you acknowledge that you have read, understood, and agree to be bound by these Terms.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm border-l-4 border-l-amber-500">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">2. Independent Status & Non-Affiliation Disclaimer</h2>
            <p>
              <strong>LISAN.PK is an independent translation agency and private educational advisory service.</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                We are <strong>not affiliated with, endorsed by, or an official representative of</strong> the Saudi Ministry of Education (MOE), the Study in Saudi platform, King Saud University (KSU), King Abdulaziz University (KAU), KAUST, Islamic University of Madinah, or any foreign university or government ministry.
              </li>
              <li>
                We are <strong>not an embassy, diplomatic mission, or government attestation department</strong> (such as MOFA Pakistan, HEC, or IBCC). We operate strictly as an independent linguistic provider and procedural liaison assisting clients in meeting official documentary standards.
              </li>
              <li>
                <strong>No Admission or Visa Guarantee:</strong> LISAN.PK assists with linguistic accuracy, document verification, and administrative procedural guidance. We <strong>do not and cannot guarantee</strong> admission acceptance, scholarship award, visa issuance, or entry clearance. All admission and visa decisions rest exclusively in the sovereign discretion of the receiving educational institutions and government immigration authorities.
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">3. Scope of Services</h2>
            <p>LISAN.PK provides the following core services:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Certified Multilingual Translation:</strong> Professional translation of academic degrees, transcripts, board certificates, Nikah Nama, character certificates, FRC, birth certificates, and legal contracts between Arabic, English, Urdu, and other international languages, accompanied by our official certification stamp and linguist signature.
              </li>
              <li>
                <strong>Document Attestation Coordination:</strong> Assisting clients with submission protocols, procedural verification, and logistics for IBCC, HEC, MOFA, Apostille, and embassy authentication.
              </li>
              <li>
                <strong>Scholarship Guidance & Evaluation:</strong> Independent profile assessment, database program searching, and advisory regarding portal requirements (e.g., Study in Saudi).
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">4. Client Responsibilities & Document Authenticity</h2>
            <p>By engaging our services, you represent and warrant that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Authenticity of Records:</strong> All source documents, scans, and information provided to LISAN.PK are genuine, unaltered, and legally issued by recognized educational boards, universities, or governmental bodies.
              </li>
              <li>
                <strong>Strict Anti-Forgery Policy:</strong> LISAN.PK strictly prohibits and refuses any request to translate, fabricate, alter, or certify forged, counterfeit, or misleading documents. We reserve the immediate right to terminate services without refund and notify relevant authorities if fraudulent records are presented.
              </li>
              <li>
                <strong>Name & Passport Consistency:</strong> It is the client’s sole responsibility to provide the exact English spelling of names and details as appearing on their valid international passport to ensure accurate transliteration into Arabic or other target languages.
              </li>
            </ul>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">5. Turnaround, Delivery & Revisions</h2>
            <p>
              Standard turnaround times (typically 24 to 48 hours for standard certificates) begin once full readable digital scans and agreed payment terms are fulfilled.
            </p>
            <p>
              Digital certified copies are delivered via WhatsApp / Email in PDF format. Hard copies with physical embossed stamps are dispatched via reputable national courier services (e.g., TCS, Leopard). Delivery transit times are subject to courier handling and external logistical conditions.
            </p>
            <p>
              <strong>Free Review & Correction Window:</strong> Clients are encouraged to review the draft translation upon receipt. Minor corrections or spelling adjustments requested within seven (7) days of delivery will be executed promptly at no additional charge.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">6. Payment Terms & Refund Policy</h2>
            <p>
              Service fees are agreed upon prior to project initiation and must be settled via our approved banking or mobile financial channels (e.g., Bank Transfer, Raast, JazzCash, EasyPaisa).
            </p>
            <p>
              Due to the custom linguistic nature of certified translations, fees for completed translation work are non-refundable once the linguist has completed the assignment. In the rare event of a translation error that cannot be resolved through our revision process, we will provide a full or partial refund as determined in good faith by our management.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">7. Intellectual Property</h2>
            <p>
              All content on the LISAN.PK website—including scholarship guides, program databases, logos, graphical designs, articles, and proprietary code—is the property of LISAN.PK and is protected by applicable intellectual property and copyright laws. Unauthorized reproduction, scraping, or distribution is prohibited.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">8. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law, LISAN.PK, its directors, employees, and translators shall not be liable for any indirect, incidental, consequential, or punitive damages arising from portal submission deadlines, visa rejection, university admission outcomes, courier transit delays, or changes in governmental scholarship policies.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">9. Governing Law & Dispute Resolution</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the Islamic Republic of Pakistan. Any legal dispute or claim arising from our services shall be subject to the exclusive jurisdiction of the competent courts in Lahore, Pakistan.
            </p>
          </section>

          <section className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
            <h2 className="text-xl font-bold font-serif text-slate-900 mb-4">10. Contact Us</h2>
            <p>For any questions or legal inquiries regarding these Terms of Service, please reach out to:</p>
            <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-sm">
              <p><strong>LISAN.PK Administration</strong></p>
              <p><strong>Lead Consultant:</strong> Usama Aimen</p>
              <p><strong>Call / WhatsApp:</strong> <a href="https://wa.me/923044296295" className="text-emerald-700 underline font-semibold">+92 304 4296295</a></p>
              <p><strong>Email:</strong> <a href="mailto:info@lisan.pk" className="text-emerald-700 underline">info@lisan.pk</a></p>
              <p><strong>Address:</strong> Lahore, Punjab, Pakistan</p>
            </div>
          </section>
        </article>
      </div>
    </main>
  )
}

