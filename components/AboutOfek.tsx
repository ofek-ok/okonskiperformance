import Image from "next/image";

export default function AboutOfek() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 lg:py-36 bg-[#0B0B0F] relative border-b border-white/[0.08] scroll-mt-20 sm:scroll-mt-24"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Mobile Header */}
        <div className="lg:hidden text-right mb-8">
          <div className="inline-flex items-center gap-3 mb-3">
            <span className="w-8 h-[3px] rounded-full bg-[#2F5E9E]" aria-hidden="true" />
            <span className="text-xs font-semibold text-[#A7AAB4] tracking-wide">
              מי אני
            </span>
          </div>
          <h2 id="about-heading" className="text-2xl sm:text-4xl font-black text-white leading-tight">
            נעים להכיר, <span className="text-[#2F5E9E]">אני אופק אוקונסקי.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Professional Studio Portrait */}
          <div className="lg:col-span-5 relative order-first">
            <div className="m-photo-frame relative w-full max-w-[300px] sm:max-w-[360px] mx-auto aspect-square rounded-3xl overflow-hidden border border-[#2F5E9E]/40 shadow-[0_20px_54px_-14px_rgba(47,94,158,0.3)] bg-[#11131A]">
              <Image
                src="/ofek-portrait-hd.jpg"
                alt="אופק אוקונסקי, מייסד Okonski Performance"
                fill
                className="object-cover object-center"
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 360px, 33vw"
                priority={false}
              />
            </div>
          </div>

          {/* Founder Story Right-Aligned */}
          <div className="lg:col-span-7 text-right">
            {/* Desktop Header */}
            <div className="hidden lg:block mb-8">
              <div className="inline-flex items-center gap-3 mb-3.5">
                <span className="w-8 h-[3px] rounded-full bg-[#2F5E9E]" aria-hidden="true" />
                <span className="text-sm font-semibold text-[#A7AAB4] tracking-wide">
                  מי אני
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                נעים להכיר, <span className="text-[#2F5E9E]">אני אופק אוקונסקי.</span>
              </h2>
            </div>

            {/* Dual Worlds Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-7 sm:mb-8">
              <div className="m-card relative overflow-hidden p-5 rounded-2xl border border-[#2F5E9E]/30 bg-[#11131A]">
                <span className="absolute top-0 right-0 left-0 h-1 bg-[#2F5E9E]" aria-hidden="true" />
                <span className="text-sm font-bold text-white block mb-1.5">ספורט תובעני</span>
                <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">
                  15 שנות אומנויות לחימה, חגורה שחורה ומאמן בג&apos;יו־ג&apos;יטסו ברזילאי (BJJ).
                </p>
              </div>
              <div className="m-card relative overflow-hidden p-5 rounded-2xl border border-[#2F5E9E]/30 bg-[#11131A]">
                <span className="absolute top-0 right-0 left-0 h-1 bg-[#2F5E9E]" aria-hidden="true" />
                <span className="text-sm font-bold text-white block mb-1.5">קריירה אינטנסיבית</span>
                <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">
                  מנהל פרויקטים בכיר עם 7 שנות ניסיון בהובלת תהליכים טכנולוגיים מורכבים.
                </p>
              </div>
            </div>

            {/* Narrative Body */}
            <div className="space-y-3.5 sm:space-y-4 text-[#A7AAB4] text-sm sm:text-base lg:text-lg leading-relaxed">
              <p className="font-bold text-white">
                15 שנה על המזרן. 7 שנים מול דדליינים. אני מכיר מקרוב את שני העולמות שעבורם הקמתי את Okonski Performance.
              </p>

              {/* Editorial Pull-Quote Highlight */}
              <div className="my-5 p-5 rounded-2xl bg-[#11131A] border border-white/[0.06] border-r-4 border-r-[#2F5E9E] space-y-2">
                <p className="font-bold text-white">
                  מתוך החיבור הזה הקמתי את Okonski Performance.
                </p>
                <p className="text-white/90 text-sm sm:text-base">
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
              <details className="lg:hidden group pt-1">
                <summary className="list-none cursor-pointer inline-flex items-center gap-2 text-[13.5px] font-semibold text-[#2F5E9E] min-h-[44px] focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2F5E9E] rounded">
                  <span className="group-open:hidden">לסיפור המלא</span>
                  <span className="hidden group-open:inline">הסתר סיפור מלא</span>
                  <svg className="w-3.5 h-3.5 transition-transform duration-200 group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-3 space-y-3.5 text-sm text-[#A7AAB4] leading-relaxed">
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
