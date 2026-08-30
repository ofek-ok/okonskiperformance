const fs = require('fs');
let content = fs.readFileSync('components/FooterCTA.tsx', 'utf8');

const newFooterLinks = `
            <div className="flex flex-wrap justify-center gap-4 text-center">
              <Link href="/terms" className="hover:text-silver/80 transition-colors">תנאי שימוש</Link>
              <Link href="/privacy" className="hover:text-silver/80 transition-colors">מדיניות פרטיות</Link>
              <Link href="/accessibility" className="hover:text-silver/80 transition-colors">הצהרת נגישות</Link>
              <Link href="/disclaimer" className="hover:text-silver/80 transition-colors">הבהרה מקצועית ובריאותית</Link>
              <button id="cookie-settings-btn" className="hover:text-silver/80 transition-colors">הגדרות עוגיות</button>
              <Link href="#performance-list" className="hover:text-silver/80 transition-colors">צור קשר</Link>
            </div>
`;

content = content.replace(/<div className="flex gap-4">[\s\S]*?<\/div>/, newFooterLinks);

fs.writeFileSync('components/FooterCTA.tsx', content);
