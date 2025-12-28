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
    image: "/image/categories/shirts.jpg",
    path: "/shop/shirts",
  },
  {
    id: 2,
    name: "T-Shirts",
    image: "/image/categories/tshirts.jpg",
    path: "/shop/tshirts",
  },
  {
    id: 3,
    name: "Pants",
    image: "/image/categories/pants.jpg",
    path: "/shop/pants",
  },
  {
    id: 4,
    name: "Jackets",
    image: "/image/categories/jackets.jpg",
    path: "/shop/jackets",
  },
];

// Example products
export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Slim Fit Shirt",
    price: 29.99,
    image: "/image/products/shirt1.jpg",
    category: "Shirts",
  },
  {
    id: 2,
    name: "Casual T-Shirt",
    price: 19.99,
    image: "/image/products/tshirt1.jpg",
    category: "T-Shirts",
  },
  {
    id: 3,
    name: "Chino Pants",
    price: 39.99,
    image: "/image/products/pants1.jpg",
    category: "Pants",
  },
  {
    id: 4,
    name: "Leather Jacket",
    price: 99.99,
    image: "/image/products/jacket1.jpg",
    category: "Jackets",
  },
];
