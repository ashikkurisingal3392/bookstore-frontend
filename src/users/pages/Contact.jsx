import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button, Checkbox, Label, TextInput ,Textarea } from "flowbite-react";

function Contact() {
  return (
    <div>
        <style>
        
       {`

    
        
        `
        }
        </style>
   <Header/>
      <section className='p-6 '>
         <div className='flex flex-col items-center'>
           <h1 className='text-2xl mb-2'>Contacts</h1>
           <p className='text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ipsum. Labore, voluptas numquam vitae sunt ipsum nihil quaerat consequatur inventore et. 
            Recusandae id at delectus consequatur possimus praesentium in sequi.</p>
         </div>
      </section>

      {/* contact icons */}
      <section className='p-5 flex justify-center'>
        <div className='grid sm:grid-cols-1 md:grid-cols-3 gap-2 justify-center'>
          <div className='flex  items-center gap-3'>
            <FaMapMarkerAlt className='text-5xl border-2 rounded-3xl p-2 '  style={{color:'#ab5852',borderColor:'#00202e'}}/>
            <div>
              <p>142 knole lane,Brentry</p>
            <p>Bristol,BS10 6JW</p>

            </div>
            

          </div>
          <div className='flex  items-center gap-3'>
            <FaPhoneAlt className='text-5xl border-2 rounded-3xl p-2 '  style={{color:'#ab5852',borderColor:'#00202e'}}/>
            <p>+44 0744266666</p>

          </div>
          <div className='flex  items-center gap-3'>
            <MdEmail className='text-5xl border-2 rounded-3xl p-2 ' style={{color:'#ab5852',borderColor:'#00202e'}}/>
            <p>ashikkurisingal@gmail.com</p>
          </div>
        </div>
      </section>
      {/* contact form & map */}
      <section className='p-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 p-5 gap-5 '>
          <div className='flex flex-col items-center justify-center bg-gray-300 p-5 '>
            <h2 className='text-3xl text-center mb-5'>Send me Message</h2>
            <form className="flex w-full max-w-md flex-col gap-4">
      <div>
        <TextInput id="email1" type="text" placeholder="Name" className='w-full ' required />
      </div>
      <div>
        <TextInput id="password1" type="email" required className='w-full ' placeholder='Email Id' />
      </div>
      <div>
        <Textarea id="comment" placeholder="Message..." className='w-full' required rows={4} />
      </div>
      <Button type="submit" style={{backgroundColor:'#ab5852'}} >Submit</Button>
             </form>

          </div >
          <div className='flex justify-center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9932.675525156303!2d-2.6163695277611514!3d51.51011760382777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4871922176cdd711%3A0x9bbad0e129c60d35!2s142%20Knole%20Ln%2C%20Brentry%2C%20Bristol%20BS10%206JW!5e0!3m2!1sen!2suk!4v1773612531376!5m2!1sen!2suk" width="600" height="450" style={{border:0}} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

export default Contact
