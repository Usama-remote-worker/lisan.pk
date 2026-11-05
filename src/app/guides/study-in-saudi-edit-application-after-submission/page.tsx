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
  Edit3,
  Lock
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { EditorialReviewBox } from "@/components/ui/EditorialReviewBox"

export const metadata: Metadata = {
  title: {
    absolute: "Edit Study in Saudi Application After Submission: Passport, Qualifications & Returned Status | LISAN.PK",
  },
  description: "Can you change a passport number or academic details after submitting Study in Saudi? Official FAQ rules, returned applications, locked fields and safe correction steps.",
  alternates: {
    canonical: "https://www.lisan.pk/guides/study-in-saudi-edit-application-after-submission",
  },
  openGraph: {
    title: {
      absolute: "Edit Study in Saudi Application After Submission: Passport, Qualifications & Returned Status | LISAN.PK",
    },
    description: "Can you change a passport number or academic details after submitting Study in Saudi? Official FAQ rules, returned applications, locked fields and safe correction steps.",
    url: "https://www.lisan.pk/guides/study-in-saudi-edit-application-after-submission",
    type: "article",
    publishedTime: "2026-11-05T00:00:00Z",
    modifiedTime: "2026-11-05T00:00:00Z",
    images: ["https://www.lisan.pk/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: {
      absolute: "Edit Study in Saudi Application After Submission: Passport, Qualifications & Returned Status | LISAN.PK",
    },
    description: "Can you change a passport number or academic details after submitting Study in Saudi? Official FAQ rules, returned applications, locked fields and safe correction steps.",
    images: ["https://www.lisan.pk/logo.png"],
  }
}

const fieldTable = [
  { field: "Passport number after application submitted", rule: "Cannot normally be changed", action: "Do not create a conflicting second identity; contact official support for any exceptional correction route" },
  { field: "Passport number on new account with no submitted applications", rule: "Can be changed", action: "Correct it before first submission" },
  { field: "Nationality, gender, residence/Gulf ID", rule: "Identified as restricted basic fields", action: "Review before submitting; consult official support if incorrect" },
  { field: "Qualifications / academic information", rule: "May be updatable under specified conditions", action: "Open account controls; check whether 'Update Data' or an editable form is shown" },
  { field: "Telephone or other contact information", rule: "Official FAQ states contact details may be updated", action: "Update through the profile if permitted" },
  { field: "Registered email", rule: "Generally cannot be edited for accounts registered by email; residents in KSA have a specified profile exception", action: "Follow account-specific instructions; use password recovery rather than opening duplicates" },
  { field: "Application returned by university", rule: "Certain qualification data and specified fields may be updated", action: "Read the return reason and use permitted controls, then verify any resubmission requirement" },
  { field: "Application already Under Process", rule: "University is reviewing it; cancellation limited after action taken", action: "Avoid unnecessary cancellations; follow your status and official guidance" }
]

const mistakesTable = [
  { sit: "Misspelled passport name", safe: "Compare account and valid passport; ask support if locked", avoid: "Creating false supporting documents" },
  { sit: "New passport issued after submission", safe: "Ask support for the formal renewal procedure", avoid: "Altering previous passport scans" },
  { sit: "Missing academic marks", safe: "Check qualifications editing rights and accurate board/university record", avoid: "Substituting an invented percentage" },
  { sit: "Document uploaded upside-down or cropped", safe: "Replace it if the application permits", avoid: "Assuming a submitted upload can always be replaced" },
  { sit: "Account locked / forgotten password", safe: "Official recovery function", avoid: "Sharing login or OTP with strangers" },
  { sit: "Rejected status", safe: "Read program requirements and official outcome", avoid: "Treating rejection as an automatic editable return" },
  { sit: "Under Process for several weeks", safe: "Monitor portal and university communications", avoid: "Trusting fixed result dates without official confirmation" }
]

