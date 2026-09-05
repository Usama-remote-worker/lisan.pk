import { Metadata } from "next"
import { ProgramFinderClient } from "@/components/scholarship/ProgramFinderClient"

export const metadata: Metadata = {
  title: "Saudi Fully Funded Scholarship Program Finder 2026/27",
  description: "Search verified fully funded Bachelor’s, Master’s and PhD programs in Saudi Arabia by university, field, language, gender, applicant type and academic background match.",
  alternates: {
    canonical: "https://www.lisan.pk/saudi-scholarships/program-finder",
  },
  openGraph: {
    title: "Saudi Fully Funded Scholarship Program Finder 2026/27 | Lisan.pk",
    description: "Search verified fully funded Saudi scholarship opportunities for Pakistani and international students.",
    url: "https://www.lisan.pk/saudi-scholarships/program-finder",
    siteName: "Lisan.pk",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function ProgramFinderPage() {
  return <ProgramFinderClient />
}
