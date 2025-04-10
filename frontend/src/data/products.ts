
import { Product, Category } from '../lib/types';

export const products: Product[] = [
  {
    id: 1,
    name: "Olympic Barbell - 20kg",
    price: 249.99,
    description: "Professional grade Olympic barbell with knurled grips and smooth spin. Perfect for all compound lifts.",
    features: [
      "20kg weight",
      "28mm diameter",
      "Dual knurl marks",
      "Tensile strength: 190,000 PSI",
      "Suitable for Olympic lifting"
    ],
    category: "bars",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 15,
    rating: 4.8,
    reviews: 124,
    isFeatured: true
  },
  {
    id: 2,
    name: "Adjustable Dumbbell Set - 5-52.5 lbs",
    price: 399.99,
    description: "Space-saving adjustable dumbbells that replace 15 sets of weights. Adjust with the turn of a dial.",
    features: [
      "Adjustable from 5 to 52.5 lbs",
      "Replaces 15 pairs of dumbbells",
      "Quick adjustment dial",
      "Durable metal construction",
      "Storage tray included"
    ],
    category: "dumbbells",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 8,
    rating: 4.9,
    reviews: 89,
    isFeatured: true
  },
  {
    id: 3,
    name: "Power Rack with Lat Pulldown",
    price: 799.99,
    originalPrice: 899.99,
    description: "Complete home gym power rack with pull-up bar, J-cups, safety bars and lat pulldown attachment.",
    features: [
      "1000 lb weight capacity",
      "Multiple bar hooks",
      "Safety spotter arms",
      "Pull-up bar",
      "Cable pulldown system"
    ],
    category: "racks",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 5,
    rating: 4.7,
    reviews: 56,
    isOnSale: true
  },
  {
    id: 4,
    name: "Rubber Hex Dumbbell - 15kg (Pair)",
    price: 129.99,
    description: "Hex-shaped rubber dumbbells that won't roll away. Knurled chrome handles for secure grip.",
    features: [
      "15kg each (pair)",
      "Hex shape prevents rolling",
      "Rubber encased heads",
      "Knurled chrome handles",
      "Solid cast construction"
    ],
    category: "dumbbells",
    image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 12,
    rating: 4.6,
    reviews: 43
  },
  {
    id: 5,
    name: "Adjustable Weight Bench",
    price: 279.99,
    description: "Heavy-duty adjustable bench with multiple incline positions from flat to 90 degrees.",
    features: [
      "7 adjustable positions",
      "800 lb capacity",
      "Stable base",
      "Thick padding",
      "Transport wheels"
    ],
    category: "benches",
    image: "https://images.unsplash.com/photo-1598289431512-b91a5feae985?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 7,
    rating: 4.5,
    reviews: 76,
    isFeatured: true
  },
  {
    id: 6,
    name: "Kettlebell - 16kg",
    price: 59.99,
    description: "Cast iron kettlebell with a comfortable grip for swings, squats, and other dynamic exercises.",
    features: [
      "16kg weight",
      "Powder coated finish",
      "Flat bottom design",
      "Color-coded handle",
      "Single piece casting"
    ],
    category: "kettlebells",
    image: "https://images.unsplash.com/photo-1603455778928-66e293d503a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 20,
    rating: 4.7,
    reviews: 38
  },
  {
    id: 7,
    name: "Bumper Plate Set - 150kg",
    price: 699.99,
    originalPrice: 799.99,
    description: "Color-coded rubber bumper plates for Olympic lifting. Bounces safely with minimal noise.",
    features: [
      "150kg total (2x25kg, 2x20kg, 2x15kg, 2x10kg, 2x5kg)",
      "Standard 50.4mm center hole",
      "Color-coded by weight",
      "Stainless steel insert",
      "Low bounce rubber"
    ],
    category: "weights",
    image: "https://images.unsplash.com/photo-1583500178540-28d0381c8a61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 4,
    rating: 4.9,
    reviews: 29,
    isOnSale: true
  },
  {
    id: 8,
    name: "TRX Suspension Trainer",
    price: 149.99,
    description: "Professional suspension training system for full-body workouts anywhere.",
    features: [
      "Supports up to 350 lbs",
      "Indoor and outdoor anchors",
      "Adjustable straps",
      "Travel bag included",
      "Training guide"
    ],
    category: "accessories",
    image: "https://images.unsplash.com/photo-1634979149798-e9a118734e51?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    stock: 18,
    rating: 4.6,
    reviews: 64
  }
];

export const categories: Category[] = [
  {
    id: 1,
    name: "Barbells & Bars",
    image: "https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 12
  },
  {
    id: 2,
    name: "Dumbbells",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 15
  },
  {
    id: 3,
    name: "Racks & Cages",
    image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 8
  },
  {
    id: 4,
    name: "Weight Benches",
    image: "https://images.unsplash.com/photo-1598289431512-b91a5feae985?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 6
  },
  {
    id: 5,
    name: "Kettlebells",
    image: "https://images.unsplash.com/photo-1603455778928-66e293d503a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 9
  },
  {
    id: 6,
    name: "Weight Plates",
    image: "https://images.unsplash.com/photo-1583500178540-28d0381c8a61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    productCount: 14
  }
];

// Helper to get product by ID
export const getProductById = (id: number): Product | undefined => {
  return products.find(product => product.id === id);
};

// Helper to get products by category
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Helper to get featured products
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isFeatured);
};

// Helper to get products on sale
export const getProductsOnSale = (): Product[] => {
  return products.filter(product => product.isOnSale);
};
