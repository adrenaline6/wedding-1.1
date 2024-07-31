import clsx, { ClassValue } from "clsx";
import dayjs from "dayjs";
import { twMerge } from "tailwind-merge";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
dayjs.extend(utc);
dayjs.extend(timezone);
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));

export const numberPad = (number?: number) => {
  return (number ?? 0).toString().padStart(2, "0");
};

export const getDayJs = (timeStamp: number) => {
  return dayjs.unix(timeStamp).tz("Asia/Ho_Chi_Minh");
};
