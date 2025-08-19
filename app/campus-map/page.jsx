"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Search, Building, Home, BookOpen, Coffee, Utensils, Bike } from "lucide-react"
import Footer from "@/components/footer"

export default function CampusMapPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedLocation, setSelectedLocation] = useState(null)

  // Sample campus locations
  const locations = [
    { id: 1, name: "Main Building", category: "academic", description: "Administrative offices and classrooms" },
    { id: 2, name: "Computer Science Building", category: "academic", description: "CS department and labs" },
    { id: 3, name: "Library", category: "academic", description: "Central library and study areas" },
    { id: 4, name: "Student Center", category: "services", description: "Student services and activities" },
    { id: 5, name: "Cafeteria", category: "dining", description: "Main dining hall" },
    { id: 6, name: "Sports Complex", category: "recreation", description: "Gym and sports facilities" },
    { id: 7, name: "Hostel A", category: "residence", description: "Men's dormitory" },
    { id: 8, name: "Hostel B", category: "residence", description: "Women's dormitory" },
    { id: 9, name: "Parking Lot", category: "services", description: "Main parking area" },
  ]

  const filteredLocations = locations.filter((location) =>
    location.name.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleLocationSelect = (location) => {
    setSelectedLocation(location)
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case "academic":
        return <BookOpen className="h-5 w-5 text-blue-600" />
      case "services":
        return <Coffee className="h-5 w-5 text-purple-600" />
      case "dining":
        return <Utensils className="h-5 w-5 text-amber-600" />
      case "recreation":
        return <Bike className="h-5 w-5 text-green-600" />
      case "residence":
        return <Home className="h-5 w-5 text-red-600" />
      default:
        return <Building className="h-5 w-5 text-gray-600" />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Campus Map</h1>
          <p className="text-gray-500">Find your way around campus</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search locations..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Campus Locations</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y max-h-[400px] overflow-y-auto">
                  {filteredLocations.map((location) => (
                    <div
                      key={location.id}
                      className={`p-4 cursor-pointer hover:bg-gray-50 ${
                        selectedLocation?.id === location.id ? "bg-purple-50" : ""
                      }`}
                      onClick={() => handleLocationSelect(location)}
                    >
                      <div className="flex items-center">
                        {getCategoryIcon(location.category)}
                        <div className="ml-3">
                          <h3 className="font-medium">{location.name}</h3>
                          <p className="text-sm text-gray-500">{location.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {filteredLocations.length === 0 && (
                    <div className="p-4 text-center text-gray-500">No locations found matching your search</div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="w-full md:w-2/3">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="h-[500px] relative">
                <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
                  {selectedLocation ? (
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                      <h2 className="text-xl font-bold">{selectedLocation.name}</h2>
                      <p className="text-gray-500">{selectedLocation.description}</p>
                    </div>
                  ) : (
                    <div className="text-center p-6">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <h2 className="text-xl font-medium text-gray-600">Campus Map</h2>
                      <p className="text-gray-500 max-w-md mx-auto">
                        Select a location from the list to view it on the map. In a real application, this would display
                        an interactive map of the campus.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-2">
              <Button variant="outline" size="sm" className="flex items-center">
                <BookOpen className="h-4 w-4 mr-2" />
                Academic
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Home className="h-4 w-4 mr-2" />
                Residence
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                <Coffee className="h-4 w-4 mr-2" />
                Services
              </Button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
