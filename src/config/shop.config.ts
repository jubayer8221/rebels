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

export interface Category {
  id: number;
  name: string;
  image: string;
  path: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Shirts",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=1000",
    path: "/category/shirts",
  },
  {
    id: 2,
    name: "T-Shirts",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1000",
    path: "/category/tshirts",
  },
  {
    id: 3,
    name: "Pants",
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&q=80&w=1000",
    path: "/category/pants",
  },
  {
    id: 4,
    name: "Jackets",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=1000",
    path: "/category/jackets",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Ironwood Heavy Boxy Tee",
    price: 1450,
    oldPrice: 1850,
    image:
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=1000",
    category: "tshirts",
    isNew: true,
    inStock: true,
    fit: "Oversized",
    sizes: ["S", "M", "L", "XL", "XXL"],
    description:
      "280GSM heavy cotton. Engineered with a dropped shoulder and a wide, masculine boxy cut.",
  },
  {
    id: 2,
    name: "Phantom Essential Tee",
    price: 1100,
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000",
    category: "tshirts",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["M", "L", "XL"],
    description:
      "Premium combed cotton with a clean silicone-wash finish for a smooth feel.",
  },
  {
    id: 3,
    name: "Vandal Back-Print Tee",
    price: 1650,
    image:
      "https://images.unsplash.com/photo-1576566582419-43a0e0513904?q=80&w=1000",
    category: "tshirts",
    isNew: true,
    inStock: true,
    fit: "Oversized",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Street-art inspired graphic on the reverse side. High-density screen print.",
  },
  {
    id: 4,
    name: "Carbon Pocket Tee",
    price: 1300,
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?q=80&w=1000",
    category: "tshirts",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Functional chest pocket with reinforced stitching. Military-inspired colorway.",
  },
  {
    id: 5,
    name: "Acid Wash Men's Tee",
    price: 1550,
    image:
      "https://images.unsplash.com/photo-1622445172288-062489c450be?q=80&w=1000",
    category: "tshirts",
    isNew: false,
    inStock: true,
    fit: "Oversized",
    sizes: ["M", "L", "XL"],
    description:
      "Vintage-inspired acid wash. Every shirt features a unique distressed pattern.",
  },
  {
    id: 6,
    name: "Mono Stripe Tee",
    price: 1250,
    image:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1000",
    category: "tshirts",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Classic horizontal stripes in a heavyweight weave for a structured look.",
  },
  {
    id: 7,
    name: "Neo-Basics Longline Tee",
    price: 1400,
    image:
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?q=80&w=1000",
    category: "tshirts",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Extended length with a curved hem. Designed for layering under hoodies.",
  },
  {
    id: 8,
    name: "Rebel Heritage Tee",
    price: 950,
    oldPrice: 1250,
    image:
      "https://images.unsplash.com/photo-1554568218-0f1715e72254?q=80&w=1000",
    category: "tshirts",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Classic crew neck featuring our legacy logo on the left chest.",
  },

  // --- JACKETS (jackets) ---
  {
    id: 9,
    name: "Apex Technical Shell",
    price: 5800,
    oldPrice: 7200,
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1000",
    category: "jackets",
    isNew: true,
    inStock: true,
    fit: "Regular",
    sizes: ["M", "L", "XL"],
    description:
      "Tactical windbreaker with seam-sealed zippers and multi-pocket array.",
  },
  {
    id: 10,
    name: "Nightrider Leather Moto",
    price: 9200,
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1000",
    category: "jackets",
    isNew: true,
    inStock: true,
    fit: "Slim Fit",
    sizes: ["M", "L", "XL"],
    description: "Full-grain cowhide leather with heavy-duty YKK zippers.",
  },
  {
    id: 11,
    name: "Urban Sherpa Trucker",
    price: 4600,
    image:
      "https://images.unsplash.com/photo-1516253593875-bd7ba052fbc5?q=80&w=1000",
    category: "jackets",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Classic denim trucker lined with high-pile sherpa for insulation.",
  },
  {
    id: 12,
    name: "Stealth Bomber Jacket",
    price: 4200,
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=1000",
    category: "jackets",
    isNew: false,
    inStock: true,
    fit: "Slim Fit",
    sizes: ["S", "M", "L"],
    description:
      "Matte nylon shell with quilted interior and utility arm pocket.",
  },
  {
    id: 13,
    name: "Rugged Work-Coat",
    price: 5500,
    image:
      "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?q=80&w=1000",
    category: "jackets",
    isNew: true,
    inStock: true,
    fit: "Regular",
    sizes: ["M", "L", "XL", "XXL"],
    description:
      "Heavy canvas outer shell with flannel lining for field performance.",
  },
  {
    id: 14,
    name: "Reflective Windbreaker",
    price: 3400,
    image:
      "https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000",
    category: "jackets",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["S", "M", "L"],
    description:
      "Night-visibility tech fabric with breathable mesh underarm vents.",
  },
  {
    id: 15,
    name: "Quilted Utility Vest",
    price: 2900,
    image:
      "https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=1000",
    category: "jackets",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["M", "L", "XL"],
    description:
      "Lightweight insulation layer designed for transitional weather.",
  },

  // --- SHIRTS (shirts) ---
  {
    id: 16,
    name: "Bleached Denim Overshirt",
    price: 2950,
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000",
    category: "shirts",
    isNew: true,
    inStock: true,
    fit: "Oversized",
    sizes: ["M", "L", "XL"],
    description:
      "Heavyweight 12oz denim shirt with a custom bleach-wash finish.",
  },
  {
    id: 17,
    name: "Shadow Flannel Plaid",
    price: 2600,
    image:
      "https://images.unsplash.com/photo-1588359348347-9bc6cbb6cf97?q=80&w=1000",
    category: "shirts",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Brushed cotton flannel with a traditional button-down collar.",
  },
  {
    id: 18,
    name: "Classic Oxford Men's",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=1000",
    category: "shirts",
    isNew: false,
    inStock: true,
    fit: "Slim Fit",
    sizes: ["S", "M", "L", "XL"],
    description:
      "Tailored Oxford cloth for a sharp silhouette. Perfect for formal-casual.",
  },
  {
    id: 19,
    name: "Safari Utility Shirt",
    price: 3100,
    image:
      "https://images.unsplash.com/photo-1594932224030-940428619661?q=80&w=1000",
    category: "shirts",
    isNew: true,
    inStock: true,
    fit: "Regular",
    sizes: ["M", "L", "XL"],
    description:
      "Dual cargo chest pockets with flap closures. Rugged cotton poplin.",
  },
  {
    id: 20,
    name: "Blackout Resort Shirt",
    price: 2400,
    image:
      "https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?q=80&w=1000",
    category: "shirts",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["S", "M", "L"],
    description:
      "Breathable linen-viscose blend with a relaxed open camp collar.",
  },
  {
    id: 21,
    name: "Corduroy Work-Shirt",
    price: 3300,
    image:
      "https://images.unsplash.com/photo-1614031679232-0dae78680231?q=80&w=1000",
    category: "shirts",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["M", "L", "XL"],
    description:
      "Wale-textured corduroy. Durable enough to be worn as an overshirt.",
  },
  {
    id: 22,
    name: "Formal Night Silk-Shirt",
    price: 4800,
    image:
      "https://images.unsplash.com/photo-1607345366928-199ea26cdffe?q=80&w=1000",
    category: "shirts",
    isNew: true,
    inStock: false,
    fit: "Slim Fit",
    sizes: ["M", "L"],
    description:
      "Premium silk-blend fabric with hidden placket for a sleek look.",
  },

  // --- PANTS (pants) ---
  {
    id: 23,
    name: "Tactical Cargo V1",
    price: 3500,
    oldPrice: 4500,
    image:
      "https://images.unsplash.com/photo-1624372927054-06d649980663?q=80&w=1000",
    category: "pants",
    isNew: true,
    inStock: true,
    fit: "Regular",
    sizes: ["30", "32", "34", "36"],
    description: "Tough cotton twill with six-pocket functional layout.",
  },
  {
    id: 24,
    name: "Selvedge Raw Denim",
    price: 5200,
    image:
      "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=1000",
    category: "pants",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["30", "32", "34", "36"],
    description: "Unwashed indigo denim. Will form unique fades over time.",
  },
  {
    id: 25,
    name: "Stacked Black Jeans",
    price: 3900,
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?q=80&w=1000",
    category: "pants",
    isNew: true,
    inStock: true,
    fit: "Slim Fit",
    sizes: ["28", "30", "32", "34"],
    description:
      "Extra-long leg length to create the perfect stacked ankle look.",
  },
  {
    id: 26,
    name: "Obsidion Dress Chinos",
    price: 2800,
    image:
      "https://images.unsplash.com/photo-1473966968600-fa804b86862b?q=80&w=1000",
    category: "pants",
    isNew: false,
    inStock: true,
    fit: "Slim Fit",
    sizes: ["30", "32", "34", "36"],
    description:
      "Premium stretch chino fabric. A staple for the modern professional.",
  },
  {
    id: 27,
    name: "Nylon Street Trousers",
    price: 2900,
    image:
      "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?q=80&w=1000",
    category: "pants",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["S", "M", "L", "XL"],
    description: "Water-resistant tech nylon with elasticated bungee cuffs.",
  },
  {
    id: 28,
    name: "Relaxed Pleated Pant",
    price: 3800,
    image:
      "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1000",
    category: "pants",
    isNew: true,
    inStock: true,
    fit: "Oversized",
    sizes: ["30", "32", "34"],
    description:
      "High-fashion silhouette with a wide leg and sharp front pleats.",
  },
  {
    id: 29,
    name: "Heavy Terry Joggers",
    price: 2200,
    image:
      "https://images.unsplash.com/photo-1484516396415-4bf74643075c?q=80&w=1000",
    category: "pants",
    isNew: false,
    inStock: true,
    fit: "Regular",
    sizes: ["S", "M", "L", "XL"],
    description:
      "400GSM french terry cotton for the ultimate street-lounge comfort.",
  },
  {
    id: 30,
    name: "Graphite Work-Cargo",
    price: 3600,
    image:
      "https://images.unsplash.com/photo-1517445312882-bc9910d016b7?q=80&w=1000",
    category: "pants",
    isNew: true,
    inStock: true,
    fit: "Regular",
    sizes: ["30", "32", "34", "36"],
    description:
      "Reinforced seat and knees for durability in any urban environment.",
  },
];
