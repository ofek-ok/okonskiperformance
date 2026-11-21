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
      className="py-16 sm:py-24 lg:py-28 bg-[#12151C] border-b border-white/10 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-right">
        {/* Direct, clear heading */}
        <div className="max-w-3xl mb-10 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-3.5">
            איך מתאמים מפגש ראשון
          </h2>
          <p className="text-[#B0B7C3] text-sm sm:text-base lg:text-lg leading-relaxed">
            תהליך פשוט ב־3 שלבים — משאירים פרטים, מוודאים התאמה בשיחה קצרה ומתאמים מועד.
          </p>
        </div>

        {/* 3 Structured Cards on Soft Slate Ground (No floating text in pitch-black void) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-10 sm:mb-12">
          {steps.map((step) => (
            <article
              key={step.num}
              className="m-card p-6 sm:p-7 rounded-xl bg-[#191D26] border border-white/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono tabular-nums text-xs font-bold px-2.5 py-1 rounded bg-[#2F5E9E]/20 text-[#74A4EC]">
                    {step.num}
                  </span>
                  <span className="text-xs text-[#A7AAB4]">{step.tag}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-[#B0B7C3] leading-relaxed">{step.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Callout with Unified CTA Button */}
        <div className="rounded-xl p-6 sm:p-8 border border-[#2F5E9E]/35 bg-[#191D26] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
              היומן נפתח בקרוב — ההרשמה המוקדמת פתוחה.
            </h3>
            <p className="text-[#B0B7C3] text-sm leading-relaxed">
              הנרשמים עכשיו מקבלים קדימות בתיאום התורים הראשונים ומחיר ייחודי למצטרפים מוקדמים.
            </p>
          </div>
          <a
            href="#performance-list"
            className="m-btn bg-[#2F5E9E] hover:bg-[#264E86] text-white font-semibold px-7 py-3.5 rounded-lg text-sm shrink-0 whitespace-nowrap w-full md:w-auto text-center flex items-center justify-center min-h-[46px] gap-2"
          >
            <span>שריון קדימות בתורים</span>
            <span>←</span>
          </a>
        </div>
      </div>
    </section>
  );
}
