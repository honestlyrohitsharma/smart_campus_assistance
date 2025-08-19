"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"

export default function ClassTimetablePage() {
  const [selectedDay, setSelectedDay] = useState("all")

  // Define the timetable data for CSE-A, CSE-B, and CSE-C
  const timetableData = {
    "cse-a": {
      monday: [
        { time: "10:30-11:20", subject: "HMHU 201", teacher: "RPM" },
        { time: "11:20-12:10", subject: "BSCH 201", teacher: "BJB" },
        { time: "12:10-01:00", subject: "BSM 201", teacher: "SC" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "ESCS 201", teacher: "AR" },
        { time: "02:30-03:20", subject: "BSCH 291 (1-30) Chemistry LAB", teacher: "BS, AD" },
        { time: "02:30-03:20", subject: "ESME 291 (31-Rest) Drawing LAB", teacher: "DP, SGB" },
        { time: "03:20-04:10", subject: "BSCH 291 (1-30) Chemistry LAB", teacher: "BS, AD" },
        { time: "03:20-04:10", subject: "ESME 291 (31-Rest) Drawing LAB", teacher: "DP, SGB" },
        { time: "04:10-05:00", subject: "BSCH 291 (1-30) Chemistry LAB", teacher: "BS, AD" },
        { time: "04:10-05:00", subject: "ESME 291 (31-Rest) Drawing LAB", teacher: "DP, SGB" },
        { time: "08:00-09:00", subject: "BSCH 201 (Evening Class)", teacher: "KK" },
        { time: "09:00-10:00", subject: "HMHU 201 (Evening Class)", teacher: "SMD" },
      ],
      tuesday: [
        { time: "10:30-11:20", subject: "ESCS 291 (1-30) LAB-3", teacher: "KBH, SM" },
        { time: "10:30-11:20", subject: "HMHU 291 (31-Rest) Language LAB", teacher: "AUM" },
        { time: "11:20-12:10", subject: "ESCS 291 (1-30) LAB-3", teacher: "KBH, SM" },
        { time: "11:20-12:10", subject: "HMHU 291 (31-Rest) Language LAB", teacher: "AUM" },
        { time: "12:10-01:00", subject: "BSCH 201", teacher: "KK" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "BSM 201", teacher: "SPL" },
        { time: "02:30-03:20", subject: "ESCS 201", teacher: "KBH" },
        { time: "03:20-04:10", subject: "ESCS 201", teacher: "KBH" },
        { time: "04:10-05:00", subject: "ESCS 201", teacher: "KBH" },
        { time: "08:00-09:00", subject: "ESCS 201 (Evening Class)", teacher: "SPV" },
      ],
      wednesday: [
        { time: "10:30-11:20", subject: "BSM 201", teacher: "SC" },
        { time: "11:20-12:10", subject: "BSCH 201", teacher: "AD" },
        { time: "12:10-01:00", subject: "ESCS 201", teacher: "SM" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "BSM 201", teacher: "DBH" },
        { time: "02:30-03:20", subject: "ESME 291 (1-30) Drawing LAB", teacher: "DP, SGB" },
        { time: "02:30-03:20", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, MM" },
        { time: "03:20-04:10", subject: "ESME 291 (1-30) Drawing LAB", teacher: "DP, SGB" },
        { time: "03:20-04:10", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, MM" },
        { time: "04:10-05:00", subject: "ESME 291 (1-30) Drawing LAB", teacher: "DP, SGB" },
        { time: "04:10-05:00", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, MM" },
        { time: "08:00-09:00", subject: "BSCH 201 (Evening Class)", teacher: "DBM" },
        { time: "09:00-10:00", subject: "HMHU 201 (Evening Class)", teacher: "ASC" },
      ],
      thursday: [
        { time: "10:30-11:20", subject: "HMHU 291 (1-30) Language LAB", teacher: "ASC" },
        { time: "10:30-11:20", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "KBH, SM" },
        { time: "11:20-12:10", subject: "HMHU 291 (1-30) Language LAB", teacher: "ASC" },
        { time: "11:20-12:10", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "KBH, SM" },
        { time: "12:10-01:00", subject: "BSCH 201", teacher: "MM" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "BSM 201", teacher: "SP" },
        { time: "02:30-03:20", subject: "HMHU 201", teacher: "ASC" },
        { time: "03:20-04:10", subject: "BSM 201", teacher: "DBH" },
        { time: "04:10-05:00", subject: "ESCS 201", teacher: "AR" },
      ],
      friday: [
        { time: "10:30-11:20", subject: "HMHU 201", teacher: "AUM" },
        { time: "11:20-12:10", subject: "BSCH 201", teacher: "DBM" },
        { time: "12:10-01:00", subject: "BSM 201", teacher: "DBH" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "ESCS 201", teacher: "SM" },
        { time: "02:30-03:20", subject: "ESME291", teacher: "DP" },
        { time: "03:20-04:10", subject: "ESCS 201", teacher: "KBH" },
        { time: "04:10-05:00", subject: "ESCS 201", teacher: "KBH" },
        { time: "08:00-09:00", subject: "BSM 201 Q & A Solving (Evening Class)", teacher: "PK" },
      ],
      saturday: [{ time: "08:00-09:00", subject: "BSM 201 Q & A Solving (Evening Class)", teacher: "CM" }],
    },
    "cse-b": {
      monday: [
        { time: "10:30-11:20", subject: "BSM 201", teacher: "SC" },
        { time: "11:20-12:10", subject: "HMHU 201", teacher: "ASC" },
        { time: "12:10-01:00", subject: "ESCS 201", teacher: "SM" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "BSCH 201", teacher: "MM" },
        { time: "02:30-03:20", subject: "ESCS 291 (1-30) LAB-3", teacher: "SM" },
        { time: "02:30-03:20", subject: "HMHU 291 (31-Rest) Language Lab", teacher: "ASC" },
        { time: "03:20-04:10", subject: "ESCS 291 (1-30) LAB-3", teacher: "SM" },
        { time: "03:20-04:10", subject: "HMHU 291 (31-Rest) Language Lab", teacher: "ASC" },
        { time: "04:10-05:00", subject: "ESCS 291 (1-30) LAB-3", teacher: "SM" },
        { time: "04:10-05:00", subject: "HMHU 291 (31-Rest) Language Lab", teacher: "ASC" },
        { time: "08:00-09:00", subject: "BSCH 201 (Evening Class)", teacher: "KK" },
        { time: "09:00-10:00", subject: "HMHU 201 (Evening Class)", teacher: "SMD" },
      ],
      tuesday: [
        { time: "10:30-11:20", subject: "BSCH 291 (1-30) Chemistry LAB", teacher: "BS, BJB" },
        { time: "10:30-11:20", subject: "ESME 291 (31-Rest) Drawing Lab", teacher: "SK, NTA" },
        { time: "11:20-12:10", subject: "BSCH 291 (1-30) Chemistry LAB", teacher: "BS, BJB" },
        { time: "11:20-12:10", subject: "ESME 291 (31-Rest) Drawing Lab", teacher: "SK, NTA" },
        { time: "12:10-01:00", subject: "BSM 201", teacher: "SP" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "BSCH 201", teacher: "BJB" },
        { time: "02:30-03:20", subject: "ESCS 201", teacher: "KBH" },
        { time: "03:20-04:10", subject: "ESCS 201", teacher: "KBH" },
        { time: "04:10-05:00", subject: "ESCS 201", teacher: "KBH" },
        { time: "08:00-09:00", subject: "ESCS 201 (Evening Class)", teacher: "SPV" },
      ],
      wednesday: [
        { time: "10:30-11:20", subject: "HMHU 201", teacher: "MGT" },
        { time: "11:20-12:10", subject: "ESCS 201", teacher: "SM" },
        { time: "12:10-01:00", subject: "BSM 201", teacher: "SP" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "BSCH 201", teacher: "AD" },
        { time: "02:30-03:20", subject: "HMHU 291 (1-30) Language Lab", teacher: "SMD" },
        { time: "02:30-03:20", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "SM" },
        { time: "03:20-04:10", subject: "HMHU 291 (1-30) Language Lab", teacher: "SMD" },
        { time: "03:20-04:10", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "SM" },
        { time: "04:10-05:00", subject: "HMHU 291 (1-30) Language Lab", teacher: "SMD" },
        { time: "04:10-05:00", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "SM" },
        { time: "08:00-09:00", subject: "BSCH 201 (Evening Class)", teacher: "DBM" },
        { time: "09:00-10:00", subject: "HMHU 201 (Evening Class)", teacher: "ASC" },
      ],
      thursday: [
        { time: "10:30-11:20", subject: "ESME 291 (1-30) Drawing Lab", teacher: "SK, NTA" },
        { time: "10:30-11:20", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, KK" },
        { time: "11:20-12:10", subject: "ESME 291 (1-30) Drawing Lab", teacher: "SK, NTA" },
        { time: "11:20-12:10", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, KK" },
        { time: "12:10-01:00", subject: "BSCH 201", teacher: "KK" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "BSM 201", teacher: "SC" },
        { time: "02:30-03:20", subject: "BSM 201", teacher: "PK" },
        { time: "03:20-04:10", subject: "ESME291", teacher: "SK" },
        { time: "04:10-05:00", subject: "BSM 201", teacher: "DBH" },
        { time: "08:00-09:00", subject: "ESCS 201 (Evening Class)", teacher: "AR" },
      ],
      friday: [
        { time: "10:30-11:20", subject: "BSCH 201", teacher: "KK" },
        { time: "11:20-12:10", subject: "BSM 201", teacher: "SC" },
        { time: "12:10-01:00", subject: "HMHU 201", teacher: "PLG" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "BSCH 201", teacher: "DBM" },
        { time: "02:30-03:20", subject: "ESCS 201", teacher: "SM" },
        { time: "03:20-04:10", subject: "ESCS 201", teacher: "KBH" },
        { time: "04:10-05:00", subject: "ESCS 201", teacher: "KBH" },
        { time: "08:00-09:00", subject: "BSM 201 Q & A Solving (Evening Class)", teacher: "PK" },
      ],
      saturday: [{ time: "08:00-09:00", subject: "BSM 201 Q & A Solving (Evening Class)", teacher: "CM" }],
    },
    "cse-c": {
      monday: [
        { time: "10:30-11:20", subject: "ESCS 291 (1-30) LAB-3", teacher: "AM" },
        { time: "10:30-11:20", subject: "HMHU 291 (31-Rest) Language Lab", teacher: "MGT" },
        { time: "11:20-12:10", subject: "ESCS 291 (1-30) LAB-3", teacher: "AM" },
        { time: "11:20-12:10", subject: "HMHU 291 (31-Rest) Language Lab", teacher: "MGT" },
        { time: "12:10-01:00", subject: "ESCS 291 (1-30) LAB-3", teacher: "AM" },
        { time: "12:10-01:00", subject: "HMHU 291 (31-Rest) Language Lab", teacher: "MGT" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "BSCH 201", teacher: "AD" },
        { time: "02:30-03:20", subject: "BSM 201", teacher: "SC" },
        { time: "03:20-04:10", subject: "ESCS 201", teacher: "AM" },
        { time: "04:10-05:00", subject: "Tutorial ESCS 201", teacher: "KBH" },
        { time: "08:00-09:00", subject: "HMHU 201 (Evening Class)", teacher: "MGT" },
        { time: "09:00-10:00", subject: "BSCH 201 (Evening Class)", teacher: "DBM" },
      ],
      tuesday: [
        { time: "10:30-11:20", subject: "ESCS 201", teacher: "PDS" },
        { time: "11:20-12:10", subject: "BSM 201", teacher: "SP" },
        { time: "12:10-01:00", subject: "BSCH 201", teacher: "DBM" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "HMHU 201", teacher: "MGT" },
        { time: "02:30-03:20", subject: "ESME 291 (31-Rest) Drawing Lab", teacher: "SK, NTA" },
        { time: "03:20-04:10", subject: "ESME 291 (31-Rest) Drawing Lab", teacher: "SK, NTA" },
        { time: "04:10-05:00", subject: "ESME 291 (31-Rest) Drawing Lab", teacher: "SK, NTA" },
        { time: "07:00-08:00", subject: "HMHU 201 (Evening Class)", teacher: "AUM" },
        { time: "08:00-09:00", subject: "BSM 201 Q & A Solving (Evening Class)", teacher: "CM" },
      ],
      wednesday: [
        { time: "10:30-11:20", subject: "BSCH 201", teacher: "BJB" },
        { time: "11:20-12:10", subject: "BSCH 201", teacher: "MM" },
        { time: "12:10-01:00", subject: "BSM 201", teacher: "SC" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "ESME291", teacher: "AC" },
        { time: "02:30-03:20", subject: "HMHU 201", teacher: "ASC" },
        { time: "03:20-04:10", subject: "ESCS 201", teacher: "KBH" },
        { time: "04:10-05:00", subject: "ESCS 201", teacher: "KBH" },
        { time: "08:00-09:00", subject: "BSCH 201 (Evening Class)", teacher: "KK" },
        { time: "09:00-10:00", subject: "ESCS 201 (Evening Class)", teacher: "SM" },
      ],
      thursday: [
        { time: "10:30-11:20", subject: "BSM 201", teacher: "PK" },
        { time: "11:20-12:10", subject: "ESCS 201", teacher: "AM" },
        { time: "12:10-01:00", subject: "BSCH 201", teacher: "KK" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "BSCH 201", teacher: "AD" },
        { time: "02:30-03:20", subject: "HMHU 291 (1-30) Language Lab", teacher: "SMD" },
        { time: "02:30-03:20", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "AM" },
        { time: "03:20-04:10", subject: "HMHU 291 (1-30) Language Lab", teacher: "SMD" },
        { time: "03:20-04:10", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "AM" },
        { time: "04:10-05:00", subject: "HMHU 291 (1-30) Language Lab", teacher: "SMD" },
        { time: "04:10-05:00", subject: "ESCS 291 (31-Rest) LAB-3", teacher: "AM" },
        { time: "08:00-09:00", subject: "ESCS 201 (Evening Class)", teacher: "AM" },
        { time: "09:00-10:00", subject: "BSM 201 Q & A Solving (Evening Class)", teacher: "PK" },
      ],
      friday: [
        { time: "10:30-11:20", subject: "ESME 291 (1-30) Drawing Lab", teacher: "AC, SGB" },
        { time: "10:30-11:20", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, KK" },
        { time: "11:20-12:10", subject: "ESME 291 (1-30) Drawing Lab", teacher: "AC, SGB" },
        { time: "11:20-12:10", subject: "BSCH 291 (31-Rest) Chemistry LAB", teacher: "BS, KK" },
        { time: "12:10-01:00", subject: "HMHU 201", teacher: "SMD" },
        { time: "01:00-01:40", subject: "Break", teacher: "" },
        { time: "01:40-02:30", subject: "BSM 201", teacher: "CM" },
        { time: "02:30-03:20", subject: "BSM 201", teacher: "SPL" },
        { time: "03:20-05:00", subject: "Sports / Library", teacher: "" },
      ],
    },
  }

  // Function to get the day's schedule
  const getDaySchedule = (section, day) => {
    if (day === "all") {
      return {
        monday: timetableData[section].monday || [],
        tuesday: timetableData[section].tuesday || [],
        wednesday: timetableData[section].wednesday || [],
        thursday: timetableData[section].thursday || [],
        friday: timetableData[section].friday || [],
        saturday: timetableData[section].saturday || [],
      }
    }
    return { [day]: timetableData[section][day] || [] }
  }

  // Function to render the timetable for a specific day
  const renderDaySchedule = (schedule, day) => {
    // Check if schedule exists, if not use an empty array
    const safeSchedule = schedule || []

    return (
      <div key={day} className="mb-8 last:mb-0">
        <h3 className="text-lg font-medium capitalize mb-4">{day}</h3>
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[150px]">Time</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead className="w-[150px]">Teacher</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {safeSchedule.length > 0 ? (
                safeSchedule.map((slot, index) => (
                  <TableRow key={index}>
                    <TableCell className="font-medium">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-gray-400" />
                        {slot.time}
                      </div>
                    </TableCell>
                    <TableCell>
                      {slot.subject === "Break" ? (
                        <Badge variant="outline" className="bg-gray-100">
                          Lunch Break
                        </Badge>
                      ) : (
                        slot.subject
                      )}
                    </TableCell>
                    <TableCell>{slot.teacher}</TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={3} className="text-center py-4 text-gray-500">
                    No classes scheduled for this day
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Class Timetable</h1>
          <p className="text-gray-500">B.Tech 1st Year 2nd Semester, 2024-25</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <Select value={selectedDay} onValueChange={setSelectedDay}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select Day" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Days</SelectItem>
              <SelectItem value="monday">Monday</SelectItem>
              <SelectItem value="tuesday">Tuesday</SelectItem>
              <SelectItem value="wednesday">Wednesday</SelectItem>
              <SelectItem value="thursday">Thursday</SelectItem>
              <SelectItem value="friday">Friday</SelectItem>
              <SelectItem value="saturday">Saturday</SelectItem>
            </SelectContent>
          </Select>

          <Button variant="outline" className="w-full md:w-auto">
            <Download className="h-4 w-4 mr-2" />
            Download Timetable
          </Button>
        </div>

        <Card className="mb-8">
          <CardHeader className="pb-2">
            <CardTitle>Teacher Abbreviations</CardTitle>
            <CardDescription>Reference for teacher short names used in the timetable</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <span className="font-medium">AM</span>
                <span className="text-sm text-gray-500">Abijit Mitra</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">KBH</span>
                <span className="text-sm text-gray-500">Kausik Bhattacharya</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">PDS</span>
                <span className="text-sm text-gray-500">Pallavi Mam</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">MM</span>
                <span className="text-sm text-gray-500">Manshi Mukhopadhyay</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">SC</span>
                <span className="text-sm text-gray-500">SC</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">DBM</span>
                <span className="text-sm text-gray-500">DBM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">SM</span>
                <span className="text-sm text-gray-500">SM</span>
              </div>
              <div className="flex flex-col">
                <span className="font-medium">MGT</span>
                <span className="text-sm text-gray-500">MGT</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="cse-c" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="cse-a">CSE-A (Room 317)</TabsTrigger>
            <TabsTrigger value="cse-b">CSE-B (Room 318)</TabsTrigger>
            <TabsTrigger value="cse-c">CSE-C (Room 313)</TabsTrigger>
          </TabsList>

          <TabsContent value="cse-a">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>CSE-A Timetable</CardTitle>
                <CardDescription>Room No. 317</CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDay === "all"
                  ? Object.entries(getDaySchedule("cse-a", selectedDay)).map(([day, schedule]) =>
                      renderDaySchedule(schedule, day),
                    )
                  : renderDaySchedule(timetableData["cse-a"][selectedDay] || [], selectedDay)}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cse-b">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>CSE-B Timetable</CardTitle>
                <CardDescription>Room No. 318</CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDay === "all"
                  ? Object.entries(getDaySchedule("cse-b", selectedDay)).map(([day, schedule]) =>
                      renderDaySchedule(schedule, day),
                    )
                  : renderDaySchedule(timetableData["cse-b"][selectedDay] || [], selectedDay)}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cse-c">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>CSE-C Timetable</CardTitle>
                <CardDescription>Room No. 313</CardDescription>
              </CardHeader>
              <CardContent>
                {selectedDay === "all"
                  ? Object.entries(getDaySchedule("cse-c", selectedDay)).map(([day, schedule]) =>
                      renderDaySchedule(schedule, day),
                    )
                  : renderDaySchedule(timetableData["cse-c"][selectedDay] || [], selectedDay)}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
