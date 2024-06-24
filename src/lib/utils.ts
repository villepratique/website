import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatPrice = (price : number) =>{


  // const formatter = new Intl.NumberFormat('bf-BF', { style: 'currency', currency: 'CFA' })

  const formatter = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
  return formatter.format(
    price,
  );

  // const formatter = new Intl.NumberFormat("en-US",{

  // })
}