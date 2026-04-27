import React from 'react'
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
import Marquee from "react-fast-marquee";
import { Link } from 'react-router-dom';

function AdminHeader() {

   const handleLogout=()=>{

    sessionStorage.removeItem('existingUser')
     sessionStorage.removeItem('token')

    window.location.href='/login'
  }
  return (
    <div>


      <Navbar fluid style={{ backgroundColor: '#ab5852' }}>
        <NavbarBrand href="/">
          <img src="https://cdn-icons-png.flaticon.com/512/5078/5078755.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">The Book Haven</span>
        </NavbarBrand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
            }
          >
            <DropdownHeader>
              <span className="block text-sm">Ashik Antony</span>
              <span className="block truncate text-sm font-medium">admin@gmail.com</span>
            </DropdownHeader>
             {/* <Link to={'/profile'}><DropdownItem>Profile</DropdownItem></Link> */}
            <DropdownItem>Settings</DropdownItem>
            <DropdownItem>Earnings</DropdownItem>
            <DropdownDivider />
             <Link to={'/login'}><DropdownItem onClick={handleLogout} >Sign out</DropdownItem></Link>
          </Dropdown>
          <NavbarToggle />
        </div>
        {/* <NavbarCollapse> */}
               {/* <NavbarLink href="/" active>
                 Home
               </NavbarLink>
               <NavbarLink href="/allbooks">Books</NavbarLink>
               <NavbarLink href="/careers">Careers</NavbarLink>
               <NavbarLink href="/contact">Contact</NavbarLink>
             </NavbarCollapse> */}

      </Navbar>
      <section>
        <div className='w-full h-10 flex items-center' style={{ backgroundColor: '#94807a' }}>
          <Marquee speed={50} gradient={false}>
            <span className="text-white">
              Welcome to Admin Dashboard!
            </span>
          </Marquee>

        </div>
      </section>


    </div>
  )
}

export default AdminHeader
