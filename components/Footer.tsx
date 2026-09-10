import Link from "next/link";
export default function Footer() {
  return (
    <footer className="bg-primary border-t border-white/5 pt-16 pb-8">
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
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm text-secondary-text gap-4">
          <p>&copy; {new Date().getFullYear()} Okonski Performance. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6 text-center">
            <Link href="/terms" className="hover:text-white transition-colors">תנאי שימוש</Link>
            <Link href="/privacy" className="hover:text-white transition-colors">מדיניות פרטיות</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors">הצהרת נגישות</Link>
            <Link href="/disclaimer" className="hover:text-white transition-colors">הבהרה מקצועית ובריאותית</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
