import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="container mx-auto px-4 py-6">
          <Skeleton className="h-8 w-48 mb-2" />
          <Skeleton className="h-4 w-64" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/3 space-y-4">
            <Skeleton className="h-10 w-full" />

            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-4 border-b">
                <Skeleton className="h-6 w-36" />
              </div>
              <div className="divide-y max-h-[400px] overflow-y-auto">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <div key={i} className="p-4">
                      <div className="flex items-center">
                        <Skeleton className="h-5 w-5 mr-3 rounded-full" />
                        <div className="w-full">
                          <Skeleton className="h-5 w-full max-w-[150px] mb-1" />
                          <Skeleton className="h-4 w-full max-w-[100px]" />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="h-[500px] relative bg-gray-100 rounded-lg shadow">
              <div className="absolute inset-0 flex items-center justify-center">
                <Skeleton className="h-full w-full rounded-lg" />
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-2">
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
              <Skeleton className="h-9 w-full" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
