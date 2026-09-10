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

      <div className="container relative z-10 mx-auto px-6 text-center mt-8">
        
        {/* Eyebrow */}
        <p className="font-barlow text-brand font-black tracking-[0.2em] uppercase text-sm sm:text-base mb-8 animate-fade-up">
          OKONSKI PERFORMANCE | JANUARY 2027
        </p>

        {/* Huge Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
          BUILT FOR WHAT <br className="hidden sm:block" />
          YOU DEMAND.
        </h1>

        <div className="max-w-3xl mx-auto space-y-4 mb-12 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <p className="text-xl sm:text-2xl text-white font-bold leading-relaxed">
            אתה דורש מהגוף שלך הרבה.<br />
            באימונים. בעבודה. בחיים.
          </p>
          <p className="text-lg sm:text-xl text-secondary-text leading-relaxed">
            Okonski Performance נבנית כדי לעזור לגוף לעמוד בדרישות האלה — דרך Sports Therapy, Recovery ותפיסה שמסתכלת מעבר לכאב, אל היכולת לחזור לבצע.
          </p>
        </div>

        {/* Pre-launch CTA */}
        <div className="flex flex-col items-center justify-center animate-fade-up" style={{ animationDelay: "300ms" }}>
          <a
            href="#performance-list"
            className="inline-flex items-center justify-center bg-brand text-white font-bold py-5 px-12 rounded-full text-sm sm:text-base tracking-widest uppercase hover:bg-brand-bright transition-all shadow-[0_0_30px_rgba(62,111,168,0.15)] hover:shadow-[0_0_40px_rgba(62,111,168,0.3)] mb-4"
          >
            הצטרפו ל־Performance List
          </a>
          <p className="text-sm text-secondary-text max-w-md mx-auto">
            קבלו עדכונים, תוכן וגישה מוקדמת לפתיחת היומן בינואר 2027.
          </p>
        </div>
      </div>
    </section>
  );
}
