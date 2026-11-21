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
      className="py-16 sm:py-24 lg:py-28 bg-[#0B0B0F] border-b border-white/10 scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Split: Heading + Clean Un-captioned Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-16 sm:mb-20">
          <div className="lg:col-span-6 text-right">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              לא מטפלים בכתף. מטפלים בך.
            </h2>
            <p className="text-white text-base sm:text-lg leading-relaxed mb-3 font-medium">
              אין שני אנשים שמגיעים עם אותו עומס, אותה מגבלה או אותה מטרה.
            </p>
            <p className="text-[#A7AAB4] text-sm sm:text-base leading-relaxed">
              לכן, הטיפול ב־Okonski Performance אינו מבוסס על סדר פעולות זהה לכל לקוח. הוא מתחיל בהבנת המצב שלך ומותאם למה שעולה בתשאול ובהערכה.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="m-photo-frame relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-white/10 bg-[#111216]">
              <Image
                src="/method-treatment.jpg"
                alt="תהליך הטיפול האישי ב־Okonski Performance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>

        {/* First Session Workflow — 4 Ruled Columns (No Pill Badges) */}
        <div className="mb-14 sm:mb-16 text-right">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 pb-4 border-b border-white/10">
            המפגש הראשון
          </h3>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stages.map((stage) => (
              <li
                key={stage.num}
                className="pt-4 border-t border-white/15 text-right flex flex-col"
              >
                <span className="font-mono tabular-nums text-[#A7AAB4] text-xs mb-2">
                  {stage.num}
                </span>
                <h4 className="text-lg font-bold text-white mb-2">{stage.title}</h4>
                <p className="text-sm text-[#A7AAB4] leading-relaxed">{stage.body}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Two Plain Editorial Columns */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pt-8 border-t border-white/10 text-right">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">מה עשוי להשתלב במפגש?</h3>
            <p className="text-sm sm:text-base text-[#A7AAB4] leading-relaxed mb-3">
              בהתאם לצורך, המפגש יכול לכלול עבודה ידנית על רקמות רכות ושרירים, עבודה על טווחי תנועה, מתיחות ותרגילים מותאמים.
            </p>
            <p className="text-sm text-[#A7AAB4] leading-relaxed">
              לא כל אדם זקוק לאותן טכניקות, ולא כל מפגש יכלול את כל המרכיבים.
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3">ומה קורה לאחר המפגש הראשון?</h3>
              <p className="text-sm sm:text-base text-[#A7AAB4] leading-relaxed mb-3">
                מפגשי המשך יכולים לכלול טיפול גופני, תרגול, הנחיות לבית, התאמות עומס ומעקב אחר ההתקדמות.
              </p>
              <p className="text-sm text-[#A7AAB4] leading-relaxed">
                אפשר להמשיך במפגשים בודדים או לבחון מסלול טיפולי מתאים. ההמלצה נקבעת לפי הצורך — לא כל אדם זקוק לאותו מספר מפגשים.
              </p>
            </div>
            <div className="pt-4 mt-4">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-white hover:text-[#A7AAB4] text-sm font-semibold transition-colors group"
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
