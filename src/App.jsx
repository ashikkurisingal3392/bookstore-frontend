import './App.css'
import { Route, Routes } from 'react-router-dom'
import Auth from './pages/Auth.jsx'
import Home from './users/pages/Home'
import AllBooks from './users/pages/AllBooks'
import ViewBook from './users/pages/ViewBook'
import Contact from './users/pages/Contact'
import Careers from './users/pages/Careers'
import Profile from './users/pages/Profile'
import Paymentsuccess from './users/pages/Paymentsuccess'
import Paymenterrors from './users/pages/Paymenterrors'
import AdminBooks from './admin/pages/AdminBooks'
import AdminCareers from './admin/pages/AdminCareers'
import AdminHome from './admin/pages/AdminHome'
import AdminSettings from './admin/pages/AdminSettings'
import Preloader from './components/Preloader.jsx'
import { useEffect, useState } from 'react'
import PreviewBook from './users/pages/PreviewBook.jsx'




function App() {

  const[isLoading,setIsLoading]=useState(false)


  useEffect(()=>{

     setTimeout(() => {

    setIsLoading(true)
    
  }, 2000)


  },[isLoading])

  return (
    <>
     <Routes>
      {/* user parts */}
      <Route path='/' element={isLoading?<Home/>:<Preloader/>}/>
      <Route path='/register' element={<Auth register/>}/>
      <Route path='/login' element={<Auth/>}/>
      <Route path='/allbooks' element={<AllBooks/>}/>
      {/* <Route path='/viewbook/:id' element={<ViewBook/>}/> */}
       <Route path='/previewbook/:id' element={<PreviewBook/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/careers' element={<Careers/>}/>
      <Route path='/profile' element={<Profile/>}/>
      {/* payment part */}
      <Route path='/payment-success' element={<Paymentsuccess/>}/>
      <Route path='/payment-error' element={<Paymenterrors/>}/>
       {/* <Route path='/preloader' element={<Preloader/>}/> */}
      {/* admin part */}
      <Route path='/admin-home' element={<AdminHome/>}/>
      <Route path='/admin-books' element={<AdminBooks/>}/>
      <Route path='/admin-careers' element={<AdminCareers/>}/>
      <Route path='/admin-settings' element={<AdminSettings/>}/>

      {/* <Route path='*' element={<PageNotFound/>}/> */}
     </Routes>

    </>
  )
}

export default App
