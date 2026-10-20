import Image from "next/image";

export default function AboutOfek() {
  return (
    <section id="about" className="py-20 sm:py-32 scroll-mt-24 bg-primary border-t border-white/5 relative overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(62,111,168,.08)_0%,_transparent_55%)]" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          <div className="lg:col-span-5 lg:order-2 relative">
            <div className="absolute -top-3 -right-3 w-full h-full border border-white/10 rounded-2xl" aria-hidden="true" />
            <div className="relative w-full max-w-[380px] mx-auto aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-charcoal shadow-2xl">
              <Image src="/about-portrait.jpg" alt="אופק אוקונסקי, מייסד Okonski Performance" fill className="object-cover object-center" sizes="(max-width:1024px) 380px, 33vw" />
            </div>
          </div>
          <div className="lg:col-span-7 lg:order-1 text-right">
            <h2 id="about-heading" className="text-[clamp(2rem,5vw,3.3rem)] font-black text-white leading-tight mb-8">נעים להכיר, אני אופק אוקונסקי.</h2>
            <div className="space-y-5 text-white/80 text-lg leading-8">
              <p className="font-bold text-white">אני מכיר מקרוב את שני העולמות שעבורם הקמתי את Okonski Performance: ספורט תובעני וקריירה אינטנסיבית.</p>
              <p>אני עוסק באמנויות לחימה כבר כ־15 שנים, חגורה שחורה בג'יו־ג'יטסו ברזילאי, מאמן ומנהל את פריינטה אקדמי בכפר סבא.</p>
              <p>במקביל, אני מנהל פרויקטים בכיר עם כשבע שנות ניסיון בניהול פרויקטים טכנולוגיים, הובלת תהליכים ועבודה בסביבות מורכבות ותובעניות.</p>
              <p>השילוב בין שני העולמות האלה לימד אותי עד כמה אנחנו דורשים מהגוף שלנו — באימונים, בעבודה ובחיי היומיום — ועד כמה חשוב לתת לו את תשומת הלב המתאימה.</p>
              <p className="font-bold text-white">מתוך החיבור הזה הקמתי את Okonski Performance.</p>
              <p>המטרה שלי היא להציע טיפול גופני אישי שלא מסתכל רק על האזור שכואב או מפריע, אלא גם על האדם שמאחוריו: איך הוא מתאמן, איך נראית השגרה שלו, אילו עומסים הוא חווה ומה הוא רוצה להיות מסוגל לעשות.</p>
              <p>את החשיבה התהליכית מעולם הניהול אני מביא גם לגישה שלי לטיפול: להבין את נקודת המוצא, להגדיר מטרה, לעבוד בצורה מסודרת ולבחון את ההתקדמות.</p>
              <p>מבחינתי, טיפול טוב צריך לשלב עבודה גופנית מקצועית, הסברים ברורים ויחס אישי.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
