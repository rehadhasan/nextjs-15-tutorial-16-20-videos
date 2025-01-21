"use client"
import Link from "next/link";
import {usePathname} from "next/navigation";

const navLinks = [
    {
        name: "Register",
        href: "/register",
    },
    {
        name: "Login",
        href: "/login",
    }
]

export default function Navbar() {
    const pathname = usePathname()
    return(
        <>
            {
                navLinks.map(link => {
                    const isActive = pathname === link.href || pathname.startsWith(link.href) && link.href !== "/";
                    return (
                        <Link key={link.name} className={isActive? "text-blue-800 mr-2 underline" : "text-black underline mr-2"} href={link.href}>
                            {link.name}
                        </Link>
                    )
                })
            }
        </>
    )
}