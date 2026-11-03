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

function getPainFeedback(level: number | null) {
  if (!level) return null;
  if (level <= 3) {
    return {
      label: `דרגה ${level}/10 — עומס קל / תחזוקה`,
      desc: "זמן מצוין לטפל בעומס המצטבר, לשפר טווחי תנועה ולמנוע פציעה לפני שהיא מחמירה.",
      badgeClass: "bg-emerald-500/15 text-emerald-300 border-emerald-400/30",
    };
  }
  if (level <= 6) {
    return {
      label: `דרגה ${level}/10 — כאב או עומס בינוני`,
      desc: "הגוף מאותת שמשהו דורש התייחסות. אבחון ממוקד ושחרור עומסים יעזרו לחזור לתפקוד מלא.",
      badgeClass: "bg-amber-500/15 text-amber-300 border-amber-400/30",
    };
  }
  return {
    label: `דרגה ${level}/10 — כאב משמעותי שמגביל תנועה`,
    desc: "מומלץ לבצע הערכה קלינית מדויקת ולהתאים תוכנית טיפול ושיקום להורדת הכאב בבטחה.",
    badgeClass: "bg-rose-500/15 text-rose-300 border-rose-400/30",
  };
}

export default function PerformanceList() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    note: "",
  });
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);
  const [painLevel, setPainLevel] = useState<number | null>(null);

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
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; email?: string }>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const validate = () => {
    const e: typeof errors = {};
    if (!formData.name.trim()) e.name = "שם מלא נדרש";
    if (!formData.phone.trim()) {
      e.phone = "מספר טלפון נייד נדרש ליצירת קשר";
    } else if (!/^[\d\s\-+()\u200f]{9,}$/.test(formData.phone.trim())) {
      e.phone = "מספר טלפון אינו תקין";
    }
    if (!formData.email.trim()) {
      e.email = "כתובת אימייל נדרשת ליצירת קשר";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
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
          pain_level: painLevel,
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

  const painFeedback = getPainFeedback(painLevel);

  return (
    <section
      id="performance-list"
      className="py-20 sm:py-28 lg:py-32 bg-[#FFFFFF] text-[#22272C] relative overflow-hidden scroll-mt-20 sm:scroll-mt-24 border-b border-[#A8B0B7]/30"
      aria-label="הצעד הראשון — השארת פרטים ותיאום"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="font-mono text-xs text-[#49677F] uppercase tracking-wider font-semibold block mb-3">
            הצעד הראשון
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-5xl font-bold text-[#22272C] tracking-tight leading-tight mb-4 text-balance">
            מוכנים להפסיק לחיות{" "}
            <span className="text-[#49677F]">עם הכאב והעומס?</span>
          </h2>

          <p className="text-[#22272C]/75 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            ספרו בקצרה מה מביא אתכם. <strong className="text-[#22272C] font-semibold">אני קורא כל פנייה בעצמי</strong>, וחוזר אליכם אישית לקראת פתיחת היומן עם קדימות בתורים ומחיר ייחודי למצטרפים מוקדמים.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* =====================================================
              MAIN LEAD CAPTURE CARD (7 Cols on Desktop)
             ===================================================== */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <div
                className="border border-[#A8B0B7]/30 bg-[#F5F5F2] rounded-sm p-8 sm:p-12 text-center shadow-sm"
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="w-14 h-14 rounded-full bg-[#142333] text-[#F5F5F2] flex items-center justify-center mx-auto mb-5">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#22272C] mb-3">
                  אתה ברשימה.
                </h3>
                <p className="text-[#22272C]/75 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-6">
                  אחזור אליך אישית לקראת פתיחת היומן, עוד לפני שהוא נפתח לכולם. בינתיים, אם יש משהו דחוף, אפשר לכתוב לי בוואטסאפ.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/972555172571?text=${encodeURIComponent(
                      `היי אופק, השארתי פרטים באתר לגבי ${selectedTopic || "טיפול"}${
                        painLevel ? ` (רמת כאב/עומס ${painLevel}/10)` : ""
                      }. אשמח לשוחח!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#142333] hover:bg-[#22272C] text-[#F5F5F2] font-semibold text-sm px-7 py-3.5 min-h-[46px] rounded-sm inline-flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>שלחו הודעה מהירה בוואטסאפ</span>
                    <span>←</span>
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="border border-[#A8B0B7]/35 bg-[#FFFFFF] rounded-sm p-6 sm:p-8 lg:p-10 text-right space-y-6 shadow-sm"
                aria-label="טופס השארת פרטים לטיפול והתייעצות"
              >
                {/* 1. Personal Contact Details (Required) */}
                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="pl-name" className="text-xs font-semibold text-[#22272C] flex items-center justify-between">
                        <span>שם מלא</span>
                        <span aria-hidden="true" className="text-[#49677F]">*</span>
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
                        className={`w-full bg-[#FFFFFF] border rounded-sm px-4 py-3.5 text-[#22272C] placeholder-[#A8B0B7] text-sm focus:outline-none focus:border-[#142333] focus:ring-1 focus:ring-[#142333] transition-colors disabled:opacity-50 ${
                          errors.name ? "border-red-500" : "border-[#A8B0B7]/40"
                        }`}
                        dir="rtl"
                      />
                      {errors.name && (
                        <p id="err-name" role="alert" className="text-red-500 text-xs font-medium">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="pl-phone" className="text-xs font-semibold text-[#22272C] flex items-center justify-between">
                        <span>טלפון נייד</span>
                        <span aria-hidden="true" className="text-[#49677F]">*</span>
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
                        className={`w-full bg-[#FFFFFF] border rounded-sm px-4 py-3.5 text-[#22272C] placeholder-[#A8B0B7] text-sm focus:outline-none focus:border-[#142333] focus:ring-1 focus:ring-[#142333] transition-colors disabled:opacity-50 text-right ${
                          errors.phone ? "border-red-500" : "border-[#A8B0B7]/40"
                        }`}
                        dir="rtl"
                      />
                      {errors.phone && (
                        <p id="err-phone" role="alert" className="text-red-500 text-xs font-medium">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email (Required) */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="pl-email" className="text-xs font-semibold text-[#22272C] flex items-center justify-between">
                      <span>כתובת אימייל</span>
                      <span aria-hidden="true" className="text-[#49677F]">*</span>
                    </label>
                    <input
                      id="pl-email"
                      name="email"
                      type="email"
                      placeholder="name@example.com"
                      autoComplete="email"
                      inputMode="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      aria-required="true"
                      aria-describedby={errors.email ? "err-email" : undefined}
                      aria-invalid={errors.email ? "true" : "false"}
                      className={`w-full bg-[#FFFFFF] border rounded-sm px-4 py-3.5 text-[#22272C] placeholder-[#A8B0B7] text-sm focus:outline-none focus:border-[#142333] focus:ring-1 focus:ring-[#142333] transition-colors disabled:opacity-50 text-right ${
                        errors.email ? "border-red-500" : "border-[#A8B0B7]/40"
                      }`}
                      dir="ltr"
                    />
                    {errors.email && (
                      <p id="err-email" role="alert" className="text-red-500 text-xs font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Optional Note underneath email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="pl-note" className="text-xs font-semibold text-[#22272C] flex items-center justify-between">
                      <span>בקצרה – במה נוכל לעזור?</span>
                      <span className="text-[#A8B0B7] text-[11px]">(לא חובה)</span>
                    </label>
                    <input
                      id="pl-note"
                      name="note"
                      type="text"
                      placeholder="למשל: כאב בכתף ימין באימונים, שיפור תנועה, התאוששות..."
                      value={formData.note}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full bg-[#FFFFFF] border border-[#A8B0B7]/40 rounded-sm px-4 py-3 text-[#22272C] placeholder-[#A8B0B7] text-sm focus:outline-none focus:border-[#142333] focus:ring-1 focus:ring-[#142333] transition-colors disabled:opacity-50"
                      dir="rtl"
                    />
                  </div>
                </div>

                {/* 2. Optional Quick Context (Pills & Pain Scale) */}
                <div className="pt-5 border-t border-[#A8B0B7]/30 space-y-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs sm:text-sm font-bold text-[#22272C]">
                      כדי שנגיע מוכנים לשיחה:
                    </p>
                    <span className="text-[11px] text-[#A8B0B7]">(בחירה מהירה – לא חובה)</span>
                  </div>

                  {/* Topic / Goal Selector Pills */}
                  <div>
                    <label className="text-xs text-[#22272C]/75 block mb-2 font-medium">
                      מה הסיבה המרכזית לפנייה שלך?
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {TOPIC_OPTIONS.map((topic) => {
                        const active = selectedTopic === topic.id;
                        return (
                          <button
                            key={topic.id}
                            type="button"
                            onClick={() => setSelectedTopic(active ? null : topic.id)}
                            className={`text-xs sm:text-[13px] font-medium px-3.5 py-2 min-h-[38px] rounded-sm border transition-colors cursor-pointer ${
                              active
                                ? "bg-[#142333] text-[#F5F5F2] border-[#142333]"
                                : "bg-[#F5F5F2] text-[#22272C] border-[#A8B0B7]/35 hover:border-[#142333]/50"
                            }`}
                          >
                            {topic.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Interactive 1-10 Pain / Load Scale */}
                  <div className="pt-3 border-t border-[#A8B0B7]/20">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <label className="text-xs text-[#22272C]/75 font-medium">
                        כמה כואב או מורגש העומס בסרגל 1–10?
                      </label>
                      {painLevel && (
                        <button
                          type="button"
                          onClick={() => setPainLevel(null)}
                          className="text-[11px] text-[#49677F] hover:text-[#142333] underline transition-colors"
                        >
                          איפוס
                        </button>
                      )}
                    </div>

                    <div
                      role="radiogroup"
                      aria-label="דרגת הכאב או העומס מ-1 עד 10"
                      className="grid grid-cols-5 sm:grid-cols-10 gap-1.5"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                        const isSelected = painLevel === num;
                        return (
                          <button
                            key={num}
                            type="button"
                            role="radio"
                            aria-checked={isSelected}
                            onClick={() => setPainLevel(isSelected ? null : num)}
                            className={`min-h-[40px] rounded-sm border text-sm font-mono transition-colors flex items-center justify-center cursor-pointer ${
                              isSelected
                                ? "bg-[#142333] text-[#F5F5F2] border-[#142333] font-bold"
                                : "border-[#A8B0B7]/35 bg-[#FFFFFF] text-[#22272C] hover:border-[#142333]/60"
                            }`}
                          >
                            {num}
                          </button>
                        );
                      })}
                    </div>

                    <div className="flex justify-between text-[11px] text-[#A8B0B7] mt-1.5 px-0.5 font-mono">
                      <span>1 — עומס קל / תחזוקה</span>
                      <span>10 — כאב חד ומגביל</span>
                    </div>

                    {painFeedback && (
                      <div className="mt-3 p-4 rounded-sm bg-[#F5F5F2] border border-[#A8B0B7]/30">
                        <span className="inline-block text-xs font-bold text-[#142333] mb-1">
                          {painFeedback.label}
                        </span>
                        <p className="text-xs text-[#22272C]/75 leading-relaxed">{painFeedback.desc}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start gap-3 pt-3 border-t border-[#A8B0B7]/30">
                  <input
                    id="marketing-consent"
                    type="checkbox"
                    checked={marketingConsent}
                    onChange={(e) => setMarketingConsent(e.target.checked)}
                    disabled={status === "loading"}
                    className="w-4 h-4 mt-1 rounded-sm border-[#A8B0B7] text-[#142333] focus:ring-[#142333] shrink-0 cursor-pointer"
                  />
                  <label
                    htmlFor="marketing-consent"
                    className="text-xs text-[#22272C]/70 text-right leading-relaxed cursor-pointer select-none"
                  >
                    אני מאשר/ת שמירת הפרטים ליצירת קשר וקבלת עדכונים מ־Okonski Performance בהתאם ל
                    <Link
                      href="/privacy"
                      className="text-[#142333] font-medium underline mx-1 hover:text-[#49677F]"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      מדיניות הפרטיות
                    </Link>
                    .
                  </label>
                </div>

                {submitError && (
                  <p role="alert" className="text-red-500 text-xs font-medium text-right">
                    {submitError}
                  </p>
                )}

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={status === "loading" || hasSubmitted}
                    aria-busy={status === "loading"}
                    className="w-full bg-[#142333] text-[#F5F5F2] font-semibold hover:bg-[#22272C] transition-colors py-4 px-6 rounded-sm text-sm tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed min-h-[50px] relative"
                  >
                    <span className={`transition-opacity ${status === "loading" ? "opacity-0" : "opacity-100"}`}>
                      שליחת פרטים והבטחת עדיפות ←
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
            )}
          </div>

          {/* =====================================================
              SIDEBAR: DIRECT CONTACT & WHAT HAPPENS NEXT (5 Cols)
             ===================================================== */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-right">
            {/* Reassurance Card */}
            <div className="rounded-sm bg-[#FFFFFF] border border-[#A8B0B7]/35 p-6 sm:p-8 shadow-sm">
              <span className="font-mono text-xs text-[#49677F] uppercase tracking-wider block mb-2 font-semibold">
                ייעוץ מקדים
              </span>
              <h3 className="text-xl font-bold text-[#22272C] mb-3">
                לא בטוחים אם המקרה שלכם מתאים?
              </h3>
              <p className="text-sm text-[#22272C]/75 leading-relaxed mb-6">
                לא חייבים לדעת מראש מה מקור הכאב או איזה טיפול בדיוק אתם צריכים. מתחילים בשיחת היכרות קצרה, תשאול והערכה – ומשם מבינים יחד מה הצעד הנכון עבורכם.
              </p>

              {/* Direct WhatsApp Button */}
              <a
                href="https://wa.me/972555172571?text=%D7%94%D7%99%D7%99%20%D7%90%D7%95%D7%A4%D7%A7%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%AA%D7%99%D7%99%D7%A2%D7%A5%20%D7%9C%D7%92%D7%91%D7%99%20%D7%98%D7%99%D7%A4%D7%95%D7%9C"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#F5F5F2] hover:bg-[#FFFFFF] text-[#142333] border border-[#A8B0B7]/40 font-semibold text-sm px-5 py-3.5 min-h-[46px] rounded-sm inline-flex items-center justify-between transition-colors group"
              >
                <span>לא בטוחים? דברו איתי בוואטסאפ</span>
                <span className="text-[#49677F] group-hover:-translate-x-1 transition-transform">←</span>
              </a>
            </div>

            {/* Quick Contact Card */}
            <div className="grid grid-cols-1">
              <a
                href="https://wa.me/972555172571"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-sm bg-[#FFFFFF] border border-[#A8B0B7]/35 hover:border-[#142333]/50 p-5 flex items-center justify-between transition-colors shadow-sm"
              >
                <div>
                  <p className="font-mono text-xs text-[#49677F] tracking-wide mb-1">וואטסאפ ישיר</p>
                  <p className="text-base font-bold text-[#22272C]">055-5172571</p>
                </div>
                <span className="text-xs font-semibold text-[#142333]">שליחת הודעה ←</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
