"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { SiMusicbrainz } from 'react-icons/si'

export const Logo = () => {

  const router = useRouter()

  const handleClick = () => {
    router.push('/home')
  }
  
  return (
    <div className='flex items-center cursor-pointer' onClick={handleClick}>
        <SiMusicbrainz size={ 40 } />
        <p className='hidden sm:block'>MusicTalk</p>
    </div>
  )
}
