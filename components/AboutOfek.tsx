export default function AboutOfek() {
  return (
    <section id="about" className="py-24 sm:py-32 md:py-48 bg-charcoal border-t border-white/5 relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(255,255,255,0.03)_0%,_transparent_60%)]" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Image / Visual Side - Strong cinematic framing */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative">
            <div className="aspect-[3/4] bg-primary relative shadow-2xl overflow-hidden group">
              <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60 mix-blend-luminosity group-hover:mix-blend-normal group-hover:opacity-90 transition-all duration-1000" style={{ backgroundImage: "url('/about-portrait.jpg')" }} />
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-80" />
              
              {/* Border detail */}
              <div className="absolute inset-4 border border-white/10 z-10" />
            </div>
            
            {/* Minimalist Nameplate overlapping */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-12 sm:-right-12 bg-primary border border-white/10 p-6 sm:p-8 z-20 backdrop-blur-md">
              <p className="font-barlow text-white font-black tracking-widest uppercase text-2xl sm:text-3xl mb-1">Ofek Okonski</p>
              <p className="font-barlow text-brand font-bold tracking-[0.2em] uppercase text-xs sm:text-sm">Founder</p>
            </div>
          </div>

          {/* Text Side */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] mb-12">
              מאחורי<br className="hidden sm:block"/> Okonski Performance
            </h2>

            <div className="space-y-8 text-silver/70 text-lg sm:text-xl md:text-2xl leading-relaxed font-medium">
              <p className="text-white font-bold">
                אני אופק אוקונסקי.
              </p>
              <p>
                שנים בעולם אומנויות הלחימה והאימון, לצד קריירה טכנולוגית ואקדמית תובענית, הובילו אותי לעולם הספורט־תרפיה ולשאלה שממנה נבנתה OP:
              </p>
              <p className="pl-6 border-l-2 border-brand text-white">
                לא רק איך מטפלים בגוף כשמשהו משתבש — אלא איך בונים גוף שמסוגל לעמוד במה שאנחנו דורשים ממנו.
              </p>
              <p className="text-white font-black tracking-wide pt-4">
                מכאן נולדה Okonski Performance.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
