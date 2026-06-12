"use client"

import { useState, useMemo } from "react"
import Link from "next/link"

interface Post {
    slug: string
    title: string
    date: string
    summary: string
    category: string
    author: string
    readingTime?: string
    published?: boolean
}

// Normalise fragmented category names → clean canonical groups
function normaliseCategory(raw: string): string {
    const r = (raw ?? "").trim().toLowerCase()
    if (r.includes("scholarship update")) return "Scholarship Updates"
    if (r.includes("scholarship")) return "Scholarship Guides"
    if (r.includes("education")) return "Education"
    if (r.includes("visa") || r.includes("immigration")) return "Visa & Immigration"
    if (r.includes("translation")) return "Translation Services"
    return raw.trim() || "General"
}

// Category display metadata
const CATEGORY_META: Record<string, { icon: string }> = {
    "All Posts":            { icon: "≡" },
    "Translation Services": { icon: "T" },
    "Scholarship Guides":   { icon: "◆" },
    "Scholarship Updates":  { icon: "SA" },
    "Education":            { icon: "E" },
    "Visa & Immigration":   { icon: "V" },
    "General":              { icon: "G" },
}

function sortPosts(posts: Post[], order: "newest" | "oldest"): Post[] {
    return [...posts].sort((a, b) => {
        const diff = new Date(b.date).getTime() - new Date(a.date).getTime()
        return order === "newest" ? diff : -diff
    })
}

