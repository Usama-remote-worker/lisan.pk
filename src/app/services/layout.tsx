import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Our Services | Expert Arabic Translation & Attestation | Lisan.pk",
    description: "One-stop solution for Arabic Translation, Embassy Attestation (MOFA, HEC), and Saudi Scholarship consultancy. Fast, accurate, and trusted nationwide.",
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
