import Image from "next/image";

const stages = [
  {
    num: "01",
    title: "מקשיבים",
    body: "נבין מה הביא אותך לטיפול, מה מפריע לך, מהי שגרת האימונים או העבודה שלך ומה אתה רוצה להשיג.",
  },
  {
    num: "02",
    title: "בודקים",
    body: "בהתאם לצורך, נבחן תנועה, טווחי תנועה, מגבלות ואזורים רלוונטיים למטרת הטיפול.",
  },
  {
    num: "03",
    title: "מטפלים",
    body: "נבצע טיפול גופני המותאם לממצאים, למצב שלך ולמטרת המפגש.",
  },
  {
    num: "04",
    title: "מסבירים",
    body: "בסיום נסביר מה עלה במפגש, מה אפשר לעשות באופן עצמאי ומה עשוי להתאים להמשך, במידת הצורך.",
  },
];

export default function Treatment() {
  return (
    <section
      id="treatment"
      className="py-20 sm:py-28 lg:py-32 bg-[#F5F5F2] text-[#22272C] border-b border-[#A8B0B7]/30 scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        
        {/* Top Split: Section Header + Editorial Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-7 text-right">
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-[#49677F] uppercase tracking-wider font-semibold">
                תהליך הטיפול
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22272C] leading-tight tracking-tight mb-5">
              לא מטפלים בכתף.{" "}
              <span className="text-[#49677F]">מטפלים בך.</span>
            </h2>
            <p className="text-[#22272C]/85 text-base sm:text-lg leading-relaxed mb-3 font-medium">
              אין שני אנשים שמגיעים עם אותו עומס, אותה מגבלה או אותה מטרה.
            </p>
            <p className="text-[#22272C]/70 text-sm sm:text-base leading-relaxed">
              לכן, הטיפול ב־Okonski Performance אינו מבוסס על סדר פעולות זהה לכל לקוח. הוא מתחיל בהבנת המצב שלך ומותאם למה שעולה בתשאול ובהערכה.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="relative w-full aspect-[4/3] rounded-sm overflow-hidden border border-[#A8B0B7]/40 bg-[#FFFFFF] shadow-sm">
              <Image
                src="/method-treatment.jpg"
                alt="תהליך הטיפול האישי ב־Okonski Performance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
            </div>
            <p className="mt-2 text-right font-mono text-[11px] text-[#49677F] tracking-wide">
              מפגש ראשון מקיף — אבחון והערכת תנועה
            </p>
          </div>
        </div>

        {/* First Session Workflow — 4 Linear Steps */}
        <div className="mb-14 sm:mb-20 text-right">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-6 pb-4 border-b border-[#A8B0B7]/30">
            <div>
              <span className="font-mono text-xs text-[#49677F] uppercase tracking-wider block mb-1">
                מתודולוגיה
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#22272C]">
                המפגש הראשון
              </h3>
            </div>
            <span className="text-xs text-[#22272C]/60 font-mono">מבנה עבודה מוגדר</span>
          </div>

          {/* Tabular linear steps with hairline grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-b sm:border border-[#A8B0B7]/30 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[#A8B0B7]/30 bg-[#FFFFFF] rounded-sm">
            {stages.map((stage) => (
              <div
                key={stage.num}
                className="p-6 sm:p-7 text-right flex flex-col justify-between hover:bg-[#F5F5F2]/40 transition-colors"
              >
                <div>
                  <span className="font-mono text-xs font-semibold text-[#49677F] tracking-wider block mb-3">
                    {stage.num}
                  </span>
                  <h4 className="text-lg font-bold text-[#22272C] mb-2">{stage.title}</h4>
                  <p className="text-sm text-[#22272C]/75 leading-relaxed">{stage.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Slabs */}
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-right">
          <div className="border border-[#A8B0B7]/30 bg-[#FFFFFF] rounded-sm p-6 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-[#22272C] mb-3">מה עשוי להשתלב במפגש?</h3>
            <p className="text-sm text-[#22272C]/80 leading-relaxed mb-3">
              בהתאם לצורך, המפגש יכול לכלול עבודה ידנית על רקמות רכות ושרירים, עבודה על טווחי תנועה, מתיחות ותרגילים מותאמים.
            </p>
            <p className="text-xs sm:text-sm text-[#22272C]/65 leading-relaxed mb-4">
              לדוגמה, אם אתה מגיע עם נוקשות בכתף שמפריעה לך באימון, נוכל לבחון את התנועה, לעבוד על האזורים הרלוונטיים ולשלב תרגול שמתאים למצבך.
            </p>
            <p className="text-xs text-[#22272C]/50 italic border-t border-[#A8B0B7]/20 pt-3">
              * לא כל אדם זקוק לאותן טכניקות, ולא כל מפגש יכלול את כל המרכיבים.
            </p>
          </div>

          <div className="border border-[#A8B0B7]/30 bg-[#FFFFFF] rounded-sm p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#22272C] mb-3">ומה קורה לאחר המפגש הראשון?</h3>
              <p className="text-sm text-[#22272C]/80 leading-relaxed mb-3">
                מפגשי המשך יכולים לכלול טיפול גופני, תרגול, הנחיות לבית, התאמות עומס ומעקב אחר ההתקדמות.
              </p>
              <p className="text-xs sm:text-sm text-[#22272C]/65 leading-relaxed">
                אפשר להמשיך במפגשים בודדים או לבחון מסלול טיפולי מתאים. ההמלצה נקבעת לפי הצורך — לא כל אדם זקוק לאותו מספר מפגשים.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-[#A8B0B7]/20">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-[#142333] hover:text-[#49677F] text-sm font-semibold transition-colors group"
              >
                <span>איך מתחילים? קרא על השלבים</span>
                <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
