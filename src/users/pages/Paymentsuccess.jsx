import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Button } from 'flowbite-react'
import { RiArrowLeftSFill } from "react-icons/ri";

function Paymentsuccess() {
  return (
    <div>

      <Header/>
      <section className='container p-5'>
        <div className='grid grid-cols-2 p-4'>
          <div className='flex flex-col justify-center'>
            <h1 className='text-4xl font-semibold text-blue-500 mb-2'>Congratulations</h1>
            <h6 className='font-light text-lg'>Thank you for shopping with The book heaven,Hope you have good time with us</h6>
            <div>
              <Button className='mt-3' size='md'><RiArrowLeftSFill className='text-2xl' />Explore More books</Button>
            </div>
            
          </div>
          <div>
            <img src="https://img.freepik.com/premium-vector/shopping-cart-with-check-mark-wireless-paymant-icon-shopping-bag-seccessful-paymant-sign-online-paymant-level-success-online-shopping-vector_662353-911.jpg" alt="" />
          </div>
        </div>

      </section>
      <Footer/>        
    </div>
  )
}

export default Paymentsuccess
