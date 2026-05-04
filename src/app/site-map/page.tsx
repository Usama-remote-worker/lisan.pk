import Link from 'next/link'
import { getSortedPostsData } from '@/lib/blog'
import { cities, services } from '@/data/location-services'
import { universities } from '@/data/scholarship-universities'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sitemap - All Services & Locations',
    description: 'Complete directory of Lisan.pk services, locations, and scholarship guides across Pakistan.',
}

export default async function SitemapPage() {
    const posts = await getSortedPostsData()

    const mainLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Blog & Guides', href: '/blog' },
        { name: 'Contact Support', href: '/contact' },
        { name: 'Saudi Scholarship Consultancy', href: '/consultancy/saudi-scholarship' },
    ]

    const serviceLinks = [
        { name: 'Translation Services', href: '/services/translation' },
        { name: 'MOFA Attestation', href: '/services/attestation' },
        { name: 'Document Legalization', href: '/services/document' },
        { name: 'Nikah Nama Translation', href: '/services/translation/nikah-nama-marriage-certificate' },
        { name: 'Birth Certificate Translation', href: '/services/translation/birth-certificate-translation' },
        { name: 'Academic Degree/HEC Translation', href: '/services/translation/academic-degree-transcript' },
        { name: 'Police Character Certificate', href: '/services/translation/police-character-certificate' },
    ]

    return (
        <main className="min-h-screen bg-slate-50 py-16 pt-32">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <header className="mb-12">
                        <h1 className="text-4xl font-bold text-slate-900 mb-4 font-outfit">Sitemap</h1>
                        <p className="text-slate-600">A comprehensive directory of all pages on Lisan.pk</p>
                    </header>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {/* Main & Company */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                                Company Pages
                            </h2>
                            <ul className="space-y-3">
                                {mainLinks.map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-slate-600 hover:text-emerald-600 transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Services */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                                Core Services
                            </h2>
                            <ul className="space-y-3">
                                {serviceLinks.map(link => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="text-slate-600 hover:text-emerald-600 transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Scholarship Universities */}
                        <section>
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                                Scholarship Guides
                            </h2>
                            <ul className="space-y-3">
                                {Object.entries(universities).map(([slug, uni]: [string, any]) => (
                                    <li key={slug}>
                                        <Link href={`/scholarships/${slug}`} className="text-slate-600 hover:text-emerald-600 transition-colors">
                                            {uni.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Blog Posts */}
                        <section className="lg:col-span-2">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                                Latest Blog Posts
                            </h2>
                            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-3">
                                {posts.map(post => (
                                    <li key={post.slug}>
                                        <Link href={`/blog/${post.slug}`} className="text-slate-600 hover:text-emerald-600 transition-colors block line-clamp-1">
                                            {post.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Locations */}
                        <section className="lg:col-span-3 border-t border-slate-200 pt-12 mt-4">
                            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                                <span className="h-2 w-2 bg-emerald-500 rounded-full"></span>
                                Service Locations in Pakistan
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                                {Object.values(cities).map(city => (
                                    <div key={city.name} className="space-y-2">
                                        <Link 
                                            href={`/locations/${city.name.toLowerCase()}`} 
                                            className="font-semibold text-slate-800 hover:text-emerald-600 block"
                                        >
                                            {city.name}
                                        </Link>
                                        <ul className="space-y-1">
                                            {Object.keys(services).slice(0, 2).map(serviceKey => (
                                                <li key={serviceKey}>
                                                    <Link 
                                                        href={`/locations/${city.name.toLowerCase()}/${serviceKey}`}
                                                        className="text-[10px] text-slate-500 hover:text-emerald-500"
                                                    >
                                                        {services[serviceKey].title.replace(' Translation', '')}
                                                    </Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    )
}
