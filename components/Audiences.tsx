export default function Audiences() {
  return (
    <section id="audiences" className="py-24 sm:py-32 bg-charcoal">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1]">
            לאנשים שדורשים <br className="hidden sm:block" />
            <span className="text-brand-bright">מהגוף שלהם יותר.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Audience 1: SPORT / ACTIVE */}
          <div className="bg-steel/30 border border-white/5 p-10 sm:p-14 rounded-3xl hover:border-brand/30 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] rounded-full group-hover:bg-brand/10 transition-all duration-500" />
            <p className="font-barlow text-brand-bright font-black tracking-[0.2em] uppercase text-xl mb-6 relative z-10">
              SPORT / ACTIVE
            </p>
            <h3 className="text-3xl font-black text-white mb-6 relative z-10">ספורטאים ואנשים פעילים</h3>
            
            <div className="space-y-4 text-silver/70 text-lg leading-relaxed relative z-10">
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
          <div className="bg-steel/30 border border-white/5 p-10 sm:p-14 rounded-3xl hover:border-brand/30 transition-all duration-500 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand/5 blur-[50px] rounded-full group-hover:bg-brand/10 transition-all duration-500" />
            <p className="font-barlow text-silver/50 font-black tracking-[0.2em] uppercase text-xl mb-6 relative z-10">
              PERFORMANCE / LIFE
            </p>
            <h3 className="text-3xl font-black text-white mb-6 relative z-10">אנשי קריירה ושגרה עמוסה</h3>
            
            <div className="space-y-4 text-silver/70 text-lg leading-relaxed relative z-10">
              <p className="text-white font-medium">מנהלים, יזמים, בעלי עסקים ואנשים עם קריירה תובענית.</p>
              <p>
                שעות עבודה ארוכות, ישיבה, נסיעות, מתח ועומס מצטבר משפיעים ישירות גם על הגוף.
              </p>
              <p className="text-brand-bright font-bold mt-4">
                הגוף צריך לתמוך בדרך שבה אתם רוצים לחיות — לא להגביל אותה.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
