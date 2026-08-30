export default function HowItWorks() {
  return (
    <section className="py-24 bg-charcoal border-t border-white/5">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">
          איך זה עובד?
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-16">
          פשוט מתחילים.
        </h2>

        <div className="flex flex-col md:flex-row gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-8 left-[15%] right-[15%] h-0.5 bg-white/5 z-0" />

          {/* Step 1 */}
          <div className="flex-1 relative z-10">
            <div className="w-16 h-16 bg-steel border border-white/10 rounded-full flex items-center justify-center text-2xl font-black text-brand-bright mx-auto mb-6">
              01
            </div>
            <h3 className="text-xl font-bold text-white mb-3">מדברים</h3>
            <p className="text-silver/60 text-sm sm:text-base leading-relaxed">
              מספרים לי מה מפריע, איך נראית השגרה ומה הייתם רוצים לשפר.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex-1 relative z-10">
            <div className="w-16 h-16 bg-steel border border-white/10 rounded-full flex items-center justify-center text-2xl font-black text-brand-bright mx-auto mb-6">
              02
            </div>
            <h3 className="text-xl font-bold text-white mb-3">נפגשים</h3>
            <p className="text-silver/60 text-sm sm:text-base leading-relaxed">
              מבצעים הערכה ומתאימים את הטיפול לצורך ולמטרה.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex-1 relative z-10">
            <div className="w-16 h-16 bg-steel border border-white/10 rounded-full flex items-center justify-center text-2xl font-black text-brand-bright mx-auto mb-6">
              03
            </div>
            <h3 className="text-xl font-bold text-white mb-3">מחליטים איך ממשיכים</h3>
            <p className="text-silver/60 text-sm sm:text-base leading-relaxed">
              לפעמים טיפול נקודתי מספיק.
              במקרים אחרים נכון לבנות תהליך של מספר מפגשים, תרגול וחזרה הדרגתית לפעילות.
            </p>
          </div>
        </div>

        <div className="mt-16 bg-brand/10 border border-brand/20 p-6 rounded-lg max-w-2xl mx-auto mb-10">
          <p className="text-white font-bold text-lg">
            המטרה היא לא יותר טיפולים. המטרה היא הטיפול הנכון עבורכם.
          </p>
        </div>

        <a
          href="https://wa.me/972500000000"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-brand text-white font-bold py-4 px-8 rounded-full hover:bg-brand-bright transition-colors"
        >
          מתחילים בשיחה ב-WhatsApp
        </a>
      </div>
    </section>
  );
}
