import { Metadata } from 'next'
import { PageHero } from "@/components/ui/PageHeader"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { notFound } from "next/navigation"

const serviceData = {
    "arabic-translation": {
        title: "Certified Arabic Translation Services in Pakistan | Lisan.pk",
        h1: "Official Arabic Translation & Attestation Support",
        description: "Professional Arabic translation for Saudi & Gulf visas. MOFA & embassy certified translation services in Lahore, Karachi & Islamabad.",
        content: "Lisan.pk has been the premier choice for Arabic translation in Pakistan for over 40 years. Our certified Arabic translations are meticulously formatted and stamped, ensuring 100% acceptance by the Saudi Embassy, UAE Embassy, MOFA, and Gulf consulates. We specialize in translating all types of documents including legal, academic, commercial, and personal records into legally recognized Arabic.",
        features: ["Saudi Embassy Recognized", "MOFA Compliant", "40+ Years Legacy", "Same-Day Delivery Available"],
        checklist: ["Original English/Urdu Document", "Passport Copy for name spellings", "CNIC Copy"],
        faqs: [
            { q: "Is this translation valid for Saudi work visas?", a: "Yes, our certified translations are recognized by the Saudi Embassy and Cultural Attaché for all visa categories." },
            { q: "How long does the attestation process take?", a: "The complete attestation (HEC -> MOFA -> Culture -> Embassy) typically takes 3-4 weeks. Lisan.pk can expedite this for you." }
        ]
    },
    "english-translation": {
        title: "Certified English Translation Services in Pakistan | Lisan.pk",
        h1: "Official English Translation with Accuracy Certificate",
        description: "Certified Urdu to English translation for immigration, UKVI, USCIS, and global visas. High accuracy and 100% acceptance guaranteed.",
        content: "Whether you need English translation for a birth certificate, marriage certificate, or academic transcripts for immigration or study abroad, our certified English translations meet the strict requirements of UKVI, USCIS, IRCC, and European embassies. We preserve the original formatting and ensure precise legal and medical terminology.",
        features: ["UKVI & USCIS Accepted", "Certificate of Accuracy", "Fast Turnaround", "Native Linguists"],
        checklist: ["Original Document", "Passport copies for verification", "Recipient country guidelines"],
        faqs: [
            { q: "Is this translation valid for UK and Canada immigration?", a: "Yes, our certified translations are accompanied by an official 'Certificate of Accuracy' containing our registry details, which is 100% accepted by UKVI, USCIS, and IRCC." },
            { q: "Do you offer express delivery?", a: "Yes, we provide 12-hour express delivery for urgent immigration deadlines." }
        ]
    },
    "turkish-translation": {
        title: "Certified Turkish Translation Services in Pakistan | Lisan.pk",
        h1: "Official Turkish Translation for Study & Residence Visas",
        description: "Professional Turkish translation services for student admissions, work permits, and residency. Certified by experienced translators.",
        content: "Applying for Turkish universities or a Turkish student/residence visa? We offer certified Turkish translation of your degree, transcripts, birth certificates, and police records. Our translations align perfectly with the requirements of the Turkish Embassy in Islamabad and Consulate General in Karachi. We ensure technical and legal terms are accurately localized.",
        features: ["Turkish Embassy Accepted", "Accurate Formatting", "Technopark Coordination", "100% Valid for Visas"],
        checklist: ["Educational Documents or Degrees", "Birth Certificate / Police Character Certificate", "Valid Passport Scan"],
        faqs: [
            { q: "Do I need Turkey-related documents translated into Turkish?", a: "Yes, the Turkish Embassy and consulates require sworn and certified Turkish translations for all Urdu/English personal and academic records." },
            { q: "How fast can you process Turkish translations?", a: "Standard turnaround is 24 to 48 hours. Express options are available." }
        ]
    },
    "degree-translation": {
        title: "Certified Academic Degree & Transcript Translation | Lisan.pk",
        h1: "Professional Degree Translation for WES, HEC & Gulf Visas",
        description: "Official translation services for degrees, transcripts, and diplomas. Certified for WES evaluation, HEC compliance, and embassy attestation.",
        content: "Your educational degrees and transcripts are the keys to your future. Lisan.pk provides high-precision academic translation services in Arabic, English, and Turkish. Fully accepted by HEC, MOFA, WES, and international cultural offices. We correctly translate course names, grading scales, and academic titles to prevent any verification issues abroad.",
        features: ["WES & IQAS Friendly", "HEC Attestation Ready", "Subject Matter Experts", "Dual Language Drafts"],
        checklist: ["Original HEC Attested Degree", "Complete Transcript/Marksheet", "Passport copy for spelling match"],
        faqs: [
            { q: "Do you translate transcripts for WES?", a: "Yes, we format our academic translations precisely to match WES and IQAS checklist guidelines for verification." },
            { q: "Is the price calculated per page or per document?", a: "Standard academic degrees are priced per document, while complex transcripts are calculated based on the number of pages/entries." }
        ]
    },
    "legal-translation": {
        title: "Certified Legal Translation Services Pakistan | Lisan.pk",
        h1: "Certified Legal Translation | Contracts, Power of Attorney & Court Docs",
        description: "Professional legal translation services in Pakistan. Recognized translations for contracts, court documents, and affidavits by sworn translators.",
        content: "Legal documentation requires absolute precision and knowledge of jurisprudence. Lisan.pk offers certified legal translation services for partnership deeds, lease agreements, powers of attorney, birth/marriage certificates, and judicial records. Handled by legal experts and officially stamped, guaranteeing admissibility in courts locally and internationally.",
        features: ["Sworn Translators", "Legal Terminology Experts", "Strict Confidentiality", "Notarization Available"],
        checklist: ["Original Legal Agreement/Document", "Identities of contracting parties", "Authorized signatory details"],
        faqs: [
            { q: "Are your translations accepted in local courts?", a: "Yes, our certified translations are stamped and registered, making them fully admissible in Pakistani courts and official government registries." },
            { q: "Can you translate complex legal deeds into Arabic?", a: "Yes, our legal department specializes in Arabic commercial law terminology for Saudi and UAE corporate submissions." }
        ]
    },
    "certified-translation": {
        title: "Certified Document Translation Services Pakistan | Lisan.pk",
        h1: "Official Certified Translation | 100% Embassy Acceptance",
        description: "Certified translation of personal and commercial documents. Accompanied by a Certificate of Accuracy, stamps, and official registry details.",
        content: "A certified translation is a legal document consisting of the translated text, a signed Certificate of Accuracy, and our registered seal. Lisan.pk translations are recognized worldwide by embassies, government agencies, universities, and corporate institutions. We ensure strict adherence to international formatting standards.",
        features: ["Certificate of Accuracy", "Embassy & MOFA Recognized", "Rapid Express Service", "Worldwide Courier Delivery"],
        checklist: ["Clear photo or scan of documents", "Correct spellings of names", "Specific embassy requirements"],
        faqs: [
            { q: "What makes a translation 'certified'?", a: "A certified translation must include a formal signed declaration by Lisan.pk stating that the translation is a true and accurate rendering of the source document, along with our stamp and contact details." },
            { q: "Do you deliver physical hard copies?", a: "Yes, we provide high-resolution digital scans via email/WhatsApp and send the physical stamped hard copies via TCS or Leopard courier anywhere in Pakistan." }
        ]
    },
    "nikah-nama-marriage-certificate": {
        title: "Certified Nikah Nama Translation Pakistan | Lisan.pk",
        h1: "Certified Nikah Nama & Marriage Certificate Translation",
        description: "Certified Arabic & English translation for Nikah Nama. Official and embassy-recognized services in Pakistan. Fast delivery for Saudi & UAE visas.",
        content: "Translating a Nikah Nama (Marriage Contract) requires absolute precision, as legal terminology, Islamic dates, and dower (Haq Mehr) details must be exact. Our certified translations are thoroughly recognized by all foreign embassies for spouse visas, family registration, immigration, and legal stay applications. We carefully transcribe handwritten Urdu or Arabic scripts, maintaining the original document's layout and seal placements to ensure seamless verification.",
        features: ["Embassy Certified & Accepted", "Same-day Service Available", "Notarized Certificate Included", "Accurate Islamic Date Conversion", "Precise Calligraphy Transcription"],
        checklist: ["Original Arabic/Urdu Nikah Nama or MRC", "Passport copies of Bride & Groom", "CNIC copies for cross-verification", "Specific format requests (e.g., USCIS, UKVI)"],
        faqs: [
            { q: "Is this translation valid for UK/USA visas?", a: "Yes, our certified translations strictly meet the 'Certificate of Accuracy' requirements necessary for UKVI, USCIS, and all major western embassies." },
            { q: "Do you translate handwritten Nikah Namas?", a: "Absolutely. Our expert linguists are highly experienced in deciphering traditional calligraphy, regional dialects, and complex handwritten legal scripts used by local registrars." },
            { q: "Do I need to submit the NADRA Marriage Registration Certificate (MRC) as well?", a: "While the manual Nikah Nama contains more legal details, many embassies require the NADRA MRC alongside it. We recommend translating both for complete legal compliance." }
        ]
    },
    "birth-certificate-translation": {
        title: "Certified Birth Certificate Translation Pakistan | Lisan.pk",
        h1: "Certified Birth Certificate Translation for Visa & Immigration",
        description: "Official Arabic & English translation of NADRA birth certificates. Accepted by embassies for visa & immigration. Certified and fast turnaround.",
        content: "A birth certificate is the most critical foundational document for identity verification during any visa, immigration, or residency application. Our certified translation services ensure that your NADRA or hospital birth certificate is translated into flawless English, Arabic, or other required languages. We meticulously mirror the exact formatting, layout, and terminology of the original document to guarantee absolute zero friction during your embassy visa interview or immigration document review. All translations come equipped with an official Certificate of Accuracy, registered stamps, and authorized signatures.",
        features: ["Exact NADRA Format Matching", "100% Global Embassy Acceptance", "Fast Digital Copy Delivery", "Official Notarized Seal & Stamp", "Accurate Name Spellings"],
        checklist: ["Original NADRA Birth Certificate (Clear Scan)", "Passport Copies for exact name spelling match", "Parent's CNIC for cross-referencing", "Specific embassy guidelines (if any)"],
        faqs: [
            { q: "How long does the translation take?", a: "Our standard delivery time is 24 hours. For urgent immigration deadlines, we offer a specialized 2-hour express translation service." },
            { q: "Do I need to submit the physical original copy?", a: "No, a high-resolution scanned copy or clear photograph sent via WhatsApp or email is fully sufficient for us to process the certified translation." },
            { q: "Will this translation be accepted by USCIS or UKVI?", a: "Yes, our certified translations include the mandated 'Certificate of Accuracy' which is universally accepted by USCIS, UKVI, IRCC, and all European embassies." }
        ]
    },
    "academic-degree-transcript": {
        title: "Degree & Transcript Translation Pakistan | Lisan.pk",
        h1: "Professional Academic Translation for Degrees & Transcripts",
        description: "Professional Arabic and English translation for degrees and transcripts. HEC and MOFA compliant. Trusted for Saudi, UAE & global university admissions.",
        content: "Your academic future depends on the accurate representation of your hard-earned qualifications. We professionally translate Pakistani academic degrees, diplomas, and comprehensive transcripts into Arabic for Gulf countries (Saudi Arabia, UAE, Qatar) and English for Western universities and evaluation bodies. Our expert academic translators understand complex grading systems, credit hours, and specialized subject terminologies across medical, engineering, and arts disciplines.",
        features: ["Technical Academic Terminology", "HEC & MOFA Compliance", "WES/IQAS Friendly Formats", "Complex Transcript Formatting", "Course Title Accuracy"],
        checklist: ["HEC Attested Original Degree", "Complete Marksheet/Transcript", "Passport for exact name matching", "Target University Guidelines"],
        faqs: [
            { q: "Do you provide translation formatted for WES evaluation?", a: "Yes, our academic translations are specifically structured and formatted to meet the strict requirements of WES, IQAS, and other international credential evaluation bodies." },
            { q: "Can you help with the HEC attestation process too?", a: "Yes, we provide comprehensive consultancy and logistics support for the entire HEC and MOFA verification process prior to translation." },
            { q: "How do you handle specific technical course names?", a: "We utilize field-specific glossaries to ensure that technical, medical, and engineering course titles are translated to their exact international equivalents." }
        ]
    },
    "police-character-certificate": {
        title: "Police Character Certificate Translation | Lisan.pk",
        h1: "Certified Police Character Certificate Translation",
        description: "Official Arabic & English translation of Police Character Certificates. Required for Saudi, UAE, Qatar work visas, and global immigration.",
        content: "A Police Character Certificate (PCC) or Police Clearance Certificate is a mandatory legal requirement for most work visas, residency permits, and immigration applications worldwide. It proves your clean criminal record. We provide highly accurate, certified translations of PCCs issued by local police departments or regional offices across Pakistan. Our translations accurately convey legal terminologies and clearance statuses, ensuring they are instantly recognized and accepted by all major embassies, consulates, and border agencies.",
        features: ["Embassy Certified for Visas", "24-Hour Express Delivery", "Legal Validity Guaranteed", "Accurate Police Terminology", "Matches Original Layout"],
        checklist: ["Original Police Character Certificate", "Passport copy for name matching", "CNIC copy", "Purpose of translation (Country/Visa type)"],
        faqs: [
            { q: "Is this translation valid for Saudi work visas?", a: "Yes, our certified translations are recognized and accepted by the Saudi Embassy, MOFA, and Cultural Attaché for all visa categories." },
            { q: "Do you translate handwritten or regional police certificates?", a: "Yes, we translate police certificates issued by any district, city, or regional police office across Pakistan, whether printed or handwritten." },
            { q: "Does the translation need to be attested by MOFA?", a: "Usually, the original document must be attested by MOFA first, and the translation can then be attached. We can guide you based on your destination country's specific rules." }
        ]
    },
    "divorce-certificate-translation": {
        title: "Certified Divorce Certificate Translation | Lisan.pk",
        h1: "Certified Divorce Certificate & Legal Deeds Translation",
        description: "Legal translation of divorce certificates and effectiveness deeds for official record updates and immigration. Accepted by embassies globally.",
        content: "When updating your marital status for immigration, legal records, or a new marriage abroad, a certified translation of your Divorce Certificate (Talaq Nama) or Certificate of Effectiveness is strictly required. We provide precise, legally sound translations of family court judgments, arbitration council certificates, and NADRA divorce registration certificates. Our legal translators ensure that all judicial terminologies, dates of effectiveness, and party details are translated with absolute accuracy for foreign legal systems.",
        features: ["Legal Terminology Experts", "NADRA & Court Format Matching", "Embassy & MOFA Accepted", "Absolute Confidentiality", "Sworn Translators"],
        checklist: ["Original Divorce Certificate / Court Order", "Passport copies of the applicant", "CNIC copies for verification"],
        faqs: [
            { q: "Is the translation of a local Union Council certificate accepted abroad?", a: "Yes, provided it is a legally issued document and our certified translation accompanies it, it is fully accepted by foreign courts and immigration bodies." },
            { q: "Can you translate detailed family court judgments?", a: "Yes, our legal department specializes in translating lengthy court verdicts and arbitration council proceedings into English or Arabic." },
            { q: "Do you keep legal documents confidential?", a: "Absolutely. We maintain strict privacy and data protection protocols for all sensitive legal and family documents." }
        ]
    },
    "medical-report-translation": {
        title: "Certified Medical Report Translation | Lisan.pk",
        h1: "Precise Medical Report & Fitness Certificate Translation",
        description: "Professional medical translation for overseas treatment, insurance claims, and fitness certificates. Accurate medical terminology guaranteed.",
        content: "Medical translation leaves no room for error. Whether you are traveling abroad for specialized medical treatment, submitting fitness certificates for a work visa, or filing international health insurance claims, accurate translation is vital. Lisan.pk provides specialized medical translation services for lab reports, doctor’s prescriptions, surgical records, and GAMCA medical fitness certificates. Our translators possess extensive knowledge of complex anatomical, pharmacological, and clinical terminologies.",
        features: ["Clinical Terminology Experts", "GAMCA Certificate Translation", "High Precision & Accuracy", "Accepted by Foreign Hospitals", "Confidential Processing"],
        checklist: ["Clear scan of Medical Reports/Lab Results", "Doctor's notes or prescriptions", "Passport copy of the patient"],
        faqs: [
            { q: "Can you translate handwritten doctor prescriptions?", a: "Yes, our specialized medical linguists are experienced in deciphering medical shorthand and handwritten clinical notes." },
            { q: "Are your translations accepted by international health insurance companies?", a: "Yes, our certified medical translations are widely accepted by global health insurance providers for claims processing." },
            { q: "Do you translate GAMCA medical fitness reports for Gulf visas?", a: "Yes, we regularly translate GAMCA and other official medical fitness certificates required for Saudi, UAE, and Oman work visas." }
        ]
    },
    "property-document-translation": {
        title: "Property Document & Fard Translation | Lisan.pk",
        h1: "Certified Translation for Property Documents & Sale Deeds",
        description: "Official translation of Fard, registry, sale deeds, and property documents for visa wealth proofs and international legal use.",
        content: "Proving your financial ties and assets is a crucial part of securing visitor, student, or immigration visas. We offer certified translations of Pakistani property documents including Fard, Registry (Registry Inteqal), Sale Deeds, Allotment Letters, and Lease Agreements. Our experts accurately translate archaic revenue and land terminologies (such as Kanal, Marla, Khasra, and Khatooni) into globally understood legal and financial terms, making your wealth proof robust and transparent for embassy officials.",
        features: ["Revenue Terminology Experts", "Wealth Proof Ready", "Accurate Measurement Conversion", "Embassy Trusted", "Fast Processing"],
        checklist: ["Original Fard or Property Registry", "CNIC of Property Owner", "Passport copy for visa applicants", "Any associated valuation reports"],
        faqs: [
            { q: "Do you translate old, handwritten registry documents?", a: "Yes, we specialize in translating old, handwritten Urdu/Persian land records and deciphering complex local revenue terminologies." },
            { q: "Is property translation required for student or visitor visas?", a: "Yes, translating property documents is highly recommended as it serves as strong proof of ties to your home country and financial stability." },
            { q: "Can you translate property valuation reports?", a: "Yes, we translate property valuation certificates issued by approved evaluators to support your financial portfolio for embassies." }
        ]
    },
    "legal-document-translation": {
        title: "Certified Legal Document Translation | Lisan.pk",
        h1: "Certified Legal Translation for Court Cases & Affidavits",
        description: "Professional translation for court judgments, power of attorney, affidavits, and legal agreements. Sworn translation services.",
        content: "Legal proceedings and international business operations demand flawlessly translated documents. Lisan.pk provides sworn and certified translations for a wide spectrum of legal documents, including Power of Attorney, Affidavits, Court Judgments, FIRs, Corporate Agreements, and Partnership Deeds. Our legal translators possess deep expertise in both Pakistani jurisprudence and international law, ensuring that every clause and legal nuance is perfectly preserved and legally binding in the target language.",
        features: ["Sworn Legal Translators", "Court Judgment Specialists", "Notarization Support", "Corporate Law Expertise", "100% Confidentiality"],
        checklist: ["Original Legal Document / Court Order", "ID copies of involved parties", "Signatory verification details"],
        faqs: [
            { q: "Are your translations admissible in international courts?", a: "Yes, our certified and sworn translations are accompanied by an official declaration, making them admissible in foreign courts and arbitration panels." },
            { q: "Do you translate FIRs (First Information Reports)?", a: "Yes, we translate FIRs and police reports accurately for asylum cases, immigration appeals, or international legal disputes." },
            { q: "Can you translate a Power of Attorney for use in Dubai or Saudi Arabia?", a: "Absolutely. We provide MOFA-compliant Arabic translations for Power of Attorney documents intended for use across the GCC." }
        ]
    },
    "bank-statement-translation": {
        title: "Bank Statement & Financial Translation | Lisan.pk",
        h1: "Certified Financial Translation for Bank Statements & Tax Returns",
        description: "Official translation of bank statements, salary slips, and financial documents. Essential for visa applications and international business.",
        content: "Financial transparency is critical for successful visa applications, international student admissions, and cross-border business. We provide certified translation services for Bank Statements, Salary Slips, Tax Returns (FBR documents), Audit Reports, and Financial Statements. We ensure that numerical data is impeccably transferred and financial terminologies are localized to meet the strict assessment criteria of visa officers, foreign universities, and international investors.",
        features: ["Error-Free Numerical Data", "FBR Tax Document Experts", "Visa Financial Proofs", "Confidential Data Handling", "Corporate Audit Formats"],
        checklist: ["Original Bank Statement/Tax Document", "Passport of Account Holder", "Target Currency/Formatting requirements (if any)"],
        faqs: [
            { q: "Will the translation retain the table format of my bank statement?", a: "Yes, our desktop publishing team ensures the translated document mirrors the exact tabular format and layout of the original statement." },
            { q: "Do you translate FBR tax returns for UK/US visas?", a: "Yes, we translate and certify FBR wealth statements, tax returns, and NTN certificates for global visa applications." },
            { q: "How do you ensure the privacy of my financial data?", a: "We employ strict non-disclosure agreements (NDAs) and secure data handling procedures to protect your sensitive financial information." }
        ]
    },
    "cnic-id-card-translation": {
        title: "CNIC & ID Card Translation Services | Lisan.pk",
        h1: "Certified Translation for CNIC & National ID Cards",
        description: "Certified translation of Pakistani CNIC and ID cards for official identification, visa applications, and foreign registrations.",
        content: "Your Computerized National Identity Card (CNIC) is your primary proof of citizenship. For international use, such as opening a bank account abroad, registering for foreign services, or processing specific visa categories, a certified translation of an Urdu-only CNIC is often required. We provide exact, certified translations of standard CNICs into English or Arabic, ensuring all identity details, addresses, and registration numbers are flawlessly documented for foreign authorities.",
        features: ["Standardized ID Formatting", "Quick Processing Time", "Embassy & Bank Accepted", "Precise Address Translation", "Digital & Hard Copies"],
        checklist: ["Clear scan of Front and Back of CNIC", "Passport copy (to confirm name spellings)"],
        faqs: [
            { q: "Do I need to translate my CNIC if I have a Smart Card (SNIC)?", a: "Smart Cards (SNIC) are usually bilingual (English/Urdu). However, if a foreign authority strictly requests an Arabic translation for the Gulf, or if you hold an old Urdu-only CNIC, translation is necessary." },
            { q: "Is the translation valid for opening a bank account overseas?", a: "Yes, our certified translations are accepted by international banks as valid proof of national identity." },
            { q: "How long does a CNIC translation take?", a: "We process standard ID document translations very quickly, often within a few hours." }
        ]
    },
    "business-document-translation": {
        title: "Corporate & Business Document Translation | Lisan.pk",
        h1: "Professional Business Translation for Corporate Documents",
        description: "Certified translation of articles of association, company profiles, SECP documents, and commercial contracts for international business.",
        content: "Expanding your business globally requires seamless communication and legally compliant documentation. We offer specialized B2B translation services for corporate clients. Our expertise covers Articles of Association, SECP Incorporation Certificates, Company Profiles, Business Plans, Commercial Contracts, and Marketing Materials. We ensure your corporate identity and legal obligations are perfectly articulated in English, Arabic, or Turkish, facilitating smooth international trade, joint ventures, and foreign branch registrations.",
        features: ["SECP Document Experts", "Corporate Terminology", "B2B Commercial Contracts", "Brand Voice Preservation", "Bulk Document Discounts"],
        checklist: ["Original Corporate Documents", "Authorized Signatory IDs", "Company Letterhead (if applicable)", "Specific industry glossaries (if available)"],
        faqs: [
            { q: "Do you translate company registration documents for opening a branch in Dubai or Saudi Arabia?", a: "Yes, we specialize in translating SECP certificates and corporate memorandums into MOFA-certified Arabic for GCC business registrations." },
            { q: "Can you handle large volumes of corporate translation?", a: "Absolutely. We have dedicated teams for enterprise clients to handle bulk documentation within tight corporate deadlines." },
            { q: "Do you translate technical business proposals?", a: "Yes, we assign subject-matter experts to translate technical proposals, ensuring industry-specific jargon is accurately localized." }
        ]
    },
    "experience-certificate-translation": {
        title: "Experience Certificate & Employment Translation | Lisan.pk",
        h1: "Certified Translation for Experience & Employment Certificates",
        description: "Official translation of professional experience letters and employment certificates for overseas work visas and skilled immigration.",
        content: "Validating your professional background is essential for skilled immigration pathways, overseas job applications, and professional licensing abroad. We provide certified translations of Experience Certificates, Employment Letters, Reference Letters, and Professional Licenses. Our translators accurately convey your job titles, responsibilities, and industry-specific skills into the target language, ensuring your professional profile aligns with international standards and passes strict employer or immigration background checks.",
        features: ["Professional Job Title Accuracy", "Skilled Immigration Ready", "Industry-Specific Jargon", "Verified Agency Stamp", "Fast Turnaround"],
        checklist: ["Original Experience/Employment Letter", "Passport copy", "Detailed Resume/CV (for context on complex technical roles)"],
        faqs: [
            { q: "Will this translation be accepted for Canadian Express Entry or Australian PR?", a: "Yes, our certified translations meet the rigorous documentation standards set by IRCC (Canada) and the Department of Home Affairs (Australia) for skilled migration." },
            { q: "How do you translate highly specific technical job roles?", a: "We consult industry glossaries and, when necessary, cross-reference with your provided CV to ensure the translated job title perfectly matches the intended international equivalent." },
            { q: "Can you translate employment contracts for overseas jobs?", a: "Yes, we provide legally accurate translations of international employment contracts to ensure you fully understand your terms before signing." }
        ]
    },
    "saudi-scholarship-translation": {
        title: "Saudi Scholarship Document Translation | Lisan.pk",
        h1: "Certified Arabic Translation for Saudi University Scholarships",
        description: "Specialized Arabic translation for KSU, KAU, Madinah University, and fully funded Saudi scholarship applications.",
        content: "Applying for the fully funded Saudi Arabian Government Scholarships requires your academic and personal documents to be impeccably translated into Arabic. Lisan.pk offers specialized translation packages for students applying to King Saud University (KSU), King Abdulaziz University (KAU), Islamic University of Madinah, and other top Saudi institutions. We translate degrees, transcripts, recommendation letters, medical reports, and police clearance certificates strictly according to the format required by Saudi university admission portals.",
        features: ["Saudi University Portal Compliant", "Complete Application Packages", "Medical & Police Clearence", "Academic Excellence", "Student Discounts Available"],
        checklist: ["Original Degrees & Transcripts", "Letters of Recommendation", "Police Character Certificate", "Medical Fitness Report", "Passport & CNIC"],
        faqs: [
            { q: "Do Saudi universities require Arabic translations for English documents?", a: "Yes, while some universities accept English, many prestigious Saudi universities strongly prefer or strictly mandate certified Arabic translations for the final admission process." },
            { q: "Can you translate recommendation letters (Tazkiyah)?", a: "Yes, we perfectly translate academic reference letters and Islamic character recommendations (Tazkiyah) maintaining the respectful and formal tone required." },
            { q: "Do you offer a complete package for all scholarship documents?", a: "Yes, we offer discounted bundled translation packages for students translating their entire scholarship dossier." }
        ]
    },
    "iata-dts-umrah-travel-agency": {
        title: "IATA & DTS Certificate Arabic Translation for Umrah & Travel Agencies | Lisan.pk",
        h1: "IATA & DTS Certificate Arabic Translation Services for Umrah Companies & Travel Agencies in Pakistan",
        description: "Certified Arabic translation of IATA certificates, DTS documents, tourism licenses, and commercial paperwork for Umrah operators, Hajj companies, and Saudi-linked travel agencies across Pakistan.",
        content: "Umrah companies, Hajj operators, and travel agencies working with Saudi partners face strict documentation compliance requirements. Saudi authorities, tourism ministries, and B2B partners demand professionally translated Arabic versions of IATA certificates, DTS accreditation documents, company registration papers, tourism licenses, and commercial agreements. A single terminology error or formatting mistake can delay approvals, damage your credibility with Saudi partners, or halt your operations during peak Umrah and Hajj season. Lisan.pk provides specialized commercial Arabic translation built specifically for the travel and tourism industry — not generic translation, but Saudi travel documentation support with proper business terminology, official stamps, and urgent seasonal processing.",
        features: ["IATA & DTS Specialist", "Saudi Travel Compliance", "Urgent Seasonal Processing", "B2B Commercial Terminology", "Certified Stamp & Signature", "Nationwide Courier Delivery"],
        checklist: ["IATA Certificate or Membership Document", "DTS Accreditation Certificate", "Company Registration / NTN Certificate", "Tourism License from Ministry", "Partnership Agreements or Contracts", "Passport / CNIC of Authorized Signatory"],
        faqs: [
            { q: "Do you translate IATA certificates into Arabic?", a: "Yes. We provide certified Arabic translation of IATA membership certificates, accreditation letters, and related aviation/travel documentation with proper commercial terminology." },
            { q: "Can you handle urgent translation before Umrah season?", a: "Yes. We offer same-day and 24-hour priority processing for travel agencies facing seasonal deadlines, partner demands, or Saudi approval timelines." },
            { q: "Is machine translation acceptable for Saudi travel documents?", a: "No. Saudi authorities and B2B partners reject machine-translated commercial documents. All translations must use proper Arabic business and tourism terminology with certified stamps." },
            { q: "Do you translate DTS certificates for Saudi compliance?", a: "Yes. We translate DTS (Destination Tourism System) certificates, tourism operator licenses, and related accreditation documents into certified Arabic for Saudi regulatory compliance." },
            { q: "Can Umrah companies outside major cities use your services?", a: "Yes. We accept documents via WhatsApp and email from any city in Pakistan and provide certified translations with nationwide courier delivery." }
        ]
    },
    "urdu-to-english-translation": {
        title: "Certified Urdu to English Translation Services | Lisan.pk",
        h1: "Certified Urdu to English Document Translation Services",
        description: "Official Urdu to English translation for academic degrees, Nikah Nama, birth certificates, and police records. Accepted globally by UKVI, USCIS, and Canadian IRCC.",
        content: "When applying for global visas, immigration, or foreign university admissions, presenting a flawlessly translated English document with certified stamps is non-negotiable. Our certified translations are formatted to match the original structure perfectly and are accompanied by an official Certificate of Accuracy, registered stamps, and authorized signatures. We specialize in transforming complex Urdu legal, medical, and regional academic texts into standard international English.",
        features: ["UKVI & USCIS Accepted", "12-Hour Urgent Delivery", "Official Seals & Stamps", "Accuracy Certification Included", "Regional Dialect Expertise"],
        checklist: ["Original Urdu Document (clear photo or scan)", "Passport copies for exact name matching", "Target country visa specifications (if any)"],
        faqs: [
            { q: "Is this translation valid for UK and Canada immigration?", a: "Yes, our certified translations are accompanied by an official 'Certificate of Accuracy' containing our registry details, which is 100% accepted by UKVI, USCIS, and IRCC." },
            { q: "Do you translate handwritten marriage deeds (Nikah Nama)?", a: "Yes, we specialize in reading traditional handwriting and drafting high-precision, formatted English transcripts that mirror the original stamps and blocks." },
            { q: "Do you provide notarization for Urdu to English translations?", a: "Yes, if required by the requesting authority, we can provide notarization services along with the certified translation." }
        ]
    }
}

