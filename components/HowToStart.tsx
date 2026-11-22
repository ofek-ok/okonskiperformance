const steps = [
  {
    num: "01",
    tag: "דקה אחת",
    title: "השארת פרטים",
    body: "משאירים שם וטלפון בטופס למטה ומציינים בקצרה מה הסיבה לפנייה.",
  },
  {
    num: "02",
    tag: "מענה אישי",
    title: "שיחת היכרות ותיאום",
    body: "אני חוזר אליך אישית כדי להבין מה אתה צריך, לוודא התאמה ולסכם את פרטי המפגש והמועד.",
  },
  {
    num: "03",
    tag: "בקליניקה",
    title: "מפגש ראשון",
    body: "מבצעים תשאול, הערכה תנועתית וטיפול ראשוני, ובסיומו מחליטים יחד אם ואיך נכון להמשיך.",
  },
];

export default function HowToStart() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 bg-[#0E1116] border-b border-white/[0.08] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-right">
        {/* Heading at Weight 500 */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-2xl sm:text-4xl font-medium text-[#F4F6F9] leading-tight mb-3">
            איך מתאמים מפגש ראשון
          </h2>
          <p className="text-[#A7AAB4] text-sm sm:text-base leading-relaxed">
            תהליך פשוט ב־3 שלבים — משאירים פרטים, מוודאים התאמה בשיחה קצרה ומתאמים מועד.
          </p>
        </div>

        {/* 3-Step Ruled Timeline (Distinct from cards; No Icon/Number Tiles) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step) => (
            <article
              key={step.num}
              className="pt-6 border-t border-white/[0.08] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono tabular-nums text-xs text-[#A7AAB4]">
                    {step.num}
                  </span>
                  <span className="text-xs text-[#A7AAB4]">{step.tag}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-medium text-[#F4F6F9] mb-2">{step.title}</h3>
                <p className="text-sm text-[#A7AAB4] leading-relaxed">{step.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Callout with Quiet Secondary Button (Form below holds the Primary Button) */}
        <div className="rounded-xl p-6 sm:p-8 border border-white/[0.08] bg-[#151A22] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-medium text-[#F4F6F9] mb-2">
              היומן נפתח בקרוב — ההרשמה המוקדמת פתוחה.
            </h3>
            <p className="text-[#A7AAB4] text-sm leading-relaxed">
              הנרשמים עכשיו מקבלים קדימות בתיאום התורים הראשונים ומחיר ייחודי למצטרפים מוקדמים.
            </p>
          </div>
          <a
            href="#performance-list"
            className="btn-secondary shrink-0 whitespace-nowrap w-full md:w-auto"
          >
            <span>שריון קדימות בתורים</span>
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
