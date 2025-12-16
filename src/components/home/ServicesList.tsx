const services = [
    "Arabic to English Translation",
    "English to Arabic Translation",
    "Urdu to English Translation",
    "Saudi Embassy Attestation",
    "UAE Embassy Attestation",
    "Qatar Embassy Attestation",
    "MOFA Attestation",
    "HEC Degree Attestation",
]

export function ServicesList() {
    return (
        <section className="py-20 bg-[#0B0F19] text-white">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-12 uppercase tracking-wide">Translation Services</h2>
                <div className="space-y-6">
                    {services.map((service) => (
                        <div key={service} className="text-xl text-slate-300 hover:text-white transition-colors cursor-pointer">
                            {service}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
