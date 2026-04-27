import React, { useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import { Button, Drawer, DrawerHeader, DrawerItems, Label, Textarea, TextInput } from "flowbite-react";
import { useState } from "react";
import { HiEnvelope } from "react-icons/hi2";
import { serverURL } from '../../services/serverURL';
import { updateUserProfileAPI } from '../../services/allAPIs';


function EditProfile() {

  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);

  const [userDetails, setUserDetails] = React.useState({
    id: "",
    username: '',
    password: '',
    cpassword: '',
    bio: '',
    profile: ''

  })

  const [preview, setPreview] = React.useState('')

  useEffect(() => {

    //to get userdetails from sessionstorage

    if (sessionStorage.getItem("existingUser")) {

      let userData = JSON.parse(sessionStorage.getItem('existingUser'))

      if(userData){
        setUserDetails({
        id: userData._id,
        username: userData.username,
        password: "",
         cpassword: "",
        bio: userData.bio,
        profile: userData.profile || ""
      })

      }

      

    }
    // if (preview) {
    //   setPreview(serverURL + userData.profile)
    // }


  }, [])

  //image upload
  const handleUpload = (e) => {
    console.log(e.target.files[0]);

    let file = e.target.files[0]

    // let imgUrl = URL.createObjectURL(file)
    // console.log(imgUrl);
    if (file) {
      setPreview(URL.createObjectURL(file))
       //storefile
    setUserDetails({ ...userDetails, profile: file })

    }

  }
  console.log("preview:", preview);
  console.log(userDetails);



  const handleUpdate = async () => {
    console.log(userDetails);

    const { id, username, password, cpassword, bio, profile } = userDetails


    if (password && password != cpassword) {

       alert("passwords mismatch")
    }
    else{

        const token = sessionStorage.getItem('token')

      const reqHeader = {
        Authorization: `Bearer ${token}`
      }

      const reqBody = new FormData()
      if (username) reqBody.append("username", username)
      if (password) reqBody.append("password", password)
      if (bio) reqBody.append("bio", bio)
         // instanceof File : Sends the profile only if it’s a new uploaded file, otherwise skips it.
        if(profile instanceof File){
          reqBody.append("profile", profile)

        }
      
      try {
        const response = await updateUserProfileAPI(id,reqBody,reqHeader)
        console.log(response);
        alert(response.data.message)

        //update session storage
        sessionStorage.setItem("existingUser",JSON.stringify(response.data.updateProfile))
       //close siebar  
        handleClose()
      
        
      }
      catch (err) {

        console.log(err);

      }

    }

    

}

const handleReset =async()=>{

   const userData = JSON.parse(sessionStorage.getItem("existingUser"))
if(userData){
   setUserDetails({
   id:userData._id,
    username:"",
    password:"",
    cpassword:"",
    bio:"",
    profile:userData.profile || ""
  })

}
 




}

return (
  <div>
    <Button outline color="blue" className='' onClick={() => setIsOpen(true)}><FaEdit className='mx-1' />Edit</Button>


    <Drawer open={isOpen} onClose={handleClose} style={{ backgroundColor: '#ab5852' }}>
      <DrawerHeader title="Edit User Profile" className='mb-4 text-white ' style={{ color: 'white' }} />
      <DrawerItems className='h-screen'>

        <form action="#">
          <div className='flex justify-center relative'>

            <label id='' htmlFor="img">
              <img
              src={
                preview
                  ? preview
                  : userDetails.profile
                  ? `${serverURL}/uploads/${userDetails.profile}`
                  : "https://i.pinimg.com/originals/5c/bc/f4/5cbcf42384e992638df32657f7de7469.png"
              }
              alt="profile"
              className="w-40 h-40 mx-auto pt-2 rounded-full object-cover cursor-pointer"
            />

              <TextInput onChange={(e) => handleUpload(e)} type="file" id='img' hidden />
              {/* {
                userDetails.profile ? <img src={`${serverURL}/uploads/${userDetails.profile}`} className='rounded-full w-24 h-24 object-cover border' alt="profile" /> : <img src="./public/profile.jpg" className='rounded-full w-24 h-24 object-cover ' alt="" />
              } */}
              {/* <FaEdit className='absolute text-2xl text-gray-700 top-35 left-40' /> */}
            </label>


          </div>

          <div className="mb-6 mt-3">
            <TextInput onChange={(e) => setUserDetails({ ...userDetails, username: e.target.value })} value={userDetails.username} id="text" name="name" placeholder="user name" type="text" />
          </div>
          <div className="mb-6">
            <TextInput onChange={(e) => setUserDetails({ ...userDetails, password: e.target.value })} value={userDetails.password} type='password' placeholder=" password" />
          </div>
          <div className="mb-6">
            <TextInput onChange={(e) => setUserDetails({ ...userDetails, cpassword: e.target.value })} value={userDetails.cpassword} type='password' placeholder="confirm password" />
          </div>
          <div className="mb-6">
            <Textarea onChange={(e) => setUserDetails({ ...userDetails, bio: e.target.value })} value={userDetails.bio} id="message" name="message" placeholder="user bio" rows={4} />
          </div>
          <div className=" flex justify-end gap-2">
            <Button onClick={handleReset} size='sm' color={'red'} className="">
              Reset
            </Button>
            <Button onClick={handleUpdate} size='sm' color={'green'} >
              Update
            </Button>
          </div>
        </form>
      </DrawerItems>
    </Drawer>


  </div>
)
}

export default EditProfile
