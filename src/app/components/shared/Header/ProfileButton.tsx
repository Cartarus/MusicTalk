"use client";
import { useRouter } from 'next/navigation'
import React from 'react'
import { IoPersonCircle } from 'react-icons/io5'

export const ProfileButton = () => {

  const router = useRouter()

  // e :React.MouseEvent<HTMLElement>
  const handleClick = () => {
    router.push("/profile")
  }
  return (
 
        <div className='flex gap-1 items-center cursor-pointer' onClick={handleClick}>
            <IoPersonCircle size={35} />
            <p className='hidden sm:block'>CristianG</p>
        </div>

  )
}
