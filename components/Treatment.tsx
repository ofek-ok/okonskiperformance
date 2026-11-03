import Image from "next/image";

const stages = [
  {
    num: "01",
    title: "מקשיבים",
    body: "מבינים מה הביא אותך לטיפול, מה מפריע לך, מהי שגרת האימונים או העבודה שלך ומה אתה רוצה להשיג.",
  },
  {
    num: "02",
    title: "בודקים",
    body: "בוחנים תנועה, טווחי תנועה, מגבלות ואזורים רלוונטיים למטרת הטיפול.",
  },
  {
    num: "03",
    title: "מטפלים",
    body: "מבצעים טיפול גופני המותאם לממצאים, למצב שלך ולמטרת המפגש.",
  },
  {
    num: "04",
    title: "מסבירים",
    body: "מסכמים מה עלה במפגש, מה אפשר לעשות באופן עצמאי ומה עשוי להתאים להמשך.",
  },
];

export default function Treatment() {
  return (
    <section
      id="treatment"
      className="py-20 sm:py-28 lg:py-32 bg-[#F5F5F2] text-[#0A0B0D] border-b border-[#0A0B0D]/10 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Top Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-16 sm:mb-24">
          <div className="lg:col-span-6 text-right">
            <span className="block text-xs font-semibold tracking-[0.2em] uppercase text-[#3E6FA8] mb-4">
              תהליך הטיפול
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-[#0A0B0D] mb-6">
              לא מטפלים בכתף.{" "}
              <span className="text-[#3E6FA8]">מטפלים בך.</span>
            </h2>
            <p className="text-[#0A0B0D] text-base sm:text-lg font-medium leading-relaxed mb-4">
              אין שני אנשים שמגיעים עם אותו עומס, אותה מגבלה או אותה מטרה.
            </p>
            <p className="text-[#1E2229]/80 text-base leading-relaxed">
              הטיפול ב־Okonski Performance אינו מבוסס על פרוטוקול קבוע מראש. הוא מתחיל בהבנת המצב שלך ומותאם למה שעולה בתשאול ובהערכה.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] overflow-hidden border border-[#0A0B0D]/15 bg-[#FFFFFF]">
              <Image
                src="/method-treatment.jpg"
                alt="תהליך הטיפול האישי ב־Okonski Performance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="mt-2.5 text-right font-mono text-xs text-[#1E2229]/65">
              אבחון והערכת תנועה אישית
            </p>
          </div>
        </div>

        {/* 4 Linear Architectural Steps */}
        <div className="text-right mb-14 sm:mb-16">
          <div className="flex items-end justify-between pb-4 mb-8 border-b border-[#0A0B0D]/15">
            <h3 className="text-2xl sm:text-3xl font-bold text-[#0A0B0D]">המפגש הראשון</h3>
            <span className="font-mono text-xs text-[#1E2229]/60">01 — 04</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-[#0A0B0D]/15 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[#0A0B0D]/15 bg-[#FFFFFF]">
            {stages.map((s) => (
              <div key={s.num} className="p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <span className="font-mono text-xs font-semibold text-[#3E6FA8] tracking-wider block mb-3">
                    {s.num}
                  </span>
                  <h4 className="text-xl font-bold text-[#0A0B0D] mb-2.5">{s.title}</h4>
                  <p className="text-sm sm:text-base text-[#1E2229]/80 leading-relaxed">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Editorial Two-Column Notes */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 pt-8 border-t border-[#0A0B0D]/15 text-right">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0A0B0D] mb-2.5">מה עשוי להשתלב במפגש?</h3>
            <p className="text-sm sm:text-base text-[#1E2229]/80 leading-relaxed">
              בהתאם לצורך, המפגש יכול לכלול עבודה ידנית על רקמות רכות ושרירים, שיפור טווחי תנועה ותרגילים מותאמים. לא כל אדם זקוק לאותן טכניקות, ולא כל מפגש יכלול את כל המרכיבים.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0A0B0D] mb-2.5">ומה קורה לאחר המפגש הראשון?</h3>
            <p className="text-sm sm:text-base text-[#1E2229]/80 leading-relaxed">
              אפשר להמשיך במפגשים בודדים או במסגרת תהליכית הכוללת טיפול גופני, תרגול, התאמות עומס ומעקב. ההמלצה נקבעת לפי הצורך בפועל.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