const guideFaqs = [
  { q: "Can I change my Study in Saudi passport number after submit?", a: "Normally no. The official FAQ says the passport number can be changed only if the account is new and no application has been submitted. [1]" },
  { q: "Can I change my Study in Saudi mobile number?", a: "The FAQ allows contact details to be updated. Check the options in your profile. [1]" },
  { q: "Can I change nationality after submission?", a: "The official FAQ lists nationality among basic identity fields that cannot be updated. [1]" },
  { q: "Can I edit my qualification or CGPA?", a: "Qualification data may be editable under specified conditions; use the controls visible for your application or contact support. [1]" },
  { q: "Can I change the registered email address?", a: "The FAQ says email-registered users generally cannot edit their registered email, with a profile-update exception described for residents within Saudi Arabia. [1]" },
  { q: "What does Under Process mean?", a: "It means the application is under institutional review, not that the student has been accepted or rejected. [1]" },
  { q: "Can I cancel an Under Process application?", a: "Only if the institution has not yet taken action on it, according to the portal FAQ. [1]" },
  { q: "Is Returned the same as Rejected?", a: "Do not treat them as identical. Check the exact notice, permitted actions and the university's response. A returned record may allow corrections, while rejection means an admission requirement was not met. [1]" },
  { q: "Do returned applications allow passport edits?", a: "The FAQ still lists passport number among restricted basic fields, even while describing certain editable fields on returned applications. [1]" },
  { q: "How long do I have to fix a returned application?", a: "No universal correction period was established by the official FAQ reviewed. Follow any deadline in your own notice or request guidance through official support." },
  { q: "Can LISAN.PK change my account information for me?", a: "We provide translation and document-readiness assistance, not government portal administration. Keep your passwords and OTPs private." },
  { q: "Where can I get an official answer about a locked field?", a: "Use the help/contact route on the official Study in Saudi platform (https://studyinsaudi.sa/en) and retain your support ticket." }
]

