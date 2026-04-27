import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Button } from "flowbite-react";
import { FaBackward } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { Modal, ModalBody, ModalHeader } from "flowbite-react";
import { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { getABookAPI, makePaymentAPI } from '../../services/allAPIs';
import { useEffect } from "react";
import { loadStripe } from '@stripe/stripe-js';

function Viewbook() {
  const [openModal, setOpenModal] = useState(false);

  const [token, setToken] = React.useState('')

  const [book, setBook] = React.useState([])

  const { id } = useParams()
  console.log(id);

  useEffect(() => {

    setToken(sessionStorage.getItem("token"))
    viewABooks(id)

  }, [token])


  const viewABooks = async (id) => {

    try {

      const reqHeader = {

        Authorization: `Bearer ${token}`
      }

      const response = await getABookAPI(id, reqHeader)

      setBook(response.data.aBook)

      console.log(response);

    }
    catch (err) {

      console.log(err);

    }

  }

  const handlePayment = async () => {

    console.log(book);
    const stripe = await loadStripe('pk_test_51TQaTwQ11oPYTHq2c2vlvRM80OzHOMMe1DqipmYWB4SpUFbKjISV4rOvRCdV131Zz0e9dIM3k5nIY4tHvbuW2rB200DiZwt7m9');
    console.log(stripe);

    const token = sessionStorage.getItem('token')

    const reqHeader = {
      Authorization: `Bearer ${token}`
    }

    const reqBody ={
      bookDetails:book
    }
    try{

      const response =await makePaymentAPI(reqBody,reqHeader)
      console.log(response);
      
      const checkoutUrl =response.data.session.url

      window.location.href=checkoutUrl

    }
    catch(err){
      console.log(err)
    }


  }

  return (
    <div>
      <Header />

      <section className='p-6 ' >

        <div className='grid grid-cols-4 gap-2 shadow-2xl p-5'>
          <div>
            <img src={book.imageUrl} alt="" />
          </div>
          <div className='col-span-3'>
            <div className='flex flex-col justify-end  h-100 p-1'>
              <div className='flex justify-between items-center mb-3'>
                <div>
                </div>
                <div>
                  <h1 className='text-3xl font-medium'>{book.title}</h1>
                  <h3 className='text-md text-blue-500'>- {book.author}</h3>
                </div>
                <div>
                  <IoEye onClick={() => setOpenModal(true)} className='text-2xl ' />
                </div>

              </div>
              <div className='flex justify-around'>
                <p>
                  Publisher : {book.publisher}
                </p>
                <p>Language : {book.language}</p>
                <p>No.of Pages : {book.noofpages}</p>
              </div>
              <div className='flex justify-around mt-4'>
                <p>
                  Seller Mail : {book.userMail}
                </p>
                <p>Real Price : $ {book.price}</p>
                <p>ISBN:{book.isbn}</p>
              </div>
              <div className='mt-5'>
                <p className='font-light text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex delectus minus harum vel? Velit voluptatibus quam vel quasi nemo blanditiis nesciunt temporibus facilis quos? Fugit, odio! Obcaecati praesentium cumque voluptates?
                  Mollitia nobis excepturi cupiditate ad atque illo architecto, est tempore nisi eveniet veniam maiores sint officiis numquam minima.
                  Doloremque molestiae facere cupiditate eaque laborum soluta quos fugit mollitia commodi omnis?Doloremque molestiae facere cupiditate eaque laborum soluta quos fugit mollitia commodi omnis?</p>
              </div>
              <div className='flex justify-end gap-2 mt-3'>
                <Button style={{ backgroundColor: '#ab5852' }} >
                  <FaBackward className='mx-1' />
                  Back

                </Button>
                <Button onClick={handlePayment} style={{ backgroundColor: '#ab5852' }}>
                  Buy ${book.dprice}
                </Button>


              </div>

            </div>



          </div>
        </div>
      </section>
      {/* Modal for image views*/}
      <Modal dismissible show={openModal} onClose={() => setOpenModal(false)} size='xl'>
        <ModalHeader className='bg-black'>Book Photos</ModalHeader>
        <ModalBody className='bg-white'>
          <div className=" flex gap-2 items-center mb-4">
            <FaCamera className='text-blue-500' />
            <p className='text-blue-500 font-light'>Choose author  </p>
          </div>
          <div className='flex gap-3'>
            <img className='w-50 h-50' src="https://res.cloudinary.com/itimages/image/upload/f_auto,q_auto,w_800,c_limit/prd/splash_cover_art/kyn8yq3yfsmzkkbxxnvc" alt="" />
            <img className='w-50 h-50' src="https://res.cloudinary.com/itimages/image/upload/f_auto,q_auto,w_800,c_limit/prd/splash_cover_art/e90lg8kqly5fvovuzh94" alt="" />
          </div>
        </ModalBody>
      </Modal>



      <Footer />

    </div>
  )
}

export default Viewbook
