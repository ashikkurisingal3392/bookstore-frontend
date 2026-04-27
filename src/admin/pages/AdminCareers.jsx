import React from 'react'
import AdminSidebar from '../components/AdminSidebar'
import AdminHeader from '../components/AdminHeader'
import { Button, TabItem, Tabs } from "flowbite-react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";


function AdminCareers() {
  return (
    <div>


      <AdminHeader />
      <div className='flex '>
        <div className='w-64 h-screen ' style={{ backgroundColor: '#9d755c' }}>
          <AdminSidebar />
        </div>
        <div className='w-full flex-1 mt-5 p-5'>

          <div className='flex justify-center w-full p-5'>
            <Tabs aria-label="Default tabs" variant="default">
              {/* tab1 job list */}
              <TabItem active title="Job Post" >
                <div className='section'>
                  <div className='flex flex-row justify-between  gap-5 mb-5  '>
                    <div className='flex'>
                      <input type="text" className='h-10 w-60 border-white bg-gray-500' />
                      <Button className='rounded-none '>Search</Button>
                    </div>
                    <Button className='bg-green-700 rounded-none'>Add Job</Button>
                  </div>
                  <div>
                    <div className='flex flex-col justify-center items-center gap-5  '>
                      <div className='shadow-xl p-5 w-180'>
                        <div className='grid grid-cols-3 gap-2 '>
                          <div className='col-span-2'>
                            <h3 className='text-xl font-semibold'>Hr Assistant</h3>
                            <hr className='w-100' />

                          </div>
                          <div>
                            <Button className='' color="green" style={{ backgroundColor: '#ab5852' }} >Delete<MdDelete className='text-xl mx-1' /></Button>
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
                        <p className='text-justify'>Descriptions: Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptates facere, ut soluta cumque laborum eveniet consectetur cum veniam excepturi iusto
                          quibusdam perferendis assumenda suscipit incidunt reprehenderit nisi saepe omnis.</p>

                      </div>
                      <div className='shadow-xl p-5 w-180'>
                        <div className='grid grid-cols-3 gap-2 '>
                          <div className='col-span-2'>
                            <h3 className='text-xl font-semibold'>Hr Assistant</h3>
                            <hr className='w-100' />

                          </div>
                          <div>
                            <Button className='' color="green" style={{ backgroundColor: '#ab5852' }} >Delete<MdDelete className='text-xl mx-1' /></Button>
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
                        <p className='text-justify'>Descriptions: Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam voluptates facere, ut soluta cumque laborum eveniet consectetur cum veniam excepturi iusto
                          quibusdam perferendis assumenda suscipit incidunt reprehenderit nisi saepe omnis.</p>

                      </div>


                    </div>
                  </div>
                </div>
              </TabItem>
              {/* tab 2 job table */}
              <TabItem title="View Applicant" >
                <div className=" flex justify-center">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeadCell>No</TableHeadCell>
                        <TableHeadCell>Job Title</TableHeadCell>
                        <TableHeadCell>Name
                        </TableHeadCell>
                        <TableHeadCell>Qualification</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell>Phone</TableHeadCell>
                         <TableHeadCell>Cover Letter</TableHeadCell>
                        <TableHeadCell>
                          <span className="sr-only">Edit</span>
                        </TableHeadCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                      <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <TableCell>1</TableCell>
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          Frontend Developer
                        </TableCell>
                         <TableCell>Ashik</TableCell>
                        <TableCell>Btech CS</TableCell>
                        <TableCell>ashikkurisingal@gmail,com</TableCell>
                        <TableCell>07442643888</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In laborum dolores, vitae architecto qui modi esse maiores accusantium voluptates.
                           Error voluptatibus odit autem perspiciatis iste, sequi eos officia minus? Quos!</TableCell>
                        <TableCell>
                          <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Edit
                          </a>
                        </TableCell>
                      </TableRow>
                       <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <TableCell>1</TableCell>
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          Frontend Developer
                        </TableCell>
                         <TableCell>Ashik</TableCell>
                        <TableCell>Btech CS</TableCell>
                        <TableCell>ashikkurisingal@gmail,com</TableCell>
                        <TableCell>07442643888</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In laborum dolores, vitae architecto qui modi esse maiores accusantium voluptates.
                           Error voluptatibus odit autem perspiciatis iste, sequi eos officia minus? Quos!</TableCell>
                        <TableCell>
                          <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Edit
                          </a>
                        </TableCell>
                      </TableRow>
                       <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                         <TableCell>1</TableCell>
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          Frontend Developer
                        </TableCell>
                         <TableCell>Ashik</TableCell>
                        <TableCell>Btech CS</TableCell>
                        <TableCell>ashikkurisingal@gmail,com</TableCell>
                        <TableCell>07442643888</TableCell>
                        <TableCell>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In laborum dolores, vitae architecto qui modi esse maiores accusantium voluptates.
                           Error voluptatibus odit autem perspiciatis iste, sequi eos officia minus? Quos!</TableCell>
                        <TableCell>
                          <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                            Edit
                          </a>
                        </TableCell>
                      </TableRow>
                      
                    </TableBody>
                  </Table>
                </div>

              </TabItem>

            </Tabs>

          </div>





        </div>
      </div>

    </div>
  )
}

export default AdminCareers
