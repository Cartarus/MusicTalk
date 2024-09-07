import React from 'react'
import { SearchBar } from '../SearchBar'

export const Header = () => {
  return (
    <div className='mb-4'>
      <div className='flex items-center justify-center mx-auto py-2'>
          <SearchBar/>
          
      </div>
      <hr className='border-gray-500' />
    </div>
  )
}
