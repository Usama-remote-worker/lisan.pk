export interface DocumentType {
    slug: string;
    name: string;
    description: string;
    purpose: string;
}

export const documents: DocumentType[] = [
    { slug: "nikahnama", name: "Nikahnama (Marriage Certificate)", description: "Certified translation of Nadra Marriage Registration Certificates (MRC) and manual Nikahnamas.", purpose: "Spouse visas, family immigration, and dual nationality." },
    { slug: "birth-certificate", name: "Birth Certificate", description: "Certified translation of Nadra computerized birth certificates (CRC) and hospital records.", purpose: "Immigration, passports, and school admissions abroad." },
    { slug: "passport", name: "Passport & ID", description: "Certified translation of CNIC, Smart Cards, and international passports.", purpose: "Visa processing, opening bank accounts, and corporate registration." },
    { slug: "degree", name: "Degree & Diploma", description: "Certified translation of university degrees, college diplomas, and academic certificates.", purpose: "Study abroad, HEC attestation, and skilled worker visas." },
    { slug: "transcript", name: "Academic Transcript", description: "Certified translation of university mark sheets, academic records, and matriculation results.", purpose: "WES evaluation, foreign university admissions, and scholarships." },
    { slug: "character-certificate", name: "Character Certificate", description: "Certified translation of Police Character Certificates and clearance reports.", purpose: "Permanent Residency (PR), work permits, and immigration." },
    { slug: "legal-document", name: "Legal Document", description: "Certified translation of court orders, FIRs, power of attorney, and legal affidavits.", purpose: "Court proceedings, embassy submission, and property disputes." },
    { slug: "visa", name: "Visa Documents", description: "Certified translation of all supporting documents required for foreign embassy visa processing.", purpose: "Schengen, US, UK, and Gulf visa applications." },
    { slug: "domicile", name: "Domicile Certificate", description: "Certified translation of provincial domicile and PRC certificates.", purpose: "Nationality procedures and official government records." },
    { slug: "death-certificate", name: "Death Certificate", description: "Certified translation of Nadra death certificates and hospital mortality records.", purpose: "Inheritance claims, insurance, and legal closures." },
    { slug: "medical-report", name: "Medical Report", description: "Certified translation of hospital discharge summaries, lab results, and vaccination records.", purpose: "Medical visas, insurance claims, and international treatments." },
    { slug: "bank-statement", name: "Bank Statement", description: "Certified translation of financial statements, audit reports, and tax returns (FBR).", purpose: "Business visas, investor visas, and proof of funds." },
    { slug: "driving-license", name: "Driving License", description: "Certified translation of Pakistani and international driving licenses.", purpose: "Converting licenses abroad and renting vehicles internationally." }
];
