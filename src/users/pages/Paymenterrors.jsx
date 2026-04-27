import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Button } from 'flowbite-react'
import { RiArrowLeftSFill } from "react-icons/ri";
function Paymenterrors() {
  return (
    <div>
       <Header/>
      <section className='container p-5 w-100'>
        <div className='grid grid-cols-2 p-4'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-4xl font-semibold text-blue-500 mb-2'>Sorry! Your Payment is Unsuccessfull</h1>
            <h6 className='font-light text-lg'>We apologies for the inconvience caused and appreciate your visit to The Book Haven</h6>
            <div>
              <Button className='mt-3' size='md'><RiArrowLeftSFill className='text-2xl' />Explore More books</Button>
            </div>
            
          </div>
          <div>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/026/994/640/small/payment-error-payment-failed-try-again-payment-terminal-with-cross-checkmark-cashless-nfc-payment-transaction-canceled-modern-flat-cartoon-style-illustration-on-white-background-vector.jpg" alt="" />
          </div>
        </div>

      </section>
      <Footer/> 
      
    </div>
  )
}

export default Paymenterrors
