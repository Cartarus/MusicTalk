import React from 'react'
import { ProfileActionButton } from './ProfileActionButton'

export const ProfileActions = () => {
  return (
    <div className='flex gap-2 mb-4'>
        <ProfileActionButton text='General'/>
        <ProfileActionButton text='Publicaciones'/>
        <ProfileActionButton text='Comentarios'/>
        <ProfileActionButton text='Likes'/>
    </div>
  )
}
