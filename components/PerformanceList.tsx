"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

interface UtmData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

function getUtmFromUrl(): UtmData {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const result: UtmData = {};
  (["utm_source", "utm_medium", "utm_campaign"] as const).forEach((key) => {
    const val = params.get(key);
    if (val) result[key] = val;
  });
  return result;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const TOPIC_OPTIONS = [
  "פציעת ספורט / כאב",
  "כאבי גב, צוואר או כתפיים",
  "עומס מישיבה וקריירה",
  "תחזוקה והתאוששות",
  "שיפור תנועה וביצועים",
];

// Map the values dispatched from the service section to dropdown options
const TOPIC_ALIASES: Record<string, string> = {
  "פציעת ספורט": "פציעת ספורט / כאב",
  "תחזוקה והתאוששות": "תחזוקה והתאוששות",
  "שיפור תנועה": "שיפור תנועה וביצועים",
};

const inputClass =
  "w-full bg-[#14181F] border border-white/20 text-white placeholder-[#94A3B8]/70 px-4 py-3.5 text-base rounded-sm focus:outline-none focus:border-[#3E6FA8] transition-colors";

export default function PerformanceList() {
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", note: "" });
  const [topic, setTopic] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; phone?: string; topic?: string; email?: string }>({});
  const [submitError, setSubmitError] = useState("");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail) setTopic(TOPIC_ALIASES[detail] || detail);
    };
    window.addEventListener("okonski:select-topic", handler);
    return () => window.removeEventListener("okonski:select-topic", handler);
  }, []);

  const validate = () => {
    const e: typeof errors = {};
    if (!formData.name.trim()) e.name = "שם מלא נדרש";
    if (!formData.phone.trim()) e.phone = "מספר טלפון נדרש";
    else if (!/^[\d\s\-+()]{9,}$/.test(formData.phone.trim())) e.phone = "מספר טלפון אינו תקין";
    if (!topic) e.topic = "יש לבחור תחום עניין";
    if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      e.email = "כתובת אימייל אינה תקינה";
    }
    return e;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      document.getElementById(`pl-${Object.keys(newErrors)[0]}`)?.focus();
      return;
    }
    if (!consent) {
      setSubmitError("יש לאשר יצירת קשר לפני השליחה.");
      return;
    }
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
          topic,
          note: formData.note.trim(),
          marketing_consent: consent,
          utm_source: utm.utm_source || "website",
          utm_medium: utm.utm_medium || "organic",
          utm_campaign: utm.utm_campaign || "performance_list",
        }),
      });
      if (!response.ok) throw new Error("subscribe_failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setSubmitError("לא הצלחנו לשמור את הפרטים כרגע. נסו שוב או שלחו הודעה בוואטסאפ.");
    }
  };

  const errorText = (id: string, msg?: string) =>
    msg ? (
      <p id={`err-${id}`} role="alert" className="text-red-400 text-xs mt-1.5">
        {msg}
      </p>
    ) : null;

  return (
    <section
      id="performance-list"
      className="py-20 sm:py-28 lg:py-32 bg-[#0A0B0D] text-white scroll-mt-20"
      aria-labelledby="pl-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 text-right">
          <span className="eyebrow">רשימת המתעניינים</span>
          <h2 id="pl-heading" className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-6">
            השאירו פרטים.
            <br />
            נחזור אליכם אישית.
          </h2>
          <p className="text-[#94A3B8] text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            הפעילות נמצאת בהקמה. המצטרפים לרשימה יקבלו עדכון אישי עם פתיחת הפעילות, ללא התחייבות.
          </p>
          <a
            href="https://wa.me/972555172571"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#E2E8F0] underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors"
          >
            מעדיפים וואטסאפ? 055-5172571
          </a>
        </div>

        <div className="lg:col-span-7">
          {status === "success" ? (
            <div className="border-t border-white/20 pt-8 text-right" role="status">
              <h3 className="text-3xl font-bold mb-3">תודה, קיבלנו.</h3>
              <p className="text-[#94A3B8] text-base leading-relaxed">
                הפרטים נקלטו ברשימת המתעניינים. נחזור אליכם בקרוב.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5 text-right">
              <div>
                <label htmlFor="pl-name" className="block text-sm text-[#E2E8F0] mb-2">
                  שם מלא <span aria-hidden="true">*</span>
                </label>
                <input
                  id="pl-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  aria-invalid={!!errors.name}
                  className={inputClass}
                />
                {errorText("name", errors.name)}
              </div>

              <div>
                <label htmlFor="pl-phone" className="block text-sm text-[#E2E8F0] mb-2">
                  טלפון <span aria-hidden="true">*</span>
                </label>
                <input
                  id="pl-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  dir="ltr"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  aria-invalid={!!errors.phone}
                  className={`${inputClass} text-right`}
                />
                {errorText("phone", errors.phone)}
              </div>

              <div>
                <label htmlFor="pl-topic" className="block text-sm text-[#E2E8F0] mb-2">
                  תחום עניין <span aria-hidden="true">*</span>
                </label>
                <select
                  id="pl-topic"
                  name="topic"
                  required
                  value={topic}
                  onChange={(e) => {
                    setTopic(e.target.value);
                    setErrors((prev) => ({ ...prev, topic: undefined }));
                  }}
                  aria-invalid={!!errors.topic}
                  className={inputClass}
                >
                  <option value="">בחירה</option>
                  {TOPIC_OPTIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
                {errorText("topic", errors.topic)}
              </div>

              <div>
                <label htmlFor="pl-email" className="block text-sm text-[#E2E8F0] mb-2">
                  אימייל <span className="text-[#94A3B8]">(לא חובה)</span>
                </label>
                <input
                  id="pl-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  dir="ltr"
                  value={formData.email}
                  onChange={handleChange}
                  aria-invalid={!!errors.email}
                  className={`${inputClass} text-right`}
                />
                {errorText("email", errors.email)}
              </div>

              <div>
                <label htmlFor="pl-note" className="block text-sm text-[#E2E8F0] mb-2">
                  בקצרה, במה נוכל לעזור <span className="text-[#94A3B8]">(לא חובה)</span>
                </label>
                <textarea
                  id="pl-note"
                  name="note"
                  rows={3}
                  maxLength={500}
                  value={formData.note}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div className="flex items-start gap-3 pt-1">
                <input
                  id="marketing-consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => {
                    setConsent(e.target.checked);
                    setSubmitError("");
                  }}
                  className="mt-1 h-4 w-4 accent-[#3E6FA8] shrink-0"
                />
                <label htmlFor="marketing-consent" className="text-sm text-[#94A3B8] leading-relaxed">
                  אני מאשר/ת יצירת קשר ושליחת עדכונים בנוגע לפתיחת הפעילות. פרטים נוספים ב
                  <Link href="/privacy" className="underline text-[#E2E8F0] hover:text-white">
                    מדיניות הפרטיות
                  </Link>
                  .
                </label>
              </div>

              {submitError && (
                <p role="alert" className="text-red-400 text-sm">
                  {submitError}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary w-full sm:w-auto disabled:opacity-60"
              >
                {status === "loading" ? "שולח..." : "הצטרפות לרשימת המתעניינים"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
