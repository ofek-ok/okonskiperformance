"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function PerformanceList() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="performance-list" className="py-24 sm:py-32 md:py-40 bg-offwhite relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        
        {submitted ? (
          <div className="animate-fade-up">
            <h2 className="font-barlow text-5xl sm:text-7xl font-black text-primary-text tracking-widest uppercase mb-8">
              YOU'RE ON <br className="sm:hidden"/> THE LIST.
            </h2>
            <div className="bg-white border border-gray-200 p-8 sm:p-12 rounded-3xl shadow-sm mb-12">
              <p className="text-primary-text font-bold text-xl mb-4">ברוכים הבאים ל־Performance List.</p>
              <p className="text-secondary-text text-lg leading-relaxed">
                אנחנו נעדכן אתכם בדרך לקראת פתיחת Okonski Performance בינואר 2027 — ונשלח לכם עדכון כשהגישה ליומן תיפתח.
              </p>
            </div>
            
            <p className="font-barlow text-2xl sm:text-3xl text-primary-text font-black tracking-widest uppercase mb-2">
              Until then — keep performing.
            </p>
            <p className="font-barlow text-brand font-bold tracking-[0.2em] uppercase text-sm">
              OKONSKI PERFORMANCE<br />BUILT FOR WHAT YOU DEMAND.
            </p>
          </div>
        ) : (
          <div className="animate-fade-up">
            <p className="font-barlow text-brand font-black tracking-[0.2em] uppercase text-sm sm:text-base mb-6">
              JANUARY 2027
            </p>
            <h2 className="font-barlow text-5xl sm:text-7xl font-black text-primary-text tracking-widest uppercase mb-12">
              BE FIRST TO PERFORM.
            </h2>
            
            <div className="space-y-4 text-secondary-text text-lg sm:text-xl leading-relaxed mb-12">
              <p>Okonski Performance צפויה לפתוח את טיפולי ה־Performance הראשונים בינואר 2027.</p>
              <p>עד אז אנחנו בונים.</p>
              <p className="text-primary-text font-bold pt-4">הצטרפו ל־Performance List כדי לקבל:</p>
              <div className="flex justify-center">
                <ul className="text-right space-y-2 inline-block font-medium text-primary-text">
                  <li className="flex items-center gap-3 justify-end"><span className="text-brand">&bull;</span> תוכן ועדכונים מ־Okonski Performance</li>
                  <li className="flex items-center gap-3 justify-end"><span className="text-brand">&bull;</span> הצצה למה שאנחנו בונים</li>
                  <li className="flex items-center gap-3 justify-end"><span className="text-brand">&bull;</span> גישה מוקדמת לעדכונים על פתיחת היומן</li>
                </ul>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div>
                <label htmlFor="name" className="sr-only">שם מלא</label>
                <input
                  id="name"
                  type="text"
                  required
                  placeholder="שם מלא"
                  className="w-full bg-white border border-gray-200 shadow-sm rounded-lg px-5 py-4 text-primary-text placeholder:text-gray-400 focus:outline-none focus:border-brand transition-colors"
                />
              </div>
              <div>
                <label htmlFor="phone" className="sr-only">טלפון / WhatsApp</label>
                <input
                  id="phone"
                  type="tel"
                  required
                  placeholder="טלפון / WhatsApp"
                  className="w-full bg-white border border-gray-200 shadow-sm rounded-lg px-5 py-4 text-primary-text placeholder:text-gray-400 focus:outline-none focus:border-brand transition-colors text-right"
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
                  className="w-full bg-white border border-gray-200 shadow-sm rounded-lg px-5 py-4 text-primary-text placeholder:text-gray-400 focus:outline-none focus:border-brand transition-colors"
                  dir="ltr"
                  style={{ textAlign: 'right' }}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-bright transition-all shadow-[0_0_20px_rgba(62,111,168,0.2)] hover:shadow-[0_0_30px_rgba(62,111,168,0.4)] transform hover:-translate-y-1 mt-6"
              >
                הצטרפו ל־Performance List
              </button>
              
              <p className="text-sm text-secondary-text mt-4">
                ללא התחייבות. הרשימה מיועדת לקבלת עדכונים וגישה מוקדמת לקראת ההשקה.
              </p>
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
