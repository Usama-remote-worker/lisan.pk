const { PrismaClient } = require('@prisma/client')
const { hash } = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding database...')
    const password = await hash('admin123', 12)
    const user = await prisma.user.upsert({
        where: { email: 'admin@lisan.pk' },
        update: {},
        create: {
            email: 'admin@lisan.pk',
            name: 'Admin User',
            password,
        },
    })
    console.log({ user })

    // Seed Blog Posts
    const posts = [
        {
            slug: "understanding-attestation",
            title_en: "Understanding the Document Attestation Process in Pakistan",
            excerpt_en: "A comprehensive guide to getting your educational and personal documents attested for use in Saudi Arabia and other countries.",
            content_en: `
                <h2>Document Attestation in Pakistan</h2>
                <p>Document attestation is a crucial step for anyone planning to travel abroad for work, study, or family visa purposes. In Pakistan, the process involves verification from multiple authorities depending on the type of document.</p>
                <h3>Key Authorities Involved:</h3>
                <ul>
                    <li><strong>HEC (Higher Education Commission):</strong> For all educational degrees and transcripts.</li>
                    <li><strong>MOFA (Ministry of Foreign Affairs):</strong> The final overriding authority in Pakistan for external affairs.</li>
                    <li><strong>IBCC (Inter Board Committee of Chairmen):</strong> For intermediate and matriculation certificates.</li>
                    <li><strong>Relevant Embassies:</strong> The embassy of the destination country (e.g., Saudi Embassy, UAE Embassy).</li>
                </ul>
                <p>The process can be time-consuming and complex. It is highly recommended to use professional services to avoid rejection due to minor errors.</p>
            `,
            published: true,
            mainImage: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop"
        },
        {
            slug: "how-to-attest-degrees-ksa",
            title_en: "How to Attest Degrees for Saudi Arabia (KSA)",
            excerpt_en: "A complete step-by-step guide to attesting your educational documents for Saudi work visas. Learn about HEC, MOFA, and Embassy requirements.",
            content_en: `
                <h2>Degree Attestation for Saudi Arabia</h2>
                <p>Saudi Arabia has strict requirements for degree attestation. Whether you are applying for a work visa or bringing your family, your educational documents must be verified.</p>
                <h3>Steps for Attestation:</h3>
                <ol>
                    <li>Verify degree from the university.</li>
                    <li>Attest from HEC (Higher Education Commission).</li>
                    <li>Attest from MOFA (Ministry of Foreign Affairs).</li>
                    <li>Translation into Arabic (if required).</li>
                    <li>Attestation from the Saudi Cultural Mission and Saudi Embassy.</li>
                </ol>
                <p>Lisan.pk specializes in handling this entire workflow, ensuring your documents are ready for visa processing without delays.</p>
            `,
            published: true,
            mainImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop"
        },
        {
            slug: "translation-requirements-family-visa",
            title_en: "Translation Requirements for Family Visas",
            excerpt_en: "Which documents need translation for bringing your family to the Gulf? We explain everything you need to know about marriage and birth certificate translation.",
            content_en: `
                <h2>Family Visa Document Translation</h2>
                <p>Bringing your family to Gulf countries like UAE or Saudi Arabia requires accurate translation of personal documents.</p>
                <h3>Required Documents:</h3>
                <ul>
                    <li><strong>Marriage Certificate (Nikah Nama):</strong> Must be translated into Arabic/English.</li>
                    <li><strong>Birth Certificates:</strong> For all children, translated and attested.</li>
                    <li><strong>FRC (Family Registration Certificate):</strong> Often required for proof of kinship.</li>
                </ul>
                <p>Ensure all translations are done by a certified translator to be accepted by immigration authorities.</p>
            `,
            published: true,
            mainImage: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop"
        }
    ]

    for (const post of posts) {
        await prisma.blogPost.upsert({
            where: { slug: post.slug },
            update: {},
            create: post
        })
    }
    console.log('Seeded blog posts')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
