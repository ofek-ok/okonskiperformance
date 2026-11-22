import Image from "next/image";

export default function AboutOfek() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#0E1116] border-b border-white/[0.08] scroll-mt-16"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Studio Portrait — Radius 12px (rounded-xl), 8% Hairline */}
          <div className="lg:col-span-5 order-first">
            <div className="m-photo-frame relative w-full max-w-[360px] aspect-[4/5] rounded-xl overflow-hidden border border-white/[0.08] bg-[#151A22]">
              <Image
                src="/ofek-portrait-hd.jpg"
                alt="אופק אוקונסקי, מייסד Okonski Performance"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 360px, 35vw"
                priority={false}
              />
            </div>
          </div>

          {/* Founder Story */}
          <div className="lg:col-span-7 text-right">
            <h2
              id="about-heading"
              className="text-2xl sm:text-4xl font-medium text-[#F4F6F9] leading-tight mb-6"
            >
              נעים להכיר, אני אופק אוקונסקי.
            </h2>

            {/* Two Ruled Columns (Spacing 24px = gap-6, py-6, mb-6) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 mb-6 border-y border-white/[0.08]">
              <div>
                <span className="text-sm font-medium text-[#F4F6F9] block mb-1">ספורט תובעני</span>
                <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">
                  15 שנות אומנויות לחימה, חגורה שחורה ומאמן בג&apos;יו־ג&apos;יטסו ברזילאי (BJJ).
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-[#F4F6F9] block mb-1">קריירה אינטנסיבית</span>
                <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">
                  מנהל פרויקטים בכיר עם 7 שנות ניסיון בהובלת תהליכים טכנולוגיים מורכבים.
                </p>
              </div>
            </div>

            {/* Narrative Body */}
            <div className="space-y-4 text-[#A7AAB4] text-sm sm:text-base leading-relaxed">
              <p className="font-medium text-[#F4F6F9] text-base sm:text-lg">
                15 שנה על המזרן. 7 שנים מול דדליינים. אני מכיר מקרוב את שני העולמות שעבורם הקמתי את Okonski Performance.
              </p>

              <p className="text-[#F4F6F9]/90">
                מתוך החיבור הזה הקמתי את Okonski Performance. המטרה שלי היא להציע טיפול גופני אישי שלא מסתכל רק על האזור שכואב או מפריע, אלא גם על האדם שמאחוריו: איך הוא מתאמן, איך נראית השגרה שלו, אילו עומסים הוא חווה ומה הוא רוצה להיות מסוגל לעשות.
              </p>

              <div className="hidden lg:block space-y-4">
                <p>
                  אני עוסק באמנויות לחימה כבר כ־15 שנים, חגורה שחורה ומאמן בג&apos;יו־ג&apos;יטסו ברזילאי. במקביל, אני מנהל פרויקטים בכיר עם כשבע שנות ניסיון בניהול פרויקטים טכנולוגיים, הובלת תהליכים ועבודה בסביבות מורכבות ותובעניות.
                </p>
                <p>
                  השילוב בין שני העולמות האלה לימד אותי עד כמה אנחנו דורשים מהגוף שלנו — באימונים, בעבודה ובחיי היומיום — ועד כמה חשוב לתת לו את תשומת הלב המתאימה.
                </p>
                <p>
                  את החשיבה התהליכית מעולם הניהול אני מביא גם לגישה שלי לטיפול: להבין את נקודת המוצא, להגדיר מטרה, לעבוד בצורה מסודרת ולבחון את ההתקדמות. מבחינתי, טיפול טוב צריך לשלב עבודה גופנית מקצועית, הסברים ברורים ויחס אישי.
                </p>
              </div>

              <details className="lg:hidden group pt-1">
                <summary className="list-none cursor-pointer inline-flex items-center gap-2 text-sm font-medium text-[#F4F6F9] min-h-[44px] focus:outline-none">
                  <span className="group-open:hidden">לסיפור המלא</span>
                  <span className="hidden group-open:inline">הסתר סיפור מלא</span>
                  <svg className="w-4 h-4 transition-transform duration-150 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-3 space-y-3 text-sm text-[#A7AAB4] leading-relaxed">
                  <p>
                    אני עוסק באמנויות לחימה כבר כ־15 שנים, חגורה שחורה ומאמן בג&apos;יו־ג&apos;יטסו ברזילאי. במקביל, אני מנהל פרויקטים בכיר עם כשבע שנות ניסיון בניהול פרויקטים טכנולוגיים, הובלת תהליכים ועבודה בסביבות מורכבות ותובעניות.
                  </p>
                  <p>
                    השילוב בין שני העולמות האלה לימד אותי עד כמה אנחנו דורשים מהגוף שלנו — באימונים, בעבודה ובחיי היומיום — ועד כמה חשוב לתת לו את תשומת הלב המתאימה.
                  </p>
                  <p>
                    את החשיבה התהליכית מעולם הניהול אני מביא גם לגישה שלי לטיפול: להבין את נקודת המוצא, להגדיר מטרה, לעבוד בצורה מסודרת ולבחון את ההתקדמות. מבחינתי, טיפול טוב צריך לשלב עבודה גופנית מקצועית, הסברים ברורים ויחס אישי.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
