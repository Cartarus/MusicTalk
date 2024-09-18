"use client";
import Link from 'next/link';
import React from 'react'
import { IoPersonCircle } from 'react-icons/io5'

export const ProfileButton = () => {

  // e :React.MouseEvent<HTMLElement>
  
  return (
 
        <Link href="/profile"className='flex gap-1 items-center cursor-pointer' >
            <IoPersonCircle size={35} />
            <p className='hidden sm:block'>CristianG</p>
        </Link>

  )
}
