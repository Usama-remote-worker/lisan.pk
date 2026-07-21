"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { trackLeadEvent } from "@/lib/analytics";

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Certified Arabic Translation");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !email) {
      alert("Please fill in your name, WhatsApp number, and email.");
      return;
    }

    setLoading(true);
    // Fire GA4 lead event for form submission
    trackLeadEvent("form");

    // Local Storage capture
    const newInquiry = {
      name,
      phone,
      email,
      service,
      message,
      date: new Date().toISOString(),
    };
    const currentInquiries = JSON.parse(
      localStorage.getItem("lisan_contact_inquiries") || "[]"
    );
    currentInquiries.push(newInquiry);
    localStorage.setItem(
      "lisan_contact_inquiries",
      JSON.stringify(currentInquiries)
    );

    const whatsappMessage = `Hi Lisan.pk! I submitted an inquiry from your website Contact form:
👤 Name: ${name}
📞 WhatsApp Phone: ${phone}
📧 Email: ${email}
📑 Service Needed: ${service}
💬 Note: ${message || "Please provide a quote."}`;

    const whatsappUrl = `https://wa.me/923044296295?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  if (isSubmitted) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-8 text-center space-y-4 font-sans">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto font-black text-2xl">
          ✓
        </div>
        <h3 className="text-2xl font-bold text-slate-900 font-serif">
          Inquiry Submitted Successfully!
        </h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto">
          Thank you, <strong>{name}</strong>. Your message has been received and our team is ready to assist you.
        </p>
        <div className="pt-2">
          <a
            href={`https://wa.me/923044296295?text=${encodeURIComponent(
              `Hi Lisan.pk, my name is ${name}. Following up on my contact form inquiry.`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm w-full sm:w-auto"
          >
            Chat with Us on WhatsApp
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-8 shadow-xl font-sans relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-emerald-600"></div>
      <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">
        Send Us a Message
      </h3>
      <p className="text-slate-500 text-sm mb-6">
        Fill in your details for a fast response from our translation team.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="contact-name" className="text-xs font-bold text-slate-700 mb-1 block">
            Your Full Name *
          </Label>
          <Input
            id="contact-name"
            type="text"
            placeholder="e.g. Ali Ahmed"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-11 rounded-xl border-slate-200 focus:border-emerald-600 text-slate-900"
          />
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="contact-phone" className="text-xs font-bold text-slate-700 mb-1 block">
              WhatsApp Phone *
            </Label>
            <Input
              id="contact-phone"
              type="tel"
              placeholder="e.g. 03044296295"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="h-11 rounded-xl border-slate-200 focus:border-emerald-600 text-slate-900"
            />
          </div>
          <div>
            <Label htmlFor="contact-email" className="text-xs font-bold text-slate-700 mb-1 block">
              Email Address *
            </Label>
            <Input
              id="contact-email"
              type="email"
              placeholder="e.g. ali@gmail.com"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="h-11 rounded-xl border-slate-200 focus:border-emerald-600 text-slate-900"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="contact-service" className="text-xs font-bold text-slate-700 mb-1 block">
            Service Required *
          </Label>
          <select
            id="contact-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full h-11 rounded-xl border border-slate-200 bg-white px-3 text-sm text-slate-900 focus:border-emerald-600 outline-none"
          >
            <option value="Certified Arabic Translation">Certified Arabic Translation</option>
            <option value="Degree & Transcript Translation">Degree & Transcript Translation</option>
            <option value="Nikah Nama & Identity Translation">Nikah Nama & Marriage Translation</option>
            <option value="Legal & Affidavit Translation">Legal & Court Affidavit Translation</option>
            <option value="Saudi University Scholarship Support">Saudi University Scholarship Support</option>
            <option value="Study in Turkey Admissions">Study in Turkey Admissions</option>
          </select>
        </div>

        <div>
          <Label htmlFor="contact-message" className="text-xs font-bold text-slate-700 mb-1 block">
            Message / Specific Documents (Optional)
          </Label>
          <textarea
            id="contact-message"
            rows={3}
            placeholder="Tell us which documents you need translated..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full rounded-xl border border-slate-200 p-3 text-sm text-slate-900 focus:border-emerald-600 outline-none"
          />
        </div>

        <Button
          type="submit"
          disabled={loading}
          className="w-full h-12 bg-emerald-700 hover:bg-emerald-800 text-white font-extrabold text-sm rounded-xl transition-all shadow-md mt-2"
        >
          {loading ? "Submitting Inquiry..." : "Submit Inquiry Now"}
        </Button>
      </form>
    </div>
  );
}
