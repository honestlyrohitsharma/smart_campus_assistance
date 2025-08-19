"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bell, BookOpen, Calendar, MapPin, UserCheck, FileText, Trophy, Users, Sparkles, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Footer from "@/components/footer"
import { getCurrentClass } from "@/lib/users-data"

export default function Home() {
  const [userType, setUserType] = useState(null)
  const [userData, setUserData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [currentClass, setCurrentClass] = useState(null)
  const [isClient, setIsClient] = useState(false)
  const [currentDateTime, setCurrentDateTime] = useState(null)
  const router = useRouter()

  // First effect - Handle initial data loading and login check
  useEffect(() => {
    setIsClient(true)

    // Check if user is logged in
    if (typeof window !== "undefined") {
      const storedUserType = localStorage.getItem("userType")
      const storedUserData = localStorage.getItem("userData")

      setUserType(storedUserType)

      if (storedUserData) {
        const parsedUserData = JSON.parse(storedUserData)
        setUserData(parsedUserData)
      }

      // Set current date and time
      setCurrentDateTime(new Date())

      setIsLoading(false)
    }
  }, [])

  // Second effect - Handle redirect if not logged in
  useEffect(() => {
    if (!isLoading && !userType && typeof window !== "undefined") {
      router.push("/login")
    }
  }, [isLoading, router, userType])

  // Third effect - Update current class when userData changes
  useEffect(() => {
    if (!userData || !isClient) return

    if (userType === "student" && userData.section) {
      // Convert section like "CSE-A" to "cse-a" for timetable lookup
      const sectionKey = userData.section.toLowerCase()
      const currentClassInfo = getCurrentClass(sectionKey, "student")
      setCurrentClass(currentClassInfo)
    } else if (userType === "teacher" && userData.shortName) {
      const currentClassInfo = getCurrentClass(null, "teacher", userData.shortName)
      setCurrentClass(currentClassInfo)
    }
  }, [userData, userType, isClient])

  // Fourth effect - Set up interval for updating current class and time
  useEffect(() => {
    if (!userData || !isClient) return

    // Update current class and time every minute
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date())

      if (userType === "student" && userData.section) {
        const sectionKey = userData.section.toLowerCase()
        const currentClassInfo = getCurrentClass(sectionKey, "student")
        setCurrentClass(currentClassInfo)
      } else if (userType === "teacher" && userData.shortName) {
        const currentClassInfo = getCurrentClass(null, "teacher", userData.shortName)
        setCurrentClass(currentClassInfo)
      }
    }, 60000)

    return () => clearInterval(intervalId)
  }, [userData, userType, isClient])

  if (!isClient || isLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  if (isClient && !userType) {
    return null // Will redirect to login
  }

  // Format current date and time
  const formattedDate = currentDateTime
    ? currentDateTime.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : ""

  const formattedTime = currentDateTime
    ? currentDateTime.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
      })
    : ""

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=800')] opacity-10"></div>
        </div>
        <div className="container mx-auto px-4 py-16 relative">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-2 flex items-center">
                <Sparkles className="h-8 w-8 mr-2" />
                Smart Campus Assistant
              </h1>
              <p className="text-xl opacity-90">Your complete campus management solution</p>

              {userData && (
                <div className="mt-4 flex flex-wrap gap-2">
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    <Users className="h-5 w-5 mr-2" />
                    <span>Welcome, {userData.name}</span>
                  </div>
                  <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                    {userType === "student" ? (
                      <>
                        <BookOpen className="h-5 w-5 mr-2" />
                        <span>{userData.section} Student</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="h-5 w-5 mr-2" />
                        <span>{userData.designation}</span>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="hidden md:block">
              <div className="text-right">
                <div className="text-lg font-medium">{formattedDate}</div>
                <div className="text-xl font-bold">{formattedTime}</div>
              </div>
            </div>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Calendar className="h-5 w-5 mr-2" />
              <span>Academic Calendar</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Trophy className="h-5 w-5 mr-2" />
              <span>Campus Events</span>
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Users className="h-5 w-5 mr-2" />
              <span>Student Resources</span>
            </div>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        {/* Current Class Highlight */}
        {currentClass ? (
          <Card className="mb-8 border-l-4 border-l-green-500 bg-green-50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-green-600" />
                Current Class
              </CardTitle>
              <CardDescription>
                {userType === "student" ? "You are currently in this class" : "You are currently teaching this class"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <p className="text-sm font-medium text-gray-500">Subject</p>
                  <p className="font-medium text-lg">{currentClass.subject}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">Time</p>
                  <p className="font-medium">{currentClass.time}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">{userType === "student" ? "Teacher" : "Location"}</p>
                  <p className="font-medium">
                    {userType === "student" ? currentClass.teacher : currentClass.section?.toUpperCase() || "Unknown"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ) : (
          <Card className="mb-8 border-l-4 border-l-blue-500 bg-blue-50">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-600" />
                No Current Class
              </CardTitle>
              <CardDescription>
                {userType === "student"
                  ? "You don't have any class right now"
                  : "You're not teaching any class right now"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Check your schedule for upcoming classes.</p>
              <Button variant="outline" size="sm" className="mt-2">
                <Link href={userType === "student" ? "/class-schedule" : "/teacher-availability"}>View Schedule</Link>
              </Button>
            </CardContent>
          </Card>
        )}

        <section className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Dashboard</h2>
            <Button variant="outline" size="sm" className="gap-2">
              <Calendar className="h-4 w-4" />
              View Full Schedule
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/assignments" className="block transform transition-transform duration-300 hover:scale-105">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                    Assignments
                  </CardTitle>
                  <CardDescription>View and submit your assignments</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-red-500 font-medium">2 assignments due this week</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/notices" className="block transform transition-transform duration-300 hover:scale-105">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-amber-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Bell className="h-5 w-5 mr-2 text-amber-600" />
                    Notices
                  </CardTitle>
                  <CardDescription>Campus announcements and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">5 new notices today</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/class-timetable" className="block transform transition-transform duration-300 hover:scale-105">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-indigo-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-indigo-600" />
                    Class Timetable
                  </CardTitle>
                  <CardDescription>View class schedules and teachers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    {userType === "student" && userData?.section ? userData.section : "CSE A, B, C"} - 1st Year 2nd
                    Semester
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/campus-map" className="block transform transition-transform duration-300 hover:scale-105">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2 text-green-600" />
                    Campus Map
                  </CardTitle>
                  <CardDescription>Navigate around campus</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">Interactive map with building locations</p>
                </CardContent>
              </Card>
            </Link>

            <Link href="/attendance" className="block transform transition-transform duration-300 hover:scale-105">
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <UserCheck className="h-5 w-5 mr-2 text-purple-600" />
                    Attendance
                  </CardTitle>
                  <CardDescription>Track your attendance records</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    Current attendance:{" "}
                    {userData?.attendance
                      ? Math.round(
                          Object.values(userData.attendance).reduce((sum, val) => sum + val, 0) /
                            Object.values(userData.attendance).length,
                        )
                      : 87}
                    %
                  </p>
                </CardContent>
              </Card>
            </Link>

            {userType === "student" ? (
              <Link
                href="/class-schedule"
                className="block transform transition-transform duration-300 hover:scale-105"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-rose-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-rose-600" />
                      Class Schedule
                    </CardTitle>
                    <CardDescription>View your weekly class schedule</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">3 classes today</p>
                  </CardContent>
                </Card>
              </Link>
            ) : (
              <Link
                href="/student-attendance"
                className="block transform transition-transform duration-300 hover:scale-105"
              >
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-rose-500">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="h-5 w-5 mr-2 text-rose-600" />
                      Student Attendance
                    </CardTitle>
                    <CardDescription>Take and manage student attendance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500">Record attendance and generate reports</p>
                  </CardContent>
                </Card>
              </Link>
            )}
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-6">Upcoming Academic Events</h2>
          <Card className="border border-purple-100 shadow-md">
            <CardContent className="p-6">
              <ul className="space-y-4">
                <li className="flex justify-between items-center p-3 hover:bg-purple-50 rounded-lg transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 text-purple-700 p-2 rounded-lg">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Even Semester Examination</p>
                      <p className="text-sm text-gray-500">All departments</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">May 2 - May 15, 2025</p>
                </li>
                <li className="flex justify-between items-center p-3 hover:bg-purple-50 rounded-lg transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="bg-pink-100 text-pink-700 p-2 rounded-lg">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Campus Recruitment Drive</p>
                      <p className="text-sm text-gray-500">Placement Cell</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">May 5, 2025</p>
                </li>
                <li className="flex justify-between items-center p-3 hover:bg-purple-50 rounded-lg transition-all duration-300 hover:shadow-md transform hover:-translate-y-1">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 text-blue-700 p-2 rounded-lg">
                      <Users className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-medium">Summer Internship Program</p>
                      <p className="text-sm text-gray-500">Computer Science Department</p>
                    </div>
                  </div>
                  <p className="text-sm font-medium text-gray-700">May 25, 2025</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </section>
      </main>

      <Footer />
    </div>
  )
}
