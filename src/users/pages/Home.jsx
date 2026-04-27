import React, { useEffect } from 'react'
import Header from '../components/Header'
import { CiSearch } from "react-icons/ci";
import { Card } from "flowbite-react";
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { viewBookLandingAPI } from '../../services/allAPIs';

function Home() {

   const[token,setToken]=React.useState('')

   const[allbooks,setAllBooks]=React.useState([])

   useEffect(()=>{
      
          setToken(sessionStorage.getItem("token"))
          viewAllBooks()
         
        },[token])

const viewAllBooks=async()=>{

      try{

        // const reqHeader ={

        //   Authorization:`Bearer ${token}`
        // }

        const response= await viewBookLandingAPI()

        setAllBooks(response.data.viewBook)

        console.log(response);
        

      }
      catch(err){

        console.log(err);
        
      }

     }
  return (
    <div>
      <Header />

      <section className='w-full min-h-120 bg-[url(https://cdn.pixabay.com/photo/2014/09/05/18/32/old-books-436498_1280.jpg)] bg-cover bg-center'>


        <div className='flex flex-col justify-center  items-center h-100  gap-2'>
          <div className='flex flex-col items-center shadow-lg p-8 bg-black/30 rounded-lg'>
            <h1 className='text-5xl text-white'>Wonderful Gifts</h1>
          <p className='text-sm text-white mb-3'>Give your family and friends a book</p>
          <div className='flex items-center gap-1 relative'>
            <input type="text" className='block rounded-3xl h-8 w-80 border-white' placeholder='search books' /><CiSearch className='text-3xl absolute left-70' />

          </div>
          

          </div>


        </div>

      </section>
      <section className='mb-5 p-1'>
        <div className='flex flex-col  items-center mt-4 mb-3'>
          <h2 className='text-xl'>NEW ARRIVALS</h2>
          <h2 className='text-3xl'>Explore Our Latest Collection</h2>
        </div>
        <div className='flex justify-center'>
           <div className='grid grid-cols-4 gap-5 p-5'>
            {
              allbooks.length>0?
              allbooks.map(item=>(
                     <Card key={item._id}
            className="max-w-sm "
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={item.imageUrl} 
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             {
              item.title
    
             }
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              ${item.price}
            </p>
          </Card>


              ))
          
              
              :"no latest collection"
            }
         
         

        </div>

        </div>
       
        <div className='flex  justify-center'>
          <Link to={'/allbooks'}>
           <button className=' rounded p-2 text-white mt-5 mb-5' style={{backgroundColor:'#ab5852'}}>Explore More</button>
          </Link>
         
        </div>


      </section>
  

        {/* featured authors */}


      <section className='p-5'>
          <div className='flex flex-row justify-center'>
             <div className='grid grid-cols-2 gap-4'>
        <div className='text-center'>
           <h3 className='text-xl font-bold'>FEATURE AUTHORS </h3>
           <h3 className='text-2xl mb-3'>Capitivates with every word</h3>
           <p className='text-justify mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatem molestiae, veritatis ullam rem molestias aut sunt suscipit sapiente alias animi quas vero eveniet quam inventore aperiam possimus saepe velit.
           Id eos ab inventore. Eum tempore voluptatibus veritatis culpa at totam nulla, pariatur error eligendi quo nemo ullam perferendis impedit cumque cupiditate quas molestias corrupti exercitationem suscipit ex maxime! Magni.</p>
         <p className='text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti labore ab accusamus, at modi doloremque libero laudantium laborum excepturi? Voluptates doloremque quas ab aliquid. Cumque suscipit laudantium ut magni numquam.
         Commodi, dolor magni, alias itaque optio reiciendis incidunt, nam tempora nulla aliquid odio cupiditate quae! Similique veniam excepturi ullam odit quam. Ea dolorum deserunt omnis, consequatur nisi recusandae voluptatibus provident!</p>

        </div>
        <div className='mt-5'>
          <img className='object-cover ' src="https://cdn.pixabay.com/photo/2016/05/28/07/06/writer-1421099_1280.jpg" alt="" />
        </div>
       

      </div>

          </div>
          
      </section>

      {/* testimonial */}

      <section className='p-5 mt-5'>
        <div className='flex flex-col items-center '>
          <h2 className='text-2xl font-bold mb-2'>TESTIMONIALS</h2>
          <h3 className='text-xl mb-2'>See What Others Are Saying</h3>
          <img src="https://img.freepik.com/free-photo/smiling-man-sitting-cafe-table-gesturing_1262-1141.jpg?semt=ais_rp_50_assets&w=740&q=80" className='rounded-full w-30 h-30 object-cover border-2' style={{borderColor:'#ab5852'}} alt="" />
          <h6 className='text-lg mb-2 font-extralight'>Adrian Gasp</h6>
          <p className='text-justify font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi consequuntur aliquam pariatur a esse sunt quibusdam nam amet. Nihil voluptate amet doloremque libero placeat iure quisquam obcaecati aut dolorum deleniti.
          Totam cum et laudantium consequuntur veritatis quaerat fuga perferendis quisquam perspiciatis quas modi vel maiores, sed nostrum repellendus doloremque ea. 
          Possimus itaque delectus hic? Deserunt corporis natus nam eaque repellat?</p>
        </div>
      </section>

      <Footer></Footer>

    </div>
  )
}

export default Home
