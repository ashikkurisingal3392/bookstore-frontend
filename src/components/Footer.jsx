import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { Button } from "flowbite-react";
import { FaArrowRight } from "react-icons/fa6";
function Footer() {
  return (
    <div>


      <section className=''>
         
           <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-6 p-5' style={{backgroundColor:'#ab5852'}}>
          <div className='flex flex-col items-center justify-center'>
            <h2 className='text-xl mb-3 font-semibold'>ABOUT US</h2>
            <p className='text-justify font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus vero exercitationem dolores dicta maiores! Porro earum ullam hic inventore aliquam tenetur placeat quas harum suscipit odit asperiores facilis, explicabo delectus.</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div>
              <h2 className='text-xl mb-3 font-semibold '>NEWSLETTER</h2>
            <h6 className='text-lg mb-3'>Stay update with our latest trends</h6>

            </div>
            
            <div className='flex  items-center'> 
               <input type="text" className='h-10' />
               <Button className='rounded-none' color="green" style={{ backgroundColor: '#00202e' }}><FaArrowRight /></Button>
            </div>
           
          </div>
          <div className='flex flex-col items-center justify-center '>
            <h2 className='text-xl mb-2 font-semibold'>FOLLOW US</h2>
            <h6 className='text-lg mb-3 font-light'>Let us be social</h6>
            <div className='flex flex-row gap-3'>
                <FaLinkedin className='text-2xl' />
                <FaInstagramSquare className='text-2xl'/>
                <FaXTwitter className='text-2xl'/>
                <FaFacebook className='text-2xl'/>
            </div>
          </div>
        

         </div>
       
        <div className='bg-black flex justify-center items-center py-3'>
          <p className='text-white flex items-center gap-1'>Copyright @ 2026 All rights reserved | This website is made with by <FaHeart className='text-red-800' />Ashik Antony</p>
        </div>
      </section>



      
    </div>
  )
}

export default Footer
