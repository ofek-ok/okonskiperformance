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
      className="py-20 sm:py-28 lg:py-32 bg-[#142333] text-[#F5F5F2] border-b border-white/10 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-right">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="font-mono text-xs text-[#A8B0B7] uppercase tracking-wider font-semibold">
              הצעד הראשון
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F5F2] leading-tight tracking-tight mb-4">
            מתחילים בהיכרות.{" "}
            <span className="text-[#A8B0B7] font-normal">לא בקביעת טיפול אוטומטית.</span>
          </h2>
          <p className="text-[#A8B0B7] text-base sm:text-lg leading-relaxed">
            חשוב לי להבין מי אתה, מה הביא אותך ומה אתה מצפה לקבל מהטיפול.
          </p>
        </div>

        {/* 3 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 sm:mb-16">
          {steps.map((step) => (
            <article
              key={step.num}
              className="border border-white/10 bg-[#142333]/60 rounded-sm p-6 sm:p-8 flex flex-col justify-between hover:border-white/25 transition-colors"
            >
              <div>
                <span className="font-mono text-xs font-semibold text-[#A8B0B7] tracking-wider block mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#F5F5F2] mb-3">{step.title}</h3>
                <p className="text-sm text-[#A8B0B7] leading-relaxed">{step.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Status Callout */}
        <div className="rounded-sm p-7 sm:p-10 border border-white/15 bg-[#182a3d] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F5F5F2] mb-2 leading-snug">
              היומן נפתח בקרוב.{" "}
              <span className="text-[#A8B0B7] font-normal">ההרשמה לזכאות לקביעת התורים הראשונים בעיצומה.</span>
            </h3>
            <p className="text-[#A8B0B7] text-sm leading-relaxed">
              מי שמצטרף ל־Performance List מקבל <strong className="text-white font-semibold">קדימות בקביעת התורים הראשונים</strong> ו<strong className="text-white font-semibold">מחיר ייחודי</strong> למצטרפים מוקדמים.
            </p>
          </div>
          <a
            href="#performance-list"
            className="bg-[#F5F5F2] text-[#142333] hover:bg-white transition-colors px-7 py-3.5 rounded-sm text-sm font-semibold shrink-0 whitespace-nowrap w-full md:w-auto text-center flex items-center justify-center min-h-[46px]"
          >
            הצטרפות ל־Performance List ←
          </a>
        </div>

      </div>
    </section>
  );
}
