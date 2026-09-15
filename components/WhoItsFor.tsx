export default function WhoItsFor() {
  return (
    <section
      className="py-24 sm:py-32 md:py-40 bg-primary relative overflow-hidden"
      aria-labelledby="audiences-heading"
    >
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">

        {/* Section heading */}
        <div className="mb-16 sm:mb-24 max-w-2xl">
          <h2
            id="audiences-heading"
            className="text-[clamp(2rem,6vw,3.5rem)] font-black text-white leading-[1.1] tracking-tight text-balance"
          >
            למי זה מתאים?
          </h2>
        </div>

        {/* Two audiences — clean editorial layout, high contrast */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">

          {/* Audience 1 */}
          <div className="group relative py-8 sm:py-12 lg:pr-16 lg:pl-12 border-b border-white/10 lg:border-b-0 lg:border-l border-white/10">
            {/* Top hover accent */}
            <div
              className="absolute top-0 right-0 h-px bg-brand w-16 group-hover:w-full transition-all duration-700 ease-out"
              aria-hidden="true"
            />

            <p
              className="font-barlow text-silver/60 font-black tracking-widest uppercase text-base mb-6 group-hover:text-brand transition-colors duration-500"
              dir="ltr"
            >
              01
            </p>

            <h3 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-black text-white leading-tight mb-5">
              ספורטאים ומתאמנים
            </h3>

            {/* High contrast near-white for important service explanation */}
            <p className="text-white/90 text-[clamp(1.05rem,2vw,1.2rem)] leading-[1.8] max-w-md font-normal">
              כאב שמפריע באימון, עומסים שמצטברים, מגבלות בתנועה, צורך בהתאוששות או חזרה לפעילות.
            </p>
          </div>

          {/* Audience 2 */}
          <div className="group relative py-8 sm:py-12 lg:pr-20 lg:pl-12 lg:mt-16">
            <div
              className="absolute top-0 right-0 h-px bg-white/20 w-16 group-hover:w-full group-hover:bg-brand/60 transition-all duration-700 ease-out"
              aria-hidden="true"
            />

            <p
              className="font-barlow text-silver/60 font-black tracking-widest uppercase text-base mb-6 group-hover:text-brand transition-colors duration-500"
              dir="ltr"
            >
              02
            </p>

            <h3 className="text-[clamp(1.5rem,3.5vw,2.25rem)] font-black text-white leading-tight mb-5">
              אנשים עם שגרה תובענית
            </h3>

            {/* High contrast near-white for important service explanation */}
            <p className="text-white/90 text-[clamp(1.05rem,2vw,1.2rem)] leading-[1.8] max-w-md font-normal">
              עבודה, ישיבה, סטרס, אימונים ושגרה שמעמיסה על הגוף ודורשת ממנו הרבה.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
