export default function WhatWeAreBuilding() {
  return (
    <section className="py-24 sm:py-36 md:py-48 bg-charcoal relative overflow-hidden border-t border-white/5">
      {/* Subtle right glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 blur-[120px] rounded-full pointer-events-none opacity-40 mix-blend-screen" aria-hidden="true" />

      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* ── Left / text column ── */}
          <div className="lg:col-span-7 space-y-10">

            <div>
              <p
                className="font-barlow text-silver/35 font-bold tracking-[0.2em] uppercase text-[11px] sm:text-xs mb-6"
                dir="ltr"
              >
                BEYOND PAIN <span className="mx-2 text-brand opacity-60">/</span> TOWARD PERFORMANCE
              </p>

              <h2 className="text-[clamp(2rem,6vw,3.75rem)] font-black text-white leading-[1.1] tracking-tight mb-0">
                מה מפריע לך היום —{" "}
                <span className="text-secondary-text">ומה אתה צריך שהגוף שלך יהיה מסוגל לעשות?</span>
              </h2>
            </div>

            <div className="space-y-6 text-secondary-text text-[clamp(1rem,2.5vw,1.35rem)] leading-[1.75] font-medium pl-0 md:pr-0 lg:pl-0 rtl:border-r-2 rtl:border-brand/30 rtl:pr-8">
              <p className="text-white/90">
                אנחנו לא מסתכלים רק על הכאב. אנחנו מסתכלים על הדרישות שהגוף שלך צריך לעמוד בהן.
              </p>
              <p>
                <span className="text-white font-bold">Okonski Performance מתחילה מ-Sports Therapy</span>{" "}
                — טיפול, תנועה, עומס והתאוששות — עם מטרה אחת: לעזור לגוף לחזור להתמודד עם מה שאתה דורש ממנו.
              </p>
            </div>

            {/* Closing statement */}
            <div className="pt-6 border-t border-white/8">
              <p
                className="font-barlow text-[clamp(1.1rem,2.5vw,1.5rem)] font-black tracking-wider uppercase text-white leading-snug"
                dir="ltr"
              >
                SPORTS THERAPY IS WHERE WE START.
                <br />
                <span className="text-brand">PERFORMANCE IS WHERE WE'RE GOING.</span>
              </p>
            </div>
          </div>

          {/* ── Right / visual column ── */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            {/*
              Visual: editorial typographic composition.
              When real treatment photography is available, replace this block
              with: <Image src="/treatment.jpg" alt="..." fill className="object-cover" />
              inside an aspect-ratio container.
            */}
            <div className="relative aspect-[4/5] bg-primary border border-white/5 overflow-hidden flex flex-col items-start justify-end p-8 sm:p-10 lg:p-12">

              {/* Top-right geometric accent */}
              <div className="absolute top-0 left-0 w-16 h-16 border-r border-b border-brand/30" aria-hidden="true" />
              <div className="absolute bottom-0 right-0 w-16 h-16 border-l border-t border-white/10" aria-hidden="true" />

              {/* Large background word */}
              <p
                className="absolute top-6 right-0 font-barlow font-black text-[clamp(3rem,8vw,5rem)] uppercase text-white/[0.025] tracking-widest leading-none select-none pointer-events-none"
                dir="ltr"
                aria-hidden="true"
              >
                TREAT<br />
                MENT
              </p>

              {/* Content */}
              <div className="relative z-10 space-y-6">
                <p
                  className="font-barlow font-black uppercase tracking-widest text-xs text-brand"
                  dir="ltr"
                >
                  SPORTS THERAPY / RECOVERY
                </p>

                <p className="text-white text-2xl sm:text-3xl font-black leading-snug max-w-xs">
                  לא רק להעלים את הכאב.
                </p>

                <p className="text-secondary-text text-base sm:text-lg leading-relaxed max-w-xs">
                  לבנות גוף שמסוגל לעמוד במה שאתה דורש ממנו.
                </p>

                {/* Visual divider */}
                <div className="w-12 h-px bg-brand" aria-hidden="true" />
              </div>
            </div>

            {/* Photography placeholder notice (dev only — remove before launch) */}
            {/* Replace this entire right column with a high-quality treatment photograph */}
          </div>
        </div>
      </div>
    </section>
  );
}
