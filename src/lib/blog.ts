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
    },
    {
        id: "4",
        slug: "saudi-scholarship-deadlines-2025",
        title: "Saudi Scholarship Deadlines 2025: Don't Miss Out!",
        date: "2024-12-25",
        summary: "The application season for fully funded Saudi scholarships is approaching. Check the expected deadlines for KSU, KAU, and Islamic University Madinah.",
        content: `
            <p>Securing a fully funded scholarship in Saudi Arabia is a dream for many students. With benefits like free tuition, monthly stipends, and accommodation, competition is fierce.</p>
            <h3>Key Deadlines to Watch</h3>
            <p>While dates can vary, here are the expected windows for the 2025 intake:</p>
            <ul>
                <li><strong>King Saud University (KSU):</strong> Typically opens in January/February.</li>
                <li><strong>Islamic University of Madinah:</strong> Often accepts applications year-round or has multiple windows.</li>
                <li><strong>King Abdulaziz University (KAU):</strong> Look out for announcements in late 2024 or early 2025.</li>
            </ul>
            <p>Preparation is key. Ensure your documents are translated and attested well in advance with Lisan.pk to avoid last-minute panic.</p>
        `,
        image: "https://images.unsplash.com/photo-1590076215667-87effd4d03da?q=80&w=800&auto=format&fit=crop",
        tags: ["Scholarships", "Saudi Arabia", "Education"],
        published: true
    },
    {
        id: "5",
        slug: "benefits-learning-arabic-business",
        title: "Why Learning Arabic is a Game-Changer for Business",
        date: "2024-12-28",
        summary: "Expanding your business to the Middle East? Discover how Arabic language skills or professional translation can unlock lucrative opportunities.",
        content: `
            <p>The Middle East is a hub of economic activity. Whether you are in construction, tech, or trade, communicating effectively is your gateway to success.</p>
            <h3>Building Trust</h3>
            <p>Business in the Arab world is relationship-based. Speaking the language, or having high-quality localized materials, shows respect and commitment.</p>
            <h3>Legal Compliance</h3>
            <p>Contracts, tenders, and legal notices often require Arabic versions by law. Professional translation ensures you are compliant and protected.</p>
            <p>Don't let language barriers hold you back. Lisan.pk provides business-grade translation services to help you close deals with confidence.</p>
        `,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=800&auto=format&fit=crop",
        tags: ["Business", "Language Learning", "Arabic"],
        published: true
    },
    {
        id: "6",
        slug: "certified-vs-online-translation",
        title: "Certified Translation vs. Online Tools: What’s the Difference?",
        date: "2025-01-02",
        summary: "Thinking of using Google Translate for your official documents? Read this first to understand why certified human translation is non-negotiable for legal use.",
        content: `
            <p>In the age of AI, instant translation is everywhere. However, when it comes to legal, medical, or academic documents, accuracy is not enough—validity is key.</p>
            <h3>The Risks of Machine Translation</h3>
            <p>Online tools often miss context, cultural nuances, and specific legal terminology. A mistranslated birth certificate or affidavit can lead to visa rejections.</p>
            <h3>What is Certified Translation?</h3>
            <p>A certified translation comes with a signed statement attesting to the accuracy of the translation. It is recognized by government bodies, courts, and universities.</p>
            <p>At Lisan.pk, every document is handled by expert human translators and reviewed for 100% accuracy.</p>
        `,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
        tags: ["Translation", "Technology", "Legal"],
        published: true
    },
    {
        id: "7",
        slug: "mofa-attestation-guide",
        title: "The Critical Role of MOFA in International Travel",
        date: "2025-01-05",
        summary: "The Ministry of Foreign Affairs (MOFA) is the final hurdle in document attestation within Pakistan. Here's what you need to know to navigate it smoothly.",
        content: `
            <p>The Ministry of Foreign Affairs (MOFA) serves as the bridge between Pakistan's internal document verification and foreign acceptance.</p>
            <h3>What MOFA Verifies</h3>
            <p>MOFA does not verify the contents of your document; rather, it verifies the signatures of the countersigning authorities (like HEC or IBCC).</p>
            <h3>Common Rejection Reasons</h3>
            <ul>
                <li>Missing prior attestations (HEC/IBCC).</li>
                <li>Damaged or laminated documents.</li>
                <li>Name mismatches between ID card and documents.</li>
            </ul>
            <p>Avoid the long queues and potential rejections. Lisan.pk offers a streamlined MOFA attestation service to save you time and energy.</p>
        `,
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
        tags: ["MOFA", "Attestation", "Travel"],
        published: true
    },
    {
        id: "8",
        slug: "top-saudi-universities-2025",
        title: "Top 5 Saudi Universities for International Students in 2025",
        date: "2025-01-10",
        summary: "Looking to study in the Kingdom? We rank the top universities based on scholarship availability, research output, and international student support.",
        content: `
            <p>Saudi Arabia is rapidly becoming a destination for higher education, thanks to its Vision 2030 initiative.</p>
            <h3>1. King Abdulaziz University (KAU)</h3>
            <p>Consistently ranked as the top university in the Arab world, known for its engineering and marine sciences programs.</p>
            <h3>2. King Fahd University of Petroleum & Minerals (KFUPM)</h3>
            <p>A global leader in energy and engineering, offering highly competitive scholarships.</p>
            <h3>3. King Saud University (KSU)</h3>
            <p>Located in the capital, Riyadh, it offers a wide range of programs from humanities to medicine.</p>
            <p>Applying to these prestigious institutions requires precise documentation. Let Lisan.pk assist you with translation and application guidance.</p>
        `,
        image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=800&auto=format&fit=crop",
        tags: ["Universities", "Saudi Arabia", "Education"],
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


