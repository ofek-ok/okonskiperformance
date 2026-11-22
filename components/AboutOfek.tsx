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
            <div className="m-photo-frame relative w-full max-w-[360px] rounded-xl overflow-hidden border border-white/[0.08] bg-[#151A22]">
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

          {/* SECTION 5: ABOUT (השילוב הייחודי של אופק אוקונסקי) */}
          <div className="lg:col-span-7 text-right">
            <h2
              id="about-heading"
              className="text-2xl sm:text-4xl font-medium text-[#F4F6F9] leading-tight mb-6"
            >
              להבין את הגוף של ספורטאי. להכיר את הלחץ של הייטקיסט.
            </h2>

            {/* Two Ruled Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6 mb-6 border-y border-white/[0.08]">
              <div>
                <span className="text-sm font-medium text-[#F4F6F9] block mb-1">15 שנה על המזרן</span>
                <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">
                  מאמן וחגורה שחורה בג&apos;יו־ג&apos;יטסו ברזילאי (BJJ). היכרות ממקור ראשון עם פציעות, עומסי שיא וגבולות גוף.
                </p>
              </div>
              <div>
                <span className="text-sm font-medium text-[#F4F6F9] block mb-1">7 שנים בהייטק</span>
                <p className="text-xs sm:text-sm text-[#A7AAB4] leading-relaxed">
                  מנהל פרויקטים טכנולוגיים בכיר — שעות ארוכות מול מחשב, פגישות וניהול תחת סטרס גבוה.
                </p>
              </div>
            </div>

            {/* Bio Text */}
            <div className="space-y-4 text-[#A7AAB4] text-base sm:text-lg leading-relaxed">
              <p className="font-medium text-[#F4F6F9]">
                נעים להכיר, אני אופק אוקונסקי.
              </p>

              <p>
                מצד אחד – 15 שנה על המזרן, מאמן וחגורה שחורה בג&apos;יו־ג&apos;יטסו ברזילאי (BJJ). אני מכיר פציעות, עומסי שיא וגבולות גוף ממקור ראשון. מצד שני – 7 שנים כמנהל פרויקטים טכנולוגיים בכיר, שעות אינסופיות מול מחשב, פגישות וניהול תחת סטרס גבוה.
              </p>

              <p className="text-[#F4F6F9]/90">
                החיבור הזה הוליד את Okonski Performance: מקום שמבין את שפת הגוף שלך, לא מבזבז זמן על פתרונות שטחיים, ויודע בדיוק איך לבנות תוכנית שיקום והתאוששות שמשתלבת בחיים האמיתיים שלך.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
