import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Button } from "flowbite-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";
import {  Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";

function Careers() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <Header />

      <section className='p-6 '>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl font-semibold'>Careers</h1>
          <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ipsum. Labore, voluptas numquam vitae sunt ipsum nihil quaerat consequatur inventore et.
            Recusandae id at delectus consequatur possimus praesentium in sequi.</p>
        </div>
      </section>
      {/* job search */}
      <section className='p-5'>
        <h2 className='text-2xl font-light mb-4'>Current Openings</h2>
        <div className='flex justify-center items-center '>
          <input type="text" className='w-100 h-10' placeholder='Job Title' />
          <Button className='rounded-none'  style={{ backgroundColor: '#ab5852' }}>Search</Button>

        </div>

      </section>
      {/* jobs */}
      <section className='p-6 '>

        <div className='flex flex-col justify-center items-center gap-5 '>
          <div className='shadow-2xl p-5'>
            <div className='grid grid-cols-3 gap-2 '>
              <div className='col-span-2'>
                <h3>Hr Assistant</h3>
                <hr className='w-100' />

              </div>
              <div>
                <Button className='' color="green" style={{ backgroundColor: '#ab5852' }} onClick={() => setOpenModal(true)}>Apply<TbExternalLink className='text-xl mx-1' /></Button>
              </div>
            </div>
            <div className='flex gap-2'>
              <FaMapMarkerAlt className='text-xl' style={{ color: '#ab5852' }} />
              <p>Kochi</p>
            </div>
            <p>Job Type:Full Time</p>
            <p>Salary: 20000-30000/month</p>
            <p>Qualifications:</p>
            <p>Experience:1-2 year</p>
            <p>Descriptions:</p>

          </div>
          <div className='shadow-2xl p-5'>
            <div className='grid grid-cols-3 gap-2 '>
              <div className='col-span-2'>
                <h3>Hr Assistant</h3>
                <hr className='w-100' />

              </div>
              <div>
                <Button className='' color="green" style={{ backgroundColor: '#ab5852' }} onClick={() => setOpenModal(true)}>Apply<TbExternalLink className='text-xl mx-1' /></Button>
              </div>
            </div>
            <div className='flex gap-2'>
              <FaMapMarkerAlt className='text-xl' style={{ color: '#ab5852' }} />
              <p>Kochi</p>
            </div>
            <p>Job Type:Full Time</p>
            <p>Salary: 20000-30000/month</p>
            <p>Qualifications:</p>
            <p>Experience:1-2 year</p>
            <p>Descriptions:</p>


          </div>

        </div>

      </section>
  {/* Modal */}
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} size='lg' >
        <ModalHeader className='bg-black text-2xl'>Application Form</ModalHeader>
        <ModalBody>
          <div className="space-y-6">
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between '>
                 <input type="text" className='rounded-md' placeholder='Full Name' />
               <input type="text" className='rounded-md'  placeholder='Qualifications'/>

              </div>
              <div className='flex justify-between '>
                 <input type="text" className='rounded-md' placeholder='Email Id' />
               <input type="text" className='rounded-md' placeholder='Phone'/>

              </div>
              
               <textarea name="" id="" className='rounded-md' placeholder='Cover Letter'></textarea>
                <div className='flex justify-center items-center '>
                  <Button className='rounded-none w-35'  style={{ backgroundColor: '#ab5852' }}>Choose file</Button>
               <input type="text" className='w-100 h-10' placeholder='No file choosen' />
          

        </div>

            </div>
           
          </div>
        </ModalBody>
        <ModalFooter >
          <div className='flex  justify-end w-full gap-2'>
            <Button onClick={() => setOpenModal(false)}>Reset</Button>
          <Button color="alternative" onClick={() => setOpenModal(false)}>
            Submit
          </Button>
            
          </div>
          
        </ModalFooter>
      </Modal>

      <Footer />

    </div>
  )
}

export default Careers
