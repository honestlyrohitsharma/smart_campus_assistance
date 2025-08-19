import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays } from "lucide-react"
import Footer from "@/components/footer"

export default function NoticesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-2xl font-bold text-gray-900">Notices</h1>
          <p className="text-gray-500">Campus announcements and updates</p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="all" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="events">Events</TabsTrigger>
            <TabsTrigger value="administrative">Administrative</TabsTrigger>
          </TabsList>

          <TabsContent value="all">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Mid-term Examination Schedule</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        Posted: May 1, 2025
                      </CardDescription>
                    </div>
                    <Badge>Academic</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    The mid-term examinations for all departments will be held from May 15 to May 25, 2025. The detailed
                    schedule has been published on the examination portal. Students are advised to check their
                    respective department schedules and prepare accordingly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Campus Recruitment Drive</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        Posted: April 28, 2025
                      </CardDescription>
                    </div>
                    <Badge className="bg-purple-500">Events</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    The Placement Cell is organizing a campus recruitment drive on May 5, 2025. Several leading
                    companies from the IT, finance, and consulting sectors will be participating. Eligible students must
                    register through the placement portal by May 2, 2025.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Library Timings Extended</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        Posted: April 25, 2025
                      </CardDescription>
                    </div>
                    <Badge className="bg-amber-500">Administrative</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    In view of the upcoming examinations, the central library will remain open from 8:00 AM to 12:00 AM
                    starting May 5, 2025 until the end of the examination period. Students are encouraged to utilize
                    this extended facility for their exam preparations.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="academic">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Mid-term Examination Schedule</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        Posted: May 1, 2025
                      </CardDescription>
                    </div>
                    <Badge>Academic</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    The mid-term examinations for all departments will be held from May 15 to May 25, 2025. The detailed
                    schedule has been published on the examination portal. Students are advised to check their
                    respective department schedules and prepare accordingly.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Research Paper Submission Deadline</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        Posted: April 20, 2025
                      </CardDescription>
                    </div>
                    <Badge>Academic</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    The deadline for submitting research papers for the Annual Academic Journal has been extended to May
                    30, 2025. Students and faculty members interested in publishing their research work should submit
                    their papers according to the guidelines available on the research portal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="events">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Campus Recruitment Drive</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        Posted: April 28, 2025
                      </CardDescription>
                    </div>
                    <Badge className="bg-purple-500">Events</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    The Placement Cell is organizing a campus recruitment drive on May 5, 2025. Several leading
                    companies from the IT, finance, and consulting sectors will be participating. Eligible students must
                    register through the placement portal by May 2, 2025.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Tech Symposium 2025</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        Posted: April 15, 2025
                      </CardDescription>
                    </div>
                    <Badge className="bg-purple-500">Events</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    The Computer Science Department is organizing Tech Symposium 2025 on May 10, 2025. The event will
                    feature technical workshops, coding competitions, and guest lectures by industry experts.
                    Registration is open to all students. Visit the department website for more details.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="administrative">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Library Timings Extended</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        Posted: April 25, 2025
                      </CardDescription>
                    </div>
                    <Badge className="bg-amber-500">Administrative</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    In view of the upcoming examinations, the central library will remain open from 8:00 AM to 12:00 AM
                    starting May 5, 2025 until the end of the examination period. Students are encouraged to utilize
                    this extended facility for their exam preparations.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle>Fee Payment Reminder</CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <CalendarDays className="h-4 w-4 mr-1" />
                        Posted: April 10, 2025
                      </CardDescription>
                    </div>
                    <Badge className="bg-amber-500">Administrative</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500">
                    This is a reminder that the last date for payment of tuition fees for the upcoming semester is May
                    31, 2025. Students are advised to clear all outstanding dues before the deadline to avoid late
                    payment penalties. Payment can be made online through the student portal.
                  </p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <Footer />
    </div>
  )
}
