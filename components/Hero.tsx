export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/40 z-10" />
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Replace with actual image later */}
        <div className="absolute inset-0 bg-steel opacity-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/placeholder-hero.jpg')" }} />
      </div>

      <div className="container relative z-20 mx-auto px-6">
        <div className="max-w-3xl">
          <p className="font-barlow text-brand font-bold tracking-[0.2em] uppercase text-sm sm:text-base mb-6 animate-fade-up">
            Built for What You Demand.
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "100ms" }}>
            הגוף שלך צריך <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-bright to-brand">לעמוד בקצב שלך.</span>
          </h1>

          <p className="text-lg sm:text-xl text-silver/80 leading-relaxed mb-10 max-w-2xl animate-fade-up" style={{ animationDelay: "200ms" }}>
            טיפולי ספורט-תרפיה לספורטאים, אנשים פעילים ואנשי קריירה שרוצים לטפל בכאב, להפחית עומסים, לחזור לפעילות ולשמור על גוף חזק ומתפקד לאורך זמן.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <a
              href="https://wa.me/972500000000"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-center bg-brand text-white font-bold py-4 px-8 rounded-full hover:bg-brand-bright transition-colors shadow-[0_0_20px_rgba(62,111,168,0.3)]"
            >
              לקביעת טיפול / ייעוץ ב-WhatsApp
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <p className="text-sm font-medium text-silver/60 flex flex-wrap gap-x-4 gap-y-2">
              <span>טיפול</span>
              <span className="text-brand">•</span>
              <span>שיקום</span>
              <span className="text-brand">•</span>
              <span>תחזוקת הגוף</span>
              <span className="text-brand">•</span>
              <span>חזרה לפעילות</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
