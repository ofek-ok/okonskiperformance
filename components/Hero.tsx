export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center pt-32 pb-20 overflow-hidden bg-charcoal">
      {/* Background Deep Gradient / Vignette */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-steel/20 via-charcoal to-black" />
      
      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 z-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay" />

      <div className="container relative z-10 mx-auto px-6 text-center">
        
        {/* Eyebrow */}
        <p className="font-barlow text-brand-bright font-black tracking-[0.3em] uppercase text-sm sm:text-base mb-8 animate-fade-up">
          OKONSKI PERFORMANCE
        </p>

        {/* Huge Headline */}
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[1.05] tracking-tight mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
          הגוף שלך צריך <br className="hidden sm:block" />
          לעמוד בקצב שלך.
        </h1>

        <p className="font-barlow text-silver/50 font-bold tracking-[0.2em] uppercase text-xl sm:text-3xl mb-16 animate-fade-up" style={{ animationDelay: "200ms" }}>
          Built for What You Demand.
        </p>

        {/* Pre-launch CTA */}
        <div className="flex justify-center animate-fade-up" style={{ animationDelay: "300ms" }}>
          <a
            href="https://wa.me/972500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand text-white font-bold py-5 px-12 rounded-full text-sm tracking-widest uppercase hover:bg-brand-bright transition-all shadow-[0_0_40px_rgba(62,111,168,0.2)] hover:shadow-[0_0_50px_rgba(62,111,168,0.4)]"
          >
            לפרטים ועדכונים
          </a>
        </div>
      </div>
    </section>
  );
}
