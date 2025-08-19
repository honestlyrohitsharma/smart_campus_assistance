"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import { teachers } from "@/lib/users-data"

export default function TeacherAvailabilityPage() {
  const [selectedDay, setSelectedDay] = useState("today")
  const [searchQuery, setSearchQuery] = useState("")
  const [teacherData, setTeacherData] = useState(teachers)
  const [isClient, setIsClient] = useState(false)

  // Load any saved availability data from localStorage
  useEffect(() => {
    setIsClient(true)

    if (typeof window !== "undefined") {
      const savedAvailability = localStorage.getItem("teacherAvailability")
      const savedOfficeHours = localStorage.getItem("teacherOfficeHours")

      if (savedAvailability && savedOfficeHours) {
        // In a real app, we would update the teacher data with the saved availability
        console.log("Saved availability data found")
      }
    }
  }, [])

  const filteredTeachers = teacherData.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.shortName.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const getStatusBadge = (status) => {
    switch (status) {
      case "available":
        return <Badge className="bg-green-500">Available</Badge>
      case "in-class":
        return <Badge className="bg-amber-500">In Class</Badge>
      case "unavailable":
        return <Badge className="bg-red-500">Unavailable</Badge>
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>
    }
  }

  // Simulate current status based on time of day
  const getCurrentStatus = (teacher) => {
    if (!isClient) return "unknown"

    const now = new Date()
    const hour = now.getHours()

    // Simulate different statuses based on teacher ID and time
    const teacherId = Number.parseInt(teacher.id.replace("T", ""))

    if (hour >= 9 && hour < 17) {
      // During working hours
      if (teacherId % 3 === 0) {
        return "in-class"
      } else if (teacherId % 3 === 1) {
        return "available"
      } else {
        return "unavailable"
      }
    } else {
      // Outside working hours
      return "unavailable"
    }
  }

  if (!isClient) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Teacher Availability</h1>
          <p className="text-gray-500">Check teacher schedules and office hours</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div className="relative w-full md:w-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              placeholder="Search teachers or departments..."
              className="pl-10 w-full md:w-[300px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <Select value={selectedDay} onValueChange={setSelectedDay}>
              <SelectTrigger className="w-full md:w-[150px]">
                <SelectValue placeholder="Select Day" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="tomorrow">Tomorrow</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon">
              <Calendar className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Tabs defaultValue="availability" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="availability">Current Availability</TabsTrigger>
            <TabsTrigger value="schedule">Office Hours</TabsTrigger>
          </TabsList>

          <TabsContent value="availability">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Teacher Availability Status</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Teacher</TableHead>
                      <TableHead>Department</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Office Hours</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredTeachers.map((teacher) => (
                      <TableRow key={teacher.id}>
                        <TableCell className="font-medium">
                          <div className="flex flex-col">
                            <span>{teacher.name}</span>
                            <span className="text-xs text-gray-500">{teacher.shortName}</span>
                          </div>
                        </TableCell>
                        <TableCell>{teacher.department}</TableCell>
                        <TableCell>{getStatusBadge(getCurrentStatus(teacher))}</TableCell>
                        <TableCell>{teacher.officeLocation}</TableCell>
                        <TableCell>{teacher.officeHours}</TableCell>
                      </TableRow>
                    ))}
                    {filteredTeachers.length === 0 && (
                      <TableRow>
                        <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                          No teachers found matching your search
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="schedule">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Teacher Office Hours</CardTitle>
              </CardHeader>
              <CardContent>
                {filteredTeachers.map((teacher) => (
                  <div key={teacher.id} className="mb-8 last:mb-0">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-lg font-medium">
                          {teacher.name} <span className="text-sm text-gray-500">({teacher.shortName})</span>
                        </h3>
                        <p className="text-sm text-gray-500">{teacher.department}</p>
                      </div>
                      <div className="flex items-center">{getStatusBadge(getCurrentStatus(teacher))}</div>
                    </div>

                    <div className="mb-4 p-4 bg-purple-50 border border-purple-200 rounded-md">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-purple-800">
                            <span className="font-medium">Office Location:</span> {teacher.officeLocation}
                          </p>
                          <p className="text-sm text-purple-800">
                            <span className="font-medium">Office Hours:</span> {teacher.officeHours}
                          </p>
                        </div>
                        <div>
                          <p className="text-sm text-purple-800">
                            <span className="font-medium">Email:</span> {teacher.email}
                          </p>
                          <p className="text-sm text-purple-800">
                            <span className="font-medium">Phone:</span> {teacher.phone}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Day</TableHead>
                          <TableHead>Office Hours</TableHead>
                          <TableHead>Subjects</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                          <TableRow key={`${teacher.id}-${day}`}>
                            <TableCell className="font-medium">{day}</TableCell>
                            <TableCell className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-400" />
                              {teacher.officeHours}
                            </TableCell>
                            <TableCell>
                              <div className="flex flex-wrap gap-1">
                                {teacher.subjects.map((subject, idx) => (
                                  <Badge
                                    key={idx}
                                    variant="outline"
                                    className="bg-blue-50 text-blue-700 border-blue-200"
                                  >
                                    {subject}
                                  </Badge>
                                ))}
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                ))}
                {filteredTeachers.length === 0 && (
                  <div className="text-center py-4 text-gray-500">No teachers found matching your search</div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
