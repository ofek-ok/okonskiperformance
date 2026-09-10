export default function WhoItsFor() {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-offwhite">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-20 text-center">
          <h2 className="font-barlow text-5xl sm:text-6xl lg:text-7xl font-black text-primary-text leading-[1.1] tracking-tight uppercase">
            FOR PEOPLE WHO <span className="text-brand">DEMAND MORE.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 relative mb-24">
          
          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-charcoal/10 -translate-x-1/2" />

          {/* Audience 1: Sports / Training */}
          <div className="md:pr-12 relative group bg-white border border-gray-200 rounded-3xl p-10 sm:p-14 shadow-sm hover:border-brand/30 transition-all duration-300">
            <h3 className="text-3xl font-black text-primary-text mb-4">למי שמתאמן ברצינות.</h3>
            <p className="text-secondary-text text-lg sm:text-xl leading-relaxed">
              למי שרוצה להתמודד טוב יותר עם עומסי אימון, כאבים, התאוששות וחזרה לפעילות — ולהמשיך לבצע לאורך זמן.
            </p>
          </div>

          {/* Audience 2: High-Demand Life */}
          <div className="md:pl-12 relative group bg-white border border-gray-200 rounded-3xl p-10 sm:p-14 shadow-sm hover:border-brand/30 transition-all duration-300">
            <h3 className="text-3xl font-black text-primary-text mb-4">למי שחי בשגרה תובענית.</h3>
            <p className="text-secondary-text text-lg sm:text-xl leading-relaxed">
              למנהלים, יזמים ואנשי מקצוע שמצפים מהגוף להמשיך לתפקד לצד עבודה, סטרס, אימונים ולוח זמנים עמוס.
            </p>
          </div>

        </div>

        <div className="text-center">
          <p className="font-barlow text-3xl sm:text-4xl text-primary-text font-black tracking-widest uppercase">
            Different demands. <span className="text-charcoal/40">Same body.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
