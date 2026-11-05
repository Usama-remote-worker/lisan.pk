"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trackLeadEvent } from "@/lib/analytics";
import { MessageSquare, CheckCircle2, AlertCircle, ShieldCheck, ArrowRight } from "lucide-react";

export function ContactForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredResponseMethod, setPreferredResponseMethod] = useState("Email");
  
  const [sourceLanguage, setSourceLanguage] = useState("Urdu");
  const [customSourceLanguage, setCustomSourceLanguage] = useState("");
  
  const [targetLanguage, setTargetLanguage] = useState("English");
  const [customTargetLanguage, setCustomTargetLanguage] = useState("");
  
  const [documentType, setDocumentType] = useState("Nikah Nama / marriage contract");
  const [intendedUse, setIntendedUse] = useState("USCIS (I-130 or another filing)");
  const [certificationNeeded, setCertificationNeeded] = useState("Certified translation");
  
  const [documentCount, setDocumentCount] = useState("1");
  const [pageCount, setPageCount] = useState("");
  const [deadline, setDeadline] = useState("");
  const [requestDetails, setRequestDetails] = useState("");
  
  const [consent, setConsent] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(false);
  const [referenceId, setReferenceId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!fullName.trim()) {
      errs.fullName = "Please complete this field.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email.trim())) {
      errs.email = "Enter a valid email address.";
    }
    if (!consent) {
      errs.consent = "Please confirm that you are authorised to share the document and accept the privacy notice.";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    if (!validate()) {
      return;
    }

    setLoading(true);

    try {
      const payload = {
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        preferredResponseMethod,
        sourceLanguage: sourceLanguage === "Other" ? customSourceLanguage : sourceLanguage,
        targetLanguage: targetLanguage === "Other" ? customTargetLanguage : targetLanguage,
        documentType,
        intendedUse,
        certificationNeeded,
        documentCount,
        pageCount,
        deadline,
        requestDetails,
        consent,
        marketingConsent
      };

      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (res.ok && data.success) {
        // Fire GA4 lead event once upon verified server success
        trackLeadEvent("form");
        setReferenceId(data.referenceId || "LPK-2026-CONFIRMED");
        setIsSubmitted(true);
      } else {
        setServerError(data.error || "We couldn't confirm receipt of your request. Please try again or contact us directly.");
      }
    } catch {
      setServerError("We couldn't send your request. Please try again or use WhatsApp. No quote request has been confirmed.");
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 sm:p-10 text-center space-y-6 font-sans shadow-lg">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif">
            Your translation request has been received
          </h3>
          <p className="text-slate-700 text-sm sm:text-base max-w-lg mx-auto leading-relaxed">
            Thank you. Your request has been submitted for review. We&apos;ll contact you using your selected response method after checking the document details. The final price and delivery options will be confirmed before any paid work begins.
          </p>
        </div>

        {referenceId && (
          <div className="inline-block p-4 bg-white rounded-xl border border-emerald-200 text-xs sm:text-sm font-mono text-emerald-900 shadow-sm">
            <span className="font-bold text-slate-600 block sm:inline">Request reference:</span>{" "}
            <span className="font-extrabold text-emerald-800 text-base">{referenceId}</span>
          </div>
        )}

        <div className="flex flex-wrap justify-center gap-4 pt-2">
          <Link href="/services/translation">
            <Button className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold h-12 px-6 rounded-xl shadow-md transition-all">
              Return to translation services
            </Button>
          </Link>
          <a
            href={`https://wa.me/923288155866?text=${encodeURIComponent(
              `Hi Lisan.pk, my name is ${fullName}. I just submitted quotation request ${referenceId} on your website.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold h-12 px-6 rounded-xl shadow-md transition-all flex items-center gap-2">
              <MessageSquare className="w-4 h-4" />
              Ask on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl font-sans relative overflow-hidden space-y-8">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-600"></div>

      <div>
        <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 font-serif mb-2">
          Get a translation quote
        </h3>
        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
          Your document remains your document. Share only the pages necessary to assess the request and read our{" "}
          <Link href="/privacy-policy" className="text-emerald-700 underline font-semibold">
            privacy policy
          </Link>{" "}
          before uploading sensitive files.
        </p>
      </div>

      {serverError && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-900 text-xs sm:text-sm flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-700 shrink-0 mt-0.5" />
          <p className="leading-relaxed">{serverError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Contact and identity fields */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100 pb-1">
            1. Contact & Identity
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="fullName" className="text-xs font-bold text-slate-800">
                Full name <span className="text-rose-500">*</span>
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className={`h-11 rounded-xl text-sm ${errors.fullName ? "border-rose-400" : ""}`}
              />
              <p className="text-[11px] text-slate-500">Use the name you want us to address you by.</p>
              {errors.fullName && <p className="text-xs text-rose-600 font-medium">{errors.fullName}</p>}
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-xs font-bold text-slate-800">
                Email address <span className="text-rose-500">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`h-11 rounded-xl text-sm ${errors.email ? "border-rose-400" : ""}`}
              />
              <p className="text-[11px] text-slate-500">We&apos;ll use this to respond to your request.</p>
              {errors.email && <p className="text-xs text-rose-600 font-medium">{errors.email}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="phone" className="text-xs font-bold text-slate-800">
                WhatsApp or phone (optional)
              </Label>
              <Input
                id="phone"
                type="text"
                placeholder="+92 ..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="h-11 rounded-xl text-sm"
              />
              <p className="text-[11px] text-slate-500">Include country code if you&apos;d like a WhatsApp/phone response.</p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="preferredResponseMethod" className="text-xs font-bold text-slate-800">
                Preferred response method
              </Label>
              <select
                id="preferredResponseMethod"
                value={preferredResponseMethod}
                onChange={(e) => setPreferredResponseMethod(e.target.value)}
                className="w-full h-11 px-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Email">Email</option>
                <option value="WhatsApp">WhatsApp</option>
                <option value="Phone">Phone</option>
              </select>
            </div>
          </div>
        </div>

        {/* Translation details */}
        <div className="space-y-4">
          <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider border-b border-slate-100 pb-1">
            2. Translation Details
          </h4>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="sourceLanguage" className="text-xs font-bold text-slate-800">
                Source language
              </Label>
              <select
                id="sourceLanguage"
                value={sourceLanguage}
                onChange={(e) => setSourceLanguage(e.target.value)}
                className="w-full h-11 px-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Urdu">Urdu</option>
                <option value="Arabic">Arabic</option>
                <option value="English">English</option>
                <option value="Other">Other (please specify)</option>
              </select>
              {sourceLanguage === "Other" && (
                <Input
                  type="text"
                  placeholder="Specify source language"
                  value={customSourceLanguage}
                  onChange={(e) => setCustomSourceLanguage(e.target.value)}
                  className="h-10 rounded-xl text-sm mt-2"
                />
              )}
              <p className="text-[11px] text-slate-500">What language is the document written in?</p>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="targetLanguage" className="text-xs font-bold text-slate-800">
                Target language
              </Label>
              <select
                id="targetLanguage"
                value={targetLanguage}
                onChange={(e) => setTargetLanguage(e.target.value)}
                className="w-full h-11 px-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="English">English</option>
                <option value="Arabic">Arabic</option>
                <option value="Urdu">Urdu</option>
                <option value="Other">Other (please specify)</option>
              </select>
              {targetLanguage === "Other" && (
                <Input
                  type="text"
                  placeholder="Specify target language"
                  value={customTargetLanguage}
                  onChange={(e) => setCustomTargetLanguage(e.target.value)}
                  className="h-10 rounded-xl text-sm mt-2"
                />
              )}
              <p className="text-[11px] text-slate-500">What language must the translation be delivered in?</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="documentType" className="text-xs font-bold text-slate-800">
                Document type
              </Label>
              <select
                id="documentType"
                value={documentType}
                onChange={(e) => setDocumentType(e.target.value)}
                className="w-full h-11 px-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Nikah Nama / marriage contract">Nikah Nama / marriage contract</option>
                <option value="Marriage Registration Certificate (MRC)">Marriage Registration Certificate (MRC)</option>
                <option value="Birth certificate / civil record">Birth certificate / civil record</option>
                <option value="Degree / transcript">Degree / transcript</option>
                <option value="Divorce / court document">Divorce / court document</option>
                <option value="Police / character certificate">Police / character certificate</option>
                <option value="Property / land record">Property / land record</option>
                <option value="Employment / business document">Employment / business document</option>
                <option value="Other document">Other document</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="intendedUse" className="text-xs font-bold text-slate-800">
                Intended use / receiving authority
              </Label>
              <select
                id="intendedUse"
                value={intendedUse}
                onChange={(e) => setIntendedUse(e.target.value)}
                className="w-full h-11 px-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="USCIS (I-130 or another filing)">USCIS (I-130 or another filing)</option>
                <option value="NVC / CEAC">NVC / CEAC</option>
                <option value="U.S. Embassy Islamabad">U.S. Embassy Islamabad</option>
                <option value="UKVI">UKVI</option>
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="UAE / Gulf authority">UAE / Gulf authority</option>
                <option value="University / education">University / education</option>
                <option value="Other / not sure">Other / not sure</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="certificationNeeded" className="text-xs font-bold text-slate-800">
                Certification needed
              </Label>
              <select
                id="certificationNeeded"
                value={certificationNeeded}
                onChange={(e) => setCertificationNeeded(e.target.value)}
                className="w-full h-11 px-3 bg-white border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Certified translation">Certified translation</option>
                <option value="Translation only">Translation only</option>
                <option value="Not sure — advise after reviewing">Not sure — advise after reviewing</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="documentCount" className="text-xs font-bold text-slate-800">
                Document count
              </Label>
              <Input
                id="documentCount"
                type="text"
                placeholder="How many documents?"
                value={documentCount}
                onChange={(e) => setDocumentCount(e.target.value)}
                className="h-11 rounded-xl text-sm"
              />
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="pageCount" className="text-xs font-bold text-slate-800">
                Page count (optional)
              </Label>
              <Input
                id="pageCount"
                type="text"
                placeholder="Approximate number of pages"
                value={pageCount}
                onChange={(e) => setPageCount(e.target.value)}
                className="h-11 rounded-xl text-sm"
              />
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="deadline" className="text-xs font-bold text-slate-800">
              Your deadline (optional)
            </Label>
            <Input
              id="deadline"
              type="text"
              placeholder="DD/MM/YYYY"
              value={deadline}
              onChange={(e) => setDeadline(e.target.value)}
              className="h-11 rounded-xl text-sm max-w-xs"
            />
            <p className="text-[11px] text-slate-500">We will confirm availability before promising delivery by any deadline.</p>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="requestDetails" className="text-xs font-bold text-slate-800">
              Request details (optional)
            </Label>
            <textarea
              id="requestDetails"
              rows={3}
              placeholder="Tell us what the receiving authority asked for and anything we should check."
              value={requestDetails}
              onChange={(e) => setRequestDetails(e.target.value)}
              className="w-full p-3 bg-white border border-slate-200 rounded-xl text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <p className="text-[11px] text-slate-500">Do not include passwords, payment card numbers or unnecessary personal information.</p>
          </div>
        </div>

        {/* Document Intake & Privacy Notice */}
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-xs sm:text-sm text-slate-700">
          <div className="font-bold text-slate-900 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            Attach document for a quote (optional)
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Upload a readable copy of the pages relevant to your quote. You may request a preliminary quote without attaching a document. The final price may depend on page count, legibility and complexity. Please avoid uploading passport or CNIC images unless they are part of the document being translated or specifically needed for your request.
          </p>
          <p className="text-[11px] text-slate-500 italic">
            *Documents can be shared securely with your assigned coordinator via Email or WhatsApp after quote dispatch.
          </p>
        </div>

        {/* Consent and processing */}
        <div className="space-y-3 pt-2">
          <label className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 cursor-pointer">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-700 focus:ring-emerald-600"
            />
            <span>
              I confirm that I am authorised to share the document and agree that LISAN.PK may use the information I provide to respond to this translation request, as described in the{" "}
              <Link href="/privacy-policy" className="text-emerald-700 underline font-semibold">
                privacy policy
              </Link>. <span className="text-rose-500">*</span>
            </span>
          </label>
          {errors.consent && <p className="text-xs text-rose-600 font-medium pl-7">{errors.consent}</p>}

          <label className="flex items-start gap-3 text-xs sm:text-sm text-slate-600 cursor-pointer">
            <input
              type="checkbox"
              checked={marketingConsent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
              className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-700 focus:ring-emerald-600"
            />
            <span>Send me occasional updates about LISAN.PK translation services. (Optional)</span>
          </label>
        </div>

        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 leading-relaxed">
          <strong>Before-submit notice:</strong> Requesting a quote does not place an order or create a payment obligation. We will confirm the scope and price before paid work begins.
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Button
            type="submit"
            disabled={loading}
            className="bg-emerald-800 hover:bg-emerald-900 text-white font-bold h-12 px-8 rounded-xl shadow-md transition-all text-sm sm:text-base"
          >
            {loading ? "Sending your request…" : "Request translation quote"}
          </Button>

          <a
            href="https://wa.me/923288155866"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-slate-700 hover:text-emerald-800 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            Ask on WhatsApp
          </a>
        </div>
      </form>
    </div>
  );
}
