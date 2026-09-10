export default function WhatWeAreBuilding() {
  return (
    <section className="py-24 sm:py-32 md:py-40 bg-charcoal relative overflow-hidden">
      {/* Subtle Motif */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand/5 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        
        <p className="font-barlow text-brand font-black tracking-[0.2em] uppercase text-sm sm:text-base mb-8">
          BEYOND PAIN. TOWARD PERFORMANCE.
        </p>

        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-12">
          לא רק להרגיש טוב יותר.<br />
          להיות מסוגל לעשות יותר.
        </h2>
        
        <div className="bg-elevated border border-white/5 p-8 sm:p-12 rounded-3xl shadow-2xl mb-12 text-right">
          <div className="space-y-6 text-secondary-text text-lg sm:text-xl leading-relaxed">
            <p>
              כאב הוא לא תמיד קו הסיום של הבעיה — והיעלמות שלו היא לא תמיד קו הסיום של התהליך.
            </p>
            <p>
              Okonski Performance מתחילה מ־<span className="text-white font-bold">Sports Therapy</span> ומתמקדת בחיבור שבין טיפול, תנועה, עומס, התאוששות ויכולת גופנית.
            </p>
            <p>
              המטרה היא להבין מה הגוף שלך נדרש לעשות, מה מגביל אותו כרגע, ולעבוד לכיוון היכולת לחזור להתמודד עם הדרישות שלך.
            </p>
          </div>
        </div>

        <p className="font-barlow text-2xl sm:text-3xl text-white font-black tracking-wider uppercase">
          Sports Therapy is where we start.<br />
          <span className="text-brand">Performance is where we're going.</span>
        </p>

      </div>
    </section>
  );
}
