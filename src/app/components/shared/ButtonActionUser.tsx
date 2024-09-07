import React from 'react'


interface Props {
    icon : React.ReactNode,
    text?: string | null;
}

export const ButtonActionUser = ({icon,text}:Props) => {
  return (
    <button className='flex items-center gap-2 bg-blue-500 rounded-md px-2 py-1'>
        {icon}
        {text && <p>{text}</p>}
    </button>
  )
}
