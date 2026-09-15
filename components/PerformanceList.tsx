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
  ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "ref"].forEach((key) => {
    const val = params.get(key);
    if (val) result[key as keyof UtmData] = val;
  });
  return result;
}

export default function PerformanceList() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [marketingConsent, setMarketingConsent] = useState(false); // NEVER pre-checked
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});

  const validate = () => {
    const newErrors: typeof errors = {};
    if (!formData.name.trim()) newErrors.name = "שם מלא נדרש";
    if (!formData.phone.trim()) newErrors.phone = "מספר טלפון נדרש";
    if (!formData.email.trim()) {
      newErrors.email = "כתובת אימייל נדרשת";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "כתובת אימייל אינה תקינה";
    }
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setStatus("loading");

    // Build the consent record as specified
    const utm = getUtmFromUrl();
    const consentRecord = {
      full_name: formData.name.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      created_at: new Date().toISOString(),
      lead_source: "performance_list",
      ...utm,
      performance_list_status: "subscribed",
      marketing_consent: marketingConsent,
      consent_timestamp: new Date().toISOString(),
      consent_version: "2026-09-v1",
      privacy_policy_version: "2026-09-v1",
    };

    // Future: POST to /api/subscribe with consentRecord
    console.log("Lead captured:", { ...consentRecord, email: "[redacted]", phone: "[redacted]", full_name: "[redacted]" });

    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section id="performance-list" className="py-24 sm:py-32 md:py-48 bg-primary relative overflow-hidden">

      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,24,29,1)_0%,_rgba(11,13,16,1)_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[50vh] bg-brand/10 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">

        {status === "success" ? (
          <div className="animate-fade-up flex flex-col items-center justify-center py-16">
            <h2 className="font-barlow text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-widest uppercase mb-10">
              YOU&rsquo;RE ON<br className="sm:hidden" /> THE LIST.
            </h2>
            <div className="max-w-2xl mx-auto space-y-6 mb-16">
              <p className="text-white font-bold text-2xl sm:text-3xl">ברוכים הבאים ל־Performance List.</p>
              <p className="text-secondary-text text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
                אנחנו נעדכן אתכם בדרך לקראת פתיחת Okonski Performance בינואר 2027 — ונשלח לכם עדכון כשהגישה ליומן תיפתח.
              </p>
            </div>
            <p className="font-barlow text-3xl sm:text-4xl text-white font-black tracking-widest uppercase mb-4">
              UNTIL THEN — <span className="text-silver/40">KEEP PERFORMING.</span>
            </p>
          </div>
        ) : (
          <div className="animate-fade-up">
            <p className="font-barlow text-brand font-black tracking-[0.3em] uppercase text-sm sm:text-base mb-8">
              JANUARY 2027
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-12">
              היו בין הראשונים.
            </h2>

            <div className="max-w-3xl mx-auto space-y-4 text-secondary-text text-lg sm:text-xl md:text-2xl leading-relaxed font-medium mb-12">
              <p>הטיפולים הראשונים של Okonski Performance נפתחים בינואר.</p>
              <p>
                הצטרפו ל־Performance List וקבלו תוכן מקצועי, עדכונים על מה שאנחנו בונים וגישה מוקדמת לפתיחת היומן.
              </p>
            </div>

            <p className="font-barlow text-silver/60 font-black tracking-widest uppercase text-sm sm:text-base mb-16">
              תוכן מקצועי <span className="mx-2 sm:mx-4 text-brand">•</span> עדכונים <span className="mx-2 sm:mx-4 text-brand">•</span> גישה מוקדמת לפתיחת היומן
            </p>

            <form
              onSubmit={handleSubmit}
              noValidate
              className="max-w-md mx-auto space-y-5 text-right"
              aria-label="טופס הצטרפות ל-Performance List"
            >

              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pl-name" className="text-sm font-bold text-silver/80">
                  שם מלא <span aria-hidden="true" className="text-brand">*</span>
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
                  aria-invalid={!!errors.name}
                  className={`w-full bg-charcoal/50 border rounded-xl px-5 py-5 text-white focus:outline-none focus:ring-2 transition-all disabled:opacity-50 ${
                    errors.name ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-brand focus:border-brand"
                  }`}
                  dir="rtl"
                />
                {errors.name && (
                  <p id="pl-name-error" className="text-red-400 text-sm" role="alert">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pl-phone" className="text-sm font-bold text-silver/80">
                  טלפון <span aria-hidden="true" className="text-brand">*</span>
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
                  aria-invalid={!!errors.phone}
                  className={`w-full bg-charcoal/50 border rounded-xl px-5 py-5 text-white focus:outline-none focus:ring-2 transition-all disabled:opacity-50 text-right ${
                    errors.phone ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-brand focus:border-brand"
                  }`}
                  dir="rtl"
                />
                {errors.phone && (
                  <p id="pl-phone-error" className="text-red-400 text-sm" role="alert">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pl-email" className="text-sm font-bold text-silver/80">
                  אימייל <span aria-hidden="true" className="text-brand">*</span>
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
                  aria-invalid={!!errors.email}
                  className={`w-full bg-charcoal/50 border rounded-xl px-5 py-5 text-white focus:outline-none focus:ring-2 transition-all disabled:opacity-50 ${
                    errors.email ? "border-red-500 focus:ring-red-500" : "border-white/10 focus:ring-brand focus:border-brand"
                  }`}
                  dir="ltr"
                  style={{ textAlign: "right" }}
                />
                {errors.email && (
                  <p id="pl-email-error" className="text-red-400 text-sm" role="alert">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Marketing Consent — NEVER pre-checked per spec */}
              <div className="flex items-start gap-4 py-4 border-t border-white/5">
                <div className="relative flex items-start mt-0.5 shrink-0">
                  <input
                    id="marketing-consent"
                    type="checkbox"
                    checked={marketingConsent}
                    onChange={(e) => setMarketingConsent(e.target.checked)}
                    disabled={status === "loading"}
                    className="w-5 h-5 accent-brand cursor-pointer focus:ring-2 focus:ring-brand focus:ring-offset-2 focus:ring-offset-primary"
                    aria-describedby="consent-description"
                  />
                </div>
                <label htmlFor="marketing-consent" id="consent-description" className="text-sm text-silver/70 text-right leading-relaxed cursor-pointer">
                  אני מאשר/ת לקבל מ-Okonski Performance עדכונים, תוכן ומידע שיווקי בדוא&rdquo;ל ובאמצעי הקשר שמסרתי, בהתאם ל
                  <Link href="/privacy" className="text-brand hover:text-brand-bright underline mx-0.5 transition-colors focus:outline-none focus:ring-1 focus:ring-brand rounded">
                    מדיניות הפרטיות
                  </Link>
                  . ידוע לי שניתן להסיר את עצמי בכל עת.
                </label>
              </div>

              {/* Privacy Notice above CTA */}
              <p className="text-xs text-silver/40 text-right leading-relaxed">
                שליחת הטופס מהווה אישור לכך שקראתי את{" "}
                <Link href="/privacy" className="underline hover:text-silver/70 transition-colors">
                  מדיניות הפרטיות
                </Link>{" "}
                ואני מסכים/ה להעברת הפרטים לצורך טיפול בפנייה.
              </p>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "loading"}
                aria-busy={status === "loading"}
                className="group relative w-full inline-flex items-center justify-center bg-white text-primary-text font-black py-5 px-10 rounded-xl text-lg tracking-wide hover:bg-brand hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(62,111,168,0.4)] overflow-hidden focus:outline-none focus:ring-4 focus:ring-brand/30 mt-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className={`relative z-10 flex items-center gap-3 transition-opacity ${status === "loading" ? "opacity-0" : "opacity-100"}`}>
                  הצטרפו ל־Performance List
                </span>
                {status === "loading" && (
                  <div className="absolute inset-0 flex items-center justify-center z-20" aria-label="שולח...">
                    <svg className="animate-spin h-6 w-6 text-primary-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                  </div>
                )}
                <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              </button>

            </form>
          </div>
        )}
      </div>
    </section>
  );
}
