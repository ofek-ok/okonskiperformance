import Image from "next/image";

export default function AboutOfek() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 lg:py-36 bg-[#F5F5F2] text-[#22272C] border-b border-[#A8B0B7]/30 scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Mobile Header */}
        <div className="lg:hidden text-right mb-8">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="font-mono text-xs text-[#49677F] uppercase tracking-wider font-semibold">
              מי אני
            </span>
          </div>
          <h2 id="about-heading" className="text-2xl sm:text-4xl font-bold text-[#22272C] leading-tight">
            נעים להכיר, <span className="text-[#49677F]">אני אופק אוקונסקי.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Studio Portrait Framed */}
          <div className="lg:col-span-5 relative order-first">
            <div className="relative w-full max-w-[320px] sm:max-w-[380px] mx-auto aspect-square rounded-sm overflow-hidden border border-[#A8B0B7]/40 shadow-sm bg-[#FFFFFF]">
              <Image
                src="/ofek-portrait-hd.jpg"
                alt="אופק אוקונסקי, מייסד Okonski Performance"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 380px, 33vw"
                priority={false}
              />
            </div>
            <p className="mt-3 text-center sm:text-right font-mono text-[11px] text-[#49677F] tracking-wide">
              אופק אוקונסקי — מייסד ומטפל
            </p>
          </div>

          {/* Founder Story Right-Aligned */}
          <div className="lg:col-span-7 text-right">
            
            {/* Desktop Header */}
            <div className="hidden lg:block mb-8">
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="font-mono text-xs text-[#49677F] uppercase tracking-wider font-semibold">
                  מי אני
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#22272C] leading-tight tracking-tight">
                נעים להכיר, <span className="text-[#49677F]">אני אופק אוקונסקי.</span>
              </h2>
            </div>

            {/* Dual Worlds Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 sm:p-6 rounded-sm border border-[#A8B0B7]/30 bg-[#FFFFFF]">
                <span className="font-mono text-xs text-[#49677F] uppercase tracking-wider block mb-1">
                  ספורט תחרותי
                </span>
                <span className="text-base font-bold text-[#22272C] block mb-1.5">ספורט תובעני</span>
                <p className="text-xs sm:text-sm text-[#22272C]/75 leading-relaxed">
                  15 שנות אומנויות לחימה, חגורה שחורה ומאמן בג&apos;יו־ג&apos;יטסו ברזילאי (BJJ).
                </p>
              </div>
              <div className="p-5 sm:p-6 rounded-sm border border-[#A8B0B7]/30 bg-[#FFFFFF]">
                <span className="font-mono text-xs text-[#49677F] uppercase tracking-wider block mb-1">
                  ניהול ותהליכים
                </span>
                <span className="text-base font-bold text-[#22272C] block mb-1.5">קריירה אינטנסיבית</span>
                <p className="text-xs sm:text-sm text-[#22272C]/75 leading-relaxed">
                  מנהל פרויקטים בכיר עם 7 שנות ניסיון בהובלת תהליכים טכנולוגיים מורכבים.
                </p>
              </div>
            </div>

            {/* Narrative Body */}
            <div className="space-y-4 text-[#22272C]/80 text-sm sm:text-base leading-relaxed">
              <p className="font-semibold text-[#22272C] text-base sm:text-lg">
                15 שנה על המזרן. 7 שנים מול דדליינים. אני מכיר מקרוב את שני העולמות שעבורם הקמתי את Okonski Performance.
              </p>

              {/* Editorial Pull-Quote Highlight */}
              <div className="my-6 pr-5 border-r-2 border-[#142333] space-y-2">
                <p className="font-bold text-[#22272C] text-base sm:text-lg">
                  מתוך החיבור הזה הקמתי את Okonski Performance.
                </p>
                <p className="text-[#22272C]/85 text-sm sm:text-base leading-relaxed">
                  המטרה שלי היא להציע טיפול גופני אישי שלא מסתכל רק על האזור שכואב או מפריע, אלא גם על האדם שמאחוריו: איך הוא מתאמן, איך נראית השגרה שלו, אילו עומסים הוא חווה ומה הוא רוצה להיות מסוגל לעשות.
                </p>
              </div>

              {/* Desktop full paragraphs */}
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

              {/* Mobile expandable story */}
              <details className="lg:hidden group pt-2">
                <summary className="list-none cursor-pointer inline-flex items-center gap-2 text-sm font-semibold text-[#142333] min-h-[44px] focus:outline-none">
                  <span className="group-open:hidden">קרא את הסיפור המלא ←</span>
                  <span className="hidden group-open:inline">הסתר סיפור מלא</span>
                </summary>
                <div className="mt-3 space-y-3.5 text-sm text-[#22272C]/80 leading-relaxed border-t border-[#A8B0B7]/30 pt-3">
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
