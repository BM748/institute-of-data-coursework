'use client'
import Link from "next/link";





export default function Navbar(){

    return (
        <nav>
            <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/dashboard">Dashboard</Link></li>
                <li><Link href="/about">about</Link></li>
             </ul>
        </nav>
           
    )
}