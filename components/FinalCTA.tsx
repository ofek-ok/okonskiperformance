"use client";

import Link from "next/link";
import Image from "next/image";

export default function FinalCTA() {
  return (
    <>
      <section className="py-24 sm:py-32 md:py-48 bg-primary relative overflow-hidden">
        {/* Subtle Brand Motif Background */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-charcoal via-primary to-primary" />
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-8">
            הגוף שלך צריך לעמוד בקצב של החיים שאתה דורש ממנו.
          </h2>
          
          <p className="font-barlow text-brand-bright font-bold tracking-[0.2em] uppercase text-lg sm:text-xl mb-12">
            Okonski Performance | January 2027
          </p>
          
          <a
            href="#performance-list"
            className="inline-flex items-center justify-center bg-brand text-white font-bold py-5 px-12 rounded-full text-sm sm:text-base tracking-widest uppercase hover:bg-brand-bright transition-all shadow-[0_0_30px_rgba(62,111,168,0.15)] hover:shadow-[0_0_40px_rgba(62,111,168,0.3)]"
          >
            הצטרפו ל־Performance List
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary border-t border-white/5 pt-16 pb-8 relative z-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
            
            <div className="flex flex-col items-center md:items-start text-white">
              <p className="font-barlow font-black tracking-widest uppercase text-2xl mb-1">
                OKONSKI PERFORMANCE
              </p>
              <p className="font-barlow text-secondary-text font-bold tracking-[0.2em] uppercase text-sm">
                Built for What You Demand.
              </p>
            </div>
            
            <div className="flex gap-6">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-secondary-text hover:text-brand transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              {/* WhatsApp */}
              <a href="https://wa.me/972555172571" aria-label="WhatsApp" className="text-secondary-text hover:text-brand transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.01 2.014a9.982 9.982 0 00-8.528 4.796A9.972 9.972 0 002.03 11.96c0 1.745.449 3.447 1.302 4.945L2 22l5.244-1.332a9.957 9.957 0 004.766 1.205h.004a9.983 9.983 0 008.527-4.796 9.972 9.972 0 001.452-5.15 9.987 9.987 0 00-2.92-7.058 9.98 9.98 0 00-7.063-2.855zm0 1.666a8.315 8.315 0 015.885 2.379 8.32 8.32 0 012.433 5.886 8.312 8.312 0 01-1.21 4.292 8.32 8.32 0 01-7.104 3.996h-.003a8.3 8.3 0 01-3.997-1.01l-.286-.17-2.964.753.766-2.883-.186-.296a8.293 8.293 0 01-1.272-4.417 8.309 8.309 0 012.428-5.882 8.318 8.318 0 015.886-2.381zm-4.383 3.86a1.18 1.18 0 00-.84.388c-.287.311-1.09 1.066-1.09 2.597 0 1.531 1.116 3.013 1.272 3.22.155.207 2.195 3.35 5.318 4.63.743.305 1.323.488 1.776.625.746.236 1.425.203 1.961.123.601-.09 1.84-.753 2.099-1.481.259-.728.259-1.352.181-1.481-.077-.13-.285-.207-.597-.363-.311-.155-1.84-.908-2.126-1.012-.285-.104-.493-.155-.7.155-.208.311-.804 1.012-.985 1.22-.182.207-.363.233-.675.078a8.214 8.214 0 01-2.421-1.493 9.07 9.07 0 01-1.674-2.074c-.181-.311-.02-.479.136-.634.14-.139.311-.363.467-.544.155-.181.207-.311.311-.518.104-.207.052-.389-.026-.544-.078-.155-.7-1.686-.959-2.308-.253-.605-.51-.523-.7-.533-.18-.01-.388-.012-.596-.012z" /></svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-secondary-text gap-4">
            <p>&copy; {new Date().getFullYear()} Okonski Performance. All rights reserved.</p>
            
            <div className="flex flex-wrap justify-center gap-6 text-center">
              <Link href="/terms" className="hover:text-white transition-colors">תנאי שימוש</Link>
              <Link href="/privacy" className="hover:text-white transition-colors">מדיניות פרטיות</Link>
              <Link href="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</Link>
              <Link href="/disclaimer" className="hover:text-white transition-colors">הבהרה מקצועית ובריאותית</Link>
              <button onClick={() => document.dispatchEvent(new CustomEvent("open-cookie-settings"))} className="hover:text-white transition-colors">הגדרות עוגיות</button>
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
