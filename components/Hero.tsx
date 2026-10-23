export default function Hero() {
  return (
    <section id="top" className="relative min-h-[min(760px,100svh)] pt-28 pb-12 sm:pt-36 sm:pb-14 lg:pt-40 flex items-center justify-center overflow-hidden border-b border-neutral-800/60" aria-label="Okonski Performance">
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        
        {/* Headline */}
        <h1 className="text-[clamp(2.15rem,7vw,5.2rem)] font-black text-white leading-[1.08] tracking-tight mb-5 text-balance max-w-4xl">
          הגוף שלך צריך<br />
          <span>
            לעמוד בקצב שלך.
          </span>
        </h1>

        {/* Lead Body Paragraph 1: Definition */}
        <p className="text-base sm:text-[clamp(1.15rem,2vw,1.4rem)] text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-3 font-medium">
          ספורטתרפיה, שיקום מפציעות והתאוששות מתקדמת לספורטאים ואנשים עם שגרה תובענית.
        </p>

        {/* Lead Body Paragraph 2: Scannable 3-Pillar Copy */}
        <p className="mt-4 text-sm sm:text-base md:text-lg leading-relaxed text-neutral-400 max-w-3xl mx-auto mb-6 sm:mb-8 text-right sm:text-center">
          <strong className="text-white font-medium">פציעה או כאב?</strong> נחזיר אותך לשגרה ולביצועים גבוהים.<br className="hidden md:inline" />{" "}
          <strong className="text-white font-medium">דורש מעצמך הרבה?</strong> הגוף שלך חייב תחזוקה ושימור שוטף.<br className="hidden md:inline" />{" "}
          <strong className="text-white font-medium">רוצה יותר?</strong> נבנה מעטפת טיפולית שתיקח את היכולת הגופנית שלך לשלב הבא.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-sm sm:max-w-xl justify-center">
          <a
            href="#performance-list"
            className="w-full sm:w-auto min-h-[48px] bg-white text-black font-medium hover:bg-neutral-200 transition-colors px-6 py-3 rounded-lg text-sm sm:text-base tracking-wide whitespace-nowrap flex items-center justify-center gap-2.5 shadow-sm active:scale-[0.99]"
          >
            <span>הבטחת מקום בפתיחה</span>
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="#who-its-for"
            className="w-full sm:w-auto min-h-[48px] px-6 py-3 rounded-lg bg-transparent text-neutral-300 border border-neutral-700/60 hover:text-white hover:border-neutral-500 text-sm font-medium transition-colors text-center flex items-center justify-center active:scale-[0.99]"
          >
            גלה את תחומי הטיפול
          </a>
        </div>

        {/* Status / Micro-copy */}
        <p className="mt-5 text-xs sm:text-sm text-neutral-500 font-mono tracking-wide">
          פתיחת יומן רשמית: ינואר 2027 • עדיפות בתורים למי שברשימה
        </p>

      </div>
    </section>
  );
}
