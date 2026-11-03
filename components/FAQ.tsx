const questions = [
  [
    "האם צריך להיות ספורטאי מקצועי כדי להגיע לטיפול?",
    "לא. הטיפול מיועד גם למתאמנים חובבים שעוסקים בספורט באופן קבוע, וגם לאנשי קריירה עם שגרה תובענית."
  ],
  [
    "האם הטיפול מתאים גם אם אין לי פציעה?",
    "כן. אפשר להגיע גם לצורך תחזוקה, התאוששות מעומס או עבודה על מטרה גופנית מוגדרת."
  ],
  [
    "מה קורה במפגש הראשון?",
    "המפגש כולל תשאול, הבנת הצורך, הערכה גופנית בהתאם למצב, טיפול ראשון והמלצה להמשך במידת הצורך."
  ],
  [
    "האם חייבים להתחייב לחבילת טיפולים?",
    "לא. המפגש הראשון עומד בפני עצמו. בסיומו נבחן אם יש צורך במפגשים נוספים ומהי המסגרת המתאימה."
  ],
  [
    "מה נותנת ההצטרפות ל־Performance List?",
    "מי שנרשם לפני הפתיחה מקבל קדימות בקביעת התורים הראשונים עם פתיחת היומן, וכן מחיר ייחודי למצטרפים מוקדמים."
  ],
  [
    "האם ההרשמה מחייבת אותי למשהו?",
    "לא. משאירים פרטים, אני חוזר אליך אישית לקראת פתיחת היומן, ואתה מחליט אם ומתי לתאם."
  ],
  [
    "איך קובעים מפגש?",
    "משאירים פרטים ב־Performance List או פונים בוואטסאפ. מתחילים בהיכרות קצרה ובבדיקת התאמה, ולאחר מכן מתאמים מפגש."
  ]
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-steelDark py-16 sm:py-24 lg:py-32 relative border-b border-white/[0.06] scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-right">
        
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-3 mb-3.5">
            <span className="w-8 h-[2px] rounded-full bg-logoIce/70" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-medium text-silverOff tracking-wide">
              כל מה שחשוב לדעת
            </span>
          </div>
          <h2 id="faq-heading" className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            שאלות <span className="text-silverOff">נפוצות</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-3.5">
          {questions.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-2xl border border-white/[0.08] bg-neutral-900/35 open:bg-neutral-900/65 open:border-white/[0.16] px-4 sm:px-7 py-3.5 sm:py-5 transition-all duration-200"
            >
              <summary className="cursor-pointer text-white font-semibold text-[14.5px] sm:text-base flex items-center justify-between gap-3.5 list-none focus:outline-none focus-visible:ring-1 focus-visible:ring-logoIce rounded min-h-[44px]">
                <span className="leading-snug">{q}</span>
                <span className="w-8 h-8 rounded-full border border-white/15 bg-white/[0.04] group-hover:bg-white/[0.1] flex items-center justify-center shrink-0 text-silverOff group-hover:text-white transition-all duration-200">
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="text-neutral-300 text-[13.5px] sm:text-sm leading-relaxed pt-3.5 sm:pt-4 mt-3 border-t border-white/[0.06] pl-1">
                {a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center sm:text-right">
          <a
            href="#performance-list"
            className="bg-white text-black font-semibold hover:bg-neutral-100 transition-all duration-200 py-3.5 px-7 rounded-full text-sm w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2 shadow-sm active:scale-[0.98]"
          >
            <span>הצטרפות ל־Performance List</span>
            <span>←</span>
          </a>
        </div>

      </div>
    </section>
  );
}
