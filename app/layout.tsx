import "./globals.css"
import { Inter } from "next/font/google"
import { useParams } from 'next/navigation'

import NavBar from "@/components/NavBar"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Alzheimer's Patient Memory App",
  description: "An application to help Alzheimer's patients relive memories",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en" >
      <body className={inter.className}>
          <div className="min-h-screen">
            <NavBar></NavBar>
            <main className="pt-16">{children}</main>
          </div>
      </body>
    </html>
  )
}

