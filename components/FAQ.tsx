const questions = [
  [
    "האם צריך להיות ספורטאי מקצועי כדי להגיע לטיפול?",
    "לא. השירות מיועד הן למתאמנים חובבים ותחרותיים שעוסקים בספורט באופן קבוע, והן לאנשי קריירה עם שגרה תובענית ועומס פיזי מצטבר.",
  ],
  [
    "האם הטיפול מתאים גם אם אין לי פציעה פעילה?",
    "כן. ניתן להגיע גם לצורך תחזוקה שוטפת, התאוששות מעומסי אימון או עבודה על שיפור טווחי תנועה ויציבה.",
  ],
  [
    "מה יכלול המפגש הראשון עם פתיחת הפעילות?",
    "המפגש כולל תשאול ממוקד, הבנת הצורך, הערכה תנועתית בהתאם למצב, טיפול גופני ראשון והמלצה מסודרת להמשך במידת הצורך.",
  ],
  [
    "האם חייבים להתחייב לחבילת טיפולים?",
    "לא. כל מפגש עומד בפני עצמו. בסיום המפגש הראשון נבחן יחד אם יש צורך במפגשי המשך ומהי המסגרת המתאימה עבורך.",
  ],
  [
    "מה משמעות ההצטרפות לרשימת המתעניינים?",
    "הפעילות נמצאת כעת בהקמה. הצטרפות לרשימת המתעניינים מאפשרת לקבל עדכון אישי ישירות ממני עם פתיחת הפעילות, ללא כל התחייבות.",
  ],
  [
    "איך יוצרים קשר לבירור ראשוני?",
    "משאירים פרטים בטופס ההצטרפות לרשימת המתעניינים בתחתית העמוד, או פונים בהודעה ישירה בוואטסאפ.",
  ],
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="bg-[#14181F] text-white py-20 sm:py-28 lg:py-32 border-b border-white/10 scroll-mt-20"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-right">
        <div className="mb-12 sm:mb-16">
          <span className="eyebrow">כל מה שחשוב לדעת</span>
          <h2 id="faq-heading" className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight">
            שאלות נפוצות
          </h2>
        </div>

        <div className="border-t border-white/15 divide-y divide-white/15">
          {questions.map(([q, a]) => (
            <details key={q} className="group py-5 sm:py-6">
              <summary className="cursor-pointer text-white font-semibold text-base sm:text-lg flex items-center justify-between gap-4 list-none focus:outline-none min-h-[44px]">
                <span className="leading-snug">{q}</span>
                <span className="w-7 h-7 flex items-center justify-center shrink-0 font-mono text-lg text-[#94A3B8] transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="text-[#94A3B8] text-sm sm:text-base leading-relaxed pt-3 pr-1">
                {a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 sm:mt-16">
          <a href="#performance-list" className="btn-primary w-full sm:w-auto">
            <span>הצטרפות לרשימת המתעניינים</span>
            <span aria-hidden="true">←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
