import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const numberPad = (number?: number) => {
  return (number ?? 0).toString().padStart(2, "0");
};
