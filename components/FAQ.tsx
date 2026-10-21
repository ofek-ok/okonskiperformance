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
    "המפגש נמשך 60 דקות וכולל תשאול, הבנת הצורך, הערכה גופנית בהתאם למצב, טיפול ראשון והמלצה להמשך במידת הצורך."
  ],
  [
    "האם חייבים להתחייב לחבילת טיפולים?",
    "לא. המפגש הראשון עומד בפני עצמו. בסיומו נבחן אם יש צורך במפגשים נוספים ומהי המסגרת המתאימה."
  ],
  [
    "כמה זמן נמשך טיפול?",
    "המפגש הראשון נמשך 60 דקות. מפגשי המשך נמשכים 45 דקות."
  ],
  [
    "האם ניתן לקבל טיפול בבית או במשרד?",
    "שירות עד הבית או המשרד מתוכנן באזור השרון, בתיאום מראש ובהתאם לזמינות ולתנאי השירות. פרטי הזמינות יפורסמו עם פתיחת הפעילות."
  ],
  [
    "איפה מתקיימים הטיפולים?",
    "הטיפולים בקליניקה מתוכננים להתקיים באזור השרון. מיקום מדויק והנחיות הגעה יימסרו במסגרת התיאום."
  ],
  [
    "מתי אפשר להתחיל להגיע?",
    "הפיילוט בתשלום צפוי להיפתח ב־24 בינואר 2027. עד אז ניתן להצטרף ל־Performance List כדי לקבל עדכון כשהפעילות תיפתח."
  ],
  [
    "איך קובעים מפגש?",
    "לאחר פתיחת הפעילות ניתן יהיה לפנות ישירות בוואטסאפ. נתחיל בהיכרות קצרה ובבדיקת התאמה, ורק לאחר מכן נתאם מפגש."
  ]
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-steelDark py-24 sm:py-32 relative border-b border-white/[0.06] scroll-mt-24" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-right">
        
        <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-12">
          שאלות נפוצות
        </h2>

        <div className="divide-y divide-white/[0.08] card-steel rounded-2xl p-6 sm:p-8">
          {questions.map(([q, a]) => (
            <details key={q} className="group py-5 first:pt-0 last:pb-0">
              <summary className="cursor-pointer text-white font-bold text-base sm:text-lg flex items-center justify-between gap-4 list-none focus:outline-none focus-visible:ring-2 focus-visible:ring-logoIce rounded">
                <span>{q}</span>
                <span className="w-8 h-8 rounded-lg bg-steelBase border border-white/10 flex items-center justify-center shrink-0 group-open:bg-logoBlue/20 group-open:border-logoBlue/40 transition-colors">
                  <svg
                    className="w-4 h-4 text-logoIce transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <p className="text-silverMuted text-sm sm:text-base leading-relaxed pt-4 pl-4 pr-1">
                {a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center sm:text-right">
          <a
            href="#performance-list"
            className="btn-logo-metallic inline-flex items-center gap-2 text-white font-bold py-3.5 px-8 rounded-full text-sm"
          >
            <span>הצטרפות לרשימת המתעניינים</span>
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}

