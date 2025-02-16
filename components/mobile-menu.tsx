"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-sm p-4 shadow-lg z-50">
          <nav className="flex flex-col space-y-4">
            <Link href="/who-am-i" className="hover:underline" onClick={() => setIsOpen(false)}>
              Who Am I
            </Link>
            <Link href="/memories" className="hover:underline" onClick={() => setIsOpen(false)}>
              Memories
            </Link>
            <Link href="/contacts" className="hover:underline" onClick={() => setIsOpen(false)}>
              Contacts
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

