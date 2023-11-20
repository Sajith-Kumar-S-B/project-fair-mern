


import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"

// register

export const registerAPI = async(user)=>{
    return await commonApi("POST",`${BASE_URL}/user/register`,user,"")
}


// login


export const LoginAPI = async(user)=>{
    return await commonApi("POST",`${BASE_URL}/user/login`,user,"")
}


// add project


export const AddProjectAPI = async(reqBody,reqHeader)=>{
    return await commonApi("POST",`${BASE_URL}/projects/add`,reqBody,reqHeader)
}
