import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import UserAwareNavigation from "@/components/user-aware-navigation"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Smart Campus Assistant",
  description: "A comprehensive campus management system for students and teachers",
    generator: 'v0.app'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <UserAwareNavigation />
          <div className="animate-in fade-in duration-500">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
