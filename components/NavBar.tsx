'use client'
import React from 'react'
import { MobileMenu } from "@/components/mobile-menu"
import Link from "next/link"
import {usePathname } from 'next/navigation'
import Image from "next/image"

function NavBar() {
    const pathname = usePathname();
    console.log(pathname)
  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 border-b">
              <div className="text-lg container mx-auto flex justify-between items-center py-4">
                <Link href="/" className="flex items-center">
                  <Image 
                    src="/memoryLaneLogo.svg"
                    alt="Memory Lane Logo"
                    width={200}
                    height={30}
                    priority
                  />
                </Link>

                <div className="hidden md:flex items-center space-x-4">
                  
                  <Link href="/memories" className={`text-xl hover:underline ${pathname === '/memories' ? 'text-selectedtextcolor' : 'text-primary'}`}>
                    Memories
                  </Link>
                  <Link href="/contacts" className={`text-xl hover:underline ${pathname === '/contacts' ? 'text-selectedtextcolor' : 'text-primary'}`}>
                    Contacts
                  </Link>
                  <Link href="/who-am-i" className={` text-xl hover:underline ${pathname === '/who-am-i' ? 'text-selectedtextcolor' : 'text-primary'}`}>
                    Who Am I
                  </Link>

                </div>
                <MobileMenu />
              </div>
            </nav>
    </div>
  )
}

export default NavBar
