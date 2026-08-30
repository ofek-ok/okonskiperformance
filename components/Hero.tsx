import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-24 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-primary">
      {/* Background Deep Gradient */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-charcoal via-primary to-primary" />
      
      {/* Dimmed Logo Background - Clipped to only show the top half (the circle) - Visual Motif */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[35%] w-[800px] h-[800px] sm:w-[1200px] sm:h-[1200px] opacity-[0.03] z-0 pointer-events-none flex items-center justify-center"
        style={{ clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 65%)" }}
      >
        <Image 
          src="/logo-official.png" 
          alt="Okonski Performance Background Logo" 
          fill
          className="object-contain"
          priority
        />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center">
        
        {/* Eyebrow */}
        <p className="font-barlow text-brand font-black tracking-[0.3em] uppercase text-sm sm:text-base mb-8 animate-fade-up">
          OKONSKI PERFORMANCE
        </p>

        {/* Huge Headline */}
        <h1 className="text-4xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
          הגוף שלך צריך <br className="hidden sm:block" />
          לעמוד בקצב שלך.
        </h1>

        <p className="font-barlow text-silver/60 font-bold tracking-[0.2em] uppercase text-xl sm:text-3xl mb-8 animate-fade-up" style={{ animationDelay: "200ms" }}>
          Built for What You Demand.
        </p>

        {/* Pre-launch Announcement */}
        <div className="inline-block border border-brand/30 bg-brand/5 px-6 py-2 rounded-full mb-16 animate-fade-up" style={{ animationDelay: "250ms" }}>
          <p className="text-brand font-bold tracking-wide text-sm sm:text-base">
            נפתחים בינואר 2027
          </p>
        </div>

        {/* Pre-launch CTA */}
        <div className="flex justify-center animate-fade-up" style={{ animationDelay: "300ms" }}>
          <a
            href="#performance-list"
            className="inline-flex items-center justify-center bg-brand text-white font-bold py-5 px-12 rounded-full text-sm tracking-widest uppercase hover:bg-brand-bright transition-all shadow-[0_0_30px_rgba(62,111,168,0.15)] hover:shadow-[0_0_40px_rgba(62,111,168,0.3)]"
          >
            הצטרפו ל־Performance List
          </a>
        </div>
      </div>
    </section>
  );
}
