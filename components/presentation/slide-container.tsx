"use client"

import React, { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SlideContainerProps {
  children: React.ReactNode[]
}

export function SlideContainer({ children }: SlideContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const totalSlides = React.Children.count(children)

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1 && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide(currentSlide + 1)
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0 && !isTransitioning) {
      setIsTransitioning(true)
      setCurrentSlide(currentSlide - 1)
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsTransitioning(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentSlide])

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      nextSlide()
    } else if (e.key === "ArrowLeft") {
      prevSlide()
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [currentSlide])

  return (
    <div className="relative w-full h-screen bg-gray-50 overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div className="min-w-full h-full flex-shrink-0">{child}</div>
        ))}
      </div>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute bottom-4 left-4">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="mr-2 bg-white"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          disabled={currentSlide === totalSlides - 1}
          className="bg-white"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <div className="absolute bottom-4 right-4 text-sm text-gray-500">
        Slide {currentSlide + 1} of {totalSlides}
      </div>
    </div>
  )
}
