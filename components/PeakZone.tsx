const benefits = [
  "יותר תנועה",
  "יותר תפקוד",
  "יותר עמידות לעומס",
  "יותר יכולת לעשות את מה שאתה רוצה לעשות",
];

const quadrants = [
  { num: "01", label: "ביצועים", sub: "PERFORM" },
  { num: "02", label: "שיקום", sub: "RECOVER" },
  { num: "03", label: "תחזוקה", sub: "MAINTAIN" },
  { num: "04", label: "תפקוד", sub: "FUNCTION" },
];

export default function PeakZone() {
  return (
    <section id="peak" className="relative bg-steel py-16 sm:py-24 lg:py-28 overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #0A0B0D 0%, #1E2229 60%, #111820 100%)",
        }}
      />

      {/* Large diagonal slash — brand motif */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden
      >
        <div
          style={{
            position: "absolute",
            top: "-20%",
            right: "-5%",
            width: "80%",
            height: "140%",
            background:
              "linear-gradient(135deg, transparent 45%, rgba(62,111,168,0.04) 45%, rgba(62,111,168,0.04) 55%, transparent 55%)",
            transform: "rotate(-8deg)",
          }}
        />
        {/* Vertical right accent */}
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-brand/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">

          {/* Left */}
          <div>
            <span className="eyebrow">אזור ביצועי שיא</span>
            <span className="section-rule" />

            <h2 className="text-[clamp(2rem,7vw,3.75rem)] font-black text-silver leading-tight mb-6 sm:mb-10">
              ביצועי שיא מתחילים
              <br />
              בגוף שמתפקד
              <br />
              <span className="text-gradient-blue">ברמה גבוהה.</span>
            </h2>

            <div className="space-y-3 sm:space-y-4 text-silver/60 text-base leading-relaxed mb-6 sm:mb-8">
              <p>
                הגוף משפיע על הדרך שבה אנחנו מתאמנים, עובדים, מתאוששים
                ומתפקדים לאורך היום.
              </p>
              <p>לכן המטרה אינה רק להרגיש פחות כאב.</p>
            </div>

            <p className="text-silver font-black text-base sm:text-lg mb-8 sm:mb-12">
              המטרה היא להרחיב את היכולת שלך.
            </p>

            {/* Benefits */}
            <ul className="space-y-4 sm:space-y-5">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3 sm:gap-4">
                  <div className="w-5 sm:w-6 h-px bg-brand flex-shrink-0" />
                  <span className="text-silver text-sm sm:text-base font-medium">{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — 2×2 quadrant grid */}
          <div>
            <div className="grid grid-cols-2 gap-px bg-white/5">
              {quadrants.map((q) => (
                <div
                  key={q.num}
                  className="group bg-charcoal p-6 sm:p-8 lg:p-10 hover:bg-steel/50 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Hover corner glow */}
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "radial-gradient(circle at top right, rgba(62,111,168,0.2) 0%, transparent 70%)" }}
                  />

                  <span className="font-barlow text-brand text-xs sm:text-sm font-black tracking-[0.2em] sm:tracking-[0.3em] block mb-2 sm:mb-4">
                    {q.num}
                  </span>
                  <p className="text-silver font-black text-xl sm:text-2xl leading-none mb-1.5 sm:mb-2">
                    {q.label}
                  </p>
                  <p className="font-barlow text-silver/30 text-[9px] sm:text-[10px] font-bold tracking-[0.25em] sm:tracking-[0.35em] uppercase">
                    {q.sub}
                  </p>

                  {/* Active indicator */}
                  <div className="absolute bottom-0 left-0 w-0 group-hover:w-full h-px bg-brand transition-all duration-500" />
                </div>
              ))}
            </div>

            {/* Quote block */}
            <div className="mt-6 border border-brand/20 bg-brand/5 p-6 sm:p-8">
              <p className="text-brand text-[10px] font-bold tracking-[0.3em] uppercase mb-2 sm:mb-3">
                העיקרון
              </p>
              <p className="text-silver/80 text-sm sm:text-base leading-relaxed font-light">
                &ldquo;לא משנה אם אתה מגיע בגלל כאב, פציעה, עומס, ספורט או
                פשוט רצון לשפר — המטרה היא תמיד אותה מטרה: גוף שמתפקד
                טוב יותר.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
