export interface CityData {
    name: string;
    description: string;
    lat: number;
    lng: number;
    landmark: string;
    localInfo: string;
    biseName?: string;
    hecCenter?: string;
    mofaOffice?: string;
    tier?: 1 | 2 | 3;
    regionalContext?: string;
}

export interface ServiceData {
    slug: string;
    title: string;
    description: string;
    engagementText: string;
    benefits: string[];
}

export const cities: Record<string, CityData> = {
    "karachi": {
        name: "Karachi",
        description: "Professional Arabic translation for Saudi university admission in Karachi. Specialist support for academic degrees and transcripts.",
        lat: 24.8607,
        lng: 67.0011,
        landmark: "Shahrah-e-Faisal & Saddar",
        localInfo: "Our service helps you translate degree and transcript into Arabic in Karachi for Saudi university admission with MOFA attestation support.",
        biseName: "BISE Karachi",
        hecCenter: "HEC Regional Center, Gulshan-e-Iqbal",
        mofaOffice: "MOFA Karachi (near PIDC)",
        tier: 1,
        regionalContext: "Express courier service available across Clifton, Nazimabad, and PECHS. Specialist support for Karachi University (KU) and IBA graduates."
    },
    "lahore": {
        name: "Lahore",
        description: "Leading Arabic translation center in Lahore for students applying to Saudi Arabia. Certified degree and transcript translation.",
        lat: 31.5204,
        lng: 74.3587,
        landmark: "Muslim Town & Ferozepur Road",
        localInfo: "If you need to translate degree and transcript into Arabic in Lahore for Saudi university admission, we provide expert linguistic support near Jamia Ashrafia.",
        biseName: "BISE Lahore",
        hecCenter: "HEC Regional Center, Gulberg III",
        mofaOffice: "MOFA Lahore (Muslim Town)",
        tier: 1,
        regionalContext: "Serving students from Punjab University, GCU, and UET Lahore with same-day digital scans and doorstep courier in DHA and Gulberg."
    },
    "islamabad": {
        name: "Islamabad",
        description: "Expert Arabic translation for Saudi admission in Islamabad. Located near the Diplomatic Enclave and MOFA headquarters.",
        lat: 33.6844,
        lng: 73.0479,
        landmark: "Blue Area & Diplomatic Enclave",
        localInfo: "Translate degree and transcript into Arabic in Islamabad for Saudi university admission with same-day express service for embassy submissions.",
        biseName: "FBISE Islamabad",
        hecCenter: "HEC Headquarters, H-9",
        mofaOffice: "MOFA Headquarters, Constitution Avenue",
        tier: 1,
        regionalContext: "Priority handling for Diplomatic Enclave submissions. Digital delivery to NUST and QAU students within 4 hours."
    },
    "rawalpindi": {
        name: "Rawalpindi",
        description: "Fast-track Arabic translation in Rawalpindi for Saudi work and student visas. Specialized in academic documentation.",
        lat: 33.5651,
        lng: 73.0169,
        landmark: "Saddar & Rawalpindi Chamber",
        localInfo: "Looking to translate degree and transcript into Arabic in Rawalpindi for Saudi university admission? We serve Bahria, DHA, and Saddar with reliable results.",
        biseName: "BISE Rawalpindi",
        mofaOffice: "MOFA Camp Office, Islamabad",
        tier: 1
    },
    "multan": {
        name: "Multan",
        description: "Certified Arabic translation for Saudi university admission in Multan. Reliable South Punjab document support.",
        lat: 30.1575,
        lng: 71.5249,
        landmark: "Cantonment & Multan Chamber",
        localInfo: "Easily translate degree and transcript into Arabic in Multan for Saudi university admission through our secure document handling process.",
        biseName: "BISE Multan",
        hecCenter: "HEC Regional Center, Multan",
        tier: 2
    },
    "sialkot": {
        name: "Sialkot",
        description: "Business and academic Arabic translation in Sialkot. Specialized for Saudi admission requirements.",
        lat: 32.4945,
        lng: 74.5229,
        landmark: "Sialkot Chamber of Commerce",
        localInfo: "We help Sialkot residents translate degree and transcript into Arabic for Saudi university admission with chamber-recognized certification.",
        biseName: "BISE Sialkot",
        tier: 2
    },
    "sargodha": {
        name: "Sargodha",
        description: "Expert Arabic translation in Sargodha for students and professionals. Certified degree translation.",
        lat: 32.0740,
        lng: 72.6861,
        landmark: "Sargodha University Area",
        localInfo: "Translate degree and transcript into Arabic in Sargodha for Saudi university admission without traveling to major cities.",
        biseName: "BISE Sargodha",
        tier: 2
    },
    "faisalabad": {
        name: "Faisalabad",
        description: "Rapid Arabic translation services in Faisalabad for Saudi university admission applications.",
        lat: 31.4504,
        lng: 73.1350,
        landmark: "Clock Tower & District Courts",
        localInfo: "Translate degree and transcript into Arabic in Faisalabad for Saudi university admission with our verified linguistic service.",
        biseName: "BISE Faisalabad",
        tier: 2,
        regionalContext: "Direct document processing for University of Agriculture (UAF) and GCUF students applying for 2026 Saudi scholarships."
    },
    "peshawar": {
        name: "Peshawar",
        description: "Official Arabic translation in Peshawar for KPK residents applying for Saudi scholarships.",
        lat: 34.0151,
        lng: 71.5249,
        landmark: "University Road & KPK MOFA Office",
        localInfo: "We provide specialized support to translate degree and transcript into Arabic in Peshawar for Saudi university admission.",
        biseName: "BISE Peshawar",
        mofaOffice: "MOFA Peshawar Office (University Road)",
        tier: 2,
        regionalContext: "Certified Arabic packs for Peshawar University and UET Peshawar graduates. Secure overnight delivery across KP."
    },
    "gujranwala": {
        name: "Gujranwala",
        description: "Certified Arabic translation in Gujranwala for academic and personal documents.",
        lat: 32.1877,
        lng: 74.1945,
        landmark: "GT Road & Gujranwala Chamber",
        localInfo: "Translate degree and transcript into Arabic in Gujranwala for Saudi university admission with doorstep delivery.",
        biseName: "BISE Gujranwala",
        tier: 3,
        regionalContext: "Serving University of Gujranwala and Govt. College University Lahore (Gujranwala campus) applicants. Same-day digital scans processed for students along GT Road and Satellite Town."
    },
    "hyderabad": {
        name: "Hyderabad",
        description: "Professional Arabic translation in Hyderabad (Pakistan) for Saudi university admission documentation.",
        lat: 25.3960,
        lng: 68.3578,
        landmark: "Latifabad & Hyderabad Chamber",
        localInfo: "Reliable service to translate degree and transcript into Arabic in Hyderabad (Pakistan) for Saudi university admission.",
        biseName: "BISE Hyderabad",
        tier: 3,
        regionalContext: "Specialist support for University of Sindh and Mehran UET graduates in Hyderabad. Secure overnight TCS courier covers Latifabad, Qasimabad, and City Campus areas."
    },
    "bahawalpur": {
        name: "Bahawalpur",
        description: "Arabic translation for Saudi admission in Bahawalpur. Local support for academic degrees.",
        lat: 29.3544,
        lng: 71.6911,
        landmark: "IUB & Cantonment",
        localInfo: "Translate degree and transcript into Arabic in Bahawalpur for Saudi university admission with ease.",
        biseName: "BISE Bahawalpur",
        tier: 3,
        regionalContext: "Dedicated processing for Islamia University of Bahawalpur (IUB) graduates. Express delivery covers Model Town, Satellite Town, and Cantonment areas of South Punjab."
    },
    "quetta": {
        name: "Quetta",
        description: "Specialized translation services for Balochistan. Providing certified Arabic documents for BUITEMS and University of Balochistan students.",
        lat: 30.1798,
        lng: 66.9750,
        landmark: "Serena Chowk & Balochistan Secretariat",
        localInfo: "Our Quetta service allows you to translate degree and transcript into Arabic for Saudi university admission locally.",
        biseName: "BISE Quetta",
        tier: 3,
        regionalContext: "Priority handling for BUITEMS and University of Balochistan applicants. Documents dispatched via tracked TCS courier to all Quetta zones including Satellite Town, Jinnah Town, and Cantt areas."
    },
    "abbottabad": {
        name: "Abbottabad",
        description: "Expert Arabic translation in Abbottabad for Saudi scholarship applicants.",
        lat: 34.1688,
        lng: 73.2215,
        landmark: "Mandian & Cantonment",
        localInfo: "Translate degree and transcript into Arabic in Abbottabad for Saudi university admission with professional accuracy.",
        biseName: "BISE Abbottabad",
        tier: 3,
        regionalContext: "Serving AWKUM and Hazara University graduates from Abbottabad. Same-day processing available for students near Mandian, Cantt, and Jinnahabad areas with overnight TCS delivery."
    },
    "mardan": {
        name: "Mardan",
        description: "Certified Arabic translation in Mardan for Saudi university admission. Specialized document support.",
        lat: 34.1989,
        lng: 72.0404,
        landmark: "Mardan Chamber & Shamsi Road",
        localInfo: "Residents can now translate degree and transcript into Arabic in Mardan for Saudi university admission through our fast-track service.",
        biseName: "BISE Mardan",
        tier: 3,
        regionalContext: "Expert support for Abdul Wali Khan University (AWKUM) Mardan campus graduates. Certified packs dispatched to Shergarh Road, Industrial Estate, and Hoti areas with next-day courier."
    },
    "swat": {
        name: "Swat",
        description: "Professional Arabic translation in Swat & Mingora for Saudi scholarship documentation.",
        lat: 34.8065,
        lng: 72.3621,
        landmark: "Mingora Bypass & Saidu Sharif",
        localInfo: "We provide specialized services to translate degree and transcript into Arabic in Swat for Saudi university admission locally.",
        biseName: "BISE Swat",
        tier: 3,
        regionalContext: "Specialist handling for Swat University and UoS graduates in Mingora and Saidu Sharif. Physical certified copies delivered via TCS to all Swat valley addresses within 48 hours."
    },
    "sukkur": {
        name: "Sukkur",
        description: "Leading Arabic translation in Sukkur for Interior Sindh students applying to Saudi Arabia.",
        lat: 27.7244,
        lng: 68.8228,
        landmark: "Military Road & Sukkur IBA area",
        localInfo: "Translate degree and transcript into Arabic in Sukkur for Saudi university admission with verified embassy formatting.",
        biseName: "BISE Sukkur",
        tier: 3,
        regionalContext: "Priority translation support for Sukkur IBA University and Shah Abdul Latif University graduates. Serving Interior Sindh with courier delivery to Sukkur, Rohri, and Khairpur districts."
    },
    "larkana": {
        name: "Larkana",
        description: "Official Arabic translation in Larkana for Saudi admission and visa documentation.",
        lat: 27.5570,
        lng: 68.2028,
        landmark: "Larkana Chamber & Station Road",
        localInfo: "Our Larkana office helps you translate degree and transcript into Arabic for Saudi university admission with ease.",
        biseName: "BISE Larkana",
        tier: 3,
        regionalContext: "Serving Shaeed Benazir Bhutto University (SBBU) Larkana graduates applying to Saudi scholarship programs. Courier delivery covers Larkana, Shikarpur, and Jacobabad districts."
    },
    "sahiwal": {
        name: "Sahiwal",
        description: "Expert Arabic translation in Sahiwal for Saudi university scholarships and work visas.",
        lat: 30.6682,
        lng: 73.1114,
        landmark: "High Street & Sahiwal Chamber",
        localInfo: "Easily translate degree and transcript into Arabic in Sahiwal for Saudi university admission without visiting Lahore.",
        biseName: "BISE Sahiwal",
        tier: 3,
        regionalContext: "Dedicated support for COMSATS Sahiwal and University of Sahiwal graduates. Certified translations couriered to all Sahiwal city zones including High Street, Farid Town, and Chichawatni."
    },
    "gujrat": {
        name: "Gujrat",
        description: "Certified Arabic translation in Gujrat for academic and personal documents. MOFA & Saudi Embassy compliant.",
        lat: 32.5731,
        lng: 74.0777,
        landmark: "GT Road & University of Gujrat",
        localInfo: "Translate degree and transcript into Arabic in Gujrat for Saudi university admission with professional linguistic support.",
        biseName: "BISE Gujrat",
        tier: 3,
        regionalContext: "Expert processing for University of Gujrat (UOG) graduates and BISE Gujrat board candidates. Same-day digital pickup with physical certified copy delivery across GT Road and Peoples Colony."
    },
    "jhelum": {
        name: "Jhelum",
        description: "Professional Arabic translation in Jhelum for Saudi scholarship and visa processing.",
        lat: 32.9331,
        lng: 73.7265,
        landmark: "Civil Lines & Jhelum Cantt",
        localInfo: "Looking to translate degree and transcript into Arabic in Jhelum for Saudi university admission? We offer rapid results locally.",
        biseName: "BISE Gujranwala",
        tier: 3,
        regionalContext: "Serving Jhelum students applying to Saudi Arabia with certified translation packs. Coverage includes Civil Lines, Raja Bazar, and Cantt — with next-day Leopards courier dispatch."
    },
    "mirpur": {
        name: "Mirpur (AJK)",
        description: "Official Arabic translation in Mirpur AJK for students and professionals applying to Saudi Arabia.",
        lat: 33.1431,
        lng: 73.7451,
        landmark: "Chowk Shaheedan & Mirpur Chamber",
        localInfo: "We assist AJK residents to translate degree and transcript into Arabic for Saudi university admission with embassy-recognized stamps.",
        biseName: "BISE Mirpur",
        tier: 3,
        regionalContext: "Priority service for University of Mirpur (UoM) AJK graduates and overseas Pakistani families in the UK diaspora. Documents couriered across New Mirpur City, Allama Iqbal Town, and Chakswari."
    },
    "muzaffarabad": {
        name: "Muzaffarabad",
        description: "Expert Arabic translation in Muzaffarabad for Saudi admission and documentation.",
        lat: 34.3597,
        lng: 73.4714,
        landmark: "Bank Road & Secretariat",
        localInfo: "Translate degree and transcript into Arabic in Muzaffarabad for Saudi university admission with reliable certification.",
        biseName: "BISE Mirpur",
        tier: 3,
        regionalContext: "Serving University of AJK and Shaheed Zulfikar Ali Bhutto University graduates in Muzaffarabad. Physical certified documents delivered via TCS to Bank Road, Chattar campus, and Gulshanabad areas."
    },
    "rahim-yar-khan": {
        name: "Rahim Yar Khan",
        description: "Certified Arabic translation in Rahim Yar Khan for Saudi scholarship applicants.",
        lat: 28.4211,
        lng: 70.2989,
        landmark: "Chowk Pathan & RYK Chamber",
        localInfo: "Securely translate degree and transcript into Arabic in Rahim Yar Khan for Saudi university admission with our fast-track service.",
        biseName: "BISE Bahawalpur",
        tier: 3,
        regionalContext: "Specialist translation support for Islamia University Bahawalpur RYK Campus graduates. Courier delivery covers Chowk Pathan, Khan Bela, and Model Town areas of South Punjab."
    },
    "dera-ghazi-khan": {
        name: "Dera Ghazi Khan",
        description: "Official Arabic translation in DG Khan for Saudi scholarship documentation.",
        lat: 30.0489,
        lng: 70.6355,
        landmark: "College Road & DGK Chamber",
        localInfo: "Translate degree and transcript into Arabic in Dera Ghazi Khan for Saudi university admission locally.",
        biseName: "BISE DG Khan",
        tier: 3,
        regionalContext: "Expert support for Ghazi University DG Khan graduates and BISE DG Khan board candidates applying to Saudi universities. Fast-track courier dispatch covers College Road, Haiderabad Colony, and Model Town."
    },
    "kohat": {
        name: "Kohat",
        description: "Professional Arabic translation in Kohat for Saudi scholarship and work visas.",
        lat: 33.5810,
        lng: 71.4493,
        landmark: "Kohat Chamber & Cantt",
        localInfo: "Residents of Kohat can now translate degree and transcript into Arabic for Saudi university admission with professional ease.",
        biseName: "BISE Kohat",
        tier: 3,
        regionalContext: "Dedicated processing for Kohat University of Science and Technology (KUST) graduates. Certified translation packs delivered to Cantt, Lachi Road, and Hangu Road areas with Leopards courier."
    },
    "nawabshah": {
        name: "Nawabshah",
        description: "Expert Arabic translation in Nawabshah (SBA) for Saudi admission requirements.",
        lat: 26.2483,
        lng: 68.4096,
        landmark: "Sakrand Road & SBA Chamber",
        localInfo: "Translate degree and transcript into Arabic in Nawabshah for Saudi university admission through our verified service.",
        biseName: "BISE Hyderabad",
        tier: 3,
        regionalContext: "Serving Shaheed Benazir Bhutto University Nawabshah (BBUSBA) graduates. Certified Arabic document packs delivered across Nawabshah, Sakrand, and Sanghar districts via secure courier."
    },
    "mirpur-khas": {
        name: "Mirpur Khas",
        description: "Certified Arabic translation in Mirpur Khas for academic and identity documents.",
        lat: 25.5269,
        lng: 69.0117,
        landmark: "M.A. Jinnah Road",
        localInfo: "We provide localized support to translate degree and transcript into Arabic in Mirpur Khas for Saudi university admission.",
        biseName: "BISE Mirpur Khas",
        tier: 3,
        regionalContext: "Supporting Sindh Agriculture University Tando Jam students and BISE Mirpur Khas board graduates. TCS courier covers M.A. Jinnah Road, New Mirpur Khas, and Kot Ghulam Muhammad areas."
    },
    "bannu": {
        name: "Bannu",
        description: "Official Arabic translation in Bannu for Saudi scholarship applicants.",
        lat: 32.9861,
        lng: 70.6042,
        landmark: "Bannu Chamber of Commerce",
        localInfo: "Translate degree and transcript into Arabic in Bannu for Saudi university admission with official accuracy.",
        biseName: "BISE Bannu",
        tier: 3,
        regionalContext: "Expert document support for Bannu University graduates and BISE Bannu candidates applying for Saudi scholarships. Physical certified packs dispatched to Bannu City, Domel, and Lakki Marwat via TCS."
    }
};

