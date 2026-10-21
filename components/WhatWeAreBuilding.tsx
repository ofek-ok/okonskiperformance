export default function WhatWeAreBuilding() {
  return (
    <section className="relative py-20 sm:py-28 bg-charcoal overflow-hidden border-t border-white/5" aria-labelledby="treatment-heading">
      <div className="container mx-auto px-5 sm:px-8 max-w-5xl relative z-10">
        <p className="font-barlow text-brand font-black tracking-[0.25em] text-xs uppercase mb-4" dir="ltr">TREATMENT BUILT AROUND YOU</p>
        <h2 id="treatment-heading" className="text-[clamp(2rem,6vw,3.5rem)] font-black text-white leading-[1.15] tracking-tight mb-10">מה כולל הטיפול?</h2>
        <div className="grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-16 items-start">
          <div className="space-y-6 text-[clamp(1.05rem,2vw,1.25rem)] leading-[1.85] text-white/85">
            <p className="text-white font-semibold">מתחילים במה שמפריע לך ובמה שאתה רוצה מהגוף שלך עכשיו.</p>
            <p>זה יכול להיות כאב בגב, עומס שהצטבר, נוקשות, התאוששות מאימון, מגבלה בתנועה, חזרה מפציעה — או פשוט רצון להרגיש טוב יותר.</p>
            <p>לא כולם מגיעים מאותה נקודה ולא כולם צריכים את אותו טיפול. המטרה היא להתאים את העבודה למצב שלך, ולא להכניס אותך לתבנית קבועה.</p>
          </div>
          <div className="bg-primary/70 border border-white/10 rounded-2xl p-7 sm:p-9">
            <p className="text-xs font-barlow font-black tracking-[.2em] text-brand uppercase mb-5" dir="ltr">TOOLS, NOT THE PRODUCT</p>
            <p className="text-white/90 leading-[1.8] text-base sm:text-lg">
              בהתאם לצורך, הטיפול יכול לשלב עיסוי וטכניקות ידניות, עבודה על טווחי תנועה, מתיחות, כוסות רוח, קינזיו־טייפ, תרגילים וכלים נוספים.
            </p>
            <div className="mt-7 pt-6 border-t border-white/10 text-white font-bold leading-relaxed">
              הטכניקה היא כלי. מה שאתה צריך מהגוף שלך הוא נקודת המוצא.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
