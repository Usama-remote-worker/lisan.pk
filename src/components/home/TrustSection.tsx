export function TrustSection() {
    return (
        <section className="border-y border-slate-200 bg-white py-12">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-8">
                    Trusted by 100,000+ Clients & Major Institutions
                </p>
                <div className="grid grid-cols-2 gap-8 md:grid-cols-5 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {/* Placeholders for logos - in a real app these would be Image components */}
                    <div className="flex items-center justify-center h-12 font-bold text-slate-400 text-xl border border-dashed border-slate-200 rounded">UAE Embassy</div>
                    <div className="flex items-center justify-center h-12 font-bold text-slate-400 text-xl border border-dashed border-slate-200 rounded">Saudi Embassy</div>
                    <div className="flex items-center justify-center h-12 font-bold text-slate-400 text-xl border border-dashed border-slate-200 rounded">HEC Pakistan</div>
                    <div className="flex items-center justify-center h-12 font-bold text-slate-400 text-xl border border-dashed border-slate-200 rounded">MOFA</div>
                    <div className="flex items-center justify-center h-12 font-bold text-slate-400 text-xl border border-dashed border-slate-200 rounded">IBCC</div>
                </div>
            </div>
        </section>
    )
}
