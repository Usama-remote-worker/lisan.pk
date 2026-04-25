import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Expert Arabic Translation & Embassy Attestation Services | Lisan.pk",
    description: "Verified Arabic Translation, MOFA Attestation, and HEC Degree Verification services. Trusted by 100k+ clients for Saudi Embassy & Gulf document legalization.",
    alternates: {
        canonical: '/services',
    }
}

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
