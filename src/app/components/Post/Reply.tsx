import Image from 'next/image'
import React from 'react'
import { SlOptions } from 'react-icons/sl'
import { DropDownButton } from '../shared/DropDownButton'

export const Reply = () => {
  return (
    <article className="py-6 mb-3 ml-6 lg:ml-12 text-base">
    <footer className="flex justify-between items-center mb-2">
            <div className="flex items-center">
                <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
                    <Image
                        className="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                        alt="Jese Leos"
                        width={10}
                        height={10}/>
                        Jese Leos
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400"><time  dateTime="2022-02-12"
                        title="February 12th, 2022">Feb. 12, 2022</time></p>
            </div>
            <DropDownButton icon={<SlOptions/>}/>
        </footer>
        <p className="text-gray-500 dark:text-gray-400">Much appreciated! Glad you liked it ☺️</p>
        <div className="flex items-center mt-4 space-x-4">
            <button type="button"
                className="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400 font-medium">
                <svg className="mr-1.5 w-3.5 h-3.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 5h5M5 8h2m6-3h2m-5 3h6m2-7H2a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3v5l5-5h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z"/>
                </svg>                
                Reply
            </button>
        </div>
        </article>
  )
}
