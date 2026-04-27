import React from 'react'
import { IoPersonOutline } from "react-icons/io5";
import { Button, TextInput } from "flowbite-react";
import { FcGoogle } from "react-icons/fc";
import GoogleButton from 'react-google-button'
import { googleLoginAPI, loginAPI, registerAPI } from '../services/allAPIs';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function Auth({ register }) {
  console.log(register);

  // to hold user details from formdata
  const [userDetails, setUserDetails] = React.useState({

    username: "",
    email: '',
    password: ''
  })

  const navigate = useNavigate()

  //register
  const handleRegister = async () => {

    console.log(userDetails);

    if (userDetails.username && userDetails.email && userDetails.password) {


      try {

        const response = await registerAPI(userDetails)

        console.log(response);
        if (response.status === 201) {

          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });
          setTimeout(() => {
            navigate('/login')

            setUserDetails({
              username:'',email:'',password:''
            })

          }, 4000);


        }

      }
      catch (err) {
        console.log(err);

        console.log(err.response.data.message);
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });
      }

    }
    else {
      alert("Please fill forms..")
    }

  }

  //login
  const handleLogin = async () => {

    console.log(userDetails);

    if (userDetails.email && userDetails.password) {

      try {
        const response = await loginAPI(userDetails)
        console.log(response);
        if (response.status === 200) {
          toast.success(response.data.message, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            transition: Bounce,
          });

          console.log(response.data.token);
          

          sessionStorage.setItem("token",response.data.token)
           sessionStorage.setItem("existingUser",JSON.stringify(response.data.existingUser) )

          if (response.data.existingUser.role === 'user') {

            setTimeout(() => {
              navigate('/')
              setUserDetails({
              username:'',email:'',password:''
            })

            }, 4000);


          }
          else {
            setTimeout(() => {
              navigate('/admin-home')
              setUserDetails({
              username:'',email:'',password:''
            })

            }, 4000);

          }



        }


      }
      catch (err) {
        console.log('login fail', err);
        console.log(err.response.data.message);
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Bounce,
        });

      }

    }
    else {
      alert("please fill the form")
    }

  }
  // google login

  const handleGoogleLogin=async(credentialResponse)=>{

   
     const decoded = jwtDecode(credentialResponse.credential);
     console.log(decoded);

     try{

      const response =await googleLoginAPI({
        username:decoded.name,
        email:decoded.email,
        password:"google password",
        profile:decoded.picture
      })
      console.log(response);
      if (response.status === 200) {

           sessionStorage.setItem("token",response.data.token)
           sessionStorage.setItem("existingUser",JSON.stringify(response.data.existingUser) )
        }
        else if(response.status === 201){
          sessionStorage.setItem("token",response.data.token)
           sessionStorage.setItem("existingUser",JSON.stringify(response.data.newUser) )


        }
        if(response.data.existingUser?.role ==='user') {

          setTimeout(() => {

            navigate('/')
             setUserDetails({
              username:'',email:'',password:''
            })
            
          }, 2000);

        }
        else if(response.data.newUser?.role==="user"){
          setTimeout(() => {

            navigate('/')
             setUserDetails({
              username:'',email:'',password:''
            })
            
          }, 2000);

        }
        else {
          setTimeout(() => {
              navigate('/admin-home')
              setUserDetails({
              username:'',email:'',password:''
            })

            }, 2000);
        }
      

     }
     catch(err){
      console.log(err);
      
     }
     
    

  }

  return (


    <div>
      <style>
        {`

        .custom-placeholder::placeholder{
        
        color:gray;
        opacity:1

        }
        
        `
        }
      </style>

      <section className='w-full h-screen  bg-[url(https://cdn.pixabay.com/photo/2016/03/09/15/29/books-1246674_1280.jpg)] bg-cover bg-center'>
        <div className='flex flex-col justify-center items-center gap-3 w-full h-screen border-2  '>
          <form className='flex flex-col justify-center items-center gap-3 p-5 shadow-5xl' style={{ backgroundColor: '#00202e' }}>
            <IoPersonOutline className='text-5xl text-white border-2 rounded-3xl p-2 ' style={{ borderColor: 'white' }} />
            <h1 className='text-white text-2xl'>{register ? 'Register' : 'Login'}</h1>
            {
              register &&
              <TextInput onChange={e => setUserDetails({ ...userDetails, username: e.target.value })} type="text" className='rounded-lg w-80 h-10 custom-placeholder' placeholder='User Name' />
            }

            <TextInput onChange={e => setUserDetails({ ...userDetails, email: e.target.value })} type="email" className='rounded-lg w-80 h-10 custom-placeholder' placeholder='Email Id' required />
            <TextInput onChange={e => setUserDetails({ ...userDetails, password: e.target.value })} type="password" className='rounded-lg w-80 h-10 custom-placeholder' placeholder='Password' />
            {
              register ? <p className=' w-full  text-xs text-yellow-700 '>*Never share your password with other</p> :
                <div className='flex justify-between gap-3'>
                  <p className=' text-xs text-yellow-700 '>*Never share your password with other</p>
                  <p className='text-xs text-white'>forget password</p>
                </div>

            }

            {/* <Button onClick={handleRegister} className='w-full' color="green">{register ? 'Register' : 'Login'}</Button> */}
            {
              register ?
                <Button onClick={handleRegister} className='bg-amber-50 hover:bg-amber-600' >Register</Button>
                : <Button onClick={handleLogin} className='bg-amber-50  hover:bg-amber-600'> Login</Button>
            }
            {
              !register &&
              <div >
                <span className='text-white'>----------</span>
                <span className='text-white'> or </span>
                <span className='text-white'>----------</span>
              </div>

            }
            {
              !register &&
              // <GoogleButton
              //   onClick={() => { console.log('Google button clicked') }}
              // />
              <GoogleLogin
                onSuccess={credentialResponse => {
                  console.log(credentialResponse);
                  handleGoogleLogin(credentialResponse)
                }}
                onError={() => {
                  console.log('Login Failed');
                }}
              />

            }

            <p className='text-sm text-white'>Are you already a user?<span className='text-blue-500 mx-1'><a href={register ? "login" : "/register"}>{register ? 'Login' : 'Register'}</a></span></p>

          </form>

        </div>

      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />

    </div>
  )
}

export default Auth
