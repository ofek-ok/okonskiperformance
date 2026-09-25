import Image from "next/image";

export default function AboutOfek() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-primary border-t border-white/5 relative overflow-hidden" aria-labelledby="about-heading">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(62,111,168,.08)_0%,_transparent_55%)]" aria-hidden="true" />
      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative">
        <div className="grid lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          <div className="lg:col-span-4 relative">
            <div className="absolute -top-3 -right-3 w-full h-full border border-white/10 rounded-2xl" aria-hidden="true" />
            <div className="relative w-full max-w-[380px] mx-auto aspect-[4/5] overflow-hidden rounded-2xl border border-white/10 bg-charcoal shadow-2xl">
              <Image src="/ofek-portrait.jpg" alt="אופק אוקונסקי, מייסד Okonski Performance" fill className="object-cover object-center" sizes="(max-width:1024px) 380px, 33vw" />
            </div>
          </div>
          <div className="lg:col-span-8">
            <p className="font-barlow text-brand font-black tracking-[.25em] text-xs uppercase mb-4" dir="ltr">FOUNDER STORY</p>
            <h2 id="about-heading" className="text-[clamp(2rem,5vw,3.3rem)] font-black text-white leading-[1.12] tracking-tight mb-8">מי עומד מאחורי Okonski Performance?</h2>
            <div className="space-y-5 text-white/80 text-[clamp(1rem,2vw,1.15rem)] leading-[1.85]">
              <p className="text-white font-bold text-xl">אני אופק אוקונסקי.</p>
              <p>ספורט ואומנויות לחימה הם חלק מהחיים שלי מאז הילדות. התחריתי ב־MMA ובג׳יו־ג׳יטסו, אני חגורה שחורה בג׳יו־ג׳יטסו ברזילאי ומדריך בתחום, עם כשבע שנות עבודה עם מתאמנים על המזרן.</p>
              <p>לאורך הדרך התמודדתי בעצמי עם בעיות אורתופדיות ושני ניתוחי ברך. מבחינתי הבעיה אף פעם לא הייתה רק הכאב — אלא מה שהוא מנע ממני לעשות: להתאמן, לזוז ולהגיע לרמה שרציתי.</p>
              <p>במקביל השלמתי תואר ראשון במדעי המחשב ותואר שני במנהל עסקים ובניתי קריירה בניהול פרויקטים בסביבה טכנולוגית תובענית. כך הכרתי מקרוב גם את הספורטאי שדורש מהגוף באימון וגם את האדם שיושב שעות, עובד תחת עומס ועדיין רוצה להרגיש טוב ולתפקד.</p>
              <p>הרצון לעזור, להדריך ולעבוד עם אנשים הוביל אותי ל־Sports Therapy ולהקמת Okonski Performance.</p>
            </div>
            <blockquote className="mt-9 border-r-2 border-brand pr-6 text-white text-lg sm:text-xl font-bold leading-[1.7]">
              לא להתפשר על כאב או על הגוף רק כי יש עוד עבודה ועוד אימון להספיק. טיפול, התאוששות ותנועה הם חלק מהיכולת להמשיך קדימה.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
