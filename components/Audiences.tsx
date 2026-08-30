export default function Audiences() {
  return (
    <section id="audiences" className="py-24 bg-charcoal">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">
            למי זה מתאים
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            לאנשים שדורשים <br className="hidden sm:block" />
            <span className="text-brand-bright">מהגוף שלהם יותר.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {/* Audience 1 */}
          <div className="bg-steel/50 border border-white/5 p-8 sm:p-10 rounded-lg">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-4">
              <span className="w-10 h-10 bg-brand/20 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                </svg>
              </span>
              ספורטאים ואנשים פעילים
            </h3>
            <p className="text-silver/80 text-lg mb-4 font-medium">
              מקצוענים וחובבים מכל ענפי הספורט.
            </p>
            <p className="text-silver/60 leading-relaxed mb-4">
              ריצה, כוח, CrossFit, אומנויות לחימה, משחקי כדור, רכיבה, שחייה ועוד.
            </p>
            <p className="text-silver/60 leading-relaxed">
              בין אם המטרה היא לחזור מפציעה, להתמודד עם עומסים או פשוט לשמור על הגוף לאורך זמן.
            </p>
          </div>

          {/* Audience 2 */}
          <div className="bg-steel/50 border border-white/5 p-8 sm:p-10 rounded-lg">
            <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-4">
              <span className="w-10 h-10 bg-brand/20 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
              </span>
              אנשי קריירה
            </h3>
            <p className="text-silver/80 text-lg mb-4 font-medium">
              מנהלים, יזמים, בעלי עסקים ואנשים עם קריירה תובענית.
            </p>
            <p className="text-silver/60 leading-relaxed mb-6">
              שעות עבודה ארוכות, ישיבה, נסיעות, מתח ועומס מצטבר משפיעים גם על הגוף.
            </p>
            <div className="bg-charcoal p-4 rounded border-l-2 border-brand">
              <p className="text-white font-bold">
                הגוף צריך לתמוך בדרך שבה אתם רוצים לחיות — לא להגביל אותה.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
