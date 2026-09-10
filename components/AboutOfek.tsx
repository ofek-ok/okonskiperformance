export default function AboutOfek() {
  return (
    <section id="about" className="py-24 sm:py-32 md:py-40 bg-primary">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-center">
          
          {/* Image / Visual Side - Clean modern framing */}
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/5] bg-elevated overflow-hidden relative shadow-2xl shadow-black/50 border border-white/5">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 grayscale hover:grayscale-0 transition-all duration-1000" style={{ backgroundImage: "url('/about-portrait.jpg')" }} />
              
              {/* Minimalist Nameplate */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-10 pt-32">
                <p className="font-barlow text-white font-black tracking-widest uppercase text-3xl mb-1">Ofek Okonski</p>
                <p className="text-brand font-bold tracking-widest uppercase text-sm">Founder, Okonski Performance</p>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className="order-1 lg:order-2">
            <p className="font-barlow text-brand font-black tracking-[0.2em] uppercase text-sm sm:text-base mb-6">
              BEHIND OKONSKI PERFORMANCE
            </p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-12">
              אני אופק אוקונסקי.
            </h2>

            <div className="space-y-6 text-secondary-text text-xl leading-relaxed mb-12">
              <p>
                עולם הביצועים מלווה אותי משני כיוונים שונים.
              </p>
              <p>
                מצד אחד — שנים בעולם אומנויות הלחימה, האימון והדרישה מהגוף לבצע.
              </p>
              <p>
                מצד שני — שנים של עבודה בניהול פרויקטים וטכנולוגיה, בסביבה שבה עומס, ביצועים ולחץ הם חלק מהשגרה.
              </p>
              <p className="text-white font-medium mt-4">
                Okonski Performance נבנית מתוך החיבור בין העולמות האלה, יחד עם הדרך המקצועית שלי בעולם ה־Sports Therapy וה־Human Performance.
              </p>
            </div>

            <div className="bg-elevated border-r-4 border-brand p-8">
              <p className="text-secondary-text mb-2 font-medium">המטרה שלי פשוטה:</p>
              <p className="text-white font-black text-2xl leading-snug">
                לעזור לאנשים לבנות גוף שמסוגל לעמוד במה שהם דורשים ממנו.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
