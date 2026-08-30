export default function Method() {
  return (
    <section id="services" className="py-20 sm:py-32 bg-charcoal">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Core Product Header */}
        <div className="text-center max-w-4xl mx-auto mb-24">
          <p className="font-barlow text-brand font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
            השירות
          </p>
          <h2 className="font-barlow text-5xl sm:text-7xl font-black text-white tracking-wide uppercase mb-10">
            Performance <br className="sm:hidden" />Treatment
          </h2>
          <p className="text-xl sm:text-2xl text-silver/80 leading-relaxed font-medium max-w-3xl mx-auto">
            טיפול ספורט־תרפיה אישי שנבנה סביב מה שמפריע לך היום ומה שאתה צריך שהגוף שלך יהיה מסוגל לעשות.
          </p>
        </div>

        {/* Use Cases - Clean Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 sm:gap-16 border-t border-white/5 pt-20">
          
          {/* Item 1 */}
          <div className="relative">
            <div className="text-brand-bright font-barlow text-6xl font-black opacity-20 absolute -top-10 -right-4 pointer-events-none">01</div>
            <h3 className="text-2xl font-black text-white mb-4 relative z-10">כאב, פציעה או מגבלה</h3>
            <p className="text-silver/60 text-lg leading-relaxed relative z-10">
              טיפול ושיקום במטרה לחזור לתפקוד ולפעילות. להבין את מקור הבעיה ולבנות מסלול חזרה לשגרה חזקה יותר.
            </p>
          </div>

          {/* Item 2 */}
          <div className="relative">
            <div className="text-brand-bright font-barlow text-6xl font-black opacity-20 absolute -top-10 -right-4 pointer-events-none">02</div>
            <h3 className="text-2xl font-black text-white mb-4 relative z-10">עומס והתאוששות</h3>
            <p className="text-silver/60 text-lg leading-relaxed relative z-10">
              התמודדות עם עומסים מצטברים מאימונים, מעבודה ושגרת חיים אינטנסיבית. לעזור לגוף להתאושש מהר יותר.
            </p>
          </div>

          {/* Item 3 */}
          <div className="relative">
            <div className="text-brand-bright font-barlow text-6xl font-black opacity-20 absolute -top-10 -right-4 pointer-events-none">03</div>
            <h3 className="text-2xl font-black text-white mb-4 relative z-10">תחזוקת הגוף</h3>
            <p className="text-silver/60 text-lg leading-relaxed relative z-10">
              גם ללא פציעה ספציפית — שגרת תחזוקה, Recovery והרגשה טובה יותר כדי לשמר את היכולת לאורך זמן.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
