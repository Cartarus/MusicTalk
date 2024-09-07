import React from 'react'
import { FeedPost } from './FeedPost'

export const Feed = () => {
  return (
    <div className='flex flex-col gap-2 md:w-1/2 lg:w-1/3 mx-auto'>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
      <FeedPost/>
    </div>
  )
}
