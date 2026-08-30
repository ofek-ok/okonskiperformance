"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [marketingConsent, setMarketingConsent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In the future: Connect to Clinify CRM here
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-brand/10 border border-brand/20 rounded-2xl p-8 max-w-md mx-auto text-center animate-fade-up">
        <h3 className="text-3xl font-black text-white mb-4">אתם בפנים.</h3>
        <p className="text-silver/80 text-lg leading-relaxed">
          נשמור אתכם מעודכנים ונעדכן אתכם ראשונים כשהיומן לינואר ייפתח.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div>
        <label htmlFor="name" className="sr-only">שם מלא</label>
        <input
          id="name"
          type="text"
          required
          placeholder="שם מלא"
          className="w-full bg-charcoal/50 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-silver/40 focus:outline-none focus:border-brand transition-colors"
        />
      </div>
      <div>
        <label htmlFor="phone" className="sr-only">טלפון</label>
        <input
          id="phone"
          type="tel"
          required
          placeholder="טלפון"
          className="w-full bg-charcoal/50 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-silver/40 focus:outline-none focus:border-brand transition-colors text-right"
          dir="rtl"
        />
      </div>
      <div>
        <label htmlFor="email" className="sr-only">אימייל</label>
        <input
          id="email"
          type="email"
          required
          placeholder="אימייל"
          className="w-full bg-charcoal/50 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-silver/40 focus:outline-none focus:border-brand transition-colors"
          dir="ltr"
          style={{ textAlign: 'right' }}
        />
      </div>
      
      <div className="text-right mt-4">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="relative flex items-center justify-center mt-1">
            <input 
              type="checkbox" 
              className="peer sr-only" 
              checked={marketingConsent}
              onChange={(e) => setMarketingConsent(e.target.checked)}
            />
            <div className="w-5 h-5 border-2 border-white/30 rounded-md peer-checked:bg-brand peer-checked:border-brand transition-colors flex items-center justify-center">
              <svg className={`w-3 h-3 text-white transition-opacity ${marketingConsent ? 'opacity-100' : 'opacity-0'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <span className="text-sm text-silver/80 group-hover:text-white transition-colors">
            אני מאשר/ת לקבל עדכונים, תוכן מקצועי והודעות שיווקיות מ-Okonski Performance.
          </span>
        </label>
      </div>

      <p className="text-xs text-silver/60 text-right mt-2">
        שליחת הטופס מהווה אישור לכך שקראתי את <Link href="/privacy" className="underline hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-brand rounded">מדיניות הפרטיות</Link> ואני מסכים/ה להעברת הפרטים לצורך טיפול בפנייה.
      </p>

      <button
        type="submit"
        className="w-full bg-brand text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-bright transition-all shadow-[0_0_20px_rgba(62,111,168,0.3)] hover:shadow-[0_0_30px_rgba(62,111,168,0.5)] transform hover:-translate-y-1 mt-4"
      >
        הצטרפו ל־Performance List
      </button>
    </form>
  );
}
