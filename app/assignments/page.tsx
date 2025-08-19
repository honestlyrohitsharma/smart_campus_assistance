"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Clock, Download, Upload, FileText, CheckCircle } from "lucide-react"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

// Add import for the animated card components
import {
  AnimatedCard,
  AnimatedCardHeader,
  AnimatedCardTitle,
  AnimatedCardDescription,
  AnimatedCardContent,
  AnimatedCardFooter,
} from "@/components/animated-card"

export default function AssignmentsPage() {
  const [userType, setUserType] = useState(null)
  const [userData, setUserData] = useState(null)
  const [isClient, setIsClient] = useState(false)
  const [selectedFile, setSelectedFile] = useState(null)
  const [selectedFileEnglish, setSelectedFileEnglish] = useState(null)
  const [gradeValue, setGradeValue] = useState("")
  const [feedback, setFeedback] = useState("")

  useEffect(() => {
    setIsClient(true)
    // Get user data from localStorage
    if (typeof window !== "undefined") {
      const storedUserType = localStorage.getItem("userType")
      const storedUserData = localStorage.getItem("userData")

      setUserType(storedUserType)
      if (storedUserData) {
        setUserData(JSON.parse(storedUserData))
      }
    }
  }, [])

  const handleFileChange = (e, assignmentType) => {
    if (e.target.files.length > 0) {
      if (assignmentType === "programming") {
        setSelectedFile(e.target.files[0])
      } else if (assignmentType === "english") {
        setSelectedFileEnglish(e.target.files[0])
      }
    }
  }

  const handleSubmitAssignment = (assignmentId, assignmentType) => {
    const fileToSubmit = assignmentType === "programming" ? selectedFile : selectedFileEnglish

    if (fileToSubmit) {
      alert(`Assignment submitted: ${fileToSubmit.name}`)
      if (assignmentType === "programming") {
        setSelectedFile(null)
      } else if (assignmentType === "english") {
        setSelectedFileEnglish(null)
      }
    } else {
      alert("Please select a file to upload")
    }
  }

  const handleGradeSubmit = (studentId, assignmentId) => {
    alert(`Grade ${gradeValue} submitted for student ${studentId} on assignment ${assignmentId}`)
    setGradeValue("")
    setFeedback("")
  }

  if (!isClient) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Assignments</h1>
          <p className="text-gray-500">View and manage your course assignments</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue={userType === "teacher" ? "all" : "pending"} className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            {userType === "teacher" ? (
              <>
                <TabsTrigger value="all">All Assignments</TabsTrigger>
                <TabsTrigger value="submitted">Submissions</TabsTrigger>
                <TabsTrigger value="graded">Graded</TabsTrigger>
              </>
            ) : (
              <>
                <TabsTrigger value="pending">Pending</TabsTrigger>
                <TabsTrigger value="submitted">Submitted</TabsTrigger>
                <TabsTrigger value="graded">Graded</TabsTrigger>
              </>
            )}
          </TabsList>

          {userType === "teacher" ? (
            // Teacher view
            <>
              <TabsContent value="all">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Programming for Problem Solving</CardTitle>
                          <CardDescription>ESCS 201: Abhijit Mitra</CardDescription>
                        </div>
                        <Badge className="ml-2">Assignment CA2</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Implement a C program to solve the given problem. Include proper documentation and test cases.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Due: May 15, 2025 at 11:59 PM</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Assignment
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>English Communication</CardTitle>
                          <CardDescription>HMHU 201: Pallabi Gharami</CardDescription>
                        </div>
                        <Badge className="ml-2">Assignment CA-3</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Write an essay on the topic "The Impact of Technology on Modern Communication". Include
                        references and follow proper formatting.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Due: May 20, 2025 at 11:59 PM</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Assignment
                      </Button>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Thermodynamics Problem</CardTitle>
                          <CardDescription>CSE-C: Dinabandhu Manna</CardDescription>
                        </div>
                        <Badge className="ml-2">Assignment</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Solve the given thermodynamics problems and submit your solutions with proper explanations.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Due: May 18, 2025 at 11:59 PM</span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      <Button variant="outline" size="sm">
                        <Upload className="h-4 w-4 mr-2" />
                        Upload Assignment
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="submitted">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Programming for Problem Solving</CardTitle>
                          <CardDescription>ESCS 201: Abhijit Mitra</CardDescription>
                        </div>
                        <Badge className="ml-2 bg-amber-500">2 Submissions</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 border rounded-md">
                          <div className="flex justify-between items-center mb-2">
                            <div className="font-medium">Rohit Sharma (CSC001)</div>
                            <div className="text-sm text-gray-500">Submitted: May 5, 2025</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download Submission
                            </Button>
                            <div className="flex items-center gap-2">
                              <Input
                                type="text"
                                placeholder="Grade"
                                className="w-20"
                                value={gradeValue}
                                onChange={(e) => setGradeValue(e.target.value)}
                              />
                              <Button size="sm" onClick={() => handleGradeSubmit("S001", "CA2")}>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Grade
                              </Button>
                            </div>
                          </div>
                        </div>

                        <div className="p-3 border rounded-md">
                          <div className="flex justify-between items-center mb-2">
                            <div className="font-medium">Shreya Ranjan (CSC002)</div>
                            <div className="text-sm text-gray-500">Submitted: May 6, 2025</div>
                          </div>
                          <div className="flex justify-between items-center">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download Submission
                            </Button>
                            <div className="flex items-center gap-2">
                              <Input
                                type="text"
                                placeholder="Grade"
                                className="w-20"
                                value={gradeValue}
                                onChange={(e) => setGradeValue(e.target.value)}
                              />
                              <Button size="sm" onClick={() => handleGradeSubmit("S002", "CA2")}>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Grade
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="graded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Previous Year Questions</CardTitle>
                          <CardDescription>ESCS 201: Abhijit Mitra</CardDescription>
                        </div>
                        <Badge className="ml-2 bg-green-500">All Graded</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-3 border rounded-md">
                          <div className="flex justify-between items-center mb-2">
                            <div className="font-medium">Rohit Sharma (CSC001)</div>
                            <Badge className="bg-green-500">Grade: A</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download Submission
                            </Button>
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-2" />
                              View Feedback
                            </Button>
                          </div>
                        </div>

                        <div className="p-3 border rounded-md">
                          <div className="flex justify-between items-center mb-2">
                            <div className="font-medium">Shreya Ranjan (CSC002)</div>
                            <Badge className="bg-green-500">Grade: A+</Badge>
                          </div>
                          <div className="flex justify-between items-center">
                            <Button variant="outline" size="sm">
                              <Download className="h-4 w-4 mr-2" />
                              Download Submission
                            </Button>
                            <Button variant="outline" size="sm">
                              <FileText className="h-4 w-4 mr-2" />
                              View Feedback
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </>
          ) : (
            // Student view
            <>
              <TabsContent value="pending">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-animation">
                  <AnimatedCard delay={0.1}>
                    <AnimatedCardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <AnimatedCardTitle>Programming for Problem Solving</AnimatedCardTitle>
                          <AnimatedCardDescription>ESCS 201: Abhijit Mitra</AnimatedCardDescription>
                        </div>
                        <Badge variant="destructive" className="ml-2">
                          Due in 2 days
                        </Badge>
                      </div>
                    </AnimatedCardHeader>
                    <AnimatedCardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Implement a C program to solve the given problem. Include proper documentation and test cases.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Due: May 15, 2025 at 11:59 PM</span>
                      </div>
                      {selectedFile && (
                        <div className="mt-2 p-2 bg-blue-50 rounded-md text-sm">Selected file: {selectedFile.name}</div>
                      )}
                    </AnimatedCardContent>
                    <AnimatedCardFooter className="flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        className="transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Instructions
                      </Button>
                      <div className="flex gap-2">
                        <Input
                          type="file"
                          id="assignment-file-programming"
                          className="hidden"
                          onChange={(e) => handleFileChange(e, "programming")}
                        />
                        <Label
                          htmlFor="assignment-file-programming"
                          className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 hover:scale-105 active:scale-95"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Choose File
                        </Label>
                        <Button
                          size="sm"
                          onClick={() => handleSubmitAssignment("CA2", "programming")}
                          className="transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                          Submit Assignment
                        </Button>
                      </div>
                    </AnimatedCardFooter>
                  </AnimatedCard>

                  <AnimatedCard delay={0.2}>
                    <AnimatedCardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <AnimatedCardTitle>English Communication</AnimatedCardTitle>
                          <AnimatedCardDescription>HMHU 201: Pallabi Gharami</AnimatedCardDescription>
                        </div>
                        <Badge variant="destructive" className="ml-2">
                          Due in 5 days
                        </Badge>
                      </div>
                    </AnimatedCardHeader>
                    <AnimatedCardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Write an essay on the topic "The Impact of Technology on Modern Communication". Include
                        references and follow proper formatting.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Due: May 20, 2025 at 11:59 PM</span>
                      </div>
                      {selectedFileEnglish && (
                        <div className="mt-2 p-2 bg-blue-50 rounded-md text-sm">
                          Selected file: {selectedFileEnglish.name}
                        </div>
                      )}
                    </AnimatedCardContent>
                    <AnimatedCardFooter className="flex justify-between">
                      <Button
                        variant="outline"
                        size="sm"
                        className="transition-all duration-300 hover:scale-105 active:scale-95"
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Download Instructions
                      </Button>
                      <div className="flex gap-2">
                        <Input
                          type="file"
                          id="assignment-file-english"
                          className="hidden"
                          onChange={(e) => handleFileChange(e, "english")}
                        />
                        <Label
                          htmlFor="assignment-file-english"
                          className="cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 hover:scale-105 active:scale-95"
                        >
                          <Upload className="h-4 w-4 mr-2" />
                          Choose File
                        </Label>
                        <Button
                          size="sm"
                          onClick={() => handleSubmitAssignment("CA3", "english")}
                          className="transition-all duration-300 hover:scale-105 active:scale-95"
                        >
                          Submit Assignment
                        </Button>
                      </div>
                    </AnimatedCardFooter>
                  </AnimatedCard>
                </div>
              </TabsContent>

              <TabsContent value="submitted">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Previous Year Questions</CardTitle>
                          <CardDescription>ESCS 201: Abhijit Mitra</CardDescription>
                        </div>
                        <Badge className="ml-2 bg-amber-500">Submitted</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Solve the previous year questions and submit your solutions with proper explanations.
                      </p>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Submitted: May 5, 2025 at 10:23 PM</span>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        View Submission
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="graded">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle>Multiple Choice Questions</CardTitle>
                          <CardDescription>ESCS 201: Abhijit Mitra</CardDescription>
                        </div>
                        <Badge className="ml-2 bg-green-500">Grade: A</Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-gray-500 mb-4">
                        Multiple choice questions on programming concepts and problem-solving techniques.
                      </p>
                      <div className="flex items-center text-sm text-gray-500 mb-2">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>Graded: April 28, 2025</span>
                      </div>
                      <p className="text-sm font-medium">Feedback:</p>
                      <p className="text-sm text-gray-500">
                        Excellent work! You demonstrated a strong understanding of programming concepts and
                        problem-solving techniques.
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button variant="outline" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        View Feedback
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </>
          )}
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
