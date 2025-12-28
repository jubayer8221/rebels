export interface NavItem {
  id: number;
  label: string;
  path: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 1, label: "Home", path: "/" },
  { id: 2, label: "Shop", path: "/shop" },
  { id: 3, label: "Categories", path: "/categories" },
  { id: 4, label: "New Arrivals", path: "/new-arrivals" },
  { id: 5, label: "About", path: "/about" },
  { id: 6, label: "Contact", path: "/contact" },
];
