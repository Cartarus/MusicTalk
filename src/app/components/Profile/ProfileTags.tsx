import React from 'react'
import { ProfileTag } from './ProfileTag'

export const ProfileTags = () => {
  return (
    <div className='flex justify-end gap-2'>

        <ProfileTag text='Hip-Hop'/>
        <ProfileTag text='Rap'/>
        <ProfileTag text='Metal'/>
        <ProfileTag text='Folk'/>
        <ProfileTag text='EDM'/>
    </div>
  )
}
