"use client";

import React, { useState } from "react";
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

type FormStatus = "idle" | "loading" | "success" | "error";

export default function PerformanceList() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [marketingConsent, setMarketingConsent] = useState(false); // never pre-checked
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const e: typeof errors = {};
    if (!formData.name.trim()) e.name = "שם פרטי נדרש";
    if (formData.phone.trim() && !/^[\d\s\-+()\u200f]{7,}$/.test(formData.phone.trim())) e.phone = "מספר טלפון אינו תקין";
    if (!formData.email.trim()) e.email = "כתובת אימייל נדרשת";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) e.email = "כתובת אימייל אינה תקינה";
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (hasSubmitted || status === "loading") return;
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      document.getElementById(`pl-${Object.keys(newErrors)[0]}`)?.focus();
      return;
    }

    if (!marketingConsent) { setSubmitError("יש לאשר קבלת עדכונים ותוכן מקצועי לפני ההרשמה."); return; }
    setHasSubmitted(true);
    setSubmitError("");
    setStatus("loading");

    try {
      const utm = getUtmFromUrl();
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name: formData.name.trim(),
          phone: formData.phone.trim(),
          email: formData.email.trim(),
          marketing_consent: marketingConsent,
          utm_source: utm.utm_source || "website",
          utm_medium: utm.utm_medium || "organic",
          utm_campaign: utm.utm_campaign || "performance_list"
        })
      });

      if (!response.ok) throw new Error("subscribe_failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setSubmitError("לא הצלחנו לשמור את הפרטים כרגע. נסו שוב בעוד רגע.");
      setHasSubmitted(false);
    }
  };

  return (
    <section
      id="performance-list"
      className="py-16 sm:py-24 lg:py-36 bg-charcoalDark relative overflow-hidden scroll-mt-20 sm:scroll-mt-24 border-b border-white/[0.06]"
      aria-label="Performance List — הצטרפות"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(30,34,41,0.6)_0%,rgba(10,11,13,1)_100%)]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-4 sm:px-8 max-w-xl lg:max-w-2xl relative z-10">

        {/* ── SUCCESS STATE ── */}
        {status === "success" ? (
          <div className="card-steel rounded-2xl p-6 sm:p-12 text-center" role="status" aria-live="polite" aria-atomic="true">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-steelBase border border-logoIce/30 text-logoIce flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-lg">
              <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white mb-3 sm:mb-4">
              ברוכים הבאים ל־Performance List.
            </h3>
            <p className="text-silverOff text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-5 sm:mb-6">
              נעדכן אתכם לקראת פתיחת Okonski Performance בינואר 2027 ונשלח הודעה כשהיומן ייפתח לקביעת טיפולים.
            </p>
            <p className="text-logoIce font-semibold text-xs sm:text-sm">
              שמחים שהצטרפת.
            </p>
          </div>

        ) : (
          /* ── FORM STATE ── */
          <div className="text-center">

            {/* Headline */}
            <h2 className="text-[clamp(1.95rem,6.8vw,4.5rem)] font-black text-white tracking-tight leading-[1.1] mb-4 sm:mb-6 text-balance">
              הצטרפו ל־<span dir="ltr" className="inline-block whitespace-nowrap">Performance List</span>
            </h2>

            {/* Body */}
            <div className="text-silverMuted text-sm sm:text-base lg:text-lg leading-relaxed space-y-2 mb-8 sm:mb-10 max-w-lg mx-auto">
              <p>
                הטיפולים של Okonski Performance צפויים להיפתח ב־24 בינואר 2027.
              </p>
              <p className="text-xs sm:text-base">
                הצטרפו לרשימה כדי לקבל עדכון על פתיחת הפעילות, לצד תוכן מקצועי בנושאי כאב, התאוששות, תחזוקת הגוף ושיפור יכולת.
              </p>
            </div>

            {/* Form */}
            <form
              onSubmit={handleSubmit}
              noValidate
              className="card-steel rounded-2xl p-5 sm:p-8 text-right space-y-4 shadow-2xl"
              aria-label="טופס הצטרפות ל-Performance List"
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pl-name" className="text-xs font-semibold text-silverOff flex items-center justify-between">
                  <span>שם פרטי</span>
                  <span aria-hidden="true" className="text-logoIce">*</span>
                </label>
                <input
                  id="pl-name"
                  name="name"
                  type="text"
                  placeholder="למשל: דניאל"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  aria-required="true"
                  aria-describedby={errors.name ? "err-name" : undefined}
                  aria-invalid={errors.name ? "true" : "false"}
                  className={`w-full bg-charcoalDark border rounded-xl px-4 py-3.5 text-white placeholder-silverDark text-base sm:text-sm focus:outline-none focus:border-logoIce focus:ring-1 focus:ring-logoIce transition-all disabled:opacity-50 cursor-text ${
                    errors.name
                      ? "border-red-500/70 focus:ring-red-500/40"
                      : "border-white/15"
                  }`}
                  dir="rtl"
                />
                {errors.name && (
                  <p id="err-name" role="alert" className="text-red-400 text-xs font-medium mr-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pl-phone" className="text-xs font-semibold text-silverOff flex items-center justify-between">
                  <span>טלפון נייד</span>
                  <span className="text-silverDark text-[11px]">(לא חובה)</span>
                </label>
                <input
                  id="pl-phone"
                  name="phone"
                  type="tel"
                  placeholder="050-0000000"
                  autoComplete="tel"
                  inputMode="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  aria-required="false"
                  aria-describedby={errors.phone ? "err-phone" : undefined}
                  aria-invalid={errors.phone ? "true" : "false"}
                  className={`w-full bg-charcoalDark border rounded-xl px-4 py-3.5 text-white placeholder-silverDark text-base sm:text-sm focus:outline-none focus:border-logoIce focus:ring-1 focus:ring-logoIce transition-all disabled:opacity-50 text-right cursor-text ${
                    errors.phone
                      ? "border-red-500/70 focus:ring-red-500/40"
                      : "border-white/15"
                  }`}
                  dir="rtl"
                />
                {errors.phone && (
                  <p id="err-phone" role="alert" className="text-red-400 text-xs font-medium mr-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pl-email" className="text-xs font-semibold text-silverOff flex items-center justify-between">
                  <span>כתובת אימייל</span>
                  <span aria-hidden="true" className="text-logoIce">*</span>
                </label>
                <input
                  id="pl-email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  required
                  inputMode="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  aria-required="true"
                  aria-describedby={errors.email ? "err-email" : undefined}
                  aria-invalid={errors.email ? "true" : "false"}
                  className={`w-full bg-charcoalDark border rounded-xl px-4 py-3.5 text-white placeholder-silverDark text-base sm:text-sm focus:outline-none focus:border-logoIce focus:ring-1 focus:ring-logoIce transition-all disabled:opacity-50 cursor-text text-right ${
                    errors.email
                      ? "border-red-500/70 focus:ring-red-500/40"
                      : "border-white/15"
                  }`}
                  dir="ltr"
                />
                {errors.email && (
                  <p id="err-email" role="alert" className="text-red-400 text-xs font-medium mr-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Marketing consent */}
              <div className="flex items-start gap-3 pt-3 pb-1 border-t border-white/[0.08]">
                <input
                  id="marketing-consent"
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  disabled={status === "loading"}
                  className="w-5 h-5 mt-0.5 rounded bg-charcoalDark border-white/20 text-logoBlue focus:ring-logoBlue shrink-0 cursor-pointer"
                />
                <label
                  htmlFor="marketing-consent"
                  className="text-xs text-silverMuted text-right leading-relaxed cursor-pointer select-none"
                >
                  אני מאשר/ת לקבל עדכונים ותוכן מקצועי מ-Okonski Performance, בהתאם ל
                  <Link
                    href="/privacy"
                    className="text-logoIce underline mx-0.5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    מדיניות הפרטיות
                  </Link>
                  . ניתן להסיר את עצמי בכל עת בלחיצה אחת.
                </label>
              </div>

              {submitError && (
                <p role="alert" className="text-red-400 text-xs font-medium text-right">
                  {submitError}
                </p>
              )}

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading" || hasSubmitted}
                  aria-busy={status === "loading"}
                  className="btn-logo-metallic w-full text-white font-bold py-4 px-8 rounded-xl text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed min-h-[52px] shadow-lg active:scale-[0.99]"
                >
                  <span className={`transition-opacity ${status === "loading" ? "opacity-0" : "opacity-100"}`}>
                    הצטרפו ל־Performance List
                  </span>
                  {status === "loading" && (
                    <div className="absolute inset-0 flex items-center justify-center" aria-label="שולח...">
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
                  {status !== "loading" && (
                    <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </div>

              <p className="text-[11px] text-center text-silverDark pt-1">
                ללא ספאם. הסרה פשוטה בכל שלב. הפרטיות שלך מוגנת.
              </p>

            </form>
          </div>
        )}
      </div>
    </section>
  );
}
