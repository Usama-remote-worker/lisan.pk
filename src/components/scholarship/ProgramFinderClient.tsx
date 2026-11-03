"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import {
  Search,
  X,
  CheckCircle2,
  GraduationCap,
  Building2,
  MapPin,
  Users,
  ExternalLink,
  ChevronRight,
  Sparkles,
  HelpCircle,
  FileText,
  Send,
  BookOpen,
  ArrowRight,
  ShieldCheck,
  Check
} from "lucide-react"
import {
  SAUDI_SCHOLARSHIP_PROGRAMS,
  getPublicVerifiedScholarshipPrograms,
  getUniqueUniversitiesFromDataset,
  SaudiScholarshipProgram,
  SCHOLARSHIP_ACADEMIC_FIELDS
} from "@/data/saudi-scholarship-programs"
import { LisanTrustSection } from "@/components/trust/LisanTrustSection"
import { trackLeadEvent } from "@/lib/analytics"

export function ProgramFinderClient() {
  // Public verified dataset (423 records)
  const publicPrograms = useMemo(() => getPublicVerifiedScholarshipPrograms(), [])

  // Derived unique universities from full program dataset (14 universities)
  const datasetUniversities = useMemo(() => getUniqueUniversitiesFromDataset(), [])

  // Filters State
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDegree, setSelectedDegree] = useState<string>("all")
  const [selectedField, setSelectedField] = useState<string>("all")
  const [selectedUniversity, setSelectedUniversity] = useState<string>("all")
  const [selectedGender, setSelectedGender] = useState<string>("all")

  // UI Modals State
  const [activeProgramModal, setActiveProgramModal] = useState<SaudiScholarshipProgram | null>(null)
  const [isProfileCheckOpen, setIsProfileCheckOpen] = useState(false)
  const [showDataQualityPanel, setShowDataQualityPanel] = useState(false)

  // Profile Form State
  const [profileForm, setProfileForm] = useState({
    name: "",
    whatsapp: "",
    currentQualification: "FSc Pre-Engineering",
    marksCgpa: "",
    graduationYear: "2024",
    field: "Computer Science",
    desiredDegree: "Bachelor",
    gender: "Male",
    hasIelts: "No",
    preferredSubject: ""
  })

  // Analytics Tracker Helper
  const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", eventName, params || {})
    }
  }

  // Filter Logic (Strict adherence to specified rules)
  const filteredPrograms = useMemo(() => {
    return publicPrograms.filter((prog) => {
      // Degree Filter
      if (selectedDegree !== "all" && prog.degree !== selectedDegree) {
        return false
      }

      // Field Filter
      if (selectedField !== "all" && prog.field !== selectedField) {
        return false
      }

      // University Filter
      if (selectedUniversity !== "all" && prog.university !== selectedUniversity) {
        return false
      }

      // Gender Filter Logic (Strictly separated per instructions)
      // 'all' -> show every program
      // 'male' -> show male-only programs (gender === 'male')
      // 'female' -> show female-only programs (gender === 'female')
      // 'both' -> show programs explicitly available to both genders (gender === 'both')
      if (selectedGender === "male" && prog.gender !== "male") {
        return false
      }
      if (selectedGender === "female" && prog.gender !== "female") {
        return false
      }
      if (selectedGender === "both" && prog.gender !== "both") {
        return false
      }

      // Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim()
        const matchesName = prog.programName.toLowerCase().includes(q)
        const matchesUniv = prog.university.toLowerCase().includes(q)
        const matchesField = prog.field.toLowerCase().includes(q)
        const matchesSpec = prog.specialization ? prog.specialization.toLowerCase().includes(q) : false
        const matchesCity = prog.city.toLowerCase().includes(q)

        if (!matchesName && !matchesUniv && !matchesField && !matchesSpec && !matchesCity) {
          return false
        }
      }

      return true
    })
  }, [publicPrograms, selectedDegree, selectedField, selectedUniversity, selectedGender, searchQuery])

  // Count active filters
  const activeFilterCount = useMemo(() => {
    let count = 0
    if (selectedDegree !== "all") count++
    if (selectedField !== "all") count++
    if (selectedUniversity !== "all") count++
    if (selectedGender !== "all") count++
    if (searchQuery.trim()) count++
    return count
  }, [selectedDegree, selectedField, selectedUniversity, selectedGender, searchQuery])

  const clearAllFilters = () => {
    setSelectedDegree("all")
    setSelectedField("all")
    setSelectedUniversity("all")
    setSelectedGender("all")
    setSearchQuery("")
  }

  // Handle WhatsApp Profile Submission
  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    trackEvent("saudi_profile_check_submit", { ...profileForm })
    trackLeadEvent("form", { form_name: "saudi_profile_check" })

    const msg = `*NEW SCHOLARSHIP PROFILE EVALUATION REQUEST*%0A%0A` +
      `*Name:* ${encodeURIComponent(profileForm.name)}%0A` +
      `*WhatsApp:* ${encodeURIComponent(profileForm.whatsapp)}%0A` +
      `*Current Qualification:* ${encodeURIComponent(profileForm.currentQualification)}%0A` +
      `*Marks / CGPA:* ${encodeURIComponent(profileForm.marksCgpa)}%0A` +
      `*Graduation Year:* ${encodeURIComponent(profileForm.graduationYear)}%0A` +
      `*Field of Study:* ${encodeURIComponent(profileForm.field)}%0A` +
      `*Desired Degree Level:* ${encodeURIComponent(profileForm.desiredDegree)}%0A` +
      `*Gender:* ${encodeURIComponent(profileForm.gender)}%0A` +
      `*IELTS Available:* ${encodeURIComponent(profileForm.hasIelts)}%0A` +
      `*Preferred Subject:* ${encodeURIComponent(profileForm.preferredSubject || 'Open')}`

    window.open(`https://wa.me/923005008586?text=${msg}`, "_blank")
    setIsProfileCheckOpen(false)
  }

  // Data Quality Metrics (Internal Audit Panel)
  const dataQualityStats = useMemo(() => {
    const totalRaw = SAUDI_SCHOLARSHIP_PROGRAMS.length
    const verified = publicPrograms.length
    const bachelors = publicPrograms.filter(p => p.degree === 'bachelor').length
    const masters = publicPrograms.filter(p => p.degree === 'master').length
    const phds = publicPrograms.filter(p => p.degree === 'phd').length
    const maleOnly = publicPrograms.filter(p => p.gender === 'male').length
    const femaleOnly = publicPrograms.filter(p => p.gender === 'female').length
    const bothGender = publicPrograms.filter(p => p.gender === 'both').length

    return {
      totalRaw,
      verified,
      bachelors,
      masters,
      phds,
      maleOnly,
      femaleOnly,
      bothGender,
      uniqueUnivsCount: datasetUniversities.length
    }
  }, [publicPrograms, datasetUniversities])

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-20">
      {/* Top Banner & Header */}
      <section className="bg-gradient-to-b from-slate-900 via-emerald-950 to-slate-900 text-white pt-12 pb-16 px-4 sm:px-6 lg:px-8 border-b border-emerald-800/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-500/10 via-transparent to-transparent opacity-70 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> 100% Verified Fully Funded Programs Only
            </div>

            <button
              onClick={() => setShowDataQualityPanel(!showDataQualityPanel)}
              className="text-xs text-slate-300 hover:text-emerald-300 transition-colors flex items-center gap-1.5 underline decoration-slate-600 underline-offset-4"
            >
              <FileText className="w-3.5 h-3.5" /> Database Audit Summary
            </button>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-4 leading-tight">
            Saudi Fully Funded Scholarship Program Finder 2026/27
          </h1>

          <p className="text-slate-200 text-base sm:text-lg max-w-3xl leading-relaxed mb-6">
            Search verified fully funded Bachelor’s, Master’s and PhD programs across top Saudi public universities by university, field, language, gender and applicant type.
          </p>

          <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-300 bg-slate-800/70 p-3.5 rounded-xl border border-slate-700 max-w-4xl">
            <span className="flex items-center gap-1.5 text-emerald-300 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Only Verified Fully Funded Programs Included
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span>Independent Support by LISAN.PK</span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <span>Official Portal: Study in Saudi</span>
          </div>
        </div>
      </section>

      {/* Internal Data Audit Summary Panel */}
      {showDataQualityPanel && (
        <section className="bg-slate-900 border-b border-amber-500/30 text-slate-200 py-6 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Internal Database Audit Panel
              </h2>
              <button
                onClick={() => setShowDataQualityPanel(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center text-xs">
              <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <div className="text-slate-400">Total Records</div>
                <div className="text-lg font-bold text-white mt-1">{dataQualityStats.totalRaw}</div>
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <div className="text-slate-400">Public Verified</div>
                <div className="text-lg font-bold text-emerald-400 mt-1">{dataQualityStats.verified}</div>
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <div className="text-slate-400">Bachelor's</div>
                <div className="text-lg font-bold text-sky-400 mt-1">{dataQualityStats.bachelors}</div>
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <div className="text-slate-400">Master's</div>
                <div className="text-lg font-bold text-indigo-400 mt-1">{dataQualityStats.masters}</div>
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <div className="text-slate-400">PhD</div>
                <div className="text-lg font-bold text-purple-400 mt-1">{dataQualityStats.phds}</div>
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <div className="text-slate-400">Male-Only</div>
                <div className="text-lg font-bold text-blue-400 mt-1">{dataQualityStats.maleOnly}</div>
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <div className="text-slate-400">Female-Only</div>
                <div className="text-lg font-bold text-pink-400 mt-1">{dataQualityStats.femaleOnly}</div>
              </div>
              <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                <div className="text-slate-400">Male & Female</div>
                <div className="text-lg font-bold text-amber-400 mt-1">{dataQualityStats.bothGender}</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-20">
        {/* Search Bar & Primary Filters Box */}
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-5 sm:p-6 mb-8">
          {/* Search Field */}
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by program name (e.g. Computer Science, Artificial Intelligence, Sharia, Civil Engineering)..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                trackEvent("saudi_program_search", { query: e.target.value })
              }}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-300 rounded-xl text-slate-900 placeholder-slate-400 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent transition-all shadow-inner"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Filter Dropdowns Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Degree Level Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4 text-emerald-600" /> Degree Level
              </label>
              <select
                value={selectedDegree}
                onChange={(e) => {
                  setSelectedDegree(e.target.value)
                  trackEvent("saudi_program_filter_used", { filter: "degree", value: e.target.value })
                }}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-3 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              >
                <option value="all">All Degrees ({publicPrograms.length})</option>
                <option value="bachelor">Bachelor's ({dataQualityStats.bachelors})</option>
                <option value="master">Master's ({dataQualityStats.masters})</option>
                <option value="phd">PhD ({dataQualityStats.phds})</option>
              </select>
            </div>

            {/* Field Filter */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <BookOpen className="w-4 h-4 text-emerald-600" /> Academic Field
              </label>
              <select
                value={selectedField}
                onChange={(e) => {
                  setSelectedField(e.target.value)
                  trackEvent("saudi_program_filter_used", { filter: "field", value: e.target.value })
                }}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-3 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              >
                <option value="all">All Academic Fields</option>
                {SCHOLARSHIP_ACADEMIC_FIELDS.map((f) => (
                  <option key={f} value={f}>
                    {f}
                  </option>
                ))}
              </select>
            </div>

            {/* University Filter — Derived from dataset (14 universities) */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Building2 className="w-4 h-4 text-emerald-600" /> Saudi University
              </label>
              <select
                value={selectedUniversity}
                onChange={(e) => {
                  setSelectedUniversity(e.target.value)
                  trackEvent("saudi_program_filter_used", { filter: "university", value: e.target.value })
                }}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-3 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              >
                <option value="all">All Saudi Universities ({datasetUniversities.length})</option>
                {datasetUniversities.map((u) => (
                  <option key={u.name} value={u.name}>
                    {u.name} ({u.city})
                  </option>
                ))}
              </select>
            </div>

            {/* Gender Filter — Simplified Public Options */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Users className="w-4 h-4 text-emerald-600" /> Gender Eligibility
              </label>
              <select
                value={selectedGender}
                onChange={(e) => {
                  setSelectedGender(e.target.value)
                  trackEvent("saudi_program_filter_used", { filter: "gender", value: e.target.value })
                }}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg py-2.5 px-3 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-emerald-600 focus:outline-none"
              >
                <option value="all">All Genders</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="both">Male & Female</option>
              </select>
            </div>
          </div>

          {/* Active Filter Badges & Clear All */}
          {activeFilterCount > 0 && (
            <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Active Filters:</span>
                {selectedDegree !== "all" && (
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                    Degree: {selectedDegree.toUpperCase()}
                    <button onClick={() => setSelectedDegree("all")} className="hover:text-emerald-950">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}
                {selectedField !== "all" && (
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                    Field: {selectedField}
                    <button onClick={() => setSelectedField("all")} className="hover:text-emerald-950">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}
                {selectedUniversity !== "all" && (
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                    Univ: {selectedUniversity}
                    <button onClick={() => setSelectedUniversity("all")} className="hover:text-emerald-950">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}
                {selectedGender !== "all" && (
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                    Gender: {selectedGender === "both" ? "Male & Female" : selectedGender.toUpperCase()}
                    <button onClick={() => setSelectedGender("all")} className="hover:text-emerald-950">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}
                {searchQuery && (
                  <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 text-xs font-semibold px-2.5 py-1 rounded-full border border-emerald-200">
                    Query: "{searchQuery}"
                    <button onClick={() => setSearchQuery("")} className="hover:text-emerald-950">
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </span>
                )}
              </div>

              <button
                onClick={clearAllFilters}
                className="text-xs font-bold text-slate-500 hover:text-red-600 transition-colors underline underline-offset-2"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>

        {/* Results Counter & Lead CTA Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Verified Programs ({filteredPrograms.length})
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Showing verified fully funded Saudi scholarship opportunities matching your search criteria.
            </p>
          </div>

          <button
            onClick={() => {
              trackEvent("saudi_profile_check_start")
              setIsProfileCheckOpen(true)
            }}
            className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <Sparkles className="w-4 h-4" /> Check My Profile Eligibility
          </button>
        </div>

        {/* Results Grid / Empty State */}
        {filteredPrograms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPrograms.map((prog) => (
              <div
                key={prog.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:border-emerald-500/50"
              >
                <div className="p-6">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-[11px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-800 border border-emerald-200">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" /> Full Scholarship
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                      {prog.degree}
                    </span>
                  </div>

                  {/* Program Title */}
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug mb-2">
                    {prog.programName}
                  </h3>

                  {/* Specialization if present */}
                  {prog.specialization && (
                    <div className="text-xs font-medium text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md mb-3 inline-block">
                      Spec: {prog.specialization}
                    </div>
                  )}

                  {/* University & Details */}
                  <div className="space-y-2 mt-4 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-2 font-semibold text-slate-800">
                      <Building2 className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{prog.university}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>{prog.city}, Saudi Arabia</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>Field: {prog.field}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>
                        Gender:{" "}
                        <strong className="capitalize text-slate-800">
                          {prog.gender === "both" ? "Male & Female" : prog.gender}
                        </strong>
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      trackEvent("saudi_program_view", { program: prog.programName, university: prog.university })
                      setActiveProgramModal(prog)
                    }}
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-900 flex items-center gap-1 hover:underline"
                  >
                    View Program Specs <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => {
                      trackEvent("saudi_profile_check_start", { program: prog.programName })
                      setProfileForm(prev => ({ ...prev, preferredSubject: prog.programName, desiredDegree: prog.degree.toUpperCase() }))
                      setIsProfileCheckOpen(true)
                    }}
                    className="text-xs font-bold bg-slate-900 hover:bg-emerald-700 text-white px-3 py-2 rounded-lg transition-colors"
                  >
                    Check Profile
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center max-w-2xl mx-auto my-8 shadow-sm">
            <div className="w-16 h-16 bg-amber-50 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              No verified fully funded programs currently match these filters
            </h3>
            <p className="text-slate-600 text-sm mb-6">
              All displayed opportunities are strictly verified as 100% Fully Funded scholarships. Try adjusting your search query, degree level, or gender selection.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={clearAllFilters}
                className="bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors"
              >
                Clear Filters
              </button>

              <button
                onClick={() => {
                  trackEvent("saudi_program_shortlisting_click")
                  setIsProfileCheckOpen(true)
                }}
                className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4" /> Get Program Shortlisting Help
              </button>
            </div>
          </div>
        )}

        {/* Commercial Assistance Packages Section (Corrected pricing & contrast) */}
        <section className="mt-16 bg-slate-900 rounded-3xl p-8 sm:p-12 text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="max-w-4xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-4 border border-emerald-500/30">
              LISAN.PK Support Options
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Need Help With This Scholarship?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              Choose the exact support level you need for your Study in Saudi application process:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Option 1: Documents & Translation Package */}
              <div className="bg-slate-800/90 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 flex flex-col justify-between">
                <div>
                  <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Option 1</div>
                  <h3 className="text-xl font-bold text-white mb-3">DOCUMENTS & TRANSLATION SUPPORT</h3>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    Ideal if you plan to submit your own application on the portal, but need certified Arabic translation and document formatting.
                  </p>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700 mb-4">
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Standard Package Pricing</div>
                    <div className="text-sm text-slate-200">
                      Bachelor Applicants: <strong className="text-emerald-400 font-extrabold">PKR 12,000</strong>
                    </div>
                    <div className="text-sm text-slate-200">
                      Master / PhD Applicants: <strong className="text-emerald-400 font-extrabold">PKR 15,000</strong>
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Certified Arabic Document Translation</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Academic Degrees & Transcripts Translation</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Name & Spelling Consistency Review</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Digital PDF Delivery + Optional Hard Copies</li>
                  </ul>
                </div>

                <a
                  href="https://wa.me/923005008586?text=Hi%20Lisan.pk%2C%20I%20need%20Document%20and%20Translation%20Support%20for%20Saudi%20Scholarship."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("saudi_application_support_click", { package: "translation_doc" })}
                  className="w-full text-center bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs py-3 rounded-xl transition-colors block border border-slate-600"
                >
                  GET DOCUMENT TRANSLATION SUPPORT
                </a>
              </div>

              {/* Option 2: Complete Application Support (No unapproved fixed price) */}
              <div className="bg-slate-800/90 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/50 flex flex-col justify-between relative shadow-lg">
                <div className="absolute -top-3 right-4 bg-emerald-500 text-slate-950 font-extrabold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
                  Full Consultancy
                </div>
                <div>
                  <div className="text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">Option 2</div>
                  <h3 className="text-xl font-bold text-white mb-3">COMPLETE SCHOLARSHIP APPLICATION SUPPORT</h3>
                  <p className="text-xs text-slate-300 mb-4 leading-relaxed">
                    End-to-end guidance covering program selection, document preparation, portal profile setup, and submission review.
                  </p>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-700 mb-4">
                    <div className="text-xs text-slate-400 uppercase font-bold tracking-wider mb-1">Package Quote</div>
                    <div className="text-sm text-emerald-400 font-bold">
                      Custom Package Quote Based on Profile
                    </div>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300 mb-6">
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Academic Profile & Document Review</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> University & Program Shortlisting</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Study in Saudi Portal Guidance</li>
                    <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400 shrink-0" /> Document Upload Verification & Final Checklist</li>
                  </ul>
                </div>

                <a
                  href="https://wa.me/923005008586?text=Hi%20Lisan.pk%2C%20I%20need%20Complete%20Saudi%20Scholarship%20Application%20Support."
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackEvent("saudi_application_support_click", { package: "full_support" })}
                  className="w-full text-center bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-3 rounded-xl transition-colors block"
                >
                  GET COMPLETE APPLICATION HELP
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Site-wide Trust Component */}
        <div className="mt-16">
          <LisanTrustSection variant="scholarship" title="Why Applicants Choose LISAN.PK" />
        </div>

        {/* Authority Knowledge Hub Section */}
        <section className="mt-16 bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-2">
            Saudi Scholarship Knowledge & Application Resources
          </h2>
          <p className="text-slate-600 text-sm mb-6">
            Read our step-by-step guides reviewed by Saudi education consultants to avoid common portal mistakes:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs font-semibold">
            <Link
              href="/blog/saudi-scholarship-complete-roadmap"
              className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all flex items-center justify-between text-slate-800 hover:text-emerald-900"
            >
              <span>Complete Saudi Scholarship Roadmap 2026</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/blog/saudi-scholarship-application-review-checklist"
              className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all flex items-center justify-between text-slate-800 hover:text-emerald-900"
            >
              <span>25 Checks Before Study in Saudi Submission</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/blog/study-in-saudi-portal-problems-errors"
              className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all flex items-center justify-between text-slate-800 hover:text-emerald-900"
            >
              <span>Study in Saudi Portal Errors & Status Fixes</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/blog/saudi-fully-funded-scholarship-programs-2026"
              className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all flex items-center justify-between text-slate-800 hover:text-emerald-900"
            >
              <span>List of Top 25 Saudi Universities</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/blog/saudi-scholarship-eligibility-pakistani-students"
              className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all flex items-center justify-between text-slate-800 hover:text-emerald-900"
            >
              <span>Saudi Scholarship Eligibility for Pakistanis</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>

            <Link
              href="/consultancy/saudi-scholarship"
              className="p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/50 transition-all flex items-center justify-between text-slate-800 hover:text-emerald-900"
            >
              <span>LISAN.PK Saudi Consultancy Services</span>
              <ArrowRight className="w-4 h-4 text-slate-400" />
            </Link>
          </div>
        </section>
      </main>

      {/* Program Detail Modal */}
      {activeProgramModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-200">
            <button
              onClick={() => setActiveProgramModal(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 bg-slate-100 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-700" /> Verified Full Scholarship
            </div>

            <h2 className="text-2xl font-extrabold text-slate-900 mb-2">
              {activeProgramModal.programName}
            </h2>

            <div className="flex items-center gap-2 text-sm text-slate-600 font-medium mb-6">
              <Building2 className="w-4 h-4 text-emerald-600" />
              <span>{activeProgramModal.university} ({activeProgramModal.city}, Saudi Arabia)</span>
            </div>

            {/* Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs mb-6">
              <div>
                <span className="text-slate-500 block">Degree Level:</span>
                <span className="font-bold text-slate-900 capitalize">{activeProgramModal.degree}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Academic Field:</span>
                <span className="font-bold text-slate-900">{activeProgramModal.field}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Gender Eligibility:</span>
                <span className="font-bold text-slate-900 capitalize">
                  {activeProgramModal.gender === "both" ? "Male & Female" : activeProgramModal.gender}
                </span>
              </div>
              <div>
                <span className="text-slate-500 block">Language:</span>
                <span className="font-bold text-slate-900">{activeProgramModal.language}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Duration:</span>
                <span className="font-bold text-slate-900">{activeProgramModal.duration}</span>
              </div>
              <div>
                <span className="text-slate-500 block">Applicant Type:</span>
                <span className="font-bold text-slate-900">{activeProgramModal.applicantType}</span>
              </div>
            </div>

            {/* Requirements & Documents */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-700 mb-6">
              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Official Program Requirements</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  {activeProgramModal.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 text-sm mb-2">Required Application Documents</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-600">
                  {activeProgramModal.documents.map((doc, idx) => (
                    <li key={idx}>{doc}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Official Source & Verification Date */}
            <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200 text-xs text-slate-700 mb-6 flex flex-wrap items-center justify-between gap-2">
              <div>
                <span className="font-bold text-emerald-900">Official Source: </span>
                <a
                  href={activeProgramModal.officialSourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-700 underline font-semibold inline-flex items-center gap-1"
                >
                  Study in Saudi Official Portal <ExternalLink className="w-3 h-3" />
                </a>
              </div>
              <div className="text-slate-500">
                Last Verified: <strong className="text-slate-700">{activeProgramModal.lastVerified}</strong>
              </div>
            </div>

            {/* Modal CTAs */}
            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => setActiveProgramModal(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100"
              >
                Close
              </button>

              <button
                onClick={() => {
                  setActiveProgramModal(null)
                  setProfileForm(prev => ({
                    ...prev,
                    preferredSubject: activeProgramModal.programName,
                    desiredDegree: activeProgramModal.degree.toUpperCase()
                  }))
                  setIsProfileCheckOpen(true)
                }}
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-md"
              >
                <Sparkles className="w-4 h-4" /> Check My Profile For This Program
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lead Generation Modal: Check My Profile */}
      {isProfileCheckOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-200">
            <button
              onClick={() => setIsProfileCheckOpen(false)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-700 bg-slate-100 p-2 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6" />
              </div>
              <h2 className="text-2xl font-extrabold text-slate-900">Check My Profile Eligibility</h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Enter your academic qualifications to evaluate potential fully funded Saudi scholarship program matches.
              </p>
            </div>

            <form onSubmit={handleProfileSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label className="block font-bold text-slate-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Muhammad Ali"
                  value={profileForm.name}
                  onChange={e => setProfileForm({ ...profileForm, name: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">WhatsApp Number *</label>
                  <input
                    type="text"
                    required
                    placeholder="+92 300 0000000"
                    value={profileForm.whatsapp}
                    onChange={e => setProfileForm({ ...profileForm, whatsapp: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Current Qualification *</label>
                  <select
                    value={profileForm.currentQualification}
                    onChange={e => setProfileForm({ ...profileForm, currentQualification: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  >
                    <option value="FSc Pre-Engineering">FSc Pre-Engineering</option>
                    <option value="FSc Pre-Medical">FSc Pre-Medical</option>
                    <option value="ICS (Computer Science)">ICS (Computer Science)</option>
                    <option value="FA / Humanities">FA / Humanities</option>
                    <option value="A-Level">A-Level</option>
                    <option value="BS Computer Science">BS Computer Science</option>
                    <option value="BS Engineering">BS Engineering</option>
                    <option value="BBA / BCom">BBA / BCom</option>
                    <option value="MA / MS / MPhil">MA / MS / MPhil</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Marks % or CGPA *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 85% or 3.6/4.0"
                    value={profileForm.marksCgpa}
                    onChange={e => setProfileForm({ ...profileForm, marksCgpa: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Graduation Year *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2024"
                    value={profileForm.graduationYear}
                    onChange={e => setProfileForm({ ...profileForm, graduationYear: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Desired Degree Level *</label>
                  <select
                    value={profileForm.desiredDegree}
                    onChange={e => setProfileForm({ ...profileForm, desiredDegree: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  >
                    <option value="Bachelor">Bachelor's Degree</option>
                    <option value="Master">Master's Degree</option>
                    <option value="PhD">PhD Degree</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Gender *</label>
                  <select
                    value={profileForm.gender}
                    onChange={e => setProfileForm({ ...profileForm, gender: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">IELTS Available?</label>
                  <select
                    value={profileForm.hasIelts}
                    onChange={e => setProfileForm({ ...profileForm, hasIelts: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  >
                    <option value="No">No (Will apply without IELTS)</option>
                    <option value="Yes">Yes (Have valid score)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Preferred Program / Subject</label>
                  <input
                    type="text"
                    placeholder="e.g. Computer Science"
                    value={profileForm.preferredSubject}
                    onChange={e => setProfileForm({ ...profileForm, preferredSubject: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:ring-2 focus:ring-emerald-600 focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" /> Find Programs For My Profile
                </button>
              </div>

              <p className="text-[11px] text-slate-400 text-center mt-2">
                * Note: Final admission decisions are made exclusively by official Saudi university committees.
              </p>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}
