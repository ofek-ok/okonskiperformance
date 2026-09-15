import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-primary selection:bg-brand selection:text-white"
      aria-label="Okonski Performance — Hero"
    >
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(27,32,38,0.95)_0%,rgba(11,13,16,1)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] max-w-3xl h-[40vh] bg-brand/10 blur-[100px] rounded-full pointer-events-none"
        aria-hidden="true"
      />

      {/* Logo watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 55%, 0 55%)" }}
      >
        <div className="relative w-[min(85vw,800px)] h-[min(85vw,800px)] opacity-[0.025]">
          <Image src="/logo-official.png" alt="" fill className="object-contain" priority />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center pt-28 pb-20 sm:pt-36 sm:pb-24">

        {/* 1. Brand + date */}
        <p
          className="font-barlow text-silver/80 font-bold tracking-[0.25em] uppercase text-xs sm:text-sm mb-6 sm:mb-8"
          dir="ltr"
        >
          OKONSKI PERFORMANCE <span className="mx-2 text-brand">•</span> JANUARY 2027
        </p>

        {/* 2. Service descriptor — clearly visible */}
        <div className="mb-7 sm:mb-9" dir="ltr">
          <p
            className="font-barlow text-brand font-black uppercase tracking-[0.16em] sm:tracking-[0.24em] text-[clamp(0.95rem,3.5vw,1.35rem)]"
            aria-label="Sports Therapy, Recovery, Performance"
          >
            SPORTS THERAPY
            <span className="mx-3 sm:mx-4 text-white/30 font-light">•</span>
            RECOVERY
            <span className="mx-3 sm:mx-4 text-white/30 font-light">•</span>
            PERFORMANCE
          </p>
        </div>

        {/* 3. Main headline */}
        <h1 className="text-[clamp(2.5rem,8.5vw,5rem)] font-black text-white leading-[1.1] tracking-tight mb-6 sm:mb-8 max-w-3xl text-balance">
          הגוף שלך צריך
          <br />
          לעמוד בקצב שלך.
        </h1>

        {/* 4. Supporting copy — High contrast per polish pass */}
        <p className="text-[clamp(1.05rem,2.5vw,1.25rem)] text-white/95 leading-relaxed max-w-2xl mx-auto mb-8 sm:mb-9 font-medium px-2">
          טיפול מותאם לספורטאים, מתאמנים ואנשים עם שגרה תובענית, להתמודדות עם כאב, עומס, מגבלות בתנועה והתאוששות.
        </p>

        {/* 5. Brand statement */}
        <p
          className="font-barlow text-silver/65 font-black tracking-[0.22em] uppercase text-xs sm:text-sm mb-9 sm:mb-11"
          dir="ltr"
        >
          BUILT FOR WHAT YOU DEMAND.
        </p>

        {/* 6. Primary CTA */}
        <div className="flex flex-col items-center w-full max-w-[320px]">
          <a
            href="#performance-list"
            className="w-full inline-flex items-center justify-center bg-brand text-white font-black py-4 sm:py-5 px-8 rounded-full text-sm tracking-widest uppercase hover:bg-brand-bright cursor-pointer transition-all duration-300 shadow-[0_4px_25px_rgba(62,111,168,0.25)] hover:shadow-[0_6px_35px_rgba(62,111,168,0.45)] focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-primary active:scale-[0.98]"
            aria-label="הצטרפו ל-Performance List — פתיחה בינואר 2027"
          >
            הצטרפו ל־Performance List
          </a>
          <p className="text-xs text-silver/85 mt-4 font-medium">
            גישה מוקדמת לפתיחת היומן בינואר 2027
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 opacity-30" aria-hidden="true">
        <div className="w-px h-8 bg-gradient-to-b from-brand to-transparent" />
      </div>
    </section>
  );
}
