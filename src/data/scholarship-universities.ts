export interface UniversityData {
    slug: string;
    name: string;
    fullName: string;
    location: string;
    description: string;
    tags: string[];
    checklist: string[];
    portalUrl: string;
    bodyContent: string;
    faqs: { q: string; a: string }[];
}

export const universities: Record<string, UniversityData> = {
    "king-saud-university": {
        slug: "king-saud-university",
        name: "King Saud University",
        fullName: "King Saud University (KSU) Admissions",
        location: "Riyadh, Saudi Arabia",
        description: "The premier institution for Medicine, Engineering, and Science in the Kingdom. KSU offers fully funded scholarships for Pakistani students with high merit.",
        tags: ["STEM", "Medicine", "Global Top 200"],
        checklist: [
            "Matric & Inter Certificates (Certified Arabic Translation)",
            "Bachelor Degree & Transcript (for Masters applicants)",
            "Two Recommendation Letters (translated if not in English/Arabic)",
            "Medical Fitness Certificate",
            "Valid Passport Copy (12 months validity minimum)",
            "Police Clearance Certificate",
            "Birth Certificate (Certified Arabic Translation)"
        ],
        portalUrl: "https://ali-admissions.ksu.edu.sa/",
        bodyContent: `King Saud University (KSU) is ranked among the top 200 universities globally and is the largest university in Saudi Arabia. Located in the heart of Riyadh, KSU offers fully funded scholarships to international students across Medicine, Engineering, Sciences, Humanities, and Business programs.

For Pakistani students, the KSU scholarship covers 100% of tuition fees, free university housing, a monthly stipend of approximately SAR 850–1,000, and annual return airfare to Pakistan. The scholarship is among the most competitive in the Gulf region, with thousands of applicants from over 100 countries competing for limited seats.

**Why Your Translation Quality Determines Your Admission**

KSU uses an automated screening system during the initial document review phase. Every PDF you upload — your degree, transcript, matric certificate, and birth certificate — is scanned by the portal's verification algorithm. If your Urdu or English documents are translated into non-standard Arabic equivalents (a common issue with freelance translators), the system will fail to match your academic credentials against the Saudi grading scale, which can result in your application being automatically filtered out before a human reviewer even sees it.

This is why Pakistani students applying from cities like Lahore, Karachi, and Islamabad specifically request certified Arabic translations from authorized translation agencies rather than relying on machine translation tools or unverified freelancers.

**KSU Application Timeline for Pakistani Students**

The KSU scholarship application cycle typically opens in January and closes between April and May each year. The portal is managed through the Study in Saudi Arabia platform (studyinsaudi.moe.gov.sa), where you must create an account, fill in your bio-data precisely matching your passport, upload all translated and attested documents, and then select your preferred faculties and programs.

Students are advised to complete their HEC degree verification and MOFA attestation at least 30 days before the deadline, as these processes can take 2–3 weeks. Translation of your documents by a certified provider like Lisan.pk can be completed in as little as 24 hours with same-day express service.

**Most Popular Faculties at KSU for Pakistani Students**

Pakistani students most frequently apply to the College of Medicine, College of Engineering (Electrical, Civil, Mechanical), College of Computer & Information Sciences, and the College of Pharmacy. For Master's and PhD applicants, the College of Sciences and College of Education are also popular choices.`,
        faqs: [
            {
                q: "What documents do Pakistani students need for King Saud University scholarship?",
                a: "Pakistani students applying to KSU need their Matric and Intermediate certificates, bachelor's degree and transcript (for postgraduate applicants), two recommendation letters, a medical fitness certificate, a valid passport with at least 12 months validity, a police clearance certificate, and a birth certificate. All documents issued in Urdu must be accompanied by a certified Arabic translation with an official stamp."
            },
            {
                q: "Does KSU scholarship cover all expenses?",
                a: "Yes. The King Saud University fully funded scholarship covers 100% of tuition fees, free university accommodation, a monthly stipend (approximately SAR 850–1,000), annual return airfare between Pakistan and Riyadh, and free medical insurance. Some programs may also provide a book allowance."
            },
            {
                q: "Is a certified Arabic translation mandatory for KSU portal submission?",
                a: "Yes, absolutely mandatory. The KSU admission portal uses automated screening algorithms that verify your academic credentials against a standardized Arabic terminology database. Any document not in Arabic — including Urdu-language degrees, transcripts, and personal certificates — must be accompanied by a certified Arabic translation from an authorized agency. Using a non-certified translation will result in automated rejection."
            },
            {
                q: "How long does the KSU scholarship application process take?",
                a: "The full process typically takes 6–12 months from application to arrival. After submitting your application through the Study in Saudi portal, shortlisted candidates are notified within 2–4 months. Visa processing and pre-departure formalities take an additional 1–3 months. You should start your document translation and HEC attestation at least 6–8 weeks before the portal submission deadline."
            }
        ]
    },
    "king-abdulaziz-university": {
        slug: "king-abdulaziz-university",
        name: "King Abdulaziz University",
        fullName: "King Abdulaziz University (KAU) Scholarships",
        location: "Jeddah, Saudi Arabia",
        description: "Ranked #1 in the Arab world, KAU provides diverse scholarship opportunities in Arts, Sciences, and Marine research.",
        tags: ["Research", "Arts & Sciences", "Jeddah"],
        checklist: [
            "Certified Academic Transcript (Arabic Translation)",
            "Statement of Purpose (SOP) — in English or Arabic",
            "English Proficiency certificate (IELTS/TOEFL for applicable programs)",
            "Birth Certificate / NADRA B-Form (Certified Arabic Translation)",
            "HEC Attested Bachelor's or Master's Degree (Certified Arabic Translation)",
            "Police Clearance Certificate",
            "Medical Fitness Certificate"
        ],
        portalUrl: "https://www.kau.edu.sa/",
        bodyContent: `King Abdulaziz University (KAU) in Jeddah is ranked the number one university in the Arab world by the Times Higher Education and QS rankings. With over 100,000 students, it is one of the largest universities in the Middle East and offers fully funded international scholarships across undergraduate, postgraduate, and doctoral programs.

KAU is particularly renowned for its research output in Islamic Studies, Marine Sciences, Renewable Energy, and Biomedical Engineering. Pakistani students with strong academic backgrounds and HEC-recognized degrees consistently rank among the top international scholarship recipients at KAU.

**The KAU Scholarship Package**

The King Abdulaziz University scholarship provides fully funded support including tuition waiver, free student housing on campus, a monthly living stipend, annual return airfare, and access to university medical facilities. For PhD researchers, additional research grants and conference travel allowances may be available through the faculty of graduate studies.

**Why KAU Applications Require Extra Attention to Documents**

Unlike some other Saudi universities, KAU's admissions process places significant weight on the quality and completeness of your uploaded academic portfolio. Incomplete or poorly formatted documents are a primary rejection trigger. Your certified Arabic translation must mirror the exact formatting of the original document — margins, headings, grades, and institutional seals must all be replicated accurately in the Arabic version.

Pakistani students applying from Lahore, Islamabad, Karachi, and Peshawar frequently report that their initial submissions were flagged due to inconsistencies between their HEC-attested English degrees and the Arabic translation — a problem that is entirely avoidable with a professional certified translation service.

**KAU Programs Most Popular Among Pakistani Students**

Pakistani applicants most commonly apply to KAU's programs in Computer Science, Information Technology, Electrical Engineering, Business Administration (Islamic Finance), and Medicine. Postgraduate applicants frequently target the Faculty of Science and the Faculty of Earth Sciences, where research funding is particularly strong.

**How to Apply for KAU Scholarship**

Applications are submitted through the official KAU website (scholarships.kau.edu.sa) or through the central Study in Saudi Arabia portal. The application requires you to upload all your academic documents along with their certified Arabic translations, a Statement of Purpose, and at least one recommendation letter. Applications without complete certified translations are automatically rejected at the first screening stage.`,
        faqs: [
            {
                q: "What is the deadline for King Abdulaziz University scholarship 2026?",
                a: "KAU scholarship deadlines vary by program and level of study. Generally, the annual scholarship cycle closes between April and June. Pakistani students should monitor the official KAU portal (scholarships.kau.edu.sa) and the Study in Saudi Arabia platform for the exact 2026 closing date. It is strongly advised to complete your document translation and HEC attestation at least 4 weeks before any advertised deadline."
            },
            {
                q: "Can Pakistani students apply for KAU scholarship for a Master's degree?",
                a: "Yes. KAU accepts scholarship applications for Bachelor's, Master's, and PhD programs from Pakistani students. For Master's applicants, you will need your HEC-attested bachelor's degree and official transcript, both with certified Arabic translations. Postgraduate applicants should also prepare a Statement of Purpose and ideally a research proposal for PhD-level applications."
            },
            {
                q: "Is an IELTS score required for KAU scholarship?",
                a: "English proficiency requirements depend on the faculty and program. Programs taught in Arabic do not require IELTS. However, programs in Science, Engineering, and Medicine at KAU may require a minimum IELTS score (typically 5.5–6.0) or equivalent TOEFL score. Always confirm the language requirements for your specific program on the official KAU admissions page."
            },
            {
                q: "How important is the Statement of Purpose (SOP) for KAU scholarship?",
                a: "The SOP is a critical component of your KAU application, particularly for Master's and PhD programs. It should clearly articulate your academic background, research interests, and why you are applying to KAU specifically. It can be submitted in English or Arabic. If you write it in English and wish to strengthen your portfolio, you may also provide an Arabic version prepared with the help of a certified translation agency like Lisan.pk."
            }
        ]
    },
    "islamic-university-of-madinah": {
        slug: "islamic-university-of-madinah",
        name: "Islamic University of Madinah",
        fullName: "Islamic University of Madinah Scholarships",
        location: "Madinah, Saudi Arabia",
        description: "Specializing in Shariah, Quranic Studies, and Arabic Language, this university is a historic center for religious education with full scholarships for international students.",
        tags: ["Theology", "Arabic Literature", "Religious Studies"],
        checklist: [
            "Urgent Arabic Translation Pack (all documents)",
            "Police Clearance Certificate (Certified Arabic Translation)",
            "Character Certificate from Mosque or Islamic Institute",
            "Personal Photos — white background, 4x6 size",
            "Nikah Nama / Marriage Certificate (if applying with family)",
            "Birth Certificate for all family members (Certified Arabic Translation)",
            "Medical Fitness Certificate (Arabic Translation)",
            "Valid Passport (all family members)"
        ],
        portalUrl: "https://admission.iu.edu.sa/",
        bodyContent: `The Islamic University of Madinah (IUM) is one of the oldest and most prestigious Islamic educational institutions in the world. Located in the blessed city of Madinah al-Munawwarah, it is dedicated to the study of Islamic Shariah, Quran and Sunnah, Arabic Language and Literature, and Da'wah (Islamic outreach). The university offers fully funded scholarships to Muslim students from around the world, including a significant quota for Pakistani applicants.

The IUM scholarship is among the most sought-after educational opportunities in Pakistan due to its location in a sacred city, the quality of Islamic education, and the fully funded nature of the award. Thousands of Pakistani students apply each year, and the competition for seats is extremely high.

**The IUM Scholarship — What It Covers**

The Islamic University of Madinah fully funded scholarship covers 100% of tuition and educational expenses, free student accommodation in Madinah, a monthly stipend for living expenses, annual return airfare between Pakistan and Madinah, and free medical care. For married students, the scholarship also provides additional family housing allowance and stipend supplements, subject to availability.

**Why IUM Has Strict Documentation Requirements**

The Islamic University of Madinah has some of the strictest document verification processes of any Saudi institution. The university's admissions office manually reviews every application and rejects submissions with even minor discrepancies — a different spelling of your name in Arabic vs. your passport, a missing stamp on a family document, or an incorrectly formatted Nikah Nama translation can lead to immediate disqualification.

Pakistani students applying from cities across Punjab, Sindh, KPK, and Balochistan have reported that their most common rejection reason is an improperly translated or informally certified Nikah Nama (marriage certificate) or a birth certificate with incorrect Arabic rendering of Urdu names. Getting these documents right requires a specialized Arabic translator with expertise in Islamic legal terminology and NADRA document formats.

**IUM-Specific Translation Requirements**

The Islamic University of Madinah requires that:
1. All documents be accompanied by certified Arabic translations (not machine translations)
2. Names in Arabic must match the official Arabic transliteration standards
3. Nikah Nama translations must include the full Arabic rendering of all Urdu text including the imam's seal
4. Character certificates from Islamic organizations must be on official letterhead and translated into Arabic

Lisan.pk has developed a specialized IUM Translation Bundle that includes all the above requirements formatted to IUM's exact portal specifications.

**Programs Offered at IUM**

The Islamic University of Madinah offers programs at undergraduate and postgraduate levels in: Faculty of Shariah, Faculty of Quran and Islamic Studies, Faculty of Arabic Language, Faculty of Da'wah and Islamic Jurisprudence, Faculty of Hadith and Islamic Studies, and Faculty of Education. All instruction is in Arabic, so a foundational level of Arabic language ability is strongly preferred for new students.`,
        faqs: [
            {
                q: "How do Pakistani students apply for the Islamic University of Madinah scholarship?",
                a: "Pakistani students can apply through the official IUM admissions portal at admission.iu.edu.sa. The application requires you to create an account, upload all required documents with certified Arabic translations, submit a character certificate from an Islamic institution, and provide personal photographs. The portal opens once per year — typically between October and January. Students must ensure all documents are correctly translated and formatted before uploading."
            },
            {
                q: "Is knowledge of Arabic required for the Islamic University of Madinah?",
                a: "Arabic is the primary language of instruction at IUM. While the university does offer a preparatory Arabic language program for new students who are not yet fluent, a basic foundational knowledge of Arabic is highly beneficial and will strengthen your application. Students with Hafiz-e-Quran credentials or prior madrassa education have a significant advantage in the selection process."
            },
            {
                q: "Can married Pakistani students apply for IUM scholarship with their families?",
                a: "Yes, married students may apply for family accommodation at IUM, subject to availability and scholarship terms. If you are applying with your family, you will need certified Arabic translations of your Nikah Nama (marriage certificate), your spouse's passport, and birth certificates for all children. These family documents have strict formatting requirements and must be translated by a certified agency."
            },
            {
                q: "Why is a certified Arabic translation of the Nikah Nama so important for IUM?",
                a: "The Nikah Nama is a complex document that contains Urdu text, Arabic Quranic verses, official stamps, and signature fields. The Islamic University of Madinah requires that every element of this document be accurately rendered in Arabic — including the witness names, Mehr amount, and the presiding Imam's credentials. A generic or machine translation will fail to capture these elements correctly, leading to rejection. Lisan.pk specializes in Nikah Nama Arabic translations that meet IUM's specific standards."
            }
        ]
    }
};
