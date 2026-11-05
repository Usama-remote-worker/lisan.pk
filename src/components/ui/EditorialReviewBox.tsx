import React from "react"
import { ShieldCheck, CheckCircle2 } from "lucide-react"

export interface ReviewerProfile {
  name: string
  reviewDate: string
  roleOrQualification: string
  profileUrl?: string
  verified: boolean
}

interface EditorialReviewBoxProps {
  reviewer?: ReviewerProfile
  className?: string
}

export function EditorialReviewBox({ reviewer, className = "" }: EditorialReviewBoxProps) {
  // B:A22 Gating Rule: Show named reviewer/date/credential ONLY if owner verification is logged as verified === true.
  // Otherwise, render neutral fallback with NO named reviewer badge and NO Person schema.
  const isVerified = Boolean(reviewer?.verified && reviewer?.name)

  if (isVerified && reviewer) {
    return (
      <div className={`my-8 p-4 rounded-xl border border-emerald-200 bg-emerald-50/70 text-slate-800 text-sm leading-relaxed ${className}`}>
        <div className="flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-emerald-700 flex-shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-emerald-950">Editorial review: </span>
            <span>
              Reviewed by{" "}
              {reviewer.profileUrl ? (
                <a href={reviewer.profileUrl} className="font-semibold text-emerald-900 underline hover:text-emerald-700">
                  {reviewer.name}
                </a>
              ) : (
                <strong className="font-semibold text-emerald-950">{reviewer.name}</strong>
              )}{" "}
              on <time dateTime={reviewer.reviewDate}>{reviewer.reviewDate}</time>. {reviewer.roleOrQualification}. References: relevant official sources already cited in this article.
            </span>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`my-6 p-4 rounded-xl border border-slate-200 bg-slate-50/80 text-slate-700 text-xs sm:text-sm leading-relaxed ${className}`}>
      <div className="flex items-center gap-2.5">
        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
        <p className="m-0">
          Sources and procedures are checked against the official references listed below.
        </p>
      </div>
    </div>
  )
}
