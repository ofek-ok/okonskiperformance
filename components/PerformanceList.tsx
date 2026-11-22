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

type FormStatus = "idle" | "loading" | "success" | "error";

const TOPIC_OPTIONS = [
  { id: "פציעת ספורט", label: "פציעת ספורט / אימון" },
  { id: "כאבי גב וצוואר", label: "כאבי גב, צוואר או כתפיים" },
  { id: "עומס משרדי", label: "עומס מישיבה וקריירה" },
  { id: "תחזוקה והתאוששות", label: "תחזוקה והתאוששות" },
  { id: "שיפור תנועה", label: "שיפור תנועה וביצועים" },
];

export default function PerformanceList() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  });
  const [selectedTopic, setSelectedTopic] = useState<string>("פציעת ספורט");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const handler = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedTopic(customEvent.detail);
      }
    };
    window.addEventListener("okonski:select-topic", handler);
    return () => window.removeEventListener("okonski:select-topic", handler);
  }, []);

  const validate = () => {
    const e: typeof errors = {};
    if (!formData.name.trim()) e.name = "שם מלא נדרש";
    if (!formData.phone.trim()) {
      e.phone = "מספר טלפון נייד נדרש ליצירת קשר";
    } else if (!/^[\d\s\-+()\u200f]{9,}$/.test(formData.phone.trim())) {
      e.phone = "מספר טלפון אינו תקין";
    }
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      e.email = "כתובת אימייל אינה תקינה";
    }
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

    if (!marketingConsent) {
      setSubmitError("יש לאשר יצירת קשר וקבלת עדכונים לפני השליחה.");
      return;
    }
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
          topic: selectedTopic,
          pain_level: null,
          note: formData.note.trim(),
          marketing_consent: marketingConsent,
          utm_source: utm.utm_source || "website",
          utm_medium: utm.utm_medium || "organic",
          utm_campaign: utm.utm_campaign || "performance_list",
        }),
      });

      if (!response.ok) throw new Error("subscribe_failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setSubmitError("לא הצלחנו לשמור את הפרטים כרגע. נסו שוב או שלחו לנו הודעה בוואטסאפ.");
      setHasSubmitted(false);
    }
  };

  return (
    <section
      id="performance-list"
      className="py-16 sm:py-24 bg-[#0E1116] scroll-mt-16 border-b border-white/[0.08]"
      aria-label="השארת פרטים לתיאום מפגש"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Concrete Heading at Weight 500 */}
        <div className="max-w-3xl text-right mb-12">
          <h2 className="text-2xl sm:text-4xl font-medium text-[#F4F6F9] tracking-tight leading-tight mb-4">
            השארת פרטים לתיאום מפגש ראשון
          </h2>
          <p className="text-[#A7AAB4] text-sm sm:text-base leading-relaxed max-w-2xl">
            ספרו בקצרה מה מביא אתכם. <strong className="text-[#F4F6F9] font-medium">אני קורא כל פנייה בעצמי</strong>, וחוזר אליכם אישית לקראת פתיחת היומן עם קדימות בתורים ומחיר ייחודי למצטרפים מוקדמים.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* MAIN LEAD FORM (7 Cols) */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <div
                className="border border-white/[0.08] bg-[#151A22] rounded-xl p-6 sm:p-8 text-right"
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                <h3 className="text-2xl font-medium text-[#F4F6F9] mb-3">
                  הפרטים נקלטו בהצלחה.
                </h3>
                <p className="text-[#A7AAB4] text-sm sm:text-base leading-relaxed mb-6">
                  אחזור אליך אישית לקראת פתיחת היומן. בינתיים, אם יש שאלה דחופה, אפשר לפנות אליי ישירות בוואטסאפ.
                </p>
                <a
                  href={`https://wa.me/972555172571?text=${encodeURIComponent(
                    `היי אופק, השארתי פרטים באתר לגבי ${selectedTopic}. אשמח לשוחח.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <span>שליחת הודעה בוואטסאפ</span>
                  <span>←</span>
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border border-white/[0.08] bg-[#151A22] rounded-xl p-6 sm:p-8 text-right space-y-6"
                aria-label="טופס השארת פרטים לטיפול והתייעצות"
              >
                {/* Topic Selector — Radius 8px (rounded-lg), Spacing 8px (gap-2) */}
                <div>
                  <label className="text-xs sm:text-sm font-medium text-[#F4F6F9] block mb-3">
                    מה הסיבה המרכזית לפנייה שלך?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {TOPIC_OPTIONS.map((topic) => {
                      const active = selectedTopic === topic.id;
                      return (
                        <button
                          key={topic.id}
                          type="button"
                          onClick={() => setSelectedTopic(topic.id)}
                          className={`m-btn text-xs sm:text-sm font-normal px-4 py-2 rounded-lg border cursor-pointer ${
                            active
                              ? "bg-[#F4F6F9] text-[#0E1116] border-[#F4F6F9] font-medium"
                              : "bg-[#0E1116] text-[#A7AAB4] hover:text-[#F4F6F9] border-white/[0.08] hover:border-white/[0.16]"
                          }`}
                        >
                          {topic.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Personal Contact Details */}
                <div className="pt-4 border-t border-white/[0.08] space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="pl-name" className="text-xs font-medium text-[#F4F6F9] flex items-center justify-between">
                        <span>שם מלא</span>
                        <span aria-hidden="true" className="text-[#A7AAB4]">*</span>
                      </label>
                      <input
                        id="pl-name"
                        name="name"
                        type="text"
                        placeholder="למשל: דניאל כהן"
                        autoComplete="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        aria-required="true"
                        aria-describedby={errors.name ? "err-name" : undefined}
                        aria-invalid={errors.name ? "true" : "false"}
                        className={`input-dark ${
                          errors.name ? "border-red-500/70" : "border-white/[0.08]"
                        }`}
                        dir="rtl"
                      />
                      {errors.name && (
                        <p id="err-name" role="alert" className="text-red-400 text-xs">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="pl-phone" className="text-xs font-medium text-[#F4F6F9] flex items-center justify-between">
                        <span>טלפון נייד</span>
                        <span aria-hidden="true" className="text-[#A7AAB4]">*</span>
                      </label>
                      <input
                        id="pl-phone"
                        name="phone"
                        type="tel"
                        placeholder="050-0000000"
                        autoComplete="tel"
                        inputMode="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        disabled={status === "loading"}
                        aria-required="true"
                        aria-describedby={errors.phone ? "err-phone" : undefined}
                        aria-invalid={errors.phone ? "true" : "false"}
                        className={`input-dark text-right ${
                          errors.phone ? "border-red-500/70" : "border-white/[0.08]"
                        }`}
                        dir="rtl"
                      />
                      {errors.phone && (
                        <p id="err-phone" role="alert" className="text-red-400 text-xs">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="pl-email" className="text-xs font-medium text-[#F4F6F9] flex items-center justify-between">
                      <span>כתובת אימייל</span>
                      <span className="text-[#A7AAB4] text-xs">(לא חובה)</span>
                    </label>
                    <input
                      id="pl-email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      autoComplete="email"
                      inputMode="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      aria-invalid={errors.email ? "true" : "false"}
                      className={`input-dark text-right ${
                        errors.email ? "border-red-500/70" : "border-white/[0.08]"
                      }`}
                      dir="ltr"
                    />
                    {errors.email && (
                      <p id="err-email" role="alert" className="text-red-400 text-xs">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Short Optional Note */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="pl-note" className="text-xs font-medium text-[#F4F6F9] flex items-center justify-between">
                      <span>בקצרה – איפה כואב או מה המטרה שלך?</span>
                      <span className="text-[#A7AAB4] text-xs">(לא חובה)</span>
                    </label>
                    <input
                      id="pl-note"
                      name="note"
                      type="text"
                      placeholder="למשל: כאב בכתף ימין באימונים בשבועיים האחרונים..."
                      value={formData.note}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="input-dark"
                      dir="rtl"
                    />
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 pt-2 border-t border-white/[0.08]">
                  <input
                    id="marketing-consent"
                    type="checkbox"
                    checked={marketingConsent}
                    onChange={(e) => setMarketingConsent(e.target.checked)}
                    disabled={status === "loading"}
                    className="w-4 h-4 mt-1 rounded bg-[#0E1116] border-white/20 accent-[#2F5E9E] shrink-0 cursor-pointer"
                  />
                  <label
                    htmlFor="marketing-consent"
                    className="text-xs text-[#A7AAB4] text-right leading-relaxed cursor-pointer select-none"
                  >
                    אני מאשר/ת שמירת הפרטים ליצירת קשר וקבלת עדכונים מ־Okonski Performance בהתאם ל
                    <Link
                      href="/privacy"
                      className="text-[#F4F6F9] underline mx-1"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      מדיניות הפרטיות
                    </Link>
                    .
                  </label>
                </div>

                {submitError && (
                  <p role="alert" className="text-red-400 text-xs text-right">
                    {submitError}
                  </p>
                )}

                {/* Primary Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={status === "loading" || hasSubmitted}
                    aria-busy={status === "loading"}
                    className="btn-primary w-full py-3 px-6 disabled:opacity-60 disabled:cursor-not-allowed relative"
                  >
                    <span className={`transition-opacity ${status === "loading" ? "opacity-0" : "opacity-100"}`}>
                      שריון קדימות בתורים ←
                    </span>
                    {status === "loading" && (
                      <div className="absolute inset-0 flex items-center justify-center" aria-label="שולח...">
                        <svg
                          className="animate-spin h-4 w-4 text-white"
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
            )}
          </div>

          {/* SIDEBAR: DIRECT CONTACT (5 Cols — Quiet Secondary Button) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-right">
            <div className="rounded-xl bg-[#151A22] border border-white/[0.08] p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-medium text-[#F4F6F9] mb-2">
                לא בטוחים אם המקרה שלכם מתאים?
              </h3>
              <p className="text-sm text-[#A7AAB4] leading-relaxed mb-6">
                לא חייבים לדעת מראש מה מקור הכאב או איזה טיפול בדיוק אתם צריכים. מתחילים בשיחת היכרות קצרה, תשאול והערכה – ומשם מבינים יחד מה הצעד הנכון עבורכם.
              </p>

              <a
                href="https://wa.me/972555172571?text=%D7%94%D7%99%D7%99%20%D7%90%D7%95%D7%A4%D7%A7%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%AA%D7%99%D7%99%D7%A2%D7%A5%20%D7%9C%D7%92%D7%91%D7%99%20%D7%98%D7%99%D7%A4%D7%95%D7%9C"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full justify-between"
              >
                <span>שיחה ישירה בוואטסאפ</span>
                <span className="text-[#A7AAB4]">←</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
