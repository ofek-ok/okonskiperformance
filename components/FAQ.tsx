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
      className="bg-[#0E1116] py-16 sm:py-24 border-b border-white/[0.08] scroll-mt-16"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-right">
        <div className="mb-12">
          <h2 id="faq-heading" className="text-2xl sm:text-4xl font-medium text-[#F4F6F9] leading-tight">
            שאלות נפוצות
          </h2>
        </div>

        <div className="space-y-3">
          {questions.map(([q, a]) => (
            <details
              key={q}
              className="group rounded-xl bg-[#151A22] border border-white/[0.08] open:border-white/[0.16] px-6 py-4"
            >
              <summary className="cursor-pointer text-[#F4F6F9] font-medium text-base sm:text-lg flex items-center justify-between gap-4 list-none focus:outline-none min-h-[40px]">
                <span className="leading-snug">{q}</span>
                <span className="font-mono text-lg text-[#A7AAB4] transition-transform duration-150 group-open:rotate-45 shrink-0">
                  +
                </span>
              </summary>
              <p className="text-[#A7AAB4] text-sm sm:text-base leading-relaxed pt-3 mt-3 border-t border-white/[0.08] pl-1">
                {a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-right">
          <a
            href="#performance-list"
            className="btn-secondary w-full sm:w-auto"
          >
            <span>שריון קדימות בתורים</span>
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
