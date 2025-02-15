import "./globals.css"
import { Inter } from "next/font/google"

import { MobileMenu } from "@/components/mobile-menu"
import Link from "next/link"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Alzheimer's Patient Memory App",
  description: "An application to help Alzheimer's patients relive memories",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>

          <div className="min-h-screen bg-background text-foreground">
            <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
              <div className="container mx-auto flex justify-between items-center py-4">
                <Link href="/" className="text-2xl font-bold">
                  Memory Lane
                </Link>
                <div className="hidden md:flex items-center space-x-4">
                  <Link href="/who-am-i" className="hover:underline">
                    Who Am I
                  </Link>
                  <Link href="/memories" className="hover:underline">
                    Memories
                  </Link>
                  <Link href="/contacts" className="hover:underline">
                    Contacts
                  </Link>
                </div>
                <MobileMenu />
              </div>
            </nav>
            <main className="pt-16">{children}</main>
          </div>

      </body>
    </html>
  )
}



import './globals.css'