import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-primary"
      aria-label="Okonski Performance"
    >
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(27,32,38,0.9)_0%,rgba(11,13,16,1)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[70vw] max-w-3xl h-[40vh] bg-brand/8 blur-[100px] rounded-full pointer-events-none"
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
          className="font-barlow text-silver/35 font-bold tracking-[0.25em] uppercase text-[11px] sm:text-xs mb-7 sm:mb-8"
          dir="ltr"
        >
          OKONSKI PERFORMANCE
          <span className="mx-2 text-brand/60">|</span>
          JANUARY 2027
        </p>

        {/* 2. Service descriptor — FIRST, most visible */}
        <div className="mb-8 sm:mb-9" dir="ltr">
          <p
            className="font-barlow text-brand font-black uppercase tracking-[0.18em] sm:tracking-[0.26em] text-[clamp(0.85rem,3.5vw,1.35rem)]"
            aria-label="Sports Therapy, Recovery, Performance"
          >
            SPORTS THERAPY
            <span className="mx-3 sm:mx-4 text-white/15 font-light">•</span>
            RECOVERY
            <span className="mx-3 sm:mx-4 text-white/15 font-light">•</span>
            PERFORMANCE
          </p>
        </div>

        {/* 3. Hebrew headline */}
        <h1 className="text-[clamp(2.4rem,9vw,5rem)] font-black text-white leading-[1.08] tracking-tight mb-7 sm:mb-8 max-w-3xl">
          הגוף שלך צריך לעמוד בקצב שלך.
        </h1>

        {/* 4. Supporting copy */}
        <p className="text-[clamp(1rem,2.8vw,1.2rem)] text-secondary-text leading-relaxed max-w-xl mx-auto mb-9 sm:mb-10 font-medium px-1">
          טיפולי Sports Therapy לאנשים שדורשים מהגוף שלהם יותר, באימונים, בעבודה ובחיים.
        </p>

        {/* 5. Brand statement — understated, not the loudest element */}
        <p
          className="font-barlow text-white/30 font-black tracking-[0.22em] uppercase text-xs sm:text-sm mb-10 sm:mb-12"
          dir="ltr"
        >
          BUILT FOR WHAT YOU DEMAND.
        </p>

        {/* 6. CTA */}
        <div className="flex flex-col items-center w-full max-w-[320px]">
          <a
            href="#performance-list"
            className="w-full inline-flex items-center justify-center bg-brand text-white font-black py-4 sm:py-5 px-8 rounded-full text-sm tracking-widest uppercase hover:bg-brand-bright transition-all duration-300 shadow-[0_4px_30px_rgba(62,111,168,0.25)] hover:shadow-[0_4px_45px_rgba(62,111,168,0.45)] focus:outline-none focus:ring-4 focus:ring-brand/40 active:scale-[0.98]"
            aria-label="הצטרפו ל-Performance List — גישה מוקדמת לפתיחת היומן בינואר 2027"
          >
            הצטרפו ל־Performance List
          </a>
          <p className="text-[11px] text-secondary-text mt-4 font-medium">
            גישה מוקדמת לפתיחת היומן בינואר 2027
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-25" aria-hidden="true">
        <div className="w-px h-10 bg-gradient-to-b from-brand to-transparent" />
      </div>
    </section>
  );
}
