export interface UniversityData {
    slug: string;
    name: string;
    fullName: string;
    location: string;
    description: string;
    tags: string[];
    checklist: string[];
    portalUrl: string;
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
            "Matric & Inter Certificates (Arabic Translation)",
            "Bachelor Degree (for Masters applicants)",
            "Two Recommendation Letters",
            "Medical Fitness Certificate",
            "Valid Passport Copy"
        ],
        portalUrl: "https://admission.ksu.edu.sa/"
    },
    "king-abdulaziz-university": {
        slug: "king-abdulaziz-university",
        name: "King Abdulaziz University",
        fullName: "King Abdulaziz University (KAU) Scholarships",
        location: "Jeddah, Saudi Arabia",
        description: "Ranked #1 in the Arab world, KAU provides diverse scholarship opportunities in Arts, Sciences, and Marine research.",
        tags: ["Research", "Arts & Sciences", "Jeddah"],
        checklist: [
            "Certified Academic Transcript",
            "Statement of Purpose (SOP)",
            "English Proficiency (for some programs)",
            "Birth Certificate / B-Form",
            "HEC Attested Degrees"
        ],
        portalUrl: "https://scholarships.kau.edu.sa/"
    },
    "islamic-university-of-madinah": {
        slug: "islamic-university-of-madinah",
        name: "Islamic University of Madinah",
        fullName: "Islamic University of Madinah Scholarships",
        location: "Madinah, Saudi Arabia",
        description: "Specializing in Shariah, Quranic Studies, and Arabic Language, this university is a historic center for religious education.",
        tags: ["Theology", "Arabic Literature", "Religious Studies"],
        checklist: [
            "Urgent Arabic Translation Pack",
            "Police Clearance Certificate",
            "Character Certificate from Mosque/Institute",
            "Personal Photos (White Background)",
            "Nikkah Nama (if applying with family)"
        ],
        portalUrl: "https://admission.iu.edu.sa/"
    }
};
