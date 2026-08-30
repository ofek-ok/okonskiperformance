export default function About() {
  return (
    <>
      {/* PERSONAL / FOUNDER SECTION */}
      <section id="about" className="py-24 sm:py-32 md:py-40 bg-offwhite">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
            
            {/* Image / Visual Side - Clean modern framing */}
            <div className="relative order-2 lg:order-1">
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden relative shadow-2xl shadow-charcoal/5">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-95 grayscale hover:grayscale-0 transition-all duration-1000" style={{ backgroundImage: "url('/about-portrait.jpg')" }} />
                
                {/* Minimalist Nameplate */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-10 pt-32">
                  <p className="font-barlow text-white font-black tracking-widest uppercase text-3xl mb-1">Ofek Okonski</p>
                  <p className="text-brand font-bold tracking-widest uppercase text-sm">Founder, Okonski Performance</p>
                </div>
              </div>
            </div>

            {/* Text Side */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-primary-text leading-[1.1] mb-12">
                ביצועים הם לא משהו שנולדים איתו. <br className="hidden xl:block" />
                <span className="text-brand">הם משהו שבונים.</span>
              </h2>

              <div className="space-y-8 text-secondary-text text-xl leading-relaxed">
                <p>
                  כילד הייתי חסר ביטחון, כזה שלא תמיד האמין במה שהוא מסוגל לעשות. הכניסה לעולם אמנויות הלחימה שינתה הכל — היא הכניסה משמעת, התמדה והבנה שאפשר לבנות יכולת וביטחון לאורך זמן.
                </p>
                <p>
                  מאז עברו כ-15 שנה. הפכתי לבעל חגורה שחורה ב-BJJ, נכנסתי לעולם ה-MMA ובמקביל בניתי קריירה אקדמית וטכנולוגית תובענית.
                </p>
                <p>
                  לאורך הדרך הבנתי שהעקרונות הם זהים: עקביות, ניהול עומס והסתגלות. מתוך המסע הזה, נכנסתי לעולם הספורט-תרפיה, ושם העולמות התחברו.
                </p>
                <div className="border-r-4 border-brand pr-8 py-4 my-12 bg-white/50">
                  <p className="text-primary-text font-black text-2xl leading-snug">
                    הגוף פועל לפי אותו עיקרון: לא מספיק לטפל בו רק כשמשהו משתבש. צריך לבנות את היכולת שלו להתמודד עם הדרישות שאנחנו מציבים לו.
                  </p>
                </div>
                <p className="text-primary-text font-black text-2xl">
                  מכאן נולדה Okonski Performance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BRAND VISION STATEMENT */}
      <section className="py-32 sm:py-48 md:py-64 bg-primary relative overflow-hidden flex items-center justify-center text-center">
        {/* Subtle geometric element / blue line */}
        <div className="absolute top-0 bottom-0 left-1/2 w-[2px] bg-gradient-to-b from-transparent via-brand/20 to-transparent -translate-x-1/2" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          <p className="font-barlow text-brand font-black tracking-[0.3em] uppercase text-xl sm:text-2xl mb-12">
            Brand Vision
          </p>
          <h3 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-12">
            מתחילים בספורט־תרפיה. <br />
            <span className="text-brand-bright">בונים הרבה מעבר.</span>
          </h3>
          <p className="text-2xl sm:text-3xl text-secondary-text font-medium max-w-3xl mx-auto leading-relaxed">
            החזון שלנו הוא לבנות הסתכלות רחבה יותר על Human Performance. המטרה היא לעזור לאנשים לבנות את היכולת לדרוש מעצמם יותר.
          </p>
        </div>
      </section>
    </>
  );
}
