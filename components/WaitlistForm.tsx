"use client";

import { useState } from "react";

const GOALS = [
  "שיקום וחזרה לפעילות",
  "שיפור ביצועים בספורט",
  "תחזוקת הגוף ומניעה",
  "שיפור תפקוד ואיכות חיים",
  "שיפור התפקוד תחת עומס",
];

type FormState = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");
  const [message, setMessage] = useState("");
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
    setErrorMsg("");

    const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
    const payload = {
      name,
      phone,
      goal,
      message,
      submittedAt: new Date().toISOString(),
    };

    try {
      if (webhookUrl) {
        const res = await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Webhook error");
      } else {
        console.log("Dev mode — payload:", payload);
        await new Promise((r) => setTimeout(r, 900));
      }
      setFormState("success");
    } catch (err) {
      setFormState("error");
      setErrorMsg("אירעה שגיאה. אנא נסה שוב.");
    }
  };

  /* ── Success state ─────────────────────────── */
  if (formState === "success") {
    return (
      <div className="bg-charcoal border border-brand/30 p-6 sm:p-12 text-center">
        {/* Check icon */}
        <div className="w-14 h-14 sm:w-16 sm:h-16 border border-brand/40 bg-brand/10 flex items-center justify-center mx-auto mb-6 sm:mb-8">
          <svg className="w-7 h-7 sm:w-8 sm:h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <span className="eyebrow text-center">הצלחה</span>
        <h3 className="text-xl sm:text-2xl font-black text-silver mb-3 sm:mb-4">
          הפרטים התקבלו בהצלחה.
        </h3>
        <p className="text-silver/60 text-sm leading-relaxed max-w-sm mx-auto">
          נכנסת לרשימת העדיפות של Okonski Performance.
          <br />
          ניצור איתך קשר בוואטסאפ עם פתיחת היומן.
        </p>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-white/8">
          <p className="font-barlow text-silver/30 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase">
            ASSESS · RECOVER · PERFORM
          </p>
        </div>
      </div>
    );
  }

  /* ── Form ──────────────────────────────────── */
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-charcoal border border-white/8 p-6 sm:p-10 space-y-6 sm:space-y-8"
    >
      {/* Name */}
      <div>
        <label className="block text-[10px] sm:text-xs font-bold text-silver/50 tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-2 sm:mb-3">
          שם מלא <span className="text-brand">*</span>
        </label>
        <input
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="ישראל ישראלי"
          className="input-dark text-base"
        />
      </div>

      {/* Phone */}
      <div>
        <label className="block text-[10px] sm:text-xs font-bold text-silver/50 tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-2 sm:mb-3">
          טלפון / WhatsApp <span className="text-brand">*</span>
        </label>
        <input
          type="tel"
          required
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="05X-XXXXXXX"
          className="input-dark text-base"
          dir="ltr"
        />
      </div>

      {/* Goal */}
      <div>
        <label className="block text-[10px] sm:text-xs font-bold text-silver/50 tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-3 sm:mb-4">
          מה המטרה העיקרית שלך? <span className="text-brand">*</span>
        </label>
        <div className="space-y-2">
          {GOALS.map((g) => {
            const active = goal === g;
            return (
              <label
                key={g}
                className={`flex items-center gap-3.5 sm:gap-4 cursor-pointer border px-4 sm:px-5 py-3.5 sm:py-4 transition-all duration-200 ${
                  active
                    ? "border-brand bg-brand/10 text-silver"
                    : "border-white/8 bg-white/2 text-silver/50 hover:border-white/20 hover:text-silver/70"
                }`}
              >
                {/* Custom radio */}
                <div
                  className={`w-4 h-4 border flex-shrink-0 flex items-center justify-center transition-colors ${
                    active ? "border-brand bg-brand" : "border-white/20"
                  }`}
                >
                  {active && (
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  )}
                </div>
                <input
                  type="radio"
                  name="goal"
                  value={g}
                  required
                  checked={active}
                  onChange={() => setGoal(g)}
                  className="sr-only"
                />
                <span className={`text-xs sm:text-sm font-medium ${active ? "text-silver" : ""}`}>
                  {g}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      {/* Free text */}
      <div>
        <label className="block text-[10px] sm:text-xs font-bold text-silver/50 tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-2 sm:mb-3">
          ספר על המטרה או האתגר שלך{" "}
          <span className="text-silver/30 normal-case tracking-normal font-normal">
            (אופציונלי)
          </span>
        </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          placeholder="לדוגמה: אני מתאמן ב-BJJ ואני סובל מכאב בכתף זה חצי שנה..."
          className="input-dark text-base resize-none"
        />
      </div>

      {/* Error */}
      {formState === "error" && (
        <div className="border border-red-500/30 bg-red-500/8 px-4 sm:px-5 py-3.5 sm:py-4">
          <p className="text-red-400 text-xs sm:text-sm">{errorMsg}</p>
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "loading"}
        className="w-full btn-primary text-sm sm:text-base py-4 sm:py-5 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formState === "loading" ? (
          <span className="flex items-center justify-center gap-3">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            שולח...
          </span>
        ) : (
          "היכנס לרשימת העדיפות"
        )}
      </button>

      <p className="text-center text-silver/30 text-[11px] sm:text-xs tracking-wide">
        הפרטים שלך לא יועברו לגורמים חיצוניים
      </p>
    </form>
  );
}
