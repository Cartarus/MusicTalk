import React from 'react'
import { ProfileButton } from './ProfileButton'
import { SearchBar } from './SearchBar'
import { Logo } from './Logo'
import { ButtonCreatePost } from './ButtonCreatePost'

export const Header = () => {
  return (
    <div className='mb-4 sticky top-0 z-30 bg-neutral-700'>
      <div className='hidden md:grid md:grid-cols-3 mx-auto py-2 px-4 gap-2'>
          <Logo/>
          <SearchBar/>
          <div className='flex gap-4 justify-end'>
            <ButtonCreatePost/>
            <ProfileButton/>
          </div>
      </div>
      {/* Responsive */}
      <div className=' md:hidden  mx-auto py-2 px-4 gap-2'>
        <div className='flex mb-3 justify-between'>
          <Logo/>
          <div className='flex gap-4 justify-end'>
            <ButtonCreatePost/>
            <ProfileButton/>
          </div>
        </div>
          <SearchBar/>
      </div>
      <hr className='border-gray-500' />
    </div>
  )
}
