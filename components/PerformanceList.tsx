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

type FormStatus = "idle" | "loading" | "success";

export default function PerformanceList() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [marketingConsent, setMarketingConsent] = useState(false); // never pre-checked
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const validate = () => {
    const e: typeof errors = {};
    if (!formData.name.trim()) e.name = "שם מלא נדרש";
    if (!formData.phone.trim()) e.phone = "מספר טלפון נדרש";
    else if (!/^[\d\s\-+()\u200f]{7,}$/.test(formData.phone.trim())) e.phone = "מספר טלפון אינו תקין";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (hasSubmitted || status === "loading") return;
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      document.getElementById(`pl-${Object.keys(newErrors)[0]}`)?.focus();
      return;
    }
    setHasSubmitted(true);
    setStatus("loading");
    const utm = getUtmFromUrl();
    // Future: POST /api/subscribe — no PII in URLs or console
    void utm;
    setTimeout(() => setStatus("success"), 1200);
  };

  return (
    <section
      id="performance-list"
      className="py-24 sm:py-36 md:py-48 bg-primary relative overflow-hidden"
      aria-label="Performance List — הצטרפות"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(20,24,29,0.8)_0%,rgba(11,13,16,1)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] max-w-lg h-[40vh] bg-brand/10 blur-[100px] rounded-full pointer-events-none opacity-40"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-8 max-w-xl relative z-10">

        {/* ── SUCCESS STATE ── */}
        {status === "success" ? (
          <div className="text-center py-8" role="status" aria-live="polite" aria-atomic="true">
            <p
              className="font-barlow text-[clamp(2.2rem,9vw,4.5rem)] font-black text-white tracking-[0.08em] uppercase leading-[1.1] mb-10"
              dir="ltr"
            >
              YOU&rsquo;RE ON<br />THE LIST.
            </p>
            <p className="text-white font-bold text-[clamp(1.1rem,3vw,1.35rem)] mb-5">
              ברוכים הבאים ל-Performance List.
            </p>
            <p className="text-secondary-text text-[clamp(0.95rem,2.2vw,1.1rem)] leading-relaxed max-w-md mx-auto mb-12">
              נעדכן אתכם לקראת פתיחת Okonski Performance בינואר 2027 ונשלח הודעה כשהיומן ייפתח לקביעת טיפולים.
            </p>
            <p
              className="font-barlow text-[clamp(1.1rem,3.5vw,1.5rem)] text-white font-black tracking-widest uppercase"
              dir="ltr"
            >
              UNTIL THEN —{" "}
              <span className="text-white/30">KEEP PERFORMING.</span>
            </p>
          </div>

        ) : (
          /* ── FORM STATE ── */
          <div className="text-center">

            {/* Date */}
            <p
              className="font-barlow text-brand font-black tracking-[0.28em] uppercase text-xs sm:text-sm mb-7"
              dir="ltr"
            >
              JANUARY 2027
            </p>

            {/* Headline */}
            <h2 className="text-[clamp(2.5rem,8vw,4.25rem)] font-black text-white tracking-tight leading-[1.08] mb-8 text-balance">
              הצטרפו ל־Performance List.
            </h2>

            {/* Body — High contrast near-white per requirement #4 */}
            <div className="text-white/90 text-[clamp(1.05rem,2.2vw,1.2rem)] leading-[1.8] space-y-4 mb-10 max-w-lg mx-auto font-normal">
              <p>
                הטיפולים הראשונים של Okonski Performance נפתחים בינואר 2027.
              </p>
              <p>
                הצטרפו ל־Performance List כדי לקבל תוכן מקצועי ועדכונים ולהיות הראשונים לדעת כשהיומן ייפתח לקביעת טיפולים.
              </p>
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
                <label htmlFor="pl-name" className="text-sm font-semibold text-silver/90 mr-1">
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
                  aria-describedby={errors.name ? "err-name" : undefined}
                  aria-invalid={errors.name ? "true" : "false"}
                  className={`w-full bg-charcoal/80 border rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:ring-2 transition-all disabled:opacity-50 hover:border-white/20 cursor-text ${
                    errors.name
                      ? "border-red-500/70 focus:ring-red-500/40"
                      : "border-white/10 focus:ring-brand/60 focus:border-brand"
                  }`}
                  dir="rtl"
                />
                {errors.name && (
                  <p id="err-name" role="alert" className="text-red-400 text-sm font-medium mr-1">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pl-phone" className="text-sm font-semibold text-silver/90 mr-1">
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
                  aria-describedby={errors.phone ? "err-phone" : undefined}
                  aria-invalid={errors.phone ? "true" : "false"}
                  className={`w-full bg-charcoal/80 border rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:ring-2 transition-all disabled:opacity-50 text-right hover:border-white/20 cursor-text ${
                    errors.phone
                      ? "border-red-500/70 focus:ring-red-500/40"
                      : "border-white/10 focus:ring-brand/60 focus:border-brand"
                  }`}
                  dir="rtl"
                />
                {errors.phone && (
                  <p id="err-phone" role="alert" className="text-red-400 text-sm font-medium mr-1">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <label htmlFor="pl-email" className="text-sm font-semibold text-silver/90 mr-1">
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
                  aria-describedby={errors.email ? "err-email" : undefined}
                  aria-invalid={errors.email ? "true" : "false"}
                  className={`w-full bg-charcoal/80 border rounded-xl px-5 py-4 text-white text-base focus:outline-none focus:ring-2 transition-all disabled:opacity-50 hover:border-white/20 cursor-text ${
                    errors.email
                      ? "border-red-500/70 focus:ring-red-500/40"
                      : "border-white/10 focus:ring-brand/60 focus:border-brand"
                  }`}
                  dir="ltr"
                  style={{ textAlign: "right" }}
                />
                {errors.email && (
                  <p id="err-email" role="alert" className="text-red-400 text-sm font-medium mr-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Marketing consent — never pre-checked */}
              <div className="flex items-start gap-3 pt-4 pb-1 border-t border-white/5">
                <input
                  id="marketing-consent"
                  type="checkbox"
                  checked={marketingConsent}
                  onChange={(e) => setMarketingConsent(e.target.checked)}
                  disabled={status === "loading"}
                  className="w-5 h-5 mt-0.5 shrink-0 accent-brand cursor-pointer focus:ring-2 focus:ring-brand focus:ring-offset-1 focus:ring-offset-primary"
                />
                <label
                  htmlFor="marketing-consent"
                  className="text-xs sm:text-sm text-silver/75 text-right leading-relaxed cursor-pointer"
                >
                  אני מאשר/ת לקבל עדכונים ותוכן מקצועי מ-Okonski Performance, בהתאם ל
                  <Link
                    href="/privacy"
                    className="text-brand hover:text-brand-bright underline mx-0.5 transition-colors focus:outline-none focus:ring-1 focus:ring-brand rounded"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    מדיניות הפרטיות
                  </Link>
                  . ניתן להסיר את עצמי בכל עת.
                </label>
              </div>

              {/* Privacy notice */}
              <p className="text-xs text-silver/50 text-right leading-relaxed">
                שליחת הטופס מהווה הסכמה ל
                <Link href="/privacy" className="underline hover:text-silver/80 transition-colors">
                  מדיניות הפרטיות
                </Link>
                .
              </p>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "loading" || hasSubmitted}
                  aria-busy={status === "loading"}
                  className="relative w-full inline-flex items-center justify-center bg-brand text-white font-black py-5 px-8 rounded-xl text-sm tracking-widest uppercase hover:bg-brand-bright cursor-pointer transition-all duration-300 shadow-[0_4px_25px_rgba(62,111,168,0.25)] hover:shadow-[0_6px_40px_rgba(62,111,168,0.45)] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.99] disabled:opacity-70 disabled:cursor-not-allowed overflow-hidden"
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
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </section>
  );
}
