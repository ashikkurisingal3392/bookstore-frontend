import commonAPI from "./commonAPIs";
import { serverURL } from "./serverURL";

//1. register:POST

export const registerAPI=async(reqBody)=>{

    return await commonAPI('POST',`${serverURL}/api/register`,reqBody,"")

}

///Login API- {reqbody}
export const loginAPI=async(reqBody)=>{

    return await commonAPI('POST',`${serverURL}/api/login`,reqBody,"")

}

//google Login
export const googleLoginAPI=async(reqBody)=>{

    return await commonAPI('POST',`${serverURL}/api/googleLogin`,reqBody,"")

}

//add book /api/addbook

export const addBookAPI=async(reqBody,reqHeader)=>{

    return await commonAPI('POST',`${serverURL}/api/addbook`,reqBody,reqHeader)

}
//view books in allbooks page

export const viewBookAPI=async(searchKey,reqHeader)=>{

    return await commonAPI('GET',`${serverURL}/api/viewbooks?search=${searchKey}`,"",reqHeader)

}

//view books landing page

export const viewBookLandingAPI=async()=>{

    return await commonAPI('GET',`${serverURL}/api/viewlandingbooks`,"","")

}

//Get a book in  viewbook page

export const getABookAPI=async(id,reqHeader)=>{

    return await commonAPI('GET',`${serverURL}/api/getABook/${id}`,"",reqHeader)

}


//user profile updation

export const updateUserProfileAPI=async(id,reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${serverURL}/api/updateprofile/${id}`,reqBody,reqHeader)

}

//GET :get all book :admin side
export const getAllBookAPI=async(reqHeader)=>{

    return await commonAPI('GET',`${serverURL}/api/getAllBooks/`,"",reqHeader)

}
//GET all users:admin side
export const getAllUsersAPI=async(reqHeader)=>{

    return await commonAPI('GET',`${serverURL}/api/getAllUsers/`,"",reqHeader)

}

//delete a book :admin side

export const deleteABookAPI=async(id,reqHeader)=>{

    return await commonAPI('DELETE',`${serverURL}/api/deleteABook/${id}`,"",reqHeader)

}

//approve a book
export const approveABookAPI=async(id,reqHeader)=>{

    return await commonAPI('PUT',`${serverURL}/api/approveABook/${id}`,"",reqHeader)
}

//reject a book
export const rejectABookAPI=async(id,reqHeader)=>{

    return await commonAPI('PUT',`${serverURL}/api/rejectABook/${id}`,"",reqHeader)

}

//make payment

export const makePaymentAPI=async(reqBody,reqHeader)=>{

    return await commonAPI('PUT',`${serverURL}/api/makepayment`,reqBody,reqHeader)

}