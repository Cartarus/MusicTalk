"use client";
import Link from 'next/link';
import React from 'react'

export const ButtonCreatePost = () => {

  return (
    <Link className='bg-blue-500 px-3 rounded-md' href={"/createPost"}>
        Crear publicación
    </Link>
  )
}
