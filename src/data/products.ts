export interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  description: string;
  benefits: string[];
  howToUse: string;
  ingredients?: string[];
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Formula 1 Nutritional Shake Mix - 500g Balanced Meal Alternative",
    category: "Weight Management",
    price: "₹1,480",
    image: "/images/TopSelling1.png",
    description:
      "A delicious and nutritious meal replacement shake with high-quality protein, essential vitamins and minerals.",
    benefits: [
      "High in protein (9g per serving)",
      "24 essential vitamins and minerals",
      "Only 170 calories per serving",
      "Helps maintain healthy weight",
      "Supports lean muscle mass",
    ],
    howToUse:
      "Mix 2 scoops (25g) with 250ml of cold skimmed milk. Blend or shake vigorously. Best consumed as breakfast or dinner replacement.",
    ingredients: [
      "Soy protein isolate",
      "Fructose",
      "Vitamins & minerals",
      "Natural flavors",
    ],
    featured: true,
  },
  {
    id: 2,
    name: "Herbalife Personalized Protein Powder 200 g",
    category: "Energy & Fitness",
    price: "₹1,099",
    image: "/images/TopSelling2.png",
    description:
      "Support your fitness goals with the versatile and nutrient-rich Personalized Protein Powder. Designed to provide high-quality protein that meets your unique nutritional needs, this powder is perfect for anyone looking to build lean muscle, manage weight, or maintain a balanced diet.",
    benefits: [
      "Natural caffeine from green tea",
      "Antioxidant properties",
      "Supports healthy metabolism",
      "Low calorie (less than 5 calories)",
      "Refreshing and energizing",
    ],
    howToUse:
      "Mix 1/2 teaspoon with 150ml hot water. Can be enjoyed hot or cold. Consume 1-3 times daily.",
    ingredients: [
      "Green tea extract",
      "Orange pekoe tea",
      "Cardamom",
      "Natural flavors",
    ],
    featured: true,
  },
  {
    id: 3,
    name: "Herbalife Nutrition Afresh Energy Drink Mix (Ginger, 50 g)",
    category: "Energy & Fitness",
    price: "₹546",
    image: "/images/TopSelling3.jpg",
    description: "High-protein snack for active lifestyles",
    benefits: [
      "10g of high-quality protein",
      "Convenient on-the-go snack",
      "Helps maintain energy levels",
      "Supports muscle recovery",
      "Delicious vanilla almond flavor",
    ],
    howToUse:
      "Enjoy 1-2 bars daily as a snack between meals or post-workout. Store in a cool, dry place.",
    featured: true,
  },
  {
    id: 4,
    name: "Multivitamin Mineral & Herbal Tablets Plus ",
    category: "Nutrition",
    price: "₹1,599",
    image: "/images/Shop4.png",
    description:
      "Complete daily multivitamin providing essential nutrients for optimal health and wellbeing.",
    benefits: [
      "23 essential vitamins and minerals",
      "Supports immune system",
      "Helps maintain energy levels",
      "Promotes overall health",
      "Easy-to-swallow tablets",
    ],
    howToUse:
      "Take 1 tablet daily with food and water, preferably with breakfast.",
  },
  {
    id: 5,
    name: "HN Skin Booster",
    category: "Nutrition",
    price: "₹2,999",
    image: "/images/Shop5.png",
    description:
      "Pure aloe vera concentrate that supports digestive health and overall wellness.",
    benefits: [
      "Supports digestive health",
      "Helps maintain healthy gut",
      "Soothes and cleanses",
      "Rich in vitamins and minerals",
      "Natural and pure",
    ],
    howToUse:
      "Mix 15-30ml (1-2 tablespoons) with 120ml of water or juice. Consume 1-3 times daily.",
  },
  {
    id: 6,
    name: "ShakeMate",
    category: "Weight Management",
    price: "₹1,950",
    image: "/images/Shop6.png",
    description:
      "Advanced formula that helps eliminate excess water and supports healthy kidney function.",
    benefits: [
      "Helps eliminate excess water",
      "Supports kidney function",
      "Contains potassium",
      "Natural diuretic herbs",
      "Supports weight management goals",
    ],
    howToUse: "Take 2 tablets twice daily with meals and plenty of water.",
  },
  {
    id: 7,
    name: "H24 Rebuild Strength",
    category: "Energy & Fitness",
    price: "₹2,850",
    image: "/images/Shop7.png",
    description:
      "Nighttime formula that supports circulation and cardiovascular health while you sleep.",
    benefits: [
      "Supports nitric oxide production",
      "Promotes healthy circulation",
      "Supports cardiovascular health",
      "Contains L-Arginine and L-Citrulline",
      "Pleasant lemon flavor",
    ],
    howToUse:
      "Mix 1 scoop with 120ml water and consume before bedtime on an empty stomach.",
  },
  {
    id: 8,
    name: "Cell Activator",
    category: "Personal Care",
    price: "₹2,200",
    image: "/images/Shop8.png",
    description:
      "Advanced skincare supplement that nourishes skin from within for a healthy, radiant glow.",
    benefits: [
      "Supports healthy skin from within",
      "Contains collagen peptides",
      "Rich in antioxidants",
      "Promotes skin elasticity",
      "Supports natural skin renewal",
    ],
    howToUse:
      "Take 1 tablet daily with food and plenty of water for best results.",
  },
];

export const categories = [
  "All Products",
  "Weight Management",
  "Energy & Fitness",
  "Nutrition",
  "Personal Care",
];
