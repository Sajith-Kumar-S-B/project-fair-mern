


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


// homeprojects

export const homeProjectAPI = async()=>{

    return await commonApi("GET",`${BASE_URL}/projects/home-projects`,"","")

}


// allprojects

export const allProjectAPI = async(searchKey,reqHeader)=>{

    return await commonApi("GET",`${BASE_URL}/projects/all?search=${searchKey}`,"",reqHeader)

}



// userprojects


export const userProjectAPI = async (reqHeader)=>{
    return await commonApi("GET",`${BASE_URL}/projects/all-projects`,"",reqHeader)
}



// edit project


export const EditProjectAPI = async(projectId,reqBody,reqHeader)=>{
    return await commonApi("PUT",`${BASE_URL}/projects/edit/${projectId}`,reqBody,reqHeader)
}



// delete project


export const deleteProjectAPI = async(projectId,reqHeader)=>{
    return await commonApi("DELETE",`${BASE_URL}/projects/remove/${projectId}`,{},reqHeader)
}



// edit user


export const editUserAPI = async (reqBody,reqHeader)=>{

    return await commonApi("PUT",`${BASE_URL}/user/edit`,reqBody,reqHeader)
}