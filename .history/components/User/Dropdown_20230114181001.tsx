'use client'

import React from 'react'
import { Menu, Transition } from '@headlessui/react'

function Dropdown({user} : Props) {
  return (
    <div className="z-50 w-56 text-right">
      <Menu as="div" className="relative z-50 inline-block text-left">
        <div className=' z-50'>
          <Menu.Button className="inline-flex w-full justify-center rounded-m  text-sm font-medium underline text-gray-700">
            {/* Welcome , {user?.substring(0,4) + "..." + user?.substring(user.length - 4)} */}
            {user}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute z-50 right-0 mt-2 -mr-4 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className=" pt-4 flex flex-col space-y-2 ">
                <a href={`/me/notes`} className=' hover:bg-gray-200 py-1 px-6'>Notes</a>
                <a className=' hover:bg-gray-200 py-1 px-6'>Saved Posts</a>
                <Link href='/me/newpost' ><a className=' hover:bg-gray-200 py-1 px-6'>Write Post</a></Link>
                <Link href={'/me/settings'}><a className=' hover:bg-gray-200 py-1 px-6'>Settings</a></Link>
                <div className=' w-full hover:bg-red-500 pb-3 border-t rounded-b-md pt-1 hover:text-white px-6 py-1 '>
                <button className=' max-w-max  pt-2 ' onClick={()=>disconnect()}>Disconnect</button>
                </div>
                
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}

export default Dropdown