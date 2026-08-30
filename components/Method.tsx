export default function Method() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* Core Product Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <p className="font-barlow text-brand font-bold tracking-[0.3em] uppercase text-sm mb-6 block">
            השירות
          </p>
          <h2 className="font-barlow text-5xl sm:text-7xl font-black text-charcoal tracking-wide uppercase mb-8">
            Performance <br className="sm:hidden" />Treatment
          </h2>
          <p className="text-xl sm:text-2xl text-charcoal/70 leading-relaxed font-medium max-w-3xl mx-auto">
            טיפול ספורט־תרפיה אישי שנבנה סביב מה שמפריע לך היום ומה שאתה צריך שהגוף שלך יהיה מסוגל לעשות.
          </p>
        </div>

        {/* Use Cases - Clean Light Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group relative bg-white border border-gray-200 shadow-sm rounded-2xl p-10 hover:border-brand/30 hover:shadow-md transition-all duration-300">
            <div className="text-gray-100 font-barlow text-8xl font-black absolute -top-4 -right-2 pointer-events-none group-hover:text-brand/10 transition-colors">01</div>
            <h3 className="text-2xl font-black text-charcoal mb-4 relative z-10">כאב, פציעה או מגבלה</h3>
            <p className="text-charcoal/70 text-lg leading-relaxed relative z-10">
              טיפול ושיקום במטרה לחזור לתפקוד ולפעילות. להבין את מקור הבעיה ולבנות מסלול חזרה לשגרה חזקה יותר.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative bg-white border border-gray-200 shadow-sm rounded-2xl p-10 hover:border-brand/30 hover:shadow-md transition-all duration-300">
            <div className="text-gray-100 font-barlow text-8xl font-black absolute -top-4 -right-2 pointer-events-none group-hover:text-brand/10 transition-colors">02</div>
            <h3 className="text-2xl font-black text-charcoal mb-4 relative z-10">עומס והתאוששות</h3>
            <p className="text-charcoal/70 text-lg leading-relaxed relative z-10">
              התמודדות עם עומסים מצטברים מאימונים, מעבודה ושגרת חיים אינטנסיבית. לעזור לגוף להתאושש מהר יותר.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative bg-white border border-gray-200 shadow-sm rounded-2xl p-10 hover:border-brand/30 hover:shadow-md transition-all duration-300">
            <div className="text-gray-100 font-barlow text-8xl font-black absolute -top-4 -right-2 pointer-events-none group-hover:text-brand/10 transition-colors">03</div>
            <h3 className="text-2xl font-black text-charcoal mb-4 relative z-10">תחזוקת הגוף</h3>
            <p className="text-charcoal/70 text-lg leading-relaxed relative z-10">
              גם ללא פציעה ספציפית — שגרת תחזוקה, Recovery והרגשה טובה יותר כדי לשמר את היכולת לאורך זמן.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
