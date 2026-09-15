import Image from "next/image";

export default function AboutOfek() {
  return (
    <section
      id="about"
      className="py-24 sm:py-36 md:py-48 bg-charcoal border-t border-white/5 relative overflow-hidden"
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(62,111,168,0.04)_0%,_transparent_55%)]"
        aria-hidden="true"
      />

      <div className="container mx-auto px-5 sm:px-8 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-center">

          {/* ── Photo ── */}
          <div className="lg:col-span-5 order-1 lg:order-1 relative">

            {/* Geometric frame accent — behind photo */}
            <div
              className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-full h-full border border-white/5 pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden bg-primary shadow-2xl">
              <Image
                src="/ofek-portrait.jpg"
                alt="אופק אוקונסקי — מייסד Okonski Performance"
                fill
                className="object-cover object-top"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                priority={false}
              />
              {/* Subtle bottom gradient to blend into section */}
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-charcoal/60 to-transparent" />
            </div>

            {/* Name / role badge — overlapping bottom-left */}
            <div className="absolute -bottom-6 sm:-bottom-8 right-0 sm:-right-6 bg-primary border border-white/10 px-6 py-4 sm:px-8 sm:py-5 shadow-2xl backdrop-blur-sm">
              <p className="font-barlow text-white font-black tracking-widest uppercase text-xl sm:text-2xl mb-0.5">
                Ofek Okonski
              </p>
              <p
                className="font-barlow text-brand font-bold tracking-[0.2em] uppercase text-[11px] sm:text-xs"
                dir="ltr"
              >
                Founder — Okonski Performance
              </p>
            </div>
          </div>

          {/* ── Text ── */}
          <div className="lg:col-span-7 order-2 lg:order-2 pt-10 sm:pt-14 lg:pt-0">

            <h2 className="text-[clamp(2.2rem,6vw,3.75rem)] font-black text-white leading-[1.1] tracking-tight mb-10 sm:mb-12">
              מאחורי<br className="hidden sm:block" /> Okonski Performance
            </h2>

            <div className="space-y-6 text-secondary-text text-[clamp(1rem,2.3vw,1.25rem)] leading-[1.8] font-medium">
              <p className="text-white font-bold text-[clamp(1.1rem,2.5vw,1.35rem)]">
                אני אופק אוקונסקי.
              </p>

              <p>
                שנים בעולם אומנויות הלחימה והאימון, לצד קריירה טכנולוגית ואקדמית תובענית, הובילו אותי לעולם הספורט-תרפיה ולשאלה שממנה נבנתה OP:
              </p>

              <blockquote className="rtl:border-r-2 rtl:border-brand rtl:pr-6 ltr:border-l-2 ltr:border-brand ltr:pl-6 py-1">
                <p className="text-white text-[clamp(1rem,2.2vw,1.2rem)] leading-[1.75]">
                  לא רק איך מטפלים בגוף כשמשהו משתבש — אלא איך בונים גוף שמסוגל לעמוד במה שאנחנו דורשים ממנו.
                </p>
              </blockquote>

              <p className="text-white font-black tracking-wide text-[clamp(1rem,2vw,1.1rem)] pt-2">
                מכאן נולדה Okonski Performance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
