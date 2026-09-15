import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex flex-col justify-center items-center pt-24 pb-16 overflow-hidden bg-primary selection:bg-brand selection:text-white">
      
      {/* Cinematic Lighting & Textures */}
      <div className="absolute inset-0 z-0 bg-primary" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,24,29,1)_0%,_rgba(11,13,16,1)_100%)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[50vh] bg-brand/10 blur-[120px] rounded-full pointer-events-none opacity-50 mix-blend-screen" />
      
      {/* Subtle Logo Motif */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] sm:w-[1200px] h-[150vw] sm:h-[1200px] opacity-[0.02] mix-blend-overlay z-0 pointer-events-none flex items-center justify-center"
      >
        <Image 
          src="/logo-official.png" 
          alt="Okonski Performance Background Logo" 
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center flex flex-col items-center justify-center flex-1 w-full max-w-5xl mt-12 sm:mt-0">
        
        {/* Label */}
        <p className="font-barlow text-silver/40 font-bold tracking-[0.3em] uppercase text-xs sm:text-sm mb-6 sm:mb-8 animate-fade-up">
          OKONSKI PERFORMANCE <span className="mx-2 text-brand">•</span> JANUARY 2027
        </p>

        {/* Main Headline */}
        <h1 className="text-[12vw] sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.05] tracking-tight mb-8 sm:mb-10 animate-fade-up" style={{ animationDelay: "100ms" }}>
          הגוף שלך צריך <br className="hidden sm:block"/> לעמוד בקצב שלך.
        </h1>

        {/* Service Descriptor */}
        <div className="mb-8 sm:mb-10 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <p className="font-barlow text-brand font-black tracking-[0.2em] sm:tracking-[0.3em] uppercase text-sm sm:text-lg lg:text-xl">
            SPORTS THERAPY <span className="mx-2 sm:mx-4 opacity-50">•</span> RECOVERY <span className="mx-2 sm:mx-4 opacity-50">•</span> PERFORMANCE
          </p>
        </div>

        {/* Supporting Copy */}
        <p className="text-lg sm:text-xl md:text-2xl text-secondary-text leading-relaxed max-w-3xl mx-auto mb-12 sm:mb-16 animate-fade-up font-medium" style={{ animationDelay: "300ms" }}>
          טיפול לאנשים שדורשים מהגוף שלהם יותר — <br className="hidden sm:block"/>באימונים, בעבודה ובחיים.
        </p>

        {/* Brand Statement (Desktop: beside CTA? No, let's stack) */}
        <div className="flex flex-col items-center w-full animate-fade-up" style={{ animationDelay: "400ms" }}>
          <p className="font-barlow text-silver/60 font-black tracking-widest uppercase text-lg sm:text-xl mb-6">
            BUILT FOR WHAT YOU DEMAND.
          </p>
          
          <a
            href="#performance-list"
            className="group relative inline-flex items-center justify-center bg-white text-primary-text font-black py-4 sm:py-5 px-10 sm:px-14 rounded-full text-base tracking-widest uppercase hover:bg-brand hover:text-white transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.05)] hover:shadow-[0_0_50px_rgba(62,111,168,0.4)] w-full sm:w-auto overflow-hidden focus:outline-none focus:ring-4 focus:ring-brand/30"
          >
            <span className="relative z-10">הצטרפו ל־Performance List</span>
            <div className="absolute inset-0 bg-brand translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out z-0" />
          </a>
          
          {/* Microcopy */}
          <p className="text-xs sm:text-sm text-secondary-text mt-5 font-medium tracking-wide">
            תוכן <span className="mx-1 text-charcoal/50">•</span> עדכונים <span className="mx-1 text-charcoal/50">•</span> גישה מוקדמת לפתיחת היומן
          </p>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
        <div className="w-[1px] h-12 bg-gradient-to-b from-brand to-transparent" />
      </div>
    </section>
  );
}
