export interface Brand {
  id: number;
  name: string;
  description: string;
  categories: string[];
  logo?: string;
  website?: string;
}

export const brands: Brand[] = [
  {
    id: 1,
    name: "Nike",
    description:
      "Global leader in athletic footwear, apparel, and equipment. Known for innovation and performance.",
    categories: ["Sports", "Footwear", "Apparel"],
    logo: "/logos/nike.svg",
    website: "https://nike.com",
  },
  {
    id: 2,
    name: "Adidas",
    description:
      "German multinational corporation that designs and manufactures sports shoes and clothing.",
    categories: ["Sports", "Footwear", "Lifestyle"],
    logo: "/logos/adidas.svg",
    website: "https://adidas.com",
  },
  {
    id: 3,
    name: "Puma",
    description:
      "Leading sports brand designing and developing footwear, apparel, and accessories.",
    categories: ["Sports", "Footwear", "Fashion"],
    logo: "/logos/puma.svg",
    website: "https://puma.com",
  },
  {
    id: 4,
    name: "Under Armour",
    description:
      "American sports equipment company that manufactures footwear and apparel.",
    categories: ["Sports", "Performance", "Apparel"],
    logo: "/logos/under-armour.svg",
    website: "https://underarmour.com",
  },
  {
    id: 5,
    name: "Reebok",
    description:
      "Global fitness and lifestyle brand offering innovative footwear and apparel.",
    categories: ["Fitness", "Footwear", "CrossFit"],
    logo: "/logos/reebok.svg",
    website: "https://reebok.com",
  },
  {
    id: 6,
    name: "New Balance",
    description:
      "American sports footwear and apparel brand that combines performance with heritage.",
    categories: ["Running", "Footwear", "Lifestyle"],
    logo: "/logos/new-balance.svg",
    website: "https://newbalance.com",
  },
  {
    id: 7,
    name: "Converse",
    description:
      "Iconic American brand known for its classic Chuck Taylor All Star sneakers.",
    categories: ["Lifestyle", "Footwear", "Casual"],
    logo: "/logos/converse.svg",
    website: "https://converse.com",
  },
  {
    id: 8,
    name: "Vans",
    description:
      "Southern California footwear and apparel brand rooted in skateboarding and youth culture.",
    categories: ["Skateboarding", "Footwear", "Streetwear"],
    logo: "/logos/vans.svg",
    website: "https://vans.com",
  },
  {
    id: 9,
    name: "The North Face",
    description:
      "American outdoor recreation company that sells clothing, footwear, and equipment.",
    categories: ["Outdoor", "Apparel", "Equipment"],
    logo: "/logos/north-face.svg",
    website: "https://thenorthface.com",
  },
];
