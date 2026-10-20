import Image from "next/image";

export default function AboutOfek() {
  return (
    <section id="about" className="py-24 sm:py-36 bg-charcoalDark relative border-b border-white/[0.06] scroll-mt-24" aria-labelledby="about-heading">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Professional Studio Portrait */}
          <div className="lg:col-span-5 relative order-last lg:order-first">
            <div className="relative w-full max-w-[370px] mx-auto aspect-[4/5] rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-steelDark">
              <Image
                src="/about-portrait.jpg"
                alt="אופק אוקונסקי, מייסד Okonski Performance"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 370px, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoalDark via-transparent to-transparent opacity-80" />
              
              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-xl bg-steelBase/90 backdrop-blur-md border border-white/10 text-right">
                <p className="text-white font-bold text-sm">אופק אוקונסקי</p>
                <p className="text-xs text-silverMuted">מייסד Okonski Performance • חגורה שחורה BJJ</p>
              </div>
            </div>
          </div>

          {/* Founder Story Right-Aligned */}
          <div className="lg:col-span-7 text-right">
            
            <h2 id="about-heading" className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-8">
              נעים להכיר, אני אופק אוקונסקי.
            </h2>

            {/* Dual Worlds Cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="p-5 rounded-xl bg-steelBase border border-white/10">
                <span className="text-sm font-bold text-white block mb-1">ספורט תובעני</span>
                <p className="text-xs text-silverMuted leading-relaxed">
                  15 שנות אומנויות לחימה, חגורה שחורה ב-BJJ ומנהל פריינטה אקדמי בכפר סבא.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-steelBase border border-white/10">
                <span className="text-sm font-bold text-white block mb-1">קריירה אינטנסיבית</span>
                <p className="text-xs text-silverMuted leading-relaxed">
                  מנהל פרויקטים בכיר עם 7 שנות ניסיון בהובלת תהליכים טכנולוגיים מורכבים.
                </p>
              </div>
            </div>

            {/* Narrative Body */}
            <div className="space-y-4 text-silverMuted text-base sm:text-lg leading-relaxed">
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

