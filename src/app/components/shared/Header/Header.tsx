import React from 'react'
import { ProfileButton } from './ProfileButton'
import { SearchBar } from './SearchBar'
import { Logo } from './Logo'

export const Header = () => {
  return (
    <div className='mb-4'>
      <div className='flex items-center justify-between mx-auto py-2 px-4 gap-2'>
          <Logo/>
          <SearchBar/>
          <ProfileButton/>
      </div>
      <hr className='border-gray-500' />
    </div>
  )
}
