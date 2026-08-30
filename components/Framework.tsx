export default function Framework() {
  const steps = [
    { title: "ASSESS", desc: "להבין מה קורה." },
    { title: "RECOVER", desc: "לטפל בכאב ועומס." },
    { title: "BUILD", desc: "לשפר יכולת ותנועה." },
    { title: "PERFORM", desc: "לחזור לדרוש יותר." },
  ];

  return (
    <section className="py-32 bg-charcoal relative border-t border-white/5">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="font-barlow text-brand-bright font-black tracking-[0.2em] uppercase text-2xl sm:text-3xl mb-24">
          The Performance System
        </h2>

        {/* Framework Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative max-w-5xl mx-auto">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-brand/30 -translate-y-1/2 z-0" />
          
          {/* Connector Line (Mobile) */}
          <div className="block md:hidden absolute top-[10%] bottom-[10%] left-1/2 w-px bg-brand/30 -translate-x-1/2 z-0" />

          {steps.map((step, idx) => (
            <div key={step.title} className="relative z-10 flex flex-col items-center group w-full md:w-auto">
              {/* Node */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-black border border-brand/50 rounded-full flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(62,111,168,0.2)] group-hover:border-brand-bright group-hover:shadow-[0_0_25px_rgba(91,142,196,0.4)] transition-all duration-300">
                <span className="font-barlow text-white font-black text-xl sm:text-2xl tracking-wider">
                  {idx + 1}
                </span>
              </div>
              
              {/* Text */}
              <div className="bg-charcoal px-4 py-2">
                <h3 className="font-barlow text-2xl sm:text-3xl font-black text-white tracking-wide mb-2 uppercase">
                  {step.title}
                </h3>
                <p className="text-silver/60 text-base sm:text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
