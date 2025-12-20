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
        <section className={`relative bg-slate-50 py-20 lg:py-28 overflow-hidden ${className}`}>
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5"></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/50"></div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <div className="max-w-4xl mx-auto">
                    {/* Badge */}
                    {(badge || breadcrumbs) && (
                        <div className="inline-flex items-center justify-center mb-6 animate-fade-in-up">
                            {badge ? (
                                <div className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-800 shadow-sm">
                                    <span className="flex h-2 w-2 rounded-full bg-emerald-600 mr-2 animate-pulse"></span>
                                    {badge}
                                </div>
                            ) : (
                                breadcrumbs && (
                                    <nav className="flex items-center space-x-2 text-sm text-slate-500 bg-white/50 backdrop-blur-sm px-4 py-1.5 rounded-full border border-slate-200/50">
                                        <Link href="/" className="hover:text-emerald-600 transition-colors">Home</Link>
                                        {breadcrumbs.map((crumb, index) => (
                                            <div key={index} className="flex items-center">
                                                <ChevronRight className="h-3 w-3 mx-1 text-slate-400" />
                                                {crumb.href ? (
                                                    <Link href={crumb.href} className="hover:text-emerald-600 transition-colors">
                                                        {crumb.label}
                                                    </Link>
                                                ) : (
                                                    <span className="text-emerald-600 font-medium">{crumb.label}</span>
                                                )}
                                            </div>
                                        ))}
                                    </nav>
                                )
                            )}
                        </div>
                    )}

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight animate-fade-in-up animate-delay-100">
                        {title}
                    </h1>

                    {description && (
                        <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200">
                            {description}
                        </p>
                    )}
                </div>
            </div>

            {/* Decorative gradient line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent"></div>
        </section>
    )
}
