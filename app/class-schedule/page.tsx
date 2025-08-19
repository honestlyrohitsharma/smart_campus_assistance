"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, BookOpen, MapPin } from "lucide-react"
import Footer from "@/components/footer"
import { teachers, timetableData } from "@/lib/users-data"

export default function ClassSchedulePage() {
  const [selectedDay, setSelectedDay] = useState("today")
  const [selectedSemester, setSelectedSemester] = useState("current")
  const [selectedSection, setSelectedSection] = useState("cse-c")

  // Function to get full teacher name from short name
  const getTeacherFullName = (shortName: string) => {
    if (!shortName) return ""

    // Handle multiple teachers (e.g., "BS, AD")
    if (shortName.includes(",")) {
      const shortNames = shortName.split(",").map((name) => name.trim())
      return shortNames
        .map((short) => {
          const teacher = teachers.find((t) => t.shortName === short)
          return teacher ? teacher.name : short
        })
        .join(", ")
    }

    const teacher = teachers.find((t) => t.shortName === shortName)
    return teacher ? teacher.name : shortName
  }

  // Function to get course full name
  const getCourseFullName = (courseCode: string) => {
    const courseMap: { [key: string]: string } = {
      "HMHU 201": "English",
      "BSCH 201": "Chemistry",
      "BSM 201": "Mathematics",
      "ESCS 201": "Computer Science",
      "ESME 291": "Engineering Drawing",
      "BSCH 291": "Chemistry Lab",
      "ESCS 291": "Computer Science Lab",
      "HMHU 291": "Language Lab",
    }

    return courseMap[courseCode] || courseCode
  }

  // Convert timetable data to class schedule format
  const generateClassSchedule = () => {
    const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
    const schedule = days.map((day) => {
      const daySchedule = timetableData[selectedSection][day] || []
      return {
        day: day.charAt(0).toUpperCase() + day.slice(1),
        classes: daySchedule
          .map((slot) => ({
            time: slot.time.replace("-", " - "),
            course: `${slot.subject}: ${getCourseFullName(slot.subject)}`,
            teacher: getTeacherFullName(slot.teacher),
            location: slot.subject.includes("LAB")
              ? "Lab Building"
              : `Room ${selectedSection === "cse-a" ? "317" : selectedSection === "cse-b" ? "318" : "313"}`,
            status: "upcoming",
          }))
          .filter((cls) => cls.course !== "Break: Break"),
      }
    })

    return schedule
  }

  const classSchedule = generateClassSchedule()

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "ongoing":
        return <Badge className="bg-green-500">Ongoing</Badge>
      case "completed":
        return <Badge className="bg-gray-500">Completed</Badge>
      case "upcoming":
        return <Badge className="bg-blue-500">Upcoming</Badge>
      case "cancelled":
        return <Badge className="bg-red-500">Cancelled</Badge>
      default:
        return <Badge className="bg-gray-500">Unknown</Badge>
    }
  }

  // Update class status based on current time
  useEffect(() => {
    const updateClassStatus = () => {
      const now = new Date()
      const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
      const currentDay = days[now.getDay()]
      const currentTime = `${now.getHours().toString().padStart(2, "0")}:${now.getMinutes().toString().padStart(2, "0")}`

      // Find today's schedule
      const todayIndex = classSchedule.findIndex((day) => day.day.toLowerCase() === currentDay)
      if (todayIndex >= 0) {
        const updatedSchedule = [...classSchedule]
        updatedSchedule[todayIndex].classes = updatedSchedule[todayIndex].classes.map((cls) => {
          const [startTime, endTime] = cls.time.split(" - ")
          const formattedStartTime = startTime.replace(":", "").padStart(4, "0")
          const formattedEndTime = endTime.replace(":", "").padStart(4, "0")
          const formattedCurrentTime = currentTime.replace(":", "")

          let status = "upcoming"
          if (formattedCurrentTime >= formattedStartTime && formattedCurrentTime <= formattedEndTime) {
            status = "ongoing"
          } else if (formattedCurrentTime > formattedEndTime) {
            status = "completed"
          }

          return { ...cls, status }
        })
      }
    }

    updateClassStatus()
    const interval = setInterval(updateClassStatus, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [classSchedule])

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Class Schedule</h1>
          <p className="text-gray-500">View your weekly class schedule</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
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

          <div className="flex items-center gap-2 w-full md:w-auto">
            <Select value={selectedSection} onValueChange={setSelectedSection}>
              <SelectTrigger className="w-full md:w-[150px]">
                <SelectValue placeholder="Select Section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="cse-a">CSE-A</SelectItem>
                <SelectItem value="cse-b">CSE-B</SelectItem>
                <SelectItem value="cse-c">CSE-C</SelectItem>
              </SelectContent>
            </Select>

            <Select value={selectedSemester} onValueChange={setSelectedSemester}>
              <SelectTrigger className="w-full md:w-[200px]">
                <SelectValue placeholder="Select Semester" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="current">Current Semester (Spring 2025)</SelectItem>
                <SelectItem value="previous">Previous Semester (Fall 2024)</SelectItem>
                <SelectItem value="next">Next Semester (Fall 2025)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <Tabs defaultValue="weekly" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="weekly">Weekly View</TabsTrigger>
            <TabsTrigger value="daily">Daily View</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly">
            <div className="space-y-6">
              {classSchedule.map((day) => (
                <Card key={day.day} className="transition-all duration-300 hover:shadow-md">
                  <CardHeader className="pb-2">
                    <CardTitle>{day.day}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Time</TableHead>
                          <TableHead>Course</TableHead>
                          <TableHead className="hidden md:table-cell">Teacher</TableHead>
                          <TableHead className="hidden md:table-cell">Location</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {day.classes.length > 0 ? (
                          day.classes.map((cls, index) => (
                            <TableRow key={index} className="transition-colors hover:bg-gray-50">
                              <TableCell className="flex items-center">
                                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                                <span className="hidden md:inline">{cls.time}</span>
                                <span className="md:hidden">{cls.time.split(" - ")[0]}</span>
                              </TableCell>
                              <TableCell>
                                <div className="font-medium">{cls.course.split(":")[0]}</div>
                                <div className="text-sm text-gray-500 hidden md:block">{cls.course.split(": ")[1]}</div>
                              </TableCell>
                              <TableCell className="hidden md:table-cell">{cls.teacher}</TableCell>
                              <TableCell className="hidden md:table-cell">
                                <div className="flex items-center">
                                  <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                                  {cls.location}
                                </div>
                              </TableCell>
                              <TableCell>{getStatusBadge(cls.status)}</TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                              No classes scheduled for this day
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="daily">
            <Card className="transition-all duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <CardTitle>Today&apos;s Classes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {classSchedule[0].classes.map((cls, index) => (
                    <div
                      key={index}
                      className="flex flex-col md:flex-row border rounded-lg p-4 transition-all duration-300 hover:shadow-md hover:bg-gray-50"
                    >
                      <div className="flex-1 mb-4 md:mb-0">
                        <div className="flex items-center mb-2">
                          <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                          <h3 className="font-medium">{cls.course}</h3>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Clock className="h-4 w-4 mr-2" />
                          {cls.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-500">
                          <MapPin className="h-4 w-4 mr-2" />
                          {cls.location}
                        </div>
                      </div>
                      <div className="flex flex-col justify-between items-start md:items-end">
                        <div className="text-sm text-gray-500 mb-2">{cls.teacher}</div>
                        {getStatusBadge(cls.status)}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
