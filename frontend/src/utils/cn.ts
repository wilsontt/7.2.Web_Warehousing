import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * 合併 Tailwind CSS Class 工具
 * 整合 clsx (條件判斷) 與 tailwind-merge (衝突解決)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
