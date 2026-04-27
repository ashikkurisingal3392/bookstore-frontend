import React, { useEffect } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { FaBook } from "react-icons/fa";
import { PiUsersThree } from "react-icons/pi";
import { ImUsers } from "react-icons/im";
import { Button, TabItem, Tabs } from "flowbite-react";
import { approveABookAPI, deleteABookAPI, getAllBookAPI, getAllUsersAPI, rejectABookAPI } from '../../services/allAPIs';
import { serverURL } from '../../services/serverURL';
import { MdDelete } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import { IoMdCloseCircleOutline } from "react-icons/io";

function AdminBooks() {

  const [book, setBook] = React.useState([])

  const [users, setUsers] = React.useState([])


  const getAllBooks = async () => {

    const token = sessionStorage.getItem('token')

    const reqHeader = {
      Authorization: `Bearer ${token}`
    }

    try {

      const response = await getAllBookAPI(reqHeader)
      setBook(response.data.aBook)
      console.log(response);

    }
    catch (err) {
      console.log(err);

    }

  }

  const getAllUsers = async () => {

    const token = sessionStorage.getItem('token')

    const reqHeader = {
      Authorization: `Bearer ${token}`
    }

    try {

      const response = await getAllUsersAPI(reqHeader)
      console.log(response);

      setUsers(response.data.users)

    }
    catch (err) {
      console.log(err);

    }

  }

  const handleDelete = async (id) => {


    const token = sessionStorage.getItem('token')

    const reqHeader = {
      Authorization: `Bearer ${token}`
    }

    try {

      const response = await deleteABookAPI(id, reqHeader)
      console.log(response);

      alert(response.data.message)
      getAllBooks();

    }
    catch (err) {
      console.log(err);

    }

  }

  const handleApprove=async(id)=>{

     const token = sessionStorage.getItem('token')

    const reqHeader = {
      Authorization: `Bearer ${token}`
    }

    try {

      const response = await approveABookAPI(id, reqHeader)
      console.log(response);

      alert(response.data.message)
      getAllBooks();

    }
    catch (err) {
      console.log(err);

    }



  }

   const handleReject=async(id)=>{

     const token = sessionStorage.getItem('token')

    const reqHeader = {
      Authorization: `Bearer ${token}`
    }

    try {

      const response = await rejectABookAPI(id, reqHeader)
      console.log(response);

      alert(response.data.message)
      getAllBooks();

    }
    catch (err) {
      console.log(err);

    }



  }

  useEffect(() => {

    getAllBooks();
    getAllUsers();
  }, [])
  return (
    <div>

      <AdminHeader />
      <div className='flex min-h-screen'>
        <div className=' md:block md:w-64  ' style={{ backgroundColor: '#9d755c' }}>
          <AdminSidebar />
        </div>
        <div className='w-full flex-1'>

          <div className='section mt-4 p-4'>

            <h1 className='text-4xl font-bold mb-5 text-center'>All Books</h1>
            <div className='w-full mt-5'>
              <Tabs aria-label="Pills" variant="pills" className='flex justify-center' >
                <TabItem active title="Book List" style={{ backgroundColor: 'red', color: 'yellow' }}>

                  <div className='grid grid-cols-1 md:grid-cols-3'>
                    {
                      book.length > 0 ?
                        book.map((item, index) => (
                          <div key={index} className='p-3 w-full max-w-sm flex flex-col justify-center items-center'>
                            <div className='flex justify-end w-full mb-2'>
                              <MdDelete onClick={()=>handleDelete(item._id)} className=' text-2xl text-red-700' />
                            </div>
                            <img src={item.imageUrl} className='rounded-2xl w-80 h-full' alt="" />
                            {/* <h4 className='text-lg text-center text-blue-500 mt-2'>{item.title}</h4> */}
                            <h5 className='text-xl font-bold mt-2'>{item.title}</h5>
                            <p className='text-blue-600 '><del>${item.dprice}</del><span className='mx-2'>${item.price}</span> </p>
                            {/* <p className='text-blue-600'>${item.price}</p> */}

                            {
                              item.status ==='pending'?<div className='flex gap-2'>
                             <div className='flex gap-2'>
                              <Button onClick={()=>handleApprove(item._id)} className='bg-gray-300'> <TiTick className='text-2xl text-green-700' /></Button>
                              <Button onClick={()=>handleReject(item._id)} className='bg-gray-300'> <IoMdCloseCircleOutline className='text-2xl text-red-700'/></Button>
                            </div>
                            </div>:item.status ==='Approved'?<Button onClick={()=>handleReject(item._id)}  className='bg-gray-300'> Approved</Button>:
                            <Button onClick={()=>handleApprove(item._id)} className='bg-gray-300'> Rejected</Button>
                            }
                            

                          </div>
                        ))

                        : "no books found"
                    }

                    {/* <div className='p-3 w-full max-w-sm flex flex-col justify-center items-center'>
                    <img src="https://m.media-amazon.com/images/I/81NecjizvJL._SY522_.jpg" className='rounded-2xl w-80 h-full' alt="" />
                    <h4 className='text-lg text-center text-blue-500 mt-2'>Roy Grace Returns In This Royally Pulse-Pounding Crime Thriller</h4>
                    <h5 className='text-xl font-bold mt-2'>The Hawk Is Dead</h5> 
                    <p className='text-blue-600'>$20</p>
                  </div> */}

                  </div>
                </TabItem>
                <TabItem title="Users">

                  <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3p-5 gap-8 gap-y-5'>
                    {
                      users.length > 0 ?
                        users.map((item, index) => (

                          <div key={index} className=' shadow-xl p-4 w-full max-w-sm mx-auto'>
                            <h2 className='text-xl mb-3 text-red-900 '>{item._id}</h2>
                            <div className='flex  items-center gap-3 '>
                              <img src={!item.profile ? "https://i.pinimg.com/originals/5c/bc/f4/5cbcf42384e992638df32657f7de7469.png"
                                : item.profile.startsWith('https') ? item.profile : `${serverURL}/uploads/${item.profile}`} className='rounded-full w-25 h-25 object-cover' alt="" />
                              <div className='flex flex-col'>
                                <h5 className='text-md font-semibold text-blue-600'>{item.username}</h5>
                                <h6 className='text-sm font-light text-orange-500'>{item.email}</h6>
                              </div>
                            </div>

                          </div>


                        ))
                        : "no users found"
                    }



                    {/* <div className='flex flex-col items-center justify-center shadow-xl p-4 w-100'>
                    <h2 className='text-xl mb-3 text-red-900 '>ID:987768904832</h2>
                    <div className='flex flex-row items-center gap-3 '>
                      <img src="https://cdn-icons-png.flaticon.com/512/219/219983.png" className='rounded-full w-25 h-25 object-cover' alt="" />
                      <div className='flex flex-col'>
                        <h5 className='text-md font-semibold text-blue-600'>Ashik</h5>
                        <h6 className='text-sm font-light text-orange-500'>ashikkurisingal@gmail.com</h6>
                      </div>
                    </div>

                  </div> */}

                  </div>

                </TabItem>

              </Tabs>


            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default AdminBooks
