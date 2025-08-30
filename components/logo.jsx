"use client"

import { useTheme } from "@/components/theme-provider"
import Image from "next/image"

export function Logo({ className = "h-12 w-auto object-contain" }) {
  const { theme } = useTheme()
  
  // Use different logo based on theme
  const logoSrc = theme === "dark" ? "/logoDark.png" : "/logoLight.png"
  
  return (
    <Image 
      src={logoSrc} 
      alt="FinSync logo" 
      height={100} 
      width={100} 
      className={className}
    />
  )
}
