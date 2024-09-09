"use client";
import Image from 'next/image'
import React from 'react'
import { PostActionsuser } from '../shared/PostActionsuser'
import { ProfileBanner } from './ProfileBanner'
import { useRouter } from 'next/navigation';

export const FeedPost = () => {

  const router = useRouter()

  // e :React.MouseEvent<HTMLElement>
  const handleClick = () => {
    router.push("/post")
  }

  return (
    <div className='bg-neutral-800 rounded-xl p-3 cursor-pointer' onClick={handleClick}>

        <ProfileBanner/>
        <h3 className='my-2 font-medium text-xl'>Titulo del post</h3>
        <hr  className='border-gray-500'/>
        <p className='overflow-hidden text-ellipsis line-clamp-3 gradient-text py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eligendi cumque repellat assumenda aut explicabosaepelaboriosam?qui commodi, eius molestias eum doloribus repellendus ducimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eligendi cumque repellat assumenda aut explicabosaepelaboriosam?qui commodi, eius molestias eum doloribus repellendus ducimus!</p>

        <div className='relative p-2 w-full aspect-square '> {/* Contenedor cuadrado */}
            <Image 
                src="https://i.scdn.co/image/ab67616d0000b273cdb645498cd3d8a2db4d05e1" 
                alt='Imagen del Post' 
                layout='fill' // Asegura que la imagen ocupe todo el contenedor
                objectFit='cover' // Ajusta la imagen para que cubra el espacio sin deformarse
                className='rounded-md' // Opción para redondear las esquinas si lo deseas
            />
        </div>
        <PostActionsuser/>
    </div>
  )
}
