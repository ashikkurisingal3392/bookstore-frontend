import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { Button } from 'flowbite-react';
import { FaEdit } from "react-icons/fa";

function AdminSettings() {
  return (
    <div>
     
     
     <AdminHeader/>
      <div className='flex '> 
        <div className='w-64 h-screen ' style={{backgroundColor:'#9d755c'}}>
          <AdminSidebar/>
        </div>

        <div className='flex-1 w-full'>
          
 <div className='section   p-5'>

            <h1 className='text-4xl font-bold text-center mt-5 mb-5'>Settings</h1>

            <div className='grid sx:grid-cols-1 md:grid-cols-2 p-5 gap-4'>
              <div className='flex flex-col justify-center gap-5 '>
                <p className='font-light text-sm text-justify leading-7'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti id quae minima, fuga nihil, perspiciatis voluptatum reiciendis, temporibus culpa commodi dicta provident corporis voluptas error. Optio quae esse ad! Nulla!
                  Corrupti dignissimos placeat vitae, perferendis dolor officia numquam facere obcaecati tempore blanditiis assumenda, error nesciunt aliquid illo, 
                  reprehenderit repudiandae earum amet pariatur quisquam eius modi non consectetur suscipit soluta. Facere.
                </p>
                <p className='font-light text-sm text-justify leading-7'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, explicabo facere. Soluta veniam delectus tempora amet non dicta ad quisquam corporis suscipit, quas, assumenda a sit reiciendis, sunt dolorum autem.
                  Distinctio id maiores minus exercitationem aut veritatis, delectus soluta dolores hic facere quaerat eum magnam voluptatibus eveniet, 
                  voluptas laborum vero nihil. Accusamus ex voluptatum possimus dignissimos unde ipsam nam veniam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam, necessitatibus magni provident vitae voluptas ipsum, quis molestias facere voluptate nisi, 
                  illo amet atque a tempora veritatis unde asperiores laudantium est. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellat magni voluptas, delectus debitis, fugiat, inventore nobis iste nulla minima quo. Ut quam culpa, 
                  eveniet odit eligendi aliquam omnis quae?
                </p>
              </div>
              <div className='flex justify-center '>
                <div className=' bg-blue-300 w-100 h-120 flex justify-center rounded-2xl'>
                <div className='flex flex-col gap-2 justify-center items-center '>
                  <div className='relative mb-3'>
                       <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" className='rounded-full w-30 h-30 object-cover ' alt="" />
                       <label for='img' htmlFor="img">
                        <input id='img' type="file" hidden />
                         <FaEdit className='text-3xl absolute top-25 left-20 text-white ' />

                       </label>
                    
                  </div>
                 
                  <input type="text" className='rounded-lg border-white w-70'/>
                  <input type="password" className='rounded-lg border-white w-70' />
                  <input type="password" className='rounded-lg border-white w-70' />
                  <div className='flex flex-row justify-between gap-3 mt-3'>
                    <Button className='w-full bg-orange-800' >Reset</Button>
                  <Button className='w-full bg-green-600'>Update</Button>
                  </div>
                  


                </div>



              </div>

              </div>
              

            </div>
          </div>
        </div>
          
         
      </div>   

    </div>
  )
}

export default AdminSettings
