


// register

import { BASE_URL } from "./baseUrl"
import { commonApi } from "./commonApi"

export const registerAPI = async(user)=>{
    return await commonApi("POST",`${BASE_URL}/user/register`,user,"")
}