interface PageProps {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const data = serviceData[slug as keyof typeof serviceData]
    if (!data) return {}

    return {
        title: `${data.title} | Lisan.pk`,
        description: data.description,
        alternates: {
            canonical: `https://www.lisan.pk/services/translation/${slug}`,
        },
    }
}

export async function generateStaticParams() {
    return Object.keys(serviceData).map((slug) => ({
        slug: slug,
    }))
}

export default async function ServiceDetailPage({ params }: PageProps) {
    const { slug } = await params
    const data = serviceData[slug as keyof typeof serviceData]

    if (!data) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-slate-50 font-sans">
            <PageHero
                title={data.title}
                description={data.description}
                breadcrumbs={[
                    { label: "Services", href: "/services" },
                    { label: "Translation", href: "/services/translation" },
                    { label: data.title }
                ]}
            />

            <section className="py-20 font-sans">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid md:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="md:col-span-2 space-y-12">
                            <div className="prose prose-slate max-w-none">
                                <h1 className="text-3xl font-extrabold text-slate-900 mb-6 font-serif">{data.h1}</h1>
                                <p className="text-lg text-slate-600 leading-relaxed mb-8">
                                    {data.content}
                                </p>

                                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                                    {data.features.map((f) => (
                                        <div key={f} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 shadow-sm">
                                            <span className="text-emerald-600 font-extrabold select-none">✓</span>
                                            <span className="font-bold text-slate-700 text-sm">{f}</span>
                                        </div>
                                    ))}
                                </div>

                                <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Requirements Checklist</h2>
                                <ul className="space-y-4 mb-12">
                                    {data.checklist.map((item) => (
                                        <li key={item} className="flex items-start gap-3 text-slate-600 text-sm font-medium">
                                            <span className="text-emerald-600 font-extrabold select-none">✓</span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <h2 className="text-2xl font-bold text-slate-900 mb-6 font-serif">Why Certified Translation Matters</h2>
                                <p className="text-slate-600 mb-8 leading-relaxed text-sm">
                                    When submitting documents to the <strong>Saudi Embassy</strong>, <strong>MOFA</strong>, or international universities, a simple translation is not enough. You need a <strong>Certified Translation</strong> that includes an official statement of accuracy, the translator's credentials, and the agency's registered stamp. This legal weight ensures your application isn't rejected for "unofficial documentation."
                                </p>

                                <h2 className="text-2xl font-bold text-slate-900 mb-8 font-serif">Frequently Asked Questions</h2>
                                <div className="space-y-4">
                                    {data.faqs.map((faq, idx) => (
                                        <div key={idx} className="p-6 bg-slate-100/50 rounded-2xl border border-slate-200 text-sm">
                                            <h4 className="font-bold text-slate-900 mb-2 font-serif">Q: {faq.q}</h4>
                                            <p className="text-slate-600 leading-relaxed">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {slug === "urdu-to-english-translation" && (
                                <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 text-white p-8 rounded-3xl shadow-xl shadow-emerald-700/10 mb-8 font-sans">
                                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase bg-white/20 px-3 py-1 rounded-full text-white mb-4 inline-block border border-white/20 select-none">
                                        Highly Recommended Guide
                                    </span>
                                    <h3 className="text-2xl font-bold mb-3 font-serif">Comprehensive Urdu to English Translation Guide</h3>
                                    <p className="text-emerald-50 text-sm leading-relaxed mb-6 font-sans">
                                        Are you worried about name spelling mismatches, UKVI/USCIS guidelines, or embassy rejections? Read our expert, in-depth guide covering legal, immigration, and academic requirements across Pakistan.
                                    </p>
                                    <Link 
                                        href="/blog/urdu-to-english-translation-services-pakistan"
                                        className="inline-flex items-center justify-center px-6 py-3 bg-white text-emerald-800 rounded-full font-bold text-sm hover:bg-emerald-50 transition-colors shadow-md"
                                    >
                                        Read Guide & Avoid Rejections
                                    </Link>
                                </div>
                            )}

                            {/* Interlinking to Locations */}
                            <div className="bg-slate-50 p-8 rounded-3xl border border-emerald-100 font-sans">
                                <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">Availability in Major Cities</h3>
                                <p className="text-slate-600 mb-6 text-sm">
                                    We provide this specialized service across Pakistan. Click a city to learn about local pickup and delivery options:
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['lahore', 'karachi', 'islamabad', 'faisalabad', 'multan', 'sialkot'].map(city => (
                                        <Link 
                                            key={city} 
                                            href={`/locations/${city}`}
                                            className="px-4 py-2 bg-white border border-emerald-100 text-emerald-800 rounded-full text-sm font-semibold hover:bg-emerald-600 hover:text-white transition-all capitalize"
                                        >
                                            {city}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6 font-sans">
                            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-100 border-t-4 border-t-emerald-600 sticky top-24">
                                <h3 className="font-bold text-slate-900 mb-6 text-xl font-serif">Order Professional Translation</h3>
                                <div className="space-y-4">
                                    <Link href={`https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20am%20interested%20in%20${data.title}%20translation%20services.`} target="_blank" className="block w-full">
                                        <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] h-14 text-lg font-bold text-white">
                                            WhatsApp Now
                                        </Button>
                                    </Link>
                                    <Link href="tel:+923044296295" className="block w-full">
                                        <Button variant="outline" className="w-full h-14 text-lg border-slate-200 font-bold">
                                            Direct Call
                                        </Button>
                                    </Link>
                                </div>
                                <div className="mt-8 pt-8 border-t border-slate-100 text-center font-sans">
                                    <p className="text-sm text-slate-500 italic mb-4">"Trusted by 50,000+ clients over 40 years."</p>
                                    <div className="flex justify-center gap-4">
                                        <div className="text-center">
                                            <div className="font-bold text-emerald-800">4.9/5</div>
                                            <div className="text-[10px] uppercase text-slate-400 font-bold">Google Rating</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="font-bold text-emerald-800">100%</div>
                                            <div className="text-[10px] uppercase text-slate-400 font-bold">Acceptance</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
