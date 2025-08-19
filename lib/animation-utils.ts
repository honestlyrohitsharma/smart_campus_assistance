import { cn } from "@/lib/utils"

// Animation classes for different elements
export const buttonAnimation = "transition-all duration-300 hover:scale-105 active:scale-95"
export const cardAnimation = "transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
export const tabAnimation = "transition-all duration-300"
export const menuItemAnimation = "transition-all duration-200 hover:bg-purple-50"
export const pageTransition = "animate-in fade-in duration-500"

// Function to combine animation classes with other classes
export function withAnimation(baseClasses: string, animationType: "button" | "card" | "tab" | "menuItem" | "page") {
  const animationMap = {
    button: buttonAnimation,
    card: cardAnimation,
    tab: tabAnimation,
    menuItem: menuItemAnimation,
    page: pageTransition,
  }

  return cn(baseClasses, animationMap[animationType])
}
