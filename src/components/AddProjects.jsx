import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import {toast} from 'react-toastify'
import { AddProjectAPI } from '../services/allAPI';
import { addProjectResponseContext } from '../Contexts/ContextShare';

function AddProjects() {

  const {addProjectResponse,setAddProjectResponse}= useContext(addProjectResponseContext)
    const [show, setShow] = useState(false);
  const [projectDetails,setProjectDetails] = useState({
    title:"",languages:"",overview:"",gitHub:"",website:"",projectImage:""
  })
  const [preview,setPreview] = useState("")
  const [token,setToken] = useState("")
    const handleClose = () =>
    { setShow(false);
    setProjectDetails({ title:"",languages:"",overview:"",gitHub:"",website:"",projectImage:""})
    setPreview("")
    }
    const handleShow = () => setShow(true);

useEffect(()=>{
  if(projectDetails.projectImage){
    setPreview(URL.createObjectURL(projectDetails.projectImage))
  }
},[projectDetails.projectImage])

useEffect(()=>{
        if(sessionStorage.getItem("token")){
          setToken(sessionStorage.getItem("token"))
        }else{
          setToken("")
        }
},[])

   


    const handleAdd = async (e)=>{
      e.preventDefault()

   const {title,languages,overview,gitHub,website,projectImage} = projectDetails

   if(!title || !languages || !overview || !gitHub || !website || !projectImage){
    toast.info("Please fill the details")
   }else{

    const reqBody = new FormData()
    reqBody.append("title",title)
    reqBody.append("languages",languages)
    reqBody.append("overview",overview)
    reqBody.append("gitHub",gitHub)
    reqBody.append("website",website)
    reqBody.append("projectImage",projectImage)

    if(token){
      const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`
      }

    try{  const result = await AddProjectAPI(reqBody,reqHeader)
       if(result.status ===200){
        handleClose()
        setAddProjectResponse(result.data)
       }else{
        console.log(result);
        console.log(result.response.data);
        toast.error("Failed to add project. Please try again.");
       }
      }catch(err){
        console.error("Error adding project:", err);
        toast.error("An error occurred while adding the project. Please try again.");
      }

    }
    
   }


    }
  return (
    <>

<Button style={{textTransform:'none'}} className='rounded-5' onClick={handleShow}>
        Add Projects
      </Button>
       <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <div className='row'>
            <div className='col-lg-6'>
            <label className='text-center mt-5'> 
        <input onChange={e=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}  style={{display:'none'}} type="file" />
               <img className=' img-fluid'  width={'100%'} src={preview?preview:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Icons8_flat_add_image.svg/512px-Icons8_flat_add_image.svg.png"} alt="" /></label>
            </div>
            <div className='col-lg-6'>
            <Form className='mb-3 text-center'>
                
              <Form.Control value={projectDetails.title}  onChange={e=>setProjectDetails({...projectDetails,title:e.target.value})} className='mb-3 rounded'  type="text" placeholder="Project Title" />
              <Form.Control value={projectDetails.languages}  onChange={e=>setProjectDetails({...projectDetails,languages:e.target.value})} className='mb-3 rounded' type="text" placeholder="Languages Used" />
              <Form.Control value={projectDetails.gitHub}  onChange={e=>setProjectDetails({...projectDetails,gitHub:e.target.value})} className='mb-3 rounded'  type="text" placeholder="GitHub Link" />

              <Form.Control value={projectDetails.website}  onChange={e=>setProjectDetails({...projectDetails,website:e.target.value})} className='mb-3 rounded' type="text" placeholder="Website Link" />
              <Form.Control value={projectDetails.overview}  onChange={e=>setProjectDetails({...projectDetails,overview:e.target.value})} className='mb-3 rounded' type="text" placeholder="Project Overview" />

      
              </Form>


            </div>

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button type='submit' onClick={handleAdd} variant="primary">Save</Button>
        </Modal.Footer>
      </Modal>
      </>
  )
}

export default AddProjects