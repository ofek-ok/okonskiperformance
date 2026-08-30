export default function FAQ() {
  const faqs = [
    {
      q: "למי הטיפול מתאים?",
      a: "לכל מי שרוצה לשפר את התפקוד הגופני שלו, לטפל בכאב, לחזור לפעילות או פשוט לשמור על גוף חזק שמתמודד טוב עם עומסי היומיום.",
    },
    {
      q: "האם חייבים להיות ספורטאים?",
      a: "ממש לא. למרות שאנחנו עובדים עם ספורטאים, הטיפול מתאים באותה מידה לאנשי קריירה, יזמים ואנשים עם שגרה עמוסה שדורשים מהגוף שלהם ביצועים.",
    },
    {
      q: "האם אפשר להגיע גם בלי פציעה?",
      a: "בהחלט. תחזוקת גוף ומניעת פציעות הן חלק בלתי נפרד מחיים פעילים. הרבה מגיעים כדי לשפר התאוששות, להפחית עומסים ולהרגיש טוב יותר בשגרה.",
    },
    {
      q: "במה יכול הטיפול לעזור?",
      a: "הטיפול יכול לעזור בהפחתת כאבים, שיפור טווחי תנועה, זירוז התאוששות מאימונים, שיקום מפציעות והכנת הגוף לחזרה לעומס ופעילות.",
    },
    {
      q: "איך נראה הטיפול הראשון?",
      a: "הטיפול הראשון כולל שיחה מעמיקה להבנת המטרות וההיסטוריה שלך, בדיקה והערכה תנועתית, ולאחר מכן טיפול מעשי שמותאם אישית למה שהגוף שלך צריך.",
    },
    {
      q: "כמה זמן נמשך טיפול?",
      a: "הטיפול נמשך כ-50-60 דקות, כדי לאפשר מספיק זמן גם להערכה, גם לטיפול מנואלי וגם להנחיות להמשך.",
    },
    {
      q: "איפה מתקיימים הטיפולים?",
      a: "הטיפולים מתקיימים בקליניקה מסודרת ומאובזרת באזור השרון (המיקום המדויק יימסר בתיאום התור).",
    },
    {
      q: "האם קיימת אפשרות לטיפול בבית?",
      a: "כרגע השירות ניתן בקליניקה בלבד על מנת להבטיח את סביבת הטיפול והציוד האופטימליים.",
    },
    {
      q: "איך קובעים טיפול?",
      a: "פשוט שולחים הודעת WhatsApp, אנחנו נדבר קצרות כדי לוודא שזה מתאים, ונתאם את הפגישה הראשונה.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-charcoal border-t border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-black text-white leading-tight">
            שאלות נפוצות
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group bg-steel/30 border border-white/10 rounded-lg open:bg-steel/50 transition-colors"
            >
              <summary className="flex items-center justify-between cursor-pointer p-6 list-none font-bold text-white text-lg select-none">
                {faq.q}
                <span className="ml-4 flex-shrink-0 text-brand group-open:rotate-45 transition-transform duration-300">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-silver/70 text-base leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
