"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search, User, GraduationCap } from "lucide-react"
import { teachers, students } from "@/lib/users-data"
import Footer from "@/components/footer"

export default function TestLoginPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedUser, setSelectedUser] = useState(null)
  const [loginStatus, setLoginStatus] = useState(null)

  const filteredTeachers = teachers.filter(
    (teacher) =>
      teacher.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      teacher.id.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.roll.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const handleSelectUser = (user, type) => {
    setSelectedUser({ ...user, type })
    setLoginStatus(null)
  }

  const handleTestLogin = () => {
    // Simulate login process
    setTimeout(() => {
      setLoginStatus("success")
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Test Login</h1>
          <p className="text-gray-500">Test login credentials for teachers and students</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>User Accounts</CardTitle>
                <CardDescription>Select a user to test login credentials</CardDescription>
                <div className="relative mt-4">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <Input
                    placeholder="Search by name, email, ID or roll number..."
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="teachers" className="w-full">
                  <TabsList className="grid w-full grid-cols-2 mb-6">
                    <TabsTrigger value="teachers" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Teachers
                    </TabsTrigger>
                    <TabsTrigger value="students" className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4" />
                      Students
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="teachers">
                    <div className="border rounded-md">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Department</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredTeachers.map((teacher) => (
                            <TableRow key={teacher.id}>
                              <TableCell>{teacher.id}</TableCell>
                              <TableCell>
                                <div className="font-medium">{teacher.name}</div>
                                <div className="text-sm text-gray-500">{teacher.shortName}</div>
                              </TableCell>
                              <TableCell>{teacher.email}</TableCell>
                              <TableCell>{teacher.department}</TableCell>
                              <TableCell className="text-right">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleSelectUser(teacher, "teacher")}
                                >
                                  Select
                                </Button>
                              </TableCell>
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
                    </div>
                  </TabsContent>

                  <TabsContent value="students">
                    <div className="border rounded-md">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>ID/Roll</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Section</TableHead>
                            <TableHead className="text-right">Action</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredStudents.map((student) => (
                            <TableRow key={student.id}>
                              <TableCell>
                                <div className="font-medium">{student.id}</div>
                                <div className="text-sm text-gray-500">{student.roll}</div>
                              </TableCell>
                              <TableCell>{student.name}</TableCell>
                              <TableCell>{student.email}</TableCell>
                              <TableCell>{student.section}</TableCell>
                              <TableCell className="text-right">
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => handleSelectUser(student, "student")}
                                >
                                  Select
                                </Button>
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
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Login Test</CardTitle>
                <CardDescription>Test login with selected user credentials</CardDescription>
              </CardHeader>
              <CardContent>
                {selectedUser ? (
                  <div className="space-y-4">
                    <div className="p-4 bg-gray-50 rounded-md">
                      <div className="flex items-center gap-3 mb-3">
                        {selectedUser.type === "teacher" ? (
                          <User className="h-5 w-5 text-purple-600" />
                        ) : (
                          <GraduationCap className="h-5 w-5 text-purple-600" />
                        )}
                        <Badge>{selectedUser.type === "teacher" ? "Teacher" : "Student"}</Badge>
                      </div>
                      <h3 className="font-medium text-lg">{selectedUser.name}</h3>
                      <p className="text-sm text-gray-500">
                        {selectedUser.type === "teacher" ? selectedUser.id : selectedUser.roll}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <div className="space-y-2">
                        <Label htmlFor="username">Username/ID</Label>
                        <Input
                          id="username"
                          value={selectedUser.type === "teacher" ? selectedUser.email : selectedUser.roll}
                          readOnly
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="text" value={selectedUser.password} readOnly />
                      </div>
                    </div>

                    {loginStatus && (
                      <div className="p-3 bg-green-50 border border-green-200 rounded-md text-green-800">
                        <p className="font-medium">Login successful!</p>
                        <p className="text-sm">You can now access the dashboard as {selectedUser.name}.</p>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center py-12 text-center text-gray-500">
                    <User className="h-12 w-12 mb-4 text-gray-400" />
                    <h3 className="text-lg font-medium mb-1">No User Selected</h3>
                    <p>Please select a user from the list to test login</p>
                  </div>
                )}
              </CardContent>
              <CardFooter>
                <Button className="w-full" disabled={!selectedUser} onClick={handleTestLogin}>
                  Test Login
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>

        <div className="mt-8 bg-purple-50 rounded-lg border border-purple-200 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
              <User className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-lg font-medium">Mrs. Sonali</h3>
              <p className="text-sm text-purple-700">Principal, SVIST</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-md border border-purple-100">
            <h4 className="font-medium mb-2 text-purple-800">Administrator Rights</h4>
            <p className="text-sm text-gray-600 mb-2">
              The Principal has the authority to create new student IDs for login access to the Smart Campus Assistant.
            </p>
            <p className="text-sm text-gray-600">
              New students should contact the Principal's office for ID creation and system access.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
