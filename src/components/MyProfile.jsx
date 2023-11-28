import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import userImg from  '../Assets/147142.png'
import Collapse from 'react-bootstrap/Collapse';
function MyProfile() {
  const [open, setOpen] = useState(false);
  const [profile,setProfile] = useState({
    profileImage:"",gitHub:"",linkedin:""
  })
  const [preview,setPreview] = useState("")

  return (
    <div   className='card shadow p-5'>
        <div className='d-flex justify-content-between align-items-center'>
            <h3 style={{textTransform:'none'}}>My Profile</h3>
            <div onClick={() => setOpen(!open)} className='bg-light px-2 rounded text-success'><i className="fa-solid fa-chevron-down fa-beat-fade"></i></div>
        </div>
        <Collapse in={open} >
          <div className='row'>
              <Form className='mb-3 text-center'>
                 <label className='mb-3' htmlFor='profile'> 
                 <input  onChange={e=>setProfile({...profile,profileImage:e.target.files[0]})} id='profile' style={{display:'none'}} type="file" />
                 <img className='p-4'  width={'100%'} src={userImg} alt="" />
                 </label>
              <Form.Control value={profile.title}  onChange={e=>setProfile({...profile,title:e.target.value})} className='mb-3'  type="text" placeholder="GitHub Link" />
              <Form.Control className='mb-3' type="text" placeholder="Linkedin Link" />
      
              </Form>
          </div>
        </Collapse>
    </div>
  )
}

export default MyProfile