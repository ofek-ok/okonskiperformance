const problemPoints = [
  {
    num: "01",
    title: "מנוחה לבד לא פותרת את המקור",
    body: "הפסקה של שבוע מאימונים מורידה את הרגישות רגעית, אבל ברגע שחוזרים לעומס, אותה כתף, גב או ברך חוזרים לכאוב בדיוק באותה נקודה.",
  },
  {
    num: "02",
    title: "טיפול רגעי משחרר ליומיים",
    body: "שחרור כללי נותן הקלה קצרה, אבל בלי אבחון תנועתי וטיפול מדויק ברקמות העמוקות, הגוף ממשיך לפצות ולצבור נוקשות.",
  },
  {
    num: "03",
    title: "דחייה הופכת עומס לפציעה",
    body: "מה שמתחיל כמגבלה קטנה בטווח התנועה או תחושת גב כבד בבוקר, הופך עם הזמן לדלקת, ירידה בביצועים והשבתה מהאימונים ומהשגרה.",
  },
];

export default function TheProblem() {
  return (
    <section
      id="problem"
      className="py-16 sm:py-24 bg-[#0E1116] border-b border-white/[0.08] scroll-mt-16"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-right">
        <div className="max-w-3xl mb-12">
          <h2
            id="problem-heading"
            className="text-2xl sm:text-4xl font-medium text-[#F4F6F9] leading-tight mb-4"
          >
            העומס מצטבר בשקט, עד שהגוף מתחיל לאותת.
          </h2>
          <p className="text-[#A7AAB4] text-sm sm:text-base leading-relaxed">
            בין שעות ארוכות בישיבה ועבודה תובענית לבין אימונים אינטנסיביים, הגוף סופג עומסים יום אחרי יום. הבעיה היא שרוב האנשים מנסים לפתור את זה בדרכים זמניות שלא נוגעות בסיבה האמיתית.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problemPoints.map((item) => (
            <article
              key={item.num}
              className="pt-6 border-t border-white/[0.08]"
            >
              <span className="font-mono tabular-nums text-xs text-[#2F5E9E] block mb-2">
                {item.num}
              </span>
              <h3 className="text-lg sm:text-xl font-medium text-[#F4F6F9] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#A7AAB4] leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-[#F4F6F9]">
            כדי לעצור את המעגל הזה, לא מטפלים רק בסימפטום, אלא מתאימים את הטיפול למצב שלך.
          </p>
          <a
            href="#who-its-for"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#F4F6F9] hover:text-[#A7AAB4] shrink-0"
          >
            <span>למסלולי הטיפול</span>
            <span className="text-[#2F5E9E]">←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
