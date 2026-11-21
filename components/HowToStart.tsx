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
      className="py-16 sm:py-24 lg:py-28 bg-[#0B0B0F] border-b border-white/10 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 text-right">
        {/* Heading without eyebrow; muted Cool Gray run-on sentence */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
            מתחילים בהיכרות.{" "}
            <span className="text-[#A7AAB4] font-normal">לא בקביעת טיפול אוטומטית.</span>
          </h2>
          <p className="text-[#A7AAB4] text-sm sm:text-base lg:text-lg leading-relaxed">
            חשוב לי להבין מי אתה, מה הביא אותך ומה אתה מצפה לקבל מהטיפול.
          </p>
        </div>

        {/* 3 Ruled Columns (No Card Boxes, No Top Gradient Bars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {steps.map((step) => (
            <article
              key={step.num}
              className="pt-5 border-t border-white/15 flex flex-col justify-between"
            >
              <div>
                <span className="font-mono tabular-nums text-[#A7AAB4] text-xs block mb-2.5">
                  {step.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-[#A7AAB4] leading-relaxed">{step.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Clean Status Row */}
        <div className="rounded-xl p-6 sm:p-8 border border-white/10 bg-[#111216] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5">
              היומן נפתח בקרוב. ההרשמה לזכאות לקביעת התורים הראשונים בעיצומה.
            </h3>
            <p className="text-[#A7AAB4] text-sm leading-relaxed">
              מי שמצטרף ל־Performance List מקבל קדימות בקביעת התורים הראשונים ומחיר ייחודי למצטרפים מוקדמים.
            </p>
          </div>
          <a
            href="#performance-list"
            className="m-btn bg-[#2F5E9E] hover:bg-[#264E86] text-white font-semibold px-7 py-3.5 rounded-lg text-sm shrink-0 whitespace-nowrap w-full md:w-auto text-center flex items-center justify-center min-h-[46px]"
          >
            הצטרפות ל־Performance List ←
          </a>
        </div>
      </div>
    </section>
  );
}
