export default function Method() {
  return (
    <section id="services" className="py-24 bg-steel">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">
            השירותים
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
            טיפול שמתאים למה שהגוף <br className="hidden sm:block" />
            <span className="text-brand-bright">שלך צריך עכשיו.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Card 1 */}
          <div className="bg-charcoal border border-white/5 p-8 rounded-lg hover:border-brand/30 transition-colors group">
            <div className="w-12 h-12 bg-brand/10 rounded flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">טיפול בכאב ועומס</h3>
            <p className="text-silver/70 mb-4 text-sm sm:text-base leading-relaxed">
              למי שמתמודד עם כאב, עומס או מגבלה שמשפיעים על האימונים, העבודה או היום-יום.
            </p>
            <p className="text-silver/90 font-medium text-sm sm:text-base">
              המטרה היא להבין את המצב, לטפל ולבנות דרך נכונה קדימה.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-charcoal border border-white/5 p-8 rounded-lg hover:border-brand/30 transition-colors group">
            <div className="w-12 h-12 bg-brand/10 rounded flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">שיקום וחזרה לפעילות</h3>
            <p className="text-silver/70 mb-4 text-sm sm:text-base leading-relaxed">
              למי שכאב, פציעה או מגבלה הרחיקו אותו מהפעילות שהוא רוצה לעשות.
            </p>
            <p className="text-silver/70 mb-4 text-sm sm:text-base leading-relaxed">
              נבנה תהליך הדרגתי שמטרתו להחזיר אותך לתפקוד ולפעילות.
            </p>
            <p className="text-brand-bright font-bold text-sm sm:text-base">
              לא רק להרגיש טוב יותר. לחזור לעשות.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-charcoal border border-white/5 p-8 rounded-lg hover:border-brand/30 transition-colors group">
            <div className="w-12 h-12 bg-brand/10 rounded flex items-center justify-center mb-6 group-hover:bg-brand/20 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-4">תחזוקת הגוף והתאוששות</h3>
            <p className="text-silver/70 mb-4 text-sm sm:text-base leading-relaxed">
              לא חייבים לחכות שמשהו יכאב.
            </p>
            <p className="text-silver/70 mb-4 text-sm sm:text-base leading-relaxed">
              טיפולים להפחתת עומסים, התאוששות, שיפור התחושה והתנועה ותחזוקה שוטפת של הגוף כחלק מאורח חיים פעיל ותובעני.
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://wa.me/972500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white border-b-2 border-brand pb-1 font-medium hover:text-brand transition-colors"
          >
            לא בטוח מה מתאים לך? דבר איתי ב-WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
