export default function Framework() {
  const steps = [
    { title: "ASSESS", desc: "להבין מה קורה." },
    { title: "RECOVER", desc: "לטפל בכאב ועומס." },
    { title: "BUILD", desc: "לשפר יכולת ותנועה." },
    { title: "PERFORM", desc: "לחזור לדרוש יותר." },
  ];

  return (
    <section className="py-24 sm:py-32 bg-white relative">
      <div className="container mx-auto px-6 max-w-6xl text-center">
        <h2 className="font-barlow text-brand font-black tracking-[0.2em] uppercase text-2xl sm:text-3xl mb-24">
          The Performance System
        </h2>

        {/* Framework Steps */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-4 relative max-w-5xl mx-auto">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-[10%] right-[10%] h-px bg-gray-200 -translate-y-1/2 z-0" />
          
          {/* Connector Line (Mobile) */}
          <div className="block md:hidden absolute top-[10%] bottom-[10%] left-1/2 w-px bg-gray-200 -translate-x-1/2 z-0" />

          {steps.map((step, idx) => (
            <div key={step.title} className="relative z-10 flex flex-col items-center group w-full md:w-auto">
              {/* Node */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white border border-gray-200 rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:border-brand/40 transition-all duration-300">
                <span className="font-barlow text-brand font-black text-xl sm:text-2xl tracking-wider">
                  {idx + 1}
                </span>
              </div>
              
              {/* Text */}
              <div className="bg-white px-4 py-2">
                <h3 className="font-barlow text-2xl sm:text-3xl font-black text-charcoal tracking-wide mb-2 uppercase">
                  {step.title}
                </h3>
                <p className="text-charcoal/70 text-base sm:text-lg">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-charcoal/40 mt-20 max-w-2xl mx-auto">
          * התוכן אינו מהווה ייעוץ רפואי. יש להתאים את הפעילות למצבך הבריאותי וליכולתך האישית. במקרה של פציעה, מצב רפואי או ספק, יש להתייעץ עם גורם רפואי מוסמך לפני ביצוע הפעילות.
        </p>
      </div>
    </section>
  );
}
