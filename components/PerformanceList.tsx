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
  const [selectedTopic, setSelectedTopic] = useState<string>("פציעת ספורט");
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
      className="py-16 sm:py-24 lg:py-32 bg-charcoalDark relative overflow-hidden scroll-mt-20 sm:scroll-mt-24 border-b border-white/[0.06]"
      aria-label="הצעד הראשון — השארת פרטים ותיאום"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_65%_55%_at_50%_35%,rgba(30,45,68,0.35)_0%,rgba(10,11,13,1)_100%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 relative z-10">
        {/* Section Header inspired by Adir Asher's "הצעד הראשון" */}
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-3 mb-3.5">
            <span className="w-8 h-[2px] rounded-full bg-logoIce/70" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium text-silverOff tracking-wide">
              הצעד הראשון
            </span>
            <span className="w-8 h-[2px] rounded-full bg-logoIce/70" aria-hidden="true" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-4 sm:mb-5 text-balance">
            מוכנים להפסיק לחיות{" "}
            <span className="text-logoIce">עם הכאב והעומס?</span>
          </h2>

          <p className="text-neutral-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl mx-auto">
            ספרו בקצרה מה מביא אתכם. <strong className="text-white">אני קורא כל פנייה בעצמי</strong>, וחוזר אליכם אישית לקראת פתיחת היומן עם קדימות בתורים ומחיר ייחודי למצטרפים מוקדמים.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
          {/* =====================================================
              MAIN LEAD CAPTURE CARD (7 Cols on Desktop)
             ===================================================== */}
          <div className="lg:col-span-7">
            {status === "success" ? (
              <div
                className="border border-emerald-400/30 bg-neutral-900/60 backdrop-blur-md rounded-3xl p-7 sm:p-12 text-center shadow-2xl animate-fade-up"
                role="status"
                aria-live="polite"
                aria-atomic="true"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 flex items-center justify-center mx-auto mb-5 sm:mb-6">
                  <svg className="w-7 h-7 sm:w-8 sm:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  אתה ברשימה. 🙌
                </h3>
                <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-6">
                  אחזור אליך אישית לקראת פתיחת היומן, עוד לפני שהוא נפתח לכולם. בינתיים, אם יש משהו דחוף, אפשר לכתוב לי בוואטסאפ.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/972555172571?text=${encodeURIComponent(
                      `היי אופק, השארתי פרטים באתר לגבי ${selectedTopic}${
                        painLevel ? ` (רמת כאב/עומס ${painLevel}/10)` : ""
                      }. אשמח לשוחח!`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto bg-[#20BA56] hover:bg-[#1da84d] text-white font-semibold text-sm px-6 py-3.5 min-h-[46px] rounded-full inline-flex items-center justify-center gap-2 transition-all shadow-md"
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
                className="border border-white/[0.1] bg-neutral-900/50 backdrop-blur-md rounded-3xl p-5 sm:p-8 lg:p-9 text-right space-y-6 shadow-[0_20px_50px_-14px_rgba(0,0,0,0.65)]"
                aria-label="טופס השארת פרטים לטיפול והתייעצות"
              >
                {/* 1. Topic / Goal Selector Pills */}
                <div>
                  <label className="text-xs sm:text-sm font-bold text-white block mb-3">
                    1. מה הסיבה המרכזית לפנייה שלך?
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {TOPIC_OPTIONS.map((topic) => {
                      const active = selectedTopic === topic.id;
                      return (
                        <button
                          key={topic.id}
                          type="button"
                          onClick={() => setSelectedTopic(topic.id)}
                          className={`text-xs sm:text-[13px] font-semibold px-3.5 py-2.5 min-h-[40px] rounded-2xl border transition-all duration-200 cursor-pointer ${
                            active
                              ? "bg-logoIce/20 text-white border-logoIce/60 shadow-[0_0_20px_-5px_rgba(125,184,232,0.35)]"
                              : "bg-charcoalDark/70 text-silver hover:text-white border-white/10 hover:border-white/25"
                          }`}
                        >
                          {topic.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Interactive 1-10 Pain / Load Scale (Inspired by Adir Asher's סרגל הכאב) */}
                <div className="pt-2 border-t border-white/[0.07]">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2.5">
                    <label className="text-xs sm:text-sm font-bold text-white">
                      2. כמה כואב או מורגש העומס בסרגל 1–10?
                    </label>
                    <span className="text-[11px] text-silverDark">(בחירה מהירה – לא חובה)</span>
                  </div>

                  <div
                    role="radiogroup"
                    aria-label="דרגת הכאב או העומס מ-1 עד 10"
                    className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => {
                      const isSelected = painLevel === num;
                      const colorTone =
                        num <= 3
                          ? isSelected
                            ? "bg-emerald-500 text-black border-emerald-300 font-extrabold shadow-[0_0_15px_rgba(16,185,129,0.4)]"
                            : "border-emerald-500/30 text-emerald-200/90 hover:bg-emerald-500/15"
                          : num <= 6
                          ? isSelected
                            ? "bg-amber-400 text-black border-amber-200 font-extrabold shadow-[0_0_15px_rgba(245,158,11,0.4)]"
                            : "border-amber-500/30 text-amber-200/90 hover:bg-amber-500/15"
                          : isSelected
                          ? "bg-rose-500 text-white border-rose-300 font-extrabold shadow-[0_0_15px_rgba(244,63,94,0.45)]"
                          : "border-rose-500/30 text-rose-200/90 hover:bg-rose-500/15";

                      return (
                        <button
                          key={num}
                          type="button"
                          role="radio"
                          aria-checked={isSelected}
                          onClick={() => setPainLevel(isSelected ? null : num)}
                          className={`min-h-[42px] rounded-xl border bg-charcoalDark/80 text-sm transition-all duration-150 flex items-center justify-center cursor-pointer active:scale-95 ${colorTone}`}
                        >
                          {num}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex justify-between text-[11px] text-silverDark mt-1.5 px-1">
                    <span>1 — עומס קל / תחזוקה</span>
                    <span>10 — כאב חד ומגביל</span>
                  </div>

                  {painFeedback && (
                    <div className="mt-3 p-3.5 rounded-2xl bg-charcoalDark/90 border border-white/10 animate-fade-in">
                      <span
                        className={`inline-block text-[11px] font-bold px-2.5 py-0.5 rounded-full border mb-1 ${painFeedback.badgeClass}`}
                      >
                        {painFeedback.label}
                      </span>
                      <p className="text-xs text-silverOff leading-relaxed">{painFeedback.desc}</p>
                    </div>
                  )}
                </div>

                {/* 3. Personal Contact Details */}
                <div className="pt-2 border-t border-white/[0.07] space-y-4">
                  <p className="text-xs sm:text-sm font-bold text-white">
                    3. פרטי התקשרות לחזרה מהירה:
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="pl-name" className="text-xs font-semibold text-silverOff flex items-center justify-between">
                        <span>שם מלא</span>
                        <span aria-hidden="true" className="text-logoIce">*</span>
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
                        className={`w-full bg-charcoalDark/90 border rounded-2xl px-4 py-3.5 text-white placeholder-silverDark text-base sm:text-sm focus:outline-none focus:border-logoIce focus:ring-1 focus:ring-logoIce transition-all disabled:opacity-50 ${
                          errors.name ? "border-red-500/70" : "border-white/15"
                        }`}
                        dir="rtl"
                      />
                      {errors.name && (
                        <p id="err-name" role="alert" className="text-red-400 text-xs font-medium">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Phone (Required for CRM & WhatsApp return) */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="pl-phone" className="text-xs font-semibold text-silverOff flex items-center justify-between">
                        <span>טלפון נייד</span>
                        <span aria-hidden="true" className="text-logoIce">*</span>
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
                        className={`w-full bg-charcoalDark/90 border rounded-2xl px-4 py-3.5 text-white placeholder-silverDark text-base sm:text-sm focus:outline-none focus:border-logoIce focus:ring-1 focus:ring-logoIce transition-all disabled:opacity-50 text-right ${
                          errors.phone ? "border-red-500/70" : "border-white/15"
                        }`}
                        dir="rtl"
                      />
                      {errors.phone && (
                        <p id="err-phone" role="alert" className="text-red-400 text-xs font-medium">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="pl-email" className="text-xs font-semibold text-silverOff flex items-center justify-between">
                      <span>כתובת אימייל</span>
                      <span className="text-silverDark text-[11px]">(לא חובה)</span>
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
                      className={`w-full bg-charcoalDark/90 border rounded-2xl px-4 py-3 text-white placeholder-silverDark text-base sm:text-sm focus:outline-none focus:border-logoIce focus:ring-1 focus:ring-logoIce transition-all disabled:opacity-50 text-right ${
                        errors.email ? "border-red-500/70" : "border-white/15"
                      }`}
                      dir="ltr"
                    />
                    {errors.email && (
                      <p id="err-email" role="alert" className="text-red-400 text-xs font-medium">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Short Optional Note */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="pl-note" className="text-xs font-semibold text-silverOff flex items-center justify-between">
                      <span>בקצרה – איפה כואב או מה המטרה שלך?</span>
                      <span className="text-silverDark text-[11px]">(לא חובה)</span>
                    </label>
                    <input
                      id="pl-note"
                      name="note"
                      type="text"
                      placeholder="למשל: כאב בכתף ימין באימונים בשבועיים האחרונים..."
                      value={formData.note}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      className="w-full bg-charcoalDark/90 border border-white/15 rounded-2xl px-4 py-3 text-white placeholder-silverDark text-base sm:text-sm focus:outline-none focus:border-logoIce focus:ring-1 focus:ring-logoIce transition-all disabled:opacity-50"
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
                    className="w-5 h-5 mt-0.5 rounded bg-charcoalDark border-white/20 text-logoBlue focus:ring-logoBlue shrink-0 cursor-pointer"
                  />
                  <label
                    htmlFor="marketing-consent"
                    className="text-xs text-silverMuted text-right leading-relaxed cursor-pointer select-none"
                  >
                    אני מאשר/ת שמירת הפרטים ליצירת קשר וקבלת עדכונים מ־Okonski Performance בהתאם ל
                    <Link
                      href="/privacy"
                      className="text-logoIce underline mx-0.5"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      מדיניות הפרטיות
                    </Link>
                    .
                  </label>
                </div>

                {submitError && (
                  <p role="alert" className="text-red-400 text-xs font-medium text-right">
                    {submitError}
                  </p>
                )}

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={status === "loading" || hasSubmitted}
                    aria-busy={status === "loading"}
                    className="w-full bg-white text-black font-bold hover:bg-neutral-100 transition-all duration-200 py-4 px-6 rounded-full text-sm sm:text-base tracking-wide flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed min-h-[52px] active:scale-[0.98] relative shadow-[0_10px_30px_-5px_rgba(255,255,255,0.2)]"
                  >
                    <span className={`transition-opacity ${status === "loading" ? "opacity-0" : "opacity-100"}`}>
                      שליחת פרטים והבטחת עדיפות ←
                    </span>
                    {status === "loading" && (
                      <div className="absolute inset-0 flex items-center justify-center" aria-label="שולח...">
                        <svg
                          className="animate-spin h-5 w-5 text-black"
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
              Inspired by Adir Asher's "הצעד הראשון" Action Cards
             ===================================================== */}
          <div className="lg:col-span-5 flex flex-col gap-4 sm:gap-5 text-right">
            {/* Reassurance Card: "לא בטוחים אם המקרה שלכם מתאים?" */}
            <div className="rounded-3xl bg-steelDark/90 border border-white/[0.08] p-6 sm:p-7 shadow-lg">
              <div className="w-10 h-10 rounded-2xl bg-logoIce/15 border border-logoIce/30 text-logoIce flex items-center justify-center font-bold text-lg mb-4">
                ?
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                לא בטוחים אם המקרה שלכם מתאים?
              </h3>
              <p className="text-[13.5px] sm:text-sm text-silver leading-relaxed mb-5">
                לא חייבים לדעת מראש מה מקור הכאב או איזה טיפול בדיוק אתם צריכים. מתחילים בשיחת היכרות קצרה, תשאול והערכה – ומשם מבינים יחד מה הצעד הנכון עבורכם.
              </p>

              {/* Direct WhatsApp Button */}
              <a
                href="https://wa.me/972555172571?text=%D7%94%D7%99%D7%99%20%D7%90%D7%95%D7%A4%D7%A7%2C%20%D7%94%D7%92%D7%A2%D7%AA%D7%99%20%D7%93%D7%A8%D7%9A%20%D7%94%D7%90%D7%AA%D7%A8%20%D7%95%D7%90%D7%A9%D7%9E%D7%97%20%D7%9C%D7%94%D7%AA%D7%99%D7%99%D7%A2%D7%A5%20%D7%9C%D7%92%D7%91%D7%99%20%D7%98%D7%99%D7%A4%D7%95%D7%9C"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#20BA56]/15 hover:bg-[#20BA56]/25 text-white border border-[#20BA56]/40 font-semibold text-xs sm:text-sm px-5 py-3.5 min-h-[48px] rounded-2xl inline-flex items-center justify-between transition-all duration-200 group"
              >
                <span className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#20BA56] animate-pulse" />
                  <span>לא בטוחים? דברו איתי בוואטסאפ</span>
                </span>
                <span className="text-[#20BA56] group-hover:-translate-x-1 transition-transform">←</span>
              </a>
            </div>

            {/* Quick Contact Card (Direct WhatsApp Only — Phone & Address removed per request) */}
            <div className="grid grid-cols-1 gap-3.5">
              <a
                href="https://wa.me/972555172571"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-neutral-900/45 border border-white/[0.08] hover:border-white/20 p-4 sm:p-5 flex items-center gap-4 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-white/[0.06] border border-white/10 text-logoIce flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-silver">וואטסאפ ישיר</p>
                  <p className="text-sm sm:text-base font-bold text-white">שלחו הודעה עכשיו</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
