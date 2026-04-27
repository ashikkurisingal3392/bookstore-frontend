import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

function Header() {

  const[token,setToken]=React.useState('')
  const[userDetails,setUserDetails]=React.useState({})

  console.log(userDetails);
  

  useEffect(()=>{

    setToken(sessionStorage.getItem("token"))
    setUserDetails(JSON.parse(sessionStorage.getItem("existingUser")) )
  },[token])

  const handleLogout=()=>{

    sessionStorage.removeItem('existingUser')
     sessionStorage.removeItem('token')
    
  }

  return (
    <div>


    <Navbar fluid rounded  style={{backgroundColor:'#ab5852'}}>
      <NavbarBrand href="/">
        <img src="https://cdn-icons-png.flaticon.com/512/5078/5078755.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">The Book Haven</span>
      </NavbarBrand>
      <div className="flex md:order-2">
        {
          token?
          <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img={userDetails.profile} referrerPolicy='origin'  rounded />
          }
        >
          <DropdownHeader>
            <span className="block text-sm">{userDetails.username}</span>
            <span className="block truncate text-sm font-medium">{userDetails.email}</span>
          </DropdownHeader>
           <Link to={'/profile'}> <DropdownItem >Profile</DropdownItem></Link>
         
          <DropdownItem>Settings</DropdownItem>
          <DropdownItem>Earnings</DropdownItem>
          <DropdownDivider />

          <Link to={'/login'}><DropdownItem onClick={handleLogout}>Sign out</DropdownItem></Link>
        </Dropdown>
          :
          <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://cdn-icons-png.flaticon.com/512/9187/9187604.png" rounded />
          }
        >
         <Link to={'/login'}>
          <DropdownItem >Login</DropdownItem>
         </Link>
           <Link to={'/register'}>
            <DropdownItem >Register</DropdownItem>
           </Link>
          
        </Dropdown>
        }
        
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="/" active>
          Home
        </NavbarLink>
        <NavbarLink href="">Books</NavbarLink>
       <Link to={'/careers'}><NavbarLink >Careers</NavbarLink></Link> 
         <Link to={'/contact'}><NavbarLink >Contact</NavbarLink></Link> 
      </NavbarCollapse>
    </Navbar>

      
    </div>
  )
}

export default Header
