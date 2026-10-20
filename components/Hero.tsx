export default function Hero() {
  return (
    <section id="top" className="relative min-h-[85vh] pt-40 pb-16 sm:pt-44 sm:pb-20 lg:pt-48 flex items-center justify-center overflow-hidden ambient-glow border-b border-white/[0.06]" aria-label="Okonski Performance">
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center">
        
        {/* Headline with metallic gradient */}
        <h1 className="text-[clamp(2.8rem,7.5vw,5.2rem)] font-black text-white leading-[1.06] tracking-tight mb-6 text-balance max-w-4xl">
          הגוף שלך צריך<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-logoIce via-white to-logoIce">
            לעמוד בקצב שלך.
          </span>
        </h1>

        {/* Lead Body Paragraphs */}
        <p className="text-[clamp(1.15rem,2vw,1.4rem)] text-silverOff leading-relaxed max-w-2xl mx-auto mb-4 font-semibold">
          טיפול גופני אישי לספורטאים, למתאמנים ולאנשי קריירה עם שגרה תובענית.
        </p>

        <p className="text-base text-silverMuted leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-10">
          בין אם אתה מתמודד עם כאב או פציעה, זקוק להתאוששות מעומס או רוצה לשפר את היכולת הגופנית שלך — הטיפול מותאם למצב שלך ולמטרה שאתה רוצה להשיג.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full max-w-md justify-center">
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

      </div>
    </section>
  );
}

