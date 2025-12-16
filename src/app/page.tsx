import { Header } from "@/components/layout/Header"
import { Hero } from "@/components/home/Hero"
import { TrustSection } from "@/components/home/TrustSection"
import { DocumentTranslationGrid } from "@/components/home/DocumentTranslationGrid"
import { WhyChooseUs } from "@/components/home/WhyChooseUs"
import { AttestationList } from "@/components/home/AttestationList"
import { BlogPreview } from "@/components/home/BlogPreview"
import { FaqSection } from "@/components/home/FaqSection"
import { Footer } from "@/components/layout/Footer"
import { FadeIn } from "@/components/ui/fade-in"
import { Testimonials } from "@/components/home/Testimonials"


export default async function Home() {
  const faqs = [
    {
      id: "1",
      question_en: "What types of documents do you translate?",
      answer_en: "We specialize in translating a wide range of personal, legal, educational, and business documents into or from Arabic. Common examples include birth certificates, marriage certificates, divorce decrees, academic transcripts, degrees, police clearance certificates, passports, contracts, medical reports, and immigration-related documents."
    },
    {
      id: "2",
      question_en: "Are your translations certified and officially accepted?",
      answer_en: "Yes, all our translations are officially signed and stamped by our company. They are guaranteed and recommended by various embassies, ensuring acceptance for legal, immigration, educational, and business purposes both in Pakistan and internationally."
    },
    {
      id: "3",
      question_en: "Do you provide notarization or additional legalization?",
      answer_en: "We offer notarized translations upon request. For further requirements, such as apostille or embassy legalization, we can guide you through the process or assist where possible, depending on the specific needs of the receiving authority."
    },
    {
      id: "4",
      question_en: "How long does it take to complete a translation?",
      answer_en: "Turnaround time depends on the document's length, complexity, and urgency. Standard translations are typically delivered within 3-7 business days. We also offer expedited services for faster completion, often within 24-48 hours for urgent requests."
    },
    {
      id: "5",
      question_en: "How much do your translation services cost?",
      answer_en: "Pricing is based on factors such as document type, word count or number of pages, language direction (Arabic to English/Urdu or vice versa), and any additional requirements like certification or rush delivery. Please contact us with your document for a free, no-obligation quote."
    },
    {
      id: "6",
      question_en: "How can I submit my documents for translation?",
      answer_en: "You can easily upload scanned copies or clear photos of your documents via our website's contact form, email, or WhatsApp. For doorstep services in major Pakistani cities, we can arrange collection directly from your location."
    },
    {
      id: "7",
      question_en: "Do you offer doorstep services?",
      answer_en: "Yes, for your convenience, we provide doorstep collection and delivery of documents in all major cities across Pakistan, including Islamabad, Lahore, Karachi, Rawalpindi, Faisalabad, and others. This ensures a hassle-free experience without the need to visit an office."
    },
    {
      id: "8",
      question_en: "Is my information kept confidential?",
      answer_en: "Absolutely. We prioritize client confidentiality and handle all documents with the utmost care and security. Your personal information and documents are never shared with third parties."
    },
    {
      id: "9",
      question_en: "What languages do you translate to and from Arabic?",
      answer_en: "We primarily handle translations between Arabic and English, as well as Arabic and Urdu. We can also accommodate other language pairs involving Arabic upon request."
    },
    {
      id: "10",
      question_en: "Do you handle urgent or rush translations?",
      answer_en: "Yes, we offer priority rush services for time-sensitive needs, such as visa applications or legal deadlines. Additional fees may apply, but we strive to meet your timeline without compromising quality."
    },
    {
      id: "11",
      question_en: "How do I pay for the services?",
      answer_en: "We accept various payment methods, including bank transfers, online payments, and local payment methods such ass jazzcash easypaisa etc for doorstep services in Pakistan. Full payment details will be provided with your quote."
    },
    {
      id: "12",
      question_en: "Can I get a sample or revision if needed?",
      answer_en: "Every translation undergoes thorough review for accuracy. If you have any concerns upon receipt, we offer revisions to ensure complete satisfaction."
    },
    {
      id: "13",
      question_en: "What documents are typically required for Hajj and Umrah visa applications?",
      answer_en: "Common required documents include passport copies, CNIC, photographs, medical fitness and vaccination certificates (e.g., meningitis and polio), relationship proofs (marriage/birth certificates for family applications), travel itinerary, hotel bookings, and tour operator agreements. Requirements may vary by season and Saudi Ministry of Hajj guidelines—we provide a customized checklist based on the latest updates."
    },
    {
      id: "14",
      question_en: "Do you provide certified translations for Hajj and Umrah documents?",
      answer_en: "Yes, all Hajj and Umrah-related documents are translated with full certification. Our translations are officially signed, stamped, and prepared to meet Saudi embassy and Ministry of Hajj standards for smooth visa approval."
    },
    {
      id: "15",
      question_en: "Can you translate medical and vaccination certificates for pilgrimage?",
      answer_en: "Absolutely. We specialize in accurate certified translation of medical fitness certificates, vaccination records (including COVID-19 if required), and health reports to ensure compliance with Saudi health regulations for Hajj and Umrah."
    },
    {
      id: "16",
      question_en: "Do you assist with family or group Hajj/Umrah applications?",
      answer_en: "Yes, we handle translations for relationship proof documents such as marriage certificates (Nikahnama), birth certificates, and family registration certificates to support group or family visa applications seamlessly."
    },
    {
      id: "17",
      question_en: "How long does it take to translate and prepare Hajj/Umrah documents?",
      answer_en: "Standard processing takes 3-7 business days, but we offer rush services (24-48 hours) for urgent applications, especially during peak Hajj season when deadlines are tight."
    },
    {
      id: "18",
      question_en: "Do you provide complete guidance for Hajj and Umrah visa processing?",
      answer_en: "Yes, our end-to-end service includes document checklist preparation, certified translations, review of all paperwork, and guidance on submission through approved Saudi channels or tour operators."
    },
    {
      id: "19",
      question_en: "Are your Hajj/Umrah translations accepted by the Saudi Embassy and Ministry of Hajj?",
      answer_en: "Our translations are embassy-recommended and fully compliant with official requirements, ensuring high acceptance rates for visa processing."
    },
    {
      id: "20",
      question_en: "Is doorstep service available for Hajj and Umrah document collection?",
      answer_en: "Yes, we offer convenient doorstep collection and delivery in all major cities across Pakistan, making it easy during busy preparation periods."
    },
    {
      id: "21",
      question_en: "How much do Hajj and Umrah document translation services cost?",
      answer_en: "Pricing depends on the number of documents, urgency, and complexity. We provide free quotes—simply send us your documents via email, WhatsApp, or our contact form."
    },
    {
      id: "22",
      question_en: "What if my Hajj/Umrah application requires additional attestations?",
      answer_en: "We guide you through the full process, including MOFA attestation, Saudi embassy legalization, and any other verifications needed for official approval."
    },
    {
      id: "23",
      question_en: "Can I combine Hajj/Umrah services with other translations (e.g., personal or medical documents)?",
      answer_en: "Yes, many clients bundle Hajj/Umrah requirements with personal, medical, or educational document translations for efficiency and cost savings."
    }
  ]

  return (
    <main className="min-h-screen bg-white font-sans text-slate-900">
      <Header />
      <FadeIn><Hero /></FadeIn>
      <FadeIn><TrustSection /></FadeIn>
      <FadeIn><DocumentTranslationGrid /></FadeIn>
      <FadeIn><WhyChooseUs /></FadeIn>
      <FadeIn><AttestationList /></FadeIn>
      <FadeIn><Testimonials /></FadeIn>
      <FadeIn><FaqSection faqs={faqs} /></FadeIn>
      <FadeIn><BlogPreview /></FadeIn>
      <Footer />
    </main>
  )
}
