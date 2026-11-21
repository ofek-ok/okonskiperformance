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
      className="py-16 sm:py-24 lg:py-32 bg-[#0B0B0F] relative border-b border-white/[0.08] scroll-mt-20 sm:scroll-mt-24"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Top Split: Section Header + Clinical Atmosphere Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-14 sm:mb-20">
          <div className="lg:col-span-7 text-right">
            <div className="inline-flex items-center gap-3 mb-3.5">
              <span className="w-8 h-[3px] rounded-full bg-[#2F5E9E]" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-semibold text-[#A7AAB4] tracking-wide">
                תהליך הטיפול
              </span>
            </div>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 sm:mb-5">
              לא מטפלים בכתף.{" "}
              <span className="text-[#2F5E9E]">מטפלים בך.</span>
            </h2>
            <p className="text-white text-sm sm:text-base lg:text-lg leading-relaxed mb-3 font-semibold">
              אין שני אנשים שמגיעים עם אותו עומס, אותה מגבלה או אותה מטרה.
            </p>
            <p className="text-[#A7AAB4] text-xs sm:text-sm lg:text-base leading-relaxed">
              לכן, הטיפול ב־Okonski Performance אינו מבוסס על סדר פעולות זהה לכל לקוח. הוא מתחיל בהבנת המצב שלך ומותאם למה שעולה בתשאול ובהערכה.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="m-photo-frame relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-3xl overflow-hidden border border-[#2F5E9E]/35 shadow-[0_18px_48px_-12px_rgba(47,94,158,0.25)] bg-[#11131A]">
              <Image
                src="/method-treatment.jpg"
                alt="תהליך הטיפול האישי ב־Okonski Performance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0F]/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 right-3 left-3 sm:bottom-4 sm:right-4 sm:left-4 px-3.5 sm:px-4 py-2.5 rounded-2xl bg-[#0B0B0F]/90 backdrop-blur-md border border-[#2F5E9E]/40 flex flex-wrap items-center justify-between gap-1 text-xs">
                <span className="font-bold text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#2F5E9E]" aria-hidden="true" />
                  מפגש ראשון מקיף
                </span>
                <span className="text-[#A7AAB4] text-[11.5px] sm:text-xs">אבחון וטיפול מותאם אישית</span>
              </div>
            </div>
          </div>
        </div>

        {/* First Session Workflow — 4 Linear Steps */}
        <div className="mb-12 sm:mb-16 text-right">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-white/[0.08]">
            <h3 className="text-lg sm:text-2xl font-black text-white">
              המפגש הראשון
            </h3>
            <span className="text-xs text-[#2F5E9E] font-mono font-semibold bg-[#2F5E9E]/15 border border-[#2F5E9E]/30 px-3 py-1 rounded-full">
              01 — 04 · מבנה עבודה מוגדר
            </span>
          </div>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5">
            {stages.map((stage) => (
              <li
                key={stage.num}
                className="m-card relative p-5 sm:p-6 rounded-3xl border border-[#2F5E9E]/25 bg-[#11131A] text-right flex flex-col justify-between"
              >
                <div>
                  <span className="inline-flex items-center justify-center font-mono tabular-nums text-[#2F5E9E] bg-[#2F5E9E]/15 border border-[#2F5E9E]/35 text-xs sm:text-sm font-bold px-2.5 py-1 rounded-lg mb-3">
                    {stage.num}
                  </span>
                  <h4 className="text-base sm:text-lg font-bold text-white mb-2">{stage.title}</h4>
                  <p className="text-[13.5px] sm:text-sm text-[#A7AAB4] leading-relaxed">{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Detail Cards */}
        <div className="grid md:grid-cols-2 gap-5 sm:gap-8 text-right">
          <div className="m-card border border-[#2F5E9E]/20 bg-[#11131A] rounded-3xl p-5 sm:p-8">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">מה עשוי להשתלב במפגש?</h3>
            <p className="text-[13.5px] sm:text-sm text-white/90 leading-relaxed mb-3 sm:mb-4">
              בהתאם לצורך, המפגש יכול לכלול עבודה ידנית על רקמות רכות ושרירים, עבודה על טווחי תנועה, מתיחות ותרגילים מותאמים.
            </p>
            <p className="text-[13px] sm:text-xs text-[#A7AAB4] leading-relaxed mb-3 sm:mb-4">
              לדוגמה, אם אתה מגיע עם נוקשות בכתף שמפריעה לך באימון, נוכל לבחון את התנועה, לעבוד על האזורים הרלוונטיים ולשלב תרגול שמתאים למצבך.
            </p>
            <p className="text-xs text-[#A7AAB4]/70 italic">
              * לא כל אדם זקוק לאותן טכניקות, ולא כל מפגש יכלול את כל המרכיבים.
            </p>
          </div>

          <div className="m-card border border-[#2F5E9E]/20 bg-[#11131A] rounded-3xl p-5 sm:p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">ומה קורה לאחר המפגש הראשון?</h3>
              <p className="text-[13.5px] sm:text-sm text-white/90 leading-relaxed mb-3 sm:mb-4">
                מפגשי המשך יכולים לכלול טיפול גופני, תרגול, הנחיות לבית, התאמות עומס ומעקב אחר ההתקדמות.
              </p>
              <p className="text-[13px] sm:text-xs text-[#A7AAB4] leading-relaxed">
                אפשר להמשיך במפגשים בודדים או לבחון מסלול טיפולי מתאים. ההמלצה נקבעת לפי הצורך — לא כל אדם זקוק לאותו מספר מפגשים.
              </p>
            </div>
            <div className="pt-5 mt-5 border-t border-white/[0.08]">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-white hover:text-[#2F5E9E] text-sm font-semibold transition-colors group"
              >
                <span>איך מתחילים? קרא על השלבים</span>
                <span className="transition-transform duration-150 group-hover:-translate-x-1 text-[#2F5E9E]">←</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
