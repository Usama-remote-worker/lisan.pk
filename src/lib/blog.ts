// import { prisma } from "@/lib/prisma"
import { formatDate } from "@/lib/utils"

export interface BlogPost {
    id: string;
    slug: string;
    title: string;
    date: string;
    summary: string;
    content: string;
    image?: string;
    tags?: string[];
    published: boolean;
}

const posts: BlogPost[] = [
    {
        id: "1",
        slug: "understanding-attestation",
        title: "Understanding the Document Attestation Process in Pakistan",
        date: "2024-12-08",
        summary: "A comprehensive guide to getting your educational and personal documents attested for use in Saudi Arabia and other countries.",
        content: `
            <p>Document attestation is a crucial step for anyone planning to travel, study, or work abroad. In Pakistan, this process involves verification by multiple authorities including the Higher Education Commission (HEC), Ministry of Foreign Affairs (MOFA), and the relevant embassy.</p>
            <h3>Why Attestation is Necessary</h3>
            <p>Foreign governments and organizations need assurance that your documents are genuine. Attestation provides this legal validation.</p>
            <h3>Steps for Attestation</h3>
            <ol>
                <li><strong>HEC Attestation:</strong> Required for all educational degrees and transcripts.</li>
                <li><strong>MOFA Attestation:</strong> The final stamp from the Ministry of Foreign Affairs in Pakistan.</li>
                <li><strong>Embassy Attestation:</strong> Verification by the embassy of the country you are visiting (e.g., Saudi Cultural Mission or Saudi Embassy).</li>
            </ol>
            <p>Lisan.pk simplifies this complex process, handling all steps on your behalf to ensure you meet all requirements without the hassle.</p>
        `,
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
        tags: ["Attestation", "Guide"],
        published: true
    },
    {
        id: "2",
        slug: "how-to-attest-degrees-ksa",
        title: "How to Attest Degrees for Saudi Arabia (KSA)",
        date: "2024-12-12",
        summary: "A complete step-by-step guide to attesting your educational documents for Saudi work visas. Learn about HEC, MOFA, and Embassy requirements.",
        content: `
            <p>Saudi Arabia has specific and strict requirements for degree attestation, especially for work visas. Missing a single stamp can lead to visa rejection.</p>
            <h3>The Saudi Culture Mission (SACM)</h3>
            <p>Before the Saudi Embassy stamps your degree, it must often be verified by the Saudi Culture Mission. This requires:</p>
            <ul>
                <li>Original Degree and Transcripts verified by HEC and MOFA.</li>
                <li>University validation letter in a sealed envelope.</li>
                <li>Job offer letter attested by the Saudi Chamber of Commerce and MOFA Saudi Arabia.</li>
            </ul>
            <p>Our experts at Lisan.pk are well-versed in these specific requirements and can guide you through the maze of paperwork.</p>
        `,
        image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop",
        tags: ["Saudi Arabia", "Work Visa"],
        published: true
    },
    {
        id: "3",
        slug: "translation-requirements-family-visa",
        title: "Translation Requirements for Family Visas",
        date: "2024-11-15",
        summary: "Which documents need translation for bringing your family to the Gulf? We explain everything you need to know about marriage and birth certificate translation.",
        content: `
            <p>Bringing your family to the Gulf region often involves proving your relationship through legal documents like Marriage Registration Certificates (MRC) and Birth Certificates.</p>
            <h3>Language Requirements</h3>
            <p>Most Gulf countries require these documents to be translated into Arabic. The translation must be:</p>
            <ul>
                <li>Accurate and match the original exactly.</li>
                <li>Certified by a recognized translation agency.</li>
                <li>Often, the translation itself needs attestation by MOFA.</li>
            </ul>
            <p>We provide certified Arabic translations that are widely accepted for family visa applications across the GCC.</p>
        `,
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=800&auto=format&fit=crop",
        tags: ["Family Visa", "Translation"],
        published: true
    }
];

export async function getSortedPostsData(): Promise<BlogPost[]> {
    // Simulate database delay
    // await new Promise(resolve => setTimeout(resolve, 100));
    return posts.filter(post => post.published);
}

export async function getPostData(slug: string): Promise<BlogPost | null> {
    const post = posts.find(p => p.slug === slug);
    return post || null;
}


