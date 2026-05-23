"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle2, GraduationCap, ArrowRight } from "lucide-react"

interface LeadFormProps {
    defaultUniversity?: string;
}

export function LeadForm({ defaultUniversity = "" }: LeadFormProps) {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [qualification, setQualification] = useState("Intermediate")
    const [percentage, setPercentage] = useState("")
    const [university, setUniversity] = useState(defaultUniversity || "Beykoz University")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (!name || !phone || !email || !percentage) {
            alert("Please fill all mandatory fields to secure your assessment.")
            return
        }

        setLoading(true)
        
        // Save to LocalStorage as a local backup CRM capture
        const newLead = { name, phone, email, qualification, percentage, university, date: new Date().toISOString() }
        const currentLeads = JSON.parse(localStorage.getItem("turkey_leads") || "[]")
        currentLeads.push(newLead)
        localStorage.setItem("turkey_leads", JSON.stringify(currentLeads))

        // WhatsApp Direct Link Formatting
        const message = `Hi Lisan.pk! I would like to apply for the Turkey University Admission Program. Here are my academic assessment details:

👤 Full Name: ${name}
📞 WhatsApp Phone: ${phone}
📧 Email Address: ${email}
🎓 Last Qualification: ${qualification}
📊 High School / CGPA Percentage: ${percentage}%
🏫 Preferred University: ${university}

Please let me know my eligibility and scholarship tier!`

        const whatsappUrl = `https://wa.me/923044296295?text=${encodeURIComponent(message)}`

        setTimeout(() => {
            setLoading(false)
            setIsSubmitted(true)
            window.open(whatsappUrl, "_blank")
        }, 800)
    }

    if (isSubmitted) {
        return (
            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center space-y-6 shadow-sm animate-fade-in font-sans">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto scale-110 shadow-inner">
                    <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-emerald-950 font-serif">Assessment Details Sent!</h3>
                <p className="text-emerald-800 leading-relaxed max-w-md mx-auto text-sm">
                    Thank you, <strong>{name}</strong>. Your academic profile has been logged, and we have opened WhatsApp to connect you directly with our Yozgat Bozok Technopark support desk.
                </p>
                <div className="pt-4 space-y-3">
                    <p className="text-xs text-emerald-600/80">If WhatsApp did not open automatically, click the button below:</p>
                    <a 
                        href={`https://wa.me/923044296295?text=${encodeURIComponent(
                            `Hi Lisan.pk, my name is ${name}. I just filled the Turkey Admission Assessment form and want to follow up.`
                        )}`}
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md text-sm"
                    >
                        Click to Chat on WhatsApp <ArrowRight className="w-4 h-4" />
                    </a>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-white border border-slate-100 rounded-3xl p-8 shadow-2xl relative overflow-hidden font-sans">
            {/* Header Design */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-red-600 via-rose-500 to-emerald-600"></div>
            
            <div className="flex items-center gap-2 mb-6">
                <span className="w-8 h-8 bg-red-100 text-red-600 rounded-xl flex items-center justify-center shrink-0">
                    <GraduationCap className="w-5 h-5" />
                </span>
                <div>
                    <h3 className="text-lg font-black text-slate-900 leading-tight">Free Admission Assessment</h3>
                    <p className="text-xs text-slate-500">Takes less than 60 seconds to secure your seat</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <Label htmlFor="name" className="text-xs font-bold text-slate-700 mb-1 block">Full Name *</Label>
                    <Input 
                        id="name"
                        type="text" 
                        placeholder="e.g., Muhammad Ali" 
                        required 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="h-11 rounded-xl border-slate-200 focus:border-red-500 focus:ring-red-500/20 text-slate-900"
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="phone" className="text-xs font-bold text-slate-700 mb-1 block">WhatsApp Number *</Label>
                        <Input 
                            id="phone"
                            type="tel" 
                            placeholder="e.g., 03044296295" 
                            required 
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="h-11 rounded-xl border-slate-200 focus:border-red-500 focus:ring-red-500/20 text-slate-900"
                        />
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-xs font-bold text-slate-700 mb-1 block">Email Address *</Label>
                        <Input 
                            id="email"
                            type="email" 
                            placeholder="e.g., ali@gmail.com" 
                            required 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="h-11 rounded-xl border-slate-200 focus:border-red-500 focus:ring-red-500/20 text-slate-900"
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="qualification" className="text-xs font-bold text-slate-700 mb-1 block">Last Qualification *</Label>
                        <select 
                            id="qualification"
                            value={qualification}
                            onChange={(e) => setQualification(e.target.value)}
                            className="w-full h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 focus:border-red-500 focus:ring-red-500/20 outline-none"
                        >
                            <option value="Matric / O-Level">Matric / O-Level</option>
                            <option value="Intermediate">Intermediate / A-Level</option>
                            <option value="Bachelors">Bachelors Degree</option>
                            <option value="Masters">Masters Degree</option>
                        </select>
                    </div>
                    <div>
                        <Label htmlFor="percentage" className="text-xs font-bold text-slate-700 mb-1 block">Marks Percentage (%) *</Label>
                        <Input 
                            id="percentage"
                            type="number" 
                            placeholder="e.g., 75" 
                            required 
                            min="30"
                            max="100"
                            value={percentage}
                            onChange={(e) => setPercentage(e.target.value)}
                            className="h-11 rounded-xl border-slate-200 focus:border-red-500 focus:ring-red-500/20 text-slate-900"
                        />
                    </div>
                </div>

                <div>
                    <Label htmlFor="university" className="text-xs font-bold text-slate-700 mb-1 block">Preferred Turkish University *</Label>
                    <select 
                        id="university"
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        className="w-full h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 focus:border-red-500 focus:ring-red-500/20 outline-none"
                    >
                        <option value="Beykoz University">Beykoz University (Istanbul - up to 50% discount)</option>
                        <option value="Istanbul Kent University">Istanbul Kent University (Taksim, Istanbul - Dentistry/Software)</option>
                        <option value="Istanbul Topkapi University">Istanbul Topkapi University (Istanbul - Budget options)</option>
                    </select>
                </div>

                <div className="pt-2">
                    <Button 
                        type="submit" 
                        disabled={loading}
                        className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-extrabold text-sm rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                    >
                        {loading ? (
                            "Analyzing Profile..."
                        ) : (
                            <>
                                Secure Free Assessment <Send className="w-4 h-4" />
                            </>
                        )}
                    </Button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[10px] text-slate-400 text-center font-medium mt-3">
                    <span>⚡ Direct Admissions Desk</span>
                    <span>•</span>
                    <span>🔒 100% Privacy Protected</span>
                </div>
            </form>
        </div>
    )
}
