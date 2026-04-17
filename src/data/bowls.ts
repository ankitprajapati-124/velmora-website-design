import bowl1 from "@/assets/bowl-1.jpg";
import bowl2 from "@/assets/bowl-2.jpg";
import bowl3 from "@/assets/bowl-3.jpg";
import bowl4 from "@/assets/bowl-4.jpg";

export type Category = "Exotic" | "Protein Bowls" | "Classic" | "Detox";

export type Bowl = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
};

const images = [bowl1, bowl2, bowl3, bowl4];
const img = (i: number) => images[i % images.length];

export const bowls: Bowl[] = [
  { id: "1", name: "Velmora Royale", description: "Dragon fruit, pomegranate, kiwi, and gold leaf garnish.", price: 449, category: "Exotic", image: img(0) },
  { id: "2", name: "Berry Noir", description: "Wild blueberries, blackberries, raspberries with vanilla yogurt.", price: 379, category: "Protein Bowls", image: img(1) },
  { id: "3", name: "Verde Reset", description: "Kiwi, green apple, mint, chia, and matcha glaze.", price: 339, category: "Detox", image: img(2) },
  { id: "4", name: "Sunset Classic", description: "Watermelon, pineapple, orange, and seedless grapes.", price: 289, category: "Classic", image: img(3) },
  { id: "5", name: "Mango Atelier", description: "Alphonso mango, passion fruit, and toasted coconut.", price: 399, category: "Exotic", image: img(0) },
  { id: "6", name: "Almond Bloom", description: "Greek yogurt, honey, almonds, strawberries.", price: 369, category: "Protein Bowls", image: img(1) },
  { id: "7", name: "Citrus Cleanse", description: "Grapefruit, orange, lemon zest, mint leaves.", price: 319, category: "Detox", image: img(2) },
  { id: "8", name: "Heritage Mix", description: "Apple, banana, papaya, seasonal melon.", price: 269, category: "Classic", image: img(3) },
  { id: "9", name: "Lychee Reverie", description: "Lychee, rambutan, dragon fruit, rose petals.", price: 459, category: "Exotic", image: img(0) },
  { id: "10", name: "Power Granola", description: "Açaí base, banana, granola, peanut butter drizzle.", price: 389, category: "Protein Bowls", image: img(1) },
  { id: "11", name: "Aloe Bloom", description: "Aloe, cucumber, kiwi, basil seeds, lime.", price: 329, category: "Detox", image: img(2) },
  { id: "12", name: "Garden Classic", description: "Strawberry, banana, apple, blueberry medley.", price: 279, category: "Classic", image: img(3) },
  { id: "13", name: "Passion Noir", description: "Passion fruit, fig, blackberry, dark honey.", price: 419, category: "Exotic", image: img(0) },
  { id: "14", name: "Velmora Vital", description: "Skyr, banana, walnut, dates, cacao nibs.", price: 399, category: "Protein Bowls", image: img(1) },
  { id: "15", name: "Cucumber Mint", description: "Cucumber, watermelon, mint, lime, sea salt.", price: 309, category: "Detox", image: img(2) },
  { id: "16", name: "Tropical Classic", description: "Pineapple, papaya, mango, lime wedge.", price: 299, category: "Classic", image: img(3) },
  { id: "17", name: "Black Fig Velvet", description: "Black figs, pomegranate, cashews, balsamic glaze.", price: 469, category: "Exotic", image: img(0) },
  { id: "18", name: "Nordic Protein", description: "Skyr, lingonberry, oats, pumpkin seeds.", price: 379, category: "Protein Bowls", image: img(1) },
  { id: "19", name: "Green Glow", description: "Spinach base, banana, kiwi, spirulina drizzle.", price: 349, category: "Detox", image: img(2) },
  { id: "20", name: "Orchard Classic", description: "Pear, apple, grape, plum slices.", price: 269, category: "Classic", image: img(3) },
  { id: "21", name: "Gold Rush", description: "Mango, papaya, saffron honey, pistachio dust.", price: 429, category: "Exotic", image: img(0) },
  { id: "22", name: "Cocoa Strength", description: "Banana, cocoa, almond butter, hemp seeds.", price: 399, category: "Protein Bowls", image: img(1) },
  { id: "23", name: "Pure Reset", description: "Celery, apple, parsley, lemon, ginger.", price: 339, category: "Detox", image: img(2) },
  { id: "24", name: "Summer Classic", description: "Strawberry, kiwi, banana, orange slices.", price: 279, category: "Classic", image: img(3) },
  { id: "25", name: "Velmora Signature", description: "Chef's curated daily selection of seasonal best.", price: 499, category: "Exotic", image: img(0) },
];

export const categories: Array<"All" | Category> = ["All", "Exotic", "Protein Bowls", "Classic", "Detox"];
