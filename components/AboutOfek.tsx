import Image from "next/image";

export default function AboutOfek() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-36 bg-charcoalDark relative border-b border-white/[0.06] scroll-mt-20 sm:scroll-mt-24" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Mobile Header (visible only on mobile) */}
        <div className="lg:hidden text-right mb-8">
          <h2 id="about-heading" className="text-2xl sm:text-4xl font-black text-white leading-tight">
            נעים להכיר, אני אופק אוקונסקי.
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Professional Studio Portrait */}
          <div className="lg:col-span-5 relative order-first">
            <div className="relative w-full max-w-[320px] sm:max-w-[370px] mx-auto aspect-[4/5] rounded-2xl overflow-hidden border border-neutral-800/60 shadow-xl bg-neutral-900">
              <Image
                src="/about-portrait.jpg"
                alt="אופק אוקונסקי, מייסד Okonski Performance"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 320px, (max-width: 1024px) 370px, 33vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoalDark via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-4 sm:bottom-5 right-4 sm:right-5 left-4 sm:left-5 p-3.5 sm:p-4 rounded-xl bg-neutral-950/80 backdrop-blur-md border border-neutral-800/60 text-right">
                <p className="text-white font-medium text-sm">אופק אוקונסקי</p>
                <p className="text-[11px] sm:text-xs text-neutral-400">מייסד Okonski Performance • חגורה שחורה BJJ</p>
              </div>
            </div>
          </div>

          {/* Founder Story Right-Aligned */}
          <div className="lg:col-span-7 text-right">
            
            {/* Desktop Header (hidden on mobile) */}
            <h2 className="hidden lg:block text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
              נעים להכיר, אני אופק אוקונסקי.
            </h2>

            {/* Dual Worlds Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-4 sm:p-5 rounded-xl border border-neutral-800/40 bg-neutral-900/20">
                <span className="text-sm font-medium text-white block mb-1">ספורט תובעני</span>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  15 שנות אומנויות לחימה, חגורה שחורה ב-BJJ ומנהל פריינטה אקדמי בכפר סבא.
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl border border-neutral-800/40 bg-neutral-900/20">
                <span className="text-sm font-medium text-white block mb-1">קריירה אינטנסיבית</span>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  מנהל פרויקטים בכיר עם 7 שנות ניסיון בהובלת תהליכים טכנולוגיים מורכבים.
                </p>
              </div>
            </div>

            {/* Narrative Body */}
            <div className="space-y-3.5 sm:space-y-4 text-silverMuted text-sm sm:text-base lg:text-lg leading-relaxed">
              <p className="font-bold text-silverOff">
                אני מכיר מקרוב את שני העולמות שעבורם הקמתי את Okonski Performance: ספורט תובעני וקריירה אינטנסיבית.
              </p>
              <p>
                אני עוסק באמנויות לחימה כבר כ־15 שנים, חגורה שחורה בג&apos;יו־ג&apos;יטסו ברזילאי, מאמן ומנהל את פריינטה אקדמי בכפר סבא.
              </p>
              <p>
                במקביל, אני מנהל פרויקטים בכיר עם כשבע שנות ניסיון בניהול פרויקטים טכנולוגיים, הובלת תהליכים ועבודה בסביבות מורכבות ותובעניות.
              </p>
              <p>
                השילוב בין שני העולמות האלה לימד אותי עד כמה אנחנו דורשים מהגוף שלנו — באימונים, בעבודה ובחיי היומיום — ועד כמה חשוב לתת לו את תשומת הלב המתאימה.
              </p>
              <p className="font-bold text-silverOff">
                מתוך החיבור הזה הקמתי את Okonski Performance.
              </p>
              <p>
                המטרה שלי היא להציע טיפול גופני אישי שלא מסתכל רק על האזור שכואב או מפריע, אלא גם על האדם שמאחוריו: איך הוא מתאמן, איך נראית השגרה שלו, אילו עומסים הוא חווה ומה הוא רוצה להיות מסוגל לעשות.
              </p>
              <p>
                את החשיבה התהליכית מעולם הניהול אני מביא גם לגישה שלי לטיפול: להבין את נקודת המוצא, להגדיר מטרה, לעבוד בצורה מסודרת ולבחון את ההתקדמות.
              </p>
              <p>
                מבחינתי, טיפול טוב צריך לשלב עבודה גופנית מקצועית, הסברים ברורים ויחס אישי.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
