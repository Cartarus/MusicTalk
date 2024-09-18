import React from 'react'
import { FaSearch } from 'react-icons/fa'; 

export const SearchBar = () => {
  return (
    <div className=' relative'>
        <input className='bg-gray-600 border border-gray-300 rounded-lg outline-none focus:border-blue-400 w-full p-2' placeholder='Busca tu música favorita'/>
        <button className='absolute right-1  top-1/2 transform -translate-y-1/2  bg-blue-500 p-2 rounded-lg  '>
        {/* absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 p-2 rounded-lg */}
        <FaSearch className='text-white' />
      </button>
    </div>
  )
}
