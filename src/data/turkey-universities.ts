export interface TurkeyUniversityData {
    slug: string;
    name: string;
    fullName: string;
    location: string;
    description: string;
    tags: string[];
    checklist: string[];
    tuitionRange: string;
    scholarshipDetails: string;
    popularPrograms: string[];
    intakeDates: string;
    portalUrl: string;
    bodyContent: string;
    faqs: { q: string; a: string }[];
}

export const turkeyUniversities: Record<string, TurkeyUniversityData> = {
    "beykoz-university": {
        slug: "beykoz-university",
        name: "Beykoz University",
        fullName: "Beykoz University Istanbul Admissions",
        location: "Istanbul, Turkey",
        description: "Known for its dynamic career-focused curriculum and modern digital campus. Beykoz University offers up to 50% guaranteed tuition waivers for eligible Pakistani students.",
        tags: ["Career-Oriented", "Modern Campus", "Up to 50% Scholarships"],
        checklist: [
            "Matric / O-Level Certificate & Transcript",
            "Intermediate / A-Level Certificate & Transcript (Min 50% marks)",
            "Valid International Passport Copy",
            "Passport Size Photograph (White Background)",
            "Active Student Email Address & Mother's Name",
            "English Proficiency Certificate from High School (No IELTS needed)"
        ],
        tuitionRange: "$2,000 - $3,500 / year",
        scholarshipDetails: "Up to 50% direct institutional tuition fee waiver based on high school grades. Eligible applicants receive guaranteed scholarship letters with direct affiliations through Lisan.pk.",
        popularPrograms: [
            "Computer Engineering (Bachelors)",
            "Software Engineering (Bachelors)",
            "Business Administration (Bachelors/Masters)",
            "International Trade & Logistics (Bachelors)",
            "Graphic Design (Bachelors)",
            "Digital Game Design (Bachelors)"
        ],
        intakeDates: "Fall Intake (Applications close in August/September). Spring Intake (Limited programs close in February).",
        portalUrl: "https://www.beykoz.edu.tr/en",
        bodyContent: `Beykoz University, located in the historic and beautiful city of Istanbul, is one of Turkey's most modern and student-centric private universities. The university is widely celebrated for its 3+1 and 7+1 education models, where students spend their final semesters working directly in industry partners to secure job offers before graduating.

For Pakistani students, Beykoz offers a highly affordable gateway into the European and Turkish job markets. With direct university affiliations through Lisan.pk, qualified students bypass standard agency filters, enjoying expedited letter of acceptance processing and a guaranteed scholarship waiver.

**Direct University Affiliation vs. Virtual Agents**

Applying through generic agents often leads to long wait times, hidden registration fees, and uncertainty. By utilizing Lisan.pk's direct partnership channels, you submit your credentials directly to the Beykoz international student office. Our physical office located inside Yozgat Bozok University Technopark handles all on-ground local verifications, ensuring your file is fast-tracked and your 50% scholarship is officially certified in your letter of acceptance.

**No IELTS Requirement Strategy**

One of the biggest advantages of studying at Beykoz University is that an IELTS score is not mandatory. If your high school instruction was in English, we will coordinate with your school to issue an English Proficiency Certificate. This certificate is 100% accepted by the Beykoz admissions board, saving you time and examination expenses.

**On-Ground Assistance in Istanbul**

Lisan.pk is one of the only consultants providing full on-ground student reception in Turkey. Our Turkish support desk coordinates airport pickups, assists with local university registration, guides you through the state health insurance setup, and secures your official Turkish Residence Permit (İkamet) within your first month.`,
        faqs: [
            {
                q: "What is the tuition fee for Beykoz University for Pakistani students?",
                a: "The standard tuition fee for most Bachelor's programs taught in English at Beykoz University ranges from $2,000 to $3,500 per year. With Lisan.pk's direct affiliation, students with 50% or above marks in Intermediate/O-Levels are eligible for up to a 50% scholarship waiver, bringing the annual cost down significantly."
            },
            {
                q: "Do I need IELTS to apply for Beykoz University?",
                a: "No, IELTS is not mandatory for admission to Beykoz University. If you have completed your intermediate or high school education at an institution where English was the primary medium of instruction, we can submit an official English Proficiency Certificate issued by your school to secure a complete IELTS waiver."
            },
            {
                q: "How long does the Beykoz University admission letter take?",
                a: "Through Lisan.pk's direct portal coordination, qualified applicants receive their conditional acceptance letter (CAL) within 3 to 5 working days of document submission. The official acceptance letter (EAL) is issued once the initial enrollment deposit is verified."
            },
            {
                q: "Can I work part-time while studying at Beykoz University?",
                a: "Yes. International students in Turkey are legally permitted to work part-time after their first year of study, particularly in freelance, digital, or language-specific sectors. Beykoz University's career center also coordinates active paid internships with its network of corporate partners in Istanbul."
            }
        ]
    },
    "kent-university": {
        slug: "kent-university",
        name: "Istanbul Kent University",
        fullName: "Istanbul Kent University Admissions",
        location: "Istanbul, Turkey",
        description: "A premier institution located in the heart of Istanbul (Taksim), specializing in Health Sciences, Engineering, and Dentistry with state-of-the-art laboratory infrastructure.",
        tags: ["Heart of Istanbul (Taksim)", "Dentistry & Medicine", "State-of-the-Art Labs"],
        checklist: [
            "Matric & Intermediate Marksheets (Attestation not required for initial offer)",
            "Valid Passport Copy (Minimum 6-month validity remaining)",
            "Passport Size Picture with plain white background",
            "Active personal Email Address",
            "Mother's Name (for portal registration)",
            "High School English Medium Certificate (for IELTS waiver)"
        ],
        tuitionRange: "$2,500 - $4,500 / year (Dentistry ~$12,000/year)",
        scholarshipDetails: "Exclusive institutional discounts ranging from 30% to 50% for applicants applying via Lisan.pk's direct portal. High-merit students are eligible for additional dentistry fee reductions.",
        popularPrograms: [
            "Doctor of Dentistry (Turkish/English - 5 Years)",
            "Software Engineering (Bachelors)",
            "Nursing (Bachelors - English)",
            "Physiotherapy & Rehabilitation (Bachelors)",
            "Psychology (Bachelors - English)",
            "Business Administration (Masters)"
        ],
        intakeDates: "Main Fall Intake begins in May and concludes in mid-October. Dentistry seats are highly limited and fill up by July.",
        portalUrl: "https://www.kent.edu.tr/en",
        bodyContent: `Istanbul Kent University is highly sought after by international students seeking careers in dentistry, healthcare, and software engineering. Located directly in the heart of Istanbul (Taksim), Kent University combines a vibrant historical campus with ultra-modern dental clinics, simulator labs, and advanced technology research centers.

For Pakistani students aspiring to become dentists or engineers without paying exorbitant fees in the UK or US, Kent University represents a highly respected, internationally accredited alternative.

**Guaranteed Admission Route for Health and Science Tracks**

Admissions into medical and dental programs in Pakistan are extremely competitive and stressful. Istanbul Kent University provides an accessible, high-standard alternative. Lisan.pk's direct partnership with Kent University enables us to secure guaranteed admission offers for qualified students who maintain at least 50-60% marks in their Pre-Medical or pre-engineering Intermediate tracks. 

**World-Class Dental and Clinical Labs**

Kent University's Faculty of Dentistry is equipped with standard clinical simulators, letting students practice advanced procedures before entering real clinical phases. The degree is recognized globally and fully aligned with European educational standards (Bologna Process), allowing graduates to practice or pursue specializations across Europe and the Middle East.

**Our Turkish Technopark Validation**

Unlike normal educational agencies, Lisan.pk is registered physically inside Turkey at the Yozgat Bozok University Technopark. This physical presence allows us to submit, verify, and stamp your enrollment files directly at the Kent campus in Istanbul. We coordinate with the university to secure the highest possible institutional discount, ensuring your tuition invoice is completely transparent with no hidden consultant fees.`,
        faqs: [
            {
                q: "What are the requirements for the Dentistry program at Kent University?",
                a: "For the Dentistry (BDS equivalent) program at Istanbul Kent University, Pakistani students need a minimum of 60% marks in their Pre-Medical Intermediate or equivalent A-levels. You must submit your passport, matriculation certificate, and intermediate transcript. No entry tests or IELTS are required when applying through Lisan.pk."
            },
            {
                q: "Is Kent University recognized globally?",
                a: "Yes. Istanbul Kent University is officially recognized by the Turkish Higher Education Council (YÖK) and is part of the European Higher Education Area (Bologna Process). Its degrees are recognized worldwide, enabling graduates to take licensing exams in Pakistan, Europe, the Middle East, and the USA."
            },
            {
                q: "How much does Dentistry cost at Kent University?",
                a: "The standard international tuition fee for the English-taught Dentistry program at Kent University is approximately $12,000 per year. For programs in Software Engineering, Psychology, and Nursing, the fee ranges between $2,500 and $4,500 per year. Apply via Lisan.pk to secure exclusive partner fee discounts."
            },
            {
                q: "Where is Kent University located in Istanbul?",
                a: "Kent University features a gorgeous city campus located directly in Taksim, the historical, cultural, and transport center of Istanbul. Students enjoy immediate access to Istanbul's metro lines, libraries, art centers, and rich student social life."
            }
        ]
    },
    "topkapi-university": {
        slug: "topkapi-university",
        name: "Istanbul Topkapi University",
        fullName: "Istanbul Topkapi University Admissions",
        location: "Istanbul, Turkey",
        description: "Offering exceptionally affordable tuition fees and practical academy structures in Architecture, Gastronomy, and Software. A perfect budget-friendly university in Istanbul.",
        tags: ["Extremely Affordable", "Practical Academy Models", "Budget-Friendly Istanbul"],
        checklist: [
            "O-Level / Matric Certificate & Transcript",
            "A-Level / Intermediate Certificate & Transcript",
            "Valid International Passport Copy",
            "Digital Personal Photograph (White Background)",
            "Student active Email & Mother's Name",
            "High School Medium of Instruction Certificate"
        ],
        tuitionRange: "$1,800 - $3,200 / year",
        scholarshipDetails: "Highly competitive flat-rate tuition structures and automatic Lisan.pk affiliate scholarship waivers up to 50%, making it the most affordable high-quality university option in Istanbul.",
        popularPrograms: [
            "Architecture (Bachelors - English)",
            "Software Engineering (Bachelors - English)",
            "Gastronomy & Culinary Arts (Bachelors)",
            "Interior Architecture & Environmental Design (Bachelors)",
            "Business Administration (Bachelors/Masters)",
            "Computer Programming (Associate Degree - 2 Years)"
        ],
        intakeDates: "Fall application cycle runs from April to October. Late applications are accommodated through direct channel authorization until late October.",
        portalUrl: "https://www.topkapi.edu.tr/en",
        bodyContent: `Istanbul Topkapi University is recognized as one of the most cost-effective yet premium private universities in Turkey. Topkapi University focuses heavily on producing self-employed entrepreneurs, skilled digital professionals, and creative artists.

For Pakistani students seeking a premium European education on a limited budget, Topkapi University is the ultimate option. With tuition fees starting as low as $1,800 per year, it is often more affordable than many local private universities in Pakistan, while offering the invaluable benefit of an international degree and life in Istanbul.

**Extremely Low Tuition Barrier**

One of Topkapi University's main missions is to make quality higher education globally accessible. Programs in high-demand sectors like Software Engineering, Architecture, and Gastronomy are offered at extremely reasonable tuition ranges. Lisan.pk provides exclusive access to pre-negotiated budget packages where you receive an official 50% discount registered directly within your application invoice.

**Gastronomy and Architecture Success Academies**

Topkapi is famous for its practical success academies. The Gastronomy & Culinary Arts department, for instance, features state-of-the-art kitchens and restaurants where students study alongside professional international chefs. Similarly, the Architecture and Interior Design tracks are structured around practical studios, letting students build tangible design portfolios.

**On-Ground Compliance at Yozgat Bozok Technopark**

Lisan.pk's unique presence in Yozgat Bozok Technopark means your admission is backed by a legitimate Turkish registered brand. We do not disappear after you arrive. Our Yozgat headquarters coordinates directly with the Topkapi International Relations Office in Istanbul to verify student payments, facilitate official course enrollments, and help resolve any administrative or residency visa issues immediately.`,
        faqs: [
            {
                q: "What is the minimum percentage required for Topkapi University?",
                a: "Topkapi University maintains a student-friendly eligibility threshold. Pakistani applicants with a minimum of 50% marks in their Intermediate (Pre-Engineering, Pre-Medical, ICS, I.Com, or Humanities) or equivalent O/A levels are guaranteed admission when applying through Lisan.pk."
            },
            {
                q: "What is the annual cost of studying at Topkapi University?",
                a: "Annual tuition fees for most English-taught undergraduate degrees (such as Software Engineering or Architecture) start at approximately $1,800 to $3,200 per year. This makes Topkapi University one of the most budget-friendly international universities in Istanbul."
            },
            {
                q: "Is Topkapi University degree accepted in Pakistan?",
                a: "Yes. Istanbul Topkapi University is fully recognized by the Higher Education Council of Turkey (YÖK) and listed in the UNESCO World Higher Education Database. Upon graduation, your degree is fully eligible for HEC attestation and equivalence in Pakistan."
            },
            {
                q: "How does Lisan.pk's on-ground support help students at Topkapi?",
                a: "We assist with your initial flight booking, provide airport pickup in Istanbul, assist with finding affordable student hostels or shared apartments, complete your physical enrollment on campus, and handle all your state health insurance and residence permit paperwork."
            }
        ]
    }
};
