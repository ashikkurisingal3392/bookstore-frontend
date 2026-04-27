import React from 'react'
import { MdVerified } from "react-icons/md";
import { List, ListItem } from "flowbite-react";
import { HiCheckCircle } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { FaBook } from "react-icons/fa6";
import { IoHome } from "react-icons/io5";
import { TbTargetArrow } from "react-icons/tb";
import { IoSettings } from "react-icons/io5";
function AdminSidebar() {
  return (
    <div>
       
       <section className='container'>
        <div className='mt-5'>
          <div className='flex flex-col items-center'>
          <img src="./public/profile.jpg" className='rounded-full w-32 h-32 object-cover' alt="" />
          <div className='flex  items-center gap-1'>
            <h2 className='text-2xl font-bold mt-3 text-white'>Admin</h2>
             <MdVerified className='text-blue-500 text-xl'/>
          </div>
        </div>

        <div className='flex justify-center mt-4 w-50 '>
       
          <List className='flex flex-col gap-3 list-none'>
        <Link to={'/admin-home'}>
        <div className='flex gap-5 items-center justify-center shadow-lg p-5 w-70'>
          <IoHome className='text-white text-xl' /> 
         <ListItem className='text-white'>Admin</ListItem>
        </div>
          </Link>
           <Link to={'/admin-books'}>
        <div className='flex gap-5 items-center justify-center  shadow-lg p-5 w-70'>
          <FaBook className='text-white text-xl' /> 
         <ListItem className='text-white'>All Books</ListItem>
        </div>
          </Link>
            <Link to={'/admin-careers'}>
        <div className='flex gap-5 items-center justify-center  shadow-lg p-5 w-70'>
          <TbTargetArrow className='text-white text-xl' /> 
         <ListItem className='text-white'>Careers</ListItem>
        </div>
          </Link>
            <Link to={'/admin-settings'}>
        <div className='flex gap-5 items-center justify-center  shadow-lg p-5 w-70'>
          <IoSettings className='text-white text-xl' /> 
         <ListItem className='text-white'>Settings</ListItem>
        </div>
          </Link>
     
    </List>

        </div>

        </div>
        

       </section>
    </div>
  )
}

export default AdminSidebar