export default function StudyInSaudiEditGuidePage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Edit a Study in Saudi Application After Submission: Passport, Qualifications and Returned Applications",
    "description": "Can you change a passport number or academic details after submitting Study in Saudi? Official FAQ rules, returned applications, locked fields and safe correction steps.",
    "author": { "@type": "Organization", "name": "LISAN.PK Editorial Team" },
    "publisher": {
      "@type": "Organization",
      "name": "LISAN.PK",
      "logo": { "@type": "ImageObject", "url": "https://www.lisan.pk/logo.png" }
    },
    "datePublished": "2026-11-05T00:00:00Z",
    "dateModified": "2026-11-05T00:00:00Z",
    "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.lisan.pk/guides/study-in-saudi-edit-application-after-submission" }
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.lisan.pk" },
      { "@type": "ListItem", "position": 2, "name": "Guides", "item": "https://www.lisan.pk/guides" },
      { "@type": "ListItem", "position": 3, "name": "Edit Study in Saudi Application", "item": "https://www.lisan.pk/guides/study-in-saudi-edit-application-after-submission" }
    ]
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": guideFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": { "@type": "Answer", "text": faq.a }
    }))
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero Header */}
      <section className="bg-white border-b border-slate-200 pt-10 pb-16 font-sans">
        <div className="container mx-auto px-4 max-w-5xl">
          <nav className="flex items-center space-x-2 text-xs text-slate-500 mb-8 font-sans">
            <Link href="/" className="hover:text-emerald-700">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-emerald-700">Guides</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Edit Study in Saudi Application</span>
          </nav>

          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-5 font-sans">
              <Edit3 className="w-3.5 h-3.5 text-emerald-700" />
              <span>Official Portal Guide &bull; Account Controls</span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight font-serif leading-[1.15] mb-6">
              How to Edit a Study in Saudi Application After Submission: Passport, Qualifications and Returned Applications
            </h1>

            <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-sans mb-6">
              <strong>You generally cannot change your passport number after submitting a Study in Saudi application.</strong> The official portal FAQ says a passport number can be changed only on a new account <strong>before any application has been submitted</strong>. Some academic qualification information and other specifically permitted fields can be updated, including when an institution returns an application, but the actual controls depend on your record and portal status. [1]
            </p>

            <div className="p-4 rounded-xl bg-slate-100/90 border border-slate-200 text-sm text-slate-700 leading-relaxed mb-8">
              <strong>Verified: 5 November 2026.</strong> The official Study in Saudi FAQ contains two answers that may look contradictory: one states that only contact information can be updated after submission, while another allows changes to qualification information and certain specified fields. <strong>Do not assume a field is editable merely because it appears in a generic blog or tutorial.</strong> Check the exact action available in your own account and request guidance from official support when a critical field is locked. [1]
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link href="/blog/study-in-saudi-application-status-under-process">
                <Button size="lg" className="bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-8 h-12 shadow-sm rounded-xl font-sans">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Application Status Guide
                </Button>
              </Link>
              <Link href="/saudi-scholarships/program-finder" className="inline-flex items-center justify-center font-bold px-6 h-12 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 transition-colors text-sm font-sans">
                Browse Saudi Programs
              </Link>
              <Link href="/contact" className="inline-flex items-center text-sm font-bold text-emerald-700 hover:text-emerald-800 underline font-sans ml-2">
                Document Review Support &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 font-sans">
        <div className="container mx-auto px-4 max-w-5xl space-y-16">

          {/* Section 1: Field-by-field table */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Study in Saudi editability: field-by-field answer
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Field or situation</th>
                    <th className="p-3.5 font-semibold">What official guidance supports</th>
                    <th className="p-3.5 font-semibold">Recommended action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {fieldTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900">{row.field}</td>
                      <td className="p-3.5 font-medium text-emerald-950">{row.rule}</td>
                      <td className="p-3.5 text-slate-600">{row.action}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-slate-600">
              <strong>Source:</strong> <a href="https://studyinsaudi.sa/en/Faq" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Study in Saudi — official frequently asked questions</a>. This table is a practical summary of its published answers, <strong>not</strong> a guarantee that an edit button will appear in every account. [1]
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              Why are there two different answers on the official FAQ?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              The official FAQ includes both:
            </p>
            <ul className="list-disc list-inside space-y-2 text-slate-700 text-base pl-2">
              <li>A general statement that contact information can be updated, while other submitted data cannot be changed.</li>
              <li>A more specific answer stating qualification data and certain allowed fields can be updated, with passport number, nationality, gender and other identity fields excluded.</li>
            </ul>
            <p className="text-slate-700 leading-relaxed text-base">
              The reasonable operational interpretation is <strong>field-specific and status-dependent editing</strong>, but the public FAQ does not document a complete technical permission matrix for every student, university and stage. Treat any blanket claim such as &ldquo;all details can be edited&rdquo; or &ldquo;nothing can ever be corrected&rdquo; as unreliable. [1]
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-2">
              What if your profile says Under Process?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              The portal describes Under Process as an application being reviewed by the relevant educational institution. It is not a rejection or a final offer. The application may be at a stage where certain changes are locked because university action has started. The FAQ says cancellation is available only while <strong>no action has yet been taken by the educational institution</strong>. [1]
            </p>
            <p className="text-sm text-slate-600">
              Read our fuller <Link href="/blog/study-in-saudi-application-status-under-process" className="text-emerald-700 underline font-semibold">Study in Saudi application status guide</Link> for the meanings of Under Process, returned, rejected and other labels.
            </p>
          </div>

          {/* Section 2: How to correct a passport number mistake */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              How to correct a passport number mistake
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>Do not assume a submitted passport number can be manually overwritten.</strong> The official FAQ says this is not possible after submitting an application. Your safest path is to document the issue and ask the official portal to explain whether any formal remedy applies to your specific record. [1]
            </p>
            <ol className="list-decimal list-inside space-y-3 text-slate-700 text-base pl-2">
              <li>Sign in directly at <a href="https://studyinsaudi.sa/en" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Study in Saudi</a>.</li>
              <li>Check whether any application has been submitted under the current profile.</li>
              <li>If no application has ever been submitted, inspect the profile&apos;s passport fields and correct them before applying.</li>
              <li>If an application has been submitted, <strong>do not submit a different passport number through another identity/profile to bypass restrictions</strong>.</li>
              <li>Use the portal&apos;s official help/support route. Describe the mismatch clearly and provide only the information the official support channel requests.</li>
              <li>Keep a record of your support ticket and instructions. Never share your password, SMS verification code or email OTP with a consultant or public support group.</li>
            </ol>
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-amber-600 text-sm text-slate-700">
              <strong>Renewed passport vs incorrect passport number:</strong> A new passport issued after submission creates a different scenario from a typing error. The public FAQ still says submitted passport numbers cannot be modified. Ask official support how renewal information should be handled; no universal self-service solution is published in the reviewed FAQ.
            </div>
          </div>

          {/* Section 3: Can you update qualifications after submitting? */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Can you update qualifications after submitting?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              <strong>Sometimes, yes.</strong> The published FAQ says qualification data and certain other specified fields can be updated. It does <strong>not</strong> guarantee that every GPA, grade, graduation date, qualification type or document-upload field will remain open throughout the review process. [1]
            </p>
            <ol className="list-decimal list-inside space-y-3 text-slate-700 text-base pl-2">
              <li>Sign in and open your actual application and profile, not a shared screenshot from another student.</li>
              <li>Look for the university&apos;s returned-action notice, an &apos;Update Data&apos; control or another permitted edit interface.</li>
              <li>Identify exactly which qualification is incorrect and which evidence supports the correct information.</li>
              <li>Update only the editable fields and upload any required document, if the portal asks for it.</li>
              <li>Save changes and check whether the application requires an additional <strong>resubmit</strong> or <strong>confirm</strong> action.</li>
              <li>Confirm the updated record is visible; keep an anonymized screenshot for your records.</li>
              <li>If the field is locked, use official support rather than manipulating the portal or creating conflicting submissions.</li>
            </ol>
            <p className="text-sm text-slate-600 font-semibold pt-2">
              Do not invent a new CGPA or alter an academic transcript. Corrections must reflect authentic documents issued by your school, board or university.
            </p>
          </div>

          {/* Section 4: What does Returned mean on Study in Saudi? */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              What does Returned mean on Study in Saudi?
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              A <strong>returned application</strong> is not necessarily the same as a final rejection. In ordinary application workflows it often means the institution requires an applicant-side action, but <strong>the exact meaning and available corrections are determined by the notice shown in your own account</strong>. The reviewed official FAQ explicitly discusses editing after a university returns an application, but does not promise that all returned applications are recoverable. [1]
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-2">
              Returned application: 7-step correction checklist
            </h3>
            <ol className="list-decimal list-inside space-y-2.5 text-slate-700 text-base pl-2">
              <li><strong>Read the return notice carefully.</strong> Record the field, missing document or requirement mentioned.</li>
              <li><strong>Check the submission status and any visible response deadline.</strong> Do not assume a universal number of correction days.</li>
              <li><strong>Compare the entered data with original documents.</strong> Check passport name, date of birth, degree, marks, grading scale, translation and institution details.</li>
              <li><strong>Correct only permitted fields.</strong> University qualifications may be editable; identity and passport fields are specifically restricted.</li>
              <li><strong>Replace poor-quality uploads only if the interface permits it.</strong> Use complete, legible scans rather than edited/fabricated records.</li>
              <li><strong>Resubmit or confirm only when explicitly required by the portal.</strong> Saving a field may not equal resubmitting the application.</li>
              <li><strong>Monitor your status.</strong> The next step depends on the institution&apos;s review; there is no guaranteed acceptance after a correction.</li>
            </ol>
            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-emerald-600 text-sm text-slate-700">
              <strong>Example:</strong> If the university flags an incomplete transcript, check whether your account offers document replacement. If the problem is a wrong passport number, do not assume the same document-update control can fix it. Seek official instructions.
            </div>
          </div>

          {/* Section 5: Common mistakes table */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 font-serif">
              Common mistakes: what to do and what not to do
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-sm border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-slate-900 border-b border-slate-200">
                    <th className="p-3.5 font-semibold">Situation</th>
                    <th className="p-3.5 font-semibold">Safer response</th>
                    <th className="p-3.5 font-semibold">Avoid</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {mistakesTable.map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 1 ? "bg-slate-50/50" : "bg-white"}>
                      <td className="p-3.5 font-bold text-slate-900">{row.sit}</td>
                      <td className="p-3.5">{row.safe}</td>
                      <td className="p-3.5 text-amber-900 font-medium">{row.avoid}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-4">
              Can you delete and recreate a Study in Saudi account?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              The portal FAQ says students can request <strong>profile deletion by support ticket</strong>. It does <strong>not</strong> state that deleting an account will undo an institutional review, restore eligibility or bypass the restriction on passport changes. Do not delete a submitted account as a shortcut without official instructions, particularly if you need to retain existing application records. [1]
            </p>

            <h3 className="text-xl font-bold text-slate-900 font-serif pt-2">
              What if the translation contains a mistake?
            </h3>
            <p className="text-slate-700 leading-relaxed text-base">
              A certified translation and a portal identity record are different things. If a document translation contains a genuine spelling or date error, the responsible translator can review and correct the translation so it faithfully matches the original. But <strong>correcting a PDF does not automatically update a locked Study in Saudi field</strong>. Verify that the portal permits replacing the file or ask the university/support desk.
            </p>
            <p className="text-sm text-slate-600">
              LISAN.PK offers independent <Link href="/services/translation" className="text-emerald-700 underline font-semibold">document translation services</Link> and <Link href="/pricing" className="text-emerald-700 underline font-semibold">pricing information</Link> for applicants who need an accurate translation. We cannot unlock the Ministry&apos;s application portal, amend an official passport, guarantee acceptance or obtain access to government accounts.
            </p>
          </div>

          {/* Section 6: FAQs */}
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

          {/* Editorial Review Box */}
          <EditorialReviewBox />

          {/* Section 7: Official source and editorial note */}
          <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
            <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-serif">
              Official source and editorial note
            </h2>
            <p className="text-slate-700 text-sm leading-relaxed">
              1. <a href="https://studyinsaudi.sa/en/Faq" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Study in Saudi — Ministry platform official FAQ</a>. The FAQ includes distinct entries for post-submission changes, qualifications, passport numbers, returned applications, cancellation, profile deletion and Under Process.
            </p>
            <p className="text-slate-700 text-sm leading-relaxed">
              <strong>Last source check: 5 November 2026.</strong> Portal wording and live account permissions may change. Reconfirm immediately before publication; never reproduce a screenshot or example involving identifiable student records without permission and anonymization.
            </p>
            <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
              <strong>Related reading:</strong> <Link href="/blog/study-in-saudi-application-status-under-process" className="text-emerald-700 underline">Study in Saudi application status</Link> &bull; <Link href="/blog/fully-funded-scholarship-deadlines-saudi-universities-2026" className="text-emerald-700 underline">Scholarship deadlines</Link> &bull; <Link href="/consultancy/saudi-scholarship" className="text-emerald-700 underline">Saudi scholarship guidance</Link>.
            </div>
          </div>

          {/* Bottom CTA Block */}
          <div className="bg-[#064E3B] rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold font-serif mb-4">
              Need Help Reviewing Your Documents for Study in Saudi?
            </h3>
            <p className="text-emerald-100 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
              Submit your documents for independent format checking, name verification against your passport, and certified translation into Arabic or English.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button className="w-full bg-white text-emerald-950 hover:bg-emerald-50 min-w-[200px] h-12 text-sm font-bold shadow-md">
                  Request Document Review
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
