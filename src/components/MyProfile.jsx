import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import userImg from  '../Assets/147142.png'
import Collapse from 'react-bootstrap/Collapse';
import { BASE_URL } from '../services/baseUrl';

import { toast } from 'react-toastify';
import { editUserAPI } from '../services/allAPI';
function MyProfile() {
  const [open, setOpen] = useState(false);
  const [userProfile,setUserProfile] = useState({
   username:"",email:"",password:"", profile:"",github:"",linkedin:""
  })
  const [existingImage,setExistingImage] = useState("")
  const [preview,setPreview] = useState("")

  useEffect(()=>{
    const user = JSON.parse(sessionStorage.getItem("registeredUser"))
 
    setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,profile:"",gitHub:user.github,linkedin:user.linkedin})
     setExistingImage(user.profile)
   
  },[open])

  useEffect(()=>{
if(userProfile.profile){
setPreview(URL.createObjectURL(userProfile.profile))
}else{
  setPreview("")
}
  },[userProfile.profile])


const handleProfileUpdate = async (e)=>{
  e.preventDefault()
  const {username,email,password,profile,
  github,linkedin} = userProfile

  if(!github || !linkedin){
    toast.info('please add profile details')
    
    
  }else{
    const reqBody = new FormData()
    reqBody.append("username",username)
    reqBody.append("email",email)
    reqBody.append("password",password)
    reqBody.append("github",github)
    reqBody.append("linkedin",linkedin)
preview ? reqBody.append("profileImage",profile): reqBody.append("profileImage",existingImage)
const token =  sessionStorage.getItem("token")
if(preview){
  const reqHeader = {
    "Content-Type":"multipart/form-data",
    "Authorization":`Bearer ${token}`
  }
  const res = await editUserAPI(reqBody,reqHeader)

  if(res.status===200){
     setOpen(!open)
     sessionStorage.setItem("registeredUser",JSON.stringify(res.data))
  }else{
    setOpen(!open)
    console.log(res);
    console.log(res.response.data);

  
  }

}else{
  const reqHeader = {
    "Content-Type":"application/json",
    "Authorization":`Bearer ${token}`
  }
}
  }

 

}


  return (
    <div   className='card shadow p-5'>
        <div className='d-flex justify-content-between align-items-center'>
            <h3 style={{textTransform:'none'}}>My Profile</h3>
            <div onClick={() => setOpen(!open)} className='bg-light px-2 rounded text-success'><i className="fa-solid fa-chevron-down fa-beat-fade"></i></div>
        </div>
        <Collapse in={open} >
          <div className='row'>
              <Form className='mb-3 text-center'>
                 <label className='mb-3' > 
                 <input  onChange={e=>setUserProfile({...userProfile,profile:e.target.files[0]})}  style={{display:'none'}} type="file" />
                 {existingImage !==""?<img className='p-4'  width={'100%'} src={preview?preview: `${BASE_URL}/uploads/${existingImage}`} alt="" />:<img className='p-4'  width={'100%'} src={preview?preview: userImg} alt="" />}
                 </label>
              <Form.Control value={userProfile.github}  onChange={e=>setUserProfile({...userProfile,github:e.target.value})} className='mb-3'  type="text" placeholder="GitHub Link" />
              <Form.Control value={userProfile.linkedin}  onChange={e=>setUserProfile({...userProfile,linkedin:e.target.value})} className='mb-3' type="text" placeholder="Linkedin Link" />
                      <button type='submit' className='w-100 border-0 bg-dark py-2 text-light rounded' onClick={handleProfileUpdate}>Update</button>
              </Form>
          </div>
        </Collapse>
    </div>
  )
}

export default MyProfile