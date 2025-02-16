'use client'
import NavBar from "@/components/NavBar"
import { usePathname } from 'next/navigation'

export default function ClientLayout({
    children,
    }: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    const showNavBar = pathname !== '/';

    return (
        <div className = "min-h-screen">
            {showNavBar && <NavBar/>}
            <main className={showNavBar ? "pt-16" : ""}>{children}</main>
        </div>
    );
}