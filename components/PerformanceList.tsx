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

const TRACK_OPTIONS = [
  { id: "כאב ופציעה", label: "כאב ופציעה" },
  { id: "תחזוקה והתאוששות", label: "תחזוקה והתאוששות" },
  { id: "שיפור תנועה וביצועים", label: "שיפור תנועה וביצועים" },
  { id: "עדיין לא בטוח", label: "עדיין לא בטוח" },
];

const START_STEPS = [
  {
    num: "01",
    title: "השארת פרטים",
    desc: "משאירים שם, טלפון ובאיזה תחום מדובר, בדקה אחת וללא התחייבות.",
  },
  {
    num: "02",
    title: "חזרה אישית עם פתיחת היומן",
    desc: "אני חוזר אישית אל הנרשמים ברשימת המתעניינים כדי להבין את הצורך ולבדוק התאמה.",
  },
  {
    num: "03",
    title: "תיאום מפגש ראשון",
    desc: "בוחרים מועד נוח בקליניקה ומתחילים באבחון וטיפול, כולל הטבת מצטרפים מוקדמים.",
  },
];

export default function PerformanceList() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [selectedTopic, setSelectedTopic] = useState<string>("כאב ופציעה");
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
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
      e.phone = "מספר טלפון נדרש ליצירת קשר";
    } else if (!/^[\d\s\-+()\u200f]{9,}$/.test(formData.phone.trim())) {
      e.phone = "מספר טלפון אינו תקין";
    }
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
          email: null,
          topic: selectedTopic,
          pain_level: null,
          note: null,
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
      aria-label="הצטרפות לרשימת המתעניינים"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Heading */}
        <div className="max-w-3xl text-right mb-12">
          <h2 className="text-2xl sm:text-4xl font-medium text-[#F4F6F9] tracking-tight leading-tight mb-4">
            הקליניקה נפתחת בקרוב. הצטרפו לרשימת המתעניינים
          </h2>
          <p className="text-[#A7AAB4] text-sm sm:text-base leading-relaxed max-w-2xl">
            השאירו פרטים כדי לקבל עדכון אישי עם פתיחת היומן, קדימות בתיאום המפגשים הראשונים ומחיר השקה מיוחד למצטרפים המוקדמים.
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
                  הצטרפת בהצלחה לרשימת המתעניינים.
                </h3>
                <p className="text-[#A7AAB4] text-sm sm:text-base leading-relaxed mb-6">
                  ניצור איתך קשר אישי עם פתיחת היומן ונעדכן על ההטבה למצטרפים המוקדמים. בינתיים, אם יש שאלה דחופה, אפשר לפנות אליי ישירות בוואטסאפ.
                </p>
                <a
                  href={`https://wa.me/972555172571?text=${encodeURIComponent(
                    `היי אופק, הצטרפתי לרשימת המתעניינים באתר בתחום ${selectedTopic}. אשמח לשוחח.`
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
                aria-label="טופס הצטרפות לרשימת המתעניינים"
              >
                {/* Name & Phone */}
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
                      <span>טלפון</span>
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

                {/* Preferred Track Selector */}
                <div className="pt-4 border-t border-white/[0.08]">
                  <label className="text-xs sm:text-sm font-medium text-[#F4F6F9] block mb-3">
                    איזה מסלול הכי רלוונטי לך?
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {TRACK_OPTIONS.map((track) => {
                      const active = selectedTopic === track.id;
                      return (
                        <button
                          key={track.id}
                          type="button"
                          onClick={() => setSelectedTopic(track.id)}
                          className={`m-btn text-xs sm:text-sm font-normal px-3 py-3 rounded-lg border cursor-pointer text-center ${
                            active
                              ? "bg-[#2F5E9E]/20 text-white border-[#2F5E9E] font-medium"
                              : "bg-[#0E1116] text-[#A7AAB4] hover:text-[#F4F6F9] border-white/[0.08] hover:border-white/[0.16]"
                          }`}
                        >
                          {track.label}
                        </button>
                      );
                    })}
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

                {/* Primary Submit Button + Guarantee */}
                <div>
                  <button
                    type="submit"
                    disabled={status === "loading" || hasSubmitted}
                    aria-busy={status === "loading"}
                    className="btn-primary w-full py-3 px-6 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>
                      {status === "loading" ? "שומר פרטים..." : "הצטרפות לרשימת המתעניינים"}
                    </span>
                  </button>
                  <p className="text-xs text-[#A7AAB4] mt-3 text-right">
                    ללא תשלום וללא התחייבות. ניצור קשר עם פתיחת היומן ונעדכן על ההטבה למצטרפים המוקדמים.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* SIDEBAR: HOW IT STARTS + WHATSAPP (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-right">
            <div className="rounded-xl bg-[#151A22] border border-white/[0.08] p-6 sm:p-8">
              <h3 className="text-lg sm:text-xl font-medium text-[#F4F6F9] mb-4">
                איך זה עובד מרגע ההרשמה?
              </h3>
              <ol className="space-y-4 mb-6">
                {START_STEPS.map((step) => (
                  <li key={step.num} className="pt-4 first:pt-0 border-t first:border-t-0 border-white/[0.08] flex items-baseline gap-3">
                    <span className="font-mono tabular-nums text-xs text-[#2F5E9E] shrink-0">
                      {step.num}
                    </span>
                    <div>
                      <strong className="text-sm font-medium text-[#F4F6F9] block mb-1">
                        {step.title}
                      </strong>
                      <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="pt-6 border-t border-white/[0.08]">
                <p className="text-xs sm:text-sm text-[#A7AAB4] mb-4">
                  מעדיפים להתייעץ ישירות לפני השארת פרטים?
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
      </div>
    </section>
  );
}
