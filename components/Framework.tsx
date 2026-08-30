export default function Framework() {
  const steps = [
    { num: "01", title: "ASSESS", desc: "להבין מה קורה." },
    { num: "02", title: "RECOVER", desc: "לטפל בכאב ועומס." },
    { num: "03", title: "BUILD", desc: "לשפר יכולת ותנועה." },
    { num: "04", title: "PERFORM", desc: "לחזור לדרוש יותר." },
  ];

  return (
    <section className="py-24 sm:py-32 md:py-48 bg-primary relative overflow-hidden">
      {/* Subtle brand motif in background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[url('/logo-official.png')] bg-no-repeat bg-contain opacity-[0.02] pointer-events-none -translate-y-1/3 translate-x-1/3" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center mb-32">
          <h2 className="font-barlow text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-widest uppercase">
            The <span className="text-brand">Performance</span> System
          </h2>
        </div>

        {/* Framework Steps */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-16 md:gap-4 relative">
          
          {/* Active Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-8 left-[5%] right-[5%] h-px bg-white/10 z-0 overflow-hidden">
            <div className="h-full w-1/3 bg-brand animate-[slideRight_3s_ease-in-out_infinite]" />
          </div>
          
          {/* Connector Line (Mobile) */}
          <div className="block md:hidden absolute top-8 bottom-[10%] right-8 w-px bg-white/10 z-0 overflow-hidden">
            <div className="w-full h-1/3 bg-brand animate-[slideDown_3s_ease-in-out_infinite]" />
          </div>

          {steps.map((step, idx) => (
            <div key={step.title} className="relative z-10 flex flex-row md:flex-col items-center md:items-start group w-full md:w-1/4">
              
              {/* Node Number */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-primary border border-white/10 rounded-full flex items-center justify-center shrink-0 mb-0 md:mb-8 ml-8 md:ml-0 group-hover:border-brand/50 group-hover:bg-elevated transition-all duration-300 relative">
                <span className="font-barlow text-silver/30 font-black text-2xl sm:text-3xl tracking-wider group-hover:text-brand transition-colors">
                  {step.num}
                </span>
              </div>
              
              {/* Text */}
              <div className="md:pr-4">
                <h3 className="font-barlow text-3xl sm:text-4xl font-black text-white tracking-widest mb-3 uppercase group-hover:text-brand-bright transition-colors">
                  {step.title}
                </h3>
                <p className="text-secondary-text text-lg sm:text-xl font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 text-center max-w-4xl mx-auto border-t border-white/5 pt-20">
          <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.2]">
            המטרה היא לא יותר טיפולים.<br />
            <span className="text-brand">המטרה היא הטיפול הנכון עבורכם.</span>
          </p>
        </div>

        <p className="text-xs text-white/20 mt-32 max-w-2xl mx-auto text-center">
          * התוכן אינו מהווה ייעוץ רפואי. יש להתאים את הפעילות למצבך הבריאותי וליכולתך האישית. במקרה של פציעה, מצב רפואי או ספק, יש להתייעץ עם גורם רפואי מוסמך לפני ביצוע הפעילות.
        </p>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slideRight {
          0% { transform: translateX(300%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes slideDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}} />
    </section>
  );
}
