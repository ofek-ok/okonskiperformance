export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] pt-36 pb-20 flex items-center justify-center overflow-hidden ambient-glow border-b border-white/[0.06]" aria-label="Okonski Performance">
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        
        {/* Authentic Local Indicator */}
        <p className="text-sm font-semibold text-logoIce mb-6 tracking-wide">
          טיפול גופני אישי באזור השרון
        </p>

        {/* Headline with metallic gradient */}
        <h1 className="text-[clamp(2.8rem,7.5vw,5.2rem)] font-black text-white leading-[1.06] tracking-tight mb-8 text-balance max-w-4xl">
          הגוף שלך צריך<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-logoIce via-white to-logoIce">
            לעמוד בקצב שלך.
          </span>
        </h1>

        {/* Lead Body Paragraphs */}
        <p className="text-[clamp(1.15rem,2vw,1.4rem)] text-silverOff leading-relaxed max-w-2xl mx-auto mb-5 font-semibold">
          טיפול גופני אישי לספורטאים, למתאמנים ולאנשי קריירה עם שגרה תובענית.
        </p>

        <p className="text-base text-silverMuted leading-relaxed max-w-2xl mx-auto mb-10">
          בין אם אתה מתמודד עם כאב או פציעה, זקוק להתאוששות מעומס או רוצה לשפר את היכולת הגופנית שלך — הטיפול מותאם למצב שלך ולמטרה שאתה רוצה להשיג.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md justify-center mb-10">
          <a
            href="#performance-list"
            className="btn-logo-metallic w-full sm:w-auto text-white font-bold py-4 px-9 rounded-full text-sm sm:text-base tracking-wide flex items-center justify-center gap-2.5"
          >
            <span>הצטרפו ל־Performance List</span>
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="#who-its-for"
            className="w-full sm:w-auto px-7 py-4 rounded-full bg-steelBase/70 border border-white/15 hover:border-white/30 text-silverOff text-sm font-bold transition-all hover:bg-steelElevated text-center"
          >
            למי הטיפול מתאים?
          </a>
        </div>

        {/* Trust Badges Strip */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-8 text-xs sm:text-[13px] font-medium text-silverMuted pt-6 border-t border-white/[0.08]">
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-logoIce shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>פתיחת קליניקה בינואר 2027</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-logoIce shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>מפגש ראשון יסודי של 60 דקות</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-4 h-4 text-logoIce shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>אזור השרון</span>
          </div>
        </div>

      </div>
    </section>
  );
}

