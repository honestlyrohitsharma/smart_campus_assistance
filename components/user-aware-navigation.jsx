"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  BookOpen,
  Bell,
  MapPin,
  UserCheck,
  Calendar,
  LogOut,
  User,
  Sparkles,
  FileText,
  Clock,
  Settings,
  GraduationCap,
  BookOpenCheck,
} from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
// Add import for RippleButton
import { RippleButton } from "@/components/ripple-button"

export default function UserAwareNavigation() {
  const [userType, setUserType] = useState(null)
  const [userData, setUserData] = useState(null)
  const [isClient, setIsClient] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsClient(true)
    const storedUserType = localStorage.getItem("userType")
    const storedUserData = localStorage.getItem("userData")

    setUserType(storedUserType)
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData))
    }
  }, [])

  if (!isClient) {
    return null // Return null on server-side to prevent hydration mismatch
  }

  // If on login page, don't show navigation
  if (pathname === "/login") {
    return null
  }

  const handleLogout = () => {
    localStorage.removeItem("userType")
    localStorage.removeItem("userData")
    window.location.href = "/login"
  }

  // Get user initials for avatar
  const getInitials = (name) => {
    if (!name) return "U"
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  return (
    <header className="bg-white shadow-md border-b border-purple-100">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center">
            <Sparkles className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
            Smart Campus Assistant
          </h1>
        </Link>
        <div className="flex items-center gap-4">
          {userData && (
            <div className="hidden md:flex items-center gap-2">
              {userType === "teacher" && (
                <div className="bg-purple-100 text-purple-800 px-4 py-2 rounded-md font-bold flex items-center">
                  <BookOpenCheck className="h-5 w-5 mr-2 text-purple-600" />
                  Teacher: {userData.name}
                </div>
              )}
              {userType === "student" && (
                <div className="bg-purple-50 px-3 py-1.5 rounded-full flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-purple-600" />
                  <span className="text-sm font-medium text-purple-800">{userData.name}</span>
                  <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                    {userData.role || userType}
                  </Badge>
                  {userData.section && (
                    <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                      {userData.section}
                    </Badge>
                  )}
                </div>
              )}
            </div>
          )}
          {userData && (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback className="bg-purple-100 text-purple-600">
                      {getInitials(userData.name)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">{userData.name}</p>
                    <p className="text-xs leading-none text-muted-foreground">{userData.email}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Badge variant="outline" className="bg-purple-100 text-purple-800 border-purple-200">
                        {userData.role || userType}
                      </Badge>
                      {userData.section && (
                        <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                          {userData.section}
                        </Badge>
                      )}
                    </div>
                    <p className="text-xs leading-none text-muted-foreground mt-1">
                      {userType === "student" ? `Roll: ${userData.roll}` : `ID: ${userData.id}`}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                {userType === "teacher" && (
                  <DropdownMenuItem asChild>
                    <Link href="/set-availability">
                      <Settings className="mr-2 h-4 w-4" />
                      <span>Set Availability</span>
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )}
          <Button
            variant="outline"
            size="sm"
            onClick={handleLogout}
            className="border-purple-200 text-purple-600 hover:bg-purple-50"
          >
            <LogOut className="h-4 w-4 mr-2" />
            <span className="hidden sm:inline">Logout</span>
          </Button>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-2">
        {/* Replace a few buttons with RippleButton to demonstrate the effect */}
        <nav className="flex overflow-x-auto pb-2 gap-2 scrollbar-hide">
          <Link href="/">
            <RippleButton
              variant={pathname === "/" ? "default" : "outline"}
              size="sm"
              className={
                pathname === "/"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50"
              }
            >
              Dashboard
            </RippleButton>
          </Link>
          <Link href="/assignments">
            <RippleButton
              variant={pathname === "/assignments" ? "default" : "outline"}
              size="sm"
              className={
                pathname === "/assignments"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50"
              }
            >
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Assignments</span>
            </RippleButton>
          </Link>
          <Link href="/notices">
            <Button
              variant={pathname === "/notices" ? "default" : "outline"}
              size="sm"
              className={
                pathname === "/notices"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 hover:scale-105 active:scale-95"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105 active:scale-95"
              }
            >
              <Bell className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Notices</span>
            </Button>
          </Link>
          <Link href="/campus-map">
            <Button
              variant={pathname === "/campus-map" ? "default" : "outline"}
              size="sm"
              className={
                pathname === "/campus-map"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 hover:scale-105 active:scale-95"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105 active:scale-95"
              }
            >
              <MapPin className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Campus Map</span>
            </Button>
          </Link>
          <Link href="/attendance">
            <Button
              variant={pathname === "/attendance" ? "default" : "outline"}
              size="sm"
              className={
                pathname === "/attendance"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 hover:scale-105 active:scale-95"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105 active:scale-95"
              }
            >
              <UserCheck className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Attendance</span>
            </Button>
          </Link>
          <Link href="/class-timetable">
            <Button
              variant={pathname === "/class-timetable" ? "default" : "outline"}
              size="sm"
              className={
                pathname === "/class-timetable"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 hover:scale-105 active:scale-95"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105 active:scale-95"
              }
            >
              <Clock className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Class Timetable</span>
            </Button>
          </Link>
          {userType === "student" ? (
            <Link href="/class-schedule">
              <Button
                variant={pathname === "/class-schedule" ? "default" : "outline"}
                size="sm"
                className={
                  pathname === "/class-schedule"
                    ? "bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 hover:scale-105 active:scale-95"
                    : "border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105 active:scale-95"
                }
              >
                <Calendar className="h-4 w-4 mr-2" />
                <span className="hidden sm:inline">Class Schedule</span>
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/teacher-availability">
                <Button
                  variant={pathname === "/teacher-availability" ? "default" : "outline"}
                  size="sm"
                  className={
                    pathname === "/teacher-availability"
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 hover:scale-105 active:scale-95"
                      : "border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105 active:scale-95"
                  }
                >
                  <Calendar className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Teacher Schedule</span>
                </Button>
              </Link>
              <Link href="/student-attendance">
                <Button
                  variant={pathname === "/student-attendance" ? "default" : "outline"}
                  size="sm"
                  className={
                    pathname === "/student-attendance"
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 hover:scale-105 active:scale-95"
                      : "border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105 active:scale-95"
                  }
                >
                  <FileText className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Student Attendance</span>
                </Button>
              </Link>
              <Link href="/set-availability">
                <Button
                  variant={pathname === "/set-availability" ? "default" : "outline"}
                  size="sm"
                  className={
                    pathname === "/set-availability"
                      ? "bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 hover:scale-105 active:scale-95"
                      : "border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105 active:scale-95"
                  }
                >
                  <Settings className="h-4 w-4 mr-2" />
                  <span className="hidden sm:inline">Set Availability</span>
                </Button>
              </Link>
            </>
          )}
          <Link href="/test-login">
            <Button
              variant={pathname === "/test-login" ? "default" : "outline"}
              size="sm"
              className={
                pathname === "/test-login"
                  ? "bg-gradient-to-r from-purple-600 to-pink-500 transition-all duration-300 hover:scale-105 active:scale-95"
                  : "border-purple-200 text-purple-600 hover:bg-purple-50 transition-all duration-300 hover:scale-105 active:scale-95"
              }
            >
              <User className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Test Login</span>
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  )
}
