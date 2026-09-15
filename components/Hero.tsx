import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center items-center overflow-hidden bg-primary"
      aria-label="Okonski Performance — Hero"
    >
      {/* Layered dark background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(27,32,38,0.9)_0%,rgba(11,13,16,1)_100%)]" />

      {/* Blue glow — very subtle */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] max-w-3xl h-[45vh] bg-brand/8 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />

      {/* Logo motif watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        aria-hidden="true"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 58%, 0 58%)" }}
      >
        <div className="relative w-[min(90vw,900px)] h-[min(90vw,900px)] opacity-[0.025]">
          <Image
            src="/logo-official.png"
            alt=""
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center pt-28 pb-20 sm:pt-36 sm:pb-24">

        {/* Eyebrow label */}
        <p
          className="font-barlow text-silver/40 font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase text-[11px] sm:text-xs mb-8 sm:mb-10"
          dir="ltr"
        >
          OKONSKI PERFORMANCE <span className="mx-2 text-brand opacity-70">•</span> JANUARY 2027
        </p>

        {/* Main headline */}
        <h1 className="text-[clamp(2.6rem,10vw,5.5rem)] font-black text-white leading-[1.05] tracking-tight mb-8 sm:mb-10 max-w-4xl">
          הגוף שלך צריך<br />
          לעמוד בקצב שלך.
        </h1>

        {/* Service Descriptor — core identity, not metadata */}
        <div
          className="mb-8 sm:mb-10 px-5"
          dir="ltr"
          aria-label="Sports Therapy, Recovery, Performance"
        >
          <p className="font-barlow text-brand font-black tracking-[0.18em] sm:tracking-[0.28em] uppercase text-[1rem] sm:text-[1.25rem] lg:text-[1.5rem] whitespace-nowrap">
            SPORTS THERAPY
            <span className="mx-3 sm:mx-5 text-white/20 font-light">•</span>
            RECOVERY
            <span className="mx-3 sm:mx-5 text-white/20 font-light">•</span>
            PERFORMANCE
          </p>
        </div>

        {/* Supporting copy */}
        <p className="text-[clamp(1rem,3vw,1.35rem)] text-secondary-text leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12 font-medium px-2">
          טיפול לאנשים שדורשים מהגוף שלהם יותר —{" "}
          <span className="whitespace-nowrap">באימונים, בעבודה ובחיים.</span>
        </p>

        {/* Brand statement */}
        <p
          className="font-barlow text-white/40 font-black tracking-[0.25em] uppercase text-sm sm:text-base mb-10 sm:mb-12"
          dir="ltr"
        >
          BUILT FOR WHAT YOU DEMAND.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col items-center w-full max-w-xs sm:max-w-sm">
          <a
            href="#performance-list"
            className="w-full inline-flex items-center justify-center bg-brand text-white font-black py-5 px-8 rounded-full text-sm sm:text-base tracking-widest uppercase hover:bg-brand-bright transition-all duration-300 shadow-[0_4px_40px_rgba(62,111,168,0.25)] hover:shadow-[0_4px_50px_rgba(62,111,168,0.45)] focus:outline-none focus:ring-4 focus:ring-brand/40 active:scale-[0.98]"
            aria-label="הצטרפו ל-Performance List — גישה מוקדמת לפתיחת היומן בינואר 2027"
          >
            הצטרפו ל־Performance List
          </a>

          {/* Microcopy */}
          <p className="text-xs text-secondary-text mt-4 font-medium leading-relaxed text-center">
            תוכן
            <span className="mx-2 text-charcoal/70" aria-hidden="true">•</span>
            עדכונים
            <span className="mx-2 text-charcoal/70" aria-hidden="true">•</span>
            גישה מוקדמת לפתיחת היומן
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-30" aria-hidden="true">
        <div className="w-px h-10 bg-gradient-to-b from-brand to-transparent" />
      </div>
    </section>
  );
}
