import type React from "react"

interface SlideProps {
  title?: string
  subtitle?: string
  children: React.ReactNode
  bgColor?: string
}

export function Slide({ title, subtitle, children, bgColor = "bg-white" }: SlideProps) {
  return (
    <div className={`w-full h-full flex flex-col ${bgColor}`}>
      <div className="p-10 flex-1 flex flex-col">
        {title && <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>}
        {subtitle && <h3 className="text-xl text-gray-600 mb-6">{subtitle}</h3>}
        <div className="flex-1 flex flex-col justify-center">{children}</div>
      </div>
      <div className="p-4 bg-blue-600 text-white text-sm">Smart Campus Assistant</div>
    </div>
  )
}
