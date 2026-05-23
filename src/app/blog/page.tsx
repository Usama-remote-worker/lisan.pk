import { getSortedPostsData } from "@/lib/blog"
import { Metadata } from "next"
import { BlogClient } from "./BlogClient"

export const metadata: Metadata = {
    title: "Lisan.pk Blog: Arabic Translation & Saudi Attestation Guides",
    description:
        "Expert guides on document translation, Saudi scholarship requirements, embassy attestation, and UK visa translation. Stay updated with Lisan.pk.",
    alternates: { canonical: "/blog" },
}

export default async function BlogPage() {
    const posts = await getSortedPostsData()

    return (
        <main className="min-h-screen bg-[#f7f9fb] pt-24 pb-20 px-4 md:px-12 max-w-[1280px] mx-auto font-sans text-slate-900">
            <header className="mb-12 border-b border-slate-200 pb-8">
                <h1 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-3">
                    Latest Insights
                </h1>
                <p className="text-slate-500 max-w-2xl text-lg">
                    Expert guides on certified translation, Saudi scholarship deadlines,
                    embassy attestation, and visa documentation.
                </p>
            </header>

            <BlogClient posts={posts} />
        </main>
    )
}
