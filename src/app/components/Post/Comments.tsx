import React from 'react'
import { SingleComment } from './SingleComment';


export const Comments = () => {
  return (
    <article className="p-6 text-base bg-neutral-800">
      <SingleComment/>
      <SingleComment/>
      <SingleComment/>
    </article>
  )
}
