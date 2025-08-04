"use client";
import { ChevronDown, CloverIcon, X } from 'lucide-react'

import Link from 'next/link'
import React, { useState } from 'react'

type Props = {}

const Mobile_Menu = (props: Props) => {
  const [showMobileMenu, setShowMobileMenu] = useState<boolean>(false)
  return (
    <div className='md:hidden'>
      <button
        onClick={() => setShowMobileMenu(!showMobileMenu)}
        className="flex items-center gap-x-2"
      >
        <span>Browse</span>
        <ChevronDown className={`h-4 w-4 transition ${showMobileMenu ? 'rotate-180' : ""}`} />
      </button>

      {showMobileMenu && (
        <div className='absolute top-16 left-0 bg-black w-full p-4 flex flex-col space-y-2'>
          <a href="/" className='text-white'>
            Home
          </a>
          <a href="/movies" className='text-white'>
            Movies
          </a>
          <a href='/tv-shows' className='text-white'>
            TV Shows
          </a>
          <a href='/latest' className='text-white'>
            Latest
          </a>
        </div>
      )}
    </div>
  )
}
export default Mobile_Menu