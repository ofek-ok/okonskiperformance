"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  ref?: string;
}

function getUtmFromUrl(): UtmData {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const result: UtmData = {};
  (["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "ref"] as const).forEach((key) => {
    const val = params.get(key);
    if (val) result[key] = val;
  });
  return result;
}

export default function PerformanceList() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [marketingConsent, setMarketingConsent] = useState(false); // NEVER pre-checked
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [submitted, setSubmitted] = useState(false); // Prevent duplicate submission

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "שם מלא נדרש";
    if (!formData.phone.trim()) newErrors.phone = "מספר טלפון נדרש";
    else if (!/^[\d\s\-+()]{7,}$/.test(formData.phone.trim())) newErrors.phone = "מספר טלפון אינו תקין";
    if (!formData.email.trim()) newErrors.email = "כתובת אימייל נדרשת";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) newErrors.email = "כתובת אימייל אינה תקינה";
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (submitted || status === "loading") return; // Prevent duplicate

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Move focus to first error
      const firstErrorField = Object.keys(newErrors)[0];
      document.getElementById(`pl-${firstErrorField}`)?.focus();
      return;
    }

    setSubmitted(true);
    setStatus("loading");

    const utm = getUtmFromUrl();
    const _consentRecord = {
      full_name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      created_at: new Date().toISOString(),
      lead_source: "performance_list_v2",
      ...utm,
      performance_list_status: "subscribed",
      marketing_consent: marketingConsent,
      consent_timestamp: new Date().toISOString(),
      consent_version: "2026-09-v1",
      privacy_policy_version: "2026-09-v1",
    };

    // Future: POST /api/subscribe with _consentRecord
    // No PII in console or URLs
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section
      id="performance-list"
      className="py-24 sm:py-36 md:py-48 bg-primary relative overflow-hidden"
      aria-label="Performance List — הצטרפות לרשימת ההמתנה"
    >
      {/* Cinematic dark background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(20,24,29,0.7)_0%,rgba(11,13,16,1)_100%)]" aria-hidden="true" />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] max-w-xl h-[40vh] bg-brand/10 blur-[100px] rounded-full pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-8 max-w-2xl relative z-10">

        {/* ── SUCCESS STATE ── */}
        {status === "success" ? (
          <div className="text-center py-8" role="status" aria-live="polite">
            <p
              className="font-barlow text-[clamp(2.5rem,10vw,5rem)] font-black text-white tracking-[0.1em] uppercase leading-none mb-10"
              dir="ltr"
            >
              YOU&rsquo;RE ON<br />THE LIST.
            </p>
            <p className="text-white font-bold text-[clamp(1.2rem,3vw,1.5rem)] mb-5">
              ברוכים הבאים ל-Performance List.
            </p>
            <p className="text-secondary-text text-[clamp(1rem,2.5vw,1.2rem)] leading-relaxed mb-14 max-w-lg mx-auto">
              אנחנו נעדכן אתכם בדרך לקראת פתיחת Okonski Performance בינואר 2027 — ונשלח לכם עדכון כשהגישה ליומן תיפתח.
            </p>
            <p
              className="font-barlow text-[clamp(1.3rem,4vw,2rem)] text-white font-black tracking-widest uppercase"
              dir="ltr"
            >
              UNTIL THEN —{" "}
              <span className="text-white/30">KEEP PERFORMING.</span>
            </p>
          </div>

        ) : (
          /* ── FORM STATE ── */
          <div className="text-center">
            {/* Date label */}
            <p
              className="font-barlow text-brand font-black tracking-[0.3em] uppercase text-sm sm:text-base mb-6"
              dir="ltr"
            >
              JANUARY 2027
            </p>

            {/* Headline */}
            <h2 className="text-[clamp(2.8rem,9vw,5rem)] font-black text-white tracking-tight leading-[1.05] mb-10">
              היו בין הראשונים.
            </h2>

            {/* Body */}
            <div className="text-secondary-text text-[clamp(0.95rem,2.2vw,1.15rem)] leading-[1.75] space-y-4 mb-8 max-w-lg mx-auto">
              <p>הטיפולים הראשונים של Okonski Performance נפתחים בינואר.</p>
              <p>הצטרפו ל-Performance List וקבלו תוכן מקצועי, עדכונים על מה שאנחנו בונים וגישה מוקדמת לפתיחת היומן.</p>
            </div>

            {/* Benefits pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {["תוכן מקצועי", "עדכונים", "גישה מוקדמת לפתיחת היומן"].map((b) => (
                <span
                  key={b}
                  className="font-barlow text-[11px] font-bold tracking-widest uppercase text-silver/50 border border-white/10 px-4 py-2 rounded-full"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="text-right space-y-4"
              aria-label="טופס הצטרפות ל-Performance List"
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pl-name" className="text-sm font-bold text-silver/70 mr-1">
                  שם מלא
                  <span aria-hidden="true" className="text-brand mr-1">*</span>
                </label>
                <input
                  id="pl-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  aria-required="true"
                  aria-describedby={errors.name ? "pl-name-error" : undefined}
                  aria-invalid={errors.name ? "true" : "false"}
                  className={`w-full bg-charcoal/60 border rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:ring-2 transition-all disabled:opacity-50 ${
                    errors.name
                      ? "border-red-500/70 focus:ring-red-500/50"
                      : "border-white/10 focus:ring-brand/60 focus:border-brand/60"
                  }`}
                  dir="rtl"
                />
                {errors.name && (
                  <p id="pl-name-error" role="alert" className="text-red-400 text-sm mr-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pl-phone" className="text-sm font-bold text-silver/70 mr-1">
                  טלפון
                  <span aria-hidden="true" className="text-brand mr-1">*</span>
                </label>
                <input
                  id="pl-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                  inputMode="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  aria-required="true"
                  aria-describedby={errors.phone ? "pl-phone-error" : undefined}
                  aria-invalid={errors.phone ? "true" : "false"}
                  className={`w-full bg-charcoal/60 border rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:ring-2 transition-all disabled:opacity-50 text-right ${
                    errors.phone
                      ? "border-red-500/70 focus:ring-red-500/50"
                      : "border-white/10 focus:ring-brand/60 focus:border-brand/60"
                  }`}
                  dir="rtl"
                />
                {errors.phone && (
                  <p id="pl-phone-error" role="alert" className="text-red-400 text-sm mr-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pl-email" className="text-sm font-bold text-silver/70 mr-1">
                  אימייל
                  <span aria-hidden="true" className="text-brand mr-1">*</span>
                </label>
                <input
                  id="pl-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  inputMode="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  aria-required="true"
                  aria-describedby={errors.email ? "pl-email-error" : undefined}
                  aria-invalid={errors.email ? "true" : "false"}
                  className={`w-full bg-charcoal/60 border rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:ring-2 transition-all disabled:opacity-50 ${
                    errors.email
                      ? "border-red-500/70 focus:ring-red-500/50"
                      : "border-white/10 focus:ring-brand/60 focus:border-brand/60"
                  }`}
                  dir="ltr"
                  style={{ textAlign: "right" }}
                />
                {errors.email && (
                  <p id="pl-email-error" role="alert" className="text-red-400 text-sm mr-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Marketing Consent — NEVER pre-checked */}
              <div className="flex items-start gap-3 pt-3 pb-1 border-t border-white/5">
                <input
                  id="marketing-consent"
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  disabled={status === "loading"}
                  className="w-5 h-5 mt-0.5 shrink-0 accent-brand cursor-pointer focus:ring-2 focus:ring-brand focus:ring-offset-1 focus:ring-offset-primary rounded"
                />
                <label
                  htmlFor="marketing-consent"
                  className="text-sm text-silver/60 text-right leading-relaxed cursor-pointer"
                >
                  אני מאשר/ת לקבל מ-Okonski Performance עדכונים, תוכן ומידע שיווקי בדוא&rdquo;ל ובאמצעי הקשר שמסרתי, בהתאם ל
                  <Link
                    href="/privacy"
                    className="text-brand hover:text-brand-bright underline mx-0.5 focus:outline-none focus:ring-1 focus:ring-brand rounded transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    מדיניות הפרטיות
                  </Link>
                  . ידוע לי שניתן להסיר את עצמי בכל עת.
                </label>
              </div>

              {/* Privacy link */}
              <p className="text-xs text-silver/35 text-right leading-relaxed">
                שליחת הטופס מהווה הסכמה ל
                <Link href="/privacy" className="underline hover:text-silver/60 transition-colors">
                  מדיניות הפרטיות
                </Link>
                .
              </p>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading" || submitted}
                  aria-busy={status === "loading"}
                  className="relative w-full inline-flex items-center justify-center bg-brand text-white font-black py-5 px-8 rounded-xl text-base tracking-widest uppercase hover:bg-brand-bright transition-all duration-300 shadow-[0_4px_30px_rgba(62,111,168,0.2)] hover:shadow-[0_4px_40px_rgba(62,111,168,0.45)] focus:outline-none focus:ring-4 focus:ring-brand/40 active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
                >
                  <span className={`transition-opacity ${status === "loading" ? "opacity-0" : "opacity-100"}`}>
                    הצטרפו ל־Performance List
                  </span>

                  {/* Loading spinner */}
                  {status === "loading" && (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      aria-label="שולח..."
                    >
                      <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                    </div>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
