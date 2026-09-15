export default function WhoItsFor() {
  return (
    <section className="py-24 sm:py-32 md:py-48 bg-primary relative overflow-hidden">
      
      {/* Structural background lines */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/5 hidden lg:block -translate-x-1/2 z-0" />
      <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5 hidden lg:block -translate-y-1/2 z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        
        <div className="mb-24 lg:mb-32 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
            לאנשים שדורשים מהגוף שלהם יותר.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-0 lg:-mx-6">
          
          {/* Audience 1: SPORT / ACTIVE */}
          <div className="relative group lg:px-16 lg:py-16">
            <div className="absolute top-0 right-0 w-16 h-px bg-brand transition-all duration-500 group-hover:w-full" />
            <div className="absolute top-0 right-0 w-px h-16 bg-brand transition-all duration-500 group-hover:h-full" />
            
            <p className="font-barlow text-silver/30 font-black tracking-[0.2em] uppercase text-xl sm:text-2xl mb-8 group-hover:text-brand transition-colors duration-500">
              01 // SPORT / ACTIVE
            </p>
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">
              ספורטאים ואנשים שמתאמנים ברצינות.
            </h3>
            <p className="text-secondary-text text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
              עומסי אימון, כאבים ופציעות, Recovery, חזרה לפעילות ותחזוקת הגוף לאורך זמן.
            </p>
          </div>

          {/* Audience 2: PERFORMANCE / LIFE */}
          <div className="relative group lg:px-16 lg:py-16 mt-8 lg:mt-32">
            <div className="absolute top-0 right-0 w-16 h-px bg-white/20 transition-all duration-500 group-hover:w-full group-hover:bg-brand" />
            <div className="absolute top-0 right-0 w-px h-16 bg-white/20 transition-all duration-500 group-hover:h-full group-hover:bg-brand" />

            <p className="font-barlow text-silver/30 font-black tracking-[0.2em] uppercase text-xl sm:text-2xl mb-8 group-hover:text-brand transition-colors duration-500">
              02 // PERFORMANCE / LIFE
            </p>
            <h3 className="text-3xl sm:text-4xl font-black text-white mb-6">
              אנשים עם קריירה ושגרה תובענית.
            </h3>
            <p className="text-secondary-text text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
              עבודה, ישיבה, נסיעות, סטרס ואימונים — כשהגוף צריך להמשיך לעמוד בקצב.
            </p>
          </div>

        </div>

        <div className="mt-32 text-center lg:text-left lg:absolute lg:bottom-16 lg:left-16">
          <p className="font-barlow text-2xl sm:text-3xl text-white font-black tracking-widest uppercase">
            DIFFERENT DEMANDS.<br/>
            <span className="text-silver/40">SAME BODY.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
