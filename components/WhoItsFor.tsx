export default function WhoItsFor() {
  return (
    <section className="py-24 sm:py-36 md:py-48 bg-primary relative overflow-hidden">
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">

        {/* Section headline */}
        <div className="mb-20 sm:mb-28">
          <h2 className="text-[clamp(2.2rem,6.5vw,4rem)] font-black text-white leading-[1.1] tracking-tight">
            לאנשים שדורשים מהגוף שלהם יותר.
          </h2>
        </div>

        {/* Editorial split — not SaaS cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Audience 1: SPORT / ACTIVE */}
          <div className="group relative py-12 sm:py-16 lg:pl-16 lg:pr-12 border-b border-white/8 lg:border-b-0 lg:border-l border-white/8">
            {/* Animated top accent line */}
            <div
              className="absolute top-0 right-0 h-px bg-gradient-to-l from-brand to-transparent w-24 group-hover:w-full transition-all duration-700"
              aria-hidden="true"
            />

            <p
              className="font-barlow text-white/20 font-black tracking-[0.2em] uppercase text-lg sm:text-xl mb-8 group-hover:text-brand/60 transition-colors duration-500"
              dir="ltr"
            >
              01
            </p>

            <h3 className="text-[clamp(1.6rem,4vw,2.5rem)] font-black text-white leading-tight mb-6">
              ספורטאים ואנשים שמתאמנים ברצינות.
            </h3>

            <p className="text-secondary-text text-[clamp(1rem,2.2vw,1.2rem)] leading-[1.75] font-medium max-w-md">
              עומסי אימון, כאבים ופציעות, Recovery, חזרה לפעילות ותחזוקת הגוף לאורך זמן.
            </p>

            <p
              className="font-barlow text-xs font-bold tracking-widest uppercase text-white/25 mt-10"
              dir="ltr"
            >
              SPORT / ACTIVE
            </p>
          </div>

          {/* Audience 2: PERFORMANCE / LIFE */}
          <div className="group relative py-12 sm:py-16 lg:pl-20 lg:pr-12 lg:mt-20">
            {/* Animated top accent line */}
            <div
              className="absolute top-0 right-0 h-px bg-gradient-to-l from-white/20 to-transparent w-24 group-hover:w-full group-hover:from-brand/40 transition-all duration-700"
              aria-hidden="true"
            />

            <p
              className="font-barlow text-white/20 font-black tracking-[0.2em] uppercase text-lg sm:text-xl mb-8 group-hover:text-brand/60 transition-colors duration-500"
              dir="ltr"
            >
              02
            </p>

            <h3 className="text-[clamp(1.6rem,4vw,2.5rem)] font-black text-white leading-tight mb-6">
              אנשים עם קריירה ושגרה תובענית.
            </h3>

            <p className="text-secondary-text text-[clamp(1rem,2.2vw,1.2rem)] leading-[1.75] font-medium max-w-md">
              עבודה, ישיבה, נסיעות, סטרס ואימונים — כשהגוף צריך להמשיך לעמוד בקצב.
            </p>

            <p
              className="font-barlow text-xs font-bold tracking-widest uppercase text-white/25 mt-10"
              dir="ltr"
            >
              PERFORMANCE / LIFE
            </p>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-20 sm:mt-28 pt-10 border-t border-white/8">
          <p
            className="font-barlow text-[clamp(1.5rem,4vw,2.5rem)] font-black tracking-widest uppercase text-white leading-tight"
            dir="ltr"
          >
            DIFFERENT DEMANDS.
            <br />
            <span className="text-white/30">SAME BODY.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
