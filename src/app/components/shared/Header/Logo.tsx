
import Link from 'next/link'
import React from 'react'
import { SiMusicbrainz } from 'react-icons/si'

export const Logo = () => {


  
  return (
    <Link className='flex items-center cursor-pointer' href={"/home"}>
        <SiMusicbrainz size={ 40 } />
        <p className='hidden sm:block'>MusicTalk</p>
    </Link>
  )
}
