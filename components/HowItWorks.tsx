export default function HowItWorks() {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-charcoal border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="mb-24 md:mb-32">
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-tight">
            פשוט מתחילים.
          </h2>
        </div>

        {/* Process Flow - Horizontal on desktop, vertical on mobile */}
        <div className="flex flex-col md:flex-row gap-16 md:gap-0 relative">
          
          {/* Continuous thin line connecting steps on desktop */}
          <div className="hidden md:block absolute top-[2.5rem] left-0 right-0 h-px bg-white/10 z-0" />
          
          {/* Continuous thin line connecting steps on mobile */}
          <div className="block md:hidden absolute top-0 bottom-0 right-[2.5rem] w-px bg-white/10 z-0" />

          {/* Step 1 */}
          <div className="relative z-10 flex-1 md:pr-12 group">
            <div className="flex items-center gap-6 mb-8">
              <span className="font-barlow text-5xl sm:text-6xl font-black text-primary-text bg-elevated w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center border border-white/5 group-hover:border-brand/50 transition-colors">
                01
              </span>
              <p className="font-barlow text-brand text-sm sm:text-base font-bold tracking-[0.3em] uppercase">Understand</p>
            </div>
            <h3 className="text-3xl font-black text-white mb-6">מדברים</h3>
            <p className="text-secondary-text text-lg sm:text-xl leading-relaxed">
              מספרים לי מה מפריע, איך נראית השגרה ומה הייתם רוצים לשפר ולשנות בתפקוד היומיומי שלכם.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative z-10 flex-1 md:px-6 group">
            <div className="flex items-center gap-6 mb-8">
              <span className="font-barlow text-5xl sm:text-6xl font-black text-primary-text bg-elevated w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center border border-white/5 group-hover:border-brand/50 transition-colors">
                02
              </span>
              <p className="font-barlow text-brand text-sm sm:text-base font-bold tracking-[0.3em] uppercase">Treat</p>
            </div>
            <h3 className="text-3xl font-black text-white mb-6">נפגשים</h3>
            <p className="text-secondary-text text-lg sm:text-xl leading-relaxed">
              מבצעים הערכה מקיפה ומתאימים את הטיפול המדויק לצורך, למצב הגופני ולמטרה שלכם.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative z-10 flex-1 md:pl-12 group">
            <div className="flex items-center gap-6 mb-8">
              <span className="font-barlow text-5xl sm:text-6xl font-black text-primary-text bg-elevated w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center border border-white/5 group-hover:border-brand/50 transition-colors">
                03
              </span>
              <p className="font-barlow text-brand text-sm sm:text-base font-bold tracking-[0.3em] uppercase">Progress</p>
            </div>
            <h3 className="text-3xl font-black text-white mb-6">מחליטים איך ממשיכים</h3>
            <p className="text-secondary-text text-lg sm:text-xl leading-relaxed">
              לפעמים טיפול נקודתי מספיק. במקרים אחרים נכון לבנות תהליך הדרגתי של טיפול, תרגול וחזרה לפעילות.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
