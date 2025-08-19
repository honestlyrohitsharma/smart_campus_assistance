"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface RippleButtonProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
}

export function RippleButton({ className, children, ...props }: RippleButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; size: number; id: number }[]>([])
  const [nextId, setNextId] = useState(0)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget
    const rect = button.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const size = Math.max(rect.width, rect.height) * 2

    setRipples([...ripples, { x, y, size, id: nextId }])
    setNextId(nextId + 1)
  }

  useEffect(() => {
    if (ripples.length > 0) {
      const timer = setTimeout(() => {
        setRipples(ripples.slice(1))
      }, 600)

      return () => clearTimeout(timer)
    }
  }, [ripples])

  return (
    <Button className={cn("relative overflow-hidden", className)} onClick={handleClick} {...props}>
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full pointer-events-none animate-ripple"
          style={{
            left: ripple.x - ripple.size / 2,
            top: ripple.y - ripple.size / 2,
            width: ripple.size,
            height: ripple.size,
          }}
        />
      ))}
      {children}
    </Button>
  )
}
