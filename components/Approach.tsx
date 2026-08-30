export default function Approach() {
  return (
    <section className="py-24 bg-charcoal relative overflow-hidden">
      {/* Background graphic */}
      <div className="absolute inset-0 bg-diagonal-accent opacity-50 z-0" />
      
      <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
        <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 block">
          הגישה שלנו
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-8">
          לא רק לחכות <br className="hidden sm:block" />
          <span className="text-brand-bright">שמשהו יכאב.</span>
        </h2>

        <p className="text-silver/80 text-lg mb-12 max-w-2xl mx-auto">
          הגישה של Okonski Performance מתחילה מהצורך שיש לכם היום — כאב, עומס, התאוששות, מגבלה או תחזוקה.
          <br /><br />
          אבל המטרה ארוכת הטווח היא רחבה יותר:
        </p>

        <div className="flex flex-col items-center justify-center space-y-4 mb-16">
          <div className="bg-steel border border-white/10 px-8 py-4 rounded-lg w-full max-w-md shadow-lg shadow-black/20">
            <p className="text-white font-bold text-lg">להרגיש טוב יותר.</p>
          </div>
          <svg className="w-6 h-6 text-brand animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          
          <div className="bg-steel border border-white/10 px-8 py-4 rounded-lg w-full max-w-md shadow-lg shadow-black/20">
            <p className="text-white font-bold text-lg">לנוע ולתפקד טוב יותר.</p>
          </div>
          <svg className="w-6 h-6 text-brand animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>

          <div className="bg-steel border border-white/10 px-8 py-4 rounded-lg w-full max-w-md shadow-lg shadow-black/20">
            <p className="text-white font-bold text-lg">לחזור לפעילות.</p>
          </div>
          <svg className="w-6 h-6 text-brand animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>

          <div className="bg-steel border border-white/10 px-8 py-4 rounded-lg w-full max-w-md shadow-lg shadow-black/20">
            <p className="text-white font-bold text-lg">לבנות גוף חזק ועמיד יותר.</p>
          </div>
          <svg className="w-6 h-6 text-brand animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>

          <div className="bg-brand border border-brand-bright px-8 py-5 rounded-lg w-full max-w-md shadow-[0_0_30px_rgba(62,111,168,0.2)]">
            <p className="text-white font-black text-xl">להיות מסוגלים לדרוש ממנו יותר.</p>
          </div>
        </div>

        <p className="font-barlow text-brand-bright font-bold tracking-[0.2em] uppercase text-xl sm:text-2xl mt-12">
          Built for What You Demand.
        </p>
      </div>
    </section>
  );
}
