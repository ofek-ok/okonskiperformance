export type ConnectIconId =
  | "website"
  | "instagram"
  | "facebook"
  | "tiktok"
  | "email"
  | "whatsapp"
  | "linkedin";

export interface ConnectLinkItem {
  id: string;
  title: string;
  url: string;
  icon: ConnectIconId;
  enabled: boolean;
  order: number;
  description?: string;
}

export const CONNECT_BRAND = {
  name: "Okonski Performance",
  logoSrc: "/okonski-logo-updated.svg",
  logoAlt: "Okonski Performance",
  description:
    "ספורטתרפיה וטיפול גופני אישי: טיפול בכאבים, שיקום פציעות, תחזוקה גופנית שוטפת ושיפור התנועה והביצועים.",
} as const;

export const WHATSAPP_CONTACT = {
  id: "whatsapp",
  title: "שיחה ישירה בוואטסאפ",
  description: "מענה אישי לשאלות, התייעצות ותיאום ראשוני",
  url: "https://wa.me/972555172571",
  enabled: true,
} as const;

/**
 * Centralized link configuration for /connect.
 * Add, reorder, or toggle platforms here without modifying UI components.
 */
export const CONNECT_LINKS: ConnectLinkItem[] = [
  {
    id: "website",
    title: "האתר הרשמי",
    url: "https://okonskiperformance.com",
    icon: "website",
    enabled: true,
    order: 1,
    description: "תחומי הטיפול, התהליך והצטרפות לרשימת המתעניינים",
  },
  {
    id: "instagram",
    title: "Instagram",
    url: "https://www.instagram.com/okonski.performance/",
    icon: "instagram",
    enabled: true,
    order: 2,
    description: "@okonski.performance",
  },
  {
    id: "facebook",
    title: "Facebook",
    url: "https://www.facebook.com/share/18Pc4EghgP/?mibextid=wwXIfr",
    icon: "facebook",
    enabled: true,
    order: 3,
    description: "העמוד הרשמי של Okonski Performance",
  },
  {
    id: "tiktok",
    title: "TikTok",
    url: "https://www.tiktok.com/@okonskiperformanc",
    icon: "tiktok",
    enabled: true,
    order: 4,
    description: "@okonskiperformanc",
  },
  {
    id: "email",
    title: "דוא״ל עסקי",
    url: "mailto:okonski.preformance@gmail.com",
    icon: "email",
    enabled: true,
    order: 5,
    description: "okonski.preformance@gmail.com",
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    url: "https://www.linkedin.com/company/okonski-preformance",
    icon: "linkedin",
    enabled: false,
    order: 6,
    description: "Okonski Performance",
  },
];
