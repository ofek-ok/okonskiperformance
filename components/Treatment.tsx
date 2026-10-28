import Image from "next/image";

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
    <section
      id="treatment"
      className="py-16 sm:py-24 lg:py-32 bg-charcoalDark relative border-b border-white/[0.06] scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Top Split: Section Header + Clinical Atmosphere Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-20">
          <div className="lg:col-span-7 text-right">
            <div className="inline-flex items-center gap-3 mb-3.5">
              <span className="w-8 h-[2px] rounded-full bg-logoIce/70" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-medium text-silverOff tracking-wide">
                תהליך הטיפול
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 sm:mb-5">
              טיפול אישי שמתחיל{" "}
              <span className="text-silverOff">בהבנת הגוף שלך.</span>
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base lg:text-lg leading-relaxed mb-3 font-medium">
              אין שני אנשים שמגיעים עם אותו עומס, אותה מגבלה או אותה מטרה.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm lg:text-base leading-relaxed">
              לכן, הטיפול ב־Okonski Performance אינו מבוסס על סדר פעולות זהה לכל לקוח. הוא מתחיל בהבנת המצב שלך ומותאם למה שעולה בתשאול ובהערכה.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-white/[0.08] shadow-[0_14px_40px_-14px_rgba(0,0,0,0.6)] bg-neutral-900">
              <Image
                src="/method-treatment.jpg"
                alt="תהליך הטיפול האישי ב־Okonski Performance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoalDark/75 via-transparent to-transparent" />
              <div className="absolute bottom-3.5 right-3.5 left-3.5 sm:bottom-4 sm:right-4 sm:left-4 px-4 py-2.5 rounded-2xl bg-[#0A0B0D]/80 backdrop-blur-md border border-white/[0.08] flex items-center justify-between text-xs text-silverOff">
                <span className="font-semibold text-white">מפגש ראשון מקיף</span>
                <span className="text-neutral-400">60 דקות • אבחון וטיפול</span>
              </div>
            </div>
          </div>
        </div>

        {/* First Session Workflow — 4 Linear Steps */}
        <div className="mb-12 sm:mb-16 text-right">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-white/[0.07]">
            <h3 className="text-lg sm:text-2xl font-black text-white">
              המפגש הראשון
            </h3>
            <span className="text-xs text-neutral-400 font-mono">מבנה עבודה מוגדר</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {stages.map((stage) => (
              <div
                key={stage.num}
                className="p-6 rounded-3xl border border-white/[0.08] hover:border-white/[0.15] bg-neutral-900/35 transition-colors text-right flex flex-col"
              >
                <span className="font-mono text-logoIce/80 text-xs sm:text-sm font-semibold tracking-wider block mb-2.5">
                  {stage.num}
                </span>
                <h4 className="text-base sm:text-lg font-bold text-white mb-2">{stage.title}</h4>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{stage.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Cards */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-8 text-right">
          <div className="border border-white/[0.08] bg-neutral-900/35 rounded-3xl p-6 sm:p-8">
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

          <div className="border border-white/[0.08] bg-neutral-900/35 rounded-3xl p-6 sm:p-8">
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
            className="inline-flex items-center gap-2 text-silverOff hover:text-white text-sm font-medium transition-colors min-h-[44px] group"
          >
            <span>איך מתחילים?</span>
            <span className="transition-transform duration-200 group-hover:-translate-x-1 text-logoIce">←</span>
          </a>
        </div>

      </div>
    </section>
  );
}
