import { UserButton } from '@clerk/nextjs'
import { Bell, ChevronDown, Search } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import Mobile_Menu from './Mobile_Menu'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <header className='text-white flex items-center fixed justify-between top-0 z-50 w-full px-4 py-4'>
            <div className='flex items-center space-x-2 md:space-x-10'>
                <Link href={"/"}>
                    <img
                        src="/netflix_png_logo.png"
                        alt="Logo"
                        width={100}
                        height={100}
                        className='cursor-pointer object-contain'
                    />
                </Link>

                {/* Mobile Menu component */}

                <div className='"md:hidden'>
                    <Mobile_Menu/>
                </div>

                {/* Desktop Navigation */}
                <ul className='hidden space-x-4 md:flex'>
                    <li className="headerLink">
                        <Link href="/">Home</Link>
                    </li>
                    <li className="headerLink">
                        <Link href="/tv-shows">TV Shows</Link>
                    </li>
                    <li className="headerLink">
                        <Link href="/movies">Movies</Link>
                    </li>
                    <li className="headerLink">
                        <Link href="/new-popular">New & Popular</Link>
                    </li>
                    <li className="headerLink">
                        <Link href="/my-list">My List</Link>
                    </li>
                </ul>
            </div>

            <div className="flex items-center space-x-4 text-sm font-light">
                <Search className="hidden h-6 w-6 sm:inline cursor-pointer" />
                <p className="hidden lg:inline cursor-pointer">Kids</p>
                <Bell className="h-6 w-6 cursor-pointer" />
                <Link href="/account">
                    <div className="flex items-center space-x-2">
                        {/* <div className="h-8 w-8 rounded bg-blue-600"> */}
                        <UserButton />
                        {/* </div> */}
                        <ChevronDown className="hidden h-4 w-4 md:inline" />
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Navbar