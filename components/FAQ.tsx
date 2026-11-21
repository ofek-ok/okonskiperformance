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
      className="bg-[#0B0B0F] py-16 sm:py-24 lg:py-32 relative border-b border-white/[0.08] scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-right">
        <div className="mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-3 mb-3.5">
            <span className="w-8 h-[3px] rounded-full bg-[#2F5E9E]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold text-[#A7AAB4] tracking-wide">
              כל מה שחשוב לדעת
            </span>
          </div>
          <h2 id="faq-heading" className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
            שאלות <span className="text-[#2F5E9E]">נפוצות</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-3.5">
          {questions.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-2xl border border-[#2F5E9E]/25 bg-[#11131A] open:bg-[#141824] open:border-[#2F5E9E]/60 px-4 sm:px-7 py-3.5 sm:py-5 transition-[background-color,border-color] duration-150"
            >
              <summary className="cursor-pointer text-white font-semibold text-[14.5px] sm:text-base flex items-center justify-between gap-3.5 list-none focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2F5E9E] rounded min-h-[44px]">
                <span className="leading-snug">{q}</span>
                <span className="w-8 h-8 rounded-full border border-[#2F5E9E]/35 bg-[#2F5E9E]/15 group-open:bg-[#2F5E9E] flex items-center justify-center shrink-0 text-[#2F5E9E] group-open:text-white transition-[background-color,color] duration-150">
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.2" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="text-[#A7AAB4] text-[13.5px] sm:text-sm leading-relaxed pt-3.5 sm:pt-4 mt-3 border-t border-white/[0.08] pl-1">
                {a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-center sm:text-right">
          <a
            href="#performance-list"
            className="m-btn bg-[#2F5E9E] hover:bg-[#386CB3] text-white border border-white/15 font-bold py-3.5 px-8 rounded-full text-sm w-full sm:w-auto min-h-[48px] inline-flex items-center justify-center gap-2 shadow-[0_8px_24px_-4px_rgba(47,94,158,0.65)]"
          >
            <span>הצטרפות ל־Performance List</span>
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
