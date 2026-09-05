"use client"

import React from "react"
import {
  ShieldCheck,
  Lock,
  Clock,
  FileCheck,
  Laptop,
  Award,
  BookOpenCheck
} from "lucide-react"

export type TrustVariant = "scholarship" | "translation" | "general"

interface LisanTrustSectionProps {
  variant?: TrustVariant
  title?: string
  subtitle?: string
  className?: string
}

export function LisanTrustSection({
  variant = "scholarship",
  title,
  subtitle,
  className = ""
}: LisanTrustSectionProps) {
  const getHeading = () => {
    if (title) return title
    if (variant === "scholarship") return "Why Applicants Trust LISAN.PK"
    if (variant === "translation") return "Why Clients Choose LISAN.PK Translation Services"
    return "A Translation & Document Support Service You Can Rely On"
  }

  const getSubHeading = () => {
    if (subtitle) return subtitle
    if (variant === "scholarship") {
      return "Independent, transparent, and credible support for Pakistani students applying for Saudi scholarships."
    }
    return "Professional accuracy, client confidentiality, and fast digital turnaround nationwide."
  }

  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "Accountable & Credible",
      description: "We focus on accurate, consistent, and professionally prepared translations and documentation with clear communication throughout."
    },
    {
      icon: Lock,
      title: "Document Privacy First",
      description: "Your documents are handled with privacy, care, and strict confidentiality throughout the translation and application process."
    },
    {
      icon: Clock,
      title: "24–36 Hour Standard Turnaround",
      description: "Standard translation turnaround is typically 24–36 hours for most academic documents depending on volume and complexity."
    },
    {
      icon: FileCheck,
      title: "Digital PDF Delivery",
      description: "Digital PDF copies are provided online, allowing students across Pakistan to complete the process without a physical visit."
    },
    {
      icon: Laptop,
      title: "No Physical Visit Required",
      description: "Students can submit documents digitally and coordinate their entire process remotely through LISAN.PK from any city."
    },
    {
      icon: Award,
      title: "Experienced Translators",
      description: "Documents are handled by experienced translators familiar with academic, legal, and official Saudi document terminology."
    },
    {
      icon: BookOpenCheck,
      title: "Expert Document Guidance",
      description: "Students receive guidance on document preparation, translation requirements, consistency issues, and scholarship documentation."
    }
  ]

  // Select 6 relevant points
  const pointsToShow = trustPoints.slice(0, 6)

  return (
    <section className={`py-12 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white rounded-3xl border border-slate-800 shadow-xl ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3 border border-emerald-500/20">
            LISAN.PK Service Quality & Integrity
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            {getHeading()}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-2">
            {getSubHeading()}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pointsToShow.map((point, index) => {
            const Icon = point.icon
            return (
              <div
                key={index}
                className="bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/80 hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-start"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center mb-4 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white mb-2">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {point.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
