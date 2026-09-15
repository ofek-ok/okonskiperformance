export default function WhatWeAreBuilding() {
  return (
    <section
      className="relative py-24 sm:py-36 md:py-48 bg-charcoal overflow-hidden border-t border-white/5"
      aria-labelledby="section-treatment-heading"
    >
      {/* ── Background structural typography ── */}
      {/* These are decorative only — screen readers skip them */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Large word: TREATMENT — top right */}
        <p
          className="absolute -top-6 -left-4 sm:-left-8 font-barlow font-black uppercase text-[clamp(5rem,18vw,14rem)] text-white/[0.022] leading-none tracking-tight whitespace-nowrap"
          dir="ltr"
        >
          TREATMENT
        </p>
        {/* Large word: RECOVERY — bottom */}
        <p
          className="absolute -bottom-6 -right-4 sm:-right-8 font-barlow font-black uppercase text-[clamp(5rem,16vw,12rem)] text-brand/[0.06] leading-none tracking-tight whitespace-nowrap"
          dir="ltr"
        >
          RECOVERY
        </p>
      </div>

      <div className="container mx-auto px-5 sm:px-8 max-w-5xl relative z-10">

        {/* ── Section label ── */}
        <p
          className="font-barlow text-silver/30 font-bold tracking-[0.22em] uppercase text-[11px] sm:text-xs mb-10 sm:mb-12"
          dir="ltr"
        >
          SPORTS THERAPY / RECOVERY
        </p>

        {/* ── Main heading ── */}
        <h2
          id="section-treatment-heading"
          className="text-[clamp(1.9rem,5.5vw,3.25rem)] font-black text-white leading-[1.15] tracking-tight mb-14 sm:mb-16 max-w-3xl"
        >
          טיפול שמתחיל במה שהגוף שלך צריך לעשות.
        </h2>

        {/* ── Body copy — editorial grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-14 lg:gap-20">

          {/* Left: lead paragraph */}
          <div className="lg:col-span-5">
            <p className="text-white/85 text-[clamp(1.05rem,2.5vw,1.2rem)] leading-[1.8] font-medium">
              לא כל מי שמגיע לטיפול מגיע מאותה סיבה.
            </p>
          </div>

          {/* Right: detail paragraphs */}
          <div className="lg:col-span-7 space-y-6 text-secondary-text text-[clamp(0.95rem,2.2vw,1.1rem)] leading-[1.8]">
            <p>
              לפעמים זו מגבלה שמפריעה באימון. לפעמים כאב שחוזר תחת עומס. לפעמים הגוף פשוט לא מתאושש בקצב של השגרה.
            </p>
            <p>
              ב-Okonski Performance הטיפול מתחיל בהבנת הדרישות שלך מהגוף, ומשם מחברים בין טיפול, תנועה והתאוששות.
            </p>

            {/* Closing statement — on its own, with clear visual separation */}
            <div className="pt-6 border-t border-white/8">
              <p className="text-white font-bold text-[clamp(1rem,2.3vw,1.15rem)] leading-[1.75]">
                המטרה: לעזור לך לחזור לעשות את מה שאתה צריך לעשות, ולהמשיך לעשות אותו לאורך זמן.
              </p>
            </div>
          </div>
        </div>

        {/* ── Bottom rule line — editorial breath ── */}
        <div className="mt-16 sm:mt-20 flex items-center gap-6" aria-hidden="true">
          <div className="w-12 h-px bg-brand" />
          <div className="flex-1 h-px bg-white/5" />
        </div>

      </div>
    </section>
  );
}
