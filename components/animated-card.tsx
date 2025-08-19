"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnimatedCardProps extends React.ComponentProps<typeof Card> {
  delay?: number
  children: React.ReactNode
}

export function AnimatedCard({ delay = 0, className, children, ...props }: AnimatedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={cn(
        "transition-all duration-500 transform",
        isHovered ? "scale-[1.03] -translate-y-1" : "",
        `animate-fade-in animation-delay-${delay * 1000}`,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card className={cn("transition-all duration-300", isHovered ? "shadow-xl" : "shadow-md", className)} {...props}>
        {children}
      </Card>
    </div>
  )
}

export function AnimatedCardHeader(props: React.ComponentProps<typeof CardHeader>) {
  return <CardHeader {...props} />
}

export function AnimatedCardTitle(props: React.ComponentProps<typeof CardTitle>) {
  return <CardTitle {...props} />
}

export function AnimatedCardDescription(props: React.ComponentProps<typeof CardDescription>) {
  return <CardDescription {...props} />
}

export function AnimatedCardContent(props: React.ComponentProps<typeof CardContent>) {
  return <CardContent {...props} />
}

export function AnimatedCardFooter(props: React.ComponentProps<typeof CardFooter>) {
  return <CardFooter {...props} />
}
