const problemPoints = [
  {
    num: "01",
    title: "הכאב חוזר שוב ושוב",
    body: "הקלה זמנית לא תמיד מספיקה. לפעמים נדרש תהליך רחב יותר שמתייחס גם לתנועה ולתפקוד.",
  },
  {
    num: "02",
    title: "הגוף מתחיל להגביל אותך",
    body: "נוקשות, מגבלות תנועה ואי נוחות עלולות להשפיע גם על העבודה וגם על הפעילות היומיומית.",
  },
  {
    num: "03",
    title: "אל תחכה שהמגבלה תהפוך לשגרה",
    body: "גם כשאין פציעה, כדאי להתייחס לעומסים ולשינויים בתפקוד הגוף.",
  },
];

export default function TheProblem() {
  return (
    <section
      id="problem"
      className="py-16 sm:py-24 bg-white text-[#0E1116] border-b border-[#0E1116]/[0.08] scroll-mt-16"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-right">
        <div className="max-w-3xl mb-12">
          <h2
            id="problem-heading"
            className="text-2xl sm:text-4xl font-semibold text-[#0E1116] leading-tight"
          >
            העומס מצטבר בשקט, עד שהגוף מתחיל לאותת.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problemPoints.map((item) => (
            <article
              key={item.num}
              className="p-6 rounded-xl bg-[#F8F9FB] border border-[#0E1116]/[0.06]"
            >
              <span className="font-mono tabular-nums text-xs font-semibold text-[#2F5E9E] block mb-2">
                {item.num}
              </span>
              <h3 className="text-lg sm:text-xl font-semibold text-[#0E1116] mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-[#4B5262] leading-relaxed">
                {item.body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-[#0E1116]/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-sm sm:text-base text-[#0E1116] font-medium">
            כדי לעצור את המעגל הזה, לא מטפלים רק בסימפטום, אלא מתאימים את הטיפול למצב שלך.
          </p>
          <a
            href="#who-its-for"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#2F5E9E] hover:text-[#264E86] shrink-0"
          >
            <span>למסלולי הטיפול</span>
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
