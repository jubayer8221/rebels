export interface NavItem {
  id: number;
  label: string;
  path: string;
}

// export const NAV_ITEMS: NavItem[] = [
//   { id: 1, label: "Home", path: "/" },
//   { id: 2, label: "Shop", path: "/shop" },
//   { id: 3, label: "Categories", path: "/categories" },
//   { id: 4, label: "New Arrivals", path: "/new-arrivals" },
//   { id: 5, label: "About", path: "/about" },
//   { id: 6, label: "Contact", path: "/contact" },
// ];

export const NAV_ITEMS = [
  { id: 1, label: "Home", path: "/" },
  {
    id: 2,
    label: "Shop",
    path: "/category",
    children: [
      { id: 21, label: "All Collections", path: "/category" },
      { id: 22, label: "T-Shirts", path: "/category/tshirts" },
      { id: 23, label: "Jackets", path: "/category/jackets" },
      { id: 24, label: "Pants", path: "/category/pants" },
    ],
  },
  { id: 3, label: "New Arrivals", path: "/new-arrivals" },
  { id: 4, label: "About", path: "/about" },
  { id: 5, label: "Contact", path: "/contact" },
];
