"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Download, Calendar, Clock, Search } from "lucide-react"
import Footer from "@/components/footer"

export default function StudentAttendancePage() {
  const router = useRouter()
  const [selectedClass, setSelectedClass] = useState("")
  const [selectedDate, setSelectedDate] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [attendanceData, setAttendanceData] = useState({})
  const [savedAttendance, setSavedAttendance] = useState([])
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [userType, setUserType] = useState(null)
  const [isClient, setIsClient] = useState(false)

  // Sample class data
  const classes = [
    { id: "cs101", name: "CS101: Introduction to Programming" },
    { id: "cs201", name: "CS201: Data Structures" },
    { id: "cs301", name: "CS301: Database Systems" },
    { id: "cs401", name: "CS401: Artificial Intelligence" },
  ]

  // Sample student data
  const students = [
    { id: "S001", name: "Rohit Sharma", roll: "CSC001" },
    { id: "S002", name: "Shreya Ranjan", roll: "CSC002" },
    { id: "S003", name: "Soukarsh Dutta", roll: "CSC003" },
    { id: "S004", name: "Sania Akatrai", roll: "CSC004" },
    { id: "S005", name: "Vikram Singh", roll: "CSC005" },
    { id: "S006", name: "Neha Verma", roll: "CSC006" },
    { id: "S007", name: "Raj Malhotra", roll: "CSC007" },
    { id: "S008", name: "Ananya Desai", roll: "CSC008" },
    { id: "S009", name: "Karan Mehta", roll: "CSC009" },
    { id: "S010", name: "Divya Sharma", roll: "CSC010" },
  ]

  // Sample attendance history
  const attendanceHistory = [
    {
      id: 1,
      class: "CS101: Introduction to Programming",
      date: "2025-05-10",
      time: "10:00 AM - 11:30 AM",
      present: 18,
      absent: 2,
      total: 20,
    },
    {
      id: 2,
      class: "CS301: Database Systems",
      date: "2025-05-09",
      time: "2:00 PM - 3:30 PM",
      present: 15,
      absent: 5,
      total: 20,
    },
    {
      id: 3,
      class: "CS201: Data Structures",
      date: "2025-05-08",
      time: "11:00 AM - 12:30 PM",
      present: 17,
      absent: 3,
      total: 20,
    },
  ]

  // Set up client-side state
  useEffect(() => {
    setIsClient(true)
    const today = new Date().toISOString().split("T")[0]
    setSelectedDate(today)

    // Check if user is a teacher (in a real app, this would be more robust)
    if (typeof window !== "undefined") {
      const storedUserType = localStorage.getItem("userType")
      setUserType(storedUserType)

      // Redirect if not a teacher
      if (storedUserType !== "teacher") {
        router.push("/")
      }
    }
  }, [router])

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.roll.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleAttendanceChange = (studentId, isPresent) => {
    setAttendanceData((prev) => ({
      ...prev,
      [studentId]: isPresent,
    }))
  }

  const handleSubmitAttendance = () => {
    setIsSubmitting(true)

    // Simulate API call
    setTimeout(() => {
      const attendanceRecord = {
        id: Date.now(),
        class: classes.find((c) => c.id === selectedClass)?.name || selectedClass,
        date: selectedDate,
        time: new Date().toLocaleTimeString(),
        students: students.map((student) => ({
          ...student,
          present: attendanceData[student.id] === true,
        })),
      }

      setSavedAttendance([attendanceRecord, ...savedAttendance])
      setIsSubmitting(false)

      // Reset form
      setAttendanceData({})
      alert("Attendance submitted successfully!")
    }, 1000)
  }

  const generatePDF = (attendanceId) => {
    // In a real application, this would generate a PDF
    alert("PDF generation would happen here. In a real application, this would download a PDF with attendance details.")
  }

  // Show loading state until client-side code is ready
  if (!isClient) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  // Redirect if not a teacher
  if (isClient && userType !== "teacher") {
    return <div className="min-h-screen flex items-center justify-center">Checking permissions...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Student Attendance</h1>
          <p className="text-gray-500">Take and manage student attendance records</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="take" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="take">Take Attendance</TabsTrigger>
            <TabsTrigger value="history">Attendance History</TabsTrigger>
          </TabsList>

          <TabsContent value="take">
            <Card>
              <CardHeader>
                <CardTitle>Take Attendance</CardTitle>
                <CardDescription>Mark students as present or absent for today's class</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 mb-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="class">Select Class</Label>
                      <Select value={selectedClass} onValueChange={setSelectedClass}>
                        <SelectTrigger id="class">
                          <SelectValue placeholder="Select a class" />
                        </SelectTrigger>
                        <SelectContent>
                          {classes.map((cls) => (
                            <SelectItem key={cls.id} value={cls.id}>
                              {cls.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="date">Date</Label>
                      <Input
                        id="date"
                        type="date"
                        value={selectedDate}
                        onChange={(e) => setSelectedDate(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <Input
                      placeholder="Search students by name or roll number..."
                      className="pl-10"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>

                {selectedClass ? (
                  <div className="border rounded-md">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-12">No.</TableHead>
                          <TableHead>Roll Number</TableHead>
                          <TableHead>Student Name</TableHead>
                          <TableHead className="text-center">Present</TableHead>
                          <TableHead className="text-center">Absent</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {filteredStudents.map((student, index) => (
                          <TableRow key={student.id}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>{student.roll}</TableCell>
                            <TableCell>{student.name}</TableCell>
                            <TableCell className="text-center">
                              <div className="flex justify-center">
                                <Checkbox
                                  checked={attendanceData[student.id] === true}
                                  onCheckedChange={() => handleAttendanceChange(student.id, true)}
                                />
                              </div>
                            </TableCell>
                            <TableCell className="text-center">
                              <div className="flex justify-center">
                                <Checkbox
                                  checked={attendanceData[student.id] === false}
                                  onCheckedChange={() => handleAttendanceChange(student.id, false)}
                                />
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                        {filteredStudents.length === 0 && (
                          <TableRow>
                            <TableCell colSpan={5} className="text-center py-4 text-gray-500">
                              No students found matching your search
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500 border rounded-md">
                    <FileText className="h-12 w-12 mb-4 text-gray-400" />
                    <h3 className="text-lg font-medium mb-1">No Class Selected</h3>
                    <p>Please select a class to take attendance</p>
                  </div>
                )}
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Reset</Button>
                <Button
                  onClick={handleSubmitAttendance}
                  disabled={!selectedClass || isSubmitting || Object.keys(attendanceData).length === 0}
                >
                  {isSubmitting ? "Submitting..." : "Submit Attendance"}
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Attendance History</CardTitle>
                <CardDescription>View and download past attendance records</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by class" />
                    </SelectTrigger>
                    <SelectContent>
                      {classes.map((cls) => (
                        <SelectItem key={cls.id} value={cls.id}>
                          {cls.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input type="date" placeholder="From date" />
                  <Input type="date" placeholder="To date" />
                </div>

                <div className="border rounded-md">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Class</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Time</TableHead>
                        <TableHead className="text-center">Present/Total</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {attendanceHistory.map((record) => (
                        <TableRow key={record.id}>
                          <TableCell>{record.class}</TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                              {new Date(record.date).toLocaleDateString()}
                            </div>
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2 text-gray-400" />
                              {record.time}
                            </div>
                          </TableCell>
                          <TableCell className="text-center">
                            <span className="inline-flex items-center">
                              <span className="text-green-600 font-medium">{record.present}</span>
                              <span className="mx-1">/</span>
                              <span>{record.total}</span>
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="outline" size="sm" onClick={() => generatePDF(record.id)}>
                              <Download className="h-4 w-4 mr-2" />
                              Download PDF
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
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
