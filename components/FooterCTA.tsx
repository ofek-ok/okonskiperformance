import Link from "next/link";

export default function FooterCTA() {
  return (
    <>
      <section className="py-24 bg-steel relative overflow-hidden">
        {/* Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-80" />
        
        <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
            הגוף שלכם עובד בשבילכם כל יום.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-l from-brand-bright to-brand">
              הגיע הזמן להשקיע בו בהתאם.
            </span>
          </h2>
          
          <p className="text-silver/80 text-lg sm:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            בין אם משהו כואב, הגוף מרגיש עמוס, אתם רוצים לחזור לפעילות או שפשוט הגיע הזמן לטיפול ותחזוקה — מתחילים בשיחה קצרה.
            <br /><br />
            שלחו לי הודעה ב-WhatsApp, ספרו לי מה מביא אתכם, ונבדוק מה יכול להתאים.
          </p>

          <a
            href="https://wa.me/972500000000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 bg-brand text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-brand-bright transition-all shadow-[0_0_20px_rgba(62,111,168,0.3)] hover:shadow-[0_0_30px_rgba(62,111,168,0.5)] transform hover:-translate-y-1"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.031 21.096A9.97 9.97 0 017.39 19.8l-.348-.205-3.412.894.912-3.324-.225-.357a9.962 9.962 0 01-1.528-5.32 9.99 9.99 0 119.242 9.608zm.006-18.3A8.307 8.307 0 003.73 11.488c0 1.485.394 2.924 1.144 4.195l-1.042 3.797 3.882-1.018a8.27 8.27 0 003.993 1.026h.004c4.582 0 8.31-3.73 8.31-8.31a8.316 8.316 0 00-8.31-8.31h.001v-.069h-.001zm4.567 11.758c-.25-.125-1.484-.734-1.714-.818-.231-.084-.4-.125-.568.125-.168.25-.648.818-.795.986-.147.168-.295.188-.545.063a6.837 6.837 0 01-2.008-1.238 7.55 7.55 0 01-1.39-1.74c-.147-.25-.016-.386.11-.51.112-.112.25-.292.375-.438.125-.146.167-.25.25-.417.084-.167.042-.313-.02-.438-.063-.125-.568-1.368-.778-1.874-.204-.492-.41-.424-.568-.432h-.484c-.21 0-.545.084-.83.395-.284.312-1.09 1.066-1.09 2.597 0 1.531 1.116 3.013 1.272 3.22.156.208 2.195 3.35 5.318 4.698 2.08.898 2.766.974 3.266.924.571-.057 1.484-.606 1.694-1.19.21-.585.21-1.087.147-1.191-.063-.105-.231-.168-.484-.294h.004z" />
            </svg>
            <span dir="ltr">WhatsApp-לקביעת טיפול ב</span>
          </a>
          
          <p className="text-silver/50 text-sm mt-6">
            אין התחייבות. מתחילים בשיחה.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal border-t border-white/10 pt-16 pb-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
            <div className="text-center md:text-right text-silver">
              <p className="font-barlow text-2xl font-black tracking-widest uppercase mb-1 hover:text-brand transition-colors cursor-default">
                OKONSKI PERFORMANCE
              </p>
              <p className="font-barlow text-brand-bright font-bold tracking-[0.2em] uppercase text-sm">
                Built for What You Demand.
              </p>
            </div>
            
            <div className="flex gap-6">
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="text-silver/60 hover:text-brand transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              {/* TikTok */}
              <a href="#" aria-label="TikTok" className="text-silver/60 hover:text-brand transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.23-1.13 4.38-2.91 5.68-1.62 1.17-3.78 1.48-5.74 1.04-1.81-.4-3.41-1.55-4.33-3.15-.81-1.38-1.13-3.08-.84-4.69.28-1.54 1.15-2.96 2.42-3.88 1.26-.9 2.92-1.25 4.47-1.1.01.01.01.03.02.04.01 1.34 0 2.69 0 4.03-1.07.03-2.14.37-2.97 1.09-.7.62-1.08 1.54-1.03 2.46.06 1.06.68 2.06 1.63 2.53 1.04.5 2.29.5 3.31.06.94-.41 1.66-1.2 1.9-2.21.13-.53.15-1.09.15-1.63V.02h-1.45.92z" />
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="#" aria-label="LinkedIn" className="text-silver/60 hover:text-brand transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="text-silver/60 hover:text-brand transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="text-silver/60 hover:text-brand transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M21.582 6.186a2.6 2.6 0 00-1.838-1.848C18.125 3.917 12 3.917 12 3.917s-6.125 0-7.744.421a2.6 2.6 0 00-1.838 1.848C2 7.822 2 12 2 12s0 4.178.418 5.814a2.6 2.6 0 001.838 1.848C5.875 20.083 12 20.083 12 20.083s6.125 0 7.744-.421a2.6 2.6 0 001.838-1.848C22 16.178 22 12 22 12s0-4.178-.418-5.814zM9.813 15.114V8.886l5.727 3.114-5.727 3.114z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-silver/40 gap-4">
            <p>&copy; {new Date().getFullYear()} Okonski Performance. כל הזכויות שמורות.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-silver/80 transition-colors">פרטי קשר</a>
              <a href="#" className="hover:text-silver/80 transition-colors">מיקום הקליניקה</a>
              <a href="#" className="hover:text-silver/80 transition-colors">מדיניות פרטיות</a>
              <a href="#" className="hover:text-silver/80 transition-colors">נגישות</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
