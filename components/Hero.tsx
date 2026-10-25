import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] pt-20 pb-8 sm:pt-24 sm:pb-12 flex items-center justify-center border-b border-neutral-800/60 bg-[#0A0B0D]"
      aria-label="Okonski Performance"
    >
      <div className="w-full max-w-5xl mx-auto px-4 sm:px-8">
        
        {/* Visual Centerpiece / Media Container */}
        <div className="relative overflow-hidden rounded-2xl bg-neutral-900/40 border border-neutral-800/50 p-6 sm:p-10 lg:p-12 text-center flex flex-col items-center">
          
          {/* Subtle Background Layer Reserved for Brand Media / Animation */}
          <div
            className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.05)_0%,_transparent_70%)]"
            aria-hidden="true"
          />

          {/* 1. Brand & Header Top Area */}
          <div className="relative z-10 flex items-center justify-center gap-2.5 mb-4 sm:mb-6">
            <Image
              src="/logo-official.png"
              alt="Okonski Performance"
              width={24}
              height={24}
              className="w-5 h-5 sm:w-6 sm:h-6 object-contain"
              priority
            />
            <span className="text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] text-neutral-400 uppercase">
              OKONSKI PERFORMANCE
            </span>
          </div>

          {/* 2. Main Headline & Subheadline */}
          <h1 className="relative z-10 text-2xl xs:text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.14] mb-3 sm:mb-4 max-w-3xl text-balance">
            הגוף שלך חייב לעמוד בקצב שלך.
          </h1>

          <p className="relative z-10 text-xs sm:text-base lg:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 font-normal">
            ספורטתרפיה, שיקום מפציעות והתאוששות מתקדמת לספורטאים ואנשים עם שגרה תובענית.
          </p>

          {/* 3. 3-Needs Micro-Copy Block */}
          <div className="relative z-10 w-full max-w-4xl border-y border-neutral-800/60 py-4 sm:py-5 mb-6 sm:mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 text-right sm:text-center">
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                <strong className="text-white font-medium">פציעה או כאב?</strong> נחזיר אותך לשגרה ולביצועים גבוהים.
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                <strong className="text-white font-medium">דורש מעצמך הרבה?</strong> הגוף שלך חייב תחזוקה ושימור שוטף.
              </p>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                <strong className="text-white font-medium">רוצה יותר?</strong> נבנה מעטפת טיפולית שתיקח את היכולת הגופנית שלך לשלב הבא.
              </p>
            </div>
          </div>

          {/* 4. Primary CTA & Location Indicator */}
          <div className="relative z-10 flex flex-col items-center w-full max-w-xs sm:max-w-md">
            <a
              href="#performance-list"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold px-8 py-3.5 rounded-lg hover:bg-neutral-200 transition-colors shadow-sm active:scale-[0.99] w-full sm:w-auto text-sm sm:text-base tracking-wide"
            >
              <span>הבטחת מקום בפתיחה ←</span>
            </a>
            <p className="text-xs text-neutral-400 font-medium tracking-wide mt-3">
              קליניקת בוטיק בשרון | מעטפת פרימיום עד הבית
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
