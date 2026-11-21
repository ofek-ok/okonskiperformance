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
    "מה נותנת ההרשמה המוקדמת באתר?",
    "מי שמשאיר פרטים לפני הפתיחה מקבל קדימות בתיאום התורים הראשונים עם פתיחת היומן, וכן מחיר ייחודי למצטרפים מוקדמים."
  ],
  [
    "האם השארת הפרטים מחייבת אותי למשהו?",
    "לא. משאירים פרטים, אני חוזר אליך אישית לקראת פתיחת היומן, ואתה מחליט אם ומתי לתאם."
  ],
  [
    "איך מתאמים מפגש?",
    "משאירים פרטים בטופס למטה או פונים בוואטסאפ. מתחילים בשיחת היכרות קצרה ובבדיקת התאמה, ולאחר מכן מתאמים מועד."
  ]
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-[#12151C] py-16 sm:py-24 lg:py-28 border-b border-white/10 scroll-mt-16"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-right">
        <div className="mb-10 sm:mb-12">
          <h2 id="faq-heading" className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
            שאלות נפוצות
          </h2>
        </div>

        <div className="space-y-3">
          {questions.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-xl bg-[#191D26] border border-white/10 open:border-[#2F5E9E]/45 px-5 sm:px-6 py-4 transition-colors"
            >
              <summary className="cursor-pointer text-white font-semibold text-base sm:text-lg flex items-center justify-between gap-4 list-none focus:outline-none min-h-[40px]">
                <span className="leading-snug">{q}</span>
                <span className="font-mono text-lg text-[#A7AAB4] transition-transform duration-150 group-open:rotate-45 shrink-0">
                  +
                </span>
              </summary>
              <p className="text-[#B0B7C3] text-sm sm:text-base leading-relaxed pt-3 mt-3 border-t border-white/10 pl-1">
                {a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-10 sm:mt-12 text-right">
          <a
            href="#performance-list"
            className="m-btn bg-[#2F5E9E] hover:bg-[#264E86] text-white font-semibold py-3.5 px-7 rounded-lg text-sm w-full sm:w-auto min-h-[46px] inline-flex items-center justify-center gap-2"
          >
            <span>שריון קדימות בתורים</span>
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
