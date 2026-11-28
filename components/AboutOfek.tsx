import Image from "next/image";

export default function AboutOfek() {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#F8F9FB] text-[#0E1116] border-b border-[#0E1116]/[0.08] scroll-mt-16"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Studio Portrait — Radius 12px (rounded-xl) */}
          <div className="lg:col-span-5 order-first">
            <div className="m-photo-frame relative w-full max-w-[360px] rounded-xl overflow-hidden border border-[#0E1116]/[0.08] bg-white shadow-[0_2px_12px_rgba(14,17,22,0.04)]">
              <Image
                src="/ofek-portrait-hd.jpg"
                alt="אופק אוקונסקי, מייסד Okonski Performance"
                width={1024}
                height={1024}
                className="w-full h-auto aspect-[4/5] object-cover object-center block"
                sizes="(max-width: 640px) 340px, 360px"
                priority
              />
            </div>
          </div>

          {/* SECTION 5: ABOUT (מי עומד מאחורי הטיפול) */}
          <div className="lg:col-span-7 text-right">
            <h2
              id="about-heading"
              className="text-2xl sm:text-4xl font-semibold text-[#0E1116] leading-tight mb-6"
            >
              להבין את הגוף של ספורטאי. להכיר את העומס של שגרה תובענית.
            </h2>

            {/* Two Ruled Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 mb-6 border-y border-[#0E1116]/[0.08]">
              <div>
                <span className="text-sm font-semibold text-[#0E1116] block mb-1">15 שנה על המזרן</span>
                <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed">
                  מאמן וחגורה שחורה בג&apos;יו־ג&apos;יטסו ברזילאי (BJJ). היכרות ממקור ראשון עם פציעות, עומסי שיא וגבולות גוף.
                </p>
              </div>
              <div>
                <span className="text-sm font-semibold text-[#0E1116] block mb-1">7 שנים בניהול פרויקטים</span>
                <p className="text-xs sm:text-sm text-[#4B5262] leading-relaxed">
                  ניסיון כמנהל פרויקטים טכנולוגיים בכיר: שעות ארוכות מול מחשב, פגישות ועבודה תחת סטרס גבוה.
                </p>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-4 text-[#4B5262] text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-[#0E1116]">
                נעים להכיר, אני אופק אוקונסקי.
              </p>

              <p>
                מצד אחד, 15 שנה על המזרן, מאמן וחגורה שחורה בג&apos;יו־ג&apos;יטסו ברזילאי (BJJ). אני מכיר פציעות, עומסי שיא וגבולות גוף ממקור ראשון. מצד שני, 7 שנים כמנהל פרויקטים טכנולוגיים בכיר, שעות אינסופיות מול מחשב, פגישות ועומס מנטלי גבוה.
              </p>

              <p className="text-[#0E1116]">
                החיבור הזה הוליד את Okonski Performance: מקום שמבין את הגוף שלך, לא מבזבז זמן על פתרונות שטחיים, ויודע בדיוק איך לבנות תוכנית טיפול ושיקום שמשתלבת בחיים האמיתיים שלך.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
