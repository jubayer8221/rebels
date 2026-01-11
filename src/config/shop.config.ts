export interface Category {
  id: number;
  name: string;
  image: string;
  path: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number; // Optional: used for showing discounts
  image: string;
  category: string;
  isNew?: boolean; // Optional: shows "NEW" badge
  inStock: boolean; // To handle "Sold Out" status
}

export interface Category {
  id: number;
  name: string;
  image: string;
  path: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string; // This MUST match the slug in the URL
  isNew?: boolean;
  inStock: boolean;
  fit: "Oversized" | "Regular" | "Slim Fit";
  sizes: string[];
  description: string;
}

const HIGH_QUALITY_IMAGE =
  "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?auto=format&fit=crop&q=80&w=1920";

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Shirts",
    image: HIGH_QUALITY_IMAGE,
    path: "/category/tshirts",
  },
  {
    id: 2,
    name: "T-Shirts",
    image: HIGH_QUALITY_IMAGE,
    path: "/category/tshirts",
  },
  { id: 3, name: "Pants", image: HIGH_QUALITY_IMAGE, path: "/category/pants" },
  {
    id: 4,
    name: "Jackets",
    image: HIGH_QUALITY_IMAGE,
    path: "/category/jackets",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Nightshade Oversized Tee",
    price: 1450,
    oldPrice: 1850,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1920",
    category: "tshirts",
    isNew: true,
    inStock: true,
    fit: "Oversized",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Heavyweight 240GSM cotton with dropped shoulders and a premium matte finish.",
  },
  {
    id: 2,
    name: "Void Technical Jacket",
    price: 5200,
    oldPrice: 6500,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1920",
    category: "jackets",
    isNew: true,
    inStock: true,
    fit: "Regular",
    sizes: ["M", "L", "XL"],
    description:
      "Water-resistant shell with modular pockets and adjustable bungee hem.",
  },
  {
    id: 3,
    name: "Raw Edge Denim Shirt",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1920",
    category: "shirts",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["S", "M", "L"],
    description:
      "Hand-distressed denim shirt featuring mother-of-pearl buttons and a vintage wash.",
  },
  {
    id: 4,
    name: "Cargo Utility Pants",
    price: 3400,
    oldPrice: 4200,
    image:
      "https://images.unsplash.com/photo-1624372927054-06d649980663?q=80&w=1920",
    category: "pants",
    isNew: false,
    inStock: true,
    fit: "Slim Fit",
    sizes: ["30", "32", "34", "36"],
    description:
      "Multi-pocket construction with reinforced knee panels and a tapered fit.",
  },
  {
    id: 5,
    name: "Asphalt Graphic Hoodie",
    price: 3800,
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1920",
    category: "jackets",
    isNew: true,
    inStock: true,
    fit: "Oversized",
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "Screen-printed 'Rebels' logo on ultra-soft French Terry fleece.",
  },
  {
    id: 6,
    name: "Stone Wash Tee",
    price: 950,
    oldPrice: 1200,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1920",
    category: "tshirts",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["S", "M", "L"],
    description:
      "Eco-friendly dye with a soft-hand feel and reinforced collar.",
  },
  {
    id: 7,
    name: "Obsidian Chinos",
    price: 2900,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa804b86862b?q=80&w=1920",
    category: "pants",
    isNew: false,
    inStock: false,
    fit: "Slim Fit",
    sizes: ["30", "32", "34"],
    description: "Four-way stretch fabric designed for comfort and mobility.",
  },
  {
    id: 8,
    name: "Flannel Plaid Overcoat",
    price: 4500,
    oldPrice: 5800,
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1920",
    category: "shirts",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["M", "L", "XL"],
    description:
      "Layering essential with heavy flannel wool-blend for maximum warmth.",
  },
];
