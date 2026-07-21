export interface Priority1Content {
    city: string;
    service: string;
    intro: string;
    whatWeTranslate: string;
    issuingAuthority: string;
    primaryUseCases: string[];
    courierDeliveryInfo: string;
    verifyFlag?: string;
}

export const PRIORITY1_CONTENT: Record<string, Priority1Content> = {
    "lahore/nikah-nama-translation": {
        city: "Lahore",
        service: "Nikah Nama Translation",
        intro: "Applicants in Lahore preparing family visa files or Saudi and Gulf residency documentation require certified Arabic or English translations of their official Urdu Nikahnama. Lisan.pk provides embassy-recognized certified translations formatted to match original legal layouts, preserving all dower (Haq Mehr) clauses, registrar seals, and witness signatures.",
        whatWeTranslate: "Official Urdu Nikahnama (Form II), NADRA Marriage Registration Certificates (MRC), Nikah Registrar affidavits, and marital status declarations.",
        issuingAuthority: "Issued by Metropolitan Corporation Lahore Union Councils, Cantonment Board Lahore, or NADRA centers in Lahore District.",
        primaryUseCases: [
            "Saudi Arabia Spouse & Family Residence Visas",
            "UAE, Qatar, and Kuwait Family Joining Visas",
            "UKVI Spouse Visa & US Immigration (USCIS)",
            "Embassy Attestation & Legalization Workflows"
        ],
        courierDeliveryInfo: "Lisan.pk operates entirely remotely with no physical office or walk-in branch in Lahore. You simply send clear document photos or scans via WhatsApp. Once certified by our linguists, official stamped hard copies are couriered directly to your doorstep anywhere in Lahore (DHA, Gulberg, Johar Town, Model Town, etc.) via TCS or Leopards courier, alongside express digital PDF delivery."
    },
    "lahore/urdu-to-english-translation": {
        city: "Lahore",
        service: "Urdu to English Translation",
        intro: "Whether submitting legal affidavits, police character certificates, or academic credentials to international immigration portals, Lahore residents trust Lisan.pk for official Urdu to English certified translations. Every translation includes an authorized Certificate of Accuracy recognized by UKVI, USCIS, IRCC Canada, and European consulates.",
        whatWeTranslate: "Police Character Certificates, Land Records (Fard), Court Judgments, NADRA Birth & Death Certificates, Affidavits, and Property Deeds.",
        issuingAuthority: "Documents issued by Lahore District Courts, Punjab Police Khidmat Markaz, BISE Lahore, University of the Punjab, or NADRA Lahore offices.",
        primaryUseCases: [
            "UKVI & USCIS Immigration Applications",
            "Canadian IRCC & Australian Visa Submissions",
            "Foreign University Admissions & WES Credential Evaluation",
            "Legal Admissibility in Foreign Courts & Consulates"
        ],
        courierDeliveryInfo: "Our service is 100% remote with no local walk-in office in Lahore. Share clear document images via WhatsApp to receive a quote. Certified stamped hard copies with legal seals are dispatched via tracked courier to your home or workplace anywhere in Lahore."
    },
    "karachi/nikah-nama-translation": {
        city: "Karachi",
        service: "Nikah Nama Translation",
        intro: "Married couples in Karachi applying for Saudi family visas or Gulf residency portals require precision Arabic or English Nikahnama translation. Lisan.pk translates handwritten Urdu Nikahnamas and NADRA Marriage Registration Certificates (MRC) with exact mirror-image formatting and certified legal seals accepted by foreign consulates.",
        whatWeTranslate: "Handwritten Urdu Nikahnamas, NADRA Computerized Marriage Certificates (MRC), Union Committee Marriage Records, and Divorced/Widowed Status Certificates.",
        issuingAuthority: "Issued by Karachi Metropolitan Corporation (KMC) Union Committees, Cantonment Boards (Clifton, Karachi Cantt), or NADRA Sindh Registration Centers.",
        primaryUseCases: [
            "Saudi Arabia Dependent & Family Visas",
            "UAE Consulate Karachi Attestation & Residency",
            "Qatar & Oman Family Joining Documentation",
            "US Spouse Visa (CR-1/IR-1) & UK Spouse Visas"
        ],
        courierDeliveryInfo: "Lisan.pk provides remote online translation services with no physical branch or walk-in desk in Karachi. Send your document scans over WhatsApp. Official certified physical copies are dispatched via tracked overnight courier to all Karachi zones (Clifton, Defense, Gulshan-e-Iqbal, Nazimabad, PECHS) along with digital copies."
    },
    "karachi/urdu-to-english-translation": {
        city: "Karachi",
        service: "Urdu to English Translation",
        intro: "Karachi professionals and students undergoing foreign visa processing require certified Urdu to English translations that strictly comply with international consular standards. Lisan.pk converts legal deeds, character certificates, and personal records into embassy-accepted English with registered certification stamps.",
        whatWeTranslate: "Sindh Police Clearance Certificates, KMC Civil Records, High Court & District Court Documents, Property Papers, and Academic Degrees.",
        issuingAuthority: "Issued by Karachi District Courts, Sindh Police Security Branch, BISE Karachi, BIEK, University of Karachi, or NADRA centers in Sindh.",
        primaryUseCases: [
            "USCIS (US Embassy Karachi & US Immigration)",
            "UKVI, Australian & Canadian Student/Work Visas",
            "Commercial & Legal Court Verification",
            "WES & Educational Credential Assessment"
        ],
        courierDeliveryInfo: "All translations are processed remotely without any local office visits in Karachi. Submit clear scans online, and receive officially stamped certified hard copies couriered directly to your Karachi address in 24 to 48 hours."
    },
    "islamabad/nikah-nama-translation": {
        city: "Islamabad",
        service: "Nikah Nama Translation",
        intro: "Residents of Islamabad submitting marriage records to the Diplomatic Enclave or Ministry of Foreign Affairs (MOFA) need certified Nikahnama translations. Lisan.pk translates Urdu marriage contracts into legal Arabic and English, fully formatted for immediate embassy and consular submission.",
        whatWeTranslate: "Manual Urdu Nikahnama, NADRA Computerized Marriage Certificates (MRC), Legal Dower Deeds, and Foreign Spouse Visa Documentation.",
        issuingAuthority: "Issued by ICT Administration Union Councils (Islamabad Metropolitan Corporation) or NADRA Headquarters / ICT Registration Centers.",
        primaryUseCases: [
            "Diplomatic Enclave & Foreign Embassy Visa Submissions",
            "Saudi Arabia Embassy & Cultural Office Attestation",
            "UAE & Gulf Embassy Legalization in Islamabad",
            "UK, US, Canada & European Spouse Visa Applications"
        ],
        courierDeliveryInfo: "Lisan.pk handles all translations remotely—we do not maintain a walk-in office in Islamabad. Simply upload your document scans via WhatsApp. Certified hard copies with legal stamps are couriered to your home or office in any Islamabad sector (F, G, H, I, Blue Area, Bahria, DHA)."
    },
    "islamabad/birth-certificate-translation": {
        city: "Islamabad",
        service: "Birth Certificate Translation",
        intro: "Translating a NADRA birth certificate or hospital record in Islamabad requires absolute accuracy in name spellings and parental details to match passport records. Lisan.pk provides certified Arabic and English birth certificate translations accepted by MOFA and foreign embassies.",
        whatWeTranslate: "NADRA Computerized Birth Registration Certificates (CRC), Child B-Form, Hospital Birth Records, and Adoptive Registration Files.",
        issuingAuthority: "Issued by ICT Directorate of Health Services / ICT Union Councils or NADRA Headquarters / Tehsil Offices in Islamabad.",
        primaryUseCases: [
            "Saudi University Scholarship Portals (KSU, KAU, Madinah University)",
            "Child Dependent Visas for Gulf & European Nations",
            "MOFA Islamabad Document Attestation",
            "Foreign School & University Student Enrollment"
        ],
        courierDeliveryInfo: "Our service is completely remote with no physical office in Islamabad. Send your NADRA birth certificate photo on WhatsApp for instant processing. Physical certified copies are couriered directly to your Islamabad address within 24-48 hours."
    },
    "islamabad/urdu-to-english-translation": {
        city: "Islamabad",
        service: "Urdu to English Translation",
        intro: "Islamabad applicants preparing immigration files or academic packages for foreign consulates require official Urdu to English translation backed by a signed Certificate of Accuracy. Lisan.pk ensures your legal, civil, and academic documents meet strict international requirements.",
        whatWeTranslate: "Islamabad Police Character Certificates, FBISE Marksheets, HEC Verified Documents, Legal Affidavits, and Financial/Property Records.",
        issuingAuthority: "Issued by ICT District Courts, Islamabad Capital Territory Police (Police Khidmat Markaz), FBISE, or HEC Headquarters H-9.",
        primaryUseCases: [
            "US Embassy Islamabad & UKVI Visa Petitions",
            "Schengen, Canadian & Australian Visa Documentation",
            "HEC & WES Educational Credential Verification",
            "Official Legal & Commercial Submissions"
        ],
        courierDeliveryInfo: "Process your documents remotely from home. No physical branch visit in Islamabad is needed. Certified hard copies with official registry stamps are delivered to your doorstep in Islamabad via tracked courier."
    },
    "rawalpindi/nikah-nama-translation": {
        city: "Rawalpindi",
        service: "Nikah Nama Translation",
        intro: "For residents of Rawalpindi applying for Saudi family visas or Gulf embassy attestations, Lisan.pk delivers certified Arabic and English Nikahnama translation services. We transcribe all traditional Urdu marriage registrar scripts and NADRA certificates into clear, legal translations.",
        whatWeTranslate: "Traditional Urdu Nikahnama, NADRA Computerized MRC, Marriage Registration Affidavits, and Family Record Documents.",
        issuingAuthority: "Issued by Municipal Corporation Rawalpindi / Rawalpindi Cantonment Board Union Councils or NADRA Centers in Rawalpindi District.",
        primaryUseCases: [
            "Saudi Arabia Work & Family Residence Visas",
            "MOFA Camp Office Attestation & Legalization",
            "Gulf Country Family Visas (UAE, Qatar, Bahrain)",
            "UK & European Union Spouse Visa Verification"
        ],
        courierDeliveryInfo: "Lisan.pk provides 100% remote translation—there is no physical walk-in office in Rawalpindi. Send document scans via WhatsApp, and receive stamped certified hard copies couriered directly to your residence in Rawalpindi (Saddar, Bahria Town, DHA, Satellite Town, Cantt) via TCS/Leopards."
    },
    "rawalpindi/birth-certificate-translation": {
        city: "Rawalpindi",
        service: "Birth Certificate Translation",
        intro: "Accurate birth certificate translation is vital for student scholarship applications and family visa verification in Rawalpindi. Lisan.pk provides certified Arabic and English translations of NADRA B-Forms and birth certificates with 100% embassy acceptance.",
        whatWeTranslate: "NADRA Birth Registration Certificates (CRC), B-Form Records, Union Council Birth Certificates, and Institutional Birth Statements.",
        issuingAuthority: "Issued by Municipal Corporation Rawalpindi, Rawalpindi Cantonment Board Union Councils, or NADRA Tehsil Offices in Rawalpindi.",
        primaryUseCases: [
            "Saudi Arabian University Scholarship Applications",
            "Family Dependent & Residence Visas",
            "MOFA & Foreign Consulate Document Legalization",
            "International Student Admissions & Identity Files"
        ],
        courierDeliveryInfo: "No physical branch visit is required in Rawalpindi. Upload document photos through WhatsApp. Certified hard copies complete with legal seals are dispatched via tracked courier directly to your doorstep in Rawalpindi."
    },
    "peshawar/nikah-nama-translation": {
        city: "Peshawar",
        service: "Nikah Nama Translation",
        intro: "Families in Peshawar applying for Saudi Arabia or Gulf spouse visas require officially stamped Nikahnama translations in Arabic or English. Lisan.pk provides certified translations that preserve every legal term, seal, and marriage dower details from local Urdu Nikahnamas.",
        whatWeTranslate: "Handwritten Urdu Nikahnamas, NADRA Computerized Marriage Certificates (MRC), Pashto/Urdu Marital Records, and Legal Marriage Affidavits.",
        issuingAuthority: "Issued by Capital City Metropolitan Corporation Peshawar Union Councils, Peshawar Cantonment Board, or NADRA KP Registration Centers.",
        primaryUseCases: [
            "Saudi Arabia Family Residence Visas & Iqama Processing",
            "MOFA Peshawar Camp Office Attestation Support",
            "UAE & Gulf Embassy Family Visa Documentation",
            "Western Embassy Spousal Immigration Files"
        ],
        courierDeliveryInfo: "Lisan.pk operates remotely with no physical office or walk-in branch in Peshawar. Simply send clear photos of your Nikahnama on WhatsApp. We mail certified stamped physical copies directly to your doorstep in Peshawar (Hayatabad, University Town, Cantt, etc.) via TCS or Leopards courier."
    },
    "peshawar/birth-certificate-translation": {
        city: "Peshawar",
        service: "Birth Certificate Translation",
        intro: "Students and residents in Peshawar applying for fully funded Saudi scholarships or foreign visas rely on Lisan.pk for certified birth certificate and NADRA B-Form translations in Arabic and English.",
        whatWeTranslate: "NADRA Birth Registration Certificates (CRC), B-Form Family Records, Municipal Birth Statements, and School Leaving Certificates.",
        issuingAuthority: "Issued by Local Government & Rural Development Department (Union Councils) in Peshawar or NADRA KP Registration Centers.",
        primaryUseCases: [
            "Saudi Scholarship Portals (KSU, KAU, Madinah University Uploads)",
            "Student & Dependent Visas for Gulf Countries",
            "MOFA Camp Office Peshawar Attestation",
            "International Identity Verification"
        ],
        courierDeliveryInfo: "All processing is handled remotely with zero local office visits needed in Peshawar. Submit clear scans via WhatsApp, and receive official certified stamped documents couriered to your home address in Peshawar within 24 to 48 hours."
    },
    "peshawar/urdu-to-english-translation": {
        city: "Peshawar",
        service: "Urdu to English Translation",
        intro: "Peshawar applicants preparing civil, academic, or legal documentation for foreign embassies need certified Urdu to English translation. Lisan.pk provides recognized translations complete with registered legal seals and Certificates of Accuracy.",
        whatWeTranslate: "KP Police Character Certificates, BISE Peshawar Certificates, Peshawar University Degrees, Court Affidavits, and NADRA Civil Records.",
        issuingAuthority: "Issued by Peshawar District Courts, KP Police Khidmat Markaz, BISE Peshawar, University of Peshawar, or NADRA KP offices.",
        primaryUseCases: [
            "UKVI, US, Canadian & Australian Visa Applications",
            "Foreign Student Visa Packages & Academic Verification",
            "Legal Admissibility in Foreign Consulates & Immigration",
            "WES & International Credential Assessment"
        ],
        courierDeliveryInfo: "Lisan.pk services Peshawar residents 100% remotely. Upload your document images on WhatsApp to get started. Certified hard copies with official seals are dispatched to any address in Peshawar via tracked courier."
    },
    "multan/nikah-nama-translation": {
        city: "Multan",
        service: "Nikah Nama Translation",
        intro: "Applicants in Multan needing to translate their Urdu Nikahnama into Arabic or English for Saudi Arabia, UAE, or Gulf visa applications can rely on Lisan.pk. We provide embassy-recognized certified translations that preserve every legal clause, marriage dower (Haq Mehr) term, and registrar seal from your South Punjab records.",
        whatWeTranslate: "Handwritten Urdu Nikahnama, NADRA Computerized Marriage Certificates (MRC), Nikah Registrar affidavits, and marital status records.",
        issuingAuthority: "Issued by Municipal Corporation Multan Union Councils, District Council Multan, or NADRA registration centers in Multan.",
        primaryUseCases: [
            "Saudi Arabia Spouse & Family Residence Visas",
            "UAE Family Joining Visas",
            "Gulf Residency Portals",
            "Embassy Attestation & Legalization"
        ],
        courierDeliveryInfo: "Lisan.pk operates entirely remotely with no physical walk-in office in Multan. Upload document photos via WhatsApp. Certified stamped physical copies are couriered directly to your doorstep anywhere in Multan (Cantt, Gulgasht Colony, Bosan Road, Shah Rukn-e-Alam) via tracked courier."
    },
    "multan/birth-certificate-translation": {
        city: "Multan",
        service: "Birth Certificate Translation",
        intro: "Residents of Multan preparing birth certificates or NADRA B-Forms for international visa filings or Saudi university admissions require precise certified Arabic or English translations. Lisan.pk ensures name spellings, parental details, and registration dates accurately match your passport records.",
        whatWeTranslate: "NADRA Computerized Birth Registration Certificates (CRC), Child B-Forms, Local Government Birth Certificates, and Hospital Records.",
        issuingAuthority: "Issued by Municipal Corporation Multan Union Councils / District Health Authorities or NADRA Tehsil Centers in Multan.",
        primaryUseCases: [
            "Saudi University Scholarship Applications (KSU/KAU)",
            "Gulf Dependent & Child Visas",
            "Foreign School & University Enrollment"
        ],
        courierDeliveryInfo: "No local office visit is required in Multan. Send document scans online via WhatsApp to receive certified stamped hard copies couriered straight to your home address in Multan alongside express digital copies."
    },
    "multan/domicile-certificate-translation": {
        city: "Multan",
        service: "Domicile Certificate Translation",
        intro: "Applicants from Multan submitting provincial residency documents to foreign embassies or scholarship portals need official Arabic or English translation of their Punjab domicile certificate. Lisan.pk delivers certified legal translations bearing authorized seals accepted by foreign consulates.",
        whatWeTranslate: "Provincial Domicile Certificates issued in Multan District, PRC (Permanent Residence Certificates), and local residency affidavits.",
        issuingAuthority: "Issued by the Deputy Commissioner (DC) Office / District Administration Multan.",
        primaryUseCases: [
            "Saudi Ministry of Education & University Scholarship Portals",
            "Foreign Embassy Verification",
            "Overseas Immigration Packets"
        ],
        courierDeliveryInfo: "Process your document remotely without visiting any branch in Multan. Share a clear photo over WhatsApp; your certified stamped hard copy will be couriered directly to your address in Multan."
    },
    "multan/ksu-admission-set": {
        city: "Multan",
        service: "King Saud University Admission Set",
        intro: "Students from Multan and South Punjab applying to King Saud University (KSU) in Riyadh require a complete, cohesive Arabic translation package for all academic and identity records. Lisan.pk prepares fully compliant KSU scholarship document bundles structured according to the official Saudi admission checklist.",
        whatWeTranslate: "Full academic dossier including Matric, Intermediate, Bachelor's/Master's Degrees, Transcripts, Birth Certificates, Domicile, and Character Certificates.",
        issuingAuthority: "Academic records issued by BISE Multan, Bahauddin Zakariya University (BZU Multan), HEC Regional Center Multan, or local district authorities.",
        primaryUseCases: [
            "King Saud University (KSU) Fully Funded Scholarship Portal",
            "Saudi Ministry of Education (MOE) Attestation",
            "Gulf Academic Credential Assessment"
        ],
        courierDeliveryInfo: "Complete service handled remotely for Multan students. Submit clear scans via WhatsApp, and receive your complete KSU certified translation bundle couriered directly to your residence in Multan."
    },
    "faisalabad/nikah-nama-translation": {
        city: "Faisalabad",
        service: "Nikah Nama Translation",
        intro: "Married couples in Faisalabad applying for Saudi spouse visas, UAE residency, or Western spousal immigration require certified Arabic or English translations of their Nikahnama. Lisan.pk provides official mirror-image translations that transcribe every legal entry, dower clause, and registrar stamp accurately.",
        whatWeTranslate: "Traditional Urdu Nikahnama (Form II), NADRA Computerized Marriage Registration Certificates (MRC), and Marriage Registration Statements.",
        issuingAuthority: "Issued by Faisalabad City District Government Union Councils, Cantonment Board Faisalabad, or NADRA Registration Centers in Faisalabad.",
        primaryUseCases: [
            "Saudi Arabia Work & Family Residence Visas",
            "UAE & Qatar Spouse Visas",
            "UKVI & US Immigration Submissions"
        ],
        courierDeliveryInfo: "Lisan.pk provides remote online translation with no physical walk-in office in Faisalabad. Send your document images via WhatsApp. Certified hard copies with official legal seals are dispatched to your doorstep anywhere in Faisalabad (Civil Lines, People's Colony, Madina Town, Samundri Road) via tracked courier."
    },
    "faisalabad/police-character-certificate-translation": {
        city: "Faisalabad",
        service: "Police Character Certificate Translation",
        intro: "Faisalabad residents applying for foreign work permits, student visas, or immigration require certified Arabic or English translation of their Police Character Certificate. Lisan.pk ensures all legal terminology, clearance statements, and official seals are translated with 100% embassy compliance.",
        whatWeTranslate: "Punjab Police Character Certificates, Clearance Letters, and District Court Background Declarations.",
        issuingAuthority: "Issued by Punjab Police Khidmat Markaz Faisalabad / City District Police Office Faisalabad.",
        primaryUseCases: [
            "Saudi Arabia & Gulf Work Visa Legalization",
            "UKVI, US CIS, Canadian & European Visa Processing",
            "Foreign Employment Screening"
        ],
        courierDeliveryInfo: "Processed 100% remotely with zero office visits in Faisalabad. Submit scans online, and receive official certified stamped documents couriered straight to your doorstep in Faisalabad."
    },
    "faisalabad/urdu-to-english-translation": {
        city: "Faisalabad",
        service: "Urdu to English Translation",
        intro: "Professionals, business owners, and students in Faisalabad submitting legal, civil, or commercial records to foreign embassies rely on Lisan.pk for certified Urdu to English translation. Each document is accompanied by a signed Certificate of Accuracy valid for international visa portals.",
        whatWeTranslate: "Police Clearance Certificates, Civil Court Papers, Land Records (Fard), NADRA Certificates, Industrial & Commercial Agreements.",
        issuingAuthority: "Issued by Faisalabad District & Sessions Courts, Punjab Police, BISE Faisalabad, University of Agriculture Faisalabad (UAF), GCUF, or NADRA.",
        primaryUseCases: [
            "UKVI, US, Canadian & Australian Visa Petitions",
            "Foreign University Admissions & WES Assessment",
            "Legal Court Proceedings"
        ],
        courierDeliveryInfo: "Remote translation service—no physical branch in Faisalabad. Share document photos over WhatsApp to get started; certified stamped hard copies are delivered directly to your Faisalabad address via tracked courier."
    },
    "gujrat/nikah-nama-translation": {
        city: "Gujrat",
        service: "Nikah Nama Translation",
        intro: "Overseas Pakistanis and local residents in Gujrat preparing marriage documents for Saudi Arabia, the UK, or Gulf consulates require certified Arabic or English Nikahnama translation. Lisan.pk delivers embassy-approved translations that transcribe all handwritten Urdu clauses, dower details, and official seals.",
        whatWeTranslate: "Traditional Urdu Nikahnama, NADRA Computerized MRC, Marriage Registration Statements, and Legal Dower Declarations.",
        issuingAuthority: "Issued by Municipal Corporation Gujrat / District Council Gujrat Union Councils or NADRA Centers in Gujrat District.",
        primaryUseCases: [
            "Saudi Arabia & UAE Family Residence Visas",
            "UK Spouse Visas (UKVI)",
            "European Union Family Reunification",
            "Foreign Embassy Legalization"
        ],
        courierDeliveryInfo: "Lisan.pk operates remotely with no physical walk-in office in Gujrat. Send clear document photos via WhatsApp. Stamped certified physical copies are couriered directly to your doorstep anywhere in Gujrat (GT Road, Servis Mor, Jalalpur Jattan, Kharian, Lalamusa) via tracked courier."
    },
    "gujrat/iata-dts-umrah-travel-agency": {
        city: "Gujrat",
        service: "IATA & DTS Umrah Agency Translation",
        intro: "Travel agencies and Umrah operators in Gujrat submitting corporate licenses, DTS certificates, or IATA accreditations to Saudi tourism authorities require certified Arabic commercial translation. Lisan.pk provides specialized business translation ensuring your agency credentials meet Saudi Ministry of Tourism standards.",
        whatWeTranslate: "IATA Certificates, Department of Tourist Services (DTS) Licenses, Travel Agency Accreditation Papers, Commercial Contracts, and Securities.",
        issuingAuthority: "{{VERIFY: which board/office issues DTS tourism licenses & agency accreditations in Gujrat/Punjab}} (Issued by Department of Tourist Services Punjab / IATA Pakistan / Gujrat Chamber of Commerce)",
        primaryUseCases: [
            "Saudi Ministry of Hajj & Umrah Partner Portal Registration",
            "Saudi Tourism Authority Licensing",
            "B2B Commercial Agreements in the Kingdom"
        ],
        courierDeliveryInfo: "Remote corporate processing for Gujrat travel operators. Submit digital PDFs or scans via WhatsApp. Official stamped business translations are couriered to your agency office address in Gujrat."
    },
    "gujrat/urdu-to-english-translation": {
        city: "Gujrat",
        service: "Urdu to English Translation",
        intro: "Gujrat applicants preparing personal, legal, or educational files for European, UK, or North American embassies trust Lisan.pk for official Urdu to English certified translation. Every translation includes an authorized Certificate of Accuracy recognized by international immigration departments.",
        whatWeTranslate: "Civil Records, Police Character Certificates, University Degrees, BISE Gujrat Certificates, Property Deeds, and Court Affidavits.",
        issuingAuthority: "Issued by Gujrat District Courts, Punjab Police Khidmat Markaz, University of Gujrat (UOG), BISE Gujrat / BISE Rawalpindi, or NADRA.",
        primaryUseCases: [
            "UKVI, US CIS, European & Canadian Visa Filings",
            "WES Credential Evaluation",
            "Foreign Educational Enrollment"
        ],
        courierDeliveryInfo: "100% remote service—no local branch visit required in Gujrat. Submit document scans via WhatsApp for certified stamped hard copies delivered directly to your doorstep in Gujrat via tracked courier."
    },
    "sialkot/nikah-nama-translation": {
        city: "Sialkot",
        service: "Nikah Nama Translation",
        intro: "Couples in Sialkot applying for Saudi spouse visas, Gulf family permits, or international immigration require certified Arabic or English translation of their Nikahnama. Lisan.pk provides embassy-accepted mirror-image translations that preserve all legal entries, registrar stamps, and marriage dower clauses.",
        whatWeTranslate: "Traditional Urdu Nikahnama, NADRA Computerized Marriage Registration Certificates (MRC), and Marital Status Affidavits.",
        issuingAuthority: "Issued by Municipal Corporation Sialkot / District Council Sialkot Union Councils, Cantonment Board Sialkot, or NADRA Centers.",
        primaryUseCases: [
            "Saudi Arabia & UAE Family Residence Visas",
            "Qatar & Kuwait Family Visas",
            "UK & European Spouse Visas",
            "Consulate Attestation"
        ],
        courierDeliveryInfo: "Lisan.pk handles all translations remotely with no physical office in Sialkot. Upload document photos via WhatsApp; certified hard copies complete with legal stamps are couriered directly to your doorstep in Sialkot (Paris Road, Cantt, Daska, Sambrial) via tracked courier."
    },
    "bahawalpur/degree-transcript-translation": {
        city: "Bahawalpur",
        service: "Degree & Transcript Translation",
        intro: "Graduates from Bahawalpur applying for fully funded Saudi university scholarships or foreign employment require certified Arabic or English translation of their academic degrees and transcripts. Lisan.pk provides precise academic translations formatted for HEC, MOFA, and Saudi Embassy verification.",
        whatWeTranslate: "Bachelor's, Master's, and PhD Degrees, Detailed Academic Transcripts, Marksheets, BISE Bahawalpur Certificates, and Diplomas.",
        issuingAuthority: "Issued by Islamia University of Bahawalpur (IUB), BISE Bahawalpur, or HEC Regional Centers.",
        primaryUseCases: [
            "Saudi University Scholarship Uploads (King Saud University, King Abdulaziz University)",
            "MOFA & HEC Attestation",
            "Foreign Employment Clearance"
        ],
        courierDeliveryInfo: "Complete remote processing for Bahawalpur students and professionals. Share clear scans over WhatsApp to receive your certified stamped degree translation package couriered directly to your address in Bahawalpur via tracked courier."
    },
    // PRIORITY 3 PAGES
    "nawabshah/domicile-certificate-translation": {
        city: "Nawabshah",
        service: "Domicile Certificate Translation",
        intro: "Applicants from Nawabshah (Shaheed Benazirabad) submitting provincial residency documents for Saudi university scholarships or foreign visa applications require certified Arabic or English translation of their Sindh domicile certificate. Lisan.pk provides official legal translations with registered certification seals.",
        whatWeTranslate: "Sindh Domicile Certificates issued in Shaheed Benazirabad District, PRC (Permanent Residence Certificates), and local residency affidavits.",
        issuingAuthority: "{{VERIFY: which district office/branch issues domicile certificates in Nawabshah / Shaheed Benazirabad}} (Issued by Deputy Commissioner DC Office Shaheed Benazirabad / Nawabshah)",
        primaryUseCases: [
            "Saudi Ministry of Education & University Scholarship Portals",
            "Foreign Consulate Verification",
            "Overseas Immigration Files"
        ],
        courierDeliveryInfo: "Lisan.pk services Nawabshah entirely remotely with zero physical walk-in office in the city. Submit your document scan via WhatsApp to receive certified stamped hard copies couriered directly to your doorstep in Nawabshah via tracked courier."
    },
    "dera-ghazi-khan/police-character-certificate-translation": {
        city: "Dera Ghazi Khan",
        service: "Police Character Certificate Translation",
        intro: "Residents of Dera Ghazi Khan applying for overseas employment, Gulf work permits, or student visas require certified Arabic or English translation of their Police Character Certificate. Lisan.pk delivers embassy-approved legal translations with complete seal accuracy.",
        whatWeTranslate: "Punjab Police Character Certificates, Police Clearance Statements, and District Court Background Records.",
        issuingAuthority: "Issued by Punjab Police Khidmat Markaz Dera Ghazi Khan / DPO Office DG Khan.",
        primaryUseCases: [
            "Saudi Arabia & Gulf Work Visa Legalization",
            "UKVI, US CIS & European Visa Petitions",
            "Foreign Employment Screening"
        ],
        courierDeliveryInfo: "Processed 100% remotely for DG Khan residents—no local walk-in branch visit required. Submit document photos over WhatsApp for fast-tracked courier delivery of certified stamped copies directly to your doorstep in Dera Ghazi Khan."
    },
    "dera-ghazi-khan/matric-certificate-translation": {
        city: "Dera Ghazi Khan",
        service: "Matric Certificate Translation",
        intro: "Students and applicants from Dera Ghazi Khan submitting secondary school records to foreign educational portals or Saudi university scholarship applications need certified Arabic or English translation of their BISE DG Khan Matric certificate.",
        whatWeTranslate: "Matriculation (SSC) Pass Certificates, Detailed Marks Certificates (DMC), and Secondary School Testimonials.",
        issuingAuthority: "Issued by Board of Intermediate and Secondary Education (BISE) Dera Ghazi Khan.",
        primaryUseCases: [
            "Saudi Arabian University Scholarship Dossiers",
            "Foreign School & College Admissions",
            "IBCC & MOFA Attestation Support"
        ],
        courierDeliveryInfo: "Remote translation service for DG Khan students. Share clear scans via WhatsApp to receive officially stamped certified hard copies couriered to your home address in Dera Ghazi Khan."
    },
    "dera-ghazi-khan/degree-transcript-translation": {
        city: "Dera Ghazi Khan",
        service: "Degree & Transcript Translation",
        intro: "Graduates in Dera Ghazi Khan applying for Saudi university admissions or foreign employment require certified Arabic or English translation of their university degrees and transcripts. Lisan.pk provides precise academic translations formatted for HEC and MOFA legalization.",
        whatWeTranslate: "Bachelor's, Master's Degrees, Transcripts, Detailed Marksheets, and Higher Education Diplomas.",
        issuingAuthority: "Issued by Ghazi University DG Khan, BISE DG Khan, or regional Higher Education Commission (HEC) authorities.",
        primaryUseCases: [
            "Saudi Scholarship Portals (KSU, KAU, Madinah University)",
            "HEC & MOFA Document Verification",
            "International Employment Licensing"
        ],
        courierDeliveryInfo: "Entire service handled remotely with no local branch in DG Khan. Upload document images on WhatsApp for certified stamped hard copies delivered directly to your doorstep in Dera Ghazi Khan via tracked courier."
    },
    "sukkur/domicile-certificate-translation": {
        city: "Sukkur",
        service: "Domicile Certificate Translation",
        intro: "Residents of Sukkur requiring certified Arabic or English translation of their Sindh domicile certificate for foreign university scholarships or visa portals can rely on Lisan.pk. We provide official legal translations bearing registered seals accepted by foreign consulates.",
        whatWeTranslate: "Sindh Domicile Certificates issued in Sukkur District, PRC (Permanent Residence Certificates), and local residency declarations.",
        issuingAuthority: "{{VERIFY: which district office issues domicile certificates in Sukkur}} (Issued by Deputy Commissioner DC Office Sukkur)",
        primaryUseCases: [
            "Saudi Arabia Scholarship Uploads",
            "Foreign Consulate & Embassy Verification",
            "Overseas Residence Applications"
        ],
        courierDeliveryInfo: "Lisan.pk operates 100% remotely with no physical walk-in office in Sukkur. Submit clear document photos via WhatsApp to receive certified stamped hard copies couriered directly to your doorstep in Sukkur via tracked courier."
    },
    "sukkur/degree-transcript-translation": {
        city: "Sukkur",
        service: "Degree & Transcript Translation",
        intro: "Graduates from Sukkur IBA University, SALU, or local colleges applying for Saudi scholarships or foreign jobs require certified Arabic or English translation of their degrees and transcripts. Lisan.pk delivers precise academic translations accepted by foreign portals.",
        whatWeTranslate: "Bachelor's and Master's Degrees, Academic Transcripts, Marksheets, and Technical Diplomas.",
        issuingAuthority: "Issued by Sukkur IBA University, Shah Abdul Latif University (SALU), or BISE Sukkur.",
        primaryUseCases: [
            "Saudi Arabia University Scholarship Portals",
            "HEC & MOFA Attestation Workflows",
            "Foreign Employment Assessment"
        ],
        courierDeliveryInfo: "Remote academic translation service for Sukkur graduates. Share scans over WhatsApp to get stamped certified hard copies couriered directly to your address in Sukkur."
    },
    "sukkur/iata-dts-umrah-travel-agency": {
        city: "Sukkur",
        service: "IATA & DTS Umrah Agency Translation",
        intro: "Umrah operators and travel agencies in Sukkur submitting corporate licenses, DTS certificates, or IATA accreditations to Saudi tourism authorities require certified Arabic commercial translation. Lisan.pk provides official business translations aligned with Saudi Ministry of Tourism rules.",
        whatWeTranslate: "IATA Accreditation Certificates, Department of Tourist Services (DTS) Licenses, Travel Agency Registration Papers, and Securities.",
        issuingAuthority: "{{VERIFY: which board/office issues DTS tourism licenses in Sukkur/Sindh}} (Issued by Department of Tourist Services Sindh / Sukkur Chamber of Commerce)",
        primaryUseCases: [
            "Saudi Ministry of Hajj & Umrah Portal Registration",
            "Saudi Tourism Authority Authorization",
            "Commercial Agency Agreements in Saudi Arabia"
        ],
        courierDeliveryInfo: "Remote business processing for Sukkur travel agencies. Submit document PDFs on WhatsApp for fast-tracked courier delivery of certified commercial translations to your office in Sukkur."
    },
    "larkana/domicile-certificate-translation": {
        city: "Larkana",
        service: "Domicile Certificate Translation",
        intro: "Applicants from Larkana needing certified Arabic or English translation of their Sindh domicile certificate for Saudi university scholarship portals or foreign visa applications can depend on Lisan.pk. We deliver legal translations formatted to embassy requirements.",
        whatWeTranslate: "Sindh Domicile Certificates issued in Larkana District, PRC (Permanent Residence Certificates), and local residency affidavits.",
        issuingAuthority: "{{VERIFY: which district office issues domicile certificates in Larkana}} (Issued by Deputy Commissioner DC Office Larkana)",
        primaryUseCases: [
            "Saudi Arabia Scholarship Dossier Submissions",
            "Foreign Embassy Verification",
            "Overseas Residence Documentation"
        ],
        courierDeliveryInfo: "Lisan.pk provides remote online translation with no physical office in Larkana. Upload document photos on WhatsApp for certified stamped hard copies couriered directly to your doorstep in Larkana via tracked courier."
    },
    "larkana/diploma-certificate-translation": {
        city: "Larkana",
        service: "Diploma Certificate Translation",
        intro: "Diploma holders and technical graduates in Larkana applying for Gulf technical employment or foreign higher education require certified Arabic or English translation of their diploma certificates. Lisan.pk delivers precise technical translations accepted by foreign boards.",
        whatWeTranslate: "Three-Year DAE Diplomas, Technical Board Certificates, Vocational Diplomas, and Polytechnic Marksheets.",
        issuingAuthority: "Issued by Sindh Board of Technical Education (SBTE) / BISE Larkana / local polytechnic institutes.",
        primaryUseCases: [
            "Saudi Arabia & Gulf Technical Work Permit Legalization",
            "Foreign Employment Verification",
            "Technical Credential Assessment"
        ],
        courierDeliveryInfo: "Complete remote processing for Larkana diploma holders. Send clear scans via WhatsApp to receive certified stamped hard copies couriered directly to your address in Larkana."
    },
    "larkana/saudi-scholarship-translation": {
        city: "Larkana",
        service: "Saudi Scholarship Document Translation",
        intro: "Students from Larkana applying for fully funded Saudi Arabian university scholarships (KSU, KAU, Islamic University of Madinah) require certified Arabic translation of their complete academic and identity set. Lisan.pk prepares official scholarship translation packages formatted to Saudi portal rules.",
        whatWeTranslate: "Full academic set including Matric, Intermediate, Degree Certificates, Birth Certificate, Domicile, and Character Certificates.",
        issuingAuthority: "Issued by BISE Larkana, Chandka Medical College / SMBBMU Larkana, or local district administration.",
        primaryUseCases: [
            "Saudi Ministry of Education Scholarship Portals (KSU/KAU/Madinah)",
            "Saudi Cultural Office Verification",
            "Gulf Academic Credential Assessment"
        ],
        courierDeliveryInfo: "Remote scholarship translation service for Larkana applicants. Share clear document scans online via WhatsApp to receive your complete certified translation bundle couriered to your residence in Larkana."
    },

    // REMAINING ALLOWLISTED SUB-PAGES
    "jhelum/urdu-to-english-translation": {
        city: "Jhelum",
        service: "Urdu to English Translation",
        intro: "Residents of Jhelum submitting legal, personal, or educational records to UK, European, or North American embassies rely on Lisan.pk for official Urdu to English certified translation. Every translation includes an authorized Certificate of Accuracy recognized by international consulates.",
        whatWeTranslate: "Police Character Certificates, Land Records (Fard), Court Affidavits, Birth Certificates, and Academic Transcripts.",
        issuingAuthority: "Issued by Jhelum District Courts, Punjab Police Khidmat Markaz Jhelum, BISE Rawalpindi, or NADRA.",
        primaryUseCases: [
            "UKVI, US CIS & European Visa Petitions",
            "WES Credential Assessment",
            "Foreign Legal Proceedings"
        ],
        courierDeliveryInfo: "100% remote service with no local branch in Jhelum. Submit document scans via WhatsApp for certified stamped hard copies delivered directly to your doorstep in Jhelum."
    },
    "multan/urdu-to-english-translation": {
        city: "Multan",
        service: "Urdu to English Translation",
        intro: "Applicants in Multan preparing civil or academic documentation for foreign consulates trust Lisan.pk for official Urdu to English certified translation. We ensure every legal term, seal, and signature is translated with precision for international immigration portals.",
        whatWeTranslate: "Police Clearance Certificates, Civil Court Papers, Land Records (Fard), NADRA Certificates, and BZU Academic Degrees.",
        issuingAuthority: "Issued by Multan District Courts, Punjab Police Khidmat Markaz Multan, BISE Multan, Bahauddin Zakariya University (BZU Multan), or NADRA.",
        primaryUseCases: [
            "UKVI & US Immigration Petitions",
            "Canadian IRCC & Australian Visa Processing",
            "WES & Educational Credential Assessment"
        ],
        courierDeliveryInfo: "Remote translation service—no physical office visit in Multan. Upload document photos on WhatsApp for certified stamped hard copies delivered directly to your Multan address via tracked courier."
    },
    "jhelum/nikah-nama-translation": {
        city: "Jhelum",
        service: "Nikah Nama Translation",
        intro: "Overseas Pakistanis and local couples in Jhelum applying for UK spouse visas, Saudi family permits, or European residency require certified Arabic or English translation of their Nikahnama. Lisan.pk provides official mirror-image translations that preserve all dower clauses and registrar stamps.",
        whatWeTranslate: "Traditional Urdu Nikahnama, NADRA Computerized MRC, Marriage Registration Affidavits, and Status Declarations.",
        issuingAuthority: "Issued by Municipal Committee Jhelum / District Council Jhelum Union Councils, Cantonment Board Jhelum, or NADRA.",
        primaryUseCases: [
            "UK Spouse Visa (UKVI)",
            "Saudi Arabia & UAE Family Residence Visas",
            "European Union Spousal Reunification"
        ],
        courierDeliveryInfo: "Lisan.pk provides 100% remote translation with no physical walk-in office in Jhelum. Share clear document scans via WhatsApp to receive certified stamped hard copies couriered directly to your doorstep in Jhelum."
    },
    "rahim-yar-khan/urdu-to-english-translation": {
        city: "Rahim Yar Khan",
        service: "Urdu to English Translation",
        intro: "Residents and students in Rahim Yar Khan preparing legal, civil, or academic files for foreign embassies rely on Lisan.pk for certified Urdu to English translation backed by a signed Certificate of Accuracy.",
        whatWeTranslate: "Police Clearance Certificates, Land Fard, Court Papers, BISE Bahawalpur Certificates, KFUEIT Degrees, and Civil Records.",
        issuingAuthority: "Issued by RYK District Courts, Punjab Police Khidmat Markaz RYK, Khwaja Fareed University (KFUEIT), BISE Bahawalpur, or NADRA.",
        primaryUseCases: [
            "UKVI, US & European Visa Petitions",
            "WES & Foreign University Credential Evaluation",
            "Legal & Commercial Verification"
        ],
        courierDeliveryInfo: "Process your documents remotely without visiting any branch in Rahim Yar Khan. Submit scans on WhatsApp for certified stamped hard copies couriered directly to your address in RYK via tracked courier."
    },
    "bahawalpur/urdu-to-english-translation": {
        city: "Bahawalpur",
        service: "Urdu to English Translation",
        intro: "Bahawalpur applicants submitting personal or legal records to foreign consulates trust Lisan.pk for certified Urdu to English translation. We ensure full legal formatting compliance for international visa and scholarship portals.",
        whatWeTranslate: "Police Character Certificates, Civil Court Papers, Land Fard, IUB Academic Degrees, and NADRA Civil Certificates.",
        issuingAuthority: "Issued by Bahawalpur District Courts, Punjab Police Khidmat Markaz Bahawalpur, Islamia University of Bahawalpur (IUB), BISE Bahawalpur, or NADRA.",
        primaryUseCases: [
            "UKVI, US CIS & Canadian Visa Applications",
            "Foreign University Enrollment",
            "International Legal & Civil Proceedings"
        ],
        courierDeliveryInfo: "100% remote service with no walk-in desk in Bahawalpur. Share clear scans over WhatsApp to receive certified stamped hard copies delivered directly to your doorstep in Bahawalpur via tracked courier."
    },
    "mardan/urdu-to-english-translation": {
        city: "Mardan",
        service: "Urdu to English Translation",
        intro: "Applicants in Mardan preparing civil, academic, or legal documentation for foreign embassies need certified Urdu to English translation. Lisan.pk provides recognized translations complete with registered legal seals and Certificates of Accuracy.",
        whatWeTranslate: "KP Police Character Certificates, BISE Mardan Certificates, AWKUM University Degrees, Court Affidavits, and NADRA Civil Records.",
        issuingAuthority: "Issued by Mardan District Courts, KP Police Khidmat Markaz Mardan, BISE Mardan, Abdul Wali Khan University Mardan (AWKUM), or NADRA.",
        primaryUseCases: [
            "UKVI, US, Canadian & Australian Visa Submissions",
            "Foreign Student Visa Packages",
            "WES Credential Assessment"
        ],
        courierDeliveryInfo: "Lisan.pk services Mardan residents 100% remotely. Upload document images on WhatsApp to receive certified hard copies with official seals couriered to any address in Mardan."
    },
    "sahiwal/nikah-nama-translation": {
        city: "Sahiwal",
        service: "Nikah Nama Translation",
        intro: "Couples in Sahiwal applying for Saudi family visas, Gulf residence permits, or Western spousal visas require certified Arabic or English translation of their Nikahnama. Lisan.pk provides embassy-accepted mirror-image translations preserving all legal entries and registrar seals.",
        whatWeTranslate: "Traditional Urdu Nikahnama, NADRA Computerized MRC, Marriage Affidavits, and Marital Declarations.",
        issuingAuthority: "Issued by Municipal Corporation Sahiwal / District Council Sahiwal Union Councils or NADRA Centers.",
        primaryUseCases: [
            "Saudi Arabia & UAE Family Residence Visas",
            "UKVI Spouse Visa Applications",
            "Foreign Embassy Legalization"
        ],
        courierDeliveryInfo: "Lisan.pk handles all translations remotely with no physical branch in Sahiwal. Upload document photos on WhatsApp; certified hard copies complete with legal stamps are couriered directly to your doorstep in Sahiwal via tracked courier."
    },
    "rawalpindi/intermediate-certificate-translation": {
        city: "Rawalpindi",
        service: "Intermediate Certificate Translation",
        intro: "Students in Rawalpindi applying for Saudi university scholarships or foreign university enrollment require certified Arabic or English translation of their HSSC / Intermediate certificate. Lisan.pk delivers precise academic translations accepted by foreign portals.",
        whatWeTranslate: "Intermediate (HSSC) Pass Certificates, Detailed Marks Certificates (DMC), and Higher Secondary Testimonials.",
        issuingAuthority: "Issued by Board of Intermediate and Secondary Education (BISE) Rawalpindi or FBISE Islamabad.",
        primaryUseCases: [
            "Saudi Arabia University Scholarship Portals (KSU/KAU/Madinah)",
            "IBCC & MOFA Attestation Support",
            "Foreign Undergraduate Admissions"
        ],
        courierDeliveryInfo: "Remote academic translation service for Rawalpindi students. Share document scans via WhatsApp for certified stamped hard copies couriered directly to your doorstep in Rawalpindi."
    },
    "gujranwala/urdu-to-english-translation": {
        city: "Gujranwala",
        service: "Urdu to English Translation",
        intro: "Gujranwala professionals, business owners, and students submitting legal, civil, or educational files to foreign embassies rely on Lisan.pk for certified Urdu to English translation backed by an authorized Certificate of Accuracy.",
        whatWeTranslate: "Police Clearance Certificates, Civil Court Papers, Land Fard, BISE Gujranwala Certificates, GIFT University Degrees, and Commercial Agreements.",
        issuingAuthority: "Issued by Gujranwala District Courts, Punjab Police Khidmat Markaz Gujranwala, BISE Gujranwala, GIFT University, or NADRA.",
        primaryUseCases: [
            "UKVI, US CIS & Canadian Visa Submissions",
            "Foreign University Enrollment & WES Assessment",
            "Commercial Legal Verification"
        ],
        courierDeliveryInfo: "100% remote service with no local office visit in Gujranwala. Submit document scans online via WhatsApp for certified stamped hard copies couriered directly to your address in Gujranwala."
    },
    "quetta/urdu-to-english-translation": {
        city: "Quetta",
        service: "Urdu to English Translation",
        intro: "Applicants in Quetta preparing personal, civil, or academic documentation for foreign consulates trust Lisan.pk for official Urdu to English certified translation. We ensure full legal formatting compliance for international visa portals.",
        whatWeTranslate: "Balochistan Police Clearance Certificates, BISE Quetta Certificates, University of Balochistan Degrees, Court Affidavits, and NADRA Civil Records.",
        issuingAuthority: "Issued by Quetta District Courts, Balochistan Police Khidmat Markaz, BISE Quetta, University of Balochistan (UOB), or NADRA.",
        primaryUseCases: [
            "UKVI, US, Canadian & Australian Visa Petitions",
            "Foreign Student Visa Packages",
            "WES & Educational Credential Assessment"
        ],
        courierDeliveryInfo: "Lisan.pk services Quetta residents 100% remotely. Upload your document images on WhatsApp to get started; certified hard copies with official seals are dispatched to any address in Quetta via tracked courier."
    },
    "dera-ghazi-khan/urdu-to-english-translation": {
        city: "Dera Ghazi Khan",
        service: "Urdu to English Translation",
        intro: "DG Khan residents preparing legal, civil, or educational records for foreign consulates rely on Lisan.pk for official Urdu to English certified translation backed by a signed Certificate of Accuracy.",
        whatWeTranslate: "Police Character Certificates, Land Records (Fard), Court Affidavits, BISE DG Khan Certificates, Ghazi University Degrees, and Civil Records.",
        issuingAuthority: "Issued by DG Khan District Courts, Punjab Police Khidmat Markaz DG Khan, BISE DG Khan, Ghazi University, or NADRA.",
        primaryUseCases: [
            "UKVI, US CIS & European Visa Processing",
            "Foreign Educational Enrollment",
            "Legal Proceedings in Foreign Consulates"
        ],
        courierDeliveryInfo: "Process your documents remotely without visiting any branch in Dera Ghazi Khan. Submit clear scans via WhatsApp to receive certified stamped hard copies couriered directly to your doorstep in DG Khan."
    },
    "mirpur/urdu-to-english-translation": {
        city: "Mirpur",
        service: "Urdu to English Translation",
        intro: "Overseas Pakistanis and local residents in Mirpur (AJK) submitting legal, personal, or educational files to the UK, European, or North American embassies trust Lisan.pk for official Urdu to English certified translation.",
        whatWeTranslate: "AJK Police Character Certificates, Land Records (Fard), Court Papers, BISE Mirpur Certificates, MUST University Degrees, and Civil Records.",
        issuingAuthority: "Issued by Mirpur AJK District Courts, AJK Police, BISE Mirpur AJK, MUST University Mirpur, or NADRA.",
        primaryUseCases: [
            "UK Spouse & Work Visas (UKVI)",
            "US CIS & European Visa Petitions",
            "WES & Educational Credential Assessment"
        ],
        courierDeliveryInfo: "100% remote service with no local walk-in office in Mirpur AJK. Share clear document scans via WhatsApp to receive certified stamped hard copies couriered directly to your doorstep in Mirpur AJK via tracked courier."
    },
    "mirpur/nikah-nama-translation": {
        city: "Mirpur",
        service: "Nikah Nama Translation",
        intro: "Couples in Mirpur (AJK) preparing marriage documents for UK spouse visas, Gulf family permits, or European residency require certified Arabic or English translation of their Nikahnama. Lisan.pk provides embassy-recognized translations preserving all legal terms and seals.",
        whatWeTranslate: "Traditional Urdu Nikahnama, NADRA Computerized MRC, Marriage Registration Statements, and Legal Dower Declarations.",
        issuingAuthority: "Issued by Municipal Corporation Mirpur AJK / Union Councils AJK or NADRA Registration Centers.",
        primaryUseCases: [
            "UK Spouse Visas (UKVI)",
            "Saudi Arabia & Gulf Family Visas",
            "European Spousal Reunification"
        ],
        courierDeliveryInfo: "Lisan.pk operates remotely with no physical walk-in office in Mirpur AJK. Submit clear photos over WhatsApp for certified stamped hard copies couriered directly to your doorstep in Mirpur AJK."
    },
    "quetta/nikah-nama-translation": {
        city: "Quetta",
        service: "Nikah Nama Translation",
        intro: "Married couples in Quetta applying for Saudi family visas, Gulf residency, or international spousal immigration require certified Arabic or English translation of their Nikahnama. Lisan.pk provides official mirror-image translations that transcribe every legal entry and registrar seal accurately.",
        whatWeTranslate: "Traditional Urdu Nikahnama, NADRA Computerized Marriage Registration Certificates (MRC), and Marital Status Affidavits.",
        issuingAuthority: "Issued by Metropolitan Corporation Quetta Union Committees, Cantonment Board Quetta, or NADRA Balochistan Centers.",
        primaryUseCases: [
            "Saudi Arabia Work & Family Residence Visas",
            "UAE & Gulf Spouse Visas",
            "Western Spousal Immigration Petitions"
        ],
        courierDeliveryInfo: "Remote online translation service with no physical office in Quetta. Share clear scans on WhatsApp to receive official certified stamped documents couriered straight to your doorstep in Quetta via tracked courier."
    },
    "rawalpindi/iata-dts-umrah-travel-agency": {
        city: "Rawalpindi",
        service: "IATA & DTS Umrah Agency Translation",
        intro: "Travel agencies and Umrah tour operators in Rawalpindi submitting corporate licenses, DTS certificates, or IATA accreditations to Saudi tourism authorities require certified Arabic commercial translation. Lisan.pk provides specialized business translation ensuring compliance with Saudi Ministry of Tourism rules.",
        whatWeTranslate: "IATA Certificates, Department of Tourist Services (DTS) Licenses, Travel Agency Accreditation Papers, Commercial Contracts, and Securities.",
        issuingAuthority: "{{VERIFY: which board/office issues DTS tourism licenses in Rawalpindi}} (Issued by Department of Tourist Services Punjab / Rawalpindi Chamber of Commerce)",
        primaryUseCases: [
            "Saudi Ministry of Hajj & Umrah Partner Registration",
            "Saudi Tourism Authority Authorization",
            "B2B Commercial Contracts in Saudi Arabia"
        ],
        courierDeliveryInfo: "Remote corporate processing for Rawalpindi travel operators. Submit digital PDFs or scans via WhatsApp for fast-tracked courier delivery of certified commercial translations to your agency in Rawalpindi."
    },
    "lahore/diploma-certificate-translation": {
        city: "Lahore",
        service: "Diploma Certificate Translation",
        intro: "Diploma holders and technical graduates in Lahore applying for Gulf technical employment or foreign higher education require certified Arabic or English translation of their DAE or technical diploma certificates. Lisan.pk delivers precise technical translations accepted by foreign boards.",
        whatWeTranslate: "Three-Year DAE Diplomas, PBTE Certificates, TEVTA Diplomas, and Technical Marksheets.",
        issuingAuthority: "Issued by Punjab Board of Technical Education (PBTE Lahore) / TEVTA Punjab.",
        primaryUseCases: [
            "Saudi Arabia & Gulf Technical Work Permit Legalization",
            "Foreign Employment Verification",
            "Technical Credential Assessment"
        ],
        courierDeliveryInfo: "Complete remote processing for Lahore diploma holders. Send clear scans via WhatsApp to receive certified stamped hard copies couriered directly to your address in Lahore."
    },
    "quetta/iata-dts-umrah-travel-agency": {
        city: "Quetta",
        service: "IATA & DTS Umrah Agency Translation",
        intro: "Travel agencies and Umrah operators in Quetta submitting corporate licenses, DTS certificates, or IATA accreditations to Saudi tourism authorities require certified Arabic commercial translation. Lisan.pk provides official business translations aligned with Saudi Ministry of Tourism rules.",
        whatWeTranslate: "IATA Accreditation Certificates, Department of Tourist Services (DTS) Licenses, Travel Agency Registration Papers, and Securities.",
        issuingAuthority: "{{VERIFY: which board/office issues DTS tourism licenses in Quetta/Balochistan}} (Issued by Department of Tourist Services Balochistan / Quetta Chamber of Commerce)",
        primaryUseCases: [
            "Saudi Ministry of Hajj & Umrah Portal Registration",
            "Saudi Tourism Authority Authorization",
            "Commercial Agency Agreements in Saudi Arabia"
        ],
        courierDeliveryInfo: "Remote business processing for Quetta travel agencies. Submit document PDFs on WhatsApp for fast-tracked courier delivery of certified commercial translations to your office in Quetta."
    },
    "hyderabad/intermediate-certificate-translation": {
        city: "Hyderabad",
        service: "Intermediate Certificate Translation",
        intro: "Students in Hyderabad preparing secondary or higher secondary school certificates for Saudi university scholarship portals or foreign university applications require certified Arabic or English translation of their BISE Hyderabad Intermediate certificate.",
        whatWeTranslate: "Intermediate (HSSC) Pass Certificates, Detailed Marks Certificates (DMC), and Higher Secondary Testimonials.",
        issuingAuthority: "Issued by Board of Intermediate and Secondary Education (BISE) Hyderabad.",
        primaryUseCases: [
            "Saudi Arabia University Scholarship Portals (KSU/KAU/Madinah)",
            "IBCC & MOFA Attestation Support",
            "Foreign Undergraduate Admissions"
        ],
        courierDeliveryInfo: "Remote academic translation service for Hyderabad students. Share document scans via WhatsApp for certified stamped hard copies couriered directly to your doorstep in Hyderabad."
    },
    "mirpur/intermediate-certificate-translation": {
        city: "Mirpur",
        service: "Intermediate Certificate Translation",
        intro: "Students in Mirpur (AJK) applying for foreign university admissions or Saudi scholarships require certified Arabic or English translation of their Intermediate certificate. Lisan.pk provides precise academic translations formatted for international submission.",
        whatWeTranslate: "Intermediate (HSSC) Pass Certificates, Detailed Marks Certificates (DMC), and Higher Secondary Testimonials.",
        issuingAuthority: "Issued by Board of Intermediate and Secondary Education (BISE) Mirpur AJK.",
        primaryUseCases: [
            "Saudi Arabia University Scholarship Dossiers",
            "Foreign University Undergraduate Admissions",
            "IBCC & MOFA Legalization"
        ],
        courierDeliveryInfo: "100% remote academic translation service for Mirpur AJK students. Upload document scans via WhatsApp to receive certified stamped hard copies couriered to your doorstep in Mirpur AJK."
    },
    "sargodha/nikah-nama-translation": {
        city: "Sargodha",
        service: "Nikah Nama Translation",
        intro: "Couples in Sargodha applying for Saudi family visas, Gulf residence permits, or Western spousal immigration require certified Arabic or English translation of their Nikahnama. Lisan.pk provides embassy-accepted mirror-image translations preserving all legal entries and registrar seals.",
        whatWeTranslate: "Traditional Urdu Nikahnama, NADRA Computerized MRC, Marriage Registration Statements, and Legal Dower Declarations.",
        issuingAuthority: "Issued by Municipal Corporation Sargodha / District Council Sargodha Union Councils or NADRA Centers.",
        primaryUseCases: [
            "Saudi Arabia & UAE Family Residence Visas",
            "UKVI Spouse Visa Petitions",
            "Foreign Embassy Legalization"
        ],
        courierDeliveryInfo: "Lisan.pk handles all translations remotely with no physical branch in Sargodha. Upload document photos on WhatsApp; certified hard copies complete with legal stamps are couriered directly to your doorstep in Sargodha via tracked courier."
    },
    "gujranwala/police-character-certificate-translation": {
        city: "Gujranwala",
        service: "Police Character Certificate Translation",
        intro: "Gujranwala residents applying for overseas employment, Gulf work permits, or student visas require certified Arabic or English translation of their Police Character Certificate. Lisan.pk delivers embassy-approved legal translations with complete seal accuracy.",
        whatWeTranslate: "Punjab Police Character Certificates, Police Clearance Statements, and District Court Background Records.",
        issuingAuthority: "Issued by Punjab Police Khidmat Markaz Gujranwala / DPO Office Gujranwala.",
        primaryUseCases: [
            "Saudi Arabia & Gulf Work Visa Legalization",
            "UKVI, US CIS & European Visa Petitions",
            "Foreign Employment Screening"
        ],
        courierDeliveryInfo: "Processed 100% remotely for Gujranwala residents—no local walk-in branch visit required. Submit document photos over WhatsApp for fast-tracked courier delivery of certified stamped copies directly to your doorstep in Gujranwala."
    },
    "quetta/domicile-certificate-translation": {
        city: "Quetta",
        service: "Domicile Certificate Translation",
        intro: "Applicants from Quetta submitting provincial residency documents for Saudi university scholarship portals or foreign visa applications require certified Arabic or English translation of their Balochistan domicile certificate. Lisan.pk delivers certified legal translations bearing authorized seals.",
        whatWeTranslate: "Balochistan Domicile Certificates issued in Quetta District, PRC (Permanent Residence Certificates), and local residency declarations.",
        issuingAuthority: "{{VERIFY: which district office issues domicile certificates in Quetta}} (Issued by Deputy Commissioner DC Office Quetta)",
        primaryUseCases: [
            "Saudi Ministry of Education & University Scholarship Portals",
            "Foreign Consulate Verification",
            "Overseas Residence Documentation"
        ],
        courierDeliveryInfo: "Lisan.pk services Quetta entirely remotely with zero physical walk-in office in the city. Submit your document scan via WhatsApp to receive certified stamped hard copies couriered directly to your doorstep in Quetta via tracked courier."
    },
    "mirpur/police-character-certificate-translation": {
        city: "Mirpur",
        service: "Police Character Certificate Translation",
        intro: "Overseas Pakistanis and local residents in Mirpur (AJK) applying for foreign work visas, UK immigration, or student visas require certified Arabic or English translation of their Police Character Certificate. Lisan.pk provides official legal translations accepted by foreign consulates.",
        whatWeTranslate: "AJK Police Character Certificates, Police Clearance Letters, and District Court Clearance Statements.",
        issuingAuthority: "Issued by AJK Police Clearance Markaz / DPO Office Mirpur AJK.",
        primaryUseCases: [
            "UKVI & European Union Visa Processing",
            "Saudi Arabia & Gulf Work Visa Legalization",
            "Foreign Employment Screening"
        ],
        courierDeliveryInfo: "100% remote service with no walk-in office in Mirpur AJK. Upload document photos on WhatsApp for certified stamped hard copies delivered directly to your doorstep in Mirpur AJK via tracked courier."
    },
    "swat/urdu-to-english-translation": {
        city: "Swat",
        service: "Urdu to English Translation",
        intro: "Applicants in Swat (Mingora/Saidu Sharif) preparing personal, legal, or educational files for foreign embassies trust Lisan.pk for official Urdu to English certified translation. Every translation includes an authorized Certificate of Accuracy recognized by international consulates.",
        whatWeTranslate: "KP Police Character Certificates, BISE Swat Certificates, University of Swat Degrees, Court Affidavits, and NADRA Civil Records.",
        issuingAuthority: "Issued by Swat District Courts, KP Police Khidmat Markaz Swat, BISE Swat, University of Swat, or NADRA.",
        primaryUseCases: [
            "UKVI, US, Canadian & Australian Visa Applications",
            "Foreign Student Visa Packages",
            "WES & Educational Credential Assessment"
        ],
        courierDeliveryInfo: "Lisan.pk services Swat residents 100% remotely. Upload document images on WhatsApp to receive certified hard copies with official seals couriered to any address in Swat."
    },
    "hyderabad/matric-certificate-translation": {
        city: "Hyderabad",
        service: "Matric Certificate Translation",
        intro: "Students in Hyderabad submitting secondary school certificates for Saudi university scholarship portals or foreign school admissions require certified Arabic or English translation of their BISE Hyderabad Matric certificate.",
        whatWeTranslate: "Matriculation (SSC) Pass Certificates, Detailed Marks Certificates (DMC), and Secondary School Testimonials.",
        issuingAuthority: "Issued by Board of Secondary Education (BISE) Hyderabad.",
        primaryUseCases: [
            "Saudi Arabia University Scholarship Portals (KSU/KAU/Madinah)",
            "IBCC & MOFA Attestation Support",
            "Foreign High School & Diploma Admissions"
        ],
        courierDeliveryInfo: "Remote academic translation service for Hyderabad students. Share document scans via WhatsApp for certified stamped hard copies couriered directly to your doorstep in Hyderabad."
    },
    "swat/intermediate-certificate-translation": {
        city: "Swat",
        service: "Intermediate Certificate Translation",
        intro: "Students in Swat applying for foreign university admissions or Saudi scholarship portals require certified Arabic or English translation of their Intermediate certificate. Lisan.pk provides precise academic translations formatted for international submission.",
        whatWeTranslate: "Intermediate (HSSC) Pass Certificates, Detailed Marks Certificates (DMC), and Higher Secondary Testimonials.",
        issuingAuthority: "Issued by Board of Intermediate and Secondary Education (BISE) Swat.",
        primaryUseCases: [
            "Saudi Arabia University Scholarship Dossiers",
            "Foreign University Undergraduate Admissions",
            "IBCC & MOFA Legalization"
        ],
        courierDeliveryInfo: "100% remote academic translation service for Swat students. Upload document scans via WhatsApp to receive certified stamped hard copies couriered to your doorstep in Swat."
    },
    "mardan/degree-transcript-translation": {
        city: "Mardan",
        service: "Degree & Transcript Translation",
        intro: "Graduates from Abdul Wali Khan University Mardan (AWKUM) or local colleges applying for Saudi university admissions or foreign employment require certified Arabic or English translation of their degrees and transcripts. Lisan.pk delivers precise academic translations accepted by foreign portals.",
        whatWeTranslate: "Bachelor's and Master's Degrees, Academic Transcripts, Marksheets, and Higher Diplomas.",
        issuingAuthority: "Issued by Abdul Wali Khan University Mardan (AWKUM) or BISE Mardan.",
        primaryUseCases: [
            "Saudi Arabia University Scholarship Portals",
            "HEC & MOFA Attestation Workflows",
            "Foreign Employment Assessment"
        ],
        courierDeliveryInfo: "Remote academic translation service for Mardan graduates. Share scans over WhatsApp to get stamped certified hard copies couriered directly to your address in Mardan."
    },
    "hyderabad/degree-transcript-translation": {
        city: "Hyderabad",
        service: "Degree & Transcript Translation",
        intro: "Graduates from University of Sindh, MUET, or Hyderabad colleges applying for Saudi scholarships or foreign jobs require certified Arabic or English translation of their degrees and transcripts. Lisan.pk delivers precise academic translations accepted by foreign portals.",
        whatWeTranslate: "Bachelor's, Master's, and PhD Degrees, Academic Transcripts, Marksheets, and Professional Diplomas.",
        issuingAuthority: "Issued by University of Sindh (Jamshoro/Hyderabad), Mehran University (MUET), or BISE Hyderabad.",
        primaryUseCases: [
            "Saudi Arabia University Scholarship Portals",
            "HEC & MOFA Attestation Workflows",
            "Foreign Employment Credential Verification"
        ],
        courierDeliveryInfo: "Remote academic translation service for Hyderabad graduates. Share scans over WhatsApp to receive stamped certified hard copies couriered directly to your address in Hyderabad."
    },
    "swat/iata-dts-umrah-travel-agency": {
        city: "Swat",
        service: "IATA & DTS Umrah Agency Translation",
        intro: "Travel agencies and Umrah operators in Swat submitting corporate licenses, DTS certificates, or IATA accreditations to Saudi tourism authorities require certified Arabic commercial translation. Lisan.pk provides official business translations aligned with Saudi Ministry of Tourism rules.",
        whatWeTranslate: "IATA Accreditation Certificates, Department of Tourist Services (DTS) Licenses, Travel Agency Registration Papers, and Securities.",
        issuingAuthority: "{{VERIFY: which board/office issues DTS tourism licenses in Swat/KP}} (Issued by Department of Tourist Services KP / Swat Chamber of Commerce)",
        primaryUseCases: [
            "Saudi Ministry of Hajj & Umrah Portal Registration",
            "Saudi Tourism Authority Authorization",
            "Commercial Agency Agreements in Saudi Arabia"
        ],
        courierDeliveryInfo: "Remote business processing for Swat travel agencies. Submit document PDFs on WhatsApp for fast-tracked courier delivery of certified commercial translations to your office in Swat."
    },
    "dera-ghazi-khan/saudi-scholarship-translation": {
        city: "Dera Ghazi Khan",
        service: "Saudi Scholarship Document Translation",
        intro: "Students from Dera Ghazi Khan applying for fully funded Saudi Arabian university scholarships (KSU, KAU, Islamic University of Madinah) require certified Arabic translation of their complete academic and identity set. Lisan.pk prepares official scholarship translation packages formatted to Saudi portal rules.",
        whatWeTranslate: "Full academic set including Matric, Intermediate, Degree Certificates, Birth Certificate, Domicile, and Character Certificates.",
        issuingAuthority: "Issued by BISE DG Khan, Ghazi University DG Khan, or local district administration.",
        primaryUseCases: [
            "Saudi Ministry of Education Scholarship Portals (KSU/KAU/Madinah)",
            "Saudi Cultural Office Verification",
            "Gulf Academic Credential Assessment"
        ],
        courierDeliveryInfo: "Remote scholarship translation service for DG Khan applicants. Share clear document scans online via WhatsApp to receive your complete certified translation bundle couriered to your residence in Dera Ghazi Khan."
    },
    "gujranwala/saudi-scholarship-translation": {
        city: "Gujranwala",
        service: "Saudi Scholarship Document Translation",
        intro: "Students from Gujranwala applying for fully funded Saudi Arabian university scholarships require certified Arabic translation of their complete academic and identity dossier. Lisan.pk prepares official scholarship translation packages formatted to Saudi Ministry of Education rules.",
        whatWeTranslate: "Full academic set including Matric, Intermediate, Bachelor's Degrees, Transcripts, Birth Certificate, Domicile, and Character Certificates.",
        issuingAuthority: "Issued by BISE Gujranwala, GIFT University, or local district administration.",
        primaryUseCases: [
            "Saudi Ministry of Education Scholarship Portals (KSU/KAU/Madinah)",
            "Saudi Cultural Office Verification",
            "Gulf Academic Credential Assessment"
        ],
        courierDeliveryInfo: "Remote scholarship translation service for Gujranwala applicants. Share clear document scans online via WhatsApp to receive your complete certified translation bundle couriered to your residence in Gujranwala."
    }
};


