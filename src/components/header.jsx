import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (

        <header className='w-full h-[100px] shadow-xl bg-accent flex justify-center items-center relative text-white'>

            <img src="/logo.png" alt="logo" className='w-[100px] h-[100px]  object-cover absolute left-1'/>

            <Link to = "/" className="text-[25px] font-bold m-2">Home</Link>

            <Link to = "/contact" className="text-[25px] font-bold m-2">Contact Us</Link>

            <Link to = "/gallery" className="text-[25px] font-bold m-2">Gallery</Link>
            
            <Link to = "/items" className="text-[25px] font-bold m-2">Items</Link>

        </header>
    
  )
}
