export default function WhoItsFor() {
  return (
    <section
      className="py-24 sm:py-36 md:py-48 bg-primary relative overflow-hidden"
      aria-labelledby="audiences-heading"
    >
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">

        {/* Section heading */}
        <div className="mb-20 sm:mb-28 max-w-2xl">
          <h2
            id="audiences-heading"
            className="text-[clamp(2rem,6vw,3.75rem)] font-black text-white leading-[1.1] tracking-tight"
          >
            לאנשים שדורשים מהגוף שלהם יותר.
          </h2>
        </div>

        {/* Two audiences — editorial, not cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Audience 1 */}
          <div className="group relative py-12 sm:py-14 lg:pr-16 lg:pl-12 border-b border-white/8 lg:border-b-0 lg:border-l border-white/8">
            {/* Top hover accent */}
            <div
              className="absolute top-0 right-0 h-px bg-brand w-16 group-hover:w-full transition-all duration-700 ease-out"
              aria-hidden="true"
            />

            <p
              className="font-barlow text-white/15 font-black tracking-widest uppercase text-base mb-8 group-hover:text-brand/50 transition-colors duration-500"
              dir="ltr"
            >
              01
            </p>

            <h3 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-black text-white leading-tight mb-6">
              מתאמנים וספורטאים
            </h3>

            <p className="text-secondary-text text-[clamp(0.95rem,2vw,1.1rem)] leading-[1.8] max-w-md font-medium">
              כאב שמפריע באימון, עומסים שמצטברים, התאוששות בין אימונים וחזרה לפעילות אחרי תקופה שבה הגוף לא היה במיטבו.
            </p>
          </div>

          {/* Audience 2 — offset vertically on desktop */}
          <div className="group relative py-12 sm:py-14 lg:pr-20 lg:pl-12 lg:mt-24">
            <div
              className="absolute top-0 right-0 h-px bg-white/15 w-16 group-hover:w-full group-hover:bg-brand/40 transition-all duration-700 ease-out"
              aria-hidden="true"
            />

            <p
              className="font-barlow text-white/15 font-black tracking-widest uppercase text-base mb-8 group-hover:text-brand/50 transition-colors duration-500"
              dir="ltr"
            >
              02
            </p>

            <h3 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-black text-white leading-tight mb-6">
              אנשים עם שגרה עמוסה
            </h3>

            <p className="text-secondary-text text-[clamp(0.95rem,2vw,1.1rem)] leading-[1.8] max-w-md font-medium">
              שעות עבודה, ישיבה, סטרס, אימונים ולוח זמנים שלא תמיד משאיר לגוף הרבה מקום להתאושש.
            </p>
          </div>
        </div>

        {/* Closing line */}
        <div className="mt-20 sm:mt-28 pt-10 border-t border-white/8 max-w-3xl">
          <p className="text-[clamp(1.1rem,3vw,1.5rem)] font-bold text-white/80 leading-relaxed">
            שגרה שונה. דרישות שונות. אותו גוף שצריך לעמוד בהן.
          </p>
        </div>

      </div>
    </section>
  );
}
