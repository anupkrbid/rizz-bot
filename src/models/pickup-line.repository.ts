import { pickupLines } from "./db.js";

// Function to get a completely random pickup line
export function getRandomPickUpLine(): string {
  const categories = Object.keys(pickupLines);
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  return getRandomPickUpLineByCategory(randomCategory);
}

// Function to get a random pickup line from a category
export function getRandomPickUpLineByCategory(category: string): string {
  const lines = pickupLines[category];
  if (!lines) return "Category not found!";
  const randomIndex = Math.floor(Math.random() * lines.length);
  return lines[randomIndex];
}