export const services: Record<string, ServiceData> = {
    "saudi-scholarship-translation": {
        slug: "saudi-scholarship-translation",
        title: "Saudi Scholarship Documentation",
        description: "Specialized Arabic translation for fully funded Saudi university scholarships including KSU, KAU, and Madinah University.",
        engagementText: "Securing a fully funded Saudi scholarship requires documentation that speaks the language of the admissions committee.",
        benefits: [
            "Tailored for Saudi Admissions",
            "Letter of Intent translation",
            "Recommendation letter experts",
            "Express deadline support"
        ]
    },
    "degree-transcript-translation": {
        slug: "degree-transcript-translation",
        title: "Degree & Transcript Translation",
        description: "Certified Arabic translation of Bachelor's, Master's, or PhD degrees and detailed academic transcripts for Saudi admission.",
        engagementText: "Your academic future in Saudi Arabia depends on the precision of your translated degree and transcript.",
        benefits: [
            "HEC & MOFA compliant",
            "Functional equivalent terminology",
            "Matching layout and formatting",
            "Certified with official seal"
        ]
    },
    "matric-certificate-translation": {
        slug: "matric-certificate-translation",
        title: "Matric (SSC) Translation",
        description: "Certified translation of Secondary School Certificates (SSC) for undergraduate scholarship applications in Saudi Arabia.",
        engagementText: "Your foundational academic record needs to be accurately translated to meet international standards.",
        benefits: [
            "Board-issued format matching",
            "Certified Arabic experts",
            "Same-day digital delivery",
            "Embassy recognized stamps"
        ]
    },
    "intermediate-certificate-translation": {
        slug: "intermediate-certificate-translation",
        title: "Intermediate (HSSC) Translation",
        description: "Arabic translation of Higher Secondary School Certificates (FSc/FA/HSSC) for Saudi bachelor's program admission.",
        engagementText: "Certified translation of your 12th-grade results is mandatory for all undergraduate scholarship portals in the Kingdom.",
        benefits: [
            "HSSC terminology accuracy",
            "HEC verification support",
            "Fast-track processing",
            "Mirror-image formatting"
        ]
    },
    "diploma-certificate-translation": {
        slug: "diploma-certificate-translation",
        title: "Diploma & Trade Translation",
        description: "Professional translation for 1-3 year technical diplomas (DAE, nursing, etc.) for Saudi equivalency and jobs.",
        engagementText: "Technical and vocational qualifications require specialized terminology that our Arabic experts provide.",
        benefits: [
            "DAE & Trade cert experts",
            "Saudi MOE compliant",
            "Technical term accuracy",
            "Official legal stamps"
        ]
    },
    "nikah-nama-translation": {
        slug: "nikah-nama-translation",
        title: "Nikah Nama Translation",
        description: "Official Arabic translation of marriage certificates (Nikkah Nama) for visa and family records.",
        engagementText: "Moving to Saudi Arabia with your family? A properly translated and certified Nikah Nama is your most important document.",
        benefits: [
            "Manual translation of Urdu stamps",
            "Urgent 24-hour turnaround",
            "Accepted by Saudi Embassy",
            "Secure data handling"
        ]
    },
    "birth-certificate-translation": {
        slug: "birth-certificate-translation",
        title: "Birth Certificate & B-Form",
        description: "Accurate Arabic translation of birth certificates and NADRA B-Forms for Saudi residency and scholarships.",
        engagementText: "Ensure your children's identities are correctly recorded in the Kingdom with our embassy-approved translation.",
        benefits: [
            "NADRA B-Form expertise",
            "Mirror-image formatting",
            "Verified by MA Arabic experts",
            "Digital and physical copies"
        ]
    },
    "domicile-certificate-translation": {
        slug: "domicile-certificate-translation",
        title: "Domicile Certificate Translation",
        description: "Certified Arabic translation of provincial domicile certificates (Sindh, Punjab, etc.) for Saudi embassy requirements.",
        engagementText: "Many Saudi universities and embassies require a translated domicile to verify your provincial status.",
        benefits: [
            "District-specific formats",
            "Official certification",
            "Fast turnaround",
            "Accurate location terms"
        ]
    },
    "police-character-certificate-translation": {
        slug: "police-character-certificate-translation",
        title: "Police Certificate Translation",
        description: "Certified Arabic translation of Police Character Certificates for Saudi work and study visas.",
        engagementText: "Your clean record needs a clear translation recognized by the Saudi Embassy and MOFA.",
        benefits: [
            "Embassy-compliant wording",
            "Fast 24-hour delivery",
            "Direct MOFA support",
            "Verified accuracy"
        ]
    },
    "moe-equivalency-pack": {
        slug: "moe-equivalency-pack",
        title: "Saudi MOE Equivalency Pack",
        description: "Complete translation and formatting of all academic documents as required by the Saudi Ministry of Education.",
        engagementText: "The Saudi MOE equivalency process is strict. Our pack ensures your documents meet every technical requirement.",
        benefits: [
            "Full set translation",
            "MOE technical formatting",
            "Sequence verification",
            "Priority processing"
        ]
    },
    "madinah-university-bundle": {
        slug: "madinah-university-bundle",
        title: "Islamic Univ. Madinah Bundle",
        description: "Specially formatted Arabic translations for the Islamic University of Madinah fully funded scholarship application.",
        engagementText: "Madinah University has specific documentation standards. We provide the exact bundle you need for a successful upload.",
        benefits: [
            "Madinah portal optimized",
            "All-in-one document set",
            "Verified by Arabic scholars",
            "100% acceptance guarantee"
        ]
    },
    "ksu-admission-set": {
        slug: "ksu-admission-set",
        title: "King Saud University Set",
        description: "Specialized translation of full academic files according to King Saud University's (KSU) specific admission checklist.",
        engagementText: "Applying to KSU? Get your degrees, transcripts, and personal docs translated in one cohesive, professional set.",
        benefits: [
            "KSU checklist compliance",
            "Academic merit focus",
            "Fast digital delivery",
            "Embassy recognized stamps"
        ]
    },
    "iata-dts-umrah-travel-agency": {
        slug: "iata-dts-umrah-travel-agency",
        title: "IATA & DTS Umrah Agency Translation",
        description: "Certified Arabic translation of IATA certificates, DTS accreditation, tourism licenses, and commercial documents for Umrah operators and Saudi-linked travel agencies.",
        engagementText: "Saudi partners and tourism authorities demand professionally translated commercial documentation. Protect your Umrah business with certified Arabic translation.",
        benefits: [
            "IATA & DTS certificate expertise",
            "Saudi travel compliance formatting",
            "Urgent Hajj/Umrah season processing",
            "B2B commercial terminology accuracy"
        ]
    },
    "urdu-to-english-translation": {
        slug: "urdu-to-english-translation",
        title: "Urdu to English Translation Services",
        description: "Certified and stamped Urdu to English document translation for UK, US, Canada, Australia, and European visa applications, academic evaluations, and legal compliance.",
        engagementText: "When applying for global visas, immigration, or foreign university admissions, presenting a flawlessly translated English document with certified stamps is non-negotiable.",
        benefits: [
            "Accepted by UKVI, CIC, & US CIS",
            "Urgent 12-hour digital delivery",
            "Official notary stamps available",
            "Original document structure matched"
        ]
    }
};

