export default function WhatWeAreBuilding() {
  return (
    <section className="py-24 sm:py-32 md:py-48 bg-charcoal relative overflow-hidden border-t border-white/5">
      {/* Subtle Lighting */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/5 blur-[120px] rounded-full pointer-events-none opacity-30 mix-blend-screen" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Column - Editorial Text */}
          <div className="lg:col-span-7 space-y-12">
            <div>
              <p className="font-barlow text-silver/40 font-bold tracking-[0.2em] uppercase text-xs sm:text-sm mb-6">
                BEYOND PAIN <span className="mx-2 text-brand">/</span> TOWARD PERFORMANCE
              </p>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight mb-8">
                מה מפריע לך היום — <br className="hidden md:block"/>
                <span className="text-silver/60">ומה אתה צריך שהגוף שלך יהיה מסוגל לעשות?</span>
              </h2>
            </div>
            
            <div className="space-y-6 text-silver/70 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium pl-0 md:pl-8 md:border-l-2 border-brand/30">
              <p className="text-white">
                אנחנו לא מסתכלים רק על הכאב. אנחנו מסתכלים על הדרישות שהגוף שלך צריך לעמוד בהן.
              </p>
              <p>
                <span className="font-bold text-silver/90">Okonski Performance מתחילה מ־Sports Therapy</span> — טיפול, תנועה, עומס והתאוששות — עם מטרה אחת: לעזור לגוף לחזור להתמודד עם מה שאתה דורש ממנו.
              </p>
            </div>
          </div>

          {/* Right Column - Visual / Editorial Element */}
          <div className="lg:col-span-5 relative h-full flex flex-col justify-center mt-12 lg:mt-0">
            {/* Cinematic Empty State / Placeholder for Treatment Photography */}
            <div className="aspect-square lg:aspect-[4/5] bg-primary rounded-sm border border-white/5 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent z-10 pointer-events-none" />
              
              {/* This represents the "treatment x performance" visual connection before real assets arrive */}
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <div className="text-center">
                  <p className="font-barlow text-4xl sm:text-5xl md:text-6xl font-black tracking-widest uppercase text-white/5 group-hover:text-white/10 transition-colors duration-700">
                    TREATMENT
                    <br />×<br />
                    PERFORMANCE
                  </p>
                </div>
              </div>

              {/* Overlapping statement badge */}
              <div className="absolute -bottom-6 -left-6 sm:bottom-8 sm:-left-12 bg-elevated border border-white/10 p-6 sm:p-8 shadow-2xl z-20 backdrop-blur-md">
                <p className="font-barlow text-xl sm:text-2xl font-black tracking-wider uppercase text-white leading-snug">
                  SPORTS THERAPY <br/>
                  IS WHERE WE START.
                  <br/><br/>
                  <span className="text-brand">PERFORMANCE <br/>IS WHERE WE'RE GOING.</span>
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
