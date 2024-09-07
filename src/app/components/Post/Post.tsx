"use client";
import Image from 'next/image'
import React from 'react'
import { PostActionsuser } from '../shared/PostActionsuser'
import { ProfileBanner } from '../Home/ProfileBanner';
import { StarRating } from '../shared/StarRating';
import { Comments } from './Comments';

export const Post = () => {

  return (
    <div className='bg-blue-950 rounded-xl p-3 cursor-pointer' >
        <ProfileBanner/>
        <h3 className='my-2 font-medium text-xl'>Titulo del post</h3>
        <hr  className='border-gray-500'/>
        <p className='py-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eligendi cumque repellat assumenda aut explicabosaepelaboriosam?qui commodi, eius molestias eum doloribus repellendus ducimus! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eligendi cumque repellat assumenda aut explicabosaepelaboriosam?qui commodi, eius molestias eum doloribus repellendus ducimus!</p>
        <div className='flex justify-end py-2'>
            <StarRating/>
        </div>

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
        <Comments/>
    </div>
  )
}
