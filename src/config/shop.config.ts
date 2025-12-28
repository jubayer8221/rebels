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
  image: string;
  category: string;
}

// Example categories
export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Shirts",
    image: "/image/t-shit/2_38.png",
    path: "/shop/shirts",
  },
  {
    id: 2,
    name: "T-Shirts",
    image: "/image/t-shit/2_38.png",
    path: "/shop/tshirts",
  },
  {
    id: 3,
    name: "Pants",
    image: "/image/t-shit/2_38.png",
    path: "/shop/pants",
  },
  {
    id: 4,
    name: "Jackets",
    image: "/image/t-shit/2_38.png",
    path: "/shop/jackets",
  },
];

// Example products
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Slim Fit Shirt",
    price: 29.99,
    image: "/image/t-shit/2_38.png",
    category: "Shirts",
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    price: 19.99,
    image: "/image/t-shit/2_38.png",
    category: "T-Shirts",
  },
  {
    id: 3,
    name: "Chino Pants",
    price: 39.99,
    image: "/image/t-shit/2_38.png",
    category: "Pants",
  },
  {
    id: 4,
    name: "Leather Jacket",
    price: 99.99,
    image: "/image/t-shit/2_38.png",
    category: "Jackets",
  },
];
