const steps = [
  {
    num: "01",
    title: "יצירת קשר",
    body: "השאר פרטים עכשיו, ותהיה בין הראשונים שאחזור אליהם כשהיומן נפתח.",
  },
  {
    num: "02",
    title: "בדיקת התאמה ותיאום",
    body: "נבצע היכרות ראשונית בהתכתבות, ובמידת הצורך גם בשיחה קצרה. אם השירות מתאים, נסכם את פרטי המפגש, המיקום, המחיר והמועד.",
  },
  {
    num: "03",
    title: "מפגש ראשון",
    body: "במפגש הראשון נבצע תשאול, הערכה וטיפול ראשוני, ובסיומו נבחן אם ואיך כדאי להמשיך.",
  },
];

export default function HowToStart() {
  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 lg:py-32 bg-[#0B0B0F] relative border-b border-white/[0.08] scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-right">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-3 mb-3.5">
            <span className="w-8 h-[3px] rounded-full bg-[#2F5E9E]" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold text-[#A7AAB4] tracking-wide">
              הצעד הראשון
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 sm:mb-5">
            מתחילים בהיכרות.{" "}
            <span className="text-[#2F5E9E]">לא בקביעת טיפול אוטומטית.</span>
          </h2>
          <p className="text-[#A7AAB4] text-sm sm:text-base lg:text-lg leading-relaxed">
            חשוב לי להבין מי אתה, מה הביא אותך ומה אתה מצפה לקבל מהטיפול.
          </p>
        </div>

        {/* 3 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-16">
          {steps.map((step) => (
            <article
              key={step.num}
              className="m-card relative overflow-hidden border border-[#2F5E9E]/25 bg-[#11131A] rounded-3xl p-5 sm:p-8 flex flex-col justify-between"
            >
              <span className="absolute top-0 right-0 left-0 h-1 bg-gradient-to-l from-[#2F5E9E] to-transparent" aria-hidden="true" />
              <div>
                <span className="inline-flex items-center justify-center font-mono tabular-nums text-[#2F5E9E] bg-[#2F5E9E]/15 border border-[#2F5E9E]/35 text-xs sm:text-sm font-bold px-2.5 py-1 rounded-lg mb-3.5">
                  {step.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-[13.5px] sm:text-sm text-[#A7AAB4] leading-relaxed">{step.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Status Callout */}
        <div className="rounded-3xl p-6 sm:p-10 border border-[#2F5E9E]/45 bg-gradient-to-l from-[#142238] via-[#11131A] to-[#0B0B0F] shadow-[0_18px_48px_-14px_rgba(47,94,158,0.3)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
              היומן נפתח בקרוב.{" "}
              <span className="text-[#437ACA]">ההרשמה לזכאות לקביעת התורים הראשונים בעיצומה.</span>
            </h3>
            <p className="text-[#A7AAB4] text-[13.5px] sm:text-sm leading-relaxed">
              מי שמצטרף ל־Performance List מקבל <strong className="text-white">קדימות בקביעת התורים הראשונים</strong> ו<strong className="text-white">מחיר ייחודי</strong> למצטרפים מוקדמים.
            </p>
          </div>
          <a
            href="#performance-list"
            className="m-btn bg-[#2F5E9E] hover:bg-[#386CB3] text-white border border-white/15 font-bold px-7 py-3.5 rounded-full text-sm shrink-0 whitespace-nowrap w-full md:w-auto text-center flex items-center justify-center min-h-[48px] shadow-[0_8px_24px_-4px_rgba(47,94,158,0.65)]"
          >
            הצטרפות ל־Performance List ←
          </a>
        </div>
      </div>
    </section>
  );
}
