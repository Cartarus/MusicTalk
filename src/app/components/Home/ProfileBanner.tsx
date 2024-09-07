import React from 'react'
import { IoPersonCircle } from 'react-icons/io5'
import { SlOptions } from 'react-icons/sl'

export const ProfileBanner = () => {
  return (
    <div className='flex justify-between'>
        <div className='flex gap-1 items-center'>
            <IoPersonCircle size={20} />
            <p className='text-xs'>CristianG</p>
        </div>
        <SlOptions  className='cursor-pointer'/>
    </div>
  )
}
