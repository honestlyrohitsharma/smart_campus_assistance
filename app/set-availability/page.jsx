"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, Save } from "lucide-react"
import Footer from "@/components/footer"

export default function SetAvailabilityPage() {
  const router = useRouter()
  const [userType, setUserType] = useState(null)
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const [availabilityData, setAvailabilityData] = useState({
    monday: { available: true, startTime: "09:00", endTime: "17:00", location: "Room 301" },
    tuesday: { available: true, startTime: "09:00", endTime: "17:00", location: "Room 301" },
    wednesday: { available: true, startTime: "09:00", endTime: "17:00", location: "Room 301" },
    thursday: { available: true, startTime: "09:00", endTime: "17:00", location: "Room 301" },
    friday: { available: true, startTime: "09:00", endTime: "17:00", location: "Room 301" },
    saturday: { available: false, startTime: "09:00", endTime: "13:00", location: "Room 301" },
  })
  const [officeHours, setOfficeHours] = useState({
    monday: { enabled: true, startTime: "14:00", endTime: "16:00" },
    tuesday: { enabled: true, startTime: "14:00", endTime: "16:00" },
    wednesday: { enabled: true, startTime: "14:00", endTime: "16:00" },
    thursday: { enabled: true, startTime: "14:00", endTime: "16:00" },
    friday: { enabled: true, startTime: "14:00", endTime: "16:00" },
    saturday: { enabled: false, startTime: "10:00", endTime: "12:00" },
  })
  const [defaultLocation, setDefaultLocation] = useState("Room 301")
  const [isSaving, setIsSaving] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Check if user is logged in and is a teacher
    if (typeof window !== "undefined") {
      const storedUserType = localStorage.getItem("userType")
      const storedUserData = localStorage.getItem("userData")

      setUserType(storedUserType)
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData))
      }

      setIsLoading(false)

      // Redirect if not a teacher
      if (storedUserType !== "teacher") {
        router.push("/")
      }
    }
  }, [router])

  const handleAvailabilityChange = (day, field, value) => {
    setAvailabilityData((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }))
  }

  const handleOfficeHoursChange = (day, field, value) => {
    setOfficeHours((prev) => ({
      ...prev,
      [day]: {
        ...prev[day],
        [field]: value,
      },
    }))
  }

  const handleDefaultLocationChange = (e) => {
    const newLocation = e.target.value
    setDefaultLocation(newLocation)

    // Update all days with the new location
    setAvailabilityData((prev) => {
      const updated = {}
      Object.keys(prev).forEach((day) => {
        updated[day] = {
          ...prev[day],
          location: newLocation,
        }
      })
      return updated
    })
  }

  const handleSaveAvailability = () => {
    setIsSaving(true)

    // Simulate API call
    setTimeout(() => {
      // In a real app, this would save to a database
      if (typeof window !== "undefined") {
        localStorage.setItem("teacherAvailability", JSON.stringify(availabilityData))
        localStorage.setItem("teacherOfficeHours", JSON.stringify(officeHours))
      }

      setIsSaving(false)
      alert("Availability settings have been updated successfully.")
    }, 1000)
  }

  if (!isClient || isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (isClient && userType !== "teacher") {
    return <div className="min-h-screen flex items-center justify-center">Checking permissions...</div>
  }

  const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Set Availability</h1>
          <p className="text-gray-500">Manage your campus availability and office hours</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Default Settings</CardTitle>
            <CardDescription>Set your default location and working hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="default-location">Default Office Location</Label>
                  <Input
                    id="default-location"
                    value={defaultLocation}
                    onChange={handleDefaultLocationChange}
                    placeholder="e.g., Room 301, CS Building"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Weekly Availability</CardTitle>
            <CardDescription>Set your availability for each day of the week</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {days.map((day) => (
                <div key={day} className="border rounded-md p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`${day}-available`}
                        checked={availabilityData[day].available}
                        onCheckedChange={(checked) => handleAvailabilityChange(day, "available", checked)}
                      />
                      <Label htmlFor={`${day}-available`} className="capitalize font-medium">
                        {day}
                      </Label>
                    </div>
                  </div>

                  {availabilityData[day].available && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`${day}-start`}>Start Time</Label>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          <Input
                            id={`${day}-start`}
                            type="time"
                            value={availabilityData[day].startTime}
                            onChange={(e) => handleAvailabilityChange(day, "startTime", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`${day}-end`}>End Time</Label>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          <Input
                            id={`${day}-end`}
                            type="time"
                            value={availabilityData[day].endTime}
                            onChange={(e) => handleAvailabilityChange(day, "endTime", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`${day}-location`}>Location</Label>
                        <Input
                          id={`${day}-location`}
                          value={availabilityData[day].location}
                          onChange={(e) => handleAvailabilityChange(day, "location", e.target.value)}
                          placeholder="e.g., Room 301, CS Building"
                        />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Office Hours</CardTitle>
            <CardDescription>Set your dedicated office hours for student consultations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {days.map((day) => (
                <div key={`oh-${day}`} className="border rounded-md p-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id={`oh-${day}-enabled`}
                        checked={officeHours[day].enabled}
                        onCheckedChange={(checked) => handleOfficeHoursChange(day, "enabled", checked)}
                      />
                      <Label htmlFor={`oh-${day}-enabled`} className="capitalize font-medium">
                        {day} Office Hours
                      </Label>
                    </div>
                  </div>

                  {officeHours[day].enabled && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor={`oh-${day}-start`}>Start Time</Label>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          <Input
                            id={`oh-${day}-start`}
                            type="time"
                            value={officeHours[day].startTime}
                            onChange={(e) => handleOfficeHoursChange(day, "startTime", e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor={`oh-${day}-end`}>End Time</Label>
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-2 text-gray-400" />
                          <Input
                            id={`oh-${day}-end`}
                            type="time"
                            value={officeHours[day].endTime}
                            onChange={(e) => handleOfficeHoursChange(day, "endTime", e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={handleSaveAvailability} disabled={isSaving}>
              <Save className="h-4 w-4 mr-2" />
              {isSaving ? "Saving..." : "Save Availability"}
            </Button>
          </CardFooter>
        </Card>
      </main>

      <Footer />
    </div>
  )
}
