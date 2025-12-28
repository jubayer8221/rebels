export interface FooterLink {
  id: number;
  label: string;
  path: string;
}

export const QUICK_LINKS: FooterLink[] = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Shop", path: "/shop" },
  { id: 3, label: "Categories", path: "/categories" },
  { id: 4, label: "About", path: "/about" },
  { id: 5, label: "Contact", path: "/contact" },
];

export const SUPPORT_LINKS: FooterLink[] = [
  { id: 1, label: "FAQ", path: "/faq" },
  { id: 2, label: "Shipping", path: "/shipping" },
  { id: 3, label: "Returns", path: "/returns" },
];

export const SOCIAL_LINKS = [
  {
    id: 1,
    label: "Instagram",
    icon: "instagram",
    url: "https://instagram.com",
  },
  { id: 2, label: "Facebook", icon: "facebook", url: "https://facebook.com" },
  { id: 3, label: "Twitter", icon: "twitter", url: "https://twitter.com" },
];
