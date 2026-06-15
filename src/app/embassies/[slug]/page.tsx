import { Metadata } from 'next'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { embassies } from "@/data/embassies"
import { notFound } from "next/navigation"


type Props = {
    params: { slug: string }
}

export function generateStaticParams() {
    return embassies.map((embassy) => ({
        slug: embassy.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const embassy = embassies.find(e => e.slug === params.slug);

    if (!embassy) return { title: 'Translation Services' };

    const titleStr = `${embassy.demonym} ${embassy.type === 'embassy' ? 'Embassy' : 'Consulate'} in ${embassy.city}, Pakistan`;

    return {
        title: `${titleStr} | Certified Translation Services`,
        description: `Need documents translated and attested for the ${titleStr}? We provide certified translation for visas, immigration, and legal use.`,
        alternates: {
            canonical: `https://www.lisan.pk/embassies/${params.slug}`,
        },
        robots: {
            index: false,
            follow: true,
        },
    }
}

export default function EmbassyPage({ params }: Props) {
    const embassy = embassies.find(e => e.slug === params.slug);

    if (!embassy) {
        notFound();
    }

    const isEmbassy = embassy.type === "embassy";
    const entityName = `${embassy.demonym} ${isEmbassy ? 'Embassy' : 'Consulate'}`;
    const countryName = embassy.country;
    const cityName = embassy.city;

    return (
        <main className="min-h-screen bg-[#fcfdfe] font-sans">
            <section className="relative bg-emerald-950 text-white pt-24 pb-32 overflow-hidden border-b border-emerald-900">
                <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.05]"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <span className="inline-block py-1 px-3 rounded-full bg-emerald-800/50 border border-emerald-700 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-6">
                            Attestation & Document Services
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                            Translation Services for the <span className="text-emerald-400">{entityName}</span> in {cityName}
                        </h1>
                        <p className="text-lg md:text-xl text-emerald-100/80 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Applying for a visa to {countryName}? We provide certified document translation and attestation services specifically required by the {entityName}.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href={`https://wa.me/923044296295?text=Hi%20Lisan.pk,%20I%20need%20documents%20translated%20for%20the%20${countryName}%20embassy.`} target="_blank" className="w-full sm:w-auto">
                                <Button className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white h-14 px-8 text-base font-bold shadow-lg shadow-[#25D366]/20 transition-all rounded-xl">
                                    Chat on WhatsApp
                                </Button>
                            </Link>
                            <Link href="tel:+923044296295" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full border-emerald-700 hover:bg-emerald-800 text-white bg-transparent h-14 px-8 text-base font-bold rounded-xl transition-all">
                                    Call: 0304 4296295
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                                Flawless Visa Document Translation
                            </h2>
                            <p className="text-slate-600 text-lg leading-relaxed">
                                The {entityName} in {cityName} requires all non-English documents (like your Urdu Nikahnama, Birth Certificate, or FRC) to be translated by a certified professional.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    `Accepted directly by the ${countryName} Immigration Authorities`,
                                    "Certified English & Native Language Translations",
                                    "Fast Turnaround for Urgent Appointments",
                                    "MOFA & Ministry Approvals Handled"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-xs font-bold shrink-0">✓</div>
                                        <span className="text-slate-700 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-2xl shadow-emerald-900/5">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">How to Submit Your Docs</h3>
                            <div className="space-y-6">
                                <div className="border-l-2 border-emerald-500 pl-6 relative">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1.5"></div>
                                    <h4 className="font-bold text-slate-900 mb-2">1. Snap & Send</h4>
                                    <p className="text-slate-600 text-sm">Send us clear photos of the documents required by the {entityName} via WhatsApp.</p>
                                </div>
                                <div className="border-l-2 border-emerald-500 pl-6 relative">
                                    <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[7px] top-1.5"></div>
                                    <h4 className="font-bold text-slate-900 mb-2">2. Certified Translation</h4>
                                    <p className="text-slate-600 text-sm">Our expert linguists process the translation on official letterheads with stamps.</p>
                                </div>
                                <div className="border-l-2 border-slate-200 pl-6 relative">
                                    <div className="absolute w-3 h-3 bg-slate-300 rounded-full -left-[7px] top-1.5"></div>
                                    <h4 className="font-bold text-slate-900 mb-2">3. Direct Courier</h4>
                                    <p className="text-slate-600 text-sm">Your physical documents are sent to your home so you can attach them to your {countryName} visa application.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </main>
    )
}
