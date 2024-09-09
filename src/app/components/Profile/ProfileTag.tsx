import React from 'react'

interface Props {
    text:string
}

export const ProfileTag = ({text}:Props) => {
  return (
    <button className='bg-blue-600 p-2 rounded-2xl text-sm'>
        {text}
    </button>
  )
}
