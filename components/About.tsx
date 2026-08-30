export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Image / Visual Side */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gray-200 rounded-2xl overflow-hidden border border-gray-200 relative shadow-sm">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-90 transition-all duration-700" style={{ backgroundImage: "url('/about-portrait.jpg')" }} />
              
              <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-xl border border-gray-100 shadow-sm">
                <p className="font-barlow text-charcoal font-black tracking-widest uppercase text-xl mb-1">Ofek Okonski</p>
                <p className="text-brand text-sm font-bold tracking-wide uppercase">Founder, Okonski Performance</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-charcoal leading-[1.15] mb-12">
              ביצועים הם לא משהו שנולדים איתו. <br className="hidden sm:block" />
              <span className="text-brand">הם משהו שבונים.</span>
            </h2>

            <div className="space-y-6 text-charcoal/70 text-lg leading-relaxed mb-16">
              <p>
                כילד הייתי חסר ביטחון, כזה שלא תמיד האמין במה שהוא מסוגל לעשות. הכניסה לעולם אמנויות הלחימה שינתה הכל — היא הכניסה משמעת, התמדה והבנה שאפשר לבנות יכולת וביטחון לאורך זמן.
              </p>
              <p>
                מאז עברו כ-15 שנה. הפכתי לבעל חגורה שחורה ב-BJJ, נכנסתי לעולם ה-MMA ובמקביל בניתי קריירה אקדמית וטכנולוגית תובענית.
              </p>
              <p>
                לאורך הדרך הבנתי שהעקרונות הם זהים: עקביות, ניהול עומס והסתגלות. מתוך המסע הזה, נכנסתי לעולם הספורט-תרפיה, ושם העולמות התחברו.
              </p>
              <div className="border-r-2 border-brand pr-6 py-2 my-8">
                <p className="text-charcoal font-bold text-xl leading-snug">
                  הגוף פועל לפי אותו עיקרון: לא מספיק לטפל בו רק כשמשהו משתבש. צריך לבנות את היכולת שלו להתמודד עם הדרישות שאנחנו מציבים לו.
                </p>
              </div>
              <p className="text-charcoal font-bold">
                מכאן נולדה Okonski Performance.
              </p>
            </div>

            {/* Brand Vision */}
            <div className="bg-white border border-gray-200 shadow-sm p-10 rounded-2xl">
              <p className="font-barlow text-brand text-sm font-bold tracking-[0.2em] uppercase mb-3">Brand Vision</p>
              <h3 className="text-2xl font-black text-charcoal mb-3">מתחילים בספורט־תרפיה. בונים הרבה מעבר.</h3>
              <p className="text-charcoal/70 leading-relaxed">
                החזון שלנו הוא לבנות הסתכלות רחבה יותר על Human Performance. המטרה היא לעזור לאנשים לבנות את היכולת לדרוש מעצמם יותר.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
