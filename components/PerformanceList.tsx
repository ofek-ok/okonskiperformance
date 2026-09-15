"use client";

import React, { useState } from "react";

export default function PerformanceList() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate network request
    setTimeout(() => {
      setStatus("success");
    }, 1200);
  };

  return (
    <section id="performance-list" className="py-24 sm:py-32 md:py-48 bg-primary relative overflow-hidden">
      
      {/* Background Cinematic Texture */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,24,29,1)_0%,_rgba(11,13,16,1)_100%)]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-[50vh] bg-brand/10 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen" />

      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        
        {status === "success" ? (
          <div className="animate-fade-up flex flex-col items-center justify-center py-16">
            <h2 className="font-barlow text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-widest uppercase mb-10">
              YOU'RE ON <br className="sm:hidden"/> THE LIST.
            </h2>
            <div className="max-w-2xl mx-auto space-y-6 mb-16">
              <p className="text-white font-bold text-2xl sm:text-3xl">ברוכים הבאים ל־Performance List.</p>
              <p className="text-secondary-text text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
                אנחנו נעדכן אתכם בדרך לקראת פתיחת Okonski Performance בינואר 2027 — ונשלח לכם עדכון כשהגישה ליומן תיפתח.
              </p>
            </div>
            
            <p className="font-barlow text-3xl sm:text-4xl text-white font-black tracking-widest uppercase mb-4">
              UNTIL THEN — <span className="text-silver/40">KEEP PERFORMING.</span>
            </p>
          </div>
        ) : (
          <div className="animate-fade-up">
            <p className="font-barlow text-brand font-black tracking-[0.3em] uppercase text-sm sm:text-base mb-8">
              JANUARY 2027
            </p>
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black text-white tracking-tight mb-12">
              היו בין הראשונים.
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6 text-secondary-text text-lg sm:text-xl md:text-2xl leading-relaxed font-medium mb-12">
              <p>הטיפולים הראשונים של Okonski Performance נפתחים בינואר.</p>
              <p>
                הצטרפו ל־Performance List וקבלו תוכן מקצועי, עדכונים על מה שאנחנו בונים וגישה מוקדמת לפתיחת היומן.
              </p>
            </div>

            <p className="font-barlow text-silver/60 font-black tracking-widest uppercase text-sm sm:text-base mb-12">
              תוכן מקצועי <span className="mx-2 sm:mx-4 text-brand">•</span> עדכונים <span className="mx-2 sm:mx-4 text-brand">•</span> גישה מוקדמת לפתיחת היומן
            </p>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-6 text-right relative z-20">
              
              <div className="space-y-2 flex flex-col">
                <label htmlFor="name" className="text-sm font-bold text-silver/80 pr-1">שם מלא</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full bg-charcoal/50 border border-white/10 rounded-xl px-5 py-5 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all disabled:opacity-50"
                  dir="rtl"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="phone" className="text-sm font-bold text-silver/80 pr-1">טלפון</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full bg-charcoal/50 border border-white/10 rounded-xl px-5 py-5 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all disabled:opacity-50 text-right"
                  dir="rtl"
                />
              </div>

              <div className="space-y-2 flex flex-col">
                <label htmlFor="email" className="text-sm font-bold text-silver/80 pr-1">אימייל</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  disabled={status === "loading"}
                  className="w-full bg-charcoal/50 border border-white/10 rounded-xl px-5 py-5 text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all disabled:opacity-50"
                  dir="ltr"
                  style={{ textAlign: 'right' }}
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="group relative w-full inline-flex items-center justify-center bg-white text-primary-text font-black py-5 px-10 rounded-xl text-lg tracking-wide hover:bg-brand hover:text-white transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:shadow-[0_0_40px_rgba(62,111,168,0.4)] overflow-hidden focus:outline-none focus:ring-4 focus:ring-brand/30 mt-4 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                <span className={`relative z-10 flex items-center gap-3 transition-opacity ${status === "loading" ? "opacity-0" : "opacity-100"}`}>
                  הצטרפו ל־Performance List
                </span>
                
                {/* Loading State Spinner */}
                {status === "loading" && (
                  <div className="absolute inset-0 flex items-center justify-center z-20">
                    <svg className="animate-spin h-6 w-6 text-primary-text" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  </div>
                )}
                
                <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
              </button>
              
            </form>
          </div>
        )}
      </div>
    </section>
  );
}
