import React from 'react'
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { FaRegBookmark } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { Link, Route, Routes } from 'react-router-dom';

export default function AdminPage() {
  return (
    <div>
        <div className='w-full h-screen flex'>
            <div className='w-[300px] h-full bg-orange-500'>

                
                <button className='w-full h-[40px] font-bold bg-white flex justify-center items-center'><RiDashboardHorizontalLine />Dashboard</button>

                <Link to = "/admin/bookings" className='w-full h-[40px] font-bold bg-white flex justify-center items-center'><FaRegBookmark />Bookings</Link>

                <Link to ="/admin/Items" className='w-full h-[40px] font-bold bg-white flex justify-center items-center'><MdProductionQuantityLimits />Items</Link>
                
                <Link to = "/admin/users" className='w-full h-[40px] font-bold bg-white flex justify-center items-center'><FaRegUser />Users</Link>

            </div>

            <div className='w-[calc(100vw-300px)] h-full bg-green-500'>
                
                <Routes path = "*/">
                    <Route path='/bookings' element={<h1>booking</h1>}/>
                </Routes>
            </div>
        </div>
        
      
    </div>
  )
}