export function BlogClient({ posts }: { posts: Post[] }) {
    const [activeCategory, setActiveCategory] = useState("All Posts")
    const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest")
    const [searchQuery, setSearchQuery] = useState("")

    // Build category list dynamically from real posts
    const categories = useMemo(() => {
        const counts: Record<string, number> = {}
        posts.forEach((p) => {
            const cat = normaliseCategory(p.category)
            counts[cat] = (counts[cat] ?? 0) + 1
        })
        return [
            { label: "All Posts", count: posts.length },
            ...Object.entries(counts)
                .sort((a, b) => b[1] - a[1])
                .map(([label, count]) => ({ label, count })),
        ]
    }, [posts])

    // Filter + sort + search
    const visiblePosts = useMemo(() => {
        let filtered = posts
        if (activeCategory !== "All Posts") {
            filtered = filtered.filter(
                (p) => normaliseCategory(p.category) === activeCategory
            )
        }
        if (searchQuery.trim()) {
            const q = searchQuery.toLowerCase()
            filtered = filtered.filter(
                (p) =>
                    p.title.toLowerCase().includes(q) ||
                    (p.summary ?? "").toLowerCase().includes(q)
            )
        }
        return sortPosts(filtered, sortOrder)
    }, [posts, activeCategory, sortOrder, searchQuery])

    const clearFilters = () => { setActiveCategory("All Posts"); setSearchQuery("") }

    return (
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* ── Sidebar ── */}
            <aside className="lg:w-60 flex-shrink-0">
                <div className="sticky top-28 space-y-8">
                    {/* Search */}
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                            Search Articles
                        </label>
                        <input
                            type="search"
                            placeholder="e.g. nikah nama, UKVI…"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value)
                                setActiveCategory("All Posts")
                            }}
                            className="w-full text-sm bg-white border border-slate-200 rounded-lg px-4 py-2.5 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        />
                    </div>

                    {/* Category Filter */}
                    <div>
                        <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                            Topic Index
                        </h3>
                        <nav className="flex flex-col space-y-1">
                            {categories.map(({ label, count }) => {
                                const isActive = activeCategory === label
                                const icon = CATEGORY_META[label]?.icon ?? "📄"
                                return (
                                    <button
                                        key={label}
                                        onClick={() => { setActiveCategory(label); setSearchQuery("") }}
                                        className={`group flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium transition-all text-left ${
                                            isActive
                                                ? "bg-emerald-50 text-emerald-800 border-l-2 border-emerald-600 font-semibold"
                                                : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                                        }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            {label}
                                        </span>
                                        <span
                                            className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                                                isActive
                                                    ? "bg-emerald-200 text-emerald-900"
                                                    : "bg-slate-200 text-slate-500 group-hover:bg-slate-300"
                                            }`}
                                        >
                                            {count}
                                        </span>
                                    </button>
                                )
                            })}
                        </nav>
                    </div>

                    {/* Sort */}
                    <div>
                        <label className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 block">
                            Sort By
                        </label>
                        <select
                            value={sortOrder}
                            onChange={(e) => setSortOrder(e.target.value as "newest" | "oldest")}
                            className="w-full text-sm bg-white border border-slate-200 rounded-lg px-3 py-2.5 text-slate-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                        </select>
                    </div>

                    {/* CTA Block */}
                    <div className="p-5 bg-emerald-900 text-white rounded-2xl shadow-xl border border-emerald-800">
                        <h4 className="text-sm font-bold mb-2">Need Help Now?</h4>
                        <p className="text-xs text-emerald-200 mb-4 leading-relaxed">
                            24/7 support for urgent translation & attestation requests.
                        </p>
                        <a
                            href="https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20urgent%20translation%20help."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-bold bg-white text-emerald-900 px-4 py-2 rounded-lg hover:bg-emerald-50 transition-colors inline-block w-full text-center"
                        >
                            WhatsApp Us Now →
                        </a>
                    </div>
                </div>
            </aside>

            {/* ── Main Post List ── */}
            <div className="flex-1 min-w-0">
                {/* Filter status bar */}
                <div className="flex items-center gap-3 flex-wrap mb-8">
                    <span className="text-sm text-slate-500">
                        Showing{" "}
                        <strong className="text-slate-800">{visiblePosts.length}</strong>{" "}
                        article{visiblePosts.length !== 1 ? "s" : ""}
                        {activeCategory !== "All Posts" && (
                            <>
                                {" "}in{" "}
                                <span className="text-emerald-700 font-semibold">
                                    {activeCategory}
                                </span>
                            </>
                        )}
                        {searchQuery && (
                            <>
                                {" "}matching{" "}
                                <span className="text-emerald-700 font-semibold">
                                    "{searchQuery}"
                                </span>
                            </>
                        )}
                    </span>
                    {(activeCategory !== "All Posts" || searchQuery) && (
                        <button
                            onClick={clearFilters}
                            className="text-xs font-bold text-slate-400 hover:text-red-500 transition-colors underline"
                        >
                            Clear filter ✕
                        </button>
                    )}
                </div>

                {/* No results */}
                {visiblePosts.length === 0 && (
                    <div className="py-20 text-center">
                        <div className="text-5xl mb-4 text-slate-300 font-serif">∅</div>
                        <h3 className="text-xl font-bold text-slate-800 mb-2">No articles found</h3>
                        <p className="text-slate-500 mb-6">Try a different category or search term.</p>
                        <button
                            onClick={clearFilters}
                            className="text-sm font-bold text-emerald-700 underline hover:text-emerald-800"
                        >
                            View all articles
                        </button>
                    </div>
                )}

                {/* Post list */}
                <div className="divide-y divide-slate-100">
                    {visiblePosts.map((post) => {
                        const cat = normaliseCategory(post.category)
                        const icon = CATEGORY_META[cat]?.icon ?? "📄"
                        return (
                            <article key={post.slug} className="group py-10 first:pt-0">
                                <div className="flex flex-col gap-3">
                                    {/* Meta */}
                                    <div className="flex items-center gap-3 flex-wrap">
                                        <button
                                            onClick={() => { setActiveCategory(cat); setSearchQuery("") }}
                                            className="inline-flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 hover:bg-emerald-100 transition-colors"
                                        >
                                            {cat}
                                        </button>
                                        <span className="text-[11px] text-slate-400">
                                            {new Date(post.date).toLocaleDateString("en-GB", {
                                                day: "numeric",
                                                month: "short",
                                                year: "numeric",
                                            })}
                                        </span>
                                        {post.readingTime && (
                                            <>
                                                <span className="text-slate-200">·</span>
                                                <span className="text-[11px] text-slate-400">
                                                    {post.readingTime} read
                                                </span>
                                            </>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug">
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h2>

                                    {/* Summary */}
                                    {post.summary && (
                                        <p className="text-slate-500 leading-relaxed text-[15px] max-w-3xl line-clamp-2">
                                            {post.summary}
                                        </p>
                                    )}

                                    {/* Footer */}
                                    <div className="flex items-center gap-6 mt-1">
                                        {post.author && (
                                            <span className="text-sm text-slate-400 italic">
                                                By {post.author}
                                            </span>
                                        )}
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="text-xs font-bold text-emerald-700 hover:text-emerald-800 uppercase tracking-widest hover:underline transition-colors"
                                        >
                                            Read Article →
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
