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

/**
 * THE SINGLE BRIGHT PRODUCT MOMENT ON THE PAGE:
 * High-contrast light surface (#F4F6F9 / #FFFFFF) showcasing the actual hands-on clinical assessment
 * and 4-stage session structure, breaking the dark page rhythm without decorative icon tiles.
 */
export default function Treatment() {
  return (
    <section
      id="treatment"
      className="py-16 sm:py-24 bg-[#F4F6F9] text-[#0E1116] border-b border-[#0E1116]/[0.08] scroll-mt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Split: Heading + Actual Clinical Treatment Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16">
          <div className="lg:col-span-6 text-right">
            <h2 className="text-2xl sm:text-4xl font-medium text-[#0E1116] leading-tight mb-4">
              איך עובד תהליך הטיפול
            </h2>
            <p className="text-[#0E1116] text-base sm:text-lg leading-relaxed mb-3 font-medium">
              אין שני אנשים שמגיעים עם אותו עומס, אותה מגבלה או אותה מטרה.
            </p>
            <p className="text-[#4B5262] text-sm sm:text-base leading-relaxed">
              לכן, הטיפול ב־Okonski Performance אינו מבוסס על סדר פעולות זהה לכל לקוח. הוא מתחיל בהבנת המצב שלך ומותאם למה שעולה בתשאול ובהערכה.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="m-photo-frame relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#0E1116]/[0.08] bg-white">
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

        {/* First Session Workflow — Unified Architectural Table on Crisp White (No Icon/Number Tiles) */}
        <div className="mb-12 text-right">
          <h3 className="text-xl sm:text-2xl font-medium text-[#0E1116] mb-6">
            המפגש הראשון
          </h3>

          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-xl bg-white border border-[#0E1116]/[0.08] divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[#0E1116]/[0.08] overflow-hidden">
            {stages.map((stage) => (
              <li
                key={stage.num}
                className="p-6 text-right flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono tabular-nums text-xs text-[#2F5E9E] block mb-2">
                    {stage.num}
                  </span>
                  <h4 className="text-lg font-medium text-[#0E1116] mb-2">{stage.title}</h4>
                  <p className="text-sm text-[#4B5262] leading-relaxed">{stage.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Two Plain Editorial Columns */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pt-8 border-t border-[#0E1116]/[0.08] text-right">
          <div>
            <h3 className="text-lg sm:text-xl font-medium text-[#0E1116] mb-3">מה עשוי להשתלב במפגש?</h3>
            <p className="text-sm sm:text-base text-[#4B5262] leading-relaxed mb-3">
              בהתאם לצורך, המפגש יכול לכלול עבודה ידנית על רקמות רכות ושרירים, עבודה על טווחי תנועה, מתיחות ותרגילים מותאמים.
            </p>
            <p className="text-sm text-[#4B5262] leading-relaxed">
              לא כל אדם זקוק לאותן טכניקות, ולא כל מפגש יכלול את כל המרכיבים.
            </p>
          </div>

          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-lg sm:text-xl font-medium text-[#0E1116] mb-3">ומה קורה לאחר המפגש הראשון?</h3>
              <p className="text-sm sm:text-base text-[#4B5262] leading-relaxed mb-3">
                מפגשי המשך יכולים לכלול טיפול גופני, תרגול, הנחיות לבית, התאמות עומס ומעקב אחר ההתקדמות.
              </p>
              <p className="text-sm text-[#4B5262] leading-relaxed">
                אפשר להמשיך במפגשים בודדים או לבחון מסלול טיפולי מתאים. ההמלצה נקבעת לפי הצורך — לא כל אדם זקוק לאותו מספר מפגשים.
              </p>
            </div>
            <div className="pt-4 mt-4">
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-[#0E1116] hover:text-[#2F5E9E] text-sm font-medium"
              >
                <span>איך מתחילים? קרא על השלבים</span>
                <span className="text-[#2F5E9E]">←</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
