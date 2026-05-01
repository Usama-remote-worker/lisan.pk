import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageHeroProps {
    title: string
    description?: string
    breadcrumbs?: { label: string; href?: string }[]
    className?: string
    badge?: string
}

export function PageHero({ title, description, breadcrumbs, className, badge }: PageHeroProps) {
    return (
        <section className={`relative bg-white py-16 lg:py-24 overflow-hidden border-b border-slate-100 ${className}`}>

            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="max-w-5xl mx-auto">
                    {/* Badge / Breadcrumbs */}
                    {(badge || breadcrumbs) && (
                        <div className="inline-flex items-center justify-center mb-8 animate-fade-in-up">
                            {badge ? (
                                <div className="inline-flex items-center rounded-full border border-emerald-100 bg-emerald-50/50 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-emerald-800 shadow-sm">
                                    <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-600 mr-2 animate-pulse"></span>
                                    {badge}
                                </div>
                            ) : (
                                breadcrumbs && (
                                    <nav className="flex items-center space-x-3 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                                        <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
                                        {breadcrumbs.map((crumb, index) => (
                                            <div key={index} className="flex items-center">
                                                <span className="mx-2 text-slate-200">/</span>
                                                {crumb.href ? (
                                                    <Link href={crumb.href} className="hover:text-emerald-600 transition-colors">
                                                        {crumb.label}
                                                    </Link>
                                                ) : (
                                                    <span className="text-emerald-700">{crumb.label}</span>
                                                )}
                                            </div>
                                        ))}
                                    </nav>
                                )
                            )}
                        </div>
                    )}

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-8 tracking-tight animate-fade-in-up animate-delay-100 font-serif leading-[1.1]">
                        {title}
                    </h1>

                    {description && (
                        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200 font-medium">
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}

