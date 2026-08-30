export default function Audiences() {
  return (
    <section id="audiences" className="py-32 bg-steel">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-24">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight">
            לאנשים שדורשים <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-bright to-brand">מהגוף שלהם יותר.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/10 -translate-x-1/2" />

          {/* Audience 1: SPORT / ACTIVE */}
          <div>
            <p className="font-barlow text-brand-bright font-black tracking-[0.2em] uppercase text-2xl mb-6">
              SPORT / ACTIVE
            </p>
            <h3 className="text-3xl font-black text-white mb-6">ספורטאים ואנשים פעילים</h3>
            
            <div className="space-y-6 text-silver/70 text-lg leading-relaxed">
              <p className="text-white font-medium">מקצוענים וחובבים מכל ענפי הספורט.</p>
              <p>
                ריצה, כוח, CrossFit, אומנויות לחימה, משחקי כדור, רכיבה, שחייה ועוד.
              </p>
              <p>
                בין אם המטרה היא לחזור מפציעה, להתמודד עם עומסים או פשוט לשמור על הגוף לאורך זמן.
              </p>
            </div>
          </div>

          {/* Audience 2: PERFORMANCE / LIFE */}
          <div>
            <p className="font-barlow text-silver/50 font-black tracking-[0.2em] uppercase text-2xl mb-6">
              PERFORMANCE / LIFE
            </p>
            <h3 className="text-3xl font-black text-white mb-6">אנשי קריירה ושגרה עמוסה</h3>
            
            <div className="space-y-6 text-silver/70 text-lg leading-relaxed">
              <p className="text-white font-medium">מנהלים, יזמים, בעלי עסקים ואנשים עם קריירה תובענית.</p>
              <p>
                שעות עבודה ארוכות, ישיבה, נסיעות, מתח ועומס מצטבר משפיעים ישירות גם על הגוף.
              </p>
              <p className="text-brand-bright font-bold text-xl leading-snug mt-4">
                הגוף צריך לתמוך בדרך שבה אתם רוצים לחיות — לא להגביל אותה.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
