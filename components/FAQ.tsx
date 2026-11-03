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
      className="bg-[#F5F5F2] text-[#22272C] py-20 sm:py-28 lg:py-32 border-b border-[#A8B0B7]/30 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-right">
        
        <div className="mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#49677F] uppercase tracking-wider font-semibold">
              כל מה שחשוב לדעת
            </span>
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22272C] leading-tight tracking-tight">
            שאלות <span className="text-[#49677F]">נפוצות</span>
          </h2>
        </div>

        {/* Swiss Ruled Accordion */}
        <div className="border-t border-[#A8B0B7]/30 divide-y divide-[#A8B0B7]/30">
          {questions.map(([q, a]) => (
            <details
              key={q}
              className="group py-5 sm:py-6 transition-colors"
            >
              <summary className="cursor-pointer text-[#22272C] font-semibold text-base sm:text-lg flex items-center justify-between gap-4 list-none focus:outline-none min-h-[44px]">
                <span className="leading-snug">{q}</span>
                <span className="w-7 h-7 flex items-center justify-center shrink-0 font-mono text-base text-[#49677F] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-[#22272C]/75 text-sm sm:text-base leading-relaxed pt-3 pr-1">
                {a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 sm:mt-16 text-right">
          <a
            href="#performance-list"
            className="bg-[#142333] text-[#F5F5F2] hover:bg-[#22272C] transition-colors py-3.5 px-8 rounded-sm text-sm font-semibold inline-flex items-center justify-center gap-2 min-h-[46px]"
          >
            <span>הצטרפות ל־Performance List</span>
            <span>←</span>
          </a>
        </div>

      </div>
    </section>
  );
}
