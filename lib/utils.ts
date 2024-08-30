import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function truncateToSentences(text: string, maxSentences: number = 2): string {
  const strippedText = text.replace(/<\/?[^>]+(>|$)/g, "");
  const sentences = strippedText.match(/[^\.!\?]+[\.!\?]+/g) || [];
  return sentences.slice(0, maxSentences).join(' ').trim();
}
