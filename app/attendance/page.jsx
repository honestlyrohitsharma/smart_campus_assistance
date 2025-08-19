"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Calendar, Check, X } from "lucide-react"
import Footer from "@/components/footer"
import {
  ChartContainer,
  ChartLegend,
  ChartTitle,
  ChartTooltip,
  ChartXAxis,
  ChartYAxis,
  ChartBar,
  ChartLine,
} from "@/components/ui/chart"

export default function AttendancePage() {
  const [selectedCourse, setSelectedCourse] = useState("all")
  const [selectedMonth, setSelectedMonth] = useState("may")
  const [userData, setUserData] = useState(null)
  const [attendancePercentage, setAttendancePercentage] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const [currentDate, setCurrentDate] = useState(null)

  useEffect(() => {
    setIsClient(true)
    // Get user data from localStorage
    if (typeof window !== "undefined") {
      const storedUserData = localStorage.getItem("userData")
      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData)
        setUserData(parsedUserData)

        // If student, calculate average attendance
        if (parsedUserData.attendance) {
          const avgAttendance =
            Object.values(parsedUserData.attendance).reduce((sum, val) => sum + Number(val), 0) /
            Object.values(parsedUserData.attendance).length
          setAttendancePercentage(avgAttendance)
        } else {
          // Default for teachers or if no attendance data
          setAttendancePercentage(87)
        }
      } else {
        setAttendancePercentage(87) // Default
      }

      // Set current date
      setCurrentDate(new Date())
    }

    setIsLoading(false)
  }, [])

  // Sample attendance data
  const attendanceData = [
    { date: "May 1", status: "present" },
    { date: "May 2", status: "present" },
    { date: "May 3", status: "absent" },
    { date: "May 4", status: "weekend" },
    { date: "May 5", status: "weekend" },
    { date: "May 6", status: "present" },
    { date: "May 7", status: "present" },
    { date: "May 8", status: "present" },
    { date: "May 9", status: "present" },
    { date: "May 10", status: "absent" },
    { date: "May 11", status: "weekend" },
    { date: "May 12", status: "weekend" },
    { date: "May 13", status: "present" },
    { date: "May 14", status: "present" },
    { date: "May 15", status: "present" },
  ]

  // Get chart data from user data if available
  const getChartData = () => {
    if (userData && userData.attendance) {
      return Object.entries(userData.attendance).map(([subject, percentage]) => ({
        subject,
        attendance: percentage,
      }))
    }

    // Default chart data based on the timetable subjects
    return [
      { subject: "ESCS 201 (Programming)", attendance: 85 },
      { subject: "HMHU 201 (English)", attendance: 92 },
      { subject: "BSCH 201 (Chemistry)", attendance: 78 },
      { subject: "BSM 201 (Mathematics)", attendance: 88 },
      { subject: "ESME 291 (Drawing Lab)", attendance: 95 },
    ]
  }

  // Sample monthly trend data
  const trendData = [
    { month: "Jan", attendance: 90 },
    { month: "Feb", attendance: 88 },
    { month: "Mar", attendance: 85 },
    { month: "Apr", attendance: 82 },
    { month: "May", attendance: attendancePercentage },
  ]

  // Find lowest subject
  const getLowestSubject = () => {
    if (userData && userData.attendance) {
      const entries = Object.entries(userData.attendance)
      const lowest = entries.reduce((min, current) => (current[1] < min[1] ? current : min), entries[0])
      return {
        subject: lowest[0],
        percentage: lowest[1],
      }
    }

    return {
      subject: "BSCH 201 (Chemistry)",
      percentage: 78,
    }
  }

  const lowestSubject = getLowestSubject()

  if (!isClient || isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Attendance</h1>
          <p className="text-gray-500">Track and monitor your attendance records</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Overall Attendance</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">{Math.round(attendancePercentage)}%</div>
                <div className="text-sm text-gray-500">Required: 75%</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className={`h-2.5 rounded-full ${
                    attendancePercentage >= 85
                      ? "bg-green-600"
                      : attendancePercentage >= 75
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }`}
                  style={{ width: `${Math.min(100, attendancePercentage)}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">This Month</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">92%</div>
                <div className="text-sm text-gray-500">13/15 days</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: "92%" }}></div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Lowest Subject</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div className="text-4xl font-bold">{lowestSubject.percentage}%</div>
                <div className="text-sm text-gray-500">{lowestSubject.subject}</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div
                  className={`h-2.5 rounded-full ${
                    lowestSubject.percentage >= 85
                      ? "bg-green-600"
                      : lowestSubject.percentage >= 75
                        ? "bg-amber-500"
                        : "bg-red-500"
                  }`}
                  style={{ width: `${lowestSubject.percentage}%` }}
                ></div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="calendar" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="calendar">Calendar View</TabsTrigger>
            <TabsTrigger value="subjects">Subject-wise</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="calendar">
            <Card>
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle>Attendance Calendar</CardTitle>
                <div className="flex items-center space-x-2">
                  <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                    <SelectTrigger className="w-[120px]">
                      <SelectValue placeholder="Select Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="may">May 2025</SelectItem>
                      <SelectItem value="april">April 2025</SelectItem>
                      <SelectItem value="march">March 2025</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button variant="outline" size="icon">
                    <Calendar className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-7 gap-2">
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div key={day} className="text-center font-medium text-sm py-2">
                      {day}
                    </div>
                  ))}
                  {attendanceData.map((day, index) => (
                    <div
                      key={index}
                      className={`text-center p-2 rounded-md ${
                        day.status === "present"
                          ? "bg-green-100 text-green-800"
                          : day.status === "absent"
                            ? "bg-red-100 text-red-800"
                            : "bg-gray-100 text-gray-400"
                      }`}
                    >
                      <div className="text-sm">{day.date.split(" ")[1]}</div>
                      <div className="mt-1">
                        {day.status === "present" ? (
                          <Check className="h-4 w-4 mx-auto text-green-600" />
                        ) : day.status === "absent" ? (
                          <X className="h-4 w-4 mx-auto text-red-600" />
                        ) : null}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="subjects">
            <Card>
              <CardHeader className="pb-2 flex flex-row items-center justify-between">
                <CardTitle>Subject-wise Attendance</CardTitle>
                <Select value={selectedCourse} onValueChange={setSelectedCourse}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select Course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Courses</SelectItem>
                    <SelectItem value="escs201">ESCS 201: Programming</SelectItem>
                    <SelectItem value="hmhu201">HMHU 201: English</SelectItem>
                    <SelectItem value="bsm201">BSM 201: Mathematics</SelectItem>
                  </SelectContent>
                </Select>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ChartContainer className="h-full">
                  <ChartTitle>Attendance Percentage by Subject</ChartTitle>
                  <ChartBar
                    data={getChartData()}
                    xAxis={<ChartXAxis dataKey="subject" />}
                    yAxis={<ChartYAxis />}
                    dataKey="attendance"
                    barSize={40}
                    fill="#4f46e5"
                  />
                  <ChartTooltip />
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Monthly Attendance Trends</CardTitle>
              </CardHeader>
              <CardContent className="h-[400px]">
                <ChartContainer className="h-full">
                  <ChartTitle>Attendance Percentage Over Time</ChartTitle>
                  <ChartLine
                    data={trendData}
                    xAxis={<ChartXAxis dataKey="month" />}
                    yAxis={<ChartYAxis />}
                    dataKey="attendance"
                    stroke="#10b981"
                    strokeWidth={2}
                  />
                  <ChartLegend />
                  <ChartTooltip />
                </ChartContainer>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
