import React, { useContext, useEffect } from 'react'
import Header from '../components/Header'
import Footer from '../../components/Footer'
import { Button, FloatingLabel } from 'flowbite-react'
import { Label, Radio } from "flowbite-react";
import { Link } from 'react-router-dom';
import { viewBookAPI } from '../../services/allAPIs';
import { searchContext } from '../../context/SearchContextShare';



function AllBooks() {

   const[token,setToken]=React.useState('')

   const[allBooks,setAllBooks] =React.useState([])

   const[dummyBooks,setDummyBooks]=React.useState([])

  const{searchKey,setSearchKey} =useContext(searchContext)

   console.log(searchKey);
   

    useEffect(()=>{
   
       setToken(sessionStorage.getItem("token"))
       viewAllBooks(searchKey)
     },[token,searchKey])
     
     //view all books
     const viewAllBooks=async(searchKey)=>{

      try{

        const reqHeader ={

          Authorization:`Bearer ${token}`
        }

        const response= await viewBookAPI(searchKey,reqHeader)

        setAllBooks(response.data.viewBook)
         setDummyBooks(response.data.viewBook)

        console.log(response);
        

      }
      catch(err){

        console.log(err);
        
      }

     }

     //filter books
     //create a dummy state and allbooks assign to dummy
     const handleFilter=(filterValue)=>{
      console.log(filterValue);

      if(filterValue =='all'){

        setAllBooks(dummyBooks)

      }
      else{
        let data;
      data =dummyBooks.filter(item=>(item.category).toLowerCase().trim() == filterValue.toLowerCase().trim())
      setAllBooks(data)

      }
      
     }

     //search key

    //  const handleSearch =()=>{

    //   console.log(searchKey);

    //   let data =dummyBooks.filter(item => (item.title).toLowerCase().trim() == searchKey.toLowerCase().trim())
    //   setAllBooks(data)

    //  }
   
  return (
    <div>
      <Header/>
     
     
    
     {token ? 
       <div>
         {/* search box */}
         <section className='mt-5'>
         
          <h2 className='text-3xl font-semibold mb-4 text-center '>Collections</h2>
                 <div className='flex justify-center items-center '>
                   <input onChange={(e)=>setSearchKey(e.target.value)} type="text"  className='w-100 h-10' placeholder='Search By Title' />
                   <Button  className='rounded-none' color="light" style={{ backgroundColor: '#ab5852' }}>Search</Button>
         
                 </div>

      </section>

         {/* filter and books show */}
        <section className='mt-5 p-5'>
        {/* div filter */}
        <div className='grid grid-cols-3'>
          <div>
          <h2 className='text-2xl mb-3'>Filters</h2>
        <div className="flex max-w-md flex-col gap-4">
      <div className="flex items-center gap-2">
        <Radio id="Literary Fiction" onClick={()=>handleFilter("Literary Fiction")} name="countries" value="Literary Fiction" style={{backgroundColor:'#ab5852'}}  />
        <Label htmlFor="Literary Fiction" style={{color:'black'}}>Literary Fiction</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="Philosophy" onClick={()=>handleFilter("Philosophy")} name="countries" value="Philosophy" style={{backgroundColor:'#ab5852'}}/>
        <Label htmlFor="Philosophy" style={{color:'black'}}>Philosophy</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="Thriller" onClick={()=>handleFilter("Thriller")} name="countries" value="Thriller" style={{backgroundColor:'#ab5852'}} />
        <Label htmlFor="Thriller" style={{color:'black'}}>Thriller</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="Romance" onClick={()=>handleFilter("Romance")} name="countries" value="Romance" style={{backgroundColor:'#ab5852'}} />
        <Label htmlFor="Romance" style={{color:'black'}}>Romance</Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="Horror" onClick={()=>handleFilter("Horror")} name="countries" value="Horror" style={{backgroundColor:'#ab5852'}} />
        <Label htmlFor="Horror" style={{color:'black'}}>
          Horror
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id=" Auto/Biography" onClick={()=>handleFilter("Auto Biography")} name="countries" value=" Auto/Biography" style={{backgroundColor:'#ab5852'}} />
        <Label htmlFor=" Auto/Biography" style={{color:'black'}}>
          Auto/Biography
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id=" Self-Help" onClick={()=>handleFilter("Self Help")} name="countries" value=" Self-Help"  style={{backgroundColor:'#ab5852'}}/>
        <Label htmlFor=" Self-Help" style={{color:'black'}}>
          Self-Help
        </Label>
      </div>
      <div className="flex items-center gap-2">
        <Radio id="Politics" onClick={()=>handleFilter("Politics")} name="countries" value="Politics"  style={{backgroundColor:'#ab5852'}}/>
        <Label htmlFor="Politics" style={{color:'black'}}>
          Politics
        </Label>
      </div>
    
     <div className="flex items-center gap-2">
        <Radio id=" All-category" onClick={()=>handleFilter("all")} name="countries" value="all"  style={{backgroundColor:'#ab5852'}}/>
        <Label htmlFor=" All Category" style={{color:'black'}}>
          All Category
        </Label>
      </div>
      </div>

         </div>
         {/* div boooks */}
          <div className='col-span-2'>
          <div className='flex  flex-wrap gap-4'>

         {
          allBooks.length>0?
          allBooks.map((item,index)=>(

            <Link key={index} to={`/previewbook/${item._id}`}>
           

            
             <div  className='flex flex-col items-center'>
            <img src={item.imageUrl} alt="" />
            <h4 className='text-lg font-semibold  '>{item.title}</h4>
            <p className='text-md font-normal'>short description</p>
            <p className='text-sm text-blue-500 font-light'>${item.price}</p>
          </div>
           </Link>
            
          )


          )
          :"No books found"

         }
          </div>

         

        </div>
       

        </div>
        
        


      </section>

       </div>
     
     
     :
     <div className='h-screen flex flex-col items-center justify-center ' >
   <h1 className='text-3xl text-center font-bold mb-3'>Please Login</h1>
   <Link to={'/login'}>
   <Button style={{ backgroundColor: '#ab5852'}}>Login </Button>
   </Link>
   

     </div>
     
     }
     
      
      <Footer/>
    </div>
  )
}

export default AllBooks
