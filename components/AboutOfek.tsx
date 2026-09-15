import Image from "next/image";

export default function AboutOfek() {
  return (
    <section
      id="about"
      className="py-24 sm:py-36 md:py-48 bg-charcoal border-t border-white/5 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(62,111,168,0.04)_0%,_transparent_55%)]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* ── Photo ── */}
          <div className="lg:col-span-4 order-1 relative">
            {/* Offset frame accent — behind image */}
            <div
              className="absolute -top-3 -right-3 w-full h-full border border-white/10 rounded-2xl pointer-events-none"
              aria-hidden="true"
            />

            {/*
              Image displayed at natural portrait size.
              If original resolution is limited, prefer smaller display over stretching.
              object-top ensures the face is always visible.
            */}
            <div className="relative w-full max-w-[340px] mx-auto lg:mx-0 aspect-square overflow-hidden rounded-2xl border border-white/10 bg-primary shadow-2xl">
              <Image
                src="/ofek-portrait.jpg"
                alt="אופק אוקונסקי, מייסד Okonski Performance"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 340px, 33vw"
              />
            </div>

            {/* Name badge */}
            <div className="absolute -bottom-4 right-2 sm:-right-2 bg-charcoal/95 border border-white/10 rounded-xl px-5 py-3 shadow-xl backdrop-blur-md">
              <p className="font-barlow text-white font-black tracking-widest uppercase text-base sm:text-lg leading-tight">
                Ofek Okonski
              </p>
              <p
                className="font-barlow text-brand font-bold tracking-[0.18em] uppercase text-[10px] sm:text-xs"
                dir="ltr"
              >
                Founder
              </p>
            </div>
          </div>

          {/* ── Text ── */}
          <div className="lg:col-span-8 order-2 pt-10 sm:pt-12 lg:pt-0">

            <h2
              id="about-heading"
              className="text-[clamp(1.8rem,5vw,3rem)] font-black text-white leading-[1.15] tracking-tight mb-8 sm:mb-12 text-balance"
            >
              מי עומד מאחורי Okonski Performance?
            </h2>

            <div className="space-y-6 text-white/90 text-[clamp(1.05rem,2.2vw,1.2rem)] leading-[1.85] font-normal">

              <p className="text-white font-bold text-[clamp(1.15rem,2.4vw,1.35rem)]">
                אני אופק אוקונסקי.
              </p>

              <p>
                עולם הספורט הוא חלק מהחיים שלי כבר שנים. אני מתאמן ומאמן באומנויות לחימה, ובמקביל בניתי קריירה בניהול פרויקטים וטכנולוגיה.
              </p>

              <p>
                החיבור בין העולמות האלה הוביל אותי ללמוד ולהעמיק ב־Sports Therapy ולהקים את Okonski Performance.
              </p>

              <p className="text-white font-medium">
                המטרה שלי היא לעזור לאנשים לטפל בגוף שלהם בהתאם למה שהם באמת דורשים ממנו ביום־יום.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
