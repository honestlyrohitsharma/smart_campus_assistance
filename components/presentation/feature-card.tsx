import type React from "react"
import { Card, CardContent } from "@/components/ui/card"

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
  return (
    <Card className="h-full transition-all duration-300 hover:shadow-lg">
      <CardContent className="p-6 flex flex-col items-center text-center">
        <div className="mb-4 text-blue-600">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}
