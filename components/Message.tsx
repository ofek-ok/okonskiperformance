export default function Message() {
  return (
    <section className="py-24 bg-charcoal">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-8">
          הגוף שלך עובד קשה. <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-bright to-brand">
            הגיע הזמן לטפל בו בהתאם.
          </span>
        </h2>
        
        <div className="space-y-6 text-lg sm:text-xl text-silver/80 leading-relaxed max-w-3xl mx-auto">
          <p className="font-bold text-white">
            לא צריך לחכות לפציעה כדי לטפל בגוף.
          </p>
          <p>
            אימונים, שעות עבודה ארוכות, עומס, ישיבה ממושכת ושגרת חיים אינטנסיבית מצטברים לאורך זמן.
          </p>
          <p>
            לפעמים זה מופיע ככאב או מגבלה. <br className="hidden sm:block" />
            לפעמים כהתאוששות איטית, נוקשות או תחושה שהגוף פשוט לא עובד כמו שאתה רוצה.
          </p>
          <p className="text-brand-bright font-medium mt-8 text-xl sm:text-2xl">
            ב-Okonski Performance המטרה היא להבין מה הגוף שלך צריך ולעזור לך לחזור להרגיש, לנוע ולתפקד טוב יותר.
          </p>
        </div>
      </div>
    </section>
  );
}
