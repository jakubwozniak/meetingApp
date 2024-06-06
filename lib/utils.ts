import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getFormattedDate = (date: Date) => {
  return date.toLocaleString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const getFormattedTime = (date: Date) => {
  return date.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });
};
