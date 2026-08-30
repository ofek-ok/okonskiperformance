"use client";

import React, { useState } from "react";

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);

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
        <input
          type="text"
          required
          placeholder="שם פרטי"
          className="w-full bg-charcoal/50 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-silver/40 focus:outline-none focus:border-brand transition-colors"
        />
      </div>
      <div>
        <input
          type="tel"
          required
          placeholder="טלפון / WhatsApp"
          className="w-full bg-charcoal/50 border border-white/10 rounded-lg px-5 py-4 text-white placeholder:text-silver/40 focus:outline-none focus:border-brand transition-colors text-right"
          dir="rtl"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-brand text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-bright transition-all shadow-[0_0_20px_rgba(62,111,168,0.3)] hover:shadow-[0_0_30px_rgba(62,111,168,0.5)] transform hover:-translate-y-1"
      >
        הצטרפו ל־Performance List
      </button>
    </form>
  );
}
