const stages = [
  {
    num: "01.",
    title: "היכרות ותשאול",
    body: "נבין מה הביא אותך לטיפול, מה מפריע לך, מהי שגרת האימונים או העבודה שלך ומה אתה רוצה להשיג.",
  },
  {
    num: "02.",
    title: "הערכה גופנית",
    body: "בהתאם לצורך, נבחן תנועה, טווחי תנועה, מגבלות ואזורים רלוונטיים למטרת הטיפול.",
  },
  {
    num: "03.",
    title: "טיפול ראשון",
    body: "נבצע טיפול גופני המותאם לממצאים, למצב שלך ולמטרת המפגש.",
  },
  {
    num: "04.",
    title: "סיכום והמלצה",
    body: "בסיום נסביר מה עלה במפגש, מה אפשר לעשות באופן עצמאי ומה עשוי להתאים להמשך, במידת הצורך.",
  },
];

export default function Treatment() {
  return (
    <section id="treatment" className="py-16 sm:py-24 lg:py-32 bg-charcoalDark relative border-b border-neutral-800/60 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 text-right">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 sm:mb-5">
            טיפול אישי שמתחיל בהבנת הגוף שלך.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed mb-3">
            אין שני אנשים שמגיעים עם אותו עומס, אותה מגבלה או אותה מטרה.
          </p>
          <p className="text-neutral-300 text-xs sm:text-sm lg:text-base leading-relaxed">
            לכן, הטיפול ב־Okonski Performance אינו מבוסס על סדר פעולות זהה לכל לקוח. הוא מתחיל בהבנת המצב שלך ומותאם למה שעולה בתשאול ובהערכה.
          </p>
        </div>

        {/* First Session Workflow — 4 Linear Steps */}
        <div className="mb-12 sm:mb-16 text-right">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-neutral-800/60">
            <h3 className="text-lg sm:text-2xl font-black text-white">
              המפגש הראשון
            </h3>
            <span className="text-xs text-neutral-500 font-mono">מבנה עבודה מוגדר</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
            {stages.map((stage) => (
              <div key={stage.num} className="p-5 sm:p-6 rounded-xl border border-neutral-800/40 bg-neutral-900/20 text-right">
                <span className="font-mono text-neutral-500 text-sm tracking-wider block mb-2">{stage.num}</span>
                <h4 className="text-base sm:text-lg font-medium text-white mb-2">{stage.title}</h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{stage.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Cards */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-8 text-right">
          <div className="border border-neutral-800/40 bg-neutral-900/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">מה עשוי להשתלב במפגש?</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-3 sm:mb-4">
              בהתאם לצורך, המפגש יכול לכלול עבודה ידנית על רקמות רכות ושרירים, עבודה על טווחי תנועה, מתיחות ותרגילים מותאמים.
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed mb-3 sm:mb-4">
              לדוגמה, אם אתה מגיע עם נוקשות בכתף שמפריעה לך באימון, נוכל לבחון את התנועה, לעבוד על האזורים הרלוונטיים ולשלב תרגול שמתאים למצבך.
            </p>
            <p className="text-[11px] sm:text-xs text-neutral-500 italic">
              * לא כל אדם זקוק לאותן טכניקות, ולא כל מפגש יכלול את כל המרכיבים.
            </p>
          </div>

          <div className="border border-neutral-800/40 bg-neutral-900/20 rounded-2xl p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">ומה קורה לאחר המפגש הראשון?</h3>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-3 sm:mb-4">
              מפגשי המשך נמשכים 45 דקות ויכולים לכלול טיפול גופני, תרגול, הנחיות לבית, התאמות עומס ומעקב אחר ההתקדמות.
            </p>
            <p className="text-xs text-neutral-400 leading-relaxed">
              אפשר להמשיך במפגשים בודדים או לבחון מסלול טיפולי מתאים. ההמלצה נקבעת לפי הצורך — לא כל אדם זקוק לאותו מספר מפגשים.
            </p>
          </div>
        </div>

        <div className="mt-10 sm:mt-12 text-right">
          <a
            href="#how-it-works"
            className="inline-flex items-center gap-2 text-neutral-300 hover:text-white text-sm font-medium transition-colors min-h-[44px]"
          >
            <span>איך מתחילים?</span>
            <svg className="w-4 h-4 rtl:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
