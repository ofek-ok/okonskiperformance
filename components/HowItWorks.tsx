export default function HowItWorks() {
  return (
    <section className="py-32 bg-black border-t border-white/5">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="mb-24 text-center">
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            פשוט מתחילים.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 relative">
          {/* Step 1 */}
          <div className="relative">
            <p className="font-barlow text-brand text-sm font-bold tracking-[0.2em] uppercase mb-4">01 — Understand</p>
            <h3 className="text-2xl font-black text-white mb-4">מדברים</h3>
            <p className="text-silver/60 text-lg leading-relaxed">
              מספרים לי מה מפריע, איך נראית השגרה ומה הייתם רוצים לשפר ולשנות בתפקוד היומיומי שלכם.
            </p>
          </div>

          {/* Step 2 */}
          <div className="relative">
            <p className="font-barlow text-brand text-sm font-bold tracking-[0.2em] uppercase mb-4">02 — Treat</p>
            <h3 className="text-2xl font-black text-white mb-4">נפגשים</h3>
            <p className="text-silver/60 text-lg leading-relaxed">
              מבצעים הערכה מקיפה ומתאימים את הטיפול המדויק לצורך, למצב הגופני ולמטרה שלכם.
            </p>
          </div>

          {/* Step 3 */}
          <div className="relative">
            <p className="font-barlow text-brand text-sm font-bold tracking-[0.2em] uppercase mb-4">03 — Progress</p>
            <h3 className="text-2xl font-black text-white mb-4">מחליטים איך ממשיכים</h3>
            <p className="text-silver/60 text-lg leading-relaxed">
              לפעמים טיפול נקודתי מספיק. במקרים אחרים נכון לבנות תהליך הדרגתי של טיפול, תרגול וחזרה לפעילות.
            </p>
          </div>
        </div>

        <div className="mt-24 text-center max-w-3xl mx-auto">
          <p className="text-3xl sm:text-4xl font-black text-white leading-tight">
            המטרה היא לא יותר טיפולים.<br />
            <span className="text-brand-bright">המטרה היא הטיפול הנכון עבורכם.</span>
          </p>
          <div className="mt-12">
            <a
              href="https://wa.me/972500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand text-white font-bold py-5 px-10 rounded-full text-sm tracking-widest uppercase hover:bg-brand-bright transition-all"
            >
              לפרטים ועדכונים
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
