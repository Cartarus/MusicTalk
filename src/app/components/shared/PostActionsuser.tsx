import React from 'react'
import { ButtonActionUser } from './ButtonActionUser'
import { CiHeart } from "react-icons/ci";
import {  FaRegCommentAlt } from 'react-icons/fa';
import {  } from 'react-icons/io';
import { IoShareOutline } from 'react-icons/io5';

export const PostActionsuser = () => {
  return (
    <div className='my-2 flex gap-2'>
        <ButtonActionUser icon={<CiHeart size={25} color='white'/>} text={"2500"}/>
        <ButtonActionUser icon={<FaRegCommentAlt size={20} color='white'/>} text={"50"}/>
        <ButtonActionUser icon={<IoShareOutline size={25} color='white'/>} text={"Compartir"}/>
    </div>
  )
}
