export default function WhatWeAreBuilding() {
  return (
    <section
      className="relative py-24 sm:py-32 md:py-40 bg-charcoal overflow-hidden border-t border-white/5"
      aria-labelledby="section-treatment-heading"
    >
      <div className="container mx-auto px-5 sm:px-8 max-w-4xl relative z-10">

        {/* ── Main heading ── */}
        <h2
          id="section-treatment-heading"
          className="text-[clamp(2rem,6vw,3.5rem)] font-black text-white leading-[1.15] tracking-tight mb-10 sm:mb-14 text-balance"
        >
          מה כולל הטיפול?
        </h2>

        {/* ── Editorial copy — high contrast near-white for important info ── */}
        <div className="space-y-6 sm:space-y-8 text-[clamp(1.05rem,2.4vw,1.25rem)] leading-[1.8] text-white/90 font-normal">
          <p>
            כל טיפול מתחיל בהבנה של מה מפריע לך, מה הדרישות שלך מהגוף ומה המטרה שאליה אתה רוצה לחזור.
          </p>

          <p className="p-6 sm:p-8 bg-primary/60 border-r-2 border-brand rounded-l-xl text-white font-medium">
            בהתאם לצורך, הטיפול יכול לשלב עיסוי וטכניקות ידניות, עבודה על טווחי תנועה, מתיחות, כוסות רוח, קינזיו טייפ, תרגילים וטכניקות טיפול נוספות.
          </p>

          <p className="text-silver/90">
            לא כל אחד צריך את אותם הדברים. הטיפול מותאם למצב, למטרה ולדרישות שלך מהגוף.
          </p>
        </div>

        {/* ── Editorial divider line ── */}
        <div className="mt-14 sm:mt-16 flex items-center gap-4" aria-hidden="true">
          <div className="w-12 h-px bg-brand" />
          <div className="w-24 h-px bg-white/10" />
        </div>

      </div>
    </section>
  );
}
