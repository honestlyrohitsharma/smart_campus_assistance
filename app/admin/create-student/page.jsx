"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { User, AlertCircle, CheckCircle2 } from "lucide-react"
import Footer from "@/components/footer"

export default function CreateStudentPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    roll: "",
    department: "Computer Science",
    semester: "2",
    section: "CSE-A",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")
    setSuccess(false)

    // Simulate API call
    setTimeout(() => {
      // In a real app, this would create a new student in the database
      setIsSubmitting(false)
      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        roll: "",
        department: "Computer Science",
        semester: "2",
        section: "CSE-A",
      })
    }, 1500)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Create Student Account</h1>
          <p className="text-gray-500">Principal's administrative panel for creating new student IDs</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-2/3">
            <Card>
              <CardHeader>
                <CardTitle>Create New Student</CardTitle>
                <CardDescription>Enter student details to create a new account</CardDescription>
              </CardHeader>
              <CardContent>
                {success && (
                  <Alert className="mb-6 bg-green-50 border-green-200">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                    <AlertTitle className="text-green-800">Success</AlertTitle>
                    <AlertDescription className="text-green-700">
                      Student account created successfully. The default password is "student123".
                    </AlertDescription>
                  </Alert>
                )}

                {error && (
                  <Alert variant="destructive" className="mb-6">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter student's full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="student@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="roll">Roll Number</Label>
                      <Input
                        id="roll"
                        name="roll"
                        value={formData.roll}
                        onChange={handleChange}
                        placeholder="e.g., CSC123"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department</Label>
                      <Select
                        value={formData.department}
                        onValueChange={(value) => handleSelectChange("department", value)}
                      >
                        <SelectTrigger id="department">
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Computer Science">Computer Science</SelectItem>
                          <SelectItem value="Electrical Engineering">Electrical Engineering</SelectItem>
                          <SelectItem value="Mechanical Engineering">Mechanical Engineering</SelectItem>
                          <SelectItem value="Civil Engineering">Civil Engineering</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="semester">Semester</Label>
                      <Select
                        value={formData.semester}
                        onValueChange={(value) => handleSelectChange("semester", value)}
                      >
                        <SelectTrigger id="semester">
                          <SelectValue placeholder="Select semester" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1st Semester</SelectItem>
                          <SelectItem value="2">2nd Semester</SelectItem>
                          <SelectItem value="3">3rd Semester</SelectItem>
                          <SelectItem value="4">4th Semester</SelectItem>
                          <SelectItem value="5">5th Semester</SelectItem>
                          <SelectItem value="6">6th Semester</SelectItem>
                          <SelectItem value="7">7th Semester</SelectItem>
                          <SelectItem value="8">8th Semester</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="section">Section</Label>
                      <Select value={formData.section} onValueChange={(value) => handleSelectChange("section", value)}>
                        <SelectTrigger id="section">
                          <SelectValue placeholder="Select section" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="CSE-A">CSE-A</SelectItem>
                          <SelectItem value="CSE-B">CSE-B</SelectItem>
                          <SelectItem value="CSE-C">CSE-C</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-end">
                <Button type="submit" onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? "Creating..." : "Create Student Account"}
                </Button>
              </CardFooter>
            </Card>
          </div>

          <div className="w-full md:w-1/3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5 text-purple-600" />
                  Principal's Access
                </CardTitle>
                <CardDescription>Administrative privileges</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                      <User className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-medium">Mrs. Sonali</h3>
                      <p className="text-sm text-gray-500">Principal, SVIST</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    As the Principal, you have the authority to create new student accounts and manage their access to
                    the Smart Campus Assistant.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-md">
                    <h4 className="font-medium text-blue-800 mb-1">Student Account Creation</h4>
                    <p className="text-sm text-blue-700">
                      New student accounts are created with the default password: "student123"
                    </p>
                  </div>

                  <div className="p-3 bg-amber-50 border border-amber-100 rounded-md">
                    <h4 className="font-medium text-amber-800 mb-1">Important Note</h4>
                    <p className="text-sm text-amber-700">
                      Please instruct students to change their default password after first login.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
