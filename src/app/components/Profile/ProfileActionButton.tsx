import React from 'react'

interface Props {
    text:string
}

export const ProfileActionButton = ({text}:Props) => {
  return (
    <button className='bg-gray-600 p-2 rounded-2xl text-sm'>
        {text}
    </button>
  )
}