export interface PackageData {
    name: string;
    description: string;
    includes: string[];
    idealFor: string;
}

export const packages: Record<string, PackageData> = {
    "bronze-undergraduate": {
        name: "Bronze – Undergraduate Scholarship",
        description: "Essential translations for starting your journey in the Kingdom.",
        includes: ["Matric Certificate", "FSc/Intermediate Certificate", "NADRA B-Form/Birth Certificate"],
        idealFor: "Bachelor's Degree applicants"
    },
    "silver-masters": {
        name: "Silver – Master's Scholarship",
        description: "Comprehensive translation pack for graduate-level admissions.",
        includes: ["All Bronze documents", "Bachelor's Degree & Transcript", "Marriage Certificate (if applicable)"],
        idealFor: "Master's Degree applicants"
    },
    "gold-phd": {
        name: "Gold – PhD Scholarship",
        description: "Deep-dive academic translation for researchers and doctoral candidates.",
        includes: ["All Silver documents", "Master's Degree & Transcript", "Research Abstract/SOP"],
        idealFor: "PhD & Research applicants"
    },
    "platinum-family": {
        name: "Platinum – Full Family File",
        description: "The complete legalization set for students relocating with their family.",
        includes: ["Student's Gold package", "Spouse's Identity Documents", "Children's Birth Certificates"],
        idealFor: "Family relocation + study"
    }
};

