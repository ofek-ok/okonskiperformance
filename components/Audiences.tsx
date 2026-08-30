export default function Audiences() {
  return (
    <section id="audiences" className="py-24 sm:py-32 md:py-40 bg-offwhite">
      <div className="container mx-auto px-6 max-w-6xl">
        
        <div className="mb-24 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-primary-text leading-[1.1] tracking-tight">
            לאנשים שדורשים <br className="hidden sm:block" />
            <span className="text-brand">מהגוף שלהם יותר.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 relative">
          
          {/* Vertical Divider (Desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-charcoal/10 -translate-x-1/2" />

          {/* Audience 1: SPORT / ACTIVE */}
          <div className="md:pr-12 relative group">
            <p className="font-barlow text-brand font-black tracking-[0.2em] uppercase text-2xl sm:text-3xl mb-6">
              SPORT / ACTIVE
            </p>
            <h3 className="text-3xl sm:text-4xl font-black text-primary-text mb-6">ספורטאים ואנשים פעילים</h3>
            
            <div className="space-y-6 text-secondary-text text-lg sm:text-xl leading-relaxed">
              <p className="text-primary-text font-bold">מקצוענים וחובבים מכל ענפי הספורט.</p>
              <p>
                ריצה, כוח, CrossFit, אומנויות לחימה, משחקי כדור, רכיבה, שחייה ועוד.
              </p>
              <p>
                בין אם המטרה היא לחזור מפציעה, להתמודד עם עומסים או פשוט לשמור על הגוף לאורך זמן.
              </p>
            </div>
          </div>

          {/* Audience 2: PERFORMANCE / LIFE */}
          <div className="md:pl-12 relative group mt-16 md:mt-0 md:border-l-0 border-t border-charcoal/10 md:border-t-0 pt-16 md:pt-0">
            <p className="font-barlow text-charcoal/30 font-black tracking-[0.2em] uppercase text-2xl sm:text-3xl mb-6">
              PERFORMANCE / LIFE
            </p>
            <h3 className="text-3xl sm:text-4xl font-black text-primary-text mb-6">אנשי קריירה ושגרה עמוסה</h3>
            
            <div className="space-y-6 text-secondary-text text-lg sm:text-xl leading-relaxed">
              <p className="text-primary-text font-bold">מנהלים, יזמים, בעלי עסקים ואנשים עם קריירה תובענית.</p>
              <p>
                שעות עבודה ארוכות, ישיבה, נסיעות, מתח ועומס מצטבר משפיעים ישירות גם על הגוף.
              </p>
              <p className="text-brand font-bold mt-4">
                הגוף צריך לתמוך בדרך שבה אתם רוצים לחיות — לא להגביל אותה.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
