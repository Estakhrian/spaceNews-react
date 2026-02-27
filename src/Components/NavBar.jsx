import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";
import { RiCloseCircleLine } from "react-icons/ri";

export default function NavBar() {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='relative'>
      {/*Desktop Navbar */}
      <div className='hidden md:flex justify-between mx-6 '>
        <div className='my-3'>
          <h2 className='text-xl font-bold leading-[28px]'>Indie Space</h2>
        </div>
        <div className='my-3'>
          <ul className='flex justify-center gap-[20px]'>
            <li className='leading-4 text-[12px] cursor-pointer p-2 hover:bg-white hover:text-black hover:rounded-lg'>News</li>
            <li className='leading-4 text-[12px] cursor-pointer p-2 hover:bg-white hover:text-black hover:rounded-lg'>Opinion</li>
            <li className='leading-4 text-[12px] cursor-pointer p-2 hover:bg-white hover:text-black hover:rounded-lg'>Technology</li>
            <li className='leading-4 text-[12px] cursor-pointer p-2 hover:bg-white hover:text-black hover:rounded-lg'>Our Planet</li>
            <li className='leading-4 text-[12px] cursor-pointer p-2 hover:bg-white hover:text-black hover:rounded-lg'>Health and Science</li>
          </ul>
        </div>
        <div className='my-3'>
          <button className='border border-2xl leading-4 text-[12px] px-4 py-2 h-[32px] rounded-3xl hover:bg-white hover:text-black hover:rounded-3xl'>Sign up for our newsletter</button>
        </div>
      </div>

      {/*Mobile Navbar */}
      <div className='md:hidden flex justify-between items-center mx-6 py-3'>
        <h2 className='text-xl font-bold leading-[28px]'>Indie Space</h2>
        <button onClick={toggleMenu} className='text-bold text-2xl'><IoMdMenu /></button>
      </div>

      {/*Menu*/}
      <div className={`fixed top-0 left-0 w-64 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ease-in-out
       ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} `}>

        <div className='p-4 flex justify-between items-center border-b'>
          <h2 className='text-xl text-black font-bold'>Indie Space</h2>
          <button onClick={toggleMenu} className='text-2xl text-black '><RiCloseCircleLine/></button>
        </div>
        <ul className='p-4 space-y-4 text-black'>
          <li className='py-2 leading-4 text-[12px] cursor-pointer px-2 hover:bg-black hover:text-white hover:rounded-lg'>News</li>
          <li className='py-2 leading-4 text-[12px] cursor-pointer px-2 hover:bg-black hover:text-white hover:rounded-lg'>Opinion</li>
          <li className='py-2 leading-4 text-[12px] cursor-pointer px-2 hover:bg-black hover:text-white hover:rounded-lg'>Technology</li>
          <li className='py-2 leading-4 text-[12px] cursor-pointer px-2 hover:bg-black hover:text-white hover:rounded-lg'>Our Planet</li>
          <li className='py-2 leading-4 text-[12px] cursor-pointer px-2 hover:bg-black hover:text-white hover:rounded-lg'>Health and Science</li>
        </ul>
      </div>

    </div>
  )
}
