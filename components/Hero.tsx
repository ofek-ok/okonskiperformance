

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] flex items-center overflow-hidden bg-primary" aria-label="Okonski Performance">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(27,32,38,0.95)_0%,rgba(11,13,16,1)_100%)]" aria-hidden="true" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[75vw] max-w-4xl h-[45vh] bg-brand/10 blur-[110px] rounded-full" aria-hidden="true" />
      <div className="relative z-10 w-full max-w-5xl mx-auto px-5 sm:px-8 text-center flex flex-col items-center pt-28 pb-20">
        <p className="text-sm font-semibold text-logoIce mb-6 tracking-wide">טיפול גופני אישי באזור השרון</p>
        <h1 className="text-[clamp(2.8rem,7.5vw,5.2rem)] font-black text-white leading-[1.04] tracking-tight mb-7 max-w-4xl text-balance">
          הגוף שלך צריך<br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-logoIce via-white to-logoIce">לעמוד בקצב שלך.</span>
        </h1>
        <p className="text-[clamp(1.05rem,2.5vw,1.3rem)] text-white/85 leading-[1.8] max-w-2xl mx-auto mb-8 font-medium">
          טיפול גופני אישי לספורטאים, למתאמנים ולאנשי קריירה עם שגרה תובענית.
        </p>
        <p className="text-white/75 leading-8 max-w-2xl mb-8">בין אם אתה מתמודד עם כאב או פציעה, זקוק להתאוששות מעומס או רוצה לשפר את היכולת הגופנית שלך — הטיפול מותאם למצב שלך ולמטרה שאתה רוצה להשיג.</p>
        <div className="w-full max-w-[330px]">
          <a href="#performance-list" className="w-full inline-flex items-center justify-center btn-logo-metallic font-black py-4 sm:py-5 px-8 rounded-full text-sm tracking-widest hover:bg-brand-bright transition-all duration-300 shadow-[0_4px_25px_rgba(62,111,168,.28)] active:scale-[.98]">
            הצטרפו ל־Performance List
          </a>
          <p className="text-xs text-silver/75 mt-4">הטיפולים בתשלום צפויים להיפתח ב־24 בינואר 2027. הצטרף לרשימה כדי לקבל עדכון כשהפעילות תיפתח.</p>
        <a href="#who-its-for" className="inline-block mt-7 text-white/80 underline">למי הטיפול מתאים?</a></div>
      </div>
    </section>
  );
}
