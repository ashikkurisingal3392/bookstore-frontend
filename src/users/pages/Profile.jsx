import React from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Button, Textarea, TextInput } from "flowbite-react";
import { TabItem, Tabs } from "flowbite-react";
import EditProfile from '../components/EditProfile';
import { addBookAPI } from '../../services/allAPIs';

function Profile() {

  const [bookDetails, setBookDetails] = React.useState({
    title: "",
    author: "",
    noofpages: "",
    imageUrl: "",
    price: "",
    dprice: "",
    abstract: "",
    publisher: "",
    language: "",
    isbn: "",
    category: "",
    userMail: "",
    uploadedImages:[]
  })

  //to handle img  url

  const [preview, setPreview] = React.useState('')

  //to handle uploadedimg urls

  const [previewList, setPreviewList] = React.useState([])

  //upload images
  const handleUpload = (e) => {

  console.log(e.target.files[0]);
  
  
    let imgArray = bookDetails.uploadedImages
    if(imgArray.length<3){
       imgArray.push(e.target.files[0])

    }
   

    //console.log(imgArray);
    setBookDetails({...bookDetails,uploadedImages:imgArray})

    let imgUrl=URL.createObjectURL(e.target.files[0])
    console.log(imgUrl);

    setPreview(imgUrl)

    let imgListArray =previewList

    if(imgListArray.length <3){

      previewList.push(imgUrl)
    }

    
    setPreviewList(imgListArray)

    console.log(previewList);


  }

  const handleAddBook = async () => {

    console.log(bookDetails);

    const{title,author,noofpages,imageUrl,price,dprice,abstract,publisher,language,isbn,category,uploadedImages}=bookDetails

    if(abstract && author && category && dprice && imageUrl && isbn && language && noofpages && price &&
      publisher && title && uploadedImages.length>0
    )
    {

      try{

        const token =sessionStorage.getItem('token')

        const reqHeader ={
          Authorization:`Bearer ${token}`
        }
       //becoz body is formdata
        const reqBody = new FormData()
        console.log(reqBody);
        

        // reqBody.append("title",title)
         console.log(bookDetails.uploadedImages);
         
        for(let key in bookDetails){

          if(key!="uploadedImages"){
            reqBody.append(key,bookDetails[key])

          }
          else{

            bookDetails.uploadedImages.forEach(item=> reqBody.append("uploadedImages",item))

          }
        }
        
        const response =await addBookAPI(reqBody,reqHeader)
       console.log(response);
       if(response.status === 200){
        alert(response.data.message)

       }
       else{
        alert("error while adding book")
       }
       
       
      }
      catch(err){
        console.log(err);
        console.log(err.response.data.message);
        alert(err.response.data.message)
        
        
      }

    }
    else{
      alert('please fill the forms')
       alert("error while adding book")
    }

    


  }
  return (
    <div>
      <Header />
      {/* rounded image */}
      <section>
        <div className='h-40 ' style={{ backgroundColor: '#ab5852' }}></div>
        <div className='w-40 h-40 rounded-full relative p-3'>
          <img src="./public/profile.jpg" className='rounded-full w-32 h-32 object-cover  absolute -top-16' alt="" />
        </div>
      </section>
      {/* name section */}
      <section className=' container p-4'>

        <div>
          <div className='flex justify-between mb-4'>
            <h1 className='text-2xl font-semibold'>Ashik Antony</h1>
            <EditProfile></EditProfile>
            {/* <Button outline color="blue" className=''><FaEdit className='mx-1' />Edit</Button> */}


          </div>
          <div>
            <p className='text-justify font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam, sunt cumque. Excepturi, veritatis, hic, cum aut officiis
              expedita sunt blanditiis id rerum possimus ducimus nam sint fuga aliquid distinctio eaque.</p>
          </div>
        </div>
      </section>

      {/* tabs */}
      <section className='container p-5'>
        <div className=' w-full flex justify-center p-5'>
          <Tabs aria-label="Default tabs flex justify-center" variant="default" >
            <TabItem active title="Sell Book"  >

              <div className='shadow-2xl p-4'>
                <h2 className='text-xl font-medium flex justify-center mb-4'>Book Details</h2>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-3'>
                  <div className=''>
                    <TextInput onChange={e => setBookDetails({ ...bookDetails, title: e.target.value })} type="text" className='w-80 h-8  rounded' placeholder='Title' />
                  </div>
                  <div className=''>
                    <TextInput onChange={e => setBookDetails({ ...bookDetails, publisher: e.target.value })} type="text" className='w-80 h-8 rounded' placeholder='Publisher' />
                  </div>
                  <div className=''>
                    <TextInput onChange={e => setBookDetails({ ...bookDetails, author: e.target.value })} type="text" className='w-80 h-8 rounded' placeholder='Author' />

                  </div>
                  <div className=''>
                    <TextInput onChange={e => setBookDetails({ ...bookDetails, language: e.target.value })} type="text" className='w-80 h-8 rounded' placeholder='Language' />
                  </div>
                  <div className=''>
                    <TextInput onChange={e => setBookDetails({ ...bookDetails, noofpages: e.target.value })} type="text" className='w-80 h-8 rounded' placeholder='No of Pages' />
                  </div>
                  <div className=''>
                    <TextInput onChange={e => setBookDetails({ ...bookDetails, isbn: e.target.value })} type="text" className='w-80 h-8 rounded' placeholder='ISBN' />
                  </div>
                  <div className=''>
                    <TextInput onChange={e => setBookDetails({ ...bookDetails, imageUrl: e.target.value })} type="text" className='w-80 h-8 rounded' placeholder='Image Url' />
                  </div>
                  <div className=''>
                    <TextInput onChange={e => setBookDetails({ ...bookDetails, category: e.target.value })} type="text" className='w-80 h-8 rounded' placeholder='Category' />
                  </div>
                  <div className=''>
                    <TextInput onChange={e => setBookDetails({ ...bookDetails, price: e.target.value })} type="text" className='w-80 h-8 rounded' placeholder='Price' />
                  </div>
                  <div className=' md:row-span-3 flex flex-col items-center gap-2'>
                    <label >
                      <TextInput onChange={(e) => handleUpload(e)} multiple type="file" id='img' className='w-80 h-8 rounded ' hidden placeholder='image' />

                       {
                        preview
                        ?

                        <div className='flex justify-evenly items-center  gap-2'>

                          {
                            previewList.length <3?
                            <div className='flex justify-evenly items-center  gap-2' >
                             <img src={preview} className='h-30 w-30'/>
                        <img src="https://cdn-icons-png.flaticon.com/512/2661/2661440.png" className='w-10 h-10' alt="addbutton"  />
                         </div>
                            :""
                          }
                        </div>
                       

                        :

                        <img src="https://www.freeiconspng.com/thumbs/upload-icon/upload-icon-31.png" className='h-30 w-30 mt-3' alt="" />
                       } 
                         
                        {
                          preview && previewList.length<=3 ?
                           <div className='flex justify-evenly gap-2  mb-3'>
                            {
                              previewList.map(item=> 
                              <img src={item} className='w-20 h-20'/>
                                )

                            }
                            
                          </div>
                        
                          :""
                        }



                    </label>

                  </div>

                  <div className=''>
                    <TextInput onChange={e => setBookDetails({ ...bookDetails, dprice: e.target.value })} type="text" className='w-80 h-8 rounded' placeholder='Discount Price' />
                  </div>
                  <div className=''>
                    <Textarea onChange={e => setBookDetails({ ...bookDetails, abstract: e.target.value })} type="text" className='w-80 h-20 rounded' placeholder='Abstract' />
                  </div>

                </div>

                <div className='flex justify-end gap-3'>
                  <Button color="red">Reset</Button>
                  <Button onClick={handleAddBook} color="green">Submit</Button>
                </div>
              </div>
            </TabItem>
            <TabItem title="Book Status" >
              <div className='conatiner shadow-2xl p-5'>
                <div className='grid grid-cols-3'>
                  <div className='col-span-2 flex flex-col '>
                    <h3 className='text-xl font-semibold mb-2'>You Become What You Think</h3>
                    <p className='text-justify font-light mb-2'>This book isn't just about reading--it's about tangible change. With actionable insights,
                      it'll reshape your thinking and empower you to unlock the best version of yourself.</p>
                    <p className='text-md  mb-2'>Shubham Kumar Singh</p>
                    <p className='text-sm text-blue-500 mb-2'>$20</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" className='w-15 h-15 rounded object-cover' alt="" />

                  </div>
                  <div>
                    <img src="https://m.media-amazon.com/images/I/61id5HQ7ogL._SY522_.jpg" alt="" />
                  </div>


                </div>
                <div className='flex justify-end'>
                  <Button color="red" size='sm'>Delete</Button>

                </div>

              </div>
              <div className='conatiner shadow-2xl p-5'>
                <div className='grid grid-cols-3'>
                  <div className='col-span-2 flex flex-col '>
                    <h3 className='text-xl font-semibold mb-2'>You Become What You Think</h3>
                    <p className='text-justify font-light mb-2'>This book isn't just about reading--it's about tangible change. With actionable insights,
                      it'll reshape your thinking and empower you to unlock the best version of yourself.</p>
                    <p className='text-md  mb-2'>Shubham Kumar Singh</p>
                    <p className='text-sm text-blue-500 mb-2'>$20</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" className='w-15 h-15 rounded object-cover' alt="" />

                  </div>
                  <div>
                    <img src="https://m.media-amazon.com/images/I/61id5HQ7ogL._SY522_.jpg" alt="" />
                  </div>


                </div>

              </div>
            </TabItem>
            <TabItem title="Purchase History" >
              <div className='conatiner shadow-2xl p-5'>
                <div className='grid grid-cols-3'>
                  <div className='col-span-2 flex flex-col '>
                    <h3 className='text-xl font-semibold mb-2'>You Become What You Think</h3>
                    <p className='text-justify font-light mb-2'>This book isn't just about reading--it's about tangible change. With actionable insights,
                      it'll reshape your thinking and empower you to unlock the best version of yourself.</p>
                    <p className='text-md  mb-2'>Shubham Kumar Singh</p>
                    <p className='text-sm text-blue-500 mb-2'>$20</p>
                    <img src="https://cdn-icons-png.flaticon.com/512/6188/6188726.png" className='w-15 h-15 rounded object-cover' alt="" />

                  </div>
                  <div>
                    <img src="https://m.media-amazon.com/images/I/61id5HQ7ogL._SY522_.jpg" alt="" />
                  </div>


                </div>

              </div>

            </TabItem>

          </Tabs>

        </div>
      </section>


      <Footer />
    </div>
  )
}

export default Profile

