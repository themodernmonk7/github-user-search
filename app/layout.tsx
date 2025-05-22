import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import GithubProvider from "@/context/github"
import { Navbar } from "@/components/layout"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Github Search User",
  description: "Search for a GitHub user to see their profile",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GithubProvider>
          <div className="min-h-screen bg-gray-50">
            <Navbar />
            {children}
          </div>
        </GithubProvider>
      </body>
    </html>
  )
}
