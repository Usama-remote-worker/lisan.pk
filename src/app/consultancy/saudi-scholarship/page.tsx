import { Metadata } from "next"
import ScholarshipPageClient from "@/components/scholarship/ScholarshipPageClient"

export const metadata: Metadata = {
    title: "Saudi Scholarship for Pakistani Students 2026 | Fully Funded Guide",
    description: "Complete guide on Saudi scholarship for Pakistani students 2026-2027. Learn about eligibility, HEC recognized universities, stipends, and the student visa process.",
    alternates: {
        canonical: "https://www.lisan.pk/consultancy/saudi-scholarship",
    },
}

export default function SaudiScholarshipPage() {
    return <ScholarshipPageClient />
}
