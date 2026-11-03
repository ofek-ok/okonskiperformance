import Image from "next/image";

export default function AboutOfek() {
  return (
    <section
      id="about"
      className="py-20 sm:py-28 lg:py-32 bg-[#14181F] text-white border-b border-white/10 scroll-mt-20"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
        {/* Studio Portrait */}
        <div className="lg:col-span-5">
          <div className="relative w-full max-w-[400px] mx-auto lg:mx-0 aspect-[4/5] overflow-hidden border border-white/15 bg-[#1E2229]">
            <Image
              src="/ofek-portrait-hd.jpg"
              alt="אופק אוקונסקי, מייסד Okonski Performance"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 400px, 40vw"
            />
          </div>
          <p className="mt-3 text-center lg:text-right font-mono text-xs text-[#94A3B8]">
            אופק אוקונסקי — מייסד Okonski Performance
          </p>
        </div>

        {/* Editorial Biography & Verified Credentials */}
        <div className="lg:col-span-7 text-right">
          <span className="eyebrow">מי אני</span>
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6"
          >
            אופק אוקונסקי
          </h2>

          <p className="text-xl sm:text-2xl font-semibold text-white leading-snug mb-6">
            15 שנה על המזרן. 7 שנים מול דדליינים. אני מכיר מקרוב את שני העולמות שעבורם הקמתי את Okonski Performance.
          </p>

          <div className="space-y-4 text-[#E2E8F0]/80 text-base sm:text-lg leading-relaxed mb-12">
            <p>
              אני עוסק באמנויות לחימה כ־15 שנים, חגורה שחורה ומאמן בג&apos;יו־ג&apos;יטסו ברזילאי (BJJ). במקביל, אני מנהל פרויקטים בכיר עם כשבע שנות ניסיון בהובלת פרויקטים טכנולוגיים ותהליכים בסביבות עבודה מורכבות ותובעניות.
            </p>
            <p>
              מתוך החיבור הזה הקמתי את Okonski Performance — גישה שמסתכלת לא רק על האזור שכואב או מוגבל, אלא על האדם שמאחוריו: איך הוא מתאמן, איך נראית השגרה שלו, אילו עומסים הוא חווה ומה הוא שואף להיות מסוגל לעשות.
            </p>
            <p>
              את החשיבה התהליכית מעולם הניהול אני מביא לעבודה הגופנית: להבין את נקודת המוצא, להגדיר מטרה ברורה, לעבוד בצורה מסודרת ולבחון את ההתקדמות לאורך הדרך.
            </p>
          </div>

          {/* Clear Qualification Distinction: Completed vs. In-Progress */}
          <div className="grid sm:grid-cols-2 gap-8 sm:gap-10 border-t border-white/15 pt-8">
            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#3E6FA8] font-semibold block mb-2">
                הסמכות וניסיון מוכח
              </span>
              <h3 className="text-base font-bold text-white mb-3">ניסיון ספורטיבי ומקצועי</h3>
              <ul className="space-y-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                <li className="border-t border-white/10 pt-3">
                  חגורה שחורה ומאמן מוסמך בג&apos;יו־ג&apos;יטסו ברזילאי (BJJ) — כ־15 שנות ניסיון באמנויות לחימה
                </li>
                <li className="border-t border-white/10 pt-3">
                  מנהל פרויקטים בכיר — כ־7 שנות ניסיון בהובלת תהליכים ופרויקטים טכנולוגיים
                </li>
              </ul>
            </div>

            <div>
              <span className="font-mono text-xs uppercase tracking-wider text-[#94A3B8] font-semibold block mb-2">
                הכשרה פעילה (בלימודים)
              </span>
              <h3 className="text-base font-bold text-white mb-3">השכלה והכשרה מקצועית</h3>
              <div className="border-t border-white/10 pt-3 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
                <p>
                  לימודי ספורטתרפיה ושיקום תנועתי{" "}
                  <span className="text-white font-medium">(בשלבי הכשרה פעילים — טרם הושלמו)</span>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