export const ALLOWLISTED_LOCATION_SUBPAGES = new Set<string>([
    "lahore/nikah-nama-translation",
    "karachi/nikah-nama-translation",
    "karachi/urdu-to-english-translation",
    "peshawar/nikah-nama-translation",
    "rawalpindi/nikah-nama-translation",
    "gujrat/nikah-nama-translation",
    "lahore/urdu-to-english-translation",
    "jhelum/urdu-to-english-translation",
    "peshawar/birth-certificate-translation",
    "multan/urdu-to-english-translation",
    "islamabad/urdu-to-english-translation",
    "islamabad/nikah-nama-translation",
    "jhelum/nikah-nama-translation",
    "faisalabad/urdu-to-english-translation",
    "peshawar/urdu-to-english-translation",
    "rahim-yar-khan/urdu-to-english-translation",
    "bahawalpur/urdu-to-english-translation",
    "mardan/urdu-to-english-translation",
    "nawabshah/domicile-certificate-translation",
    "dera-ghazi-khan/police-character-certificate-translation",
    "islamabad/birth-certificate-translation",
    "sahiwal/nikah-nama-translation",
    "rawalpindi/intermediate-certificate-translation",
    "rawalpindi/urdu-to-english-translation",
    "gujranwala/urdu-to-english-translation",
    "gujrat/urdu-to-english-translation",
    "quetta/urdu-to-english-translation",
    "dera-ghazi-khan/urdu-to-english-translation",
    "mirpur/urdu-to-english-translation",
    "mirpur/nikah-nama-translation",
    "quetta/nikah-nama-translation",
    "sukkur/iata-dts-umrah-travel-agency",
    "dera-ghazi-khan/matric-certificate-translation",
    "sukkur/domicile-certificate-translation",
    "gujrat/iata-dts-umrah-travel-agency",
    "rawalpindi/iata-dts-umrah-travel-agency",
    "lahore/diploma-certificate-translation",
    "faisalabad/nikah-nama-translation",
    "quetta/iata-dts-umrah-travel-agency",
    "hyderabad/intermediate-certificate-translation",
    "sialkot/nikah-nama-translation",
    "sukkur/degree-transcript-translation",
    "mirpur/intermediate-certificate-translation",
    "sargodha/nikah-nama-translation",
    "gujranwala/police-character-certificate-translation",
    "quetta/domicile-certificate-translation",
    "faisalabad/police-character-certificate-translation",
    "bahawalpur/degree-transcript-translation",
    "larkana/domicile-certificate-translation",
    "rawalpindi/birth-certificate-translation",
    "mirpur/police-character-certificate-translation",
    "swat/urdu-to-english-translation",
    "hyderabad/matric-certificate-translation",
    "swat/intermediate-certificate-translation",
    "mardan/degree-transcript-translation",
    "multan/nikah-nama-translation",
    "multan/domicile-certificate-translation",
    "multan/ksu-admission-set",
    "hyderabad/degree-transcript-translation",
    "larkana/diploma-certificate-translation",
    "dera-ghazi-khan/degree-transcript-translation",
    "swat/iata-dts-umrah-travel-agency",
    "multan/birth-certificate-translation",
    "larkana/saudi-scholarship-translation",
    "dera-ghazi-khan/saudi-scholarship-translation",
    "gujranwala/saudi-scholarship-translation"
]);

export function isAllowlistedSubPage(citySlug: string, serviceSlug: string): boolean {
    const key = `${citySlug.toLowerCase()}/${serviceSlug.toLowerCase()}`;
    return ALLOWLISTED_LOCATION_SUBPAGES.has(key);
}

export function getAllowlistedSubPagesForCity(citySlug: string): string[] {
    const prefix = `${citySlug.toLowerCase()}/`;
    const result: string[] = [];
    ALLOWLISTED_LOCATION_SUBPAGES.forEach((item) => {
        if (item.startsWith(prefix)) {
            result.push(item.substring(prefix.length));
        }
    });
    return result;
}


