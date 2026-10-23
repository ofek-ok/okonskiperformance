const steps = [
  {
    num: "01.",
    title: "יצירת קשר",
    body: "כשהפעילות תיפתח, תוכל לפנות אליי בוואטסאפ ולספר בקצרה מה הסיבה לפנייה ומה המטרה שלך.",
  },
  {
    num: "02.",
    title: "בדיקת התאמה ותיאום",
    body: "נבצע היכרות ראשונית בהתכתבות, ובמידת הצורך גם בשיחה קצרה. אם השירות מתאים, נסכם את פרטי המפגש, המיקום, המחיר והמועד.",
  },
  {
    num: "03.",
    title: "מפגש ראשון",
    body: "במפגש הראשון נבצע תשאול, הערכה וטיפול ראשוני, ובסיומו נבחן אם ואיך כדאי להמשיך.",
  },
];

export default function HowToStart() {
  return (
    <section id="how-it-works" className="py-16 sm:py-24 lg:py-32 bg-steelDark relative border-b border-neutral-800/60 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-right">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-4 sm:mb-5">
            מתחילים בהיכרות. לא בקביעת טיפול אוטומטית.
          </h2>
          <p className="text-neutral-400 text-sm sm:text-base lg:text-lg leading-relaxed">
            חשוב לי להבין מי אתה, מה הביא אותך ומה אתה מצפה לקבל מהטיפול.
          </p>
        </div>

        {/* 3 Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mb-12 sm:mb-16">
          {steps.map((step) => (
            <article key={step.num} className="border border-neutral-800/40 bg-neutral-900/20 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-neutral-700/60 transition-colors">
              <div>
                <span className="font-mono text-neutral-500 text-sm tracking-wider block mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg sm:text-xl font-medium text-white mb-2.5 sm:mb-3">{step.title}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">{step.body}</p>
              </div>
            </article>
          ))}
        </div>

        {/* Status Callout */}
        <div className="rounded-2xl p-6 sm:p-10 border border-neutral-800/60 bg-neutral-900/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2.5 sm:mb-3">עדיין לא פתחנו את היומן.</h3>
            <p className="text-neutral-300 text-xs sm:text-sm leading-relaxed mb-1.5 sm:mb-2">
              הפעילות צפויה להתחיל ב־24 בינואר 2027.
            </p>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              עד אז, אפשר להצטרף ל־Performance List ולקבל עדכון כשהאפשרות לפנות לתיאום מפגש תיפתח.
            </p>
          </div>
          <a
            href="#performance-list"
            className="bg-white text-black font-medium hover:bg-neutral-200 transition-colors px-6 py-3 rounded-lg text-xs sm:text-sm shrink-0 whitespace-nowrap w-full md:w-auto text-center flex items-center justify-center min-h-[48px]"
          >
            עדכנו אותי כשהטיפולים נפתחים
          </a>
        </div>

      </div>
    </section>
  );
}
