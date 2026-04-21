import { getPostData, getSortedPostsData } from "@/lib/blog"
import { PageHero } from "@/components/ui/PageHeader"
import { notFound } from "next/navigation"
import { Metadata } from "next"

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = await getPostData(slug)
    if (!post) return {}

    return {
        title: `${post.title} | Lisan.pk`,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            images: post.image ? [post.image] : [],
            type: 'article',
            publishedTime: post.date,
        }
    }
}

export async function generateStaticParams() {
    const posts = await getSortedPostsData()
    return posts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = await getPostData(slug)

    if (!post) {
        notFound()
    }

    return (
        <main className="min-h-screen bg-white">
            <PageHero
                title={post.title}
                breadcrumbs={[
                    { label: "Blog", href: "/blog" },
                    { label: post.title }
                ]}
                className="!py-16 lg:!py-20"
            />

            <article className="py-16 container mx-auto px-4 max-w-3xl">
                <div className="flex items-center gap-4 text-slate-500 mb-10 text-sm">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}</time>
                    <span>•</span>
                    <div className="flex gap-2">
                        {post.tags?.map(tag => (
                            <span key={tag} className="text-emerald-600 font-medium tracking-wide uppercase text-[11px]">#{tag}</span>
                        ))}
                    </div>
                </div>

                {post.image && (
                    <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 aspect-[16/9] relative">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="object-cover w-full h-full"
                        />
                    </div>
                )}

                <div 
                    className="prose prose-slate prose-lg max-w-none 
                    prose-headings:text-slate-900 prose-headings:font-bold
                    prose-p:text-slate-600 prose-p:leading-relaxed
                    prose-strong:text-slate-900 prose-a:text-emerald-600 hover:prose-a:text-emerald-700
                    prose-img:rounded-xl"
                    dangerouslySetInnerHTML={{ __html: post.content }} 
                />
            </article>
        </main>
    )
}
